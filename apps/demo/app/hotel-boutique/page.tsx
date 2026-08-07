'use client'

import { createCustomTheme, themeToStyleObject } from '@scala-sites/themes'
import { Hero } from '@scala-sites/core/components/hero'
import { ReviewCarousel } from '@scala-sites/core/components/review-carousel'
import { WhatsAppCTA } from '@scala-sites/core/components/whatsapp-cta'
import { Footer } from '@scala-sites/core/components/footer'
import { FAQAccordion } from '@scala-sites/core/components/faq-accordion'
import { RoomShowcase } from '@scala-sites/travelos/components/room-showcase'
import { ExperienceGrid } from '@scala-sites/travelos/components/experience-grid'
import { AvailabilityChecker } from '@scala-sites/travelos/components/availability-checker'

const rooms = [
  {
    id: '1',
    name: 'Garden Snug',
    type: 'Deluxe',
    description:
      'Our cosiest retreat — a king room dressed in hand-block-printed linen, exposed stone walls and a cast-iron fireplace. French doors open directly onto the walled cottage garden, where you can take breakfast among the lavender.',
    price: 195,
    currency: 'GBP',
    maxGuests: 2,
    amenities: ['WiFi', 'Fireplace', 'Garden', 'Bathtub', 'Safe', 'TV'],
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900',
    available: true,
  },
  {
    id: '2',
    name: 'Meadow View Double',
    type: 'Deluxe',
    description:
      'Perched above the apple orchard, this airy room captures the rolling Cotswold meadows at dawn. Handmade oak furniture, a deep freestanding soaking tub and a window seat piled high with linen cushions.',
    price: 235,
    currency: 'GBP',
    maxGuests: 2,
    amenities: ['WiFi', 'View', 'Bathtub', 'Safe', 'AirCon', 'TV', 'Minibar'],
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=900',
    available: true,
  },
  {
    id: '3',
    name: 'Hayloft Suite',
    type: 'Suite',
    description:
      'Converted from the original Victorian hayloft, this suite features vaulted timber ceilings, a mezzanine reading loft and a walk-in rainfall shower carved from local Cotswold stone. Champagne awaits on arrival.',
    price: 385,
    currency: 'GBP',
    maxGuests: 2,
    amenities: ['WiFi', 'Minibar', 'Safe', 'Shower', 'Fireplace', 'AirCon', 'TV', 'Concierge'],
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=900',
    available: true,
  },
  {
    id: '4',
    name: 'Orchard Cottage',
    type: 'Suite',
    description:
      'A self-contained stone cottage set apart from the main house. Two rooms, a private terrace with a hot tub, wood-burning stove and a kitchen stocked with local produce. Perfect for a countryside escape that is entirely your own.',
    price: 595,
    currency: 'GBP',
    maxGuests: 4,
    amenities: ['WiFi', 'Minibar', 'Safe', 'Bathtub', 'Terrace', 'Fireplace', 'Pool', 'AirCon', 'TV'],
    image: 'https://images.unsplash.com/photo-1464146072230-91cabc968266?w=900',
    available: true,
  },
  {
    id: '5',
    name: 'The Ivy House Suite',
    type: 'Penthouse',
    description:
      'Our grandest accommodation — the entire top floor of the original 17th-century manor. A four-poster bed, roll-top copper bath, private sitting room with inglenook fireplace and a terrace overlooking the Cotswold Hills. Reserved for those who want everything.',
    price: 895,
    currency: 'GBP',
    maxGuests: 2,
    amenities: ['WiFi', 'Minibar', 'Safe', 'Bathtub', 'Terrace', 'Fireplace', 'Butler', 'Concierge', 'View'],
    image: 'https://images.unsplash.com/photo-1551882547-ff40c4a49f52?w=900',
    available: false,
  },
]

