import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kensington Motors — Premium Car Dealership',
  description: 'Certified pre-owned luxury vehicles in Kensington, London.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
