import { MetadataRoute } from 'next'
import { rentalVenues } from '@/data/venues'

const BASE = 'https://helpful-fudge-b837eb.netlify.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/gangnam-lounge`, lastModified: now, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${BASE}/cheongdam-lounge`, lastModified: now, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${BASE}/apgujeong-lounge`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/birthday-party`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/corporate-event`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/private-party`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${BASE}/vip-lounge`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${BASE}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },
    { url: `${BASE}/en`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
  ]

  const venuePages: MetadataRoute.Sitemap = rentalVenues.map((v) => ({
    url: `${BASE}/venues/${v.id}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.9,
  }))

  return [...staticPages, ...venuePages]
}
