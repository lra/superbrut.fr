import type { MetadataRoute } from 'next'

import { SITE_URL } from '@/site/site-metadata'

export default function sitemap() {
  return [{ url: `${SITE_URL}/` }] satisfies MetadataRoute.Sitemap
}
