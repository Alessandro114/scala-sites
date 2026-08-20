'use client'
import Image from 'next/image';

interface Trainer {
  id: string
  name: string
  photo?: string
  title: string
  certifications: string[]
  specialties: string[]
  bio: string
  bookingUrl?: string
}

interface TrainerCardProps {
  trainers: Trainer[]
}

export function TrainerCard({ trainers }: TrainerCardProps) {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Our Trainers</h2>
      <p className="text-center mb-10" style={{ color: 'var(--color-text-muted)' }}>Certified professionals dedicated to your goals</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {trainers.map(t => (
          <div key={t.id} className="rounded-xl overflow-hidden border" style={{ borderColor: 'var(--color-border)', background: 'var(--color-surface)' }}>
            <div className="h-72 bg-gray-200">
              {t.photo ? (
                <Image src={t.photo} alt={t.name} className="w-full h-full object-cover" width={1200} height={800} />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-5xl font-bold" style={{ background: 'var(--color-secondary)', color: 'var(--color-text-muted)' }}>
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>{t.name}</h3>
              <p className="text-sm mb-3" style={{ color: 'var(--color-accent)' }}>{t.title}</p>
              <div className="flex flex-wrap gap-1 mb-3">
                {t.specialties.map(s => (
                  <span key={s} className="px-2 py-0.5 text-xs rounded-full" style={{ background: 'var(--color-secondary)', color: 'var(--color-primary)' }}>{s}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-1 mb-3">
                {t.certifications.map(c => (
                  <span key={c} className="px-2 py-0.5 text-xs rounded border" style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}>{c}</span>
                ))}
              </div>
              <p className="text-sm mb-4 line-clamp-3" style={{ color: 'var(--color-text-muted)' }}>{t.bio}</p>
              {t.bookingUrl && (
                <a href={t.bookingUrl} className="block text-center py-2.5 rounded-lg text-sm font-medium text-white transition-colors"
                  style={{ background: 'var(--color-primary)' }}>Book 1:1 Session</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
