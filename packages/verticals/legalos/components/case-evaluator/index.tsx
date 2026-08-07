'use client'

import { useState } from 'react'

export interface CaseEvaluatorData {
  caseType: string
  description: string
  name: string
  email: string
  phone: string
  preferredContact: 'email' | 'phone' | 'whatsapp'
}

interface CaseEvaluatorProps {
  caseTypes?: string[]
  onSubmit?: (data: CaseEvaluatorData) => Promise<void>
  title?: string
  subtitle?: string
}

const DEFAULT_CASE_TYPES = [
  'Corporate & M&A',
  'Commercial Litigation',
  'Real Estate',
  'Employment',
  'Intellectual Property',
  'Tax',
  'Family Law',
  'Criminal Defence',
  'Immigration',
  'Personal Injury',
  'Wills & Probate',
  'Other',
]

const CONTACT_OPTIONS: { value: CaseEvaluatorData['preferredContact']; label: string; icon: string }[] = [
  { value: 'email', label: 'Email', icon: '✉️' },
  { value: 'phone', label: 'Phone Call', icon: '📞' },
  { value: 'whatsapp', label: 'WhatsApp', icon: '💬' },
]

const STEPS = ['Case Type', 'Your Matter', 'Contact Details', 'Preferences']

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '13px 16px',
  border: '1px solid var(--color-border)',
  borderRadius: '10px',
  background: 'var(--color-bg)',
  fontSize: '0.95rem',
  outline: 'none',
  boxSizing: 'border-box',
  transition: 'border-color 0.2s',
  color: 'inherit',
  fontFamily: 'inherit',
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.78rem',
  fontWeight: 700,
  marginBottom: '6px',
  color: 'var(--color-text-muted)',
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
}

