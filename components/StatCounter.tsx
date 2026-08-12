'use client'
import { useEffect, useRef, useState } from 'react'

type Props = {
  value: string
  suffix?: string
  prefix?: string
  decimals?: number
  className?: string
}

function format(n: number, decimals: number) {
  if (decimals > 0) return n.toFixed(decimals).replace('.', ',')
  return String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

export default function StatCounter({
  value,
  suffix = '',
  prefix = '',
  decimals = 0,
  className = 'font-cormorant text-5xl md:text-6xl font-light text-champagne',
}: Props) {
  const target = parseFloat(value.replace(',', '.'))
  const [display, setDisplay] = useState<string>(() => format(target, decimals))
  const ref = useRef<HTMLDivElement>(null)
  const startedRef = useRef(false)

  useEffect(() => {
    if (!ref.current || isNaN(target)) return
    const el = ref.current
    const duration = 1500
    setDisplay(format(0, decimals))

    let cancelled = false
    const runAnimation = () => {
      if (startedRef.current || cancelled) return
      startedRef.current = true
      const start = performance.now()
      const tick = (now: number) => {
        if (cancelled) return
        const t = Math.min((now - start) / duration, 1)
        const eased = 1 - (1 - t) * (1 - t)
        setDisplay(format(target * eased, decimals))
        if (t < 1) requestAnimationFrame(tick)
        else setDisplay(format(target, decimals))
      }
      requestAnimationFrame(tick)
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            runAnimation()
            obs.disconnect()
          }
        })
      },
      { threshold: 0.4 }
    )
    obs.observe(el)
    const fallback = window.setTimeout(runAnimation, 3000)

    return () => {
      cancelled = true
      obs.disconnect()
      window.clearTimeout(fallback)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </div>
  )
}
