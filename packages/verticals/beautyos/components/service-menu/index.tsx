'use client'

import { useState } from 'react'

interface Service {
  id: string
  name: string
  category: string
  description?: string
  duration: string
  price: number
  priceFrom?: boolean
  currency: string
  popular?: boolean
}

interface ServiceMenuProps {
  services: Service[]
  locale?: string
  onBook?: (serviceId: string) => void
}

export function ServiceMenu({ services, locale = 'en', onBook }: ServiceMenuProps) {
  const categories = Array.from(new Set(services.map(s => s.category)))
  const [active, setActive] = useState(categories[0] || '')

  const fmt = (n: number, cur: string) =>
    new Intl.NumberFormat(locale, { style: 'currency', currency: cur }).format(n)

  const filtered = services.filter(s => s.category === active)

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Services & Pricing</h2>
      <p className="text-center mb-8" style={{ color: 'var(--color-text-muted)' }}>Transparent pricing, no surprises</p>

      <div className="flex overflow-x-auto gap-2 mb-8 pb-2">
        {categories.map(c => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${active === c ? 'text-white' : ''}`}
            style={{ background: active === c ? 'var(--color-primary)' : 'var(--color-secondary)' }}
          >{c}</button>
        ))}
      </div>

      <div className="space-y-3">
        {filtered.map(s => (
          <div key={s.id} className="flex items-center justify-between p-5 rounded-xl border transition-colors hover:shadow-sm"
            style={{ borderColor: 'var(--color-border)', background: 'var(--color-surface)' }}>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold">{s.name}</h3>
                {s.popular && (
                  <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-amber-100 text-amber-800">Popular</span>
                )}
              </div>
              {s.description && <p className="text-sm mt-0.5" style={{ color: 'var(--color-text-muted)' }}>{s.description}</p>}
              <p className="text-xs mt-1" style={{ color: 'var(--color-text-muted)' }}>{s.duration}</p>
            </div>
            <div className="flex items-center gap-4 ml-4">
              <span className="text-lg font-bold whitespace-nowrap">
                {s.priceFrom && <span className="text-xs font-normal" style={{ color: 'var(--color-text-muted)' }}>from </span>}
                {fmt(s.price, s.currency)}
              </span>
              {onBook && (
                <button onClick={() => onBook(s.id)} className="px-4 py-2 rounded-lg text-sm font-medium text-white transition-colors"
                  style={{ background: 'var(--color-primary)' }}>Book</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
