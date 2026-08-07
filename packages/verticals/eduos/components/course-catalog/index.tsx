'use client'

import { useState, useMemo } from 'react'

interface Course {
  id: string
  title: string
  instructor: string
  category: 'Languages' | 'Music' | 'Art' | 'Business' | 'Tech' | 'Cooking'
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  duration: string
  schedule: string
  spotsTotal: number
  spotsTaken: number
  price: number
  currency: string
  startDate: string
  description?: string
}

interface CourseCatalogProps {
  courses: Course[]
  locale?: string
  onEnroll?: (courseId: string) => void
}

const CATEGORIES = ['All', 'Languages', 'Music', 'Art', 'Business', 'Tech', 'Cooking'] as const
const LEVELS = ['All', 'Beginner', 'Intermediate', 'Advanced'] as const

const levelColors: Record<string, { bg: string; text: string }> = {
  Beginner: { bg: '#dcfce7', text: '#166534' },
  Intermediate: { bg: '#dbeafe', text: '#1e40af' },
  Advanced: { bg: '#fce7f3', text: '#9d174d' },
}

function isStartingSoon(startDate: string): boolean {
  const start = new Date(startDate)
  const now = new Date()
  const diffMs = start.getTime() - now.getTime()
  const diffDays = diffMs / (1000 * 60 * 60 * 24)
  return diffDays >= 0 && diffDays <= 14
}

export function CourseCatalog({ courses, locale = 'en-GB', onEnroll }: CourseCatalogProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [activeLevel, setActiveLevel] = useState<string>('All')
  const [maxPrice, setMaxPrice] = useState<number>(500)

  const fmt = (n: number, cur: string) =>
    new Intl.NumberFormat(locale, { style: 'currency', currency: cur, maximumFractionDigits: 0 }).format(n)

  const filtered = useMemo(() =>
    courses.filter(c => {
      const catOk = activeCategory === 'All' || c.category === activeCategory
      const lvlOk = activeLevel === 'All' || c.level === activeLevel
      const priceOk = c.price <= maxPrice
      return catOk && lvlOk && priceOk
    }),
    [courses, activeCategory, activeLevel, maxPrice])

  const priceMax = useMemo(() => Math.max(...courses.map(c => c.price)), [courses])

  return (
    <section className="py-16 px-4" style={{ background: 'var(--color-bg)' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Our Courses</h2>
        <p className="text-center mb-10" style={{ color: 'var(--color-text-muted)' }}>Find your perfect class — enrol online in minutes</p>

        {/* Filters */}
        <div className="flex flex-col gap-4 mb-8">
          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className="px-4 py-1.5 rounded-full text-sm font-medium transition-colors"
                style={{
                  background: activeCategory === cat ? 'var(--color-primary)' : 'var(--color-secondary)',
                  color: activeCategory === cat ? '#fff' : 'var(--color-text)',
                }}>
                {cat}
              </button>
            ))}
          </div>
          {/* Level + price row */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex gap-2">
              {LEVELS.map(lvl => (
                <button key={lvl} onClick={() => setActiveLevel(lvl)}
                  className="px-3 py-1 rounded-lg text-xs font-medium border transition-colors"
                  style={{
                    borderColor: activeLevel === lvl ? 'var(--color-primary)' : 'var(--color-border)',
                    background: activeLevel === lvl ? 'var(--color-primary)' : 'transparent',
                    color: activeLevel === lvl ? '#fff' : 'var(--color-text-muted)',
                  }}>
                  {lvl}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3 ml-auto">
              <span className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                Up to {fmt(maxPrice, courses[0]?.currency || 'GBP')}
              </span>
              <input type="range" min={0} max={priceMax} value={maxPrice} onChange={e => setMaxPrice(Number(e.target.value))}
                className="w-32 accent-[var(--color-primary)]" />
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(course => {
            const spotsLeft = course.spotsTotal - course.spotsTaken
            const full = spotsLeft <= 0
            const soon = isStartingSoon(course.startDate)
            const lc = levelColors[course.level]
            return (
              <div key={course.id} className="rounded-2xl border flex flex-col overflow-hidden transition hover:shadow-md"
                style={{ borderColor: 'var(--color-border)', background: 'var(--color-surface)' }}>
                {/* Header band */}
                <div className="px-5 pt-5 pb-3 flex items-start justify-between gap-2">
                  <div className="flex-1">
                    {soon && (
                      <span className="inline-block mb-1.5 px-2.5 py-0.5 text-xs font-bold rounded-full text-white"
                        style={{ background: 'var(--color-accent)' }}>Starting Soon</span>
                    )}
                    <h3 className="text-lg font-bold leading-snug" style={{ fontFamily: 'var(--font-heading)' }}>{course.title}</h3>
                    <p className="text-sm mt-0.5" style={{ color: 'var(--color-text-muted)' }}>with {course.instructor}</p>
                  </div>
                  <span className="px-2.5 py-1 text-xs font-semibold rounded-full whitespace-nowrap"
                    style={{ background: lc.bg, color: lc.text }}>{course.level}</span>
                </div>

                <div className="px-5 pb-4 flex-1 flex flex-col gap-3">
                  {/* Meta */}
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm">
                    <div className="flex items-center gap-1.5">
                      <svg viewBox="0 0 20 20" className="w-4 h-4 flex-shrink-0" fill="currentColor" style={{ color: 'var(--color-accent)' }}>
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg viewBox="0 0 20 20" className="w-4 h-4 flex-shrink-0" fill="currentColor" style={{ color: 'var(--color-accent)' }}>
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      <span>{course.schedule}</span>
                    </div>
                    <div className="flex items-center gap-1.5 col-span-2">
                      <svg viewBox="0 0 20 20" className="w-4 h-4 flex-shrink-0" fill="currentColor" style={{ color: 'var(--color-accent)' }}>
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                      </svg>
                      <span style={{ color: full ? '#ef4444' : spotsLeft <= 3 ? '#d97706' : 'var(--color-text-muted)' }}>
                        {full ? 'Full — waitlist available' : `${spotsLeft} of ${course.spotsTotal} spots left`}
                      </span>
                    </div>
                  </div>

                  {course.description && (
                    <p className="text-sm line-clamp-2" style={{ color: 'var(--color-text-muted)' }}>{course.description}</p>
                  )}

                  <div className="mt-auto pt-2 flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>{fmt(course.price, course.currency)}</span>
                      <span className="text-xs ml-1" style={{ color: 'var(--color-text-muted)' }}>per term</span>
                    </div>
                    <button
                      onClick={() => !full && onEnroll?.(course.id)}
                      disabled={full}
                      className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
                      style={{ background: full ? '#9ca3af' : 'var(--color-primary)' }}>
                      {full ? 'Waitlist' : 'Enrol Now'}
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {filtered.length === 0 && (
          <p className="text-center py-12" style={{ color: 'var(--color-text-muted)' }}>No courses match your filters. Try adjusting the category or price range.</p>
        )}
      </div>
    </section>
  )
}
