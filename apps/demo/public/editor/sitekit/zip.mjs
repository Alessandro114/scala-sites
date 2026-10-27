// ZIP "store" (senza compressione) scritto a mano: gira in Node e nel browser, zero dipendenze.
// HTML e CSS sono piccoli, le immagini sono gia' WebP/JPEG compresse: la compressione non servirebbe.
const T = (() => { const t = new Uint32Array(256); for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0 } return t })()
export function crc32(u8) { let c = 0xFFFFFFFF; for (let i = 0; i < u8.length; i++) c = T[(c ^ u8[i]) & 255] ^ (c >>> 8); return (c ^ 0xFFFFFFFF) >>> 0 }

// files: { 'percorso/nome': string | Uint8Array }  ->  Uint8Array dello zip. Date fisse (1/1/2026): build riproducibile.
export function zipStore(files) {
  const enc = new TextEncoder(), parts = [], central = []; let offset = 0
  const DOS_TIME = 0, DOS_DATE = ((2026 - 1980) << 9) | (1 << 5) | 1
  for (const [name, content] of Object.entries(files)) {
    if (/^\/|\.\.|\\/.test(name)) throw new Error('percorso non valido nello zip: ' + name)
    const nameB = enc.encode(name), data = typeof content === 'string' ? enc.encode(content) : content, crc = crc32(data)
    const h = new DataView(new ArrayBuffer(30)); h.setUint32(0, 0x04034b50, true); h.setUint16(4, 20, true); h.setUint16(6, 0x0800, true); h.setUint16(8, 0, true); h.setUint16(10, DOS_TIME, true); h.setUint16(12, DOS_DATE, true); h.setUint32(14, crc, true); h.setUint32(18, data.length, true); h.setUint32(22, data.length, true); h.setUint16(26, nameB.length, true); h.setUint16(28, 0, true)
    parts.push(new Uint8Array(h.buffer), nameB, data)
    const c = new DataView(new ArrayBuffer(46)); c.setUint32(0, 0x02014b50, true); c.setUint16(4, 20, true); c.setUint16(6, 20, true); c.setUint16(8, 0x0800, true); c.setUint16(10, 0, true); c.setUint16(12, DOS_TIME, true); c.setUint16(14, DOS_DATE, true); c.setUint32(16, crc, true); c.setUint32(20, data.length, true); c.setUint32(24, data.length, true); c.setUint16(28, nameB.length, true); c.setUint32(42, offset, true)
    central.push(new Uint8Array(c.buffer), nameB)
    offset += 30 + nameB.length + data.length
  }
  const cdSize = central.reduce((n, p) => n + p.length, 0), n = Object.keys(files).length
  const e = new DataView(new ArrayBuffer(22)); e.setUint32(0, 0x06054b50, true); e.setUint16(8, n, true); e.setUint16(10, n, true); e.setUint32(12, cdSize, true); e.setUint32(16, offset, true)
  const all = [...parts, ...central, new Uint8Array(e.buffer)], out = new Uint8Array(all.reduce((m, p) => m + p.length, 0)); let o = 0
  for (const p of all) { out.set(p, o); o += p.length }
  return out
}
