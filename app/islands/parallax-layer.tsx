import { useEffect, useRef } from 'hono/jsx'

export default function ParallaxLayer({
  speed = 0.8,
  src,
  patternCls,
}: {
  speed?: number
  src?: string
  patternCls?: string
}) {
  const elRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = elRef.current
    if (!el) return

    let ticking = false
    let isVisible = false
    let hasRun = false

    const bg = el.closest('[data-bg]') as HTMLElement | null
    if (!bg) return

    const obs = new IntersectionObserver(
      ([e]) => { isVisible = e.isIntersecting },
      { threshold: 0.05 },
    )
    obs.observe(bg)

    const tick = () => {
      if (hasRun && !isVisible) { ticking = false; return }
      hasRun = true
      const vh = window.innerHeight
      const r = bg.getBoundingClientRect()
      const p = ((r.top + r.height / 2) / vh - 0.5) * speed
      el.style.transform = `translate3d(0, ${p * 400}px, 0)`
      ticking = false
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(tick)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    tick()

    return () => {
      window.removeEventListener('scroll', onScroll)
      obs.disconnect()
    }
  }, [speed])

  return (
    <div
      ref={elRef}
      aria-hidden='true'
      class={[
        'pointer-events-none absolute inset-y-[-40%] left-0 w-full will-change-transform',
        patternCls,
      ].filter(Boolean).join(' ')}
      style={src
        ? { backgroundImage: `url(${src})`, backgroundSize: 'cover', backgroundPosition: 'center' }
        : undefined}
    />
  )
}
