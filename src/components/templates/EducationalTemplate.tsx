"use client"

import { useState, useEffect, useCallback } from "react"
import type { EducationalTopicConfig } from "@/data/educational-types"
import { EDUCATIONAL_COLORS as C, EDUCATIONAL_FONTS as F } from "@/data/educational-types"
import * as ScrollArea from "@radix-ui/react-scroll-area"
import * as Progress from "@radix-ui/react-progress"
import FadeIn from "@/components/motion/FadeIn"
import CountUp from "@/components/motion/CountUp"
import ExplainerSection from "@/components/sections/ExplainerSection"
import ResolutionGrid from "@/components/sections/ResolutionGrid"
import ProcessTimeline from "@/components/sections/ProcessTimeline"
import ReassuranceBlock from "@/components/sections/ReassuranceBlock"
import RelatedTopics from "@/components/sections/RelatedTopics"
import FAQ from "@/components/sections/FAQ"
import CTABanner from "@/components/sections/CTABanner"

interface EducationalTemplateProps {
  readonly topic: EducationalTopicConfig
}

export default function EducationalTemplate({ topic: t }: EducationalTemplateProps) {
  const df = F.display
  const [readingProgress, setReadingProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      if (docHeight > 0) {
        const progress = Math.min((scrollTop / docHeight) * 100, 100)
        setReadingProgress(progress)
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      style={{
        minHeight: "100vh",
        background: C.background,
        color: C.text,
        fontFamily: F.body,
      }}
    >
      {/* Reading Progress Bar */}
      <Progress.Root
        value={readingProgress}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          zIndex: 9999,
          background: C.border,
          overflow: "hidden",
        }}
      >
        <Progress.Indicator
          style={{
            width: `${readingProgress}%`,
            height: "100%",
            background: `linear-gradient(90deg, ${C.accent}, ${C.primaryLight})`,
            transition: "width 100ms ease-out",
            borderRadius: "0 2px 2px 0",
          }}
        />
      </Progress.Root>

      {/* Hero */}
      <section
        style={{
          padding: "96px 24px 80px",
          background: `linear-gradient(180deg, ${C.background} 0%, ${C.surface} 100%)`,
          textAlign: "center",
        }}
      >
        <style>{`
          @media (max-width: 640px) {
            .edu-hero-section { padding: 64px 16px 48px !important; }
            .edu-section-spacing { padding-top: 48px !important; padding-bottom: 48px !important; }
          }
        `}</style>
        <div style={{ maxWidth: 768, margin: "0 auto" }}>
          <FadeIn>
            <p
              style={{
                fontSize: 12,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: C.accent,
                fontWeight: 700,
                marginBottom: 20,
              }}
            >
              {t.vertical.replace(/-/g, " ")} -- Educational Guide
            </p>
            <h1
              style={{
                fontSize: "clamp(28px, 5vw, 48px)",
                fontWeight: 700,
                color: C.text,
                lineHeight: 1.15,
                marginBottom: 20,
                fontFamily: df,
              }}
            >
              {t.headline}
            </h1>
            <p
              style={{
                fontSize: "clamp(16px, 2vw, 20px)",
                color: "#4A5568",
                lineHeight: 1.6,
                marginBottom: 16,
                maxWidth: 640,
                margin: "0 auto 16px",
              }}
            >
              {t.subheadline}
            </p>
            <p
              style={{
                fontSize: 17,
                color: "#4A5568",
                lineHeight: 1.7,
                maxWidth: 600,
                margin: "0 auto 36px",
              }}
            >
              {t.heroDescription}
            </p>

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
                  padding: "16px 32px",
                  background: C.accent,
                  color: "#fff",
                  borderRadius: 10,
                  fontSize: 16,
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)"
                  e.currentTarget.style.boxShadow = `0 8px 30px ${C.accent}44`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)"
                  e.currentTarget.style.boxShadow = "none"
                }}
              >
                {t.primaryCTA}
              </button>
              <button
                style={{
                  padding: "16px 32px",
                  background: "transparent",
                  color: C.primary,
                  borderRadius: 10,
                  fontSize: 16,
                  fontWeight: 600,
                  border: `1px solid ${C.border}`,
                  cursor: "pointer",
                  transition: "border-color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = C.primary
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = C.border
                }}
              >
                {t.secondaryCTA}
              </button>
            </div>
            <p
              style={{
                fontSize: 13,
                color: "#555",
                marginTop: 12,
                fontStyle: "italic",
              }}
            >
              {t.ctaMicrocopy}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* What This Means */}
      <ExplainerSection
        content={t.whatThisMeans}
        backgroundColor={C.surface}
        textColor={C.text}
        mutedColor="#555"
        accentColor={C.accent}
        borderColor={C.border}
        displayFont={df}
      />

      {/* Why It Happens */}
      <ExplainerSection
        content={t.whyItHappens}
        backgroundColor={C.background}
        textColor={C.text}
        mutedColor="#555"
        accentColor={C.accent}
        borderColor={C.border}
        displayFont={df}
      />

      {/* What Happens Next */}
      <ExplainerSection
        content={t.whatHappensNext}
        backgroundColor={C.surface}
        textColor={C.text}
        mutedColor="#555"
        accentColor={C.accent}
        borderColor={C.border}
        displayFont={df}
      />

      {/* Resolution Options */}
      <ResolutionGrid
        options={t.resolutionOptions}
        backgroundColor={C.background}
        cardBackground={C.surface}
        textColor={C.text}
        mutedColor="#555"
        accentColor={C.accent}
        borderColor={C.border}
        displayFont={df}
        title="Options You May Have"
        subtitle="There are legitimate programs and strategies available. Here are the most common."
      />

      {/* How the Process Works */}
      <ProcessTimeline
        steps={t.howTheProcessWorks}
        backgroundColor={C.surface}
        textColor={C.text}
        mutedColor="#555"
        accentColor={C.accent}
        primaryColor={C.primary}
        displayFont={df}
      />

      {/* Reassurance */}
      <ReassuranceBlock
        content={t.reassurance}
        backgroundColor={`${C.accent}08`}
        textColor={C.text}
        mutedColor="#555"
        accentColor={C.accent}
        displayFont={df}
      />

      {/* When to Seek Help */}
      <ExplainerSection
        content={t.whenToSeekHelp}
        backgroundColor={C.surface}
        textColor={C.text}
        mutedColor="#555"
        accentColor={C.accent}
        borderColor={C.border}
        displayFont={df}
      />

      {/* FAQ */}
      <FAQ
        items={t.commonQuestions}
        backgroundColor={C.background}
        textColor={C.text}
        mutedColor="#555"
        accentColor={C.accent}
        borderColor={C.border}
        title="Common Questions"
        displayFont={df}
      />

      {/* Glossary with ScrollArea */}
      <section style={{ padding: "96px 24px", background: C.surface }}>
        <style>{`
          @media (max-width: 640px) {
            .edu-glossary-section { padding: 48px 16px !important; }
          }
        `}</style>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <FadeIn>
            <h2
              style={{
                fontSize: "clamp(28px, 3.5vw, 36px)",
                fontWeight: 600,
                color: C.text,
                textAlign: "center",
                marginBottom: 48,
                fontFamily: df,
              }}
            >
              Key Terms Explained
            </h2>
          </FadeIn>

          <ScrollArea.Root
            style={{
              maxHeight: 520,
              borderRadius: 12,
              border: `1px solid ${C.border}`,
              background: C.background,
              overflow: "hidden",
            }}
          >
            <ScrollArea.Viewport
              style={{
                width: "100%",
                height: "100%",
                maxHeight: 520,
                padding: "8px 0",
              }}
            >
              {[...t.glossary]
                .sort((a, b) => a.term.localeCompare(b.term))
                .map((term, i) => (
                  <GlossaryItem
                    key={term.term}
                    term={term.term}
                    definition={term.definition}
                    accentColor={C.accent}
                    textColor={C.text}
                    mutedColor="#555"
                    borderColor={C.border}
                    isLast={i === t.glossary.length - 1}
                  />
                ))}
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar
              orientation="vertical"
              style={{
                display: "flex",
                userSelect: "none",
                touchAction: "none",
                padding: 2,
                width: 10,
                transition: "background 160ms ease-out",
              }}
            >
              <ScrollArea.Thumb
                style={{
                  flex: 1,
                  background: C.accent,
                  borderRadius: 10,
                  position: "relative",
                  opacity: 0.4,
                  transition: "opacity 160ms ease-out",
                }}
              />
            </ScrollArea.Scrollbar>
          </ScrollArea.Root>
        </div>
      </section>

      {/* Related Topics */}
      <RelatedTopics
        topics={t.relatedTopics}
        vertical={t.vertical}
        backgroundColor={C.background}
        cardBackground={C.surface}
        textColor={C.text}
        mutedColor="#555"
        accentColor={C.accent}
        primaryColor={C.primary}
        borderColor={C.border}
        displayFont={df}
      />

      {/* CTA Banner */}
      <CTABanner
        headline="Ready to Understand Your Options?"
        description={t.primaryCTA}
        buttonText="Get Free Guidance"
        gradient={`linear-gradient(135deg, ${C.primary}, ${C.accent})`}
        buttonTextColor={C.primary}
        displayFont={df}
      />

      {/* Disclaimer + Footer */}
      <footer
        style={{
          padding: "32px 24px",
          background: C.surface,
          borderTop: `1px solid ${C.border}`,
        }}
      >
        <div style={{ maxWidth: 768, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 12,
              color: "#555",
              lineHeight: 1.6,
              marginBottom: 16,
            }}
          >
            {t.disclaimer}
          </p>
          <p
            style={{
              fontSize: 12,
              color: "#555",
              textAlign: "center",
            }}
          >
            Educational Authority Template -- Partner Portal Templates
          </p>
        </div>
      </footer>
    </div>
  )
}

