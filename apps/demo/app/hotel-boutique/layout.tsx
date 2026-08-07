import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Ivy House — Boutique Hotel & Spa',
  description: 'Boutique hotel in the Cotswolds. Country dining, spa, and experiences.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
