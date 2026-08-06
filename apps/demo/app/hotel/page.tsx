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
    name: 'Classic Deluxe King',
    type: 'Deluxe',
    description: 'Elegant and spacious with handcrafted furnishings, a marble en-suite bathroom and views over the leafy Mayfair streets. The perfect introduction to The Meridian Grand.',
    price: 420,
    currency: 'GBP',
    maxGuests: 2,
    amenities: ['WiFi', 'Minibar', 'Safe', 'Bathtub', 'AirCon', 'TV', 'Concierge'],
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900',
    available: true,
  },
  {
    id: '2',
    name: 'Superior Park View',
    type: 'Deluxe',
    description: 'Wake up to sweeping views of Hyde Park from this beautifully appointed room. Features a generous king bed, walk-in wardrobe and a sumptuously appointed bathroom.',
    price: 580,
    currency: 'GBP',
    maxGuests: 2,
    amenities: ['WiFi', 'Minibar', 'Safe', 'Bathtub', 'Balcony', 'AirCon', 'View', 'TV'],
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=900',
    available: true,
  },
  {
    id: '3',
    name: 'Junior Suite',
    type: 'Suite',
    description: 'A separate living room, bespoke British textiles and a freestanding copper bathtub. Ideal for a romantic retreat or a longer stay in the heart of Mayfair.',
    price: 850,
    currency: 'GBP',
    maxGuests: 3,
    amenities: ['WiFi', 'Minibar', 'Safe', 'Bathtub', 'Shower', 'AirCon', 'TV', 'Concierge', 'Butler'],
    image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=900',
    available: true,
  },
  {
    id: '4',
    name: 'Grand Mayfair Suite',
    type: 'Suite',
    description: 'Two bedrooms, a formal dining room for eight and a wraparound terrace overlooking Berkeley Square. Includes a dedicated butler, Rolls-Royce transfer and private sommelier.',
    price: 1950,
    currency: 'GBP',
    maxGuests: 4,
    amenities: ['WiFi', 'Minibar', 'Safe', 'Bathtub', 'Terrace', 'Fireplace', 'Butler', 'Concierge', 'View'],
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=900',
    available: true,
  },
  {
    id: '5',
    name: 'The Meridian Penthouse',
    type: 'Penthouse',
    description: 'The pinnacle of the hotel. A private rooftop terrace, chef\'s kitchen, grand piano and 360-degree panorama of London. One of the most exceptional residences in the capital.',
    price: 4800,
    currency: 'GBP',
    maxGuests: 6,
    amenities: ['WiFi', 'Minibar', 'Safe', 'Bathtub', 'Terrace', 'Fireplace', 'Pool', 'Butler', 'Concierge', 'View'],
    image: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=900',
    available: false,
  },
]

const experiences = [
  {
    id: '1',
    title: 'The Meridian Spa Journey',
    description: 'A 90-minute immersive ritual combining hot stone massage, aromatherapy body wrap and a personalised facial. Includes access to the thermal suite and champagne on arrival.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800',
    duration: '90 min',
    price: 210,
    currency: 'GBP',
    category: 'Spa',
    rating: 4.9,
    reviewCount: 148,
  },
  {
    id: '2',
    title: 'Historic Mayfair Walking Tour',
    description: 'Explore the stories behind Mayfair\'s grandest streets with a private historian guide. From the hidden mews of Shepherd Market to the gallery district of Cork Street.',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800',
    duration: '2 hrs',
    price: 95,
    currency: 'GBP',
    category: 'Tours',
    rating: 4.8,
    reviewCount: 73,
  },
  {
    id: '3',
    title: 'Classic Afternoon Tea',
    description: 'Our celebrated afternoon tea served in the Meridian Salon. Freshly baked finger sandwiches, warm scones with Cornish clotted cream and a selection of Rare Tea Company blends.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    duration: '1.5 hrs',
    price: 68,
    currency: 'GBP',
    category: 'Dining',
    rating: 4.9,
    reviewCount: 212,
  },
  {
    id: '4',
    title: 'Thames Sunset Cruise',
    description: 'A private yacht departs from Chelsea Harbour for a two-hour cruise at golden hour. Curated canapés, vintage champagne and London\'s most iconic skyline by water.',
    image: 'https://images.unsplash.com/photo-1488747279002-2c0e0f396b33?w=800',
    duration: '2 hrs',
    price: 380,
    currency: 'GBP',
    category: 'Tours',
    rating: 4.7,
    reviewCount: 56,
  },
  {
    id: '5',
    title: 'Private Fine Dining Experience',
    description: 'Chef Thomas Aldridge creates a bespoke seven-course tasting menu in your suite or our private dining room, paired with wines selected by our Master Sommelier.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
    duration: '3 hrs',
    price: 295,
    currency: 'GBP',
    category: 'Dining',
    rating: 5.0,
    reviewCount: 34,
  },
  {
    id: '6',
    title: 'Morning Yoga & Mindfulness',
    description: 'Start your day with a private sunrise yoga session on the rooftop terrace. Led by our resident wellness instructor, followed by a nourishing superfood breakfast.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800',
    duration: '75 min',
    price: 75,
    currency: 'GBP',
    category: 'Wellness',
    rating: 4.8,
    reviewCount: 91,
  },
]

