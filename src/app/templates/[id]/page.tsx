"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import dynamic from "next/dynamic"
import { TEMPLATES } from "@/data/templates"

const LeadGenTemplate = dynamic(() => import("@/components/templates/LeadGenTemplate"))
const SaaSTemplate = dynamic(() => import("@/components/templates/SaaSTemplate"))
const B2BTemplate = dynamic(() => import("@/components/templates/B2BTemplate"))
const EventTemplate = dynamic(() => import("@/components/templates/EventTemplate"))
const EcommerceTemplate = dynamic(() => import("@/components/templates/EcommerceTemplate"))
const CustomTemplate = dynamic(() => import("@/components/templates/CustomTemplate"))

const TEMPLATE_COMPONENTS: Record<string, React.ComponentType<{ template: (typeof TEMPLATES)[number] }>> = {
  "lead-gen": LeadGenTemplate,
  "saas": SaaSTemplate,
  "b2b": B2BTemplate,
  "event": EventTemplate,
  "ecommerce": EcommerceTemplate,
  "custom": CustomTemplate,
}

export default function TemplatePage() {
  const params = useParams()
  const id = params.id as string
  const template = TEMPLATES.find((t) => t.id === id)

  if (!template) {
    return (
      <div style={{ minHeight: "100vh", background: "var(--bg-base)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: 24, fontWeight: 700, color: "var(--text-primary)", marginBottom: 12 }}>Template not found</h1>
          <Link href="/" style={{ color: "var(--accent)", fontSize: 14 }}>Back to Templates</Link>
        </div>
      </div>
    )
  }

  const TemplateComponent = TEMPLATE_COMPONENTS[template.id]

  return (
    <div>
      {/* Back bar */}
      <div
        className="glass-dark"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          padding: "12px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
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
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
          </svg>
          Back to Templates
        </Link>
        <span style={{ color: "#94a3b8", fontSize: 12 }}>
          {template.name} -- {template.fonts.display} + {template.fonts.body}
        </span>
      </div>

      {/* Template content */}
      {TemplateComponent ? (
        <TemplateComponent template={template} />
      ) : (
        <div style={{ padding: 80, textAlign: "center", color: "var(--text-secondary)" }}>
          Template component not found
        </div>
      )}
    </div>
  )
}
