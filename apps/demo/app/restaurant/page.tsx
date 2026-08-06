'use client'

import { Hero } from '@scala-sites/core/components/hero'
import { BookingWidget } from '@scala-sites/core/components/booking-widget'
import { ReviewCarousel } from '@scala-sites/core/components/review-carousel'
import { WhatsAppCTA } from '@scala-sites/core/components/whatsapp-cta'
import { Footer } from '@scala-sites/core/components/footer'
import { TeamGrid } from '@scala-sites/core/components/team-grid'
import { Gallery } from '@scala-sites/core/components/gallery'
import { FAQAccordion } from '@scala-sites/core/components/faq-accordion'
import { LoyaltyPrompt } from '@scala-sites/core/components/loyalty-prompt'
import { MenuSection } from '@scala-sites/dineos/components/menu-section'
import { StorySection } from '@scala-sites/dineos/components/story-section'
import { UpsellBanner } from '@scala-sites/dineos/components/upsell-banner'
import type {
  SiteConfig,
  MenuCategory,
  Review,
  TeamMember,
  GalleryImage,
  FAQItem,
  BookingSlot,
} from '@scala-sites/core/lib/types'

// --- MOCK DATA ---

const siteConfig: SiteConfig = {
  name: 'The Garden Kitchen',
  description: 'Farm-to-table dining with seasonal ingredients',
  url: 'https://thegardenkitchen.example.com',
  locale: 'en',
  vertical: 'dineos',
  theme: 'classic',
  branding: {
    primaryColor: '#1a1a1a',
    accentColor: '#c4a35a',
  },
  contact: {
    phone: '+44 20 7946 0958',
    email: 'info@thegardenkitchen.com',
    whatsapp: '+390212345678',
    address: 'Via Roma 42, 20121 Milano, Italy',
    coordinates: { lat: 45.4642, lng: 9.19 },
  },
  social: {
    instagram: 'thegardenkitchen',
    facebook: 'https://facebook.com/thegardenkitchen',
  },
  seo: {
    title: 'The Garden Kitchen | Authentic Italian Kitchen',
    description: 'Traditional Italian cuisine in the heart of Milan.',
  },
}

