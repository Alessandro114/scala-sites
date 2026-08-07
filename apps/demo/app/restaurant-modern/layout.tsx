import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NORI — Contemporary Japanese',
  description: 'Fine dining Japanese restaurant in Mayfair, London. Omakase, sushi, and seasonal kaiseki.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
