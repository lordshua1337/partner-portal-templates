"use client"

import type { TemplateConfig } from "@/data/templates"
import FadeIn from "@/components/motion/FadeIn"
import FloatingElement from "@/components/motion/FloatingElement"
import FeatureGrid from "@/components/sections/FeatureGrid"
import PricingTable from "@/components/sections/PricingTable"
import TestimonialGrid from "@/components/sections/TestimonialGrid"
import FAQ from "@/components/sections/FAQ"
import CTABanner from "@/components/sections/CTABanner"
import CountUp from "@/components/motion/CountUp"

export default function EcommerceTemplate({ template: t }: { readonly template: TemplateConfig }) {
  const c = t.colors

  return (
    <div style={{ minHeight: "100vh", background: c.background, color: c.text, fontFamily: `'${t.fonts.body}', sans-serif` }}>
      {/* Hero: warm gradient, product mockup */}
      <section style={{ padding: "80px 24px", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 64, alignItems: "center" }}>
          <FadeIn direction="left">
            <div>
              <p style={{ fontSize: 13, letterSpacing: 2, textTransform: "uppercase", color: c.accent, fontWeight: 600, marginBottom: 16 }}>
                New Release
              </p>
              <h1 style={{
                fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800,
                lineHeight: 1.1, marginBottom: 20,
                fontFamily: `'${t.fonts.display}', serif`,
              }}>
                {t.hero.headline}
              </h1>
              <p style={{ fontSize: 17, color: c.textMuted, lineHeight: 1.7, marginBottom: 32 }}>
                {t.hero.subheadline}
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
                <button style={{
                  padding: "16px 32px", background: c.primary, color: "#fff",
                  borderRadius: 10, fontSize: 16, fontWeight: 700, border: "none", cursor: "pointer",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 8px 30px ${c.primary}44` }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none" }}
                >
                  {t.hero.cta}
                </button>
                <button style={{
                  padding: "16px 32px", background: "transparent", color: c.text,
                  borderRadius: 10, fontSize: 16, fontWeight: 600, border: `1px solid ${c.border}`, cursor: "pointer",
                }}>
                  {t.hero.secondaryCta}
                </button>
              </div>
              {/* Trust signals */}
              <div style={{ display: "flex", gap: 24, marginTop: 32, flexWrap: "wrap" }}>
                {t.stats.map(stat => (
                  <div key={stat.label}>
                    <div style={{ fontSize: 22, fontWeight: 800, color: c.primary, fontFamily: `'${t.fonts.display}', serif` }}>
                      <CountUp end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                    </div>
                    <div style={{ fontSize: 12, color: c.textMuted }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Product image placeholder */}
          <FadeIn direction="right" delay={0.2}>
            <FloatingElement duration={8}>
              <div style={{
                borderRadius: 24, overflow: "hidden", position: "relative",
                background: `linear-gradient(135deg, ${c.primary}11, ${c.accent}11)`,
                border: `1px solid ${c.border}`,
                padding: 32, aspectRatio: "1",
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              }}>
                {/* Best seller badge */}
                <div style={{
                  position: "absolute", top: 20, right: 20,
                  padding: "6px 16px", background: c.accent, color: "#fff",
                  borderRadius: 20, fontSize: 12, fontWeight: 700,
                }}>
                  Best Seller
                </div>
                {/* Product mockup */}
                <div style={{
                  width: 180, height: 220, borderRadius: 16,
                  background: `linear-gradient(135deg, ${c.primary}22, ${c.accent}22)`,
                  border: `2px solid ${c.border}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 24,
                }}>
                  <div style={{
                    width: 80, height: 80, borderRadius: 12,
                    background: `linear-gradient(135deg, ${c.primary}44, ${c.accent}44)`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={c.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                </div>
                <div style={{ fontSize: 22, fontWeight: 700, fontFamily: `'${t.fonts.display}', serif` }}>Design System Kit</div>
                <div style={{ fontSize: 14, color: c.textMuted, marginTop: 4 }}>v3.0 -- 2,400+ Components</div>
              </div>
            </FloatingElement>
          </FadeIn>
        </div>
      </section>

      {/* Features */}
      <FeatureGrid
        features={t.features}
        backgroundColor={c.surface}
        cardBackground={c.background}
        textColor={c.text}
        mutedColor={c.textMuted}
        accentColor={c.accent}
        borderColor={c.border}
        title="Everything Included"
        subtitle="One purchase, zero limitations. Here is what you get."
        displayFont={`'${t.fonts.display}', serif`}
      />

      {/* Product Gallery */}
      <section style={{ padding: "80px 24px", background: c.background }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <FadeIn>
            <h2 style={{ fontSize: 32, fontWeight: 700, textAlign: "center", marginBottom: 48, fontFamily: `'${t.fonts.display}', serif` }}>
              Preview the Components
            </h2>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
            {[
              { label: "Dashboard", color: c.primary },
              { label: "Forms", color: c.accent },
              { label: "Cards", color: c.primaryLight },
              { label: "Navigation", color: c.accent },
              { label: "Charts", color: c.primary },
              { label: "Modals", color: c.primaryLight },
            ].map((item, i) => (
              <FadeIn key={item.label} delay={i * 0.08}>
                <div
                  style={{
                    aspectRatio: "4/3", borderRadius: 12,
                    background: `linear-gradient(135deg, ${item.color}11, ${item.color}22)`,
                    border: `1px solid ${c.border}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    cursor: "pointer", overflow: "hidden", position: "relative",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.03)"; e.currentTarget.style.boxShadow = `0 8px 30px ${item.color}22` }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "none" }}
                >
                  <span style={{ fontSize: 15, fontWeight: 600, color: c.textMuted }}>{item.label}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      {t.pricing && (
        <PricingTable
          tiers={t.pricing}
          backgroundColor={c.surface}
          cardBackground={c.background}
          textColor={c.text}
          mutedColor={c.textMuted}
          accentColor={c.accent}
          borderColor={c.border}
          displayFont={`'${t.fonts.display}', serif`}
        />
      )}

      {/* Testimonials */}
      <TestimonialGrid
        testimonials={t.testimonials}
        backgroundColor={c.background}
        cardBackground={c.surface}
        textColor={c.text}
        mutedColor={c.textMuted}
        accentColor={c.primary}
        borderColor={c.border}
        displayFont={`'${t.fonts.display}', serif`}
      />

      {/* FAQ */}
      <FAQ
        items={t.faq}
        backgroundColor={c.surface}
        textColor={c.text}
        mutedColor={c.textMuted}
        accentColor={c.accent}
        borderColor={c.border}
        displayFont={`'${t.fonts.display}', serif`}
      />

      {/* CTA */}
      <CTABanner
        headline="Get the Complete Kit Today"
        description="2,400+ components, 180+ templates, lifetime updates. One purchase, no subscriptions."
        buttonText="Get Started - $149"
        gradient={`linear-gradient(135deg, ${c.accent}, ${c.primary})`}
        displayFont={`'${t.fonts.display}', serif`}
      />

      {/* Footer */}
      <footer style={{ padding: "32px 24px", textAlign: "center", borderTop: `1px solid ${c.border}`, background: c.surface }}>
        <p style={{ fontSize: 13, color: c.textMuted }}>{t.name} Template -- Partner Portal Templates</p>
      </footer>
    </div>
  )
}
