"use client"

import type { TemplateConfig } from "@/data/templates"
import FadeIn from "@/components/motion/FadeIn"
import CountUp from "@/components/motion/CountUp"
import TestimonialGrid from "@/components/sections/TestimonialGrid"
import FAQ from "@/components/sections/FAQ"
import CTABanner from "@/components/sections/CTABanner"
import PricingTable from "@/components/sections/PricingTable"

export default function CPATemplate({ template: t }: { readonly template: TemplateConfig }) {
  const c = t.colors

  const STATS = [
    { value: 3200, suffix: "+", label: "Returns Filed" },
    { value: 99.7, suffix: "%", label: "Accuracy Rate" },
    { value: 4.2, prefix: "$", suffix: "M", label: "Tax Savings" },
    { value: 15, suffix: "+", label: "Years in Practice" },
  ]

  const PROCESS_STEPS = [
    { num: "1", title: "Discovery Call", desc: "We learn your situation, goals, and financial picture in a no-obligation 30-minute call." },
    { num: "2", title: "Document Collection", desc: "Our secure portal guides you through exactly what to submit. No guesswork, no missing documents." },
    { num: "3", title: "Preparation & Review", desc: "A licensed CPA prepares your returns with a second-partner review before anything is finalized." },
    { num: "4", title: "Filing & Follow-up", desc: "We file on your behalf and stay available for any IRS correspondence or follow-up questions." },
  ]

  const INDUSTRIES = [
    { icon: "🏠", label: "Real Estate" },
    { icon: "🏥", label: "Healthcare" },
    { icon: "🛒", label: "E-commerce" },
    { icon: "🏗️", label: "Construction" },
    { icon: "💼", label: "Professional Services" },
    { icon: "🚀", label: "Startups" },
  ]

  return (
    <div style={{ minHeight: "100vh", background: "#F2FBFB", color: "#1a1a1a", fontFamily: `'DM Sans', sans-serif` }}>

      {/* Teal gradient bar */}
      <div style={{ height: 4, background: "linear-gradient(90deg, #134E4A, #0D9488)" }} />

      {/* Hero */}
      <section style={{ padding: "80px 24px", maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 64, alignItems: "center" }}>
        <FadeIn direction="left">
          <div>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "6px 16px", borderRadius: 100,
              background: "#134E4A15", border: "1px solid #134E4A30",
              marginBottom: 24,
            }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#0D9488" }} />
              <span style={{ fontSize: 13, fontWeight: 600, color: "#134E4A", letterSpacing: 0.5 }}>Licensed CPA Firm</span>
            </div>
            <h1 style={{
              fontSize: "clamp(32px, 4vw, 50px)", fontWeight: 700, lineHeight: 1.15,
              marginBottom: 20, color: "#134E4A",
              fontFamily: `'Outfit', sans-serif`,
            }}>
              {t.hero.headline}
            </h1>
            <p style={{ fontSize: 17, color: "#5a5a5a", lineHeight: 1.75, marginBottom: 36, maxWidth: 520 }}>
              {t.hero.subheadline}
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button
                style={{
                  padding: "15px 32px", background: "#134E4A", color: "#fff",
                  borderRadius: 10, fontSize: 16, fontWeight: 700, border: "none", cursor: "pointer",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 30px #134E4A44" }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none" }}
              >
                {t.hero.cta}
              </button>
              {t.hero.secondaryCta && (
                <button style={{
                  padding: "15px 32px", background: "transparent", color: "#134E4A",
                  borderRadius: 10, fontSize: 16, fontWeight: 600, border: "1px solid #134E4A40", cursor: "pointer",
                }}>
                  {t.hero.secondaryCta}
                </button>
              )}
            </div>
          </div>
        </FadeIn>

        {/* Decorative calculator element */}
        <FadeIn direction="right" delay={0.2}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{
              width: 280, height: 340,
              border: "2px solid #134E4A",
              borderRadius: 24,
              background: "#fff",
              boxShadow: "0 20px 60px #134E4A18",
              padding: 24,
              display: "flex", flexDirection: "column", gap: 16,
            }}>
              {/* Screen */}
              <div style={{
                background: "#134E4A", borderRadius: 12, padding: "20px 16px",
                color: "#fff", textAlign: "right",
              }}>
                <div style={{ fontSize: 12, color: "#0D9488", marginBottom: 4, fontFamily: `'Outfit', monospace` }}>Tax Savings</div>
                <div style={{ fontSize: 28, fontWeight: 700, fontFamily: `'Outfit', monospace` }}>$4,200,000</div>
              </div>
              {/* Button grid */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
                {["7","8","9","+","4","5","6","-","1","2","3","×","C","0",".","="].map((key) => (
                  <div key={key} style={{
                    height: 36, borderRadius: 8,
                    background: key === "=" ? "#134E4A" : key === "+" || key === "-" || key === "×" ? "#0D948815" : "#F2FBFB",
                    border: "1px solid #134E4A20",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 13, fontWeight: 600,
                    color: key === "=" ? "#fff" : key === "+" || key === "-" || key === "×" ? "#134E4A" : "#1a1a1a",
                    fontFamily: `'Outfit', monospace`,
                  }}>
                    {key}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Stats */}
      <section style={{ borderTop: "1px solid #134E4A18", borderBottom: "1px solid #134E4A18", background: "#fff", padding: "48px 24px" }}>
        <FadeIn>
          <div style={{ maxWidth: 960, margin: "0 auto", display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: 32 }}>
            {STATS.map(stat => (
              <div key={stat.label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 36, fontWeight: 800, color: "#134E4A", fontFamily: `'Outfit', sans-serif` }}>
                  <CountUp end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </div>
                <div style={{ fontSize: 13, color: "#5a5a5a", marginTop: 4, fontWeight: 500 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Services */}
      <section style={{ padding: "88px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FadeIn>
            <p style={{ fontSize: 13, letterSpacing: 2, textTransform: "uppercase", color: "#0D9488", fontWeight: 700, textAlign: "center", marginBottom: 12 }}>
              What We Do
            </p>
            <h2 style={{ fontSize: 36, fontWeight: 700, textAlign: "center", marginBottom: 56, color: "#134E4A", fontFamily: `'Outfit', sans-serif` }}>
              Services Built for Your Financial Life
            </h2>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {t.features.map((feature, i) => (
              <FadeIn key={feature.title} delay={i * 0.07}>
                <div style={{
                  background: "#fff",
                  border: "1px solid #134E4A18",
                  borderRadius: 16,
                  padding: "32px 28px",
                  transition: "box-shadow 0.2s ease, transform 0.2s ease",
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 8px 32px #134E4A14"; e.currentTarget.style.transform = "translateY(-3px)" }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)" }}
                >
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: "#134E4A12", display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: 20,
                  }}>
                    <div style={{ width: 20, height: 20, background: "#134E4A", borderRadius: 4, opacity: 0.8 }} />
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "#134E4A", marginBottom: 10, fontFamily: `'Outfit', sans-serif` }}>
                    {feature.title}
                  </h3>
                  <p style={{ fontSize: 14, color: "#5a5a5a", lineHeight: 1.7 }}>
                    {feature.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section style={{ padding: "88px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <FadeIn>
            <p style={{ fontSize: 13, letterSpacing: 2, textTransform: "uppercase", color: "#0D9488", fontWeight: 700, textAlign: "center", marginBottom: 12 }}>
              Our Process
            </p>
            <h2 style={{ fontSize: 36, fontWeight: 700, textAlign: "center", marginBottom: 64, color: "#134E4A", fontFamily: `'Outfit', sans-serif` }}>
              From First Call to Filed Return
            </h2>
          </FadeIn>

          {/* Timeline row */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 0, position: "relative" }}>
            {/* Dashed connector line */}
            <div style={{
              position: "absolute", top: 22, left: "12.5%", right: "12.5%", height: 2,
              backgroundImage: "repeating-linear-gradient(90deg, #134E4A40 0, #134E4A40 8px, transparent 8px, transparent 18px)",
              zIndex: 0,
            }} />
            {PROCESS_STEPS.map((step, i) => (
              <FadeIn key={step.num} delay={i * 0.12}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "0 16px", position: "relative", zIndex: 1 }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: "50%",
                    background: "#134E4A", color: "#fff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 18, fontWeight: 800, marginBottom: 20,
                    fontFamily: `'Outfit', sans-serif`,
                    boxShadow: "0 4px 16px #134E4A40",
                  }}>
                    {step.num}
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: "#134E4A", marginBottom: 10, fontFamily: `'Outfit', sans-serif` }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: 13, color: "#5a5a5a", lineHeight: 1.65 }}>
                    {step.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Specializations */}
      <section style={{ padding: "88px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <FadeIn>
            <p style={{ fontSize: 13, letterSpacing: 2, textTransform: "uppercase", color: "#0D9488", fontWeight: 700, textAlign: "center", marginBottom: 12 }}>
              Industry Expertise
            </p>
            <h2 style={{ fontSize: 36, fontWeight: 700, textAlign: "center", marginBottom: 48, color: "#134E4A", fontFamily: `'Outfit', sans-serif` }}>
              We Specialize In Your Industry
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center" }}>
              {INDUSTRIES.map(industry => (
                <div key={industry.label} style={{
                  display: "flex", alignItems: "center", gap: 10,
                  padding: "12px 24px", borderRadius: 100,
                  background: "#fff", border: "1px solid #134E4A20",
                  boxShadow: "0 2px 8px #134E4A08",
                  transition: "background 0.2s ease, border-color 0.2s ease",
                  cursor: "default",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "#134E4A0A"; e.currentTarget.style.borderColor = "#134E4A60" }}
                onMouseLeave={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.borderColor = "#134E4A20" }}
                >
                  <span style={{ fontSize: 18 }}>{industry.icon}</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#134E4A" }}>{industry.label}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Pricing */}
      {t.pricing && (
        <PricingTable
          tiers={t.pricing}
          backgroundColor="#fff"
          cardBackground="#F2FBFB"
          textColor="#1a1a1a"
          mutedColor="#5a5a5a"
          accentColor="#134E4A"
          borderColor="#134E4A18"
          displayFont={`'Outfit', sans-serif`}
        />
      )}

      {/* Testimonials */}
      <TestimonialGrid
        testimonials={t.testimonials}
        backgroundColor="#F2FBFB"
        cardBackground="#fff"
        textColor="#1a1a1a"
        mutedColor="#5a5a5a"
        accentColor="#0D9488"
        borderColor="#134E4A18"
        displayFont={`'Outfit', sans-serif`}
      />

      {/* FAQ */}
      <FAQ
        items={t.faq}
        backgroundColor="#fff"
        textColor="#1a1a1a"
        mutedColor="#5a5a5a"
        accentColor="#134E4A"
        borderColor="#134E4A18"
        displayFont={`'Outfit', sans-serif`}
      />

      {/* CTA */}
      <CTABanner
        headline="Ready to File With Confidence?"
        description="Schedule a free consultation with a licensed CPA. We handle the complexity so you can focus on what matters."
        buttonText="Book Your Free Consultation"
        gradient="linear-gradient(135deg, #134E4A, #0D9488)"
        buttonTextColor="#134E4A"
        displayFont={`'Outfit', sans-serif`}
      />

      {/* Footer */}
      <footer style={{ padding: "32px 24px", textAlign: "center", borderTop: "1px solid #134E4A18", background: "#fff" }}>
        <p style={{ fontSize: 13, color: "#5a5a5a" }}>{t.name} Template -- Partner Portal Templates</p>
      </footer>
    </div>
  )
}
