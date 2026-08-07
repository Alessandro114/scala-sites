import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SteelCap Roofing | Expert Roofing Contractors — 25-Year Guarantee',
  description: 'Professional roofing specialists covering flat roofs, pitched roofs, guttering, chimney repair and more. Free survey. 25-year guarantee. Serving London & Home Counties.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
