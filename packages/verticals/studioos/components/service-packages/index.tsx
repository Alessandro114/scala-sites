'use client'

export interface ServicePackage {
  id: string
  name: string
  description: string
  deliverables: string[]
  timeline: string
  price: number
  currency: string
  popular?: boolean
}

interface ServicePackagesProps {
  packages: ServicePackage[]
  title?: string
  subtitle?: string
  onSelect?: (pkg: ServicePackage) => void
}

export function ServicePackages({
  packages,
  title = 'Services & Packages',
  subtitle = 'Transparent pricing, no surprises',
  onSelect,
}: ServicePackagesProps) {
  const formatPrice = (price: number, currency: string) =>
    new Intl.NumberFormat('en-GB', { style: 'currency', currency, maximumFractionDigits: 0 }).format(
      price
    )

  return (
    <section
      id="services"
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
          }}
        >
          {title}
        </h2>
        <p
          style={{
            textAlign: 'center',
            color: 'var(--color-text-muted)',
            marginBottom: '56px',
            fontSize: '1.05rem',
          }}
        >
          {subtitle}
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '28px',
            alignItems: 'start',
          }}
        >
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              style={{
                background: 'var(--color-bg)',
                border: '1px solid',
                borderColor: pkg.popular ? 'var(--color-primary)' : 'var(--color-border)',
                borderRadius: '20px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                boxShadow: pkg.popular ? '0 8px 32px rgba(0,0,0,0.1)' : 'none',
                transform: pkg.popular ? 'scale(1.03)' : 'none',
              }}
            >
              {pkg.popular && (
                <span
                  style={{
                    position: 'absolute',
                    top: '-14px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'var(--color-primary)',
                    color: '#fff',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    padding: '5px 16px',
                    borderRadius: '9999px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Most Popular
                </span>
              )}

              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  marginBottom: '8px',
                  fontFamily: 'var(--font-heading)',
                }}
              >
                {pkg.name}
              </h3>
              <p
                style={{
                  color: 'var(--color-text-muted)',
                  fontSize: '0.9rem',
                  lineHeight: 1.6,
                  marginBottom: '24px',
                }}
              >
                {pkg.description}
              </p>

              <div style={{ marginBottom: '24px' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: 800 }}>
                  {formatPrice(pkg.price, pkg.currency)}
                </span>
              </div>

              {/* Deliverables */}
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '0 0 24px 0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  flex: 1,
                }}
              >
                {pkg.deliverables.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      fontSize: '0.875rem',
                    }}
                  >
                    <svg
                      viewBox="0 0 20 20"
                      style={{ width: '18px', height: '18px', flexShrink: 0, marginTop: '2px' }}
                      fill="var(--color-accent)"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Timeline badge */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  marginBottom: '24px',
                  fontSize: '0.8rem',
                  color: 'var(--color-text-muted)',
                }}
              >
                <svg
                  viewBox="0 0 20 20"
                  style={{ width: '16px', height: '16px', flexShrink: 0 }}
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Typical timeline: <strong>{pkg.timeline}</strong></span>
              </div>

              <button
                onClick={() => onSelect?.(pkg)}
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '14px',
                  borderRadius: '12px',
                  border: pkg.popular ? 'none' : '1px solid var(--color-primary)',
                  background: pkg.popular ? 'var(--color-primary)' : 'transparent',
                  color: pkg.popular ? '#fff' : 'var(--color-primary)',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLButtonElement).style.opacity = '0.85'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLButtonElement).style.opacity = '1'
                }}
              >
                Start a Project
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
