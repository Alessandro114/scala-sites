'use client'

import { useState, useMemo } from 'react'

interface Treatment {
  id: string
  name: string
  category: string
  description: string
  duration: string
  price: number
  currency: string
  mostRequested?: boolean
  insuranceAccepted?: boolean
}

interface TreatmentMenuProps {
  treatments: Treatment[]
  locale?: string
  title?: string
  subtitle?: string
}

const CATEGORY_COLORS: Record<string, string> = {
  'General Medicine': '#0891b2',
  'Dental': '#0e7490',
  'Dermatology': '#7c3aed',
  'Physiotherapy': '#059669',
  'Cardiology': '#dc2626',
  'Diagnostics': '#2563eb',
  'Mental Health': '#9333ea',
  'Nutrition': '#16a34a',
  'Paediatrics': '#d97706',
}

const CATEGORY_ICONS: Record<string, string> = {
  'General Medicine': '⚕',
  'Dental': '✦',
  'Dermatology': '◈',
  'Physiotherapy': '◉',
  'Cardiology': '♥',
  'Diagnostics': '◆',
  'Mental Health': '◎',
  'Nutrition': '◑',
  'Paediatrics': '◐',
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 20 20" style={{ width: '12px', height: '12px', fill: 'currentColor', flexShrink: 0 }}>
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 20 20" style={{ width: '11px', height: '11px', fill: 'currentColor', flexShrink: 0 }}>
      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  )
}

export function TreatmentMenu({
  treatments,
  locale = 'en-GB',
  title = 'Treatments & Procedures',
  subtitle = 'Comprehensive care across all specialties — transparent pricing, no hidden fees',
}: TreatmentMenuProps) {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = useMemo(
    () => Array.from(new Set(treatments.map(t => t.category))),
    [treatments]
  )

  const filtered = useMemo(
    () => activeCategory === 'all' ? treatments : treatments.filter(t => t.category === activeCategory),
    [treatments, activeCategory]
  )

  const grouped = useMemo(() => {
    if (activeCategory !== 'all') return { [activeCategory]: filtered }
    return categories.reduce<Record<string, Treatment[]>>((acc, cat) => {
      acc[cat] = filtered.filter(t => t.category === cat)
      return acc
    }, {})
  }, [filtered, activeCategory, categories])

  const fmt = (n: number, cur: string) =>
    new Intl.NumberFormat(locale, { style: 'currency', currency: cur, maximumFractionDigits: 0 }).format(n)

  return (
    <section style={{ padding: '80px 24px', background: 'var(--color-surface)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

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
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.0625rem', maxWidth: '540px', margin: '0 auto' }}>
            {subtitle}
          </p>
        </div>

        {/* Category tabs */}
        <div
          style={{
            display: 'flex',
            gap: '8px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '48px',
          }}
        >
          {['all', ...categories].map(cat => {
            const color = CATEGORY_COLORS[cat] || 'var(--color-primary)'
            const isActive = activeCategory === cat
            const icon = CATEGORY_ICONS[cat]
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '9px 18px',
                  borderRadius: 'var(--radius-full)',
                  border: isActive ? 'none' : '1px solid var(--color-border)',
                  background: isActive ? (cat === 'all' ? 'var(--color-primary)' : color) : 'var(--color-bg)',
                  color: isActive ? '#fff' : 'var(--color-text)',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {cat !== 'all' && icon && (
                  <span style={{ fontSize: '0.85rem', lineHeight: 1 }}>{icon}</span>
                )}
                {cat === 'all' ? 'All Categories' : cat}
              </button>
            )
          })}
        </div>

        {/* Treatments grouped by category */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '44px' }}>
          {Object.entries(grouped).map(([cat, items]) => {
            if (items.length === 0) return null
            const catColor = CATEGORY_COLORS[cat] || 'var(--color-primary)'
            const catIcon = CATEGORY_ICONS[cat]
            return (
              <div key={cat}>
                {/* Category heading (only when showing all) */}
                {activeCategory === 'all' && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                    <span
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: 'var(--radius-md)',
                        background: `${catColor}18`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1rem',
                        color: catColor,
                        fontWeight: 700,
                        flexShrink: 0,
                      }}
                    >
                      {catIcon || cat[0]}
                    </span>
                    <h3
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.15rem',
                        fontWeight: 700,
                        color: 'var(--color-text)',
                        margin: 0,
                      }}
                    >
                      {cat}
                    </h3>
                    <div style={{ flex: 1, height: '1px', background: 'var(--color-border)' }} />
                  </div>
                )}

                {/* Treatment cards */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '16px',
                  }}
                >
                  {items.map(treatment => (
                    <div
                      key={treatment.id}
                      style={{
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--color-border)',
                        background: 'var(--color-bg)',
                        padding: '20px 22px 20px 26px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      {/* Left accent bar */}
                      <div
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '4px',
                          height: '100%',
                          background: catColor,
                        }}
                      />

                      {/* Name + badge */}
                      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '10px' }}>
                        <h4
                          style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '0.9875rem',
                            fontWeight: 700,
                            color: 'var(--color-text)',
                            margin: 0,
                            lineHeight: 1.3,
                          }}
                        >
                          {treatment.name}
                        </h4>
                        {treatment.mostRequested && (
                          <span
                            style={{
                              flexShrink: 0,
                              padding: '3px 9px',
                              borderRadius: 'var(--radius-full)',
                              fontSize: '0.62rem',
                              fontWeight: 700,
                              textTransform: 'uppercase',
                              letterSpacing: '0.06em',
                              background: 'var(--color-accent)',
                              color: '#fff',
                            }}
                          >
                            Most Requested
                          </span>
                        )}
                      </div>

                      {/* Description */}
                      {treatment.description && (
                        <p
                          style={{
                            fontSize: '0.8125rem',
                            color: 'var(--color-text-muted)',
                            lineHeight: 1.6,
                            margin: 0,
                          }}
                        >
                          {treatment.description}
                        </p>
                      )}

                      {/* Footer: duration + insurance + price */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          flexWrap: 'wrap',
                          gap: '8px',
                          paddingTop: '10px',
                          borderTop: '1px solid var(--color-border)',
                          marginTop: 'auto',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          {/* Duration */}
                          <span
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px',
                              fontSize: '0.78rem',
                              color: 'var(--color-text-muted)',
                            }}
                          >
                            <ClockIcon />
                            {treatment.duration}
                          </span>

                          {/* Insurance */}
                          {treatment.insuranceAccepted && (
                            <span
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '3px',
                                padding: '2px 7px',
                                borderRadius: 'var(--radius-full)',
                                fontSize: '0.68rem',
                                fontWeight: 600,
                                background: '#f0fdf4',
                                color: '#16a34a',
                                border: '1px solid #bbf7d0',
                              }}
                            >
                              <ShieldIcon />
                              Insured
                            </span>
                          )}
                        </div>

                        {/* Price */}
                        <div>
                          <span style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', marginRight: '2px' }}>
                            from
                          </span>
                          <span
                            style={{
                              fontFamily: 'var(--font-heading)',
                              fontSize: '1.1rem',
                              fontWeight: 700,
                              color: catColor,
                            }}
                          >
                            {fmt(treatment.price, treatment.currency)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {filtered.length === 0 && (
          <p style={{ textAlign: 'center', padding: '64px 0', color: 'var(--color-text-muted)', fontSize: '1.05rem' }}>
            No treatments found in this category.
          </p>
        )}
      </div>
    </section>
  )
}
