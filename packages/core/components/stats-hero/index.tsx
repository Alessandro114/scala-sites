'use client'

interface StatItem {
  value: string
  label: string
}

interface StatsHeroProps {
  title: string
  subtitle?: string
  stats: StatItem[]
  backgroundImage: string
  ctaPrimary?: { label: string; href: string }
}

export function StatsHero({
  title,
  subtitle,
  stats,
  backgroundImage,
  ctaPrimary,
}: StatsHeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Background image with heavy overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />

      {/* Main content — positioned in lower half */}
      <div className="relative z-10 w-full px-6 pb-16 pt-32">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="mb-12 lg:mb-16">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-4">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg md:text-xl text-white/70 max-w-2xl">
                {subtitle}
              </p>
            )}
          </div>

          {/* Stats grid */}
          <div
            className={`grid gap-px bg-white/10 rounded-xl overflow-hidden mb-10 ${
              stats.length === 3
                ? 'grid-cols-3'
                : 'grid-cols-2 md:grid-cols-4'
            }`}
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-black/60 backdrop-blur-sm px-6 py-8 text-center relative overflow-hidden group"
              >
                {/* CSS counter animation via clip-path reveal on load */}
                <style>{`
                  @keyframes scala-stat-reveal {
                    from { opacity: 0; transform: translateY(20px); }
                    to   { opacity: 1; transform: translateY(0); }
                  }
                  .scala-stat-value {
                    animation: scala-stat-reveal 0.7s ease-out both;
                    animation-delay: ${i * 0.12}s;
                  }
                `}</style>
                <div
                  className="scala-stat-value text-3xl md:text-4xl lg:text-5xl font-black mb-2 leading-none"
                  style={{ color: 'var(--color-accent, #f59e0b)' }}
                >
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm font-semibold text-white/60 uppercase tracking-widest">
                  {stat.label}
                </div>
                {/* Hover accent underline */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: 'var(--color-accent, #f59e0b)' }}
                />
              </div>
            ))}
          </div>

          {/* CTA */}
          {ctaPrimary && (
            <a
              href={ctaPrimary.href}
              className="inline-flex items-center px-10 py-4 font-bold rounded-lg text-base text-black transition-opacity hover:opacity-90"
              style={{ backgroundColor: 'var(--color-accent, #f59e0b)' }}
            >
              {ctaPrimary.label}
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
