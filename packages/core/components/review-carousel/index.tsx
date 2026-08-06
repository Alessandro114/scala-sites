'use client'

import { useState, useEffect } from 'react'
import type { Review, Locale } from '../../lib/types'
import { t } from '../../lib/i18n'

interface ReviewCarouselProps {
  reviews: Review[]
  locale?: Locale
  autoplay?: boolean
  interval?: number
}

export function ReviewCarousel({
  reviews,
  locale = 'en',
  autoplay = true,
  interval = 5000,
}: ReviewCarouselProps) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!autoplay || reviews.length <= 1) return
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % reviews.length)
    }, interval)
    return () => clearInterval(timer)
  }, [autoplay, interval, reviews.length])

  if (!reviews.length) return null

  const review = reviews[current]
  const avgRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length

  return (
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">{t('reviews.title', locale)}</h2>

        {/* Aggregate rating */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <div className="flex" aria-label={`${avgRating.toFixed(1)} out of 5 stars`}>
            {[1, 2, 3, 4, 5].map(star => (
              <svg
                key={star}
                className={`w-5 h-5 ${star <= Math.round(avgRating) ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-gray-600 text-sm">
            {t('reviews.count', locale, { count: reviews.length })}
          </span>
        </div>

        {/* Active review */}
        <div className="relative min-h-[160px] flex flex-col items-center justify-center">
          <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed">
            &ldquo;{review.text}&rdquo;
          </blockquote>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <span className="font-semibold text-gray-900">{review.author}</span>
            {review.verified && (
              <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                {t('reviews.verified', locale)}
              </span>
            )}
            {review.source && (
              <span className="text-xs text-gray-400">{review.source}</span>
            )}
          </div>
        </div>

        {/* Dot navigation */}
        {reviews.length > 1 && (
          <div className="flex justify-center gap-2 mt-8" role="tablist" aria-label="Review navigation">
            {reviews.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === current}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === current ? 'bg-black' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Review ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
