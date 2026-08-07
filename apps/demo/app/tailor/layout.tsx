import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ashworth & Sons — Bespoke Tailoring, Savile Row London',
  description: 'Bespoke and made-to-measure suits, shirts and alterations. Savile Row tradition since 1923. Book your fitting appointment today.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
