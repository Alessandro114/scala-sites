'use client'

interface HeroProps {
  title: string
  subtitle?: string
  backgroundImage?: string
  backgroundVideo?: string
  ctaPrimary?: { label: string; href: string }
  ctaSecondary?: { label: string; href: string }
  overlayOpacity?: number
  textAlign?: 'left' | 'center'
  height?: 'full' | 'large' | 'medium'
}

export function Hero({
  title,
  subtitle,
  backgroundImage,
  backgroundVideo,
  ctaPrimary,
  ctaSecondary,
  overlayOpacity = 0.5,
  textAlign = 'center',
  height = 'large',
}: HeroProps) {
  const heightClass = {
    full: 'min-h-screen',
    large: 'min-h-[85vh]',
    medium: 'min-h-[60vh]',
  }[height]

  return (
    <section className={`relative ${heightClass} flex items-center justify-center overflow-hidden`}>
      {backgroundVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      )}
      {backgroundImage && !backgroundVideo && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }}
      />
      <div
        className={`relative z-10 px-6 max-w-4xl mx-auto w-full ${
          textAlign === 'center' ? 'text-center' : 'text-left'
        }`}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p
            className={`text-lg md:text-xl text-white/90 mb-8 max-w-2xl ${
              textAlign === 'center' ? 'mx-auto' : ''
            }`}
          >
            {subtitle}
          </p>
        )}
        <div
          className={`flex flex-wrap gap-4 ${
            textAlign === 'center' ? 'justify-center' : 'justify-start'
          }`}
        >
          {ctaPrimary && (
            <a
              href={ctaPrimary.href}
              className="inline-flex items-center px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-colors text-lg"
            >
              {ctaPrimary.label}
            </a>
          )}
          {ctaSecondary && (
            <a
              href={ctaSecondary.href}
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-lg"
            >
              {ctaSecondary.label}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
