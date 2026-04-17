export const siteIdentity = {
  code: process.env.NEXT_PUBLIC_SITE_CODE || '4acww0g5o2',
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'Dailyhubglobal',
  tagline: process.env.NEXT_PUBLIC_SITE_TAGLINE || 'Independent media updates',
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    'A simple newsroom-style publication for announcements, coverage, and media updates on Dailyhubglobal.',
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN || 'dailyhubglobal.com',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://dailyhubglobal.com',
  ogImage: process.env.NEXT_PUBLIC_SITE_OG_IMAGE || '/og-default.png',
  googleMapsEmbedApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY || '',
} as const

export const defaultAuthorProfile = {
  name: siteIdentity.name,
  avatar: '/placeholder.svg?height=80&width=80',
} as const
