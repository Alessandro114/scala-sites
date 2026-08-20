'use client'
import Image from 'next/image';

import { useState } from 'react'

interface Vet {
  id: string
  name: string
  photo?: string
  title: string
  specialties: ('Small Animals' | 'Exotics' | 'Surgery' | 'Dental')[]
  qualifications: string[]
  nextAvailable: string
  emergency24_7?: boolean
  bookingUrl?: string
}

interface VetBookingProps {
  vets: Vet[]
  onBook?: (vetId: string, appointmentType: string) => void
}

const APPOINTMENT_TYPES = ['Checkup', 'Vaccination', 'Surgery', 'Emergency'] as const
type AppointmentType = typeof APPOINTMENT_TYPES[number]

const appointmentColors: Record<AppointmentType, string> = {
  Checkup: '#166534',
  Vaccination: '#0369a1',
  Surgery: '#7c3aed',
  Emergency: '#dc2626',
}

export function VetBooking({ vets, onBook }: VetBookingProps) {
  const [selectedType, setSelectedType] = useState<AppointmentType>('Checkup')

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
        Meet Our Veterinarians
      </h2>
      <p className="text-center mb-8" style={{ color: 'var(--color-text-muted)' }}>
        Compassionate, expert care for every member of your family
      </p>

      {/* Appointment type selector */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {APPOINTMENT_TYPES.map(type => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className="px-5 py-2 rounded-full text-sm font-semibold transition-colors"
            style={{
              background: selectedType === type ? appointmentColors[type] : 'var(--color-secondary)',
              color: selectedType === type ? '#fff' : 'inherit',
            }}
          >
            {type === 'Emergency' ? '🚨 ' : ''}{type}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {vets.map(vet => (
          <div
            key={vet.id}
            className="rounded-xl overflow-hidden border flex flex-col"
            style={{ borderColor: 'var(--color-border)', background: 'var(--color-surface)' }}
          >
            {/* Photo */}
            <div className="h-64 relative">
              {vet.photo ? (
                <Image src={vet.photo} alt={vet.name} className="w-full h-full object-cover" width={1200} height={800} />
              ) : (
                <div
                  className="w-full h-full flex items-center justify-center text-5xl font-bold"
                  style={{ background: 'var(--color-secondary)', color: 'var(--color-text-muted)' }}
                >
                  {vet.name.split(' ').map(n => n[0]).join('')}
                </div>
              )}
              {vet.emergency24_7 && (
                <span
                  className="absolute top-3 right-3 px-2 py-1 text-xs font-bold rounded-full text-white"
                  style={{ background: '#dc2626' }}
                >
                  24/7 Emergency
                </span>
              )}
            </div>

            {/* Info */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>{vet.name}</h3>
              <p className="text-sm mb-3" style={{ color: 'var(--color-accent)' }}>{vet.title}</p>

              {/* Specialties */}
              <div className="flex flex-wrap gap-1 mb-3">
                {vet.specialties.map(s => (
                  <span
                    key={s}
                    className="px-2 py-0.5 text-xs rounded-full"
                    style={{ background: 'var(--color-secondary)', color: 'var(--color-primary)' }}
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Qualifications */}
              <div className="flex flex-wrap gap-1 mb-4">
                {vet.qualifications.map(q => (
                  <span
                    key={q}
                    className="px-2 py-0.5 text-xs rounded border"
                    style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}
                  >
                    {q}
                  </span>
                ))}
              </div>

              {/* Next available */}
              <p className="text-sm mb-4 flex-1">
                <span style={{ color: 'var(--color-text-muted)' }}>Next available: </span>
                <span className="font-semibold" style={{ color: '#166534' }}>{vet.nextAvailable}</span>
              </p>

              <button
                onClick={() => onBook?.(vet.id, selectedType)}
                className="block w-full text-center py-2.5 rounded-lg text-sm font-semibold text-white transition-colors"
                style={{ background: appointmentColors[selectedType] }}
              >
                Book {selectedType}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
