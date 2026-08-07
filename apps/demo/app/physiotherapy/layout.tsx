import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PeakForm Physiotherapy | Sports Injury, Rehab & Back Pain London',
  description: 'HCPC-registered physiotherapists in London. Sports injury, post-surgery rehab, back pain, women\'s health & neuro rehab. Initial assessment £85. Same-week appointments available.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
