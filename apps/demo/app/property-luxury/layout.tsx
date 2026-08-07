import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mayfair & Partners — Luxury Property Specialists',
  description: 'Ultra-prime real estate in Mayfair, Belgravia, and Chelsea. Sales from £5M.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
