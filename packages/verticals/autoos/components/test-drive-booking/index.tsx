'use client'

import { useState } from 'react'

export interface TestDriveVehicleOption {
  id: string
  label: string
}

interface TestDriveBookingProps {
  vehicles?: TestDriveVehicleOption[]
  onSubmit?: (data: TestDriveFormData) => Promise<void>
  title?: string
  subtitle?: string
}

export interface TestDriveFormData {
  name: string
  email: string
  phone: string
  vehicleId: string
  preferredDate: string
  preferredTimeSlot: string
  licenseConfirmed: boolean
  tradeInInterest: boolean
  tradeIn?: {
    make: string
    model: string
    year: string
    mileage: string
  }
}

const TIME_SLOTS = [
  '09:00 – 09:45',
  '10:00 – 10:45',
  '11:00 – 11:45',
  '12:00 – 12:45',
  '14:00 – 14:45',
  '15:00 – 15:45',
  '16:00 – 16:45',
  '17:00 – 17:45',
]

const EMPTY_FORM: TestDriveFormData = {
  name: '',
  email: '',
  phone: '',
  vehicleId: '',
  preferredDate: '',
  preferredTimeSlot: '',
  licenseConfirmed: false,
  tradeInInterest: false,
  tradeIn: { make: '', model: '', year: '', mileage: '' },
}

function getMinDate() {
  const d = new Date()
  d.setDate(d.getDate() + 1)
  return d.toISOString().split('T')[0]
}

const inputStyle = (error?: boolean): React.CSSProperties => ({
  width: '100%',
  padding: '11px 14px',
  borderRadius: '10px',
  border: `2px solid ${error ? '#dc2626' : 'var(--color-border)'}`,
  background: 'var(--color-secondary)',
  color: 'var(--color-text)',
  fontSize: '0.9rem',
  outline: 'none',
  boxSizing: 'border-box',
  transition: 'border-color 0.15s',
})

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontWeight: 600,
  fontSize: '0.825rem',
  marginBottom: '6px',
  color: 'var(--color-text)',
}

const fieldWrapStyle: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: '2px' }

const errorStyle: React.CSSProperties = { fontSize: '0.75rem', color: '#dc2626', marginTop: '2px' }

