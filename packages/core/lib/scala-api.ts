import type { BookingSlot, BookingRequest, BookingConfirmation, MenuItem, MenuCategory, Review, TeamMember, Service } from './types'

interface ScalaAPIConfig {
  baseUrl: string
  apiKey: string
  tenantId: string
}

class ScalaAPI {
  private config: ScalaAPIConfig

  constructor(config: ScalaAPIConfig) {
    this.config = config
  }

  private async fetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const res = await fetch(`${this.config.baseUrl}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': this.config.apiKey,
        'X-Tenant-ID': this.config.tenantId,
        ...options?.headers,
      },
    })
    if (!res.ok) throw new Error(`SCALA API error: ${res.status}`)
    return res.json()
  }

  // Booking
  async getAvailableSlots(date: string, serviceId?: string): Promise<BookingSlot[]> {
    const params = new URLSearchParams({ date })
    if (serviceId) params.set('serviceId', serviceId)
    return this.fetch(`/api/v1/booking/slots?${params}`)
  }

  async createBooking(booking: BookingRequest): Promise<BookingConfirmation> {
    return this.fetch('/api/v1/booking', {
      method: 'POST',
      body: JSON.stringify(booking),
    })
  }

  // Menu
  async getMenu(): Promise<MenuCategory[]> {
    return this.fetch('/api/v1/menu')
  }

  async getMenuAvailability(): Promise<Record<string, boolean>> {
    return this.fetch('/api/v1/menu/availability')
  }

  // Reviews
  async getReviews(limit?: number): Promise<Review[]> {
    const params = limit ? `?limit=${limit}` : ''
    return this.fetch(`/api/v1/reviews${params}`)
  }

  // Team
  async getTeam(): Promise<TeamMember[]> {
    return this.fetch('/api/v1/team')
  }

  // Services
  async getServices(): Promise<Service[]> {
    return this.fetch('/api/v1/services')
  }
}

export function createScalaAPI(config: ScalaAPIConfig): ScalaAPI {
  return new ScalaAPI(config)
}

export type { ScalaAPI }
