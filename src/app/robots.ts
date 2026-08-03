import type { MetadataRoute } from 'next'

import { SITE_URL } from '@/site/site-metadata'

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  } satisfies MetadataRoute.Robots
}
