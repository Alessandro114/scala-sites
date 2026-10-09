'use client'

import { usePathname } from 'next/navigation'
import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { DEFAULT_LANG, LANG_COOKIE, isLang, translate, type Lang } from '../lib/i18n'

interface Ctx {
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: string, vars?: Record<string, string | number>) => string
}

const LangContext = createContext<Ctx>({
  lang: DEFAULT_LANG,
  setLang: () => {},
  t: (key, vars) => translate(DEFAULT_LANG, key, vars),
})

function readCookie(): string | null {
  try {
    const m = document.cookie.match(new RegExp('(?:^|; )' + LANG_COOKIE + '=([^;]*)'))
    return m ? decodeURIComponent(m[1]) : null
  } catch {
    return null
  }
}

function writeCookie(lang: Lang) {
  try {
    document.cookie = `${LANG_COOKIE}=${lang}; path=/; max-age=31536000; samesite=lax`
  } catch {
    /* storage can be blocked: the choice then lasts for this page view only */
  }
}

export function LangProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  // First render is always EN (matches the prerendered HTML); the real language
  // is resolved right after hydration: ?lang= > saved choice > EN. No browser sniffing.
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG)

  useEffect(() => {
    const q = new URLSearchParams(location.search).get('lang')
    const next = isLang(q) ? q : isLang(readCookie()) ? (readCookie() as Lang) : DEFAULT_LANG
    if (isLang(q)) writeCookie(q)
    setLangState(next)
  }, [])

  // Only the home page is translated: every other route (English-only demos, /pricing)
  // must keep lang="en" whatever the saved choice is.
  useEffect(() => {
    document.documentElement.lang = pathname === '/' ? lang : DEFAULT_LANG
  }, [lang, pathname])

  const setLang = useCallback((l: Lang) => {
    writeCookie(l)
    setLangState(l)
    const url = new URL(location.href)
    if (l === DEFAULT_LANG) url.searchParams.delete('lang')
    else url.searchParams.set('lang', l)
    history.replaceState(null, '', url.toString())
  }, [])

  const t = useCallback((key: string, vars?: Record<string, string | number>) => translate(lang, key, vars), [lang])

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>
}

export const useLang = () => useContext(LangContext)
