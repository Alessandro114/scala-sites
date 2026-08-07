import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Castello's Barber Shop — Traditional Craft, Modern Style",
  description: "Est. 1987. Classic cuts, skin fades, hot towel shaves. Walk-ins welcome. Kensington, London.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
