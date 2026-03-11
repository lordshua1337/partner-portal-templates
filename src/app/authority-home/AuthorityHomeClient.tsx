"use client"

import { useSearchParams } from "next/navigation"
import { Suspense, useState } from "react"
import { EDUCATIONAL_COLORS as C, EDUCATIONAL_FONTS as F } from "@/data/educational-types"
import FadeIn from "@/components/motion/FadeIn"
import CountUp from "@/components/motion/CountUp"

const SERVICES = [
  {
    title: "IRS Wage Garnishment",
    slug: "irs-wage-garnishment",
    desc: "Stop wage garnishments and explore your resolution options.",
    icon: "briefcase",
  },
  {
    title: "IRS Bank Levy",
    slug: "irs-bank-levy",
    desc: "Act within the 21-day window to protect your bank accounts.",
    icon: "building",
  },
  {
    title: "Federal Tax Lien",
    slug: "tax-lien",
    desc: "Understand how liens affect your credit and property.",
    icon: "shield",
  },
  {
    title: "Offer in Compromise",
    slug: "offer-in-compromise",
    desc: "Settle your tax debt for less than what you owe.",
    icon: "handshake",
  },
  {
    title: "Installment Agreement",
    slug: "installment-agreement",
    desc: "Set up a manageable monthly payment plan with the IRS.",
    icon: "calendar",
  },
  {
    title: "Penalty Abatement",
    slug: "penalty-abatement",
    desc: "Get IRS penalties reduced or removed entirely.",
    icon: "minus-circle",
  },
  {
    title: "Unfiled Tax Returns",
    slug: "unfiled-tax-returns",
    desc: "Resolve years of unfiled returns and avoid further penalties.",
    icon: "file",
  },
  {
    title: "IRS Audit Representation",
    slug: "irs-audit-representation",
    desc: "Get professional representation during an IRS audit.",
    icon: "search",
  },
  {
    title: "Innocent Spouse Relief",
    slug: "innocent-spouse-relief",
    desc: "Relief options when a spouse's tax issues affect you.",
    icon: "heart",
  },
  {
    title: "Currently Not Collectible",
    slug: "currently-not-collectible",
    desc: "Pause IRS collection when you can't afford to pay.",
    icon: "pause",
  },
]

const STATS = [
  { value: 14000, suffix: "+", label: "Clients Helped" },
  { value: 50, suffix: "+", label: "Years Combined Experience" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 250, prefix: "$", suffix: "M+", label: "Tax Debt Resolved" },
]

const TESTIMONIALS = [
  {
    name: "Sarah M.",
    role: "Small Business Owner",
    quote:
      "I was terrified of the IRS letters piling up. They helped me set up an installment plan I could actually afford. The relief was immediate.",
    rating: 5,
  },
  {
    name: "James R.",
    role: "Freelance Contractor",
    quote:
      "Three years of unfiled returns and I thought I was going to jail. They handled everything and I ended up owing way less than I expected.",
    rating: 5,
  },
  {
    name: "Maria L.",
    role: "Restaurant Owner",
    quote:
      "The bank levy hit without warning. They got it released in 48 hours and negotiated a settlement. I cannot recommend them enough.",
    rating: 5,
  },
]

