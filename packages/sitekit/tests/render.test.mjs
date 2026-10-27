import test from 'node:test'
import assert from 'node:assert/strict'
import zlib from 'node:zlib'
import { SAMPLES } from '../src/samples.mjs'
import { renderSite, auditHtml, validateSite, buildJsonLd, TEMPLATES, moderate, canPublish, checkInvention, draftSite, extractFromText, parseMapsUrl } from '../src/index.mjs'

test('10 template, 10 esempi, ognuno valido', () => {
  assert.equal(TEMPLATES.length, 10); assert.equal(SAMPLES.length, 10)
  for (const s of SAMPLES) { const v = validateSite(s); assert.ok(v.ok, s.template + ' ' + JSON.stringify(v.errors)) }
})
for (const s of SAMPLES) test(`render ${s.template}: audit, peso, noindex, nessun JS`, () => {
  const r = renderSite(s, { mode: 'preview' })
  for (const [p, html] of Object.entries(r.files)) if (p.endsWith('.html')) { const a = auditHtml(html, { page: p }); assert.deepEqual(a.issues.filter((i) => i.sev === 'error'), [], p) }
  const html = r.files['index.html']
  assert.ok(Buffer.byteLength(html) < 40 * 1024); assert.ok(zlib.gzipSync(html).length < 8 * 1024, 'gzip < 8 KB')
  assert.match(html, /<meta name="robots" content="noindex,nofollow">/); assert.match(r.files['robots.txt'], /Disallow: \//)
  assert.ok(!/<script(?![^>]*ld\+json)/.test(html)); assert.equal(r.files['sitemap.xml'], undefined)
  assert.match(html, /ANTEPRIMA/)
})
test('schema.org: tipo, orari e indirizzo vengono dai campi; niente recensioni/rating', () => {
  const [n] = buildJsonLd(SAMPLES[0], 'https://x.invalid')
  assert.equal(n['@type'], 'Restaurant'); assert.equal(n.address.addressLocality, 'Trento'); assert.equal(n.telephone, '+390000000000')
  assert.ok(n.openingHoursSpecification.length === 2 && n.openingHoursSpecification[0].dayOfWeek.includes('Tuesday'))
  assert.ok(!('aggregateRating' in n) && !('review' in n))
})
test('live rifiutato in beta e senza revisione; con revisione serve il flag di pubblicazione', () => {
  const s = structuredClone(SAMPLES[0])
  assert.throws(() => renderSite(s, { mode: 'live' }), /disattivata/)
  const g = canPublish(s, {}); assert.equal(g.allowed, false); assert.ok(g.reasons.some((r) => /beta chiusa/.test(r)))
  const ok = structuredClone(s); ok.compliance.content_reviewed = true; ok.compliance.flags = []
  assert.equal(canPublish(ok, { PUBLISH_ENABLED: 'true', USER_DOMAIN: 'x.invalid' }).allowed, true)
  const live = renderSite({ ...ok, seo: { ...ok.seo, indexable: true }, status: 'live' }, { mode: 'live', publishEnabled: true, baseUrl: 'https://x.invalid' })
  assert.match(live.files['index.html'], /index,follow/); assert.ok(live.files['sitemap.xml'])
})
test('indicizzabile solo se content_reviewed', () => {
  const s = structuredClone(SAMPLES[0]); s.seo.indexable = true
  assert.ok(validateSite(s).errors.some((e) => e.path === 'seo.indexable'))
})
test('recensioni: senza fonte o consenso dell’autore il sito non e’ valido', () => {
  const s = structuredClone(SAMPLES[0]); s.sections.push({ id: 'rev', type: 'reviews', items: [{ author: 'A', text: 'Bello' }] })
  const e = validateSite(s).errors.map((x) => x.path); assert.ok(e.some((p) => p.endsWith('.source')) && e.some((p) => p.endsWith('.consent')))
})
test('escape: nessun tag dall’utente arriva nell’HTML', () => {
  const s = structuredClone(SAMPLES[0]); s.business.name = 'Bar & "Co"'; s.sections[0].headline = "Ciao 'a tutti' &amp;"
  const html = renderSite(s).files['index.html']; assert.ok(html.includes('Bar &amp; &quot;Co&quot;') && html.includes('&amp;amp;'))
  const bad = structuredClone(SAMPLES[0]); bad.sections[0].headline = '<img src=x onerror=alert(1)>'; assert.throws(() => renderSite(bad), /non usare/)
})
test('galleria: solo file caricati con alt (niente hotlink)', () => {
  const s = structuredClone(SAMPLES[0]); s.sections.push({ id: 'g', type: 'gallery', items: [{ src: 'https://images.unsplash.com/x.jpg', alt: 'x' }] })
  assert.ok(validateSite(s).errors.some((e) => e.path.endsWith('.src')))
  s.sections.at(-1).items = [{ src: 'assets/sala.webp', alt: 'La sala' }]; assert.ok(validateSite(s).ok)
  assert.ok(renderSite(s).files['index.html'].includes('src="assets/sala.webp"'))
})
test('audit: intercetta tracker, font di terzi, h1 doppio, campo senza etichetta', () => {
  const bad = '<!doctype html><html lang="it"><head><title>Titolo ok</title><meta name="description" content="x"><link href="https://fonts.googleapis.com/css" rel="stylesheet"><script src="https://www.googletagmanager.com/gtag/js"></script></head><body><h1>a</h1><h1>b</h1><input id="q"><img src="a.jpg"></body></html>'
  const msgs = auditHtml(bad).issues.map((i) => i.msg).join('|')
  for (const k of ['JavaScript', 'tracker', 'terzi', 'un h1', 'etichetta', 'alt']) assert.match(msgs, new RegExp(k))
})
test('moderazione: phishing, categorie vietate, URL pericolosi; settori regolati = revisione umana', () => {
  const s = structuredClone(SAMPLES[0]); s.sections[0].subheadline = 'Verifica la tua identita’ e inserisci la password'; s.sections.push({ id: 'l', type: 'links', items: [{ label: 'x', url: 'https://bit.ly/abc' }, { label: 'y', url: 'https://xn--pypal-4ve.com' }] })
  const m = moderate(s); assert.equal(m.blocked, true); const rules = m.blocked_reasons.map((r) => r.rule).join('|'); assert.match(rules, /phishing/); assert.match(rules, /accorciato/); assert.match(rules, /punycode/)
  const c = structuredClone(SAMPLES[0]); c.sections[0].subheadline = 'Il casinò online piu’ sicuro'; assert.match(moderate(c).blocked_reasons[0].rule, /categoria/)
  assert.equal(moderate(SAMPLES[4]).needs_human, true); assert.equal(moderate(SAMPLES[0]).blocked, false)
})
test('anti-invenzione: numeri, anni e vanti non presenti nei fatti vengono scartati', () => {
  const corpus = 'trattoria in via roma 5, aperta dalle 12:00'
  assert.equal(checkInvention('Aperti dalle 12:00 in via Roma 5', corpus).ok, true)
  const bad = checkInvention('Dal 1985 il migliore ristorante, oltre 30 anni di esperienza', corpus); assert.equal(bad.ok, false); assert.ok(bad.found.length >= 3)
})
test('bozza: LLM che inventa viene scartato, il resto resta; tutto cio’ che scrive l’AI e’ "da verificare"', async () => {
  const facts = { name: 'Bar Prova', phone: '+39 000 0000000', address: { street: 'Via A 1', postal_code: '10100', city: 'Torino', province: 'TO' }, free_text: 'Caffe e brioche.' }
  const llm = async () => JSON.stringify({ headline: 'Il miglior caffe’ dal 1962', subheadline: 'Colazioni a Torino', about: 'Caffe e brioche ogni mattina.' })
  const { site, notes } = await draftSite({ facts, templateId: 'ristorante', llm })
  assert.ok(notes.some((n) => /headline/.test(n))); assert.equal(site.sections[0].headline, 'Bar Prova')
  assert.ok(site.compliance.flags.includes('sections.0.subheadline')); assert.ok(!JSON.stringify(site).includes('1962'))
  assert.equal(validateSite(site).ok, true)
  const down = await draftSite({ facts, templateId: 'ristorante', llm: async () => { throw new Error('giu') } }); assert.ok(down.notes.some((n) => /non disponibile/.test(n)))
})
test('bozza: orari, prezzi, foto e recensioni mancanti NON vengono inventati', async () => {
  const { site, notes } = await draftSite({ facts: { name: 'X Bar', phone: '+39 000 0000000' }, templateId: 'negozio' })
  const types = site.sections.map((s) => s.type); for (const t of ['hours', 'gallery', 'reviews', 'services']) assert.ok(!types.includes(t), t)
  assert.ok(notes.length >= 3)
})
test('estrazione dal testo libero e link Maps (solo parsing dell’URL)', () => {
  const x = extractFromText('Chiamaci al 333 1234567 o scrivi a a@b.it, aperti 9:00-13:00, menu 12 euro'); assert.deepEqual([x.emails[0], x.phones[0], x.times.length, x.prices.length], ['a@b.it', '333 1234567', 2, 1])
  assert.deepEqual(parseMapsUrl('https://www.google.com/maps/place/Bar+Prova/@45.1,7.6,17z'), { name: 'Bar Prova', geo: { lat: 45.1, lng: 7.6 }, short: false })
  assert.equal(parseMapsUrl('https://evil.example/maps/place/X'), null)
})

test('sicurezza: id di sezione ostile rifiutato, non arriva mai in un attributo', () => {
  const s = structuredClone(SAMPLES[0]); s.sections[1].id = 'x" onmouseover="alert(1)'
  assert.ok(validateSite(s).errors.some((e) => e.path.endsWith('.id'))); assert.throws(() => renderSite(s), /sito non valido/)
})
