#!/usr/bin/env node
// Dopo `next build`: robots.txt, sitemap.xml e intestazioni di sicurezza in out/. Blocca la pubblicazione se i contenuti demo non sono verificati.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
const APP = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const cfg = JSON.parse(fs.readFileSync(path.resolve(process.argv[2] || path.join(APP, 'site.config.json')), 'utf8'))
const OUT = path.join(APP, 'out')
if (!fs.existsSync(OUT)) { console.error('manca out/: next build non e\' andato a buon fine'); process.exit(1) }
const url = String(cfg.site_url).replace(/\/+$/, '')
const live = cfg.go_live === true && cfg.content_reviewed === true
fs.writeFileSync(path.join(OUT, 'robots.txt'), live ? `User-agent: *\nAllow: /\nSitemap: ${url}/sitemap.xml\n` : 'User-agent: *\nDisallow: /\n')
if (live) fs.writeFileSync(path.join(OUT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${url}/</loc></url>\n</urlset>\n`)
// Cloudflare Pages / Netlify leggono _headers; su Apache/cPanel non serve (ignorato)
fs.writeFileSync(path.join(OUT, '_headers'), '/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n  X-Frame-Options: SAMEORIGIN\n')
// controllo finale: nessuna richiesta a terzi nell'HTML esportato (oltre ai link cliccabili)
const bad = []
const ownHost = new URL(url).host.replace(/^www\./, '').replace(/\./g, '\\.')
const okHosts = new RegExp('^https?://(?:www\\.)?(?:' + ownHost + '|wa\\.me|instagram\\.com|facebook\\.com|get-scala\\.com|schema\\.org|www\\.w3\\.org)(?:[/:?#]|$)')
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).forEach((e) => {
  const p = path.join(d, e.name)
  if (e.isDirectory()) return walk(p)
  if (!/\.(html|js|css)$/.test(e.name)) return
  const s = fs.readFileSync(p, 'utf8')
  const rel = path.relative(OUT, p)
  if (e.name.endsWith('.html')) {
    for (const m of s.matchAll(/(?:src|srcset|href)="(https?:\/\/[^"]+)"/g)) if (!okHosts.test(m[1])) bad.push(`${rel}: ${m[1]}`)
    if (/fonts\.googleapis|fonts\.gstatic|typekit/.test(s)) bad.push(`${rel}: font esterno`)
  }
  // le stringhe "fonts.googleapis" dentro i chunk JS sono l'elenco interno di Next (non vengono caricate): si controllano solo i tracker veri
  if (/googletagmanager\.com|google-analytics\.com|connect\.facebook\.net|(?<![.\w])gtag\(|(?<![.\w])fbq\(/.test(s)) bad.push(`${rel}: tracker`)
})
walk(OUT)
if (bad.length) { console.error('\nATTENZIONE: risorse esterne trovate nel sito esportato:\n - ' + [...new Set(bad)].slice(0, 20).join('\n - ')) }
console.log(live ? `\nPRONTO PER LA PUBBLICAZIONE: carica il contenuto di apps/site/out/ su ${url}` : '\nBUILD DI PROVA (noindex, robots chiuso): non e\' ancora pubblicabile. Vedi site-report.md; poi imposta content_reviewed e go_live.')
