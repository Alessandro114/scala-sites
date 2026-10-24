#!/usr/bin/env node
// Prepara un template SCALA Sites per l'export statico sul hosting dell'utente.
// Legge site.config.json, copia apps/demo/app/<template>/page.tsx in apps/site/app/page.tsx e applica le protezioni:
//  - valori dell'attivita' (nome, contatti, social, colori) al posto di quelli della demo;
//  - RIMUOVE recensioni inventate, "social proof" e prenotazione simulata (la demo finge conferme);
//  - scarica in locale le immagini (nessuna richiesta a terzi dal sito pubblicato);
//  - nessun analytics, nessun cookie, nessun font esterno;
//  - genera layout, pagina privacy e un rapporto dei contenuti della demo ancora da sostituire.
// Uso: node scripts/prepare.mjs [percorso/site.config.json]
import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'
import { fileURLToPath } from 'node:url'

const HERE = path.dirname(fileURLToPath(import.meta.url))
const APP = path.resolve(HERE, '..')
const DEMO = path.resolve(APP, '../demo/app')
const cfgPath = path.resolve(process.argv[2] || path.join(APP, 'site.config.json'))

const die = (m) => { console.error('\nERRORE: ' + m + '\n'); process.exit(1) }
if (!fs.existsSync(cfgPath)) die(`manca ${cfgPath}. Copia site.config.example.json in site.config.json e compilalo.`)
let cfg
try { cfg = JSON.parse(fs.readFileSync(cfgPath, 'utf8')) } catch (e) { die('site.config.json non e\' JSON valido: ' + e.message) }

