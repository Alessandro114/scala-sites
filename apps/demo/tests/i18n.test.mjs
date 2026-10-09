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
  'ui:nav.platform', 'ui:cta.platform',
  'ui:hero.title2', // "Open Source." is used as-is in DE
  'ui:banner.eyebrow', 'ui:footer.poweredBy', // "Powered by" is used as-is in IT/DE
  'ui:cat.Food & Drink', // IT keeps the English term
  'ui:hero.tagTemplates', // DE "{n} Templates"
  'pr:addons.title', // DE "Add-ons"
  'pr:why.1.t', // FR "Consolidation"
  'pr:tco.r2.tool', 'pr:tco.r3.tool', 'pr:tco.r5.tool', // loanwords used as-is (IT/DE/PT/FR)
  'pr:faq.title', // FR "Questions"
  'pr:tco.col.scala', // IT/DE "In SCALA AI OS"
])

// A value made only of brand names, product names, numbers and currency is legitimately identical in every language.
const BRANDS = /SOLO SARA|Growth|Scale|Enterprise|SARA|WhatsApp Business API|WhatsApp|Voice AI|Salesforce CRM|HubSpot Marketing|Zendesk Support|Docebo Academy|Power BI|CRM|Academy|MIT|AI OS/g
const isBrandOnly = (v) => !/[a-zA-Z]/.test(v.replace(BRANDS, ''))

const STOP = {
  en: [' the ', ' and ', ' with ', ' for ', ' of ', ' your ', ' our '],
  it: [' il ', ' di ', ' per ', ' con ', ' della ', ' sono ', ' dei ', ' gli ', ' nel ', ' una ', ' del ', ' un ', ' alla ', ' le ', ' la ', ' che '],
  es: [' el ', ' los ', ' las ', ' para ', ' con ', ' una ', ' del ', ' y ', ' un ', ' la '],
  pt: [' para ', ' com ', ' uma ', ' não ', ' dos ', ' das '],
  de: [' der ', ' die ', ' das ', ' und ', ' mit ', ' für ', ' ein ', ' eine '],
  fr: [' le ', ' les ', ' des ', ' pour ', ' avec ', ' une ', ' du ', ' et ', ' un ', ' la ', ' il '],
}
const pad = (s) => ` ${s.replace(/\b(MIT|AI OS|City of London)\b/g, '').toLowerCase()} `

test('same keys in every language', () => {
  for (const sec of ['ui', 'tag', 'pr']) {
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
  for (const sec of ['ui', 'tag', 'pr'])
    for (const [k, en] of Object.entries(dict.en[sec]))
      for (const l of LANGS) {
        const v = dict[l][sec][k]
        assert.ok(v && v.trim(), `${l}.${sec}.${k} empty`)
        const ph = (s) => [...s.matchAll(/\{\w+\}/g)].map((m) => m[0]).sort().join()
        assert.equal(ph(v), ph(en), `${l}.${sec}.${k} placeholders differ`)
      }
})

test('no untranslated strings (identical to EN) outside the allowlist', () => {
  for (const sec of ['ui', 'tag', 'pr'])
    for (const [k, en] of Object.entries(dict.en[sec]))
      for (const l of LANGS.filter((x) => x !== 'en'))
        if (dict[l][sec][k] === en) assert.ok(SAME_AS_EN_OK.has(`${sec}:${k}`) || isBrandOnly(en), `${l}.${sec}.${k} is still English`)
})

test('no wrong-language stopwords (any language into any other)', () => {
  // A word from language X's list is a failure inside language Y unless Y's own list also contains it
  // (so shared words like "la", "un", "des" can't misfire, but X-only words are still caught everywhere else).
  for (const sec of ['ui', 'tag', 'pr'])
    for (const l of LANGS)
      for (const [k, v] of Object.entries(dict[l][sec])) {
        // "per month/user/…" is plain English; the strip is applied to English strings only.
        const s = pad(l === 'en' ? v.replace(/\bper (month|user|agent|tool|seat)\b/g, '') : v)
        for (const other of LANGS.filter((x) => x !== l)) {
          const hit = STOP[other].find((w) => s.includes(w) && !STOP[l].includes(w))
          assert.ok(!hit, `${l}.${sec}.${k} contains ${other} word "${hit?.trim()}": ${v}`)
        }
      }
})

test('template count claimed in metadata and copy matches the catalog', () => {
  const claim = /(\d+) (?:Industry Website Templates|industry templates|production-ready|templates|template)\b/gi
  const check = (label, text) => {
    for (const m of text.matchAll(claim)) assert.equal(Number(m[1]), slugs.length, `${label} claims ${m[1]} templates, catalog has ${slugs.length}`)
  }
  const layout = readFileSync(join(root, 'layout.tsx'), 'utf8')
  assert.ok([...layout.matchAll(claim)].length >= 3, 'expected count claims in layout metadata')
  check('layout.tsx', layout)
  check('pricing/layout.tsx', readFileSync(join(root, 'pricing/layout.tsx'), 'utf8'))
  for (const [k, v] of Object.entries({ ...dict.en.ui, ...dict.en.pr })) check(`en.${k}`, v)
})
