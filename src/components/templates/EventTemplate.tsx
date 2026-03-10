"use client"

import { useState } from "react"
import type { TemplateConfig } from "@/data/templates"
import * as Tabs from "@radix-ui/react-tabs"
import * as Dialog from "@radix-ui/react-dialog"
import FadeIn from "@/components/motion/FadeIn"
import CountUp from "@/components/motion/CountUp"
import FloatingElement from "@/components/motion/FloatingElement"
import TestimonialGrid from "@/components/sections/TestimonialGrid"
import FAQ from "@/components/sections/FAQ"

const SPEAKERS = [
  {
    name: "Dr. Sarah Chen",
    role: "AI Research Lead",
    org: "OpenAI",
    bio: "Dr. Sarah Chen leads frontier AI research at OpenAI, specializing in large language model alignment and safety. With over 15 years in machine learning, she has published 40+ papers and holds a PhD from MIT. Her work on constitutional AI has shaped industry safety standards.",
  },
  {
    name: "Marcus Williams",
    role: "VP Engineering",
    org: "Google DeepMind",
    bio: "Marcus Williams oversees engineering for Google DeepMind's applied AI division. Previously at Meta AI and Stanford's AI Lab, he specializes in scaling ML infrastructure to production. He led the team behind Gemini's multi-modal capabilities.",
  },
  {
    name: "Priya Patel",
    role: "CTO",
    org: "Anthropic",
    bio: "As CTO of Anthropic, Priya Patel drives the technical vision behind Claude and the company's interpretability research. A former principal engineer at Google Brain, she is a leading voice on responsible AI development and mechanistic interpretability.",
  },
  {
    name: "James Rodriguez",
    role: "Founder",
    org: "Scale AI",
    bio: "James Rodriguez founded Scale AI at age 22 and grew it into a $7B+ data infrastructure company. Forbes 30 Under 30 honoree and Y Combinator alum, he advises the U.S. Department of Defense on AI readiness and data strategy.",
  },
] as const

const AGENDA_BY_DAY: Record<
  string,
  readonly { time: string; title: string; desc: string }[]
> = {
  "Day 1": [
    {
      time: "9:00 AM",
      title: "Opening Keynote",
      desc: "The State of AI: What is Real, What is Hype, and What is Next",
    },
    {
      time: "11:00 AM",
      title: "Breakout Sessions",
      desc: "Track A: LLM Fine-tuning | Track B: Computer Vision | Track C: ML Ops",
    },
    {
      time: "2:00 PM",
      title: "Workshop Track",
      desc: "Hands-on sessions: Fine-tuning LLMs, Building RAG Systems, Production ML Pipelines",
    },
    {
      time: "5:00 PM",
      title: "Networking Reception",
      desc: "Connect with speakers, sponsors, and fellow attendees over drinks and appetizers",
    },
  ],
  "Day 2": [
    {
      time: "9:30 AM",
      title: "Fireside Chat",
      desc: "AI and Creativity: How generative models are reshaping art, music, and storytelling",
    },
    {
      time: "10:00 AM",
      title: "Panel: AI in Enterprise",
      desc: "How Fortune 500 companies are deploying AI at scale today",
    },
    {
      time: "1:30 PM",
      title: "Deep Dive Sessions",
      desc: "Technical deep dives into transformer architectures, RLHF, and multi-agent systems",
    },
    {
      time: "4:00 PM",
      title: "Startup Showcase",
      desc: "50 hand-picked AI startups demo their products to investors and enterprise buyers",
    },
  ],
  "Day 3": [
    {
      time: "9:00 AM",
      title: "Industry Roundtables",
      desc: "Healthcare, Finance, Legal, and Education -- domain-specific AI applications",
    },
    {
      time: "11:00 AM",
      title: "Closing Keynote",
      desc: "The Road Ahead: AI Safety, Regulation, and the Next Frontier",
    },
    {
      time: "1:00 PM",
      title: "Awards Ceremony",
      desc: "Recognizing breakthrough research, best startup demo, and community contributions",
    },
  ],
} as const

const DAY_KEYS = Object.keys(AGENDA_BY_DAY)

