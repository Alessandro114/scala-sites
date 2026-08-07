import Link from 'next/link'

const verticals = [
  { name: 'DineOS', slug: '/restaurant', description: 'Restaurant, pizzeria, cafe', color: '#78350f', icon: '🍽' },
  { name: 'PropertyOS', slug: '/property', description: 'Real estate agency', color: '#1e3a5f', icon: '🏠' },
  { name: 'BeautyOS', slug: '/beauty', description: 'Hair salon, spa, barber', color: '#9f1239', icon: '💇' },
  { name: 'GymOS', slug: '/gym', description: 'Gym, CrossFit, yoga studio', color: '#18181b', icon: '🏋' },
  { name: 'TravelOS', slug: '/hotel', description: 'Hotel, B&B, resort', color: '#0f172a', icon: '🏨' },
  { name: 'StudioOS', slug: '/studio', description: 'Creative studio, agency, photography', color: '#111111', icon: '🎨' },
  { name: 'ClinicoOS', slug: '/clinic', description: 'Medical clinic, dental, physio', color: '#0d5c63', icon: '🏥' },
  { name: 'LegalOS', slug: '/law', description: 'Law firm, solicitors', color: '#1a1a3e', icon: '⚖️' },
  { name: 'AutoOS', slug: '/auto', description: 'Car dealership, garage', color: '#1c1c1c', icon: '🚗' },
  { name: 'WeddingOS', slug: '/wedding', description: 'Wedding venue, planner', color: '#8b2252', icon: '💒' },
  { name: 'PetOS', slug: '/vet', description: 'Veterinary, pet grooming', color: '#166534', icon: '🐾' },
  { name: 'EduOS', slug: '/school', description: 'School, academy, courses', color: '#4c1d95', icon: '🎓' },
]

export const metadata = {
  title: 'SCALA Sites — Open Source Vertical Websites',
  description: 'Pre-built, industry-optimized websites that connect natively to SCALA AI OS. 12 verticals, free, open source.',
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold">SCALA Sites</h1>
          <p className="text-sm text-gray-500">Open Source Vertical Websites</p>
        </div>
        <a href="https://github.com/Alessandro114/scala-sites" target="_blank" rel="noopener noreferrer"
          className="px-4 py-2 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors">
          GitHub
        </a>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Beautiful websites for every business</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            12 industry-optimized templates that connect natively to your business system.
            Booking, WhatsApp, reviews, real-time availability — all built in.
          </p>
          <div className="flex justify-center gap-3 mt-6 text-sm text-gray-500">
            <span className="px-3 py-1 bg-gray-100 rounded-full">Next.js 14</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full">TypeScript</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full">Tailwind CSS</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full">MIT License</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {verticals.map(v => (
            <Link key={v.slug} href={v.slug}
              className="group block rounded-2xl border border-gray-200 p-6 hover:shadow-xl hover:border-gray-300 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{v.icon}</span>
                <div>
                  <h3 className="text-lg font-bold group-hover:underline">{v.name}</h3>
                  <p className="text-sm text-gray-500">{v.description}</p>
                </div>
              </div>
              <div className="h-1.5 rounded-full mt-3" style={{ background: v.color, opacity: 0.2 }} />
              <p className="text-xs text-gray-400 mt-2">View demo →</p>
            </Link>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-gray-50 text-center">
          <h3 className="text-xl font-bold mb-2">Powered by SCALA AI OS</h3>
          <p className="text-gray-600 mb-4">
            These templates work standalone with mock data. Connect to SCALA for live booking,
            WhatsApp (via SARA), real-time availability, CRM, and AI-powered features.
          </p>
          <a href="https://get-scala.com" target="_blank" rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition-colors">
            Learn more about SCALA
          </a>
        </div>
      </main>

      <footer className="border-t px-6 py-6 text-center text-sm text-gray-400">
        <p>SCALA Sites is open source under MIT License. Built with Next.js + Tailwind CSS.</p>
        <p className="mt-1">Powered by <a href="https://get-scala.com" className="underline">SCALA AI OS</a></p>
      </footer>
    </div>
  )
}
