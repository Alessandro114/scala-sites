'use client'

import { useState } from 'react'

export interface PracticeArea {
  id: string
  title: string
  icon: string
  description: string
  keyServices: string[]
  representativeMatters: string[]
}

interface PracticeAreasProps {
  areas: PracticeArea[]
  title?: string
  subtitle?: string
  onGetAdvice?: (area: PracticeArea) => void
}

export function PracticeAreas({
  areas,
  title = 'Practice Areas',
  subtitle = 'Comprehensive legal services across all major disciplines',
  onGetAdvice,
}: PracticeAreasProps) {
  const [expanded, setExpanded] = useState<string | null>(null)

  const toggle = (id: string) => setExpanded(expanded === id ? null : id)

  return (
    <section id="practice-areas" style={{ padding: '80px 24px', background: 'var(--color-secondary)' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
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

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {areas.map((area) => {
            const isOpen = expanded === area.id
            return (
              <div
                key={area.id}
                style={{
                  background: 'var(--color-bg)',
                  border: '1px solid',
                  borderColor: isOpen ? 'var(--color-primary)' : 'var(--color-border)',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  transition: 'border-color 0.2s',
                }}
              >
                {/* Header — always visible */}
                <button
                  onClick={() => toggle(area.id)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '20px 24px',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  {/* Icon */}
                  <span
                    style={{
                      fontSize: '1.75rem',
                      flexShrink: 0,
                      width: '48px',
                      height: '48px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: isOpen ? 'var(--color-primary)' : 'var(--color-secondary)',
                      borderRadius: '10px',
                      transition: 'background 0.2s',
                    }}
                  >
                    {area.icon}
                  </span>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3
                      style={{
                        fontSize: '1.05rem',
                        fontWeight: 700,
                        color: isOpen ? 'var(--color-primary)' : 'var(--color-text)',
                        marginBottom: '2px',
                        transition: 'color 0.2s',
                      }}
                    >
                      {area.title}
                    </h3>
                    {!isOpen && (
                      <p
                        style={{
                          fontSize: '0.85rem',
                          color: 'var(--color-text-muted)',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {area.description}
                      </p>
                    )}
                  </div>

                  {/* Chevron */}
                  <span
                    style={{
                      fontSize: '1.1rem',
                      color: 'var(--color-text-muted)',
                      flexShrink: 0,
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s',
                      display: 'inline-block',
                    }}
                  >
                    ▾
                  </span>
                </button>

                {/* Expanded body */}
                {isOpen && (
                  <div style={{ padding: '0 24px 28px' }}>
                    <p
                      style={{
                        fontSize: '0.925rem',
                        color: 'var(--color-text-muted)',
                        lineHeight: 1.7,
                        marginBottom: '24px',
                      }}
                    >
                      {area.description}
                    </p>

                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '24px',
                        marginBottom: '28px',
                      }}
                    >
                      {/* Key services */}
                      <div>
                        <h4
                          style={{
                            fontSize: '0.72rem',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.06em',
                            color: 'var(--color-text-muted)',
                            marginBottom: '10px',
                          }}
                        >
                          Key Services
                        </h4>
                        <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                          {area.keyServices.map((svc) => (
                            <li
                              key={svc}
                              style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '8px',
                                fontSize: '0.875rem',
                                color: 'var(--color-text-muted)',
                              }}
                            >
                              <span
                                style={{
                                  width: '6px',
                                  height: '6px',
                                  borderRadius: '50%',
                                  background: 'var(--color-accent)',
                                  flexShrink: 0,
                                  marginTop: '6px',
                                }}
                              />
                              {svc}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Representative matters */}
                      <div>
                        <h4
                          style={{
                            fontSize: '0.72rem',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.06em',
                            color: 'var(--color-text-muted)',
                            marginBottom: '10px',
                          }}
                        >
                          Representative Matters
                        </h4>
                        <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                          {area.representativeMatters.map((matter) => (
                            <li
                              key={matter}
                              style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '8px',
                                fontSize: '0.875rem',
                                color: 'var(--color-text-muted)',
                              }}
                            >
                              <span
                                style={{
                                  width: '6px',
                                  height: '6px',
                                  borderRadius: '50%',
                                  background: 'var(--color-primary)',
                                  flexShrink: 0,
                                  marginTop: '6px',
                                }}
                              />
                              {matter}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <button
                      onClick={() => onGetAdvice?.(area)}
                      style={{
                        padding: '12px 28px',
                        background: 'var(--color-primary)',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '10px',
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        letterSpacing: '0.02em',
                        transition: 'opacity 0.2s',
                      }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = '0.88')}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = '1')}
                    >
                      Get Legal Advice
                    </button>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
