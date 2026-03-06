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
