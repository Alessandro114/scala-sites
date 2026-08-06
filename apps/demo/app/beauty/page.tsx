import { createCustomTheme, themeToStyleObject } from '@scala-sites/themes'
import { Hero } from '@scala-sites/core/components/hero'
import { ReviewCarousel } from '@scala-sites/core/components/review-carousel'
import { WhatsAppCTA } from '@scala-sites/core/components/whatsapp-cta'
import { Footer } from '@scala-sites/core/components/footer'
import { TeamGrid } from '@scala-sites/core/components/team-grid'
import { Gallery } from '@scala-sites/core/components/gallery'
import { FAQAccordion } from '@scala-sites/core/components/faq-accordion'
import { StylistBooking } from '@scala-sites/beautyos/components/stylist-booking'
import { BeforeAfter } from '@scala-sites/beautyos/components/before-after'
import { ServiceMenu } from '@scala-sites/beautyos/components/service-menu'

const stylists = [
  { id: '1', name: 'Elena Rivera', photo: '', role: 'Color Specialist', specialties: ['Balayage', 'Color Correction', 'Highlights'], rating: 4.9, reviewCount: 142, nextAvailable: 'Today 3:00 PM', slotsToday: 2 },
  { id: '2', name: 'Matt Taylor', photo: '', role: 'Cut & Style Director', specialties: ['Precision Cuts', 'Fades', 'Textured Bobs'], rating: 4.8, reviewCount: 98, nextAvailable: 'Tomorrow 10:00 AM' },
  { id: '3', name: 'Chloe White', photo: '', role: 'Keratin & Treatment Expert', specialties: ['Keratin', 'Olaplex', 'Scalp Therapy'], rating: 5.0, reviewCount: 67, nextAvailable: 'Today 5:30 PM', slotsToday: 1 },
]

const services = [
  { id: '1', name: 'Women\'s Haircut & Blowdry', category: 'Cuts', duration: '60 min', price: 65, currency: 'EUR', popular: true },
  { id: '2', name: 'Men\'s Haircut', category: 'Cuts', duration: '30 min', price: 35, currency: 'EUR' },
  { id: '3', name: 'Kids Haircut (under 12)', category: 'Cuts', duration: '25 min', price: 25, currency: 'EUR' },
  { id: '4', name: 'Full Balayage', category: 'Color', duration: '150 min', price: 180, priceFrom: true, currency: 'EUR', popular: true },
  { id: '5', name: 'Root Touch-Up', category: 'Color', duration: '60 min', price: 75, currency: 'EUR' },
  { id: '6', name: 'Full Highlights', category: 'Color', duration: '120 min', price: 150, priceFrom: true, currency: 'EUR' },
  { id: '7', name: 'Keratin Treatment', category: 'Treatments', duration: '120 min', price: 200, currency: 'EUR', popular: true, description: 'Smooth, frizz-free hair for up to 3 months' },
  { id: '8', name: 'Olaplex Repair', category: 'Treatments', duration: '45 min', price: 55, currency: 'EUR', description: 'Bond-building treatment for damaged hair' },
  { id: '9', name: 'Scalp Detox', category: 'Treatments', duration: '30 min', price: 40, currency: 'EUR' },
  { id: '10', name: 'Bridal Package', category: 'Special', duration: '180 min', price: 350, currency: 'EUR', description: 'Trial + wedding day styling + touch-up kit' },
]

