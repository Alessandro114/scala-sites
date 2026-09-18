import type { Metadata } from 'next'
import { Suspense } from 'react'
import { GAPageView } from './ga-page-view'
import './globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s | SCALA Sites',
    default: 'SCALA Sites — 100 Industry Website Templates, Open Source',
  },
  description:
    '100 production-ready, industry-optimized website templates. Restaurant, hotel, clinic, gym, law firm, farm shop, vineyard, art gallery and more. Free, open source, built with Next.js + TypeScript.',
  keywords: [
    'website templates',
    'next.js templates',
    'industry templates',
    'restaurant website',
    'hotel website',
    'open source',
    'SCALA AI OS',
    'vertical SaaS',
    'business website',
    '100 templates',
    'farm shop website',
    'vineyard website',
    'art gallery website',
    'church website',
    'nonprofit website',
  ],
  authors: [{ name: 'SCALA AI OS', url: 'https://get-scala.com' }],
  openGraph: {
    title: 'SCALA Sites — 100 Industry Website Templates',
    description:
      '100 production-ready website templates for every industry. Restaurant, hotel, clinic, gym, law firm, vineyard, art gallery and more. Free & open source.',
    url: 'https://sites.get-scala.com',
    siteName: 'SCALA Sites',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SCALA Sites — 100 Industry Website Templates',
    description:
      '100 production-ready website templates for every industry. Free & open source.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* GA4 — never installed on sites.get-scala.com before (18/09/2026 audit).
            Inline in <head> so it fires on the initial SSR response. */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-LX2PQTW78M" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            'analytics_storage': 'granted',
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied'
          });
          gtag('js', new Date());
          gtag('config', 'G-LX2PQTW78M');
        `,
          }}
        />
      </head>
      <body className="antialiased">
        {children}
        <Suspense fallback={null}>
          <GAPageView />
        </Suspense>
      </body>
    </html>
  )
}