export function CaseEvaluator({
  caseTypes = DEFAULT_CASE_TYPES,
  onSubmit,
  title = 'Free Case Assessment',
  subtitle = 'Tell us about your matter — we\'ll review it within 24 hours',
}: CaseEvaluatorProps) {
  const [step, setStep] = useState(0)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [errors, setErrors] = useState<Partial<Record<keyof CaseEvaluatorData, string>>>({})

  const [form, setForm] = useState<CaseEvaluatorData>({
    caseType: '',
    description: '',
    name: '',
    email: '',
    phone: '',
    preferredContact: 'email',
  })

  const set =
    (key: keyof CaseEvaluatorData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }))
      if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }))
    }

  const getBorderColor = (field: string) => {
    if (errors[field as keyof CaseEvaluatorData]) return '#dc2626'
    return focusedField === field ? 'var(--color-accent)' : 'var(--color-border)'
  }

  const validateStep = (s: number): boolean => {
    const newErrors: Partial<Record<keyof CaseEvaluatorData, string>> = {}
    if (s === 0) {
      if (!form.caseType) newErrors.caseType = 'Please select a case type'
    } else if (s === 1) {
      if (!form.description.trim() || form.description.trim().length < 20)
        newErrors.description = 'Please describe your matter (at least 20 characters)'
    } else if (s === 2) {
      if (!form.name.trim()) newErrors.name = 'Full name is required'
      if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
        newErrors.email = 'A valid email address is required'
      if (!form.phone.trim()) newErrors.phone = 'Phone number is required'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (!validateStep(step)) return
    setStep((s) => s + 1)
  }

  const handleBack = () => {
    setErrors({})
    setStep((s) => s - 1)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateStep(step)) return
    setStatus('loading')
    try {
      await onSubmit?.(form)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <section id="case-evaluator" style={{ padding: '80px 24px', background: 'var(--color-secondary)' }}>
        <div
          style={{
            maxWidth: '600px',
            margin: '0 auto',
            textAlign: 'center',
            padding: '64px 40px',
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: '24px',
          }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              background: '#1a1a3e',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px',
              border: '2px solid #c9a84c',
            }}
          >
            <span style={{ fontSize: '2rem' }}>⚖</span>
          </div>
          <h3
            style={{
              fontSize: '1.7rem',
              fontWeight: 700,
              marginBottom: '12px',
              color: 'var(--color-text)',
              fontFamily: 'var(--font-heading)',
            }}
          >
            Assessment Received
          </h3>
          <p
            style={{
              color: 'var(--color-text-muted)',
              lineHeight: 1.7,
              marginBottom: '8px',
              fontSize: '1rem',
            }}
          >
            Thank you, <strong style={{ color: 'var(--color-text)' }}>{form.name}</strong>. One of
            our lawyers will review your matter and respond within{' '}
            <strong style={{ color: 'var(--color-accent)' }}>24 hours</strong>.
          </p>
          <p
            style={{
              fontSize: '0.82rem',
              color: 'var(--color-text-muted)',
              fontStyle: 'italic',
              marginBottom: '32px',
            }}
          >
            All communications are protected by legal professional privilege.
          </p>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 24px',
              background: '#dcfce7',
              border: '1px solid #bbf7d0',
              borderRadius: '9999px',
              fontSize: '0.875rem',
              fontWeight: 700,
              color: '#15803d',
              marginBottom: '28px',
            }}
          >
            <span>✓</span> Free initial assessment — no obligation
          </div>
          <div>
            <button
              onClick={() => {
                setStatus('idle')
                setStep(0)
                setForm({
                  caseType: '',
                  description: '',
                  name: '',
                  email: '',
                  phone: '',
                  preferredContact: 'email',
                })
              }}
              style={{
                padding: '10px 28px',
                border: '1px solid var(--color-border)',
                borderRadius: '10px',
                background: 'transparent',
                cursor: 'pointer',
                fontSize: '0.875rem',
                color: 'var(--color-text-muted)',
              }}
            >
              Submit another matter
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="case-evaluator" style={{ padding: '80px 24px', background: 'var(--color-secondary)' }}>
      <div style={{ maxWidth: '680px', margin: '0 auto' }}>
        <h2
          style={{
            fontSize: '2.25rem',
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: '8px',
            fontFamily: 'var(--font-heading)',
            color: 'var(--color-text)',
          }}
        >
          {title}
        </h2>
        <p
          style={{
            textAlign: 'center',
            color: 'var(--color-text-muted)',
            marginBottom: '12px',
            fontSize: '1.05rem',
          }}
        >
          {subtitle}
        </p>

        {/* Urgency badge */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '36px' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '7px 18px',
              background: '#dcfce7',
              border: '1px solid #bbf7d0',
              borderRadius: '9999px',
              fontSize: '0.825rem',
              fontWeight: 700,
              color: '#15803d',
            }}
          >
            ✓ Free initial assessment — we'll review within 24 hours
          </span>
        </div>

        {/* Step indicator */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0',
            marginBottom: '36px',
          }}
        >
          {STEPS.map((label, i) => (
            <div
              key={label}
              style={{ display: 'flex', alignItems: 'center', gap: '0' }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    background: i <= step ? 'var(--color-primary)' : 'var(--color-border)',
                    color: i <= step ? '#c9a84c' : 'var(--color-text-muted)',
                    border: i === step ? '2px solid #c9a84c' : '2px solid transparent',
                    transition: 'all 0.3s',
                  }}
                >
                  {i < step ? '✓' : i + 1}
                </div>
                <span
                  style={{
                    fontSize: '0.65rem',
                    fontWeight: i === step ? 700 : 400,
                    color: i === step ? 'var(--color-text)' : 'var(--color-text-muted)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {label}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div
                  style={{
                    width: '60px',
                    height: '2px',
                    background: i < step ? 'var(--color-primary)' : 'var(--color-border)',
                    margin: '0 4px',
                    marginBottom: '18px',
                    transition: 'background 0.3s',
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Form card */}
        <form
          onSubmit={step === STEPS.length - 1 ? handleSubmit : (e) => { e.preventDefault(); handleNext() }}
          noValidate
          style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: '24px',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          {/* Step 0 — Case type */}
          {step === 0 && (
            <div>
              <label htmlFor="ce-casetype" style={labelStyle}>
                What type of legal matter do you need help with? *
              </label>
              <select
                id="ce-casetype"
                required
                value={form.caseType}
                onChange={set('caseType')}
                onFocus={() => setFocusedField('caseType')}
                onBlur={() => setFocusedField(null)}
                style={{
                  ...inputStyle,
                  borderColor: getBorderColor('caseType'),
                  appearance: 'auto',
                }}
              >
                <option value="">Select a case type…</option>
                {caseTypes.map((ct) => (
                  <option key={ct} value={ct}>
                    {ct}
                  </option>
                ))}
              </select>
              {errors.caseType && (
                <p style={{ fontSize: '0.75rem', color: '#dc2626', marginTop: '4px' }}>
                  {errors.caseType}
                </p>
              )}
            </div>
          )}

          {/* Step 1 — Description */}
          {step === 1 && (
            <div>
              <label htmlFor="ce-desc" style={labelStyle}>
                Briefly describe your matter *
              </label>
              <textarea
                id="ce-desc"
                required
                rows={6}
                placeholder="Please describe your legal matter in general terms. Do not include sensitive details at this stage — full particulars can be shared once an engagement letter is signed…"
                value={form.description}
                onChange={set('description')}
                onFocus={() => setFocusedField('description')}
                onBlur={() => setFocusedField(null)}
                style={{
                  ...inputStyle,
                  borderColor: getBorderColor('description'),
                  resize: 'vertical',
                  lineHeight: 1.6,
                }}
              />
              {errors.description && (
                <p style={{ fontSize: '0.75rem', color: '#dc2626', marginTop: '4px' }}>
                  {errors.description}
                </p>
              )}
              <p
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--color-text-muted)',
                  marginTop: '8px',
                  lineHeight: 1.5,
                }}
              >
                {form.description.trim().length} characters
                {form.description.trim().length > 0 && form.description.trim().length < 20 && (
                  <span style={{ color: '#d97706' }}> — at least 20 required</span>
                )}
              </p>
            </div>
          )}

          {/* Step 2 — Contact info */}
          {step === 2 && (
            <>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <label htmlFor="ce-name" style={labelStyle}>
                    Full Name *
                  </label>
                  <input
                    id="ce-name"
                    type="text"
                    required
                    placeholder="e.g. James Whitmore"
                    value={form.name}
                    onChange={set('name')}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    style={{ ...inputStyle, borderColor: getBorderColor('name') }}
                  />
                  {errors.name && (
                    <p style={{ fontSize: '0.75rem', color: '#dc2626', marginTop: '4px' }}>
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="ce-phone" style={labelStyle}>
                    Phone Number *
                  </label>
                  <input
                    id="ce-phone"
                    type="tel"
                    required
                    placeholder="+44 20 XXXX XXXX"
                    value={form.phone}
                    onChange={set('phone')}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    style={{ ...inputStyle, borderColor: getBorderColor('phone') }}
                  />
                  {errors.phone && (
                    <p style={{ fontSize: '0.75rem', color: '#dc2626', marginTop: '4px' }}>
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="ce-email" style={labelStyle}>
                  Email Address *
                </label>
                <input
                  id="ce-email"
                  type="email"
                  required
                  placeholder="j.whitmore@example.com"
                  value={form.email}
                  onChange={set('email')}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  style={{ ...inputStyle, borderColor: getBorderColor('email') }}
                />
                {errors.email && (
                  <p style={{ fontSize: '0.75rem', color: '#dc2626', marginTop: '4px' }}>
                    {errors.email}
                  </p>
                )}
              </div>
            </>
          )}

          {/* Step 3 — Preferred contact */}
          {step === 3 && (
            <div>
              <p style={{ ...labelStyle, marginBottom: '16px' }}>
                How would you prefer us to contact you?
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                {CONTACT_OPTIONS.map((opt) => (
                  <label
                    key={opt.value}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '20px 16px',
                      border: '2px solid',
                      borderColor:
                        form.preferredContact === opt.value
                          ? 'var(--color-accent)'
                          : 'var(--color-border)',
                      borderRadius: '12px',
                      cursor: 'pointer',
                      background:
                        form.preferredContact === opt.value
                          ? 'rgba(201,168,76,0.08)'
                          : 'transparent',
                      transition: 'all 0.2s',
                    }}
                  >
                    <input
                      type="radio"
                      name="preferredContact"
                      value={opt.value}
                      checked={form.preferredContact === opt.value}
                      onChange={() =>
                        setForm((prev) => ({ ...prev, preferredContact: opt.value }))
                      }
                      style={{ display: 'none' }}
                    />
                    <span style={{ fontSize: '1.75rem' }}>{opt.icon}</span>
                    <span
                      style={{
                        fontSize: '0.875rem',
                        fontWeight: form.preferredContact === opt.value ? 700 : 500,
                        color:
                          form.preferredContact === opt.value
                            ? 'var(--color-text)'
                            : 'var(--color-text-muted)',
                      }}
                    >
                      {opt.label}
                    </span>
                  </label>
                ))}
              </div>

              {/* Summary review */}
              <div
                style={{
                  marginTop: '28px',
                  padding: '20px',
                  background: 'var(--color-bg)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '12px',
                  fontSize: '0.875rem',
                  lineHeight: 1.65,
                  color: 'var(--color-text-muted)',
                }}
              >
                <p
                  style={{
                    fontWeight: 700,
                    color: 'var(--color-text)',
                    marginBottom: '8px',
                    fontSize: '0.78rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                  }}
                >
                  Your submission summary
                </p>
                <p>
                  <strong style={{ color: 'var(--color-text)' }}>Case type:</strong> {form.caseType}
                </p>
                <p>
                  <strong style={{ color: 'var(--color-text)' }}>Name:</strong> {form.name}
                </p>
                <p>
                  <strong style={{ color: 'var(--color-text)' }}>Email:</strong> {form.email}
                </p>
                <p>
                  <strong style={{ color: 'var(--color-text)' }}>Phone:</strong> {form.phone}
                </p>
              </div>
            </div>
          )}

          {status === 'error' && (
            <p
              style={{
                color: '#dc2626',
                fontSize: '0.875rem',
                textAlign: 'center',
                marginTop: '-8px',
              }}
            >
              Something went wrong. Please try again or call us directly.
            </p>
          )}

          {/* Navigation buttons */}
          <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
            {step > 0 && (
              <button
                type="button"
                onClick={handleBack}
                style={{
                  flex: 1,
                  padding: '14px',
                  background: 'transparent',
                  color: 'var(--color-text-muted)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '12px',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'opacity 0.2s',
                }}
              >
                ← Back
              </button>
            )}
            <button
              type="submit"
              disabled={status === 'loading'}
              style={{
                flex: step > 0 ? 2 : 1,
                padding: '14px',
                background: 'var(--color-primary)',
                color: '#c9a84c',
                border: '1px solid #c9a84c',
                borderRadius: '12px',
                fontSize: '0.95rem',
                fontWeight: 700,
                cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                opacity: status === 'loading' ? 0.7 : 1,
                transition: 'opacity 0.2s',
                letterSpacing: '0.02em',
              }}
            >
              {step === STEPS.length - 1
                ? status === 'loading'
                  ? 'Submitting…'
                  : 'Submit Free Assessment'
                : 'Continue →'}
            </button>
          </div>

          {step === STEPS.length - 1 && (
            <p
              style={{
                fontSize: '0.72rem',
                color: 'var(--color-text-muted)',
                textAlign: 'center',
                lineHeight: 1.6,
                marginTop: '-8px',
              }}
            >
              Submitting this form does not create a solicitor-client relationship. No confidential
              information should be shared until an engagement letter has been signed. Your details
              are held in strict confidence.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
