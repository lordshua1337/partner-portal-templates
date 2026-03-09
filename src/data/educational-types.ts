import { z } from 'zod/v4'

// ---------------------------------------------------------------------------
// Zod schemas (for AI-generated content validation)
// ---------------------------------------------------------------------------

export const SectionContentSchema = z.object({
  title: z.string(),
  subtitle: z.string().optional(),
  paragraphs: z.array(z.string()),
  bulletPoints: z.array(z.string()).optional(),
  callout: z.string().optional(),
})

export const ResolutionOptionSchema = z.object({
  name: z.string(),
  description: z.string(),
  whoQualifies: z.string(),
  keyBenefit: z.string(),
})

export const ProcessStepSchema = z.object({
  step: z.number(),
  title: z.string(),
  description: z.string(),
  icon: z.string().optional(),
})

export const GlossaryTermSchema = z.object({
  term: z.string(),
  definition: z.string(),
})

export const RelatedTopicSchema = z.object({
  title: z.string(),
  slug: z.string(),
  description: z.string(),
})

export const ReassuranceContentSchema = z.object({
  title: z.string(),
  message: z.string(),
  bulletPoints: z.array(z.string()),
})

export const FAQItemSchema = z.object({
  question: z.string(),
  answer: z.string(),
})

export const EducationalTopicConfigSchema = z.object({
  slug: z.string(),
  vertical: z.string(),
  topic: z.string(),
  headline: z.string(),
  subheadline: z.string(),
  heroDescription: z.string(),
  whatThisMeans: SectionContentSchema,
  whyItHappens: SectionContentSchema,
  whatHappensNext: SectionContentSchema,
  commonQuestions: z.array(FAQItemSchema),
  resolutionOptions: z.array(ResolutionOptionSchema),
  whenToSeekHelp: SectionContentSchema,
  howTheProcessWorks: z.array(ProcessStepSchema),
  reassurance: ReassuranceContentSchema,
  glossary: z.array(GlossaryTermSchema),
  relatedTopics: z.array(RelatedTopicSchema),
  disclaimer: z.string(),
  primaryCTA: z.string(),
  secondaryCTA: z.string(),
  ctaMicrocopy: z.string(),
})

// ---------------------------------------------------------------------------
// TypeScript interfaces (derived from schemas)
// ---------------------------------------------------------------------------

export interface SectionContent {
  readonly title: string
  readonly subtitle?: string
  readonly paragraphs: readonly string[]
  readonly bulletPoints?: readonly string[]
  readonly callout?: string
}

export interface ResolutionOption {
  readonly name: string
  readonly description: string
  readonly whoQualifies: string
  readonly keyBenefit: string
}

export interface ProcessStep {
  readonly step: number
  readonly title: string
  readonly description: string
  readonly icon?: string
}

export interface GlossaryTerm {
  readonly term: string
  readonly definition: string
}

export interface RelatedTopic {
  readonly title: string
  readonly slug: string
  readonly description: string
}

export interface ReassuranceContent {
  readonly title: string
  readonly message: string
  readonly bulletPoints: readonly string[]
}

export interface EducationalTopicConfig {
  readonly slug: string
  readonly vertical: string
  readonly topic: string
  readonly headline: string
  readonly subheadline: string
  readonly heroDescription: string
  readonly whatThisMeans: SectionContent
  readonly whyItHappens: SectionContent
  readonly whatHappensNext: SectionContent
  readonly commonQuestions: readonly { readonly question: string; readonly answer: string }[]
  readonly resolutionOptions: readonly ResolutionOption[]
  readonly whenToSeekHelp: SectionContent
  readonly howTheProcessWorks: readonly ProcessStep[]
  readonly reassurance: ReassuranceContent
  readonly glossary: readonly GlossaryTerm[]
  readonly relatedTopics: readonly RelatedTopic[]
  readonly disclaimer: string
  readonly primaryCTA: string
  readonly secondaryCTA: string
  readonly ctaMicrocopy: string
}

export const EDUCATIONAL_COLORS = {
  primary: '#1E3A5F',
  primaryLight: '#2D5F8B',
  accent: '#0D9488',
  background: '#FAFBFC',
  surface: '#FFFFFF',
  text: '#1A202C',
  textMuted: '#64748B',
  border: '#E2E8F0',
} as const

export const EDUCATIONAL_FONTS = {
  display: 'var(--font-jakarta)',
  body: 'var(--font-dm-sans)',
} as const
