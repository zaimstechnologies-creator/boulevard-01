import { Project, InsightArticle } from '@/types';
import { COMPANY_INFO } from '@/data/constants';

export const generateOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': `${COMPANY_INFO.websiteUrl}/#organization`,
    name: COMPANY_INFO.name,
    legalName: COMPANY_INFO.legalName,
    alternateName: 'Boulevard01',
    slogan: COMPANY_INFO.tagline,
    url: COMPANY_INFO.websiteUrl,
    logo: `${COMPANY_INFO.websiteUrl}/images/boulevard01-logo.png`,
    telephone: COMPANY_INFO.phone,
    email: COMPANY_INFO.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_INFO.address.street,
      addressLocality: `${COMPANY_INFO.address.locality}, ${COMPANY_INFO.address.city}`,
      addressRegion: COMPANY_INFO.address.region,
      postalCode: COMPANY_INFO.address.postalCode,
      addressCountry: COMPANY_INFO.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 31.3685,
      longitude: 74.1822,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '10:00',
        closes: '20:00',
      },
    ],
    sameAs: [
      COMPANY_INFO.social.facebook,
      COMPANY_INFO.social.instagram,
      COMPANY_INFO.social.linkedin,
      COMPANY_INFO.social.youtube,
    ],
  };
};

export const generateProjectSchema = (project: Project) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'ApartmentComplex',
    '@id': `${COMPANY_INFO.websiteUrl}/projects/${project.slug}#building`,
    name: project.title,
    description: project.overview_body.slice(0, 240) + '...',
    url: `${COMPANY_INFO.websiteUrl}/projects/${project.slug}`,
    telephone: COMPANY_INFO.phone,
    containedInPlace: {
      '@type': 'Place',
      name: project.city === 'lahore' ? 'Bahria Town Lahore' : 'Bahria Town Islamabad Phase 8',
      address: {
        '@type': 'PostalAddress',
        streetAddress: project.location_text,
        addressLocality: project.city === 'lahore' ? 'Lahore' : 'Islamabad',
        addressRegion: 'Punjab',
        addressCountry: 'PK',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: project.geo_latitude,
        longitude: project.geo_longitude,
      },
    },
    amenityFeature: project.amenities.map((amenity) => ({
      '@type': 'LocationFeatureSpecification',
      name: amenity.replace('-', ' ').toUpperCase(),
      value: true,
    })),
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'PKR',
      lowPrice: project.starting_price_pkr.toString(),
      highPrice: project.max_price_pkr.toString(),
      offerCount: '120',
    },
  };
};

export const generateArticleSchema = (article: InsightArticle) => {
  const schemas: any[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      '@id': `${COMPANY_INFO.websiteUrl}/blog/${article.slug}#article`,
      headline: article.title,
      description: article.excerpt,
      image: article.cover_image,
      datePublished: article.published_at,
      dateModified: article.published_at,
      author: {
        '@type': 'Person',
        name: article.author.name,
        jobTitle: article.author.role,
      },
      publisher: {
        '@type': 'Organization',
        name: COMPANY_INFO.name,
        logo: {
          '@type': 'ImageObject',
          url: `${COMPANY_INFO.websiteUrl}/images/boulevard01-logo.png`,
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `${COMPANY_INFO.websiteUrl}/blog/${article.slug}`,
      },
    },
  ];

  if (article.faqs && article.faqs.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: article.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    });
  }

  return schemas;
};
