import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DineOS — S.C.A.L.A. AI OS per La Brace',
  description:
    "DineOS: la piattaforma AI per ristorante, hotel ed eventi de La Brace — Forcola. Prenotazioni H24, no-show management, yield management camere, pipeline eventi. SARA risponde su WhatsApp.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
