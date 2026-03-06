"use client"

import FadeIn from "@/components/motion/FadeIn"
import type { ResolutionOption } from "@/data/educational-types"

interface ResolutionGridProps {
  readonly options: readonly ResolutionOption[]
  readonly backgroundColor?: string
  readonly cardBackground?: string
  readonly textColor?: string
  readonly mutedColor?: string
  readonly accentColor?: string
  readonly borderColor?: string
  readonly displayFont?: string
  readonly title?: string
  readonly subtitle?: string
}

export default function ResolutionGrid({
  options,
  backgroundColor = "transparent",
  cardBackground = "#FFFFFF",
  textColor = "#1A202C",
  mutedColor = "#64748B",
  accentColor = "#0D9488",
  borderColor = "#E2E8F0",
  displayFont,
  title = "Resolution Options",
  subtitle,
}: ResolutionGridProps) {
  return (
    <section style={{ padding: "96px 24px", background: backgroundColor }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 56, maxWidth: 640, margin: "0 auto 56px" }}>
            <h2
              style={{
                fontSize: "clamp(28px, 3.5vw, 36px)",
                fontWeight: 600,
                color: textColor,
                lineHeight: 1.2,
                marginBottom: subtitle ? 12 : 0,
                fontFamily: displayFont,
              }}
            >
              {title}
            </h2>
            {subtitle && (
              <p style={{ fontSize: 17, color: mutedColor }}>{subtitle}</p>
            )}
          </div>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {options.map((option, i) => (
            <FadeIn key={option.name} delay={i * 0.08}>
              <div
                style={{
                  padding: 32,
                  borderRadius: 16,
                  background: cardBackground,
                  border: `1px solid ${borderColor}`,
                  height: "100%",
                  transition: "box-shadow 0.3s ease, transform 0.3s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 8px 30px ${accentColor}15`
                  e.currentTarget.style.transform = "translateY(-4px)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none"
                  e.currentTarget.style.transform = "translateY(0)"
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: `${accentColor}15`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 16,
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14M22 4L12 14.01l-3-3" />
                  </svg>
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: textColor, marginBottom: 10 }}>
                  {option.name}
                </h3>
                <p style={{ fontSize: 15, color: mutedColor, lineHeight: 1.6, marginBottom: 16 }}>
                  {option.description}
                </p>
                <div style={{ padding: "12px 16px", borderRadius: 8, background: `${accentColor}08`, marginBottom: 12 }}>
                  <p style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", color: accentColor, marginBottom: 4 }}>
                    Who qualifies
                  </p>
                  <p style={{ fontSize: 14, color: textColor, lineHeight: 1.5, margin: 0 }}>
                    {option.whoQualifies}
                  </p>
                </div>
                <p style={{ fontSize: 14, color: accentColor, fontWeight: 600, margin: 0 }}>
                  {option.keyBenefit}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
