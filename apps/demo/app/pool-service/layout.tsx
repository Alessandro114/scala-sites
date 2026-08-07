import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AquaClear Pools | Professional Pool Cleaning & Maintenance Services',
  description: 'Crystal clear pools every day. Expert pool cleaning, chemical balancing, equipment repair and renovation. Weekly plans from £45. Serving London & Surrey.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
