'use client'

import { createCustomTheme, themeToStyleObject } from '@scala-sites/themes'
import { VideoHero } from '@scala-sites/core/components/video-hero'
import { ReviewCarousel } from '@scala-sites/core/components/review-carousel'
import { WhatsAppCTA } from '@scala-sites/core/components/whatsapp-cta'
import { Footer } from '@scala-sites/core/components/footer'
import { FAQAccordion } from '@scala-sites/core/components/faq-accordion'
import { VenueShowcase } from '@scala-sites/weddingos/components/venue-showcase'
import { WeddingPlanner } from '@scala-sites/weddingos/components/wedding-planner'
import { VendorDirectory } from '@scala-sites/weddingos/components/vendor-directory'

const venues = [
  {
    id: '1',
    name: 'The Grand Ballroom',
    photo: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800',
    capacityMin: 100,
    capacityMax: 300,
    styleTags: ['Indoor', 'Classic', 'Modern'],
    priceFrom: 4500,
    currency: 'GBP',
    description: 'Our crown jewel — a sweeping 5,000 sq ft ballroom with original Victorian cornicing, two crystal chandeliers, and French doors opening onto the formal gardens. Fully air-conditioned with a dedicated bridal suite adjacent.',
    amenities: [
      'Crystal chandeliers',
      'Dedicated bridal suite',
      'Built-in stage',
      'Commercial kitchen access',
      'AV system & Wi-Fi',
      'Climate control',
      'Private bar',
      'On-site parking',
    ],
    availabilityUrl: '#availability',
  },
  {
    id: '2',
    name: 'Garden Terrace',
    photo: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800',
    capacityMin: 50,
    capacityMax: 120,
    styleTags: ['Outdoor', 'Romantic', 'Rustic'],
    priceFrom: 2200,
    currency: 'GBP',
    description: 'A sun-drenched walled garden terrace surrounded by climbing roses and manicured hedgerows. Perfect for summer ceremonies and al fresco dining. Heated pergola provides shelter for cooler months.',
    amenities: [
      'Heated pergola',
      'Fairy light canopy',
      'Natural rose archway',
      'Garden furniture',
      'Outdoor sound system',
      'Fire pit area',
      'Accessible pathways',
      'Marquee option',
    ],
    availabilityUrl: '#availability',
  },
  {
    id: '3',
    name: 'Ivory Pavilion',
    photo: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800',
    capacityMin: 30,
    capacityMax: 80,
    styleTags: ['Indoor', 'Rustic', 'Bohemian'],
    priceFrom: 1600,
    currency: 'GBP',
    description: 'A converted Georgian orangery with exposed stone walls, original timber beams, and floor-to-ceiling arched windows overlooking the manor grounds. Intimate and enchanting — beloved by bohemian and rustic couples.',
    amenities: [
      'Exposed stone walls',
      'Timber beam ceiling',
      'Arched windows',
      'Private garden access',
      'Projector & screen',
      'Vintage furniture hire',
      'Candle licence',
      'Dedicated coordinator',
    ],
    availabilityUrl: '#availability',
  },
  {
    id: '4',
    name: 'The Lake Lawn',
    photo: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?w=800',
    capacityMin: 60,
    capacityMax: 200,
    styleTags: ['Outdoor', 'Romantic', 'Classic'],
    priceFrom: 3000,
    currency: 'GBP',
    description: 'A breathtaking lakeside ceremony lawn with a floating jetty, weeping willows and panoramic Surrey countryside views. Arrive by vintage rowing boat for a truly magical entrance. Evening lighting transforms the space into something otherworldly.',
    amenities: [
      'Lakeside floating jetty',
      'Rowing boat arrival',
      'Festoon lighting',
      'Weeping willow backdrop',
      'Waterproof sound system',
      'Lakeside fire pits',
      'Blanket & lantern hire',
      'Sunset photography access',
    ],
    availabilityUrl: '#availability',
  },
]

const vendors = [
  {
    id: '1',
    name: 'Lumière Photography',
    photo: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600',
    category: 'Photography' as const,
    rating: 4.9,
    reviewCount: 128,
    priceRange: 3 as const,
    description: 'Award-winning husband-and-wife duo capturing timeless wedding stories with a photojournalistic eye. Featured in Vogue Weddings and Brides Magazine.',
    portfolioUrl: '#portfolio',
    contactUrl: '#contact',
  },
  {
    id: '2',
    name: 'Harvest Fine Catering',
    photo: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600',
    category: 'Catering' as const,
    rating: 4.8,
    reviewCount: 94,
    priceRange: 3 as const,
    description: 'Farm-to-table wedding catering with a seasonal British menu. Bespoke tasting sessions, full bar service, and an experienced front-of-house team of 30.',
    portfolioUrl: '#portfolio',
    contactUrl: '#contact',
  },
  {
    id: '3',
    name: 'Bloom & Co.',
    photo: 'https://images.unsplash.com/photo-1490750967868-88df5691cc49?w=600',
    category: 'Florist' as const,
    rating: 5.0,
    reviewCount: 76,
    priceRange: 2 as const,
    description: 'Surrey\'s most celebrated wedding florist specialising in lush, romantic arrangements. From hand-tied bouquets to dramatic tablescapes and ceremony arches.',
    portfolioUrl: '#portfolio',
    contactUrl: '#contact',
  },
  {
    id: '4',
    name: 'DJ Marcello Events',
    photo: '',
    category: 'DJ' as const,
    rating: 4.7,
    reviewCount: 112,
    priceRange: 2 as const,
    description: 'International DJ with 15+ years in weddings across Europe and the Middle East. Reads the room perfectly — from ceremony strings to dancefloor bangers at midnight.',
    portfolioUrl: '#portfolio',
    contactUrl: '#contact',
  },
  {
    id: '5',
    name: 'Sugar & Grace Cakes',
    photo: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=600',
    category: 'Cake' as const,
    rating: 4.9,
    reviewCount: 58,
    priceRange: 2 as const,
    description: 'Bespoke wedding cakes made entirely from scratch using French patisserie techniques. Every tier is a work of art — and tastes even better than it looks.',
    portfolioUrl: '#portfolio',
    contactUrl: '#contact',
  },
  {
    id: '6',
    name: 'Cinematic Moments',
    photo: '',
    category: 'Videography' as const,
    rating: 4.8,
    reviewCount: 43,
    priceRange: 3 as const,
    description: 'Cinematic wedding films that feel like a movie trailer for your love story. 4K drone footage, same-day edit highlights, and a feature-length film delivered within 8 weeks.',
    portfolioUrl: '#portfolio',
    contactUrl: '#contact',
  },
]

