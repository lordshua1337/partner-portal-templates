"use client"

import { useForm } from "react-hook-form"
import { toast } from "sonner"
import * as Select from "@radix-ui/react-select"
import { useState } from "react"
import type { TemplateConfig } from "@/data/templates"
import FadeIn from "@/components/motion/FadeIn"
import CountUp from "@/components/motion/CountUp"
import TestimonialGrid from "@/components/sections/TestimonialGrid"
import FAQ from "@/components/sections/FAQ"
import CTABanner from "@/components/sections/CTABanner"

interface LeadFormData {
  fullName: string
  email: string
  phone: string
  debtRange: string
}

const DEBT_RANGES = [
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000+",
]

function LeadCaptureForm({
  colors,
  fonts,
}: {
  readonly colors: TemplateConfig["colors"]
  readonly fonts: TemplateConfig["fonts"]
}) {
  const c = colors
  const [selectedRange, setSelectedRange] = useState("")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormData>({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      debtRange: "",
    },
  })

  const onSubmit = async (data: LeadFormData) => {
    const submission = { ...data, debtRange: selectedRange }
    // Simulate async submission
    await new Promise(resolve => setTimeout(resolve, 1200))
    toast.success("Consultation request received! A tax specialist will contact you within 24 hours.", {
      duration: 5000,
    })
    reset()
    setSelectedRange("")
    // In production this would POST to an API
    void submission
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 16px",
    borderRadius: 10,
    border: `1px solid ${c.border}`,
    fontSize: 15,
    color: c.text,
    background: c.surface,
    outline: "none",
    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
    minHeight: 48,
    fontFamily: `'${fonts.body}', sans-serif`,
    boxSizing: "border-box" as const,
  }

  const labelStyle: React.CSSProperties = {
    fontSize: 13,
    fontWeight: 600,
    color: c.text,
    display: "block",
    marginBottom: 6,
    fontFamily: `'${fonts.body}', sans-serif`,
  }

  const errorStyle: React.CSSProperties = {
    fontSize: 12,
    color: "#dc2626",
    marginTop: 4,
    fontFamily: `'${fonts.body}', sans-serif`,
  }

  return (
    <div style={{
      padding: "clamp(24px, 3vw, 36px)",
      borderRadius: 20,
      background: "rgba(255,255,255,0.95)",
      backdropFilter: "blur(12px)",
      border: `1px solid ${c.border}`,
      boxShadow: `0 20px 60px ${c.primary}15`,
      maxWidth: "100%",
    }}>
      <h3 style={{
        fontSize: 22,
        fontWeight: 700,
        color: c.text,
        marginBottom: 8,
        fontFamily: `'${fonts.display}', serif`,
      }}>
        Free Consultation
      </h3>
      <p style={{
        fontSize: 14,
        color: c.textMuted,
        marginBottom: 24,
        fontFamily: `'${fonts.body}', sans-serif`,
      }}>
        Fill out the form and a tax specialist will contact you within 24 hours.
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "flex", flexDirection: "column", gap: 16 }}
        noValidate
      >
        {/* Full Name */}
        <div>
          <label htmlFor="lead-fullName" style={labelStyle}>Full Name</label>
          <input
            id="lead-fullName"
            type="text"
            placeholder="John Smith"
            style={{
              ...inputStyle,
              borderColor: errors.fullName ? "#dc2626" : c.border,
            }}
            onFocus={e => {
              e.currentTarget.style.borderColor = c.primary
              e.currentTarget.style.boxShadow = `0 0 0 3px ${c.primary}15`
            }}
            {...register("fullName", {
              required: "Full name is required",
              minLength: { value: 2, message: "Name must be at least 2 characters" },
              onBlur: (e) => {
                e.currentTarget.style.borderColor = errors.fullName ? "#dc2626" : c.border
                e.currentTarget.style.boxShadow = "none"
              },
            })}
          />
          {errors.fullName && <p style={errorStyle}>{errors.fullName.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="lead-email" style={labelStyle}>Email Address</label>
          <input
            id="lead-email"
            type="email"
            placeholder="john@example.com"
            style={{
              ...inputStyle,
              borderColor: errors.email ? "#dc2626" : c.border,
            }}
            onFocus={e => {
              e.currentTarget.style.borderColor = c.primary
              e.currentTarget.style.boxShadow = `0 0 0 3px ${c.primary}15`
            }}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter a valid email address",
              },
              onBlur: (e) => {
                e.currentTarget.style.borderColor = errors.email ? "#dc2626" : c.border
                e.currentTarget.style.boxShadow = "none"
              },
            })}
          />
          {errors.email && <p style={errorStyle}>{errors.email.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="lead-phone" style={labelStyle}>Phone Number</label>
          <input
            id="lead-phone"
            type="tel"
            placeholder="(555) 123-4567"
            style={{
              ...inputStyle,
              borderColor: errors.phone ? "#dc2626" : c.border,
            }}
            onFocus={e => {
              e.currentTarget.style.borderColor = c.primary
              e.currentTarget.style.boxShadow = `0 0 0 3px ${c.primary}15`
            }}
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[\d\s()+\-]{7,20}$/,
                message: "Please enter a valid phone number",
              },
              onBlur: (e) => {
                e.currentTarget.style.borderColor = errors.phone ? "#dc2626" : c.border
                e.currentTarget.style.boxShadow = "none"
              },
            })}
          />
          {errors.phone && <p style={errorStyle}>{errors.phone.message}</p>}
        </div>

        {/* Debt Range -- Radix Select */}
        <div>
          <label style={labelStyle}>How much do you owe?</label>
          <Select.Root value={selectedRange} onValueChange={setSelectedRange}>
            <Select.Trigger
              style={{
                width: "100%",
                padding: "14px 16px",
                borderRadius: 10,
                border: `1px solid ${c.border}`,
                fontSize: 15,
                color: selectedRange ? c.text : c.textMuted,
                background: c.surface,
                outline: "none",
                cursor: "pointer",
                minHeight: 48,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontFamily: `'${fonts.body}', sans-serif`,
                transition: "border-color 0.2s ease",
                boxSizing: "border-box",
              }}
              onFocus={e => { e.currentTarget.style.borderColor = c.primary }}
              onBlur={e => { e.currentTarget.style.borderColor = c.border }}
            >
              <Select.Value placeholder="Select range" />
              <Select.Icon>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={c.textMuted} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </Select.Icon>
            </Select.Trigger>
            <Select.Portal>
              <Select.Content
                position="popper"
                sideOffset={4}
                style={{
                  background: "#fff",
                  borderRadius: 12,
                  border: `1px solid ${c.border}`,
                  boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
                  overflow: "hidden",
                  zIndex: 50,
                  width: "var(--radix-select-trigger-width)",
                  maxHeight: "var(--radix-select-content-available-height)",
                }}
              >
                <Select.Viewport style={{ padding: 4 }}>
                  {DEBT_RANGES.map(range => (
                    <Select.Item
                      key={range}
                      value={range}
                      style={{
                        padding: "12px 16px",
                        fontSize: 15,
                        color: c.text,
                        borderRadius: 8,
                        cursor: "pointer",
                        outline: "none",
                        fontFamily: `'${fonts.body}', sans-serif`,
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        transition: "background 0.1s ease",
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = `${c.primary}08` }}
                      onMouseLeave={e => { e.currentTarget.style.background = "transparent" }}
                    >
                      <Select.ItemText>{range}</Select.ItemText>
                      <Select.ItemIndicator>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={c.primary} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </Select.ItemIndicator>
                    </Select.Item>
                  ))}
                </Select.Viewport>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            padding: "16px 32px",
            background: isSubmitting ? `${c.primary}88` : c.primary,
            color: "#fff",
            borderRadius: 10,
            fontSize: 16,
            fontWeight: 700,
            border: "none",
            cursor: isSubmitting ? "not-allowed" : "pointer",
            width: "100%",
            marginTop: 8,
            transition: "transform 0.2s ease, background 0.2s ease",
            fontFamily: `'${fonts.body}', sans-serif`,
          }}
          onMouseEnter={e => { if (!isSubmitting) e.currentTarget.style.transform = "translateY(-2px)" }}
          onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)" }}
        >
          {isSubmitting ? "Submitting..." : "Schedule Free Consultation"}
        </button>
        <p style={{
          fontSize: 12,
          color: c.textMuted,
          textAlign: "center",
          fontFamily: `'${fonts.body}', sans-serif`,
        }}>
          No obligation. 100% confidential.
        </p>
      </form>
    </div>
  )
}

