import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vino Oscuro — Wine Bar & Cellar | 12 Regions, 200+ Labels',
  description: 'An intimate wine bar with a curated list spanning 12 regions. Tasting events, expert pairings, and a cellar collection open for private exploration.',
  keywords: ['wine bar', 'natural wine', 'wine tasting', 'wine cellar', 'sommelier', 'italian wine', 'wine pairing'],
  openGraph: {
    title: 'Vino Oscuro — Wine Bar & Cellar',
    description: 'Curated wines from 12 regions. Tasting events, cellar collection, expert food pairings.',
    type: 'website',
  },
}

export default function WineBarLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
