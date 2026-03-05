"use client"

import FadeIn from "@/components/motion/FadeIn"

interface CTABannerProps {
  readonly headline: string
  readonly description: string
  readonly buttonText: string
  readonly gradient: string
  readonly buttonColor?: string
  readonly buttonTextColor?: string
  readonly displayFont?: string
}

export default function CTABanner({
  headline,
  description,
  buttonText,
  gradient,
  buttonColor = "#fff",
  buttonTextColor = "#000",
  displayFont,
}: CTABannerProps) {
  return (
    <section
      style={{
        padding: "80px 24px",
        background: gradient,
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <FadeIn>
        <div style={{ maxWidth: 600, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <h2
            style={{
              fontSize: 36,
              fontWeight: 800,
              color: "#fff",
              marginBottom: 16,
              fontFamily: displayFont,
              lineHeight: 1.2,
            }}
          >
            {headline}
          </h2>
          <p
            style={{
              fontSize: 17,
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.6,
              marginBottom: 32,
            }}
          >
            {description}
          </p>
          <button
            style={{
              padding: "16px 36px",
              background: buttonColor,
              color: buttonTextColor,
              borderRadius: 10,
              fontSize: 16,
              fontWeight: 700,
              border: "none",
              cursor: "pointer",
              transition: "transform var(--duration-micro, 150ms) var(--ease-out, ease), box-shadow var(--duration-micro, 150ms) var(--ease-out, ease)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.02)"
              e.currentTarget.style.boxShadow = "var(--shadow-lg, 0 10px 40px rgba(0,0,0,0.25))"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)"
              e.currentTarget.style.boxShadow = "none"
            }}
          >
            {buttonText}
          </button>
        </div>
      </FadeIn>
    </section>
  )
}
