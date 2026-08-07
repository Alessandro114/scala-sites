'use client'

import { useState } from 'react'

interface DoctorOption {
  id: string
  name: string
  specialty: string
}

interface AppointmentFormProps {
  doctors?: DoctorOption[]
  departments?: string[]
  title?: string
  subtitle?: string
  onSubmit?: (data: AppointmentFormData) => Promise<void> | void
}

interface AppointmentFormData {
  name: string
  email: string
  phone: string
  doctorId: string
  department: string
  preferredDate: string
  preferredTime: string
  notes: string
  urgent: boolean
}

const TIME_SLOTS = [
  '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
  '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
  '17:00', '17:30',
]

function FieldLabel({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label
      style={{
        display: 'block',
        fontSize: '0.72rem',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.07em',
        color: 'var(--color-text-muted)',
        marginBottom: '6px',
      }}
    >
      {children}
      {required && <span style={{ color: 'var(--color-primary)', marginLeft: '3px' }}>*</span>}
    </label>
  )
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '11px 14px',
  borderRadius: 'var(--radius-md)',
  border: '1px solid var(--color-border)',
  background: 'var(--color-bg)',
  color: 'var(--color-text)',
  fontSize: '0.9375rem',
  outline: 'none',
  boxSizing: 'border-box',
  fontFamily: 'var(--font-body)',
  transition: 'border-color 0.15s',
}

function validate(data: AppointmentFormData): Record<string, string> {
  const errors: Record<string, string> = {}
  if (!data.name.trim()) errors.name = 'Full name is required.'
  if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = 'A valid email address is required.'
  if (!data.phone.trim() || data.phone.trim().length < 7)
    errors.phone = 'A valid phone number is required.'
  if (!data.preferredDate) errors.preferredDate = 'Please select a preferred date.'
  if (!data.preferredTime) errors.preferredTime = 'Please select a preferred time.'
  return errors
}

