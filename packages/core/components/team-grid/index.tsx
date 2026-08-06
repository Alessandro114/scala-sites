'use client'

import type { TeamMember, Locale } from '../../lib/types'
import { t } from '../../lib/i18n'

interface TeamGridProps {
  members: TeamMember[]
  locale?: Locale
  onBook?: (memberId: string) => void
}

export function TeamGrid({ members, locale = 'en', onBook }: TeamGridProps) {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">{t('team.title', locale)}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map(member => (
            <div key={member.id} className="text-center group">
              {member.photo ? (
                <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden bg-gray-100 ring-4 ring-gray-100 group-hover:ring-gray-300 transition-all duration-300">
                  <img
                    src={member.photo}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ) : (
                <div className="w-48 h-48 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center text-4xl font-semibold text-gray-500 select-none">
                  {member.name.charAt(0)}
                </div>
              )}
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-gray-600 mb-3">{member.role}</p>
              {member.specialties && member.specialties.length > 0 && (
                <div className="flex flex-wrap gap-1 justify-center mb-4">
                  {member.specialties.map(s => (
                    <span
                      key={s}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              )}
              {member.bookable && onBook && (
                <button
                  onClick={() => onBook(member.id)}
                  className="mt-1 px-6 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  {t('team.bookWith', locale, { name: member.name.split(' ')[0] })}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
