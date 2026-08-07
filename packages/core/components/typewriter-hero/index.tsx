'use client'

interface TypewriterHeroProps {
  staticText: string
  rotatingWords: string[]
  subtitle?: string
  ctaPrimary?: { label: string; href: string }
  backgroundColor?: string
  textColor?: string
}

export function TypewriterHero({
  staticText,
  rotatingWords,
  subtitle,
  ctaPrimary,
  backgroundColor = '#0f0f0f',
  textColor = '#ffffff',
}: TypewriterHeroProps) {
  // Each word gets equal share of the animation duration
  // Animation: fade in → hold → fade out, cycling through all words
  const wordCount = rotatingWords.length
  const cycleDuration = wordCount * 3 // 3s per word

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
      style={{ backgroundColor }}
    >
      {/* Subtle grid texture overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto w-full text-center">
        {/* Main headline */}
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-6"
          style={{ color: textColor }}
        >
          {staticText}{' '}
          {/* Rotating words container */}
          <span className="relative inline-block overflow-hidden align-bottom" style={{ minWidth: '8ch' }}>
            <style>{`
              @keyframes scala-rotate-${wordCount} {
                ${rotatingWords
                  .map((_, i) => {
                    const start = (i / wordCount) * 100
                    const appear = start + 2
                    const hold = start + (100 / wordCount) - 4
                    const disappear = start + (100 / wordCount) - 1
                    return `
                  ${start.toFixed(1)}% { opacity: 0; transform: translateY(100%); }
                  ${appear.toFixed(1)}% { opacity: 1; transform: translateY(0); }
                  ${hold.toFixed(1)}% { opacity: 1; transform: translateY(0); }
                  ${disappear.toFixed(1)}% { opacity: 0; transform: translateY(-100%); }`
                  })
                  .join('')}
                100% { opacity: 0; transform: translateY(100%); }
              }
              .scala-rotating-word {
                display: block;
                position: absolute;
                top: 0; left: 0; right: 0;
                opacity: 0;
                transform: translateY(100%);
                animation: scala-rotate-${wordCount} ${cycleDuration}s ease-in-out infinite;
              }
              ${rotatingWords
                .map(
                  (_, i) => `.scala-rotating-word:nth-child(${i + 1}) {
                animation-delay: ${(i / wordCount) * cycleDuration}s;
              }`
                )
                .join('\n')}
              /* First word visible on load */
              .scala-rotating-word:nth-child(1) {
                animation-delay: 0s;
              }
            `}</style>

            {/* Height placeholder (widest word) */}
            <span className="invisible block" aria-hidden="true">
              {rotatingWords.reduce((a, b) => (a.length >= b.length ? a : b), '')}
            </span>

            {rotatingWords.map((word) => (
              <span
                key={word}
                className="scala-rotating-word"
                style={{ color: 'var(--color-accent, #6c63ff)' }}
              >
                {word}
              </span>
            ))}
          </span>
        </h1>

        {subtitle && (
          <p
            className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
            style={{ color: `${textColor}cc` }}
          >
            {subtitle}
          </p>
        )}

        {ctaPrimary && (
          <a
            href={ctaPrimary.href}
            className="inline-flex items-center px-10 py-4 font-bold rounded-lg text-lg transition-transform hover:scale-105 active:scale-95"
            style={{
              backgroundColor: 'var(--color-accent, #6c63ff)',
              color: '#ffffff',
            }}
          >
            {ctaPrimary.label}
          </a>
        )}

        {/* Decorative bottom line */}
        <div className="mt-20 flex items-center justify-center gap-4 opacity-30">
          <div className="h-px flex-1 max-w-xs" style={{ backgroundColor: textColor }} />
          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: textColor }} />
          <div className="h-px flex-1 max-w-xs" style={{ backgroundColor: textColor }} />
        </div>
      </div>
    </section>
  )
}
