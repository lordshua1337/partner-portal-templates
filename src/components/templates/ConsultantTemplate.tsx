"use client"

import type { TemplateConfig } from "@/data/templates"
import FadeIn from "@/components/motion/FadeIn"
import CountUp from "@/components/motion/CountUp"
import TestimonialGrid from "@/components/sections/TestimonialGrid"
import FAQ from "@/components/sections/FAQ"
import CTABanner from "@/components/sections/CTABanner"

const PRIMARY = "#4E2FFF"
const ACCENT = "#F97316"
const BG = "#F2F6F8"

const ICONS: Record<string, string> = {
  target: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0-14a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z",
  chart: "M18 20V10M12 20V4M6 20v-6",
  users: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
  zap: "M13 2L3 14h9l-1 10 10-12h-9l1-10z",
  globe: "M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zM2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",
  layers: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
  shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  check: "M20 6L9 17l-5-5",
  code: "M16 18l6-6-6-6M8 6l-6 6 6 6",
  star: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
  lock: "M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2zM7 11V7a5 5 0 0 1 10 0v4",
}

const INSIGHTS = [
  { category: "Growth", title: "Scaling Past $10M", excerpt: "The inflection points that separate companies that stall at eight figures from those that compound past them." },
  { category: "Talent", title: "The Hiring Playbook", excerpt: "How the best operators build a recruiting engine that runs itself -- and stops costing them deals." },
  { category: "Strategy", title: "Market Entry Strategy", excerpt: "A field guide for entering new markets without burning budget on assumptions. Data first, then conviction." },
]

