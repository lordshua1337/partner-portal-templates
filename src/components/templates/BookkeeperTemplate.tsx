"use client"

import type { TemplateConfig } from "@/data/templates"
import FadeIn from "@/components/motion/FadeIn"
import CountUp from "@/components/motion/CountUp"
import TestimonialGrid from "@/components/sections/TestimonialGrid"
import FAQ from "@/components/sections/FAQ"
import CTABanner from "@/components/sections/CTABanner"
import PricingTable from "@/components/sections/PricingTable"

export default function BookkeeperTemplate({ template: t }: { readonly template: TemplateConfig }) {
  const c = t.colors

  const painPoints = [
    { icon: "📦", label: "Shoebox of receipts", description: "Months of paper piling up with no system to make sense of it." },
    { icon: "🌙", label: "Late-night spreadsheets", description: "Hours lost every week manually reconciling accounts instead of running your business." },
    { icon: "😰", label: "Tax season panic", description: "Scrambling every April to find records and hoping the numbers add up." },
  ]

  const integrations = ["QuickBooks", "Xero", "FreshBooks", "Wave", "Gusto", "Stripe"]

  const steps = [
    { number: "1", title: "Connect Your Accounts", description: "Securely link your bank, credit cards, and payment processors in minutes. We use bank-level 256-bit encryption." },
    { number: "2", title: "We Handle the Books", description: "Your dedicated bookkeeper categorizes every transaction, reconciles accounts, and keeps everything up to date." },
    { number: "3", title: "Review Monthly Reports", description: "Get clear profit & loss statements, balance sheets, and cash flow reports delivered every month, on time." },
  ]

  return (
    <div style={{ minHeight: "100vh", background: c.background, color: c.text, fontFamily: `'${t.fonts.body}', sans-serif` }}>

      {/* Hero */}
      <section style={{
        padding: "120px 24px 80px",
        textAlign: "center",
        position: "relative",
        background: `linear-gradient(160deg, #FEFBFF 0%, #EDE9FE 100%)`,
        overflow: "hidden",
      }}>
        {/* Subtle dot pattern overlay */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.04,
          backgroundImage: `radial-gradient(circle, ${c.primary} 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 760, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <FadeIn>
            <div style={{
              display: "inline-block", padding: "6px 18px",
              background: `${c.primary}15`, borderRadius: 100,
              fontSize: 13, fontWeight: 600, color: c.primary,
              marginBottom: 24, letterSpacing: 0.5,
            }}>
              Professional Bookkeeping Service
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 style={{
              fontSize: "clamp(36px, 5.5vw, 64px)", fontWeight: 800,
              lineHeight: 1.1, marginBottom: 20,
              fontFamily: `'${t.fonts.display}', sans-serif`,
              color: "#1E1B4B",
            }}>
              {t.hero.headline}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p style={{ fontSize: 18, color: "#4B5563", lineHeight: 1.7, maxWidth: 540, margin: "0 auto 36px" }}>
              {t.hero.subheadline}
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <button style={{
                padding: "16px 36px", background: c.primary, color: "#fff",
                borderRadius: 12, fontSize: 16, fontWeight: 700, border: "none", cursor: "pointer",
                boxShadow: `0 8px 24px ${c.primary}40`,
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-2px)"
                e.currentTarget.style.boxShadow = `0 12px 32px ${c.primary}55`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)"
                e.currentTarget.style.boxShadow = `0 8px 24px ${c.primary}40`
              }}
              >
                {t.hero.cta}
              </button>
              <button style={{
                padding: "16px 36px", background: "#fff", color: c.primary,
                borderRadius: 12, fontSize: 16, fontWeight: 600,
                border: `2px solid ${c.primary}30`, cursor: "pointer",
                transition: "border-color 0.2s ease",
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = c.primary}
              onMouseLeave={e => e.currentTarget.style.borderColor = `${c.primary}30`}
              >
                {t.hero.secondaryCta}
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Pain Points */}
      <section style={{ padding: "80px 24px", background: c.background }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <h2 style={{ fontSize: 32, fontWeight: 700, fontFamily: `'${t.fonts.display}', sans-serif`, color: c.text }}>
                Sound Familiar?
              </h2>
              <p style={{ fontSize: 16, color: c.textMuted, marginTop: 12 }}>
                You started your business to do what you love, not to do accounting.
              </p>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {painPoints.map((point, i) => (
              <FadeIn key={point.label} delay={i * 0.1}>
                <div style={{
                  padding: 32, background: "#fff", borderRadius: 16,
                  border: `2px solid ${c.primary}20`,
                  transition: "border-color 0.2s ease, transform 0.2s ease",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = c.primary
                  e.currentTarget.style.transform = "translateY(-4px)"
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = `${c.primary}20`
                  e.currentTarget.style.transform = "translateY(0)"
                }}
                >
                  <div style={{ fontSize: 36, marginBottom: 16 }}>{point.icon}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: c.primary, marginBottom: 10, fontFamily: `'${t.fonts.display}', sans-serif` }}>
                    {point.label}
                  </h3>
                  <p style={{ fontSize: 14, color: c.textMuted, lineHeight: 1.7 }}>
                    {point.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: "64px 24px", background: c.primary }}>
        <FadeIn>
          <div style={{ maxWidth: 960, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 32 }}>
            {t.stats.map(stat => (
              <div key={stat.label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 40, fontWeight: 800, color: "#fff", fontFamily: `'${t.fonts.display}', sans-serif` }}>
                  <CountUp end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", marginTop: 8, fontWeight: 500 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Services */}
      <section style={{ padding: "80px 24px", background: c.background }}>
        <div style={{ maxWidth: 1060, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <h2 style={{ fontSize: 32, fontWeight: 700, fontFamily: `'${t.fonts.display}', sans-serif` }}>
                What We Take Off Your Plate
              </h2>
              <p style={{ fontSize: 16, color: c.textMuted, marginTop: 12 }}>
                Every bookkeeping task your business needs, handled by a real human expert.
              </p>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {t.features.map((feature, i) => (
              <FadeIn key={feature.title} delay={i * 0.07}>
                <div style={{
                  padding: 28, background: "#fff", borderRadius: 16,
                  border: `1px solid ${c.border}`,
                  transition: "box-shadow 0.2s ease, transform 0.2s ease",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = `0 8px 32px ${c.accent}20`
                  e.currentTarget.style.transform = "translateY(-2px)"
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = "none"
                  e.currentTarget.style.transform = "translateY(0)"
                }}
                >
                  <div style={{
                    width: 48, height: 48, borderRadius: 12,
                    background: `${c.accent}18`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: 16,
                  }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                    </svg>
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 8, fontFamily: `'${t.fonts.display}', sans-serif`, color: c.text }}>
                    {feature.title}
                  </h3>
                  <p style={{ fontSize: 14, color: c.textMuted, lineHeight: 1.7 }}>
                    {feature.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: "80px 24px", background: "#F5F3FF" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontSize: 32, fontWeight: 700, fontFamily: `'${t.fonts.display}', sans-serif`, color: c.text }}>
                Up and Running in 3 Steps
              </h2>
              <p style={{ fontSize: 16, color: c.textMuted, marginTop: 12 }}>
                No complicated onboarding. No tech headaches. Just clean books.
              </p>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 0, position: "relative" }}>
            {steps.map((step, i) => (
              <FadeIn key={step.number} delay={i * 0.15}>
                <div style={{ padding: "0 24px", position: "relative", textAlign: "center" }}>
                  {/* Connecting arrow between steps */}
                  {i < steps.length - 1 && (
                    <div style={{
                      position: "absolute", top: 40, right: -12, zIndex: 2,
                      fontSize: 24, color: `${c.primary}60`,
                      display: "none",
                    }}>
                      &rarr;
                    </div>
                  )}
                  <div style={{
                    width: 80, height: 80, borderRadius: "50%",
                    background: c.primary,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 24px",
                    boxShadow: `0 8px 24px ${c.primary}40`,
                  }}>
                    <span style={{ fontSize: 32, fontWeight: 800, color: "#fff", fontFamily: `'${t.fonts.display}', sans-serif` }}>
                      {step.number}
                    </span>
                  </div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12, fontFamily: `'${t.fonts.display}', sans-serif`, color: c.text }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: 14, color: c.textMuted, lineHeight: 1.75, maxWidth: 240, margin: "0 auto" }}>
                    {step.description}
                  </p>
                  {i < steps.length - 1 && (
                    <div style={{
                      width: "100%", textAlign: "center",
                      fontSize: 28, color: `${c.primary}50`,
                      marginTop: 24,
                    }}>
                      &darr;
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack / Integrations */}
      <section style={{ padding: "48px 24px", background: "#fff", borderTop: `1px solid ${c.border}`, borderBottom: `1px solid ${c.border}` }}>
        <FadeIn>
          <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
            <p style={{ fontSize: 12, letterSpacing: 2, textTransform: "uppercase", color: c.textMuted, fontWeight: 600, marginBottom: 24 }}>
              Works with the tools you already use
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: 36, flexWrap: "wrap", alignItems: "center" }}>
              {integrations.map(name => (
                <span key={name} style={{
                  fontSize: 16, fontWeight: 700, color: c.textMuted,
                  opacity: 0.45, letterSpacing: "-0.01em",
                }}>
                  {name}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Pricing */}
      {t.pricing && (
        <PricingTable
          tiers={t.pricing}
          backgroundColor={c.background}
          cardBackground="#fff"
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
        backgroundColor="#F5F3FF"
        cardBackground="#fff"
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
        headline="Ready for Stress-Free Books?"
        description="Join 500+ business owners who stopped drowning in receipts. First month free."
        buttonText="Get Started Today"
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
