# Landing Page Generator — CLI Build Foundation

## NOTE TO CLAUDE CODE

This is an extension of the partner-portal-templates project. You already have 6 templates, 7 motion components, 7 section components, and a full design token system. USE THEM. Do not rebuild what exists.

This spec adds a **parameterized landing page generator** — specifically starting with tax resolution educational pages, but architected so ANY vertical can use the same section components and generation pattern.

Read the existing codebase first:
- src/components/templates/ — existing template implementations
- src/components/sections/ — reusable section components (FAQ, CTA, etc.)
- src/components/motion/ — animation wrappers
- src/data/templates.ts — template catalog and metadata
- src/app/globals.css — design tokens

Build ON TOP of these. Extend, don't duplicate.

---

## What This Adds

A new template type: **Educational Landing Page** — designed for topics where the visitor is stressed, confused, and searching for answers. The first implementation is tax resolution, but the architecture must support any professional service vertical (legal, medical billing, debt, insurance claims, etc.).

The generator accepts a topic parameter and produces a complete, conversion-optimized educational landing page using the existing component system.

---

## Architecture

### New Template: EducationalTemplate

Add to src/components/templates/EducationalTemplate.tsx

This template is parameterized. It receives a topic config object and renders all sections accordingly. One component, infinite topics.

```typescript
interface EducationalTopicConfig {
  // Identity
  slug: string                          // "irs-wage-garnishment"
  vertical: string                      // "tax-resolution"

  // Content
  topic: string                         // "IRS Wage Garnishment"
  headline: string                      // "What to Do If the IRS Is Garnishing Your Wages"
  subheadline: string                   // "You have options. Here's how to understand and stop it."
  heroDescription: string               // 2-3 sentence supporting copy

  // Section content (all generated per-topic)
  whatThisMeans: SectionContent         // Plain English explanation
  whyItHappens: SectionContent          // Legal/procedural reasons
  whatHappensNext: SectionContent       // Timeline and consequences
  commonQuestions: FAQItem[]            // Educational FAQ
  resolutionOptions: ResolutionOption[] // Legitimate solutions
  whenToSeekHelp: SectionContent       // Professional guidance triggers
  howTheProcessWorks: ProcessStep[]    // Step-by-step process
  reassurance: ReassuranceContent      // Emotional support section
  glossary: GlossaryTerm[]            // Key terms defined
  relatedTopics: RelatedTopic[]       // Internal links to other pages
  disclaimer: string                   // Legal disclaimer

  // CTA config
  primaryCTA: string                   // "Get Help Understanding Your Options"
  secondaryCTA: string                 // "See What Resolution Options You May Qualify For"
  ctaMicrocopy: string                 // "Free. No obligation. Takes 2 minutes."

  // Design overrides (optional — defaults to template palette)
  colors?: Partial<ColorPalette>
  fonts?: { display: string; body: string }
}

interface SectionContent {
  title: string
  subtitle?: string
  paragraphs: string[]                 // Array of paragraphs, rendered in order
  bulletPoints?: string[]              // Optional supporting bullets
  callout?: string                     // Optional highlighted box
}

interface ResolutionOption {
  name: string                         // "Installment Agreement"
  description: string                  // What it is
  whoQualifies: string                 // General eligibility
  keyBenefit: string                   // Primary value prop
}

interface ProcessStep {
  step: number
  title: string
  description: string
  icon?: string                        // Lucide icon name
}

interface GlossaryTerm {
  term: string
  definition: string
}

interface RelatedTopic {
  title: string
  slug: string
  description: string
}
```

### Section Components to Add

Build these as reusable components in src/components/sections/:

**ExplainerSection.tsx**
- Takes SectionContent, renders educational content block
- Clean typography hierarchy, generous whitespace
- Optional callout box with subtle accent border
- Uses FadeIn motion wrapper

**ResolutionGrid.tsx**
- Takes ResolutionOption[], renders solution cards
- Card layout with icon, name, description, qualifier, benefit
- Uses StaggerChildren for entrance animation
- Similar pattern to existing FeatureGrid but content-focused

**ProcessTimeline.tsx**
- Takes ProcessStep[], renders vertical or horizontal timeline
- Step numbers, icons, connecting lines
- Uses StaggerChildren + FadeIn per step
- Clean and simple — not flashy

**GlossarySection.tsx**
- Takes GlossaryTerm[], renders expandable term definitions
- Similar interaction pattern to existing FAQ component
- Alphabetical ordering, search/filter optional

**ReassuranceBlock.tsx**
- Takes ReassuranceContent, renders empathetic support section
- Different visual treatment — warmer colors, softer typography
- Subtle background differentiation from other sections
- Human and calm, not clinical

