export function trackEvent(name: string, params?: Record<string, string | number>) {
  if (typeof window === 'undefined') return
  const w = window as typeof window & { gtag?: (...args: unknown[]) => void }
  if (w.gtag) {
    w.gtag('event', name, params)
  }
}

export function trackBooking(vertical: string, service?: string) {
  trackEvent('booking_started', { vertical, service: service || 'general' })
}

export function trackBookingComplete(vertical: string, value?: number) {
  trackEvent('booking_complete', { vertical, value: value || 0 })
}

export function trackMenuView(vertical: string) {
  trackEvent('menu_view', { vertical })
}

export function trackWhatsAppClick(vertical: string) {
  trackEvent('whatsapp_click', { vertical })
}
