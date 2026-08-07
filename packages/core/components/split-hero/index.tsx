'use client'

interface SplitHeroProps {
  title: string
  subtitle?: string
  ctaPrimary?: { label: string; href: string }
  ctaSecondary?: { label: string; href: string }
  imageSrc: string
  imageAlt?: string
  reversed?: boolean
  accentColor?: string
}

export function SplitHero({
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  imageSrc,
  imageAlt = '',
  reversed = false,
  accentColor = '#c9a84c',
}: SplitHeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      <div
        className={`w-full flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
        style={{ minHeight: '100vh' }}
      >
        {/* Text panel */}
        <div className="flex-1 flex items-center justify-center px-8 py-24 lg:py-32 lg:px-16 xl:px-24 order-2 lg:order-1">
          <div className="max-w-xl w-full">
            {/* Accent line */}
            <div
              className="w-12 h-1 mb-8 rounded-full"
              style={{ backgroundColor: accentColor }}
            />
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight tracking-tight mb-6"
              style={{ color: 'var(--color-text, #1a1a2e)' }}
            >
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg md:text-xl leading-relaxed mb-10"
                style={{ color: 'var(--color-text-muted, #6b6b8a)' }}
              >
                {subtitle}
              </p>
            )}
            <div className="flex flex-wrap gap-4">
              {ctaPrimary && (
                <a
                  href={ctaPrimary.href}
                  className="inline-flex items-center px-8 py-4 font-semibold rounded-lg text-base transition-opacity hover:opacity-90"
                  style={{
                    backgroundColor: 'var(--color-primary, #1a1a2e)',
                    color: '#ffffff',
                  }}
                >
                  {ctaPrimary.label}
                </a>
              )}
              {ctaSecondary && (
                <a
                  href={ctaSecondary.href}
                  className="inline-flex items-center px-8 py-4 font-semibold rounded-lg text-base border-2 transition-colors hover:bg-gray-50"
                  style={{
                    borderColor: 'var(--color-primary, #1a1a2e)',
                    color: 'var(--color-primary, #1a1a2e)',
                  }}
                >
                  {ctaSecondary.label}
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Image panel */}
        <div className="flex-1 relative min-h-[50vh] lg:min-h-screen order-1 lg:order-2">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${imageSrc})` }}
            role="img"
            aria-label={imageAlt}
          />
          {/* Subtle gradient edge toward text panel */}
          <div
            className={`absolute inset-y-0 w-24 pointer-events-none ${reversed ? 'right-0' : 'left-0'}`}
            style={{
              background: reversed
                ? 'linear-gradient(to left, white, transparent)'
                : 'linear-gradient(to right, white, transparent)',
            }}
          />
        </div>
      </div>
    </section>
  )
}
