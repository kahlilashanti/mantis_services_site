export const media = {
  heroDesktop: '/videos/hero-reel-desktop.mp4',
  heroMobile: '/videos/hero-reel-mobile.mp4',
  heroPoster: '/videos/hero-reel-poster.jpg',
  heroPosterMobile: '/videos/hero-reel-poster-mobile.jpg',
  workVideos: {
    commerce: '/videos/work-commerce-lite.mp4',
    sports: '/videos/work-sports-lite.mp4',
    immersive: '/videos/work-immersive-lite.mp4',
  },
  workPosters: {
    commerce: '/videos/work-commerce-poster.jpg',
    sports: '/videos/work-sports-poster.jpg',
    immersive: '/videos/work-immersive-poster.jpg',
  },
} as const

export type WorkVideoKey = keyof typeof media.workVideos

export interface WorkItem {
  id: string
  client: string
  title: string
  result: string
  category: 'commerce' | 'sports' | 'immersive' | 'product' | 'ai' | 'experiential'
  accent: string
  /** Poster JPG, logo PNG, or screenshot — always shown */
  poster?: string
  /** Optional loop MP4 (hover / in-view on mobile) */
  video?: string
  /** Static logo tiles: contain + padding. Website screenshots: cover. Video tiles always cover. */
  mediaFit?: 'cover' | 'contain'
  /** Live site — shows visit icon on tile */
  visitUrl?: string
  /** Homepage placeholder — no media, not linked */
  placeholder?: boolean
  /** @deprecated Fallback shared placeholders until per-project assets exist */
  videoKey?: WorkVideoKey
}

export interface TeamMember {
  id: string
  name: string
  title: string
  bio: string
  funFact: string
  /** Headshot — `/images/team/{id}.jpg` */
  photo?: string
  linkedinUrl?: string
}

export interface DifferentiatorPillar {
  id: string
  proof: string
  title: string
  copy: string
}

export const brand = {
  name: 'Mantis Labs',
  logos: {
    horizontalWhite: '/images/brand/mantis-logo-horizontal-white.png',
    verticalWhite: '/images/brand/mantis-logo-vertical-white.png',
    markWhite: '/images/brand/mantis-logo-mark-white.png',
  },
  headline: 'We build digital experiences worth staying in.',
  subheadline:
    'Mantis is a creative technology company that builds experiences people want to explore, participate in, and return to.',
  positioning:
    'We solve business problems by translating them through a creative lens, shaping the strategy, and building digital experiences that convert, meeting people where they are, honoring your brand story, and exceeding expectations with something worth talking about.',
  belief:
    'The internet is good at delivering information and transactions. We believe it can do more. The best physical experiences create curiosity, participation, emotion, and memory. We bring that same thinking to the digital world.',
  differentiatorHeadline: 'Immersive craft. Award-winning engineering.',
  differentiatorLead:
    'Mantis Labs is a collaboration between Mantis, the creative technology studio behind immersive fan experiences, and FYC Labs, an award-winning development studio and two-time Inc. 5000 honoree. Creative lens and production-grade systems, under one roof.',
  differentiators: [
    {
      id: 'creative',
      proof: 'Mantis',
      title: 'Immersive creative technology',
      copy:
        'Founded on the idea that the internet should feel like a place. From St. Louis Blues (+80% AOV) to Arsenal, Paris 2024, and New Balance, we build 3D, spatial, and experiential work in-house.',
    },
    {
      id: 'engineering',
      proof: 'FYC Labs',
      title: 'Award-winning dev studio',
      copy:
        'Two-time Inc. 5000 honoree (#791 in 2023, #4,499 in 2025). Inc. Power Partners for IT services. Over a decade shipping web, mobile, and enterprise platforms for Stadia Ventures, Remax, and National University.',
    },
    {
      id: 'collab',
      proof: 'Mantis Labs',
      title: 'Built together',
      copy:
        'Sports-native from Stadia Ventures: roster, schedule, fan engagement, and real-time data. Sprint releases, sub-two-second load times, and full client ownership of repo, hosting, and cloud.',
    },
  ] satisfies DifferentiatorPillar[],
  closingLine: 'Ready to build something people stay for?',
  siteUrl: 'https://trymantislabs.com',
  email: 'hello@trymantislabs.com',
  calendlyUrl: 'https://calendly.com/kahlilashanti',
}

export const capabilities = [
  'Strategy',
  'Product & Web',
  'AI Integration',
  'Spatial / Immersive',
  'Experiential',
]

export const clients = [
  'Arsenal',
  'New Balance',
  'Chicago Cubs',
  'Seattle Mariners',
  'St. Louis Blues',
  'Burnley FC',
  'Roblox',
]