const experiences = [
  {
    id: '1',
    title: 'Cotswold Foraging Walk',
    description:
      'Join our resident forager for a two-hour morning walk through ancient woodland and hedgerows. Discover wild garlic, elderflower, chanterelles and sloe berries — then return to the kitchen to turn your finds into a seasonal lunch.',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800',
    duration: '2 hrs',
    price: 65,
    currency: 'GBP',
    category: 'Outdoors',
    rating: 4.9,
    reviewCount: 87,
  },
  {
    id: '2',
    title: 'Ivy House Spa Ritual',
    description:
      'Our signature 90-minute treatment begins with a warm meadowsweet foot soak, progresses through a hot stone back massage and concludes with a locally blended botanical facial using Cotswold honey and rosehip oil.',
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800',
    duration: '90 min',
    price: 145,
    currency: 'GBP',
    category: 'Spa',
    rating: 5.0,
    reviewCount: 62,
  },
  {
    id: '3',
    title: 'Private Cream Tea for Two',
    description:
      'Served in the walled garden (or fireside in winter) — freshly baked scones, strawberry preserves from our kitchen garden, Cornish clotted cream and a pot of single-estate Darjeeling. Pure Cotswolds.',
    image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800',
    duration: '1 hr',
    price: 48,
    currency: 'GBP',
    category: 'Dining',
    rating: 4.9,
    reviewCount: 134,
  },
  {
    id: '4',
    title: 'Horseback Ride Through the Valley',
    description:
      'Saddle up with our expert guides for a two-hour trail ride through protected Cotswold countryside. Suitable for all abilities. Passes ancient stone walls, bluebells in season and sweeping views from the ridge.',
    image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800',
    duration: '2 hrs',
    price: 110,
    currency: 'GBP',
    category: 'Outdoors',
    rating: 4.8,
    reviewCount: 45,
  },
  {
    id: '5',
    title: 'Farmhouse Dinner with the Chef',
    description:
      'Head Chef Rosie Alderton opens her kitchen to a table of eight for a five-course seasonal dinner. Every dish is built around what the kitchen garden and local farms provide that week. Wine pairing from our English vineyard selection included.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
    duration: '3 hrs',
    price: 185,
    currency: 'GBP',
    category: 'Dining',
    rating: 5.0,
    reviewCount: 29,
  },
  {
    id: '6',
    title: 'Watercolour Painting Morning',
    description:
      'Capture the Cotswold light with a local artist in residence. Small groups of four, all materials provided. Start with sketching the manor facade, then paint the meadow from the garden folly. Suitable for complete beginners.',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800',
    duration: '3 hrs',
    price: 85,
    currency: 'GBP',
    category: 'Arts',
    rating: 4.7,
    reviewCount: 51,
  },
]

const reviews = [
  {
    id: '1',
    author: 'Gemma & Oliver R.',
    rating: 5,
    text: "The Ivy House is everything we hoped a Cotswolds escape would be. The Hayloft Suite was magical — the vaulted ceiling, the stone shower, the silence. Breakfast was the best we have had anywhere in England. We will absolutely return.",
    date: '2026-07-24',
    source: 'Google',
    verified: true,
  },
  {
    id: '2',
    author: 'Thomas B.',
    rating: 5,
    text: "I travel constantly for work and rarely feel truly rested. The Ivy House changed that. Two nights in the Orchard Cottage — private, completely quiet, surrounded by apple trees. The foraging walk was the highlight. Rosie's dinner was outstanding.",
    date: '2026-07-11',
    source: 'TripAdvisor',
    verified: true,
  },
  {
    id: '3',
    author: 'Isabelle M.',
    rating: 5,
    text: 'We came for a hen weekend and it exceeded every expectation. The spa ritual, cream tea in the walled garden, the watercolour morning — perfectly arranged, never rushed. The team felt like friends by the end. Rare.',
    date: '2026-06-29',
    source: 'Google',
    verified: true,
  },
  {
    id: '4',
    author: 'David & Priya N.',
    rating: 5,
    text: 'Our anniversary, our fifth stay. The Ivy House Suite was laid out with meadow flowers, our favourite Burgundy was chilled and a note from the manager was waiting for us. That is what hospitality means. Nowhere else comes close.',
    date: '2026-06-08',
    source: 'Booking.com',
    verified: true,
  },
]

