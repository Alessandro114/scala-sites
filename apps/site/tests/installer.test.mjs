// Test dell'installer: validazione della config e protezioni sui contenuti demo.
// Usa copie temporanee: non tocca site.config.json ne' app/ del progetto.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const APP = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const example = JSON.parse(fs.readFileSync(path.join(APP, 'site.config.example.json'), 'utf8'))
const tmp = fs.mkdtempSync(path.join(APP, '.test-'))
process.on('exit', () => fs.rmSync(tmp, { recursive: true, force: true }))

function run(mutate) {
  const cfg = structuredClone(example)
  mutate?.(cfg)
  const f = path.join(tmp, 'cfg.json')
  fs.writeFileSync(f, JSON.stringify(cfg))
  const r = spawnSync('node', [path.join(APP, 'scripts/prepare.mjs'), f], { encoding: 'utf8', cwd: APP })
  return { code: r.status, out: r.stdout + r.stderr }
}

test('config di esempio valida: prepare riesce', () => { assert.equal(run().code, 0) })
test('campo obbligatorio mancante -> errore', () => { const r = run((c) => { c.business.vat_id = '' }); assert.notEqual(r.code, 0); assert.match(r.out, /vat_id/) })
test('email non valida -> errore', () => { const r = run((c) => { c.business.email = 'non-una-email' }); assert.notEqual(r.code, 0); assert.match(r.out, /email/) })
test('colore non esadecimale -> errore', () => { const r = run((c) => { c.branding.primary = 'rosso' }); assert.notEqual(r.code, 0); assert.match(r.out, /branding\.primary/) })
test('site_url senza https -> errore', () => { const r = run((c) => { c.site_url = 'http://x.it' }); assert.notEqual(r.code, 0); assert.match(r.out, /site_url/) })
test('caratteri che rompono il codice del template -> errore', () => { const r = run((c) => { c.business.name = 'Rossi <script>' }); assert.notEqual(r.code, 0); assert.match(r.out, /business\.name/) })
test('template inesistente -> errore', () => { const r = run((c) => { c.template = 'non-esiste' }); assert.notEqual(r.code, 0) })
test('template non verificato senza consenso esplicito -> errore', () => { const r = run((c) => { c.template = 'barber' }); assert.notEqual(r.code, 0); assert.match(r.out, /non ancora verificato/) })
test('go_live senza content_reviewed -> errore', () => { const r = run((c) => { c.go_live = true }); assert.notEqual(r.code, 0); assert.match(r.out, /content_reviewed/) })

test('protezioni: il TSX generato non contiene contenuti finti ne\' risorse di terzi', () => {
  assert.equal(run().code, 0)
  const page = fs.readFileSync(path.join(APP, 'app/page.tsx'), 'utf8')
  assert.ok(!/Claudia R\./.test(page), 'recensioni inventate rimosse')
  assert.ok(!/<ReviewCarousel/.test(page), 'sezione recensioni rimossa')
  assert.ok(!/BookingWidget/.test(page) && /<ContactRequest/.test(page), 'prenotazione simulata sostituita')
  assert.ok(!/mockSlots|socialProof/.test(page), 'slot e social proof finti rimossi')
  assert.ok(!/images\.unsplash\.com/.test(page), 'immagini copiate in locale')
  assert.ok(!/La Maison du Pain|lamaisondupain|7946/.test(page), 'dati dell\'attivita\' demo sostituiti')
  assert.ok(page.includes('Panificio Rossi'), 'nome utente presente')
  const layout = fs.readFileSync(path.join(APP, 'app/layout.tsx'), 'utf8')
  assert.ok(/index: false/.test(layout), 'noindex finche\' go_live e\' false')
  assert.ok(!/googletagmanager|gtag|fonts\.googleapis/.test(layout + page), 'nessun analytics ne\' font esterno')
})

test('privacy generata con i dati del titolare', () => {
  assert.equal(run().code, 0)
  const p = fs.readFileSync(path.join(APP, 'app/privacy/page.tsx'), 'utf8')
  assert.ok(p.includes('Rossi Mario') && p.includes('IT01234567890') && p.includes('info@tuodominio.it'))
})
