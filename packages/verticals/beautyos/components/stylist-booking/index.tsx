'use client'
import Image from 'next/image';

import { useState } from 'react'

interface Stylist {
  id: string
  name: string
  photo?: string
  role: string
  specialties: string[]
  rating: number
  reviewCount: number
  nextAvailable?: string
  slotsToday?: number
}

interface StylistBookingProps {
  stylists: Stylist[]
  onSelect?: (stylistId: string) => void
}

export function StylistBooking({ stylists, onSelect }: StylistBookingProps) {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Choose Your Stylist</h2>
      <p className="mb-8" style={{ color: 'var(--color-text-muted)' }}>Pick your favorite — or let us match you</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stylists.map(s => (
          <button
            key={s.id}
            onClick={() => { setSelected(s.id); onSelect?.(s.id) }}
            className={`text-left rounded-xl border p-5 transition-all ${selected === s.id ? 'ring-2 shadow-lg' : 'hover:shadow-md'}`}
            style={{
              borderColor: selected === s.id ? 'var(--color-primary)' : 'var(--color-border)',
              background: 'var(--color-surface)',
            } as React.CSSProperties}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                {s.photo ? (
                  <Image src={s.photo} alt={s.name} className="w-full h-full object-cover" width={1200} height={800} />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-xl font-bold" style={{ color: 'var(--color-text-muted)' }}>
                    {s.name.split(' ').map(n => n[0]).join('')}
                  </div>
                )}
              </div>
              <div>
                <h3 className="font-bold text-lg">{s.name}</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{s.role}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} viewBox="0 0 20 20" className="w-4 h-4" fill={i < Math.round(s.rating) ? '#f59e0b' : '#e5e7eb'}>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-xs ml-1" style={{ color: 'var(--color-text-muted)' }}>({s.reviewCount})</span>
            </div>
            <div className="flex flex-wrap gap-1 mb-3">
              {s.specialties.map(sp => (
                <span key={sp} className="px-2 py-0.5 text-xs rounded-full" style={{ background: 'var(--color-secondary)', color: 'var(--color-primary)' }}>{sp}</span>
              ))}
            </div>
            {s.nextAvailable && (
              <p className="text-sm">
                <span style={{ color: 'var(--color-text-muted)' }}>Next: </span>
                <span className="font-medium">{s.nextAvailable}</span>
                {s.slotsToday !== undefined && s.slotsToday > 0 && s.slotsToday <= 3 && (
                  <span className="ml-2 text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                    {s.slotsToday} slot{s.slotsToday > 1 ? 's' : ''} left today
                  </span>
                )}
              </p>
            )}
          </button>
        ))}
      </div>
    </section>
  )
}
