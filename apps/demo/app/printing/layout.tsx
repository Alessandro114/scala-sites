import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ChromaPress Print Studio — Print That Makes an Impact',
  description: 'Professional printing services for business cards, flyers, brochures, banners, and more. Fast turnaround, premium quality, competitive pricing. Order online today.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
