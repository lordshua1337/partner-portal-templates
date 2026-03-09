"use client"

import type { TemplateConfig } from "@/data/templates"
import FadeIn from "@/components/motion/FadeIn"
import CountUp from "@/components/motion/CountUp"
import FAQ from "@/components/sections/FAQ"
import PricingTable from "@/components/sections/PricingTable"

const BLUE = "#2B59FF"
const YELLOW = "#FFC947"
const CREAM = "#FAF8F3"
const BLACK = "#12141D"

const PAIN_POINTS = [
  {
    title: "Categorize every transaction automatically",
    description: "Bank feeds, credit cards, and payment processors all reconciled without you lifting a finger. We catch the errors humans miss.",
    checkmarks: ["Auto bank reconciliation", "Multi-account support", "Error detection"],
  },
  {
    title: "Monthly reports delivered on time, every time",
    description: "Profit and loss, balance sheet, and cash flow statements in your inbox by the 5th. Clear, visual, no accounting jargon.",
    checkmarks: ["P&L statements", "Balance sheets", "Cash flow reports"],
  },
  {
    title: "Tax-ready books your CPA will love",
    description: "Year-end close handled. Every category clean. Every receipt matched. Your accountant gets organized books instead of a shoebox.",
    checkmarks: ["Year-end close", "CPA-ready exports", "Receipt matching"],
  },
]

const STEPS = [
  { number: "01", title: "Connect Your Accounts", description: "Securely link your bank, credit cards, and payment processors. Bank-level 256-bit encryption keeps everything safe." },
  { number: "02", title: "We Handle the Books", description: "Your dedicated bookkeeper categorizes transactions, reconciles accounts, and keeps everything current -- every single month." },
  { number: "03", title: "Review and Grow", description: "Get clear monthly reports, actionable insights, and stress-free tax seasons. Focus on your business, not your books." },
]

const INTEGRATIONS = ["QuickBooks", "Xero", "FreshBooks", "Wave", "Gusto", "Stripe"]

function WaveDivider({ flip, fill }: { readonly flip?: boolean; readonly fill: string }) {
  return (
    <div style={{ position: "relative", width: "100%", height: 60, overflow: "hidden", lineHeight: 0, transform: flip ? "rotate(180deg)" : "none" }}>
      <svg viewBox="0 0 1600 60" preserveAspectRatio="none" style={{ width: "100%", height: "100%", display: "block" }}>
        <path d="M0,30 C400,60 800,0 1200,30 C1400,45 1500,15 1600,30 L1600,60 L0,60 Z" fill={fill} />
      </svg>
    </div>
  )
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  )
}