const reviews = [
  {
    id: '1',
    author: 'Charlotte H.',
    rating: 5,
    text: "The Meridian Grand is in a league of its own. From the moment I arrived, every detail was attended to with quiet precision. The Junior Suite was breathtaking — the copper bathtub alone was worth the stay.",
    date: '2026-07-18',
    source: 'Google',
    verified: true,
  },
  {
    id: '2',
    author: 'François D.',
    rating: 5,
    text: 'Exceptional in every sense. We booked the private dining experience and Chef Aldridge surprised us with a menu tailored around my wife\'s birthday. Truly world-class. Paris has nothing like this.',
    date: '2026-07-03',
    source: 'TripAdvisor',
    verified: true,
  },
  {
    id: '3',
    author: 'Yuki M.',
    rating: 5,
    text: 'I travel to London four times a year for business. I have tried every five-star property in Mayfair. The Meridian Grand is the only place I now book — the staff remember everything.',
    date: '2026-06-22',
    source: 'Google',
    verified: true,
  },
  {
    id: '4',
    author: 'Sarah & James T.',
    rating: 5,
    text: 'We spent our honeymoon here and it was perfection. The spa journey, afternoon tea, the Thames cruise — all arranged for us seamlessly by our butler. A hotel that genuinely cares.',
    date: '2026-05-30',
    source: 'Booking.com',
    verified: true,
  },
]

const faqs = [
  {
    question: 'What time is check-in and check-out?',
    answer: 'Standard check-in is from 3:00 PM and check-out is by 12:00 noon. Early arrival and late departure can be arranged subject to availability — please contact our concierge team in advance and we will do our utmost to accommodate your request.',
  },
  {
    question: 'Is valet parking available?',
    answer: 'Yes. We offer 24-hour valet parking for guests at £45 per night. Our team will collect and return your vehicle at any time. Electric vehicle charging is available upon request. Please note that Mayfair operates within the London Ultra Low Emission Zone (ULEZ).',
  },
  {
    question: 'Are pets welcome at The Meridian Grand?',
    answer: 'We welcome well-behaved dogs of any size in our Deluxe rooms and selected Suites. A pet amenity kit and dedicated dog-walking service are included. Please inform us at the time of booking so we can prepare accordingly. Cats and other pets are assessed on a case-by-case basis.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Reservations may be cancelled free of charge up to 48 hours prior to arrival. Cancellations within 48 hours incur a charge of one night\'s accommodation. Non-refundable rates are available at a significant discount and cannot be cancelled or amended. For group bookings, separate terms apply.',
  },
  {
    question: 'Do you cater to dietary requirements?',
    answer: 'Absolutely. Our kitchen accommodates all dietary needs including vegan, vegetarian, coeliac, halal, kosher and complex allergy profiles. Please inform us at least 24 hours in advance and our Head Chef will personally ensure your experience is exceptional.',
  },
  {
    question: 'Is there an airport transfer service?',
    answer: 'Yes. We offer a complimentary Rolls-Royce transfer from Heathrow for guests staying in our Suite or Penthouse categories. Standard transfers by executive vehicle can be arranged to all London airports from £95 one way. Book via concierge@meridian-grand.com.',
  },
]

const siteConfig = {
  name: 'The Meridian Grand',
  tagline: 'Mayfair, London — Refined hospitality since 1923',
  phone: '+44 20 7123 9000',
  email: 'reservations@meridian-grand.com',
  address: '14 Berkeley Square, Mayfair, London W1J 6BR',
  social: { instagram: '#', facebook: '#' },
}

const theme = createCustomTheme('classic', {
  primary: '#0f172a',
  primaryHover: '#1e293b',
  accent: '#d4a853',
  background: '#faf7f2',
  surface: '#f5f0e8',
  secondary: '#ede8df',
  text: '#1a1512',
  textMuted: '#6b635a',
  border: '#ddd8cf',
  success: '#16a34a',
  warning: '#ca8a04',
  error: '#dc2626',
})

export default function HotelDemo() {
  return (
    <div style={themeToStyleObject(theme) as React.CSSProperties}>
      <Hero
        title="The Meridian Grand"
        subtitle="A singular address in Mayfair — where understated luxury meets the warmth of a private home. London's most discreet five-star experience awaits."
        backgroundImage="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1600"
        ctaPrimary={{ label: 'Reserve a Room', href: '#rooms' }}
        ctaSecondary={{ label: 'Explore Experiences', href: '#experiences' }}
      />

      <div id="availability">
        <AvailabilityChecker
          onSearch={(params) => {
            console.log('Availability search:', params)
          }}
          roomTypes={['Deluxe', 'Suite', 'Penthouse']}
          title="Plan Your Stay"
          subtitle="Select your dates and we will show you what awaits"
        />
      </div>

      <div id="rooms">
        <RoomShowcase
          rooms={rooms}
          locale="en-GB"
          title="Rooms & Suites"
          subtitle="Each of our rooms is a sanctuary — designed with care and furnished with the finest British craftsmanship"
          onBook={(id) => console.log('Book room:', id)}
        />
      </div>

      <div id="experiences">
        <ExperienceGrid
          experiences={experiences}
          locale="en-GB"
          title="Curated Experiences"
          subtitle="From private dining to twilight river cruises — moments crafted exclusively for our guests"
          onBook={(id) => console.log('Book experience:', id)}
        />
      </div>

      <ReviewCarousel reviews={reviews} locale="en" />

      <FAQAccordion items={faqs} locale="en" />

      <Footer config={siteConfig} locale="en" />

      <WhatsAppCTA
        phoneNumber="442071239000"
        message="Hello, I would like to enquire about a reservation at The Meridian Grand."
      />
    </div>
  )
}
