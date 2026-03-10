"use client"

import * as Accordion from "@radix-ui/react-accordion"
import type { TemplateConfig } from "@/data/templates"
import FadeIn from "@/components/motion/FadeIn"

const GOLD = "#FFC947"
const DARK = "#12141D"
const DARK_FOOTER = "#1E2028"
const LIGHT = "#FAFAFA"

const PRACTICE_AREAS = [
  { title: "Personal Injury", description: "Accidents, negligence, catastrophic injury claims" },
  { title: "Criminal Defense", description: "Felony, misdemeanor, DUI, white-collar defense" },
  { title: "Medical Malpractice", description: "Surgical errors, misdiagnosis, wrongful treatment" },
  { title: "Family Law", description: "Divorce, custody, adoption, protective orders" },
  { title: "Civil Litigation", description: "Contract disputes, business torts, injunctions" },
  { title: "Workers Compensation", description: "On-the-job injuries, denied claims, appeals" },
]

const CASE_RESULTS = [
  { amount: "$4.2M", type: "Personal Injury", detail: "Commercial vehicle accident" },
  { amount: "$1.8M", type: "Medical Malpractice", detail: "Surgical error, permanent disability" },
  { amount: "Dismissed", type: "Criminal Defense", detail: "All felony charges dropped pre-trial" },
]

const TRUST_BADGES = ["AV Rated", "Super Lawyers", "Best Lawyers", "State Bar", "Trial Lawyers"]

const BULLET_POINTS = [
  "Every case prepared for trial from day one",
  "In-house litigation team — no referrals out",
  "24/7 attorney access during active cases",
  "Contingency fee — no win, no fee",
]

const accordionContentStyles = `
  .attorney-accordion-content[data-state="open"] {
    animation: accordionSlideDown 200ms ease-out;
  }
  .attorney-accordion-content[data-state="closed"] {
    animation: accordionSlideUp 200ms ease-out;
  }
  @keyframes accordionSlideDown {
    from { height: 0; opacity: 0; }
    to { height: var(--radix-accordion-content-height); opacity: 1; }
  }
  @keyframes accordionSlideUp {
    from { height: var(--radix-accordion-content-height); opacity: 1; }
    to { height: 0; opacity: 0; }
  }
`

