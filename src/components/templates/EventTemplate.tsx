"use client"

import type { TemplateConfig } from "@/data/templates"
import FadeIn from "@/components/motion/FadeIn"
import CountUp from "@/components/motion/CountUp"
import FloatingElement from "@/components/motion/FloatingElement"
import TestimonialGrid from "@/components/sections/TestimonialGrid"
import FAQ from "@/components/sections/FAQ"

export default function EventTemplate({ template: t }: { readonly template: TemplateConfig }) {
  const c = t.colors

  return (
    <div style={{ minHeight: "100vh", background: c.background, color: c.text, fontFamily: `'${t.fonts.body}', sans-serif` }}>
      {/* Hero: Full-bleed gradient, huge headline, countdown */}
      <section style={{
        padding: "120px 24px 80px",
        background: t.gradient,
        position: "relative", overflow: "hidden", textAlign: "center",
      }}>
        {/* Floating particles */}
        {Array.from({ length: 8 }, (_, i) => (
          <FloatingElement
            key={i}
            duration={6 + (i % 4) * 2}
            delay={i * 0.7}
            style={{
              position: "absolute",
              top: `${10 + (i * 11) % 80}%`,
              left: `${5 + (i * 13) % 90}%`,
              width: 4 + (i % 3) * 3,
              height: 4 + (i % 3) * 3,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.15)",
              pointerEvents: "none",
            }}
          >
            <div />
          </FloatingElement>
        ))}

        <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <FadeIn>
            <p style={{ fontSize: 14, letterSpacing: 3, color: c.accent, fontWeight: 700, marginBottom: 20 }}>
              JUNE 15-17, 2026 -- SAN FRANCISCO
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 style={{
              fontSize: "clamp(40px, 7vw, 80px)", fontWeight: 900, color: "#fff",
              lineHeight: 1.0, marginBottom: 24,
              fontFamily: `'${t.fonts.display}', sans-serif`,
              textTransform: "uppercase",
            }}>
              {t.hero.headline}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.7)", lineHeight: 1.7, maxWidth: 600, margin: "0 auto 40px" }}>
              {t.hero.subheadline}
            </p>
          </FadeIn>

          {/* Countdown */}
          <FadeIn delay={0.3}>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", marginBottom: 40, flexWrap: "wrap" }}>
              {[
                { value: "102", label: "Days" },
                { value: "14", label: "Hours" },
                { value: "37", label: "Minutes" },
                { value: "52", label: "Seconds" },
              ].map(item => (
                <div key={item.label} style={{
                  width: 80, padding: "16px 0",
                  background: "rgba(0,0,0,0.3)", borderRadius: 12,
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(8px)",
                  perspective: "200px",
                }}>
                  <div style={{
                    fontSize: 32, fontWeight: 800, color: "#fff",
                    fontFamily: `'${t.fonts.display}', sans-serif`,
                    transform: "rotateX(5deg)",
                  }}>
                    {item.value}
                  </div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", marginTop: 4, textTransform: "uppercase", letterSpacing: 1 }}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <button style={{
                padding: "18px 40px", background: c.accent, color: "#000",
                borderRadius: 10, fontSize: 16, fontWeight: 800, border: "none", cursor: "pointer",
                animation: "pulse-glow 2s ease-in-out infinite",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
              >
                {t.hero.cta}
              </button>
              <button style={{
                padding: "18px 40px", background: "rgba(255,255,255,0.1)", color: "#fff",
                borderRadius: 10, fontSize: 16, fontWeight: 600, border: "1px solid rgba(255,255,255,0.2)", cursor: "pointer",
              }}>
                {t.hero.secondaryCta}
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ padding: "40px 24px", background: c.surface, borderBottom: `1px solid ${c.border}` }}>
        <FadeIn>
          <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: 24 }}>
            {t.stats.map(stat => (
              <div key={stat.label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 32, fontWeight: 800, color: c.primary, fontFamily: `'${t.fonts.display}', sans-serif` }}>
                  <CountUp end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </div>
                <div style={{ fontSize: 13, color: c.textMuted, marginTop: 4 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Speakers Grid */}
      <section style={{ padding: "80px 24px", background: c.background }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <FadeIn>
            <h2 style={{ fontSize: 36, fontWeight: 900, textAlign: "center", marginBottom: 48, fontFamily: `'${t.fonts.display}', sans-serif`, textTransform: "uppercase" }}>
              Featured Speakers
            </h2>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24 }}>
            {[
              { name: "Dr. Sarah Chen", role: "AI Research Lead", org: "OpenAI" },
              { name: "Marcus Williams", role: "VP Engineering", org: "Google DeepMind" },
              { name: "Priya Patel", role: "CTO", org: "Anthropic" },
              { name: "James Rodriguez", role: "Founder", org: "Scale AI" },
            ].map((speaker, i) => (
              <FadeIn key={speaker.name} delay={i * 0.1}>
                <div style={{ textAlign: "center", padding: 24, borderRadius: 16, background: c.surface, border: `1px solid ${c.border}` }}>
                  <div style={{
                    width: 100, height: 100, borderRadius: "50%", margin: "0 auto 16px",
                    background: `linear-gradient(135deg, ${c.primary}44, ${c.primaryLight}44)`,
                    border: `2px solid ${c.primary}44`,
                    boxShadow: `0 0 20px ${c.primary}22`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 28, fontWeight: 800, color: c.primary,
                    fontFamily: `'${t.fonts.display}', sans-serif`,
                  }}>
                    {speaker.name.split(" ").slice(-1)[0][0]}
                  </div>
                  <h4 style={{ fontSize: 16, fontWeight: 700, color: c.text }}>{speaker.name}</h4>
                  <p style={{ fontSize: 13, color: c.textMuted }}>{speaker.role}</p>
                  <p style={{ fontSize: 12, color: c.primary, fontWeight: 600, marginTop: 4 }}>{speaker.org}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Agenda Timeline */}
      <section style={{ padding: "80px 24px", background: c.surface }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <FadeIn>
            <h2 style={{ fontSize: 36, fontWeight: 900, textAlign: "center", marginBottom: 48, fontFamily: `'${t.fonts.display}', sans-serif`, textTransform: "uppercase" }}>
              Event Schedule
            </h2>
          </FadeIn>
          <div style={{ position: "relative" }}>
            {/* Center line */}
            <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 2, background: c.border, transform: "translateX(-50%)" }} />
            {[
              { time: "Day 1 - 9:00 AM", title: "Opening Keynote", desc: "The State of AI: What is Real, What is Hype, and What is Next", side: "left" },
              { time: "Day 1 - 2:00 PM", title: "Workshop Track", desc: "Hands-on sessions: Fine-tuning LLMs, Building RAG Systems, Production ML Pipelines", side: "right" },
              { time: "Day 2 - 10:00 AM", title: "Panel: AI in Enterprise", desc: "How Fortune 500 companies are deploying AI at scale today", side: "left" },
              { time: "Day 2 - 4:00 PM", title: "Startup Showcase", desc: "50 hand-picked AI startups demo their products to investors and enterprise buyers", side: "right" },
              { time: "Day 3 - 11:00 AM", title: "Closing Keynote", desc: "The Road Ahead: AI Safety, Regulation, and the Next Frontier", side: "left" },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div style={{
                  display: "grid", gridTemplateColumns: "1fr 48px 1fr", gap: 0,
                  marginBottom: 32, alignItems: "center",
                }}>
                  <div style={{
                    padding: 20, borderRadius: 12,
                    background: item.side === "left" ? c.background : "transparent",
                    border: item.side === "left" ? `1px solid ${c.border}` : "none",
                    textAlign: "right",
                  }}>
                    {item.side === "left" && (
                      <>
                        <p style={{ fontSize: 12, color: c.primary, fontWeight: 600, marginBottom: 4 }}>{item.time}</p>
                        <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>{item.title}</h4>
                        <p style={{ fontSize: 13, color: c.textMuted, lineHeight: 1.5 }}>{item.desc}</p>
                      </>
                    )}
                  </div>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <div style={{
                      width: 16, height: 16, borderRadius: "50%",
                      background: c.primary, border: `3px solid ${c.surface}`,
                      boxShadow: `0 0 0 2px ${c.primary}`,
                      zIndex: 1,
                    }} />
                  </div>
                  <div style={{
                    padding: 20, borderRadius: 12,
                    background: item.side === "right" ? c.background : "transparent",
                    border: item.side === "right" ? `1px solid ${c.border}` : "none",
                  }}>
                    {item.side === "right" && (
                      <>
                        <p style={{ fontSize: 12, color: c.primary, fontWeight: 600, marginBottom: 4 }}>{item.time}</p>
                        <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>{item.title}</h4>
                        <p style={{ fontSize: 13, color: c.textMuted, lineHeight: 1.5 }}>{item.desc}</p>
                      </>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section style={{ padding: "64px 24px", background: c.background }}>
        <FadeIn>
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <p style={{ fontSize: 13, letterSpacing: 2, textTransform: "uppercase", color: c.textMuted, marginBottom: 24, fontWeight: 600 }}>
              Sponsored By
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: 16 }}>
              {["NVIDIA", "Microsoft", "AWS", "Google Cloud", "Meta AI", "Databricks"].map(name => (
                <div key={name} style={{
                  padding: 20, borderRadius: 12,
                  background: c.surface, border: `1px solid ${c.border}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <span style={{ fontSize: 14, fontWeight: 700, color: c.textMuted }}>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Early Bird CTA */}
      <section style={{
        padding: "80px 24px", background: t.gradient,
        textAlign: "center", position: "relative", overflow: "hidden",
      }}>
        <div style={{ maxWidth: 600, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <FadeIn>
            <p style={{ fontSize: 16, color: c.accent, fontWeight: 700, marginBottom: 12 }}>
              Only 47 Spots Remaining
            </p>
            <h2 style={{
              fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 900, color: "#fff",
              marginBottom: 16, fontFamily: `'${t.fonts.display}', sans-serif`,
              textTransform: "uppercase",
            }}>
              Early Bird Pricing Ends May 1
            </h2>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.7)", marginBottom: 32 }}>
              Lock in your ticket at 40% off before prices go up. Group discounts available for teams of 5+.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <button style={{
                padding: "18px 40px", background: c.accent, color: "#000",
                borderRadius: 10, fontSize: 17, fontWeight: 800, border: "none", cursor: "pointer",
                animation: "pulse-glow 2s ease-in-out infinite",
              }}>
                Get Tickets - $299
              </button>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", textDecoration: "line-through" }}>$499</span>
                <span style={{ fontSize: 14, color: c.accent, fontWeight: 700 }}>Save $200</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialGrid
        testimonials={t.testimonials}
        backgroundColor={c.surface}
        cardBackground={c.background}
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
      />

      {/* Footer */}
      <footer style={{ padding: "32px 24px", textAlign: "center", borderTop: `1px solid ${c.border}`, background: c.surface }}>
        <p style={{ fontSize: 13, color: c.textMuted }}>{t.name} Template -- Partner Portal Templates</p>
      </footer>
    </div>
  )
}
