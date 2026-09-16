import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Prospetto Servizi — GF Costruzioni',
  description: 'Prospetto modulare sviluppo digitale: sito vetrina, SEO, Google Ads, social media, manutenzione.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