export default function AttorneyTemplate({ template: t }: { readonly template: TemplateConfig }) {
  const displayFont = "'Space Grotesk', sans-serif"
  const bodyFont = "'Inter', sans-serif"

  return (
    <div style={{ minHeight: "100vh", background: LIGHT, color: "#111", fontFamily: bodyFont }}>
      <style dangerouslySetInnerHTML={{ __html: accordionContentStyles }} />

      {/* SECTION 1: Hero — dark, full-width, left-aligned text + floating geo shapes */}
      <section style={{
        background: DARK,
        position: "relative",
        overflow: "hidden",
        minHeight: 620,
        display: "flex",
        alignItems: "center",
      }}>
        {/* Abstract geometric shapes — right side floaters */}
        <div style={{ position: "absolute", right: "6%", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}>
          {/* Large outer circle */}
          <div style={{
            width: 340, height: 340, borderRadius: "50%",
            border: `1px solid ${GOLD}26`,
            position: "absolute", top: -170, right: -80,
          }} />
          {/* Inner circle */}
          <div style={{
            width: 200, height: 200, borderRadius: "50%",
            border: `1px solid ${GOLD}1A`,
            position: "absolute", top: -100, right: -10,
          }} />
          {/* Triangle — CSS border trick */}
          <div style={{
            width: 0, height: 0,
            borderLeft: "70px solid transparent",
            borderRight: "70px solid transparent",
            borderBottom: `120px solid ${GOLD}1A`,
            position: "absolute", top: 20, right: 60,
          }} />
          {/* Rotated square */}
          <div style={{
            width: 90, height: 90,
            border: `1px solid ${GOLD}26`,
            transform: "rotate(45deg)",
            position: "absolute", top: 100, right: 20,
          }} />
          {/* Small filled circle */}
          <div style={{
            width: 14, height: 14, borderRadius: "50%",
            background: `${GOLD}33`,
            position: "absolute", top: 160, right: 140,
          }} />
        </div>

        {/* Text content — left-aligned, ~60% width */}
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px", width: "100%" }}>
          <FadeIn direction="left">
            <div style={{ maxWidth: 620 }}>
              {/* Gold accent line above headline */}
              <div style={{ width: 80, height: 3, background: GOLD, marginBottom: 32 }} />

              <h1 style={{
                fontSize: "clamp(48px, 7vw, 100px)",
                fontWeight: 500,
                color: "#fff",
                lineHeight: 1.0,
                letterSpacing: "-0.02em",
                marginBottom: 28,
                fontFamily: displayFont,
              }}>
                {t.hero.headline}
              </h1>

              <p style={{
                fontSize: 18,
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.75,
                marginBottom: 48,
                maxWidth: 520,
              }}>
                {t.hero.subheadline}
              </p>

              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <button style={{
                  padding: "16px 36px",
                  background: GOLD,
                  color: DARK,
                  border: "none",
                  fontSize: 15,
                  fontWeight: 700,
                  fontFamily: displayFont,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                }}>
                  {t.hero.cta}
                </button>
                {t.hero.secondaryCta && (
                  <button style={{
                    padding: "16px 36px",
                    background: "transparent",
                    color: "#fff",
                    border: "1px solid rgba(255,255,255,0.35)",
                    fontSize: 15,
                    fontWeight: 600,
                    fontFamily: displayFont,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                  }}>
                    {t.hero.secondaryCta}
                  </button>
                )}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 2: Trust Bar — white, badges in small caps row */}
      <section style={{
        background: "#fff",
        borderTop: "1px solid #E5E5E5",
        borderBottom: "1px solid #E5E5E5",
        padding: "20px 24px",
      }}>
        <div style={{
          maxWidth: 900,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
        }}>
          {TRUST_BADGES.map(badge => (
            <span key={badge} style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#666",
              fontFamily: displayFont,
            }}>
              {badge}
            </span>
          ))}
        </div>
      </section>

      {/* SECTION 3: Practice Areas — FAFAFA, left-aligned title, responsive 2-col layout */}
      <section style={{ background: LIGHT, padding: "100px 24px" }}>
        <div style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 440px), 1fr))",
          gap: 80,
          alignItems: "start",
        }}>
          {/* Left: large label text + gold bar */}
          <FadeIn direction="left">
            <div>
              <p style={{
                fontSize: 11,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: GOLD,
                fontWeight: 700,
                marginBottom: 20,
                fontFamily: displayFont,
              }}>
                What We Handle
              </p>
              <h2 style={{
                fontSize: "clamp(32px, 4vw, 52px)",
                fontWeight: 500,
                fontFamily: displayFont,
                lineHeight: 1.1,
                color: DARK,
                marginBottom: 32,
              }}>
                Areas where we fight for you
              </h2>
              {/* Gold accent bar */}
              <div style={{ width: 60, height: 3, background: GOLD }} />
            </div>
          </FadeIn>

          {/* Right: stacked list with gold dot + title + desc */}
          <FadeIn direction="right" delay={0.1}>
            <div>
              {PRACTICE_AREAS.map((area, i) => (
                <div key={area.title} style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 16,
                  padding: "20px 0",
                  borderBottom: i < PRACTICE_AREAS.length - 1 ? "1px solid #E5E5E5" : "none",
                  borderTop: i === 0 ? "1px solid #E5E5E5" : "none",
                }}>
                  <div style={{
                    width: 8, height: 8, borderRadius: "50%",
                    background: GOLD, flexShrink: 0,
                    marginTop: 6,
                  }} />
                  <span style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: DARK,
                    fontFamily: displayFont,
                    whiteSpace: "nowrap",
                    marginRight: 8,
                  }}>
                    {area.title}
                  </span>
                  <span style={{ fontSize: 14, color: "#555", lineHeight: 1.5 }}>
                    {area.description}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 4: Case Results — dark, 3 huge numbers, minimal */}
      <section style={{ background: DARK, padding: "100px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FadeIn>
            <p style={{
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: GOLD,
              fontWeight: 700,
              marginBottom: 64,
              fontFamily: displayFont,
            }}>
              Case Results
            </p>
          </FadeIn>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: 0,
          }}>
            {CASE_RESULTS.map((result, i) => (
              <FadeIn key={result.type} delay={i * 0.1}>
                <div style={{
                  borderTop: `2px solid ${GOLD}`,
                  borderRight: i < CASE_RESULTS.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
                  padding: "48px 40px 48px 0",
                  paddingLeft: i === 0 ? 0 : 40,
                }}>
                  <div style={{
                    fontSize: "clamp(40px, 5vw, 68px)",
                    fontWeight: 500,
                    color: GOLD,
                    fontFamily: displayFont,
                    lineHeight: 1,
                    marginBottom: 16,
                  }}>
                    {result.amount}
                  </div>
                  <div style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: "#fff",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    fontFamily: displayFont,
                    marginBottom: 8,
                  }}>
                    {result.type}
                  </div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", lineHeight: 1.5 }}>
                    {result.detail}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Content Split — white, image placeholder left + floating badge, text right */}
      <section style={{ background: "#fff", padding: "100px 24px" }}>
        <div style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 440px), 1fr))",
          gap: 80,
          alignItems: "center",
        }}>
          {/* Left: image placeholder rectangle + floating card */}
          <FadeIn direction="left">
            <div style={{ position: "relative" }}>
              <div style={{
                background: DARK,
                border: `2px solid ${GOLD}`,
                height: 380,
                width: "100%",
              }} />
              {/* Floating white card, overlaps bottom-right */}
              <div style={{
                position: "absolute",
                bottom: -24,
                right: -24,
                background: "#fff",
                padding: "20px 28px",
                boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
                border: "1px solid #E5E5E5",
              }}>
                <div style={{
                  fontSize: 32,
                  fontWeight: 500,
                  fontFamily: displayFont,
                  color: DARK,
                  lineHeight: 1,
                  marginBottom: 4,
                }}>
                  25+
                </div>
                <div style={{ fontSize: 12, color: "#777", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Years Experience
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right: text */}
          <FadeIn direction="right" delay={0.1}>
            <div>
              <div style={{ width: 60, height: 3, background: GOLD, marginBottom: 28 }} />
              <h2 style={{
                fontSize: "clamp(28px, 3.5vw, 42px)",
                fontWeight: 500,
                fontFamily: displayFont,
                color: DARK,
                lineHeight: 1.15,
                marginBottom: 24,
              }}>
                Trial-Ready Representation
              </h2>
              <p style={{
                fontSize: 16,
                color: "#555",
                lineHeight: 1.8,
                marginBottom: 32,
              }}>
                Many firms settle too early. We prepare every case as if it is going to trial from day one. That preparation is why insurance companies take our clients seriously.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {BULLET_POINTS.map(pt => (
                  <div key={pt} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    {/* Gold checkmark */}
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
                      <circle cx="9" cy="9" r="9" fill={GOLD} />
                      <path d="M5 9l3 3 5-5" stroke={DARK} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ fontSize: 15, color: "#444", lineHeight: 1.6 }}>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 6: Testimonials — dark, large featured quote, abstract gold SVG strokes */}
      <section style={{ background: DARK, position: "relative", overflow: "hidden", padding: "100px 24px" }}>
        {/* Abstract SVG line art at low opacity */}
        <svg
          width="100%" height="100%"
          viewBox="0 0 1200 500"
          style={{ position: "absolute", inset: 0, opacity: 0.06, pointerEvents: "none" }}
          preserveAspectRatio="xMidYMid slice"
        >
          <path d="M0 400 L300 100 L600 350 L900 50 L1200 300" stroke={GOLD} strokeWidth="1.5" fill="none" />
          <path d="M100 500 L400 200 L700 450 L1000 100" stroke={GOLD} strokeWidth="1" fill="none" />
          <circle cx="200" cy="150" r="80" stroke={GOLD} strokeWidth="1" fill="none" />
          <circle cx="1000" cy="350" r="120" stroke={GOLD} strokeWidth="1" fill="none" />
        </svg>

        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <FadeIn>
            {/* Gold quotation mark */}
            <div style={{
              fontSize: 96,
              lineHeight: 1,
              color: GOLD,
              fontFamily: displayFont,
              fontWeight: 500,
              marginBottom: -16,
              opacity: 0.8,
            }}>
              &ldquo;
            </div>

            {t.testimonials[0] && (
              <>
                <blockquote style={{
                  fontSize: "clamp(20px, 2.5vw, 28px)",
                  fontStyle: "italic",
                  color: "#fff",
                  lineHeight: 1.6,
                  fontWeight: 300,
                  marginBottom: 40,
                  fontFamily: bodyFont,
                }}>
                  {t.testimonials[0].quote}
                </blockquote>

                <div style={{ width: 40, height: 1, background: GOLD, margin: "0 auto 24px" }} />

                <div style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: "#fff",
                  fontFamily: displayFont,
                  letterSpacing: "0.04em",
                  marginBottom: 4,
                }}>
                  {t.testimonials[0].name}
                </div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  {t.testimonials[0].role}
                </div>
              </>
            )}
          </FadeIn>
        </div>
      </section>

      {/* SECTION 7: FAQ — FAFAFA, Radix Accordion */}
      <section style={{ background: LIGHT, padding: "100px 24px" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ marginBottom: 56 }}>
              <p style={{
                fontSize: 11,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: GOLD,
                fontWeight: 700,
                marginBottom: 16,
                fontFamily: displayFont,
              }}>
                Common Questions
              </p>
              <h2 style={{
                fontSize: "clamp(28px, 3.5vw, 42px)",
                fontWeight: 500,
                fontFamily: displayFont,
                color: DARK,
                lineHeight: 1.1,
              }}>
                Frequently Asked Questions
              </h2>
            </div>
          </FadeIn>

          <Accordion.Root type="single" collapsible>
            {t.faq.map((item, i) => (
              <FadeIn key={item.question} delay={i * 0.05}>
                <Accordion.Item value={`faq-${i}`} style={{ borderTop: "1px solid #E0E0E0" }}>
                  <Accordion.Header asChild>
                    <h3 style={{ margin: 0 }}>
                      <Accordion.Trigger
                        style={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: "24px 0",
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          textAlign: "left",
                          gap: 16,
                        }}
                      >
                        <span style={{
                          fontSize: 16,
                          fontWeight: 600,
                          color: DARK,
                          fontFamily: displayFont,
                          lineHeight: 1.4,
                        }}>
                          {item.question}
                        </span>
                        <span
                          style={{
                            fontSize: 24,
                            fontWeight: 300,
                            color: GOLD,
                            fontFamily: displayFont,
                            flexShrink: 0,
                            lineHeight: 1,
                            transition: "transform 200ms ease",
                          }}
                          aria-hidden
                        >
                          +
                        </span>
                      </Accordion.Trigger>
                    </h3>
                  </Accordion.Header>
                  <Accordion.Content
                    className="attorney-accordion-content"
                    style={{ overflow: "hidden" }}
                  >
                    <div style={{ paddingBottom: 24 }}>
                      <p style={{ fontSize: 15, color: "#555", lineHeight: 1.8, margin: 0 }}>
                        {item.answer}
                      </p>
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              </FadeIn>
            ))}
          </Accordion.Root>
          <div style={{ borderTop: "1px solid #E0E0E0" }} />
        </div>
      </section>

      {/* SECTION 8: CTA — dark, centered headline, geometric edge vectors */}
      <section style={{ background: DARK, position: "relative", overflow: "hidden", padding: "120px 24px" }}>
        {/* Corner geometric lines */}
        <svg width="200" height="200" viewBox="0 0 200 200"
          style={{ position: "absolute", top: 0, left: 0, opacity: 0.12, pointerEvents: "none" }}>
          <path d="M0 0 L80 0 L0 80" stroke={GOLD} strokeWidth="1" fill="none" />
          <path d="M0 0 L120 0 L0 120" stroke={GOLD} strokeWidth="0.5" fill="none" />
        </svg>
        <svg width="200" height="200" viewBox="0 0 200 200"
          style={{ position: "absolute", bottom: 0, right: 0, opacity: 0.12, pointerEvents: "none", transform: "rotate(180deg)" }}>
          <path d="M0 0 L80 0 L0 80" stroke={GOLD} strokeWidth="1" fill="none" />
          <path d="M0 0 L120 0 L0 120" stroke={GOLD} strokeWidth="0.5" fill="none" />
        </svg>

        <FadeIn>
          <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center", position: "relative" }}>
            <div style={{ width: 80, height: 3, background: GOLD, margin: "0 auto 40px" }} />
            <h2 style={{
              fontSize: "clamp(32px, 5vw, 64px)",
              fontWeight: 500,
              fontFamily: displayFont,
              color: "#fff",
              lineHeight: 1.1,
              marginBottom: 48,
            }}>
              Your Case Deserves a Fighter
            </h2>
            <button style={{
              padding: "18px 48px",
              background: GOLD,
              color: DARK,
              border: "none",
              fontSize: 15,
              fontWeight: 700,
              fontFamily: displayFont,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              cursor: "pointer",
            }}>
              {t.hero.cta}
            </button>
          </div>
        </FadeIn>
      </section>

      {/* SECTION 9: Footer — slightly lighter dark, two-column */}
      <footer style={{
        background: DARK_FOOTER,
        padding: "40px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 24,
      }}>
        <div style={{
          fontSize: 15,
          fontWeight: 500,
          color: "#fff",
          fontFamily: displayFont,
          letterSpacing: "0.02em",
        }}>
          {t.name}
        </div>
        <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
          {["Privacy Policy", "Terms of Use", "Disclaimer", "Contact"].map(link => (
            <a key={link} href="#" style={{
              fontSize: 13,
              color: "rgba(255,255,255,0.65)",
              textDecoration: "none",
              letterSpacing: "0.04em",
              fontFamily: bodyFont,
            }}>
              {link}
            </a>
          ))}
        </div>
      </footer>

    </div>
  )
}
