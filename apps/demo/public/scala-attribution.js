/*!
 * scala-attribution.js — attribuzione al primo contatto per TUTTI i siti S.C.A.L.A. (25/10/2026)
 *
 * Cosa fa
 *   1. Legge dalla pagina: utm_*, ref (solo codici Ambassador PREFISSO-XXXXXX; altrimenti etichetta di provenienza),
 *      gclid/fbclid (si conserva solo il TIPO, mai il valore), plan, vertical, lang, referrer (solo host + percorso,
 *      senza query), pagina d'ingresso (host + percorso, senza query), sito d'ingresso.
 *   2. Quando l'utente clicca (o apre in nuova scheda) un link verso app.get-scala.com, aggiunge i parametri al link
 *      (_st sito, _lp pagina d'ingresso, _rh/_ru referrer, _ft primo contatto, _ci tipo click id + utm_*, ref, plan, lang).
 *      I parametri che stanno gia' nel link NON si sovrascrivono (un CTA con ?plan=scale resta scale).
 *   3. Il lato app (src/lib/attribution.ts) li legge e li manda al backend (verify-otp / Google) che li valida in allowlist.
 *
 * Consenso (decisione 14/10/2026: default denied, banner Accetta/Rifiuta, Umami senza cookie)
 *   - I parametri nell'URL del link non richiedono cookie ne' storage.
 *   - Lo storage (sessionStorage, mai cookie, mai localStorage) si usa SOLO se localStorage['scala_cookie_consent']
 *     contiene analytics === true (oppure localStorage['cookie-consent'] === 'all', banner di vetrina/blog). Senza consenso l'attribuzione vive in memoria: sopravvive alla navigazione client-side
 *     (Next.js/SPA) ma non a un ricaricamento completo. E' una scelta voluta.
 *   - Nessun fornitore terzo, nessuna richiesta di rete.
 *
 * Uso: <script defer src="/scala-attribution.js"></script>   (copiare il file nella cartella pubblica del sito)
 * Opzioni (attributi data- sullo <script>): data-site="blog" forza il nome del sito d'ingresso.
 * Test: scala-ai-os/src/__tests__/scala-attribution-snippet.test.ts carica QUESTO file.
 */
