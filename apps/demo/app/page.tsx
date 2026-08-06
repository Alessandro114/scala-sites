import Link from 'next/link'

const verticals = [
  { name: 'DineOS', slug: '/restaurant', description: 'Restaurant, pizzeria, cafe', color: '#78350f', icon: '🍽' },
  { name: 'PropertyOS', slug: '/property', description: 'Real estate agency', color: '#1e3a5f', icon: '🏠' },
  { name: 'BeautyOS', slug: '/beauty', description: 'Hair salon, spa, barber', color: '#9f1239', icon: '💇' },
  { name: 'GymOS', slug: '/gym', description: 'Gym, CrossFit, yoga studio', color: '#18181b', icon: '🏋' },
]

export const metadata = {
  title: 'SCALA Sites — Open Source Vertical Websites',
  description: 'Pre-built, industry-optimized websites that connect natively to SCALA AI OS. Free, open source, beautiful.',
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

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Beautiful websites for every business</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pre-built, industry-optimized templates that connect natively to your business system.
            Booking, WhatsApp, reviews, real-time availability — all built in. No integrations needed.
          </p>
          <div className="flex justify-center gap-3 mt-6 text-sm text-gray-500">
            <span className="px-3 py-1 bg-gray-100 rounded-full">Next.js</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full">Tailwind CSS</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full">MIT License</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full">{'<'}2s LCP</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {verticals.map(v => (
            <Link key={v.slug} href={v.slug}
              className="group block rounded-2xl border border-gray-200 p-8 hover:shadow-xl hover:border-gray-300 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{v.icon}</span>
                <div>
                  <h3 className="text-xl font-bold group-hover:underline">{v.name}</h3>
                  <p className="text-sm text-gray-500">{v.description}</p>
                </div>
              </div>
              <div className="h-2 rounded-full mt-4" style={{ background: v.color, opacity: 0.2 }} />
              <p className="text-sm text-gray-400 mt-3">Click to view live demo →</p>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Coming Soon</h3>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-500">
            {['TravelOS (Hotels)', 'StudioOS (Architecture)', 'LegalOS (Law Firms)', 'ClinicoOS (Clinics)', 'AgencyOS (Marketing)', 'RetailOS (Shops)'].map(v => (
              <span key={v} className="px-4 py-2 border border-dashed border-gray-300 rounded-full">{v}</span>
            ))}
          </div>
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
