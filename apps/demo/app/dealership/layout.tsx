import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AutoSelect — Certified Pre-Owned Vehicles',
  description: 'Certified pre-owned cars in East London. Test drives, finance, and warranty.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
