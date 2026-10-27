// Modello del sito (JSON) e validazione. Nessuna dipendenza: la stessa funzione gira in Node, in un Worker e nel test.
import { CLIENT_THEMES, THEMES, isHex } from './theme.mjs'
import { DAYS } from './i18n.mjs'

export const SCHEMA_VERSION = 1
export const STATUSES = ['draft', 'review', 'preview', 'live', 'suspended']
export const SECTION_TYPES = ['hero', 'about', 'services', 'hours', 'gallery', 'reviews', 'contact', 'map', 'faq', 'request', 'event', 'links']
export const REGULATED = ['none', 'health', 'legal', 'finance']
// Tipi schema.org ammessi (whitelist: nessun tipo scelto liberamente dall'utente o dall'AI).
export const SCHEMA_TYPES = ['LocalBusiness', 'Restaurant', 'CafeOrCoffeeShop', 'BarOrPub', 'Bakery', 'HairSalon', 'BeautySalon', 'BarberShop', 'Plumber', 'Electrician', 'HomeAndConstructionBusiness', 'GeneralContractor', 'LegalService', 'AccountingService', 'ProfessionalService', 'Dentist', 'MedicalClinic', 'Physiotherapy', 'LodgingBusiness', 'BedAndBreakfast', 'Hotel', 'GymOrFitnessClub', 'SportsActivityLocation', 'Store', 'ClothingStore', 'Florist', 'Organization', 'NGO', 'ProfilePage']
export const LIMITS = { sections: 14, services: 40, faq: 20, gallery: 12, reviews: 12, links: 12, text: 1200, short: 160, name: 80 }

