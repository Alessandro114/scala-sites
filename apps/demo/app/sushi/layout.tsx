import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ryō — Omakase Sushi Restaurant | Authentic Japanese Cuisine',
  description: 'An intimate omakase experience guided by Chef Kenji. Seasonal nigiri, sashimi, and curated sake selection. Pure Japanese craft in every course.',
  keywords: ['omakase', 'sushi', 'Japanese restaurant', 'nigiri', 'sashimi', 'sake', 'Japanese cuisine', 'chef tasting menu'],
  openGraph: {
    title: 'Ryō — Omakase Sushi Restaurant',
    description: 'Pure Japanese craft. Seasonal omakase, nigiri, sashimi and sake by Chef Kenji.',
    type: 'website',
  },
}

export default function SushiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
