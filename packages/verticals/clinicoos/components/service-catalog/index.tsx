'use client'

import { useState, useMemo } from 'react'

interface MedicalService {
  id: string
  name: string
  department: string
  description: string
  duration: string
  priceFrom: number
  currency: string
  insuranceAccepted: boolean
  popular?: boolean
}

interface ServiceCatalogProps {
  services: MedicalService[]
  locale?: string
  title?: string
  subtitle?: string
}

const DEPARTMENT_COLORS: Record<string, string> = {
  'General Practice': '#0891b2',
  'Dentistry': '#0e7490',
  'Dermatology': '#7c3aed',
  'Physiotherapy': '#059669',
  'Paediatrics': '#d97706',
  'Cardiology': '#dc2626',
  'Diagnostics': '#2563eb',
  'Nutrition': '#16a34a',
  'Mental Health': '#9333ea',
}

const DEPARTMENT_ICONS: Record<string, string> = {
  'General Practice': '🩺',
  'Dentistry': '🦷',
  'Dermatology': '🔬',
  'Physiotherapy': '🏃',
  'Paediatrics': '👶',
  'Cardiology': '❤️',
  'Diagnostics': '🧪',
  'Nutrition': '🥗',
  'Mental Health': '🧠',
}

export function ServiceCatalog({
  services,
  locale = 'en-GB',
  title = 'Our Services',
  subtitle = 'Comprehensive medical and healthcare services under one roof',
}: ServiceCatalogProps) {
  const [activeDept, setActiveDept] = useState('all')

  const departments = useMemo(
    () => Array.from(new Set(services.map(s => s.department))),
    [services]
  )

  const filtered = useMemo(
    () => activeDept === 'all' ? services : services.filter(s => s.department === activeDept),
    [services, activeDept]
  )

  const fmt = (n: number, cur: string) =>
    new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: cur,
      maximumFractionDigits: 0,
    }).format(n)

  const grouped = useMemo(() => {
    if (activeDept !== 'all') return { [activeDept]: filtered }
    return departments.reduce<Record<string, MedicalService[]>>((acc, dept) => {
      acc[dept] = filtered.filter(s => s.department === dept)
      return acc
    }, {})
  }, [filtered, activeDept, departments])

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
          <p
            style={{
              color: 'var(--color-text-muted)',
              fontSize: '1.0625rem',
              maxWidth: '540px',
              margin: '0 auto',
            }}
          >
            {subtitle}
          </p>
        </div>

        {/* Department tabs */}
        <div
          style={{
            display: 'flex',
            gap: '8px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '48px',
          }}
        >
          {['all', ...departments].map(dept => {
            const color = DEPARTMENT_COLORS[dept] || 'var(--color-primary)'
            const isActive = activeDept === dept
            const icon = DEPARTMENT_ICONS[dept] || '+'
            return (
              <button
                key={dept}
                onClick={() => setActiveDept(dept)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '9px 18px',
                  borderRadius: 'var(--radius-full)',
                  border: isActive ? 'none' : '1px solid var(--color-border)',
                  background: isActive
                    ? dept === 'all' ? 'var(--color-primary)' : color
                    : 'var(--color-bg)',
                  color: isActive ? '#fff' : 'var(--color-text)',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {dept !== 'all' && <span style={{ fontSize: '0.9rem' }}>{icon}</span>}
                {dept === 'all' ? 'All Departments' : dept}
              </button>
            )
          })}
        </div>

        {/* Services grouped by department */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {Object.entries(grouped).map(([dept, items]) => {
            if (items.length === 0) return null
            const deptColor = DEPARTMENT_COLORS[dept] || 'var(--color-primary)'
            const deptIcon = DEPARTMENT_ICONS[dept] || '+'
            return (
              <div key={dept}>
                {activeDept === 'all' && (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      marginBottom: '20px',
                    }}
                  >
                    <span
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: 'var(--radius-md)',
                        background: `${deptColor}18`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.1rem',
                      }}
                    >
                      {deptIcon}
                    </span>
                    <h3
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.2rem',
                        fontWeight: 700,
                        color: 'var(--color-text)',
                        margin: 0,
                      }}
                    >
                      {dept}
                    </h3>
                    <div style={{ flex: 1, height: '1px', background: 'var(--color-border)' }} />
                  </div>
                )}

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '16px',
                  }}
                >
                  {items.map(service => (
                    <div
                      key={service.id}
                      style={{
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--color-border)',
                        background: 'var(--color-bg)',
                        padding: '20px 22px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      {/* Accent bar */}
                      <div
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '3px',
                          height: '100%',
                          background: deptColor,
                          borderRadius: '3px 0 0 3px',
                        }}
                      />

                      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
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
                              {service.name}
                            </h4>
                            {service.popular && (
                              <span
                                style={{
                                  padding: '2px 8px',
                                  borderRadius: 'var(--radius-full)',
                                  fontSize: '0.65rem',
                                  fontWeight: 700,
                                  textTransform: 'uppercase',
                                  letterSpacing: '0.06em',
                                  background: deptColor,
                                  color: '#fff',
                                  flexShrink: 0,
                                }}
                              >
                                Popular
                              </span>
                            )}
                          </div>

                          {service.description && (
                            <p
                              style={{
                                fontSize: '0.8125rem',
                                color: 'var(--color-text-muted)',
                                lineHeight: 1.6,
                                margin: 0,
                              }}
                            >
                              {service.description}
                            </p>
                          )}
                        </div>
                      </div>

                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          flexWrap: 'wrap',
                          gap: '8px',
                          paddingTop: '8px',
                          borderTop: '1px solid var(--color-border)',
                          marginTop: 'auto',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
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
                            <svg viewBox="0 0 20 20" style={{ width: '12px', height: '12px', fill: 'currentColor' }}>
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                            {service.duration}
                          </span>

                          {/* Insurance badge */}
                          {service.insuranceAccepted && (
                            <span
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '3px',
                                padding: '2px 8px',
                                borderRadius: 'var(--radius-full)',
                                fontSize: '0.68rem',
                                fontWeight: 600,
                                background: '#f0fdf4',
                                color: '#16a34a',
                                border: '1px solid #bbf7d0',
                              }}
                            >
                              <svg viewBox="0 0 20 20" style={{ width: '10px', height: '10px', fill: 'currentColor' }}>
                                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              Insurance accepted
                            </span>
                          )}
                        </div>

                        {/* Price */}
                        <div>
                          <span style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', marginRight: '2px' }}>
                            from
                          </span>
                          <span
                            style={{
                              fontFamily: 'var(--font-heading)',
                              fontSize: '1.1rem',
                              fontWeight: 700,
                              color: deptColor,
                            }}
                          >
                            {fmt(service.priceFrom, service.currency)}
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
          <p
            style={{
              textAlign: 'center',
              padding: '64px 0',
              color: 'var(--color-text-muted)',
              fontSize: '1.05rem',
            }}
          >
            No services available in this department.
          </p>
        )}
      </div>
    </section>
  )
}
