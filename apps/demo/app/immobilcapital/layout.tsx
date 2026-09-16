import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PropertyOS — S.C.A.L.A. AI OS per ImmobilCapital',
  description:
    'PropertyOS: la piattaforma AI per la gestione del portfolio luxury di ImmobilCapital — Milano, Dubai, Svizzera, USA. SARA risponde H24, agente autonomo gestisce lead e visite.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
