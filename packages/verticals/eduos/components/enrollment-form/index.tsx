'use client'

import { useState } from 'react'

interface CourseOption {
  id: string
  title: string
  price: number
  currency: string
}

interface EnrollmentFormProps {
  courses: CourseOption[]
  preselectedCourseId?: string
  locale?: string
  onSubmit?: (data: EnrollmentData) => Promise<void>
}

interface EnrollmentData {
  courseId: string
  name: string
  email: string
  phone: string
  ageRange: string
  experienceLevel: string
  paymentPreference: 'full' | 'installments'
  specialRequirements: string
}

const STEPS = ['Course', 'Student Info', 'Experience', 'Payment', 'Review']
const AGE_RANGES = ['Under 18', '18–24', '25–34', '35–44', '45–54', '55–64', '65+']
const EXPERIENCE_LEVELS = ['Complete beginner', 'Some prior experience', 'Intermediate', 'Advanced — looking to refine']

export function EnrollmentForm({ courses, preselectedCourseId, locale = 'en-GB', onSubmit }: EnrollmentFormProps) {
  const [step, setStep] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const [data, setData] = useState<EnrollmentData>({
    courseId: preselectedCourseId || '',
    name: '',
    email: '',
    phone: '',
    ageRange: '',
    experienceLevel: '',
    paymentPreference: 'full',
    specialRequirements: '',
  })

  const fmt = (n: number, cur: string) =>
    new Intl.NumberFormat(locale, { style: 'currency', currency: cur, maximumFractionDigits: 0 }).format(n)

  const set = (key: keyof EnrollmentData, value: string) => setData(d => ({ ...d, [key]: value }))

  const selectedCourse = courses.find(c => c.id === data.courseId)

  const canNext = () => {
    if (step === 0) return !!data.courseId
    if (step === 1) return !!data.name && !!data.email && !!data.phone && !!data.ageRange
    if (step === 2) return !!data.experienceLevel
    if (step === 3) return !!data.paymentPreference
    return true
  }

  const handleSubmit = async () => {
    setLoading(true)
    try {
      await onSubmit?.(data)
    } catch (_) {}
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="py-16 px-4" id="enrol" style={{ background: 'var(--color-secondary)' }}>
        <div className="max-w-xl mx-auto text-center">
          <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ background: 'var(--color-primary)' }}>
            <svg viewBox="0 0 24 24" className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: 'var(--font-heading)' }}>You're enrolled!</h2>
          <p className="text-lg mb-2" style={{ color: 'var(--color-text-muted)' }}>
            Enrollment confirmed! Check your email for next steps.
          </p>
          <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
            We'll be in touch with class details, materials, and payment instructions shortly.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 px-4" id="enrol" style={{ background: 'var(--color-secondary)' }}>
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Enrol Today</h2>
        <p className="text-center mb-10" style={{ color: 'var(--color-text-muted)' }}>Secure your spot in just a few steps</p>

        {/* Progress bar */}
        <div className="flex items-center gap-1 mb-10">
          {STEPS.map((label, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
              <div className="flex items-center w-full">
                {i > 0 && <div className="h-0.5 flex-1" style={{ background: i <= step ? 'var(--color-primary)' : 'var(--color-border)' }} />}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 transition-colors`}
                  style={{
                    background: i < step ? 'var(--color-primary)' : i === step ? 'var(--color-primary)' : 'var(--color-border)',
                    color: i <= step ? '#fff' : 'var(--color-text-muted)',
                  }}>
                  {i < step ? (
                    <svg viewBox="0 0 20 20" className="w-4 h-4" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : i + 1}
                </div>
                {i < STEPS.length - 1 && <div className="h-0.5 flex-1" style={{ background: i < step ? 'var(--color-primary)' : 'var(--color-border)' }} />}
              </div>
              <span className="text-xs font-medium" style={{ color: i === step ? 'var(--color-primary)' : 'var(--color-text-muted)' }}>{label}</span>
            </div>
          ))}
        </div>

        {/* Form card */}
        <div className="rounded-2xl border p-8" style={{ borderColor: 'var(--color-border)', background: 'var(--color-bg)' }}>

          {/* Step 0: Course selection */}
          {step === 0 && (
            <div>
              <h3 className="text-xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>Select Your Course</h3>
              <div className="space-y-3">
                {courses.map(c => (
                  <label key={c.id} className="flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-colors"
                    style={{
                      borderColor: data.courseId === c.id ? 'var(--color-primary)' : 'var(--color-border)',
                      background: data.courseId === c.id ? 'color-mix(in srgb, var(--color-primary) 8%, transparent)' : 'var(--color-surface)',
                    }}>
                    <div className="flex items-center gap-3">
                      <input type="radio" name="course" value={c.id} checked={data.courseId === c.id}
                        onChange={() => set('courseId', c.id)} className="accent-[var(--color-primary)]" />
                      <span className="font-medium">{c.title}</span>
                    </div>
                    <span className="text-sm font-semibold" style={{ color: 'var(--color-primary)' }}>{fmt(c.price, c.currency)}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Step 1: Student info */}
          {step === 1 && (
            <div>
              <h3 className="text-xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>Your Details</h3>
              <div className="space-y-4">
                {[
                  { label: 'Full Name', key: 'name' as const, type: 'text', placeholder: 'e.g. Amara Osei' },
                  { label: 'Email Address', key: 'email' as const, type: 'email', placeholder: 'you@example.com' },
                  { label: 'Phone Number', key: 'phone' as const, type: 'tel', placeholder: '+44 7700 900 000' },
                ].map(field => (
                  <div key={field.key}>
                    <label className="block text-sm font-medium mb-1.5">{field.label}</label>
                    <input type={field.type} value={data[field.key]} placeholder={field.placeholder}
                      onChange={e => set(field.key, e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors focus:ring-2"
                      style={{ borderColor: 'var(--color-border)', background: 'var(--color-surface)' }} />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-medium mb-1.5">Age Range</label>
                  <select value={data.ageRange} onChange={e => set('ageRange', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border text-sm outline-none"
                    style={{ borderColor: 'var(--color-border)', background: 'var(--color-surface)' }}>
                    <option value="">Select your age range</option>
                    {AGE_RANGES.map(r => <option key={r} value={r}>{r}</option>)}
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Experience */}
          {step === 2 && (
            <div>
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Your Experience Level</h3>
              <p className="text-sm mb-6" style={{ color: 'var(--color-text-muted)' }}>
                In <strong>{selectedCourse?.title || 'the subject'}</strong>, how would you describe your background?
              </p>
              <div className="space-y-3">
                {EXPERIENCE_LEVELS.map(lvl => (
                  <label key={lvl} className="flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-colors"
                    style={{
                      borderColor: data.experienceLevel === lvl ? 'var(--color-primary)' : 'var(--color-border)',
                      background: data.experienceLevel === lvl ? 'color-mix(in srgb, var(--color-primary) 8%, transparent)' : 'var(--color-surface)',
                    }}>
                    <input type="radio" name="experience" value={lvl} checked={data.experienceLevel === lvl}
                      onChange={() => set('experienceLevel', lvl)} className="accent-[var(--color-primary)]" />
                    <span className="font-medium">{lvl}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Payment */}
          {step === 3 && (
            <div>
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Payment Preference</h3>
              <p className="text-sm mb-6" style={{ color: 'var(--color-text-muted)' }}>
                Total: <strong>{selectedCourse ? fmt(selectedCourse.price, selectedCourse.currency) : '—'}</strong>
              </p>
              <div className="space-y-3">
                {[
                  { value: 'full', label: 'Pay in Full', desc: 'One payment — 5% discount applied' },
                  { value: 'installments', label: 'Monthly Installments', desc: 'Split over the course term, no extra charge' },
                ].map(opt => (
                  <label key={opt.value} className="flex items-start gap-3 p-5 rounded-xl border cursor-pointer transition-colors"
                    style={{
                      borderColor: data.paymentPreference === opt.value ? 'var(--color-primary)' : 'var(--color-border)',
                      background: data.paymentPreference === opt.value ? 'color-mix(in srgb, var(--color-primary) 8%, transparent)' : 'var(--color-surface)',
                    }}>
                    <input type="radio" name="payment" value={opt.value} checked={data.paymentPreference === (opt.value as 'full' | 'installments')}
                      onChange={() => set('paymentPreference', opt.value)} className="accent-[var(--color-primary)] mt-1" />
                    <div>
                      <p className="font-semibold">{opt.label}</p>
                      <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{opt.desc}</p>
                    </div>
                  </label>
                ))}
              </div>
              <div className="mt-6">
                <label className="block text-sm font-medium mb-1.5">Special Requirements <span className="font-normal" style={{ color: 'var(--color-text-muted)' }}>(optional)</span></label>
                <textarea value={data.specialRequirements} rows={4} placeholder="Accessibility needs, learning accommodations, medical info, dietary requirements for cooking classes..."
                  onChange={e => set('specialRequirements', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border text-sm outline-none resize-none"
                  style={{ borderColor: 'var(--color-border)', background: 'var(--color-surface)' }} />
              </div>
            </div>
          )}

          {/* Step 4: Review */}
          {step === 4 && (
            <div>
              <h3 className="text-xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>Review & Confirm</h3>
              <div className="space-y-3">
                {[
                  { label: 'Course', value: selectedCourse?.title },
                  { label: 'Price', value: selectedCourse ? fmt(selectedCourse.price, selectedCourse.currency) : '—' },
                  { label: 'Name', value: data.name },
                  { label: 'Email', value: data.email },
                  { label: 'Phone', value: data.phone },
                  { label: 'Age Range', value: data.ageRange },
                  { label: 'Experience', value: data.experienceLevel },
                  { label: 'Payment', value: data.paymentPreference === 'full' ? 'Pay in Full (5% discount)' : 'Monthly Installments' },
                  ...(data.specialRequirements ? [{ label: 'Requirements', value: data.specialRequirements }] : []),
                ].map(row => (
                  <div key={row.label} className="flex justify-between items-start py-2 border-b text-sm"
                    style={{ borderColor: 'var(--color-border)' }}>
                    <span className="font-medium w-28 flex-shrink-0" style={{ color: 'var(--color-text-muted)' }}>{row.label}</span>
                    <span className="text-right">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex gap-3 mt-8">
            {step > 0 && (
              <button onClick={() => setStep(s => s - 1)}
                className="px-6 py-3 rounded-xl border font-medium text-sm transition-colors"
                style={{ borderColor: 'var(--color-border)' }}>
                Back
              </button>
            )}
            {step < STEPS.length - 1 ? (
              <button onClick={() => setStep(s => s + 1)} disabled={!canNext()}
                className="ml-auto px-8 py-3 rounded-xl font-semibold text-sm text-white transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
                style={{ background: 'var(--color-primary)' }}>
                Continue
              </button>
            ) : (
              <button onClick={handleSubmit} disabled={loading}
                className="ml-auto px-8 py-3 rounded-xl font-semibold text-sm text-white transition-opacity disabled:opacity-60"
                style={{ background: 'var(--color-primary)' }}>
                {loading ? 'Submitting...' : 'Confirm Enrolment'}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
