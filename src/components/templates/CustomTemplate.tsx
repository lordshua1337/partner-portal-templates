"use client"

import type { TemplateConfig } from "@/data/templates"
import FadeIn from "@/components/motion/FadeIn"
import CountUp from "@/components/motion/CountUp"
import FeatureGrid from "@/components/sections/FeatureGrid"
import TestimonialGrid from "@/components/sections/TestimonialGrid"
import FAQ from "@/components/sections/FAQ"
import CTABanner from "@/components/sections/CTABanner"

const BLOCKS = [
  { name: "Hero", icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5z", desc: "Full-width hero" },
  { name: "Stats", icon: "M18 20V10M12 20V4M6 20v-6", desc: "Metrics row" },
  { name: "Features", icon: "M4 6h16M4 12h16M4 18h7", desc: "3-column grid" },
  { name: "Alternating", icon: "M4 6h7M13 12h7M4 18h7", desc: "Left/right layout" },
  { name: "Testimonial", icon: "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z", desc: "Quote card" },
  { name: "Grid", icon: "M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z", desc: "Card grid" },
  { name: "CTA", icon: "M13 2L3 14h9l-1 10 10-12h-9l1-10z", desc: "Action banner" },
  { name: "FAQ", icon: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01", desc: "Accordion" },
  { name: "Form", icon: "M4 4h16v16H4zM8 8h3M8 12h3M8 16h3", desc: "Contact form" },
  { name: "Text", icon: "M4 7V4h16v3M9 20h6M12 4v16", desc: "Rich text block" },
]

export default function CustomTemplate({ template: t }: { readonly template: TemplateConfig }) {
  const c = t.colors

  return (
    <div style={{ minHeight: "100vh", background: c.background, color: c.text, fontFamily: `'${t.fonts.body}', sans-serif` }}>
      {/* Hero: clean white/indigo */}
      <section style={{ padding: "100px 24px 80px", textAlign: "center", position: "relative" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <FadeIn>
            <p style={{ fontSize: 13, letterSpacing: 3, textTransform: "uppercase", color: c.primary, fontWeight: 600, marginBottom: 20 }}>
              Modular Page Builder
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 style={{
              fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, lineHeight: 1.1,
              marginBottom: 20, fontFamily: `'${t.fonts.display}', serif`,
            }}>
              {t.hero.headline}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p style={{ fontSize: 18, color: c.textMuted, lineHeight: 1.7, maxWidth: 520, margin: "0 auto 36px" }}>
              {t.hero.subheadline}
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <button style={{
                padding: "16px 36px", background: c.primary, color: "#fff",
                borderRadius: 10, fontSize: 16, fontWeight: 700, border: "none", cursor: "pointer",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 8px 30px ${c.primary}33` }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none" }}
              >
                {t.hero.cta}
              </button>
              <button style={{
                padding: "16px 36px", background: "transparent", color: c.text,
                borderRadius: 10, fontSize: 16, fontWeight: 600, border: `1px solid ${c.border}`, cursor: "pointer",
              }}>
                {t.hero.secondaryCta}
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Block Showcase */}
      <section style={{ padding: "80px 24px", background: c.surface }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <h2 style={{ fontSize: 32, fontWeight: 700, fontFamily: `'${t.fonts.display}', serif`, marginBottom: 12 }}>
                10 Building Blocks
              </h2>
              <p style={{ fontSize: 17, color: c.textMuted, maxWidth: 500, margin: "0 auto" }}>
                Mix and match these conversion-optimized sections to build any landing page.
              </p>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", gap: 16 }}>
            {BLOCKS.map((block, i) => (
              <FadeIn key={block.name} delay={i * 0.05}>
                <div
                  style={{
                    padding: 24, borderRadius: 14,
                    background: c.background, border: `1px solid ${c.border}`,
                    textAlign: "center", cursor: "pointer",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = "translateY(-4px) rotate(-1deg)"
                    e.currentTarget.style.boxShadow = `0 8px 24px ${c.primary}15`
                    e.currentTarget.style.borderColor = c.primary
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = "translateY(0) rotate(0)"
                    e.currentTarget.style.boxShadow = "none"
                    e.currentTarget.style.borderColor = c.border
                  }}
                >
                  <div style={{
                    width: 48, height: 48, borderRadius: 12, margin: "0 auto 12px",
                    background: `${c.primary}10`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c.primary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d={block.icon} />
                    </svg>
                  </div>
                  <h4 style={{ fontSize: 14, fontWeight: 700, marginBottom: 4 }}>{block.name}</h4>
                  <p style={{ fontSize: 12, color: c.textMuted }}>{block.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section style={{ padding: "64px 24px", background: c.background }}>
        <FadeIn>
          <div style={{ maxWidth: 800, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 24, textAlign: "center" }}>
            {t.stats.map(stat => (
              <div key={stat.label}>
                <div style={{ fontSize: 36, fontWeight: 800, color: c.primary, fontFamily: `'${t.fonts.display}', serif` }}>
                  <CountUp end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </div>
                <div style={{ fontSize: 13, color: c.textMuted, marginTop: 4 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Features */}
      <FeatureGrid
        features={t.features}
        backgroundColor={c.surface}
        cardBackground={c.background}
        textColor={c.text}
        mutedColor={c.textMuted}
        accentColor={c.primary}
        borderColor={c.border}
        title="Why Marketers Love This"
        displayFont={`'${t.fonts.display}', serif`}
      />

      {/* Features Alternating */}
      <section style={{ padding: "80px 24px", background: c.background }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          {[
            { title: "Drag, Drop, Done", desc: "Select blocks from the library, arrange them in any order, and publish. Your landing page is ready in minutes, not days.", align: "left" },
            { title: "Your Brand, Your Rules", desc: "Set your colors, typography, and spacing once. Every block automatically inherits your brand identity for a cohesive look.", align: "right" },
            { title: "Code You Can Ship", desc: "Export clean, semantic HTML or React components. No proprietary lock-in. The code is yours to host, modify, and scale.", align: "left" },
          ].map((item, i) => (
            <FadeIn key={item.title} delay={0.1}>
              <div style={{
                display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 48, alignItems: "center",
                marginBottom: i < 2 ? 64 : 0,
                direction: item.align === "right" ? "rtl" : "ltr",
              }}>
                <div style={{ direction: "ltr" }}>
                  <h3 style={{ fontSize: 28, fontWeight: 700, marginBottom: 12, fontFamily: `'${t.fonts.display}', serif` }}>{item.title}</h3>
                  <p style={{ fontSize: 16, color: c.textMuted, lineHeight: 1.7 }}>{item.desc}</p>
                </div>
                <div style={{
                  direction: "ltr",
                  height: 200, borderRadius: 16,
                  background: c.surface, border: `1px solid ${c.border}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  {/* Geometric shape illustration */}
                  <div style={{ position: "relative", width: 100, height: 100 }}>
                    <div style={{
                      position: "absolute", inset: 0,
                      borderRadius: 16, border: `2px solid ${c.primary}33`,
                      transform: "rotate(12deg)",
                    }} />
                    <div style={{
                      position: "absolute", inset: 10,
                      borderRadius: "50%", background: `${c.primary}15`,
                      border: `2px solid ${c.primary}22`,
                    }} />
                    <div style={{
                      position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
                      width: 24, height: 24, borderRadius: 6,
                      background: c.primary, opacity: 0.3,
                    }} />
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Single large testimonial */}
      <section style={{ padding: "80px 24px", background: c.surface }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <FadeIn>
            <div style={{ display: "flex", justifyContent: "center", gap: 4, marginBottom: 20 }}>
              {Array.from({ length: 5 }, (_, i) => (
                <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill={c.accent} stroke={c.accent} strokeWidth="1">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <blockquote style={{ fontSize: 22, color: c.text, lineHeight: 1.6, fontStyle: "italic", marginBottom: 24, fontFamily: `'${t.fonts.display}', serif` }}>
              &ldquo;{t.testimonials[0].quote}&rdquo;
            </blockquote>
            <div>
              <div style={{ fontSize: 16, fontWeight: 700 }}>{t.testimonials[0].name}</div>
              <div style={{ fontSize: 14, color: c.textMuted }}>{t.testimonials[0].role}, {t.testimonials[0].company}</div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* More testimonials */}
      <TestimonialGrid
        testimonials={t.testimonials.slice(1)}
        backgroundColor={c.background}
        cardBackground={c.surface}
        textColor={c.text}
        mutedColor={c.textMuted}
        accentColor={c.accent}
        borderColor={c.border}
        displayFont={`'${t.fonts.display}', serif`}
      />

      {/* FAQ */}
      <FAQ
        items={t.faq}
        backgroundColor={c.surface}
        textColor={c.text}
        mutedColor={c.textMuted}
        accentColor={c.primary}
        borderColor={c.border}
        displayFont={`'${t.fonts.display}', serif`}
      />

      {/* CTA */}
      <CTABanner
        headline="Start Building Your Page"
        description="10 blocks, unlimited combinations. Assemble a landing page in minutes."
        buttonText="Get Started Free"
        gradient={`linear-gradient(135deg, ${c.primary}, ${c.accent})`}
        displayFont={`'${t.fonts.display}', serif`}
      />

      {/* Footer */}
      <footer style={{ padding: "32px 24px", textAlign: "center", borderTop: `1px solid ${c.border}` }}>
        <p style={{ fontSize: 13, color: c.textMuted }}>{t.name} Template -- Partner Portal Templates</p>
      </footer>
    </div>
  )
}
