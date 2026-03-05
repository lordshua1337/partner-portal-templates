"use client"

import { useEffect, useRef, useState } from "react"
import { useInView, useReducedMotion } from "framer-motion"

interface CountUpProps {
  readonly end: number
  readonly prefix?: string
  readonly suffix?: string
  readonly duration?: number
  readonly decimals?: number
  readonly style?: React.CSSProperties
  readonly className?: string
}

export default function CountUp({
  end,
  prefix = "",
  suffix = "",
  duration = 2,
  decimals = 0,
  style,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const prefersReducedMotion = useReducedMotion()
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!isInView) return

    // Skip animation if user prefers reduced motion
    if (prefersReducedMotion) {
      setValue(end)
      return
    }

    const startTime = performance.now()
    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(eased * end)

      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }
    requestAnimationFrame(step)
  }, [isInView, end, duration, prefersReducedMotion])

  const display = decimals > 0
    ? value.toFixed(decimals)
    : Math.round(value).toLocaleString()

  return (
    <span ref={ref} style={style} className={className}>
      {prefix}{display}{suffix}
    </span>
  )
}
