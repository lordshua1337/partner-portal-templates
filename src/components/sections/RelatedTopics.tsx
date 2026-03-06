"use client"

import Link from "next/link"
import FadeIn from "@/components/motion/FadeIn"
import type { RelatedTopic } from "@/data/educational-types"

interface RelatedTopicsProps {
  readonly topics: readonly RelatedTopic[]
  readonly vertical: string
  readonly backgroundColor?: string
  readonly cardBackground?: string
  readonly textColor?: string
  readonly mutedColor?: string
  readonly accentColor?: string
  readonly primaryColor?: string
  readonly borderColor?: string
  readonly displayFont?: string
  readonly title?: string
}

export default function RelatedTopics({
  topics,
  vertical,
  backgroundColor = "transparent",
  cardBackground = "#FFFFFF",
  textColor = "#1A202C",
  mutedColor = "#64748B",
  accentColor = "#0D9488",
  primaryColor = "#1E3A5F",
  borderColor = "#E2E8F0",
  displayFont,
  title = "Related Topics",
}: RelatedTopicsProps) {
  if (topics.length === 0) return null

  return (
    <section style={{ padding: "96px 24px", background: backgroundColor }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <FadeIn>
          <h2
            style={{
              fontSize: "clamp(24px, 3vw, 32px)",
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

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          {topics.map((topic, i) => (
            <FadeIn key={topic.slug} delay={i * 0.06}>
              <Link
                href={`/${vertical}/${topic.slug}`}
                style={{
                  display: "block",
                  padding: 24,
                  borderRadius: 12,
                  background: cardBackground,
                  border: `1px solid ${borderColor}`,
                  textDecoration: "none",
                  transition: "border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",
                  height: "100%",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = accentColor
                  e.currentTarget.style.boxShadow = `0 4px 20px ${accentColor}12`
                  e.currentTarget.style.transform = "translateY(-2px)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = borderColor
                  e.currentTarget.style.boxShadow = "none"
                  e.currentTarget.style.transform = "translateY(0)"
                }}
              >
                <h3 style={{ fontSize: 16, fontWeight: 600, color: primaryColor, marginBottom: 8 }}>
                  {topic.title}
                </h3>
                <p style={{ fontSize: 14, color: mutedColor, lineHeight: 1.6, margin: 0 }}>
                  {topic.description}
                </p>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                    fontSize: 13,
                    fontWeight: 600,
                    color: accentColor,
                    marginTop: 12,
                  }}
                >
                  Learn more
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
