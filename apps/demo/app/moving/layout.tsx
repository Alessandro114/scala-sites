import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SwiftMove | Professional Removal & Moving Services — Home & Office',
  description: 'Stress-free moving made simple. Home moves, office relocations, international removals, packing, storage and man & van. Instant quotes. Serving UK nationwide.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
