'use client'
import Image from 'next/image';

import { useState } from 'react'

interface BeforeAfterItem {
  id: string
  service: string
  beforeImage: string
  afterImage: string
  description?: string
  stylistName?: string
}

interface BeforeAfterProps {
  items: BeforeAfterItem[]
  title?: string
}

export function BeforeAfter({ items, title = 'Our Work' }: BeforeAfterProps) {
  const services = Array.from(new Set(items.map(i => i.service)))
  const [activeService, setActiveService] = useState<string>('all')

  const filtered = activeService === 'all' ? items : items.filter(i => i.service === activeService)

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{title}</h2>
      <p className="text-center mb-8" style={{ color: 'var(--color-text-muted)' }}>Real results from real clients</p>

      {services.length > 1 && (
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveService('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeService === 'all' ? 'text-white' : ''}`}
            style={{ background: activeService === 'all' ? 'var(--color-primary)' : 'var(--color-secondary)' }}
          >All</button>
          {services.map(s => (
            <button
              key={s}
              onClick={() => setActiveService(s)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeService === s ? 'text-white' : ''}`}
              style={{ background: activeService === s ? 'var(--color-primary)' : 'var(--color-secondary)' }}
            >{s}</button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filtered.map(item => (
          <div key={item.id} className="rounded-xl overflow-hidden border" style={{ borderColor: 'var(--color-border)' }}>
            <div className="grid grid-cols-2">
              <div className="relative">
                <Image src={item.beforeImage} alt="Before" className="w-full h-64 object-cover" width={1200} height={800} />
                <span className="absolute bottom-2 left-2 px-2 py-0.5 text-xs font-bold uppercase bg-black/60 text-white rounded">Before</span>
              </div>
              <div className="relative">
                <Image src={item.afterImage} alt="After" className="w-full h-64 object-cover" width={1200} height={800} />
                <span className="absolute bottom-2 right-2 px-2 py-0.5 text-xs font-bold uppercase text-white rounded" style={{ background: 'var(--color-primary)' }}>After</span>
              </div>
            </div>
            <div className="p-4">
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: 'var(--color-secondary)', color: 'var(--color-primary)' }}>{item.service}</span>
              {item.description && <p className="text-sm mt-2" style={{ color: 'var(--color-text-muted)' }}>{item.description}</p>}
              {item.stylistName && <p className="text-xs mt-1" style={{ color: 'var(--color-text-muted)' }}>by {item.stylistName}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