const SAFE = /^[^<>\u0000]*$/ // niente tag: il renderer fa comunque escape, ma i dati restano puliti
const TIME = /^([01]\d|2[0-3]):[0-5]\d$/
const PHONE = /^\+?[0-9 ()./-]{6,20}$/
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
export const ASSET = /^assets\/[a-z0-9][a-z0-9._-]{0,80}\.(webp|jpg|jpeg|png|avif)$/i
const HTTPS = /^https:\/\/[^\s<>"']+$/i

export function validateSite(site) {
  const errors = [], warnings = []
  const err = (path, msg) => errors.push({ path, msg })
  const str = (v, path, { max = LIMITS.short, required = false } = {}) => {
    if (v == null || v === '') { if (required) err(path, 'obbligatorio'); return }
    if (typeof v !== 'string') return err(path, 'deve essere testo')
    if (v.length > max) err(path, `massimo ${max} caratteri`)
    if (!SAFE.test(v)) err(path, 'non usare < >')
  }
  if (!site || typeof site !== 'object') return { ok: false, errors: [{ path: '', msg: 'sito mancante' }], warnings }
  if (site.schema_version !== SCHEMA_VERSION) err('schema_version', `atteso ${SCHEMA_VERSION}`)
  if (!/^[a-z0-9][a-z0-9-]{2,40}$/.test(site.slug || '')) err('slug', 'minuscolo, cifre e trattini, 3-41 caratteri')
  if (!['it', 'en'].includes(site.locale)) err('locale', 'it | en')
  if (!STATUSES.includes(site.status)) err('status', STATUSES.join(' | '))
  if (!site.template) err('template', 'obbligatorio')

  const b = site.business || {}
  str(b.name, 'business.name', { required: true, max: LIMITS.name })
  str(b.tagline, 'business.tagline'); str(b.description, 'business.description', { max: 300 })
  if (b.phone && !PHONE.test(b.phone)) err('business.phone', 'formato non valido')
  if (b.whatsapp && !PHONE.test(b.whatsapp)) err('business.whatsapp', 'formato non valido')
  if (b.email && !EMAIL.test(b.email)) err('business.email', 'formato non valido')
  if (!b.phone && !b.email && !b.whatsapp) err('business', 'serve almeno un telefono, un WhatsApp o un’email')
  const a = b.address
  if (a) { for (const k of ['street', 'postal_code', 'city', 'province']) str(a[k], `business.address.${k}`, { max: 80 }); if (a.postal_code && !/^\d{5}$/.test(a.postal_code)) err('business.address.postal_code', 'CAP di 5 cifre'); if (a.province && !/^[A-Za-z]{2}$/.test(a.province)) err('business.address.province', 'sigla di 2 lettere') }
  if (b.geo && !(Math.abs(b.geo.lat) <= 90 && Math.abs(b.geo.lng) <= 180)) err('business.geo', 'coordinate non valide')
  for (const [i, h] of (b.hours || []).entries()) {
    if (!Array.isArray(h.days) || !h.days.length || h.days.some((d) => !DAYS.includes(d))) err(`business.hours.${i}.days`, 'giorni: ' + DAYS.join(','))
    if (!TIME.test(h.opens || '') || !TIME.test(h.closes || '')) err(`business.hours.${i}`, 'orari HH:MM')
    else if (h.opens >= h.closes) err(`business.hours.${i}`, 'apertura prima della chiusura (per orari oltre mezzanotte usare due fasce)')
  }
  for (const k of ['instagram', 'facebook']) if (b.social?.[k] && !HTTPS.test(b.social[k]) && k === 'facebook') err(`business.social.${k}`, 'https://')

  const br = site.brand || {}
  if (br.theme && !THEMES[br.theme]) err('brand.theme', 'tema sconosciuto')
  if (br.accent && !isHex(br.accent)) err('brand.accent', 'colore #rrggbb')

  if (!SCHEMA_TYPES.includes(site.schema_org?.type)) err('schema_org.type', 'tipo non ammesso')

  const secs = site.sections
  if (!Array.isArray(secs) || !secs.length) err('sections', 'almeno una sezione')
  else {
    if (secs.length > LIMITS.sections) err('sections', `massimo ${LIMITS.sections}`)
    const ids = new Set()
    secs.forEach((s, i) => {
      const p = `sections.${i}`
      if (!SECTION_TYPES.includes(s.type)) return err(p + '.type', 'sezione sconosciuta')
      if (!/^[a-z0-9][a-z0-9-]{0,30}$/.test(s.id || '')) err(p + '.id', 'id: minuscole, cifre e trattini (max 31)'); else if (ids.has(s.id)) err(p + '.id', 'id duplicato'); ids.add(s.id)
      str(s.title, p + '.title', { max: 80 })
      if (s.type === 'hero') { str(s.headline, p + '.headline', { required: true, max: 100 }); str(s.subheadline, p + '.subheadline', { max: 220 }); if (s.cta && !['whatsapp', 'call', 'request', 'directions'].includes(s.cta)) err(p + '.cta', 'cta sconosciuta') }
      if (s.type === 'about') str(s.text, p + '.text', { max: LIMITS.text, required: true })
      if (s.type === 'services') { if (!Array.isArray(s.items) || s.items.length > LIMITS.services) err(p + '.items', `1-${LIMITS.services} voci`); (s.items || []).forEach((it, j) => { str(it.name, `${p}.items.${j}.name`, { required: true, max: 80 }); str(it.description, `${p}.items.${j}.description`, { max: 300 }); str(it.price, `${p}.items.${j}.price`, { max: 30 }) }) }
      if (s.type === 'faq') { if (!Array.isArray(s.items) || s.items.length > LIMITS.faq) err(p + '.items', `1-${LIMITS.faq} voci`); (s.items || []).forEach((it, j) => { str(it.q, `${p}.items.${j}.q`, { required: true, max: 160 }); str(it.a, `${p}.items.${j}.a`, { required: true, max: 600 }) }) }
      if (s.type === 'gallery') { if ((s.items || []).length > LIMITS.gallery) err(p + '.items', `massimo ${LIMITS.gallery}`); (s.items || []).forEach((it, j) => { if (!ASSET.test(it.src || '')) err(`${p}.items.${j}.src`, 'solo file caricati: assets/nome.webp|jpg|png|avif'); if (!it.alt) err(`${p}.items.${j}.alt`, 'testo alternativo obbligatorio'); str(it.alt, `${p}.items.${j}.alt`, { max: 140 }) }) }
      if (s.type === 'reviews') (s.items || []).forEach((it, j) => {
        // Recensioni solo VERE: servono fonte e consenso dell'autore. Niente fonte = errore, non avviso.
        str(it.author, `${p}.items.${j}.author`, { required: true, max: 60 }); str(it.text, `${p}.items.${j}.text`, { required: true, max: 500 })
        if (!it.source) err(`${p}.items.${j}.source`, 'indica dove e’ stata scritta (es. Google, di persona)')
        if (it.consent !== true) err(`${p}.items.${j}.consent`, 'serve il consenso dell’autore a pubblicarla')
        if (it.source_url && !HTTPS.test(it.source_url)) err(`${p}.items.${j}.source_url`, 'https://')
        if (it.rating != null && !(it.rating >= 1 && it.rating <= 5)) err(`${p}.items.${j}.rating`, '1-5')
      })
      if (s.type === 'links') (s.items || []).forEach((it, j) => { str(it.label, `${p}.items.${j}.label`, { required: true, max: 60 }); if (!HTTPS.test(it.url || '')) err(`${p}.items.${j}.url`, 'https://') })
      if (s.type === 'event') { if (isNaN(Date.parse(s.starts_at))) err(p + '.starts_at', 'data ISO 8601'); str(s.place, p + '.place', { max: 120 }); str(s.text, p + '.text', { max: LIMITS.text }) }
    })
  }
  const seo = site.seo || {}
  str(seo.title, 'seo.title', { required: true, max: 70 }); str(seo.description, 'seo.description', { required: true, max: 170 })
  if (seo.indexable === true && site.compliance?.content_reviewed !== true) err('seo.indexable', 'indicizzabile solo con content_reviewed=true')
  if (site.lead && !['links', 'form'].includes(site.lead.mode)) err('lead.mode', 'links | form')
  const c = site.compliance || {}
  if (!REGULATED.includes(c.regulated || 'none')) err('compliance.regulated', REGULATED.join(' | '))
  if (c.cookie_mode && c.cookie_mode !== 'none') err('compliance.cookie_mode', 'in MVP solo "none": nessun cookie, nessun tracciamento di terzi')
  if (site.status === 'live') {
    if (c.content_reviewed !== true) err('compliance.content_reviewed', 'la pubblicazione richiede content_reviewed=true')
    if ((c.flags || []).length) err('compliance.flags', `${c.flags.length} contenuti ancora "da verificare"`)
    const ct = c.controller || {}
    if (!ct.name) err('compliance.controller.name', 'titolare del trattamento obbligatorio')
    if (!ct.email) err('compliance.controller.email', 'contatto privacy obbligatorio')
  }
  return { ok: errors.length === 0, errors, warnings }
}

export const hasSection = (site, type) => (site.sections || []).some((s) => s.type === type && s.visible !== false)
export { CLIENT_THEMES }
