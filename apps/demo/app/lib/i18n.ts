import en from './i18n/en.json'
import it from './i18n/it.json'
import es from './i18n/es.json'
import pt from './i18n/pt.json'
import de from './i18n/de.json'
import fr from './i18n/fr.json'

// English is the default and the only fallback. The language is NEVER guessed
// from the browser (Accept-Language / navigator.language): it changes only via
// ?lang=xx, the saved choice (cookie) or the language selector.
export const LANGS = ['en', 'it', 'es', 'pt', 'de', 'fr'] as const
export type Lang = (typeof LANGS)[number]
export const DEFAULT_LANG: Lang = 'en'
export const LANG_COOKIE = 'sl_lang'

export const LANG_NAMES: Record<Lang, string> = {
  en: 'English',
  it: 'Italiano',
  es: 'Español',
  pt: 'Português',
  de: 'Deutsch',
  fr: 'Français',
}

export type Dict = { ui: Record<string, string>; tag: Record<string, string> }

const DICTS: Record<Lang, Dict> = { en, it, es, pt, de, fr }

export function isLang(v: string | null | undefined): v is Lang {
  return !!v && (LANGS as readonly string[]).includes(v)
}

export function getDict(lang: Lang): Dict {
  return DICTS[lang]
}

/** Translate a UI key; `{n}`-style placeholders are filled from `vars`. Falls back to EN, then to the key. */
export function translate(lang: Lang, key: string, vars?: Record<string, string | number>): string {
  const raw = DICTS[lang].ui[key] ?? DICTS.en.ui[key] ?? key
  return vars ? raw.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? `{${k}}`)) : raw
}

export function tagline(lang: Lang, slug: string, fallback: string): string {
  return DICTS[lang].tag[slug.replace(/^\//, '')] ?? fallback
}
