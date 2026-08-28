import type { CSSProperties, RefObject } from 'react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { media, work, featuredWorkLimit, type WorkItem } from '@src/config/mantis'
import { useReveal } from '@src/hooks/useReveal'
import { useIsTouchDevice } from '@src/hooks/useMediaQuery'

function resolvePoster(item: WorkItem): string | undefined {
  return item.poster ?? (item.videoKey ? media.workPosters[item.videoKey] : undefined)
}

function resolveVideo(item: WorkItem): string | undefined {
  return item.video ?? (item.videoKey ? media.workVideos[item.videoKey] : undefined)
}

function VisitIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 3h6v6M10 14 21 3"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function WorkTile({ item, index }: { item: WorkItem; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const { ref, visible } = useReveal(0.12)
  const isTouch = useIsTouchDevice()
  const [active, setActive] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const isPlaceholder = Boolean(item.placeholder)

  const posterSrc = isPlaceholder ? undefined : resolvePoster(item)
  const videoSrc = isPlaceholder ? undefined : resolveVideo(item)
  const isStatic = Boolean(posterSrc && !videoSrc)
  const mediaFit = isStatic ? (item.mediaFit ?? 'contain') : 'cover'

  const loadVideo = useCallback(() => {
    const video = videoRef.current
    if (!video || !videoSrc || loaded) return
    video.loop = true
    video.src = videoSrc
    video.load()
    setLoaded(true)
  }, [loaded, videoSrc])

  const playVideo = useCallback(async () => {
    loadVideo()
    const video = videoRef.current
    if (!video) return
    try {
      video.currentTime = 0
      await video.play()
      setActive(true)
    } catch {
      setActive(false)
    }
  }, [loadVideo])

  const pauseVideo = useCallback(() => {
    const video = videoRef.current
    if (!video) return
    video.pause()
    setActive(false)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video || !videoSrc) return

    video.loop = true

    const handleEnded = () => {
      video.currentTime = 0
      video.play().catch(() => undefined)
    }

    video.addEventListener('ended', handleEnded)
    return () => video.removeEventListener('ended', handleEnded)
  }, [videoSrc, loaded])

  useEffect(() => {
    const node = ref.current
    if (!node || !videoSrc) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadVideo()
          if (isTouch) {
            playVideo()
          }
        } else if (isTouch) {
          pauseVideo()
        }
      },
      { rootMargin: '200px', threshold: 0.45 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [isTouch, loadVideo, pauseVideo, playVideo, ref, videoSrc])

  function handleEnter() {
    if (isTouch || isPlaceholder) return
    playVideo()
  }

  function handleLeave() {
    if (isTouch || isPlaceholder) return
    pauseVideo()
  }

  const tileClassName = `work-tile${visible ? ' work-tile--visible' : ''}${active ? ' work-tile--playing' : ''}${isPlaceholder ? ' work-tile--placeholder' : ''}${isStatic ? ' work-tile--static' : ''}${isStatic && mediaFit === 'contain' ? ' work-tile--contain' : ''}${isStatic && mediaFit === 'cover' ? ' work-tile--screenshot' : ''}`
  const tileStyle = {
    '--tile-accent': item.accent,
    '--tile-delay': `${index * 80}ms`,
  } as CSSProperties

  const tileBody = (
    <>
      <div className="work-tile__media">
        {posterSrc && (
          <img
            src={posterSrc}
            alt=""
            className="work-tile__poster"
            loading="lazy"
            decoding="async"
          />
        )}
        {videoSrc && (
          <video
            ref={videoRef}
            className="work-tile__video"
            muted
            loop
            playsInline
            preload="none"
            poster={posterSrc}
            onEnded={(event) => {
              const video = event.currentTarget
              video.currentTime = 0
              video.play().catch(() => undefined)
            }}
          />
        )}
        {!posterSrc && !videoSrc && <div className="work-tile__fallback" />}
        <div className="work-tile__tint" />
        <div className="work-tile__index">{String(index + 1).padStart(2, '0')}</div>
      </div>
      <div className="work-tile__content">
        <span className="work-tile__client">{item.client}</span>
        <span className="work-tile__result">{item.result}</span>
        <span className="work-tile__title">{item.title}</span>
      </div>
    </>
  )

  if (isPlaceholder) {
    return (
      <div
        ref={ref as RefObject<HTMLDivElement>}
        className={tileClassName}
        style={tileStyle}
        aria-label={`${item.client}, ${item.result}`}
      >
        {tileBody}
      </div>
    )
  }

  return (
    <div
      ref={ref as RefObject<HTMLDivElement>}
      className={tileClassName}
      style={tileStyle}
    >
      {item.visitUrl && (
        <a
          href={item.visitUrl}
          className="work-tile__visit"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${item.client}`}
        >
          <VisitIcon />
        </a>
      )}
      <Link
        to="/work"
        className="work-tile__link"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        aria-label={`${item.client}, ${item.result}`}
      >
        {tileBody}
      </Link>
    </div>
  )
}

function WorkGrid({ limit = featuredWorkLimit }: { limit?: number }) {
  const items = work.slice(0, limit)
  const { ref, visible } = useReveal(0.08)

  return (
    <section className="work-grid-section" id="work">
      <div
        ref={ref as RefObject<HTMLDivElement>}
        className={`work-grid-section__header${visible ? ' is-visible' : ''}`}
      >
        <p className="section-eyebrow">Selected work</p>
        <h2 className="section-title">
          Built for brands that want people to <em>stay</em>
        </h2>
        <p className="work-grid-section__lead">
          Browser-based experiences, mobile-first. Every project measured by what it moved.
        </p>
      </div>
      <div className="work-grid">
        {items.map((item, index) => (
          <WorkTile key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  )
}

export default WorkGrid
