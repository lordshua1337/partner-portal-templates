"use client"

import type { TemplateConfig } from "@/data/templates"
import FadeIn from "@/components/motion/FadeIn"
import GlowCard from "@/components/motion/GlowCard"
import FeatureGrid from "@/components/sections/FeatureGrid"
import PricingTable from "@/components/sections/PricingTable"
import FAQ from "@/components/sections/FAQ"
import CTABanner from "@/components/sections/CTABanner"
import TestimonialGrid from "@/components/sections/TestimonialGrid"

export default function SaaSTemplate({ template: t }: { readonly template: TemplateConfig }) {
  const c = t.colors

  return (
    <div style={{ minHeight: "100vh", background: c.background, color: c.text, fontFamily: `'${t.fonts.body}', sans-serif` }}>
      {/* Hero: Dark with glowing browser mockup */}
      <section
        className="bg-grid"
        style={{
          padding: "120px 24px 80px",
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        {/* Glow */}
        <div style={{
          position: "absolute", top: "30%", left: "50%", transform: "translate(-50%, -50%)",
          width: 700, height: 500,
          background: `radial-gradient(ellipse, ${c.primary}22 0%, transparent 70%)`,
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <FadeIn>
            <p style={{ fontSize: 13, letterSpacing: 3, textTransform: "uppercase", color: c.primaryLight, marginBottom: 20, fontWeight: 600 }}>
              Developer Platform
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 style={{
              fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, lineHeight: 1.1,
              marginBottom: 20, fontFamily: `'${t.fonts.display}', sans-serif`,
              background: `linear-gradient(135deg, ${c.text} 40%, ${c.primary})`,
              backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>
              {t.hero.headline}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p style={{ fontSize: 18, color: c.textMuted, lineHeight: 1.7, maxWidth: 560, margin: "0 auto 36px" }}>
              {t.hero.subheadline}
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <button style={{
                padding: "16px 36px", background: c.primary, color: "#fff",
                borderRadius: 10, fontSize: 16, fontWeight: 700, border: "none", cursor: "pointer",
                boxShadow: `0 0 30px ${c.primary}44`,
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
              onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
              >
                {t.hero.cta}
              </button>
              <button style={{
                padding: "16px 36px", background: "transparent", color: c.textMuted,
                borderRadius: 10, fontSize: 16, fontWeight: 600, border: `1px solid ${c.border}`, cursor: "pointer",
              }}>
                {t.hero.secondaryCta}
              </button>
            </div>
          </FadeIn>
        </div>

        {/* Browser mockup */}
        <FadeIn delay={0.5}>
          <div style={{
            maxWidth: 900, margin: "60px auto 0",
            borderRadius: 16, overflow: "hidden",
            border: `1px solid ${c.border}`,
            boxShadow: `0 20px 80px ${c.primary}22, 0 0 0 1px ${c.border}`,
            background: c.surface,
            position: "relative",
            transform: "perspective(1000px) rotateX(2deg)",
          }}>
            {/* Browser chrome */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "12px 16px", background: `${c.background}`, borderBottom: `1px solid ${c.border}` }}>
              <div style={{ display: "flex", gap: 6 }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
              </div>
              <div style={{ flex: 1, textAlign: "center" }}>
                <div style={{ display: "inline-block", padding: "4px 40px", borderRadius: 6, background: c.surface, fontSize: 12, color: c.textMuted }}>
                  app.devplatform.io/dashboard
                </div>
              </div>
            </div>
            {/* Fake dashboard */}
            <div className="bg-grid" style={{ padding: 24, minHeight: 300, position: "relative" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 20 }}>
                {[
                  { label: "Deployments", value: "2,847", trend: "+12%" },
                  { label: "Uptime", value: "99.97%", trend: "+0.02%" },
                  { label: "Avg Response", value: "48ms", trend: "-8ms" },
                  { label: "Active Users", value: "1,204", trend: "+18%" },
                ].map(item => (
                  <div key={item.label} style={{ padding: 16, borderRadius: 10, background: c.background, border: `1px solid ${c.border}` }}>
                    <div style={{ fontSize: 11, color: c.textMuted, marginBottom: 6 }}>{item.label}</div>
                    <div style={{ fontSize: 22, fontWeight: 700, color: c.text }}>{item.value}</div>
                    <div style={{ fontSize: 11, color: "#22c55e", marginTop: 4 }}>{item.trend}</div>
                  </div>
                ))}
              </div>
              {/* Chart placeholder */}
              <div style={{ height: 120, borderRadius: 10, background: c.background, border: `1px solid ${c.border}`, display: "flex", alignItems: "end", padding: "0 16px 16px", gap: 8 }}>
                {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
                  <div key={i} style={{ flex: 1, height: `${h}%`, background: `linear-gradient(to top, ${c.primary}44, ${c.primary})`, borderRadius: "4px 4px 0 0", transition: "height 0.3s ease" }} />
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Social proof strip */}
      <section style={{ padding: "36px 24px", borderTop: `1px solid ${c.border}`, borderBottom: `1px solid ${c.border}` }}>
        <FadeIn>
          <div style={{ maxWidth: 960, margin: "0 auto", display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap", alignItems: "center" }}>
            <span style={{ fontSize: 13, color: c.textMuted, fontWeight: 500 }}>Trusted by</span>
            {["Vercel", "Stripe", "Linear", "Notion", "Figma"].map(name => (
              <span key={name} style={{ fontSize: 16, fontWeight: 700, color: c.textMuted, opacity: 0.5 }}>{name}</span>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Features */}
      <FeatureGrid
        features={t.features}
        backgroundColor={c.background}
        cardBackground={c.surface}
        textColor={c.text}
        mutedColor={c.textMuted}
        accentColor={c.primary}
        borderColor={c.border}
        title="Everything You Need to Ship"
        subtitle="One platform for your entire development workflow."
        displayFont={`'${t.fonts.display}', sans-serif`}
        useGlow
      />

      {/* Product Tour: alternating sections */}
      <section style={{ padding: "80px 24px", background: c.surface }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          {[
            { title: "Deploy in Seconds", desc: "Push your code and watch it go live instantly. Zero-config deployments with automatic SSL, CDN, and edge caching.", align: "left" },
            { title: "Monitor Everything", desc: "Real-time dashboards for every metric. Set up alerts, track errors, and get notified before your users notice a problem.", align: "right" },
            { title: "Scale Without Thinking", desc: "Auto-scaling infrastructure that handles traffic spikes effortlessly. Pay only for what you use, scale to millions.", align: "left" },
          ].map((item, i) => (
            <FadeIn key={item.title} delay={0.1}>
              <div style={{
                display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 48, alignItems: "center",
                marginBottom: i < 2 ? 64 : 0,
                direction: item.align === "right" ? "rtl" : "ltr",
              }}>
                <div style={{ direction: "ltr" }}>
                  <h3 style={{ fontSize: 28, fontWeight: 700, marginBottom: 12, fontFamily: `'${t.fonts.display}', sans-serif` }}>{item.title}</h3>
                  <p style={{ fontSize: 16, color: c.textMuted, lineHeight: 1.7 }}>{item.desc}</p>
                </div>
                <div style={{
                  direction: "ltr",
                  height: 220, borderRadius: 16,
                  background: c.background, border: `1px solid ${c.border}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  position: "relative", overflow: "hidden",
                }}>
                  <div className="bg-grid" style={{ position: "absolute", inset: 0 }} />
                  <div style={{
                    width: 64, height: 64, borderRadius: 16,
                    background: `${c.primary}15`, border: `1px solid ${c.primary}33`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={c.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={i === 0 ? "M13 2L3 14h9l-1 10 10-12h-9l1-10z" : i === 1 ? "M18 20V10M12 20V4M6 20v-6" : "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"} />
                    </svg>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Pricing */}
      {t.pricing && (
        <PricingTable
          tiers={t.pricing}
          backgroundColor={c.background}
          cardBackground={c.surface}
          textColor={c.text}
          mutedColor={c.textMuted}
          accentColor={c.primary}
          borderColor={c.border}
          displayFont={`'${t.fonts.display}', sans-serif`}
        />
      )}

      {/* Testimonials */}
      <TestimonialGrid
        testimonials={t.testimonials}
        backgroundColor={c.surface}
        cardBackground={c.background}
        textColor={c.text}
        mutedColor={c.textMuted}
        accentColor={c.accent}
        borderColor={c.border}
      />

      {/* FAQ */}
      <FAQ
        items={t.faq}
        backgroundColor={c.background}
        textColor={c.text}
        mutedColor={c.textMuted}
        accentColor={c.primary}
        borderColor={c.border}
        displayFont={`'${t.fonts.display}', sans-serif`}
      />

      {/* CTA */}
      <CTABanner
        headline="Start Building for Free"
        description="No credit card required. Deploy your first project in under 2 minutes."
        buttonText="Start Free Trial"
        gradient={`linear-gradient(135deg, ${c.primary}, ${c.accent})`}
        displayFont={`'${t.fonts.display}', sans-serif`}
      />

      {/* Footer */}
      <footer style={{ padding: "32px 24px", textAlign: "center", borderTop: `1px solid ${c.border}` }}>
        <p style={{ fontSize: 13, color: c.textMuted }}>{t.name} Template -- Partner Portal Templates</p>
      </footer>
    </div>
  )
}
