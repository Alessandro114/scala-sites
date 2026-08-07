import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GreenCraft Gardens | Landscape Design, Planting & Garden Maintenance',
  description: 'Award-winning landscape design and garden maintenance. From full garden transformations to seasonal planting, irrigation, and tree surgery. Free consultation.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
