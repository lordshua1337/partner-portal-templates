"use client"

import { useState } from "react"
import type { TemplateConfig } from "@/data/templates"
import FadeIn from "@/components/motion/FadeIn"
import CountUp from "@/components/motion/CountUp"

const DARK = "#12141D"
const NEON = "#F1FE92"
const WHITE = "#FFFFFF"

const INDUSTRIES = [
  { name: "Attorney",         icon: "⚖" },
  { name: "Financial Advisor", icon: "◈" },
  { name: "CPA",              icon: "▣" },
  { name: "Bookkeeper",       icon: "◉" },
  { name: "Consultant",       icon: "◆" },
  { name: "Custom",           icon: "✦" },
]

const PALETTES = [
  { name: "Corporate Navy",  colors: ["#1E3A5F", "#2D5F8B", "#0D9488"] },
  { name: "Growth Green",    colors: ["#14532D", "#16A34A", "#BBF7D0"] },
  { name: "Royal Purple",    colors: ["#3B0764", "#7C3AED", "#C4B5FD"] },
  { name: "Warm Amber",      colors: ["#78350F", "#D97706", "#FDE68A"] },
]

const STEPS = [
  { n: "01", title: "Choose Industry",      desc: "We tailor the copy, structure, and conversion hooks to your professional niche." },
  { n: "02", title: "Pick Your Colors",     desc: "Select from pre-tested palettes that signal trust and authority in your market." },
  { n: "03", title: "Customize Content",    desc: "Drop in your name, headline, and contact info. We pre-fill the rest." },
  { n: "04", title: "Preview and Deploy",   desc: "See the live result, then publish to your domain in one click." },
]

const RESOURCES = [
  { tag: "Setup Guide",   title: "Getting Started in 5 Minutes",         excerpt: "A walkthrough from blank page to published site with zero code." },
  { tag: "Customization", title: "Advanced Color and Typography Editing", excerpt: "Swap fonts, tweak spacing, and match your exact brand beyond the defaults." },
  { tag: "Deployment",    title: "Connecting a Custom Domain",            excerpt: "Point your domain to your new landing page with a three-step DNS update." },
]

const FORM_PLACEHOLDERS: Record<string, string> = {
  "Business Name": "Smith Tax Resolution Group",
  "Headline": "Resolve Your Tax Debt Fast",
  "Phone Number": "(555) 800-1234",
  "Email Address": "contact@smithtax.com",
}

const FOOTER_COLS = [
  { heading: "Product",  links: ["Features", "Pricing", "Templates", "Changelog"] },
  { heading: "Company",  links: ["About", "Blog", "Careers", "Press"] },
  { heading: "Support",  links: ["Documentation", "Help Center", "Status", "Contact"] },
]

const TESTIMONIALS = [
  { quote: "I had a client-facing site live before noon on the same day I signed up. The speed is unreal.", name: "Marcus Webb", role: "Tax Attorney" },
  { quote: "Finally, a landing page that actually looks like it was built by a professional, not a template.", name: "Diane Lau", role: "CPA" },
  { quote: "My lead volume doubled in the first month. The conversion copy is genuinely good.", name: "Ray Okonkwo", role: "Financial Advisor" },
]

