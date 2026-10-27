#!/usr/bin/env node
// Verifica POST-DEPLOY dell'editor su un host reale (sola lettura: solo GET). Uso: node tests/smoke-live.mjs https://sites.get-scala.com
// Esce 0 = tutto ok, 1 = almeno un controllo fallito. Non usa browser: controlla file, header e coerenza degli import.
const base = (process.argv[2] || '').replace(/\/+$/, '')
if (!/^(https:\/\/[a-z0-9.-]+|http:\/\/127\.0\.0\.1:\d+)$/i.test(base)) { console.error('uso: smoke-live.mjs https://host (o http://127.0.0.1:porta)'); process.exit(2) }
let bad = 0
const ck = (ok, msg) => { console.log((ok ? 'OK   ' : 'FAIL ') + msg); if (!ok) bad++ }
const get = async (p) => { const r = await fetch(base + p, { redirect: 'follow' }); return { r, t: await r.text() } }
const idx = await get('/editor')
ck(idx.r.status === 200, `/editor 200 (${idx.r.status})`)
ck(/noindex/.test(idx.r.headers.get('x-robots-tag') || ''), 'X-Robots-Tag noindex')
const csp = idx.r.headers.get('content-security-policy') || ''
ck(/default-src 'none'/.test(csp) && !/https?:|\*/.test(csp), 'CSP presente e senza terze parti')
ck(/<title>Crea il tuo sito/.test(idx.t), 'titolo della pagina')
ck(/id="template"/.test(idx.t) && /id="export"/.test(idx.t), 'form e pulsante di export presenti')
const mods = new Set(['/editor/app.mjs']); const seen = new Set()
while (mods.size) { const m = [...mods][0]; mods.delete(m); if (seen.has(m)) continue; seen.add(m); const f = await get(m); ck(f.r.status === 200 && /javascript/.test(f.r.headers.get('content-type') || ''), `${m} 200 javascript`); for (const x of f.t.matchAll(/from '(\/editor\/[^']+\.mjs)'/g)) mods.add(x[1]); ck(!/node:/.test(f.t), `${m} senza node:`) }
for (const p of ['/editor/editor.css', '/editor/tokens.css']) { const f = await get(p); ck(f.r.status === 200 && /css/.test(f.r.headers.get('content-type') || ''), `${p} 200 css`) }
const home = await get('/'); ck(home.r.status === 200, 'home della galleria ancora 200')
const rb = await get('/robots.txt'); ck(rb.r.status === 200, 'robots.txt 200')
const sm = await get('/sitemap.xml'); ck(!/\/editor/.test(sm.t), 'sitemap NON contiene /editor (beta chiusa)')
const t3 = await get('/editor/privacy-non-esiste'); ck(t3.r.status === 404, 'percorso inesistente sotto /editor = 404')
console.log(bad ? `\n${bad} controlli falliti` : '\ntutti i controlli ok'); process.exit(bad ? 1 : 0)
