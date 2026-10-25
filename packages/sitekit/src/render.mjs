// Renderer unico: sito (JSON) -> HTML statico. Zero JavaScript inviato al browser, CSS inline (~3 KB), nessuna risorsa di terzi.
import { esc, digits } from './html.mjs'
import { UI, DAYS } from './i18n.mjs'
import { resolveTheme, themeVars } from './theme.mjs'
import { buildJsonLd, jsonLdScript } from './jsonld.mjs'
import { privacyHtml, cookieHtml, consentText, CONSENT_VERSION } from './legal.mjs'
import { validateSite } from './schema.mjs'

const CSS = `*,*::before,*::after{box-sizing:border-box}html{-webkit-text-size-adjust:100%}body{margin:0;font:1rem/1.6 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;background:var(--bg);color:var(--fg)}
img{max-width:100%;height:auto;display:block}a{color:var(--link)}h1,h2,h3{line-height:1.2;margin:0 0 .5em}h1{font-size:clamp(1.9rem,6vw,3rem)}h2{font-size:clamp(1.4rem,3.5vw,1.9rem)}h3{font-size:1.1rem}p{margin:0 0 1em}
.w{max-width:64rem;margin:0 auto;padding:0 16px}.skip{position:absolute;left:-999px}.skip:focus{left:8px;top:8px;background:var(--surface);padding:12px;z-index:9}
header.top{border-bottom:1px solid var(--border);background:var(--surface)}header.top .w{display:flex;flex-wrap:wrap;gap:4px 16px;align-items:center;justify-content:space-between;padding-top:8px;padding-bottom:8px}
.brand{font-weight:700;font-size:1.1rem;text-decoration:none;color:var(--fg);min-height:44px;display:inline-flex;align-items:center}nav ul{list-style:none;display:flex;flex-wrap:wrap;gap:0 4px;margin:0;padding:0}nav a{display:inline-flex;align-items:center;min-height:44px;padding:0 10px;text-decoration:none;color:var(--link)}
section{padding:40px 0;border-bottom:1px solid var(--border)}.hero{padding:56px 0;background:var(--surface)}.lead{font-size:1.15rem;color:var(--muted);max-width:40rem}
.btns{display:flex;flex-wrap:wrap;gap:12px;margin-top:20px}.btn{display:inline-flex;align-items:center;justify-content:center;min-height:44px;padding:0 20px;border-radius:10px;font-weight:700;text-decoration:none;border:2px solid var(--accent);background:var(--accent);color:var(--on-accent);font:inherit;font-weight:700;cursor:pointer}.btn.alt{background:transparent;color:var(--link);border-color:var(--border)}
:focus-visible{outline:3px solid var(--focus);outline-offset:2px}.grid{display:grid;gap:16px;grid-template-columns:1fr}.card{background:var(--surface);border:1px solid var(--border);border-radius:14px;padding:18px}.card p{margin:0}.price{font-weight:700;white-space:nowrap}
.gal{display:grid;gap:12px;grid-template-columns:repeat(auto-fill,minmax(150px,1fr))}.gal img{border-radius:10px;width:100%;aspect-ratio:4/3;object-fit:cover}
table{border-collapse:collapse;width:100%;max-width:28rem}th,td{text-align:left;padding:8px 12px 8px 0;border-bottom:1px solid var(--border)}th{font-weight:600}
details{border:1px solid var(--border);border-radius:10px;background:var(--surface);margin-bottom:8px}summary{cursor:pointer;min-height:44px;display:flex;align-items:center;padding:0 14px;font-weight:600}details p{padding:0 14px}
.field{margin-bottom:14px}label{display:block;font-weight:600;margin-bottom:4px}input[type=text],input[type=tel],input[type=email],textarea{width:100%;min-height:44px;padding:10px 12px;border:1px solid var(--muted);border-radius:8px;background:var(--surface);color:var(--fg);font:inherit}textarea{min-height:120px}
.chk{display:flex;gap:10px;align-items:flex-start;min-height:44px}.chk input{width:24px;height:24px;margin-top:4px;flex:none}.chk label{font-weight:400;margin:0;padding:10px 0;flex:1}.hp{position:absolute;left:-9999px;height:0;overflow:hidden}
footer{padding:28px 0;color:var(--muted);font-size:.95rem}footer a{display:inline-flex;align-items:center;min-height:44px;margin-right:12px}.note{font-size:.95rem;color:var(--muted)}
.prev{background:#FDE68A;color:#1F1500;text-align:center;font-weight:700;padding:10px 16px}mark.tbv,mark.tbv .note{background:#FDE68A;color:#1F1500}mark.tbv{border-radius:3px;padding:0 3px}
@media(min-width:720px){.grid.c2{grid-template-columns:1fr 1fr}.grid.c3{grid-template-columns:repeat(3,1fr)}.hero{padding:88px 0}}@media(prefers-reduced-motion:reduce){*{transition:none!important;animation:none!important}}`

