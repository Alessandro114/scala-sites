'use client'

import { useState } from 'react'

export interface PortfolioProject {
  id: string
  title: string
  client: string
  category: string
  image: string
  description: string
  year: number
}

interface PortfolioShowcaseProps {
  projects: PortfolioProject[]
  title?: string
  subtitle?: string
}

export function PortfolioShowcase({
  projects,
  title = 'Our Work',
  subtitle = 'A selection of projects we are proud of',
}: PortfolioShowcaseProps) {
  const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))]
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightbox, setLightbox] = useState<PortfolioProject | null>(null)

  const filtered =
    activeCategory === 'All' ? projects : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="portfolio" style={{ padding: '80px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2
          style={{
            fontSize: '2.25rem',
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: '8px',
            fontFamily: 'var(--font-heading)',
          }}
        >
          {title}
        </h2>
        <p
          style={{
            textAlign: 'center',
            color: 'var(--color-text-muted)',
            marginBottom: '40px',
            fontSize: '1.05rem',
          }}
        >
          {subtitle}
        </p>

        {/* Category tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            justifyContent: 'center',
            marginBottom: '40px',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '8px 20px',
                borderRadius: '9999px',
                border: '1px solid',
                borderColor:
                  activeCategory === cat ? 'var(--color-primary)' : 'var(--color-border)',
                background: activeCategory === cat ? 'var(--color-primary)' : 'transparent',
                color: activeCategory === cat ? '#fff' : 'inherit',
                fontWeight: activeCategory === cat ? 600 : 400,
                fontSize: '0.875rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '24px',
          }}
        >
          {filtered.map((project) => (
            <button
              key={project.id}
              onClick={() => setLightbox(project)}
              style={{
                textAlign: 'left',
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: '16px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s',
                padding: 0,
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-4px)'
                ;(e.currentTarget as HTMLButtonElement).style.boxShadow =
                  '0 12px 32px rgba(0,0,0,0.12)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLButtonElement).style.transform = 'none'
                ;(e.currentTarget as HTMLButtonElement).style.boxShadow = 'none'
              }}
            >
              <div style={{ position: 'relative', paddingTop: '66%', overflow: 'hidden' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s',
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: 'var(--color-primary)',
                    color: '#fff',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    padding: '4px 10px',
                    borderRadius: '9999px',
                  }}
                >
                  {project.category}
                </span>
              </div>
              <div style={{ padding: '20px' }}>
                <h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '4px' }}>
                  {project.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.8rem',
                    color: 'var(--color-text-muted)',
                    marginBottom: '8px',
                  }}
                >
                  {project.client} &mdash; {project.year}
                </p>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                  {project.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            background: 'rgba(0,0,0,0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'var(--color-bg)',
              borderRadius: '20px',
              overflow: 'hidden',
              maxWidth: '800px',
              width: '100%',
              boxShadow: '0 24px 80px rgba(0,0,0,0.4)',
            }}
          >
            <img
              src={lightbox.image}
              alt={lightbox.title}
              style={{ width: '100%', maxHeight: '420px', objectFit: 'cover', display: 'block' }}
            />
            <div style={{ padding: '28px 32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '4px' }}>
                    {lightbox.title}
                  </h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
                    {lightbox.client} &mdash; {lightbox.category} &mdash; {lightbox.year}
                  </p>
                </div>
                <button
                  onClick={() => setLightbox(null)}
                  aria-label="Close"
                  style={{
                    background: 'var(--color-secondary)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '36px',
                    height: '36px',
                    fontSize: '1.2rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginLeft: '16px',
                  }}
                >
                  &times;
                </button>
              </div>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                {lightbox.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