const menuCategories: MenuCategory[] = [
  {
    id: 'antipasti',
    name: 'Antipasti',
    sortOrder: 1,
    items: [
      {
        id: '1',
        name: 'Bruschetta al Pomodoro',
        description: 'Grilled bread with fresh tomatoes, basil, and extra virgin olive oil',
        price: 8,
        currency: 'EUR',
        category: 'antipasti',
        tags: ['vegan'],
        available: true,
        featured: true,
      },
      {
        id: '2',
        name: 'Burrata con Prosciutto',
        description: 'Creamy burrata with San Daniele prosciutto and arugula',
        price: 14,
        currency: 'EUR',
        category: 'antipasti',
        tags: [],
        available: true,
      },
      {
        id: '3',
        name: 'Carpaccio di Manzo',
        description: 'Thinly sliced raw beef with rocket, parmesan shavings, and lemon dressing',
        price: 16,
        currency: 'EUR',
        category: 'antipasti',
        tags: ['gluten-free'],
        available: true,
      },
      {
        id: '4',
        name: 'Frittura di Calamari',
        description: 'Crispy fried squid with lemon aioli',
        price: 12,
        currency: 'EUR',
        category: 'antipasti',
        tags: [],
        available: false,
      },
    ],
  },
  {
    id: 'primi',
    name: 'Primi Piatti',
    sortOrder: 2,
    items: [
      {
        id: '5',
        name: 'Tagliatelle al Ragu',
        description: 'Fresh egg pasta with slow-cooked Bolognese sauce (6 hours)',
        price: 16,
        currency: 'EUR',
        category: 'primi',
        tags: [],
        available: true,
        featured: true,
      },
      {
        id: '6',
        name: 'Risotto ai Funghi Porcini',
        description: 'Carnaroli rice with wild porcini mushrooms and aged parmesan',
        price: 18,
        currency: 'EUR',
        category: 'primi',
        tags: ['gluten-free', 'vegetarian'],
        available: true,
      },
      {
        id: '7',
        name: 'Spaghetti alle Vongole',
        description: 'Spaghetti with fresh clams, garlic, white wine, and parsley',
        price: 17,
        currency: 'EUR',
        category: 'primi',
        tags: [],
        available: true,
      },
      {
        id: '8',
        name: "Penne all'Arrabbiata",
        description: 'Penne with spicy tomato sauce, garlic, and fresh chili',
        price: 13,
        currency: 'EUR',
        category: 'primi',
        tags: ['vegan', 'spicy'],
        available: true,
      },
    ],
  },
  {
    id: 'secondi',
    name: 'Secondi Piatti',
    sortOrder: 3,
    items: [
      {
        id: '9',
        name: 'Ossobuco alla Milanese',
        description: 'Braised veal shank with gremolata and saffron risotto',
        price: 28,
        currency: 'EUR',
        category: 'secondi',
        tags: ['gluten-free'],
        available: true,
        featured: true,
      },
      {
        id: '10',
        name: 'Branzino al Forno',
        description: 'Oven-roasted sea bass with cherry tomatoes and olives',
        price: 24,
        currency: 'EUR',
        category: 'secondi',
        tags: ['gluten-free'],
        available: true,
      },
      {
        id: '11',
        name: 'Pollo alla Parmigiana',
        description: 'Breaded chicken with tomato sauce and melted mozzarella',
        price: 19,
        currency: 'EUR',
        category: 'secondi',
        tags: [],
        available: true,
      },
    ],
  },
  {
    id: 'dolci',
    name: 'Dolci',
    sortOrder: 4,
    items: [
      {
        id: '12',
        name: 'Tiramisu della Casa',
        description: 'Our signature tiramisu with mascarpone and espresso',
        price: 9,
        currency: 'EUR',
        category: 'dolci',
        tags: ['vegetarian'],
        available: true,
        featured: true,
      },
      {
        id: '13',
        name: 'Panna Cotta',
        description: 'Vanilla panna cotta with seasonal berry compote',
        price: 8,
        currency: 'EUR',
        category: 'dolci',
        tags: ['gluten-free', 'vegetarian'],
        available: true,
      },
      {
        id: '14',
        name: 'Affogato al Caffe',
        description: 'Vanilla gelato drowned in hot espresso',
        price: 7,
        currency: 'EUR',
        category: 'dolci',
        tags: ['gluten-free', 'vegetarian'],
        available: true,
      },
    ],
  },
  {
    id: 'pizze',
    name: 'Pizze',
    sortOrder: 5,
    items: [
      {
        id: '15',
        name: 'Margherita DOC',
        description: 'San Marzano tomatoes, buffalo mozzarella, fresh basil, EVOO',
        price: 12,
        currency: 'EUR',
        category: 'pizze',
        tags: ['vegetarian'],
        available: true,
        featured: true,
      },
      {
        id: '16',
        name: 'Diavola',
        description: 'Tomato, mozzarella, spicy salami, chili flakes',
        price: 14,
        currency: 'EUR',
        category: 'pizze',
        tags: ['spicy'],
        available: true,
      },
      {
        id: '17',
        name: 'Quattro Formaggi',
        description: 'Mozzarella, gorgonzola, fontina, and parmesan',
        price: 15,
        currency: 'EUR',
        category: 'pizze',
        tags: ['vegetarian'],
        available: true,
      },
      {
        id: '18',
        name: 'Marinara',
        description: 'San Marzano tomatoes, garlic, oregano, EVOO — the original',
        price: 9,
        currency: 'EUR',
        category: 'pizze',
        tags: ['vegan'],
        available: true,
      },
    ],
  },
]

const reviews: Review[] = [
  {
    id: '1',
    author: 'Sofia M.',
    rating: 5,
    text: "The best pasta I've had outside of my nonna's kitchen. The tagliatelle al ragu is extraordinary — you can taste the 6 hours of slow cooking.",
    date: '2026-07-15',
    source: 'google',
    verified: true,
  },
  {
    id: '2',
    author: 'James P.',
    rating: 5,
    text: 'Walked in without a reservation on a Saturday night. Marco himself found us a table. The ossobuco was perfection. Will be back every week.',
    date: '2026-07-22',
    source: 'google',
    verified: true,
  },
  {
    id: '3',
    author: 'Elena K.',
    rating: 4,
    text: "Beautiful atmosphere, incredible wine list, and the tiramisu is the best in Milan. Only reason it's not 5 stars is the wait — but it's worth it.",
    date: '2026-08-01',
    source: 'tripadvisor',
    verified: true,
  },
  {
    id: '4',
    author: 'Thomas B.',
    rating: 5,
    text: 'We booked via WhatsApp and received a confirmation in 30 seconds. The whole experience was seamless — from booking to the last drop of limoncello.',
    date: '2026-08-03',
    source: 'google',
    verified: true,
  },
]

