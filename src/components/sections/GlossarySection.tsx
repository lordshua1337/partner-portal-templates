"use client"

import { useState, useCallback } from "react"
import FadeIn from "@/components/motion/FadeIn"
import type { GlossaryTerm } from "@/data/educational-types"

interface GlossarySectionProps {
  readonly terms: readonly GlossaryTerm[]
  readonly backgroundColor?: string
  readonly textColor?: string
  readonly mutedColor?: string
  readonly accentColor?: string
  readonly borderColor?: string
  readonly displayFont?: string
  readonly title?: string
}

export default function GlossarySection({
  terms,
  backgroundColor = "transparent",
  textColor = "#1A202C",
  mutedColor = "#64748B",
  accentColor = "#0D9488",
  borderColor = "#E2E8F0",
  displayFont,
  title = "Key Terms Explained",
}: GlossarySectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const sorted = [...terms].sort((a, b) => a.term.localeCompare(b.term))

  const handleToggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }, [])

  return (
    <section style={{ padding: "96px 24px", background: backgroundColor }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <FadeIn>
          <h2
            style={{
              fontSize: "clamp(28px, 3.5vw, 36px)",
              fontWeight: 600,
              color: textColor,
              textAlign: "center",
              marginBottom: 48,
              fontFamily: displayFont,
            }}
          >
            {title}
          </h2>
        </FadeIn>

        {sorted.map((term, i) => (
          <FadeIn key={term.term} delay={i * 0.03}>
            <div style={{ borderBottom: `1px solid ${borderColor}` }}>
              <button
                onClick={() => handleToggle(i)}
                style={{
                  width: "100%",
                  padding: "18px 0",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  textAlign: "left",
                  gap: 16,
                  minHeight: 48,
                }}
              >
                <span style={{ fontSize: 16, fontWeight: 600, color: openIndex === i ? accentColor : textColor, transition: "color 0.2s" }}>
                  {term.term}
                </span>
                <span
                  style={{
                    fontSize: 18,
                    color: accentColor,
                    transition: "transform 0.3s ease",
                    transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)",
                    flexShrink: 0,
                  }}
                >
                  +
                </span>
              </button>
              <div
                style={{
                  maxHeight: openIndex === i ? 200 : 0,
                  opacity: openIndex === i ? 1 : 0,
                  transition: "max-height 0.3s ease, opacity 0.3s ease",
                  overflow: "hidden",
                }}
              >
                <p
                  style={{
                    fontSize: 15,
                    color: mutedColor,
                    lineHeight: 1.7,
                    paddingBottom: 18,
                    margin: 0,
                  }}
                >
                  {term.definition}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
