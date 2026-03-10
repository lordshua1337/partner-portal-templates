"use client"

import { useState } from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import * as HoverCard from "@radix-ui/react-hover-card"
import type { TemplateConfig } from "@/data/templates"
import FadeIn from "@/components/motion/FadeIn"
import CountUp from "@/components/motion/CountUp"

const LIME = "#DDF472"
const LIME_DARK = "#4A5A00"
const DARK = "#12141D"
const LIGHT_GRAY = "#F6F9FC"
const BLK = "#0B0B0B"
const BODY_TEXT = "#444444"
const MUTED = "#6B7280"

const PILLARS = [
  {
    n: "01",
    title: "Evidence-Based",
    body: "Portfolios grounded in peer-reviewed research. Factor-based strategies and low-cost index exposure drive long-term outperformance.",
  },
  {
    n: "02",
    title: "Tax-Efficient",
    body: "Every dollar saved in taxes compounds for your future. Tax-loss harvesting, asset location, and Roth conversion planning built into every portfolio.",
  },
  {
    n: "03",
    title: "Personalized",
    body: "Your plan is built around your goals, timeline, and risk tolerance -- then updated as your life evolves.",
  },
]

const PERF = [
  { label: "10-Year Avg Return", value: 11, suffix: "%", decimals: 1 },
  { label: "Tax Savings Generated", value: 2.4, prefix: "$", suffix: "M+", decimals: 1 },
  { label: "Client Retention", value: 97, suffix: "%", decimals: 0 },
  { label: "Avg Account Growth", value: 340, suffix: "%", decimals: 0 },
]

const CREDS = [
  {
    abbr: "CFP",
    full: "Certified Financial Planner",
    detail: "Rigorous certification covering financial planning, taxes, insurance, estate planning, and retirement. Requires 6,000+ hours of experience.",
  },
  {
    abbr: "CFA",
    full: "Chartered Financial Analyst",
    detail: "Gold standard in investment analysis and portfolio management. Requires passing three levels of exams over 2-5 years.",
  },
  {
    abbr: "Series 65",
    full: "Uniform Investment Adviser Law Exam",
    detail: "FINRA-administered exam required to act as an investment adviser. Covers economics, investment vehicles, and regulations.",
  },
  {
    abbr: "Fee-Only Fiduciary",
    full: "Fee-Only Fiduciary Standard",
    detail: "Legally obligated to act in your best interest. Compensated only by client fees -- no commissions, no conflicts of interest.",
  },
]

const CHART_DATA = [
  { month: "Jan", growth: 4.2, benchmark: 3.1 },
  { month: "Feb", growth: 6.8, benchmark: 4.5 },
  { month: "Mar", growth: 5.1, benchmark: 3.8 },
  { month: "Apr", growth: 8.9, benchmark: 5.6 },
  { month: "May", growth: 6.2, benchmark: 4.9 },
  { month: "Jun", growth: 11.2, benchmark: 6.3 },
]

// Authoritative serif + premium sans -- financial advisory standard
const DISPLAY_FONT = `'Playfair Display', 'Georgia', 'Times New Roman', serif`
const BODY_FONT = `'DM Sans', 'Inter', 'Helvetica Neue', sans-serif`

