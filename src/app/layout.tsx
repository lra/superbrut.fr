import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import Link from 'next/link'
import type { ReactNode } from 'react'

import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
} from '@/site/site-metadata'

import './globals.css'

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  creator: SITE_NAME,
  publisher: SITE_NAME,
  openGraph: {
    locale: 'fr_FR',
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f6f2e9',
}

export default function RootLayout(props: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="fr">
      <body>
        <header className="site-header">
          <Link className="brand" href="/" aria-label="Superbrut, accueil">
            super<span>brut</span>
          </Link>
          <nav aria-label="Navigation principale">
            <Link href="/">Simulateur</Link>
            <Link href="/probleme">Le problème</Link>
            <Link href="/objectifs">Nos objectifs</Link>
            <Link href="/participer">Participer</Link>
            <Link href="/questions">Questions</Link>
          </nav>
        </header>
        {props.children}
        <footer>
          <Link className="brand footer-brand" href="/">
            super<span>brut</span>
          </Link>
          <p>Pour des fiches de paie claires et transparentes.</p>
        </footer>
        <Analytics />
      </body>
    </html>
  )
}
