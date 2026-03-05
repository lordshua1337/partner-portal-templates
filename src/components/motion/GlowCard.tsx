"use client"

import { useRef, useState, useCallback, type ReactNode } from "react"

interface GlowCardProps {
  readonly children: ReactNode
  readonly glowColor?: string
  readonly borderRadius?: number
  readonly className?: string
  readonly style?: React.CSSProperties
}

export default function GlowCard({
  children,
  glowColor = "rgba(37, 99, 235, 0.4)",
  borderRadius = 16,
  className,
  style,
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setGlowPosition({ x, y })
  }, [])

  const handleClick = useCallback(() => {
    // Tap feedback for touch devices
    setIsHovered(true)
    setTimeout(() => setIsHovered(false), 300)
  }, [])

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      className={className}
      style={{
        position: "relative",
        borderRadius,
        ...style,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: -1,
          borderRadius: borderRadius + 1,
          background: `radial-gradient(600px circle at ${glowPosition.x}% ${glowPosition.y}%, ${glowColor}, transparent 40%)`,
          opacity: isHovered ? 1 : 0,
          transition: "opacity var(--duration-std, 300ms) ease",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "relative",
          borderRadius,
          zIndex: 1,
          height: "100%",
        }}
      >
        {children}
      </div>
    </div>
  )
}
