import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Saltwater Marina | Your Harbour of Choice',
  description: '120-berth full-service marina with fuel dock, 35T crane, chandlery and boat services. Visitor berths from £3/ft/night. Enquire online.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