const team: TeamMember[] = [
  {
    id: '1',
    name: 'Marco Bianchi',
    role: 'Chef & Owner',
    bio: '25 years of passion for authentic Italian cuisine. Trained in Bologna, cooked in Rome, came home to Milan.',
    photo: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&h=400&fit=crop',
    specialties: ['Fresh Pasta', 'Risotto'],
    bookable: false,
  },
  {
    id: '2',
    name: 'Giulia Rossi',
    role: 'Sous Chef',
    bio: 'Our pastry wizard. Every dolce is made fresh daily.',
    photo: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=400&h=400&fit=crop',
    specialties: ['Pastry', 'Desserts'],
    bookable: false,
  },
  {
    id: '3',
    name: 'Alessandro Conti',
    role: 'Sommelier',
    bio: 'Award-winning sommelier with a cellar of 400+ Italian wines.',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
    specialties: ['Wine Pairing', 'Italian Wines'],
    bookable: true,
  },
]

const galleryImages: GalleryImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=600&fit=crop',
    alt: 'Restaurant interior',
    width: 600,
    height: 600,
    category: 'Interior',
  },
  {
    src: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&h=600&fit=crop',
    alt: 'Fresh pasta making',
    width: 600,
    height: 600,
    category: 'Kitchen',
  },
  {
    src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=600&fit=crop',
    alt: 'Pizza Margherita',
    width: 600,
    height: 600,
    category: 'Food',
  },
  {
    src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=600&fit=crop',
    alt: 'Fresh ingredients',
    width: 600,
    height: 600,
    category: 'Food',
  },
  {
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=600&fit=crop',
    alt: 'Dining area',
    width: 600,
    height: 600,
    category: 'Interior',
  },
  {
    src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=600&fit=crop',
    alt: 'Wine cellar',
    width: 600,
    height: 600,
    category: 'Interior',
  },
]

const faqs: FAQItem[] = [
  {
    question: 'Do you take reservations?',
    answer:
      'Yes! You can book directly on this page or send us a WhatsApp message. We confirm within minutes.',
  },
  {
    question: 'Do you cater for dietary requirements?',
    answer:
      'Absolutely. Our menu includes vegan, vegetarian, and gluten-free options. Let us know about any allergies when booking.',
  },
  {
    question: 'Is there parking nearby?',
    answer:
      'There is a public parking garage 100m away on Via Torino. We also recommend taking the Metro to Duomo station (5 min walk).',
  },
  {
    question: 'Can you host private events?',
    answer:
      'Yes, our upstairs room seats up to 40 guests. Perfect for birthdays, corporate dinners, and celebrations. Contact us for a custom menu.',
  },
  {
    question: 'Do you offer takeaway?',
    answer:
      'Yes, you can order takeaway directly through our menu. We also deliver within 3km via our own riders — no commission apps.',
  },
]

const mockSlots: BookingSlot[] = [
  { id: '1', date: new Date().toISOString().split('T')[0], time: '12:00', available: true, spotsLeft: 4 },
  { id: '2', date: new Date().toISOString().split('T')[0], time: '12:30', available: true, spotsLeft: 2 },
  { id: '3', date: new Date().toISOString().split('T')[0], time: '13:00', available: true, spotsLeft: 6 },
  { id: '4', date: new Date().toISOString().split('T')[0], time: '19:00', available: true, spotsLeft: 5 },
  { id: '5', date: new Date().toISOString().split('T')[0], time: '19:30', available: true, spotsLeft: 1 },
  { id: '6', date: new Date().toISOString().split('T')[0], time: '20:00', available: true, spotsLeft: 3 },
  { id: '7', date: new Date().toISOString().split('T')[0], time: '20:30', available: true, spotsLeft: 7 },
  { id: '8', date: new Date().toISOString().split('T')[0], time: '21:00', available: true, spotsLeft: 2 },
]

