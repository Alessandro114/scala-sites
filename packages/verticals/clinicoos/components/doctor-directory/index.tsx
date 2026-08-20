'use client'
import Image from 'next/image';

import { useState, useMemo } from 'react'

interface Doctor {
  id: string
  name: string
  photo: string
  specialty: string
  qualifications: string[]
  languages: string[]
  available: boolean
  nextSlot?: string
  bio: string
  rating: number
  reviewCount: number
}

interface DoctorDirectoryProps {
  doctors: Doctor[]
  title?: string
  subtitle?: string
  onBook?: (doctorId: string) => void
}

const SPECIALTY_COLORS: Record<string, string> = {
  'General Practice': '#0891b2',
  'Dentistry': '#0e7490',
  'Dermatology': '#7c3aed',
  'Physiotherapy': '#059669',
  'Paediatrics': '#d97706',
  'Cardiology': '#dc2626',
  'Ophthalmology': '#2563eb',
  'Nutrition': '#16a34a',
  'Psychology': '#9333ea',
  'Orthopaedics': '#b45309',
}

function StarRating({ rating }: { rating: number }) {
  return (
    <span style={{ display: 'inline-flex', gap: '2px' }}>
      {[1, 2, 3, 4, 5].map(i => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          style={{
            width: '13px',
            height: '13px',
            fill: i <= Math.round(rating) ? '#f59e0b' : '#e5e7eb',
          }}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  )
}

function Avatar({ name, photo, size = 96 }: { name: string; photo: string; size?: number }) {
  if (photo) {
    return (
      <Image src={photo}
        alt={name}
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
          objectFit: 'cover',
          display: 'block',
        }} width={1200} height={800} />
    )
  }
  const initials = name
    .split(' ')
    .map(p => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: 'var(--color-primary)',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: size * 0.33,
        fontWeight: 700,
        fontFamily: 'var(--font-heading)',
        flexShrink: 0,
      }}
    >
      {initials}
    </div>
  )
}

