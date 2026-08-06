'use client'

import { useState, useMemo } from 'react'

interface Experience {
  id: string
  title: string
  description: string
  image: string
  duration: string
  price: number
  currency: string
  category: string
  rating: number
  reviewCount: number
}

interface ExperienceGridProps {
  experiences: Experience[]
  locale?: string
  title?: string
  subtitle?: string
  onBook?: (experienceId: string) => void
}

function StarRating({ rating }: { rating: number }) {
  return (
    <span style={{ display: 'inline-flex', gap: '2px' }}>
      {[1, 2, 3, 4, 5].map(i => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          style={{
            width: '14px',
            height: '14px',
            fill: i <= Math.round(rating) ? '#d4a853' : 'var(--color-border)',
          }}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  )
}

const CATEGORY_COLORS: Record<string, string> = {
  Spa: '#9b59b6',
  Wellness: '#16a085',
  Dining: '#e67e22',
  Tours: '#2980b9',
  Adventure: '#c0392b',
  Culture: '#8e44ad',
  Gastronomy: '#d35400',
  Nightlife: '#1a252f',
}

export function ExperienceGrid({
  experiences,
  locale = 'en',
  title = 'Curated Experiences',
  subtitle = 'Discover exceptional moments crafted for our guests',
  onBook,
}: ExperienceGridProps) {
  const [activeCategory, setActiveCategory] = useState('all')
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  const categories = useMemo(() => Array.from(new Set(experiences.map(e => e.category))), [experiences])

  const filtered = useMemo(
    () => activeCategory === 'all' ? experiences : experiences.filter(e => e.category === activeCategory),
    [experiences, activeCategory]
  )

  const fmt = (n: number, cur: string) =>
    new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: cur,
      maximumFractionDigits: 0,
    }).format(n)

  return (
    <section style={{ padding: '80px 24px', background: 'var(--color-surface)' }}>
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
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.0625rem', maxWidth: '560px', margin: '0 auto' }}>
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
          {['all', ...categories].map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '8px 20px',
                borderRadius: 'var(--radius-full)',
                border: activeCategory === cat ? 'none' : '1px solid var(--color-border)',
                background:
                  activeCategory === cat
                    ? (CATEGORY_COLORS[cat] || 'var(--color-primary)')
                    : 'var(--color-bg)',
                color: activeCategory === cat ? '#fff' : 'var(--color-text)',
                fontSize: '0.875rem',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {cat === 'all' ? 'All Experiences' : cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '28px',
          }}
        >
          {filtered.map(exp => {
            const catColor = CATEGORY_COLORS[exp.category] || 'var(--color-primary)'
            const isHovered = hoveredId === exp.id
            return (
              <article
                key={exp.id}
                onMouseEnter={() => setHoveredId(exp.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  border: '1px solid var(--color-border)',
                  background: 'var(--color-bg)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'box-shadow 0.25s, transform 0.25s',
                  boxShadow: isHovered ? '0 16px 48px rgba(0,0,0,0.13)' : '0 2px 8px rgba(0,0,0,0.04)',
                  transform: isHovered ? 'translateY(-4px)' : 'none',
                }}
              >
                {/* Image */}
                <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                  {exp.image ? (
                    <img
                      src={exp.image}
                      alt={exp.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.4s',
                        transform: isHovered ? 'scale(1.06)' : 'scale(1)',
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        background: `${catColor}22`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '3rem',
                      }}
                    >
                      ✦
                    </div>
                  )}

                  {/* Category badge */}
                  <span
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      padding: '4px 12px',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      background: catColor,
                      color: '#fff',
                    }}
                  >
                    {exp.category}
                  </span>

                  {/* Duration badge */}
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      right: '12px',
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      background: 'rgba(0,0,0,0.65)',
                      color: '#fff',
                      backdropFilter: 'blur(4px)',
                    }}
                  >
                    ⏱ {exp.duration}
                  </span>
                </div>

                {/* Content */}
                <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      color: 'var(--color-text)',
                      lineHeight: 1.3,
                    }}
                  >
                    {exp.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--color-text-muted)',
                      lineHeight: 1.6,
                      flex: 1,
                    }}
                  >
                    {exp.description}
                  </p>

                  {/* Rating */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <StarRating rating={exp.rating} />
                    <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text)' }}>
                      {exp.rating.toFixed(1)}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                      ({exp.reviewCount} reviews)
                    </span>
                  </div>

                  {/* Price & CTA */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '12px',
                      borderTop: '1px solid var(--color-border)',
                    }}
                  >
                    <div>
                      <span
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: '1.3rem',
                          fontWeight: 700,
                          color: 'var(--color-accent)',
                        }}
                      >
                        {fmt(exp.price, exp.currency)}
                      </span>
                      <span style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', marginLeft: '4px' }}>
                        / person
                      </span>
                    </div>

                    <button
                      onClick={() => onBook?.(exp.id)}
                      style={{
                        padding: '9px 18px',
                        borderRadius: 'var(--radius-md)',
                        border: `2px solid ${catColor}`,
                        background: isHovered ? catColor : 'transparent',
                        color: isHovered ? '#fff' : catColor,
                        fontSize: '0.825rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                      }}
                    >
                      Reserve
                    </button>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {filtered.length === 0 && (
          <p style={{ textAlign: 'center', padding: '64px 0', color: 'var(--color-text-muted)' }}>
            No experiences found in this category.
          </p>
        )}
      </div>
    </section>
  )
}
