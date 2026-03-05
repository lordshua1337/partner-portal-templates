"use client"

import type { TemplateConfig } from "@/data/templates"
import FadeIn from "@/components/motion/FadeIn"
import CountUp from "@/components/motion/CountUp"
import TestimonialGrid from "@/components/sections/TestimonialGrid"
import FAQ from "@/components/sections/FAQ"
import CTABanner from "@/components/sections/CTABanner"
import FloatingElement from "@/components/motion/FloatingElement"

export default function LeadGenTemplate({ template: t }: { readonly template: TemplateConfig }) {
  const c = t.colors

  return (
    <div style={{ minHeight: "100vh", background: c.background, color: c.text, fontFamily: `'${t.fonts.body}', sans-serif` }}>
      {/* Hero: Split layout -- headline left, form right */}
      <section style={{ padding: "80px 24px", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 64, alignItems: "center" }}>
          <FadeIn direction="left">
            <div>
              <p style={{ fontSize: 13, letterSpacing: 2, textTransform: "uppercase", color: c.primary, fontWeight: 600, marginBottom: 16 }}>
                {t.category}
              </p>
              <h1 style={{
                fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 800, color: c.text,
                lineHeight: 1.15, marginBottom: 20,
                fontFamily: `'${t.fonts.display}', serif`,
              }}>
                {t.hero.headline}
              </h1>
              <p style={{ fontSize: 17, color: c.textMuted, lineHeight: 1.7, marginBottom: 32 }}>
                {t.hero.subheadline}
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
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
                {t.hero.secondaryCta && (
                  <button style={{
                    padding: "16px 32px", background: "transparent", color: c.primary,
                    borderRadius: 10, fontSize: 16, fontWeight: 600, border: `1px solid ${c.border}`, cursor: "pointer",
                  }}>
                    {t.hero.secondaryCta}
                  </button>
                )}
              </div>
            </div>
          </FadeIn>

          {/* Lead capture form */}
          <FadeIn direction="right" delay={0.2}>
            <FloatingElement duration={8} delay={0}>
              <div style={{
                padding: 36, borderRadius: 20,
                background: "rgba(255,255,255,0.95)",
                backdropFilter: "blur(12px)",
                border: `1px solid ${c.border}`,
                boxShadow: `0 20px 60px ${c.primary}15`,
              }}>
                <h3 style={{ fontSize: 22, fontWeight: 700, color: c.text, marginBottom: 8, fontFamily: `'${t.fonts.display}', serif` }}>
                  Free Consultation
                </h3>
                <p style={{ fontSize: 14, color: c.textMuted, marginBottom: 24 }}>
                  Fill out the form and a tax specialist will contact you within 24 hours.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {["Full Name", "Email Address", "Phone Number"].map((label) => (
                    <div key={label}>
                      <label style={{ fontSize: 13, fontWeight: 600, color: c.text, display: "block", marginBottom: 6 }}>{label}</label>
                      <input
                        type="text"
                        placeholder={label}
                        style={{
                          width: "100%", padding: "14px 16px", borderRadius: 10,
                          border: `1px solid ${c.border}`, fontSize: 15, color: c.text,
                          background: c.surface, outline: "none",
                          transition: "border-color 0.2s ease",
                          minHeight: 48,
                        }}
                        onFocus={e => { e.currentTarget.style.borderColor = c.primary }}
                        onBlur={e => { e.currentTarget.style.borderColor = c.border }}
                      />
                    </div>
                  ))}
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 600, color: c.text, display: "block", marginBottom: 6 }}>How much do you owe?</label>
                    <select
                      style={{
                        width: "100%", padding: "14px 16px", borderRadius: 10,
                        border: `1px solid ${c.border}`, fontSize: 15, color: c.textMuted,
                        background: c.surface, outline: "none", cursor: "pointer",
                        minHeight: 48,
                      }}
                    >
                      <option>Select range</option>
                      <option>$10,000 - $25,000</option>
                      <option>$25,000 - $50,000</option>
                      <option>$50,000 - $100,000</option>
                      <option>$100,000+</option>
                    </select>
                  </div>
                  <button style={{
                    padding: "16px 32px", background: c.primary, color: "#fff",
                    borderRadius: 10, fontSize: 16, fontWeight: 700, border: "none", cursor: "pointer",
                    width: "100%", marginTop: 8,
                    transition: "transform 0.2s ease",
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
                  >
                    Schedule Free Consultation
                  </button>
                  <p style={{ fontSize: 12, color: c.textMuted, textAlign: "center" }}>
                    No obligation. 100% confidential.
                  </p>
                </div>
              </div>
            </FloatingElement>
          </FadeIn>
        </div>
      </section>

      {/* Trust Bar with stats */}
      <section style={{ padding: "48px 24px", background: c.surface, borderTop: `1px solid ${c.border}`, borderBottom: `1px solid ${c.border}` }}>
        <FadeIn>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <p style={{ fontSize: 13, letterSpacing: 2, textTransform: "uppercase", color: c.textMuted, textAlign: "center", marginBottom: 24, fontWeight: 600 }}>
              As Seen In
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap", marginBottom: 32, opacity: 0.4 }}>
              {["Forbes", "Bloomberg", "CNBC", "WSJ", "Inc."].map(name => (
                <span key={name} style={{ fontSize: 18, fontWeight: 700, color: c.text, letterSpacing: "-0.01em" }}>{name}</span>
              ))}
            </div>
            <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: 24 }}>
              {t.stats.map(stat => (
                <div key={stat.label} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 32, fontWeight: 800, color: c.primary, fontFamily: `'${t.fonts.display}', serif` }}>
                    <CountUp end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                  </div>
                  <div style={{ fontSize: 13, color: c.textMuted, marginTop: 4 }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Problem / Solution */}
      <section style={{ padding: "80px 24px", maxWidth: 1060, margin: "0 auto" }}>
        <FadeIn>
          <h2 style={{ fontSize: 32, fontWeight: 700, textAlign: "center", marginBottom: 48, fontFamily: `'${t.fonts.display}', serif` }}>
            The Problem We Solve
          </h2>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32 }}>
          <FadeIn delay={0.1}>
            <div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: "#b91c1c", marginBottom: 20 }}>Without Professional Help</h3>
              {["Wage garnishments drain your paycheck", "Bank accounts frozen without warning", "Penalties and interest growing daily", "Threatening letters causing constant stress"].map(item => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", marginBottom: 8, borderRadius: 10, background: "#fef2f2", border: "1px solid #fecaca" }}>
                  <span style={{ color: "#dc2626", fontSize: 18 }}>&#10005;</span>
                  <span style={{ fontSize: 14, color: "#7f1d1d" }}>{item}</span>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: c.primary, marginBottom: 20 }}>With Our Tax Experts</h3>
              {["Garnishments stopped within days", "Assets protected and accounts unfrozen", "Debt reduced by 40-80% on average", "Peace of mind with a clear resolution plan"].map(item => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", marginBottom: 8, borderRadius: 10, background: `${c.primary}08`, border: `1px solid ${c.primary}22` }}>
                  <span style={{ color: c.primary, fontSize: 18 }}>&#10003;</span>
                  <span style={{ fontSize: 14, color: c.text }}>{item}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: "80px 24px", background: c.surface }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <FadeIn>
            <h2 style={{ fontSize: 32, fontWeight: 700, textAlign: "center", marginBottom: 56, fontFamily: `'${t.fonts.display}', serif` }}>
              How It Works
            </h2>
          </FadeIn>
          <div style={{ position: "relative" }}>
            {/* Connecting line */}
            <div style={{ position: "absolute", left: 24, top: 40, bottom: 40, width: 2, background: `${c.primary}22` }} />
            {[
              { step: "1", title: "Free Consultation", desc: "Tell us about your situation. We will review your tax records and explain all available options with zero obligation." },
              { step: "2", title: "Custom Strategy", desc: "Our team builds a personalized resolution plan. We handle all IRS communication and paperwork on your behalf." },
              { step: "3", title: "Resolution", desc: "We negotiate the best possible outcome. Most clients see resolution within 90 days with significant debt reduction." },
            ].map((item, i) => (
              <FadeIn key={item.step} delay={i * 0.15}>
                <div style={{ display: "flex", gap: 24, marginBottom: 40, position: "relative" }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: "50%", flexShrink: 0,
                    background: c.primary, color: "#fff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 18, fontWeight: 800, position: "relative", zIndex: 1,
                  }}>
                    {item.step}
                  </div>
                  <div>
                    <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8, fontFamily: `'${t.fonts.display}', serif` }}>{item.title}</h3>
                    <p style={{ fontSize: 15, color: c.textMuted, lineHeight: 1.7 }}>{item.desc}</p>
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
        headline="Schedule Your Free Consultation"
        description="Take the first step toward resolving your tax debt. Our experts are ready to help you find the best path forward."
        buttonText="Get Started Today"
        gradient={t.gradient}
        buttonTextColor={c.primary}
        displayFont={`'${t.fonts.display}', serif`}
      />

      {/* Footer */}
      <footer style={{ padding: "32px 24px", textAlign: "center", borderTop: `1px solid ${c.border}`, background: c.surface }}>
        <p style={{ fontSize: 13, color: c.textMuted }}>{t.name} Template -- Partner Portal Templates</p>
      </footer>
    </div>
  )
}
