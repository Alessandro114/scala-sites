'use client'

import { useState } from 'react'
import type { BookingSlot, Locale } from '../../lib/types'
import { t } from '../../lib/i18n'
import { trackBooking, trackBookingComplete } from '../../lib/analytics'

interface BookingWidgetProps {
  locale?: Locale
  slots?: BookingSlot[]
  onSubmit?: (data: {
    date: string
    time: string
    name: string
    phone: string
    email?: string
    guests?: number
    notes?: string
  }) => Promise<void>
  showGuestCount?: boolean
  maxGuests?: number
  socialProof?: { count: number; label: string }
  vertical?: string
  accentColor?: string
}

export function BookingWidget({
  locale = 'en',
  slots = [],
  onSubmit,
  showGuestCount = true,
  maxGuests = 10,
  socialProof,
  vertical = 'general',
  accentColor = '#000',
}: BookingWidgetProps) {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [guests, setGuests] = useState(2)
  const [notes, setNotes] = useState('')
  const [step, setStep] = useState<'form' | 'confirming' | 'done'>('form')

  const availableSlots = slots.filter(s => s.date === date && s.available)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!onSubmit) return
    setStep('confirming')
    trackBooking(vertical)
    try {
      await onSubmit({ date, time, name, phone, email, guests, notes })
      setStep('done')
      trackBookingComplete(vertical)
    } catch {
      setStep('form')
    }
  }

  if (step === 'done') {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 text-center max-w-md mx-auto">
        <div className="text-5xl mb-4 text-green-500">&#10003;</div>
        <h3 className="text-2xl font-bold mb-2">{t('booking.confirmed', locale)}</h3>
        <p className="text-gray-600">{t('booking.whatsappReminder', locale)}</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 max-w-md mx-auto">
      <h3 className="text-2xl font-bold mb-6">{t('booking.title', locale)}</h3>

      {socialProof && (
        <div className="mb-4 px-4 py-2 bg-green-50 border border-green-200 rounded-lg text-sm text-green-800 text-center">
          {socialProof.count}+ {socialProof.label}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t('booking.date', locale)}
          </label>
          <input
            type="date"
            required
            value={date}
            onChange={e => setDate(e.target.value)}
            min={new Date().toISOString().split('T')[0]}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
          />
        </div>

        {/* Time slot picker or free input */}
        {date && availableSlots.length > 0 ? (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('booking.time', locale)}
            </label>
            <div className="grid grid-cols-3 gap-2">
              {availableSlots.map(slot => (
                <button
                  key={slot.id}
                  type="button"
                  onClick={() => setTime(slot.time)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    time === slot.time
                      ? 'bg-black text-white'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {slot.time}
                  {slot.spotsLeft !== undefined && slot.spotsLeft <= 3 && (
                    <span className="block text-xs text-amber-600 font-normal mt-0.5">
                      {t('booking.spotsLeft', locale, { count: slot.spotsLeft })}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        ) : date ? (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t('booking.time', locale)}
            </label>
            <input
              type="time"
              required
              value={time}
              onChange={e => setTime(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
            />
          </div>
        ) : null}

        {/* Guest count */}
        {showGuestCount && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('booking.guests', locale)}
            </label>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setGuests(Math.max(1, guests - 1))}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-lg hover:bg-gray-100 transition-colors"
              >
                -
              </button>
              <span className="text-xl font-semibold w-8 text-center">{guests}</span>
              <button
                type="button"
                onClick={() => setGuests(Math.min(maxGuests, guests + 1))}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-lg hover:bg-gray-100 transition-colors"
              >
                +
              </button>
            </div>
          </div>
        )}

        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t('booking.name', locale)}
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t('booking.phone', locale)}
          </label>
          <input
            type="tel"
            required
            value={phone}
            onChange={e => setPhone(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
          />
        </div>

        {/* Notes */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t('booking.notes', locale)}
          </label>
          <textarea
            value={notes}
            onChange={e => setNotes(e.target.value)}
            rows={2}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={step === 'confirming' || !date || !time || !name || !phone}
          style={{ backgroundColor: accentColor }}
          className="w-full py-4 rounded-lg font-semibold text-lg text-white transition-opacity disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90"
        >
          {step === 'confirming' ? '...' : t('booking.submit', locale)}
        </button>
      </form>
    </div>
  )
}
