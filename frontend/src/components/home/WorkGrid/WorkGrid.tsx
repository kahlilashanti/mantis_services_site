import type { CSSProperties, RefObject } from 'react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { media, work } from '@src/config/mantis'
import { useReveal } from '@src/hooks/useReveal'
import { useIsTouchDevice } from '@src/hooks/useMediaQuery'

function WorkTile({ item, index }: { item: (typeof work)[0]; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const { ref, visible } = useReveal(0.12)
  const isTouch = useIsTouchDevice()
  const [active, setActive] = useState(false)
  const [loaded, setLoaded] = useState(false)

  const videoSrc = item.videoKey ? media.workVideos[item.videoKey] : undefined
  const posterSrc = item.videoKey ? media.workPosters[item.videoKey] : undefined

  const loadVideo = useCallback(() => {
    const video = videoRef.current
    if (!video || !videoSrc || loaded) return
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
    if (isTouch) return
    playVideo()
  }

  function handleLeave() {
    if (isTouch) return
    pauseVideo()
  }

  return (
    <Link
      to="/work"
      ref={ref as RefObject<HTMLAnchorElement>}
      className={`work-tile${visible ? ' work-tile--visible' : ''}${active ? ' work-tile--playing' : ''}`}
      style={
        {
          '--tile-accent': item.accent,
          '--tile-delay': `${index * 80}ms`,
        } as CSSProperties
      }
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      aria-label={`${item.client} — ${item.result}`}
    >
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
          />
        )}
        {!videoSrc && <div className="work-tile__fallback" />}
        <div className="work-tile__tint" />
        <div className="work-tile__index">{String(index + 1).padStart(2, '0')}</div>
      </div>
      <div className="work-tile__content">
        <span className="work-tile__client">{item.client}</span>
        <span className="work-tile__result">{item.result}</span>
        <span className="work-tile__title">{item.title}</span>
      </div>
    </Link>
  )
}

function WorkGrid({ limit }: { limit?: number }) {
  const items = limit ? work.slice(0, limit) : work
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