(function (win, doc) {
  'use strict';
  if (win.ScalaAttribution) return;

  var KEY = 'scala_attr_v2';
  var CONSENT_KEY = 'scala_cookie_consent';
  var APP_HOSTS = { 'app.get-scala.com': 1 };
  var AMBASSADOR = /^[A-Za-z0-9]{1,4}-[A-Za-z0-9]{4,10}$/;
  var SITES = [
    [/^get-scala\.com$/, 'vetrina'], [/^blog\.get-scala\.com$/, 'blog'], [/^score\.get-scala\.com$/, 'score'],
    [/^academy\.get-scala\.com$/, 'academy'], [/^analyze\.get-scala\.com$/, 'analyze'], [/^outbound\.get-scala\.com$/, 'outbound'],
    [/^sites?\.get-scala\.com$/, 'sites'], [/^relomap\.app$/, 'relomap'], [/^landiq\./, 'landiq']
  ];

  function cut(v, n) { return (v == null ? '' : String(v)).replace(/[\u0000-\u001f\u007f]/g, '').trim().slice(0, n); }
  function bareHost(h) { return String(h || '').toLowerCase().replace(/^www\./, ''); }
  function siteOf(host) {
    for (var i = 0; i < SITES.length; i++) if (SITES[i][0].test(host)) return SITES[i][1];
    return '';
  }
  // Due banner, due chiavi: app/Score usano scala_cookie_consent = {analytics, marketing}; vetrina e blog usano
  // cookie-consent = 'all' | 'necessary'. Solo "analytics true" / "all" abilitano lo storage.
  function analyticsConsent() {
    try {
      var r = win.localStorage.getItem(CONSENT_KEY);
      if (r && JSON.parse(r).analytics === true) return true;
      return win.localStorage.getItem('cookie-consent') === 'all';
    } catch (e) { return false; }
  }

  function read(loc, referrer) {
    var q = new URLSearchParams(loc.search || '');
    var a = {
      utm_source: cut(q.get('utm_source'), 100), utm_medium: cut(q.get('utm_medium'), 100), utm_campaign: cut(q.get('utm_campaign'), 200),
      utm_term: cut(q.get('utm_term'), 200), utm_content: cut(q.get('utm_content'), 200),
      ref: '', plan: cut(q.get('plan'), 30).toLowerCase(), vertical: cut(q.get('vertical'), 40).toLowerCase(), lang: cut(q.get('lang'), 5).toLowerCase(),
      ci: '', st: '', lp: '', rh: '', ru: '', ft: ''
    };
    var refRaw = cut(q.get('ref') || q.get('invited_by'), 40);
    if (AMBASSADOR.test(refRaw)) a.ref = refRaw.toUpperCase();
    else if (refRaw && !a.utm_source) { a.utm_source = refRaw.toLowerCase(); if (!a.utm_medium) a.utm_medium = 'cta'; }
    if (q.get('gclid')) a.ci = 'gclid'; else if (q.get('fbclid')) a.ci = 'fbclid';
    var host = bareHost(loc.hostname);
    var script = doc.currentScript;
    a.st = (script && script.getAttribute && script.getAttribute('data-site')) || siteOf(host) || '';
    a.lp = (host + (loc.pathname || '/')).slice(0, 500);
    var rh = '', ru = '';
    try {
      if (referrer) { var u = new URL(referrer); rh = bareHost(u.hostname); ru = (rh + u.pathname).slice(0, 500); }
    } catch (e) { /* referrer non valido */ }
    if (rh && rh !== host) { a.rh = rh; a.ru = ru; }
    a.ft = String(Math.floor(Date.now() / 1000));
    return a;
  }

  function hasSignal(a) {
    return !!(a && (a.utm_source || a.utm_medium || a.utm_campaign || a.ref || a.rh || a.ci || a.vertical || a.plan));
  }

  var current = null;
  function load() {
    try { var r = win.sessionStorage.getItem(KEY); return r ? JSON.parse(r) : null; } catch (e) { return null; }
  }
  function persist() {
    if (!current || !analyticsConsent()) return;
    try { win.sessionStorage.setItem(KEY, JSON.stringify(current)); } catch (e) { /* storage bloccato */ }
  }

  function capture() {
    var fresh = read(win.location, doc.referrer);
    var stored = current || load();
    // Primo contatto: una pagina successiva senza segnale non sostituisce quello gia' catturato.
    if (stored && hasSignal(stored) && !hasSignal(fresh)) { stored.lp = stored.lp || fresh.lp; current = stored; }
    else if (stored && hasSignal(stored) && hasSignal(fresh) && stored.ft && stored.ft <= fresh.ft && !new URLSearchParams(win.location.search).get('_ft')) current = stored;
    else current = fresh;
    persist();
    return current;
  }

  var PARAMS = [['utm_source', 'utm_source'], ['utm_medium', 'utm_medium'], ['utm_campaign', 'utm_campaign'], ['utm_term', 'utm_term'],
    ['utm_content', 'utm_content'], ['ref', 'ref'], ['plan', 'plan'], ['vertical', 'vertical'], ['lang', 'lang'],
    ['_st', 'st'], ['_lp', 'lp'], ['_rh', 'rh'], ['_ru', 'ru'], ['_ci', 'ci'], ['_ft', 'ft']];

  function decorate(href) {
    var a = current || capture();
    var u;
    try { u = new URL(href, win.location.href); } catch (e) { return href; }
    if (!APP_HOSTS[bareHost(u.hostname)]) return href;
    for (var i = 0; i < PARAMS.length; i++) {
      var v = a[PARAMS[i][1]];
      if (v && !u.searchParams.has(PARAMS[i][0])) u.searchParams.set(PARAMS[i][0], v);
    }
    return u.toString();
  }

  function onPointer(ev) {
    var el = ev.target && ev.target.closest ? ev.target.closest('a[href]') : null;
    if (!el) return;
    if (ev.type === 'keydown' && ev.key !== 'Enter') return;
    var href = el.getAttribute('href');
    if (!href || href.charAt(0) === '#') return;
    var next = decorate(href);
    if (next !== href && next !== el.href) el.setAttribute('href', next);
  }

  capture();
  ['mousedown', 'touchstart', 'click', 'auxclick', 'keydown', 'contextmenu'].forEach(function (t) {
    doc.addEventListener(t, onPointer, { capture: true, passive: true });
  });
  // Il banner puo' concedere il consenso dopo il primo caricamento: riprova a persistere.
  win.addEventListener('storage', persist);
  win.addEventListener('scala:consent', persist);

  win.ScalaAttribution = { get: function () { return current || capture(); }, decorate: decorate, _read: read };
})(window, document);
