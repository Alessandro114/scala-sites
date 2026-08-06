'use client'

import { useState } from 'react'
import type { Locale } from '../../lib/types'
import { t } from '../../lib/i18n'

interface LoyaltyPromptProps {
  locale?: Locale
  onSubmit?: (phone: string) => Promise<void>
}

export function LoyaltyPrompt({ locale = 'en', onSubmit }: LoyaltyPromptProps) {
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      if (onSubmit) await onSubmit(phone)
      setDone(true)
    } finally {
      setLoading(false)
    }
  }

  if (done) {
    return (
      <section className="py-12 px-6 bg-green-50">
        <div className="max-w-md mx-auto text-center">
          <p className="text-green-800 font-medium text-lg">
            &#10003; {t('booking.whatsappReminder', locale)}
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="max-w-md mx-auto text-center">
        <h3 className="text-2xl font-bold mb-2">{t('loyalty.title', locale)}</h3>
        <p className="text-gray-600 mb-6">{t('loyalty.subtitle', locale)}</p>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="tel"
            required
            value={phone}
            onChange={e => setPhone(e.target.value)}
            placeholder={t('loyalty.phone', locale)}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
            aria-label={t('loyalty.phone', locale)}
          />
          <button
            type="submit"
            disabled={loading || !phone}
            className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? '...' : t('loyalty.submit', locale)}
          </button>
        </form>
      </div>
    </section>
  )
}
