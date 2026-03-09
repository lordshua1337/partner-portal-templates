"use client"

import { useState } from "react"
import type { TemplateConfig } from "@/data/templates"
import FadeIn from "@/components/motion/FadeIn"
import CountUp from "@/components/motion/CountUp"
import FAQ from "@/components/sections/FAQ"
import CTABanner from "@/components/sections/CTABanner"

const ACCENT = "#2563EB"
const SLATE = "#1E293B"
const SURFACE = "#F8FAFC"

const INDUSTRIES = ["Attorney", "Financial Advisor", "CPA", "Bookkeeper", "Consultant", "Custom"]
const INDUSTRY_ICONS = ["⚖", "📈", "🧾", "📒", "💼", "✦"]

const PALETTES = [
  { name: "Corporate Navy",  colors: ["#1E3A5F", "#2D5F8B", "#0D9488"] },
  { name: "Growth Green",    colors: ["#14532D", "#16A34A", "#BBF7D0"] },
  { name: "Royal Purple",    colors: ["#3B0764", "#7C3AED", "#C4B5FD"] },
  { name: "Warm Amber",      colors: ["#78350F", "#D97706", "#FDE68A"] },
]

const FORM_FIELDS = [
  { label: "Business Name",  placeholder: "e.g. Smith Tax Resolution Group" },
  { label: "Headline",       placeholder: "e.g. Resolve Your Tax Debt, Reclaim Your Future" },
  { label: "Phone Number",   placeholder: "e.g. (555) 800-1234" },
  { label: "Email Address",  placeholder: "e.g. contact@smithtax.com" },
]

const STEPS = ["Choose Industry", "Pick Colors", "Customize Content", "Preview & Deploy"]

const DEPLOY_STATS = [
  { label: "Setup time",          value: "5 min" },
  { label: "Zero code required",  value: "100%" },
  { label: "Instant SSL",         value: "Included" },
]