const beforeAfterItems = [
  { id: '1', service: 'Balayage', beforeImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400', afterImage: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=400', description: 'Natural sun-kissed balayage on dark brunette', stylistName: 'Elena Rivera' },
  { id: '2', service: 'Keratin', beforeImage: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=400', afterImage: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400', description: 'Keratin smoothing on curly hair — 3 months of frizz-free', stylistName: 'Chloe White' },
  { id: '3', service: 'Color Correction', beforeImage: 'https://images.unsplash.com/photo-1554519934-e32b1bc7b7b3?w=400', afterImage: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400', description: 'Box dye correction to natural-looking copper', stylistName: 'Elena Rivera' },
  { id: '4', service: 'Precision Cut', beforeImage: 'https://images.unsplash.com/photo-1595959183082-7b570b7e1e2b?w=400', afterImage: 'https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=400', description: 'Modern textured bob transformation', stylistName: 'Matt Taylor' },
]

const reviews = [
  { id: '1', author: 'Francesca L.', rating: 5, text: 'Elena is a balayage goddess. I\'ve been going to her for 2 years and my hair has never looked better. The salon is beautiful and the team is incredibly welcoming.', date: '2026-07-28', source: 'Google', verified: true },
  { id: '2', author: 'Rachel G.', rating: 5, text: 'First time getting a keratin treatment here. Chloe explained everything patiently and the results are AMAZING. My morning routine went from 45 to 10 minutes.', date: '2026-07-15', source: 'Google', verified: true },
  { id: '3', author: 'Sophie W.', rating: 5, text: 'Best haircut I\'ve ever had. Matt really listened to what I wanted and delivered something even better. The WhatsApp booking is so convenient!', date: '2026-06-22', source: 'Google', verified: true },
  { id: '4', author: 'Laura P.', rating: 4, text: 'Gorgeous salon, lovely team. Only reason for 4 stars is the wait time — arrived 10 min early but still waited 20 min. Hair looked amazing though.', date: '2026-06-10', source: 'Google', verified: true },
]

const faqs = [
  { question: 'How do I book an appointment?', answer: 'You can book directly on this website by selecting your stylist, or send us a WhatsApp message and we\'ll find the perfect slot for you.' },
  { question: 'What if I need to cancel or reschedule?', answer: 'No problem! Cancel or reschedule up to 24 hours before your appointment for free. Late cancellations may incur a 50% charge.' },
  { question: 'Do you offer a first-visit discount?', answer: 'Yes! New clients get 25% off their first service. Just mention it when booking.' },
  { question: 'How long does a balayage last?', answer: 'A well-done balayage grows out naturally and can last 3-4 months between touch-ups, making it one of the most low-maintenance color options.' },
  { question: 'Is keratin treatment safe for colored hair?', answer: 'Absolutely. Our keratin treatments are formaldehyde-free and safe for all hair types, including color-treated hair. It actually helps lock in color longer.' },
]

const siteConfig = {
  name: 'Studio Luxe Hair',
  tagline: 'Expert color, cut & care — Soho, London',
  phone: '+44 20 7432 1098',
  email: 'hello@example.com',
  address: '28 Brewer Street, London W1F 0SR',
  social: { instagram: '#', facebook: '#', tiktok: '#' },
}

export const metadata = {
  title: 'Studio Luxe Hair — Premier Hair Salon in London',
  description: 'Expert color, precision cuts, and luxury treatments. Book your stylist online. 25% off your first visit.',
}

export default function BeautyDemo() {
  return (
    <div style={themeToStyleObject(createCustomTheme('classic', { primary: '#9f1239', primaryHover: '#be123c', secondary: '#fff1f2', accent: '#f43f5e', background: '#ffffff', surface: '#fef2f2', text: '#1a1a2e', textMuted: '#71717a', border: '#fecdd3' })) as React.CSSProperties}>
      <Hero
        title="Your Hair, Your Way"
        subtitle="Expert colorists, precision stylists, and luxury treatments — book your favorite stylist online"
        backgroundImage="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600"
        ctaPrimary={{ label: 'Book Now — 25% Off First Visit', href: '#booking' }}
        ctaSecondary={{ label: 'View Services', href: '#services' }}
      />
      <div className="text-center py-6" style={{ background: 'var(--color-secondary)' }}>
        <p className="text-lg font-semibold" style={{ color: 'var(--color-primary)' }}>
          New clients: 25% off your first service
        </p>
      </div>
      <div id="booking">
        <StylistBooking stylists={stylists} />
      </div>
      <div id="services">
        <ServiceMenu services={services} locale="en-GB" />
      </div>
      <BeforeAfter items={beforeAfterItems} />
      <ReviewCarousel reviews={reviews} locale="en" />
      <FAQAccordion items={faqs} locale="en" />
      <Footer config={siteConfig} locale="en" />
      <WhatsAppCTA phoneNumber="442074321098" message="Hi, I'd like to book an appointment" />
    </div>
  )
}