export default function EventTemplate({
  template: t,
}: {
  readonly template: TemplateConfig
}) {
  const c = t.colors

  return (
    <div
      style={{
        minHeight: "100vh",
        background: c.background,
        color: c.text,
        fontFamily: `'${t.fonts.body}', sans-serif`,
      }}
    >
      <style>{`
        @media (max-width: 640px) {
          .evt-floating-particle { display: none !important; }
          .evt-countdown-card { width: 64px !important; padding: 12px 0 !important; }
          .evt-countdown-value { font-size: 24px !important; }
          .evt-hero-section { padding: 80px 16px 56px !important; }
          .evt-section { padding: 48px 16px !important; }
          .evt-timeline-grid { display: flex !important; flex-direction: column !important; }
          .evt-timeline-line-center { display: none !important; }
          .evt-timeline-line-left { display: block !important; }
          .evt-timeline-card { text-align: left !important; }
          .evt-speaker-grid { grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)) !important; }
        }
      `}</style>

      {/* Hero: Full-bleed gradient, huge headline, countdown */}
      <section
        className="evt-hero-section"
        style={{
          padding: "120px 24px 80px",
          background: t.gradient,
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        {/* Floating particles -- hidden on mobile via CSS */}
        {Array.from({ length: 8 }, (_, i) => (
          <FloatingElement
            key={i}
            duration={6 + (i % 4) * 2}
            delay={i * 0.7}
            style={{
              position: "absolute",
              top: `${10 + ((i * 11) % 80)}%`,
              left: `${5 + ((i * 13) % 90)}%`,
              width: 4 + (i % 3) * 3,
              height: 4 + (i % 3) * 3,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.15)",
              pointerEvents: "none",
            }}
          >
            <div className="evt-floating-particle" />
          </FloatingElement>
        ))}

        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <FadeIn>
            <p
              style={{
                fontSize: 14,
                letterSpacing: 3,
                color: c.accent,
                fontWeight: 700,
                marginBottom: 20,
              }}
            >
              JUNE 15-17, 2026 -- SAN FRANCISCO
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1
              style={{
                fontSize: "clamp(36px, 7vw, 80px)",
                fontWeight: 900,
                color: "#fff",
                lineHeight: 1.0,
                marginBottom: 24,
                fontFamily: `'${t.fonts.display}', sans-serif`,
                textTransform: "uppercase",
                textShadow: "0 2px 12px rgba(0,0,0,0.3)",
              }}
            >
              {t.hero.headline}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p
              style={{
                fontSize: 18,
                color: "rgba(255,255,255,0.85)",
                lineHeight: 1.7,
                maxWidth: 600,
                margin: "0 auto 40px",
              }}
            >
              {t.hero.subheadline}
            </p>
          </FadeIn>

          {/* Countdown */}
          <FadeIn delay={0.3}>
            <div
              style={{
                display: "flex",
                gap: 16,
                justifyContent: "center",
                marginBottom: 40,
                flexWrap: "wrap",
              }}
            >
              {[
                { value: "102", label: "Days" },
                { value: "14", label: "Hours" },
                { value: "37", label: "Minutes" },
                { value: "52", label: "Seconds" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="evt-countdown-card"
                  style={{
                    width: 80,
                    padding: "16px 0",
                    background: "rgba(0,0,0,0.3)",
                    borderRadius: 12,
                    border: "1px solid rgba(255,255,255,0.15)",
                    backdropFilter: "blur(8px)",
                    perspective: "200px",
                  }}
                >
                  <div
                    className="evt-countdown-value"
                    style={{
                      fontSize: 32,
                      fontWeight: 800,
                      color: "#fff",
                      fontFamily: `'${t.fonts.display}', sans-serif`,
                      transform: "rotateX(5deg)",
                    }}
                  >
                    {item.value}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "rgba(255,255,255,0.6)",
                      marginTop: 4,
                      textTransform: "uppercase",
                      letterSpacing: 1,
                    }}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div
              style={{
                display: "flex",
                gap: 12,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <button
                style={{
                  padding: "18px 40px",
                  background: c.accent,
                  color: "#000",
                  borderRadius: 10,
                  fontSize: 16,
                  fontWeight: 800,
                  border: "none",
                  cursor: "pointer",
                  animation: "pulse-glow 2s ease-in-out infinite",
                  transition: "transform 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                {t.hero.cta}
              </button>
              <button
                style={{
                  padding: "18px 40px",
                  background: "rgba(255,255,255,0.1)",
                  color: "#fff",
                  borderRadius: 10,
                  fontSize: 16,
                  fontWeight: 600,
                  border: "1px solid rgba(255,255,255,0.25)",
                  cursor: "pointer",
                  transition: "background 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background =
                    "rgba(255,255,255,0.18)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "rgba(255,255,255,0.1)")
                }
              >
                {t.hero.secondaryCta}
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats bar */}
      <section
        style={{
          padding: "40px 24px",
          background: c.surface,
          borderBottom: `1px solid ${c.border}`,
        }}
      >
        <FadeIn>
          <div
            style={{
              maxWidth: 800,
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
              gap: 24,
            }}
          >
            {t.stats.map((stat) => (
              <div key={stat.label} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: 32,
                    fontWeight: 800,
                    color: c.primary,
                    fontFamily: `'${t.fonts.display}', sans-serif`,
                  }}
                >
                  <CountUp
                    end={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </div>
                <div
                  style={{ fontSize: 13, color: "#555", marginTop: 4 }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Speakers Grid with Dialog bios */}
      <section
        className="evt-section"
        style={{ padding: "80px 24px", background: c.background }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <FadeIn>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 36px)",
                fontWeight: 900,
                textAlign: "center",
                marginBottom: 48,
                fontFamily: `'${t.fonts.display}', sans-serif`,
                textTransform: "uppercase",
              }}
            >
              Featured Speakers
            </h2>
          </FadeIn>
          <div
            className="evt-speaker-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 24,
            }}
          >
            {SPEAKERS.map((speaker, i) => (
              <FadeIn key={speaker.name} delay={i * 0.1}>
                <SpeakerCard speaker={speaker} colors={c} fonts={t.fonts} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Agenda Timeline with Tabs */}
      <section
        className="evt-section"
        style={{ padding: "80px 24px", background: c.surface }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <FadeIn>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 36px)",
                fontWeight: 900,
                textAlign: "center",
                marginBottom: 40,
                fontFamily: `'${t.fonts.display}', sans-serif`,
                textTransform: "uppercase",
              }}
            >
              Event Schedule
            </h2>
          </FadeIn>

          <Tabs.Root defaultValue="Day 1">
            <Tabs.List
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 8,
                marginBottom: 40,
                flexWrap: "wrap",
              }}
            >
              {DAY_KEYS.map((day) => (
                <Tabs.Trigger
                  key={day}
                  value={day}
                  style={{
                    padding: "10px 28px",
                    borderRadius: 8,
                    border: `1px solid ${c.border}`,
                    background: c.background,
                    color: c.text,
                    fontSize: 14,
                    fontWeight: 700,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    fontFamily: `'${t.fonts.display}', sans-serif`,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                  }}
                  data-accent={c.primary}
                  onFocus={(e) => {
                    e.currentTarget.style.outline = `2px solid ${c.primary}`
                    e.currentTarget.style.outlineOffset = "2px"
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.outline = "none"
                  }}
                >
                  {day}
                </Tabs.Trigger>
              ))}
            </Tabs.List>

            <style>{`
              [data-state="active"][data-accent] {
                background: ${c.primary} !important;
                color: #fff !important;
                border-color: ${c.primary} !important;
              }
            `}</style>

            {DAY_KEYS.map((day) => (
              <Tabs.Content key={day} value={day}>
                <div style={{ position: "relative", paddingLeft: 32 }}>
                  {/* Left-aligned timeline line */}
                  <div
                    style={{
                      position: "absolute",
                      left: 7,
                      top: 8,
                      bottom: 8,
                      width: 2,
                      background: c.border,
                    }}
                  />
                  {AGENDA_BY_DAY[day].map((item, i) => (
                    <FadeIn key={item.title} delay={i * 0.08}>
                      <div
                        style={{
                          position: "relative",
                          marginBottom:
                            i === AGENDA_BY_DAY[day].length - 1 ? 0 : 24,
                        }}
                      >
                        {/* Dot */}
                        <div
                          style={{
                            position: "absolute",
                            left: -29,
                            top: 6,
                            width: 14,
                            height: 14,
                            borderRadius: "50%",
                            background: c.primary,
                            border: `3px solid ${c.surface}`,
                            boxShadow: `0 0 0 2px ${c.primary}`,
                            zIndex: 1,
                          }}
                        />
                        <div
                          style={{
                            padding: 20,
                            borderRadius: 12,
                            background: c.background,
                            border: `1px solid ${c.border}`,
                            transition: "box-shadow 0.2s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = `0 4px 20px ${c.primary}15`
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = "none"
                          }}
                        >
                          <p
                            style={{
                              fontSize: 12,
                              color: c.primary,
                              fontWeight: 700,
                              marginBottom: 4,
                              textTransform: "uppercase",
                              letterSpacing: 0.5,
                            }}
                          >
                            {item.time}
                          </p>
                          <h4
                            style={{
                              fontSize: 16,
                              fontWeight: 700,
                              marginBottom: 6,
                              color: c.text,
                            }}
                          >
                            {item.title}
                          </h4>
                          <p
                            style={{
                              fontSize: 14,
                              color: "#555",
                              lineHeight: 1.6,
                              margin: 0,
                            }}
                          >
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </Tabs.Content>
            ))}
          </Tabs.Root>
        </div>
      </section>

      {/* Sponsors */}
      <section
        className="evt-section"
        style={{ padding: "64px 24px", background: c.background }}
      >
        <FadeIn>
          <div
            style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}
          >
            <p
              style={{
                fontSize: 13,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: "#555",
                marginBottom: 24,
                fontWeight: 600,
              }}
            >
              Sponsored By
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(120px, 1fr))",
                gap: 16,
              }}
            >
              {[
                "NVIDIA",
                "Microsoft",
                "AWS",
                "Google Cloud",
                "Meta AI",
                "Databricks",
              ].map((name) => (
                <div
                  key={name}
                  style={{
                    padding: 20,
                    borderRadius: 12,
                    background: c.surface,
                    border: `1px solid ${c.border}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "border-color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = c.primary
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = c.border
                  }}
                >
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: "#444",
                    }}
                  >
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Early Bird CTA */}
      <section
        style={{
          padding: "80px 24px",
          background: t.gradient,
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            maxWidth: 600,
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <FadeIn>
            <p
              style={{
                fontSize: 16,
                color: c.accent,
                fontWeight: 700,
                marginBottom: 12,
              }}
            >
              Only 47 Spots Remaining
            </p>
            <h2
              style={{
                fontSize: "clamp(24px, 4vw, 44px)",
                fontWeight: 900,
                color: "#fff",
                marginBottom: 16,
                fontFamily: `'${t.fonts.display}', sans-serif`,
                textTransform: "uppercase",
                textShadow: "0 2px 8px rgba(0,0,0,0.25)",
              }}
            >
              Early Bird Pricing Ends May 1
            </h2>
            <p
              style={{
                fontSize: 17,
                color: "rgba(255,255,255,0.85)",
                marginBottom: 32,
                lineHeight: 1.6,
              }}
            >
              Lock in your ticket at 40% off before prices go up. Group
              discounts available for teams of 5+.
            </p>
            <div
              style={{
                display: "flex",
                gap: 16,
                justifyContent: "center",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <button
                style={{
                  padding: "18px 40px",
                  background: c.accent,
                  color: "#000",
                  borderRadius: 10,
                  fontSize: 17,
                  fontWeight: 800,
                  border: "none",
                  cursor: "pointer",
                  animation: "pulse-glow 2s ease-in-out infinite",
                  transition: "transform 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                Get Tickets - $299
              </button>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <span
                  style={{
                    fontSize: 14,
                    color: "rgba(255,255,255,0.6)",
                    textDecoration: "line-through",
                  }}
                >
                  $499
                </span>
                <span
                  style={{
                    fontSize: 14,
                    color: c.accent,
                    fontWeight: 700,
                  }}
                >
                  Save $200
                </span>
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
        mutedColor="#555"
        accentColor={c.accent}
        borderColor={c.border}
      />

      {/* FAQ */}
      <FAQ
        items={t.faq}
        backgroundColor={c.background}
        textColor={c.text}
        mutedColor="#555"
        accentColor={c.primary}
        borderColor={c.border}
      />

      {/* Footer */}
      <footer
        style={{
          padding: "32px 24px",
          textAlign: "center",
          borderTop: `1px solid ${c.border}`,
          background: c.surface,
        }}
      >
        <p style={{ fontSize: 13, color: "#555" }}>
          {t.name} Template -- Partner Portal Templates
        </p>
      </footer>
    </div>
  )
}

/* ------------------------------------------------------------------
   SpeakerCard -- with Radix Dialog for full bio
   ------------------------------------------------------------------ */

interface SpeakerCardProps {
  readonly speaker: {
    readonly name: string
    readonly role: string
    readonly org: string
    readonly bio: string
  }
  readonly colors: TemplateConfig["colors"]
  readonly fonts: TemplateConfig["fonts"]
}

function SpeakerCard({ speaker, colors: c, fonts }: SpeakerCardProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          style={{
            textAlign: "center",
            padding: 24,
            borderRadius: 16,
            background: c.surface,
            border: `1px solid ${c.border}`,
            cursor: "pointer",
            width: "100%",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
            display: "block",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-4px)"
            e.currentTarget.style.boxShadow = `0 8px 24px ${c.primary}18`
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)"
            e.currentTarget.style.boxShadow = "none"
          }}
        >
          <div
            style={{
              width: 100,
              height: 100,
              borderRadius: "50%",
              margin: "0 auto 16px",
              background: `linear-gradient(135deg, ${c.primary}44, ${c.primaryLight}44)`,
              border: `2px solid ${c.primary}44`,
              boxShadow: `0 0 20px ${c.primary}22`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 800,
              color: c.primary,
              fontFamily: `'${fonts.display}', sans-serif`,
            }}
          >
            {speaker.name.split(" ").slice(-1)[0][0]}
          </div>
          <h4
            style={{
              fontSize: 16,
              fontWeight: 700,
              color: c.text,
              marginBottom: 4,
            }}
          >
            {speaker.name}
          </h4>
          <p style={{ fontSize: 13, color: "#555", marginBottom: 2 }}>
            {speaker.role}
          </p>
          <p
            style={{
              fontSize: 12,
              color: c.primary,
              fontWeight: 600,
              marginTop: 4,
            }}
          >
            {speaker.org}
          </p>
          <p
            style={{
              fontSize: 11,
              color: c.primary,
              marginTop: 10,
              fontWeight: 600,
              opacity: 0.7,
              textTransform: "uppercase",
              letterSpacing: 1,
            }}
          >
            View Bio
          </p>
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0, 0, 0, 0.6)",
            backdropFilter: "blur(4px)",
            zIndex: 9998,
            animation: "fadeIn 150ms ease-out",
          }}
        />
        <Dialog.Content
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: c.surface,
            borderRadius: 20,
            padding: 32,
            maxWidth: 480,
            width: "calc(100% - 32px)",
            maxHeight: "85vh",
            overflowY: "auto",
            zIndex: 9999,
            boxShadow: "0 24px 64px rgba(0,0,0,0.3)",
            animation: "scaleIn 200ms ease-out",
          }}
        >
          <style>{`
            @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
            @keyframes scaleIn { from { opacity: 0; transform: translate(-50%, -50%) scale(0.95) } to { opacity: 1; transform: translate(-50%, -50%) scale(1) } }
          `}</style>
          <div style={{ textAlign: "center", marginBottom: 24 }}>
            <div
              style={{
                width: 120,
                height: 120,
                borderRadius: "50%",
                margin: "0 auto 20px",
                background: `linear-gradient(135deg, ${c.primary}44, ${c.primaryLight}44)`,
                border: `3px solid ${c.primary}44`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 36,
                fontWeight: 800,
                color: c.primary,
                fontFamily: `'${fonts.display}', sans-serif`,
              }}
            >
              {speaker.name.split(" ").slice(-1)[0][0]}
            </div>
            <Dialog.Title
              style={{
                fontSize: 22,
                fontWeight: 800,
                color: c.text,
                marginBottom: 4,
                fontFamily: `'${fonts.display}', sans-serif`,
              }}
            >
              {speaker.name}
            </Dialog.Title>
            <Dialog.Description
              style={{
                fontSize: 14,
                color: "#555",
                marginBottom: 2,
              }}
            >
              {speaker.role}
            </Dialog.Description>
            <p
              style={{
                fontSize: 13,
                color: c.primary,
                fontWeight: 600,
                margin: "4px 0 0",
              }}
            >
              {speaker.org}
            </p>
          </div>
          <div
            style={{
              borderTop: `1px solid ${c.border}`,
              paddingTop: 20,
            }}
          >
            <p
              style={{
                fontSize: 15,
                color: "#333",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              {speaker.bio}
            </p>
          </div>
          <Dialog.Close asChild>
            <button
              aria-label="Close"
              style={{
                position: "absolute",
                top: 16,
                right: 16,
                width: 32,
                height: 32,
                borderRadius: "50%",
                border: "none",
                background: c.background,
                color: "#555",
                fontSize: 18,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background 0.15s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = c.border)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = c.background)
              }
            >
              x
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
