'use client'

import { createCustomTheme, themeToStyleObject } from '@scala-sites/themes'
import { Hero } from '@scala-sites/core/components/hero'
import { ReviewCarousel } from '@scala-sites/core/components/review-carousel'
import { WhatsAppCTA } from '@scala-sites/core/components/whatsapp-cta'
import { Footer } from '@scala-sites/core/components/footer'
import { FAQAccordion } from '@scala-sites/core/components/faq-accordion'
import { VehicleInventory } from '@scala-sites/autoos/components/vehicle-inventory'
import { FinanceCalculator } from '@scala-sites/autoos/components/finance-calculator'
import { TestDriveBooking } from '@scala-sites/autoos/components/test-drive-booking'
import type { InventoryVehicle } from '@scala-sites/autoos/components/vehicle-inventory'

const vehicles: InventoryVehicle[] = [
  {
    id: '1',
    make: 'BMW',
    model: '5 Series 520d M Sport',
    year: 2024,
    mileage: 0,
    fuelType: 'Diesel',
    transmission: 'Automatic',
    bodyStyle: 'Sedan',
    condition: 'New',
    price: 54995,
    currency: 'GBP',
    monthlyFrom: 529,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
  },
  {
    id: '2',
    make: 'Mercedes-Benz',
    model: 'GLE 300d AMG Line',
    year: 2023,
    mileage: 12400,
    fuelType: 'Diesel',
    transmission: 'Automatic',
    bodyStyle: 'SUV',
    condition: 'Certified',
    price: 67500,
    currency: 'GBP',
    monthlyFrom: 649,
    image: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&q=80',
  },
  {
    id: '3',
    make: 'Volkswagen',
    model: 'Golf 8 R-Line',
    year: 2022,
    mileage: 28700,
    fuelType: 'Petrol',
    transmission: 'Manual',
    bodyStyle: 'Hatchback',
    condition: 'Used',
    price: 22990,
    currency: 'GBP',
    monthlyFrom: 219,
    image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80',
  },
  {
    id: '4',
    make: 'Tesla',
    model: 'Model Y Long Range',
    year: 2024,
    mileage: 0,
    fuelType: 'Electric',
    transmission: 'Automatic',
    bodyStyle: 'SUV',
    condition: 'New',
    price: 52490,
    currency: 'GBP',
    monthlyFrom: 499,
    image: 'https://images.unsplash.com/photo-1561580125-028ee3bd62eb?w=800&q=80',
  },
  {
    id: '5',
    make: 'Volvo',
    model: 'V90 T6 Recharge',
    year: 2023,
    mileage: 8200,
    fuelType: 'Plug-in Hybrid',
    transmission: 'Automatic',
    bodyStyle: 'Estate',
    condition: 'Certified',
    price: 48750,
    currency: 'GBP',
    monthlyFrom: 469,
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80',
  },
  {
    id: '6',
    make: 'Audi',
    model: 'A3 Sportback S Line',
    year: 2021,
    mileage: 41300,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    bodyStyle: 'Hatchback',
    condition: 'Used',
    price: 19495,
    currency: 'GBP',
    monthlyFrom: 189,
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
  },
  {
    id: '7',
    make: 'Land Rover',
    model: 'Discovery Sport D200',
    year: 2023,
    mileage: 6900,
    fuelType: 'Diesel',
    transmission: 'Automatic',
    bodyStyle: 'SUV',
    condition: 'Certified',
    price: 43900,
    currency: 'GBP',
    monthlyFrom: 419,
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&q=80',
  },
  {
    id: '8',
    make: 'Toyota',
    model: 'Corolla Touring Sports Hybrid',
    year: 2022,
    mileage: 19800,
    fuelType: 'Hybrid',
    transmission: 'Automatic',
    bodyStyle: 'Estate',
    condition: 'Used',
    price: 24795,
    currency: 'GBP',
    monthlyFrom: 239,
    image: 'https://images.unsplash.com/photo-1638618164682-12b986ec2a75?w=800&q=80',
  },
]

const testDriveVehicles = vehicles.map(v => ({
  id: v.id,
  label: `${v.year} ${v.make} ${v.model} — ${new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 }).format(v.price)}`,
}))

