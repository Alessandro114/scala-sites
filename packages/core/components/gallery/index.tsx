'use client'

import { useState } from 'react'
import type { GalleryImage, Locale } from '../../lib/types'
import { t } from '../../lib/i18n'

interface GalleryProps {
  images: GalleryImage[]
  locale?: Locale
  columns?: 2 | 3 | 4
}

export function Gallery({ images, locale = 'en', columns = 3 }: GalleryProps) {
  const [lightbox, setLightbox] = useState<number | null>(null)
  const [filter, setFilter] = useState('all')

  const categories = ['all', ...Array.from(new Set(images.map(i => i.category).filter((c): c is string => Boolean(c))))]
  const filtered = filter === 'all' ? images : images.filter(i => i.category === filter)

  const colClass = {
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
    4: 'sm:grid-cols-2 lg:grid-cols-4',
  }[columns]

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    setLightbox(prev => prev !== null ? (prev - 1 + filtered.length) % filtered.length : null)
  }

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    setLightbox(prev => prev !== null ? (prev + 1) % filtered.length : null)
  }

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">{t('gallery.title', locale)}</h2>

        {/* Category filter — only shown when there are real categories */}
        {categories.length > 2 && (
          <div className="flex flex-wrap justify-center gap-2 mb-8" role="toolbar" aria-label="Filter by category">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === cat
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                aria-pressed={filter === cat}
              >
                {cat === 'all' ? t('menu.filter.all', locale) : cat}
              </button>
            ))}
          </div>
        )}

        {/* Grid */}
        <div className={`grid ${colClass} gap-4`}>
          {filtered.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className="aspect-square overflow-hidden rounded-lg bg-gray-100 group cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              aria-label={img.alt}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-white text-4xl leading-none hover:text-gray-300 transition-colors focus:outline-none"
            aria-label="Close lightbox"
          >
            &times;
          </button>

          <img
            src={filtered[lightbox].src}
            alt={filtered[lightbox].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={e => e.stopPropagation()}
          />

          {filtered.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-5xl leading-none hover:text-gray-300 transition-colors focus:outline-none"
                aria-label="Previous image"
              >
                &#8249;
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-5xl leading-none hover:text-gray-300 transition-colors focus:outline-none"
                aria-label="Next image"
              >
                &#8250;
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
                {lightbox + 1} / {filtered.length}
              </div>
            </>
          )}
        </div>
      )}
    </section>
  )
}
