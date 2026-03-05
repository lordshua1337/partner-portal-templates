"use client"

import FadeIn from "@/components/motion/FadeIn"

interface PricingFeature {
  readonly text: string
  readonly included: boolean
}

interface PricingTier {
  readonly name: string
  readonly price: string
  readonly period?: string
  readonly description: string
  readonly features: readonly PricingFeature[]
  readonly highlighted?: boolean
  readonly buttonText?: string
}

interface PricingTableProps {
  readonly tiers: readonly PricingTier[]
  readonly backgroundColor?: string
  readonly cardBackground?: string
  readonly textColor?: string
  readonly mutedColor?: string
  readonly accentColor?: string
  readonly borderColor?: string
  readonly title?: string
  readonly displayFont?: string
}

export default function PricingTable({
  tiers,
  backgroundColor = "transparent",
  cardBackground = "#fff",
  textColor = "#1a1a1a",
  mutedColor = "#666",
  accentColor = "#2563eb",
  borderColor = "#e5e5e5",
  title = "Simple, Transparent Pricing",
  displayFont,
}: PricingTableProps) {
  return (
    <section style={{ padding: "80px 24px", background: backgroundColor }}>
      <div style={{ maxWidth: 1060, margin: "0 auto" }}>
        <FadeIn>
          <h2
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: textColor,
              marginBottom: 48,
              textAlign: "center",
              fontFamily: displayFont,
            }}
          >
            {title}
          </h2>
        </FadeIn>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
            alignItems: "start",
          }}
        >
          {tiers.map((tier, i) => (
            <FadeIn key={tier.name} delay={i * 0.1}>
              <div
                style={{
                  padding: 32,
                  borderRadius: 16,
                  background: tier.highlighted ? accentColor : cardBackground,
                  border: tier.highlighted ? "none" : `1px solid ${borderColor}`,
                  color: tier.highlighted ? "#fff" : textColor,
                  position: "relative",
                  transform: tier.highlighted ? "scale(1.04)" : "none",
                  boxShadow: tier.highlighted
                    ? `0 20px 60px ${accentColor}33`
                    : "none",
                }}
              >
                {tier.highlighted && (
                  <div
                    style={{
                      position: "absolute",
                      top: -12,
                      left: "50%",
                      transform: "translateX(-50%)",
                      padding: "4px 16px",
                      background: "#fff",
                      color: accentColor,
                      borderRadius: 20,
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: 0.5,
                    }}
                  >
                    Most Popular
                  </div>
                )}
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    marginBottom: 8,
                  }}
                >
                  {tier.name}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    opacity: 0.7,
                    marginBottom: 20,
                    lineHeight: 1.5,
                  }}
                >
                  {tier.description}
                </p>
                <div style={{ marginBottom: 24 }}>
                  <span style={{ fontSize: 40, fontWeight: 800, fontFamily: displayFont }}>
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span style={{ fontSize: 15, opacity: 0.6, marginLeft: 4 }}>
                      /{tier.period}
                    </span>
                  )}
                </div>
                <ul style={{ listStyle: "none", marginBottom: 28 }}>
                  {tier.features.map((f) => (
                    <li
                      key={f.text}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        padding: "8px 0",
                        fontSize: 14,
                        opacity: f.included ? 1 : 0.4,
                      }}
                    >
                      <span style={{ fontSize: 16 }}>
                        {f.included ? "\u2713" : "\u2717"}
                      </span>
                      {f.text}
                    </li>
                  ))}
                </ul>
                <button
                  style={{
                    width: "100%",
                    padding: "14px 24px",
                    borderRadius: 10,
                    fontSize: 15,
                    fontWeight: 700,
                    cursor: "pointer",
                    border: tier.highlighted
                      ? "none"
                      : `2px solid ${accentColor}`,
                    background: tier.highlighted ? "#fff" : "transparent",
                    color: accentColor,
                    minHeight: 48,
                    transition: "transform var(--duration-micro, 150ms) var(--ease-out, ease)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-1px)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)"
                  }}
                >
                  {tier.buttonText ?? "Get Started"}
                </button>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
