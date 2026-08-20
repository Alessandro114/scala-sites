'use client'
import Image from 'next/image';

import { useState, useMemo } from 'react'

export interface InventoryVehicle {
  id: string
  make: string
  model: string
  year: number
  mileage: number
  fuelType: 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid' | 'Plug-in Hybrid'
  transmission: 'Manual' | 'Automatic'
  bodyStyle: 'Sedan' | 'SUV' | 'Hatchback' | 'Estate' | 'Coupe' | 'Convertible' | 'Van'
  condition: 'New' | 'Used' | 'Certified'
  price: number
  currency: string
  monthlyFrom?: number
  image?: string
  onViewDetails?: (id: string) => void
}

interface VehicleInventoryProps {
  vehicles: InventoryVehicle[]
  locale?: string
  onViewDetails?: (vehicleId: string) => void
  onBookTestDrive?: (vehicleId: string) => void
}

type SortKey = 'price-asc' | 'price-desc' | 'year-desc' | 'year-asc' | 'mileage-asc'

const CONDITION_COLORS: Record<string, { background: string; color: string }> = {
  New:        { background: '#1d4ed8', color: '#ffffff' },
  Used:       { background: '#6b7280', color: '#ffffff' },
  Certified:  { background: '#16a34a', color: '#ffffff' },
}

const FUEL_ICONS: Record<string, string> = {
  Petrol: '⛽',
  Diesel: '⛽',
  Electric: '⚡',
  Hybrid: '🔋',
  'Plug-in Hybrid': '🔋',
}

const ALL_BODY_STYLES = ['Sedan', 'SUV', 'Hatchback', 'Estate', 'Coupe', 'Convertible', 'Van']
const ALL_FUELS = ['Petrol', 'Diesel', 'Electric', 'Hybrid', 'Plug-in Hybrid']
const CONDITIONS = ['New', 'Used', 'Certified']

const SORT_OPTIONS: { value: SortKey; label: string }[] = [
  { value: 'price-asc',   label: 'Price: Low to High' },
  { value: 'price-desc',  label: 'Price: High to Low' },
  { value: 'year-desc',   label: 'Newest First' },
  { value: 'year-asc',    label: 'Oldest First' },
  { value: 'mileage-asc', label: 'Lowest Mileage' },
]

const chipStyle = (active: boolean): React.CSSProperties => ({
  padding: '6px 14px',
  borderRadius: '9999px',
  border: '2px solid',
  borderColor: active ? 'var(--color-primary)' : 'var(--color-border)',
  background: active ? 'var(--color-primary)' : 'transparent',
  color: active ? '#ffffff' : 'var(--color-text)',
  fontSize: '0.8rem',
  fontWeight: 600,
  cursor: 'pointer',
  transition: 'all 0.15s',
  whiteSpace: 'nowrap' as const,
})

function toggle<T>(arr: T[], item: T): T[] {
  return arr.includes(item) ? arr.filter(x => x !== item) : [...arr, item]
}

