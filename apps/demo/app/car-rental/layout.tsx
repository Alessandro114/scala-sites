import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PrimeRent | Premium Car Rental — Economy to Luxury, From £25/day',
  description: 'Drive your way. Economy, SUV, luxury and electric car hire with flexible daily rates. Free delivery & collection. Instant booking. London & UK airports.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
