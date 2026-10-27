// Dal link di Google Maps si legge SOLO l'URL che l'utente incolla (nome del posto e coordinate se presenti). Nessuna richiesta a Google:
// orari, telefono e recensioni richiedono Places API (a pagamento, con vincoli di cache) e restano da compilare/incollare a mano.
export function parseMapsUrl(raw) {
  let u; try { u = new URL(raw) } catch { return null }
  if (u.protocol !== 'https:' || !/(^|\.)google\.[a-z.]+$|^maps\.app\.goo\.gl$|^goo\.gl$/.test(u.hostname)) return null
  const place = /\/maps\/place\/([^/@?]+)/.exec(u.pathname)
  const at = /@(-?\d+\.\d+),(-?\d+\.\d+)/.exec(u.pathname)
  const name = place ? decodeURIComponent(place[1].replace(/\+/g, ' ')) : null
  return { name, geo: at ? { lat: +at[1], lng: +at[2] } : null, short: /goo\.gl$/.test(u.hostname) }
}
