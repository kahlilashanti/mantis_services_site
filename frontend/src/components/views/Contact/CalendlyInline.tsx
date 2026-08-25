import { useEffect, useRef } from 'react'

const CALENDLY_SCRIPT = 'https://assets.calendly.com/assets/external/widget.js'

function CalendlyInline({ url }: { url: string }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const parent = containerRef.current
    if (!parent) return

    parent.innerHTML = ''

    function initWidget() {
      if (!containerRef.current || !window.Calendly) return
      window.Calendly.initInlineWidget({
        url,
        parentElement: containerRef.current,
      })
    }

    const existing = document.querySelector(`script[src="${CALENDLY_SCRIPT}"]`)
    if (existing) {
      initWidget()
      return
    }

    const script = document.createElement('script')
    script.src = CALENDLY_SCRIPT
    script.async = true
    script.onload = initWidget
    document.body.appendChild(script)
  }, [url])

  return (
    <div
      ref={containerRef}
      className="contact-calendly"
      aria-label="Schedule a meeting"
    />
  )
}

export default CalendlyInline
