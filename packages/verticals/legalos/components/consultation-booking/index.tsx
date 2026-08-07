'use client'

import { useState } from 'react'

export interface ConsultationBookingData {
  name: string
  email: string
  phone: string
  practiceArea: string
  caseType: string
  urgency: 'standard' | 'urgent' | 'emergency'
  description: string
}

interface ConsultationBookingProps {
  practiceAreas: string[]
  onSubmit: (data: ConsultationBookingData) => Promise<void>
  title?: string
  subtitle?: string
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 16px',
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
  fontSize: '0.8rem',
  fontWeight: 700,
  marginBottom: '6px',
  color: 'var(--color-text-muted)',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
}

const URGENCY_OPTIONS: { value: ConsultationBookingData['urgency']; label: string; description: string; color: string }[] = [
  { value: 'standard', label: 'Standard', description: 'Response within 2 business days', color: '#6b7280' },
  { value: 'urgent', label: 'Urgent', description: 'Response within 4 hours', color: '#d97706' },
  { value: 'emergency', label: 'Emergency', description: 'Immediate attention required', color: '#dc2626' },
]

export function ConsultationBooking({
  practiceAreas,
  onSubmit,
  title = 'Book a Free Consultation',
  subtitle = 'Speak with one of our attorneys. All consultations are strictly confidential.',
}: ConsultationBookingProps) {
  const [form, setForm] = useState<ConsultationBookingData>({
    name: '',
    email: '',
    phone: '',
    practiceArea: '',
    caseType: '',
    urgency: 'standard',
    description: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [errors, setErrors] = useState<Partial<Record<keyof ConsultationBookingData, string>>>({})

  const set =
    (key: keyof ConsultationBookingData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }))
      if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }))
    }

  const getBorderColor = (field: string) => {
    if (errors[field as keyof ConsultationBookingData]) return '#dc2626'
    return focusedField === field ? 'var(--color-primary)' : 'var(--color-border)'
  }

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ConsultationBookingData, string>> = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = 'Valid email is required'
    if (!form.phone.trim()) newErrors.phone = 'Phone number is required'
    if (!form.practiceArea) newErrors.practiceArea = 'Please select a practice area'
    if (!form.description.trim() || form.description.trim().length < 20)
      newErrors.description = 'Please provide at least 20 characters describing your matter'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('loading')
    try {
      await onSubmit(form)
      setStatus('success')
      setForm({ name: '', email: '', phone: '', practiceArea: '', caseType: '', urgency: 'standard', description: '' })
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <section id="consultation" style={{ padding: '80px 24px' }}>
        <div
          style={{
            maxWidth: '620px',
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
              width: '72px',
              height: '72px',
              background: '#15803d',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px',
            }}
          >
            <svg viewBox="0 0 20 20" style={{ width: '36px', height: '36px' }} fill="#fff">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h3 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '12px', color: 'var(--color-text)' }}>
            Request Received
          </h3>
          <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '8px' }}>
            Thank you for contacting us. One of our attorneys will reach out to confirm your
            consultation appointment.
          </p>
          <p
            style={{
              fontSize: '0.8rem',
              color: 'var(--color-text-muted)',
              fontStyle: 'italic',
              marginBottom: '28px',
            }}
          >
            All communications are protected by attorney-client privilege.
          </p>
          <button
            onClick={() => setStatus('idle')}
            style={{
              padding: '10px 28px',
              border: '1px solid var(--color-border)',
              borderRadius: '10px',
              background: 'transparent',
              cursor: 'pointer',
              fontSize: '0.9rem',
              color: 'var(--color-text-muted)',
            }}
          >
            Submit another request
          </button>
        </div>
      </section>
    )
  }

  return (
    <section id="consultation" style={{ padding: '80px 24px' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>
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
            marginBottom: '16px',
            fontSize: '1.05rem',
          }}
        >
          {subtitle}
        </p>

        {/* Free consultation badge */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px', gap: '12px', flexWrap: 'wrap' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 16px',
              background: '#dcfce7',
              border: '1px solid #bbf7d0',
              borderRadius: '9999px',
              fontSize: '0.825rem',
              fontWeight: 700,
              color: '#15803d',
            }}
          >
            <span>✓</span> Free Initial Consultation
          </span>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 16px',
              background: '#eff6ff',
              border: '1px solid #bfdbfe',
              borderRadius: '9999px',
              fontSize: '0.825rem',
              fontWeight: 700,
              color: '#1d4ed8',
            }}
          >
            <span>🔒</span> Attorney-Client Privilege
          </span>
        </div>

        {/* Confidentiality notice */}
        <div
          style={{
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderLeft: '4px solid var(--color-primary)',
            borderRadius: '10px',
            padding: '16px 20px',
            marginBottom: '32px',
            fontSize: '0.85rem',
            color: 'var(--color-text-muted)',
            lineHeight: 1.65,
          }}
        >
          <strong style={{ color: 'var(--color-text)', display: 'block', marginBottom: '4px' }}>
            Confidentiality Notice
          </strong>
          The information you submit is protected and will only be used to evaluate your legal matter.
          Submitting this form does not create an attorney-client relationship. No confidential
          information should be included until an engagement letter has been signed.
        </div>

        <form
          onSubmit={handleSubmit}
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
          {/* Name + Email */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <label htmlFor="cb-name" style={labelStyle}>
                Full Name *
              </label>
              <input
                id="cb-name"
                type="text"
                required
                placeholder="e.g. Jonathan Hartley"
                value={form.name}
                onChange={set('name')}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                style={{ ...inputStyle, borderColor: getBorderColor('name') }}
              />
              {errors.name && (
                <p style={{ fontSize: '0.75rem', color: '#dc2626', marginTop: '4px' }}>{errors.name}</p>
              )}
            </div>
            <div>
              <label htmlFor="cb-email" style={labelStyle}>
                Email Address *
              </label>
              <input
                id="cb-email"
                type="email"
                required
                placeholder="j.hartley@example.com"
                value={form.email}
                onChange={set('email')}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                style={{ ...inputStyle, borderColor: getBorderColor('email') }}
              />
              {errors.email && (
                <p style={{ fontSize: '0.75rem', color: '#dc2626', marginTop: '4px' }}>{errors.email}</p>
              )}
            </div>
          </div>

          {/* Phone + Practice area */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <label htmlFor="cb-phone" style={labelStyle}>
                Phone Number *
              </label>
              <input
                id="cb-phone"
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
                <p style={{ fontSize: '0.75rem', color: '#dc2626', marginTop: '4px' }}>{errors.phone}</p>
              )}
            </div>
            <div>
              <label htmlFor="cb-area" style={labelStyle}>
                Practice Area *
              </label>
              <select
                id="cb-area"
                required
                value={form.practiceArea}
                onChange={set('practiceArea')}
                onFocus={() => setFocusedField('practiceArea')}
                onBlur={() => setFocusedField(null)}
                style={{ ...inputStyle, borderColor: getBorderColor('practiceArea'), appearance: 'auto' }}
              >
                <option value="">Select a practice area…</option>
                {practiceAreas.map((area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))}
              </select>
              {errors.practiceArea && (
                <p style={{ fontSize: '0.75rem', color: '#dc2626', marginTop: '4px' }}>{errors.practiceArea}</p>
              )}
            </div>
          </div>

          {/* Case type */}
          <div>
            <label htmlFor="cb-casetype" style={labelStyle}>
              Case Type / Matter
            </label>
            <input
              id="cb-casetype"
              type="text"
              placeholder="e.g. Contract dispute, Company formation, Employment tribunal…"
              value={form.caseType}
              onChange={set('caseType')}
              onFocus={() => setFocusedField('caseType')}
              onBlur={() => setFocusedField(null)}
              style={{ ...inputStyle, borderColor: getBorderColor('caseType') }}
            />
          </div>

          {/* Urgency */}
          <div>
            <p style={{ ...labelStyle, marginBottom: '12px' }}>Urgency Level *</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
              {URGENCY_OPTIONS.map((opt) => (
                <label
                  key={opt.value}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    padding: '14px 16px',
                    border: '2px solid',
                    borderColor: form.urgency === opt.value ? opt.color : 'var(--color-border)',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    background: form.urgency === opt.value ? opt.color + '12' : 'transparent',
                    transition: 'all 0.2s',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <input
                      type="radio"
                      name="urgency"
                      value={opt.value}
                      checked={form.urgency === opt.value}
                      onChange={() => setForm((prev) => ({ ...prev, urgency: opt.value }))}
                      style={{ accentColor: opt.color }}
                    />
                    <span
                      style={{
                        fontSize: '0.875rem',
                        fontWeight: 700,
                        color: form.urgency === opt.value ? opt.color : 'var(--color-text)',
                      }}
                    >
                      {opt.label}
                    </span>
                  </div>
                  <span style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', paddingLeft: '22px' }}>
                    {opt.description}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="cb-description" style={labelStyle}>
              Brief Description of Your Matter *
            </label>
            <textarea
              id="cb-description"
              required
              rows={5}
              placeholder="Please describe your legal matter in general terms. Do not include highly sensitive details at this stage — full details can be shared once an engagement letter is signed…"
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
              <p style={{ fontSize: '0.75rem', color: '#dc2626', marginTop: '4px' }}>{errors.description}</p>
            )}
          </div>

          {status === 'error' && (
            <p style={{ color: '#dc2626', fontSize: '0.875rem', textAlign: 'center', marginTop: '-8px' }}>
              Something went wrong. Please try again or call us directly.
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            style={{
              padding: '17px',
              background: 'var(--color-primary)',
              color: '#fff',
              border: 'none',
              borderRadius: '12px',
              fontSize: '1rem',
              fontWeight: 700,
              cursor: status === 'loading' ? 'not-allowed' : 'pointer',
              opacity: status === 'loading' ? 0.7 : 1,
              transition: 'opacity 0.2s',
              letterSpacing: '0.02em',
            }}
          >
            {status === 'loading' ? 'Submitting Request…' : 'Request Free Consultation'}
          </button>

          <p
            style={{
              fontSize: '0.75rem',
              color: 'var(--color-text-muted)',
              textAlign: 'center',
              lineHeight: 1.6,
              marginTop: '-8px',
            }}
          >
            By submitting this form you acknowledge that no attorney-client relationship is created
            until a formal engagement letter is executed. Your information is held in strict confidence.
          </p>
        </form>
      </div>
    </section>
  )
}
