'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

const GA4_ID = 'G-LX2PQTW78M'

export function GAPageView() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === 'undefined') return
    const w = window as any
    if (typeof w.gtag !== 'function') return
    // Read from the address bar: changing ?lang= via the selector must not re-fire a page view.
    const query = window.location.search.replace(/^\?/, '')
    const url = pathname + (query ? `?${query}` : '')
    w.gtag('config', GA4_ID, { page_path: url })
  }, [pathname])

  return null
}
