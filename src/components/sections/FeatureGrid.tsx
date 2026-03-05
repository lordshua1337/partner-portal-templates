"use client"

import FadeIn from "@/components/motion/FadeIn"
import GlowCard from "@/components/motion/GlowCard"

interface Feature {
  readonly icon: string
  readonly title: string
  readonly description: string
}

interface FeatureGridProps {
  readonly features: readonly Feature[]
  readonly backgroundColor?: string
  readonly cardBackground?: string
  readonly textColor?: string
  readonly mutedColor?: string
  readonly accentColor?: string
  readonly borderColor?: string
  readonly title?: string
  readonly subtitle?: string
  readonly displayFont?: string
  readonly useGlow?: boolean
}

function FeatureIcon({ icon, color }: { readonly icon: string; readonly color: string }) {
  const iconMap: Record<string, string> = {
    shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    zap: "M13 2L3 14h9l-1 10 10-12h-9l1-10z",
    target: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z",
    chart: "M18 20V10M12 20V4M6 20v-6",
    users: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75",
    clock: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 6v6l4 2",
    code: "M16 18l6-6-6-6M8 6l-6 6 6 6",
    globe: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z",
    lock: "M19 11H5a2 2 0 00-2 2v7a2 2 0 002 2h14a2 2 0 002-2v-7a2 2 0 00-2-2zM7 11V7a5 5 0 0110 0v4",
    star: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
    check: "M22 11.08V12a10 10 0 11-5.93-9.14M22 4L12 14.01l-3-3",
    layers: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
  }

  const path = iconMap[icon] ?? iconMap.star

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={path} />
    </svg>
  )
}

export default function FeatureGrid({
  features,
  backgroundColor = "transparent",
  cardBackground = "#fff",
  textColor = "#1a1a1a",
  mutedColor = "#666",
  accentColor = "#2563eb",
  borderColor = "#e5e5e5",
  title,
  subtitle,
  displayFont,
  useGlow = false,
}: FeatureGridProps) {
  const CardWrapper = useGlow ? GlowCard : "div"

  return (
    <section style={{ padding: "80px 24px", background: backgroundColor }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        {title && (
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <h2
                style={{
                  fontSize: 32,
                  fontWeight: 700,
                  color: textColor,
                  fontFamily: displayFont,
                  marginBottom: subtitle ? 12 : 0,
                }}
              >
                {title}
              </h2>
              {subtitle && (
                <p style={{ fontSize: 17, color: mutedColor, maxWidth: 560, margin: "0 auto" }}>
                  {subtitle}
                </p>
              )}
            </div>
          </FadeIn>
        )}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 32,
          }}
        >
          {features.map((feature, i) => (
            <FadeIn key={feature.title} delay={i * 0.08}>
              <CardWrapper
                {...(useGlow ? { glowColor: `${accentColor}44` } : {})}
                style={{
                  padding: 28,
                  borderRadius: 16,
                  background: cardBackground,
                  border: `1px solid ${borderColor}`,
                  height: "100%",
                  transition: "transform var(--duration-std, 300ms) var(--ease-out, ease)",
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => { e.currentTarget.style.transform = "translateY(-4px)" }}
                onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => { e.currentTarget.style.transform = "translateY(0)" }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: `${accentColor}15`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 16,
                  }}
                >
                  <FeatureIcon icon={feature.icon} color={accentColor} />
                </div>
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: textColor,
                    marginBottom: 8,
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: mutedColor,
                    lineHeight: 1.7,
                  }}
                >
                  {feature.description}
                </p>
              </CardWrapper>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
