"use client"

import { useState } from "react"
import type { TemplateConfig } from "@/data/templates"
import FadeIn from "@/components/motion/FadeIn"
import CountUp from "@/components/motion/CountUp"

const LIME = "#DDF472"
const DARK = "#12141D"
const LIGHT_GRAY = "#F6F9FC"
const BLK = "#0B0B0B"
const MUTED = "#6B7280"

const PILLARS = [
  { n: "01", title: "Evidence-Based", body: "Portfolios grounded in peer-reviewed research. Factor-based strategies and low-cost index exposure drive long-term outperformance." },
  { n: "02", title: "Tax-Efficient", body: "Every dollar saved in taxes compounds for your future. Tax-loss harvesting, asset location, and Roth conversion planning built into every portfolio." },
  { n: "03", title: "Personalized", body: "Your plan is built around your goals, timeline, and risk tolerance -- then updated as your life evolves." },
]

const PERF = [
  { label: "10-Year Avg Return", value: 11, suffix: "%", decimals: 1 },
  { label: "Tax Savings Generated", value: 2.4, prefix: "$", suffix: "M+", decimals: 1 },
  { label: "Client Retention", value: 97, suffix: "%", decimals: 0 },
  { label: "Avg Account Growth", value: 340, suffix: "%", decimals: 0 },
]

const CREDS = ["CFP", "CFA", "Series 65", "Fee-Only Fiduciary"]

const BARS = [
  { h: "45%", bg: LIME }, { h: "70%", bg: DARK }, { h: "55%", bg: LIME },
  { h: "90%", bg: DARK }, { h: "65%", bg: LIME }, { h: "100%", bg: DARK },
]

