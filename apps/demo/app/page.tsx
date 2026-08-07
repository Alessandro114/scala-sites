'use client'

import Link from 'next/link'
import { useState } from 'react'

type Category =
  | 'All'
  | 'Food & Drink'
  | 'Property'
  | 'Health & Beauty'
  | 'Creative'
  | 'Professional Services'
  | 'Education'
  | 'Automotive'
  | 'Entertainment'
  | 'Home Services'
  | 'Travel'
  | 'Retail'
  | 'Community'

interface Vertical {
  name: string
  slug: string
  tagline: string
  color: string
  colorEnd: string
  category: Category
  icon: string
}

const verticals: Vertical[] = [
  // ── Food & Drink ──────────────────────────────────────────────────────────
  {
    name: 'DineOS',
    slug: '/restaurant',
    tagline: 'Classic restaurant with bookings & menu',
    color: '#78350f',
    colorEnd: '#b45309',
    category: 'Food & Drink',
    icon: '🍽',
  },
  {
    name: 'DineOS — Modern',
    slug: '/restaurant-modern',
    tagline: 'Contemporary Japanese, dark minimalist',
    color: '#18181b',
    colorEnd: '#e8c547',
    category: 'Food & Drink',
    icon: '🍣',
  },
  {
    name: 'PizzaOS',
    slug: '/pizzeria',
    tagline: 'Neapolitan pizzeria, order & delivery',
    color: '#b91c1c',
    colorEnd: '#dc7f2a',
    category: 'Food & Drink',
    icon: '🍕',
  },
  {
    name: 'CaféOS',
    slug: '/cafe',
    tagline: 'Specialty coffee & brunch café',
    color: '#3b2005',
    colorEnd: '#92400e',
    category: 'Food & Drink',
    icon: '☕',
  },
  {
    name: 'BakeryOS',
    slug: '/bakery',
    tagline: 'Artisan bakery, sourdough & patisserie',
    color: '#7c2d12',
    colorEnd: '#c2410c',
    category: 'Food & Drink',
    icon: '🍞',
  },
  {
    name: 'GelateriaOS',
    slug: '/gelateria',
    tagline: 'Artisan gelato & dessert parlour',
    color: '#701a75',
    colorEnd: '#db2777',
    category: 'Food & Drink',
    icon: '🍦',
  },
  {
    name: 'SushiOS',
    slug: '/sushi',
    tagline: 'Modern Japanese sushi restaurant',
    color: '#0f172a',
    colorEnd: '#dc2626',
    category: 'Food & Drink',
    icon: '🍱',
  },
  {
    name: 'BreweryOS',
    slug: '/brewery',
    tagline: 'Craft brewery & taproom experience',
    color: '#1c1202',
    colorEnd: '#d97706',
    category: 'Food & Drink',
    icon: '🍺',
  },
  {
    name: 'WineBarOS',
    slug: '/winebar',
    tagline: 'Natural wine bar & small plates',
    color: '#4c0519',
    colorEnd: '#9f1239',
    category: 'Food & Drink',
    icon: '🍷',
  },
  {
    name: 'FarmOS',
    slug: '/farm-shop',
    tagline: 'Organic farm shop & weekly veg boxes',
    color: '#4a6218',
    colorEnd: '#8b6914',
    category: 'Food & Drink',
    icon: '🌿',
  },
  {
    name: 'ButcherOS',
    slug: '/butcher',
    tagline: 'Traditional family butchers since 1954',
    color: '#3c1f0a',
    colorEnd: '#8b0000',
    category: 'Food & Drink',
    icon: '🥩',
  },
  {
    name: 'VineyardOS',
    slug: '/vineyard',
    tagline: 'Estate winery, tours & tastings',
    color: '#4a1942',
    colorEnd: '#c9a84c',
    category: 'Food & Drink',
    icon: '🍇',
  },
  {
    name: 'CateringOS',
    slug: '/catering',
    tagline: 'Event catering & private dining',
    color: '#14532d',
    colorEnd: '#059669',
    category: 'Food & Drink',
    icon: '🍴',
  },
  // ── Property ──────────────────────────────────────────────────────────────
  {
    name: 'PropertyOS',
    slug: '/property',
    tagline: 'Real estate agency with listings & valuations',
    color: '#1e3a5f',
    colorEnd: '#2563eb',
    category: 'Property',
    icon: '🏠',
  },
  {
    name: 'PropertyOS — Luxury',
    slug: '/property-luxury',
    tagline: 'Ultra-prime & luxury real estate',
    color: '#1a1200',
    colorEnd: '#c9a84c',
    category: 'Property',
    icon: '🏛',
  },
  {
    name: 'TravelOS',
    slug: '/hotel',
    tagline: 'Hotel, B&B, resort — full availability',
    color: '#0f172a',
    colorEnd: '#1e40af',
    category: 'Property',
    icon: '🏨',
  },
  {
    name: 'TravelOS — Boutique',
    slug: '/hotel-boutique',
    tagline: 'Boutique hotel & spa, Cotswolds warmth',
    color: '#2c1a0e',
    colorEnd: '#7c5e4a',
    category: 'Property',
    icon: '🌿',
  },
  {
    name: 'BnBOS',
    slug: '/bnb',
    tagline: 'Bed & breakfast, host-led experience',
    color: '#1e2832',
    colorEnd: '#4f6f8f',
    category: 'Property',
    icon: '🛏',
  },
  {
    name: 'CoworkOS',
    slug: '/coworking',
    tagline: 'Coworking space, desks & meeting rooms',
    color: '#1e1b4b',
    colorEnd: '#6d28d9',
    category: 'Property',
    icon: '🖥',
  },
  {
    name: 'MarinaOS',
    slug: '/marina',
    tagline: 'Marina & boat berth management',
    color: '#0c1a2e',
    colorEnd: '#0369a1',
    category: 'Property',
    icon: '⛵',
  },
  // ── Health & Beauty ───────────────────────────────────────────────────────
  {
    name: 'BeautyOS',
    slug: '/beauty',
    tagline: 'Hair salon, spa, barber — book online',
    color: '#6b0f2f',
    colorEnd: '#e11d48',
    category: 'Health & Beauty',
    icon: '💇',
  },
  {
    name: 'BeautyOS — Spa',
    slug: '/beauty-spa',
    tagline: 'Luxury day spa & wellness sanctuary',
    color: '#3d2b24',
    colorEnd: '#a07860',
    category: 'Health & Beauty',
    icon: '🌸',
  },
  {
    name: 'BarberOS',
    slug: '/barber',
    tagline: 'Premium barbershop with booking & loyalty',
    color: '#1c1c1c',
    colorEnd: '#b45309',
    category: 'Health & Beauty',
    icon: '✂',
  },
  {
    name: 'GymOS',
    slug: '/gym',
    tagline: 'Gym & fitness studio, class scheduling',
    color: '#18181b',
    colorEnd: '#3f3f46',
    category: 'Health & Beauty',
    icon: '🏋',
  },
  {
    name: 'GymOS — CrossFit',
    slug: '/gym-crossfit',
    tagline: 'CrossFit box, bold high-intensity brand',
    color: '#1a0000',
    colorEnd: '#cc2200',
    category: 'Health & Beauty',
    icon: '🔥',
  },
  {
    name: 'YogaOS',
    slug: '/yoga',
    tagline: 'Yoga studio, classes & retreats',
    color: '#2d1654',
    colorEnd: '#7c3aed',
    category: 'Health & Beauty',
    icon: '🧘',
  },
  {
    name: 'ClinicoOS',
    slug: '/clinic',
    tagline: 'Medical clinic with appointments & records',
    color: '#042f2e',
    colorEnd: '#0d9488',
    category: 'Health & Beauty',
    icon: '🏥',
  },
  {
    name: 'PraxisOS — Dental',
    slug: '/clinic-dental',
    tagline: 'Modern dental practice, conversion-focused',
    color: '#023e6e',
    colorEnd: '#0077b6',
    category: 'Health & Beauty',
    icon: '🦷',
  },
  {
    name: 'DermalyOS',
    slug: '/dermaly',
    tagline: 'Luxury dermatology clinic, Harley Street',
    color: '#3d1a22',
    colorEnd: '#b76e79',
    category: 'Health & Beauty',
    icon: '💉',
  },
  {
    name: 'DermalyOS — Skin',
    slug: '/dermaly-skin',
    tagline: 'Accessible skincare clinic, Shoreditch',
    color: '#2c1a12',
    colorEnd: '#9a6652',
    category: 'Health & Beauty',
    icon: '✨',
  },
  {
    name: 'PetOS',
    slug: '/vet',
    tagline: 'Veterinary clinic, pet care & grooming',
    color: '#052e16',
    colorEnd: '#16a34a',
    category: 'Health & Beauty',
    icon: '🐾',
  },
  {
    name: 'PetOS — Exotic',
    slug: '/vet-exotic',
    tagline: 'Exotic & small animal specialists',
    color: '#0a2318',
    colorEnd: '#2d6a4f',
    category: 'Health & Beauty',
    icon: '🦎',
  },
  {
    name: 'NutritionOS',
    slug: '/nutritionist',
    tagline: 'Nutritionist & dietitian consultations',
    color: '#14532d',
    colorEnd: '#4ade80',
    category: 'Health & Beauty',
    icon: '🥗',
  },
  {
    name: 'PhysioOS',
    slug: '/physiotherapy',
    tagline: 'Physiotherapy & sports rehab clinic',
    color: '#1e3a5f',
    colorEnd: '#38bdf8',
    category: 'Health & Beauty',
    icon: '🦾',
  },
  {
    name: 'ChiroOS',
    slug: '/chiropractor',
    tagline: 'Chiropractic clinic, spinal & joint care',
    color: '#1a2e4a',
    colorEnd: '#3b82f6',
    category: 'Health & Beauty',
    icon: '🦴',
  },
  {
    name: 'PsychoOS',
    slug: '/psychologist',
    tagline: 'Psychology & therapy, online & in-person',
    color: '#1e1b4b',
    colorEnd: '#818cf8',
    category: 'Health & Beauty',
    icon: '🧠',
  },
  {
    name: 'OpticOS',
    slug: '/optician',
    tagline: 'Optician & eyewear boutique',
    color: '#0c1a2e',
    colorEnd: '#06b6d4',
    category: 'Health & Beauty',
    icon: '👓',
  },
  {
    name: 'PharmaOS',
    slug: '/pharmacy',
    tagline: 'Independent pharmacy & health products',
    color: '#042f2e',
    colorEnd: '#0f766e',
    category: 'Health & Beauty',
    icon: '💊',
  },
  // ── Creative ──────────────────────────────────────────────────────────────
  {
    name: 'StudioOS',
    slug: '/studio',
    tagline: 'Creative studio, portfolio & project intake',
    color: '#111111',
    colorEnd: '#52525b',
    category: 'Creative',
    icon: '🎨',
  },
  {
    name: 'StudioOS — Architecture',
    slug: '/studio-architecture',
    tagline: 'Architecture & interior design, Clerkenwell',
    color: '#1c1917',
    colorEnd: '#b8a898',
    category: 'Creative',
    icon: '🏛',
  },
  {
    name: 'AgencyOS',
    slug: '/agency',
    tagline: 'Performance marketing & brand strategy',
    color: '#1e1b4b',
    colorEnd: '#6c63ff',
    category: 'Creative',
    icon: '📈',
  },
  {
    name: 'AgencyOS — Creative',
    slug: '/agency-creative',
    tagline: 'Brand & content agency, Fitzrovia',
    color: '#0a0a0a',
    colorEnd: '#6d28d9',
    category: 'Creative',
    icon: '✦',
  },
  {
    name: 'WeddingOS',
    slug: '/wedding',
    tagline: 'Wedding venue & planner, full showcase',
    color: '#4a0a28',
    colorEnd: '#be185d',
    category: 'Creative',
    icon: '💒',
  },
  {
    name: 'WeddingOS — Barn',
    slug: '/wedding-barn',
    tagline: 'Rustic barn venue, Hampshire countryside',
    color: '#2c1e12',
    colorEnd: '#92705a',
    category: 'Creative',
    icon: '🌾',
  },
  {
    name: 'EventOS',
    slug: '/event-planner',
    tagline: 'Event planner & production company',
    color: '#1a0a2e',
    colorEnd: '#9333ea',
    category: 'Creative',
    icon: '🎪',
  },
  {
    name: 'PhotographerOS',
    slug: '/photographer',
    tagline: 'Photography portfolio with booking & prints',
    color: '#1a1a2e',
    colorEnd: '#7c3aed',
    category: 'Creative',
    icon: '📷',
  },
  {
    name: 'TattooOS',
    slug: '/tattoo',
    tagline: 'Tattoo studio & piercing, book artists',
    color: '#0a0a0a',
    colorEnd: '#dc2626',
    category: 'Creative',
    icon: '🖋',
  },
  {
    name: 'DanceOS',
    slug: '/dance-school',
    tagline: 'Dance school — classes for all levels',
    color: '#1e0a2e',
    colorEnd: '#ec4899',
    category: 'Creative',
    icon: '💃',
  },
  {
    name: 'DJOS',
    slug: '/dj',
    tagline: 'DJ & music producer — bookings & mixes',
    color: '#0a0a14',
    colorEnd: '#6c63ff',
    category: 'Creative',
    icon: '🎧',
  },
  {
    name: 'InteriorOS',
    slug: '/interior-designer',
    tagline: 'Interior design studio & consultancy',
    color: '#1c1410',
    colorEnd: '#d4a96a',
    category: 'Creative',
    icon: '🛋',
  },
  {
    name: 'GalleryOS',
    slug: '/art-gallery',
    tagline: 'Contemporary art gallery & exhibitions',
    color: '#1a1a1a',
    colorEnd: '#e11d48',
    category: 'Creative',
    icon: '🖼',
  },
  // ── Professional Services ─────────────────────────────────────────────────
  {
    name: 'LegalOS',
    slug: '/law',
    tagline: 'Law firm, solicitors — trust & authority',
    color: '#0f0f2e',
    colorEnd: '#3730a3',
    category: 'Professional Services',
    icon: '⚖',
  },
  {
    name: 'LegalOS — IP',
    slug: '/law-ip',
    tagline: 'Intellectual property law firm, Holborn',
    color: '#0b1e2d',
    colorEnd: '#1b3a4b',
    category: 'Professional Services',
    icon: '™',
  },
  {
    name: 'AccountantOS',
    slug: '/accountant',
    tagline: 'Chartered accountants, Canary Wharf',
    color: '#0d1f3c',
    colorEnd: '#1e3a5f',
    category: 'Professional Services',
    icon: '📒',
  },
  {
    name: 'AccountantOS — Startup',
    slug: '/accountant-startup',
    tagline: 'Accountants for startups & freelancers',
    color: '#00374a',
    colorEnd: '#00b4d8',
    category: 'Professional Services',
    icon: '🚀',
  },
  {
    name: 'InsuranceOS',
    slug: '/insurance',
    tagline: 'Independent insurance broker & advisor',
    color: '#0f1e3c',
    colorEnd: '#2563eb',
    category: 'Professional Services',
    icon: '🛡',
  },
  {
    name: 'FinanceOS',
    slug: '/financial-advisor',
    tagline: 'Financial planning & wealth management',
    color: '#0a1628',
    colorEnd: '#1d4ed8',
    category: 'Professional Services',
    icon: '💰',
  },
  {
    name: 'ConsultingOS',
    slug: '/consulting',
    tagline: 'Management consulting & strategy',
    color: '#0f1e3c',
    colorEnd: '#3730a3',
    category: 'Professional Services',
    icon: '📊',
  },
  {
    name: 'RecruitOS',
    slug: '/recruitment',
    tagline: 'Recruitment agency & talent search',
    color: '#1a1028',
    colorEnd: '#7c3aed',
    category: 'Professional Services',
    icon: '👔',
  },
  {
    name: 'NotaryOS',
    slug: '/notary',
    tagline: 'Notary public & document services',
    color: '#1a1a2e',
    colorEnd: '#4338ca',
    category: 'Professional Services',
    icon: '📜',
  },
  {
    name: 'ITServOS',
    slug: '/it-services',
    tagline: 'IT support, cybersecurity & managed services',
    color: '#0a1420',
    colorEnd: '#0ea5e9',
    category: 'Professional Services',
    icon: '💻',
  },
  {
    name: 'PrintOS',
    slug: '/printing',
    tagline: 'Commercial printing & signage studio',
    color: '#0a1428',
    colorEnd: '#1d4ed8',
    category: 'Professional Services',
    icon: '🖨',
  },
  {
    name: 'MovingOS',
    slug: '/moving',
    tagline: 'Removal company & storage services',
    color: '#1c1408',
    colorEnd: '#d97706',
    category: 'Professional Services',
    icon: '🚚',
  },
  {
    name: 'TailorOS',
    slug: '/tailor',
    tagline: 'Bespoke tailoring & alterations',
    color: '#1a1210',
    colorEnd: '#92400e',
    category: 'Professional Services',
    icon: '🧵',
  },
  // ── Education ─────────────────────────────────────────────────────────────
  {
    name: 'EduOS',
    slug: '/school',
    tagline: 'School, academy & online courses',
    color: '#2e1065',
    colorEnd: '#7c3aed',
    category: 'Education',
    icon: '🎓',
  },
  {
    name: 'EduOS — Music',
    slug: '/school-music',
    tagline: 'Music academy, learn any instrument',
    color: '#12121f',
    colorEnd: '#6366f1',
    category: 'Education',
    icon: '🎸',
  },
  {
    name: 'DaycareOS',
    slug: '/daycare',
    tagline: 'Childcare & nursery, parent reassurance',
    color: '#0c2a00',
    colorEnd: '#65a30d',
    category: 'Education',
    icon: '🧒',
  },
  {
    name: 'TutoringOS',
    slug: '/tutoring',
    tagline: 'Private tutoring & exam preparation',
    color: '#1e1b4b',
    colorEnd: '#a855f7',
    category: 'Education',
    icon: '📐',
  },
  {
    name: 'DrivingOS',
    slug: '/driving-school',
    tagline: 'Driving school — theory & practical lessons',
    color: '#1a1800',
    colorEnd: '#ca8a04',
    category: 'Education',
    icon: '🚘',
  },
  {
    name: 'SurfOS',
    slug: '/surf-school',
    tagline: 'Surf school & ocean sports academy',
    color: '#0c2240',
    colorEnd: '#0ea5e9',
    category: 'Education',
    icon: '🏄',
  },
  // ── Automotive ────────────────────────────────────────────────────────────
  {
    name: 'AutoOS',
    slug: '/auto',
    tagline: 'Car dealership, garage & servicing',
    color: '#111111',
    colorEnd: '#3f3f46',
    category: 'Automotive',
    icon: '🚗',
  },
  {
    name: 'MotorOS — Dealership',
    slug: '/dealership',
    tagline: 'Certified pre-owned dealership, East London',
    color: '#1a0000',
    colorEnd: '#e63946',
    category: 'Automotive',
    icon: '🚘',
  },
  {
    name: 'CarRentalOS',
    slug: '/car-rental',
    tagline: 'Car rental & fleet management',
    color: '#0c1620',
    colorEnd: '#0369a1',
    category: 'Automotive',
    icon: '🔑',
  },
  {
    name: 'CarWashOS',
    slug: '/car-wash',
    tagline: 'Premium car wash & detailing studio',
    color: '#0a1428',
    colorEnd: '#2563eb',
    category: 'Automotive',
    icon: '✨',
  },
  {
    name: 'BikeOS',
    slug: '/bike-shop',
    tagline: 'Bicycle shop, repair & custom builds',
    color: '#1a2810',
    colorEnd: '#65a30d',
    category: 'Automotive',
    icon: '🚲',
  },
  // ── Entertainment ─────────────────────────────────────────────────────────
  {
    name: 'CinemaOS',
    slug: '/cinema',
    tagline: 'Independent cinema, showtimes & events',
    color: '#0a0a14',
    colorEnd: '#dc2626',
    category: 'Entertainment',
    icon: '🎬',
  },
  {
    name: 'EscapeOS',
    slug: '/escape-room',
    tagline: 'Escape room experience & team bookings',
    color: '#0a0a0a',
    colorEnd: '#7c3aed',
    category: 'Entertainment',
    icon: '🔐',
  },
  {
    name: 'BowlingOS',
    slug: '/bowling',
    tagline: 'Bowling alley, lanes & party packages',
    color: '#1a0820',
    colorEnd: '#9333ea',
    category: 'Entertainment',
    icon: '🎳',
  },
  {
    name: 'CampingOS',
    slug: '/camping',
    tagline: 'Campsite & glamping — pitch booking',
    color: '#0a2010',
    colorEnd: '#16a34a',
    category: 'Entertainment',
    icon: '⛺',
  },
  {
    name: 'TravelAgencyOS',
    slug: '/travel-agency',
    tagline: 'Travel agency — bespoke & group trips',
    color: '#0a1428',
    colorEnd: '#0ea5e9',
    category: 'Travel',
    icon: '✈',
  },
  {
    name: 'TourOS',
    slug: '/tour-guide',
    tagline: 'Tour guide & local experiences',
    color: '#1a2810',
    colorEnd: '#84cc16',
    category: 'Travel',
    icon: '🗺',
  },
  // ── Home Services ─────────────────────────────────────────────────────────
  {
    name: 'CleanOS',
    slug: '/clean',
    tagline: 'Luxury home cleaning, Knightsbridge',
    color: '#0c2233',
    colorEnd: '#1a5276',
    category: 'Home Services',
    icon: '🧹',
  },
  {
    name: 'CleanOS — Commercial',
    slug: '/clean-commercial',
    tagline: 'B2B contract cleaning, City of London',
    color: '#050d14',
    colorEnd: '#1e4976',
    category: 'Home Services',
    icon: '🏢',
  },
  {
    name: 'PlumberOS',
    slug: '/plumber',
    tagline: 'Emergency plumbing & heating, local trust',
    color: '#0a1628',
    colorEnd: '#2563eb',
    category: 'Home Services',
    icon: '🔧',
  },
  {
    name: 'ElectricOS',
    slug: '/electrician',
    tagline: 'Electrician & electrical services',
    color: '#14100a',
    colorEnd: '#eab308',
    category: 'Home Services',
    icon: '⚡',
  },
  {
    name: 'PainterOS',
    slug: '/painter',
    tagline: 'Painters & decorators, residential & commercial',
    color: '#1a1228',
    colorEnd: '#a855f7',
    category: 'Home Services',
    icon: '🎨',
  },
  {
    name: 'RoofingOS',
    slug: '/roofing',
    tagline: 'Roofing contractor, repair & replacement',
    color: '#1a1010',
    colorEnd: '#dc2626',
    category: 'Home Services',
    icon: '🏠',
  },
  {
    name: 'LandscapeOS',
    slug: '/landscaping',
    tagline: 'Landscaping, garden design & maintenance',
    color: '#0a1e08',
    colorEnd: '#16a34a',
    category: 'Home Services',
    icon: '🌳',
  },
  {
    name: 'PoolOS',
    slug: '/pool-service',
    tagline: 'Swimming pool installation & maintenance',
    color: '#0a1e38',
    colorEnd: '#0ea5e9',
    category: 'Home Services',
    icon: '🏊',
  },
  {
    name: 'PestOS',
    slug: '/pest-control',
    tagline: 'Pest control & extermination services',
    color: '#0a1a0a',
    colorEnd: '#4d7c0f',
    category: 'Home Services',
    icon: '🐛',
  },
  {
    name: 'LaundryOS',
    slug: '/laundry',
    tagline: 'Laundry & dry cleaning collection',
    color: '#0c1e38',
    colorEnd: '#0369a1',
    category: 'Home Services',
    icon: '👕',
  },
  // ── Retail ────────────────────────────────────────────────────────────────
  {
    name: 'ShopOS',
    slug: '/shop',
    tagline: 'Luxury fashion & lifestyle boutique',
    color: '#1c1410',
    colorEnd: '#c8956c',
    category: 'Retail',
    icon: '🛍',
  },
  {
    name: 'ShopOS — Local',
    slug: '/shop-local',
    tagline: 'Artisan grocery & deli, conversion-first',
    color: '#0f2008',
    colorEnd: '#4ade80',
    category: 'Retail',
    icon: '🥦',
  },
  {
    name: 'BookOS',
    slug: '/bookstore',
    tagline: 'Independent bookshop & events programme',
    color: '#1a1410',
    colorEnd: '#a16207',
    category: 'Retail',
    icon: '📚',
  },
  {
    name: 'PetShopOS',
    slug: '/pet-shop',
    tagline: 'Pet shop, food & accessories',
    color: '#0a2010',
    colorEnd: '#16a34a',
    category: 'Retail',
    icon: '🐶',
  },
  {
    name: 'JewelOS',
    slug: '/jeweler',
    tagline: 'Jeweller — bespoke & luxury pieces',
    color: '#1a1200',
    colorEnd: '#d4af37',
    category: 'Retail',
    icon: '💎',
  },
  {
    name: 'FloristOS',
    slug: '/florist',
    tagline: 'Florist — bouquets, events & subscriptions',
    color: '#1a0a28',
    colorEnd: '#ec4899',
    category: 'Retail',
    icon: '💐',
  },
  // ── Community ─────────────────────────────────────────────────────────────
  {
    name: 'NonprofitOS',
    slug: '/nonprofit',
    tagline: 'Charity & nonprofit — donate & volunteer',
    color: '#b45309',
    colorEnd: '#dc2626',
    category: 'Community',
    icon: '❤',
  },
  {
    name: 'ChurchOS',
    slug: '/church',
    tagline: 'Community church — services & ministries',
    color: '#4a1942',
    colorEnd: '#b5942a',
    category: 'Community',
    icon: '✝',
  },
]

