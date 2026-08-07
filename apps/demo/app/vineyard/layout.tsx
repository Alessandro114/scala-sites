import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ashwood Estate Winery — Estate Wines Crafted with Passion Since 1876',
  description: 'Award-winning estate wines from our centuries-old vineyard. Vineyard tours & tastings, wine club membership, private events, and harvest festival. Book your experience.',
  keywords: ['vineyard', 'estate wines', 'wine tasting', 'vineyard tours', 'wine club', 'English wine', 'winery', 'harvest festival'],
  openGraph: {
    title: 'Ashwood Estate Winery — Estate Wines Crafted with Passion',
    description: 'Award-winning estate wines. Tours, tastings, private events and wine club membership from our historic vineyard established 1876.',
    type: 'website',
  },
}

export default function VineyardLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
