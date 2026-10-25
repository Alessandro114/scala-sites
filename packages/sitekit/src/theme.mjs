// Temi: token del design system S.C.A.L.A. (siti nostri) + palette di default per i siti dei clienti.
// Ogni coppia testo/sfondo usata dal renderer e' verificata a >= 4,5:1 nei test (tests/theme.test.mjs).

export const SCALA_DARK = { bg: '#0B1120', surface: '#111827', fg: '#E2E8F0', muted: '#94A3B8', border: '#334155', accent: '#D4AF37', onAccent: '#0B1120', link: '#E6C24A', focus: '#D4AF37', scheme: 'dark' }
export const SCALA_LIGHT = { bg: '#F7F8FB', surface: '#FFFFFF', fg: '#0B1F3A', muted: '#4A5A72', border: '#D5DCE8', accent: '#D4AF37', onAccent: '#0B1120', link: '#1A3FA0', focus: '#0B1F3A', scheme: 'light' }

export const THEMES = {
  'scala-dark': SCALA_DARK,
  'scala-light': SCALA_LIGHT,
  sabbia: { bg: '#FBF7F0', surface: '#FFFFFF', fg: '#2B2118', muted: '#5E5348', border: '#DCCFBE', accent: '#9A4608', onAccent: '#FFFFFF', link: '#8A3E06', focus: '#2B2118', scheme: 'light' },
  salvia: { bg: '#F4F8F4', surface: '#FFFFFF', fg: '#14301F', muted: '#436050', border: '#CBDDCF', accent: '#1F6B3A', onAccent: '#FFFFFF', link: '#1A5C32', focus: '#14301F', scheme: 'light' },
  mare: { bg: '#F3F7FB', surface: '#FFFFFF', fg: '#0E2236', muted: '#43566B', border: '#CAD8E6', accent: '#14609F', onAccent: '#FFFFFF', link: '#0F4F86', focus: '#0E2236', scheme: 'light' },
  terracotta: { bg: '#FAF4F1', surface: '#FFFFFF', fg: '#3A1D16', muted: '#68463D', border: '#E6D2CB', accent: '#A8381D', onAccent: '#FFFFFF', link: '#963017', focus: '#3A1D16', scheme: 'light' },
  grafite: { bg: '#F5F5F6', surface: '#FFFFFF', fg: '#1B1D21', muted: '#51555D', border: '#D8DADF', accent: '#2B3340', onAccent: '#FFFFFF', link: '#1F4FB0', focus: '#1B1D21', scheme: 'light' },
  notte: { bg: '#10141C', surface: '#171C27', fg: '#E8EAEF', muted: '#A3ABBB', border: '#2D3547', accent: '#E0B84A', onAccent: '#10141C', link: '#EDC965', focus: '#E0B84A', scheme: 'dark' },
}
export const CLIENT_THEMES = ['sabbia', 'salvia', 'mare', 'terracotta', 'grafite', 'notte']

const hexToRgb = (h) => { const m = /^#([0-9a-f]{6})$/i.exec(h); if (!m) throw new Error('colore non valido: ' + h); const n = parseInt(m[1], 16); return [n >> 16 & 255, n >> 8 & 255, n & 255] }
export const luminance = (hex) => { const [r, g, b] = hexToRgb(hex).map((v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4 }); return 0.2126 * r + 0.7152 * g + 0.0722 * b }
export const contrast = (a, b) => { const [x, y] = [luminance(a), luminance(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05) }
export const isHex = (v) => /^#[0-9a-fA-F]{6}$/.test(v || '')

// Coppie testo/sfondo che il renderer usa davvero. Minimo 4,5:1.
export const THEME_PAIRS = [['fg', 'bg'], ['fg', 'surface'], ['muted', 'bg'], ['muted', 'surface'], ['link', 'bg'], ['link', 'surface'], ['onAccent', 'accent']]
export function checkTheme(t) { return THEME_PAIRS.map(([f, b]) => ({ pair: `${f}/${b}`, ratio: +contrast(t[f], t[b]).toFixed(2) })).filter((x) => x.ratio < 4.5) }

// Il colore del brand dell'utente e' usato SOLO come sfondo di pulsanti/bordi: il colore del testo sul pulsante e' calcolato,
// cosi' qualunque colore scelto resta leggibile (il migliore tra nero e bianco supera sempre 4,58:1).
export function resolveTheme(name, brandAccent) {
  const base = { ...(THEMES[name] || THEMES.sabbia) }
  if (isHex(brandAccent)) {
    base.accent = brandAccent
    const ink = base.scheme === 'dark' ? '#10141C' : '#FFFFFF'
    base.onAccent = [ink, '#000000', '#FFFFFF'].find((c) => contrast(c, brandAccent) >= 4.5) || '#000000'
  }
  return base
}

export const themeVars = (t) => `--bg:${t.bg};--surface:${t.surface};--fg:${t.fg};--muted:${t.muted};--border:${t.border};--accent:${t.accent};--on-accent:${t.onAccent};--link:${t.link};--focus:${t.focus};color-scheme:${t.scheme}`
