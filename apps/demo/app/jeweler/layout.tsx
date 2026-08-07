import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lumière Fine Jewellery — Bespoke & Handcrafted, London',
  description: 'Handcrafted fine jewellery. Engagement rings, wedding bands, bespoke commissions. GIA certified diamonds. Mayfair, London.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
