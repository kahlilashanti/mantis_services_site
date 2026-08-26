import { useEffect } from 'react'
import { absoluteUrl, site, type PageSeo } from '@src/config/seo'

const MANAGED = 'data-mantis-seo'

interface PageMetaProps extends PageSeo {
  ogImage?: string
  jsonLd?: Record<string, unknown> | Record<string, unknown>[]
  noindex?: boolean
}

function upsertMeta(
  key: string,
  attrs: Record<string, string>,
  content: string,
) {
  const selector = Object.entries(attrs)
    .map(([name, value]) => `[${name}="${value}"]`)
    .join('')
  let el = document.head.querySelector(`meta${selector}[${MANAGED}]`) as HTMLMetaElement | null

  if (!el) {
    el = document.createElement('meta')
    Object.entries(attrs).forEach(([name, value]) => el!.setAttribute(name, value))
    el.setAttribute(MANAGED, key)
    document.head.appendChild(el)
  }

  el.content = content
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector(`link[rel="${rel}"][${MANAGED}]`) as HTMLLinkElement | null

  if (!el) {
    el = document.createElement('link')
    el.rel = rel
    el.setAttribute(MANAGED, rel)
    document.head.appendChild(el)
  }

  el.href = href
}

function upsertJsonLd(jsonLd: PageMetaProps['jsonLd']) {
  const existing = document.head.querySelector(`script[type="application/ld+json"][${MANAGED}]`)
  existing?.remove()

  if (!jsonLd) return

  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.setAttribute(MANAGED, 'jsonld')
  script.textContent = JSON.stringify(jsonLd)
  document.head.appendChild(script)
}

function PageMeta({
  title,
  description,
  path,
  ogImage = site.defaultOgImage,
  jsonLd,
  noindex = false,
}: PageMetaProps) {
  useEffect(() => {
    const canonical = absoluteUrl(path)
    const image = absoluteUrl(ogImage)
    const robots = noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'

    document.title = title

    upsertMeta('description', { name: 'description' }, description)
    upsertMeta('robots', { name: 'robots' }, robots)
    upsertMeta('author', { name: 'author' }, site.name)
    upsertMeta('theme-color', { name: 'theme-color' }, site.themeColor)

    upsertMeta('og-title', { property: 'og:title' }, title)
    upsertMeta('og-description', { property: 'og:description' }, description)
    upsertMeta('og-url', { property: 'og:url' }, canonical)
    upsertMeta('og-image', { property: 'og:image' }, image)
    upsertMeta('og-type', { property: 'og:type' }, 'website')
    upsertMeta('og-site-name', { property: 'og:site_name' }, site.name)
    upsertMeta('og-locale', { property: 'og:locale' }, site.locale)

    upsertMeta('twitter-card', { name: 'twitter:card' }, 'summary_large_image')
    upsertMeta('twitter-title', { name: 'twitter:title' }, title)
    upsertMeta('twitter-description', { name: 'twitter:description' }, description)
    upsertMeta('twitter-image', { name: 'twitter:image' }, image)
    upsertMeta('twitter-site', { name: 'twitter:site' }, site.twitterHandle)

    upsertLink('canonical', canonical)
    upsertJsonLd(jsonLd)
  }, [title, description, path, ogImage, jsonLd, noindex])

  return null
}

export default PageMeta
