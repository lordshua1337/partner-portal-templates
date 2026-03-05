"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

interface FadeInProps {
  readonly children: ReactNode
  readonly delay?: number
  readonly duration?: number
  readonly direction?: "up" | "down" | "left" | "right" | "none"
  readonly distance?: number
  readonly className?: string
  readonly style?: React.CSSProperties
}

const directionOffset = {
  up: { y: 30, x: 0 },
  down: { y: -30, x: 0 },
  left: { x: 30, y: 0 },
  right: { x: -30, y: 0 },
  none: { x: 0, y: 0 },
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  direction = "up",
  distance,
  className,
  style,
}: FadeInProps) {
  const prefersReducedMotion = useReducedMotion()
  const offset = directionOffset[direction]
  const d = distance ?? Math.abs(offset.x || offset.y)

  // Skip animation if user prefers reduced motion
  if (prefersReducedMotion) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: direction === "up" ? d : direction === "down" ? -d : 0,
        x: direction === "left" ? d : direction === "right" ? -d : 0,
      }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}
