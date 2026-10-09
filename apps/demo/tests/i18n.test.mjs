// Run: node --test tests/   (no build needed; reads the JSON dictionaries and the catalog source)
import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'app')
const LANGS = ['en', 'it', 'es', 'pt', 'de', 'fr']
const dict = Object.fromEntries(LANGS.map((l) => [l, JSON.parse(readFileSync(join(root, 'lib/i18n', `${l}.json`), 'utf8'))]))
const catalogSrc = readFileSync(join(root, 'lib/catalog.ts'), 'utf8')
const slugs = [...catalogSrc.matchAll(/slug:\s*'\/([^']+)'/g)].map((m) => m[1])
const categories = [...new Set([...catalogSrc.matchAll(/category:\s*'([^']+)'/g)].map((m) => m[1]))]

// Values that legitimately stay identical to English (brand names, loanwords, product names).
const SAME_AS_EN_OK = new Set([
  'ui:nav.platform', 'ui:cta.platform', 'ui:eco.app',
  'ui:hero.title2', // "Open Source." is used as-is in DE
  'ui:banner.eyebrow', 'ui:footer.poweredBy', // "Powered by" is used as-is in IT/DE
  'ui:cat.Food & Drink', // IT keeps the English term
  'ui:eco.website', // DE "Website"
  'ui:hero.tagTemplates', // DE "{n} Templates"
])

const STOP = {
  en: [' the ', ' and ', ' with ', ' for ', ' of '],
  it: [' il ', ' di ', ' per ', ' con ', ' della ', ' sono '],
  es: [' el ', ' los ', ' las ', ' para ', ' con ', ' una '],
  pt: [' para ', ' com ', ' uma ', ' não ', ' dos ', ' das '],
  de: [' der ', ' die ', ' das ', ' und ', ' mit ', ' für '],
  fr: [' le ', ' les ', ' des ', ' pour ', ' avec ', ' une '],
}
const pad = (s) => ` ${s.replace(/\b(MIT|AI OS|City of London)\b/g, '').toLowerCase()} `

test('same keys in every language', () => {
  for (const sec of ['ui', 'tag']) {
    const ref = Object.keys(dict.en[sec]).sort()
    for (const l of LANGS) assert.deepEqual(Object.keys(dict[l][sec]).sort(), ref, `${l}.${sec} keys differ from en`)
  }
})

test('tagline keys == real template slugs; categories all translated', () => {
  assert.equal(slugs.length, new Set(slugs).size, 'duplicate slugs in catalog')
  assert.deepEqual(Object.keys(dict.en.tag).sort(), [...slugs].sort())
  for (const c of categories) assert.ok(dict.en.ui[`cat.${c}`], `missing cat.${c}`)
})

test('no empty values, placeholders preserved', () => {
  for (const sec of ['ui', 'tag'])
    for (const [k, en] of Object.entries(dict.en[sec]))
      for (const l of LANGS) {
        const v = dict[l][sec][k]
        assert.ok(v && v.trim(), `${l}.${sec}.${k} empty`)
        const ph = (s) => [...s.matchAll(/\{\w+\}/g)].map((m) => m[0]).sort().join()
        assert.equal(ph(v), ph(en), `${l}.${sec}.${k} placeholders differ`)
      }
})

test('no untranslated strings (identical to EN) outside the allowlist', () => {
  for (const sec of ['ui', 'tag'])
    for (const [k, en] of Object.entries(dict.en[sec]))
      for (const l of LANGS.filter((x) => x !== 'en'))
        if (dict[l][sec][k] === en) assert.ok(SAME_AS_EN_OK.has(`${sec}:${k}`), `${l}.${sec}.${k} is still English`)
})

test('no wrong-language stopwords', () => {
  for (const sec of ['ui', 'tag'])
    for (const l of LANGS)
      for (const [k, v] of Object.entries(dict[l][sec])) {
        const s = pad(v)
        for (const other of LANGS.filter((x) => x !== l)) {
          if (other === 'en' && l !== 'en') {
            // ES/PT/FR/IT/DE strings must not contain English function words
            const hit = STOP.en.find((w) => s.includes(w))
            assert.ok(!hit, `${l}.${sec}.${k} contains English word "${hit?.trim()}": ${v}`)
          }
        }
        if (l === 'en') {
          const hit = [...STOP.it, ...STOP.es, ...STOP.pt, ...STOP.de, ...STOP.fr].find((w) => s.includes(w) && !STOP.en.includes(w))
          assert.ok(!hit, `en.${sec}.${k} contains non-English word "${hit?.trim()}": ${v}`)
        }
      }
})

test('template count claimed in metadata matches the catalog', () => {
  const layout = readFileSync(join(root, 'layout.tsx'), 'utf8')
  const nums = [...layout.matchAll(/'?(\d+) (?:Industry Website Templates|production-ready|templates)/g)].map((m) => Number(m[1]))
  assert.ok(nums.length >= 3, 'expected count claims in layout metadata')
  for (const n of nums) assert.equal(n, slugs.length, `layout.tsx claims ${n} templates, catalog has ${slugs.length}`)
})