const reviews = [
  {
    id: '1',
    author: 'Jonathan Ashworth',
    rating: 5,
    text: 'Purchased my BMW 5 Series from Kensington Motors last month. The team was professional, zero pressure, and the car was presented in immaculate condition. A genuinely premium experience.',
    date: '2026-07-18',
    source: 'Google',
    verified: true,
  },
  {
    id: '2',
    author: 'Priya Nair',
    rating: 5,
    text: 'Switched from a diesel SUV to the Tesla Model Y on the team\'s recommendation. They walked me through every option, arranged the finance in under an hour, and the handover was seamless.',
    date: '2026-07-02',
    source: 'Google',
    verified: true,
  },
  {
    id: '3',
    author: 'Marcus Steinfeld',
    rating: 5,
    text: 'Traded in my old Audi and drove away in a certified Volvo V90 the same afternoon. The part-exchange valuation was fair and transparent. Highly recommend Kensington Motors.',
    date: '2026-06-14',
    source: 'Google',
    verified: true,
  },
  {
    id: '4',
    author: 'Sophie Beaumont',
    rating: 5,
    text: 'The finance calculator on the website made it easy to plan my budget before visiting the showroom. No surprises at the desk — everything was exactly as discussed. Five stars.',
    date: '2026-05-29',
    source: 'Trustpilot',
    verified: true,
  },
]

const faqs = [
  {
    question: 'What does "Certified Pre-Owned" mean at Kensington Motors?',
    answer: 'Every Certified Pre-Owned vehicle passes our 170-point inspection, comes with a minimum 12-month comprehensive warranty, full HPI check, and a fresh MOT or service where due. Only vehicles under 5 years old with fewer than 60,000 miles qualify.',
  },
  {
    question: 'Can I part-exchange my current vehicle?',
    answer: 'Absolutely. We accept all makes and models as part-exchange. Simply bring your vehicle to the showroom or request an online valuation via WhatsApp. We aim to provide a formal offer within 30 minutes of inspection.',
  },
  {
    question: 'What finance options are available?',
    answer: 'We offer Hire Purchase (HP), Personal Contract Purchase (PCP), and Lease Purchase through our panel of FCA-authorised lenders. Representative APR 9.9%. Subject to status — 18+ only. Use our online calculator for an instant estimate.',
  },
  {
    question: 'How long does a test drive last?',
    answer: 'Standard test drives are 45 minutes. For vehicles over £40,000 or for customers travelling from outside London, we offer extended 90-minute slots — just mention this when booking.',
  },
  {
    question: 'Do you offer home delivery?',
    answer: 'Yes. We deliver anywhere in mainland UK. Delivery within the M25 is complimentary. For national delivery, a flat fee of £199 applies, including full handover documentation and a video walkthrough of your vehicle.',
  },
]

const siteConfig = {
  name: 'Kensington Motors',
  tagline: 'Premium cars. Transparent pricing. Expert service.',
  phone: '+44 20 7946 0320',
  email: 'enquiries@kensingtonmotors.example.com',
  address: '120 Brompton Road, London SW3 1JJ',
  social: { instagram: '#', facebook: '#' },
}

export default function AutoDemo() {
  const theme = createCustomTheme('minimal', {
    primary: '#1c1c1c',
    primaryHover: '#2d2d2d',
    accent: '#2563eb',
    background: '#ffffff',
    surface: '#f8f9fa',
    secondary: '#f1f3f5',
    text: '#1c1c1c',
    textMuted: '#6b7280',
    border: '#e5e7eb',
  })

  return (
    <div style={themeToStyleObject(theme) as React.CSSProperties}>
      <Hero
        title="Kensington Motors"
        subtitle="New, certified, and quality used cars — transparent pricing, flexible finance, and expert guidance on Brompton Road"
        backgroundImage="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&q=80"
        ctaPrimary={{ label: 'Browse Inventory', href: '#inventory' }}
        ctaSecondary={{ label: 'Book a Test Drive', href: '#test-drive' }}
      />

      <div id="inventory">
        <VehicleInventory
          vehicles={vehicles}
          locale="en"
          onViewDetails={id => console.log('View details', id)}
          onBookTestDrive={id => {
            const el = document.getElementById('test-drive')
            if (el) el.scrollIntoView({ behavior: 'smooth' })
          }}
        />
      </div>

      <FinanceCalculator
        vehiclePrice={32000}
        currency="GBP"
        locale="en"
        defaultApr={9.9}
      />

      <div id="test-drive">
        <TestDriveBooking
          vehicles={testDriveVehicles}
          title="Book Your Test Drive"
          subtitle="Experience any vehicle from our inventory. Slots available 7 days a week at our Brompton Road showroom."
        />
      </div>

      <ReviewCarousel reviews={reviews} locale="en" />

      <FAQAccordion items={faqs} locale="en" />

      <Footer config={siteConfig} locale="en" />

      <WhatsAppCTA
        phoneNumber="442079460320"
        message="Hi, I'm interested in a vehicle at Kensington Motors. Could you help me?"
      />
    </div>
  )
}