const faqs = [
  {
    question: 'What time is check-in and check-out at The Ivy House?',
    answer:
      'Check-in is from 3:00 PM and check-out by 11:00 AM. We are a small property and rooms need care between guests — but we are always happy to store luggage and invite you to enjoy the gardens, lounge or spa before or after your room is ready. Please let us know your arrival time so we can be ready to welcome you.',
  },
  {
    question: 'Is there parking available?',
    answer:
      'Yes — we have complimentary private parking for all guests in our walled courtyard. The Ivy House is nestled in the village of Bourton-on-the-Water; we recommend arriving by 6:00 PM on Fridays and Saturdays as the village lanes narrow at peak times. We are happy to provide driving directions tailored to your route.',
  },
  {
    question: 'Are children welcome?',
    answer:
      'The Ivy House is a peaceful retreat designed primarily for adults. We warmly welcome children aged 12 and over. The Orchard Cottage is our best option for families, offering a separate living space and private garden. Cots or extra beds for younger children can sometimes be arranged — please call us to discuss your situation.',
  },
  {
    question: 'Do you accommodate dietary requirements?',
    answer:
      'Absolutely. Our kitchen works almost entirely from scratch using seasonal local produce, which makes it easy to adapt to any requirement — vegan, gluten-free, nut allergy, halal and beyond. Please note your needs at the time of booking and Chef Rosie will personalise your menus. We ask for at least 48 hours notice for complex allergy profiles.',
  },
  {
    question: 'What is your cancellation policy?',
    answer:
      'Reservations cancelled more than 14 days before arrival receive a full refund. Cancellations between 7 and 14 days prior are refunded at 50%. Within 7 days of arrival, the full booking value is charged. We strongly recommend travel insurance for your peace of mind. Special rates and packages have their own terms, which are stated at booking.',
  },
  {
    question: 'Can we arrange the room for a special occasion?',
    answer:
      'It would be our pleasure. We regularly prepare rooms for anniversaries, proposals, honeymoons and milestone birthdays. Fresh flowers, a hand-written note, locally produced chocolates, a bottle of English sparkling wine — or something more personal entirely. Simply email us at hello@ivyhousecotswolds.co.uk at least 72 hours ahead and we will take care of everything.',
  },
  {
    question: 'Is the spa available to non-residents?',
    answer:
      'Our spa treatments are reserved exclusively for overnight guests. This keeps the experience intimate and unhurried — you will never be sharing a relaxation room with strangers. If you are interested in a day visit centred around the spa, please contact us directly as we occasionally offer midweek Day Retreats subject to availability.',
  },
]

const siteConfig = {
  name: 'The Ivy House',
  tagline: 'Bourton-on-the-Water, Cotswolds — A boutique hotel & spa in a 17th-century manor',
  phone: '+44 1451 820 440',
  email: 'hello@ivyhousecotswolds.co.uk',
  address: 'Mill Lane, Bourton-on-the-Water, Cheltenham GL54 2HU',
  social: { instagram: '#', facebook: '#' },
}

const theme = createCustomTheme('classic', {
  primary: '#4a3728',
  primaryHover: '#5c4535',
  accent: '#8b6914',
  background: '#fdf8f3',
  surface: '#f5ede3',
  secondary: '#eddfd1',
  text: '#2c1e14',
  textMuted: '#7a6152',
  border: '#ddd0c4',
  success: '#3a7d44',
  warning: '#b87333',
  error: '#c0392b',
})

export default function HotelBoutiqueDemo() {
  return (
    <div style={themeToStyleObject(theme) as React.CSSProperties}>
      <Hero
        title="The Ivy House"
        subtitle="A 17th-century Cotswold manor restored as a boutique hotel and spa. Ten rooms, one walled garden, a kitchen that grows its own food — and the kind of quiet that city life forgets exists."
        backgroundImage="https://images.unsplash.com/photo-1585543805890-6051f7829f98?w=1600"
        ctaPrimary={{ label: 'Check Availability', href: '#availability' }}
        ctaSecondary={{ label: 'Explore Experiences', href: '#experiences' }}
      />

      <div id="availability">
        <AvailabilityChecker
          onSearch={(params) => {
            // Replace with your availability API call
          }}
          roomTypes={['Deluxe', 'Suite', 'Cottage']}
          title="Plan Your Stay"
          subtitle="Choose your dates and find your perfect room in the Cotswolds"
        />
      </div>

      <div id="rooms">
        <RoomShowcase
          rooms={rooms}
          locale="en-GB"
          title="Rooms & Suites"
          subtitle="Ten rooms, each one different — all dressed in natural materials, locally made furniture and the honest beauty of the Cotswold countryside"
          onBook={(id) => { /* Replace with booking handler */ }}
        />
      </div>

      <div id="experiences">
        <ExperienceGrid
          experiences={experiences}
          locale="en-GB"
          title="Experiences & Activities"
          subtitle="From foraging in ancient woodland to painting the valley at dawn — days here are shaped around what you love"
          onBook={(id) => { /* Replace with booking handler */ }}
        />
      </div>

      <ReviewCarousel reviews={reviews} locale="en" />

      <FAQAccordion items={faqs} locale="en" />

      <Footer config={siteConfig} locale="en" />

      <WhatsAppCTA
        phoneNumber="441451820440"
        message="Hello, I would like to enquire about a stay at The Ivy House Cotswolds."
      />
    </div>
  )
}
