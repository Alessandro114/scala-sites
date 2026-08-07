'use client'

import { useState } from 'react'

export interface Attorney {
  id: string
  name: string
  title: 'Partner' | 'Senior Partner' | 'Associate' | 'Senior Associate' | 'Of Counsel'
  photo: string
  practiceAreas: string[]
  barAdmissions: string[]
  education: string[]
  yearsOfExperience: number
  bio: string
  email?: string
  linkedin?: string
}

interface AttorneyProfilesProps {
  attorneys: Attorney[]
  title?: string
  subtitle?: string
  onSchedule?: (attorney: Attorney) => void
}

const PRACTICE_AREA_FILTERS = [
  'All',
  'Corporate',
  'Litigation',
  'Real Estate',
  'Employment',
  'IP',
  'Tax',
]

const TITLE_BADGE_COLORS: Record<string, string> = {
  'Senior Partner': '#1e293b',
  'Partner': '#1e293b',
  'Of Counsel': '#374151',
  'Senior Associate': '#4b5563',
  'Associate': '#6b7280',
}

export function AttorneyProfiles({
  attorneys,
  title = 'Our Attorneys',
  subtitle = 'Experienced counsel across a full range of legal disciplines',
  onSchedule,
}: AttorneyProfilesProps) {
  const [activeFilter, setActiveFilter] = useState('All')
  const [expanded, setExpanded] = useState<string | null>(null)

  const filtered =
    activeFilter === 'All'
      ? attorneys
      : attorneys.filter((a) => a.practiceAreas.includes(activeFilter))

  return (
    <section id="attorneys" style={{ padding: '80px 24px' }}>
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

        {/* Practice area filter tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            justifyContent: 'center',
            marginBottom: '48px',
          }}
        >
          {PRACTICE_AREA_FILTERS.map((area) => (
            <button
              key={area}
              onClick={() => setActiveFilter(area)}
              style={{
                padding: '8px 20px',
                borderRadius: '9999px',
                border: '1px solid',
                borderColor:
                  activeFilter === area ? 'var(--color-primary)' : 'var(--color-border)',
                background:
                  activeFilter === area ? 'var(--color-primary)' : 'transparent',
                color: activeFilter === area ? '#fff' : 'var(--color-text-muted)',
                fontWeight: activeFilter === area ? 600 : 400,
                fontSize: '0.875rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {area}
            </button>
          ))}
        </div>

        {/* Attorney grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '28px',
          }}
        >
          {filtered.map((attorney) => (
            <div
              key={attorney.id}
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: '16px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Photo */}
              <div style={{ position: 'relative', paddingTop: '100%', overflow: 'hidden', background: '#e2e8f0' }}>
                <img
                  src={attorney.photo}
                  alt={attorney.name}
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
                {/* Title badge */}
                <span
                  style={{
                    position: 'absolute',
                    bottom: '12px',
                    left: '12px',
                    background: TITLE_BADGE_COLORS[attorney.title] ?? '#1e293b',
                    color: '#fff',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    padding: '4px 10px',
                    borderRadius: '4px',
                  }}
                >
                  {attorney.title}
                </span>
              </div>

              {/* Info */}
              <div style={{ padding: '20px 20px 0' }}>
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: '1.15rem',
                    marginBottom: '4px',
                    color: 'var(--color-text)',
                  }}
                >
                  {attorney.name}
                </h3>

                {/* Years experience */}
                <p
                  style={{
                    fontSize: '0.8rem',
                    color: 'var(--color-accent)',
                    fontWeight: 600,
                    marginBottom: '12px',
                    letterSpacing: '0.02em',
                  }}
                >
                  {attorney.yearsOfExperience} years of experience
                </p>

                {/* Practice areas */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '12px' }}>
                  {attorney.practiceAreas.map((area) => (
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

                {/* Expandable details */}
                {expanded === attorney.id && (
                  <div style={{ marginBottom: '12px' }}>
                    <p
                      style={{
                        fontSize: '0.875rem',
                        color: 'var(--color-text-muted)',
                        lineHeight: 1.65,
                        marginBottom: '14px',
                      }}
                    >
                      {attorney.bio}
                    </p>

                    <div style={{ marginBottom: '10px' }}>
                      <p
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          color: 'var(--color-text-muted)',
                          marginBottom: '4px',
                        }}
                      >
                        Bar Admissions
                      </p>
                      {attorney.barAdmissions.map((bar) => (
                        <p key={bar} style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                          {bar}
                        </p>
                      ))}
                    </div>

                    <div>
                      <p
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          color: 'var(--color-text-muted)',
                          marginBottom: '4px',
                        }}
                      >
                        Education
                      </p>
                      {attorney.education.map((edu) => (
                        <p key={edu} style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                          {edu}
                        </p>
                      ))}
                    </div>
                  </div>
                )}

                <button
                  onClick={() => setExpanded(expanded === attorney.id ? null : attorney.id)}
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
                  {expanded === attorney.id ? 'Show less ▲' : 'View profile ▼'}
                </button>
              </div>

              {/* CTA */}
              <div style={{ padding: '0 20px 20px', marginTop: 'auto' }}>
                <button
                  onClick={() => onSchedule?.(attorney)}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: 'var(--color-primary)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '10px',
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    letterSpacing: '0.02em',
                    transition: 'opacity 0.2s',
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = '0.88')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = '1')}
                >
                  Schedule Consultation
                </button>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', marginTop: '40px' }}>
            No attorneys found for this practice area.
          </p>
        )}
      </div>
    </section>
  )
}
