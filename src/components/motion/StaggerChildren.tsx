"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

interface StaggerChildrenProps {
  readonly children: ReactNode
  readonly stagger?: number
  readonly className?: string
  readonly style?: React.CSSProperties
}

const container = {
  hidden: { opacity: 0 },
  visible: (stagger: number) => ({
    opacity: 1,
    transition: {
      staggerChildren: stagger,
      delayChildren: 0.1,
    },
  }),
}

export const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export default function StaggerChildren({
  children,
  stagger = 0.1,
  className,
  style,
}: StaggerChildrenProps) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      variants={container}
      custom={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}
