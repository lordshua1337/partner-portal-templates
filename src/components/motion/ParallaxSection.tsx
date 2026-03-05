"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState, useEffect, type ReactNode } from "react"

interface ParallaxSectionProps {
  readonly children: ReactNode
  readonly offset?: number
  readonly className?: string
  readonly style?: React.CSSProperties
}

export default function ParallaxSection({
  children,
  offset = 50,
  className,
  style,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener("resize", check, { passive: true })
    return () => window.removeEventListener("resize", check)
  }, [])

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset])

  // Disable parallax on mobile for performance
  if (isMobile) {
    return (
      <div ref={ref} className={className} style={{ overflow: "hidden", ...style }}>
        {children}
      </div>
    )
  }

  return (
    <div ref={ref} className={className} style={{ overflow: "hidden", ...style }}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  )
}
