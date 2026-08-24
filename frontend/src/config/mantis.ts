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
  /** Static logo tiles only: contain + padding. Video tiles always use cover (16:9). */
  mediaFit?: 'cover' | 'contain'
  /** @deprecated Fallback shared placeholders until per-project assets exist */
  videoKey?: WorkVideoKey
}

export interface TeamMember {
  id: string
  name: string
  title: string
  bio: string
  funFact: string
}

export const brand = {
  name: 'Mantis',
  headline: 'We build digital experiences worth staying in.',
  subheadline:
    'Mantis is a creative technology company that builds experiences people want to explore, participate in, and return to.',
  positioning:
    'We solve business problems by translating them through a creative lens, shaping the strategy, and building digital experiences that convert, meeting people where they are, honoring your brand story, and exceeding expectations with something worth talking about.',
  belief:
    'The internet is good at delivering information and transactions. We believe it can do more. The best physical experiences create curiosity, participation, emotion, and memory. We bring that same thinking to the digital world.',
  differentiator:
    'We own spatial and immersive technology others license. We move faster than holdcos. And we build for conversion, not just awards.',
  closingLine: 'Ready to build something people stay for?',
  email: 'hello@trymantislabs.com',
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
    title: 'Live broadcast stats overlay',
    result: 'Real-time fan analytics',
    category: 'sports',
    accent: '#7c3aed',
    poster: '/videos/work/ppl-poster.jpg',
    video: '/videos/work/ppl.mp4',
  },
  {
    id: 'burnley-fc',
    client: 'Burnley FC',
    title: 'X-ray spatial token hunt',
    result: 'Immersive fan discovery',
    category: 'sports',
    accent: '#6c1d45',
    poster: '/videos/work/burnley-full-poster.jpg',
    video: '/videos/work/burnley-full.mp4',
  },
  {
    id: 'chicago-cubs',
    client: 'Chicago Cubs',
    title: 'Custom 3d build + seamless Shopify integration for Cubs vs Cardinals Field of Dreams',
    result: '31.9% conversion rate',
    category: 'sports',
    accent: '#0e3386',
    poster: '/videos/work/cubs-shop-poster.jpg',
    video: '/videos/work/cubs-shop.mp4',
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
  {
    id: 'mariners',
    client: 'Seattle Mariners',
    title: 'Premium suite experience',
    result: 'Custom brand environment',
    category: 'sports',
    accent: '#0c2c56',
    poster: '/videos/work/mariners-poster.jpg',
    video: '/videos/work/mariners.mp4',
  },
  {
    id: 'super-bowl-pickem',
    client: 'Super Bowl Pick\'em',
    title: 'Branded prediction game',
    result: 'Mass-participation engagement',
    category: 'experiential',
    accent: '#d4ff4d',
    poster: '/videos/work/super-bowl-poster.jpg',
    video: '/videos/work/super-bowl.mp4',
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
]

export const team: TeamMember[] = [
  {
    id: 'kahlil',
    name: 'Kahlil Ashanti',
    title: 'Founder',
    bio: 'Builds at the intersection of sport, culture, and technology. Obsessed with experiences that earn attention.',
    funFact: 'Once turned a ballpark activation into a case study before the game ended.',
  },
  {
    id: 'justin',
    name: 'Justin Fortier',
    title: 'Chief Technology Officer',
    bio: 'Architects the platforms behind the experiences, from rapid prototypes to production-grade systems.',
    funFact: 'Believes the best creative idea is worthless if it can\'t ship on deadline.',
  },
  {
    id: 'tom',
    name: 'Tom Fox',
    title: 'Partner',
    bio: 'Two-time SBJ Forty Under 40. Former marketing leader at Gatorade, NBA, Nike, and Arsenal.',
    funFact: 'Has commercialized some of sport\'s most indelible brands.',
  },
  {
    id: 'ivan',
    name: 'Ivan Heredia',
    title: 'Chief Growth Officer',
    bio: 'Turns creative capability into commercial momentum: partnerships, revenue, and scale.',
    funFact: 'Thinks every great experience should have a measurable outcome attached.',
  },
]

export const navLinks = [
  { label: 'Work', path: '/work' },
  { label: 'Capabilities', path: '/#capabilities' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]