export default function BookkeeperTemplate({ template: t }: { readonly template: TemplateConfig }) {
  const c = t.colors
  const displayFont = `'${t.fonts.display}', sans-serif`
  const bodyFont = `'${t.fonts.body}', sans-serif`

  return (
    <div style={{ minHeight: "100vh", background: "#fff", color: BLACK, fontFamily: bodyFont }}>

      {/* Hero -- split layout, left text, right yellow circle with floating cards */}
      <section style={{ background: CREAM, position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 1296, margin: "0 auto", padding: "100px 24px 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center", minHeight: 700 }}>

          {/* Left: text */}
          <div style={{ position: "relative", zIndex: 2 }}>
            <FadeIn>
              <p style={{ fontSize: 20, fontWeight: 500, color: BLACK, opacity: 0.7, marginBottom: 16, fontFamily: bodyFont }}>
                Professional Bookkeeping Service
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 style={{
                fontSize: "clamp(40px, 5vw, 80px)", fontWeight: 700, lineHeight: 1.1,
                letterSpacing: "-0.0125em", marginBottom: 24, fontFamily: displayFont, color: BLACK,
              }}>
                {t.hero.headline}
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p style={{ fontSize: 20, color: BLACK, opacity: 0.7, lineHeight: 1.6, maxWidth: 600, marginBottom: 40, letterSpacing: "-0.025em", fontFamily: bodyFont }}>
                {t.hero.subheadline}
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 32 }}>
                <button style={{
                  padding: "18px 40px", background: BLACK, color: "#fff",
                  borderRadius: 10, fontSize: 16, fontWeight: 600, border: "none", cursor: "pointer",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(18,20,29,0.25)" }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none" }}
                >
                  {t.hero.cta}
                </button>
                <button style={{
                  padding: "18px 40px", background: "transparent", color: BLACK,
                  borderRadius: 10, fontSize: 16, fontWeight: 600,
                  border: `2px solid ${BLACK}20`, cursor: "pointer",
                }}>
                  {t.hero.secondaryCta}
                </button>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div style={{ display: "flex", gap: 24, alignItems: "center", opacity: 0.5, fontSize: 14 }}>
                <span>No credit card required</span>
                <span style={{ width: 4, height: 4, borderRadius: "50%", background: BLACK }} />
                <span>Cancel anytime</span>
              </div>
            </FadeIn>
          </div>

          {/* Right: yellow circle with floating stat cards */}
          <FadeIn delay={0.2}>
            <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", minHeight: 500 }}>
              {/* Yellow circle */}
              <div style={{
                width: 420, height: 420, borderRadius: "50%", background: YELLOW,
                position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
              }} />
              {/* Floating card 1 - top right */}
              <div style={{
                position: "absolute", top: 20, right: 0, background: "rgba(255,255,255,0.92)",
                borderRadius: 12, padding: "16px 20px", boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
                backdropFilter: "blur(10px)", zIndex: 3,
              }}>
                <div style={{ fontSize: 28, fontWeight: 700, fontFamily: displayFont, color: BLACK }}>99.8%</div>
                <div style={{ fontSize: 13, color: "#6B7280", marginTop: 4 }}>Accuracy Rate</div>
              </div>
              {/* Floating card 2 - bottom left */}
              <div style={{
                position: "absolute", bottom: 40, left: -20, background: "rgba(255,255,255,0.92)",
                borderRadius: 12, padding: "16px 20px", boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
                backdropFilter: "blur(10px)", zIndex: 3,
              }}>
                <div style={{ fontSize: 28, fontWeight: 700, fontFamily: displayFont, color: BLUE }}>$1.2M</div>
                <div style={{ fontSize: 13, color: "#6B7280", marginTop: 4 }}>Penalties Avoided</div>
              </div>
              {/* Floating card 3 - center */}
              <div style={{
                position: "relative", background: "#fff", borderRadius: 16,
                padding: "24px 28px", boxShadow: "0 30px 80px rgba(0,0,0,0.15)",
                zIndex: 4, minWidth: 200,
              }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: BLACK, marginBottom: 12 }}>Monthly Summary</div>
                <div style={{ display: "flex", gap: 16 }}>
                  <div>
                    <div style={{ fontSize: 22, fontWeight: 700, color: BLUE, fontFamily: displayFont }}>$24.8K</div>
                    <div style={{ fontSize: 11, color: "#6B7280" }}>Revenue</div>
                  </div>
                  <div style={{ width: 1, background: "#E5E7EB" }} />
                  <div>
                    <div style={{ fontSize: 22, fontWeight: 700, color: "#059669", fontFamily: displayFont }}>$18.2K</div>
                    <div style={{ fontSize: 11, color: "#6B7280" }}>Profit</div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
        <WaveDivider fill="#fff" />
      </section>

      {/* Feature List -- 3 staggered cards with checkmarks */}
      <section style={{ padding: "60px 24px 80px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeIn>
            <h2 style={{
              fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 700, textAlign: "center",
              lineHeight: 1.26, maxWidth: 627, margin: "0 auto 64px", fontFamily: displayFont,
              color: BLACK,
            }}>
              Simple bookkeeping through which your business can thrive
            </h2>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
            {PAIN_POINTS.map((point, i) => (
              <FadeIn key={point.title} delay={i * 0.12}>
                <div style={{
                  background: "#fff", borderRadius: 20, padding: 32,
                  border: "1px solid #E5E7EB",
                  marginTop: i === 1 ? 28 : i === 2 ? 12 : 0,
                  transition: "box-shadow 0.3s ease, transform 0.3s ease",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = "0 20px 60px rgba(43,89,255,0.12)"
                  e.currentTarget.style.transform = "translateY(-6px)"
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = "none"
                  e.currentTarget.style.transform = "translateY(0)"
                }}
                >
                  {/* Icon circle */}
                  <div style={{
                    width: 56, height: 56, borderRadius: 14,
                    background: `${BLUE}10`, display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: 24,
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={i === 0 ? "M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" : i === 1 ? "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8" : "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"} />
                    </svg>
                  </div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, fontFamily: displayFont, color: BLACK, marginBottom: 14, lineHeight: 1.3 }}>
                    {point.title}
                  </h3>
                  <p style={{ fontSize: 15, color: "#6B7280", lineHeight: 1.7, marginBottom: 20 }}>
                    {point.description}
                  </p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {point.checkmarks.map(item => (
                      <li key={item} style={{ display: "flex", gap: 10, alignItems: "center", padding: "6px 0", fontSize: 14, color: BLACK }}>
                        <CheckIcon /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Content 1 -- split with yellow circle left, text right */}
      <section style={{ background: CREAM, position: "relative" }}>
        <WaveDivider fill={CREAM} flip />
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px 80px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          {/* Left: yellow circle visual */}
          <FadeIn direction="left">
            <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", minHeight: 400 }}>
              <div style={{ width: 360, height: 360, borderRadius: "50%", background: YELLOW }} />
              <div style={{
                position: "absolute", background: "#fff", borderRadius: 16, padding: "20px 24px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.12)", right: 0, bottom: 30,
              }}>
                <div style={{ fontSize: 13, color: "#6B7280", marginBottom: 4 }}>Transactions this month</div>
                <div style={{ fontSize: 28, fontWeight: 700, fontFamily: displayFont, color: BLACK }}>1,847</div>
                <div style={{ fontSize: 12, color: "#059669", fontWeight: 600, marginTop: 4 }}>All reconciled</div>
              </div>
            </div>
          </FadeIn>
          {/* Right: text */}
          <FadeIn direction="right" delay={0.1}>
            <div>
              <h2 style={{ fontSize: 42, fontWeight: 700, fontFamily: displayFont, lineHeight: 1.26, marginBottom: 20, color: BLACK }}>
                Stop drowning in receipts and start growing
              </h2>
              <p style={{ fontSize: 16, color: "#6B7280", lineHeight: 1.75, marginBottom: 24 }}>
                You started your business to do what you love, not to reconcile bank statements at midnight. We handle every transaction, every receipt, every report -- so you get your evenings back.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {["Bank-level 256-bit encryption", "Dedicated bookkeeper assigned", "48-hour monthly turnaround"].map(item => (
                  <div key={item} style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 15, color: BLACK }}>
                    <CheckIcon /> {item}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ padding: "56px 24px", background: "#fff", borderTop: "1px solid #E5E7EB", borderBottom: "1px solid #E5E7EB" }}>
        <FadeIn>
          <div style={{ maxWidth: 960, margin: "0 auto", display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: 32 }}>
            {t.stats.map(stat => (
              <div key={stat.label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 36, fontWeight: 700, color: BLUE, fontFamily: displayFont }}>
                  <CountUp end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </div>
                <div style={{ fontSize: 14, color: "#6B7280", marginTop: 6 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* How It Works -- 3 numbered steps */}
      <section style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <FadeIn>
            <h2 style={{ fontSize: 42, fontWeight: 700, fontFamily: displayFont, textAlign: "center", marginBottom: 64, lineHeight: 1.26, color: BLACK }}>
              Up and running in three simple steps
            </h2>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 48 }}>
            {STEPS.map((step, i) => (
              <FadeIn key={step.number} delay={i * 0.15}>
                <div style={{ textAlign: "center" }}>
                  <div style={{
                    width: 72, height: 72, borderRadius: "50%",
                    background: i === 0 ? BLUE : i === 1 ? YELLOW : BLACK,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 20px",
                    boxShadow: i === 0 ? "0 8px 32px rgba(43,89,255,0.3)" : i === 1 ? "0 8px 32px rgba(255,201,71,0.4)" : "0 8px 32px rgba(18,20,29,0.2)",
                  }}>
                    <span style={{ fontSize: 22, fontWeight: 700, color: i === 1 ? BLACK : "#fff", fontFamily: displayFont }}>{step.number}</span>
                  </div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, fontFamily: displayFont, marginBottom: 12, color: BLACK }}>{step.title}</h3>
                  <p style={{ fontSize: 15, color: "#6B7280", lineHeight: 1.7 }}>{step.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial section -- blue background with white card */}
      <section style={{ background: BLUE, padding: "100px 24px", position: "relative" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeIn>
            <h2 style={{
              fontSize: 42, fontWeight: 700, fontFamily: displayFont, textAlign: "center",
              color: "#fff", lineHeight: 1.26, maxWidth: 583, margin: "0 auto 64px",
            }}>
              You are not alone. The pain of messy books is real.
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div style={{
              background: "#fff", borderRadius: 12, padding: "48px 56px",
              boxShadow: "0 24px 80px rgba(0,0,0,0.2)",
            }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 48 }}>
                {t.testimonials.map((testimonial, i) => (
                  <div key={testimonial.name} style={{ borderLeft: i > 0 ? "1px solid #E5E7EB" : "none", paddingLeft: i > 0 ? 48 : 0 }}>
                    <div style={{ display: "flex", gap: 4, marginBottom: 16 }}>
                      {Array.from({ length: testimonial.rating }).map((_, j) => (
                        <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill={YELLOW} stroke={YELLOW} strokeWidth="1">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                    <p style={{ fontSize: 15, color: "#374151", lineHeight: 1.75, marginBottom: 20, fontStyle: "italic" }}>
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div>
                      <div style={{ fontSize: 15, fontWeight: 700, color: BLACK }}>{testimonial.name}</div>
                      <div style={{ fontSize: 13, color: "#6B7280" }}>{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div style={{ textAlign: "center", marginTop: 48 }}>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", marginBottom: 20 }}>Trusted by 500+ business owners</p>
              <div style={{ display: "flex", justifyContent: "center", gap: 40, flexWrap: "wrap" }}>
                {INTEGRATIONS.map(name => (
                  <span key={name} style={{ fontSize: 15, fontWeight: 700, color: "rgba(255,255,255,0.45)" }}>{name}</span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Pricing */}
      {t.pricing && (
        <PricingTable
          tiers={t.pricing}
          backgroundColor="#fff"
          cardBackground="#fff"
          textColor={BLACK}
          mutedColor="#6B7280"
          accentColor={BLUE}
          borderColor="#E5E7EB"
          displayFont={displayFont}
        />
      )}

      {/* FAQ */}
      <FAQ
        items={t.faq}
        backgroundColor={CREAM}
        textColor={BLACK}
        mutedColor="#6B7280"
        accentColor={BLUE}
        borderColor="#E5E7EB"
        displayFont={displayFont}
      />

      {/* CTA -- yellow background with geometric shapes */}
      <section style={{ background: YELLOW, padding: "100px 24px", position: "relative", overflow: "hidden", textAlign: "center" }}>
        {/* Geometric shapes at low opacity */}
        <div style={{
          position: "absolute", top: -200, left: -200, width: 600, height: 600,
          borderRadius: "50%", border: "80px solid rgba(0,0,0,0.06)", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: -150, right: -100, width: 400, height: 400,
          borderRadius: "50%", border: "60px solid rgba(0,0,0,0.06)", pointerEvents: "none",
        }} />
        <WaveDivider fill={YELLOW} flip />
        <div style={{ maxWidth: 464, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <FadeIn>
            <h2 style={{ fontSize: 42, fontWeight: 700, fontFamily: displayFont, lineHeight: 1.26, color: BLACK, marginBottom: 16 }}>
              Ready for stress-free books?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p style={{ fontSize: 16, color: BLACK, opacity: 0.7, lineHeight: 1.62, marginBottom: 32 }}>
              Join 500+ business owners who stopped drowning in receipts. First month free, no commitments.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div style={{ display: "flex", gap: 0, background: "#fff", borderRadius: 10, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}>
              <input
                type="email"
                placeholder="Enter your email"
                readOnly
                style={{
                  flex: 1, padding: "18px 20px", border: "none", fontSize: 15,
                  outline: "none", fontFamily: bodyFont, color: "#9CA3AF", background: "#fff",
                }}
              />
              <button style={{
                padding: "18px 28px", background: BLACK, color: "#fff",
                border: "none", fontSize: 15, fontWeight: 600, cursor: "pointer",
                borderRadius: "0 10px 10px 0", whiteSpace: "nowrap",
              }}>
                Get Started Free
              </button>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p style={{ fontSize: 14, color: BLACK, opacity: 0.5, marginTop: 16 }}>
              No ads. No trials. No commitments.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#fff", padding: "48px 24px", borderTop: "1px solid #E5E7EB" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24 }}>
          <div>
            <div style={{ fontSize: 18, fontWeight: 700, fontFamily: displayFont, color: BLACK, marginBottom: 6 }}>{t.name}</div>
            <div style={{ fontSize: 13, color: "#6B7280" }}>Partner Portal Templates</div>
          </div>
          <div style={{ display: "flex", gap: 32 }}>
            {["About", "Services", "Pricing", "Contact"].map(link => (
              <span key={link} style={{ fontSize: 14, color: "#6B7280", cursor: "pointer" }}>{link}</span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
