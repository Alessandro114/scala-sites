import { createCustomTheme, themeToStyleObject } from '@scala-sites/themes'
import { Hero } from '@scala-sites/core/components/hero'
import { ReviewCarousel } from '@scala-sites/core/components/review-carousel'
import { WhatsAppCTA } from '@scala-sites/core/components/whatsapp-cta'
import { Footer } from '@scala-sites/core/components/footer'
import { FAQAccordion } from '@scala-sites/core/components/faq-accordion'
import { ListingSearch } from '@scala-sites/propertyos/components/listing-search'
import { AgentCard } from '@scala-sites/propertyos/components/agent-card'
import { ValuationWidget } from '@scala-sites/propertyos/components/valuation-widget'

const listings = [
  { id: '1', title: 'Modern Penthouse with Terrace', address: '12 Kensington High Street, London', price: 1250000, currency: 'GBP', type: 'sale' as const, propertyType: 'Apartment', bedrooms: 3, bathrooms: 2, area: 180, areaUnit: 'm²', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600', featured: true, viewsLast24h: 12 },
  { id: '2', title: 'Renovated Loft in Shoreditch', address: '23 Shoreditch High Street, London', price: 2200, currency: 'GBP', type: 'rent' as const, propertyType: 'Loft', bedrooms: 1, bathrooms: 1, area: 95, areaUnit: 'm²', image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600', viewsLast24h: 8 },
  { id: '3', title: 'Family Villa with Garden', address: '8 Richmond Park Road, Surrey', price: 680000, currency: 'GBP', type: 'sale' as const, propertyType: 'Villa', bedrooms: 4, bathrooms: 3, area: 320, areaUnit: 'm²', image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600' },
  { id: '4', title: 'Studio near Camden', address: '33 Camden Passage, London', price: 1100, currency: 'GBP', type: 'rent' as const, propertyType: 'Apartment', bedrooms: 0, bathrooms: 1, area: 35, areaUnit: 'm²', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600', viewsLast24h: 22 },
  { id: '5', title: 'Commercial Space — High Street', address: '55 Canary Wharf, London', price: 450000, currency: 'GBP', type: 'sale' as const, propertyType: 'Commercial', bedrooms: 0, bathrooms: 1, area: 120, areaUnit: 'm²', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600' },
  { id: '6', title: 'Elegant 2BR in Notting Hill', address: '22 Notting Hill Gate, London', price: 1800, currency: 'GBP', type: 'rent' as const, propertyType: 'Apartment', bedrooms: 2, bathrooms: 1, area: 85, areaUnit: 'm²', image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600', featured: true },
]

const agents = [
  { id: '1', name: 'Julia Merchant', role: 'Senior Agent — Residential', photo: '', specialties: ['Luxury', 'Notting Hill', 'Shoreditch'], propertiesSold: 127, yearsExperience: 12, bio: 'Specializing in luxury residential properties across central London. Over 127 successful transactions with a focus on discerning international clients.', bookingUrl: '#' },
  { id: '2', name: 'Mark Ferretti', role: 'Commercial & Investment', photo: '', specialties: ['Commercial', 'Investment', 'Offices'], propertiesSold: 89, yearsExperience: 8, bio: 'Expert in commercial real estate and investment properties. Helping businesses find their perfect space and investors maximize returns.', bookingUrl: '#' },
  { id: '3', name: 'Sophie Coleman', role: 'Rentals Manager', photo: '', specialties: ['Rentals', 'Expats', 'Short-term'], propertiesSold: 215, yearsExperience: 6, bio: 'Dedicated to helping expats and professionals find the perfect rental in London. Fluent in English, Italian, and Spanish.', bookingUrl: '#' },
]

const reviews = [
  { id: '1', author: 'James & Sarah T.', rating: 5, text: 'Julia found us our dream apartment in Notting Hill within two weeks. Her knowledge of the market is exceptional. The whole process was seamless.', date: '2026-07-15', source: 'Google', verified: true },
  { id: '2', author: 'Daniel M.', rating: 5, text: 'Mark helped us find the perfect office space. Professional, responsive, and always available. Highly recommended for commercial properties.', date: '2026-06-20', source: 'Google', verified: true },
  { id: '3', author: 'Anna K.', rating: 5, text: 'As an expat, finding a rental in London seemed daunting. Sophie made it effortless. She understood exactly what I needed and found options I never would have discovered on my own.', date: '2026-05-10', source: 'Google', verified: true },
]

const faqs = [
  { question: 'How much does it cost to list a property with you?', answer: 'Our standard commission is 3% of the sale price for sellers. For buyers, our service is completely free. Rental listings are subject to one month\'s rent as commission.' },
  { question: 'How long does it take to sell a property in London?', answer: 'On average, our properties sell within 45 days — 30% faster than the market average. Luxury properties may take 60-90 days due to the smaller buyer pool.' },
  { question: 'Do you help with property valuation?', answer: 'Yes! Use our free valuation tool on this page for an instant estimate, or book a call for a detailed comparative market analysis prepared by our agents.' },
  { question: 'Can you help international buyers?', answer: 'Absolutely. 40% of our clients are international. We guide you through the entire process including legal requirements, tax implications, and residency permits.' },
]

const siteConfig = {
  name: 'Kensington & Partners',
  tagline: 'Your trusted partner in London real estate since 2010',
  phone: '+44 20 7123 4567',
  email: 'info@example.com',
  address: '15 Mayfair Lane, London W1K 3QT',
  social: { instagram: '#', facebook: '#' },
}

export const metadata = {
  title: 'Kensington & Partners — Premium Properties in London',
  description: 'Find your dream property in London. Luxury apartments, houses, and commercial spaces with expert guidance from our experienced team.',
}

export default function PropertyDemo() {
  return (
    <div style={themeToStyleObject(createCustomTheme('classic', { primary: '#1e3a5f', primaryHover: '#2a4f7f', secondary: '#f0f4f8', accent: '#c9a84c', background: '#ffffff', surface: '#f8fafc', text: '#1a1a2e', textMuted: '#64748b', border: '#e2e8f0' })) as React.CSSProperties}>
      <Hero
        title="Find Your Place in London"
        subtitle="Premium residential and commercial properties across London's most desirable neighborhoods"
        backgroundImage="https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?w=1600"
        ctaPrimary={{ label: 'Browse Properties', href: '#listings' }}
        ctaSecondary={{ label: 'Free Valuation', href: '#valuation' }}
      />
      <div id="listings">
        <ListingSearch listings={listings} locale="en-GB" whatsappNumber="442071234567" />
      </div>
      <div id="valuation">
        <ValuationWidget />
      </div>
      <AgentCard agents={agents} whatsappNumber="442071234567" />
      <ReviewCarousel reviews={reviews} locale="en" />
      <FAQAccordion items={faqs} locale="en" />
      <Footer config={siteConfig} locale="en" />
      <WhatsAppCTA phoneNumber="442071234567" message="Hi, I'm interested in a property in London" />
    </div>
  )
}