const CATEGORIES: Category[] = [
  'All',
  'Food & Drink',
  'Property',
  'Health & Beauty',
  'Creative',
  'Professional Services',
  'Education',
  'Automotive',
  'Entertainment',
  'Home Services',
  'Travel',
  'Retail',
  'Community',
]

const CATEGORY_COLORS: Record<Category, string> = {
  All: 'from-violet-600 to-indigo-600',
  'Food & Drink': 'from-orange-500 to-red-500',
  Property: 'from-blue-600 to-cyan-500',
  'Health & Beauty': 'from-pink-500 to-rose-400',
  Creative: 'from-purple-600 to-fuchsia-500',
  'Professional Services': 'from-slate-600 to-blue-700',
  Education: 'from-violet-600 to-purple-500',
  Automotive: 'from-zinc-600 to-slate-500',
  Entertainment: 'from-red-600 to-purple-600',
  'Home Services': 'from-teal-600 to-blue-500',
  Travel: 'from-sky-500 to-indigo-500',
  Retail: 'from-amber-500 to-orange-500',
  Community: 'from-rose-500 to-amber-500',
}

export default function Home() {
  const [active, setActive] = useState<Category>('All')

  const filtered =
    active === 'All' ? verticals : verticals.filter((v) => v.category === active)

  return (
    <div className="min-h-screen" style={{ background: '#080c14' }}>
      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
        style={{ background: 'rgba(8,12,20,0.8)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-bold"
            style={{ background: 'linear-gradient(135deg,#6c63ff,#a855f7)' }}>S</div>
          <span className="text-white font-semibold tracking-tight">SCALA Sites</span>
        </div>
        <div className="flex items-center gap-3">
          <a href="https://get-scala.com" target="_blank" rel="noopener noreferrer"
            className="text-sm font-medium transition-colors"
            style={{ color: 'rgba(255,255,255,0.6)' }}>
            SCALA AI OS
          </a>
          <a
            href="https://github.com/Alessandro114/scala-sites"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white transition-all hover:opacity-90"
            style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}
          >
            <svg viewBox="0 0 16 16" className="w-4 h-4 fill-white" aria-hidden="true">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
            GitHub
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-24 px-6 text-center overflow-hidden">
        {/* gradient mesh background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-25"
            style={{ background: 'radial-gradient(ellipse at center, #6c63ff 0%, transparent 70%)', filter: 'blur(80px)' }} />
          <div className="absolute top-20 left-1/4 w-[400px] h-[400px] rounded-full opacity-15"
            style={{ background: 'radial-gradient(ellipse at center, #a855f7 0%, transparent 70%)', filter: 'blur(60px)' }} />
          <div className="absolute top-32 right-1/4 w-[300px] h-[300px] rounded-full opacity-15"
            style={{ background: 'radial-gradient(ellipse at center, #06b6d4 0%, transparent 70%)', filter: 'blur(60px)' }} />
          {/* subtle grid overlay */}
          <div className="absolute inset-0 opacity-5"
            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.15) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 tracking-wide uppercase"
            style={{ background: 'rgba(108,99,255,0.15)', border: '1px solid rgba(108,99,255,0.35)', color: '#a5b4fc' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            Open Source · MIT License
          </div>

          <h1 className="text-5xl sm:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6"
            style={{ letterSpacing: '-0.03em' }}>
            <span className="block">100 Industry Templates.</span>
            <span className="block" style={{ background: 'linear-gradient(135deg,#6c63ff 0%,#a855f7 40%,#06b6d4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Zero Cost.
            </span>
          </h1>

          <p className="text-lg sm:text-xl mb-10 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>
            Production-ready websites for restaurants, hotels, clinics, gyms, law firms and more.
            Built with Next.js + TypeScript. Booking, WhatsApp &amp; AI — all wired in.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {['Next.js 15', 'TypeScript', 'Tailwind CSS', '100 Verticals', 'MIT License'].map((tag) => (
              <span key={tag} className="px-3 py-1.5 text-xs font-medium rounded-full"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)' }}>
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://github.com/Alessandro114/scala-sites" target="_blank" rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg,#6c63ff,#a855f7)' }}>
              View on GitHub
            </a>
            <a href="https://get-scala.com" target="_blank" rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl text-sm font-semibold transition-all hover:scale-105"
              style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.85)' }}>
              SCALA AI OS
            </a>
          </div>
        </div>
      </section>

      {/* ── FILTER TABS ── */}
      <section className="sticky top-16 z-40 px-4 py-3" style={{ background: 'rgba(8,12,20,0.85)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-6xl mx-auto overflow-x-auto">
          <div className="flex gap-2 min-w-max pb-1">
            {CATEGORIES.map((cat) => {
              const isActive = active === cat
              // Extract the two Tailwind color names for inline gradient
              const gradParts = CATEGORY_COLORS[cat].replace('from-', '').replace(' to-', ' ').split(' ')
              // We use inline style for the active state using a simple mapping
              const gradMap: Record<string, string> = {
                'violet-600': '#7c3aed', 'indigo-600': '#4f46e5',
                'orange-500': '#f97316', 'red-500': '#ef4444',
                'blue-600': '#2563eb', 'cyan-500': '#06b6d4',
                'pink-500': '#ec4899', 'rose-400': '#fb7185',
                'purple-600': '#9333ea', 'fuchsia-500': '#d946ef',
                'slate-600': '#475569', 'blue-700': '#1d4ed8',
                'purple-500': '#a855f7',
                'zinc-600': '#52525b', 'slate-500': '#64748b',
                'red-600': '#dc2626',
                'teal-600': '#0d9488', 'blue-500': '#3b82f6',
                'sky-500': '#0ea5e9', 'indigo-500': '#6366f1',
                'amber-500': '#f59e0b', 'amber-500-2': '#f59e0b',
                'rose-500': '#f43f5e',
              }
              const fromColor = gradMap[gradParts[0]] || '#6c63ff'
              const toColor = gradMap[gradParts[1]] || '#a855f7'

              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    isActive ? 'text-white scale-105' : 'hover:opacity-80'
                  }`}
                  style={
                    isActive
                      ? { background: `linear-gradient(135deg, ${fromColor}, ${toColor})`, boxShadow: '0 2px 12px rgba(108,99,255,0.3)' }
                      : { background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)' }
                  }
                >
                  {cat}
                  <span className="ml-1.5 opacity-60">
                    {cat === 'All' ? verticals.length : verticals.filter((v) => v.category === cat).length}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── GRID ── */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((v) => (
            <Link
              key={v.slug}
              href={v.slug}
              className="group relative rounded-2xl overflow-hidden transition-all hover:scale-[1.02] hover:shadow-2xl"
              style={{ border: '1px solid rgba(255,255,255,0.08)', background: '#0d1117' }}
            >
              {/* color preview band */}
              <div className="h-28 relative overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${v.color} 0%, ${v.colorEnd} 100%)` }}>
                {/* subtle noise/texture overlay */}
                <div className="absolute inset-0 opacity-20"
                  style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.3) 0%, transparent 50%)' }} />
                {/* icon */}
                <div className="absolute bottom-3 left-4 text-4xl" style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.4))' }}>
                  {v.icon}
                </div>
                {/* category pill */}
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide"
                  style={{ background: 'rgba(0,0,0,0.45)', color: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(4px)' }}>
                  {v.category}
                </div>
                {/* arrow on hover */}
                <div className="absolute top-3 left-3 w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-1 group-hover:translate-y-0"
                  style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}>
                  <span className="text-white text-xs">→</span>
                </div>
              </div>

              {/* card body */}
              <div className="p-4">
                <h3 className="text-sm font-bold text-white mb-1 leading-tight group-hover:text-violet-300 transition-colors">
                  {v.name}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  {v.tagline}
                </p>
                <div className="mt-3 flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: v.colorEnd }} />
                  <span className="text-[10px] font-medium" style={{ color: 'rgba(255,255,255,0.3)' }}>
                    View demo
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24" style={{ color: 'rgba(255,255,255,0.3)' }}>
            No templates in this category yet.
          </div>
        )}
      </main>

      {/* ── PLATFORM BANNER ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div className="relative overflow-hidden rounded-3xl p-10 text-center"
          style={{ background: 'linear-gradient(135deg, #0d0c1f 0%, #1a1040 50%, #0a1628 100%)', border: '1px solid rgba(108,99,255,0.25)' }}>
          <div className="absolute inset-0 opacity-30 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 50% 0%, #6c63ff 0%, transparent 60%)', filter: 'blur(40px)' }} />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: '#a5b4fc' }}>Powered by SCALA AI OS</p>
            <h2 className="text-3xl font-bold text-white mb-4">
              These templates are just the frontend.
            </h2>
            <p className="text-base max-w-2xl mx-auto mb-8" style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>
              Connect SCALA behind any template to get live booking, WhatsApp AI (SARA),
              real-time availability, CRM, multi-location dashboards, and 100+ integrations.
              No-code, same day.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://get-scala.com" target="_blank" rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:scale-105"
                style={{ background: 'linear-gradient(135deg,#6c63ff,#a855f7)' }}>
                Explore SCALA AI OS
              </a>
              <a href="https://github.com/Alessandro114/scala-sites" target="_blank" rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl text-sm font-semibold transition-all hover:scale-105"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.85)' }}>
                Star on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t px-6 py-8" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{ color: 'rgba(255,255,255,0.3)' }}>
          <div className="flex items-center gap-4">
            <span>SCALA Sites</span>
            <span style={{ color: 'rgba(255,255,255,0.12)' }}>·</span>
            <a href="https://github.com/Alessandro114/scala-sites" target="_blank" rel="noopener noreferrer"
              className="hover:text-white transition-colors">GitHub</a>
            <span style={{ color: 'rgba(255,255,255,0.12)' }}>·</span>
            <span>MIT Licensed</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span>Built with</span>
            <span className="font-medium" style={{ color: 'rgba(255,255,255,0.5)' }}>Next.js + TypeScript</span>
            <span style={{ color: 'rgba(255,255,255,0.12)' }}>·</span>
            <span>Powered by</span>
            <a href="https://get-scala.com" target="_blank" rel="noopener noreferrer"
              className="font-medium hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}>
              SCALA AI OS
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
