"use client"

import FadeIn from "@/components/motion/FadeIn"
import type { ReassuranceContent } from "@/data/educational-types"

interface ReassuranceBlockProps {
  readonly content: ReassuranceContent
  readonly backgroundColor?: string
  readonly textColor?: string
  readonly mutedColor?: string
  readonly accentColor?: string
  readonly displayFont?: string
}

export default function ReassuranceBlock({
  content,
  backgroundColor = "#F0FDFA",
  textColor = "#1A202C",
  mutedColor = "#64748B",
  accentColor = "#0D9488",
  displayFont,
}: ReassuranceBlockProps) {
  return (
    <section style={{ padding: "96px 24px", background: backgroundColor }}>
      <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
        <FadeIn>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              background: `${accentColor}15`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 24px",
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
          </div>

          <h2
            style={{
              fontSize: "clamp(24px, 3vw, 32px)",
              fontWeight: 600,
              color: textColor,
              lineHeight: 1.3,
              marginBottom: 20,
              fontFamily: displayFont,
            }}
          >
            {content.title}
          </h2>

          <p
            style={{
              fontSize: 18,
              lineHeight: 1.7,
              color: mutedColor,
              marginBottom: 32,
            }}
          >
            {content.message}
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div style={{ textAlign: "left", maxWidth: 520, margin: "0 auto" }}>
            {content.bulletPoints.map((point, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 12,
                  alignItems: "flex-start",
                  padding: "10px 0",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={accentColor}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ flexShrink: 0, marginTop: 3 }}
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14M22 4L12 14.01l-3-3" />
                </svg>
                <span style={{ fontSize: 16, color: textColor, lineHeight: 1.6 }}>
                  {point}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
