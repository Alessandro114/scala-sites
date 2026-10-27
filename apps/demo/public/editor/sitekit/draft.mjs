// Dai fatti forniti dall'utente a una bozza di sito. Regola unica: l'AI non aggiunge FATTI, solo riscrive quelli forniti.
// - ogni testo scritto dall'AI finisce in compliance.flags ("da verificare") e il sito non si pubblica finche' il titolare non li conferma;
// - checkInvention() blocca numeri, anni, prezzi, orari e vanti ("migliore", "leader", "dal 1985"...) che non compaiono nei fatti.
import { getTemplate } from '/editor/sitekit/templates.mjs'
import { parseMapsUrl } from '/editor/sitekit/maps.mjs'

const CLAIMS = /\b(migliore|migliori|leader|unic[oa]|premiat[oaie]|certificat[oaie]|garantit[oaie]|storic[oa]|generazioni|ventennale|decennale|n\.? ?1|numero 1|a km 0|biologic[oaie]|artigianal[ei])\b|\b(da|dal|dall['’]) ?(oltre|piu['’]|più)?\s*\d+|\boltre \d+|\b\d+ anni\b|\bsince\b/gi
const NUM = /\d[\d.,:]*/g
const norm = (s) => String(s).toLowerCase()

export function checkInvention(text, factsCorpus) {
  const corpus = norm(factsCorpus), found = []
  for (const n of String(text).match(NUM) || []) if (!corpus.includes(norm(n).replace(/[.,:]+$/, ''))) found.push({ kind: 'numero', value: n })
  for (const c of String(text).match(CLAIMS) || []) if (!corpus.includes(norm(c).trim())) found.push({ kind: 'vanto', value: c })
  return { ok: found.length === 0, found }
}

export const factsCorpus = (facts) => JSON.stringify(facts).toLowerCase() + ' ' + String(facts.free_text || '').toLowerCase()

// Estrazione deterministica dal testo libero: serve a pre-compilare e a confrontare, non a decidere.
export function extractFromText(t = '') {
  return {
    emails: [...new Set(t.match(/[^\s@,;:()<>]+@[^\s@,;:()<>]+\.[a-z]{2,}/gi) || [])],
    phones: [...new Set((t.match(/(?:\+39[ ]?)?\b3\d{2}[ .-]?\d{6,7}\b|(?:\+39[ ]?)?\b0\d{1,3}[ .-]?\d{5,8}\b/g) || []).map((x) => x.trim()))],
    times: [...new Set(t.match(/\b([01]?\d|2[0-3])[:.][0-5]\d\b/g) || [])],
    prices: [...new Set(t.match(/\d+[.,]?\d*\s?(€|euro)|€\s?\d+[.,]?\d*/gi) || [])],
  }
}

export function buildPrompt(facts, tpl) {
  return {
    system: `Sei un redattore di siti per piccole attivita’ italiane. Scrivi in italiano naturale, frasi brevi, tono caldo e concreto. REGOLE ASSOLUTE: usa SOLO i fatti forniti; non inventare orari, prezzi, anni di attivita’, premi, certificazioni, numeri di clienti, recensioni, ingredienti, titoli o nomi; non usare superlativi ("il migliore", "unico", "leader"); se un'informazione manca, lasciala vuota (stringa vuota). Rispondi SOLO con JSON: {"headline":"","subheadline":"","about":""}. headline max 70 caratteri, subheadline max 160, about max 700.`,
    user: JSON.stringify({ tipo_attivita: tpl.noun, nome: facts.name, citta: facts.address?.city, testo_libero_del_titolare: facts.free_text || '', servizi_forniti: (facts.services || []).map((s) => s.name) }),
  }
}

const slugify = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40)

