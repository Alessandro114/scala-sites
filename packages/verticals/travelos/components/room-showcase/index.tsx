'use client'

import { useState } from 'react'

interface Room {
  id: string
  name: string
  type: string
  description: string
  price: number
  currency: string
  maxGuests: number
  amenities: string[]
  image: string
  available: boolean
}

interface RoomShowcaseProps {
  rooms: Room[]
  locale?: string
  title?: string
  subtitle?: string
  onBook?: (roomId: string) => void
}

const AMENITY_ICONS: Record<string, string> = {
  wifi: '📶',
  tv: '📺',
  minibar: '🍷',
  safe: '🔒',
  balcony: '🌇',
  bathtub: '🛁',
  shower: '🚿',
  aircon: '❄️',
  gym: '🏋️',
  pool: '🏊',
  spa: '💆',
  breakfast: '🍳',
  parking: '🚗',
  concierge: '🛎️',
  butler: '🤵',
  view: '🌅',
  fireplace: '🔥',
  terrace: '🌿',
}

function AmenityTag({ label }: { label: string }) {
  const key = label.toLowerCase().replace(/\s+/g, '')
  const icon = AMENITY_ICONS[key] || '✦'
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        padding: '4px 10px',
        borderRadius: 'var(--radius-full)',
        border: '1px solid var(--color-border)',
        fontSize: '0.75rem',
        color: 'var(--color-text-muted)',
        background: 'var(--color-surface)',
        whiteSpace: 'nowrap',
      }}
    >
      <span>{icon}</span>
      {label}
    </span>
  )
}

export function RoomShowcase({
  rooms,
  locale = 'en',
  title = 'Our Rooms & Suites',
  subtitle = 'Every room is designed to offer an exceptional stay',
  onBook,
}: RoomShowcaseProps) {
  const [activeType, setActiveType] = useState<string>('all')
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  const types = Array.from(new Set(rooms.map(r => r.type)))
  const filtered = activeType === 'all' ? rooms : rooms.filter(r => r.type === activeType)

  const fmt = (n: number, cur: string) =>
    new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: cur,
      maximumFractionDigits: 0,
    }).format(n)

  return (
    <section style={{ padding: '80px 24px', background: 'var(--color-bg)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 700,
              marginBottom: '12px',
              color: 'var(--color-text)',
            }}
          >
            {title}
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.0625rem' }}>{subtitle}</p>
        </div>

        {/* Type filter */}
        {types.length > 1 && (
          <div
            style={{
              display: 'flex',
              gap: '8px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '48px',
            }}
          >
            {['all', ...types].map(t => (
              <button
                key={t}
                onClick={() => setActiveType(t)}
                style={{
                  padding: '8px 22px',
                  borderRadius: 'var(--radius-full)',
                  border: activeType === t ? 'none' : '1px solid var(--color-border)',
                  background: activeType === t ? 'var(--color-primary)' : 'transparent',
                  color: activeType === t ? '#fff' : 'var(--color-text)',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  letterSpacing: '0.01em',
                }}
              >
                {t === 'all' ? 'All Rooms' : t}
              </button>
            ))}
          </div>
        )}

        {/* Room grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '32px',
          }}
        >
          {filtered.map(room => (
            <article
              key={room.id}
              onMouseEnter={() => setHoveredId(room.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                border: '1px solid var(--color-border)',
                background: 'var(--color-surface)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'box-shadow 0.25s, transform 0.25s',
                boxShadow: hoveredId === room.id ? '0 12px 40px rgba(0,0,0,0.12)' : '0 2px 8px rgba(0,0,0,0.04)',
                transform: hoveredId === room.id ? 'translateY(-4px)' : 'none',
              }}
            >
              {/* Image */}
              <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                {room.image ? (
                  <img
                    src={room.image}
                    alt={room.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s', transform: hoveredId === room.id ? 'scale(1.04)' : 'scale(1)' }}
                  />
                ) : (
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      background: 'var(--color-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '3rem',
                    }}
                  >
                    🛏️
                  </div>
                )}

                {/* Availability badge */}
                <span
                  style={{
                    position: 'absolute',
                    top: '14px',
                    right: '14px',
                    padding: '4px 12px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    background: room.available ? 'rgba(34,197,94,0.9)' : 'rgba(239,68,68,0.9)',
                    color: '#fff',
                    backdropFilter: 'blur(4px)',
                  }}
                >
                  {room.available ? 'Available' : 'Sold Out'}
                </span>

                {/* Type badge */}
                <span
                  style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    padding: '4px 12px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    background: 'var(--color-primary)',
                    color: '#fff',
                    opacity: 0.92,
                  }}
                >
                  {room.type}
                </span>
              </div>

              {/* Content */}
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      marginBottom: '6px',
                      color: 'var(--color-text)',
                    }}
                  >
                    {room.name}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                    {room.description}
                  </p>
                </div>

                {/* Guests */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                  <span>👥</span>
                  <span>Up to {room.maxGuests} guest{room.maxGuests > 1 ? 's' : ''}</span>
                </div>

                {/* Amenities */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {room.amenities.slice(0, 5).map((a, i) => (
                    <AmenityTag key={i} label={a} />
                  ))}
                  {room.amenities.length > 5 && (
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', alignSelf: 'center' }}>
                      +{room.amenities.length - 5} more
                    </span>
                  )}
                </div>

                {/* Price & CTA */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 'auto',
                    paddingTop: '16px',
                    borderTop: '1px solid var(--color-border)',
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        color: 'var(--color-accent)',
                      }}
                    >
                      {fmt(room.price, room.currency)}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginLeft: '4px' }}>
                      / night
                    </span>
                  </div>

                  <button
                    onClick={() => room.available && onBook?.(room.id)}
                    disabled={!room.available}
                    style={{
                      padding: '10px 22px',
                      borderRadius: 'var(--radius-md)',
                      border: 'none',
                      background: room.available ? 'var(--color-primary)' : 'var(--color-border)',
                      color: room.available ? '#fff' : 'var(--color-text-muted)',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      cursor: room.available ? 'pointer' : 'not-allowed',
                      transition: 'background 0.2s',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {room.available ? 'Book Now' : 'Unavailable'}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p style={{ textAlign: 'center', padding: '64px 0', color: 'var(--color-text-muted)', fontSize: '1.05rem' }}>
            No rooms of this type are currently listed.
          </p>
        )}
      </div>
    </section>
  )
}
