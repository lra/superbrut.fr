import type { MetadataRoute } from 'next'

import { SITE_URL } from '@/site/site-metadata'

export default function sitemap() {
  return [
    { url: `${SITE_URL}/` },
    { url: `${SITE_URL}/probleme` },
    { url: `${SITE_URL}/objectifs` },
    { url: `${SITE_URL}/participer` },
    { url: `${SITE_URL}/questions` },
  ] satisfies MetadataRoute.Sitemap
}