// --- NAVIGATION ---

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-white font-bold text-xl">
          The Garden Kitchen
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#menu" className="text-white/80 hover:text-white text-sm transition-colors">
            Menu
          </a>
          <a href="#story" className="text-white/80 hover:text-white text-sm transition-colors">
            Our Story
          </a>
          <a href="#team" className="text-white/80 hover:text-white text-sm transition-colors">
            Team
          </a>
          <a href="#gallery" className="text-white/80 hover:text-white text-sm transition-colors">
            Gallery
          </a>
          <a
            href="#booking"
            className="px-5 py-2 bg-white text-black font-semibold rounded-lg text-sm hover:bg-white/90 transition-colors"
          >
            Reserve a Table
          </a>
        </div>
      </div>
    </nav>
  )
}

// --- PAGE ---

export default function DineOSDemoPage() {
  return (
    <>
      <Navbar />

      <Hero
        title="Authentic Italian Kitchen"
        subtitle="Fresh pasta made daily. Wood-fired pizza. Seasonal ingredients from local farms. In the heart of Milan since 1998."
        backgroundImage="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&h=900&fit=crop"
        ctaPrimary={{ label: 'Reserve a Table', href: '#booking' }}
        ctaSecondary={{ label: 'View Menu', href: '#menu' }}
        overlayOpacity={0.55}
        height="full"
      />

      <MenuSection categories={menuCategories} locale="en" currency="EUR" />

      <div id="story">
        <StorySection
          headline="Our Story"
          blocks={[
            {
              title: 'From Bologna to Milan',
              text: "Marco Bianchi spent 15 years learning the craft of Italian cuisine in Bologna's oldest trattorias. In 1998, he brought that tradition to Milan — one plate at a time. Every dish on our menu tells a story of where it comes from and who taught Marco to make it.",
              image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=600&fit=crop',
            },
            {
              title: 'Fresh, Every Day',
              text: "Our pasta is made fresh every morning. Our ingredients come from farms within 100km of Milan. Our bread is baked in-house. We don't take shortcuts because our guests can taste the difference.",
              image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&h=600&fit=crop',
            },
            {
              title: 'Your Table Awaits',
              text: "Whether it's a Tuesday lunch or a Saturday celebration, every guest at The Garden Kitchen is treated like family. We remember your name, your favorite wine, and the table you prefer. That's not an algorithm — it's Italian hospitality.",
              image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
            },
          ]}
        />
      </div>

      <div id="team">
        <TeamGrid members={team} locale="en" />
      </div>

      <UpsellBanner
        items={[
          {
            title: 'Private Dining',
            description: 'Host your next event in our upstairs room. Up to 40 guests.',
            href: '#contact',
            icon: '🎉',
          },
          {
            title: 'Cooking Class',
            description: 'Learn to make fresh pasta with Chef Marco. Every Saturday morning.',
            href: '#contact',
            icon: '👨‍🍳',
          },
          {
            title: 'Gift Card',
            description: 'Give the gift of Italian cuisine. Available from EUR 50.',
            href: '#contact',
            icon: '🎁',
          },
        ]}
      />

      <ReviewCarousel reviews={reviews} locale="en" />

      <section id="booking" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4">Reserve Your Table</h2>
            <p className="text-gray-600 text-lg mb-6">
              Book directly — no commission, no redirect, no middleman. We confirm via WhatsApp
              within minutes.
            </p>
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <svg
                  className="w-4 h-4 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Free cancellation
              </span>
              <span className="flex items-center gap-1">
                <svg
                  className="w-4 h-4 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                WhatsApp confirmation
              </span>
              <span className="flex items-center gap-1">
                <svg
                  className="w-4 h-4 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                No fees
              </span>
            </div>
          </div>
          <BookingWidget
            locale="en"
            slots={mockSlots}
            socialProof={{ count: 347, label: 'guests booked this month' }}
            vertical="dineos"
            onSubmit={async (data) => {
              console.log('Booking submitted:', data)
              await new Promise((resolve) => setTimeout(resolve, 1000))
            }}
          />
        </div>
      </section>

      <div id="gallery">
        <Gallery images={galleryImages} locale="en" columns={3} />
      </div>

      <LoyaltyPrompt locale="en" />

      <FAQAccordion items={faqs} locale="en" />

      <Footer config={siteConfig} locale="en" />

      <WhatsAppCTA
        phoneNumber="+390212345678"
        message="Hi! I'd like to know more about The Garden Kitchen"
        vertical="dineos"
      />
    </>
  )
}
