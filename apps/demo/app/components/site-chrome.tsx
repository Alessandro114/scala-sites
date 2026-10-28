'use client'

// Shared chrome for the industry templates (issues #1 dark mode toggle, #2 mobile hamburger).
// Not shown on the hub ('/') and '/pricing': they already follow the S.C.A.L.A. design system.

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { enhanceNav } from './mobile-nav'
import './site-chrome.css'

const KEY = 'scala-sites-theme'

function readTheme(): 'light' | 'dark' {
  try { return localStorage.getItem(KEY) === 'dark' ? 'dark' : 'light' } catch { return 'light' }
}

/** Is the template dark by design? Walk up from the middle of the page to the first opaque background. */
function nativelyDark(): boolean {
  try {
    let el: Element | null = document.elementFromPoint(window.innerWidth / 2, window.innerHeight / 2)
    while (el) {
      const m = getComputedStyle(el).backgroundColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?/)
      if (m && (m[4] === undefined || parseFloat(m[4]) > 0.5)) {
        const [r, g, b] = [m[1], m[2], m[3]].map((v) => Number(v) / 255)
        return 0.2126 * r + 0.7152 * g + 0.0722 * b < 0.35
      }
      el = el.parentElement
    }
  } catch { /* fall through */ }
  return false
}

export function SiteChrome() {
  const pathname = usePathname()
  const isTemplate = pathname !== '/' && pathname !== '/pricing'
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [native, setNative] = useState(false)

  useEffect(() => { setTheme(readTheme()); const id = setTimeout(() => setNative(nativelyDark()), 300); return () => clearTimeout(id) }, [pathname])
  useEffect(() => {
    document.documentElement.dataset.theme = isTemplate ? theme : 'light'
  }, [theme, isTemplate])

  useEffect(() => {
    if (!isTemplate) return
    let cleanup: (() => void) | null = null
    // templates render client-side; wait one frame so the nav exists
    const id = requestAnimationFrame(() => { cleanup = enhanceNav(document) })
    return () => { cancelAnimationFrame(id); cleanup?.() }
  }, [pathname, isTemplate])

  if (!isTemplate) return null
  const inverted = theme === 'dark'
  const looksDark = native !== inverted // what the visitor sees right now
  return (
    <button
      type="button"
      className="sc-theme-toggle"
      aria-pressed={inverted}
      aria-label={looksDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={() => {
        const next = inverted ? 'light' : 'dark'
        setTheme(next)
        try { localStorage.setItem(KEY, next) } catch { /* private mode */ }
      }}
    >
      <span aria-hidden="true">{looksDark ? '☀' : '☾'}</span>
    </button>
  )
}
