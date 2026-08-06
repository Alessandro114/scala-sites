'use client'

import { useState, useMemo } from 'react'

interface ClassItem {
  id: string
  name: string
  instructor: string
  time: string
  duration: string
  day: string
  spotsTotal: number
  spotsTaken: number
  level: 'beginner' | 'intermediate' | 'advanced' | 'all'
  category: string
}

interface ClassScheduleProps {
  classes: ClassItem[]
  onBook?: (classId: string) => void
}

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

export function ClassSchedule({ classes, onBook }: ClassScheduleProps) {
  const [activeDay, setActiveDay] = useState(DAYS[0])
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = useMemo(() => Array.from(new Set(classes.map(c => c.category))), [classes])

  const filtered = useMemo(() =>
    classes.filter(c => c.day === activeDay && (activeCategory === 'all' || c.category === activeCategory))
      .sort((a, b) => a.time.localeCompare(b.time)),
    [classes, activeDay, activeCategory])

  const levelColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'bg-green-100 text-green-800'
      case 'intermediate': return 'bg-blue-100 text-blue-800'
      case 'advanced': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Class Schedule</h2>
      <p className="text-center mb-8" style={{ color: 'var(--color-text-muted)' }}>Book your spot — classes fill up fast</p>

      {/* Day tabs */}
      <div className="flex overflow-x-auto gap-1 mb-6 pb-2">
        {DAYS.map(d => (
          <button key={d} onClick={() => setActiveDay(d)}
            className={`px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${activeDay === d ? 'text-white' : ''}`}
            style={{ background: activeDay === d ? 'var(--color-primary)' : 'var(--color-secondary)' }}>
            {d.slice(0, 3)}
          </button>
        ))}
      </div>

      {/* Category filter */}
      {categories.length > 1 && (
        <div className="flex gap-2 mb-6">
          <button onClick={() => setActiveCategory('all')}
            className={`px-3 py-1.5 rounded-full text-xs font-medium ${activeCategory === 'all' ? 'text-white' : ''}`}
            style={{ background: activeCategory === 'all' ? 'var(--color-primary)' : 'var(--color-secondary)' }}>All</button>
          {categories.map(c => (
            <button key={c} onClick={() => setActiveCategory(c)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium ${activeCategory === c ? 'text-white' : ''}`}
              style={{ background: activeCategory === c ? 'var(--color-primary)' : 'var(--color-secondary)' }}>{c}</button>
          ))}
        </div>
      )}

      {/* Classes */}
      <div className="space-y-3">
        {filtered.map(c => {
          const spotsLeft = c.spotsTotal - c.spotsTaken
          const full = spotsLeft <= 0
          return (
            <div key={c.id} className={`flex items-center justify-between p-5 rounded-xl border transition ${full ? 'opacity-60' : 'hover:shadow-sm'}`}
              style={{ borderColor: 'var(--color-border)', background: 'var(--color-surface)' }}>
              <div className="flex items-center gap-5">
                <div className="text-center w-16">
                  <p className="text-lg font-bold">{c.time}</p>
                  <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>{c.duration}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{c.name}</h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                    with {c.instructor}
                    <span className={`ml-2 px-2 py-0.5 text-xs rounded-full ${levelColor(c.level)}`}>{c.level}</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  {!full && spotsLeft <= 5 && (
                    <p className="text-xs font-semibold text-amber-600">{spotsLeft} spot{spotsLeft > 1 ? 's' : ''} left</p>
                  )}
                  {full && <p className="text-xs font-semibold text-red-500">Full</p>}
                  {!full && spotsLeft > 5 && (
                    <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>{spotsLeft} spots</p>
                  )}
                </div>
                <button
                  onClick={() => !full && onBook?.(c.id)}
                  disabled={full}
                  className="px-5 py-2.5 rounded-lg text-sm font-medium text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  style={{ background: 'var(--color-primary)' }}
                >{full ? 'Waitlist' : 'Book'}</button>
              </div>
            </div>
          )
        })}
        {filtered.length === 0 && (
          <p className="text-center py-8" style={{ color: 'var(--color-text-muted)' }}>No classes scheduled for {activeDay}.</p>
        )}
      </div>
    </section>
  )
}
