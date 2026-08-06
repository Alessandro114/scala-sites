'use client'

import { useState } from 'react'

export interface ProjectInquiryData {
  name: string
  email: string
  projectType: string
  budgetRange: string
  timeline: string
  description: string
}

interface ProjectInquiryProps {
  projectTypes: string[]
  budgetRanges: string[]
  onSubmit: (data: ProjectInquiryData) => Promise<void>
  title?: string
  subtitle?: string
}

const TIMELINES = [
  'ASAP (under 2 weeks)',
  '1 month',
  '2–3 months',
  '3–6 months',
  'No rush — quality first',
]

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
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.85rem',
  fontWeight: 600,
  marginBottom: '6px',
  color: 'var(--color-text-muted)',
  textTransform: 'uppercase',
  letterSpacing: '0.04em',
}

export function ProjectInquiry({
  projectTypes,
  budgetRanges,
  onSubmit,
  title = 'Start a Project',
  subtitle = 'Tell us about your project and we will get back to you within 24 hours.',
}: ProjectInquiryProps) {
  const [form, setForm] = useState<ProjectInquiryData>({
    name: '',
    email: '',
    projectType: '',
    budgetRange: '',
    timeline: '',
    description: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const set = (key: keyof ProjectInquiryData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [key]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      await onSubmit(form)
      setStatus('success')
      setForm({ name: '', email: '', projectType: '', budgetRange: '', timeline: '', description: '' })
    } catch {
      setStatus('error')
    }
  }

  const getBorderColor = (field: string) =>
    focusedField === field ? 'var(--color-primary)' : 'var(--color-border)'

  if (status === 'success') {
    return (
      <section id="contact" style={{ padding: '80px 24px' }}>
        <div
          style={{
            maxWidth: '600px',
            margin: '0 auto',
            textAlign: 'center',
            padding: '60px 40px',
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: '24px',
          }}
        >
          <div
            style={{
              width: '64px',
              height: '64px',
              background: 'var(--color-accent)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
            }}
          >
            <svg viewBox="0 0 20 20" style={{ width: '32px', height: '32px' }} fill="#fff">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '12px' }}>
            Inquiry Received
          </h3>
          <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '24px' }}>
            Thank you for reaching out. We have received your project brief and will be in touch
            within 24 hours to schedule an introductory call.
          </p>
          <button
            onClick={() => setStatus('idle')}
            style={{
              padding: '10px 24px',
              border: '1px solid var(--color-border)',
              borderRadius: '10px',
              background: 'transparent',
              cursor: 'pointer',
              fontSize: '0.9rem',
              color: 'inherit',
            }}
          >
            Submit another inquiry
          </button>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" style={{ padding: '80px 24px' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <h2
          style={{
            fontSize: '2.25rem',
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: '8px',
            fontFamily: 'var(--font-heading)',
          }}
        >
          {title}
        </h2>
        <p
          style={{
            textAlign: 'center',
            color: 'var(--color-text-muted)',
            marginBottom: '48px',
            fontSize: '1.05rem',
          }}
        >
          {subtitle}
        </p>

        <form
          onSubmit={handleSubmit}
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
              <label htmlFor="inq-name" style={labelStyle}>
                Your Name *
              </label>
              <input
                id="inq-name"
                type="text"
                required
                placeholder="Alex Johnson"
                value={form.name}
                onChange={set('name')}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                style={{ ...inputStyle, borderColor: getBorderColor('name') }}
              />
            </div>
            <div>
              <label htmlFor="inq-email" style={labelStyle}>
                Email Address *
              </label>
              <input
                id="inq-email"
                type="email"
                required
                placeholder="alex@company.com"
                value={form.email}
                onChange={set('email')}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                style={{ ...inputStyle, borderColor: getBorderColor('email') }}
              />
            </div>
          </div>

          {/* Project type */}
          <div>
            <label htmlFor="inq-type" style={labelStyle}>
              Project Type *
            </label>
            <select
              id="inq-type"
              required
              value={form.projectType}
              onChange={set('projectType')}
              onFocus={() => setFocusedField('projectType')}
              onBlur={() => setFocusedField(null)}
              style={{ ...inputStyle, borderColor: getBorderColor('projectType'), appearance: 'auto' }}
            >
              <option value="">Select a project type…</option>
              {projectTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          {/* Budget + Timeline */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <label htmlFor="inq-budget" style={labelStyle}>
                Budget Range *
              </label>
              <select
                id="inq-budget"
                required
                value={form.budgetRange}
                onChange={set('budgetRange')}
                onFocus={() => setFocusedField('budgetRange')}
                onBlur={() => setFocusedField(null)}
                style={{ ...inputStyle, borderColor: getBorderColor('budgetRange'), appearance: 'auto' }}
              >
                <option value="">Select a range…</option>
                {budgetRanges.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="inq-timeline" style={labelStyle}>
                Ideal Timeline
              </label>
              <select
                id="inq-timeline"
                value={form.timeline}
                onChange={set('timeline')}
                onFocus={() => setFocusedField('timeline')}
                onBlur={() => setFocusedField(null)}
                style={{ ...inputStyle, borderColor: getBorderColor('timeline'), appearance: 'auto' }}
              >
                <option value="">Select a timeline…</option>
                {TIMELINES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="inq-description" style={labelStyle}>
              Project Description *
            </label>
            <textarea
              id="inq-description"
              required
              rows={5}
              placeholder="Tell us about your project goals, audience, and any references or inspirations you have in mind…"
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
          </div>

          {status === 'error' && (
            <p
              style={{
                color: '#dc2626',
                fontSize: '0.875rem',
                textAlign: 'center',
                marginTop: '-8px',
              }}
            >
              Something went wrong. Please try again or email us directly.
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            style={{
              padding: '16px',
              background: 'var(--color-primary)',
              color: '#fff',
              border: 'none',
              borderRadius: '12px',
              fontSize: '1rem',
              fontWeight: 700,
              cursor: status === 'loading' ? 'not-allowed' : 'pointer',
              opacity: status === 'loading' ? 0.7 : 1,
              transition: 'opacity 0.2s',
            }}
          >
            {status === 'loading' ? 'Sending…' : 'Send Project Brief'}
          </button>
        </form>
      </div>
    </section>
  )
}
