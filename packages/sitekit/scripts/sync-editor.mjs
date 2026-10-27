#!/usr/bin/env node
// Copia l'editor (statico) in apps/demo/public/editor, con percorsi assoluti /editor/... (funziona anche senza slash finale).
// Moduli inclusi = solo quelli raggiungibili dagli import di editor/app.mjs (quindi nessun node:crypto). `--check` = verifica senza scrivere.
import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve(import.meta.dirname, '..'), OUT = path.resolve(ROOT, '../../apps/demo/public/editor')
const check = process.argv.includes('--check')
const files = {}
const walk = (rel) => { // rel: percorso sotto ROOT, es. src/render.mjs
  if (files['sitekit/' + path.basename(rel)]) return
  let s = fs.readFileSync(path.join(ROOT, rel), 'utf8'); files['sitekit/' + path.basename(rel)] = s
  for (const m of s.matchAll(/from '(\.\/[^']+\.mjs)'/g)) walk(path.join('src', m[1]))
}
let app = fs.readFileSync(path.join(ROOT, 'editor/app.mjs'), 'utf8')
for (const m of app.matchAll(/from '\.\.\/src\/([^']+\.mjs)'/g)) walk('src/' + m[1])
app = app.replace(/from '\.\.\/src\//g, "from '/editor/sitekit/")
for (const k of Object.keys(files)) files[k] = files[k].replace(/from '\.\/([^']+\.mjs)'/g, "from '/editor/sitekit/$1'")
files['app.mjs'] = app
files['editor.css'] = fs.readFileSync(path.join(ROOT, 'editor/editor.css'), 'utf8')
files['tokens.css'] = fs.readFileSync(path.join(ROOT, 'vendor/tokens.css'), 'utf8')
files['index.html'] = fs.readFileSync(path.join(ROOT, 'editor/index.html'), 'utf8').replace('href="../vendor/tokens.css"', 'href="/editor/tokens.css"').replace('href="editor.css"', 'href="/editor/editor.css"').replace('src="app.mjs"', 'src="/editor/app.mjs"')
let bad = 0
if (!check) fs.rmSync(OUT, { recursive: true, force: true })
for (const [rel, content] of Object.entries(files)) {
  const f = path.join(OUT, rel)
  if (check) { if (!fs.existsSync(f) || fs.readFileSync(f, 'utf8') !== content) { console.error('NON ALLINEATO:', rel); bad++ } continue }
  fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, content)
}
if (check && fs.existsSync(OUT)) for (const f of fs.readdirSync(OUT, { recursive: true })) { const p = path.join(OUT, f); if (fs.statSync(p).isFile() && !(f in files)) { console.error('FILE IN PIU:', f); bad++ } }
console.log(check ? (bad ? `${bad} differenze` : `ok: ${Object.keys(files).length} file allineati`) : `scritti ${Object.keys(files).length} file in ${OUT}`)
process.exit(bad ? 1 : 0)
