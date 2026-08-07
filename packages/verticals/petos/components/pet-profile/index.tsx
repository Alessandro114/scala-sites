'use client'

import { useState } from 'react'

type Species = 'Dog' | 'Cat' | 'Rabbit' | 'Bird' | 'Exotic'
type Condition = 'Allergies' | 'Heart' | 'Diabetes' | 'Arthritis' | 'None'
type VaccinationStatus = 'Up to date' | 'Due soon' | 'Unknown'

interface PetProfileData {
  petName: string
  species: Species | ''
  breed: string
  age: string
  weight: string
  conditions: Condition[]
  vaccinationStatus: VaccinationStatus | ''
  ownerName: string
  ownerEmail: string
  ownerPhone: string
}

const SPECIES: Species[] = ['Dog', 'Cat', 'Rabbit', 'Bird', 'Exotic']
const CONDITIONS: Condition[] = ['Allergies', 'Heart', 'Diabetes', 'Arthritis', 'None']
const VACCINATION_STATUSES: VaccinationStatus[] = ['Up to date', 'Due soon', 'Unknown']

const SPECIES_EMOJI: Record<Species, string> = {
  Dog: '🐶',
  Cat: '🐱',
  Rabbit: '🐰',
  Bird: '🐦',
  Exotic: '🦎',
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.625rem 0.875rem',
  borderRadius: '0.5rem',
  border: '1px solid var(--color-border)',
  background: 'var(--color-bg)',
  fontSize: '0.875rem',
  outline: 'none',
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.75rem',
  fontWeight: 600,
  marginBottom: '0.375rem',
  color: 'var(--color-text-muted)',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
}