export default function LeadGenTemplate({ template: t }: { readonly template: TemplateConfig }) {
  const c = t.colors

  return (
    <div style={{
      minHeight: "100vh",
      background: c.background,
      color: c.text,
      fontFamily: `'${t.fonts.body}', sans-serif`,
    }}>
      {/* Hero: Split layout -- headline left, form right */}
      <section style={{
        padding: "clamp(48px, 6vw, 80px) clamp(16px, 4vw, 24px)",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(340px, 100%), 1fr))",
          gap: "clamp(32px, 5vw, 64px)",
          alignItems: "center",
        }}>
          <FadeIn direction="left">
            <div>
              <p style={{
                fontSize: 13,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: c.primary,
                fontWeight: 600,
                marginBottom: 16,
                fontFamily: `'${t.fonts.body}', sans-serif`,
              }}>
                {t.category}
              </p>
              <h1 style={{
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 800,
                color: c.text,
                lineHeight: 1.15,
                marginBottom: 20,
                fontFamily: `'${t.fonts.display}', serif`,
              }}>
                {t.hero.headline}
              </h1>
              <p style={{
                fontSize: 17,
                color: c.textMuted,
                lineHeight: 1.7,
                marginBottom: 32,
                fontFamily: `'${t.fonts.body}', sans-serif`,
              }}>
                {t.hero.subheadline}
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button
                  style={{
                    padding: "16px 32px",
                    background: c.primary,
                    color: "#fff",
                    borderRadius: 10,
                    fontSize: 16,
                    fontWeight: 700,
                    border: "none",
                    cursor: "pointer",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    fontFamily: `'${t.fonts.body}', sans-serif`,
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = "translateY(-2px)"
                    e.currentTarget.style.boxShadow = `0 8px 30px ${c.primary}44`
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = "translateY(0)"
                    e.currentTarget.style.boxShadow = "none"
                  }}
                >
                  {t.hero.cta}
                </button>
                {t.hero.secondaryCta && (
                  <button style={{
                    padding: "16px 32px",
                    background: "transparent",
                    color: c.primary,
                    borderRadius: 10,
                    fontSize: 16,
                    fontWeight: 600,
                    border: `1px solid ${c.border}`,
                    cursor: "pointer",
                    fontFamily: `'${t.fonts.body}', sans-serif`,
                    transition: "border-color 0.2s ease",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = c.primary }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = c.border }}
                  >
                    {t.hero.secondaryCta}
                  </button>
                )}
              </div>
            </div>
          </FadeIn>

          {/* Lead capture form -- no floating animation on mobile */}
          <FadeIn direction="right" delay={0.2}>
            <LeadCaptureForm colors={c} fonts={t.fonts} />
          </FadeIn>
        </div>
      </section>

      {/* Trust Bar with stats */}
      <section style={{
        padding: "clamp(32px, 4vw, 48px) clamp(16px, 4vw, 24px)",
        background: c.surface,
        borderTop: `1px solid ${c.border}`,
        borderBottom: `1px solid ${c.border}`,
      }}>
        <FadeIn>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <p style={{
              fontSize: 13,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: c.textMuted,
              textAlign: "center",
              marginBottom: 24,
              fontWeight: 600,
              fontFamily: `'${t.fonts.body}', sans-serif`,
            }}>
              As Seen In
            </p>
            <div style={{
              display: "flex",
              justifyContent: "center",
              gap: "clamp(24px, 4vw, 48px)",
              flexWrap: "wrap",
              marginBottom: 32,
              opacity: 0.4,
            }}>
              {["Forbes", "Bloomberg", "CNBC", "WSJ", "Inc."].map(name => (
                <span key={name} style={{
                  fontSize: "clamp(14px, 2vw, 18px)",
                  fontWeight: 700,
                  color: c.text,
                  letterSpacing: "-0.01em",
                  fontFamily: `'${t.fonts.display}', serif`,
                }}>
                  {name}
                </span>
              ))}
            </div>
            <div style={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
              gap: 24,
            }}>
              {t.stats.map(stat => (
                <div key={stat.label} style={{ textAlign: "center", flex: "1 1 120px" }}>
                  <div style={{
                    fontSize: "clamp(24px, 3vw, 32px)",
                    fontWeight: 800,
                    color: c.primary,
                    fontFamily: `'${t.fonts.display}', serif`,
                  }}>
                    <CountUp end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                  </div>
                  <div style={{
                    fontSize: 13,
                    color: c.textMuted,
                    marginTop: 4,
                    fontFamily: `'${t.fonts.body}', sans-serif`,
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Problem / Solution */}
      <section style={{
        padding: "clamp(48px, 6vw, 80px) clamp(16px, 4vw, 24px)",
        maxWidth: 1060,
        margin: "0 auto",
      }}>
        <FadeIn>
          <h2 style={{
            fontSize: "clamp(26px, 3.5vw, 32px)",
            fontWeight: 700,
            textAlign: "center",
            marginBottom: 48,
            fontFamily: `'${t.fonts.display}', serif`,
            color: c.text,
          }}>
            The Problem We Solve
          </h2>
        </FadeIn>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))",
          gap: 32,
        }}>
          <FadeIn delay={0.1}>
            <div>
              <h3 style={{
                fontSize: 18,
                fontWeight: 700,
                color: "#b91c1c",
                marginBottom: 20,
                fontFamily: `'${t.fonts.display}', serif`,
              }}>
                Without Professional Help
              </h3>
              {[
                "Wage garnishments drain your paycheck",
                "Bank accounts frozen without warning",
                "Penalties and interest growing daily",
                "Threatening letters causing constant stress",
              ].map(item => (
                <div key={item} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "12px 16px",
                  marginBottom: 8,
                  borderRadius: 10,
                  background: "#fef2f2",
                  border: "1px solid #fecaca",
                }}>
                  <span style={{ color: "#dc2626", fontSize: 18, flexShrink: 0 }}>&#10005;</span>
                  <span style={{
                    fontSize: 14,
                    color: "#7f1d1d",
                    fontFamily: `'${t.fonts.body}', sans-serif`,
                    lineHeight: 1.5,
                  }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div>
              <h3 style={{
                fontSize: 18,
                fontWeight: 700,
                color: c.primary,
                marginBottom: 20,
                fontFamily: `'${t.fonts.display}', serif`,
              }}>
                With Our Tax Experts
              </h3>
              {[
                "Garnishments stopped within days",
                "Assets protected and accounts unfrozen",
                "Debt reduced by 40-80% on average",
                "Peace of mind with a clear resolution plan",
              ].map(item => (
                <div key={item} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "12px 16px",
                  marginBottom: 8,
                  borderRadius: 10,
                  background: `${c.primary}08`,
                  border: `1px solid ${c.primary}22`,
                }}>
                  <span style={{ color: c.primary, fontSize: 18, flexShrink: 0 }}>&#10003;</span>
                  <span style={{
                    fontSize: 14,
                    color: c.text,
                    fontFamily: `'${t.fonts.body}', sans-serif`,
                    lineHeight: 1.5,
                  }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* How It Works */}
      <section style={{
        padding: "clamp(48px, 6vw, 80px) clamp(16px, 4vw, 24px)",
        background: c.surface,
      }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <FadeIn>
            <h2 style={{
              fontSize: "clamp(26px, 3.5vw, 32px)",
              fontWeight: 700,
              textAlign: "center",
              marginBottom: 56,
              fontFamily: `'${t.fonts.display}', serif`,
              color: c.text,
            }}>
              How It Works
            </h2>
          </FadeIn>
          <div style={{ position: "relative" }}>
            {/* Connecting line */}
            <div style={{
              position: "absolute",
              left: 24,
              top: 40,
              bottom: 40,
              width: 2,
              background: `${c.primary}22`,
            }} />
            {[
              {
                step: "1",
                title: "Free Consultation",
                desc: "Tell us about your situation. We will review your tax records and explain all available options with zero obligation.",
              },
              {
                step: "2",
                title: "Custom Strategy",
                desc: "Our team builds a personalized resolution plan. We handle all IRS communication and paperwork on your behalf.",
              },
              {
                step: "3",
                title: "Resolution",
                desc: "We negotiate the best possible outcome. Most clients see resolution within 90 days with significant debt reduction.",
              },
            ].map((item, i) => (
              <FadeIn key={item.step} delay={i * 0.15}>
                <div style={{
                  display: "flex",
                  gap: "clamp(16px, 2vw, 24px)",
                  marginBottom: 40,
                  position: "relative",
                }}>
                  <div style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    flexShrink: 0,
                    background: c.primary,
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 18,
                    fontWeight: 800,
                    position: "relative",
                    zIndex: 1,
                    fontFamily: `'${t.fonts.display}', serif`,
                  }}>
                    {item.step}
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <h3 style={{
                      fontSize: 20,
                      fontWeight: 700,
                      marginBottom: 8,
                      fontFamily: `'${t.fonts.display}', serif`,
                      color: c.text,
                    }}>
                      {item.title}
                    </h3>
                    <p style={{
                      fontSize: 15,
                      color: c.textMuted,
                      lineHeight: 1.7,
                      fontFamily: `'${t.fonts.body}', sans-serif`,
                    }}>
                      {item.desc}
                    </p>
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
      <footer style={{
        padding: "32px clamp(16px, 4vw, 24px)",
        textAlign: "center",
        borderTop: `1px solid ${c.border}`,
        background: c.surface,
      }}>
        <p style={{
          fontSize: 13,
          color: c.textMuted,
          fontFamily: `'${t.fonts.body}', sans-serif`,
        }}>
          {t.name} Template -- Partner Portal Templates
        </p>
      </footer>
    </div>
  )
}
