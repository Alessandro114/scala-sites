'use client'

import { useState, useEffect, useRef } from 'react'

interface PexelsVideo {
  video_files: Array<{
    link: string
    quality: string
    file_type: string
    width: number
    height: number
  }>
  image: string // poster/preview image from Pexels
}

interface PexelsHeroProps {
  title: string
  subtitle?: string
  pexelsQuery: string
  pexelsApiKey?: string
  posterFallback?: string
  ctaPrimary?: { label: string; href: string }
  ctaSecondary?: { label: string; href: string }
  overlayOpacity?: number
}

type LoadState = 'idle' | 'loading' | 'ready' | 'error'

function pickBestVideoFile(
  files: PexelsVideo['video_files'],
): string | null {
  // Prefer hd mp4, fall back to sd mp4, then any mp4
  const mp4 = files.filter((f) => f.file_type === 'video/mp4')
  if (mp4.length === 0) return null

  const hd = mp4.find((f) => f.quality === 'hd')
  const sd = mp4.find((f) => f.quality === 'sd')
  return (hd ?? sd ?? mp4[0]).link
}

export function PexelsHero({
  title,
  subtitle,
  pexelsQuery,
  pexelsApiKey,
  posterFallback,
  ctaPrimary,
  ctaSecondary,
  overlayOpacity = 0.5,
}: PexelsHeroProps) {
  const apiKey =
    pexelsApiKey ??
    (typeof process !== 'undefined'
      ? process.env.NEXT_PUBLIC_PEXELS_API_KEY
      : undefined)

  const [videoUrl, setVideoUrl] = useState<string | null>(null)
  const [posterUrl, setPosterUrl] = useState<string | null>(posterFallback ?? null)
  const [loadState, setLoadState] = useState<LoadState>('idle')
  const videoRef = useRef<HTMLVideoElement>(null)
  const fetchedRef = useRef(false)

  useEffect(() => {
    if (!apiKey || fetchedRef.current) return
    fetchedRef.current = true
    setLoadState('loading')

    const url = `https://api.pexels.com/videos/search?query=${encodeURIComponent(
      pexelsQuery,
    )}&per_page=1&size=medium`

    fetch(url, { headers: { Authorization: apiKey } })
      .then((res) => {
        if (!res.ok) throw new Error(`Pexels API ${res.status}`)
        return res.json()
      })
      .then((data: { videos: PexelsVideo[] }) => {
        const video = data.videos?.[0]
        if (!video) throw new Error('No videos returned')

        const best = pickBestVideoFile(video.video_files)
        if (!best) throw new Error('No playable file found')

        setVideoUrl(best)
        // Use Pexels poster only if no custom fallback was supplied
        if (!posterFallback) setPosterUrl(video.image)
        setLoadState('ready')
      })
      .catch(() => {
        setLoadState('error')
      })
  }, [apiKey, pexelsQuery, posterFallback])

  const overlayStyle = { opacity: overlayOpacity } as React.CSSProperties
  const isDemoMode = !apiKey

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* ── Background layer ── */}

      {/* Demo / no-key mode: gradient placeholder with query hint */}
      {isDemoMode && (
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, #0f172a 0%, #1e293b 40%, #0f172a 100%)',
          }}
        >
          {/* Subtle animated grain to suggest "video" */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(99,102,241,0.25) 0%, transparent 70%)',
            }}
          />
          {/* Query text watermark */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-2 text-white/20 text-xs font-mono tracking-widest uppercase select-none pointer-events-none">
            <svg className="w-3 h-3 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
            </svg>
            <span>pexels &ldquo;{pexelsQuery}&rdquo;</span>
          </div>
        </div>
      )}

      {/* Poster image — shown while video loads or on error */}
      {!isDemoMode && posterUrl && (
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 scale-105"
          style={{ backgroundImage: `url(${posterUrl})` }}
        />
      )}

      {/* Live Pexels video background */}
      {!isDemoMode && videoUrl && (
        <video
          ref={videoRef}
          src={videoUrl}
          poster={posterUrl ?? undefined}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          onError={() => setLoadState('error')}
        />
      )}

      {/* ── Cinematic gradient overlay — darker at top/bottom, lighter in centre ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/75" />
      {/* Additional user-controlled dimming */}
      <div className="absolute inset-0 bg-black" style={overlayStyle} />

      {/* ── Top letterbox bar ── */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-white/10" />

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto w-full">
        {/* Loading spinner — visible only while fetching */}
        {loadState === 'loading' && (
          <div className="mb-10 flex items-center gap-2 text-white/50 text-sm font-medium">
            <svg
              className="w-4 h-4 animate-spin"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              />
            </svg>
            <span>Loading cinematic background&hellip;</span>
          </div>
        )}

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6 drop-shadow-lg">
          {title}
        </h1>

        {subtitle && (
          <p className="text-lg md:text-xl text-white/85 mb-10 max-w-2xl leading-relaxed drop-shadow mx-auto">
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

        {/* Pexels attribution — required by Pexels API TOS when API key is used */}
        {!isDemoMode && loadState === 'ready' && (
          <p className="mt-12 text-white/25 text-xs">
            Video by{' '}
            <a
              href="https://www.pexels.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-white/50 transition-colors"
            >
              Pexels
            </a>
          </p>
        )}
      </div>

      {/* ── Bottom letterbox bar ── */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20" />
    </section>
  )
}
