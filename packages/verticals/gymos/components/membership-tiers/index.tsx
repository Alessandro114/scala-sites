'use client'

interface Tier {
  id: string
  name: string
  price: number
  currency: string
  period: string
  features: string[]
  highlighted?: boolean
  ctaLabel?: string
  ctaUrl?: string
}

interface MembershipTiersProps {
  tiers: Tier[]
  locale?: string
  title?: string
}

export function MembershipTiers({ tiers, locale = 'en', title = 'Membership Plans' }: MembershipTiersProps) {
  const fmt = (n: number, cur: string) =>
    new Intl.NumberFormat(locale, { style: 'currency', currency: cur, maximumFractionDigits: 0 }).format(n)

  return (
    <section className="py-16 px-4" style={{ background: 'var(--color-secondary)' }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{title}</h2>
        <p className="text-center mb-10" style={{ color: 'var(--color-text-muted)' }}>No hidden fees. Cancel anytime.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map(tier => (
            <div key={tier.id}
              className={`rounded-2xl border p-8 flex flex-col ${tier.highlighted ? 'ring-2 shadow-xl scale-105' : ''}`}
              style={{
                borderColor: tier.highlighted ? 'var(--color-primary)' : 'var(--color-border)',
                background: 'var(--color-bg)',
              } as React.CSSProperties}>
              {tier.highlighted && (
                <span className="self-center -mt-12 mb-4 px-4 py-1 text-xs font-bold uppercase rounded-full text-white"
                  style={{ background: 'var(--color-primary)' }}>Most Popular</span>
              )}
              <h3 className="text-xl font-bold mb-1" style={{ fontFamily: 'var(--font-heading)' }}>{tier.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">{fmt(tier.price, tier.currency)}</span>
                <span className="text-sm" style={{ color: 'var(--color-text-muted)' }}>/{tier.period}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <svg viewBox="0 0 20 20" className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ fill: 'var(--color-success)' }}>
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a href={tier.ctaUrl || '#'}
                className={`block text-center py-3 rounded-xl font-semibold transition-colors ${tier.highlighted ? 'text-white' : ''}`}
                style={{ background: tier.highlighted ? 'var(--color-primary)' : 'var(--color-secondary)' }}>
                {tier.ctaLabel || 'Start Free Trial'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
