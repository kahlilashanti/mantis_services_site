export const breakpoints = {
  mobile: 768,
  tablet: 992,
} as const

export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function prefersSaveData(): boolean {
  const nav = navigator as Navigator & { connection?: { saveData?: boolean } }
  return Boolean(nav.connection?.saveData)
}

export function isTouchDevice(): boolean {
  return window.matchMedia('(hover: none), (pointer: coarse)').matches
}

export function isMobileViewport(): boolean {
  return window.matchMedia(`(max-width: ${breakpoints.mobile - 1}px)`).matches
}

export function shouldUseMobileVideo(): boolean {
  return isMobileViewport() || prefersSaveData()
}
