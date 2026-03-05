"use client"

import FadeIn from "@/components/motion/FadeIn"

interface Testimonial {
  readonly name: string
  readonly role: string
  readonly company: string
  readonly quote: string
  readonly rating: number
}

interface TestimonialGridProps {
  readonly testimonials: readonly Testimonial[]
  readonly backgroundColor?: string
  readonly cardBackground?: string
  readonly textColor?: string
  readonly mutedColor?: string
  readonly accentColor?: string
  readonly borderColor?: string
  readonly displayFont?: string
}

function Stars({ count, color }: { readonly count: number; readonly color: string }) {
  return (
    <div style={{ display: "flex", gap: 2, marginBottom: 12 }}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i < count ? color : "none"}
          stroke={i < count ? color : "#ccc"}
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
      <span className="sr-only" style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0,0,0,0)" }}>
        {count} out of 5 stars
      </span>
    </div>
  )
}

export default function TestimonialGrid({
  testimonials,
  backgroundColor = "transparent",
  cardBackground = "#fff",
  textColor = "#1a1a1a",
  mutedColor = "#666",
  accentColor = "#f59e0b",
  borderColor = "#e5e5e5",
  displayFont,
}: TestimonialGridProps) {
  return (
    <section
      style={{
        padding: "80px 24px",
        background: backgroundColor,
      }}
    >
      <div
        style={{
          maxWidth: 960,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
        }}
      >
        {testimonials.map((t, i) => (
          <FadeIn key={t.name} delay={i * 0.1}>
            <div
              style={{
                padding: 28,
                borderRadius: 16,
                background: cardBackground,
                border: `1px solid ${borderColor}`,
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Stars count={t.rating} color={accentColor} />
              <p
                style={{
                  fontSize: 15,
                  color: mutedColor,
                  lineHeight: 1.7,
                  fontStyle: "italic",
                  flex: 1,
                  marginBottom: 20,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${accentColor}33, ${accentColor}66)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 16,
                    fontWeight: 700,
                    color: accentColor,
                    fontFamily: displayFont,
                  }}
                  aria-hidden="true"
                >
                  {t.name[0]}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: textColor }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: 12, color: mutedColor }}>
                    {t.role}, {t.company}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