export function TestDriveBooking({
  vehicles = [],
  onSubmit,
  title = 'Book a Test Drive',
  subtitle = 'Experience the car before you commit. Slots available 7 days a week.',
}: TestDriveBookingProps) {
  const [form, setForm] = useState<TestDriveFormData>(EMPTY_FORM)
  const [errors, setErrors] = useState<Partial<Record<keyof TestDriveFormData | 'tradeIn.make' | 'tradeIn.model' | 'tradeIn.year' | 'tradeIn.mileage', string>>>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const set = (key: keyof TestDriveFormData, value: string | boolean) => {
    setForm(prev => ({ ...prev, [key]: value }))
    setErrors(prev => ({ ...prev, [key]: undefined }))
  }

  const setTradeIn = (key: keyof NonNullable<TestDriveFormData['tradeIn']>, value: string) => {
    setForm(prev => ({ ...prev, tradeIn: { ...prev.tradeIn!, [key]: value } }))
    setErrors(prev => ({ ...prev, [`tradeIn.${key}`]: undefined }))
  }

  const validate = (): boolean => {
    const errs: typeof errors = {}
    if (!form.name.trim()) errs.name = 'Full name is required'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Valid email is required'
    if (!form.phone.trim()) errs.phone = 'Phone number is required'
    if (vehicles.length > 0 && !form.vehicleId) errs.vehicleId = 'Please select a vehicle'
    if (!form.preferredDate) errs.preferredDate = 'Please choose a date'
    if (!form.preferredTimeSlot) errs.preferredTimeSlot = 'Please choose a time slot'
    if (!form.licenseConfirmed) errs.licenseConfirmed = 'You must hold a valid driving licence'
    if (form.tradeInInterest && form.tradeIn) {
      if (!form.tradeIn.make.trim()) errs['tradeIn.make'] = 'Make is required'
      if (!form.tradeIn.model.trim()) errs['tradeIn.model'] = 'Model is required'
      if (!form.tradeIn.year.trim()) errs['tradeIn.year'] = 'Year is required'
      if (!form.tradeIn.mileage.trim()) errs['tradeIn.mileage'] = 'Mileage is required'
    }
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('loading')
    try {
      if (onSubmit) {
        await onSubmit(form)
      } else {
        await new Promise(r => setTimeout(r, 1000))
      }
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <section style={{ padding: '64px 16px' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto', textAlign: 'center', padding: '60px 40px', borderRadius: '20px', background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
          <div style={{ fontSize: '3.5rem', marginBottom: '16px' }}>✅</div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '12px', fontFamily: 'var(--font-heading)' }}>
            Test Drive Booked!
          </h2>
          <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
            Thank you, <strong>{form.name}</strong>. We have received your booking request for{' '}
            <strong>{form.preferredDate}</strong> at <strong>{form.preferredTimeSlot}</strong>.
            Our team will confirm within 2 hours by phone or email.
          </p>
          <button
            onClick={() => { setForm(EMPTY_FORM); setStatus('idle') }}
            style={{
              marginTop: '28px',
              padding: '12px 28px',
              borderRadius: '10px',
              border: '2px solid var(--color-primary)',
              background: 'transparent',
              color: 'var(--color-primary)',
              fontWeight: 600,
              cursor: 'pointer',
              fontSize: '0.9rem',
            }}
          >
            Book Another
          </button>
        </div>
      </section>
    )
  }

  return (
    <section style={{ padding: '64px 16px' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, textAlign: 'center', marginBottom: '8px', fontFamily: 'var(--font-heading)' }}>
          {title}
        </h2>
        <p style={{ textAlign: 'center', marginBottom: '40px', color: 'var(--color-text-muted)' }}>
          {subtitle}
        </p>

        <form
          onSubmit={handleSubmit}
          noValidate
          style={{
            background: 'var(--color-surface)',
            borderRadius: '20px',
            border: '1px solid var(--color-border)',
            padding: '36px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          {/* Personal details */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            <div style={fieldWrapStyle}>
              <label style={labelStyle}>Full Name *</label>
              <input
                type="text"
                value={form.name}
                onChange={e => set('name', e.target.value)}
                placeholder="James Wilson"
                style={inputStyle(!!errors.name)}
              />
              {errors.name && <span style={errorStyle}>{errors.name}</span>}
            </div>
            <div style={fieldWrapStyle}>
              <label style={labelStyle}>Email Address *</label>
              <input
                type="email"
                value={form.email}
                onChange={e => set('email', e.target.value)}
                placeholder="james@example.com"
                style={inputStyle(!!errors.email)}
              />
              {errors.email && <span style={errorStyle}>{errors.email}</span>}
            </div>
          </div>

          <div style={fieldWrapStyle}>
            <label style={labelStyle}>Phone Number *</label>
            <input
              type="tel"
              value={form.phone}
              onChange={e => set('phone', e.target.value)}
              placeholder="+44 7700 900000"
              style={inputStyle(!!errors.phone)}
            />
            {errors.phone && <span style={errorStyle}>{errors.phone}</span>}
          </div>

          {/* Vehicle selector */}
          {vehicles.length > 0 && (
            <div style={fieldWrapStyle}>
              <label style={labelStyle}>Preferred Vehicle *</label>
              <select
                value={form.vehicleId}
                onChange={e => set('vehicleId', e.target.value)}
                style={{ ...inputStyle(!!errors.vehicleId), appearance: 'none' }}
              >
                <option value="">Select a vehicle…</option>
                {vehicles.map(v => (
                  <option key={v.id} value={v.id}>{v.label}</option>
                ))}
              </select>
              {errors.vehicleId && <span style={errorStyle}>{errors.vehicleId}</span>}
            </div>
          )}

          {/* Date and time */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            <div style={fieldWrapStyle}>
              <label style={labelStyle}>Preferred Date *</label>
              <input
                type="date"
                value={form.preferredDate}
                min={getMinDate()}
                onChange={e => set('preferredDate', e.target.value)}
                style={inputStyle(!!errors.preferredDate)}
              />
              {errors.preferredDate && <span style={errorStyle}>{errors.preferredDate}</span>}
            </div>
            <div style={fieldWrapStyle}>
              <label style={labelStyle}>Preferred Time *</label>
              <select
                value={form.preferredTimeSlot}
                onChange={e => set('preferredTimeSlot', e.target.value)}
                style={{ ...inputStyle(!!errors.preferredTimeSlot), appearance: 'none' }}
              >
                <option value="">Select a time…</option>
                {TIME_SLOTS.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              {errors.preferredTimeSlot && <span style={errorStyle}>{errors.preferredTimeSlot}</span>}
            </div>
          </div>

          {/* License checkbox */}
          <div>
            <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={form.licenseConfirmed}
                onChange={e => set('licenseConfirmed', e.target.checked)}
                style={{ marginTop: '3px', accentColor: 'var(--color-primary)', width: '16px', height: '16px', flexShrink: 0 }}
              />
              <span style={{ fontSize: '0.875rem', lineHeight: 1.5 }}>
                I confirm I hold a valid full driving licence and will bring it to the test drive *
              </span>
            </label>
            {errors.licenseConfirmed && <span style={{ ...errorStyle, display: 'block', marginTop: '6px' }}>{errors.licenseConfirmed}</span>}
          </div>

          {/* Trade-in toggle */}
          <div style={{
            padding: '16px',
            borderRadius: '12px',
            border: '1px solid var(--color-border)',
            background: form.tradeInInterest ? 'var(--color-secondary)' : 'transparent',
            transition: 'background 0.2s',
          }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
              <div
                onClick={() => set('tradeInInterest', !form.tradeInInterest)}
                style={{
                  width: '44px',
                  height: '24px',
                  borderRadius: '12px',
                  background: form.tradeInInterest ? 'var(--color-primary)' : 'var(--color-border)',
                  position: 'relative',
                  transition: 'background 0.2s',
                  cursor: 'pointer',
                  flexShrink: 0,
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '3px',
                  left: form.tradeInInterest ? '23px' : '3px',
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  background: '#ffffff',
                  transition: 'left 0.2s',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
                }} />
              </div>
              <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>
                I have a vehicle to part-exchange / trade in
              </span>
            </label>

            {form.tradeInInterest && (
              <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px' }}>
                <div style={fieldWrapStyle}>
                  <label style={labelStyle}>Current Car Make *</label>
                  <input
                    type="text"
                    value={form.tradeIn?.make ?? ''}
                    onChange={e => setTradeIn('make', e.target.value)}
                    placeholder="Toyota"
                    style={inputStyle(!!errors['tradeIn.make'])}
                  />
                  {errors['tradeIn.make'] && <span style={errorStyle}>{errors['tradeIn.make']}</span>}
                </div>
                <div style={fieldWrapStyle}>
                  <label style={labelStyle}>Model *</label>
                  <input
                    type="text"
                    value={form.tradeIn?.model ?? ''}
                    onChange={e => setTradeIn('model', e.target.value)}
                    placeholder="Corolla"
                    style={inputStyle(!!errors['tradeIn.model'])}
                  />
                  {errors['tradeIn.model'] && <span style={errorStyle}>{errors['tradeIn.model']}</span>}
                </div>
                <div style={fieldWrapStyle}>
                  <label style={labelStyle}>Year *</label>
                  <input
                    type="number"
                    value={form.tradeIn?.year ?? ''}
                    onChange={e => setTradeIn('year', e.target.value)}
                    placeholder="2019"
                    min={1990}
                    max={new Date().getFullYear()}
                    style={inputStyle(!!errors['tradeIn.year'])}
                  />
                  {errors['tradeIn.year'] && <span style={errorStyle}>{errors['tradeIn.year']}</span>}
                </div>
                <div style={fieldWrapStyle}>
                  <label style={labelStyle}>Current Mileage *</label>
                  <input
                    type="number"
                    value={form.tradeIn?.mileage ?? ''}
                    onChange={e => setTradeIn('mileage', e.target.value)}
                    placeholder="45000"
                    min={0}
                    style={inputStyle(!!errors['tradeIn.mileage'])}
                  />
                  {errors['tradeIn.mileage'] && <span style={errorStyle}>{errors['tradeIn.mileage']}</span>}
                </div>
              </div>
            )}
          </div>

          {/* Submit */}
          {status === 'error' && (
            <p style={{ textAlign: 'center', color: '#dc2626', fontSize: '0.875rem' }}>
              Something went wrong. Please try again or call us directly.
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            style={{
              padding: '14px',
              borderRadius: '12px',
              border: 'none',
              background: status === 'loading' ? 'var(--color-text-muted)' : 'var(--color-primary)',
              color: '#ffffff',
              fontWeight: 700,
              fontSize: '1rem',
              cursor: status === 'loading' ? 'not-allowed' : 'pointer',
              transition: 'opacity 0.15s',
            }}
            onMouseEnter={e => { if (status !== 'loading') e.currentTarget.style.opacity = '0.88' }}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            {status === 'loading' ? 'Submitting…' : 'Request Test Drive'}
          </button>
        </form>
      </div>
    </section>
  )
}
