import { SITE } from './Seo';

export const DAS_URL = 'https://www.dassystems.com';

export const NAP = {
  name: 'DishNet Direct, Inc.',
  streetAddress: '142 Kennedy Avenue',
  addressLocality: 'Campbell',
  addressRegion: 'CA',
  postalCode: '95008',
  addressCountry: 'US',
  telephone: '+1-408-340-5085',
  email: 'info@dishnetdirect.com',
};

// Primary Organization with subOrganization binding to DAS Systems (the RF specialist division).
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE}/#organization`,
  name: NAP.name,
  alternateName: 'DishNet Direct',
  url: SITE,
  logo: `${SITE}/dishnet.png`,
  description:
    'DishNet Direct is a low voltage systems integrator delivering security, fire/life safety, AV, and structured cabling across California, with an in-house RF specialist division, DAS Systems.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: NAP.streetAddress,
    addressLocality: NAP.addressLocality,
    addressRegion: NAP.addressRegion,
    postalCode: NAP.postalCode,
    addressCountry: NAP.addressCountry,
  },
  telephone: NAP.telephone,
  email: NAP.email,
  areaServed: 'California',
  subOrganization: {
    '@type': 'Organization',
    name: 'DAS Systems',
    url: DAS_URL,
    description:
      'DAS Systems is the RF specialist division of DishNet Direct, engineering ERRCS, cellular DAS, and in-building wireless since 2000.',
  },
  sameAs: [
    'https://www.facebook.com/dishnetdirect/',
    'https://www.linkedin.com/company/234065/',
    'https://www.instagram.com/das_systems/',
  ],
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE}/#localbusiness`,
  name: NAP.name,
  image: `${SITE}/dishnet.png`,
  url: SITE,
  telephone: NAP.telephone,
  email: NAP.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: NAP.streetAddress,
    addressLocality: NAP.addressLocality,
    addressRegion: NAP.addressRegion,
    postalCode: NAP.postalCode,
    addressCountry: NAP.addressCountry,
  },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Northern California' },
    { '@type': 'AdministrativeArea', name: 'Southern California' },
  ],
};

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.name,
      item: `${SITE}${t.path}`,
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    serviceType: opts.serviceType,
    url: `${SITE}${opts.path}`,
    provider: { '@id': `${SITE}/#organization` },
    areaServed: 'California',
  };
}
