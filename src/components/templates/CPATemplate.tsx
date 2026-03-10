"use client"

import { useState } from "react"
import type { TemplateConfig } from "@/data/templates"
import FadeIn from "@/components/motion/FadeIn"
import CountUp from "@/components/motion/CountUp"
import * as Accordion from "@radix-ui/react-accordion"
import * as Checkbox from "@radix-ui/react-checkbox"

const LAVENDER = "#C4B0FF"
const LAVENDER_DARK = "#7B5EE8"
const BLACK = "#0B0D0F"
const GRAY_BG = "#F5F5F5"
const BORDER = "#EBEBEB"
const RUBIK = "'Rubik', sans-serif"
const INTER = "'Inter', sans-serif"

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
        fontSize: 10, color: included ? (inverted ? BLACK : LAVENDER_DARK) : "#AAA",
      }}>
        {included ? "\u2713" : "\u2013"}
      </div>
      <span style={{ fontSize: 14, color: included ? (inverted ? "#0B0D0FCC" : BLACK) : (inverted ? "#0B0D0F66" : "#999") }}>{text}</span>
    </div>
  )
}

function MockupShell({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: GRAY_BG, borderRadius: 20, padding: "clamp(16px, 3vw, 32px)", maxWidth: "100%" }}>
      <div style={{ background: "#FFFFFF", borderRadius: 14, padding: "clamp(16px, 2vw, 24px)", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
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
    <p style={{ fontSize: 16, color: "#555", lineHeight: 1.8, marginBottom: 28 }}>{text}</p>
  )
}

function ChecklistItem({ text, done }: { text: string; done: boolean }) {
  const [checked, setChecked] = useState(done)

  return (
    <label style={{
      display: "flex", alignItems: "center", gap: 12,
      padding: "10px 0", cursor: "pointer",
      userSelect: "none" as const,
    }}>
      <Checkbox.Root
        checked={checked}
        onCheckedChange={(val) => setChecked(val === true)}
        style={{
          width: 22, height: 22, borderRadius: "50%", flexShrink: 0,
          background: checked ? LAVENDER : "#F0F0F0",
          border: checked ? "none" : "1.5px solid #DDD",
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer",
          transition: "background 0.15s, border-color 0.15s",
        }}
      >
        <Checkbox.Indicator style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          animation: "checkPop 0.2s ease",
        }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={BLACK} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </Checkbox.Indicator>
      </Checkbox.Root>
      <span style={{
        fontSize: 14,
        color: checked ? BLACK : "#777",
        textDecoration: checked ? "none" : "none",
        transition: "color 0.15s",
      }}>
        {text}
      </span>
    </label>
  )
}

