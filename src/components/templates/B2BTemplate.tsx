"use client"

import { useState } from "react"
import type { TemplateConfig, Feature } from "@/data/templates"
import FadeIn from "@/components/motion/FadeIn"
import CountUp from "@/components/motion/CountUp"
import TestimonialGrid from "@/components/sections/TestimonialGrid"
import FAQ from "@/components/sections/FAQ"
import CTABanner from "@/components/sections/CTABanner"
import * as Tabs from "@radix-ui/react-tabs"
import * as Tooltip from "@radix-ui/react-tooltip"

const SERVICE_CATEGORIES: Record<string, readonly string[]> = {
  "Strategy": ["Brand Strategy", "Sales Enablement"],
  "Marketing": ["Growth Marketing", "Content & SEO"],
  "Digital": ["Digital Transformation", "Performance Creative"],
}

export default function B2BTemplate({ template: t }: { readonly template: TemplateConfig }) {
  const c = t.colors
  const [activeTab, setActiveTab] = useState("All")

  const categoryNames = ["All", ...Object.keys(SERVICE_CATEGORIES)]

  const filteredFeatures = activeTab === "All"
    ? t.features
    : t.features.filter(f => {
        const titles = SERVICE_CATEGORIES[activeTab]
        return titles ? titles.includes(f.title) : false
      })

  return (
    <Tooltip.Provider delayDuration={300}>
      <div style={{ minHeight: "100vh", background: c.background, color: c.text, fontFamily: `'${t.fonts.body}', sans-serif` }}>
        {/* Hero: Bold editorial black/white + amber */}
        <section style={{
          padding: "clamp(80px, 10vw, 120px) 24px clamp(48px, 6vw, 80px)",
          textAlign: "center",
          position: "relative",
          background: c.primary,
        }}>
          <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <FadeIn>
              <div style={{ width: 48, height: 3, background: c.accent, margin: "0 auto 24px" }} />
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 style={{
                fontSize: "clamp(36px, 6vw, 72px)", fontWeight: 700, color: "#fff",
                lineHeight: 1.05, marginBottom: 24,
                fontFamily: `'${t.fonts.display}', serif`,
              }}>
                {t.hero.headline}
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p style={{ fontSize: "clamp(16px, 2vw, 18px)", color: "rgba(255,255,255,0.8)", lineHeight: 1.7, maxWidth: 560, margin: "0 auto 36px" }}>
                {t.hero.subheadline}
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                <button style={{
                  padding: "16px 36px", background: c.accent, color: "#fff",
                  borderRadius: 0, fontSize: 15, fontWeight: 700, border: "none", cursor: "pointer",
                  letterSpacing: 1, textTransform: "uppercase",
                  transition: "transform 0.2s ease",
                }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
                >
                  {t.hero.cta}
                </button>
                <button style={{
                  padding: "16px 36px", background: "transparent", color: "rgba(255,255,255,0.8)",
                  borderRadius: 0, fontSize: 15, fontWeight: 600, border: "1px solid rgba(255,255,255,0.3)", cursor: "pointer",
                  letterSpacing: 1, textTransform: "uppercase",
                }}>
                  {t.hero.secondaryCta}
                </button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Clients strip: grayscale logos */}
        <section style={{ padding: "40px 24px", borderBottom: `1px solid ${c.border}` }}>
          <FadeIn>
            <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap", opacity: 0.45 }}>
              {["Google", "McKinsey", "Deloitte", "Salesforce", "HubSpot"].map(name => (
                <span key={name} style={{ fontSize: 17, fontWeight: 700, color: c.text, letterSpacing: "-0.01em" }}>{name}</span>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* Services Grid with Radix Tabs */}
        <section style={{ padding: "clamp(48px, 6vw, 80px) 24px", maxWidth: 1060, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <div style={{ width: 36, height: 3, background: c.accent, margin: "0 auto 16px" }} />
              <h2 style={{ fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 700, fontFamily: `'${t.fonts.display}', serif` }}>
                What We Do
              </h2>
            </div>
          </FadeIn>

          <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
            <FadeIn delay={0.05}>
              <Tabs.List style={{
                display: "flex", justifyContent: "center", gap: 4, marginBottom: 40,
                flexWrap: "wrap",
              }}>
                {categoryNames.map(cat => (
                  <Tabs.Trigger
                    key={cat}
                    value={cat}
                    style={{
                      padding: "10px 24px",
                      fontSize: 14,
                      fontWeight: 600,
                      letterSpacing: "0.02em",
                      textTransform: "uppercase",
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.25s ease",
                      background: activeTab === cat ? c.accent : "transparent",
                      color: activeTab === cat ? "#fff" : c.textMuted,
                      borderBottom: activeTab === cat ? `2px solid ${c.accent}` : "2px solid transparent",
                      fontFamily: `'${t.fonts.body}', sans-serif`,
                    }}
                  >
                    {cat}
                  </Tabs.Trigger>
                ))}
              </Tabs.List>
            </FadeIn>

            {categoryNames.map(cat => (
              <Tabs.Content key={cat} value={cat}>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
                  gap: 1,
                  background: c.border,
                }}>
                  {(cat === "All" ? t.features : t.features.filter(f => {
                    const titles = SERVICE_CATEGORIES[cat]
                    return titles ? titles.includes(f.title) : false
                  })).map((feature, i) => (
                    <FadeIn key={feature.title} delay={i * 0.05}>
                      <Tooltip.Root>
                        <Tooltip.Trigger asChild>
                          <div
                            style={{
                              padding: "clamp(20px, 3vw, 32px)", background: c.background,
                              transition: "background 0.3s ease",
                              cursor: "default",
                            }}
                            onMouseEnter={e => e.currentTarget.style.background = c.surface}
                            onMouseLeave={e => e.currentTarget.style.background = c.background}
                          >
                            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8, fontFamily: `'${t.fonts.display}', serif` }}>
                              {feature.title}
                            </h3>
                            <p style={{ fontSize: 14, color: c.textMuted, lineHeight: 1.7 }}>
                              {feature.description}
                            </p>
                          </div>
                        </Tooltip.Trigger>
                        <Tooltip.Portal>
                          <Tooltip.Content
                            sideOffset={8}
                            style={{
                              background: c.primary,
                              color: "#fff",
                              padding: "12px 16px",
                              borderRadius: 6,
                              fontSize: 13,
                              lineHeight: 1.6,
                              maxWidth: 280,
                              boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
                              zIndex: 50,
                              fontFamily: `'${t.fonts.body}', sans-serif`,
                            }}
                          >
                            <strong style={{ display: "block", marginBottom: 4 }}>{feature.title}</strong>
                            {feature.description}
                            <Tooltip.Arrow style={{ fill: c.primary }} />
                          </Tooltip.Content>
                        </Tooltip.Portal>
                      </Tooltip.Root>
                    </FadeIn>
                  ))}
                </div>
              </Tabs.Content>
            ))}
          </Tabs.Root>
        </section>

        {/* Case Study Spotlight */}
        <section style={{ padding: "clamp(48px, 6vw, 80px) 24px", background: c.surface }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <FadeIn>
              <div style={{
                padding: "clamp(24px, 4vw, 48px)", position: "relative",
                borderLeft: `4px solid ${c.accent}`,
              }}>
                <p style={{ fontSize: 13, letterSpacing: 2, textTransform: "uppercase", color: c.accent, fontWeight: 600, marginBottom: 16 }}>
                  Case Study
                </p>
                <h3 style={{ fontSize: "clamp(22px, 3vw, 28px)", fontWeight: 700, marginBottom: 24, fontFamily: `'${t.fonts.display}', serif` }}>
                  How TechBridge Grew Revenue 280% in 18 Months
                </h3>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 140px), 1fr))",
                  gap: "clamp(16px, 3vw, 32px)",
                  marginBottom: 32,
                }}>
                  {[
                    { label: "Before", value: "$1.2M ARR" },
                    { label: "After", value: "$4.6M ARR" },
                    { label: "ROI", value: "340%" },
                  ].map(item => (
                    <div key={item.label}>
                      <div style={{ fontSize: 12, color: c.textMuted, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{item.label}</div>
                      <div style={{ fontSize: "clamp(22px, 3vw, 28px)", fontWeight: 800, color: c.text, fontFamily: `'${t.fonts.display}', serif` }}>{item.value}</div>
                    </div>
                  ))}
                </div>
                <blockquote style={{ fontSize: 16, color: c.textMuted, fontStyle: "italic", lineHeight: 1.7 }}>
                  &ldquo;They did not just improve our marketing. They fundamentally changed how we think about growth.&rdquo;
                </blockquote>
                <p style={{ fontSize: 14, fontWeight: 600, color: c.text, marginTop: 12 }}>-- Robert Hayes, CEO at TechBridge Solutions</p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Results / Metrics row */}
        <section style={{ padding: "clamp(40px, 5vw, 64px) 24px", background: c.primary }}>
          <FadeIn>
            <div style={{ maxWidth: 960, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 180px), 1fr))", gap: 32 }}>
              {t.stats.map(stat => (
                <div key={stat.label} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: c.accent, fontFamily: `'${t.fonts.display}', serif` }}>
                    <CountUp end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                  </div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", marginTop: 8 }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* Team */}
        <section style={{ padding: "clamp(48px, 6vw, 80px) 24px", maxWidth: 960, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div style={{ width: 36, height: 3, background: c.accent, margin: "0 auto 16px" }} />
              <h2 style={{ fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 700, fontFamily: `'${t.fonts.display}', serif` }}>Our Team</h2>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))", gap: 32 }}>
            {[
              { name: "Alex Morgan", title: "Managing Partner" },
              { name: "Jessica Lee", title: "Strategy Director" },
              { name: "Ryan Brooks", title: "Creative Lead" },
              { name: "Maria Santos", title: "Growth Lead" },
            ].map((person, i) => (
              <FadeIn key={person.name} delay={i * 0.1}>
                <div style={{ textAlign: "center" }}>
                  <div style={{
                    width: 100, height: 100, borderRadius: "50%", margin: "0 auto 16px",
                    background: `linear-gradient(135deg, ${c.border}, ${c.accent}33)`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 32, fontWeight: 700, color: c.accent, fontFamily: `'${t.fonts.display}', serif`,
                  }}>
                    {person.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <h4 style={{ fontSize: 16, fontWeight: 700 }}>{person.name}</h4>
                  <p style={{ fontSize: 13, color: c.textMuted }}>{person.title}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section style={{ padding: "clamp(48px, 6vw, 80px) 24px", background: c.surface }}>
          <div style={{ maxWidth: 560, margin: "0 auto" }}>
            <FadeIn>
              <div style={{ textAlign: "center", marginBottom: 40 }}>
                <div style={{ width: 36, height: 3, background: c.accent, margin: "0 auto 16px" }} />
                <h2 style={{ fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 700, fontFamily: `'${t.fonts.display}', serif` }}>Get in Touch</h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {["Your Name", "Email Address", "Company"].map(label => (
                  <div key={label}>
                    <label style={{ fontSize: 13, fontWeight: 600, display: "block", marginBottom: 6 }}>{label}</label>
                    <input
                      type="text"
                      placeholder={label}
                      style={{
                        width: "100%", padding: "14px 16px",
                        border: `1px solid ${c.border}`, borderRadius: 0,
                        fontSize: 15, background: c.background, color: c.text, outline: "none",
                        transition: "border-color 0.2s",
                        minHeight: 48,
                      }}
                      onFocus={e => e.currentTarget.style.borderColor = c.accent}
                      onBlur={e => e.currentTarget.style.borderColor = c.border}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ fontSize: 13, fontWeight: 600, display: "block", marginBottom: 6 }}>Message</label>
                  <textarea
                    placeholder="Tell us about your project"
                    rows={4}
                    style={{
                      width: "100%", padding: "14px 16px",
                      border: `1px solid ${c.border}`, borderRadius: 0,
                      fontSize: 15, background: c.background, color: c.text, outline: "none",
                      resize: "vertical", fontFamily: "inherit",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={e => e.currentTarget.style.borderColor = c.accent}
                    onBlur={e => e.currentTarget.style.borderColor = c.border}
                  />
                </div>
                <button style={{
                  padding: "16px 36px", background: c.primary, color: "#fff",
                  borderRadius: 0, fontSize: 15, fontWeight: 700, border: "none", cursor: "pointer",
                  letterSpacing: 1, textTransform: "uppercase",
                  transition: "transform 0.2s ease",
                }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
                >
                  Send Message
                </button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* FAQ */}
        <FAQ
          items={t.faq}
          backgroundColor={c.background}
          textColor={c.text}
          mutedColor={c.textMuted}
          accentColor={c.accent}
          borderColor={c.border}
          displayFont={`'${t.fonts.display}', serif`}
        />

        {/* Footer */}
        <footer style={{ padding: "32px 24px", textAlign: "center", borderTop: `1px solid ${c.border}` }}>
          <p style={{ fontSize: 13, color: c.textMuted }}>{t.name} Template -- Partner Portal Templates</p>
        </footer>
      </div>
    </Tooltip.Provider>
  )
}
