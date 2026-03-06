"use client"

import Link from "next/link"
import { useRef, useState, useCallback, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { TEMPLATES } from "@/data/templates"
import FloatingElement from "@/components/motion/FloatingElement"
import GlowCard from "@/components/motion/GlowCard"
import FadeIn from "@/components/motion/FadeIn"
import StaggerChildren, { staggerItem } from "@/components/motion/StaggerChildren"

function Tilt3DCard({
  children,
  gradient,
}: {
  readonly children: React.ReactNode
  readonly gradient: string
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg)")
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    const rotateX = (0.5 - y) * 12
    const rotateY = (x - 0.5) * 12
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`)
    setGlowPos({ x: x * 100, y: y * 100 })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)")
    setIsHovered(false)
  }, [])

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: "transform var(--duration-micro) var(--ease-out)",
        transformStyle: "preserve-3d",
        position: "relative",
        borderRadius: 20,
        overflow: "hidden",
        background: "var(--bg-surface)",
        border: "1px solid var(--border-color)",
      }}
    >
      {/* Glow overlay that follows cursor */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(400px circle at ${glowPos.x}% ${glowPos.y}%, rgba(255,255,255,0.06), transparent 40%)`,
          opacity: isHovered ? 1 : 0,
          transition: "opacity var(--duration-std) ease",
          pointerEvents: "none",
          zIndex: 10,
        }}
      />
      {children}
    </div>
  )
}

function StickyNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "var(--space-4) var(--space-6)",
        transition: "all var(--duration-std) ease",
        background: scrolled ? "rgba(10, 10, 15, 0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border-color)" : "1px solid transparent",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 18, fontWeight: 700, color: "var(--text-primary)", letterSpacing: "-0.02em", fontFamily: "var(--font-outfit)" }}>
            Partner Portal
          </span>
          <span style={{ fontSize: 13, color: "var(--accent-light)", fontWeight: 500, fontFamily: "var(--font-work-sans)" }}>
            Templates
          </span>
        </div>
        <Link
          href="/auth"
          style={{
            padding: "8px 20px",
            background: "var(--accent)",
            color: "#fff",
            borderRadius: 8,
            fontSize: 14,
            fontWeight: 600,
            transition: "opacity var(--duration-micro) ease",
            fontFamily: "var(--font-work-sans)",
          }}
        >
          Sign In
        </Link>
      </div>
    </nav>
  )
}