// llm: async ({system,user}) => string JSON. Opzionale: senza LLM la bozza e' interamente deterministica.
export async function draftSite({ facts, templateId, llm, id }) {
  const tpl = getTemplate(templateId); if (!tpl) throw new Error('template sconosciuto: ' + templateId)
  const flags = [], notes = []
  const maps = facts.maps_url ? parseMapsUrl(facts.maps_url) : null
  if (maps?.name && !facts.name) facts = { ...facts, name: maps.name }
  if (maps?.geo && !facts.geo) facts = { ...facts, geo: maps.geo }
  const corpus = factsCorpus(facts), city = facts.address?.city
  let ai = { headline: '', subheadline: '', about: '' }
  if (llm) {
    try {
      const raw = await llm(buildPrompt(facts, tpl)); const j = JSON.parse(String(raw).replace(/^```json\s*|```$/g, ''))
      for (const k of Object.keys(ai)) if (typeof j[k] === 'string') ai[k] = j[k].trim()
    } catch { notes.push('AI non disponibile o risposta non valida: bozza dai soli fatti') }
    for (const k of Object.keys(ai)) if (ai[k]) { const c = checkInvention(ai[k], corpus); if (!c.ok) { notes.push(`scartato "${k}" scritto dall’AI: contiene ${c.found.map((x) => x.value).join(', ')}`); ai[k] = '' } }
  }
  const sections = []
  const push = (s) => { sections.push(s); return sections.length - 1 }
  let i = push({ id: 'hero', type: 'hero', headline: ai.headline || facts.name, subheadline: ai.subheadline || [tpl.noun, city && `a ${city}`].filter(Boolean).join(' '), cta: tpl.cta })
  if (ai.headline) flags.push(`sections.${i}.headline`); if (ai.subheadline) flags.push(`sections.${i}.subheadline`)
  const aboutText = ai.about || facts.free_text?.trim()
  if (aboutText) { i = push({ id: 'about', type: 'about', text: aboutText.slice(0, 1200) }); flags.push(`sections.${i}.text`) } else notes.push('Manca la presentazione: scrivi 2-3 frasi su di voi (la sezione resta nascosta finche’ non c’e’).')
  if (tpl.sections.includes('services')) {
    if (facts.services?.length) { i = push({ id: 'services', type: 'services', title: tpl.servicesTitle, items: facts.services.map((s) => ({ name: s.name, ...(s.description ? { description: s.description } : {}), ...(s.price ? { price: s.price } : {}) })) }); facts.services.forEach((s, j) => { if (s.price) flags.push(`sections.${i}.items.${j}.price`) }) } else notes.push(`Mancano ${tpl.servicesTitle.toLowerCase()}: elenca nome (e, se vuoi, prezzo) di ciascuno. Nessun prezzo viene inventato.`)
  }
  if (facts.hours?.length && tpl.sections.includes('hours')) push({ id: 'hours', type: 'hours' }); else if (tpl.sections.includes('hours')) notes.push('Mancano gli orari: senza non vengono mostrati ne’ inseriti nei dati per Google.')
  if (facts.gallery?.length) push({ id: 'gallery', type: 'gallery', items: facts.gallery }); else notes.push('Nessuna foto caricata: la galleria resta nascosta. Carica foto TUE (nessuna immagine di repertorio viene inserita al posto delle tue).')
  if (facts.reviews?.length) push({ id: 'reviews', type: 'reviews', items: facts.reviews }); else notes.push('Recensioni: aggiungile solo se vere e con il consenso dell’autore. Non vengono mai generate.')
  const faq = faqFromFacts(facts)
  if (faq.length) push({ id: 'faq', type: 'faq', items: faq })
  push({ id: 'contact', type: 'contact' }); push({ id: 'request', type: 'request' })
  const site = {
    schema_version: 1, id: id || undefined, slug: slugify(facts.name || 'sito'), locale: 'it', template: tpl.id, status: 'draft',
    business: { name: facts.name, legal_name: facts.legal_name, vat_id: facts.vat_id, address: facts.address, geo: facts.geo, phone: facts.phone, whatsapp: facts.whatsapp, email: facts.email, hours: facts.hours, service_area: facts.service_area, price_range: facts.price_range, social: facts.social },
    brand: { theme: tpl.theme, accent: facts.accent },
    sections,
    seo: { title: `${facts.name}${city ? ` — ${tpl.noun} a ${city}` : ''}`.slice(0, 70), description: (ai.subheadline || `${tpl.noun}${city ? ' a ' + city : ''}: ${facts.name}. Contatti, orari e indicazioni.`).slice(0, 170), indexable: false },
    schema_org: { type: facts.schema_type && tpl.schemaTypes.includes(facts.schema_type) ? facts.schema_type : tpl.schemaTypes[0] },
    compliance: { content_reviewed: false, flags, regulated: tpl.regulated, controller: { name: facts.legal_name || facts.name, vat_id: facts.vat_id, email: facts.email }, cookie_mode: 'none' },
  }
  for (const k of Object.keys(site.business)) if (site.business[k] === undefined) delete site.business[k]
  return { site, notes, flags }
}

export function faqFromFacts(f) {
  const out = [], a = f.address
  if (a?.street && a?.city) out.push({ q: 'Dove siete?', a: `${a.street}, ${a.postal_code || ''} ${a.city}${a.province ? ' (' + a.province.toUpperCase() + ')' : ''}.`.replace(/\s+,/g, ',').replace(/\s{2,}/g, ' ') })
  if (f.phone || f.whatsapp || f.email) out.push({ q: 'Come vi contatto?', a: [f.phone && `Telefono ${f.phone}`, f.whatsapp && `WhatsApp ${f.whatsapp}`, f.email && `email ${f.email}`].filter(Boolean).join(', ') + '.' })
  for (const x of f.faq || []) if (x.q && x.a) out.push({ q: x.q, a: x.a })
  return out
}
