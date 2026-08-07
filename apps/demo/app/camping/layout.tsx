import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Starfield Camping | Under the Stars',
  description: 'Award-winning campsite with tent pitches, glamping bell tents, shepherd\'s huts and campervan hookups. Book your pitch online from £15/night.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
