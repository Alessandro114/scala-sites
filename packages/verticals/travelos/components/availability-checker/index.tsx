'use client'

import { useState } from 'react'

interface AvailabilitySearchParams {
  checkIn: string
  checkOut: string
  guests: number
  roomType: string
}

interface AvailabilityCheckerProps {
  onSearch: (params: AvailabilitySearchParams) => void
  roomTypes?: string[]
  title?: string
  subtitle?: string
  minDate?: string
}

function InputLabel({ children }: { children: React.ReactNode }) {
  return (
    <label
      style={{
        display: 'block',
        fontSize: '0.7rem',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        color: 'var(--color-text-muted)',
        marginBottom: '6px',
      }}
    >
      {children}
    </label>
  )
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '10px 14px',
  borderRadius: 'var(--radius-md)',
  border: '1px solid var(--color-border)',
  background: 'var(--color-bg)',
  color: 'var(--color-text)',
  fontSize: '0.9375rem',
  outline: 'none',
  boxSizing: 'border-box',
  fontFamily: 'var(--font-body)',
}

export function AvailabilityChecker({
  onSearch,
  roomTypes = [],
  title = 'Check Availability',
  subtitle = 'Find your perfect room for your dates',
  minDate,
}: AvailabilityCheckerProps) {
  const today = new Date().toISOString().split('T')[0]
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0]

  const [checkIn, setCheckIn] = useState(today)
  const [checkOut, setCheckOut] = useState(tomorrow)
  const [guests, setGuests] = useState(2)
  const [roomType, setRoomType] = useState('any')
  const [isSearching, setIsSearching] = useState(false)
  const [searched, setSearched] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const nights = checkIn && checkOut
    ? Math.max(0, Math.round((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / 86400000))
    : 0

  const handleSearch = () => {
    setError(null)
    if (!checkIn || !checkOut) {
      setError('Please select both check-in and check-out dates.')
      return
    }
    if (nights <= 0) {
      setError('Check-out must be after check-in.')
      return
    }
    if (nights > 30) {
      setError('Maximum stay is 30 nights. Please contact us for longer stays.')
      return
    }

    setIsSearching(true)
    setTimeout(() => {
      setIsSearching(false)
      setSearched(true)
      onSearch({ checkIn, checkOut, guests, roomType })
    }, 900)
  }

  const handleCheckInChange = (val: string) => {
    setCheckIn(val)
    setSearched(false)
    // auto-advance checkout if it's before new checkin
    if (val && checkOut && checkOut <= val) {
      const next = new Date(new Date(val).getTime() + 86400000).toISOString().split('T')[0]
      setCheckOut(next)
    }
  }

  return (
    <section
      style={{
        padding: '72px 24px',
        background: 'var(--color-primary)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative accent */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.04) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(255,255,255,0.03) 0%, transparent 50%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '960px', margin: '0 auto', position: 'relative' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.6rem, 4vw, 2.25rem)',
              fontWeight: 700,
              color: '#fff',
              marginBottom: '10px',
            }}
          >
            {title}
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1rem' }}>{subtitle}</p>
        </div>

        {/* Search card */}
        <div
          style={{
            background: 'rgba(255,255,255,0.97)',
            borderRadius: 'var(--radius-lg)',
            padding: '32px',
            boxShadow: '0 24px 64px rgba(0,0,0,0.18)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '20px',
              alignItems: 'end',
            }}
          >
            {/* Check-in */}
            <div>
              <InputLabel>Check-in</InputLabel>
              <input
                type="date"
                value={checkIn}
                min={minDate || today}
                onChange={e => handleCheckInChange(e.target.value)}
                style={{ ...inputStyle, color: '#0f172a' }}
              />
            </div>

            {/* Check-out */}
            <div>
              <InputLabel>Check-out</InputLabel>
              <input
                type="date"
                value={checkOut}
                min={checkIn || today}
                onChange={e => { setCheckOut(e.target.value); setSearched(false) }}
                style={{ ...inputStyle, color: '#0f172a' }}
              />
            </div>

            {/* Guests */}
            <div>
              <InputLabel>Guests</InputLabel>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <button
                  onClick={() => setGuests(g => Math.max(1, g - 1))}
                  style={{
                    width: '36px',
                    height: '38px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-border)',
                    background: 'var(--color-secondary)',
                    fontSize: '1.1rem',
                    cursor: 'pointer',
                    flexShrink: 0,
                    color: '#0f172a',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  −
                </button>
                <div
                  style={{
                    flex: 1,
                    textAlign: 'center',
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: '#0f172a',
                  }}
                >
                  {guests} {guests === 1 ? 'Guest' : 'Guests'}
                </div>
                <button
                  onClick={() => setGuests(g => Math.min(10, g + 1))}
                  style={{
                    width: '36px',
                    height: '38px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-border)',
                    background: 'var(--color-secondary)',
                    fontSize: '1.1rem',
                    cursor: 'pointer',
                    flexShrink: 0,
                    color: '#0f172a',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  +
                </button>
              </div>
            </div>

            {/* Room type */}
            {roomTypes.length > 0 && (
              <div>
                <InputLabel>Room Type</InputLabel>
                <select
                  value={roomType}
                  onChange={e => { setRoomType(e.target.value); setSearched(false) }}
                  style={{ ...inputStyle, color: '#0f172a' }}
                >
                  <option value="any">Any Type</option>
                  {roomTypes.map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
            )}

            {/* Search button */}
            <div>
              <button
                onClick={handleSearch}
                disabled={isSearching}
                style={{
                  width: '100%',
                  padding: '11px 24px',
                  borderRadius: 'var(--radius-md)',
                  border: 'none',
                  background: isSearching ? 'var(--color-text-muted)' : 'var(--color-primary)',
                  color: '#fff',
                  fontSize: '0.9375rem',
                  fontWeight: 700,
                  cursor: isSearching ? 'not-allowed' : 'pointer',
                  transition: 'background 0.2s',
                  letterSpacing: '0.02em',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                }}
              >
                {isSearching ? (
                  <>
                    <span style={{ display: 'inline-block', width: '14px', height: '14px', border: '2px solid rgba(255,255,255,0.4)', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
                    Checking...
                  </>
                ) : (
                  'Check Availability'
                )}
              </button>
            </div>
          </div>

          {/* Nights summary */}
          {nights > 0 && (
            <div
              style={{
                marginTop: '20px',
                padding: '12px 16px',
                borderRadius: 'var(--radius-md)',
                background: '#f0f9ff',
                border: '1px solid #bae6fd',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.875rem',
                color: '#0369a1',
              }}
            >
              <span>📅</span>
              <span>
                <strong>{nights} night{nights > 1 ? 's' : ''}</strong>
                {' · '}
                {new Date(checkIn).toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' })}
                {' → '}
                {new Date(checkOut).toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' })}
                {guests > 0 && ` · ${guests} guest${guests > 1 ? 's' : ''}`}
              </span>
            </div>
          )}

          {/* Error */}
          {error && (
            <div
              style={{
                marginTop: '16px',
                padding: '12px 16px',
                borderRadius: 'var(--radius-md)',
                background: '#fef2f2',
                border: '1px solid #fecaca',
                fontSize: '0.875rem',
                color: '#dc2626',
              }}
            >
              {error}
            </div>
          )}

          {/* Success state */}
          {searched && !isSearching && !error && (
            <div
              style={{
                marginTop: '20px',
                padding: '16px 20px',
                borderRadius: 'var(--radius-md)',
                background: '#f0fdf4',
                border: '1px solid #bbf7d0',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '0.9rem',
                color: '#15803d',
                fontWeight: 500,
              }}
            >
              <span style={{ fontSize: '1.2rem' }}>✓</span>
              <span>
                Great news — rooms are available for your dates. Scroll up to explore options and book directly.
              </span>
            </div>
          )}
        </div>

        {/* Reassurance strip */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '32px',
            flexWrap: 'wrap',
            marginTop: '28px',
          }}
        >
          {['Free cancellation up to 48h', 'Best rate guarantee', 'Instant confirmation'].map(item => (
            <div
              key={item}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.8125rem',
                color: 'rgba(255,255,255,0.8)',
              }}
            >
              <svg viewBox="0 0 20 20" style={{ width: '14px', height: '14px', fill: 'var(--color-accent)' }}>
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {item}
            </div>
          ))}
        </div>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </section>
  )
}
