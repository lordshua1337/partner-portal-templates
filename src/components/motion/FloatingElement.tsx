"use client"

import type { ReactNode } from "react"

interface FloatingElementProps {
  readonly children: ReactNode
  readonly duration?: number
  readonly delay?: number
  readonly className?: string
  readonly style?: React.CSSProperties
}

export default function FloatingElement({
  children,
  duration = 6,
  delay = 0,
  className,
  style,
}: FloatingElementProps) {
  return (
    <div
      className={className}
      style={{
        animation: `float ${duration}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  )
}
