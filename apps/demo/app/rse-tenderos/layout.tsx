import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TenderOS — S.C.A.L.A. AI OS per RSE',
  description: "TenderOS: l'AI Operating System per la gestione di gare e bandi europei di RSE — Ricerca sul Sistema Energetico. Radar AI su 16+ fonti, gap analysis automatica, agente autonomo, SARA WhatsApp.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
