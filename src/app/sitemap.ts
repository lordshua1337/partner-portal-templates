import type { MetadataRoute } from 'next'
import { TEMPLATES } from '@/data/templates'
import { TAX_RESOLUTION_TOPICS } from '@/data/topics/tax-resolution'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://partner-portal-templates.vercel.app'

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/setup`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]

  const templateRoutes: MetadataRoute.Sitemap = TEMPLATES.map((t) => ({
    url: `${baseUrl}/templates/${t.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const topicRoutes: MetadataRoute.Sitemap = TAX_RESOLUTION_TOPICS.map((t) => ({
    url: `${baseUrl}/tax-resolution/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  return [...staticRoutes, ...templateRoutes, ...topicRoutes]
}
