"use client"

import { useEffect, useState, useRef } from "react"
import { useInView, useReducedMotion } from "framer-motion"

interface TypeWriterProps {
  readonly text: string
  readonly speed?: number
  readonly delay?: number
  readonly style?: React.CSSProperties
  readonly className?: string
  readonly as?: "span" | "h1" | "h2" | "h3" | "p"
}

export default function TypeWriter({
  text,
  speed = 40,
  delay = 0,
  style,
  className,
  as: Tag = "span",
}: TypeWriterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const prefersReducedMotion = useReducedMotion()
  const [displayed, setDisplayed] = useState("")
  const [started, setStarted] = useState(false)

  // Show full text immediately if user prefers reduced motion
  useEffect(() => {
    if (prefersReducedMotion && isInView) {
      setDisplayed(text)
      setStarted(true)
      return
    }
  }, [prefersReducedMotion, isInView, text])

  useEffect(() => {
    if (!isInView || prefersReducedMotion) return
    const timeout = setTimeout(() => setStarted(true), delay)
    return () => clearTimeout(timeout)
  }, [isInView, delay, prefersReducedMotion])

  useEffect(() => {
    if (!started || prefersReducedMotion) return
    if (displayed.length >= text.length) return

    const timeout = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1))
    }, speed)

    return () => clearTimeout(timeout)
  }, [started, displayed, text, speed, prefersReducedMotion])

  return (
    <div ref={ref} style={{ display: "contents" }}>
      <Tag style={style} className={className}>
        {displayed}
        {started && displayed.length < text.length && (
          <span
            style={{
              display: "inline-block",
              width: 2,
              height: "0.9em",
              background: "currentColor",
              marginLeft: 2,
              animation: "pulse-glow 1s ease-in-out infinite",
            }}
            aria-hidden="true"
          />
        )}
      </Tag>
    </div>
  )
}