export default function FinancialAdvisorTemplate({ template: t }: { readonly template: TemplateConfig }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div style={{ minHeight: "100vh", background: "#fff", color: BLK, fontFamily: BODY_FONT }}>

      {/* HERO */}
      <section style={{
        background: "linear-gradient(160deg,#fff 0%,rgba(159,190,200,0.21) 100%)",
        padding: "clamp(60px, 8vw, 100px) clamp(16px, 4vw, 40px) clamp(60px, 8vw, 96px)",
      }}>
        <div style={{
          maxWidth: 1120,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          gap: "clamp(32px, 4vw, 64px)",
          flexWrap: "wrap",
        }}>

          <div style={{ flex: "1 1 500px", maxWidth: "100%" }}>
            <FadeIn>
              <div style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 1.8,
                textTransform: "uppercase",
                color: MUTED,
                marginBottom: 28,
                fontFamily: BODY_FONT,
              }}>
                Fee-Only Fiduciary Advisors
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <h1 style={{
                fontSize: "clamp(36px, 5vw, 72px)",
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
                color: BLK,
                fontFamily: DISPLAY_FONT,
                marginBottom: 36,
              }}>
                {t.hero.headline}
              </h1>
            </FadeIn>
            <FadeIn delay={0.16}>
              <p style={{
                fontSize: 17,
                color: BODY_TEXT,
                lineHeight: 1.7,
                marginBottom: 44,
                maxWidth: 480,
                fontFamily: BODY_FONT,
              }}>
                {t.hero.subheadline}
              </p>
            </FadeIn>
            <FadeIn delay={0.22}>
              <div style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "clamp(12px, 2vw, 0px)",
              }}>
                {t.stats.map((stat, i) => (
                  <div key={stat.label} style={{ display: "flex", alignItems: "center" }}>
                    <div style={{ padding: `0 clamp(12px, 2vw, 28px)`, paddingLeft: i === 0 ? 0 : undefined }}>
                      <div style={{
                        fontSize: "clamp(18px, 2vw, 22px)",
                        fontWeight: 800,
                        color: BLK,
                        fontFamily: DISPLAY_FONT,
                        lineHeight: 1,
                        marginBottom: 4,
                      }}>
                        {stat.prefix ?? ""}{stat.value}{stat.suffix ?? ""}
                      </div>
                      <div style={{ fontSize: 11, color: MUTED, fontWeight: 500, fontFamily: BODY_FONT }}>{stat.label}</div>
                    </div>
                    {i < t.stats.length - 1 && (
                      <div style={{ width: 1, height: 36, background: "#D1D5DB", flexShrink: 0 }} />
                    )}
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div style={{ display: "flex", gap: 14, marginTop: 48, flexWrap: "wrap" }}>
                <button style={{
                  padding: "15px 32px",
                  background: LIME,
                  color: BLK,
                  border: "none",
                  borderRadius: 8,
                  fontSize: 15,
                  fontWeight: 700,
                  cursor: "pointer",
                  fontFamily: BODY_FONT,
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 8px 24px ${LIME}66` }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none" }}
                >
                  {t.hero.cta}
                </button>
                <button style={{
                  padding: "15px 32px",
                  background: "transparent",
                  color: BLK,
                  border: "1.5px solid #D1D5DB",
                  borderRadius: 8,
                  fontSize: 15,
                  fontWeight: 600,
                  cursor: "pointer",
                  fontFamily: BODY_FONT,
                  transition: "border-color 0.2s ease",
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = BLK }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#D1D5DB" }}
                >
                  {t.hero.secondaryCta ?? "See How It Works"}
                </button>
              </div>
            </FadeIn>
          </div>

          {/* Dashboard card with Recharts */}
          <FadeIn delay={0.2} direction="left" style={{ flex: "1 1 320px", maxWidth: "100%", minWidth: 0 }}>
            <div style={{
              background: "#fff",
              borderRadius: 20,
              boxShadow: "0 24px 64px rgba(0,0,0,0.10),0 4px 16px rgba(0,0,0,0.06)",
              padding: "clamp(20px, 3vw, 32px)",
              maxWidth: 380,
              marginLeft: "auto",
              width: "100%",
            }}>
              <div style={{ fontSize: 12, color: MUTED, fontWeight: 500, marginBottom: 6, fontFamily: BODY_FONT }}>
                Portfolio Growth
              </div>
              <div style={{
                fontSize: 28,
                fontWeight: 800,
                color: "#16A34A",
                fontFamily: DISPLAY_FONT,
                marginBottom: 16,
              }}>
                +11.2%
              </div>
              <div style={{ width: "100%", height: 120 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={CHART_DATA} barGap={4}>
                    <XAxis
                      dataKey="month"
                      tick={{ fontSize: 11, fill: MUTED }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis hide />
                    <Tooltip
                      contentStyle={{
                        background: DARK,
                        border: "none",
                        borderRadius: 8,
                        color: "#fff",
                        fontSize: 12,
                        fontFamily: BODY_FONT,
                        padding: "8px 12px",
                      }}
                      itemStyle={{ color: "#fff" }}
                      labelStyle={{ color: "rgba(255,255,255,0.6)", marginBottom: 4 }}
                      formatter={(value) => `${value}%`}
                    />
                    <Bar
                      dataKey="benchmark"
                      fill={DARK}
                      radius={[4, 4, 0, 0]}
                      opacity={0.3}
                      animationDuration={1200}
                      animationEasing="ease-out"
                    />
                    <Bar
                      dataKey="growth"
                      fill={LIME}
                      radius={[4, 4, 0, 0]}
                      animationDuration={1400}
                      animationEasing="ease-out"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div style={{
                marginTop: 16,
                padding: "12px 16px",
                background: LIGHT_GRAY,
                borderRadius: 10,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}>
                <span style={{ fontSize: 12, color: MUTED, fontWeight: 500, fontFamily: BODY_FONT }}>Total AUM</span>
                <span style={{ fontSize: 14, fontWeight: 700, color: BLK, fontFamily: DISPLAY_FONT }}>$4.2B</span>
              </div>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* FEATURES DARK */}
      <section style={{
        background: DARK,
        padding: "clamp(60px, 8vw, 96px) clamp(16px, 4vw, 40px)",
      }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ marginBottom: 56 }}>
              <div style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 1.8,
                textTransform: "uppercase",
                color: MUTED,
                marginBottom: 16,
                fontFamily: BODY_FONT,
              }}>
                What We Offer
              </div>
              <h2 style={{
                fontSize: "clamp(28px, 3.5vw, 44px)",
                fontWeight: 800,
                color: "#fff",
                fontFamily: DISPLAY_FONT,
                letterSpacing: "-0.02em",
                maxWidth: 500,
              }}>
                Comprehensive Wealth Management
              </h2>
            </div>
          </FadeIn>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}>
            {t.features.slice(0, 3).map((feat, i) => (
              <FadeIn key={feat.title} delay={i * 0.08}>
                <div style={{
                  background: "#1E2028",
                  border: "1px solid #2A2D35",
                  borderRadius: 14,
                  padding: "clamp(24px, 3vw, 32px)",
                }}>
                  <div style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: LIME,
                    marginBottom: 20,
                  }} />
                  <h3 style={{
                    fontSize: 17,
                    fontWeight: 700,
                    color: "#fff",
                    fontFamily: DISPLAY_FONT,
                    marginBottom: 12,
                    letterSpacing: "-0.01em",
                  }}>
                    {feat.title}
                  </h3>
                  <p style={{
                    fontSize: 14,
                    color: "rgba(255,255,255,0.7)",
                    lineHeight: 1.75,
                    fontFamily: BODY_FONT,
                  }}>
                    {feat.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FLOATING CREDENTIAL BADGES WITH HOVER CARDS */}
      <div style={{ background: LIGHT_GRAY, paddingTop: 1 }}>
        <FadeIn>
          <div style={{
            maxWidth: 800,
            margin: "-40px auto 0",
            background: "#fff",
            borderRadius: 16,
            boxShadow: "0 16px 48px rgba(0,0,0,0.10)",
            padding: "clamp(20px, 3vw, 28px) clamp(20px, 3vw, 40px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 0,
            flexWrap: "wrap",
            position: "relative",
            zIndex: 10,
          }}>
            {CREDS.map((cred, i) => (
              <div key={cred.abbr} style={{
                display: "flex",
                alignItems: "center",
                padding: "8px 0",
              }}>
                {i > 0 && (
                  <div style={{
                    width: 1,
                    height: 28,
                    background: "#E5E7EB",
                    margin: "0 clamp(12px, 2vw, 28px)",
                    flexShrink: 0,
                  }} />
                )}
                <HoverCard.Root openDelay={200} closeDelay={100}>
                  <HoverCard.Trigger asChild>
                    <button style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: "4px 8px",
                      borderRadius: 6,
                      transition: "background 0.15s ease",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = LIGHT_GRAY }}
                    onMouseLeave={e => { e.currentTarget.style.background = "transparent" }}
                    >
                      <div style={{
                        width: 20,
                        height: 20,
                        background: LIME,
                        borderRadius: 4,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 10,
                        flexShrink: 0,
                        color: LIME_DARK,
                        fontWeight: 700,
                      }}>
                        &#10003;
                      </div>
                      <span style={{
                        fontSize: 13,
                        fontWeight: 700,
                        color: BLK,
                        fontFamily: BODY_FONT,
                        whiteSpace: "nowrap",
                      }}>
                        {cred.abbr}
                      </span>
                    </button>
                  </HoverCard.Trigger>
                  <HoverCard.Portal>
                    <HoverCard.Content
                      sideOffset={8}
                      style={{
                        width: 280,
                        background: DARK,
                        borderRadius: 12,
                        padding: "16px 20px",
                        boxShadow: "0 16px 48px rgba(0,0,0,0.25)",
                        zIndex: 50,
                        animationDuration: "200ms",
                      }}
                    >
                      <div style={{
                        fontSize: 14,
                        fontWeight: 700,
                        color: "#fff",
                        fontFamily: DISPLAY_FONT,
                        marginBottom: 4,
                      }}>
                        {cred.full}
                      </div>
                      <div style={{
                        display: "inline-block",
                        padding: "2px 8px",
                        background: LIME,
                        borderRadius: 4,
                        fontSize: 11,
                        fontWeight: 700,
                        color: LIME_DARK,
                        fontFamily: BODY_FONT,
                        marginBottom: 10,
                      }}>
                        {cred.abbr}
                      </div>
                      <p style={{
                        fontSize: 13,
                        color: "rgba(255,255,255,0.7)",
                        lineHeight: 1.6,
                        fontFamily: BODY_FONT,
                        margin: 0,
                      }}>
                        {cred.detail}
                      </p>
                      <HoverCard.Arrow style={{ fill: DARK }} />
                    </HoverCard.Content>
                  </HoverCard.Portal>
                </HoverCard.Root>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* PHILOSOPHY */}
        <section style={{
          padding: "clamp(60px, 8vw, 96px) clamp(16px, 4vw, 40px)",
        }}>
          <div style={{ maxWidth: 1120, margin: "0 auto" }}>
            <FadeIn>
              <div style={{ marginBottom: 64 }}>
                <div style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: 1.8,
                  textTransform: "uppercase",
                  color: MUTED,
                  marginBottom: 16,
                  fontFamily: BODY_FONT,
                }}>
                  Our Approach
                </div>
                <h2 style={{
                  fontSize: "clamp(28px, 3.5vw, 44px)",
                  fontWeight: 800,
                  color: BLK,
                  fontFamily: DISPLAY_FONT,
                  letterSpacing: "-0.02em",
                }}>
                  Investment Philosophy
                </h2>
              </div>
            </FadeIn>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "clamp(24px, 3vw, 0px)",
            }}>
              {PILLARS.map((p, i) => (
                <FadeIn key={p.n} delay={i * 0.1}>
                  <div style={{
                    paddingRight: "clamp(0px, 3vw, 48px)",
                    paddingLeft: "clamp(0px, 3vw, 48px)",
                    position: "relative",
                  }}>
                    <div style={{
                      fontSize: 80,
                      fontWeight: 800,
                      color: BLK,
                      opacity: 0.05,
                      fontFamily: DISPLAY_FONT,
                      lineHeight: 1,
                      position: "absolute",
                      top: -16,
                      left: "clamp(0px, 3vw, 48px)",
                      userSelect: "none",
                    }}>
                      {p.n}
                    </div>
                    <div style={{ paddingTop: 40 }}>
                      <h3 style={{
                        fontSize: 20,
                        fontWeight: 800,
                        color: BLK,
                        fontFamily: DISPLAY_FONT,
                        marginBottom: 14,
                      }}>
                        {p.title}
                      </h3>
                      <p style={{
                        fontSize: 15,
                        color: BODY_TEXT,
                        lineHeight: 1.75,
                        fontFamily: BODY_FONT,
                      }}>
                        {p.body}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* PERFORMANCE -- LIME ACCENT WITH DARK TEXT */}
      <section style={{
        background: LIME,
        padding: "clamp(56px, 7vw, 88px) clamp(16px, 4vw, 40px)",
      }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <div style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 1.8,
                textTransform: "uppercase",
                color: LIME_DARK,
                marginBottom: 16,
                fontFamily: BODY_FONT,
              }}>
                Track Record
              </div>
              <h2 style={{
                fontSize: "clamp(28px, 3.5vw, 44px)",
                fontWeight: 800,
                color: BLK,
                fontFamily: DISPLAY_FONT,
                letterSpacing: "-0.02em",
              }}>
                Performance That Speaks
              </h2>
            </div>
          </FadeIn>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "clamp(16px, 2vw, 0px)",
          }}>
            {PERF.map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.08}>
                <div style={{
                  textAlign: "center",
                  padding: "clamp(16px, 2vw, 32px)",
                }}>
                  <div style={{
                    fontSize: "clamp(36px, 4vw, 60px)",
                    fontWeight: 800,
                    color: BLK,
                    fontFamily: DISPLAY_FONT,
                    lineHeight: 1,
                    marginBottom: 12,
                    letterSpacing: "-0.03em",
                  }}>
                    <CountUp end={s.value} prefix={s.prefix} suffix={s.suffix} decimals={s.decimals} />
                  </div>
                  <div style={{
                    fontSize: 13,
                    color: LIME_DARK,
                    fontWeight: 600,
                    fontFamily: BODY_FONT,
                  }}>
                    {s.label}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section style={{
        background: "#fff",
        padding: "clamp(60px, 8vw, 96px) clamp(16px, 4vw, 40px)",
      }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <FadeIn>
            <div style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 1.8,
              textTransform: "uppercase",
              color: MUTED,
              marginBottom: 40,
              fontFamily: BODY_FONT,
            }}>
              Client Stories
            </div>
            <div style={{
              fontSize: "clamp(20px, 2.5vw, 28px)",
              fontWeight: 500,
              color: BLK,
              lineHeight: 1.6,
              fontFamily: DISPLAY_FONT,
              fontStyle: "italic",
            }}>
              &ldquo;{t.testimonials[0]?.quote}&rdquo;
            </div>
            <div style={{
              width: 48,
              height: 3,
              background: LIME,
              margin: "32px auto 28px",
              borderRadius: 2,
            }} />
            <div style={{
              fontSize: 15,
              fontWeight: 700,
              color: BLK,
              fontFamily: DISPLAY_FONT,
              marginBottom: 4,
            }}>
              {t.testimonials[0]?.name}
            </div>
            <div style={{
              fontSize: 13,
              color: MUTED,
              fontFamily: BODY_FONT,
            }}>
              {t.testimonials[0]?.role}
              {t.testimonials[0]?.company ? `, ${t.testimonials[0].company}` : ""}
            </div>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 40 }}>
              {(["←", "→"] as const).map(arrow => (
                <button
                  key={arrow}
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: LIME,
                    border: "none",
                    cursor: "pointer",
                    fontSize: 16,
                    fontWeight: 700,
                    color: BLK,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "transform 0.15s ease",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.1)" }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)" }}
                >
                  {arrow}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section style={{
        background: LIGHT_GRAY,
        padding: "clamp(60px, 8vw, 96px) clamp(16px, 4vw, 40px)",
      }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ marginBottom: 56 }}>
              <div style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 1.8,
                textTransform: "uppercase",
                color: MUTED,
                marginBottom: 16,
                fontFamily: BODY_FONT,
              }}>
                Questions
              </div>
              <h2 style={{
                fontSize: "clamp(26px, 3vw, 38px)",
                fontWeight: 800,
                color: BLK,
                fontFamily: DISPLAY_FONT,
                letterSpacing: "-0.02em",
              }}>
                Frequently Asked
              </h2>
            </div>
          </FadeIn>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {t.faq.map((item, i) => (
              <FadeIn key={item.question} delay={i * 0.04}>
                <div style={{ borderTop: "1px solid #D1D5DB" }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "24px 0",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      gap: 16,
                      minHeight: 48,
                    }}
                  >
                    <span style={{
                      fontSize: 16,
                      fontWeight: 600,
                      color: BLK,
                      fontFamily: DISPLAY_FONT,
                      lineHeight: 1.4,
                    }}>
                      {item.question}
                    </span>
                    <span style={{
                      color: BLK,
                      background: openFaq === i ? LIME : "transparent",
                      border: `1.5px solid ${openFaq === i ? LIME : "#D1D5DB"}`,
                      borderRadius: "50%",
                      width: 30,
                      height: 30,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 16,
                      flexShrink: 0,
                      transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s ease, background 0.2s ease",
                    }}>
                      &#8964;
                    </span>
                  </button>
                  {openFaq === i && (
                    <div style={{ paddingBottom: 24, paddingRight: "clamp(0px, 4vw, 48px)" }}>
                      <p style={{
                        fontSize: 15,
                        color: BODY_TEXT,
                        lineHeight: 1.75,
                        fontFamily: BODY_FONT,
                      }}>
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
            <div style={{ borderTop: "1px solid #D1D5DB" }} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: "#fff",
        padding: "clamp(72px, 9vw, 112px) clamp(16px, 4vw, 40px)",
      }}>
        <FadeIn>
          <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{
              fontSize: "clamp(28px, 4vw, 52px)",
              fontWeight: 800,
              color: BLK,
              fontFamily: DISPLAY_FONT,
              letterSpacing: "-0.03em",
              marginBottom: 20,
              lineHeight: 1.1,
            }}>
              Ready to Build Real Wealth?
            </h2>
            <p style={{
              fontSize: 17,
              color: BODY_TEXT,
              lineHeight: 1.7,
              maxWidth: 460,
              margin: "0 auto 44px",
              fontFamily: BODY_FONT,
            }}>
              Schedule a complimentary 30-minute consultation. No sales pitch -- just an honest look at your financial picture.
            </p>
            <button style={{
              padding: "18px 44px",
              background: LIME,
              color: BLK,
              border: "none",
              borderRadius: 10,
              fontSize: 16,
              fontWeight: 700,
              cursor: "pointer",
              fontFamily: BODY_FONT,
              display: "inline-block",
              marginBottom: 20,
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 8px 24px ${LIME}66` }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none" }}
            >
              {t.hero.cta}
            </button>
            <div style={{
              fontSize: 13,
              color: MUTED,
              fontFamily: BODY_FONT,
            }}>
              No minimums for financial planning
            </div>
          </div>
        </FadeIn>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: "28px clamp(16px, 4vw, 40px)",
        borderTop: "1px solid #E5E7EB",
        textAlign: "center",
        background: "#fff",
      }}>
        <p style={{
          fontSize: 12,
          color: MUTED,
          fontFamily: BODY_FONT,
        }}>
          {t.name} Template -- Partner Portal Templates
        </p>
      </footer>

    </div>
  )
}
