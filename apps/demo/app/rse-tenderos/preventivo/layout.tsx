import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Prospetto Servizi — TenderOS per RSE',
  description: 'Prospetto modulare TenderOS: piattaforma core, setup dedicato, connettori EU/Italia, SARA WhatsApp, formazione, supporto enterprise.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
