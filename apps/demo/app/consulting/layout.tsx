import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vantage Partners — Strategy. Execution. Results.',
  description:
    'Boutique management consulting firm specialising in Strategy, Operations, Digital Transformation, M&A Advisory, Sustainability, and Organisational Design.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
