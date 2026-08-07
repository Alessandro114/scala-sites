import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Inkwell Studio — Bespoke Tattoo Art, London',
  description: 'Custom tattoo studio in London. Traditional, Japanese, Blackwork, Realism. Sterile environment. Book your consultation today.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
