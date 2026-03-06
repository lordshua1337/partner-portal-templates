"use client"

import FadeIn from "@/components/motion/FadeIn"
import type { ProcessStep } from "@/data/educational-types"

interface ProcessTimelineProps {
  readonly steps: readonly ProcessStep[]
  readonly backgroundColor?: string
  readonly textColor?: string
  readonly mutedColor?: string
  readonly accentColor?: string
  readonly primaryColor?: string
  readonly displayFont?: string
  readonly title?: string
  readonly subtitle?: string
}

export default function ProcessTimeline({
  steps,
  backgroundColor = "transparent",
  textColor = "#1A202C",
  mutedColor = "#64748B",
  accentColor = "#0D9488",
  primaryColor = "#1E3A5F",
  displayFont,
  title = "How the Process Works",
  subtitle,
}: ProcessTimelineProps) {
  return (
    <section style={{ padding: "96px 24px", background: backgroundColor }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
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

        <div style={{ position: "relative" }}>
          {/* Connecting line */}
          <div
            style={{
              position: "absolute",
              left: 27,
              top: 48,
              bottom: 48,
              width: 2,
              background: `${primaryColor}15`,
            }}
          />

          {steps.map((step, i) => (
            <FadeIn key={step.step} delay={i * 0.12}>
              <div
                style={{
                  display: "flex",
                  gap: 24,
                  marginBottom: i === steps.length - 1 ? 0 : 40,
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    flexShrink: 0,
                    background: primaryColor,
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 20,
                    fontWeight: 800,
                    position: "relative",
                    zIndex: 1,
                    fontFamily: displayFont,
                  }}
                >
                  {step.step}
                </div>
                <div style={{ paddingTop: 8 }}>
                  <h3
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      color: textColor,
                      marginBottom: 8,
                      fontFamily: displayFont,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ fontSize: 16, color: mutedColor, lineHeight: 1.7, margin: 0 }}>
                    {step.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
