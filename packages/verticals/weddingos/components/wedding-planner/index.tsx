'use client'

import { useState } from 'react'

interface WeddingPlannerProps {
  onSubmit?: (data: PlannerData) => void
}

interface PlannerData {
  date: string
  guestCount: number
  style: string
  budgetMin: number
  budgetMax: number
  mustHaves: string[]
  name: string
  email: string
  phone: string
}

const STYLES = ['Classic', 'Modern', 'Rustic', 'Bohemian']

const MUST_HAVES = ['Catering', 'Photography', 'DJ', 'Flowers', 'Cake', 'Videography', 'Hair & Makeup', 'Transport']

const BUDGET_RANGES = [
  { label: 'Under £10,000', min: 0, max: 10000 },
  { label: '£10,000 – £20,000', min: 10000, max: 20000 },
  { label: '£20,000 – £35,000', min: 20000, max: 35000 },
  { label: '£35,000 – £50,000', min: 35000, max: 50000 },
  { label: '£50,000+', min: 50000, max: 999999 },
]

const TOTAL_STEPS = 6

export function WeddingPlanner({ onSubmit }: WeddingPlannerProps) {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)

  const [date, setDate] = useState('')
  const [guestCount, setGuestCount] = useState(100)
  const [style, setStyle] = useState('')
  const [budgetIdx, setBudgetIdx] = useState<number | null>(null)
  const [mustHaves, setMustHaves] = useState<string[]>([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const toggleMustHave = (item: string) =>
    setMustHaves(prev => prev.includes(item) ? prev.filter(x => x !== item) : [...prev, item])

  const canNext = () => {
    if (step === 1) return date !== ''
    if (step === 2) return true
    if (step === 3) return style !== ''
    if (step === 4) return budgetIdx !== null
    if (step === 5) return mustHaves.length > 0
    if (step === 6) return name !== '' && email !== ''
    return true
  }

  const handleSubmit = () => {
    const budget = budgetIdx !== null ? BUDGET_RANGES[budgetIdx] : { min: 0, max: 0 }
    const data: PlannerData = { date, guestCount, style, budgetMin: budget.min, budgetMax: budget.max, mustHaves, name, email, phone }
    onSubmit?.(data)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="py-16 px-4" style={{ background: 'var(--color-secondary)' }}>
        <div className="max-w-xl mx-auto text-center">
          <div className="text-5xl mb-6">💐</div>
          <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Thank You, {name}!</h2>
          <p className="text-lg" style={{ color: 'var(--color-text-muted)' }}>
            Our wedding coordinator will call you within 24 hours to discuss your perfect day.
          </p>
        </div>
      </section>
    )
  }

  const progress = ((step - 1) / (TOTAL_STEPS - 1)) * 100

  const stepTitles = [
    'When is your big day?',
    'How many guests?',
    'What\'s your style?',
    'What\'s your budget?',
    'What are your must-haves?',
    'Your contact details',
  ]

  return (
    <section className="py-16 px-4" style={{ background: 'var(--color-secondary)' }}>
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
          Plan Your Perfect Wedding
        </h2>
        <p className="text-center mb-10" style={{ color: 'var(--color-text-muted)' }}>
          Tell us your vision — we'll handle the rest
        </p>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between text-xs mb-2" style={{ color: 'var(--color-text-muted)' }}>
            <span>Step {step} of {TOTAL_STEPS}</span>
            <span>{Math.round(progress)}% complete</span>
          </div>
          <div className="h-2 rounded-full overflow-hidden" style={{ background: 'var(--color-border)' }}>
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${progress}%`, background: 'var(--color-primary)' }}
            />
          </div>
        </div>

        {/* Card */}
        <div className="rounded-2xl border p-8" style={{ borderColor: 'var(--color-border)', background: 'var(--color-bg)' }}>
          <h3 className="text-xl font-semibold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            {stepTitles[step - 1]}
          </h3>

          {/* Step 1 — Date */}
          {step === 1 && (
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-muted)' }}>
                Wedding date
              </label>
              <input
                type="date"
                value={date}
                onChange={e => setDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 rounded-xl border text-base outline-none focus:ring-2"
                style={{
                  borderColor: 'var(--color-border)',
                  background: 'var(--color-surface)',
                  color: 'var(--color-text)',
                }}
              />
              <p className="text-xs mt-2" style={{ color: 'var(--color-text-muted)' }}>
                Don't have a date yet? Pick an approximate date — we'll discuss flexibility.
              </p>
            </div>
          )}

          {/* Step 2 — Guest count */}
          {step === 2 && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="text-sm font-medium" style={{ color: 'var(--color-text-muted)' }}>
                  Number of guests
                </label>
                <span className="text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>
                  {guestCount}
                </span>
              </div>
              <input
                type="range"
                min={20}
                max={500}
                step={5}
                value={guestCount}
                onChange={e => setGuestCount(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{ accentColor: 'var(--color-primary)' }}
              />
              <div className="flex justify-between text-xs mt-2" style={{ color: 'var(--color-text-muted)' }}>
                <span>20 guests</span>
                <span>500 guests</span>
              </div>
              <p className="text-xs mt-4" style={{ color: 'var(--color-text-muted)' }}>
                {guestCount <= 50 ? 'Intimate ceremony — several of our spaces are perfect for this.' :
                  guestCount <= 150 ? 'Medium celebration — our Garden Terrace or Ivory Pavilion would suit beautifully.' :
                  guestCount <= 300 ? 'Grand celebration — the Grand Ballroom is ideal for you.' :
                  'Large event — we\'ll arrange a bespoke layout for your party.'}
              </p>
            </div>
          )}

          {/* Step 3 — Style */}
          {step === 3 && (
            <div className="grid grid-cols-2 gap-4">
              {STYLES.map(s => (
                <button
                  key={s}
                  onClick={() => setStyle(s)}
                  className="p-5 rounded-xl border-2 text-left transition-all"
                  style={{
                    borderColor: style === s ? 'var(--color-primary)' : 'var(--color-border)',
                    background: style === s ? 'var(--color-secondary)' : 'var(--color-surface)',
                  }}
                >
                  <div className="text-2xl mb-2">
                    {s === 'Classic' ? '🕊️' : s === 'Modern' ? '✨' : s === 'Rustic' ? '🌿' : '🌸'}
                  </div>
                  <p className="font-semibold">{s}</p>
                  <p className="text-xs mt-1" style={{ color: 'var(--color-text-muted)' }}>
                    {s === 'Classic' ? 'Timeless elegance' :
                      s === 'Modern' ? 'Clean lines & chic' :
                      s === 'Rustic' ? 'Warm & natural' :
                      'Free-spirited & whimsical'}
                  </p>
                </button>
              ))}
            </div>
          )}

          {/* Step 4 — Budget */}
          {step === 4 && (
            <div className="space-y-3">
              {BUDGET_RANGES.map((b, i) => (
                <button
                  key={i}
                  onClick={() => setBudgetIdx(i)}
                  className="w-full px-5 py-4 rounded-xl border-2 text-left font-medium transition-all"
                  style={{
                    borderColor: budgetIdx === i ? 'var(--color-primary)' : 'var(--color-border)',
                    background: budgetIdx === i ? 'var(--color-secondary)' : 'var(--color-surface)',
                    color: budgetIdx === i ? 'var(--color-primary)' : 'var(--color-text)',
                  }}
                >
                  {b.label}
                </button>
              ))}
            </div>
          )}

          {/* Step 5 — Must-haves */}
          {step === 5 && (
            <div className="grid grid-cols-2 gap-3">
              {MUST_HAVES.map(item => {
                const checked = mustHaves.includes(item)
                return (
                  <button
                    key={item}
                    onClick={() => toggleMustHave(item)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl border-2 transition-all text-left"
                    style={{
                      borderColor: checked ? 'var(--color-primary)' : 'var(--color-border)',
                      background: checked ? 'var(--color-secondary)' : 'var(--color-surface)',
                    }}
                  >
                    <div
                      className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 border-2 transition-colors"
                      style={{
                        borderColor: checked ? 'var(--color-primary)' : 'var(--color-border)',
                        background: checked ? 'var(--color-primary)' : 'transparent',
                      }}
                    >
                      {checked && (
                        <svg viewBox="0 0 20 20" className="w-3 h-3" fill="white">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <span className="text-sm font-medium">{item}</span>
                  </button>
                )
              })}
            </div>
          )}

          {/* Step 6 — Contact */}
          {step === 6 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--color-text-muted)' }}>
                  Full name *
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="e.g. Sophie & James Anderson"
                  className="w-full px-4 py-3 rounded-xl border outline-none focus:ring-2 text-sm"
                  style={{ borderColor: 'var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-text)' }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--color-text-muted)' }}>
                  Email address *
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="sophie@example.com"
                  className="w-full px-4 py-3 rounded-xl border outline-none focus:ring-2 text-sm"
                  style={{ borderColor: 'var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-text)' }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--color-text-muted)' }}>
                  Phone number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  placeholder="+44 7700 900000"
                  className="w-full px-4 py-3 rounded-xl border outline-none focus:ring-2 text-sm"
                  style={{ borderColor: 'var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-text)' }}
                />
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex gap-3 mt-8">
            {step > 1 && (
              <button
                onClick={() => setStep(s => s - 1)}
                className="flex-1 py-3 rounded-xl border font-medium transition-colors"
                style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-muted)', background: 'transparent' }}
              >
                Back
              </button>
            )}
            {step < TOTAL_STEPS ? (
              <button
                onClick={() => setStep(s => s + 1)}
                disabled={!canNext()}
                className="flex-1 py-3 rounded-xl font-medium text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                style={{ background: 'var(--color-primary)' }}
              >
                Continue
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!canNext()}
                className="flex-1 py-3 rounded-xl font-medium text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                style={{ background: 'var(--color-primary)' }}
              >
                Submit Enquiry
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
