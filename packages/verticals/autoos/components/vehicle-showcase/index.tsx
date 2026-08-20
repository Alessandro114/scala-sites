'use client'
import Image from 'next/image';

import { useState, useMemo } from 'react'

export interface Vehicle {
  id: string
  make: string
  model: string
  year: number
  mileage: number
  fuelType: 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid' | 'Plug-in Hybrid'
  transmission: 'Manual' | 'Automatic'
  bodyType: 'SUV' | 'Sedan' | 'Sport' | 'Electric' | 'Van' | 'Hatchback' | 'Estate'
  price: number
  currency: string
  image?: string
  badges?: Array<'New Arrival' | 'Certified Pre-Owned' | 'Electric'>
  whatsappNumber?: string
  testDriveUrl?: string
}

interface VehicleShowcaseProps {
  vehicles: Vehicle[]
  locale?: string
  onTestDrive?: (vehicleId: string) => void
}

const FILTER_TYPES = ['All', 'SUV', 'Sedan', 'Electric', 'Sport', 'Van'] as const

const BADGE_STYLES: Record<string, { background: string; color: string }> = {
  'New Arrival':        { background: '#16a34a', color: '#ffffff' },
  'Certified Pre-Owned': { background: '#1d4ed8', color: '#ffffff' },
  'Electric':           { background: '#0891b2', color: '#ffffff' },
}

const FUEL_ICONS: Record<string, string> = {
  Petrol: '⛽',
  Diesel: '⛽',
  Electric: '⚡',
  Hybrid: '🔋',
  'Plug-in Hybrid': '🔋',
}

export function VehicleShowcase({ vehicles, locale = 'en-GB', onTestDrive }: VehicleShowcaseProps) {
  const [activeFilter, setActiveFilter] = useState<string>('All')

  const filtered = useMemo(() => {
    if (activeFilter === 'All') return vehicles
    if (activeFilter === 'Electric') {
      return vehicles.filter(v =>
        v.fuelType === 'Electric' || v.fuelType === 'Hybrid' || v.fuelType === 'Plug-in Hybrid' || v.badges?.includes('Electric')
      )
    }
    return vehicles.filter(v => v.bodyType === activeFilter)
  }, [vehicles, activeFilter])

  const fmt = (n: number, cur: string) =>
    new Intl.NumberFormat(locale, { style: 'currency', currency: cur, maximumFractionDigits: 0 }).format(n)

  const fmtMileage = (n: number) =>
    new Intl.NumberFormat(locale).format(n)

  return (
    <section style={{ padding: '64px 16px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, textAlign: 'center', marginBottom: '8px', fontFamily: 'var(--font-heading)' }}>
          Our Vehicles
        </h2>
        <p style={{ textAlign: 'center', marginBottom: '32px', color: 'var(--color-text-muted)' }}>
          Every vehicle inspected, prepared, and ready to drive away
        </p>

        {/* Filter tabs */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '40px' }}>
          {FILTER_TYPES.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              style={{
                padding: '10px 20px',
                borderRadius: '9999px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.875rem',
                fontWeight: 600,
                transition: 'all 0.15s',
                background: activeFilter === f ? 'var(--color-primary)' : 'var(--color-secondary)',
                color: activeFilter === f ? '#ffffff' : 'var(--color-text)',
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Vehicle grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
          {filtered.map(v => (
            <div
              key={v.id}
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid var(--color-border)',
                background: 'var(--color-surface)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'box-shadow 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.12)')}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
            >
              {/* Image */}
              <div style={{ position: 'relative', height: '200px', background: 'var(--color-secondary)' }}>
                {v.image ? (
                  <Image src={v.image}
                    alt={`${v.year} ${v.make} ${v.model}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} width={1200} height={800} />
                ) : (
                  <div style={{
                    width: '100%', height: '100%', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontSize: '4rem', color: 'var(--color-text-muted)',
                  }}>
                    🚗
                  </div>
                )}
                {/* Badges */}
                {v.badges && v.badges.length > 0 && (
                  <div style={{ position: 'absolute', top: '12px', left: '12px', display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {v.badges.map(badge => (
                      <span
                        key={badge}
                        style={{
                          ...BADGE_STYLES[badge],
                          padding: '3px 10px',
                          borderRadius: '9999px',
                          fontSize: '0.7rem',
                          fontWeight: 700,
                          letterSpacing: '0.03em',
                          textTransform: 'uppercase',
                        }}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Content */}
              <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginBottom: '4px' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    {v.year} · {v.bodyType}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '12px', fontFamily: 'var(--font-heading)' }}>
                  {v.make} {v.model}
                </h3>

                {/* Specs row */}
                <div style={{ display: 'flex', gap: '16px', marginBottom: '16px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <svg viewBox="0 0 24 24" style={{ width: '14px', height: '14px', fill: 'none', stroke: 'currentColor', strokeWidth: 2 }}>
                      <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
                    </svg>
                    {fmtMileage(v.mileage)} mi
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                    {FUEL_ICONS[v.fuelType]} {v.fuelType}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                    ⚙️ {v.transmission}
                  </span>
                </div>

                {/* Price */}
                <div style={{ marginBottom: '20px', marginTop: 'auto' }}>
                  <span style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-primary)' }}>
                    {fmt(v.price, v.currency)}
                  </span>
                </div>

                {/* CTAs */}
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button
                    onClick={() => onTestDrive?.(v.id)}
                    style={{
                      flex: 1,
                      padding: '10px 0',
                      borderRadius: '10px',
                      border: '2px solid var(--color-primary)',
                      background: 'transparent',
                      color: 'var(--color-primary)',
                      fontWeight: 600,
                      fontSize: '0.875rem',
                      cursor: 'pointer',
                      transition: 'all 0.15s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'var(--color-primary)'
                      e.currentTarget.style.color = '#ffffff'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'transparent'
                      e.currentTarget.style.color = 'var(--color-primary)'
                    }}
                  >
                    Book Test Drive
                  </button>
                  {v.whatsappNumber && (
                    <a
                      href={`https://wa.me/${v.whatsappNumber}?text=${encodeURIComponent(`Hi, I'm interested in the ${v.year} ${v.make} ${v.model}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        flex: 1,
                        padding: '10px 0',
                        borderRadius: '10px',
                        background: '#25d366',
                        color: '#ffffff',
                        fontWeight: 600,
                        fontSize: '0.875rem',
                        cursor: 'pointer',
                        textDecoration: 'none',
                        textAlign: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                      }}
                    >
                      <svg viewBox="0 0 24 24" style={{ width: '15px', height: '15px', fill: '#ffffff' }}>
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      WhatsApp
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p style={{ textAlign: 'center', padding: '48px 0', color: 'var(--color-text-muted)' }}>
            No vehicles found for this category. Please check back soon.
          </p>
        )}
      </div>
    </section>
  )
}