export function PetProfile() {
  const [form, setForm] = useState<PetProfileData>({
    petName: '',
    species: '',
    breed: '',
    age: '',
    weight: '',
    conditions: [],
    vaccinationStatus: '',
    ownerName: '',
    ownerEmail: '',
    ownerPhone: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const toggleCondition = (c: Condition) => {
    setForm(prev => {
      if (c === 'None') return { ...prev, conditions: ['None'] }
      const filtered = prev.conditions.filter(x => x !== 'None')
      return {
        ...prev,
        conditions: filtered.includes(c)
          ? filtered.filter(x => x !== c)
          : [...filtered, c],
      }
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="py-16 px-4 max-w-lg mx-auto text-center">
        <div
          className="rounded-2xl border p-12"
          style={{ borderColor: 'var(--color-border)', background: 'var(--color-surface)' }}
        >
          <div className="text-6xl mb-4">{form.species ? SPECIES_EMOJI[form.species as Species] : '🐾'}</div>
          <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
            Welcome to the family!
          </h2>
          <p className="mb-4" style={{ color: 'var(--color-text-muted)' }}>
            {form.petName ? `${form.petName} is` : 'Your pet is'} now registered at Pawsitive Care. We've sent a confirmation to{' '}
            <strong>{form.ownerEmail}</strong>.
          </p>
          <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
            Our team will be in touch shortly to confirm your first appointment.
          </p>
          <button
            onClick={() => { setSubmitted(false); setForm({ petName: '', species: '', breed: '', age: '', weight: '', conditions: [], vaccinationStatus: '', ownerName: '', ownerEmail: '', ownerPhone: '' }) }}
            className="mt-6 px-6 py-2.5 rounded-lg text-sm font-semibold text-white transition-colors"
            style={{ background: 'var(--color-primary)' }}
          >
            Register Another Pet
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 px-4 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
        Register Your Pet
      </h2>
      <p className="text-center mb-10" style={{ color: 'var(--color-text-muted)' }}>
        Create a health profile so we can provide the best possible care
      </p>

      <form onSubmit={handleSubmit}>
        <div
          className="rounded-2xl border p-8 space-y-6"
          style={{ borderColor: 'var(--color-border)', background: 'var(--color-surface)' }}
        >
          {/* Pet details */}
          <div>
            <h3 className="font-bold text-lg mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Pet Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label style={labelStyle}>Pet Name *</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Biscuit"
                  value={form.petName}
                  onChange={e => setForm(p => ({ ...p, petName: e.target.value }))}
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Breed</label>
                <input
                  type="text"
                  placeholder="e.g. Golden Retriever"
                  value={form.breed}
                  onChange={e => setForm(p => ({ ...p, breed: e.target.value }))}
                  style={inputStyle}
                />
              </div>
            </div>
          </div>

          {/* Species */}
          <div>
            <label style={labelStyle}>Species *</label>
            <div className="flex flex-wrap gap-2">
              {SPECIES.map(s => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setForm(p => ({ ...p, species: s }))}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  style={{
                    background: form.species === s ? 'var(--color-primary)' : 'var(--color-secondary)',
                    color: form.species === s ? '#fff' : 'inherit',
                    border: `1px solid ${form.species === s ? 'var(--color-primary)' : 'var(--color-border)'}`,
                  }}
                >
                  <span>{SPECIES_EMOJI[s]}</span> {s}
                </button>
              ))}
            </div>
          </div>

          {/* Age, Weight */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label style={labelStyle}>Age (years)</label>
              <input
                type="number"
                min="0"
                max="30"
                step="0.5"
                placeholder="e.g. 3"
                value={form.age}
                onChange={e => setForm(p => ({ ...p, age: e.target.value }))}
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Weight (kg)</label>
              <input
                type="number"
                min="0"
                step="0.1"
                placeholder="e.g. 12.5"
                value={form.weight}
                onChange={e => setForm(p => ({ ...p, weight: e.target.value }))}
                style={inputStyle}
              />
            </div>
          </div>

          {/* Existing conditions */}
          <div>
            <label style={labelStyle}>Existing Conditions</label>
            <div className="flex flex-wrap gap-2">
              {CONDITIONS.map(c => {
                const selected = form.conditions.includes(c)
                return (
                  <button
                    key={c}
                    type="button"
                    onClick={() => toggleCondition(c)}
                    className="px-3 py-1.5 rounded-full text-xs font-medium transition-colors"
                    style={{
                      background: selected ? '#f59e0b' : 'var(--color-secondary)',
                      color: selected ? '#fff' : 'inherit',
                      border: `1px solid ${selected ? '#f59e0b' : 'var(--color-border)'}`,
                    }}
                  >
                    {c}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Vaccination status */}
          <div>
            <label style={labelStyle}>Vaccination Status</label>
            <div className="flex flex-wrap gap-2">
              {VACCINATION_STATUSES.map(vs => (
                <button
                  key={vs}
                  type="button"
                  onClick={() => setForm(p => ({ ...p, vaccinationStatus: vs }))}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  style={{
                    background: form.vaccinationStatus === vs ? 'var(--color-primary)' : 'var(--color-secondary)',
                    color: form.vaccinationStatus === vs ? '#fff' : 'inherit',
                    border: `1px solid ${form.vaccinationStatus === vs ? 'var(--color-primary)' : 'var(--color-border)'}`,
                  }}
                >
                  {vs}
                </button>
              ))}
            </div>
          </div>

          {/* Owner contact */}
          <div>
            <h3 className="font-bold text-lg mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Owner Contact Info</h3>
            <div className="space-y-4">
              <div>
                <label style={labelStyle}>Full Name *</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Emma Thompson"
                  value={form.ownerName}
                  onChange={e => setForm(p => ({ ...p, ownerName: e.target.value }))}
                  style={inputStyle}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label style={labelStyle}>Email *</label>
                  <input
                    required
                    type="email"
                    placeholder="emma@example.com"
                    value={form.ownerEmail}
                    onChange={e => setForm(p => ({ ...p, ownerEmail: e.target.value }))}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Phone</label>
                  <input
                    type="tel"
                    placeholder="+44 7700 900000"
                    value={form.ownerPhone}
                    onChange={e => setForm(p => ({ ...p, ownerPhone: e.target.value }))}
                    style={inputStyle}
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl text-sm font-bold text-white transition-colors"
            style={{ background: 'var(--color-primary)' }}
          >
            Register Your Pet
          </button>
        </div>
      </form>
    </section>
  )
}
