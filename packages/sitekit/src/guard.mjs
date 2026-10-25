// Protezioni: moderazione di contenuto, quote, gate di pubblicazione, token di anteprima, audit dell'HTML generato.
import { validateSite } from './schema.mjs'

// ---- quote (valori iniziali di beta; da ricalibrare dopo la misura dei costi) ----
export const QUOTA = { sitesPerUser: 3, generationsPerDay: 5, generationsPerSite: 30, regenerationsFullPerDay: 1, imageBytes: 8 * 1024 * 1024, assetBytesPerSite: 50 * 1024 * 1024, leadsPerSitePerHour: 20, leadsPerIpPerHour: 5, reportsPerIpPerDay: 10 }
export function checkQuota(usage, action) {
  const u = usage || {}
  const rules = {
    create_site: [(u.sites ?? 0) < QUOTA.sitesPerUser, `massimo ${QUOTA.sitesPerUser} siti per account`],
    generate: [(u.generationsToday ?? 0) < QUOTA.generationsPerDay && (u.generationsSite ?? 0) < QUOTA.generationsPerSite, `limite generazioni raggiunto (${QUOTA.generationsPerDay}/giorno, ${QUOTA.generationsPerSite}/sito)`],
    upload: [(u.assetBytes ?? 0) + (u.fileBytes ?? 0) <= QUOTA.assetBytesPerSite && (u.fileBytes ?? 0) <= QUOTA.imageBytes, 'immagine oltre 8 MB o spazio del sito oltre 50 MB'],
  }
  const r = rules[action]; if (!r) throw new Error('azione sconosciuta: ' + action)
  return { allowed: r[0], reason: r[0] ? null : r[1] }
}

