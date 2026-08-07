'use client'

interface CarePackage {
  id: string
  name: string
  price: number
  currency: string
  period: 'month' | 'visit' | 'year'
  services: string[]
  highlighted?: boolean
  savingsVsIndividual?: number
  ctaLabel?: string
  ctaUrl?: string
}

interface ServicePackagesProps {
  packages: CarePackage[]
  locale?: string
  title?: string
}

export function ServicePackages({ packages, locale = 'en-GB', title = 'Care Packages' }: ServicePackagesProps) {
  const fmt = (n: number, cur: string) =>
    new Intl.NumberFormat(locale, { style: 'currency', currency: cur, maximumFractionDigits: 0 }).format(n)

  return (
    <section className="py-16 px-4" style={{ background: 'var(--color-secondary)' }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
          {title}
        </h2>
        <p className="text-center mb-10" style={{ color: 'var(--color-text-muted)' }}>
          Comprehensive care at unbeatable value — keep your pet happy and healthy year-round
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map(pkg => (
            <div
              key={pkg.id}
              className={`rounded-2xl border p-6 flex flex-col ${pkg.highlighted ? 'ring-2 shadow-xl scale-105' : ''}`}
              style={{
                borderColor: pkg.highlighted ? 'var(--color-primary)' : 'var(--color-border)',
                background: 'var(--color-bg)',
              } as React.CSSProperties}
            >
              {pkg.highlighted && (
                <span
                  className="self-center -mt-10 mb-3 px-4 py-1 text-xs font-bold uppercase rounded-full text-white"
                  style={{ background: 'var(--color-primary)' }}
                >
                  Most Popular
                </span>
              )}

              <h3 className="text-lg font-bold mb-1" style={{ fontFamily: 'var(--font-heading)' }}>{pkg.name}</h3>

              {/* Price */}
              <div className="mb-4">
                <span className="text-3xl font-bold">{fmt(pkg.price, pkg.currency)}</span>
                <span className="text-xs ml-1" style={{ color: 'var(--color-text-muted)' }}>/{pkg.period}</span>
              </div>

              {/* Savings indicator */}
              {pkg.savingsVsIndividual && pkg.savingsVsIndividual > 0 && (
                <div
                  className="mb-4 px-3 py-1.5 rounded-lg text-xs font-semibold text-center"
                  style={{ background: '#dcfce7', color: '#166534' }}
                >
                  Save {fmt(pkg.savingsVsIndividual, pkg.currency)} vs individual bookings
                </div>
              )}

              {/* Services checklist */}
              <ul className="space-y-2 mb-6 flex-1">
                {pkg.services.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <svg viewBox="0 0 20 20" className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ fill: 'var(--color-success)' }}>
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {s}
                  </li>
                ))}
              </ul>

              <a
                href={pkg.ctaUrl || '#'}
                className={`block text-center py-2.5 rounded-xl text-sm font-semibold transition-colors ${pkg.highlighted ? 'text-white' : ''}`}
                style={{ background: pkg.highlighted ? 'var(--color-primary)' : 'var(--color-secondary)' }}
              >
                {pkg.ctaLabel || 'Sign Up'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
