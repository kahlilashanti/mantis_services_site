import { useEffect, useState } from 'react'
import { breakpoints } from '@src/utils/media'

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false,
  )

  useEffect(() => {
    const mq = window.matchMedia(query)
    function onChange() {
      setMatches(mq.matches)
    }
    onChange()
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [query])

  return matches
}

export function useIsMobile(): boolean {
  return useMediaQuery(`(max-width: ${breakpoints.mobile - 1}px)`)
}

export function usePrefersReducedMotion(): boolean {
  return useMediaQuery('(prefers-reduced-motion: reduce)')
}

export function useIsTouchDevice(): boolean {
  return useMediaQuery('(hover: none), (pointer: coarse)')
}
