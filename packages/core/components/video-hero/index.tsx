'use client'

import { useState } from 'react'

interface VideoHeroProps {
  title: string
  subtitle?: string
  posterImage: string
  videoUrl?: string
  ctaPrimary?: { label: string; href: string }
  ctaSecondary?: { label: string; href: string }
}

export function VideoHero({
  title,
  subtitle,
  posterImage,
  videoUrl,
  ctaPrimary,
  ctaSecondary,
}: VideoHeroProps) {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Poster background */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 scale-105"
          style={{ backgroundImage: `url(${posterImage})` }}
        />

        {/* Cinematic gradient overlay — darker at top/bottom, lighter in center */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto w-full">
          {/* Play button — the hero feature */}
          {(videoUrl || true) && (
            <button
              onClick={() => setModalOpen(true)}
              className="group mb-10 relative flex items-center justify-center w-24 h-24 md:w-28 md:h-28 rounded-full transition-transform hover:scale-110 active:scale-95 focus:outline-none"
              aria-label="Play video"
              style={{ backgroundColor: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)' }}
            >
              {/* Animated pulse ring */}
              <span
                className="absolute inset-0 rounded-full animate-ping"
                style={{ backgroundColor: 'rgba(255,255,255,0.25)', animationDuration: '2s' }}
              />
              {/* Inner solid ring */}
              <span className="absolute inset-1 rounded-full border-2 border-white/60" />
              {/* Play triangle */}
              <svg
                className="w-10 h-10 text-white ml-1.5 relative z-10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          )}

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6 drop-shadow-lg">
            {title}
          </h1>

          {subtitle && (
            <p className="text-lg md:text-xl text-white/85 mb-10 max-w-2xl leading-relaxed drop-shadow">
              {subtitle}
            </p>
          )}

          <div className="flex flex-wrap gap-4 justify-center">
            {ctaPrimary && (
              <a
                href={ctaPrimary.href}
                className="inline-flex items-center px-8 py-4 bg-white text-black font-semibold rounded-lg text-base hover:bg-white/90 transition-colors shadow-lg"
              >
                {ctaPrimary.label}
              </a>
            )}
            {ctaSecondary && (
              <a
                href={ctaSecondary.href}
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg text-base hover:bg-white/10 transition-colors"
              >
                {ctaSecondary.label}
              </a>
            )}
          </div>
        </div>

        {/* Bottom letterbox bar — cinematic feel */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20" />
      </section>

      {/* Video modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setModalOpen(false)}
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white focus:outline-none"
            onClick={() => setModalOpen(false)}
            aria-label="Close video"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div
            className="w-full max-w-5xl mx-6 aspect-video bg-black rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {videoUrl ? (
              <video
                src={videoUrl}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            ) : (
              /* Placeholder when no videoUrl is provided — demo mode */
              <div className="w-full h-full flex flex-col items-center justify-center text-white/40 gap-4">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                </svg>
                <p className="text-sm font-medium">Video preview — connect your video URL</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