**RelatedTopics.tsx**
- Takes RelatedTopic[], renders internal link cards
- Horizontal scroll on mobile, grid on desktop
- Drives users deeper into the site

### Template Registration

Add to src/data/templates.ts in the existing catalog:

```typescript
{
  id: 'educational',
  name: 'Educational Authority',
  description: 'Educational landing pages for professional services. Builds trust through clear explanations and positions professional help as the natural next step.',
  category: 'Professional Services',
  tags: ['education', 'authority', 'trust', 'lead-gen', 'professional'],
  architecture: 'Educational funnel — explain, reassure, convert',
  fonts: {
    display: 'Plus Jakarta Sans',
    body: 'DM Sans'
  },
  colors: {
    primary: '#1E3A5F',        // Deep navy — authority, trust
    primaryLight: '#2D5F8B',
    accent: '#0D9488',         // Teal — calm, professional
    background: '#FAFBFC',     // Near-white — clean, medical-grade
    surface: '#FFFFFF',
    text: '#1A202C',
    textMuted: '#64748B',
    border: '#E2E8F0'
  }
}
```

**Design notes:** This is a LIGHT theme template. The existing templates are mostly dark. Educational/professional service pages convert better on light backgrounds — it reads as "credible institution" not "startup." The teal accent is calm, not aggressive. Navy for authority headers.

---

## Content Generation System

### How Topics Get Created

Two modes:

**Mode 1: Manual topic config**
Developer creates a topic config file in src/data/topics/:

```
src/data/topics/
  tax-resolution/
    irs-wage-garnishment.ts
    irs-bank-levy.ts
    tax-lien.ts
    offer-in-compromise.ts
    unfiled-tax-returns.ts
    irs-audit.ts
    penalty-abatement.ts
    innocent-spouse-relief.ts
    payroll-tax-debt.ts
    irs-installment-agreement.ts
```

Each file exports an EducationalTopicConfig object with all content populated.

**Mode 2: AI-generated topic config (preferred)**
API route that accepts a topic name and generates the full config using Claude API.

Add to src/app/api/generate-topic/route.ts:

```
POST /api/generate-topic
Body: { topic: "IRS Wage Garnishment", vertical: "tax-resolution" }
Returns: Complete EducationalTopicConfig
```

The API route:
1. Takes the topic name and vertical
2. Sends a structured prompt to Claude API with the generation rules (below)
3. Claude returns a complete topic config as JSON
4. Validates with Zod schema
5. Stores in Supabase (topics table) for reuse
6. Returns the config

Cache generated configs in Upstash Redis (keyed by slug). Don't regenerate what already exists.

### Generation Rules for Claude API

When generating topic content, the system prompt must enforce:

**Voice:**
- Clear, calm, authoritative, trustworthy
- No hype, no scare tactics, no aggressive sales language
- Speak to someone who is stressed, confused, and possibly embarrassed
- Explain like a knowledgeable professional talking to a friend
- Short paragraphs, plain English, no jargon unless defined in glossary

**Content standards:**
- Every section provides real value — no filler
- Factual accuracy — reference real IRS procedures, programs, timelines
- No promises about outcomes — "eligibility varies", "may qualify"
- Position professional help as guidance, not rescue
- Answer the questions the visitor is actually asking in their head

**Emotional awareness:**
- Visitor is likely experiencing: panic, confusion, fear, embarrassment, financial stress
- Reduce fear through understanding — once people know what's happening, they calm down
- Reassurance is earned through information, not platitudes
- Never minimize the situation, never catastrophize it

**SEO:**
- Headline must include the topic term naturally
- FAQ questions should mirror real search queries
- Glossary terms should be terms people actually Google
- Related topics create internal linking structure

---

## Page Routing

Dynamic route: src/app/[vertical]/[slug]/page.tsx

```
/tax-resolution/irs-wage-garnishment
/tax-resolution/irs-bank-levy
/tax-resolution/offer-in-compromise
```

The page component:
1. Loads topic config (from Supabase or static file)
2. Passes config to EducationalTemplate
3. Template renders all sections using existing + new section components
4. Metadata generated for SEO (title, description, OpenGraph)

Future verticals would follow the same pattern:
```
/debt-resolution/credit-card-debt-settlement
/legal-help/wrongful-termination
/medical-billing/surprise-bill-dispute
```

Same template, same components, different content configs.

---

## Data Model (Supabase)

Add to existing schema:

