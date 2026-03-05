"use client"

import CountUp from "@/components/motion/CountUp"
import FadeIn from "@/components/motion/FadeIn"

interface StatItem {
  readonly value: number
  readonly prefix?: string
  readonly suffix?: string
  readonly label: string
}

interface TrustBarProps {
  readonly stats: readonly StatItem[]
  readonly backgroundColor?: string
  readonly textColor?: string
  readonly accentColor?: string
  readonly borderColor?: string
  readonly displayFont?: string
}

export default function TrustBar({
  stats,
  backgroundColor = "#fff",
  textColor = "#1a1a1a",
  accentColor = "#2563eb",
  borderColor = "#e5e5e5",
  displayFont = "inherit",
}: TrustBarProps) {
  return (
    <section
      style={{
        padding: "48px 24px",
        background: backgroundColor,
        borderBottom: `1px solid ${borderColor}`,
      }}
    >
      <FadeIn>
        <div
          style={{
            maxWidth: 960,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            gap: 32,
          }}
        >
          {stats.map((item) => (
            <div key={item.label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: 32,
                  fontWeight: 800,
                  color: accentColor,
                  fontFamily: displayFont,
                  lineHeight: 1.2,
                }}
              >
                <CountUp
                  end={item.value}
                  prefix={item.prefix}
                  suffix={item.suffix}
                />
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: textColor,
                  opacity: 0.6,
                  marginTop: 6,
                  fontWeight: 500,
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
