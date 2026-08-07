'use client'

import { useState } from 'react'

export interface PracticeAreaCard {
  id: string
  icon: string
  title: string
  description: string
  learnMoreText: string
  keyStat: string
  lawyerAnchor?: string
}

interface PracticeAreasGridProps {
  areas: PracticeAreaCard[]
  title?: string
  subtitle?: string
}

export function PracticeAreasGrid({
  areas,
  title = 'Practice Areas',
  subtitle = 'Deep expertise across every major legal discipline',
}: PracticeAreasGridProps) {
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <section
      id="practice-areas"
      style={{ padding: '80px 24px', background: 'var(--color-secondary)' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2
          style={{
            fontSize: '2.25rem',
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: '8px',
            fontFamily: 'var(--font-heading)',
            color: 'var(--color-text)',
          }}
        >
          {title}
        </h2>
        <p
          style={{
            textAlign: 'center',
            color: 'var(--color-text-muted)',
            marginBottom: '48px',
            fontSize: '1.05rem',
          }}
        >
          {subtitle}
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '20px',
          }}
        >
          {areas.map((area) => {
            const isOpen = expanded === area.id
            return (
              <div
                key={area.id}
                style={{
                  background: 'var(--color-surface)',
                  border: '1px solid',
                  borderColor: isOpen ? 'var(--color-accent)' : 'var(--color-border)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                  boxShadow: isOpen ? '0 4px 24px rgba(201,168,76,0.12)' : 'none',
                }}
              >
                {/* Card header */}
                <div style={{ padding: '28px 28px 20px' }}>
                  {/* Icon + stat row */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      marginBottom: '16px',
                    }}
                  >
                    <div
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '12px',
                        background: 'var(--color-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.6rem',
                        flexShrink: 0,
                      }}
                    >
                      {area.icon}
                    </div>

                    <span
                      style={{
                        display: 'inline-block',
                        padding: '5px 12px',
                        background: 'rgba(201,168,76,0.12)',
                        border: '1px solid rgba(201,168,76,0.3)',
                        borderRadius: '9999px',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        color: 'var(--color-accent)',
                        letterSpacing: '0.03em',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {area.keyStat}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      marginBottom: '8px',
                      color: 'var(--color-text)',
                      fontFamily: 'var(--font-heading)',
                    }}
                  >
                    {area.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--color-text-muted)',
                      lineHeight: 1.65,
                    }}
                  >
                    {area.description}
                  </p>
                </div>

                {/* Expandable "learn more" */}
                {isOpen && (
                  <div
                    style={{
                      padding: '0 28px 20px',
                      borderTop: '1px solid var(--color-border)',
                      paddingTop: '20px',
                    }}
                  >
                    <p
                      style={{
                        fontSize: '0.875rem',
                        color: 'var(--color-text-muted)',
                        lineHeight: 1.7,
                        marginBottom: '16px',
                      }}
                    >
                      {area.learnMoreText}
                    </p>
                    {area.lawyerAnchor && (
                      <a
                        href={area.lawyerAnchor}
                        style={{
                          display: 'inline-block',
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          color: 'var(--color-accent)',
                          textDecoration: 'none',
                          letterSpacing: '0.02em',
                        }}
                      >
                        Meet our {area.title} lawyers →
                      </a>
                    )}
                  </div>
                )}

                {/* Toggle button */}
                <div style={{ padding: '0 28px 24px', marginTop: 'auto' }}>
                  <button
                    onClick={() => setExpanded(isOpen ? null : area.id)}
                    style={{
                      width: '100%',
                      padding: '10px',
                      background: 'transparent',
                      border: '1px solid',
                      borderColor: isOpen ? 'var(--color-accent)' : 'var(--color-border)',
                      borderRadius: '8px',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: isOpen ? 'var(--color-accent)' : 'var(--color-text-muted)',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {isOpen ? 'Show less ▲' : 'Learn more ▼'}
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
