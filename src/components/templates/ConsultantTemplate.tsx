"use client"

import type { TemplateConfig } from "@/data/templates"
import FadeIn from "@/components/motion/FadeIn"
import CountUp from "@/components/motion/CountUp"

const BLACK = "#000000"
const PURPLE = "#4E2FFF"
const GRAY_BG = "#F2F6F8"
const WHITE = "#FFFFFF"

const DG = "'Darker Grotesque', sans-serif"
const MANROPE = "'Manrope', sans-serif"

const CLIENTS = ["Meridian Partners", "Stratum Capital", "Vela Group", "Nexbridge", "Arclight Advisory"]

const SERVICES = [
  { title: "Growth Strategy", description: "We map your market position, identify your highest-leverage growth levers, and build a 90-day plan your team can actually execute." },
  { title: "Operational Design", description: "Org charts that ship results. Process architecture that scales without adding headcount. Systems that compound." },
  { title: "Capital Allocation", description: "Where your next dollar goes determines your next decade. We model the tradeoffs and give you a defensible answer." },
  { title: "Market Entry", description: "New geographies, new verticals, new channels. We run the analysis, stress-test the assumptions, and go with you." },
]

const INSIGHTS = [
  { category: "Growth", title: "Scaling Past $10M", excerpt: "The inflection points that separate companies that stall at eight figures from those that compound past them." },
  { category: "Talent", title: "The Hiring Playbook", excerpt: "How the best operators build a recruiting engine that runs itself -- and stops costing them deals." },
  { category: "Strategy", title: "Market Entry Strategy", excerpt: "A field guide for entering new markets without burning budget on assumptions. Data first, then conviction." },
]