const reviews = [
  {
    id: '1',
    author: 'Sophie & James Harrington',
    rating: 5,
    text: 'Ashworth Manor exceeded every expectation. The Grand Ballroom was ethereal at night with the chandeliers lit, and our coordinator Elena handled every detail flawlessly. Our guests still talk about it two years on.',
    date: '2026-04-12',
    source: 'Google',
    verified: true,
  },
  {
    id: '2',
    author: 'Priya & Luca De Santis',
    rating: 5,
    text: 'We chose the Garden Terrace for a June ceremony and it was absolutely magical. The rose archway was in full bloom. The catering team from Harvest Fine Catering delivered the most beautiful food. 10/10.',
    date: '2026-06-28',
    source: 'Google',
    verified: true,
  },
  {
    id: '3',
    author: 'Amara & Tobias Schmidt',
    rating: 5,
    text: 'The Lake Lawn at sunset — there are no words. We arrived by rowing boat, the light was golden, and our photographer captured it perfectly. Ashworth is a hidden gem that delivers five-star service.',
    date: '2026-07-15',
    source: 'Hitched',
    verified: true,
  },
  {
    id: '4',
    author: 'Charlotte & Finn O\'Brien',
    rating: 5,
    text: 'The Ivory Pavilion was our dream — rustic, romantic, and uniquely ours. The team helped us source local suppliers and the whole experience felt personal, not corporate. Best decision we ever made.',
    date: '2026-05-03',
    source: 'Google',
    verified: true,
  },
]

const faqs = [
  {
    question: 'How far in advance should we book Ashworth Manor?',
    answer: 'We recommend booking at least 12–18 months in advance, especially for Saturday dates between May and September. However, we do occasionally have cancellations — contact us for last-minute availability.',
  },
  {
    question: 'Can we bring our own caterers or must we use your preferred list?',
    answer: 'All catering at Ashworth Manor must be provided by our approved catering partner, Harvest Fine Catering, to ensure the highest quality and compliance with our kitchen facilities. We offer fully bespoke menus with a complimentary tasting session for all bookings.',
  },
  {
    question: 'Is exclusive use of the manor available?',
    answer: 'Yes — exclusive use packages are available that include the manor house, all four venue spaces, the grounds, and private accommodation for the wedding party. Exclusive use is typically available from Friday midday to Sunday at noon. Please enquire for pricing.',
  },
  {
    question: 'Do you accommodate international and multicultural weddings?',
    answer: 'Absolutely. We have hosted weddings with Hindu, Jewish, Muslim, and civil ceremonies. Our team has experience coordinating with officiants of all faiths and we can advise on suppliers who specialise in multicultural celebrations.',
  },
  {
    question: 'What is your payment and cancellation policy?',
    answer: 'A 25% deposit secures your date, with the balance due 90 days before your wedding. In the event of cancellation, deposits are non-refundable but transferable to a new date within 18 months, subject to availability. We strongly recommend wedding insurance.',
  },
]

const siteConfig = {
  name: 'Ashworth Manor',
  tagline: 'A historic Surrey estate for your perfect day',
  phone: '+44 1372 555 890',
  email: 'weddings@ashworthmanor.co.uk',
  address: 'Ashworth Lane, Surrey KT11 3QW',
  social: { instagram: '#', facebook: '#' },
}

export default function WeddingDemo() {
  return (
    <div style={themeToStyleObject(createCustomTheme('classic', {
      primary: '#8b2252',
      primaryHover: '#6d1a40',
      accent: '#c9a84c',
      background: '#f5e6e0',
      surface: '#fdf6f3',
      text: '#2d1a22',
      secondary: '#f0d8d0',
      textMuted: '#8a6070',
      border: '#ddb8a8',
    })) as React.CSSProperties}>
      <VideoHero
        title="Where Love Stories Begin"
        subtitle="Ashworth Manor — a Grade II listed Surrey estate offering four breathtaking spaces for intimate celebrations to grand receptions of 300 guests"
        posterImage="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1600"
        ctaPrimary={{ label: 'Explore Our Spaces', href: '#venues' }}
        ctaSecondary={{ label: 'Start Planning', href: '#planner' }}
      />

      <div id="venues">
        <VenueShowcase venues={venues} />
      </div>

      <div id="planner">
        <WeddingPlanner />
      </div>

      <VendorDirectory vendors={vendors} currencySymbol="£" />

      <ReviewCarousel reviews={reviews} locale="en" />

      <FAQAccordion items={faqs} locale="en" />

      <Footer config={siteConfig} locale="en" />

      <WhatsAppCTA
        phoneNumber="441372555890"
        message="Hello, I'd like to enquire about a wedding at Ashworth Manor"
      />
    </div>
  )
}
