'use client'

import { useState, useMemo } from 'react'

export interface Lawyer {
  id: string
  name: string
  photo?: string
  title: 'Partner' | 'Associate' | 'Of Counsel'
  practiceAreas: string[]
  yearsOfExperience: number
  notableCasesCount: number
  education: string[]
  barAdmissions: string[]
  bio: string
  ctaUrl?: string
}

interface LawyerDirectoryProps {
  lawyers: Lawyer[]
  title?: string
  subtitle?: string
  onSchedule?: (lawyer: Lawyer) => void
}

const TITLE_COLORS: Record<string, { bg: string; text: string }> = {
  Partner: { bg: '#1a1a3e', text: '#c9a84c' },
  'Of Counsel': { bg: '#2d2d5e', text: '#c9a84c' },
  Associate: { bg: '#3a3a6e', text: '#e8d5a3' },
}

export function LawyerDirectory({
  lawyers,
  title = 'Our Lawyers',
  subtitle = 'Distinguished counsel across every major legal discipline',
  onSchedule,
}: LawyerDirectoryProps) {
  const [activeFilter, setActiveFilter] = useState('All')
  const [expanded, setExpanded] = useState<string | null>(null)

  const allAreas = useMemo(() => {
    const set = new Set<string>()
    lawyers.forEach((l) => l.practiceAreas.forEach((a) => set.add(a)))
    return ['All', ...Array.from(set).sort()]
  }, [lawyers])

  const filtered = useMemo(
    () =>
      activeFilter === 'All'
        ? lawyers
        : lawyers.filter((l) => l.practiceAreas.includes(activeFilter)),
    [lawyers, activeFilter],
  )

  return (
    <section id="lawyers" style={{ padding: '80px 24px', background: 'var(--color-bg)' }}>
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
            marginBottom: '40px',
            fontSize: '1.05rem',
          }}
        >
          {subtitle}
        </p>

        {/* Practice area filter */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            justifyContent: 'center',
            marginBottom: '48px',
          }}
        >
          {allAreas.map((area) => (
            <button
              key={area}
              onClick={() => setActiveFilter(area)}
              style={{
                padding: '8px 20px',
                borderRadius: '9999px',
                border: '1px solid',
                borderColor:
                  activeFilter === area ? 'var(--color-accent)' : 'var(--color-border)',
                background:
                  activeFilter === area ? 'var(--color-accent)' : 'transparent',
                color: activeFilter === area ? '#1a1a3e' : 'var(--color-text-muted)',
                fontWeight: activeFilter === area ? 700 : 400,
                fontSize: '0.875rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {area}
            </button>
          ))}
        </div>

        {/* Lawyer grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '28px',
          }}
        >
          {filtered.map((lawyer) => {
            const titleColors = TITLE_COLORS[lawyer.title] ?? TITLE_COLORS['Associate']
            const isExpanded = expanded === lawyer.id
            const initials = lawyer.name
              .split(' ')
              .map((n) => n[0])
              .join('')

            return (
              <div
                key={lawyer.id}
                style={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'box-shadow 0.2s',
                }}
              >
                {/* Photo */}
                <div
                  style={{
                    position: 'relative',
                    paddingTop: '100%',
                    overflow: 'hidden',
                    background: '#2a2a50',
                  }}
                >
                  {lawyer.photo ? (
                    <img
                      src={lawyer.photo}
                      alt={lawyer.name}
                      loading="lazy"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'top center',
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '2.5rem',
                        fontWeight: 700,
                        color: '#c9a84c',
                        fontFamily: '"Georgia", "Times New Roman", serif',
                      }}
                    >
                      {initials}
                    </div>
                  )}

                  {/* Title badge */}
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      left: '12px',
                      background: titleColors.bg,
                      color: titleColors.text,
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.07em',
                      padding: '4px 10px',
                      borderRadius: '4px',
                    }}
                  >
                    {lawyer.title}
                  </span>

                  {/* Notable cases badge */}
                  <span
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      background: 'rgba(201,168,76,0.9)',
                      color: '#1a1a3e',
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      padding: '4px 10px',
                      borderRadius: '4px',
                    }}
                  >
                    {lawyer.notableCasesCount}+ notable cases
                  </span>
                </div>

                {/* Info */}
                <div style={{ padding: '20px 20px 0' }}>
                  <h3
                    style={{
                      fontWeight: 700,
                      fontSize: '1.15rem',
                      marginBottom: '2px',
                      color: 'var(--color-text)',
                    }}
                  >
                    {lawyer.name}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.8rem',
                      color: 'var(--color-accent)',
                      fontWeight: 600,
                      marginBottom: '12px',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {lawyer.yearsOfExperience} years of experience
                  </p>

                  {/* Practice area tags */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '6px',
                      marginBottom: '12px',
                    }}
                  >
                    {lawyer.practiceAreas.map((area) => (
                      <span
                        key={area}
                        style={{
                          fontSize: '0.7rem',
                          fontWeight: 600,
                          padding: '3px 9px',
                          borderRadius: '9999px',
                          background: 'var(--color-secondary)',
                          color: 'var(--color-text-muted)',
                          border: '1px solid var(--color-border)',
                        }}
                      >
                        {area}
                      </span>
                    ))}
                  </div>

                  {/* Expandable profile */}
                  {isExpanded && (
                    <div style={{ marginBottom: '12px' }}>
                      <p
                        style={{
                          fontSize: '0.875rem',
                          color: 'var(--color-text-muted)',
                          lineHeight: 1.65,
                          marginBottom: '16px',
                        }}
                      >
                        {lawyer.bio}
                      </p>

                      {lawyer.education.length > 0 && (
                        <div style={{ marginBottom: '12px' }}>
                          <p
                            style={{
                              fontSize: '0.7rem',
                              fontWeight: 700,
                              textTransform: 'uppercase',
                              letterSpacing: '0.06em',
                              color: 'var(--color-text-muted)',
                              marginBottom: '4px',
                            }}
                          >
                            Education
                          </p>
                          {lawyer.education.map((edu) => (
                            <p
                              key={edu}
                              style={{
                                fontSize: '0.8rem',
                                color: 'var(--color-text-muted)',
                                lineHeight: 1.5,
                              }}
                            >
                              {edu}
                            </p>
                          ))}
                        </div>
                      )}

                      {lawyer.barAdmissions.length > 0 && (
                        <div>
                          <p
                            style={{
                              fontSize: '0.7rem',
                              fontWeight: 700,
                              textTransform: 'uppercase',
                              letterSpacing: '0.06em',
                              color: 'var(--color-text-muted)',
                              marginBottom: '4px',
                            }}
                          >
                            Bar Admissions
                          </p>
                          {lawyer.barAdmissions.map((bar) => (
                            <p
                              key={bar}
                              style={{
                                fontSize: '0.8rem',
                                color: 'var(--color-text-muted)',
                                lineHeight: 1.5,
                              }}
                            >
                              {bar}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  <button
                    onClick={() => setExpanded(isExpanded ? null : lawyer.id)}
                    style={{
                      width: '100%',
                      padding: '8px',
                      background: 'transparent',
                      border: 'none',
                      fontSize: '0.8rem',
                      color: 'var(--color-text-muted)',
                      cursor: 'pointer',
                      textAlign: 'center',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {isExpanded ? 'Show less ▲' : 'View profile ▼'}
                  </button>
                </div>

                {/* CTA */}
                <div style={{ padding: '0 20px 20px', marginTop: 'auto' }}>
                  <button
                    onClick={() => onSchedule?.(lawyer)}
                    style={{
                      width: '100%',
                      padding: '12px',
                      background: 'var(--color-primary)',
                      color: '#c9a84c',
                      border: '1px solid #c9a84c',
                      borderRadius: '10px',
                      fontSize: '0.875rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      letterSpacing: '0.02em',
                      transition: 'opacity 0.2s',
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLButtonElement).style.opacity = '0.85')
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLButtonElement).style.opacity = '1')
                    }
                  >
                    Schedule Consultation
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {filtered.length === 0 && (
          <p
            style={{
              textAlign: 'center',
              color: 'var(--color-text-muted)',
              marginTop: '40px',
            }}
          >
            No lawyers found for this practice area.
          </p>
        )}
      </div>
    </section>
  )
}