const mapsLink = (b) => b.geo ? `https://www.openstreetmap.org/?mlat=${b.geo.lat}&mlon=${b.geo.lng}#map=17/${b.geo.lat}/${b.geo.lng}` : b.address ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent([b.address.street, b.address.postal_code, b.address.city].filter(Boolean).join(' '))}` : null
export const hoursRows = (hours, ui) => hours.map((h) => ({ days: h.days.length > 1 && isRange(h.days) ? `${ui.days[h.days[0]]}–${ui.days[h.days.at(-1)]}` : h.days.map((d) => ui.days[d]).join(', '), time: `${h.opens}–${h.closes}` }))
const isRange = (ds) => { const ix = ds.map((d) => DAYS.indexOf(d)); return ix.every((v, i) => i === 0 || v === ix[i - 1] + 1) }

export function renderSite(site, opts = {}) {
  const v = validateSite(site)
  if (!v.ok) { const e = new Error('sito non valido: ' + v.errors.map((x) => `${x.path}: ${x.msg}`).join('; ')); e.errors = v.errors; throw e }
  // preview = anteprima privata (noindex, evidenzia "da verificare"); export = file per il dominio del CLIENTE (nessun hosting nostro);
  // live = hosting nostro: disattivato in beta e non necessario nel modello "esporta e pubblica sul tuo dominio".
  const mode = opts.mode || 'preview'
  if (mode === 'live' && !opts.publishEnabled) throw new Error('pubblicazione disattivata (beta chiusa): usare mode "preview" o "export"')
  const ui = UI[site.locale], b = site.business, preview = mode === 'preview'
  const formMode = site.lead?.mode === 'form'
  const indexable = !preview && site.seo.indexable === true && site.compliance?.content_reviewed === true && (mode === 'live' || !!opts.baseUrl)
  const flags = new Set(site.compliance?.flags || [])
  const theme = resolveTheme(site.brand?.theme || 'sabbia', site.brand?.accent)
  const base = (opts.baseUrl || '').replace(/\/+$/, '')
  const endpoint = opts.leadEndpoint || `/api/public/sites/${site.id || site.slug}/leads`
  const wa = b.whatsapp || null
  const waHref = wa ? `https://wa.me/${digits(wa)}?text=${encodeURIComponent(ui.wa_msg + `[${site.slug}]`)}` : null
  // Testo che l'AI ha scritto o che l'utente non ha ancora confermato: in anteprima e' evidenziato "da verificare".
  const f = (path, html) => preview && flags.has(path) ? `<mark class="tbv">${html}<span class="note"> (${ui.toVerify})</span></mark>` : html
  const visible = site.sections.filter((s) => s.visible !== false)
  const sid = (s) => `s-${s.id}`
  const navTypes = new Set(['services', 'gallery', 'reviews', 'hours', 'faq', 'contact', 'request', 'about', 'event', 'links'])
  const title = (s, fallback) => esc(s.title || fallback)

  const ctaBtns = (cta) => {
    const out = []
    const mk = { whatsapp: waHref && `<a class="btn" href="${esc(waHref)}" rel="noopener">${ui.whatsapp}</a>`, call: b.phone && `<a class="btn" href="tel:${esc(b.phone.replace(/[^\d+]/g, ''))}">${ui.call} ${esc(b.phone)}</a>`, request: visible.some((s) => s.type === 'request') && `<a class="btn" href="#s-${visible.find((s) => s.type === 'request').id}">${ui.reqTitle}</a>`, directions: mapsLink(b) && `<a class="btn" href="${esc(mapsLink(b))}" rel="noopener">${ui.directions}</a>` }
    const order = [cta || (waHref ? 'whatsapp' : b.phone ? 'call' : 'request'), 'call', 'directions']
    for (const k of order) if (mk[k] && !out.includes(mk[k])) out.push(mk[k])
    return out.slice(0, 2).map((h, i) => i ? h.replace('class="btn"', 'class="btn alt"') : h).join('')
  }

  const R = {
    hero: (s, i) => `<section class="hero" id="${sid(s)}"><div class="w"><h1>${f(`sections.${i}.headline`, esc(s.headline))}</h1>${s.subheadline ? `<p class="lead">${f(`sections.${i}.subheadline`, esc(s.subheadline))}</p>` : ''}<div class="btns">${ctaBtns(s.cta)}</div></div></section>`,
    about: (s, i) => `<section id="${sid(s)}"><div class="w"><h2>${title(s, ui.about)}</h2>${String(s.text).split(/\n{2,}/).map((p) => `<p>${f(`sections.${i}.text`, esc(p))}</p>`).join('')}</div></section>`,
    services: (s, i) => `<section id="${sid(s)}"><div class="w"><h2>${title(s, ui.services)}</h2><div class="grid c2">${s.items.map((it, j) => `<article class="card"><h3>${f(`sections.${i}.items.${j}.name`, esc(it.name))}</h3>${it.description ? `<p>${f(`sections.${i}.items.${j}.description`, esc(it.description))}</p>` : ''}${it.price ? `<p class="price">${f(`sections.${i}.items.${j}.price`, esc(it.price))}</p>` : ''}</article>`).join('')}</div></div></section>`,
    hours: (s) => b.hours?.length ? `<section id="${sid(s)}"><div class="w"><h2>${title(s, ui.hours)}</h2><table><caption class="skip">${ui.hours}</caption><tbody>${hoursRows(b.hours, ui).map((r) => `<tr><th scope="row">${esc(r.days)}</th><td>${esc(r.time)}</td></tr>`).join('')}</tbody></table>${b.hours_note ? `<p class="note">${esc(b.hours_note)}</p>` : ''}</div></section>` : '',
    gallery: (s) => s.items?.length ? `<section id="${sid(s)}"><div class="w"><h2>${title(s, ui.gallery)}</h2><div class="gal">${s.items.map((it) => `<img src="${esc(it.src)}" alt="${esc(it.alt)}" loading="lazy" decoding="async" width="${it.width || 640}" height="${it.height || 480}">`).join('')}</div></div></section>` : '',
    reviews: (s) => s.items?.length ? `<section id="${sid(s)}"><div class="w"><h2>${title(s, ui.reviews)}</h2><div class="grid c2">${s.items.map((it) => `<figure class="card" style="margin:0"><blockquote style="margin:0 0 .5em">${esc(it.text)}</blockquote><figcaption class="note">${esc(it.author)} — ${it.source_url ? `<a href="${esc(it.source_url)}" rel="noopener nofollow">${esc(it.source)}</a>` : esc(it.source)}</figcaption></figure>`).join('')}</div></div></section>` : '',
    contact: (s) => `<section id="${sid(s)}"><div class="w"><h2>${title(s, ui.contact)}</h2><div class="grid c2"><div>${b.address ? `<p><strong>${ui.address}</strong><br>${esc(b.address.street)}<br>${esc(b.address.postal_code)} ${esc(b.address.city)} (${esc((b.address.province || '').toUpperCase())})</p>` : ''}${(b.service_area || []).length ? `<p><strong>${ui.area}</strong><br>${esc(b.service_area.join(', '))}</p>` : ''}</div><div>${b.phone ? `<p><strong>${ui.phone}</strong><br><a href="tel:${esc(b.phone.replace(/[^\d+]/g, ''))}">${esc(b.phone)}</a></p>` : ''}${b.email ? `<p><strong>${ui.email}</strong><br><a href="mailto:${esc(b.email)}">${esc(b.email)}</a></p>` : ''}${mapsLink(b) ? `<p><a class="btn alt" href="${esc(mapsLink(b))}" rel="noopener">${ui.openMap}</a></p>` : ''}</div></div></div></section>`,
    map: () => '', // la mappa e' un link nella sezione contatti: nessun iframe, nessuna richiesta a terzi
    faq: (s, i) => `<section id="${sid(s)}"><div class="w"><h2>${title(s, ui.faq)}</h2>${s.items.map((it, j) => `<details><summary>${f(`sections.${i}.items.${j}.q`, esc(it.q))}</summary><p>${f(`sections.${i}.items.${j}.a`, esc(it.a))}</p></details>`).join('')}</div></section>`,
    request: (s) => formMode ? `<section id="${sid(s)}"><div class="w"><h2>${title(s, ui.reqTitle)}</h2><p class="lead">${ui.reqLead}</p>
<form method="post" action="${esc(endpoint)}" style="max-width:34rem"><input type="hidden" name="consent_version" value="${CONSENT_VERSION}"><input type="hidden" name="site" value="${esc(site.id || site.slug)}">
<div class="hp" aria-hidden="true"><label for="website">Non compilare</label><input type="text" id="website" name="website" tabindex="-1" autocomplete="off"></div>
<div class="field"><label for="f-name">${ui.fName}</label><input type="text" id="f-name" name="name" required maxlength="80" autocomplete="name"></div>
<div class="field"><label for="f-phone">${ui.fPhone}</label><input type="tel" id="f-phone" name="phone" maxlength="20" autocomplete="tel"></div>
<div class="field"><label for="f-email">${ui.fEmail}</label><input type="email" id="f-email" name="email" maxlength="120" autocomplete="email"><p class="note" id="need">${ui.fNeedOne}</p></div>
<div class="field"><label for="f-msg">${ui.fMsg}</label><textarea id="f-msg" name="message" required maxlength="1000"></textarea></div>
<div class="chk"><input type="checkbox" id="f-consent" name="consent" value="1" required><label for="f-consent">${esc(consentText(b.name, site.locale))} <a href="privacy/">${ui.privacy}</a></label></div>
<div class="chk"><input type="checkbox" id="f-mkt" name="marketing" value="1"><label for="f-mkt">${esc(ui.fMarketing.replace('{name}', b.name))}</label></div>
<p><button class="btn" type="submit">${ui.fSend}</button></p></form></div></section>` : `<section id="${sid(s)}"><div class="w"><h2>${title(s, ui.reqTitle)}</h2><p class="lead">${ui.linksLead}</p><div class="btns">${[waHref && `<a class="btn" href="${esc(waHref)}" rel="noopener">${ui.whatsapp}</a>`, b.email && `<a class="btn alt" href="mailto:${esc(b.email)}?subject=${encodeURIComponent(ui.mailSubject + ' ' + b.name)}">${ui.writeEmail}</a>`, b.phone && `<a class="btn alt" href="tel:${esc(b.phone.replace(/[^\d+]/g, ''))}">${ui.call}</a>`].filter(Boolean).join('')}</div></div></section>`,
    event: (s, i) => `<section id="${sid(s)}"><div class="w"><h2>${title(s, ui.event)}</h2><p><strong>${ui.when}:</strong> <time datetime="${esc(s.starts_at)}">${esc(new Date(s.starts_at).toLocaleString(site.locale === 'en' ? 'en-GB' : 'it-IT', { dateStyle: 'full', timeStyle: 'short', timeZone: 'Europe/Rome' }))}</time></p>${s.place ? `<p><strong>${ui.where}:</strong> ${esc(s.place)}</p>` : ''}${s.text ? `<p>${f(`sections.${i}.text`, esc(s.text))}</p>` : ''}</div></section>`,
    links: (s) => `<section id="${sid(s)}"><div class="w"><div class="btns" style="flex-direction:column;max-width:28rem">${s.items.map((it) => `<a class="btn alt" href="${esc(it.url)}" rel="noopener nofollow">${esc(it.label)}</a>`).join('')}</div></div></section>`,
  }
  const body = visible.map((s) => R[s.type](s, site.sections.indexOf(s))).join('\n')
  const nav = visible.filter((s) => navTypes.has(s.type) && !(s.type === 'hours' && !b.hours?.length)).map((s) => `<li><a href="#${sid(s)}">${esc(s.title || ui[{ services: 'services', gallery: 'gallery', reviews: 'reviews', hours: 'hours', faq: 'faq', contact: 'contact', request: 'reqTitle', about: 'about', event: 'event', links: 'contact' }[s.type]])}</a></li>`).join('')
  const reg = site.compliance?.regulated
  const disclaimer = reg === 'health' ? ui.disclaimerMed : reg === 'legal' || reg === 'finance' ? ui.disclaimerPro : ''
  const vat = site.compliance?.controller?.vat_id || b.vat_id
  const canonical = base ? `${base}/` : ''
  const robots = indexable ? 'index,follow' : 'noindex,nofollow'
  const page = (inner, { t, d, path = '' } = {}) => `<!doctype html>
<html lang="${site.locale}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(t || site.seo.title)}</title><meta name="description" content="${esc(d || site.seo.description)}"><meta name="robots" content="${robots}">
${canonical && indexable ? `<link rel="canonical" href="${esc(canonical + path)}">` : ''}<meta property="og:title" content="${esc(t || site.seo.title)}"><meta property="og:description" content="${esc(d || site.seo.description)}"><meta property="og:type" content="website"><meta property="og:locale" content="${site.locale === 'en' ? 'en_GB' : 'it_IT'}">
<meta name="color-scheme" content="${theme.scheme}"><style>:root{${themeVars(theme)}}${CSS}</style>${path === '' ? jsonLdScript(buildJsonLd(site, canonical || undefined)) : ''}</head>
<body>${preview ? `<div class="prev" role="status">${ui.preview}</div>` : ''}<a class="skip" href="#main">${ui.skip}</a>
<header class="top"><div class="w"><a class="brand" href="${path ? '../' : './'}">${esc(b.name)}</a><nav aria-label="${ui.menu}"><ul>${path ? '' : nav}</ul></nav></div></header>
<main id="main">${inner}</main>
<footer><div class="w">${disclaimer ? `<p>${disclaimer}</p>` : ''}<p>${esc(site.compliance?.controller?.name || b.legal_name || b.name)}${vat ? ` — ${ui.vat} ${esc(vat)}` : ''}${b.address ? ` — ${esc(b.address.street)}, ${esc(b.address.city)}` : ''}</p>
<p><a href="${path ? '../' : ''}privacy/">${ui.privacy}</a><a href="${path ? '../' : ''}cookie/">${ui.cookies}</a><a href="${esc(opts.reportUrl || '/segnala/')}?site=${esc(site.slug)}" rel="nofollow">${ui.report}</a>${site.brand?.badge === false && opts.allowRemoveBadge ? '' : `<a href="https://get-scala.com/?ref=site-${esc(site.slug)}" rel="nofollow noopener">${ui.madeWith}</a>`}</p></div></footer></body></html>`

  const files = {
    'index.html': page(body),
    'privacy/index.html': page(`<section><div class="w">${privacyHtml(site, formMode)}</div></section>`, { t: `${ui.privacy} — ${b.name}`, d: ui.privacy, path: 'privacy/' }),
    'cookie/index.html': page(`<section><div class="w">${cookieHtml()}</div></section>`, { t: `${ui.cookies} — ${b.name}`, d: ui.cookies, path: 'cookie/' }),
    'robots.txt': indexable && base ? `User-agent: *\nAllow: /\nSitemap: ${base}/sitemap.xml\n` : 'User-agent: *\nDisallow: /\n',
    '_headers': `/*\n  X-Robots-Tag: ${robots}\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n  Permissions-Policy: camera=(), microphone=(), geolocation=()\n  Content-Security-Policy: default-src 'none'; img-src 'self' data:; style-src 'unsafe-inline'; form-action ${formMode ? "'self' " + (endpoint.startsWith('http') ? new URL(endpoint).origin : '') : "'none'"}; base-uri 'none'; frame-ancestors 'none'\n`,
  }
  if (indexable && base) files['sitemap.xml'] = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${esc(base)}/</loc></url><url><loc>${esc(base)}/privacy/</loc></url></urlset>\n`
  return { files, meta: { indexable, mode, theme: site.brand?.theme || 'sabbia', bytes: new TextEncoder().encode(files['index.html']).length } }
}