export default function WorkflowTemplate({ template: t }: { readonly template: TemplateConfig }) {
  const c = t.colors
  const [selectedIndustry, setSelectedIndustry] = useState<number | null>(null)
  const [selectedPalette, setSelectedPalette] = useState<number | null>(null)

  const previewGradient = selectedPalette !== null
    ? `linear-gradient(135deg, ${PALETTES[selectedPalette].colors[0]}, ${PALETTES[selectedPalette].colors[1]})`
    : `linear-gradient(135deg, ${SLATE}, ${ACCENT})`

  return (
    <div style={{ minHeight: "100vh", background: "#ffffff", color: SLATE, fontFamily: "'Work Sans', sans-serif" }}>

      {/* Hero */}
      <section style={{ padding: "80px 24px 64px", textAlign: "center", background: "#ffffff" }}>
        <div style={{ maxWidth: 640, margin: "0 auto 48px" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            {STEPS.map((step, i) => (
              <div key={step} style={{ display: "flex", alignItems: "center", flex: 1 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, flex: "none" }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: "50%",
                    background: i === 0 ? ACCENT : "#E2E8F0",
                    color: i === 0 ? "#fff" : "#94A3B8",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 13, fontWeight: 700,
                  }}>
                    {i + 1}
                  </div>
                  <span style={{ fontSize: 11, color: i === 0 ? ACCENT : "#94A3B8", fontWeight: 600, whiteSpace: "nowrap" }}>
                    {step}
                  </span>
                </div>
                {i < STEPS.length - 1 && (
                  <div style={{ flex: 1, height: 2, background: "#E2E8F0", margin: "0 4px", marginBottom: 20 }} />
                )}
              </div>
            ))}
          </div>
        </div>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <FadeIn>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 700, color: SLATE, lineHeight: 1.1, marginBottom: 20, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Build Your Professional Landing Page in Minutes
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p style={{ fontSize: 18, color: "#475569", lineHeight: 1.7, maxWidth: 520, margin: "0 auto 36px" }}>
              Follow four simple steps to configure a high-converting landing page tailored to your industry and brand.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <button
              style={{ padding: "16px 40px", background: ACCENT, color: "#fff", borderRadius: 8, fontSize: 16, fontWeight: 700, border: "none", cursor: "pointer", boxShadow: "0 4px 14px rgba(37,99,235,0.35)", transition: "transform 0.2s ease" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)" }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)" }}
            >
              Get Started Free
            </button>
          </FadeIn>
        </div>
      </section>

      {/* Step 1: Choose Your Industry */}
      <section style={{ padding: "72px 24px", background: SURFACE }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <FadeIn>
            <StepLabel n={1} title="Choose Your Industry" desc="Select the industry that best describes your practice. This sets the tone, copy, and conversion approach." />
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {INDUSTRIES.map((label, i) => {
              const active = selectedIndustry === i
              return (
                <FadeIn key={label} delay={i * 0.06}>
                  <div
                    onClick={() => setSelectedIndustry(i)}
                    style={{ padding: "28px 20px", borderRadius: 10, cursor: "pointer", textAlign: "center", border: `2px solid ${active ? ACCENT : "#E2E8F0"}`, background: active ? `${ACCENT}08` : "#ffffff", transition: "border-color 0.2s, background 0.2s" }}
                    onMouseEnter={e => { if (!active) e.currentTarget.style.borderColor = `${ACCENT}60` }}
                    onMouseLeave={e => { if (!active) e.currentTarget.style.borderColor = "#E2E8F0" }}
                  >
                    <div style={{ width: 48, height: 48, borderRadius: 12, margin: "0 auto 12px", background: active ? ACCENT : "#F1F5F9", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.2s", fontSize: 22 }}>
                      {INDUSTRY_ICONS[i]}
                    </div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: active ? ACCENT : SLATE, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      {label}
                    </div>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* Step 2: Pick Your Colors */}
      <section style={{ padding: "72px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <FadeIn>
            <StepLabel n={2} title="Pick Your Color Palette" desc="Each palette is pre-tested for readability, contrast, and conversion. Click one to apply it." />
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
            {PALETTES.map((palette, i) => {
              const active = selectedPalette === i
              return (
                <FadeIn key={palette.name} delay={i * 0.07}>
                  <div
                    onClick={() => setSelectedPalette(i)}
                    style={{ padding: "20px 24px", borderRadius: 10, cursor: "pointer", border: `2px solid ${active ? ACCENT : "#E2E8F0"}`, background: active ? `${ACCENT}06` : "#FAFAFA", display: "flex", alignItems: "center", gap: 16, transition: "border-color 0.2s, background 0.2s" }}
                    onMouseEnter={e => { if (!active) e.currentTarget.style.borderColor = `${ACCENT}50` }}
                    onMouseLeave={e => { if (!active) e.currentTarget.style.borderColor = "#E2E8F0" }}
                  >
                    <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
                      {palette.colors.map(color => (
                        <div key={color} style={{ width: 28, height: 28, borderRadius: "50%", background: color, boxShadow: "0 1px 3px rgba(0,0,0,0.15)" }} />
                      ))}
                    </div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: active ? ACCENT : SLATE, fontFamily: "'Plus Jakarta Sans', sans-serif", flex: 1 }}>
                      {palette.name}
                    </div>
                    {active && <div style={{ width: 20, height: 20, borderRadius: "50%", background: ACCENT, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "#fff", fontWeight: 700, flexShrink: 0 }}>✓</div>}
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* Step 3: Customize Content */}
      <section style={{ padding: "72px 24px", background: SURFACE }}>
        <div style={{ maxWidth: 620, margin: "0 auto" }}>
          <FadeIn>
            <StepLabel n={3} title="Customize Your Content" desc="Fill in your business details. The system pre-populates industry-specific copy you can edit or accept." />
          </FadeIn>
          <FadeIn delay={0.1}>
            <div style={{ background: "#ffffff", borderRadius: 12, padding: 36, boxShadow: "0 2px 16px rgba(0,0,0,0.07)", border: "1px solid #E2E8F0" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {FORM_FIELDS.map(field => (
                  <div key={field.label}>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: SLATE, marginBottom: 6, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      {field.label}
                    </label>
                    <div style={{ width: "100%", padding: "13px 16px", border: "1.5px solid #E2E8F0", borderRadius: 8, fontSize: 14, color: "#94A3B8", background: SURFACE }}>
                      {field.placeholder}
                    </div>
                  </div>
                ))}
                <button
                  style={{ padding: "13px 24px", background: ACCENT, color: "#fff", borderRadius: 8, fontSize: 15, fontWeight: 700, border: "none", cursor: "pointer", transition: "transform 0.15s" }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-1px)" }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)" }}
                >
                  Save and Continue
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Step 4: Preview & Deploy */}
      <section style={{ padding: "72px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <FadeIn>
            <StepLabel n={4} title="Preview & Deploy" desc="Review your page in the preview window, then deploy with one click. Your site is live in seconds." />
          </FadeIn>
          <FadeIn delay={0.1}>
            <div style={{ borderRadius: 12, overflow: "hidden", boxShadow: "0 4px 32px rgba(0,0,0,0.12)", border: "1px solid #E2E8F0", marginBottom: 32 }}>
              <div style={{ background: "#F1F5F9", padding: "10px 16px", display: "flex", alignItems: "center", gap: 12, borderBottom: "1px solid #E2E8F0" }}>
                <div style={{ display: "flex", gap: 6 }}>
                  {["#FF5F56", "#FFBD2E", "#27C93F"].map(color => (
                    <div key={color} style={{ width: 12, height: 12, borderRadius: "50%", background: color }} />
                  ))}
                </div>
                <div style={{ flex: 1, background: "#ffffff", borderRadius: 6, padding: "5px 12px", fontSize: 12, color: "#94A3B8", border: "1px solid #E2E8F0" }}>
                  yoursite.vercel.app
                </div>
              </div>
              <div style={{ height: 220, background: previewGradient, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12, padding: 24 }}>
                <div style={{ width: 120, height: 12, borderRadius: 6, background: "rgba(255,255,255,0.7)" }} />
                <div style={{ width: 220, height: 8, borderRadius: 6, background: "rgba(255,255,255,0.4)" }} />
                <div style={{ width: 180, height: 8, borderRadius: 6, background: "rgba(255,255,255,0.3)", marginBottom: 8 }} />
                <div style={{ padding: "8px 24px", background: "rgba(255,255,255,0.2)", borderRadius: 6, color: "#ffffff", fontSize: 12, fontWeight: 700, border: "1px solid rgba(255,255,255,0.4)" }}>
                  Schedule Free Consultation
                </div>
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <button
                style={{ padding: "16px 48px", background: ACCENT, color: "#fff", borderRadius: 8, fontSize: 16, fontWeight: 700, border: "none", cursor: "pointer", boxShadow: "0 4px 14px rgba(37,99,235,0.35)", transition: "transform 0.2s", marginBottom: 28 }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)" }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)" }}
              >
                Deploy to Vercel
              </button>
              <div style={{ display: "flex", justifyContent: "center", gap: 40, flexWrap: "wrap" }}>
                {DEPLOY_STATS.map(item => (
                  <div key={item.label} style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 20, fontWeight: 800, color: ACCENT, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{item.value}</div>
                    <div style={{ fontSize: 12, color: "#64748B", marginTop: 2 }}>{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: "80px 24px", background: SURFACE }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <h2 style={{ fontSize: 36, fontWeight: 700, color: SLATE, fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 12 }}>Everything Included</h2>
              <p style={{ fontSize: 16, color: "#64748B", maxWidth: 480, margin: "0 auto" }}>Every template ships with the full feature set. Nothing locked behind a tier.</p>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {t.features.map((feature, i) => (
              <FadeIn key={feature.title} delay={i * 0.06}>
                <div
                  style={{ padding: "28px 24px", background: "#ffffff", borderRadius: 10, border: "1px solid #E2E8F0", transition: "border-color 0.2s, box-shadow 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = `${ACCENT}50`; e.currentTarget.style.boxShadow = "0 4px 16px rgba(37,99,235,0.08)" }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#E2E8F0"; e.currentTarget.style.boxShadow = "none" }}
                >
                  <div style={{ width: 40, height: 40, borderRadius: 8, background: `${ACCENT}12`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                    <div style={{ width: 18, height: 18, background: ACCENT, borderRadius: 4 }} />
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: SLATE, marginBottom: 8, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{feature.title}</h3>
                  <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.65 }}>{feature.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: "56px 24px", background: SLATE }}>
        <FadeIn>
          <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 32 }}>
            {t.stats.map(stat => (
              <div key={stat.label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 38, fontWeight: 800, color: ACCENT, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  <CountUp end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", marginTop: 6 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* FAQ */}
      <FAQ
        items={t.faq}
        backgroundColor="#ffffff"
        textColor={SLATE}
        mutedColor="#64748B"
        accentColor={ACCENT}
        borderColor="#E2E8F0"
        displayFont="'Plus Jakarta Sans', sans-serif"
      />

      {/* CTA */}
      <CTABanner
        headline="Ready to Launch Your Landing Page?"
        description="Set up in minutes. No developers, no design skills, no code required."
        buttonText="Start Building Free"
        gradient={`linear-gradient(135deg, ${SLATE}, ${ACCENT})`}
        buttonColor="#ffffff"
        buttonTextColor={SLATE}
        displayFont="'Plus Jakarta Sans', sans-serif"
      />

      <footer style={{ padding: "32px 24px", textAlign: "center", borderTop: "1px solid #E2E8F0" }}>
        <p style={{ fontSize: 13, color: "#94A3B8" }}>{t.name} Template -- Partner Portal Templates</p>
      </footer>
    </div>
  )
}

function StepLabel({ n, title, desc }: { readonly n: number; readonly title: string; readonly desc: string }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <div style={{ display: "inline-block", padding: "4px 14px", background: `${ACCENT}15`, borderRadius: 20, fontSize: 12, fontWeight: 700, color: ACCENT, letterSpacing: 1, textTransform: "uppercase", marginBottom: 12 }}>
        Step {n}
      </div>
      <h2 style={{ fontSize: 32, fontWeight: 700, color: SLATE, fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 8 }}>{title}</h2>
      <p style={{ fontSize: 15, color: "#64748B" }}>{desc}</p>
    </div>
  )
}