// ---------- validazione (blocca anche caratteri che romperebbero il codice del template) ----------
const errors = []
const SAFE_TEXT = /^[^<>{}"`\\$]*$/
const text = (v, label, { required = false, max = 200 } = {}) => {
  v = (v ?? '').toString().trim().replace(/'/g, '’')
  if (required && !v) errors.push(`${label}: obbligatorio`)
  if (v.length > max) errors.push(`${label}: massimo ${max} caratteri`)
  if (!SAFE_TEXT.test(v)) errors.push(`${label}: non usare < > { } " \` \\ $`)
  return v
}
const b = cfg.business || {}
const slug = String(cfg.template || '').trim()
if (!/^[a-z0-9-]+$/.test(slug) || !fs.existsSync(path.join(DEMO, slug, 'page.tsx'))) errors.push(`template "${slug}" non esiste in apps/demo/app`)
const SUPPORTED = ['bakery'] // template gia' verificati con questo installer; gli altri vanno provati uno a uno
if (slug && !SUPPORTED.includes(slug) && !cfg.allow_untested_template) errors.push(`template "${slug}" non ancora verificato (verificati: ${SUPPORTED.join(', ')}). Per provarlo comunque: "allow_untested_template": true`)
const V = {
  name: text(b.name, 'business.name', { required: true, max: 80 }),
  legal: text(b.legal_name, 'business.legal_name', { required: true, max: 120 }),
  vat: text(b.vat_id, 'business.vat_id', { required: true, max: 30 }),
  address: text(b.address, 'business.address', { required: true, max: 160 }),
  phone: text(b.phone, 'business.phone', { required: true, max: 30 }),
  email: text(b.email, 'business.email', { required: true, max: 120 }),
  whatsapp: text(b.whatsapp || b.phone, 'business.whatsapp', { max: 30 }),
  instagram: text((b.instagram || '').replace(/^@/, ''), 'business.instagram', { max: 60 }),
  facebook: text(b.facebook, 'business.facebook', { max: 200 }),
  title: text(cfg.seo?.title, 'seo.title', { required: true, max: 70 }),
  description: text(cfg.seo?.description, 'seo.description', { required: true, max: 170 }),
}
if (V.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(V.email)) errors.push('business.email: formato non valido')
if (V.phone && !/^\+?[0-9 ()-]{7,}$/.test(V.phone)) errors.push('business.phone: usa cifre, spazi e "+" (es. +39 02 1234567)')
if (V.whatsapp && !/^\+?[0-9 ()-]{7,}$/.test(V.whatsapp)) errors.push('business.whatsapp: formato non valido')
if (V.facebook && !/^https:\/\//.test(V.facebook)) errors.push('business.facebook: deve iniziare con https://')
const siteUrl = String(cfg.site_url || '').trim().replace(/\/+$/, '')
if (!/^https:\/\/[a-z0-9.-]+\.[a-z]{2,}(\/[^\s]*)?$/i.test(siteUrl)) errors.push('site_url: indirizzo https:// del sito (es. https://www.tuodominio.it)')
const hex = (v, label) => { v = String(v || '').trim(); if (!/^#[0-9a-fA-F]{6}$/.test(v)) errors.push(`${label}: colore esadecimale tipo #1a2b3c`); return v }
const COL = { primary: hex(cfg.branding?.primary, 'branding.primary'), accent: hex(cfg.branding?.accent, 'branding.accent') }
const locale = cfg.locale === 'en' ? 'en' : 'it'
const goLive = cfg.go_live === true
const reviewed = cfg.content_reviewed === true
if (goLive && !reviewed) errors.push('go_live=true richiede content_reviewed=true: hai sostituito prodotti, prezzi, orari e FAQ della demo con i tuoi? (vedi site-report.md)')
if (errors.length) die('configurazione non valida:\n - ' + errors.join('\n - '))

// ---------- lettura template ----------
let src = fs.readFileSync(path.join(DEMO, slug, 'page.tsx'), 'utf8')
const report = []
const blockRe = /const siteConfig: SiteConfig = \{[\s\S]*?\n\}\n/
const blk = src.match(blockRe)?.[0]
if (!blk) die('nel template manca il blocco siteConfig: template non supportato')
const grab = (re) => blk.match(re)?.[1]
const demo = {
  name: grab(/\bname: '([^']*)'/), url: grab(/\burl: '([^']*)'/), phone: grab(/\bphone: '([^']*)'/), email: grab(/\bemail: '([^']*)'/),
  whatsapp: grab(/\bwhatsapp: '([^']*)'/), address: grab(/\baddress: '([^']*)'/), instagram: grab(/\binstagram: '([^']*)'/),
  facebook: grab(/\bfacebook: '([^']*)'/), seoTitle: grab(/seo: \{\s*title: '([^']*)'/), seoDesc: grab(/seo: \{[\s\S]*?description: '([^']*)'/),
}
const swap = (from, to, label) => {
  if (!from || from.length < 3) return
  const n = src.split(from).length - 1
  if (n === 0) return
  src = src.split(from).join(to)
  report.push(`sostituito ${label}: ${n} occorrenze`)
}
// ordine: stringhe lunghe prima, cosi' una non rompe l'altra
swap(demo.seoTitle, V.title, 'titolo SEO'); swap(demo.seoDesc, V.description, 'descrizione SEO')
swap(demo.facebook, V.facebook, 'facebook'); swap(demo.url, siteUrl, 'url')
swap(demo.email, V.email, 'email'); swap(demo.address, V.address, 'indirizzo')
swap(demo.phone, V.phone, 'telefono'); swap(demo.whatsapp, V.whatsapp.replace(/[^0-9+]/g, ''), 'whatsapp')
swap(demo.instagram, V.instagram, 'instagram'); swap(demo.name, V.name, 'nome')

// colori: i due hex della demo (palette C) -> quelli dell'utente
const palette = src.match(/const C = \{[\s\S]*?\n\} as const/)?.[0] || ''
const cOf = (k) => palette.match(new RegExp(`\\b${k}:\\s*'(#[0-9a-fA-F]{6})'`))?.[1]
const bc = src.match(/branding: \{ primaryColor: C\.(\w+), accentColor: C\.(\w+) \}/)
if (bc && cOf(bc[1]) && cOf(bc[2])) {
  const rx = (h) => new RegExp(h, 'gi')
  src = src.replace(rx(cOf(bc[1])), COL.primary).replace(rx(cOf(bc[2])), COL.accent)
  report.push('colori di marca sostituiti (le sfumature chiare/scure della palette restano quelle della demo)')
} else report.push('ATTENZIONE: colori di marca non riconosciuti nella palette, restano quelli della demo')

// coordinate della demo (Londra): meglio nessuna che sbagliate
src = src.replace(/\n\s*coordinates: \{[^}]*\},/, '')

// ---------- protezioni: contenuti finti della demo ----------
// 1. recensioni inventate
const revRe = /const reviews: Review\[\] = \[[\s\S]*?\n\]\n/
if (revRe.test(src)) { src = src.replace(revRe, 'const reviews: Review[] = []\n'); report.push('RIMOSSE le recensioni inventate della demo') }
const rc = src.indexOf('<ReviewCarousel')
if (rc >= 0) {
  const s0 = src.lastIndexOf('<section', rc), s1 = src.indexOf('</section>', rc)
  if (s0 >= 0 && s1 >= 0) { src = src.slice(0, s0) + '{/* recensioni: aggiungi qui le TUE recensioni reali, con il consenso degli autori */}' + src.slice(s1 + '</section>'.length); report.push('RIMOSSA la sezione recensioni (riaggiungi solo recensioni vere)') }
}
// 2. prenotazione simulata -> richiesta via WhatsApp/email, nessuna conferma finta
const bw = /<BookingWidget[\s\S]*?\/>/
if (bw.test(src)) {
  src = src.replace(bw, `<ContactRequest whatsapp="${V.whatsapp || V.phone}" email="${V.email}" business="${V.name}" locale="${locale}" />`)
  src = src.replace(/import \{ BookingWidget \} from '[^']+'\n/, "import { ContactRequest } from '../components/ContactRequest'\n")
  src = src.replace(/const mockSlots: BookingSlot\[\] = \[[\s\S]*?\n\]\n/, '')
  src = src.replace(/, BookingSlot\b/, '')
  report.push('SOSTITUITA la prenotazione simulata (slot e conferma finti) con una richiesta via WhatsApp/email, senza promettere conferma')
}
// 3. immagini: copia locale (niente richieste a terzi dal sito pubblicato)
const urls = [...new Set(src.match(/https:\/\/images\.unsplash\.com\/[^'"`\s)]+/g) || [])]
fs.mkdirSync(path.join(APP, 'public/img'), { recursive: true })
let imgOk = 0, imgFail = 0
for (const u of urls) {
  const name = crypto.createHash('sha1').update(u).digest('hex').slice(0, 12) + '.jpg'
  const dest = path.join(APP, 'public/img', name)
  try {
    if (!fs.existsSync(dest)) {
      const r = await fetch(u); if (!r.ok) throw new Error('HTTP ' + r.status)
      fs.writeFileSync(dest, Buffer.from(await r.arrayBuffer()))
    }
    src = src.split(u).join('/img/' + name); imgOk++
  } catch (e) { imgFail++; report.push(`ATTENZIONE immagine non scaricata (${e.message}): ${u}`) }
}
if (urls.length) report.push(`immagini della demo (Unsplash, licenza gratuita anche commerciale): ${imgOk} copiate in locale, ${imgFail} non scaricate. Sono segnaposto: sostituiscile con le TUE foto in apps/site/public/img/`)
// 4. social proof inventato
src = src.replace(/\n\s*socialProof=\{\{[^}]*\}\}/g, '')

// ---------- contenuti della demo ancora da sostituire (elenco con numero di riga) ----------
const todo = []
const lines = src.split('\n')
lines.forEach((l, i) => {
  if (/(price|prezzo):\s*[0-9]/.test(l) || /\bprice\b.*[0-9]/.test(l) && /name:/.test(l)) todo.push([i + 1, 'prezzo', l.trim().slice(0, 90)])
  else if (/^\s*(question|q):\s*'/.test(l)) todo.push([i + 1, 'FAQ', l.trim().slice(0, 90)])
  else if (/\b(since|dal)\s+(19|20)\d\d\b/i.test(l)) todo.push([i + 1, 'affermazione storica', l.trim().slice(0, 90)])
  else if (/\b(am|pm)\b|\b\d{1,2}[:.]\d{2}\b.*[-–]/.test(l) && /(hours|orari|open|mon|tue|sat|sun)/i.test(l)) todo.push([i + 1, 'orari', l.trim().slice(0, 90)])
})
fs.writeFileSync(path.join(APP, 'app/page.tsx'), src)

// ---------- layout (nessun analytics, nessun font esterno) ----------
const title = V.title, desc = V.description
const robots = goLive ? '{ index: true, follow: true }' : '{ index: false, follow: false }'
fs.writeFileSync(path.join(APP, 'app/layout.tsx'), `import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('${siteUrl}'),
  title: '${title}',
  description: '${desc}',
  robots: ${robots},
  alternates: { canonical: '/' },
  openGraph: { title: '${title}', description: '${desc}', type: 'website', url: '${siteUrl}/' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="${locale}">
      <body>
        {children}
        <div style={{ padding: '1.25rem 1rem', textAlign: 'center', fontSize: '.8rem', background: '#111', color: '#ddd' }}>
          ${V.legal} &middot; ${locale === 'it' ? 'P.IVA' : 'VAT'} ${V.vat} &middot; ${V.address} &middot; <a href="/privacy/" style={{ textDecoration: 'underline' }}>Privacy</a>
        </div>
      </body>
    </html>
  )
}
`)

// ---------- privacy: modello da verificare, il titolare e' chi pubblica ----------
const P = locale === 'it' ? {
  h: 'Informativa sulla privacy', t: 'Titolare del trattamento', d: 'Dati trattati da questo sito',
  d1: 'Questo sito non usa cookie, non ha strumenti di analisi e non carica script, font o immagini da terzi. Non raccoglie dati tramite moduli propri.',
  d2: 'Il fornitore di hosting puo’ registrare dati tecnici di accesso (indirizzo IP, data e ora, pagina richiesta) per sicurezza e funzionamento. Consulta l’informativa del tuo fornitore di hosting.',
  c: 'Se scrivi tramite WhatsApp o email', c1: 'Il pulsante apre l’app WhatsApp o il tuo programma di posta con un messaggio gia’ scritto. Il messaggio e i dati che scegli di inviare (nome, telefono, testo) sono trattati dal titolare per rispondere alla tua richiesta e dal servizio che usi (WhatsApp/Meta o il tuo provider email) secondo le sue condizioni.',
  r: 'I tuoi diritti', r1: 'Puoi chiedere accesso, rettifica, cancellazione e opposizione scrivendo a', n: 'Questo e’ un modello fornito con il template, non una consulenza legale: il titolare deve verificarlo e aggiornarlo se aggiunge strumenti (analisi, mappe, moduli, pixel).',
} : {
  h: 'Privacy notice', t: 'Data controller', d: 'Data processed by this site',
  d1: 'This site uses no cookies, has no analytics and loads no scripts, fonts or images from third parties. It does not collect data through its own forms.',
  d2: 'The hosting provider may log technical access data (IP address, date and time, requested page) for security and operation. See your hosting provider’s notice.',
  c: 'If you write via WhatsApp or email', c1: 'The button opens the WhatsApp app or your mail program with a pre-written message. The message and the data you choose to send (name, phone, text) are handled by the controller to reply to your request, and by the service you use (WhatsApp/Meta or your email provider) under its terms.',
  r: 'Your rights', r1: 'You may request access, rectification, erasure and objection by writing to', n: 'This is a template provided with the site, not legal advice: the controller must review it and update it if tools (analytics, maps, forms, pixels) are added.',
}
fs.mkdirSync(path.join(APP, 'app/privacy'), { recursive: true })
fs.writeFileSync(path.join(APP, 'app/privacy/page.tsx'), `export const metadata = { title: '${P.h}', robots: { index: false, follow: true } }

export default function Privacy() {
  return (
    <main style={{ maxWidth: 760, margin: '0 auto', padding: '3rem 1.25rem', fontFamily: 'system-ui, sans-serif', lineHeight: 1.6 }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>${P.h}</h1>
      <h2 style={{ fontSize: '1.25rem', marginTop: '1.5rem' }}>${P.t}</h2>
      <p>${V.legal} &mdash; ${locale === 'it' ? 'P.IVA' : 'VAT'} ${V.vat} &mdash; ${V.address} &mdash; ${V.email}</p>
      <h2 style={{ fontSize: '1.25rem', marginTop: '1.5rem' }}>${P.d}</h2>
      <p>${P.d1}</p>
      <p>${P.d2}</p>
      <h2 style={{ fontSize: '1.25rem', marginTop: '1.5rem' }}>${P.c}</h2>
      <p>${P.c1}</p>
      <h2 style={{ fontSize: '1.25rem', marginTop: '1.5rem' }}>${P.r}</h2>
      <p>${P.r1} ${V.email}.</p>
      <p style={{ marginTop: '1.5rem', fontSize: '.9rem', opacity: .75 }}>${P.n}</p>
      <p><a href="/" style={{ textDecoration: 'underline' }}>Home</a></p>
    </main>
  )
}
`)

// ---------- rapporto ----------
const rep = ['# Rapporto di preparazione del sito', '', `Template: ${slug}  |  go_live: ${goLive}  |  contenuti verificati: ${reviewed}`, '', '## Cosa e\' stato fatto in automatico', ...report.map((r) => '- ' + r), '',
  '## Contenuti della demo ANCORA DA SOSTITUIRE (riga in app/page.tsx)', '(prodotti, prezzi, FAQ, orari, affermazioni: sono della demo e non descrivono la tua attivita\')', '',
  ...(todo.length ? todo.map(([n, k, t]) => `- riga ${n} [${k}]: ${t}`) : ['- nessun elemento riconosciuto automaticamente: controlla comunque tutto il testo a mano']), '',
  '## Prima di pubblicare', '1. Apri app/page.tsx, sostituisci prodotti/prezzi/FAQ/orari con i tuoi (stessa struttura).', '2. Sostituisci le foto in public/img/ con le tue (o tieni i segnaposto solo se ti vanno bene).',
  '3. Metti in site.config.json "content_reviewed": true, poi "go_live": true e ricostruisci.', '4. Rileggi la pagina /privacy/ e adattala se aggiungi strumenti.', '']
fs.writeFileSync(path.join(APP, 'site-report.md'), rep.join('\n'))
console.log(rep.join('\n'))
console.log(`\nOK: ${slug} pronto. Ora: npm run build   (output statico in apps/site/out)`)