export default function CPATemplate({ template: t }: { readonly template: TemplateConfig }) {
  return (
    <div style={{ minHeight: "100vh", background: "#FFFFFF", color: BLACK, fontFamily: INTER }}>

      {/* Nav */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 100,
        background: GRAY_BG, borderBottom: `1px solid ${BORDER}`,
        padding: "0 clamp(16px, 3vw, 40px)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 64, gap: 16,
      }}>
        <span style={{ fontFamily: RUBIK, fontWeight: 600, fontSize: 18, flexShrink: 0 }}>{t.name}</span>
        <div style={{ display: "flex", gap: "clamp(16px, 2.5vw, 36px)", overflow: "hidden" }}>
          {["Services", "About", "Pricing", "Contact"].map(link => (
            <a key={link} href="#" style={{ fontSize: 14, fontWeight: 500, color: "#555", textDecoration: "none", whiteSpace: "nowrap" }}>{link}</a>
          ))}
        </div>
        <button style={{
          padding: "10px 22px", background: LAVENDER_DARK, color: "#FFFFFF",
          border: "none", borderRadius: 100, fontSize: 14, fontWeight: 600,
          cursor: "pointer", fontFamily: RUBIK, flexShrink: 0,
          transition: "opacity 0.2s",
        }}>
          Get Started
        </button>
      </nav>

      {/* Hero */}
      <section style={{ background: GRAY_BG, padding: "clamp(48px, 6vw, 80px) clamp(16px, 3vw, 40px) 0", textAlign: "center" }}>
        <FadeIn>
          <h1 style={{ fontFamily: RUBIK, fontWeight: 600, fontSize: "clamp(36px, 5.5vw, 76px)", lineHeight: 1.1, letterSpacing: "-1px", maxWidth: 800, margin: "0 auto 24px", color: BLACK }}>
            {t.hero.headline}
          </h1>
          <p style={{ fontSize: 18, color: "#555", maxWidth: 540, margin: "0 auto 36px", lineHeight: 1.7 }}>{t.hero.subheadline}</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginBottom: "clamp(36px, 5vw, 64px)", flexWrap: "wrap" }}>
            <button style={{
              padding: "14px 30px", background: LAVENDER_DARK, color: "#FFFFFF",
              border: "none", borderRadius: 100, fontSize: 15, fontWeight: 600,
              cursor: "pointer", fontFamily: RUBIK,
              transition: "opacity 0.2s",
            }}>
              {t.hero.cta}
            </button>
            {t.hero.secondaryCta && (
              <button style={{ padding: "14px 30px", background: "transparent", color: BLACK, border: "1.5px solid #CCCCCC", borderRadius: 100, fontSize: 15, fontWeight: 500, cursor: "pointer" }}>
                {t.hero.secondaryCta}
              </button>
            )}
          </div>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ background: "#FFFFFF", borderRadius: "16px 16px 0 0", boxShadow: "0 -4px 60px rgba(0,0,0,0.10)", padding: "clamp(20px, 2.5vw, 28px) clamp(20px, 2.5vw, 32px)", width: "100%", maxWidth: 560, position: "relative" }}>
              <div style={{ position: "absolute", top: -18, right: "clamp(16px, 3vw, 32px)", background: "#FFFFFF", border: `1.5px solid ${BORDER}`, borderRadius: 12, padding: "10px 16px", display: "flex", alignItems: "center", gap: 8, boxShadow: "0 4px 20px rgba(0,0,0,0.09)", zIndex: 10 }}>
                <div style={{ width: 22, height: 22, borderRadius: "50%", background: LAVENDER, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700 }}>{"\u2713"}</div>
                <span style={{ fontSize: 13, fontWeight: 700, fontFamily: RUBIK }}>99.7% Accuracy</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16, paddingBottom: 12, borderBottom: "1px solid #F0F0F0" }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: "#777", letterSpacing: 1, textTransform: "uppercase" }}>Category</span>
                <span style={{ fontSize: 12, fontWeight: 700, color: "#777", letterSpacing: 1, textTransform: "uppercase" }}>Amount</span>
              </div>
              {[["Business Income", "$184,500"], ["Deductible Expenses", "$62,300"], ["Depreciation", "$11,200"]].map(([cat, amt]) => (
                <div key={cat} style={{ display: "flex", justifyContent: "space-between", padding: "11px 0", borderBottom: "1px solid #F8F8F8" }}>
                  <span style={{ fontSize: 14, color: "#444" }}>{cat}</span>
                  <span style={{ fontSize: 14, fontWeight: 600 }}>{amt}</span>
                </div>
              ))}
              <div style={{ display: "flex", justifyContent: "space-between", padding: "13px 16px", marginTop: 10, background: "#C4B0FF22", borderRadius: 10, border: "1.5px solid #C4B0FF55" }}>
                <span style={{ fontSize: 14, fontWeight: 700, fontFamily: RUBIK }}>Estimated Tax Owed</span>
                <span style={{ fontSize: 14, fontWeight: 700, color: LAVENDER_DARK }}>$22,140</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Logo bar */}
      <section style={{ background: GRAY_BG, borderBottom: `1px solid ${BORDER}`, padding: "28px clamp(16px, 3vw, 40px)" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: 24 }}>
          {["AICPA", "QuickBooks", "Xero", "IRS e-file", "State CPA Board", "PCAOB"].map(logo => (
            <span key={logo} style={{ fontSize: 13, fontWeight: 700, color: "#777", letterSpacing: 0.5, textTransform: "uppercase" }}>{logo}</span>
          ))}
        </div>
      </section>

      {/* Why Us */}
      <section style={{ background: "#FFFFFF", padding: "clamp(56px, 7vw, 96px) clamp(16px, 3vw, 40px)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "clamp(40px, 5vw, 80px)", alignItems: "center" }}>
          <FadeIn direction="left">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 16 }}>
              {MINI_STATS.map((s, i) => (
                <div key={s.label} style={{ background: i % 2 === 0 ? "#F8F7FF" : "#FFFFFF", border: `1.5px solid ${BORDER}`, borderRadius: 16, padding: "24px 20px" }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#C4B0FF33", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                    <div style={{ width: 14, height: 14, background: LAVENDER_DARK, borderRadius: 3 }} />
                  </div>
                  <div style={{ fontSize: 28, fontWeight: 700, color: BLACK, fontFamily: RUBIK, lineHeight: 1 }}>
                    <CountUp end={s.value} prefix={s.prefix} suffix={s.suffix} />
                  </div>
                  <div style={{ fontSize: 13, color: "#666", marginTop: 6 }}>{s.label}</div>
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
              <p style={{ fontSize: 16, color: "#555", lineHeight: 1.8 }}>
                We bring licensed CPAs, modern software, and a proactive mindset together. Accurate filings, real savings, and an advisor who actually answers the phone -- all year, not just in April.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Feature 01 -- text left, card right (Radix Checkbox checklist) */}
      <section style={{ background: "#FFFFFF", padding: "clamp(48px, 6vw, 80px) clamp(16px, 3vw, 40px)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "clamp(40px, 5vw, 80px)", alignItems: "center" }}>
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
                <div key={i} style={{ borderBottom: i < CHECKLIST.length - 1 ? "1px solid #F2F2F2" : "none" }}>
                  <ChecklistItem text={item.text} done={item.done} />
                </div>
              ))}
            </MockupShell>
          </FadeIn>
        </div>
      </section>

      {/* Feature 02 -- card left, text right */}
      <section style={{ background: "#FFFFFF", padding: "clamp(48px, 6vw, 80px) clamp(16px, 3vw, 40px)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "clamp(40px, 5vw, 80px)", alignItems: "center" }}>
          <FadeIn direction="left">
            <MockupShell>
              <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 20, fontFamily: RUBIK }}>Monthly Report -- Q3 2024</div>
              {REPORT_BARS.map(bar => (
                <div key={bar.label} style={{ marginBottom: 16 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <span style={{ fontSize: 12, color: "#555" }}>{bar.label}</span>
                    <span style={{ fontSize: 12, fontWeight: 600 }}>{bar.pct}%</span>
                  </div>
                  <div style={{ height: 8, background: "#F0F0F0", borderRadius: 100, overflow: "hidden" }}>
                    <div style={{ height: "100%", width: `${bar.pct}%`, background: bar.accent ? LAVENDER_DARK : "#DDDDDD", borderRadius: 100, transition: "width 0.6s ease" }} />
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
      <section style={{ background: "#FFFFFF", padding: "clamp(48px, 6vw, 80px) clamp(16px, 3vw, 40px)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "clamp(40px, 5vw, 80px)", alignItems: "center" }}>
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
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#555", textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{item.day}</div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#333" }}>{item.label}</div>
                  </div>
                ))}
              </div>
            </MockupShell>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ background: "#FFFFFF", padding: "clamp(56px, 7vw, 96px) clamp(16px, 3vw, 40px)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <FadeIn>
            <h2 style={{ fontFamily: RUBIK, fontWeight: 600, fontSize: "clamp(28px, 3vw, 40px)", textAlign: "center", color: BLACK, marginBottom: 48 }}>What Our Clients Say</h2>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {TESTIMONIALS.map((tm, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div style={{ background: tm.dark ? "#12141D" : "#FFFFFF", border: tm.dark ? "none" : `1.5px solid ${BORDER}`, borderRadius: 18, padding: "clamp(24px, 3vw, 32px) clamp(20px, 2.5vw, 28px)" }}>
                  <div style={{ fontSize: 32, color: LAVENDER, lineHeight: 1, marginBottom: 16, fontFamily: RUBIK }}>&ldquo;</div>
                  <p style={{ fontSize: 15, color: tm.dark ? "rgba(255,255,255,0.85)" : "#444", lineHeight: 1.75, marginBottom: 24 }}>{tm.quote}</p>
                  <div style={{ fontSize: 14, fontWeight: 700, color: tm.dark ? "#FFFFFF" : BLACK, fontFamily: RUBIK }}>{tm.name}</div>
                  <div style={{ fontSize: 12, color: tm.dark ? "rgba(255,255,255,0.6)" : "#666", marginTop: 2 }}>{tm.role}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section style={{ padding: "clamp(56px, 7vw, 96px) clamp(16px, 3vw, 40px)", background: `linear-gradient(to bottom, ${GRAY_BG} 50%, #FFFFFF 50%)` }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <FadeIn>
            <h2 style={{ fontFamily: RUBIK, fontWeight: 600, fontSize: "clamp(28px, 3vw, 40px)", textAlign: "center", color: BLACK, marginBottom: 12 }}>Simple, Transparent Pricing</h2>
            <p style={{ fontSize: 16, color: "#555", textAlign: "center", marginBottom: 56 }}>No surprises. No hidden fees.</p>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, alignItems: "start" }}>
            <FadeIn direction="left" delay={0.05}>
              <div style={{ background: "#FFFFFF", borderRadius: 20, border: `1.5px solid ${BORDER}`, padding: "clamp(28px, 3vw, 40px) clamp(24px, 2.5vw, 32px)", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#666", marginBottom: 12 }}>Individual</div>
                <div style={{ fontFamily: RUBIK, fontWeight: 700, fontSize: 44, color: BLACK, marginBottom: 4 }}>{t.pricing?.[0]?.price ?? "$299"}</div>
                <div style={{ fontSize: 13, color: "#666", marginBottom: 28 }}>{t.pricing?.[0]?.period ?? "per return"}</div>
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
              <div style={{ background: LAVENDER_DARK, borderRadius: 20, padding: "clamp(28px, 3vw, 40px) clamp(24px, 2.5vw, 32px)", boxShadow: "0 8px 40px rgba(123,94,232,0.35)" }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "rgba(255,255,255,0.7)", marginBottom: 12 }}>Business</div>
                <div style={{ fontFamily: RUBIK, fontWeight: 700, fontSize: 44, color: "#FFFFFF", marginBottom: 4 }}>{t.pricing?.[1]?.price ?? "$799"}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", marginBottom: 28 }}>{t.pricing?.[1]?.period ?? "per year"}</div>
                <div style={{ fontSize: 14, color: "rgba(255,255,255,0.8)", lineHeight: 1.75, marginBottom: 28 }}>{t.pricing?.[1]?.description ?? "Full-service accounting, tax filing, and year-round advisory for growing businesses."}</div>
                {(t.pricing?.[1]?.features ?? FALLBACK_FEATURES_1).map((f, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
                    <div style={{
                      width: 18, height: 18, borderRadius: "50%", flexShrink: 0,
                      background: f.included ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.08)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 10, color: f.included ? "#FFFFFF" : "rgba(255,255,255,0.4)",
                    }}>
                      {f.included ? "\u2713" : "\u2013"}
                    </div>
                    <span style={{ fontSize: 14, color: f.included ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.45)" }}>{f.text}</span>
                  </div>
                ))}
                <button style={{ marginTop: 28, width: "100%", padding: 14, background: "#FFFFFF", color: LAVENDER_DARK, border: "none", borderRadius: 100, fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: RUBIK }}>
                  {t.pricing?.[1]?.buttonText ?? "Get Started"}
                </button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ -- Radix Accordion */}
      <section style={{ background: "#FFFFFF", padding: "clamp(56px, 7vw, 96px) clamp(16px, 3vw, 40px)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <FadeIn>
            <h2 style={{ fontFamily: RUBIK, fontWeight: 600, fontSize: "clamp(28px, 3vw, 40px)", textAlign: "center", color: BLACK, marginBottom: 52 }}>Common Questions</h2>
          </FadeIn>
          <Accordion.Root type="single" collapsible>
            {t.faq.map((item, i) => (
              <FadeIn key={i} delay={i * 0.04}>
                <Accordion.Item value={`faq-${i}`} style={{ borderTop: `1px solid ${BORDER}` }}>
                  <Accordion.Header style={{ margin: 0 }}>
                    <Accordion.Trigger style={{
                      width: "100%", background: "none", border: "none", cursor: "pointer",
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                      padding: "22px 0", textAlign: "left", fontFamily: INTER,
                      gap: 16,
                    }}>
                      <span style={{ fontSize: 16, fontWeight: 600, color: BLACK, fontFamily: RUBIK }}>{item.question}</span>
                      <div style={{
                        width: 28, height: 28, borderRadius: "50%",
                        background: "#C4B0FF33", flexShrink: 0,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 18, color: LAVENDER_DARK,
                        transition: "transform 0.2s",
                      }}>
                        {"\u002B"}
                      </div>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content style={{
                    overflow: "hidden",
                    animation: "slideDown 0.2s ease",
                  }}>
                    <p style={{ fontSize: 15, color: "#555", lineHeight: 1.8, margin: "0 0 22px" }}>{item.answer}</p>
                  </Accordion.Content>
                </Accordion.Item>
              </FadeIn>
            ))}
            <div style={{ borderTop: `1px solid ${BORDER}` }} />
          </Accordion.Root>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#FFFFFF", padding: "clamp(48px, 6vw, 80px) clamp(16px, 3vw, 40px)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "clamp(40px, 5vw, 80px)", alignItems: "center" }}>
          <FadeIn direction="left">
            <h2 style={{ fontFamily: RUBIK, fontWeight: 600, fontSize: "clamp(28px, 3vw, 44px)", lineHeight: 1.2, color: BLACK }}>
              Ready to stop stressing about taxes?
            </h2>
            <p style={{ fontSize: 16, color: "#555", marginTop: 16, lineHeight: 1.7 }}>Get a free 30-minute consultation with a licensed CPA. No obligation.</p>
          </FadeIn>
          <FadeIn direction="right" delay={0.1}>
            <div style={{ background: GRAY_BG, borderRadius: 20, padding: "clamp(16px, 3vw, 32px)" }}>
              <div style={{ background: "#FFFFFF", borderRadius: 14, padding: "clamp(20px, 2.5vw, 28px)", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
                <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 16, fontFamily: RUBIK }}>Get your free consultation</div>
                <input type="email" placeholder="Enter your email" style={{ width: "100%", padding: "13px 16px", border: `1.5px solid ${BORDER}`, borderRadius: 10, fontSize: 14, outline: "none", marginBottom: 12, boxSizing: "border-box", fontFamily: INTER }} />
                <button style={{
                  width: "100%", padding: 14, background: LAVENDER_DARK, color: "#FFFFFF",
                  border: "none", borderRadius: 100, fontSize: 14, fontWeight: 700,
                  cursor: "pointer", fontFamily: RUBIK,
                  transition: "opacity 0.2s",
                }}>
                  Book Free Consultation
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#1E1E1E", padding: "clamp(40px, 5vw, 64px) clamp(16px, 3vw, 40px) clamp(28px, 3vw, 40px)", position: "relative", overflow: "hidden" }}>
        <svg width="320" height="320" style={{ position: "absolute", top: -80, right: -60, opacity: 0.08, pointerEvents: "none" }} viewBox="0 0 320 320">
          <circle cx="160" cy="160" r="160" fill={LAVENDER_DARK} />
        </svg>
        <svg width="200" height="200" style={{ position: "absolute", bottom: -40, left: -40, opacity: 0.05, pointerEvents: "none" }} viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="100" fill={LAVENDER_DARK} />
        </svg>
        <div style={{ maxWidth: 1080, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "clamp(24px, 3vw, 40px)", marginBottom: 48 }}>
            <div>
              <div style={{ fontFamily: RUBIK, fontWeight: 600, fontSize: 18, color: "#FFFFFF", marginBottom: 16 }}>{t.name}</div>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, maxWidth: 260 }}>Licensed CPAs helping individuals and businesses file accurately, save more, and plan ahead.</p>
            </div>
            {[
              { heading: "Services", links: ["Tax Preparation", "Bookkeeping", "Payroll", "Advisory"] },
              { heading: "Company", links: ["About", "Team", "Careers", "Blog"] },
              { heading: "Legal", links: ["Privacy Policy", "Terms of Use", "Disclosures"] },
            ].map(col => (
              <div key={col.heading}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.45)", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 16 }}>{col.heading}</div>
                {col.links.map(link => (
                  <a key={link} href="#" style={{ display: "block", fontSize: 14, color: "rgba(255,255,255,0.65)", textDecoration: "none", marginBottom: 10 }}>{link}</a>
                ))}
              </div>
            ))}
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>&copy; {new Date().getFullYear()} {t.name}. All rights reserved.</span>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.35)" }}>Licensed CPA Firm</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
