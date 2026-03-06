"use client"

import type { EducationalTopicConfig } from "@/data/educational-types"
import { EDUCATIONAL_COLORS as C, EDUCATIONAL_FONTS as F } from "@/data/educational-types"
import FadeIn from "@/components/motion/FadeIn"
import CountUp from "@/components/motion/CountUp"
import ExplainerSection from "@/components/sections/ExplainerSection"
import ResolutionGrid from "@/components/sections/ResolutionGrid"
import ProcessTimeline from "@/components/sections/ProcessTimeline"
import GlossarySection from "@/components/sections/GlossarySection"
import ReassuranceBlock from "@/components/sections/ReassuranceBlock"
import RelatedTopics from "@/components/sections/RelatedTopics"
import FAQ from "@/components/sections/FAQ"
import CTABanner from "@/components/sections/CTABanner"

interface EducationalTemplateProps {
  readonly topic: EducationalTopicConfig
}

export default function EducationalTemplate({ topic: t }: EducationalTemplateProps) {
  const df = F.display

  return (
    <div style={{ minHeight: "100vh", background: C.background, color: C.text, fontFamily: F.body }}>
      {/* Hero */}
      <section
        style={{
          padding: "96px 24px 80px",
          background: `linear-gradient(180deg, ${C.background} 0%, ${C.surface} 100%)`,
          textAlign: "center",
        }}
      >
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
                fontSize: "clamp(32px, 5vw, 48px)",
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
                color: C.textMuted,
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
                color: C.textMuted,
                lineHeight: 1.7,
                maxWidth: 600,
                margin: "0 auto 36px",
              }}
            >
              {t.heroDescription}
            </p>

            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
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
                }}
              >
                {t.secondaryCTA}
              </button>
            </div>
            <p style={{ fontSize: 13, color: C.textMuted, marginTop: 12, fontStyle: "italic" }}>
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
        mutedColor={C.textMuted}
        accentColor={C.accent}
        borderColor={C.border}
        displayFont={df}
      />

      {/* Why It Happens */}
      <ExplainerSection
        content={t.whyItHappens}
        backgroundColor={C.background}
        textColor={C.text}
        mutedColor={C.textMuted}
        accentColor={C.accent}
        borderColor={C.border}
        displayFont={df}
      />

      {/* What Happens Next */}
      <ExplainerSection
        content={t.whatHappensNext}
        backgroundColor={C.surface}
        textColor={C.text}
        mutedColor={C.textMuted}
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
        mutedColor={C.textMuted}
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
        mutedColor={C.textMuted}
        accentColor={C.accent}
        primaryColor={C.primary}
        displayFont={df}
      />

      {/* Reassurance */}
      <ReassuranceBlock
        content={t.reassurance}
        backgroundColor={`${C.accent}08`}
        textColor={C.text}
        mutedColor={C.textMuted}
        accentColor={C.accent}
        displayFont={df}
      />

      {/* When to Seek Help */}
      <ExplainerSection
        content={t.whenToSeekHelp}
        backgroundColor={C.surface}
        textColor={C.text}
        mutedColor={C.textMuted}
        accentColor={C.accent}
        borderColor={C.border}
        displayFont={df}
      />

      {/* FAQ */}
      <FAQ
        items={t.commonQuestions}
        backgroundColor={C.background}
        textColor={C.text}
        mutedColor={C.textMuted}
        accentColor={C.accent}
        borderColor={C.border}
        title="Common Questions"
        displayFont={df}
      />

      {/* Glossary */}
      <GlossarySection
        terms={t.glossary}
        backgroundColor={C.surface}
        textColor={C.text}
        mutedColor={C.textMuted}
        accentColor={C.accent}
        borderColor={C.border}
        displayFont={df}
      />

      {/* Related Topics */}
      <RelatedTopics
        topics={t.relatedTopics}
        vertical={t.vertical}
        backgroundColor={C.background}
        cardBackground={C.surface}
        textColor={C.text}
        mutedColor={C.textMuted}
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
      <footer style={{ padding: "32px 24px", background: C.surface, borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 768, margin: "0 auto" }}>
          <p style={{ fontSize: 12, color: C.textMuted, lineHeight: 1.6, marginBottom: 16 }}>
            {t.disclaimer}
          </p>
          <p style={{ fontSize: 12, color: C.textMuted, textAlign: "center" }}>
            Educational Authority Template -- Partner Portal Templates
          </p>
        </div>
      </footer>
    </div>
  )
}
