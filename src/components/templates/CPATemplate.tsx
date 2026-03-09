"use client"

import { useState } from "react"
import type { TemplateConfig } from "@/data/templates"
import FadeIn from "@/components/motion/FadeIn"
import CountUp from "@/components/motion/CountUp"

const LAVENDER = "#C4B0FF"
const LAVENDER_DARK = "#7B5EE8"
const BLACK = "#0B0D0F"
const GRAY_BG = "#F5F5F5"
const BORDER = "#EBEBEB"
const RUBIK = "'Rubik', sans-serif"

const MINI_STATS = [
  { value: 3200, suffix: "+", label: "Returns Filed" },
  { value: 99.7, suffix: "%", label: "Accuracy Rate" },
  { value: 4.2, prefix: "$", suffix: "M", label: "Tax Savings" },
  { value: 15, suffix: "+", label: "Years Practice" },
]

const CHECKLIST = [
  { text: "W-2 & 1099 forms collected", done: true },
  { text: "Deductions identified", done: true },
  { text: "State filing prepared", done: true },
  { text: "IRS e-file submitted", done: false },
]

const REPORT_BARS = [
  { label: "Revenue", pct: 82, accent: true },
  { label: "Expenses", pct: 54, accent: false },
  { label: "Net Income", pct: 68, accent: true },
  { label: "Tax Liability", pct: 31, accent: false },
]

const CAL_DAYS = [
  { day: "Mon", label: "Quarterly Est.", color: LAVENDER },
  { day: "Wed", label: "Client Review", color: "#E8E4FF" },
  { day: "Fri", label: "Payroll Filing", color: LAVENDER },
  { day: "Mon", label: "Board Report", color: "#E8E4FF" },
]

const TESTIMONIALS = [
  { quote: "They found $14,000 in deductions my previous CPA missed. Switched immediately and never looked back.", name: "Marcus T.", role: "Restaurant Owner", dark: true },
  { quote: "Year-round advisory changed everything. I actually understand my financials now and plan ahead instead of reacting.", name: "Priya N.", role: "E-commerce Founder", dark: true },
  { quote: "Personal, responsive, and accurate. Filing taxes used to be my most stressful week of the year. Not anymore.", name: "David K.", role: "Freelance Consultant", dark: false },
]

const FALLBACK_FEATURES_0 = [
  { text: "Federal + state return", included: true },
  { text: "Deduction review", included: true },
  { text: "E-file included", included: true },
  { text: "Quarterly advisory", included: false },
]

const FALLBACK_FEATURES_1 = [
  { text: "Business entity return", included: true },
  { text: "Payroll tax filings", included: true },
  { text: "Quarterly advisory calls", included: true },
  { text: "Monthly bookkeeping review", included: true },
]

function FeatureRow({ text, included, inverted }: { text: string; included: boolean; inverted?: boolean }) {
  return (
    <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
      <div style={{
        width: 18, height: 18, borderRadius: "50%", flexShrink: 0,
        background: included ? (inverted ? "#0B0D0F22" : "#C4B0FF33") : (inverted ? "#0B0D0F11" : "#F5F5F5"),
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 10, color: included ? (inverted ? BLACK : LAVENDER_DARK) : "#CCC",
      }}>
        {included ? "\u2713" : "\u2013"}
      </div>
      <span style={{ fontSize: 14, color: included ? (inverted ? "#0B0D0FCC" : BLACK) : (inverted ? "#0B0D0F66" : "#BBBBBB") }}>{text}</span>
    </div>
  )
}

function MockupShell({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: GRAY_BG, borderRadius: 20, padding: 32 }}>
      <div style={{ background: "#FFFFFF", borderRadius: 14, padding: 24, boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
        {children}
      </div>
    </div>
  )
}

function FeatureLabel({ text }: { text: string }) {
  return (
    <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" as const, color: LAVENDER_DARK, marginBottom: 16 }}>{text}</p>
  )
}