export const work: WorkItem[] = [
  {
    id: 'pro-padel-league',
    client: 'Pro Padel League',
    title: 'Full website rebuild, design & event hub',
    result: 'Real-time fan analytics',
    category: 'sports',
    accent: '#7c3aed',
    poster: '/videos/work/ppl-website.jpg',
    mediaFit: 'cover',
    visitUrl: 'https://propadelleague.com/',
  },
  {
    id: 'burnley-fc',
    client: 'Burnley FC',
    title: 'DudePerfect Youth Cup fan experience',
    result: 'Immersive fan discovery',
    category: 'sports',
    accent: '#6c1d45',
    poster: '/videos/work/burnley-full-poster.jpg',
    video: '/videos/work/burnley-full.mp4',
  },
  {
    id: 'chicago-cubs',
    client: 'Chicago Cubs',
    title: '31.9% in 2 weeks · 3D + Shopify, Field of Dreams',
    result: '10× avg ecommerce conversion',
    category: 'sports',
    accent: '#0e3386',
    poster: '/videos/work/cubs-shop-poster.jpg',
    video: '/videos/work/cubs-shop.mp4',
  },
  {
    id: 'tbd',
    client: 'TBD',
    title: 'Next case study',
    result: 'Coming soon',
    category: 'product',
    accent: '#2a2a2a',
    placeholder: true,
  },
  {
    id: 'mariners',
    client: 'Seattle Mariners',
    title: 'Club suite sales tool for corporate sponsorship',
    result: 'Mantis CMS',
    category: 'sports',
    accent: '#0c2c56',
    poster: '/videos/work/mariners-poster.jpg',
    video: '/videos/work/mariners.mp4',
  },
  {
    id: 'super-bowl-pickem',
    client: 'Super Bowl Pick\'em',
    title: '3D mobile-first Free Play · BC iGaming promo',
    result: 'Most effective iGaming promotion to date',
    category: 'experiential',
    accent: '#d4ff4d',
    poster: '/videos/work/super-bowl-pickem-poster.jpg',
    video: '/videos/work/super-bowl-pickem.mp4',
  },
  {
    id: 'camden-yards',
    client: 'Camden Yards',
    title: 'Ballpark gamification',
    result: 'Street-to-stadium rewards',
    category: 'sports',
    accent: '#df4601',
    poster: '/videos/work/camden-poster.jpg',
    video: '/videos/work/camden.mp4',
  },
  {
    id: 'blues',
    client: 'St. Louis Blues',
    title: 'Fan loyalty platform',
    result: '+80% AOV',
    category: 'sports',
    accent: '#002f87',
    poster: '/videos/work/blues-logo.png',
    mediaFit: 'contain',
  },
  {
    id: 'mma-fight-iq',
    client: 'Key MMA',
    title: '3D Fight IQ overlay',
    result: 'Broadcast intelligence',
    category: 'sports',
    accent: '#ef4444',
    poster: '/videos/work/mma-poster.jpg',
    video: '/videos/work/mma.mp4',
  },
  {
    id: 'arsenal',
    client: 'Arsenal',
    title: 'Immersive brand environment',
    result: 'Fan participation at scale',
    category: 'immersive',
    accent: '#ef0107',
    poster: '/videos/work/arsenal-poster.jpg',
    videoKey: 'immersive',
  },
  {
    id: 'roblox',
    client: 'Roblox',
    title: 'Spatial commerce activation',
    result: 'Gen-Z audience capture',
    category: 'immersive',
    accent: '#00a2ff',
    poster: '/videos/work-immersive-poster.jpg',
    videoKey: 'immersive',
  },
  {
    id: 'new-balance',
    client: 'New Balance',
    title: '3D team sports showroom',
    result: '+80% AOV',
    category: 'commerce',
    accent: '#c8102e',
    poster: '/videos/work/new-balance-poster.jpg',
    video: '/videos/work/new-balance.mp4',
  },
]

export const team: TeamMember[] = [
  {
    id: 'kahlil',
    name: 'Kahlil Ashanti',
    title: 'Founder',
    bio: 'Builds at the intersection of sport, culture, and technology. Obsessed with experiences that earn attention.',
    funFact: 'Once turned a ballpark activation into a case study before the game ended.',
    photo: '/images/team/kahlil.png',
    linkedinUrl: 'https://www.linkedin.com/in/kahlilashanti/',
  },
  {
    id: 'justin',
    name: 'Justin Fortier',
    title: 'Chief Technology Officer',
    bio: 'Architects the platforms behind the experiences, from rapid prototypes to production-grade systems.',
    funFact: 'Believes the best creative idea is worthless if it can\'t ship on deadline.',
    photo: '/images/team/justin.png',
    linkedinUrl: 'https://www.linkedin.com/in/justinffortier/',
  },
  {
    id: 'tom',
    name: 'Tom Fox',
    title: 'Partner',
    bio: 'Two-time SBJ Forty Under 40. Former marketing leader at Gatorade, NBA, Nike, and Arsenal.',
    funFact: 'Has commercialized some of sport\'s most indelible brands.',
    photo: '/images/team/tom.png',
    linkedinUrl: 'https://www.linkedin.com/in/tom-fox-7a212358/',
  },
  {
    id: 'ivan',
    name: 'Ivan Heredia',
    title: 'Chief Growth Officer',
    bio: 'Turns creative capability into commercial momentum: partnerships, revenue, and scale.',
    funFact: 'Thinks every great experience should have a measurable outcome attached.',
    photo: '/images/team/ivan.png',
    linkedinUrl: 'https://www.linkedin.com/in/ivanheredia/',
  },
]

export const navLinks = [
  { label: 'Work', path: '/work' },
  { label: 'Capabilities', path: '/#capabilities' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]
