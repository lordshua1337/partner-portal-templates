"use client"

import { useSearchParams } from "next/navigation"
import { EDUCATIONAL_COLORS as C } from "@/data/educational-types"

interface BrandedFooterProps {
  readonly disclaimer: string
}

export default function BrandedFooter({ disclaimer }: BrandedFooterProps) {
  const params = useSearchParams()

  const brand = params.get("brand")
  const phone = params.get("phone")
  const email = params.get("email")
  const website = params.get("website")

  const hasBranding = !!(brand || phone || email)

  return (
    <footer
      style={{
        padding: "32px 24px",
        background: C.surface,
        borderTop: `1px solid ${C.border}`,
      }}
    >
      <div style={{ maxWidth: 768, margin: "0 auto" }}>
        {/* Disclaimer */}
        <p
          style={{
            fontSize: 12,
            color: "#555",
            lineHeight: 1.6,
            marginBottom: hasBranding ? 24 : 16,
          }}
        >
          {disclaimer}
        </p>

        {/* Partner branding block */}
        {hasBranding && (
          <div
            style={{
              borderTop: `1px solid ${C.border}`,
              paddingTop: 20,
              marginBottom: 16,
              textAlign: "center",
            }}
          >
            {brand && (
              <p
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: C.primary,
                  marginBottom: 6,
                }}
              >
                {brand}
              </p>
            )}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 16,
                flexWrap: "wrap",
                fontSize: 13,
              }}
            >
              {phone && (
                <a
                  href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                  style={{ color: C.accent, textDecoration: "none" }}
                >
                  {phone}
                </a>
              )}
              {email && (
                <a
                  href={`mailto:${email}`}
                  style={{ color: C.accent, textDecoration: "none" }}
                >
                  {email}
                </a>
              )}
              {website && (
                <a
                  href={website.startsWith("http") ? website : `https://${website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: C.accent, textDecoration: "none" }}
                >
                  {website}
                </a>
              )}
            </div>
          </div>
        )}

        {/* Attribution */}
        <p
          style={{
            fontSize: 12,
            color: "#555",
            textAlign: "center",
          }}
        >
          {hasBranding
            ? `Powered by ${brand || "Partner Portal"}`
            : "Educational Authority Template -- Partner Portal Templates"}
        </p>
      </div>
    </footer>
  )
}
