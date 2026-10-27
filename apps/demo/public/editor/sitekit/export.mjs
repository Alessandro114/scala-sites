// Pacchetto di esportazione: il sito statico + guida di pubblicazione + site.json (per riaprirlo nell'editor).
// Modello "il sito e' del cliente": lo carica sul SUO dominio/hosting. Noi non ospitiamo contenuti pubblici di terzi.
import { renderSite } from '/editor/sitekit/render.mjs'
import { validateSite } from '/editor/sitekit/schema.mjs'
import { moderate } from '/editor/sitekit/guard.mjs'
import { zipStore } from '/editor/sitekit/zip.mjs'
import { ASSET } from '/editor/sitekit/schema.mjs'

// Controlli prima di consegnare i file. Errori bloccanti = non si esporta; avvisi = si esporta ma resta noindex.
export function prepareExport(site, { assets = {}, baseUrl } = {}) {
  const errors = [], warnings = []
  const v = validateSite(site); for (const e of v.errors) errors.push(`${e.path}: ${e.msg}`)
  const m = moderate(site); if (m.blocked) errors.push('contenuto non ammesso: ' + m.blocked_reasons.map((r) => `${r.path} (${r.rule})`).join(', '))
  for (const s of site.sections || []) if (s.type === 'gallery') for (const it of s.items || []) if (ASSET.test(it.src) && !assets[it.src]) errors.push(`foto mancante: ${it.src}`)
  if (baseUrl && !/^https:\/\/[a-z0-9.-]+\.[a-z]{2,}(\/[A-Za-z0-9._~\/-]*)?$/i.test(baseUrl)) errors.push('indirizzo del sito: serve https://dominio (senza spazi)')
  const flags = site.compliance?.flags || []
  if (flags.length) warnings.push(`${flags.length} contenuti ancora "da verificare": il sito resta non indicizzabile finche’ non li confermi`)
  if (site.compliance?.content_reviewed !== true) warnings.push('contenuti non ancora confermati dal titolare: il sito resta non indicizzabile (noindex)')
  if (!baseUrl) warnings.push('indirizzo del sito non indicato: niente sitemap, niente canonical')
  if (m.needs_human) warnings.push('settore regolamentato o contenuti da rivedere: controlla i testi con attenzione prima di pubblicare')
  return { ok: errors.length === 0, errors, warnings, moderation: m }
}

export const GUIDE = (site, baseUrl, indexable) => `PUBBLICA IL TUO SITO — ${site.business.name}
=====================================================
Questa cartella contiene il tuo sito completo. E' fatto di file semplici (HTML, nessun JavaScript, nessun cookie).
Il sito e' tuo: lo pubblichi sul tuo dominio e sul tuo hosting. S.C.A.L.A. non ospita questo sito.

1) COSA CARICARE
   Carica TUTTO il contenuto di questa cartella nella cartella principale del tuo sito (di solito "public_html" o "www").
   Il file "index.html" deve stare nella cartella principale. Non caricare questo file di testo ne' site.json (puoi, non serve).
2) DOVE
   - Hosting con FTP/pannello (Aruba, Register, SiteGround...): carica con il file manager o con FileZilla.
   - Cloudflare Pages, Netlify, GitHub Pages: trascina la cartella nella schermata "carica sito".
   Il file "_headers" e' usato da Cloudflare Pages e Netlify per la sicurezza; sugli altri hosting si ignora senza danni.
3) INDICIZZAZIONE
   ${indexable ? 'Il sito e’ pronto per Google (indicizzabile).' : 'Il sito e’ stato esportato in modalita’ NON INDICIZZABILE (noindex): e’ la scelta sicura finche’ non hai controllato i testi. Torna nell’editor, conferma i contenuti da verificare, indica l’indirizzo del sito ed esporta di nuovo.'}
4) PRIMA DI PUBBLICARE, CONTROLLA
   [ ] orari, prezzi, indirizzo e telefono sono giusti
   [ ] la pagina "Informativa privacy" e' corretta (e' un modello: fai verificare da chi segue la tua privacy)
   [ ] le foto sono tue o hai il diritto di usarle
${site.compliance?.regulated && site.compliance.regulated !== 'none' ? '   [ ] i testi rispettano le regole di comunicazione del tuo settore (professioni sanitarie/legali/finanziarie)\n' : ''}5) CONTATTI
   ${site.lead?.mode === 'form' ? 'Il modulo invia le richieste a S.C.A.L.A./CRM, che le gira a te: serve l’account collegato.' : 'Il sito usa WhatsApp, email e telefono: nessuna configurazione, nessun dato passa da noi.'}
6) AGGIORNARE IL SITO
   Apri di nuovo l'editor, carica "site.json" (Apri un sito salvato), modifica, esporta e ricarica i file.
${baseUrl ? `\nIndirizzo indicato: ${baseUrl}\n` : ''}`

export function buildExport(site, { assets = {}, baseUrl } = {}) {
  const p = prepareExport(site, { assets, baseUrl })
  if (!p.ok) { const e = new Error('esportazione bloccata: ' + p.errors.join('; ')); e.errors = p.errors; throw e }
  const r = renderSite(site, { mode: 'export', baseUrl })
  const files = { ...r.files, ...assets, 'LEGGIMI-PUBBLICA.txt': GUIDE(site, baseUrl, r.meta.indexable), 'site.json': JSON.stringify(site, null, 2) }
  return { files, zip: zipStore(files), meta: r.meta, warnings: p.warnings }
}
