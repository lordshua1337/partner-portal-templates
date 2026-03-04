"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { TEMPLATES, type TemplateConfig } from "@/data/templates"

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

  return <TemplatePreview template={template} />
}

function TemplatePreview({ template: t }: { readonly template: TemplateConfig }) {
  const c = t.colors

  return (
    <div style={{ minHeight: "100vh", background: c.background, color: c.text, fontFamily: `'${t.fonts.body}', sans-serif` }}>
      {/* Back bar */}
      <div style={{
        position: "sticky", top: 0, zIndex: 50,
        padding: "12px 24px",
        background: "rgba(0,0,0,0.85)", backdropFilter: "blur(12px)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <Link href="/" style={{ color: "#fff", fontSize: 13, fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
          </svg>
          Back to Templates
        </Link>
        <span style={{ color: "#94a3b8", fontSize: 12 }}>
          {t.name} -- {t.fonts.display} + {t.fonts.body}
        </span>
      </div>

      {/* Hero */}
      <section style={{
        padding: "120px 24px 80px",
        background: t.gradient,
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.4) 100%)",
        }} />
        <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 1, textAlign: "center" }}>
          <p style={{
            fontSize: 13, letterSpacing: 3, textTransform: "uppercase",
            color: "rgba(255,255,255,0.7)", marginBottom: 16, fontWeight: 600,
          }}>
            {t.category}
          </p>
          <h1 style={{
            fontSize: 56, fontWeight: 800, color: "#fff",
            lineHeight: 1.1, marginBottom: 20,
            fontFamily: `'${t.fonts.display}', serif`,
            letterSpacing: "-0.03em",
          }}>
            {t.name} Template
          </h1>
          <p style={{
            fontSize: 20, color: "rgba(255,255,255,0.8)",
            lineHeight: 1.6, maxWidth: 600, margin: "0 auto 32px",
          }}>
            {t.description}
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <button style={{
              padding: "14px 32px", background: "#fff", color: c.primary,
              borderRadius: 10, fontSize: 15, fontWeight: 700, border: "none", cursor: "pointer",
            }}>
              Get Started
            </button>
            <button style={{
              padding: "14px 32px", background: "rgba(255,255,255,0.15)", color: "#fff",
              borderRadius: 10, fontSize: 15, fontWeight: 600, border: "1px solid rgba(255,255,255,0.3)", cursor: "pointer",
            }}>
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section style={{
        padding: "40px 24px",
        background: c.surface,
        borderBottom: `1px solid ${c.border}`,
      }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: 24 }}>
          {[
            { stat: "500+", label: "Clients Served" },
            { stat: "98%", label: "Satisfaction Rate" },
            { stat: "$2M+", label: "Revenue Generated" },
            { stat: "4.9/5", label: "Average Rating" },
          ].map((item) => (
            <div key={item.label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 28, fontWeight: 800, color: c.primary, fontFamily: `'${t.fonts.display}', serif` }}>
                {item.stat}
              </div>
              <div style={{ fontSize: 13, color: c.textMuted, marginTop: 4 }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sections Preview */}
      <section style={{ padding: "80px 24px", maxWidth: 900, margin: "0 auto" }}>
        <h2 style={{
          fontSize: 14, letterSpacing: 2, textTransform: "uppercase",
          color: c.textMuted, marginBottom: 12, fontWeight: 600,
        }}>
          Template Sections
        </h2>
        <h3 style={{
          fontSize: 32, fontWeight: 700, color: c.text, marginBottom: 40,
          fontFamily: `'${t.fonts.display}', serif`, letterSpacing: "-0.02em",
        }}>
          What&apos;s Included
        </h3>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
          {t.sections.map((section, i) => (
            <div key={section} style={{
              padding: 24, borderRadius: 12,
              background: c.surface, border: `1px solid ${c.border}`,
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: 8,
                background: `${c.primary}15`, color: c.primary,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 14, fontWeight: 700, marginBottom: 12,
              }}>
                {i + 1}
              </div>
              <h4 style={{ fontSize: 16, fontWeight: 600, color: c.text, marginBottom: 6 }}>
                {section}
              </h4>
              <p style={{ fontSize: 13, color: c.textMuted, lineHeight: 1.5 }}>
                Pre-built, conversion-optimized section ready for your content.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section style={{
        padding: "80px 24px",
        background: c.surface,
        borderTop: `1px solid ${c.border}`,
        borderBottom: `1px solid ${c.border}`,
      }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{
            fontSize: 32, fontWeight: 700, color: c.text, marginBottom: 40, textAlign: "center",
            fontFamily: `'${t.fonts.display}', serif`,
          }}>
            What Our Clients Say
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {[
              { name: "Sarah Mitchell", role: "Financial Advisor", quote: "This template transformed our online presence. Leads increased 3x in the first month." },
              { name: "James Chen", role: "Tax Consultant", quote: "Professional design that our clients trust immediately. Worth every penny." },
              { name: "Amanda Rivera", role: "Agency Owner", quote: "Setup was incredibly fast. We had our landing page live within an hour." },
            ].map((testimonial) => (
              <div key={testimonial.name} style={{
                padding: 28, borderRadius: 12,
                background: c.background, border: `1px solid ${c.border}`,
              }}>
                <p style={{ fontSize: 14, color: c.textMuted, lineHeight: 1.7, marginBottom: 16, fontStyle: "italic" }}>
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: c.text }}>{testimonial.name}</div>
                  <div style={{ fontSize: 12, color: c.textMuted }}>{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Case */}
      <section style={{ padding: "80px 24px", maxWidth: 900, margin: "0 auto" }}>
        <h2 style={{
          fontSize: 32, fontWeight: 700, color: c.text, marginBottom: 16,
          fontFamily: `'${t.fonts.display}', serif`,
        }}>
          Best For
        </h2>
        <p style={{ fontSize: 16, color: c.textMuted, lineHeight: 1.7 }}>
          {t.useCase}
        </p>

        <div style={{ marginTop: 32, padding: 24, borderRadius: 12, background: c.surface, border: `1px solid ${c.border}` }}>
          <h3 style={{ fontSize: 14, fontWeight: 600, color: c.text, marginBottom: 12 }}>Typography</h3>
          <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
            <div>
              <div style={{ fontSize: 12, color: c.textMuted, marginBottom: 4 }}>Display Font</div>
              <div style={{ fontSize: 24, fontWeight: 700, color: c.text, fontFamily: `'${t.fonts.display}', serif` }}>
                {t.fonts.display}
              </div>
            </div>
            <div>
              <div style={{ fontSize: 12, color: c.textMuted, marginBottom: 4 }}>Body Font</div>
              <div style={{ fontSize: 24, fontWeight: 400, color: c.text, fontFamily: `'${t.fonts.body}', sans-serif` }}>
                {t.fonts.body}
              </div>
            </div>
          </div>

          <h3 style={{ fontSize: 14, fontWeight: 600, color: c.text, marginTop: 24, marginBottom: 12 }}>Color Palette</h3>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {[
              { label: "Primary", color: c.primary },
              { label: "Accent", color: c.accent },
              { label: "Background", color: c.background },
              { label: "Surface", color: c.surface },
              { label: "Text", color: c.text },
            ].map((swatch) => (
              <div key={swatch.label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{
                  width: 24, height: 24, borderRadius: 6,
                  background: swatch.color, border: `1px solid ${c.border}`,
                }} />
                <span style={{ fontSize: 11, color: c.textMuted }}>{swatch.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: "80px 24px",
        background: t.gradient,
        textAlign: "center",
      }}>
        <h2 style={{
          fontSize: 36, fontWeight: 800, color: "#fff", marginBottom: 16,
          fontFamily: `'${t.fonts.display}', serif`,
        }}>
          Ready to Use This Template?
        </h2>
        <p style={{ fontSize: 16, color: "rgba(255,255,255,0.8)", marginBottom: 32, maxWidth: 500, margin: "0 auto 32px" }}>
          Sign in to customize this template with your brand, content, and call-to-action.
        </p>
        <Link href="/auth" style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          padding: "14px 32px", background: "#fff", color: c.primary,
          borderRadius: 10, fontSize: 15, fontWeight: 700, textDecoration: "none",
        }}>
          Get Started
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
          </svg>
        </Link>
      </section>

      {/* Footer */}
      <footer style={{
        padding: "32px 24px", textAlign: "center",
        borderTop: `1px solid ${c.border}`, background: c.surface,
      }}>
        <p style={{ fontSize: 13, color: c.textMuted }}>
          {t.name} Template -- Partner Portal Templates
        </p>
      </footer>
    </div>
  )
}
