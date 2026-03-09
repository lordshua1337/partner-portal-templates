"use client"

import type { TemplateConfig } from "@/data/templates"
import FadeIn from "@/components/motion/FadeIn"
import CountUp from "@/components/motion/CountUp"
import TestimonialGrid from "@/components/sections/TestimonialGrid"
import FAQ from "@/components/sections/FAQ"
import CTABanner from "@/components/sections/CTABanner"
import FeatureGrid from "@/components/sections/FeatureGrid"

const CASE_RESULTS = [
  {
    amount: "$4.2M",
    type: "Personal Injury",
    description: "Secured a landmark settlement for a client injured in a commercial vehicle accident. Insurance company initially offered $180,000.",
  },
  {
    amount: "Charges Dismissed",
    type: "Criminal Defense",
    description: "All felony charges dismissed for a client facing 15 years. Evidence challenged and prosecution's case dismantled before trial.",
  },
  {
    amount: "$1.8M",
    type: "Medical Malpractice",
    description: "Won full damages for a family after a preventable surgical error resulted in permanent disability. Case went to jury verdict.",
  },
]

export default function AttorneyTemplate({ template: t }: { readonly template: TemplateConfig }) {
  const c = t.colors
  const displayFont = `'${t.fonts.display}', sans-serif`

  return (
    <div style={{ minHeight: "100vh", background: c.background, color: c.text, fontFamily: `'${t.fonts.body}', sans-serif` }}>

      {/* Hero: Split layout, navy background */}
      <section style={{ background: c.primary, position: "relative", overflow: "hidden" }}>
        {/* Gold accent line at top */}
        <div style={{ height: 4, background: c.accent, width: "100%" }} />
        <div style={{
          maxWidth: 1100, margin: "0 auto", padding: "80px 24px",
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 64, alignItems: "center",
        }}>
          <FadeIn direction="left">
            <div>
              <p style={{ fontSize: 12, letterSpacing: 3, textTransform: "uppercase", color: c.accent, fontWeight: 700, marginBottom: 20 }}>
                {t.category}
              </p>
              <h1 style={{
                fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 800, color: "#fff",
                lineHeight: 1.1, marginBottom: 24, fontFamily: displayFont,
              }}>
                {t.hero.headline}
              </h1>
              <p style={{ fontSize: 18, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, marginBottom: 40, maxWidth: 480 }}>
                {t.hero.subheadline}
              </p>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <button
                  style={{
                    padding: "18px 40px", background: c.accent, color: "#fff",
                    borderRadius: 2, fontSize: 15, fontWeight: 700, border: "none", cursor: "pointer",
                    letterSpacing: 1, textTransform: "uppercase",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 8px 24px ${c.accent}55` }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none" }}
                >
                  {t.hero.cta}
                </button>
                {t.hero.secondaryCta && (
                  <button style={{
                    padding: "18px 40px", background: "transparent", color: "rgba(255,255,255,0.8)",
                    borderRadius: 2, fontSize: 15, fontWeight: 600,
                    border: "1px solid rgba(255,255,255,0.25)", cursor: "pointer",
                    letterSpacing: 1, textTransform: "uppercase",
                  }}>
                    {t.hero.secondaryCta}
                  </button>
                )}
              </div>
            </div>
          </FadeIn>

          {/* Decorative scales of justice icon */}
          <FadeIn direction="right" delay={0.2}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: 40 }}>
              <div style={{ position: "relative", width: 220, height: 240 }}>
                {/* Beam top bar */}
                <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 4, height: 80, background: c.accent }} />
                {/* Horizontal beam */}
                <div style={{ position: "absolute", top: 76, left: 0, right: 0, height: 4, background: c.accent }} />
                {/* Left scale chain */}
                <div style={{ position: "absolute", top: 80, left: 16, width: 2, height: 60, background: `${c.accent}88` }} />
                {/* Right scale chain */}
                <div style={{ position: "absolute", top: 80, right: 16, width: 2, height: 60, background: `${c.accent}88` }} />
                {/* Left scale pan */}
                <div style={{
                  position: "absolute", top: 136, left: 0, width: 60, height: 8,
                  background: c.accent, borderRadius: "0 0 30px 30px",
                }} />
                {/* Right scale pan (slightly lower = unbalanced, humanizing touch) */}
                <div style={{
                  position: "absolute", top: 148, right: 0, width: 60, height: 8,
                  background: c.accent, borderRadius: "0 0 30px 30px",
                }} />
                {/* Center pivot circle */}
                <div style={{
                  position: "absolute", top: 68, left: "50%", transform: "translateX(-50%)",
                  width: 20, height: 20, borderRadius: "50%",
                  background: c.accent, border: `3px solid ${c.primary}`,
                }} />
                {/* Base pillar */}
                <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: 8, height: 80, background: `${c.accent}66` }} />
                {/* Base platform */}
                <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: 100, height: 8, background: c.accent, borderRadius: 2 }} />
                {/* Decorative ring glow */}
                <div style={{
                  position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
                  width: 180, height: 180, borderRadius: "50%",
                  border: `1px solid ${c.accent}22`,
                  pointerEvents: "none",
                }} />
                <div style={{
                  position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
                  width: 220, height: 220, borderRadius: "50%",
                  border: `1px solid ${c.accent}11`,
                  pointerEvents: "none",
                }} />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Trust Bar: stats row */}
      <section style={{ padding: "48px 24px", background: c.surface, borderBottom: `1px solid ${c.border}` }}>
        <FadeIn>
          <div style={{
            maxWidth: 960, margin: "0 auto",
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 32, textAlign: "center",
          }}>
            {t.stats.map(stat => (
              <div key={stat.label}>
                <div style={{ fontSize: 38, fontWeight: 800, color: c.primary, fontFamily: displayFont }}>
                  <CountUp end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </div>
                <div style={{ fontSize: 13, color: c.textMuted, marginTop: 6, letterSpacing: 0.5 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Practice Areas: FeatureGrid */}
      <FeatureGrid
        features={t.features}
        backgroundColor={c.background}
        cardBackground={c.surface}
        textColor={c.text}
        mutedColor={c.textMuted}
        accentColor={c.primary}
        borderColor={c.border}
        title="Practice Areas"
        subtitle="Experienced representation across a broad range of legal matters."
        displayFont={displayFont}
      />

      {/* Case Results: dark navy, gold accents */}
      <section style={{ padding: "80px 24px", background: c.primary }}>
        <div style={{ maxWidth: 1060, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <div style={{ width: 40, height: 3, background: c.accent, margin: "0 auto 20px" }} />
              <h2 style={{ fontSize: 34, fontWeight: 700, color: "#fff", fontFamily: displayFont }}>
                Case Results
              </h2>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.55)", marginTop: 12 }}>
                Past results do not guarantee future outcomes. Every case is unique.
              </p>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {CASE_RESULTS.map((result, i) => (
              <FadeIn key={result.type} delay={i * 0.1}>
                <div style={{
                  padding: 36, borderRadius: 2,
                  background: "rgba(255,255,255,0.05)",
                  border: `1px solid ${c.accent}33`,
                  borderTop: `3px solid ${c.accent}`,
                  transition: "background 0.3s ease",
                }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.09)"}
                onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.05)"}
                >
                  <div style={{ fontSize: 36, fontWeight: 800, color: c.accent, fontFamily: displayFont, marginBottom: 8 }}>
                    {result.amount}
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.5)", letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>
                    {result.type}
                  </div>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>
                    {result.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us: alternating blocks */}
      <section style={{ padding: "80px 24px", maxWidth: 1060, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ width: 40, height: 3, background: c.accent, margin: "0 auto 20px" }} />
            <h2 style={{ fontSize: 34, fontWeight: 700, fontFamily: displayFont }}>Why Choose Us</h2>
          </div>
        </FadeIn>

        {/* Block 1: image left, text right */}
        <FadeIn delay={0.1}>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 64, alignItems: "center", marginBottom: 72,
          }}>
            <div style={{
              background: `linear-gradient(135deg, ${c.primary}15, ${c.accent}18)`,
              borderRadius: 4, height: 280,
              display: "flex", alignItems: "center", justifyContent: "center",
              border: `1px solid ${c.border}`,
            }}>
              <span style={{ fontSize: 64, opacity: 0.3, color: c.primary, fontFamily: displayFont, fontWeight: 900 }}>
                LAW
              </span>
            </div>
            <div>
              <div style={{ width: 32, height: 3, background: c.accent, marginBottom: 20 }} />
              <h3 style={{ fontSize: 28, fontWeight: 700, fontFamily: displayFont, marginBottom: 16, color: c.text }}>
                Trial-Ready Representation
              </h3>
              <p style={{ fontSize: 16, color: c.textMuted, lineHeight: 1.8, marginBottom: 20 }}>
                Many firms settle too early. We prepare every case as if it is going to trial from day one. That preparation is why insurance companies and opposing counsel take our clients seriously and why we consistently achieve superior results.
              </p>
              <p style={{ fontSize: 16, color: c.textMuted, lineHeight: 1.8 }}>
                Our trial team has litigated hundreds of cases to verdict. When negotiation fails, we are ready to fight.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Block 2: text left, image right */}
        <FadeIn delay={0.15}>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 64, alignItems: "center",
          }}>
            <div style={{ order: 1 }}>
              <div style={{ width: 32, height: 3, background: c.accent, marginBottom: 20 }} />
              <h3 style={{ fontSize: 28, fontWeight: 700, fontFamily: displayFont, marginBottom: 16, color: c.text }}>
                No Fee Unless We Win
              </h3>
              <p style={{ fontSize: 16, color: c.textMuted, lineHeight: 1.8, marginBottom: 20 }}>
                You should never have to choose between justice and your finances. We work on a contingency basis for personal injury and civil cases, meaning our fee comes only from the recovery we secure for you. Zero upfront costs.
              </p>
              <p style={{ fontSize: 16, color: c.textMuted, lineHeight: 1.8 }}>
                For criminal defense and other matters, we offer transparent flat-fee arrangements with no hidden charges. Schedule a free consultation to discuss your options.
              </p>
            </div>
            <div style={{
              background: `linear-gradient(135deg, ${c.accent}18, ${c.primary}12)`,
              borderRadius: 4, height: 280,
              display: "flex", alignItems: "center", justifyContent: "center",
              border: `1px solid ${c.border}`,
              order: 2,
            }}>
              <span style={{ fontSize: 48, opacity: 0.25, color: c.accent, fontFamily: displayFont, fontWeight: 900, textAlign: "center" }}>
                NO WIN<br />NO FEE
              </span>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Testimonials */}
      <TestimonialGrid
        testimonials={t.testimonials}
        backgroundColor={c.surface}
        cardBackground={c.background}
        textColor={c.text}
        mutedColor={c.textMuted}
        accentColor={c.accent}
        borderColor={c.border}
        displayFont={displayFont}
      />

      {/* FAQ */}
      <FAQ
        items={t.faq}
        backgroundColor={c.background}
        textColor={c.text}
        mutedColor={c.textMuted}
        accentColor={c.primary}
        borderColor={c.border}
        displayFont={displayFont}
      />

      {/* CTA Banner */}
      <CTABanner
        headline="Get a Free Case Evaluation"
        description="Speak directly with an attorney. No obligations, no pressure. We will tell you exactly where you stand and what your options are."
        buttonText="Schedule Free Consultation"
        gradient={t.gradient}
        buttonTextColor={c.primary}
        displayFont={displayFont}
      />

      {/* Footer */}
      <footer style={{ padding: "32px 24px", textAlign: "center", borderTop: `1px solid ${c.border}`, background: c.surface }}>
        <p style={{ fontSize: 13, color: c.textMuted }}>{t.name} Template -- Partner Portal Templates</p>
      </footer>
    </div>
  )
}
