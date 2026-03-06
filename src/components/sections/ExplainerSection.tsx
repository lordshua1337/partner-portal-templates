"use client"

import FadeIn from "@/components/motion/FadeIn"
import type { SectionContent } from "@/data/educational-types"

interface ExplainerSectionProps {
  readonly content: SectionContent
  readonly backgroundColor?: string
  readonly textColor?: string
  readonly mutedColor?: string
  readonly accentColor?: string
  readonly borderColor?: string
  readonly displayFont?: string
}

export default function ExplainerSection({
  content,
  backgroundColor = "transparent",
  textColor = "#1A202C",
  mutedColor = "#64748B",
  accentColor = "#0D9488",
  borderColor = "#E2E8F0",
  displayFont,
}: ExplainerSectionProps) {
  return (
    <section style={{ padding: "96px 24px", background: backgroundColor }}>
      <div style={{ maxWidth: 768, margin: "0 auto" }}>
        <FadeIn>
          <h2
            style={{
              fontSize: "clamp(28px, 3.5vw, 36px)",
              fontWeight: 600,
              color: textColor,
              lineHeight: 1.2,
              marginBottom: content.subtitle ? 12 : 32,
              fontFamily: displayFont,
            }}
          >
            {content.title}
          </h2>
          {content.subtitle && (
            <p style={{ fontSize: 17, color: mutedColor, marginBottom: 32 }}>
              {content.subtitle}
            </p>
          )}
        </FadeIn>

        {content.paragraphs.map((paragraph, i) => (
          <FadeIn key={i} delay={i * 0.05}>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.7,
                color: textColor,
                marginBottom: 24,
              }}
            >
              {paragraph}
            </p>
          </FadeIn>
        ))}

        {content.bulletPoints && content.bulletPoints.length > 0 && (
          <FadeIn delay={0.1}>
            <ul style={{ padding: 0, margin: "24px 0", listStyle: "none" }}>
              {content.bulletPoints.map((point, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    gap: 12,
                    alignItems: "flex-start",
                    padding: "10px 0",
                    fontSize: 16,
                    color: textColor,
                    lineHeight: 1.6,
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: accentColor,
                      flexShrink: 0,
                      marginTop: 9,
                    }}
                  />
                  {point}
                </li>
              ))}
            </ul>
          </FadeIn>
        )}

        {content.callout && (
          <FadeIn delay={0.15}>
            <div
              style={{
                marginTop: 32,
                padding: 24,
                borderLeft: `3px solid ${accentColor}`,
                background: `${accentColor}0D`,
                borderRadius: "0 8px 8px 0",
              }}
            >
              <p
                style={{
                  fontSize: 16,
                  color: textColor,
                  lineHeight: 1.7,
                  fontStyle: "italic",
                  margin: 0,
                }}
              >
                {content.callout}
              </p>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  )
}