export function DoctorDirectory({
  doctors,
  title = 'Our Medical Team',
  subtitle = 'Experienced practitioners dedicated to your health and wellbeing',
  onBook,
}: DoctorDirectoryProps) {
  const [activeSpecialty, setActiveSpecialty] = useState('all')
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  const specialties = useMemo(
    () => Array.from(new Set(doctors.map(d => d.specialty))),
    [doctors]
  )

  const filtered = useMemo(
    () => activeSpecialty === 'all' ? doctors : doctors.filter(d => d.specialty === activeSpecialty),
    [doctors, activeSpecialty]
  )

  return (
    <section style={{ padding: '80px 24px', background: 'var(--color-bg)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
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
          <p
            style={{
              color: 'var(--color-text-muted)',
              fontSize: '1.0625rem',
              maxWidth: '560px',
              margin: '0 auto',
            }}
          >
            {subtitle}
          </p>
        </div>

        {/* Specialty filter */}
        {specialties.length > 1 && (
          <div
            style={{
              display: 'flex',
              gap: '8px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '48px',
            }}
          >
            {['all', ...specialties].map(s => {
              const color = SPECIALTY_COLORS[s] || 'var(--color-primary)'
              const isActive = activeSpecialty === s
              return (
                <button
                  key={s}
                  onClick={() => setActiveSpecialty(s)}
                  style={{
                    padding: '8px 20px',
                    borderRadius: 'var(--radius-full)',
                    border: isActive ? 'none' : '1px solid var(--color-border)',
                    background: isActive ? (s === 'all' ? 'var(--color-primary)' : color) : 'transparent',
                    color: isActive ? '#fff' : 'var(--color-text)',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    letterSpacing: '0.01em',
                  }}
                >
                  {s === 'all' ? 'All Specialists' : s}
                </button>
              )
            })}
          </div>
        )}

        {/* Doctor grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '28px',
          }}
        >
          {filtered.map(doctor => {
            const specialtyColor = SPECIALTY_COLORS[doctor.specialty] || 'var(--color-primary)'
            const isHovered = hoveredId === doctor.id
            return (
              <article
                key={doctor.id}
                onMouseEnter={() => setHoveredId(doctor.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border)',
                  background: 'var(--color-surface)',
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  transition: 'box-shadow 0.25s, transform 0.25s',
                  boxShadow: isHovered
                    ? '0 12px 40px rgba(0,0,0,0.10)'
                    : '0 2px 8px rgba(0,0,0,0.04)',
                  transform: isHovered ? 'translateY(-3px)' : 'none',
                }}
              >
                {/* Top: photo + name + specialty */}
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ position: 'relative', flexShrink: 0 }}>
                    <Avatar name={doctor.name} photo={doctor.photo} size={80} />
                    {/* Availability dot */}
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '4px',
                        right: '4px',
                        width: '14px',
                        height: '14px',
                        borderRadius: '50%',
                        background: doctor.available ? '#22c55e' : '#f59e0b',
                        border: '2px solid var(--color-surface)',
                      }}
                    />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        color: 'var(--color-text)',
                        marginBottom: '4px',
                        lineHeight: 1.3,
                      }}
                    >
                      {doctor.name}
                    </h3>
                    <span
                      style={{
                        display: 'inline-block',
                        padding: '3px 10px',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        background: `${specialtyColor}18`,
                        color: specialtyColor,
                        border: `1px solid ${specialtyColor}30`,
                        marginBottom: '6px',
                      }}
                    >
                      {doctor.specialty}
                    </span>
                    {/* Rating */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <StarRating rating={doctor.rating} />
                      <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--color-text)' }}>
                        {doctor.rating.toFixed(1)}
                      </span>
                      <span style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
                        ({doctor.reviewCount})
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--color-text-muted)',
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {doctor.bio}
                </p>

                {/* Qualifications */}
                {doctor.qualifications.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {doctor.qualifications.map((q, i) => (
                      <span
                        key={i}
                        style={{
                          display: 'inline-block',
                          padding: '3px 9px',
                          borderRadius: 'var(--radius-full)',
                          border: '1px solid var(--color-border)',
                          fontSize: '0.72rem',
                          fontWeight: 600,
                          color: 'var(--color-text-muted)',
                          background: 'var(--color-bg)',
                        }}
                      >
                        {q}
                      </span>
                    ))}
                  </div>
                )}

                {/* Languages */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.8rem',
                    color: 'var(--color-text-muted)',
                  }}
                >
                  <svg viewBox="0 0 20 20" style={{ width: '14px', height: '14px', fill: 'currentColor', flexShrink: 0 }}>
                    <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16A8 8 0 0010 2zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.559-.499-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.559.499.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                  </svg>
                  <span>{doctor.languages.join(' · ')}</span>
                </div>

                {/* Footer: availability + CTA */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '14px',
                    borderTop: '1px solid var(--color-border)',
                    marginTop: 'auto',
                  }}
                >
                  <div style={{ fontSize: '0.8rem' }}>
                    {doctor.available ? (
                      <span style={{ color: '#16a34a', fontWeight: 600 }}>
                        Available — {doctor.nextSlot || 'Today'}
                      </span>
                    ) : (
                      <span style={{ color: '#d97706', fontWeight: 600 }}>
                        Next slot: {doctor.nextSlot || 'Contact us'}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => onBook?.(doctor.id)}
                    style={{
                      padding: '9px 18px',
                      borderRadius: 'var(--radius-md)',
                      border: 'none',
                      background: 'var(--color-primary)',
                      color: '#fff',
                      fontSize: '0.825rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'opacity 0.2s',
                      letterSpacing: '0.02em',
                      opacity: isHovered ? 0.88 : 1,
                    }}
                  >
                    Book Appointment
                  </button>
                </div>
              </article>
            )
          })}
        </div>

        {filtered.length === 0 && (
          <p
            style={{
              textAlign: 'center',
              padding: '64px 0',
              color: 'var(--color-text-muted)',
              fontSize: '1.05rem',
            }}
          >
            No practitioners found for this specialty.
          </p>
        )}
      </div>
    </section>
  )
}
