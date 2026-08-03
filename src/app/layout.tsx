import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import './globals.css'

export const metadata: Metadata = {
  title: 'Superbrut — Pour des fiches de paie transparentes',
  description:
    'Superbrut défend une présentation claire du coût du travail et des cotisations sociales sur les fiches de paie françaises.',
  metadataBase: new URL('https://superbrut.fr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    locale: 'fr_FR',
    siteName: 'Superbrut',
    title: 'Superbrut — Pour des fiches de paie transparentes',
    description:
      'Regrouper les cotisations sociales et montrer aux salariés le coût réel de leur rémunération.',
    type: 'website',
    url: '/',
  },
}

export default function RootLayout(props: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="fr">
      <body>{props.children}</body>
    </html>
  )
}