export default function WorkflowTemplate({ template: t }: { readonly template: TemplateConfig }) {
  const [selectedIndustry, setSelectedIndustry] = useState<number | null>(null)
  const [selectedPalette, setSelectedPalette] = useState<number | null>(null)

  const previewGradient = selectedPalette !== null
    ? `linear-gradient(135deg, ${PALETTES[selectedPalette].colors[0]}, ${PALETTES[selectedPalette].colors[1]})`
    : `linear-gradient(135deg, #1a1c28, #2a2d3e)`

  return (
    <div style={{ minHeight: "100vh", background: WHITE, color: DARK, fontFamily: "'Inter', sans-serif" }}>

      {/* HERO -- DARK */}
      <section style={{ background: DARK, padding: "100px 24px 80px", position: "relative", overflow: "hidden" }}>
        {/* Decorative star top-right */}
        <div style={{
          position: "absolute", top: 48, right: 64,
          width: 60, height: 60, background: NEON,
          transform: "rotate(45deg)", borderRadius: 6,
          opacity: 0.9,
        }} />
        {/* Decorative star bottom-left faint */}
        <div style={{
          position: "absolute", bottom: 40, left: 40,
          width: 36, height: 36, background: NEON,
          transform: "rotate(45deg)", borderRadius: 4,
          opacity: 0.15,
        }} />

        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <FadeIn>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, color: NEON, textTransform: "uppercase", marginBottom: 24 }}>
              Digital Marketing Agency
            </p>
            <h1 style={{
              fontSize: "clamp(48px, 8vw, 90px)", fontWeight: 600,
              color: WHITE, lineHeight: 1.0, marginBottom: 28,
              fontFamily: "'Urbanist', sans-serif",
              letterSpacing: "-2px",
            }}>
              A Landing Page<br />
              <span style={{ color: NEON }}>In 5 Minutes,</span><br />
              Not 5 Weeks.
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p style={{ fontSize: 20, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, maxWidth: 480, marginBottom: 40 }}>
              {t.description}
            </p>
            <button
              style={{
                padding: "16px 44px", background: NEON, color: DARK,
                border: "none", borderRadius: 4, fontSize: 15, fontWeight: 700,
                cursor: "pointer", letterSpacing: 0.5,
                fontFamily: "'Urbanist', sans-serif",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = "0.85" }}
              onMouseLeave={e => { e.currentTarget.style.opacity = "1" }}
            >
              Start Building Free
            </button>
          </FadeIn>

          {/* Video embed placeholder */}
          <FadeIn delay={0.2}>
            <div style={{
              marginTop: 64, background: "#1E2028", borderRadius: 12,
              aspectRatio: "16/9", display: "flex", alignItems: "center",
              justifyContent: "center", position: "relative", overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.06)",
            }}>
              {/* subtle grid texture */}
              <div style={{
                position: "absolute", inset: 0,
                backgroundImage: "radial-gradient(rgba(241,254,146,0.04) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }} />
              {/* play button */}
              <div style={{
                width: 72, height: 72, borderRadius: "50%",
                background: NEON, display: "flex", alignItems: "center",
                justifyContent: "center", position: "relative", zIndex: 1,
                cursor: "pointer",
              }}>
                <div style={{
                  width: 0, height: 0,
                  borderTop: "12px solid transparent",
                  borderBottom: "12px solid transparent",
                  borderLeft: `20px solid ${DARK}`,
                  marginLeft: 4,
                }} />
              </div>
              <p style={{
                position: "absolute", bottom: 24, left: "50%",
                transform: "translateX(-50%)",
                fontSize: 12, color: "rgba(255,255,255,0.3)",
                letterSpacing: 2, textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}>
                Watch 90-second demo
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FEATURES -- WHITE: Industry Selection */}
      <section style={{ background: WHITE, padding: "96px 24px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <FadeIn>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, color: "#999", textTransform: "uppercase", marginBottom: 16 }}>Step 01</p>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 600, color: DARK, fontFamily: "'Urbanist', sans-serif", marginBottom: 8, lineHeight: 1.1, letterSpacing: "-1px" }}>
              Choose Your Industry
            </h2>
            <p style={{ fontSize: 16, color: "#666", marginBottom: 48, maxWidth: 440 }}>
              Every industry gets a purpose-built layout, conversion copy, and trust signals.
            </p>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
            {INDUSTRIES.map((ind, i) => {
              const active = selectedIndustry === i
              return (
                <FadeIn key={ind.name} delay={i * 0.05}>
                  <div
                    onClick={() => setSelectedIndustry(i)}
                    style={{
                      padding: "32px 20px", border: `2px solid ${active ? NEON : "#E8E8E8"}`,
                      background: active ? `rgba(241,254,146,0.08)` : WHITE,
                      borderRadius: 6, cursor: "pointer", textAlign: "center",
                      transition: "border-color 0.2s, background 0.2s",
                    }}
                    onMouseEnter={e => { if (!active) e.currentTarget.style.borderColor = "#ccc" }}
                    onMouseLeave={e => { if (!active) e.currentTarget.style.borderColor = "#E8E8E8" }}
                  >
                    <div style={{
                      fontSize: 28, marginBottom: 12,
                      color: active ? DARK : "#888",
                    }}>
                      {ind.icon}
                    </div>
                    <div style={{
                      fontSize: 14, fontWeight: 700, color: DARK,
                      fontFamily: "'Urbanist', sans-serif", letterSpacing: 0.3,
                    }}>
                      {ind.name}
                    </div>
                    {active && (
                      <div style={{
                        marginTop: 10, display: "inline-block",
                        background: NEON, color: DARK,
                        fontSize: 10, fontWeight: 800, padding: "2px 8px",
                        borderRadius: 2, letterSpacing: 1, textTransform: "uppercase",
                      }}>
                        Selected
                      </div>
                    )}
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* ABOUT -- WHITE: Two column */}
      <section style={{ background: WHITE, padding: "0 24px 96px", borderTop: "1px solid #F0F0F0" }}>
        <div style={{ maxWidth: 1040, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center", paddingTop: 80 }}>
          <FadeIn>
            <h2 style={{ fontSize: "clamp(30px, 3.5vw, 48px)", fontWeight: 600, color: DARK, fontFamily: "'Urbanist', sans-serif", lineHeight: 1.1, letterSpacing: "-1px" }}>
              Build a landing page in 5 minutes, not 5 weeks.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p style={{ fontSize: 16, color: "#555", lineHeight: 1.8, marginBottom: 40 }}>
              Professional service providers deserve a site that actually converts. We built the infrastructure so you can focus on growing your practice.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {t.stats.slice(0, 3).map(stat => (
                <div key={stat.label} style={{ display: "flex", alignItems: "center", gap: 20 }}>
                  <div style={{ width: 3, height: 48, background: NEON, borderRadius: 2, flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: 36, fontWeight: 700, color: DARK, fontFamily: "'Urbanist', sans-serif", lineHeight: 1 }}>
                      <CountUp end={stat.value} prefix={stat.prefix ?? ""} suffix={stat.suffix ?? ""} />
                    </div>
                    <div style={{ fontSize: 13, color: "#888", marginTop: 4 }}>{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SERVICES DARK -- Step cards */}
      <section style={{ background: DARK, padding: "96px 24px 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <FadeIn>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, color: NEON, textTransform: "uppercase", marginBottom: 16 }}>How It Works</p>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 600, color: WHITE, fontFamily: "'Urbanist', sans-serif", marginBottom: 56, lineHeight: 1.1, letterSpacing: "-1px" }}>
              Four steps to a live page.
            </h2>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {STEPS.map((step, i) => (
              <FadeIn key={step.n} delay={i * 0.07}>
                <div style={{
                  background: "#1E2028", borderRadius: 6, padding: "28px 20px",
                  borderLeft: `3px solid ${NEON}`,
                }}>
                  <div style={{
                    fontSize: 28, fontWeight: 800, color: NEON, lineHeight: 1,
                    fontFamily: "'Urbanist', sans-serif", marginBottom: 16,
                  }}>
                    {step.n}
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: WHITE, marginBottom: 10, fontFamily: "'Urbanist', sans-serif" }}>
                    {step.title}
                  </div>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>
                    {step.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PALETTE PICKER -- WHITE sub-section under dark */}
      <section style={{ background: WHITE, padding: "80px 24px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <FadeIn>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, color: "#999", textTransform: "uppercase", marginBottom: 16 }}>Step 02</p>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 600, color: DARK, fontFamily: "'Urbanist', sans-serif", marginBottom: 8, letterSpacing: "-1px" }}>
              Pick Your Color Palette
            </h2>
            <p style={{ fontSize: 15, color: "#666", marginBottom: 40 }}>
              Each palette is tested for contrast, trust-signaling, and conversion on professional service pages.
            </p>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
            {PALETTES.map((palette, i) => {
              const active = selectedPalette === i
              return (
                <FadeIn key={palette.name} delay={i * 0.06}>
                  <div
                    onClick={() => setSelectedPalette(i)}
                    style={{
                      padding: "20px 16px", borderRadius: 6, cursor: "pointer",
                      border: `2px solid ${active ? NEON : "#E8E8E8"}`,
                      background: active ? "rgba(241,254,146,0.06)" : WHITE,
                      transition: "border-color 0.2s, background 0.2s",
                    }}
                    onMouseEnter={e => { if (!active) e.currentTarget.style.borderColor = "#ccc" }}
                    onMouseLeave={e => { if (!active) e.currentTarget.style.borderColor = "#E8E8E8" }}
                  >
                    <div style={{ display: "flex", gap: 6, marginBottom: 12 }}>
                      {palette.colors.map(color => (
                        <div key={color} style={{ width: 22, height: 22, borderRadius: "50%", background: color }} />
                      ))}
                    </div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: DARK, fontFamily: "'Urbanist', sans-serif" }}>
                      {palette.name}
                    </div>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* CONTENT MOCKUP -- WHITE */}
      <section style={{ background: "#F6F6F4", padding: "80px 24px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <FadeIn>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, color: "#999", textTransform: "uppercase", marginBottom: 16 }}>Preview</p>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 600, color: DARK, fontFamily: "'Urbanist', sans-serif", marginBottom: 40, letterSpacing: "-1px" }}>
              See it before you publish.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            {/* Browser frame */}
            <div style={{ borderRadius: 10, overflow: "hidden", boxShadow: "0 8px 40px rgba(0,0,0,0.12)", border: "1px solid #E0E0E0" }}>
              <div style={{ background: "#2A2A2A", padding: "12px 20px", display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ display: "flex", gap: 6 }}>
                  {["#FF5F56", "#FFBD2E", "#27C93F"].map(c => (
                    <div key={c} style={{ width: 12, height: 12, borderRadius: "50%", background: c }} />
                  ))}
                </div>
                <div style={{ flex: 1, background: "#3A3A3A", borderRadius: 4, padding: "5px 14px", fontSize: 12, color: "rgba(255,255,255,0.4)" }}>
                  yourname.partner-portal.app
                </div>
              </div>
              <div style={{ height: 200, background: previewGradient, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 10, padding: "24px 32px" }}>
                <div style={{ width: 160, height: 14, borderRadius: 4, background: "rgba(255,255,255,0.6)" }} />
                <div style={{ width: 260, height: 10, borderRadius: 4, background: "rgba(255,255,255,0.35)" }} />
                <div style={{ width: 200, height: 10, borderRadius: 4, background: "rgba(255,255,255,0.25)", marginBottom: 8 }} />
                <div style={{ padding: "8px 28px", background: NEON, borderRadius: 3, color: DARK, fontSize: 12, fontWeight: 700 }}>
                  Schedule a Free Consultation
                </div>
              </div>
            </div>
            {/* Form mockup below frame */}
            <div style={{ background: WHITE, borderRadius: 8, marginTop: 20, padding: 28, border: "1px solid #E8E8E8" }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: "#888", letterSpacing: 1, textTransform: "uppercase", marginBottom: 20 }}>Content Fields</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                {Object.entries(FORM_PLACEHOLDERS).map(([label, val]) => (
                  <div key={label}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#999", letterSpacing: 0.5, marginBottom: 6, textTransform: "uppercase" }}>{label}</div>
                    <div style={{ padding: "11px 14px", background: "#FAFAFA", border: "1px solid #E8E8E8", borderRadius: 4, fontSize: 13, color: "#ccc" }}>{val}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* TESTIMONIALS -- DARK */}
      <section style={{ background: DARK, padding: "96px 24px", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: -20, right: 80,
          width: 80, height: 80, background: NEON,
          transform: "rotate(45deg)", borderRadius: 8, opacity: 0.15,
        }} />
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <FadeIn>
            <h2 style={{
              fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 600, color: WHITE,
              fontFamily: "'Urbanist', sans-serif", marginBottom: 56,
              lineHeight: 1.1, letterSpacing: "-1px",
            }}>
              What our partners say.
            </h2>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {TESTIMONIALS.map((tm, i) => (
              <FadeIn key={tm.name} delay={i * 0.08}>
                <div style={{
                  borderTop: `2px solid ${NEON}`, paddingTop: 28,
                }}>
                  <div style={{ fontSize: 36, color: NEON, fontFamily: "'Urbanist', sans-serif", lineHeight: 1, marginBottom: 20 }}>"</div>
                  <p style={{ fontSize: 15, color: "rgba(255,255,255,0.8)", lineHeight: 1.75, marginBottom: 24 }}>
                    {tm.quote}
                  </p>
                  <div style={{ fontSize: 14, fontWeight: 700, color: NEON, fontFamily: "'Urbanist', sans-serif" }}>{tm.name}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>{tm.role}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG/RESOURCES -- WHITE */}
      <section style={{ background: WHITE, padding: "96px 24px" }}>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <FadeIn>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 600, color: DARK, fontFamily: "'Urbanist', sans-serif", marginBottom: 48, letterSpacing: "-1px" }}>
              Resources
            </h2>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {RESOURCES.map((r, i) => (
              <FadeIn key={r.title} delay={i * 0.07}>
                <div style={{ padding: "28px 24px", border: "1px solid #E8E8E8", borderRadius: 6, borderLeft: "3px solid transparent", transition: "border-left-color 0.2s", cursor: "pointer" }}
                  onMouseEnter={e => { e.currentTarget.style.borderLeftColor = NEON }}
                  onMouseLeave={e => { e.currentTarget.style.borderLeftColor = "transparent" }}
                >
                  <div style={{ display: "inline-block", background: DARK, color: NEON, fontSize: 10, fontWeight: 800, padding: "4px 10px", borderRadius: 2, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>{r.tag}</div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: DARK, fontFamily: "'Urbanist', sans-serif", marginBottom: 10, lineHeight: 1.3 }}>{r.title}</h3>
                  <p style={{ fontSize: 13, color: "#777", lineHeight: 1.7 }}>{r.excerpt}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA -- WHITE with dark internal card */}
      <section style={{ background: WHITE, padding: "80px 24px" }}>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ background: DARK, borderRadius: 12, padding: "72px 64px", display: "grid", gridTemplateColumns: "1fr auto", gap: 48, alignItems: "center", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", right: -40, top: -40, width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle, rgba(241,254,146,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
              <div style={{ position: "relative", zIndex: 1 }}>
                <h2 style={{ fontSize: "clamp(28px, 3vw, 44px)", fontWeight: 600, color: NEON, fontFamily: "'Urbanist', sans-serif", marginBottom: 16, lineHeight: 1.1, letterSpacing: "-1px" }}>
                  Ready to launch your<br />landing page?
                </h2>
                <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, maxWidth: 400 }}>
                  Set up in minutes. No developers, no design skills, no code required.
                </p>
              </div>
              <div style={{ position: "relative", zIndex: 1, flexShrink: 0 }}>
                <button style={{ padding: "18px 48px", background: NEON, color: DARK, border: "none", borderRadius: 4, fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: "'Urbanist', sans-serif", letterSpacing: 0.5, whiteSpace: "nowrap", transition: "opacity 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.opacity = "0.85" }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = "1" }}
                >Start Building Free</button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FOOTER -- DARK */}
      <footer style={{ background: DARK, padding: "64px 24px 40px" }}>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, marginBottom: 48 }}>
            <div>
              <div style={{ fontSize: 22, fontWeight: 700, color: NEON, fontFamily: "'Urbanist', sans-serif", marginBottom: 14, letterSpacing: "-0.5px" }}>
                {t.name}
              </div>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.7, maxWidth: 240 }}>
                Professional landing pages for professional service providers. Faster than any alternative.
              </p>
            </div>
            {FOOTER_COLS.map(col => (
              <div key={col.heading}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.3)", letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>{col.heading}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {col.links.map(link => (
                    <a key={link} href="#" style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={e => { e.currentTarget.style.color = NEON }}
                      onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.55)" }}
                    >{link}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div style={{ borderTop: `1px solid ${NEON}22`, paddingTop: 28, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>
              &copy; {new Date().getFullYear()} Partner Portal Templates. All rights reserved.
            </p>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.2)" }}>
              {t.name} Template
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