// ---- moderazione ----
// Elenchi di partenza, volutamente semplici e leggibili: segnalano, non decidono da soli i casi dubbi (needs_human).
const FORBIDDEN_CATEGORY = [
  [/\b(slot machine|slot online|scommess[ae]|poker online|betting)\b|\bcasin(o|ò)(?![a-zà-ù])/i, 'gioco d’azzardo'], [/\b(armi da fuoco|pistol[ae]|fucil[ei]|munizioni)\b/i, 'armi'],
  [/\b(porno|escort|incontri sessuali|sesso a pagamento|onlyfans)\b/i, 'contenuti per adulti'], [/\b(farmaci senza ricetta|viagra|cialis|anabolizzant[ei]|steroidi)\b/i, 'farmaci / sostanze'],
  [/\b(guadagna \d+|raddoppia i tuoi soldi|rendimento garantito|investimento sicuro|trading garantito|criptovalut[ae] .{0,30}(garantit|sicur))/i, 'promesse finanziarie'],
  [/\b(documenti falsi|patente falsa|recensioni a pagamento|followers? comprat)/i, 'attivita’ illecite'],
]
const PHISHING_PHRASES = [/accedi al tuo (conto|account)/i, /verifica (la tua )?(identit|account|conto)/i, /inserisci (la |il |i )?(tua |tuo |tuoi )?(password|pin|codice)/i, /il tuo (conto|account) (e’|è|e') (stato )?(sospeso|bloccato)/i, /aggiorna i (tuoi )?dati (di pagamento|della carta)/i, /(carta di credito|iban|cvv)\b/i, /(log ?in|sign ?in)\b.{0,20}(banca|bank|paypal|poste)/i]
const BRANDS = /\b(intesa sanpaolo|unicredit|poste italiane|postepay|paypal|amazon|netflix|agenzia delle entrate|inps|aruba|google|apple|microsoft|dhl|ups|bnl|mps|fineco|revolut|satispay)\b/i
const SHORTENERS = /\b(bit\.ly|tinyurl\.com|t\.co|goo\.gl|cutt\.ly|is\.gd|rb\.gy|shorturl\.at)\b/i
const DISPOSABLE = /@(mailinator|guerrillamail|10minutemail|tempmail|yopmail|sharklasers|trashmail)\./i

function* texts(site) {
  const b = site.business || {}
  for (const k of ['name', 'tagline', 'description']) if (b[k]) yield [`business.${k}`, b[k]]
  yield ['seo.title', site.seo?.title || '']; yield ['seo.description', site.seo?.description || '']
  for (const [i, s] of (site.sections || []).entries()) {
    for (const k of ['title', 'headline', 'subheadline', 'text', 'place']) if (s[k]) yield [`sections.${i}.${k}`, s[k]]
    for (const [j, it] of (s.items || []).entries()) for (const k of ['name', 'description', 'q', 'a', 'label', 'text', 'alt']) if (it[k]) yield [`sections.${i}.items.${j}.${k}`, it[k]]
  }
}
function* urls(site) {
  const b = site.business || {}
  if (b.social?.facebook) yield ['business.social.facebook', b.social.facebook]
  for (const [i, s] of (site.sections || []).entries()) for (const [j, it] of (s.items || []).entries()) for (const k of ['url', 'source_url']) if (it[k]) yield [`sections.${i}.items.${j}.${k}`, it[k]]
}

export function moderate(site) {
  const blocked = [], review = []
  for (const [p, t] of texts(site)) {
    for (const [re, label] of FORBIDDEN_CATEGORY) if (re.test(t)) blocked.push({ path: p, rule: 'categoria vietata', detail: label })
    for (const re of PHISHING_PHRASES) if (re.test(t)) blocked.push({ path: p, rule: 'possibile phishing', detail: String(re) })
    if (BRANDS.test(t) && !BRANDS.test(site.business?.name || '')) review.push({ path: p, rule: 'marchio di terzi citato', detail: t.match(BRANDS)[0] })
  }
  for (const [p, u] of urls(site)) {
    let h; try { h = new URL(u) } catch { blocked.push({ path: p, rule: 'URL non valido', detail: u }); continue }
    if (h.protocol !== 'https:') blocked.push({ path: p, rule: 'solo https', detail: u })
    if (h.username || h.password) blocked.push({ path: p, rule: 'credenziali nell’URL', detail: u })
    if (SHORTENERS.test(h.hostname)) blocked.push({ path: p, rule: 'link accorciato', detail: h.hostname })
    if (/xn--/.test(h.hostname)) blocked.push({ path: p, rule: 'dominio punycode (omografi)', detail: h.hostname })
    if (/^\d+\.\d+\.\d+\.\d+$/.test(h.hostname)) blocked.push({ path: p, rule: 'indirizzo IP al posto del dominio', detail: h.hostname })
  }
  if (DISPOSABLE.test(site.business?.email || '')) review.push({ path: 'business.email', rule: 'email usa e getta', detail: site.business.email })
  const blockedTotal = blocked.length > 0
  return { blocked: blockedTotal, needs_human: !blockedTotal && (review.length > 0 || ['health', 'legal', 'finance'].includes(site.compliance?.regulated)), blocked_reasons: blocked, review_reasons: review }
}

// ---- gate di pubblicazione ----
export function canPublish(site, env = {}) {
  const reasons = []
  if (env.PUBLISH_ENABLED !== 'true') reasons.push('pubblicazione disattivata (beta chiusa, decisione di Ale)')
  const v = validateSite({ ...site, status: 'live' }); for (const e of v.errors) reasons.push(`${e.path}: ${e.msg}`)
  const m = moderate(site); if (m.blocked) reasons.push('moderazione: contenuto bloccato'); if (m.needs_human && !site.compliance?.human_approved) reasons.push('moderazione: serve approvazione umana')
  if (site.compliance?.regulated && site.compliance.regulated !== 'none' && !site.compliance.regulated_ack) reasons.push('settore regolamentato: serve la presa visione dei limiti di comunicazione')
  if (!env.USER_DOMAIN) reasons.push('dominio dei siti utente non configurato')
  return { allowed: reasons.length === 0, reasons }
}

// ---- audit dell'HTML generato (equivalente del postbuild dell'installer) ----
const TRACKERS = /(googletagmanager|google-analytics|gtag\(|fbq\(|facebook\.net|hotjar|clarity\.ms|segment\.com|mixpanel|matomo|plausible|umami|doubleclick|adsbygoogle|tiktok|linkedin\.com\/insight|fonts\.googleapis|fonts\.gstatic|cdnjs|jsdelivr|unpkg|youtube\.com\/embed|maps\.googleapis)/i
export function auditHtml(html, { page = 'index.html' } = {}) {
  const issues = []
  const add = (sev, msg) => issues.push({ sev, page, msg })
  if (/<script\b(?![^>]*application\/ld\+json)/i.test(html)) add('error', 'JavaScript presente')
  if (TRACKERS.test(html)) add('error', 'tracker o risorsa di terzi: ' + html.match(TRACKERS)[0])
  for (const m of html.matchAll(/\b(?:src|srcset|data)=["']?(https?:)?\/\/[^"' >]+/gi)) add('error', 'risorsa caricata da terzi: ' + m[0])
  for (const m of html.matchAll(/<link\b[^>]*\bhref=["'](https?:)?\/\/[^"']+["'][^>]*>/gi)) if (!/rel=["']canonical["']/.test(m[0])) add('error', 'link a risorsa esterna: ' + m[0].slice(0, 80))
  if (/url\(\s*["']?https?:/i.test(html)) add('error', 'CSS con url() esterno')
  if (!/<html lang="[a-z]{2}"/.test(html)) add('error', 'manca lang')
  if ((html.match(/<h1[\s>]/g) || []).length !== 1) add('error', 'serve esattamente un h1')
  if (!/<title>[^<]{5,}/.test(html)) add('error', 'title mancante')
  if (!/<meta name="description"/.test(html)) add('error', 'description mancante')
  for (const m of html.matchAll(/<img\b[^>]*>/gi)) if (!/\balt="[^"]+"/.test(m[0])) add('error', 'img senza alt')
  for (const m of html.matchAll(/<(input|textarea)\b([^>]*)>/gi)) {
    if (/type="(hidden)"/.test(m[2]) || /tabindex="-1"/.test(m[2])) continue
    const id = /\bid="([^"]+)"/.exec(m[2])?.[1]
    if (!id || !new RegExp(`<label for="${id}"`).test(html)) add('error', `campo senza etichetta visibile: ${id || m[0].slice(0, 40)}`)
  }
  for (const m of html.matchAll(/<a\b[^>]*href="#"[^>]*>/gi)) add('error', 'href="#" vuoto')
  const bytes = new TextEncoder().encode(html).length; if (bytes > 40 * 1024) add('warn', `pagina di ${bytes} byte (> 40 KB)`)
  return { ok: !issues.some((i) => i.sev === 'error'), issues, bytes }
}
