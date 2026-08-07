import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Iron Gate Brewery — 12 Beers on Tap | Craft Taproom',
  description: 'Independent craft brewery with 12 beers on tap daily. IPAs, stouts, sours, lagers. Brewery tours, taproom, beer club membership, and seasonal events.',
  keywords: ['craft brewery', 'taproom', 'craft beer', 'IPA', 'stout', 'sour beer', 'brewery tours', 'beer club'],
  openGraph: {
    title: 'Iron Gate Brewery — 12 Beers on Tap',
    description: 'Craft brewery and taproom. 12 rotating taps, tours, beer club, and events. Brewed with obsession.',
    type: 'website',
  },
}

export default function BreweryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