export default function FinancialAdvisorTemplate({ template: t }: { readonly template: TemplateConfig }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const df = `'Plus Jakarta Sans', 'Inter', sans-serif`

  return (
    <div style={{ minHeight: "100vh", background: "#fff", color: BLK, fontFamily: `'Inter', sans-serif` }}>

      {/* HERO */}
      <section style={{ background: "linear-gradient(160deg,#fff 0%,rgba(159,190,200,0.21) 100%)", padding: "100px 40px 96px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", display: "flex", alignItems: "center", gap: 64 }}>

          <div style={{ flex: "0 0 55%", maxWidth: "55%" }}>
            <FadeIn>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.8, textTransform: "uppercase", color: MUTED, marginBottom: 28 }}>
                Fee-Only Fiduciary Advisors
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <h1 style={{ fontSize: "clamp(44px,6vw,80px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", color: BLK, fontFamily: df, marginBottom: 36 }}>
                {t.hero.headline}
              </h1>
            </FadeIn>
            <FadeIn delay={0.16}>
              <p style={{ fontSize: 17, color: "#4B5563", lineHeight: 1.7, marginBottom: 44, maxWidth: 480 }}>
                {t.hero.subheadline}
              </p>
            </FadeIn>
            <FadeIn delay={0.22}>
              <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
                {t.stats.map((stat, i) => (
                  <div key={stat.label} style={{ display: "flex", alignItems: "center" }}>
                    <div style={{ padding: `0 ${i === 0 ? "28px 0 0" : "28px"}` }}>
                      <div style={{ fontSize: 22, fontWeight: 800, color: BLK, fontFamily: df, lineHeight: 1, marginBottom: 4 }}>
                        {stat.prefix ?? ""}{stat.value}{stat.suffix ?? ""}
                      </div>
                      <div style={{ fontSize: 11, color: "#9CA3AF", fontWeight: 500 }}>{stat.label}</div>
                    </div>
                    {i < t.stats.length - 1 && <div style={{ width: 1, height: 36, background: "#D1D5DB", flexShrink: 0 }} />}
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div style={{ display: "flex", gap: 14, marginTop: 48, flexWrap: "wrap" }}>
                <button style={{ padding: "15px 32px", background: LIME, color: BLK, border: "none", borderRadius: 8, fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: df }}>
                  {t.hero.cta}
                </button>
                <button style={{ padding: "15px 32px", background: "transparent", color: BLK, border: "1.5px solid #D1D5DB", borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: "pointer" }}>
                  {t.hero.secondaryCta ?? "See How It Works"}
                </button>
              </div>
            </FadeIn>
          </div>

          {/* Dashboard card */}
          <FadeIn delay={0.2} direction="left" style={{ flex: 1 }}>
            <div style={{ background: "#fff", borderRadius: 20, boxShadow: "0 24px 64px rgba(0,0,0,0.10),0 4px 16px rgba(0,0,0,0.06)", padding: 32, maxWidth: 340, marginLeft: "auto" }}>
              <div style={{ fontSize: 12, color: "#9CA3AF", fontWeight: 500, marginBottom: 6 }}>Portfolio Growth</div>
              <div style={{ fontSize: 28, fontWeight: 800, color: "#16A34A", fontFamily: df, marginBottom: 24 }}>+11.2%</div>
              <div style={{ display: "flex", alignItems: "flex-end", gap: 10, height: 80, marginBottom: 20 }}>
                {BARS.map((bar, i) => (
                  <div key={i} style={{ flex: 1, height: bar.h, background: bar.bg, borderRadius: "4px 4px 0 0", opacity: bar.bg === DARK ? 0.85 : 1 }} />
                ))}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#9CA3AF" }}>
                {["Jan","Feb","Mar","Apr","May","Jun"].map(m => <span key={m}>{m}</span>)}
              </div>
              <div style={{ marginTop: 20, padding: "12px 16px", background: LIGHT_GRAY, borderRadius: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 12, color: MUTED, fontWeight: 500 }}>Total AUM</span>
                <span style={{ fontSize: 14, fontWeight: 700, color: BLK, fontFamily: df }}>$4.2B</span>
              </div>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* FEATURES DARK */}
      <section style={{ background: DARK, padding: "96px 40px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ marginBottom: 56 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.8, textTransform: "uppercase", color: "#6B7280", marginBottom: 16 }}>What We Offer</div>
              <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, color: "#fff", fontFamily: df, letterSpacing: "-0.02em", maxWidth: 500 }}>
                Comprehensive Wealth Management
              </h2>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {t.features.slice(0, 3).map((feat, i) => (
              <FadeIn key={feat.title} delay={i * 0.08}>
                <div style={{ background: "#1E2028", border: "1px solid #2A2D35", borderRadius: 14, padding: 32 }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: LIME, marginBottom: 20 }} />
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: "#fff", fontFamily: df, marginBottom: 12, letterSpacing: "-0.01em" }}>{feat.title}</h3>
                  <p style={{ fontSize: 14, color: "#9CA3AF", lineHeight: 1.75 }}>{feat.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FLOATING OVERLAP CARD + PHILOSOPHY */}
      <div style={{ background: LIGHT_GRAY, paddingTop: 1 }}>
        <FadeIn>
          <div style={{ maxWidth: 800, margin: "-40px auto 0", background: "#fff", borderRadius: 16, boxShadow: "0 16px 48px rgba(0,0,0,0.10)", padding: "28px 40px", display: "flex", justifyContent: "center", alignItems: "center", gap: 0, flexWrap: "wrap", position: "relative", zIndex: 10 }}>
            {CREDS.map((cred, i) => (
              <div key={cred} style={{ display: "flex", alignItems: "center" }}>
                {i > 0 && <div style={{ width: 1, height: 28, background: "#E5E7EB", margin: "0 28px" }} />}
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 20, height: 20, background: LIME, borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, flexShrink: 0 }}>&#10003;</div>
                  <span style={{ fontSize: 13, fontWeight: 700, color: BLK, fontFamily: df }}>{cred}</span>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* PHILOSOPHY */}
        <section style={{ padding: "96px 40px" }}>
          <div style={{ maxWidth: 1120, margin: "0 auto" }}>
            <FadeIn>
              <div style={{ marginBottom: 64 }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.8, textTransform: "uppercase", color: "#9CA3AF", marginBottom: 16 }}>Our Approach</div>
                <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, color: BLK, fontFamily: df, letterSpacing: "-0.02em" }}>Investment Philosophy</h2>
              </div>
            </FadeIn>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 0 }}>
              {PILLARS.map((p, i) => (
                <FadeIn key={p.n} delay={i * 0.1}>
                  <div style={{ paddingRight: i < 2 ? 48 : 0, paddingLeft: i > 0 ? 48 : 0, borderRight: i < 2 ? "1px solid #D1D5DB" : "none", position: "relative" }}>
                    <div style={{ fontSize: 80, fontWeight: 800, color: BLK, opacity: 0.05, fontFamily: df, lineHeight: 1, position: "absolute", top: -16, left: i > 0 ? 48 : 0, userSelect: "none" }}>{p.n}</div>
                    <div style={{ paddingTop: 40 }}>
                      <h3 style={{ fontSize: 20, fontWeight: 800, color: BLK, fontFamily: df, marginBottom: 14 }}>{p.title}</h3>
                      <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.75 }}>{p.body}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* PERFORMANCE LIME */}
      <section style={{ background: LIME, padding: "88px 40px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.8, textTransform: "uppercase", color: "rgba(11,11,11,0.5)", marginBottom: 16 }}>Track Record</div>
              <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, color: BLK, fontFamily: df, letterSpacing: "-0.02em" }}>Performance That Speaks</h2>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0 }}>
            {PERF.map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.08}>
                <div style={{ textAlign: "center", borderRight: i < 3 ? "1px solid rgba(11,11,11,0.12)" : "none", padding: "0 32px" }}>
                  <div style={{ fontSize: "clamp(40px,4vw,60px)", fontWeight: 800, color: BLK, fontFamily: df, lineHeight: 1, marginBottom: 12, letterSpacing: "-0.03em" }}>
                    <CountUp end={s.value} prefix={s.prefix} suffix={s.suffix} decimals={s.decimals} />
                  </div>
                  <div style={{ fontSize: 13, color: "rgba(11,11,11,0.55)", fontWeight: 600 }}>{s.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL WHITE */}
      <section style={{ background: "#fff", padding: "96px 40px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <FadeIn>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.8, textTransform: "uppercase", color: "#9CA3AF", marginBottom: 40 }}>Client Stories</div>
            <div style={{ fontSize: "clamp(20px,2.5vw,28px)", fontWeight: 500, color: BLK, lineHeight: 1.6, fontFamily: df }}>
              &ldquo;{t.testimonials[0]?.quote}&rdquo;
            </div>
            <div style={{ width: 48, height: 3, background: LIME, margin: "32px auto 28px", borderRadius: 2 }} />
            <div style={{ fontSize: 15, fontWeight: 700, color: BLK, fontFamily: df, marginBottom: 4 }}>{t.testimonials[0]?.name}</div>
            <div style={{ fontSize: 13, color: "#9CA3AF" }}>{t.testimonials[0]?.role}{t.testimonials[0]?.company ? `, ${t.testimonials[0].company}` : ""}</div>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 40 }}>
              {(["←","→"] as const).map(arrow => (
                <button key={arrow} style={{ width: 44, height: 44, borderRadius: "50%", background: LIME, border: "none", cursor: "pointer", fontSize: 16, fontWeight: 700, color: BLK, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {arrow}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ LIGHT GRAY */}
      <section style={{ background: LIGHT_GRAY, padding: "96px 40px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ marginBottom: 56 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.8, textTransform: "uppercase", color: "#9CA3AF", marginBottom: 16 }}>Questions</div>
              <h2 style={{ fontSize: "clamp(26px,3vw,38px)", fontWeight: 800, color: BLK, fontFamily: df, letterSpacing: "-0.02em" }}>Frequently Asked</h2>
            </div>
          </FadeIn>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {t.faq.map((item, i) => (
              <FadeIn key={item.question} delay={i * 0.04}>
                <div style={{ borderTop: "1px solid #D1D5DB" }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 0", background: "transparent", border: "none", cursor: "pointer", textAlign: "left", gap: 16 }}>
                    <span style={{ fontSize: 16, fontWeight: 600, color: BLK, fontFamily: df, lineHeight: 1.4 }}>{item.question}</span>
                    <span style={{ color: BLK, background: openFaq === i ? LIME : "transparent", border: `1.5px solid ${openFaq === i ? LIME : "#D1D5DB"}`, borderRadius: "50%", width: 30, height: 30, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0, transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s ease, background 0.2s ease" }}>
                      &#8964;
                    </span>
                  </button>
                  {openFaq === i && (
                    <div style={{ paddingBottom: 24, paddingRight: 48 }}>
                      <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.75 }}>{item.answer}</p>
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
            <div style={{ borderTop: "1px solid #D1D5DB" }} />
          </div>
        </div>
      </section>

      {/* CTA WHITE */}
      <section style={{ background: "#fff", padding: "112px 40px" }}>
        <FadeIn>
          <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(32px,4vw,52px)", fontWeight: 800, color: BLK, fontFamily: df, letterSpacing: "-0.03em", marginBottom: 20, lineHeight: 1.1 }}>
              Ready to Build Real Wealth?
            </h2>
            <p style={{ fontSize: 17, color: MUTED, lineHeight: 1.7, maxWidth: 460, margin: "0 auto 44px" }}>
              Schedule a complimentary 30-minute consultation. No sales pitch -- just an honest look at your financial picture.
            </p>
            <button style={{ padding: "18px 44px", background: LIME, color: BLK, border: "none", borderRadius: 10, fontSize: 16, fontWeight: 700, cursor: "pointer", fontFamily: df, display: "inline-block", marginBottom: 20 }}>
              {t.hero.cta}
            </button>
            <div style={{ fontSize: 13, color: "#9CA3AF" }}>No minimums for financial planning</div>
          </div>
        </FadeIn>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "28px 40px", borderTop: "1px solid #E5E7EB", textAlign: "center", background: "#fff" }}>
        <p style={{ fontSize: 12, color: "#9CA3AF" }}>{t.name} Template -- Partner Portal Templates</p>
      </footer>

    </div>
  )
}
