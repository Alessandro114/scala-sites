'use client'

import { useState, useMemo } from 'react'

type VendorCategory = 'Photography' | 'Catering' | 'Florist' | 'DJ' | 'Cake' | 'Videography' | 'Hair & Makeup' | 'Transport'

interface Vendor {
  id: string
  name: string
  photo?: string
  category: VendorCategory
  rating: number
  reviewCount: number
  priceRange: 1 | 2 | 3 | 4
  description: string
  portfolioUrl?: string
  contactUrl?: string
}

interface VendorDirectoryProps {
  vendors: Vendor[]
  currency?: string
  currencySymbol?: string
}

const categoryIcons: Record<VendorCategory, string> = {
  Photography: '📷',
  Catering: '🍽️',
  Florist: '💐',
  DJ: '🎵',
  Cake: '🎂',
  Videography: '🎬',
  'Hair & Makeup': '💄',
  Transport: '🚗',
}

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <svg key={i} viewBox="0 0 20 20" className="w-3.5 h-3.5"
          style={{ fill: i <= Math.round(rating) ? '#c9a84c' : '#e5e7eb' }}>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  )
}

function PriceRange({ level, symbol }: { level: number; symbol: string }) {
  return (
    <span className="text-xs font-medium">
      {[1, 2, 3, 4].map(i => (
        <span key={i} style={{ color: i <= level ? 'var(--color-accent)' : 'var(--color-border)' }}>{symbol}</span>
      ))}
    </span>
  )
}

export function VendorDirectory({ vendors, currencySymbol = '£' }: VendorDirectoryProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const categories = useMemo(
    () => Array.from(new Set(vendors.map(v => v.category))) as VendorCategory[],
    [vendors]
  )

  const filtered = useMemo(
    () => activeCategory === 'all' ? vendors : vendors.filter(v => v.category === activeCategory),
    [vendors, activeCategory]
  )

  return (
    <section className="py-16 px-4" style={{ background: 'var(--color-secondary)' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
          Recommended Vendors
        </h2>
        <p className="text-center mb-10" style={{ color: 'var(--color-text-muted)' }}>
          Handpicked partners trusted by our couples
        </p>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveCategory('all')}
            className="px-4 py-2 rounded-full text-sm font-medium transition-colors"
            style={{
              background: activeCategory === 'all' ? 'var(--color-primary)' : 'var(--color-bg)',
              color: activeCategory === 'all' ? 'white' : 'var(--color-text)',
              border: `1px solid ${activeCategory === 'all' ? 'var(--color-primary)' : 'var(--color-border)'}`,
            }}
          >
            All
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-2 rounded-full text-sm font-medium transition-colors"
              style={{
                background: activeCategory === cat ? 'var(--color-primary)' : 'var(--color-bg)',
                color: activeCategory === cat ? 'white' : 'var(--color-text)',
                border: `1px solid ${activeCategory === cat ? 'var(--color-primary)' : 'var(--color-border)'}`,
              }}
            >
              {categoryIcons[cat]} {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(v => (
            <div
              key={v.id}
              className="rounded-2xl overflow-hidden border transition-shadow hover:shadow-lg flex flex-col"
              style={{ borderColor: 'var(--color-border)', background: 'var(--color-bg)' }}
            >
              {/* Photo */}
              <div className="h-48 relative" style={{ background: 'var(--color-secondary)' }}>
                {v.photo ? (
                  <img src={v.photo} alt={v.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-4xl">
                    {categoryIcons[v.category]}
                  </div>
                )}
                {/* Category badge */}
                <span
                  className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold text-white"
                  style={{ background: 'var(--color-primary)' }}
                >
                  {v.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-base leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                    {v.name}
                  </h3>
                  <PriceRange level={v.priceRange} symbol={currencySymbol} />
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <StarRating rating={v.rating} />
                  <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                    {v.rating.toFixed(1)} ({v.reviewCount} reviews)
                  </span>
                </div>

                <p className="text-sm mb-4 flex-1 line-clamp-3" style={{ color: 'var(--color-text-muted)' }}>
                  {v.description}
                </p>

                <div className="flex gap-2 mt-auto">
                  {v.portfolioUrl && (
                    <a
                      href={v.portfolioUrl}
                      className="flex-1 text-center py-2.5 rounded-xl text-sm font-medium border transition-colors"
                      style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)', background: 'transparent' }}
                    >
                      View Portfolio
                    </a>
                  )}
                  {v.contactUrl && (
                    <a
                      href={v.contactUrl}
                      className="flex-1 text-center py-2.5 rounded-xl text-sm font-medium text-white transition-colors"
                      style={{ background: 'var(--color-primary)' }}
                    >
                      Contact
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
