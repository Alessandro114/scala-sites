import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Studio Notarile Ferretti — Notaio Milano',
  description:
    'Studio notarile a Milano. Atti immobiliari, successioni, costituzione di società, procure, testamenti e autenticazioni. Appuntamento online disponibile.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
