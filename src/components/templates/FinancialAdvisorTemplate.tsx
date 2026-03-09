"use client"

import type { TemplateConfig } from "@/data/templates"
import FadeIn from "@/components/motion/FadeIn"
import CountUp from "@/components/motion/CountUp"
import TestimonialGrid from "@/components/sections/TestimonialGrid"
import FAQ from "@/components/sections/FAQ"
import CTABanner from "@/components/sections/CTABanner"

export default function FinancialAdvisorTemplate({ template: t }: { readonly template: TemplateConfig }) {
  const c = t.colors

  const WEALTH_BLUE = "#0C4A6E"
  const GROWTH_GREEN = "#059669"
  const NAVY_DARK = "#0A2540"
  const GOLD = "#D97706"

  const pillars = [
    {
      number: "01",
      title: "Evidence-Based Investing",
      body: "We build portfolios grounded in decades of peer-reviewed research, not speculation. Factor-based strategies and low-cost index exposure drive long-term outperformance.",
    },
    {
      number: "02",
      title: "Tax-Efficient Strategies",
      body: "Every dollar saved in taxes is a dollar compounding for your future. We integrate tax-loss harvesting, asset location, and Roth conversion planning into every portfolio.",
    },
    {
      number: "03",
      title: "Personalized Planning",
      body: "No two financial situations are the same. Your plan is built around your goals, timeline, risk tolerance, and life circumstances -- then updated as your life evolves.",
    },
  ]

  const performanceMetrics = [
    { label: "10-Year Average Return", value: "11.2%", color: GROWTH_GREEN },
    { label: "Tax Savings Generated", value: "$2.4M+", color: GOLD },
    { label: "Client Retention Rate", value: "97%", color: GROWTH_GREEN },
    { label: "Average Account Growth", value: "340%", color: GOLD },
  ]

  const credentials = [
    { badge: "CFP", label: "Certified Financial Planner" },
    { badge: "CFA", label: "Chartered Financial Analyst" },
    { badge: "Series 65", label: "Investment Advisor" },
    { badge: "NAPFA", label: "NAPFA Member" },
    { badge: "Fee-Only", label: "Fee-Only Fiduciary" },
  ]

  return (
    <div style={{ minHeight: "100vh", background: "#F8FAFC", color: "#1A2332", fontFamily: `'${t.fonts.body}', sans-serif` }}>

      {/* Hero */}
      <section style={{
        padding: "120px 24px 96px",
        textAlign: "center",
        position: "relative",
        background: `linear-gradient(160deg, ${WEALTH_BLUE} 0%, #0E5A84 60%, #0F6B9A 100%)`,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at 60% 40%, rgba(5,150,105,0.12) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />
        <div style={{ maxWidth: 760, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <FadeIn>
            <div style={{
              display: "inline-block",
              padding: "6px 18px",
              background: "rgba(5,150,105,0.18)",
              border: "1px solid rgba(5,150,105,0.4)",
              borderRadius: 100,
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: 1.2,
              textTransform: "uppercase",
              color: "#6EE7B7",
              marginBottom: 28,
            }}>
              Fiduciary Financial Advisors
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 style={{
              fontSize: "clamp(36px, 5.5vw, 64px)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.1,
              marginBottom: 24,
              fontFamily: `'${t.fonts.display}', sans-serif`,
              letterSpacing: "-0.02em",
            }}>
              {t.hero.headline}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.72)", lineHeight: 1.7, maxWidth: 580, margin: "0 auto 40px" }}>
              {t.hero.subheadline}
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <button
                style={{
                  padding: "15px 34px",
                  background: GROWTH_GREEN,
                  color: "#fff",
                  borderRadius: 8,
                  fontSize: 15,
                  fontWeight: 700,
                  border: "none",
                  cursor: "pointer",
                  letterSpacing: 0.3,
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-2px)"
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(5,150,105,0.4)"
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "translateY(0)"
                  e.currentTarget.style.boxShadow = "none"
                }}
              >
                {t.hero.cta}
              </button>
              <button style={{
                padding: "15px 34px",
                background: "transparent",
                color: "rgba(255,255,255,0.8)",
                borderRadius: 8,
                fontSize: 15,
                fontWeight: 600,
                border: "1px solid rgba(255,255,255,0.25)",
                cursor: "pointer",
                letterSpacing: 0.3,
                transition: "border-color 0.2s ease",
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"}
              >
                {t.hero.secondaryCta}
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{
        padding: "48px 24px",
        background: "#fff",
        borderBottom: "1px solid #E2EAF0",
        borderTop: "1px solid #E2EAF0",
      }}>
        <FadeIn>
          <div style={{
            maxWidth: 960,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 32,
          }}>
            {t.stats.map(stat => (
              <div key={stat.label} style={{ textAlign: "center" }}>
                <div style={{
                  fontSize: 38,
                  fontWeight: 800,
                  color: WEALTH_BLUE,
                  fontFamily: `'${t.fonts.display}', sans-serif`,
                  lineHeight: 1,
                  marginBottom: 8,
                }}>
                  <CountUp end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </div>
                <div style={{ fontSize: 13, color: "#64748B", fontWeight: 500, letterSpacing: 0.3 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Services Grid */}
      <section style={{ padding: "88px 24px", maxWidth: 1060, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <p style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: GROWTH_GREEN,
              marginBottom: 12,
            }}>
              What We Offer
            </p>
            <h2 style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 700,
              color: WEALTH_BLUE,
              fontFamily: `'${t.fonts.display}', sans-serif`,
              letterSpacing: "-0.01em",
            }}>
              Comprehensive Wealth Management Services
            </h2>
          </div>
        </FadeIn>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 24,
        }}>
          {t.features.map((feature, i) => (
            <FadeIn key={feature.title} delay={i * 0.06}>
              <div
                style={{
                  padding: 32,
                  background: "#fff",
                  borderRadius: 12,
                  border: "1px solid #E2EAF0",
                  transition: "box-shadow 0.25s ease, transform 0.25s ease",
                  cursor: "default",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = "0 8px 32px rgba(12,74,110,0.1)"
                  e.currentTarget.style.transform = "translateY(-2px)"
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = "none"
                  e.currentTarget.style.transform = "translateY(0)"
                }}
              >
                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: `${GROWTH_GREEN}18`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                  fontSize: 20,
                  color: GROWTH_GREEN,
                }}>
                  &#9670;
                </div>
                <h3 style={{
                  fontSize: 17,
                  fontWeight: 700,
                  color: WEALTH_BLUE,
                  marginBottom: 10,
                  fontFamily: `'${t.fonts.display}', sans-serif`,
                }}>
                  {feature.title}
                </h3>
                <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.7 }}>
                  {feature.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Investment Philosophy */}
      <section style={{ padding: "88px 24px", background: "#F1F5F9" }}>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <p style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: GROWTH_GREEN,
                marginBottom: 12,
              }}>
                Our Approach
              </p>
              <h2 style={{
                fontSize: "clamp(28px, 4vw, 42px)",
                fontWeight: 700,
                color: WEALTH_BLUE,
                fontFamily: `'${t.fonts.display}', sans-serif`,
                letterSpacing: "-0.01em",
              }}>
                Investment Philosophy
              </h2>
            </div>
          </FadeIn>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 40,
          }}>
            {pillars.map((pillar, i) => (
              <FadeIn key={pillar.number} delay={i * 0.1}>
                <div>
                  <div style={{
                    fontSize: 56,
                    fontWeight: 800,
                    color: `${WEALTH_BLUE}20`,
                    fontFamily: `'${t.fonts.display}', sans-serif`,
                    lineHeight: 1,
                    marginBottom: 16,
                    letterSpacing: "-0.03em",
                  }}>
                    {pillar.number}
                  </div>
                  <h3 style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: WEALTH_BLUE,
                    marginBottom: 14,
                    fontFamily: `'${t.fonts.display}', sans-serif`,
                  }}>
                    {pillar.title}
                  </h3>
                  <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.75 }}>
                    {pillar.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Snapshot */}
      <section style={{ padding: "88px 24px", background: NAVY_DARK }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <p style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: "#94A3B8",
                marginBottom: 12,
              }}>
                Track Record
              </p>
              <h2 style={{
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 700,
                color: "#fff",
                fontFamily: `'${t.fonts.display}', sans-serif`,
                letterSpacing: "-0.01em",
              }}>
                Performance Snapshot
              </h2>
            </div>
          </FadeIn>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 2,
            background: "rgba(255,255,255,0.06)",
            borderRadius: 12,
            overflow: "hidden",
          }}>
            {performanceMetrics.map((metric, i) => (
              <FadeIn key={metric.label} delay={i * 0.1}>
                <div style={{
                  padding: "40px 28px",
                  textAlign: "center",
                  background: "rgba(10,37,64,0.6)",
                }}>
                  <div style={{
                    fontSize: 40,
                    fontWeight: 800,
                    color: metric.color,
                    fontFamily: `'${t.fonts.display}', sans-serif`,
                    lineHeight: 1,
                    marginBottom: 12,
                    letterSpacing: "-0.02em",
                  }}>
                    {metric.value}
                  </div>
                  <div style={{ fontSize: 13, color: "#94A3B8", lineHeight: 1.5, fontWeight: 500 }}>
                    {metric.label}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section style={{
        padding: "40px 24px",
        background: "#fff",
        borderTop: "1px solid #E2EAF0",
        borderBottom: "1px solid #E2EAF0",
      }}>
        <FadeIn>
          <div style={{
            maxWidth: 880,
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 48,
            flexWrap: "wrap",
          }}>
            {credentials.map(cred => (
              <div key={cred.badge} style={{ textAlign: "center" }}>
                <div style={{
                  fontSize: 15,
                  fontWeight: 800,
                  color: WEALTH_BLUE,
                  letterSpacing: 0.5,
                  fontFamily: `'${t.fonts.display}', sans-serif`,
                }}>
                  {cred.badge}
                </div>
                <div style={{ fontSize: 11, color: "#94A3B8", marginTop: 3, letterSpacing: 0.3 }}>
                  {cred.label}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Testimonials */}
      <TestimonialGrid
        testimonials={t.testimonials}
        backgroundColor="#F8FAFC"
        cardBackground="#fff"
        textColor="#1A2332"
        mutedColor="#64748B"
        accentColor={GROWTH_GREEN}
        borderColor="#E2EAF0"
        displayFont={`'${t.fonts.display}', sans-serif`}
      />

      {/* FAQ */}
      <FAQ
        items={t.faq}
        backgroundColor="#fff"
        textColor="#1A2332"
        mutedColor="#64748B"
        accentColor={WEALTH_BLUE}
        borderColor="#E2EAF0"
        displayFont={`'${t.fonts.display}', sans-serif`}
      />

      {/* CTA */}
      <CTABanner
        headline="Ready to Build Real Wealth?"
        description="Schedule a complimentary 30-minute consultation with a fiduciary advisor. No sales pitch -- just an honest look at your financial picture and a clear plan forward."
        buttonText={t.hero.cta}
        gradient={`linear-gradient(135deg, ${WEALTH_BLUE}, #0E6895)`}
        buttonColor={GROWTH_GREEN}
        buttonTextColor="#fff"
        displayFont={`'${t.fonts.display}', sans-serif`}
      />

      {/* Footer */}
      <footer style={{
        padding: "32px 24px",
        textAlign: "center",
        borderTop: "1px solid #E2EAF0",
        background: "#F8FAFC",
      }}>
        <p style={{ fontSize: 13, color: "#94A3B8" }}>
          {t.name} Template -- Partner Portal Templates
        </p>
      </footer>

    </div>
  )
}
