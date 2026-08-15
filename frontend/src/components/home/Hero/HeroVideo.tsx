import { useEffect, useRef, useState } from 'react'
import { media } from '@src/config/mantis'
import { useIsMobile, usePrefersReducedMotion } from '@src/hooks/useMediaQuery'
import { prefersSaveData } from '@src/utils/media'

function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const isMobile = useIsMobile()
  const reducedMotion = usePrefersReducedMotion()
  const [saveData, setSaveData] = useState(false)
  const [canPlayVideo, setCanPlayVideo] = useState(false)

  const poster = isMobile ? media.heroPosterMobile : media.heroPoster
  const src = isMobile ? media.heroMobile : media.heroDesktop

  useEffect(() => {
    setSaveData(prefersSaveData())
  }, [])

  useEffect(() => {
    setCanPlayVideo(!reducedMotion && !saveData)
  }, [reducedMotion, saveData])

  useEffect(() => {
    const video = videoRef.current
    if (!video || !canPlayVideo) return

    video.load()
    video.play().catch(() => undefined)
  }, [canPlayVideo, src])

  return (
    <>
      <img
        src={poster}
        alt=""
        className="hero__poster"
        fetchPriority="high"
        decoding="async"
      />
      {canPlayVideo && (
        <video
          ref={videoRef}
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
          preload={isMobile ? 'metadata' : 'auto'}
          poster={poster}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
    </>
  )
}

export default HeroVideo
