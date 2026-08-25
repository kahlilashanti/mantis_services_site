import { useEffect, useRef, useState } from 'react'
import { media } from '@src/config/mantis'
import { useIsMobile, usePrefersReducedMotion } from '@src/hooks/useMediaQuery'
import { prefersSaveData } from '@src/utils/media'

function initialCanPlayVideo(): boolean {
  if (typeof window === 'undefined') return false
  return (
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches &&
    !prefersSaveData()
  )
}

function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const isMobile = useIsMobile()
  const reducedMotion = usePrefersReducedMotion()
  const [saveData, setSaveData] = useState(false)
  const [canPlayVideo, setCanPlayVideo] = useState(initialCanPlayVideo)
  const [videoReady, setVideoReady] = useState(false)

  const poster = isMobile ? media.heroPosterMobile : media.heroPoster
  const src = isMobile ? media.heroMobile : media.heroDesktop

  useEffect(() => {
    setSaveData(prefersSaveData())
  }, [])

  useEffect(() => {
    setCanPlayVideo(!reducedMotion && !saveData)
  }, [reducedMotion, saveData])

  useEffect(() => {
    setVideoReady(false)
  }, [src])

  useEffect(() => {
    const video = videoRef.current
    if (!video || !canPlayVideo) return

    video.loop = true
    video.load()

    const playFromStart = () => {
      video.play().catch(() => undefined)
    }

    const handleEnded = () => {
      video.currentTime = 0
      playFromStart()
    }

    video.addEventListener('ended', handleEnded)
    playFromStart()

    return () => {
      video.removeEventListener('ended', handleEnded)
    }
  }, [canPlayVideo, src])

  return (
    <>
      <img
        src={poster}
        alt=""
        className={`hero__poster${videoReady ? ' hero__poster--hidden' : ''}`}
        fetchPriority="high"
        decoding="async"
        aria-hidden={videoReady}
      />
      {canPlayVideo && (
        <video
          ref={videoRef}
          className={`hero__video${videoReady ? ' hero__video--ready' : ''}`}
          autoPlay
          muted
          loop
          playsInline
          preload={isMobile ? 'metadata' : 'auto'}
          poster={poster}
          onLoadedData={() => setVideoReady(true)}
          onEnded={(event) => {
            const video = event.currentTarget
            video.currentTime = 0
            video.play().catch(() => undefined)
          }}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
    </>
  )
}

export default HeroVideo