export default function ConsultantTemplate({ template: t }: { readonly template: TemplateConfig }) {
  const c = t.colors

  return (
    <div style={{ minHeight: "100vh", background: BG, color: c.text, fontFamily: `'${t.fonts.body}', sans-serif` }}>

      {/* Hero */}
      <section style={{ padding: "120px 24px 100px", background: PRIMARY, textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
          width: 900, height: 600,
          background: "radial-gradient(ellipse, rgba(249,115,22,0.12) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />
        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <FadeIn>
            <p style={{
              fontSize: 12, letterSpacing: 3, textTransform: "uppercase",
              color: ACCENT, fontWeight: 700, marginBottom: 20,
            }}>
              Business Strategy &amp; Growth Consulting
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 style={{
              fontSize: "clamp(44px, 7vw, 80px)", fontWeight: 900, color: "#fff",
              lineHeight: 1.02, marginBottom: 28,
              fontFamily: `'${t.fonts.display}', sans-serif`,
              letterSpacing: "-0.02em",
            }}>
              {t.hero.headline}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, maxWidth: 540, margin: "0 auto 40px" }}>
              {t.hero.subheadline}
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <button
                style={{
                  padding: "18px 40px", background: ACCENT, color: "#fff",
                  borderRadius: 6, fontSize: 15, fontWeight: 800, border: "none", cursor: "pointer",
                  letterSpacing: 0.5, textTransform: "uppercase",
                  boxShadow: `0 4px 24px rgba(249,115,22,0.4)`,
                  transition: "transform 0.2s ease",
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)" }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)" }}
              >
                {t.hero.cta}
              </button>
              <button style={{
                padding: "18px 40px", background: "transparent", color: "rgba(255,255,255,0.7)",
                borderRadius: 6, fontSize: 15, fontWeight: 600,
                border: "1px solid rgba(255,255,255,0.2)", cursor: "pointer",
              }}>
                {t.hero.secondaryCta}
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Client Logos */}
      <section style={{ padding: "36px 24px", background: "#fff", borderBottom: "1px solid #E5E7EB" }}>
        <FadeIn>
          <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", justifyContent: "center", alignItems: "center", gap: 48, flexWrap: "wrap" }}>
            <span style={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: "#9CA3AF", fontWeight: 600, marginRight: 8 }}>
              Alumni &amp; Network
            </span>
            {["McKinsey Alumni", "Fortune 500 Clients", "Bain & Company", "Deloitte Partner", "BCG Network"].map(name => (
              <span key={name} style={{ fontSize: 15, fontWeight: 700, color: "#6B7280", opacity: 0.5, letterSpacing: "-0.01em" }}>
                {name}
              </span>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Services */}
      <section style={{ padding: "88px 24px", background: PRIMARY }}>
        <div style={{ maxWidth: 1060, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <div style={{ width: 40, height: 3, background: ACCENT, margin: "0 auto 20px" }} />
              <h2 style={{
                fontSize: 36, fontWeight: 800, color: "#fff",
                fontFamily: `'${t.fonts.display}', sans-serif`,
                letterSpacing: "-0.02em",
              }}>
                What We Do
              </h2>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {t.features.slice(0, 3).map((feature, i) => (
              <FadeIn key={feature.title} delay={i * 0.08}>
                <div style={{
                  background: "#fff", borderRadius: 10, padding: "36px 32px",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.18)",
                  transition: "transform 0.25s ease",
                  cursor: "default",
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)" }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)" }}
                >
                  <div style={{
                    width: 48, height: 48, borderRadius: 10,
                    background: `${PRIMARY}10`, marginBottom: 20,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={PRIMARY} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={ICONS[feature.icon] ?? ICONS.target} />
                    </svg>
                  </div>
                  <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 10, color: c.text, fontFamily: `'${t.fonts.display}', sans-serif` }}>
                    {feature.title}
                  </h3>
                  <p style={{ fontSize: 14, color: c.textMuted, lineHeight: 1.75 }}>
                    {feature.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Spotlight */}
      <section style={{ padding: "88px 24px", background: BG }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 64, alignItems: "center" }}>
              <div>
                <div style={{ width: 48, height: 4, background: ACCENT, marginBottom: 20 }} />
                <div style={{
                  fontSize: "clamp(52px, 7vw, 72px)", fontWeight: 900, color: c.text, lineHeight: 1,
                  fontFamily: `'${t.fonts.display}', sans-serif`, letterSpacing: "-0.03em", marginBottom: 8,
                }}>
                  340%
                </div>
                <div style={{ fontSize: 16, fontWeight: 700, color: ACCENT, textTransform: "uppercase", letterSpacing: 1, marginBottom: 16 }}>
                  Revenue Growth
                </div>
                <p style={{ fontSize: 13, color: c.textMuted, lineHeight: 1.6 }}>
                  Achieved in 18 months for a B2B SaaS company entering a saturated market.
                </p>
              </div>
              <div>
                <p style={{ fontSize: 12, letterSpacing: 2, textTransform: "uppercase", color: c.textMuted, fontWeight: 600, marginBottom: 16 }}>
                  Case Study -- TechBridge Solutions
                </p>
                <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 18, fontFamily: `'${t.fonts.display}', sans-serif`, lineHeight: 1.2 }}>
                  From $1.2M to $4.6M ARR Without Increasing Headcount
                </h3>
                <p style={{ fontSize: 15, color: c.textMuted, lineHeight: 1.75, marginBottom: 20 }}>
                  TechBridge was burning cash on acquisition channels that did not compound. We rebuilt their ICP model, consolidated their funnel, and introduced a land-and-expand motion that turned 40% of SMB customers into enterprise accounts.
                </p>
                <blockquote style={{ fontSize: 15, fontStyle: "italic", color: c.textMuted, lineHeight: 1.7, borderLeft: `3px solid ${ACCENT}`, paddingLeft: 16 }}>
                  &ldquo;They did not just improve our marketing. They fundamentally changed how we think about growth.&rdquo;
                </blockquote>
                <p style={{ fontSize: 13, fontWeight: 700, color: c.text, marginTop: 12 }}>-- Robert Hayes, CEO at TechBridge Solutions</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Results Grid */}
      <section style={{ padding: "72px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div style={{ width: 40, height: 3, background: ACCENT, margin: "0 auto 20px" }} />
              <h2 style={{ fontSize: 32, fontWeight: 800, fontFamily: `'${t.fonts.display}', sans-serif`, letterSpacing: "-0.02em" }}>
                Results That Compound
              </h2>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
            {t.stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.07}>
                <div style={{
                  background: "#fff", borderRadius: 10, padding: "32px 28px",
                  borderLeft: `4px solid ${PRIMARY}`,
                  boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
                  display: "flex", flexDirection: "column", gap: 8,
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ fontSize: 38, fontWeight: 900, color: PRIMARY, fontFamily: `'${t.fonts.display}', sans-serif`, lineHeight: 1 }}>
                      <CountUp end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                    </div>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                      <path d="M12 19V5M5 12l7-7 7 7" />
                    </svg>
                  </div>
                  <div style={{ fontSize: 13, color: c.textMuted, fontWeight: 500 }}>{stat.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Preview */}
      <section style={{ padding: "88px 24px", background: BG }}>
        <div style={{ maxWidth: 1060, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, flexWrap: "wrap", gap: 16 }}>
              <div>
                <div style={{ width: 40, height: 3, background: ACCENT, marginBottom: 20 }} />
                <h2 style={{ fontSize: 32, fontWeight: 800, fontFamily: `'${t.fonts.display}', sans-serif`, letterSpacing: "-0.02em" }}>
                  From the Desk
                </h2>
              </div>
              <button style={{
                padding: "12px 28px", background: "transparent", color: PRIMARY,
                border: `1.5px solid ${PRIMARY}`, borderRadius: 6, fontSize: 14,
                fontWeight: 700, cursor: "pointer", letterSpacing: 0.3,
              }}>
                All Insights
              </button>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {INSIGHTS.map((article, i) => (
              <FadeIn key={article.title} delay={i * 0.08}>
                <div style={{
                  background: "#fff", borderRadius: 10, padding: "32px 28px",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
                  cursor: "pointer",
                  transition: "transform 0.25s ease",
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)" }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)" }}
                >
                  <div style={{
                    display: "inline-block", padding: "4px 12px", borderRadius: 4,
                    background: `${PRIMARY}10`, color: PRIMARY,
                    fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1,
                    marginBottom: 16,
                  }}>
                    {article.category}
                  </div>
                  <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 10, fontFamily: `'${t.fonts.display}', sans-serif`, lineHeight: 1.2 }}>
                    {article.title}
                  </h3>
                  <p style={{ fontSize: 14, color: c.textMuted, lineHeight: 1.7 }}>
                    {article.excerpt}
                  </p>
                  <div style={{ marginTop: 20, fontSize: 13, fontWeight: 700, color: PRIMARY, display: "flex", alignItems: "center", gap: 6 }}>
                    Read More
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={PRIMARY} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialGrid
        testimonials={t.testimonials}
        backgroundColor="#fff"
        cardBackground={BG}
        textColor={c.text}
        mutedColor={c.textMuted}
        accentColor={ACCENT}
        borderColor={c.border}
      />

      {/* FAQ */}
      <FAQ
        items={t.faq}
        backgroundColor={BG}
        textColor={c.text}
        mutedColor={c.textMuted}
        accentColor={PRIMARY}
        borderColor={c.border}
        displayFont={`'${t.fonts.display}', sans-serif`}
      />

      {/* CTA */}
      <CTABanner
        headline="Ready to Unlock Your Next Stage of Growth?"
        description="Book a 30-minute strategy session. No decks, no pitch -- just a direct conversation about what is holding your business back."
        buttonText="Book a Strategy Call"
        gradient={`linear-gradient(135deg, ${PRIMARY}, ${ACCENT})`}
        displayFont={`'${t.fonts.display}', sans-serif`}
      />

      {/* Footer */}
      <footer style={{ padding: "32px 24px", textAlign: "center", borderTop: "1px solid #E5E7EB" }}>
        <p style={{ fontSize: 13, color: c.textMuted }}>{t.name} Template -- Partner Portal Templates</p>
      </footer>
    </div>
  )
}