export function AppointmentForm({
  doctors = [],
  departments = [],
  title = 'Book an Appointment',
  subtitle = 'Fill in the form below and our team will confirm your appointment within 2 hours',
  onSubmit,
}: AppointmentFormProps) {
  const today = new Date().toISOString().split('T')[0]

  const [form, setForm] = useState<AppointmentFormData>({
    name: '',
    email: '',
    phone: '',
    doctorId: '',
    department: '',
    preferredDate: '',
    preferredTime: '',
    notes: '',
    urgent: false,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const set = (field: keyof AppointmentFormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }))
    if (errors[field]) setErrors(prev => { const n = { ...prev }; delete n[field]; return n })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setLoading(true)
    try {
      if (onSubmit) {
        await onSubmit(form)
      } else {
        await new Promise(r => setTimeout(r, 1200))
      }
      setSubmitted(true)
    } catch {
      setErrors({ _global: 'Something went wrong. Please try again or call us directly.' })
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <section style={{ padding: '80px 24px', background: 'var(--color-bg)' }}>
        <div
          style={{
            maxWidth: '580px',
            margin: '0 auto',
            textAlign: 'center',
            padding: '56px 40px',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid #bbf7d0',
            background: '#f0fdf4',
          }}
        >
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: '#16a34a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px',
            }}
          >
            <svg viewBox="0 0 20 20" style={{ width: '30px', height: '30px', fill: '#fff' }}>
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <h3
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.5rem',
              fontWeight: 700,
              color: '#15803d',
              marginBottom: '12px',
            }}
          >
            Appointment Request Received
          </h3>
          <p style={{ color: '#166534', fontSize: '0.9375rem', lineHeight: 1.65, marginBottom: '24px' }}>
            Thank you, <strong>{form.name}</strong>. We have received your request and will confirm
            your appointment by email ({form.email}) within 2 business hours.
          </p>
          {form.urgent && (
            <div
              style={{
                padding: '12px 16px',
                borderRadius: 'var(--radius-md)',
                background: '#fef9c3',
                border: '1px solid #fde047',
                fontSize: '0.85rem',
                color: '#854d0e',
                marginBottom: '20px',
              }}
            >
              Your request has been marked as <strong>urgent</strong>. Our team will prioritise your case.
            </div>
          )}
          <button
            onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', doctorId: '', department: '', preferredDate: '', preferredTime: '', notes: '', urgent: false }) }}
            style={{
              padding: '10px 24px',
              borderRadius: 'var(--radius-md)',
              border: '2px solid #16a34a',
              background: 'transparent',
              color: '#16a34a',
              fontSize: '0.875rem',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Book Another Appointment
          </button>
        </div>
      </section>
    )
  }

  return (
    <section style={{ padding: '80px 24px', background: 'var(--color-bg)' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 700,
              marginBottom: '12px',
              color: 'var(--color-text)',
            }}
          >
            {title}
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', maxWidth: '500px', margin: '0 auto' }}>
            {subtitle}
          </p>
        </div>

        {/* Urgent banner */}
        {form.urgent && (
          <div
            style={{
              marginBottom: '24px',
              padding: '14px 20px',
              borderRadius: 'var(--radius-md)',
              background: '#fff7ed',
              border: '1px solid #fed7aa',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: '0.875rem',
              color: '#c2410c',
              fontWeight: 500,
            }}
          >
            <span style={{ fontSize: '1.1rem' }}>⚡</span>
            Urgent flag set — your request will be prioritised by our clinical team.
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          noValidate
          style={{
            background: 'var(--color-surface)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--color-border)',
            padding: '36px 40px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          {/* Row 1: Name + Email */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <FieldLabel required>Full Name</FieldLabel>
              <input
                type="text"
                value={form.name}
                onChange={set('name')}
                placeholder="e.g. James Morrison"
                style={{ ...inputStyle, borderColor: errors.name ? '#dc2626' : 'var(--color-border)' }}
                autoComplete="name"
              />
              {errors.name && (
                <p style={{ color: '#dc2626', fontSize: '0.75rem', marginTop: '4px' }}>{errors.name}</p>
              )}
            </div>
            <div>
              <FieldLabel required>Email Address</FieldLabel>
              <input
                type="email"
                value={form.email}
                onChange={set('email')}
                placeholder="you@example.com"
                style={{ ...inputStyle, borderColor: errors.email ? '#dc2626' : 'var(--color-border)' }}
                autoComplete="email"
              />
              {errors.email && (
                <p style={{ color: '#dc2626', fontSize: '0.75rem', marginTop: '4px' }}>{errors.email}</p>
              )}
            </div>
          </div>

          {/* Row 2: Phone + Department */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <FieldLabel required>Phone Number</FieldLabel>
              <input
                type="tel"
                value={form.phone}
                onChange={set('phone')}
                placeholder="+44 7700 900000"
                style={{ ...inputStyle, borderColor: errors.phone ? '#dc2626' : 'var(--color-border)' }}
                autoComplete="tel"
              />
              {errors.phone && (
                <p style={{ color: '#dc2626', fontSize: '0.75rem', marginTop: '4px' }}>{errors.phone}</p>
              )}
            </div>
            {departments.length > 0 && (
              <div>
                <FieldLabel>Department</FieldLabel>
                <select
                  value={form.department}
                  onChange={set('department')}
                  style={inputStyle}
                >
                  <option value="">Any department</option>
                  {departments.map(d => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>
            )}
          </div>

          {/* Preferred Doctor */}
          {doctors.length > 0 && (
            <div>
              <FieldLabel>Preferred Doctor</FieldLabel>
              <select
                value={form.doctorId}
                onChange={set('doctorId')}
                style={inputStyle}
              >
                <option value="">No preference — assign by availability</option>
                {doctors.map(d => (
                  <option key={d.id} value={d.id}>
                    {d.name} — {d.specialty}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Row 3: Date + Time */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <FieldLabel required>Preferred Date</FieldLabel>
              <input
                type="date"
                value={form.preferredDate}
                min={today}
                onChange={set('preferredDate')}
                style={{ ...inputStyle, borderColor: errors.preferredDate ? '#dc2626' : 'var(--color-border)' }}
              />
              {errors.preferredDate && (
                <p style={{ color: '#dc2626', fontSize: '0.75rem', marginTop: '4px' }}>{errors.preferredDate}</p>
              )}
            </div>
            <div>
              <FieldLabel required>Preferred Time</FieldLabel>
              <select
                value={form.preferredTime}
                onChange={set('preferredTime')}
                style={{ ...inputStyle, borderColor: errors.preferredTime ? '#dc2626' : 'var(--color-border)' }}
              >
                <option value="">Select a time slot</option>
                {TIME_SLOTS.map(t => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
              {errors.preferredTime && (
                <p style={{ color: '#dc2626', fontSize: '0.75rem', marginTop: '4px' }}>{errors.preferredTime}</p>
              )}
            </div>
          </div>

          {/* Symptoms / Notes */}
          <div>
            <FieldLabel>Symptoms / Additional Notes</FieldLabel>
            <textarea
              value={form.notes}
              onChange={set('notes')}
              rows={4}
              placeholder="Briefly describe your symptoms or reason for visit. This helps us prepare for your appointment."
              style={{
                ...inputStyle,
                resize: 'vertical',
                minHeight: '100px',
                lineHeight: 1.6,
              }}
            />
          </div>

          {/* Urgent toggle */}
          <div>
            <label
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                cursor: 'pointer',
                padding: '14px 16px',
                borderRadius: 'var(--radius-md)',
                border: `1px solid ${form.urgent ? '#fed7aa' : 'var(--color-border)'}`,
                background: form.urgent ? '#fff7ed' : 'transparent',
                transition: 'all 0.2s',
                userSelect: 'none',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '44px',
                  height: '24px',
                  borderRadius: '12px',
                  background: form.urgent ? '#ea580c' : 'var(--color-border)',
                  transition: 'background 0.2s',
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '3px',
                    left: form.urgent ? '23px' : '3px',
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    background: '#fff',
                    transition: 'left 0.2s',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                  }}
                />
                <input
                  type="checkbox"
                  checked={form.urgent}
                  onChange={e => setForm(prev => ({ ...prev, urgent: e.target.checked }))}
                  style={{
                    position: 'absolute',
                    opacity: 0,
                    width: '100%',
                    height: '100%',
                    margin: 0,
                    cursor: 'pointer',
                  }}
                />
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.875rem', color: form.urgent ? '#c2410c' : 'var(--color-text)' }}>
                  This is urgent
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', marginTop: '2px' }}>
                  Flag for priority review — our team will contact you as soon as possible
                </div>
              </div>
            </label>
          </div>

          {/* Global error */}
          {errors._global && (
            <div
              style={{
                padding: '14px 16px',
                borderRadius: 'var(--radius-md)',
                background: '#fef2f2',
                border: '1px solid #fecaca',
                fontSize: '0.875rem',
                color: '#dc2626',
              }}
            >
              {errors._global}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '14px 24px',
              borderRadius: 'var(--radius-md)',
              border: 'none',
              background: loading ? 'var(--color-text-muted)' : 'var(--color-primary)',
              color: '#fff',
              fontSize: '1rem',
              fontWeight: 700,
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'background 0.2s',
              letterSpacing: '0.02em',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
            }}
          >
            {loading ? (
              <>
                <span
                  style={{
                    display: 'inline-block',
                    width: '16px',
                    height: '16px',
                    border: '2px solid rgba(255,255,255,0.4)',
                    borderTopColor: '#fff',
                    borderRadius: '50%',
                    animation: 'spin 0.7s linear infinite',
                  }}
                />
                Submitting Request...
              </>
            ) : (
              'Request Appointment'
            )}
          </button>

          <p style={{ textAlign: 'center', fontSize: '0.78rem', color: 'var(--color-text-muted)', margin: 0 }}>
            By submitting this form you agree to our privacy policy. Your data will only be used to manage your appointment.
          </p>
        </form>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </section>
  )
}