function FeatureHeading({ text }: { text: string }) {
  return (
    <h2 style={{ fontFamily: RUBIK, fontWeight: 600, fontSize: "clamp(24px, 2.5vw, 38px)", lineHeight: 1.2, color: BLACK, marginBottom: 20 }}>{text}</h2>
  )
}

function FeatureBody({ text }: { text: string }) {
  return (
    <p style={{ fontSize: 16, color: "#666", lineHeight: 1.8, marginBottom: 28 }}>{text}</p>
  )
}

export default function CPATemplate({ template: t }: { readonly template: TemplateConfig }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div style={{ minHeight: "100vh", background: "#FFFFFF", color: BLACK, fontFamily: "'Inter', sans-serif" }}>

      {/* Nav */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: GRAY_BG, borderBottom: `1px solid ${BORDER}`, padding: "0 40px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <span style={{ fontFamily: RUBIK, fontWeight: 600, fontSize: 18 }}>{t.name}</span>
        <div style={{ display: "flex", gap: 36 }}>
          {["Services", "About", "Pricing", "Contact"].map(link => (
            <a key={link} href="#" style={{ fontSize: 14, fontWeight: 500, color: "#555", textDecoration: "none" }}>{link}</a>
          ))}
        </div>
        <button style={{ padding: "10px 22px", background: LAVENDER, color: BLACK, border: "none", borderRadius: 100, fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: RUBIK }}>
          Get Started
        </button>
      </nav>

      {/* Hero */}
      <section style={{ background: GRAY_BG, padding: "80px 40px 0", textAlign: "center" }}>
        <FadeIn>
          <h1 style={{ fontFamily: RUBIK, fontWeight: 600, fontSize: "clamp(40px, 5.5vw, 76px)", lineHeight: 1.1, letterSpacing: "-1px", maxWidth: 800, margin: "0 auto 24px", color: BLACK }}>
            {t.hero.headline}
          </h1>
          <p style={{ fontSize: 18, color: "#555", maxWidth: 540, margin: "0 auto 36px", lineHeight: 1.7 }}>{t.hero.subheadline}</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginBottom: 64 }}>
            <button style={{ padding: "14px 30px", background: LAVENDER, color: BLACK, border: "none", borderRadius: 100, fontSize: 15, fontWeight: 600, cursor: "pointer", fontFamily: RUBIK }}>
              {t.hero.cta}
            </button>
            {t.hero.secondaryCta && (
              <button style={{ padding: "14px 30px", background: "transparent", color: BLACK, border: `1.5px solid #CCCCCC`, borderRadius: 100, fontSize: 15, fontWeight: 500, cursor: "pointer" }}>
                {t.hero.secondaryCta}
              </button>
            )}
          </div>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ background: "#FFFFFF", borderRadius: "16px 16px 0 0", boxShadow: "0 -4px 60px rgba(0,0,0,0.10)", padding: "28px 32px", width: "100%", maxWidth: 560, position: "relative" }}>
              <div style={{ position: "absolute", top: -18, right: 32, background: "#FFFFFF", border: `1.5px solid ${BORDER}`, borderRadius: 12, padding: "10px 16px", display: "flex", alignItems: "center", gap: 8, boxShadow: "0 4px 20px rgba(0,0,0,0.09)", zIndex: 10 }}>
                <div style={{ width: 22, height: 22, borderRadius: "50%", background: LAVENDER, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700 }}>{"\u2713"}</div>
                <span style={{ fontSize: 13, fontWeight: 700, fontFamily: RUBIK }}>99.7% Accuracy</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16, paddingBottom: 12, borderBottom: `1px solid #F0F0F0` }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: "#999", letterSpacing: 1, textTransform: "uppercase" }}>Category</span>
                <span style={{ fontSize: 12, fontWeight: 700, color: "#999", letterSpacing: 1, textTransform: "uppercase" }}>Amount</span>
              </div>
              {[["Business Income", "$184,500"], ["Deductible Expenses", "$62,300"], ["Depreciation", "$11,200"]].map(([cat, amt]) => (
                <div key={cat} style={{ display: "flex", justifyContent: "space-between", padding: "11px 0", borderBottom: "1px solid #F8F8F8" }}>
                  <span style={{ fontSize: 14, color: "#444" }}>{cat}</span>
                  <span style={{ fontSize: 14, fontWeight: 600 }}>{amt}</span>
                </div>
              ))}
              <div style={{ display: "flex", justifyContent: "space-between", padding: "13px 16px", marginTop: 10, background: "#C4B0FF22", borderRadius: 10, border: `1.5px solid #C4B0FF55` }}>
                <span style={{ fontSize: 14, fontWeight: 700, fontFamily: RUBIK }}>Estimated Tax Owed</span>
                <span style={{ fontSize: 14, fontWeight: 700, color: LAVENDER_DARK }}>$22,140</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Logo bar */}
      <section style={{ background: GRAY_BG, borderBottom: `1px solid ${BORDER}`, padding: "28px 40px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: 24 }}>
          {["AICPA", "QuickBooks", "Xero", "IRS e-file", "State CPA Board", "PCAOB"].map(logo => (
            <span key={logo} style={{ fontSize: 13, fontWeight: 700, color: "#888", letterSpacing: 0.5, textTransform: "uppercase" }}>{logo}</span>
          ))}
        </div>
      </section>

      {/* Why Us */}
      <section style={{ background: "#FFFFFF", padding: "96px 40px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <FadeIn direction="left">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {MINI_STATS.map((s, i) => (
                <div key={s.label} style={{ background: i % 2 === 0 ? "#F8F7FF" : "#FFFFFF", border: `1.5px solid ${BORDER}`, borderRadius: 16, padding: "24px 20px" }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#C4B0FF33", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                    <div style={{ width: 14, height: 14, background: LAVENDER_DARK, borderRadius: 3 }} />
                  </div>
                  <div style={{ fontSize: 28, fontWeight: 700, color: BLACK, fontFamily: RUBIK, lineHeight: 1 }}>
                    <CountUp end={s.value} prefix={s.prefix} suffix={s.suffix} />
                  </div>
                  <div style={{ fontSize: 13, color: "#888", marginTop: 6 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.1}>
            <div>
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: LAVENDER_DARK, marginBottom: 16 }}>Why Us</p>
              <h2 style={{ fontFamily: RUBIK, fontWeight: 600, fontSize: "clamp(28px, 3vw, 42px)", lineHeight: 1.2, color: BLACK, marginBottom: 20 }}>
                Why 3,200+ businesses trust us
              </h2>
              <p style={{ fontSize: 16, color: "#666", lineHeight: 1.8 }}>
                We bring licensed CPAs, modern software, and a proactive mindset together. Accurate filings, real savings, and an advisor who actually answers the phone -- all year, not just in April.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Feature 01 -- text left, card right */}
      <section style={{ background: "#FFFFFF", padding: "80px 40px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <FadeIn direction="left">
            <div>
              <FeatureLabel text="Tax Preparation" />
              <FeatureHeading text="Tax Preparation That Saves You Money" />
              <FeatureBody text="Our CPAs do more than fill in forms -- they hunt for every deduction you qualify for. Clients save an average of $4,200 more per return compared to self-filing." />
              <a href="#" style={{ fontSize: 14, fontWeight: 600, color: LAVENDER_DARK, textDecoration: "none" }}>Learn more &rarr;</a>
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.1}>
            <MockupShell>
              <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 18, fontFamily: RUBIK }}>Tax Filing Checklist</div>
              {CHECKLIST.map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: i < CHECKLIST.length - 1 ? "1px solid #F2F2F2" : "none" }}>
                  <div style={{ width: 22, height: 22, borderRadius: "50%", flexShrink: 0, background: item.done ? LAVENDER : "#F0F0F0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: item.done ? BLACK : "#CCC" }}>
                    {item.done ? "\u2713" : ""}
                  </div>
                  <span style={{ fontSize: 14, color: item.done ? BLACK : "#999" }}>{item.text}</span>
                </div>
              ))}
            </MockupShell>
          </FadeIn>
        </div>
      </section>

      {/* Feature 02 -- card left, text right */}
      <section style={{ background: "#FFFFFF", padding: "80px 40px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <FadeIn direction="left">
            <MockupShell>
              <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 20, fontFamily: RUBIK }}>Monthly Report -- Q3 2024</div>
              {REPORT_BARS.map(bar => (
                <div key={bar.label} style={{ marginBottom: 16 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <span style={{ fontSize: 12, color: "#666" }}>{bar.label}</span>
                    <span style={{ fontSize: 12, fontWeight: 600 }}>{bar.pct}%</span>
                  </div>
                  <div style={{ height: 8, background: "#F0F0F0", borderRadius: 100, overflow: "hidden" }}>
                    <div style={{ height: "100%", width: `${bar.pct}%`, background: bar.accent ? LAVENDER : "#DDDDDD", borderRadius: 100 }} />
                  </div>
                </div>
              ))}
            </MockupShell>
          </FadeIn>
          <FadeIn direction="right" delay={0.1}>
            <div>
              <FeatureLabel text="Reporting" />
              <FeatureHeading text="Monthly Reports You Actually Understand" />
              <FeatureBody text="No jargon, no walls of numbers. Every month you get a clear visual summary of where your money went, what changed, and what to watch for next quarter." />
              <a href="#" style={{ fontSize: 14, fontWeight: 600, color: LAVENDER_DARK, textDecoration: "none" }}>Learn more &rarr;</a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Feature 03 -- text left, card right */}
      <section style={{ background: "#FFFFFF", padding: "80px 40px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <FadeIn direction="left">
            <div>
              <FeatureLabel text="Advisory" />
              <FeatureHeading text="Year-Round Advisory, Not Just Tax Season" />
              <FeatureBody text="Quarterly check-ins, deadline reminders, estimated payment calendars, and strategic planning sessions. We are your financial co-pilot all year long." />
              <a href="#" style={{ fontSize: 14, fontWeight: 600, color: LAVENDER_DARK, textDecoration: "none" }}>Learn more &rarr;</a>
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.1}>
            <MockupShell>
              <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 18, fontFamily: RUBIK }}>Advisory Calendar</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {CAL_DAYS.map((item, i) => (
                  <div key={i} style={{ background: item.color, borderRadius: 10, padding: 14 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#0B0D0F66", textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{item.day}</div>
                    <div style={{ fontSize: 13, fontWeight: 600 }}>{item.label}</div>
                  </div>
                ))}
              </div>
            </MockupShell>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ background: "#FFFFFF", padding: "96px 40px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <FadeIn>
            <h2 style={{ fontFamily: RUBIK, fontWeight: 600, fontSize: "clamp(28px, 3vw, 40px)", textAlign: "center", color: BLACK, marginBottom: 48 }}>What Our Clients Say</h2>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {TESTIMONIALS.map((tm, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div style={{ background: tm.dark ? "#12141D" : "#FFFFFF", border: tm.dark ? "none" : `1.5px solid ${BORDER}`, borderRadius: 18, padding: "32px 28px" }}>
                  <div style={{ fontSize: 32, color: LAVENDER, lineHeight: 1, marginBottom: 16, fontFamily: RUBIK }}>&ldquo;</div>
                  <p style={{ fontSize: 15, color: tm.dark ? "rgba(255,255,255,0.85)" : "#444", lineHeight: 1.75, marginBottom: 24 }}>{tm.quote}</p>
                  <div style={{ fontSize: 14, fontWeight: 700, color: tm.dark ? "#FFFFFF" : BLACK, fontFamily: RUBIK }}>{tm.name}</div>
                  <div style={{ fontSize: 12, color: tm.dark ? "rgba(255,255,255,0.5)" : "#888", marginTop: 2 }}>{tm.role}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section style={{ padding: "96px 40px", background: `linear-gradient(to bottom, ${GRAY_BG} 50%, #FFFFFF 50%)` }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <FadeIn>
            <h2 style={{ fontFamily: RUBIK, fontWeight: 600, fontSize: "clamp(28px, 3vw, 40px)", textAlign: "center", color: BLACK, marginBottom: 12 }}>Simple, Transparent Pricing</h2>
            <p style={{ fontSize: 16, color: "#666", textAlign: "center", marginBottom: 56 }}>No surprises. No hidden fees.</p>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "start" }}>
            <FadeIn direction="left" delay={0.05}>
              <div style={{ background: "#FFFFFF", borderRadius: 20, border: `1.5px solid ${BORDER}`, padding: "40px 32px", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#888", marginBottom: 12 }}>Individual</div>
                <div style={{ fontFamily: RUBIK, fontWeight: 700, fontSize: 44, color: BLACK, marginBottom: 4 }}>{t.pricing?.[0]?.price ?? "$299"}</div>
                <div style={{ fontSize: 13, color: "#888", marginBottom: 28 }}>{t.pricing?.[0]?.period ?? "per return"}</div>
                <div style={{ fontSize: 14, color: "#555", lineHeight: 1.75, marginBottom: 28 }}>{t.pricing?.[0]?.description ?? "Everything you need for a complete and accurate individual return."}</div>
                {(t.pricing?.[0]?.features ?? FALLBACK_FEATURES_0).map((f, i) => (
                  <FeatureRow key={i} text={f.text} included={f.included} />
                ))}
                <button style={{ marginTop: 28, width: "100%", padding: 14, background: GRAY_BG, color: BLACK, border: `1.5px solid #DDDDDD`, borderRadius: 100, fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: RUBIK }}>
                  {t.pricing?.[0]?.buttonText ?? "Get Started"}
                </button>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.1}>
              <div style={{ background: LAVENDER, borderRadius: 20, padding: "40px 32px", boxShadow: "0 8px 40px rgba(196,176,255,0.4)" }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#0B0D0F99", marginBottom: 12 }}>Business</div>
                <div style={{ fontFamily: RUBIK, fontWeight: 700, fontSize: 44, color: BLACK, marginBottom: 4 }}>{t.pricing?.[1]?.price ?? "$799"}</div>
                <div style={{ fontSize: 13, color: "#0B0D0F88", marginBottom: 28 }}>{t.pricing?.[1]?.period ?? "per year"}</div>
                <div style={{ fontSize: 14, color: "#0B0D0FBB", lineHeight: 1.75, marginBottom: 28 }}>{t.pricing?.[1]?.description ?? "Full-service accounting, tax filing, and year-round advisory for growing businesses."}</div>
                {(t.pricing?.[1]?.features ?? FALLBACK_FEATURES_1).map((f, i) => (
                  <FeatureRow key={i} text={f.text} included={f.included} inverted />
                ))}
                <button style={{ marginTop: 28, width: "100%", padding: 14, background: BLACK, color: "#FFFFFF", border: "none", borderRadius: 100, fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: RUBIK }}>
                  {t.pricing?.[1]?.buttonText ?? "Get Started"}
                </button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "#FFFFFF", padding: "96px 40px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <FadeIn>
            <h2 style={{ fontFamily: RUBIK, fontWeight: 600, fontSize: "clamp(28px, 3vw, 40px)", textAlign: "center", color: BLACK, marginBottom: 52 }}>Common Questions</h2>
          </FadeIn>
          {t.faq.map((item, i) => (
            <FadeIn key={i} delay={i * 0.04}>
              <div style={{ borderTop: `1px solid ${BORDER}` }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: "100%", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "22px 0", textAlign: "left" }}>
                  <span style={{ fontSize: 16, fontWeight: 600, color: BLACK, fontFamily: RUBIK }}>{item.question}</span>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#C4B0FF33", flexShrink: 0, marginLeft: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, color: LAVENDER_DARK }}>
                    {openFaq === i ? "\u2212" : "\u002B"}
                  </div>
                </button>
                {openFaq === i && (
                  <p style={{ fontSize: 15, color: "#666", lineHeight: 1.8, margin: "0 0 22px" }}>{item.answer}</p>
                )}
              </div>
            </FadeIn>
          ))}
          <div style={{ borderTop: `1px solid ${BORDER}` }} />
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#FFFFFF", padding: "80px 40px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <FadeIn direction="left">
            <h2 style={{ fontFamily: RUBIK, fontWeight: 600, fontSize: "clamp(28px, 3vw, 44px)", lineHeight: 1.2, color: BLACK }}>
              Ready to stop stressing about taxes?
            </h2>
            <p style={{ fontSize: 16, color: "#666", marginTop: 16, lineHeight: 1.7 }}>Get a free 30-minute consultation with a licensed CPA. No obligation.</p>
          </FadeIn>
          <FadeIn direction="right" delay={0.1}>
            <div style={{ background: GRAY_BG, borderRadius: 20, padding: 32 }}>
              <div style={{ background: "#FFFFFF", borderRadius: 14, padding: 28, boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
                <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 16, fontFamily: RUBIK }}>Get your free consultation</div>
                <input type="email" placeholder="Enter your email" style={{ width: "100%", padding: "13px 16px", border: `1.5px solid ${BORDER}`, borderRadius: 10, fontSize: 14, outline: "none", marginBottom: 12, boxSizing: "border-box", fontFamily: "'Inter', sans-serif" }} />
                <button style={{ width: "100%", padding: 14, background: LAVENDER, color: BLACK, border: "none", borderRadius: 100, fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: RUBIK }}>
                  Book Free Consultation
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#282828", padding: "64px 40px 40px", position: "relative", overflow: "hidden" }}>
        <svg width="320" height="320" style={{ position: "absolute", top: -80, right: -60, opacity: 0.1, pointerEvents: "none" }} viewBox="0 0 320 320">
          <circle cx="160" cy="160" r="160" fill="#C4B0FF" />
        </svg>
        <svg width="200" height="200" style={{ position: "absolute", bottom: -40, left: -40, opacity: 0.07, pointerEvents: "none" }} viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="100" fill="#C4B0FF" />
        </svg>
        <div style={{ maxWidth: 1080, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, marginBottom: 48 }}>
            <div>
              <div style={{ fontFamily: RUBIK, fontWeight: 600, fontSize: 18, color: "#FFFFFF", marginBottom: 16 }}>{t.name}</div>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, maxWidth: 260 }}>Licensed CPAs helping individuals and businesses file accurately, save more, and plan ahead.</p>
            </div>
            {[
              { heading: "Services", links: ["Tax Preparation", "Bookkeeping", "Payroll", "Advisory"] },
              { heading: "Company", links: ["About", "Team", "Careers", "Blog"] },
              { heading: "Legal", links: ["Privacy Policy", "Terms of Use", "Disclosures"] },
            ].map(col => (
              <div key={col.heading}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.35)", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 16 }}>{col.heading}</div>
                {col.links.map(link => (
                  <a key={link} href="#" style={{ display: "block", fontSize: 14, color: "rgba(255,255,255,0.6)", textDecoration: "none", marginBottom: 10 }}>{link}</a>
                ))}
              </div>
            ))}
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.35)" }}>&copy; {new Date().getFullYear()} {t.name}. All rights reserved.</span>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.25)" }}>Licensed CPA Firm</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
