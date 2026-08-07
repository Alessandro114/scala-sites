import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Meridian Wealth — Independent Financial Advisors',
  description: 'FCA-regulated independent financial advisors. Expert retirement planning, investments, tax planning, and estate planning. £250M under management. Book a free consultation.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
