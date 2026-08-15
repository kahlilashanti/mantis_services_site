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
  headline: 'We build an internet worth staying in.',
  subheadline:
    'Mantis is a creative technology company that creates digital experiences people want to explore, participate in, and return to.',
  positioning:
    'We solve business problems by translating them through a creative lens, shaping the strategy, and building digital experiences that convert — meeting people where they are, honoring your brand story, and exceeding expectations with something worth talking about.',
  belief:
    'The internet is good at delivering information and transactions. We believe it can do more. The best physical experiences create curiosity, participation, emotion, and memory. We bring that same thinking to the digital world.',
  differentiator:
    'We own spatial and immersive technology others license. We move faster than holdcos. And we build for conversion — not just awards.',
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
    id: 'new-balance',
    client: 'New Balance',
    title: 'Direct-to-fan commerce experience',
    result: '+80% AOV',
    category: 'commerce',
    accent: '#c8102e',
    videoKey: 'commerce',
  },
  {
    id: 'chicago-cubs',
    client: 'Chicago Cubs',
    title: 'Interactive fan platform',
    result: 'Season-long engagement',
    category: 'sports',
    accent: '#0e3386',
    videoKey: 'sports',
  },
  {
    id: 'burnley-fc',
    client: 'Burnley FC',
    title: 'Digital membership experience',
    result: 'Global fan reach',
    category: 'sports',
    accent: '#6c1d45',
    videoKey: 'sports',
  },
  {
    id: 'arsenal',
    client: 'Arsenal',
    title: 'Immersive brand environment',
    result: 'Fan participation at scale',
    category: 'immersive',
    accent: '#ef0107',
    videoKey: 'immersive',
  },
  {
    id: 'mariners',
    client: 'Seattle Mariners',
    title: 'In-stadium digital activation',
    result: 'Live event conversion',
    category: 'experiential',
    accent: '#0c2c56',
    videoKey: 'sports',
  },
  {
    id: 'roblox',
    client: 'Roblox',
    title: 'Spatial commerce activation',
    result: 'Gen-Z audience capture',
    category: 'immersive',
    accent: '#00a2ff',
    videoKey: 'immersive',
  },
  {
    id: 'blues',
    client: 'St. Louis Blues',
    title: 'Fan loyalty platform',
    result: 'Repeat engagement lift',
    category: 'product',
    accent: '#002f87',
    videoKey: 'commerce',
  },
  {
    id: 'ai-product',
    client: 'Confidential',
    title: 'AI-integrated product prototype',
    result: 'Concept to production in weeks',
    category: 'ai',
    accent: '#8b5cf6',
    videoKey: 'commerce',
  },
  {
    id: 'spatial-launch',
    client: 'Confidential',
    title: 'Product launch environment',
    result: 'Launch-day sell-through',
    category: 'immersive',
    accent: '#14b8a6',
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
    bio: 'Architects the platforms behind the experiences — from rapid prototypes to production-grade systems.',
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
    bio: 'Turns creative capability into commercial momentum — partnerships, revenue, and scale.',
    funFact: 'Thinks every great experience should have a measurable outcome attached.',
  },
]

export const navLinks = [
  { label: 'Work', path: '/work' },
  { label: 'Capabilities', path: '/#capabilities' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]
