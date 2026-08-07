import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kensington & Partners — Luxury Property',
  description: 'Premium real estate agency in Kensington, London. Sales, lettings, and property management.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
