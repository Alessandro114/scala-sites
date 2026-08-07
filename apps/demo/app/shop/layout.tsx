import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MAISON — Curated Fashion & Lifestyle',
  description: 'Luxury fashion boutique in Marylebone, London. Curated clothing, accessories, and homeware.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
