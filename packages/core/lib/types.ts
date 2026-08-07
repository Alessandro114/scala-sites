// Site configuration
export interface SiteConfig {
  name: string
  description: string
  url: string
  locale: string
  vertical: VerticalType
  theme: ThemeType
  scala?: {
    apiUrl: string
    apiKey: string
    tenantId: string
  }
  branding: {
    primaryColor: string
    accentColor: string
    logo?: string
    favicon?: string
  }
  contact: {
    phone?: string
    email?: string
    whatsapp?: string
    address?: string
    coordinates?: { lat: number; lng: number }
  }
  social?: {
    instagram?: string
    facebook?: string
    tiktok?: string
    google?: string
  }
  seo: {
    title: string
    description: string
    ogImage?: string
    jsonLd?: Record<string, unknown>
  }
}

export type VerticalType =
  | 'dineos' | 'propertyos' | 'beautyos' | 'gymos'
  | 'travelos' | 'studioos' | 'legalos' | 'clinicos'
  | 'agencyos' | 'retailos' | 'autoos' | 'weddingos'
  | 'petos' | 'eduos' | 'cleanos' | 'dermalyos'
  | 'praxisos' | 'shopos'

export type ThemeType = 'minimal' | 'bold' | 'classic'

// Booking
export interface BookingSlot {
  id: string
  date: string // ISO
  time: string // HH:mm
  available: boolean
  spotsLeft?: number
  price?: number
  duration?: number // minutes
}

export interface BookingRequest {
  serviceId?: string
  staffId?: string
  date: string
  time: string
  customerName: string
  customerPhone: string
  customerEmail?: string
  notes?: string
  partySize?: number
  depositPaid?: boolean
}

export interface BookingConfirmation {
  id: string
  status: 'confirmed' | 'pending' | 'waitlist'
  date: string
  time: string
  whatsappConfirmation?: boolean
  reminderScheduled?: boolean
}

// Menu (DineOS)
export interface MenuItem {
  id: string
  name: string
  description?: string
  price: number
  currency: string
  image?: string
  category: string
  tags: string[] // vegan, gf, spicy, etc.
  available: boolean // live 86'd status
  featured?: boolean
}

export interface MenuCategory {
  id: string
  name: string
  description?: string
  items: MenuItem[]
  sortOrder: number
}

// Listings (PropertyOS)
export interface PropertyListing {
  id: string
  title: string
  description: string
  price: number
  currency: string
  type: 'sale' | 'rent'
  propertyType: 'apartment' | 'house' | 'commercial' | 'land'
  bedrooms?: number
  bathrooms?: number
  area: number // sqm
  images: string[]
  virtualTour?: string
  address: string
  coordinates: { lat: number; lng: number }
  features: string[]
  agentId?: string
  available: boolean
  createdAt: string
}

// Services (BeautyOS, ClinicoOS, etc.)
export interface Service {
  id: string
  name: string
  description?: string
  duration: number // minutes
  price: number
  currency: string
  category: string
  image?: string
  staffIds?: string[]
}

// Staff / Team
export interface TeamMember {
  id: string
  name: string
  role: string
  bio?: string
  photo?: string
  specialties?: string[]
  bookable: boolean
  social?: {
    instagram?: string
    linkedin?: string
  }
}

// Reviews
export interface Review {
  id: string
  author: string
  rating: number // 1-5
  text: string
  date: string
  source: string
  reply?: string
  verified?: boolean
}

// Classes (GymOS)
export interface FitnessClass {
  id: string
  name: string
  description?: string
  instructor: string
  instructorId?: string
  duration: number
  capacity: number
  spotsLeft: number
  schedule: ClassSchedule[]
  level: 'beginner' | 'intermediate' | 'advanced' | 'all'
  image?: string
}

export interface ClassSchedule {
  dayOfWeek: number // 0=Sun
  time: string // HH:mm
  recurring: boolean
}

// Rooms (TravelOS)
export interface Room {
  id: string
  name: string
  description: string
  price: number
  currency: string
  priceUnit: 'night' | 'week'
  capacity: number
  images: string[]
  amenities: string[]
  available: boolean
  availableDates?: string[] // ISO dates
}

// Gallery
export interface GalleryImage {
  src: string
  alt: string
  width: number
  height: number
  category?: string
}

// FAQ
export interface FAQItem {
  question: string
  answer: string
}

// i18n
export type Locale = 'en' | 'it' | 'de' | 'es' | 'fr'
