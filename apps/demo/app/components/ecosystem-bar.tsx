'use client'

import { useLang } from './lang-provider'

// Product names are brand names: intentionally not translated.
const PRODUCTS = [
  { name: 'SCALA', href: 'https://get-scala.com' },
  { name: 'App', href: 'https://app.get-scala.com' },
  { name: 'Score', href: 'https://score.get-scala.com' },
  { name: 'Outbound', href: 'https://outbound.get-scala.com' },
  { name: 'Analyze', href: 'https://analyze.get-scala.com' },
  { name: 'Book', href: 'https://book.get-scala.com' },
  { name: 'Academy', href: 'https://academy.get-scala.com' },
]

export function EcosystemBar() {
  const { t } = useLang()
  return (
    <nav aria-label={t('eco.title')} className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
      <span style={{ color: 'rgba(255,255,255,0.45)' }}>{t('eco.title')}</span>
      {PRODUCTS.map((p) => (
        <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer"
          className="font-medium hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.7)' }}>
          {p.name}
        </a>
      ))}
    </nav>
  )
}
