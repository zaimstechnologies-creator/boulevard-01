import { MetadataRoute } from 'next';
import { PROJECTS } from '@/data/projects';
import { PARTNER_AGENCIES } from '@/data/partners';
import { INSIGHTS_ARTICLES } from '@/data/insights';
import { COMPANY_INFO } from '@/data/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = COMPANY_INFO.websiteUrl;
  const currentDate = '2026-10-18T00:00:00.000Z';

  // Static core routes
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}`, lastModified: currentDate, changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/projects`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/inventory`, lastModified: currentDate, changeFrequency: 'hourly', priority: 0.95 },
    { url: `${baseUrl}/compare`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/strategic-partners`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: currentDate, changeFrequency: 'daily', priority: 0.85 },
    { url: `${baseUrl}/team`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/career`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/contact`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
  ];

  // Dynamic project routes
  const projectRoutes: MetadataRoute.Sitemap = PROJECTS.map((p) => ({
    url: `${baseUrl}/projects/${p.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // Dynamic partner microsite routes
  const partnerRoutes: MetadataRoute.Sitemap = PARTNER_AGENCIES.map((pa) => ({
    url: `${baseUrl}/partners/etihad/${pa.partner_slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Dynamic insight article routes
  const articleRoutes: MetadataRoute.Sitemap = INSIGHTS_ARTICLES.map((art) => ({
    url: `${baseUrl}/blog/${art.slug}`,
    lastModified: art.published_at,
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  return [...staticRoutes, ...projectRoutes, ...partnerRoutes, ...articleRoutes];
}