export default function ConsultantTemplate({ template: t }: { readonly template: TemplateConfig }) {
  return (
    <div style={{ minHeight: "100vh", background: GRAY_BG, fontFamily: MANROPE, color: BLACK }}>

      {/* HERO -- BLACK */}
      <section style={{ background: BLACK, position: "relative", overflow: "hidden", padding: "0 24px" }}>
        {/* Purple glow orb behind photo */}
        <div style={{
          position: "absolute", top: "50%", right: "18%",
          transform: "translate(50%, -50%)",
          width: 300, height: 300,
          background: PURPLE,
          borderRadius: "50%",
          filter: "blur(192px)",
          opacity: 0.4,
          pointerEvents: "none",
        }} />

        <div style={{
          maxWidth: 1160, margin: "0 auto",
          display: "flex", alignItems: "center",
          minHeight: "88vh",
          gap: 80,
        }}>
          {/* Left text block */}
          <div style={{ flex: "0 0 55%", paddingTop: 80, paddingBottom: 80 }}>
            <FadeIn>
              <p style={{
                fontSize: 11, letterSpacing: 3, textTransform: "uppercase",
                color: PURPLE, fontWeight: 700, marginBottom: 28,
                fontFamily: MANROPE,
              }}>
                Business Strategy &amp; Growth Consulting
              </p>
            </FadeIn>
            <FadeIn delay={0.08}>
              <h1 style={{
                fontSize: "clamp(60px, 8vw, 100px)",
                fontFamily: DG,
                fontWeight: 900,
                color: WHITE,
                lineHeight: 0.95,
                marginBottom: 0,
                letterSpacing: "-0.01em",
              }}>
                {t.hero.headline}
              </h1>
            </FadeIn>
            {/* Thin purple accent line */}
            <FadeIn delay={0.14}>
              <div style={{ width: 80, height: 2, background: PURPLE, margin: "28px 0" }} />
            </FadeIn>
            <FadeIn delay={0.18}>
              <p style={{
                fontSize: 17, color: "rgba(255,255,255,0.6)",
                lineHeight: 1.75, maxWidth: 460,
                fontFamily: MANROPE, marginBottom: 44,
              }}>
                {t.hero.subheadline}
              </p>
            </FadeIn>
            <FadeIn delay={0.24}>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <button
                  style={{
                    padding: "16px 36px", background: PURPLE, color: WHITE,
                    border: "none", borderRadius: 4, fontSize: 14,
                    fontWeight: 700, cursor: "pointer", letterSpacing: 0.5,
                    fontFamily: MANROPE,
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.opacity = "0.85" }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = "1" }}
                >
                  {t.hero.cta}
                </button>
                <button style={{
                  padding: "16px 36px", background: "transparent", color: "rgba(255,255,255,0.7)",
                  border: "1px solid rgba(255,255,255,0.22)", borderRadius: 4,
                  fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: MANROPE,
                }}>
                  {t.hero.secondaryCta ?? "See Our Work"}
                </button>
              </div>
            </FadeIn>
          </div>

          {/* Right: circular photo placeholder */}
          <div style={{ flex: "1 1 auto", display: "flex", justifyContent: "center", position: "relative" }}>
            <div style={{
              width: 400, height: 400, borderRadius: "50%",
              background: "linear-gradient(145deg, #2a2a2a 0%, #1a1a1a 100%)",
              border: "1px solid rgba(255,255,255,0.07)",
              flexShrink: 0,
            }} />
          </div>
        </div>
      </section>

      {/* CLIENTS -- GRAY */}
      <section style={{ background: GRAY_BG, padding: "44px 24px", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <FadeIn>
          <div style={{
            maxWidth: 1000, margin: "0 auto",
            display: "flex", alignItems: "center", gap: 48, flexWrap: "wrap",
          }}>
            <span style={{
              fontSize: 10, letterSpacing: 3, textTransform: "uppercase",
              color: "#9CA3AF", fontWeight: 700, whiteSpace: "nowrap",
              fontFamily: MANROPE,
            }}>
              Trusted by industry leaders
            </span>
            {CLIENTS.map(name => (
              <span key={name} style={{
                fontSize: 15, fontWeight: 700, color: "#6B7280", opacity: 0.45,
                letterSpacing: "-0.01em", fontFamily: DG,
              }}>
                {name}
              </span>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* INFO BOX -- GRAY */}
      <section style={{ background: GRAY_BG, padding: "56px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <FadeIn>
            <div style={{
              display: "flex", alignItems: "center", gap: 40,
              background: WHITE, borderRadius: 6,
              padding: "40px 48px",
              boxShadow: "0 2px 20px rgba(0,0,0,0.05)",
            }}>
              {/* Purple left accent bar */}
              <div style={{ width: 4, height: 72, background: PURPLE, borderRadius: 2, flexShrink: 0 }} />
              <div>
                <div style={{
                  fontSize: "clamp(40px, 5vw, 60px)",
                  fontFamily: DG,
                  fontWeight: 900,
                  color: BLACK,
                  lineHeight: 1,
                  marginBottom: 8,
                }}>
                  120+ Companies Scaled
                </div>
                <p style={{
                  fontSize: 15, color: "#6B7280", fontFamily: MANROPE,
                  lineHeight: 1.6, maxWidth: 560, margin: 0,
                }}>
                  From Series A to Fortune 500. We have worked inside the numbers long enough to know which levers actually move the needle -- and which ones just look good in decks.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SERVICE GRID -- PURPLE (SIGNATURE SECTION) */}
      <section style={{ background: PURPLE, padding: "96px 24px" }}>
        <div style={{ maxWidth: 1060, margin: "0 auto" }}>
          <FadeIn>
            <h2 style={{
              fontSize: "clamp(52px, 7vw, 88px)",
              fontFamily: DG,
              fontWeight: 900,
              color: WHITE,
              lineHeight: 0.95,
              marginBottom: 64,
              letterSpacing: "-0.01em",
            }}>
              What We Do
            </h2>
          </FadeIn>

          {/* 2x2 grid with cross-divider lines */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 6,
            overflow: "hidden",
          }}>
            {SERVICES.map((svc, i) => (
              <FadeIn key={svc.title} delay={i * 0.07}>
                <div style={{
                  background: WHITE,
                  padding: "48px 44px",
                  borderRight: i % 2 === 0 ? "1px solid rgba(78,47,255,0.12)" : "none",
                  borderBottom: i < 2 ? "1px solid rgba(78,47,255,0.12)" : "none",
                  transition: "background 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "#F8F7FF" }}
                onMouseLeave={e => { e.currentTarget.style.background = WHITE }}
                >
                  <div style={{
                    width: 32, height: 2, background: PURPLE, marginBottom: 24,
                  }} />
                  <h3 style={{
                    fontSize: 28, fontFamily: DG, fontWeight: 800,
                    color: BLACK, marginBottom: 14, lineHeight: 1,
                  }}>
                    {svc.title}
                  </h3>
                  <p style={{
                    fontSize: 14, color: "#6B7280", lineHeight: 1.8,
                    fontFamily: MANROPE, margin: 0,
                  }}>
                    {svc.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* STATS BAND -- GRAY */}
      <section style={{ background: GRAY_BG, padding: "72px 24px", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: `repeat(${Math.min(t.stats.length, 4)}, 1fr)`,
            gap: 0,
          }}>
            {t.stats.slice(0, 4).map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.07}>
                <div style={{
                  padding: "32px 36px",
                  borderRight: i < Math.min(t.stats.length, 4) - 1 ? "1px solid rgba(0,0,0,0.08)" : "none",
                  textAlign: "center",
                }}>
                  <div style={{
                    fontSize: "clamp(44px, 5vw, 64px)",
                    fontFamily: DG, fontWeight: 900, color: PURPLE, lineHeight: 1,
                    marginBottom: 8,
                  }}>
                    <CountUp end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                  </div>
                  <div style={{ fontSize: 13, color: "#6B7280", fontFamily: MANROPE, fontWeight: 500 }}>
                    {stat.label}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG / INSIGHTS -- GRAY */}
      <section style={{ background: GRAY_BG, padding: "88px 24px" }}>
        <div style={{ maxWidth: 1060, margin: "0 auto" }}>
          <FadeIn>
            <div style={{
              display: "flex", justifyContent: "space-between",
              alignItems: "flex-end", marginBottom: 52, flexWrap: "wrap", gap: 16,
            }}>
              <h2 style={{
                fontSize: "clamp(40px, 5vw, 64px)",
                fontFamily: DG, fontWeight: 900,
                color: BLACK, lineHeight: 0.95, margin: 0,
              }}>
                From the Desk
              </h2>
              <button style={{
                padding: "12px 28px", background: "transparent", color: PURPLE,
                border: `1.5px solid ${PURPLE}`, borderRadius: 4,
                fontSize: 13, fontWeight: 700, cursor: "pointer",
                fontFamily: MANROPE, letterSpacing: 0.3,
              }}>
                All Insights
              </button>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {INSIGHTS.map((article, i) => (
              <FadeIn key={article.title} delay={i * 0.08}>
                <div
                  style={{
                    background: WHITE, borderRadius: 6, padding: "36px 32px",
                    boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
                    cursor: "pointer", transition: "box-shadow 0.2s, transform 0.2s",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = "translateY(-4px)"
                    e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.1)"
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = "translateY(0)"
                    e.currentTarget.style.boxShadow = "0 2px 16px rgba(0,0,0,0.05)"
                  }}
                >
                  <span style={{
                    fontSize: 10, letterSpacing: 2, textTransform: "uppercase",
                    color: PURPLE, fontWeight: 700, fontFamily: MANROPE,
                  }}>
                    {article.category}
                  </span>
                  <h3 style={{
                    fontSize: 24, fontFamily: DG, fontWeight: 800,
                    color: BLACK, margin: "12px 0 10px", lineHeight: 1.05,
                  }}>
                    {article.title}
                  </h3>
                  <p style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.75, fontFamily: MANROPE, margin: 0 }}>
                    {article.excerpt}
                  </p>
                  <div style={{
                    marginTop: 24, fontSize: 12, fontWeight: 700,
                    color: PURPLE, fontFamily: MANROPE,
                    display: "flex", alignItems: "center", gap: 6,
                  }}>
                    Read More
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={PURPLE} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL -- GRAY */}
      <section style={{ background: GRAY_BG, padding: "88px 24px", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <FadeIn>
            <div style={{
              display: "grid", gridTemplateColumns: "300px 1fr",
              gap: 72, alignItems: "center",
            }}>
              {/* Left: photo placeholder circle */}
              <div style={{
                width: 300, height: 300, borderRadius: "50%",
                background: "linear-gradient(145deg, #D1D5DB 0%, #E5E7EB 100%)",
                flexShrink: 0,
              }} />
              {/* Right: quote */}
              <div>
                <div style={{
                  fontSize: 72, fontFamily: DG, fontWeight: 900,
                  color: PURPLE, lineHeight: 0.7, marginBottom: 20,
                  opacity: 0.6,
                }}>
                  &ldquo;
                </div>
                <p style={{
                  fontSize: "clamp(22px, 3vw, 32px)",
                  fontFamily: DG, fontWeight: 700,
                  color: BLACK, lineHeight: 1.2,
                  margin: "0 0 28px",
                }}>
                  {t.testimonials[0]?.quote ?? "They did not just advise us -- they got in the trenches and helped us build something we are proud of."}
                </p>
                <div style={{ width: 32, height: 2, background: PURPLE, marginBottom: 16 }} />
                <p style={{ fontSize: 14, fontWeight: 700, color: BLACK, fontFamily: MANROPE, margin: "0 0 4px" }}>
                  {t.testimonials[0]?.name ?? "Sarah Okafor"}
                </p>
                <p style={{ fontSize: 13, color: "#6B7280", fontFamily: MANROPE, margin: 0 }}>
                  {t.testimonials[0]?.role ?? "CEO"}{t.testimonials[0]?.company ? `, ${t.testimonials[0].company}` : ""}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA -- BLACK */}
      <section style={{
        background: BLACK, padding: "120px 24px",
        position: "relative", overflow: "hidden", textAlign: "center",
      }}>
        {/* Purple glow orb */}
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: 480, height: 480,
          background: PURPLE,
          borderRadius: "50%",
          filter: "blur(192px)",
          opacity: 0.3,
          pointerEvents: "none",
        }} />

        {/* Decorative geometric SVG lines */}
        <svg
          aria-hidden="true"
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none" }}
          viewBox="0 0 1200 500"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
        >
          <line x1="0" y1="0" x2="220" y2="500" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          <line x1="1200" y1="0" x2="980" y2="500" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          <line x1="0" y1="500" x2="160" y2="0" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          <line x1="1200" y1="500" x2="1040" y2="0" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
        </svg>

        <div style={{ position: "relative", zIndex: 1 }}>
          <FadeIn>
            <h2 style={{
              fontSize: "clamp(52px, 8vw, 96px)",
              fontFamily: DG, fontWeight: 900,
              color: WHITE, lineHeight: 0.95,
              marginBottom: 28, letterSpacing: "-0.01em",
            }}>
              Ready to Unlock Your<br />Next Stage of Growth?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p style={{
              fontSize: 16, color: "rgba(255,255,255,0.55)",
              fontFamily: MANROPE, maxWidth: 480,
              margin: "0 auto 44px", lineHeight: 1.7,
            }}>
              Book a 30-minute strategy session. No decks, no pitch -- just a direct conversation about what is holding your business back.
            </p>
          </FadeIn>
          <FadeIn delay={0.18}>
            <button
              style={{
                padding: "20px 52px", background: PURPLE, color: WHITE,
                border: "none", borderRadius: 4,
                fontSize: 15, fontWeight: 700, cursor: "pointer",
                fontFamily: MANROPE, letterSpacing: 0.5,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = "0.85" }}
              onMouseLeave={e => { e.currentTarget.style.opacity = "1" }}
            >
              Book a Strategy Call
            </button>
          </FadeIn>
        </div>
      </section>

      {/* FOOTER -- BLACK */}
      <footer style={{ background: BLACK, padding: "64px 24px 40px" }}>
        <div style={{ maxWidth: 1060, margin: "0 auto" }}>
          {/* 4-column link groups */}
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
            gap: 40, marginBottom: 56,
          }}>
            {[
              { heading: "Services", links: ["Growth Strategy", "Operations", "Capital Allocation", "Market Entry"] },
              { heading: "Company", links: ["About", "Case Studies", "Insights", "Careers"] },
              { heading: "Resources", links: ["Blog", "Playbooks", "Templates", "Webinars"] },
              { heading: "Connect", links: ["Contact", "LinkedIn", "Newsletter", "Book a Call"] },
            ].map(group => (
              <div key={group.heading}>
                <p style={{
                  fontSize: 10, letterSpacing: 3, textTransform: "uppercase",
                  color: "rgba(255,255,255,0.35)", fontWeight: 700,
                  fontFamily: MANROPE, marginBottom: 16,
                }}>
                  {group.heading}
                </p>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                  {group.links.map(link => (
                    <li key={link}>
                      <span style={{
                        fontSize: 14, color: "rgba(255,255,255,0.5)",
                        fontFamily: MANROPE, cursor: "pointer",
                        transition: "color 0.15s",
                      }}>
                        {link}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: 28,
            display: "flex", justifyContent: "space-between",
            alignItems: "center", flexWrap: "wrap", gap: 12,
          }}>
            <span style={{
              fontSize: 20, fontFamily: DG, fontWeight: 900,
              color: WHITE, letterSpacing: "-0.01em",
            }}>
              {t.name}
            </span>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", fontFamily: MANROPE, margin: 0 }}>
              &copy; 2026 {t.name}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

    </div>
  )
}