function AuthorityHomeInner() {
  const params = useSearchParams()
  const brand = params.get("brand") || ""
  const phone = params.get("phone") || ""
  const email = params.get("email") || ""
  const website = params.get("website") || ""
  const ref = params.get("ref") || brand.toLowerCase().replace(/[^a-z0-9]+/g, "-") || "direct"

  const partnerName = brand || "Your Local Tax Professional"
  const df = F.display

  const [formState, setFormState] = useState<"idle" | "sending" | "sent" | "error">("idle")
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" })

  function buildServiceUrl(slug: string) {
    const base = `/tax-resolution/${slug}`
    const p = new URLSearchParams()
    if (brand) p.set("brand", brand)
    if (phone) p.set("phone", phone)
    if (email) p.set("email", email)
    if (website) p.set("website", website)
    if (ref) p.set("ref", ref)
    const qs = p.toString()
    return qs ? `${base}?${qs}` : base
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setFormState("sending")

    try {
      const res = await fetch("/api/referral", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, ref }),
      })
      if (res.ok) {
        setFormState("sent")
        setFormData({ name: "", email: "", phone: "", message: "" })
      } else {
        setFormState("error")
      }
    } catch {
      setFormState("error")
    }
  }

  return (
    <div style={{ fontFamily: F.body, color: C.text, background: C.background }}>
      {/* Hero */}
      <section
        style={{
          background: `linear-gradient(135deg, ${C.primary} 0%, ${C.primaryLight} 100%)`,
          padding: "80px 24px 96px",
          textAlign: "center",
          color: "#fff",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "relative", zIndex: 1, maxWidth: 800, margin: "0 auto" }}>
          <FadeIn>
            {brand && (
              <div
                style={{
                  display: "inline-block",
                  padding: "8px 20px",
                  borderRadius: 8,
                  background: "rgba(255,255,255,0.15)",
                  backdropFilter: "blur(8px)",
                  fontSize: 14,
                  fontWeight: 600,
                  marginBottom: 24,
                  letterSpacing: "0.02em",
                }}
              >
                {partnerName} + Community Tax
              </div>
            )}
            <h1
              style={{
                fontFamily: df,
                fontSize: "clamp(32px, 5vw, 52px)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: 20,
              }}
            >
              Tax Problems Don&apos;t{" "}
              <span style={{ color: C.accent }}>Solve Themselves</span>
            </h1>
            <p
              style={{
                fontSize: "clamp(16px, 2vw, 20px)",
                opacity: 0.9,
                lineHeight: 1.6,
                maxWidth: 600,
                margin: "0 auto 32px",
              }}
            >
              {brand
                ? `${partnerName} and Community Tax are here to help you resolve IRS issues, reduce what you owe, and get back on track.`
                : "Get expert guidance resolving IRS issues, reducing what you owe, and getting back on track. Free consultation."}
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="#consultation"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "16px 32px",
                  borderRadius: 10,
                  background: C.accent,
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 16,
                  textDecoration: "none",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
              >
                Get Free Consultation
              </a>
              <a
                href="#services"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "16px 32px",
                  borderRadius: 10,
                  background: "rgba(255,255,255,0.15)",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: 16,
                  textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.3)",
                }}
              >
                Explore Services
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Trust Bar */}
      <section
        style={{
          padding: "48px 24px",
          background: C.surface,
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <div
          style={{
            maxWidth: 960,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            gap: 32,
          }}
        >
          {STATS.map((stat) => (
            <FadeIn key={stat.label}>
              <div style={{ textAlign: "center", minWidth: 120 }}>
                <div
                  style={{
                    fontFamily: df,
                    fontSize: 32,
                    fontWeight: 800,
                    color: C.accent,
                  }}
                >
                  {stat.prefix}
                  <CountUp end={stat.value} />
                  {stat.suffix}
                </div>
                <div style={{ fontSize: 13, fontWeight: 500, color: C.textMuted }}>
                  {stat.label}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" style={{ padding: "80px 24px", background: C.background }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <p
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: C.accent,
                  marginBottom: 12,
                }}
              >
                Tax Resolution Services
              </p>
              <h2
                style={{
                  fontFamily: df,
                  fontSize: "clamp(28px, 3.5vw, 40px)",
                  fontWeight: 800,
                  color: C.primary,
                  marginBottom: 12,
                }}
              >
                How We Can Help
              </h2>
              <p style={{ fontSize: 17, color: C.textMuted, maxWidth: 560, margin: "0 auto" }}>
                Every tax situation is different. Explore the guides below to understand your options,
                then reach out for personalized guidance.
              </p>
            </div>
          </FadeIn>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: 20,
            }}
          >
            {SERVICES.map((svc, i) => (
              <FadeIn key={svc.slug} delay={i * 0.06}>
                <a
                  href={buildServiceUrl(svc.slug)}
                  style={{
                    display: "block",
                    padding: 24,
                    borderRadius: 14,
                    background: C.surface,
                    border: `1px solid ${C.border}`,
                    textDecoration: "none",
                    transition: "all 0.25s",
                    height: "100%",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget
                    el.style.transform = "translateY(-3px)"
                    el.style.boxShadow = "0 8px 24px rgba(0,0,0,0.08)"
                    el.style.borderColor = C.accent
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget
                    el.style.transform = "translateY(0)"
                    el.style.boxShadow = "none"
                    el.style.borderColor = C.border
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      background: `${C.accent}15`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 14,
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={C.accent}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                  </div>
                  <h3
                    style={{
                      fontFamily: df,
                      fontSize: 17,
                      fontWeight: 700,
                      color: C.primary,
                      marginBottom: 6,
                    }}
                  >
                    {svc.title}
                  </h3>
                  <p style={{ fontSize: 14, color: C.textMuted, lineHeight: 1.5, margin: 0 }}>
                    {svc.desc}
                  </p>
                  <div
                    style={{
                      marginTop: 14,
                      fontSize: 13,
                      fontWeight: 600,
                      color: C.accent,
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                    }}
                  >
                    Learn more
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: "80px 24px", background: C.surface }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <p
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: C.accent,
                  marginBottom: 12,
                }}
              >
                Simple Process
              </p>
              <h2
                style={{
                  fontFamily: df,
                  fontSize: "clamp(28px, 3.5vw, 36px)",
                  fontWeight: 800,
                  color: C.primary,
                }}
              >
                Three Steps to Resolution
              </h2>
            </div>
          </FadeIn>

          {[
            {
              step: "01",
              title: "Free Consultation",
              desc: "Tell us about your tax situation. We review your case and explain your options at no cost.",
            },
            {
              step: "02",
              title: "Custom Resolution Plan",
              desc: "We build a strategy tailored to your situation -- whether that's an offer, payment plan, or penalty removal.",
            },
            {
              step: "03",
              title: "We Handle the IRS",
              desc: "Our team works directly with the IRS on your behalf. You focus on your life while we resolve the issue.",
            },
          ].map((item, i) => (
            <FadeIn key={item.step} delay={i * 0.12}>
              <div
                style={{
                  display: "flex",
                  gap: 24,
                  marginBottom: 32,
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: C.primary,
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: df,
                    fontWeight: 800,
                    fontSize: 18,
                    flexShrink: 0,
                  }}
                >
                  {item.step}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: df,
                      fontSize: 20,
                      fontWeight: 700,
                      color: C.primary,
                      marginBottom: 6,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ fontSize: 15, color: C.textMuted, lineHeight: 1.6, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: "80px 24px", background: C.background }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <h2
                style={{
                  fontFamily: df,
                  fontSize: "clamp(28px, 3.5vw, 36px)",
                  fontWeight: 800,
                  color: C.primary,
                }}
              >
                Real People, Real Results
              </h2>
            </div>
          </FadeIn>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 20,
            }}
          >
            {TESTIMONIALS.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.1}>
                <div
                  style={{
                    padding: 28,
                    borderRadius: 16,
                    background: C.surface,
                    border: `1px solid ${C.border}`,
                    height: "100%",
                  }}
                >
                  <div style={{ display: "flex", gap: 2, marginBottom: 12 }}>
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <svg
                        key={j}
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill={C.accent}
                        stroke="none"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p
                    style={{
                      fontSize: 15,
                      fontStyle: "italic",
                      color: C.textMuted,
                      lineHeight: 1.6,
                      marginBottom: 16,
                    }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        background: `linear-gradient(135deg, ${C.primary}, ${C.accent})`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: 14,
                      }}
                    >
                      {t.name[0]}
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 14, color: C.text }}>{t.name}</div>
                      <div style={{ fontSize: 12, color: C.textMuted }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section
        id="consultation"
        style={{
          padding: "80px 24px",
          background: `linear-gradient(135deg, ${C.primary} 0%, ${C.primaryLight} 100%)`,
        }}
      >
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 32, color: "#fff" }}>
              <h2
                style={{
                  fontFamily: df,
                  fontSize: "clamp(28px, 3.5vw, 36px)",
                  fontWeight: 800,
                  marginBottom: 12,
                }}
              >
                Get Your Free Consultation
              </h2>
              <p style={{ fontSize: 16, opacity: 0.85, lineHeight: 1.6 }}>
                {brand
                  ? `${partnerName} will connect you with a certified tax professional to review your case -- at no cost.`
                  : "A certified tax professional will review your case and explain your options -- at no cost."}
              </p>
            </div>

            {formState === "sent" ? (
              <div
                style={{
                  background: C.surface,
                  borderRadius: 16,
                  padding: 40,
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 40, marginBottom: 12 }}>&#10003;</div>
                <h3
                  style={{
                    fontFamily: df,
                    fontSize: 22,
                    fontWeight: 700,
                    color: C.primary,
                    marginBottom: 8,
                  }}
                >
                  Request Received
                </h3>
                <p style={{ fontSize: 15, color: C.textMuted }}>
                  {brand
                    ? `${partnerName} will be in touch within 24 hours.`
                    : "A tax professional will be in touch within 24 hours."}
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  background: C.surface,
                  borderRadius: 16,
                  padding: 32,
                }}
              >
                <input type="hidden" name="ref" value={ref} />
                <div style={{ marginBottom: 16 }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: 12,
                      fontWeight: 600,
                      color: C.textMuted,
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                      marginBottom: 6,
                    }}
                  >
                    Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Smith"
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      borderRadius: 8,
                      border: `1px solid ${C.border}`,
                      fontSize: 15,
                      color: C.text,
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
                <div style={{ marginBottom: 16 }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: 12,
                      fontWeight: 600,
                      color: C.textMuted,
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                      marginBottom: 6,
                    }}
                  >
                    Email *
                  </label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      borderRadius: 8,
                      border: `1px solid ${C.border}`,
                      fontSize: 15,
                      color: C.text,
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
                <div style={{ marginBottom: 16 }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: 12,
                      fontWeight: 600,
                      color: C.textMuted,
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                      marginBottom: 6,
                    }}
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(555) 123-4567"
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      borderRadius: 8,
                      border: `1px solid ${C.border}`,
                      fontSize: 15,
                      color: C.text,
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
                <div style={{ marginBottom: 24 }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: 12,
                      fontWeight: 600,
                      color: C.textMuted,
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                      marginBottom: 6,
                    }}
                  >
                    Tell us about your situation
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="I received a notice from the IRS about..."
                    rows={3}
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      borderRadius: 8,
                      border: `1px solid ${C.border}`,
                      fontSize: 15,
                      color: C.text,
                      outline: "none",
                      resize: "vertical",
                      fontFamily: "inherit",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={formState === "sending"}
                  style={{
                    width: "100%",
                    padding: "16px 24px",
                    borderRadius: 10,
                    background: C.accent,
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: 16,
                    border: "none",
                    cursor: formState === "sending" ? "wait" : "pointer",
                    opacity: formState === "sending" ? 0.7 : 1,
                    transition: "all 0.2s",
                  }}
                >
                  {formState === "sending" ? "Submitting..." : "Request Free Consultation"}
                </button>
                {formState === "error" && (
                  <p style={{ color: "#dc2626", fontSize: 13, textAlign: "center", marginTop: 12 }}>
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            )}
          </FadeIn>
        </div>
      </section>

      {/* Branded Footer */}
      <footer
        style={{
          padding: "40px 24px",
          background: C.primary,
          color: "rgba(255,255,255,0.7)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          {brand && (
            <p style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 8 }}>
              {partnerName}
            </p>
          )}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 16,
              flexWrap: "wrap",
              fontSize: 14,
              marginBottom: 16,
            }}
          >
            {phone && (
              <a
                href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                style={{ color: C.accent, textDecoration: "none" }}
              >
                {phone}
              </a>
            )}
            {email && (
              <a href={`mailto:${email}`} style={{ color: C.accent, textDecoration: "none" }}>
                {email}
              </a>
            )}
            {website && (
              <a
                href={website.startsWith("http") ? website : `https://${website}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: C.accent, textDecoration: "none" }}
              >
                {website}
              </a>
            )}
          </div>
          <p style={{ fontSize: 12, opacity: 0.5 }}>
            {brand
              ? `${partnerName} in partnership with Community Tax`
              : "Community Tax Partners"}
          </p>
        </div>
      </footer>
    </div>
  )
}

export default function AuthorityHomeClient() {
  return (
    <Suspense
      fallback={
        <div style={{ padding: 80, textAlign: "center", color: "#64748b" }}>Loading...</div>
      }
    >
      <AuthorityHomeInner />
    </Suspense>
  )
}
