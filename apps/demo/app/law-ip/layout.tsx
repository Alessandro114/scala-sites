import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Grey & Hart — Intellectual Property Law, London',
  description: 'Specialist IP law firm in Holborn. Patents, trademarks, copyright, and licensing for innovators and brands.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
