import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import { THEMES, checkTheme, resolveTheme, contrast, SCALA_DARK, SCALA_LIGHT } from '../src/theme.mjs'

test('ogni tema ha tutte le coppie testo/sfondo >= 4,5:1', () => {
  for (const [n, t] of Object.entries(THEMES)) assert.deepEqual(checkTheme(t), [], `tema ${n}`)
})
test('i token scala-* coincidono con vendor/tokens.css (design system unico)', () => {
  const css = fs.readFileSync(new URL('../vendor/tokens.css', import.meta.url), 'utf8').toLowerCase()
  for (const t of [SCALA_DARK, SCALA_LIGHT]) for (const k of ['bg', 'surface', 'fg', 'muted', 'border', 'accent', 'link']) assert.ok(css.includes(t[k].toLowerCase()), `${k} ${t[k]} non in tokens.css`)
})
test('qualunque colore di marca produce un testo sul pulsante >= 4,5:1', () => {
  for (const c of ['#FFFF00', '#808080', '#0000FF', '#FF0000', '#00FF00', '#777777', '#D4AF37', '#123456']) for (const th of ['sabbia', 'notte']) {
    const r = resolveTheme(th, c); assert.ok(contrast(r.onAccent, r.accent) >= 4.5, `${c}/${th}`)
  }
})
