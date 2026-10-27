import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { execFileSync } from 'node:child_process'
import { SAMPLES } from '../src/samples.mjs'
import { buildExport, prepareExport, zipStore, crc32, auditHtml, renderSite } from '../src/index.mjs'

test('crc32 noto', () => assert.equal(crc32(new TextEncoder().encode('123456789')), 0xCBF43926))
test('zip valido: python zipfile lo legge e i contenuti coincidono', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'zip-')), f = path.join(dir, 'a.zip')
  const bin = new Uint8Array([0, 1, 2, 255, 254]); fs.writeFileSync(f, zipStore({ 'index.html': 'ciao è', 'assets/x.webp': bin, 'privacy/index.html': 'p' }))
  const out = execFileSync('python3', ['-c', `import zipfile,sys;z=zipfile.ZipFile(sys.argv[1]);assert z.testzip() is None;print(sorted(z.namelist()));print(z.read('index.html').decode());print(list(z.read('assets/x.webp')))`, f]).toString()
  assert.match(out, /\['assets\/x.webp', 'index.html', 'privacy\/index.html'\]/); assert.match(out, /ciao è/); assert.match(out, /\[0, 1, 2, 255, 254\]/)
  assert.throws(() => zipStore({ '../fuori': 'x' }), /percorso/)
})
test('export: nessun banner di anteprima, nessun marcatore, noindex finche’ non revisionato; guida e site.json inclusi', () => {
  const r = buildExport(SAMPLES[0], { baseUrl: 'https://www.cliente.example' })
  const html = r.files['index.html']
  assert.ok(!/ANTEPRIMA|class="tbv"/.test(html)); assert.match(html, /noindex,nofollow/); assert.equal(r.meta.indexable, false)
  assert.ok(r.files['LEGGIMI-PUBBLICA.txt'].includes('NON INDICIZZABILE')); assert.ok(JSON.parse(r.files['site.json']).business.name)
  assert.ok(r.warnings.length >= 2); assert.ok(auditHtml(html).ok)
})
test('export: revisionato + indirizzo = indicizzabile, con sitemap e canonical', () => {
  const s = structuredClone(SAMPLES[0]); s.compliance.content_reviewed = true; s.compliance.flags = []; s.seo.indexable = true
  const r = buildExport(s, { baseUrl: 'https://www.cliente.example' }); assert.equal(r.meta.indexable, true)
  assert.match(r.files['index.html'], /index,follow/); assert.match(r.files['index.html'], /rel="canonical" href="https:\/\/www.cliente.example\/"/); assert.ok(r.files['sitemap.xml']); assert.match(r.files['robots.txt'], /Sitemap:/)
  const noUrl = buildExport(s, {}); assert.equal(noUrl.meta.indexable, false)
})
test('export bloccato: contenuto vietato, foto mancante, sito non valido', () => {
  const bad = structuredClone(SAMPLES[0]); bad.sections[0].subheadline = 'Inserisci la password per accedere al tuo conto'
  assert.throws(() => buildExport(bad), /non ammesso/)
  const g = structuredClone(SAMPLES[0]); g.sections.push({ id: 'g', type: 'gallery', items: [{ src: 'assets/a.webp', alt: 'x' }] })
  assert.throws(() => buildExport(g), /foto mancante/); assert.doesNotThrow(() => buildExport(g, { assets: { 'assets/a.webp': new Uint8Array([1]) } }))
  assert.equal(prepareExport({ ...SAMPLES[0], slug: 'X' }).ok, false)
})
test('modalita’ "links" (default): nessun form, nessun dato passa da noi; "form": solo con account collegato', () => {
  const l = buildExport(SAMPLES[0]).files['index.html']; assert.ok(!/<form/.test(l)); assert.match(l, /wa\.me\//); assert.match(l, /mailto:/)
  assert.match(buildExport(SAMPLES[0]).files['_headers'], /form-action 'none'/)
  const f = structuredClone(SAMPLES[0]); f.lead = { mode: 'form' }; assert.match(buildExport(f).files['index.html'], /<form/)
})
test('studio-medico esportato: disclaimer presente', () => assert.match(buildExport(SAMPLES[4]).files['index.html'], /non sostituiscono una visita/))

test('sicurezza: indirizzo del sito con newline/spazi/protocollo errato bloccato (no injection in robots/sitemap)', () => {
  for (const u of ['http://x.example', 'https://x.example\nDisallow: /', 'https://x .example', 'javascript:alert(1)']) assert.equal(prepareExport(SAMPLES[0], { baseUrl: u }).ok, false, u)
  assert.equal(prepareExport(SAMPLES[0], { baseUrl: 'https://www.cliente.example' }).ok, true)
})
