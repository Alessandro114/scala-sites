import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SpinalAxis Chiropractic | Back Pain, Sciatica & Posture London',
  description: 'GCC-registered chiropractor with 15+ years experience. Back pain, neck pain, sciatica, headaches and sports injuries. Initial assessment £75. Same-week appointments.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
