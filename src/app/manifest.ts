import type { MetadataRoute } from 'next'

import {
  SITE_DESCRIPTION,
  SITE_NAME,
} from '@/site/site-metadata'

export default function manifest() {
  return {
    name: SITE_NAME,
    short_name: SITE_NAME,
    description: SITE_DESCRIPTION,
    start_url: '/',
    display: 'standalone',
    background_color: '#f6f2e9',
    theme_color: '#183d31',
    lang: 'fr-FR',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  } satisfies MetadataRoute.Manifest
}