```sql
-- Topic configs (generated or manual)
create table topics (
  id uuid primary key default gen_random_uuid(),
  vertical text not null,
  slug text not null,
  topic text not null,
  config jsonb not null,              -- Full EducationalTopicConfig
  status text default 'draft',        -- draft, published, archived
  generated boolean default false,    -- AI-generated vs manual
  seo_title text,
  seo_description text,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  unique(vertical, slug)
);

-- Topic analytics (page views, CTA clicks, scroll depth)
create table topic_analytics (
  id uuid primary key default gen_random_uuid(),
  topic_id uuid references topics(id),
  event_type text not null,           -- page_view, cta_click, scroll_depth, faq_expand
  metadata jsonb,                     -- event-specific data
  created_at timestamptz default now()
);

-- RLS: topics readable by all (public pages), writable by service role
-- RLS: analytics writable by all (anonymous tracking), readable by service role
```

---

## CTA Integration

CTAs on educational pages must be soft. Not "BUY NOW" — more "understand your options."

CTA component behavior:
- Primary CTA appears in hero and final section
- Sticky CTA bar appears on scroll (below the fold)
- CTA links to a consultation form (separate route) or external partner intake
- Track all CTA clicks in topic_analytics
- A/B test CTA copy via config (store variants, randomly assign, measure)

The CTA destination is configurable per vertical:
- Tax resolution: partner intake form
- Future verticals: whatever the conversion endpoint is
- Default: simple contact form stored in Supabase

---

## Tax Resolution — Initial Topic Set

Generate these 10 topics to launch:

1. **IRS Wage Garnishment** — when the IRS takes money from your paycheck
2. **IRS Bank Levy** — when the IRS freezes and seizes your bank account
3. **Federal Tax Lien** — when the IRS puts a claim on your property
4. **Offer in Compromise** — settling tax debt for less than you owe
5. **Unfiled Tax Returns** — what happens when you haven't filed for years
6. **IRS Audit** — what to expect and how to respond
7. **Penalty Abatement** — getting IRS penalties reduced or removed
8. **Innocent Spouse Relief** — when your spouse's tax debt isn't your fault
9. **Payroll Tax Debt** — business owners who owe employment taxes
10. **IRS Installment Agreement** — setting up a monthly payment plan

Each topic cross-links to related topics via the relatedTopics config, creating an internal linking mesh that's good for SEO and user flow.

---

## Build Order

Phase 1: Foundation
- EducationalTemplate component
- New section components (ExplainerSection, ResolutionGrid, ProcessTimeline, GlossarySection, ReassuranceBlock, RelatedTopics)
- Topic config TypeScript types and Zod schemas
- Dynamic route [vertical]/[slug]/page.tsx
- Register template in catalog

Phase 2: Content
- Manual topic configs for first 3 tax topics (wage garnishment, bank levy, tax lien)
- Wire up content to template
- Verify rendering, responsiveness, animations

Phase 3: Generation
- API route for AI topic generation
- Claude API integration with generation rules prompt
- Zod validation on generated output
- Supabase storage for generated configs
- Redis caching

Phase 4: Scale
- Generate remaining 7 tax topics via API
- Analytics tracking (page views, CTA clicks, scroll depth)
- SEO metadata generation
- Sitemap generation for all published topics
- A/B testing infrastructure for CTAs

---

## Design Specifications

**Layout:**
- Max width: 768px for body text (readability)
- Max width: 1200px for full-width sections (grids, timelines)
- Section padding: 96px vertical (desktop), 64px (mobile)
- Paragraph spacing: 24px between paragraphs
- Line height: 1.7 for body text (readability on long-form content)

**Typography:**
- H1 (hero): Plus Jakarta Sans, 48px/56px desktop, 32px/40px mobile, font-weight 700
- H2 (section): Plus Jakarta Sans, 36px/44px desktop, 28px/36px mobile, font-weight 600
- H3 (subsection): Plus Jakarta Sans, 24px/32px, font-weight 600
- Body: DM Sans, 18px/30px desktop, 16px/28px mobile, font-weight 400
- Small/meta: DM Sans, 14px/22px, textMuted color

**Color usage:**
- Hero background: gradient from background to surface
- Section alternation: alternate between background (#FAFBFC) and surface (#FFFFFF)
- Accent (teal) used only for: CTAs, callout borders, icon highlights, active states
- Primary (navy) used only for: headings, important links, hover states
- Never use accent for body text. Never use primary for backgrounds.

**Callout boxes:**
- Left border: 3px accent color
- Background: accent at 5% opacity
- Padding: 24px
- Used for: key takeaways, important warnings, reassurance quotes

**CTA buttons:**
- Primary: accent background, white text, rounded-lg, px-8 py-4, font-weight 600
- Hover: darken accent 10%
- Microcopy below button: textMuted, 14px, italic

**Cards (resolution options, process steps):**
- Surface background, 1px border color, rounded-xl
- Subtle shadow-sm, hover shadow-md transition
- Internal padding: 32px
- Icon or step number in accent color

**Mobile:**
- All grids collapse to single column
- Hero text centered on mobile
- Sticky CTA bar at bottom of viewport on mobile
- Touch-friendly tap targets (min 44px)