function HeroSection() {
  return (
    <section
      className="bg-grid"
      style={{
        padding: "160px 24px 100px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        minHeight: "85vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800,
          height: 600,
          background: "radial-gradient(ellipse at center, rgba(37,99,235,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Floating geometric shapes */}
      <FloatingElement
        duration={8}
        delay={0}
        style={{
          position: "absolute",
          top: "15%",
          left: "10%",
          width: 60,
          height: 60,
          border: "1px solid rgba(37,99,235,0.2)",
          borderRadius: 12,
          transform: "rotate(45deg)",
          pointerEvents: "none",
        }}
      >
        <div />
      </FloatingElement>
      <FloatingElement
        duration={10}
        delay={2}
        style={{
          position: "absolute",
          top: "25%",
          right: "12%",
          width: 40,
          height: 40,
          borderRadius: "50%",
          background: "rgba(37,99,235,0.08)",
          border: "1px solid rgba(37,99,235,0.15)",
          pointerEvents: "none",
        }}
      >
        <div />
      </FloatingElement>
      <FloatingElement
        duration={7}
        delay={1}
        style={{
          position: "absolute",
          bottom: "20%",
          left: "15%",
          width: 80,
          height: 80,
          borderRadius: "50%",
          background: "rgba(37,99,235,0.05)",
          filter: "blur(1px)",
          pointerEvents: "none",
        }}
      >
        <div />
      </FloatingElement>
      <FloatingElement
        duration={9}
        delay={3}
        style={{
          position: "absolute",
          bottom: "30%",
          right: "8%",
          width: 50,
          height: 50,
          border: "1px solid rgba(59,130,246,0.12)",
          borderRadius: 8,
          transform: "rotate(12deg)",
          pointerEvents: "none",
        }}
      >
        <div />
      </FloatingElement>

      <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <FadeIn delay={0.1}>
          <p
            style={{
              fontSize: 13,
              letterSpacing: 3,
              color: "var(--accent-light)",
              textTransform: "uppercase",
              marginBottom: 24,
              fontWeight: 600,
              fontFamily: "var(--font-work-sans)",
            }}
          >
            Conversion-Optimized Landing Pages
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <h1
            style={{
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: 24,
              letterSpacing: "-0.03em",
              fontFamily: "var(--font-outfit)",
              background: "linear-gradient(135deg, #fff 30%, var(--accent-light) 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Landing Pages That Actually Convert
          </h1>
        </FadeIn>
        <FadeIn delay={0.3}>
          <p
            style={{
              fontSize: 18,
              color: "var(--text-secondary)",
              lineHeight: 1.7,
              maxWidth: 560,
              margin: "0 auto 40px",
              fontFamily: "var(--font-work-sans)",
            }}
          >
            Six distinct, CRO-optimized templates. Each built with a different
            conversion architecture, advanced animations, and premium visual design.
          </p>
        </FadeIn>
        <FadeIn delay={0.4}>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="#templates"
              style={{
                padding: "16px 36px",
                background: "#F97316",
                color: "#fff",
                borderRadius: 10,
                fontSize: 16,
                fontWeight: 700,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                transition: "transform var(--duration-micro) var(--ease-out), box-shadow var(--duration-micro) var(--ease-out)",
                boxShadow: "0 0 30px rgba(249,115,22,0.3)",
                fontFamily: "var(--font-work-sans)",
              }}
            >
              Browse Templates
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#features"
              style={{
                padding: "16px 36px",
                background: "transparent",
                color: "var(--text-secondary)",
                borderRadius: 10,
                fontSize: 16,
                fontWeight: 600,
                border: "1px solid var(--border-subtle)",
                transition: "background var(--duration-micro) ease, color var(--duration-micro) ease, border-color var(--duration-micro) ease",
                fontFamily: "var(--font-work-sans)",
              }}
            >
              Why These Convert
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

function SocialProof() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section
      ref={ref}
      style={{
        padding: "var(--space-8) var(--space-6)",
        borderTop: "1px solid var(--border-color)",
        borderBottom: "1px solid var(--border-color)",
        background: "var(--bg-surface)",
      }}
    >
      <div style={{ maxWidth: 960, margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontSize: 13, color: "var(--text-muted)", letterSpacing: 1, marginBottom: 20, fontWeight: 500, fontFamily: "var(--font-work-sans)" }}>
          TRUSTED BY 200+ AGENCIES AND MARKETING TEAMS
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap", alignItems: "center", opacity: isInView ? 1 : 0, transition: `opacity var(--duration-reveal) ease` }}>
          {["Acme Corp", "TechFlow", "GrowthLab", "NexaDigital", "ScaleUp"].map((name) => (
            <span
              key={name}
              style={{
                fontSize: 16,
                fontWeight: 700,
                color: "var(--text-muted)",
                letterSpacing: "-0.01em",
                opacity: 0.5,
                filter: "grayscale(100%)",
                transition: "filter var(--duration-std) ease, opacity var(--duration-std) ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = "grayscale(0%)"
                e.currentTarget.style.opacity = "0.8"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = "grayscale(100%)"
                e.currentTarget.style.opacity = "0.5"
              }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function TemplateShowcase() {
  const categoryColors: Record<string, string> = {
    "Service Business": "#1E40AF",
    "Software": "#2563EB",
    "B2B": "#CA8A04",
    "Announcement": "#FF71CE",
    "Digital Product": "#CA8A04",
    "Flexible": "#6366f1",
  }

  return (
    <section id="templates" style={{ padding: "var(--space-24) var(--space-6)", maxWidth: 1200, margin: "0 auto" }}>
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <p style={{ fontSize: 13, letterSpacing: 3, color: "var(--accent-light)", textTransform: "uppercase", marginBottom: 16, fontWeight: 600, fontFamily: "var(--font-work-sans)" }}>
            Template Collection
          </p>
          <h2 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.02em", fontFamily: "var(--font-outfit)" }}>
            Six Conversion Architectures
          </h2>
        </div>
      </FadeIn>

      <StaggerChildren
        stagger={0.1}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: 28,
        }}
      >
        {TEMPLATES.map((template) => (
          <motion.div key={template.id} variants={staggerItem}>
            <Tilt3DCard gradient={template.gradient}>
              {/* Live template preview via iframe */}
              <div
                style={{
                  height: 220,
                  position: "relative",
                  overflow: "hidden",
                  background: template.colors.background,
                }}
              >
                <iframe
                  src={`/templates/${template.id}`}
                  title={`${template.name} preview`}
                  style={{
                    width: 1440,
                    height: 900,
                    border: "none",
                    transform: "scale(0.236)",
                    transformOrigin: "top left",
                    pointerEvents: "none",
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                  tabIndex={-1}
                  loading="lazy"
                />
                {/* Gradient overlay at bottom for smooth transition to card body */}
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 40,
                  background: "linear-gradient(to bottom, transparent, var(--bg-surface))",
                  zIndex: 2,
                }} />
                {/* Color scheme bar */}
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  display: "flex",
                  zIndex: 3,
                }}>
                  <div style={{ flex: 1, background: template.colors.primary }} />
                  <div style={{ flex: 1, background: template.colors.primaryLight }} />
                  <div style={{ flex: 1, background: template.colors.accent }} />
                </div>
              </div>

              {/* Card body */}
              <div style={{ padding: 28 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: "var(--text-primary)", letterSpacing: "-0.01em", fontFamily: "var(--font-outfit)" }}>
                    {template.name}
                  </h3>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      padding: "3px 10px",
                      borderRadius: 20,
                      background: `${categoryColors[template.category] ?? "var(--accent)"}20`,
                      color: categoryColors[template.category] ?? "var(--accent)",
                      letterSpacing: 0.3,
                      fontFamily: "var(--font-work-sans)",
                    }}
                  >
                    {template.category}
                  </span>
                </div>
                <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.65, marginBottom: 16, fontFamily: "var(--font-work-sans)" }}>
                  {template.description}
                </p>
                <p style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 24, fontFamily: "var(--font-work-sans)" }}>
                  {template.fonts.display} + {template.fonts.body}
                </p>
                <Link
                  href={`/templates/${template.id}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "12px 28px",
                    background: "var(--accent)",
                    color: "#fff",
                    borderRadius: 10,
                    fontSize: 14,
                    fontWeight: 600,
                    transition: "transform var(--duration-micro) var(--ease-out), box-shadow var(--duration-micro) var(--ease-out)",
                    fontFamily: "var(--font-work-sans)",
                  }}
                >
                  Preview
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </Tilt3DCard>
          </motion.div>
        ))}
      </StaggerChildren>
    </section>
  )
}

function FeaturesSection() {
  const features = [
    { icon: "target", title: "CRO Architecture", description: "Each template uses a different proven conversion framework -- authority validation, product demo, offer stack, and more." },
    { icon: "zap", title: "Scroll Animations", description: "Framer Motion-powered reveal animations, parallax scrolling, and 3D hover effects that feel premium without the jank." },
    { icon: "layers", title: "Real Components", description: "Not wireframes. Fully-built sections with real copy, testimonials, pricing tables, FAQs, and interactive elements." },
    { icon: "code", title: "Production Ready", description: "Clean Next.js + TypeScript code. Every component is typed, accessible, and ready to customize for your clients." },
    { icon: "globe", title: "Responsive Design", description: "Every template works on every screen size. Mobile-first with graceful degradation of decorative elements." },
    { icon: "star", title: "Distinct Personalities", description: "Six unique visual identities -- different fonts, palettes, layouts, and animation styles. No two templates look alike." },
  ]

  return (
    <section id="features" style={{ padding: "var(--space-24) var(--space-6)", background: "var(--bg-surface)", borderTop: "1px solid var(--border-color)" }}>
      <div style={{ maxWidth: 1060, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{ fontSize: 13, letterSpacing: 3, color: "var(--accent-light)", textTransform: "uppercase", marginBottom: 16, fontWeight: 600, fontFamily: "var(--font-work-sans)" }}>
              Built Different
            </p>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.02em", fontFamily: "var(--font-outfit)" }}>
              Why These Templates Convert
            </h2>
          </div>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "var(--space-8)" }}>
          {features.map((feature, i) => (
            <FadeIn key={feature.title} delay={i * 0.08}>
              <GlowCard glowColor="rgba(37,99,235,0.3)">
                <div
                  style={{
                    padding: 28,
                    background: "var(--bg-raised)",
                    border: "1px solid var(--border-color)",
                    borderRadius: 16,
                    height: "100%",
                    transition: "transform var(--duration-std) var(--ease-out)",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)" }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)" }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: "var(--accent-glow)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 16,
                      color: "var(--accent-light)",
                      fontSize: 20,
                    }}
                  >
                    <FeatureIcon name={feature.icon} />
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--text-primary)", marginBottom: 8, fontFamily: "var(--font-outfit)" }}>
                    {feature.title}
                  </h3>
                  <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7, fontFamily: "var(--font-work-sans)" }}>
                    {feature.description}
                  </p>
                </div>
              </GlowCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureIcon({ name }: { readonly name: string }) {
  const paths: Record<string, string> = {
    target: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z",
    zap: "M13 2L3 14h9l-1 10 10-12h-9l1-10z",
    layers: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    code: "M16 18l6-6-6-6M8 6l-6 6 6 6",
    globe: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM2 12h20",
    star: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
  }
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={paths[name] ?? paths.star} />
    </svg>
  )
}

function CTASection() {
  return (
    <section
      style={{
        padding: "var(--space-24) var(--space-6)",
        background: "linear-gradient(135deg, #F97316, #6366f1)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.05)",
          pointerEvents: "none",
        }}
      />
      <FadeIn>
        <div style={{ maxWidth: 560, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <h2 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, color: "#fff", marginBottom: 16, lineHeight: 1.2, fontFamily: "var(--font-outfit)" }}>
            Ready to Build Something That Converts?
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.8)", lineHeight: 1.6, marginBottom: 32, fontFamily: "var(--font-work-sans)" }}>
            Pick a template, customize it for your client, and launch a landing page that actually drives results.
          </p>
          <a
            href="#templates"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "16px 36px",
              background: "#fff",
              color: "#F97316",
              borderRadius: 10,
              fontSize: 16,
              fontWeight: 700,
              transition: "transform var(--duration-micro) var(--ease-out), box-shadow var(--duration-micro) var(--ease-out)",
              fontFamily: "var(--font-work-sans)",
            }}
          >
            Get Started
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </FadeIn>
    </section>
  )
}

export default function HomePage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-base)" }}>
      <StickyNav />
      <HeroSection />
      <SocialProof />
      <TemplateShowcase />
      <FeaturesSection />
      <CTASection />
      <footer
        style={{
          padding: "var(--space-8) var(--space-6)",
          borderTop: "1px solid var(--border-color)",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: 13, color: "var(--text-muted)", fontFamily: "var(--font-work-sans)" }}>
          Partner Portal Templates -- 6 conversion-optimized landing page designs
        </p>
      </footer>
    </div>
  )
}
