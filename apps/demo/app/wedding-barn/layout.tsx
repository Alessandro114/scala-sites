import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Oakwood Barn — Rustic Wedding Venue, Hampshire',
  description: 'A stunning rustic barn wedding venue in the heart of Hampshire. Ceremonies, receptions, and exclusive hire packages.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
