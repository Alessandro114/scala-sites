// schema.org generato dai CAMPI strutturati, mai dal testo libero e mai dall'AI.
// Niente aggregateRating/Review: markup di recensioni sulla propria attivita' e' "self-serving" e non e' ammesso per LocalBusiness.
import { DAYS, SCHEMA_DAY } from '/editor/sitekit/i18n.mjs'

export function openingHoursSpec(hours = []) {
  return hours.map((h) => ({ '@type': 'OpeningHoursSpecification', dayOfWeek: h.days.filter((d) => DAYS.includes(d)).map((d) => SCHEMA_DAY[d]), opens: h.opens, closes: h.closes }))
}
const e164 = (p) => { const d = String(p || '').replace(/[^\d+]/g, ''); if (!d) return undefined; if (d.startsWith('+')) return d; if (d.startsWith('00')) return '+' + d.slice(2); return '+39' + d }

export function buildJsonLd(site, baseUrl) {
  const b = site.business, a = b.address
  const node = { '@context': 'https://schema.org', '@type': site.schema_org.type, name: b.name }
  if (baseUrl) { node.url = baseUrl; node['@id'] = baseUrl + '#attivita' }
  if (b.description) node.description = b.description
  const tel = e164(b.phone); if (tel) node.telephone = tel
  if (b.email) node.email = b.email
  if (a && a.street && a.city) node.address = { '@type': 'PostalAddress', streetAddress: a.street, postalCode: a.postal_code, addressLocality: a.city, addressRegion: a.province?.toUpperCase(), addressCountry: a.country || 'IT' }
  if (b.geo) node.geo = { '@type': 'GeoCoordinates', latitude: b.geo.lat, longitude: b.geo.lng }
  if (b.hours?.length) node.openingHoursSpecification = openingHoursSpec(b.hours)
  if (b.price_range) node.priceRange = b.price_range
  if ((b.service_area || []).length) node.areaServed = b.service_area.map((n) => ({ '@type': 'City', name: n }))
  const same = [b.social?.facebook, b.social?.instagram && `https://www.instagram.com/${String(b.social.instagram).replace(/^@/, '')}`].filter(Boolean)
  if (same.length) node.sameAs = same
  if (b.vat_id) node.vatID = b.vat_id
  const out = [node]
  const ev = (site.sections || []).find((s) => s.type === 'event' && s.visible !== false)
  if (ev) out.push({ '@context': 'https://schema.org', '@type': 'Event', name: ev.title || b.name, startDate: ev.starts_at, ...(ev.ends_at ? { endDate: ev.ends_at } : {}), ...(ev.place ? { location: { '@type': 'Place', name: ev.place } } : {}), eventStatus: 'https://schema.org/EventScheduled', organizer: { '@type': 'Organization', name: b.name } })
  return out
}
// '<' escapato: il JSON dentro <script type=application/ld+json> non puo' chiudere il tag.
export const jsonLdScript = (nodes) => nodes.map((n) => `<script type="application/ld+json">${JSON.stringify(n).replace(/</g, '\\u003c')}</script>`).join('')
