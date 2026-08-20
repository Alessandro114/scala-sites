'use client'
import Image from 'next/image';

interface Agent {
  id: string
  name: string
  role: string
  photo?: string
  phone?: string
  email?: string
  specialties: string[]
  propertiesSold: number
  yearsExperience: number
  bio: string
  bookingUrl?: string
}

interface AgentCardProps {
  agents: Agent[]
  whatsappNumber?: string
}

export function AgentCard({ agents, whatsappNumber }: AgentCardProps) {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Our Team</h2>
      <p className="mb-10" style={{ color: 'var(--color-text-muted)' }}>
        {agents.length} agents ready to help you find your dream property
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {agents.map(agent => (
          <div key={agent.id} className="rounded-xl border overflow-hidden" style={{ borderColor: 'var(--color-border)', background: 'var(--color-surface)' }}>
            <div className="h-64 bg-gray-200">
              {agent.photo ? (
                <Image src={agent.photo} alt={agent.name} className="w-full h-full object-cover" width={1200} height={800} />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-5xl font-bold" style={{ color: 'var(--color-text-muted)', background: 'var(--color-secondary)' }}>
                  {agent.name.split(' ').map(n => n[0]).join('')}
                </div>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>{agent.name}</h3>
              <p className="text-sm mb-3" style={{ color: 'var(--color-text-muted)' }}>{agent.role}</p>
              <div className="flex gap-4 text-sm mb-3">
                <span className="font-semibold">{agent.propertiesSold} sold</span>
                <span style={{ color: 'var(--color-text-muted)' }}>{agent.yearsExperience}+ years</span>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {agent.specialties.map(s => (
                  <span key={s} className="px-2.5 py-0.5 text-xs rounded-full" style={{ background: 'var(--color-secondary)', color: 'var(--color-primary)' }}>{s}</span>
                ))}
              </div>
              <p className="text-sm mb-4 line-clamp-3" style={{ color: 'var(--color-text-muted)' }}>{agent.bio}</p>
              <div className="flex gap-2">
                {agent.bookingUrl && (
                  <a href={agent.bookingUrl} className="flex-1 text-center px-4 py-2.5 rounded-lg text-sm font-medium text-white transition-colors"
                    style={{ background: 'var(--color-primary)' }}>Book a Call</a>
                )}
                {whatsappNumber && (
                  <a href={`https://wa.me/${whatsappNumber}?text=Hi ${agent.name}, I'd like to discuss properties`}
                    className="px-4 py-2.5 rounded-lg text-sm font-medium text-white bg-green-600 hover:bg-green-700 transition-colors">
                    WhatsApp
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
