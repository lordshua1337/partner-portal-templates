"use client"

interface HeroButtonsProps {
  readonly primaryText: string
  readonly secondaryText?: string
  readonly primaryColor?: string
  readonly primaryTextColor?: string
  readonly secondaryBorderColor?: string
  readonly secondaryTextColor?: string
}

export default function HeroButtons({
  primaryText,
  secondaryText,
  primaryColor = "#fff",
  primaryTextColor = "#000",
  secondaryBorderColor = "rgba(255,255,255,0.3)",
  secondaryTextColor = "#fff",
}: HeroButtonsProps) {
  return (
    <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
      <button
        style={{
          padding: "16px 36px",
          background: primaryColor,
          color: primaryTextColor,
          borderRadius: 10,
          fontSize: 16,
          fontWeight: 700,
          border: "none",
          cursor: "pointer",
          transition: "transform var(--duration-micro, 150ms) var(--ease-out, ease), box-shadow var(--duration-micro, 150ms) var(--ease-out, ease)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)"
          e.currentTarget.style.boxShadow = "var(--shadow-md, 0 4px 6px rgba(0,0,0,0.16))"
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)"
          e.currentTarget.style.boxShadow = "none"
        }}
      >
        {primaryText}
      </button>
      {secondaryText && (
        <button
          style={{
            padding: "16px 36px",
            background: "transparent",
            color: secondaryTextColor,
            borderRadius: 10,
            fontSize: 16,
            fontWeight: 600,
            border: `1px solid ${secondaryBorderColor}`,
            cursor: "pointer",
            transition: "background var(--duration-micro, 150ms) ease, border-color var(--duration-micro, 150ms) ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.08)"
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent"
            e.currentTarget.style.borderColor = secondaryBorderColor
          }}
        >
          {secondaryText}
        </button>
      )}
    </div>
  )
}
