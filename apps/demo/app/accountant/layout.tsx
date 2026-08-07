import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sterling & Cole — Chartered Accountants, Canary Wharf',
  description: 'ICAEW and ACCA chartered accountants in Canary Wharf, London. Tax planning, business advisory, annual accounts, payroll, VAT and company formation.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