/* ------------------------------------------------------------------
   GlossaryItem -- extracted for the ScrollArea-wrapped glossary
   ------------------------------------------------------------------ */

interface GlossaryItemProps {
  readonly term: string
  readonly definition: string
  readonly accentColor: string
  readonly textColor: string
  readonly mutedColor: string
  readonly borderColor: string
  readonly isLast: boolean
}

function GlossaryItem({
  term,
  definition,
  accentColor,
  textColor,
  mutedColor,
  borderColor,
  isLast,
}: GlossaryItemProps) {
  const [open, setOpen] = useState(false)

  return (
    <div
      style={{
        borderBottom: isLast ? "none" : `1px solid ${borderColor}`,
        padding: "0 20px",
      }}
    >
      <button
        onClick={() => setOpen((prev) => !prev)}
        style={{
          width: "100%",
          padding: "16px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: "left",
          gap: 16,
          minHeight: 48,
        }}
      >
        <span
          style={{
            fontSize: 15,
            fontWeight: 600,
            color: open ? accentColor : textColor,
            transition: "color 0.2s",
          }}
        >
          {term}
        </span>
        <span
          style={{
            fontSize: 18,
            color: accentColor,
            transition: "transform 0.3s ease",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            flexShrink: 0,
          }}
        >
          +
        </span>
      </button>
      <div
        style={{
          maxHeight: open ? 200 : 0,
          opacity: open ? 1 : 0,
          transition: "max-height 0.3s ease, opacity 0.3s ease",
          overflow: "hidden",
        }}
      >
        <p
          style={{
            fontSize: 14,
            color: mutedColor,
            lineHeight: 1.7,
            paddingBottom: 16,
            margin: 0,
          }}
        >
          {definition}
        </p>
      </div>
    </div>
  )
}
