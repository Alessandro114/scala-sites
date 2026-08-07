import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Meridian Grand — Luxury Hotel',
  description: 'Five-star luxury hotel in Mayfair, London. Rooms, suites, and experiences.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
