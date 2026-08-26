import { brand, capabilities, clients } from '@src/config/mantis'

export const site = {
  name: 'Mantis Labs',
  shortName: 'Mantis',
  url: (import.meta.env.VITE_SITE_URL ?? brand.siteUrl).replace(/\/$/, ''),
  locale: 'en_US',
  themeColor: '#050505',
  twitterHandle: '@trymantislabs',
  defaultOgImage: '/videos/hero-reel-poster.jpg',
  defaultDescription:
    'Mantis Labs is a creative technology studio that builds immersive digital experiences for sports, commerce, and culture. 3D, spatial web, fan engagement, and award-winning engineering.',
} as const

export interface PageSeo {
  title: string
  description: string
  path: string
}

export const pageSeo = {
  home: {
    title: 'Mantis Labs | We build digital experiences worth staying in',
    description:
      'Mantis Labs builds immersive digital experiences that convert. Creative technology for sports, commerce, and culture: 3D, spatial web, fan platforms, and production-grade engineering from an award-winning dev studio.',
    path: '/',
  },
  work: {
    title: 'Work | Immersive, web, and product case studies',
    description:
      'Case studies from Mantis Labs: Chicago Cubs ecommerce, Seattle Mariners, Burnley FC, Pro Padel League, and immersive activations for global sports and culture brands.',
    path: '/work',
  },
  about: {
    title: 'About | Creative technology studio',
    description:
      'Mantis Labs combines immersive creative technology with award-winning engineering. Born at Stadia Ventures, proven with Arsenal, Paris 2024, New Balance, and the St. Louis Blues.',
    path: '/about',
  },
  contact: {
    title: 'Contact | Start a project',
    description:
      'Book a conversation with Mantis Labs. Creative technology for immersive web, 3D, spatial experiences, and sports fan engagement. hello@trymantislabs.com',
    path: '/contact',
  },
} satisfies Record<string, PageSeo>

export function absoluteUrl(path: string): string {
  if (path.startsWith('http')) return path
  return `${site.url}${path.startsWith('/') ? path : `/${path}`}`
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    email: brand.email,
    description: site.defaultDescription,
    logo: absoluteUrl(brand.logos.markWhite),
  }
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    name: site.name,
    url: site.url,
    description: site.defaultDescription,
    publisher: { '@id': `${site.url}/#organization` },
    inLanguage: 'en-US',
  }
}

export function professionalServiceJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${site.url}/#service`,
    name: site.name,
    url: site.url,
    description: site.defaultDescription,
    email: brand.email,
    areaServed: 'Worldwide',
    knowsAbout: capabilities,
    brand: clients.slice(0, 6),
    provider: { '@id': `${site.url}/#organization` },
  }
}

export function homeJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [organizationJsonLd(), websiteJsonLd(), professionalServiceJsonLd()],
  }
}
