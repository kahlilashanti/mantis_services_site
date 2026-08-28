import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '@src/hooks/useMediaQuery'

interface Particle {
  x: number
  y: number
  radius: number
  speedY: number
  speedX: number
  opacity: number
  tint: 'white' | 'lime' | 'blue'
}

function createParticle(width: number, height: number): Particle {
  const roll = Math.random()

  return {
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 1.1 + 0.35,
    speedY: Math.random() * 0.22 + 0.06,
    speedX: (Math.random() - 0.5) * 0.1,
    opacity: Math.random() * 0.32 + 0.06,
    tint: roll > 0.96 ? 'blue' : roll > 0.88 ? 'lime' : 'white',
  }
}

function AmbientField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId = 0
    let particles: Particle[] = []
    const particleCount = reducedMotion ? 28 : 64

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.floor(window.innerWidth * dpr)
      canvas.height = Math.floor(window.innerHeight * dpr)
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      particles = Array.from({ length: particleCount }, () =>
        createParticle(window.innerWidth, window.innerHeight),
      )
    }

    const draw = () => {
      const { innerWidth: width, innerHeight: height } = window

      ctx.clearRect(0, 0, width, height)

      for (const particle of particles) {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle =
          particle.tint === 'lime'
            ? `rgba(212, 255, 77, ${particle.opacity})`
            : particle.tint === 'blue'
              ? `rgba(74, 114, 255, ${particle.opacity * 0.85})`
              : `rgba(255, 255, 255, ${particle.opacity})`
        ctx.fill()

        if (reducedMotion) continue

        particle.y += particle.speedY
        particle.x += particle.speedX + Math.sin(particle.y * 0.01) * 0.02

        if (particle.y > height + 6) {
          particle.y = -6
          particle.x = Math.random() * width
        }

        if (particle.x < -6) particle.x = width + 6
        if (particle.x > width + 6) particle.x = -6
      }

      animationId = window.requestAnimationFrame(draw)
    }

    resize()
    draw()

    window.addEventListener('resize', resize)

    return () => {
      window.cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [reducedMotion])

  return <canvas ref={canvasRef} className="ambient-field" aria-hidden="true" />
}

export default AmbientField