export function VehicleInventory({ vehicles, locale = 'en-GB', onViewDetails, onBookTestDrive }: VehicleInventoryProps) {
  const [conditions, setConditions] = useState<string[]>([])
  const [bodyStyles, setBodyStyles] = useState<string[]>([])
  const [fuels, setFuels] = useState<string[]>([])
  const [priceMin, setPriceMin] = useState<number>(0)
  const [priceMax, setPriceMax] = useState<number>(0) // 0 = no max
  const [sort, setSort] = useState<SortKey>('price-asc')

  const globalMax = useMemo(() => Math.max(...vehicles.map(v => v.price), 0), [vehicles])

  const fmt = (n: number, cur: string) =>
    new Intl.NumberFormat(locale, { style: 'currency', currency: cur, maximumFractionDigits: 0 }).format(n)

  const fmtMileage = (n: number) =>
    new Intl.NumberFormat(locale).format(n)

  const filtered = useMemo(() => {
    let result = [...vehicles]

    if (conditions.length > 0) result = result.filter(v => conditions.includes(v.condition))
    if (bodyStyles.length > 0) result = result.filter(v => bodyStyles.includes(v.bodyStyle))
    if (fuels.length > 0) result = result.filter(v => fuels.includes(v.fuelType))
    if (priceMin > 0) result = result.filter(v => v.price >= priceMin)
    if (priceMax > 0) result = result.filter(v => v.price <= priceMax)

    switch (sort) {
      case 'price-asc':   return result.sort((a, b) => a.price - b.price)
      case 'price-desc':  return result.sort((a, b) => b.price - a.price)
      case 'year-desc':   return result.sort((a, b) => b.year - a.year)
      case 'year-asc':    return result.sort((a, b) => a.year - b.year)
      case 'mileage-asc': return result.sort((a, b) => a.mileage - b.mileage)
      default:            return result
    }
  }, [vehicles, conditions, bodyStyles, fuels, priceMin, priceMax, sort])

  const clearAll = () => {
    setConditions([])
    setBodyStyles([])
    setFuels([])
    setPriceMin(0)
    setPriceMax(0)
  }

  const hasFilters = conditions.length > 0 || bodyStyles.length > 0 || fuels.length > 0 || priceMin > 0 || priceMax > 0

  return (
    <section style={{ padding: '64px 16px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, textAlign: 'center', marginBottom: '8px', fontFamily: 'var(--font-heading)' }}>
          Vehicle Inventory
        </h2>
        <p style={{ textAlign: 'center', marginBottom: '40px', color: 'var(--color-text-muted)' }}>
          Every vehicle HPI-checked, prepared, and ready to drive away
        </p>

        {/* Filters panel */}
        <div style={{
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: '16px',
          padding: '24px',
          marginBottom: '32px',
        }}>
          {/* Row 1: Condition */}
          <div style={{ marginBottom: '20px' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text-muted)', marginBottom: '10px' }}>Condition</p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {CONDITIONS.map(c => (
                <button key={c} onClick={() => setConditions(prev => toggle(prev, c))} style={chipStyle(conditions.includes(c))}>
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Row 2: Body Style */}
          <div style={{ marginBottom: '20px' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text-muted)', marginBottom: '10px' }}>Body Style</p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {ALL_BODY_STYLES.map(b => (
                <button key={b} onClick={() => setBodyStyles(prev => toggle(prev, b))} style={chipStyle(bodyStyles.includes(b))}>
                  {b}
                </button>
              ))}
            </div>
          </div>

          {/* Row 3: Fuel Type */}
          <div style={{ marginBottom: '20px' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text-muted)', marginBottom: '10px' }}>Fuel Type</p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {ALL_FUELS.map(f => (
                <button key={f} onClick={() => setFuels(prev => toggle(prev, f))} style={chipStyle(fuels.includes(f))}>
                  {FUEL_ICONS[f]} {f}
                </button>
              ))}
            </div>
          </div>

          {/* Row 4: Price range + Sort */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', alignItems: 'flex-end' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text-muted)', marginBottom: '10px' }}>
                Min Price
              </label>
              <input
                type="number"
                min={0}
                max={globalMax}
                step={1000}
                value={priceMin || ''}
                placeholder="No min"
                onChange={e => setPriceMin(Number(e.target.value) || 0)}
                style={{
                  width: '100%',
                  padding: '9px 12px',
                  borderRadius: '10px',
                  border: '2px solid var(--color-border)',
                  background: 'var(--color-secondary)',
                  color: 'var(--color-text)',
                  fontSize: '0.875rem',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text-muted)', marginBottom: '10px' }}>
                Max Price
              </label>
              <input
                type="number"
                min={0}
                step={1000}
                value={priceMax || ''}
                placeholder="No max"
                onChange={e => setPriceMax(Number(e.target.value) || 0)}
                style={{
                  width: '100%',
                  padding: '9px 12px',
                  borderRadius: '10px',
                  border: '2px solid var(--color-border)',
                  background: 'var(--color-secondary)',
                  color: 'var(--color-text)',
                  fontSize: '0.875rem',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text-muted)', marginBottom: '10px' }}>
                Sort By
              </label>
              <select
                value={sort}
                onChange={e => setSort(e.target.value as SortKey)}
                style={{
                  width: '100%',
                  padding: '9px 12px',
                  borderRadius: '10px',
                  border: '2px solid var(--color-border)',
                  background: 'var(--color-secondary)',
                  color: 'var(--color-text)',
                  fontSize: '0.875rem',
                  outline: 'none',
                  boxSizing: 'border-box',
                  appearance: 'none',
                  cursor: 'pointer',
                }}
              >
                {SORT_OPTIONS.map(o => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>
            {hasFilters && (
              <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                <button
                  onClick={clearAll}
                  style={{
                    width: '100%',
                    padding: '9px 16px',
                    borderRadius: '10px',
                    border: '2px solid var(--color-border)',
                    background: 'transparent',
                    color: 'var(--color-text-muted)',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Results count */}
        <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '20px' }}>
          Showing <strong style={{ color: 'var(--color-text)' }}>{filtered.length}</strong> of {vehicles.length} vehicles
        </p>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
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
              onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.10)')}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
            >
              {/* Photo */}
              <div style={{ position: 'relative', height: '196px', background: 'var(--color-secondary)', flexShrink: 0 }}>
                {v.image ? (
                  <Image src={v.image}
                    alt={`${v.year} ${v.make} ${v.model}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} width={1200} height={800} />
                ) : (
                  <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3.5rem', color: 'var(--color-text-muted)' }}>
                    🚘
                  </div>
                )}
                {/* Condition badge */}
                <span style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  ...CONDITION_COLORS[v.condition],
                  padding: '3px 10px',
                  borderRadius: '9999px',
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                }}>
                  {v.condition}
                </span>
              </div>

              {/* Content */}
              <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                {/* Year + body */}
                <span style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px', display: 'block' }}>
                  {v.year} · {v.bodyStyle}
                </span>

                {/* Make / model */}
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '12px', fontFamily: 'var(--font-heading)', lineHeight: 1.2 }}>
                  {v.make} {v.model}
                </h3>

                {/* Tags row */}
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '14px' }}>
                  {[
                    { icon: FUEL_ICONS[v.fuelType], label: v.fuelType },
                    { icon: '⚙️', label: v.transmission },
                    { icon: '📍', label: `${fmtMileage(v.mileage)} mi` },
                  ].map(tag => (
                    <span
                      key={tag.label}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        padding: '3px 10px',
                        borderRadius: '9999px',
                        background: 'var(--color-secondary)',
                        fontSize: '0.75rem',
                        color: 'var(--color-text-muted)',
                        fontWeight: 500,
                      }}
                    >
                      {tag.icon} {tag.label}
                    </span>
                  ))}
                </div>

                {/* Price */}
                <div style={{ marginTop: 'auto', marginBottom: '16px' }}>
                  <div style={{ fontSize: '1.7rem', fontWeight: 800, color: 'var(--color-primary)', lineHeight: 1 }}>
                    {fmt(v.price, v.currency)}
                  </div>
                  {v.monthlyFrom && (
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                      from <strong style={{ color: 'var(--color-accent)' }}>{fmt(v.monthlyFrom, v.currency)}/mo</strong> finance
                    </div>
                  )}
                </div>

                {/* CTAs */}
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    onClick={() => onViewDetails?.(v.id)}
                    style={{
                      flex: 1,
                      padding: '10px 0',
                      borderRadius: '10px',
                      border: '2px solid var(--color-primary)',
                      background: 'transparent',
                      color: 'var(--color-primary)',
                      fontWeight: 600,
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      transition: 'all 0.15s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-primary)'; e.currentTarget.style.color = '#ffffff' }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--color-primary)' }}
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => onBookTestDrive?.(v.id)}
                    style={{
                      flex: 1,
                      padding: '10px 0',
                      borderRadius: '10px',
                      border: 'none',
                      background: 'var(--color-primary)',
                      color: '#ffffff',
                      fontWeight: 600,
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      transition: 'opacity 0.15s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = '0.87')}
                    onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                  >
                    Book Test Drive
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '64px 16px' }}>
            <p style={{ fontSize: '2rem', marginBottom: '12px' }}>🔍</p>
            <p style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '8px' }}>No vehicles match your filters</p>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '20px' }}>Try adjusting the filters above</p>
            <button
              onClick={clearAll}
              style={{
                padding: '10px 24px',
                borderRadius: '10px',
                border: '2px solid var(--color-primary)',
                background: 'transparent',
                color: 'var(--color-primary)',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
