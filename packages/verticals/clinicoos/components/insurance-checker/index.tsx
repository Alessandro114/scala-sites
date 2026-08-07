'use client'

import { useState } from 'react'

interface CoverageResult {
  treatment: string
  covered: boolean
  coverageNote: string
}

interface InsuranceProvider {
  id: string
  name: string
  plans: string[]
  coveredTreatments: Record<string, { covered: boolean; note: string }>
}

interface InsuranceCheckerProps {
  providers: InsuranceProvider[]
  title?: string
  subtitle?: string
  onLeadCapture?: (data: LeadData) => Promise<void> | void
}

interface LeadData {
  name: string
  email: string
  phone: string
  providerId: string
  planType: string
}

function CheckCircle({ color = '#16a34a' }: { color?: string }) {
  return (
    <svg viewBox="0 0 20 20" style={{ width: '18px', height: '18px', fill: color, flexShrink: 0 }}>
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  )
}

function XCircle() {
  return (
    <svg viewBox="0 0 20 20" style={{ width: '18px', height: '18px', fill: '#dc2626', flexShrink: 0 }}>
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
    </svg>
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
  appearance: 'none',
}

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

export function InsuranceChecker({
  providers,
  title = 'Check Your Insurance Coverage',
  subtitle = 'Enter your insurance details to instantly see which treatments are covered at Harley Health Clinic',
  onLeadCapture,
}: InsuranceCheckerProps) {
  const [step, setStep] = useState<'form' | 'results' | 'confirmed'>('form')
  const [selectedProviderId, setSelectedProviderId] = useState('')
  const [selectedPlan, setSelectedPlan] = useState('')
  const [leadData, setLeadData] = useState({ name: '', email: '', phone: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [coverageResults, setCoverageResults] = useState<CoverageResult[]>([])
  const [loading, setLoading] = useState(false)

  const selectedProvider = providers.find(p => p.id === selectedProviderId)

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault()
    const errs: Record<string, string> = {}
    if (!selectedProviderId) errs.provider = 'Please select your insurance provider.'
    if (!selectedPlan) errs.plan = 'Please select your plan type.'
    if (Object.keys(errs).length > 0) { setErrors(errs); return }

    if (selectedProvider) {
      const results: CoverageResult[] = Object.entries(selectedProvider.coveredTreatments).map(
        ([treatment, info]) => ({
          treatment,
          covered: info.covered,
          coverageNote: info.note,
        })
      )
      setCoverageResults(results)
    }
    setStep('results')
    setErrors({})
  }

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs: Record<string, string> = {}
    if (!leadData.name.trim()) errs.name = 'Name is required.'
    if (!leadData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(leadData.email))
      errs.email = 'Valid email required.'
    if (!leadData.phone.trim() || leadData.phone.trim().length < 7)
      errs.phone = 'Valid phone required.'
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setLoading(true)
    try {
      if (onLeadCapture) {
        await onLeadCapture({ ...leadData, providerId: selectedProviderId, planType: selectedPlan })
      } else {
        await new Promise(r => setTimeout(r, 1000))
      }
      setStep('confirmed')
    } catch {
      setErrors({ _global: 'Something went wrong. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  const coveredCount = coverageResults.filter(r => r.covered).length

  return (
    <section style={{ padding: '80px 24px', background: 'var(--color-bg)' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          {/* Shield icon */}
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: 'var(--radius-lg)',
              background: 'var(--color-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
            }}
          >
            <svg viewBox="0 0 20 20" style={{ width: '28px', height: '28px', fill: '#fff' }}>
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
              fontWeight: 700,
              marginBottom: '12px',
              color: 'var(--color-text)',
            }}
          >
            {title}
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', maxWidth: '520px', margin: '0 auto' }}>
            {subtitle}
          </p>
        </div>

        {/* Step 1: Insurance lookup form */}
        {step === 'form' && (
          <form
            onSubmit={handleCheck}
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
            <div>
              <FieldLabel required>Insurance Provider</FieldLabel>
              <select
                value={selectedProviderId}
                onChange={e => { setSelectedProviderId(e.target.value); setSelectedPlan('') }}
                style={{ ...inputStyle, borderColor: errors.provider ? '#dc2626' : 'var(--color-border)' }}
              >
                <option value="">Select your insurer...</option>
                {providers.map(p => (
                  <option key={p.id} value={p.id}>{p.name}</option>
                ))}
              </select>
              {errors.provider && (
                <p style={{ color: '#dc2626', fontSize: '0.75rem', marginTop: '4px' }}>{errors.provider}</p>
              )}
            </div>

            <div>
              <FieldLabel required>Plan Type</FieldLabel>
              <select
                value={selectedPlan}
                onChange={e => setSelectedPlan(e.target.value)}
                disabled={!selectedProvider}
                style={{
                  ...inputStyle,
                  borderColor: errors.plan ? '#dc2626' : 'var(--color-border)',
                  opacity: !selectedProvider ? 0.5 : 1,
                  cursor: !selectedProvider ? 'not-allowed' : 'pointer',
                }}
              >
                <option value="">
                  {selectedProvider ? 'Select your plan...' : 'Select a provider first'}
                </option>
                {selectedProvider?.plans.map(plan => (
                  <option key={plan} value={plan}>{plan}</option>
                ))}
              </select>
              {errors.plan && (
                <p style={{ color: '#dc2626', fontSize: '0.75rem', marginTop: '4px' }}>{errors.plan}</p>
              )}
            </div>

            {/* Info note */}
            <div
              style={{
                display: 'flex',
                gap: '10px',
                padding: '14px 16px',
                borderRadius: 'var(--radius-md)',
                background: 'var(--color-secondary)',
                border: '1px solid var(--color-border)',
                fontSize: '0.8125rem',
                color: 'var(--color-text-muted)',
                lineHeight: 1.55,
              }}
            >
              <svg viewBox="0 0 20 20" style={{ width: '16px', height: '16px', fill: 'var(--color-primary)', flexShrink: 0, marginTop: '1px' }}>
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span>
                Coverage details are indicative. Final confirmation is subject to your individual policy terms.
                Our team will verify exact coverage before your appointment.
              </span>
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                padding: '14px 24px',
                borderRadius: 'var(--radius-md)',
                border: 'none',
                background: 'var(--color-primary)',
                color: '#fff',
                fontSize: '1rem',
                fontWeight: 700,
                cursor: 'pointer',
                letterSpacing: '0.02em',
              }}
            >
              Check Coverage
            </button>
          </form>
        )}

        {/* Step 2: Results + lead capture */}
        {step === 'results' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {/* Summary banner */}
            <div
              style={{
                padding: '20px 24px',
                borderRadius: 'var(--radius-lg)',
                background: coveredCount > 0 ? '#f0fdf4' : '#fef2f2',
                border: `1px solid ${coveredCount > 0 ? '#bbf7d0' : '#fecaca'}`,
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: coveredCount > 0 ? '#16a34a' : '#dc2626',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <svg viewBox="0 0 20 20" style={{ width: '24px', height: '24px', fill: '#fff' }}>
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', color: coveredCount > 0 ? '#15803d' : '#b91c1c', marginBottom: '2px' }}>
                  {selectedProvider?.name} — {selectedPlan}
                </div>
                <div style={{ fontSize: '0.875rem', color: coveredCount > 0 ? '#166534' : '#991b1b' }}>
                  {coveredCount} of {coverageResults.length} treatments covered under your plan
                </div>
              </div>
              <button
                onClick={() => { setStep('form'); setCoverageResults([]) }}
                style={{
                  marginLeft: 'auto',
                  padding: '7px 14px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border)',
                  background: 'transparent',
                  color: 'var(--color-text-muted)',
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  flexShrink: 0,
                }}
              >
                Change
              </button>
            </div>

            {/* Coverage list */}
            <div
              style={{
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-border)',
                background: 'var(--color-surface)',
                overflow: 'hidden',
              }}
            >
              {coverageResults.map((result, i) => (
                <div
                  key={result.treatment}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '14px',
                    padding: '16px 22px',
                    borderBottom: i < coverageResults.length - 1 ? '1px solid var(--color-border)' : 'none',
                    background: result.covered ? 'transparent' : '#fff8f8',
                  }}
                >
                  {result.covered ? <CheckCircle /> : <XCircle />}
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--color-text)', marginBottom: '2px' }}>
                      {result.treatment}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                      {result.coverageNote}
                    </div>
                  </div>
                  <span
                    style={{
                      flexShrink: 0,
                      padding: '3px 9px',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      background: result.covered ? '#f0fdf4' : '#fef2f2',
                      color: result.covered ? '#16a34a' : '#dc2626',
                      border: `1px solid ${result.covered ? '#bbf7d0' : '#fecaca'}`,
                    }}
                  >
                    {result.covered ? 'Covered' : 'Not Covered'}
                  </span>
                </div>
              ))}
            </div>

            {/* Lead capture */}
            <div
              style={{
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-border)',
                background: 'var(--color-surface)',
                padding: '32px 36px',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: 'var(--color-text)',
                  marginBottom: '8px',
                }}
              >
                Get a personalised coverage report
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '24px', lineHeight: 1.6 }}>
                Enter your details and our insurance team will send you a full coverage breakdown
                and book a free 15-minute consultation to discuss your options.
              </p>

              <form onSubmit={handleLeadSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <FieldLabel required>Full Name</FieldLabel>
                    <input
                      type="text"
                      value={leadData.name}
                      onChange={e => setLeadData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="e.g. Charlotte Webb"
                      autoComplete="name"
                      style={{ ...inputStyle, borderColor: errors.name ? '#dc2626' : 'var(--color-border)' }}
                    />
                    {errors.name && <p style={{ color: '#dc2626', fontSize: '0.75rem', marginTop: '4px' }}>{errors.name}</p>}
                  </div>
                  <div>
                    <FieldLabel required>Phone Number</FieldLabel>
                    <input
                      type="tel"
                      value={leadData.phone}
                      onChange={e => setLeadData(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder="+44 7700 900000"
                      autoComplete="tel"
                      style={{ ...inputStyle, borderColor: errors.phone ? '#dc2626' : 'var(--color-border)' }}
                    />
                    {errors.phone && <p style={{ color: '#dc2626', fontSize: '0.75rem', marginTop: '4px' }}>{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <FieldLabel required>Email Address</FieldLabel>
                  <input
                    type="email"
                    value={leadData.email}
                    onChange={e => setLeadData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="you@example.com"
                    autoComplete="email"
                    style={{ ...inputStyle, borderColor: errors.email ? '#dc2626' : 'var(--color-border)' }}
                  />
                  {errors.email && <p style={{ color: '#dc2626', fontSize: '0.75rem', marginTop: '4px' }}>{errors.email}</p>}
                </div>

                {errors._global && (
                  <div style={{ padding: '12px 16px', borderRadius: 'var(--radius-md)', background: '#fef2f2', border: '1px solid #fecaca', fontSize: '0.875rem', color: '#dc2626' }}>
                    {errors._global}
                  </div>
                )}

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
                    fontSize: '0.9375rem',
                    fontWeight: 700,
                    cursor: loading ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    letterSpacing: '0.02em',
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
                      Sending...
                    </>
                  ) : (
                    'Send My Coverage Report'
                  )}
                </button>

                <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--color-text-muted)', margin: 0 }}>
                  We will never share your details. Privacy policy applies.
                </p>
              </form>
            </div>
          </div>
        )}

        {/* Step 3: Confirmed */}
        {step === 'confirmed' && (
          <div
            style={{
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
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700, color: '#15803d', marginBottom: '12px' }}>
              Report on its way!
            </h3>
            <p style={{ color: '#166534', fontSize: '0.9375rem', lineHeight: 1.65, marginBottom: '28px', maxWidth: '420px', margin: '0 auto 28px' }}>
              We have sent a full coverage breakdown to <strong>{leadData.email}</strong>.
              Our team will call you within 2 business hours to discuss your options.
            </p>
            <button
              onClick={() => { setStep('form'); setCoverageResults([]); setLeadData({ name: '', email: '', phone: '' }); setSelectedProviderId(''); setSelectedPlan('') }}
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
              Check another policy
            </button>
          </div>
        )}
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </section>
  )
}
