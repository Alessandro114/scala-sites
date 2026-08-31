import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GF Costruzioni SRL | Impresa Edile Certificata SOA — Villa Literno',
  description: 'Impresa edile certificata SOA dal 2000. Edilizia civile, industriale, hospitality, ristrutturazioni, restauro conservativo, lavori stradali. Villa Literno (CE), Campania.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
