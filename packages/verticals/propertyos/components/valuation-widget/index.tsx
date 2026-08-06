'use client'

import { useState } from 'react'

interface ValuationWidgetProps {
  title?: string
  subtitle?: string
  onSubmit?: (data: { address: string; propertyType: string; bedrooms: number; phone: string }) => void
}

export function ValuationWidget({ title = 'What\'s your property worth?', subtitle = 'Get a free instant estimate', onSubmit }: ValuationWidgetProps) {
  const [address, setAddress] = useState('')
  const [propertyType, setPropertyType] = useState('apartment')
  const [bedrooms, setBedrooms] = useState(2)
  const [phone, setPhone] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit?.({ address, propertyType, bedrooms, phone })
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="py-16 px-4">
        <div className="max-w-lg mx-auto text-center rounded-2xl p-10 border" style={{ borderColor: 'var(--color-border)', background: 'var(--color-surface)' }}>
          <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl" style={{ background: 'var(--color-success)' }}>✓</div>
          <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Valuation Requested</h3>
          <p style={{ color: 'var(--color-text-muted)' }}>We&apos;ll send your free property valuation within 24 hours via WhatsApp.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 px-4" style={{ background: 'var(--color-secondary)' }}>
      <div className="max-w-lg mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{title}</h2>
        <p className="text-center mb-8" style={{ color: 'var(--color-text-muted)' }}>{subtitle}</p>
        <form onSubmit={handleSubmit} className="rounded-2xl p-8 border space-y-4" style={{ borderColor: 'var(--color-border)', background: 'var(--color-bg)' }}>
          <div>
            <label className="block text-sm font-medium mb-1">Property Address</label>
            <input type="text" required value={address} onChange={e => setAddress(e.target.value)} placeholder="e.g. Via Roma 15, Milano"
              className="w-full px-4 py-3 rounded-lg border text-sm" style={{ borderColor: 'var(--color-border)' }} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Property Type</label>
              <select value={propertyType} onChange={e => setPropertyType(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border text-sm" style={{ borderColor: 'var(--color-border)' }}>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="villa">Villa</option>
                <option value="commercial">Commercial</option>
                <option value="land">Land</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Bedrooms</label>
              <select value={bedrooms} onChange={e => setBedrooms(Number(e.target.value))}
                className="w-full px-4 py-3 rounded-lg border text-sm" style={{ borderColor: 'var(--color-border)' }}>
                {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n}+</option>)}
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Your Phone (for WhatsApp delivery)</label>
            <input type="tel" required value={phone} onChange={e => setPhone(e.target.value)} placeholder="+39 333 123 4567"
              className="w-full px-4 py-3 rounded-lg border text-sm" style={{ borderColor: 'var(--color-border)' }} />
          </div>
          <button type="submit" className="w-full py-3 rounded-lg text-white font-semibold transition-colors"
            style={{ background: 'var(--color-primary)' }}>
            Get Free Valuation
          </button>
          <p className="text-xs text-center" style={{ color: 'var(--color-text-muted)' }}>Free, no obligation. Results via WhatsApp within 24h.</p>
        </form>
      </div>
    </section>
  )
}
