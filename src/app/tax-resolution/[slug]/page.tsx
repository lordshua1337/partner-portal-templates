"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import dynamic from "next/dynamic"
import { getTopicBySlug } from "@/data/topics/tax-resolution"

const EducationalTemplate = dynamic(
  () => import("@/components/templates/EducationalTemplate")
)

export default function TaxResolutionTopicPage() {
  const params = useParams()
  const slug = params.slug as string
  const topic = getTopicBySlug(slug)

  if (!topic) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#FAFBFC",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: "#1A202C",
              marginBottom: 12,
            }}
          >
            Topic not found
          </h1>
          <p style={{ color: "#64748B", fontSize: 14, marginBottom: 20 }}>
            The tax resolution topic &quot;{slug}&quot; does not exist yet.
          </p>
          <Link
            href="/"
            style={{
              color: "#0D9488",
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            Back to Templates
          </Link>
        </div>
      </div>
    )
  }

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
    </div>
  )
}
