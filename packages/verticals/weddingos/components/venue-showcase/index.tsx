'use client'
import Image from 'next/image';

import { useState } from 'react'

interface Venue {
  id: string
  name: string
  photo?: string
  capacityMin: number
  capacityMax: number
  styleTags: string[]
  priceFrom: number
  currency: string
  amenities: string[]
  description: string
  availabilityUrl?: string
}

interface VenueShowcaseProps {
  venues: Venue[]
  onCheckAvailability?: (venueId: string) => void
}

const styleTagColor = (tag: string) => {
  switch (tag) {
    case 'Indoor': return { background: '#e0e7ff', color: '#3730a3' }
    case 'Outdoor': return { background: '#dcfce7', color: '#166534' }
    case 'Rustic': return { background: '#fef3c7', color: '#92400e' }
    case 'Modern': return { background: '#f3e8ff', color: '#6b21a8' }
    case 'Romantic': return { background: '#fce7f3', color: '#9d174d' }
    case 'Classic': return { background: '#e0f2fe', color: '#0c4a6e' }
    default: return { background: 'var(--color-secondary)', color: 'var(--color-text-muted)' }
  }
}

export function VenueShowcase({ venues, onCheckAvailability }: VenueShowcaseProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const fmt = (n: number, cur: string) =>
    new Intl.NumberFormat('en-GB', { style: 'currency', currency: cur, maximumFractionDigits: 0 }).format(n)

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
        Our Venue Spaces
      </h2>
      <p className="text-center mb-10" style={{ color: 'var(--color-text-muted)' }}>
        Each space crafted to make your celebration unforgettable
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {venues.map(v => {
          const expanded = expandedId === v.id
          return (
            <div
              key={v.id}
              className="rounded-2xl overflow-hidden border transition-shadow hover:shadow-lg"
              style={{ borderColor: 'var(--color-border)', background: 'var(--color-surface)' }}
            >
              {/* Photo */}
              <div className="h-64 relative" style={{ background: 'var(--color-secondary)' }}>
                {v.photo ? (
                  <Image src={v.photo} alt={v.name} className="w-full h-full object-cover" width={1200} height={800} />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-5xl">
                    🌹
                  </div>
                )}
              </div>

              {/* Core info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>{v.name}</h3>
                    <p className="text-sm mt-0.5" style={{ color: 'var(--color-text-muted)' }}>
                      {v.capacityMin}–{v.capacityMax} guests
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>from</p>
                    <p className="text-lg font-bold" style={{ color: 'var(--color-primary)' }}>
                      {fmt(v.priceFrom, v.currency)}
                    </p>
                  </div>
                </div>

                {/* Style tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {v.styleTags.map(tag => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full text-xs font-medium"
                      style={styleTagColor(tag)}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Expandable details */}
                {expanded && (
                  <div className="mb-4 space-y-3 border-t pt-4" style={{ borderColor: 'var(--color-border)' }}>
                    <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{v.description}</p>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--color-text-muted)' }}>
                        Included Amenities
                      </p>
                      <ul className="grid grid-cols-2 gap-1">
                        {v.amenities.map(a => (
                          <li key={a} className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--color-text-muted)' }}>
                            <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 flex-shrink-0" style={{ fill: 'var(--color-accent)' }}>
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-3 mt-2">
                  <button
                    onClick={() => setExpandedId(expanded ? null : v.id)}
                    className="flex-1 py-2.5 rounded-xl text-sm font-medium border transition-colors"
                    style={{
                      borderColor: 'var(--color-primary)',
                      color: 'var(--color-primary)',
                      background: 'transparent',
                    }}
                  >
                    {expanded ? 'Show Less' : 'View Details'}
                  </button>
                  <button
                    onClick={() => onCheckAvailability?.(v.id)}
                    className="flex-1 py-2.5 rounded-xl text-sm font-medium text-white transition-colors"
                    style={{ background: 'var(--color-primary)' }}
                  >
                    Check Date Availability
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
