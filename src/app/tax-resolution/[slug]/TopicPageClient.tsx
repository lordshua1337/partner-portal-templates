"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import type { EducationalTopicConfig } from "@/data/educational-types"
import { EDUCATIONAL_COLORS as C } from "@/data/educational-types"

const EducationalTemplate = dynamic(
  () => import("@/components/templates/EducationalTemplate")
)

interface TopicPageClientProps {
  readonly topic: EducationalTopicConfig
}

function StickyCTABar({ ctaText, microcopy }: { readonly ctaText: string; readonly microcopy: string }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 90,
        padding: "12px 24px",
        background: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderTop: `1px solid ${C.border}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
        transform: visible ? "translateY(0)" : "translateY(100%)",
        transition: "transform 0.3s ease",
      }}
    >
      <span style={{ fontSize: 13, color: C.textMuted, display: "none" }} className="hidden sm:block">
        {microcopy}
      </span>
      <button
        style={{
          padding: "10px 28px",
          background: C.accent,
          color: "#fff",
          borderRadius: 8,
          fontSize: 14,
          fontWeight: 600,
          border: "none",
          cursor: "pointer",
          transition: "transform 0.15s ease",
          whiteSpace: "nowrap",
        }}
      >
        {ctaText}
      </button>
    </div>
  )
}

export default function TopicPageClient({ topic }: TopicPageClientProps) {
  return (
    <div>
      {/* Back bar */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          padding: "12px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#1E3A5F",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <Link
          href="/"
          style={{
            color: "#fff",
            fontSize: 13,
            fontWeight: 600,
            display: "flex",
            alignItems: "center",
            gap: 6,
            textDecoration: "none",
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
          </svg>
          Back to Templates
        </Link>
        <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 12 }}>
          Educational Authority -- {topic.topic}
        </span>
      </div>

      <EducationalTemplate topic={topic} />

      {/* Sticky CTA bar on scroll */}
      <StickyCTABar ctaText={topic.primaryCTA} microcopy={topic.ctaMicrocopy} />
    </div>
  )
}
