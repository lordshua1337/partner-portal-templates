export interface Testimonial {
  readonly name: string
  readonly role: string
  readonly company: string
  readonly quote: string
  readonly rating: number
}

export interface PricingFeature {
  readonly text: string
  readonly included: boolean
}

export interface PricingTier {
  readonly name: string
  readonly price: string
  readonly period?: string
  readonly description: string
  readonly features: readonly PricingFeature[]
  readonly highlighted?: boolean
  readonly buttonText?: string
}

export interface FAQItem {
  readonly question: string
  readonly answer: string
}

export interface Feature {
  readonly icon: string
  readonly title: string
  readonly description: string
}

export interface StatItem {
  readonly value: number
  readonly prefix?: string
  readonly suffix?: string
  readonly label: string
}

export interface TemplateConfig {
  readonly id: string
  readonly name: string
  readonly category: string
  readonly description: string
  readonly useCase: string
  readonly fonts: { readonly display: string; readonly body: string }
  readonly colors: {
    readonly primary: string
    readonly primaryLight: string
    readonly accent: string
    readonly background: string
    readonly surface: string
    readonly text: string
    readonly textMuted: string
    readonly border: string
  }
  readonly sections: readonly string[]
  readonly gradient: string
  readonly architecture: string
  readonly hero: {
    readonly headline: string
    readonly subheadline: string
    readonly cta: string
    readonly secondaryCta?: string
  }
  readonly stats: readonly StatItem[]
  readonly features: readonly Feature[]
  readonly testimonials: readonly Testimonial[]
  readonly pricing?: readonly PricingTier[]
  readonly faq: readonly FAQItem[]
  readonly metadata: {
    readonly conversionGoal: string
    readonly targetAudience: string
    readonly primaryEmotion: string
  }
}

export const TEMPLATES: readonly TemplateConfig[] = [
  {
    id: 'lead-gen',
    name: 'Lead Generation',
    category: 'Service Business',
    description: 'Authoritative, trust-forward design for service businesses. Professional blue + security green. Converts visitors into consultations.',
    useCase: 'Law firms, financial advisors, consultants, tax resolution, home services',
    fonts: { display: 'Playfair Display', body: 'DM Sans' },
    colors: {
      primary: '#1E40AF',
      primaryLight: '#2563EB',
      accent: '#059669',
      background: '#faf8f3',
      surface: '#ffffff',
      text: '#1a1a1a',
      textMuted: '#5a5a5a',
      border: '#e8e4dc',
    },
    sections: ['Hero', 'Trust Bar', 'Problem/Solution', 'How It Works', 'Testimonials', 'CTA Banner', 'Footer'],
    gradient: 'linear-gradient(135deg, #1E40AF, #059669)',
    architecture: 'authority-validation',
    hero: {
      headline: 'Resolve Your Tax Debt and Reclaim Your Peace of Mind',
      subheadline: 'Our team of enrolled agents and tax attorneys has helped over 2,500 clients settle $180M+ in tax debt. Get your free consultation today.',
      cta: 'Schedule Free Consultation',
      secondaryCta: 'See How It Works',
    },
    stats: [
      { value: 2500, suffix: '+', label: 'Clients Helped' },
      { value: 98, suffix: '%', label: 'Success Rate' },
      { value: 180, prefix: '$', suffix: 'M+', label: 'Debt Resolved' },
      { value: 4.9, suffix: '/5', label: 'Client Rating', },
    ],
    features: [
      { icon: 'shield', title: 'IRS Audit Protection', description: 'Full representation before the IRS with enrolled agents who know the system inside and out.' },
      { icon: 'chart', title: 'Debt Reduction Analysis', description: 'We analyze your complete tax history to find every opportunity for reduction and settlement.' },
      { icon: 'clock', title: 'Fast Resolution', description: 'Average case resolution in 90 days. Stop wage garnishments and bank levies quickly.' },
      { icon: 'users', title: 'Dedicated Case Manager', description: 'One point of contact from start to finish. No runaround, no transfers, no confusion.' },
      { icon: 'lock', title: 'Confidential Process', description: 'Everything discussed stays between you and your tax professional. Full attorney-client privilege.' },
      { icon: 'check', title: 'Guaranteed Results', description: 'If we cannot reduce your tax liability, you pay nothing. That is our promise to every client.' },
    ],
    testimonials: [
      { name: 'Sarah Mitchell', role: 'Small Business Owner', company: 'Mitchell Designs', quote: 'I owed $47,000 to the IRS and was terrified. They negotiated it down to $12,000 and set up a payment plan I could actually afford. Life-changing.', rating: 5 },
      { name: 'James Chen', role: 'Freelance Consultant', company: 'Chen Advisory', quote: 'Professional, responsive, and genuinely caring. They handled everything with the IRS so I could focus on my business. Settled in under 60 days.', rating: 5 },
      { name: 'Amanda Rivera', role: 'Restaurant Owner', company: 'Rivera Kitchen', quote: 'After three years of stress and threatening letters, they resolved my entire case. I wish I had called them sooner. Cannot recommend enough.', rating: 5 },
    ],
    faq: [
      { question: 'How much does a consultation cost?', answer: 'Your initial consultation is completely free. We will review your tax situation, explain your options, and provide a clear action plan with no obligation.' },
      { question: 'Can you really reduce what I owe the IRS?', answer: 'Yes. Through programs like Offer in Compromise, penalty abatement, and installment agreements, we regularly reduce client tax debt by 40-80% depending on the situation.' },
      { question: 'How long does the process take?', answer: 'Most cases are resolved within 90-120 days. Complex cases involving multiple years or business taxes may take longer, but we will give you a clear timeline upfront.' },
      { question: 'Will this stop wage garnishments?', answer: 'Yes. Once we are engaged as your representative, we can often halt garnishments, bank levies, and liens within days while we negotiate your resolution.' },
      { question: 'What if I have not filed taxes in years?', answer: 'We handle that too. Our team will prepare and file all missing returns, then negotiate the best possible resolution for the total amount owed.' },
    ],
    metadata: {
      conversionGoal: 'consultation-booking',
      targetAudience: 'individuals-with-tax-debt',
      primaryEmotion: 'relief',
    },
  },
  {
    id: 'saas',
    name: 'SaaS Product',
    category: 'Software',
    description: 'Dark, precise, technical. Deep navy + trust blue with grid texture. Product-centric hero with browser mockup.',
    useCase: 'SaaS products, developer tools, portfolio apps, subscription software',
    fonts: { display: 'Syne', body: 'Work Sans' },
    colors: {
      primary: '#2563EB',
      primaryLight: '#3b82f6',
      accent: '#F97316',
      background: '#060b18',
      surface: '#0d1526',
      text: '#f1f5f9',
      textMuted: '#94a3b8',
      border: '#1e2d47',
    },
    sections: ['Hero + Product Preview', 'Social Proof Strip', 'Feature Grid', 'Product Tour', 'Pricing', 'FAQ', 'CTA', 'Footer'],
    gradient: 'linear-gradient(135deg, #060b18, #2563EB)',
    architecture: 'product-demo',
    hero: {
      headline: 'Ship Better Software, Faster',
      subheadline: 'The all-in-one platform for modern development teams. CI/CD, monitoring, analytics, and deployment in one unified dashboard.',
      cta: 'Start Free Trial',
      secondaryCta: 'Watch Demo',
    },
    stats: [
      { value: 12000, suffix: '+', label: 'Development Teams' },
      { value: 99.9, suffix: '%', label: 'Uptime SLA' },
      { value: 50, suffix: 'M+', label: 'Deployments' },
      { value: 4.8, suffix: '/5', label: 'G2 Rating' },
    ],
    features: [
      { icon: 'zap', title: 'Instant Deployments', description: 'Push to deploy in under 30 seconds. Zero-downtime rolling updates with automatic rollback.' },
      { icon: 'chart', title: 'Real-Time Analytics', description: 'Monitor every metric that matters. Custom dashboards, alerts, and anomaly detection built in.' },
      { icon: 'shield', title: 'Enterprise Security', description: 'SOC 2 Type II certified. End-to-end encryption, SSO, RBAC, and audit logs included.' },
      { icon: 'code', title: 'Developer-First API', description: 'RESTful and GraphQL APIs with SDKs for every major language. Extensible webhooks and integrations.' },
      { icon: 'globe', title: 'Global Edge Network', description: 'Deploy to 40+ regions worldwide. Automatic routing to the nearest edge for sub-100ms latency.' },
      { icon: 'layers', title: 'Infrastructure as Code', description: 'Define your entire stack in code. Version control your infrastructure alongside your application.' },
    ],
    testimonials: [
      { name: 'David Park', role: 'CTO', company: 'NexaFlow', quote: 'Replaced three separate tools with one platform. Our deployment frequency went from weekly to multiple times per day.', rating: 5 },
      { name: 'Lisa Thompson', role: 'VP Engineering', company: 'ScaleGrid', quote: 'The monitoring and alerting alone saved us from two potential outages last quarter. Pays for itself many times over.', rating: 5 },
      { name: 'Marcus Johnson', role: 'Lead Developer', company: 'CodeVault', quote: 'Best developer experience I have used. The CLI is incredible and the API docs are the gold standard.', rating: 5 },
    ],
    pricing: [
      {
        name: 'Starter',
        price: '$0',
        period: 'month',
        description: 'Perfect for side projects and small teams getting started.',
        features: [
          { text: 'Up to 3 team members', included: true },
          { text: '1,000 build minutes/month', included: true },
          { text: 'Community support', included: true },
          { text: 'Basic analytics', included: true },
          { text: 'Custom domains', included: false },
          { text: 'SSO & RBAC', included: false },
        ],
      },
      {
        name: 'Pro',
        price: '$49',
        period: 'month',
        description: 'For growing teams that need more power and control.',
        highlighted: true,
        features: [
          { text: 'Up to 20 team members', included: true },
          { text: '10,000 build minutes/month', included: true },
          { text: 'Priority support', included: true },
          { text: 'Advanced analytics', included: true },
          { text: 'Custom domains', included: true },
          { text: 'SSO & RBAC', included: false },
        ],
      },
      {
        name: 'Enterprise',
        price: '$199',
        period: 'month',
        description: 'For organizations that need enterprise-grade features.',
        features: [
          { text: 'Unlimited team members', included: true },
          { text: 'Unlimited build minutes', included: true },
          { text: 'Dedicated support', included: true },
          { text: 'Custom analytics', included: true },
          { text: 'Custom domains', included: true },
          { text: 'SSO & RBAC', included: true },
        ],
        buttonText: 'Contact Sales',
      },
    ],
    faq: [
      { question: 'Can I try it before committing?', answer: 'Absolutely. Our Starter plan is free forever with generous limits. No credit card required to get started.' },
      { question: 'How does the pricing scale?', answer: 'You only pay for what you use. Build minutes and team members scale with your plan, and you can upgrade or downgrade anytime.' },
      { question: 'Do you offer SOC 2 compliance?', answer: 'Yes. We are SOC 2 Type II certified. Enterprise plans include dedicated compliance documentation and audit support.' },
      { question: 'Can I migrate from my current provider?', answer: 'We provide automated migration tools and white-glove onboarding for Pro and Enterprise plans. Most teams are fully migrated within a day.' },
      { question: 'What languages and frameworks do you support?', answer: 'We support all major languages and frameworks including Node.js, Python, Go, Rust, Java, Ruby, and more. If it runs in a container, it runs on our platform.' },
    ],
    metadata: {
      conversionGoal: 'free-trial-signup',
      targetAudience: 'development-teams',
      primaryEmotion: 'confidence',
    },
  },
  {
    id: 'b2b',
    name: 'Professional Services',
    category: 'B2B',
    description: 'Dark luxury editorial. Bodoni Moda elegance meets modern grid layout with gold accent.',
    useCase: 'Agencies, consulting firms, B2B services, professional practices',
    fonts: { display: 'Bodoni Moda', body: 'Jost' },
    colors: {
      primary: '#1C1917',
      primaryLight: '#292524',
      accent: '#CA8A04',
      background: '#ffffff',
      surface: '#fafafa',
      text: '#1C1917',
      textMuted: '#57534e',
      border: '#e7e5e4',
    },
    sections: ['Hero', 'Clients Strip', 'Services Grid', 'Case Study', 'Results/Metrics', 'Team', 'Contact Form', 'Footer'],
    gradient: 'linear-gradient(135deg, #1C1917, #CA8A04)',
    architecture: 'case-study',
    hero: {
      headline: 'Strategy That Moves Markets',
      subheadline: 'We partner with ambitious companies to build brands, acquire customers, and scale revenue. No fluff. Just results.',
      cta: 'Book a Strategy Call',
      secondaryCta: 'View Case Studies',
    },
    stats: [
      { value: 150, suffix: '+', label: 'Clients Served' },
      { value: 340, suffix: '%', label: 'Avg. ROI' },
      { value: 12, suffix: '+', label: 'Years Experience' },
      { value: 48, prefix: '$', suffix: 'M', label: 'Revenue Generated' },
    ],
    features: [
      { icon: 'target', title: 'Brand Strategy', description: 'Positioning, messaging, and visual identity that differentiates you from every competitor in your market.' },
      { icon: 'chart', title: 'Growth Marketing', description: 'Data-driven campaigns across paid, organic, and owned channels. Every dollar tracked to revenue.' },
      { icon: 'users', title: 'Sales Enablement', description: 'Collateral, decks, and processes that turn your sales team into a predictable revenue machine.' },
      { icon: 'globe', title: 'Digital Transformation', description: 'Modern tech stacks, automation workflows, and digital experiences that scale with your business.' },
      { icon: 'layers', title: 'Content & SEO', description: 'Authority-building content programs that compound organic traffic month over month.' },
      { icon: 'zap', title: 'Performance Creative', description: 'Ad creative that converts. We test 50+ variations per campaign to find what works.' },
    ],
    testimonials: [
      { name: 'Robert Hayes', role: 'CEO', company: 'TechBridge Solutions', quote: 'They did not just improve our marketing. They fundamentally changed how we think about growth. Revenue is up 280% in 18 months.', rating: 5 },
      { name: 'Jennifer Walsh', role: 'CMO', company: 'Elevate Health', quote: 'The most strategic agency we have ever worked with. They understand B2B in a way that most creative shops simply do not.', rating: 5 },
      { name: 'Michael Torres', role: 'Founder', company: 'Atlas Ventures', quote: 'From brand strategy to execution, they delivered at every level. Our pipeline tripled within two quarters.', rating: 5 },
    ],
    faq: [
      { question: 'What industries do you specialize in?', answer: 'We focus on B2B technology, professional services, healthcare, and financial services. Our frameworks apply across industries but we go deepest where we have domain expertise.' },
      { question: 'How are your engagements structured?', answer: 'We offer both project-based and retainer engagements. Most clients start with a 90-day strategy sprint, then move to ongoing execution.' },
      { question: 'What is your minimum engagement?', answer: 'Our minimum engagement is $15,000/month for retainer work and $25,000 for standalone projects. We work with companies that are serious about growth.' },
      { question: 'How do you measure success?', answer: 'Every engagement starts with defined KPIs tied to business outcomes -- pipeline, revenue, CAC, LTV. We report monthly with full transparency.' },
    ],
    metadata: {
      conversionGoal: 'strategy-call-booking',
      targetAudience: 'b2b-executives',
      primaryEmotion: 'ambition',
    },
  },
  {
    id: 'event',
    name: 'Event / Launch',
    category: 'Announcement',
    description: 'Hot pink + yellow + teal. Bold, kinetic energy. Anton display font with striking countdown and speaker grid.',
    useCase: 'Product launches, conferences, webinars, limited-time offers',
    fonts: { display: 'Anton', body: 'Plus Jakarta Sans' },
    colors: {
      primary: '#FF71CE',
      primaryLight: '#FF9DE0',
      accent: '#FFCE5C',
      background: '#0c0015',
      surface: '#1a0a2e',
      text: '#f5f3ff',
      textMuted: '#c4b5fd',
      border: '#2e1065',
    },
    sections: ['Hero + Countdown', 'Speakers Grid', 'Agenda Timeline', 'Sponsors', 'Early Bird CTA', 'Footer'],
    gradient: 'linear-gradient(135deg, #FF71CE, #FFCE5C, #86CCCA)',
    architecture: 'direct-response-urgency',
    hero: {
      headline: 'THE FUTURE OF AI SUMMIT 2026',
      subheadline: 'Three days of cutting-edge talks, hands-on workshops, and networking with 2,000+ AI leaders. San Francisco, June 15-17.',
      cta: 'Get Early Bird Tickets',
      secondaryCta: 'View Speakers',
    },
    stats: [
      { value: 2000, suffix: '+', label: 'Attendees' },
      { value: 48, suffix: '+', label: 'Speakers' },
      { value: 3, label: 'Days' },
      { value: 12, suffix: '+', label: 'Workshops' },
    ],
    features: [
      { icon: 'zap', title: 'Keynote Talks', description: 'Hear from founders, researchers, and engineers building the most impactful AI systems in the world.' },
      { icon: 'code', title: 'Hands-On Workshops', description: 'Build real projects with expert-led sessions on LLMs, computer vision, robotics, and more.' },
      { icon: 'users', title: 'Networking Events', description: 'Curated matchmaking, after-parties, and breakout sessions designed for meaningful connections.' },
      { icon: 'star', title: 'Startup Showcase', description: 'See 50 hand-picked AI startups demo their products. Meet the next unicorn before anyone else.' },
      { icon: 'globe', title: 'Live Streaming', description: 'Cannot attend in person? Every keynote and panel streamed live with interactive Q&A.' },
      { icon: 'target', title: 'Career Fair', description: 'Top AI companies hiring on-site. Bring your resume and meet engineering leaders face-to-face.' },
    ],
    testimonials: [
      { name: 'Alex Rivera', role: 'AI Research Lead', company: 'DeepMind', quote: 'The best AI conference I have attended. The quality of speakers and the depth of technical content is unmatched. Already booked for next year.', rating: 5 },
      { name: 'Priya Sharma', role: 'CTO', company: 'Synthex AI', quote: 'Made three partnerships at last year\'s event that directly led to our Series A. The networking alone is worth 10x the ticket price.', rating: 5 },
      { name: 'Chris Nakamura', role: 'ML Engineer', company: 'Tesla', quote: 'The workshops were incredibly practical. I implemented what I learned the Monday after the conference and it improved our pipeline by 30%.', rating: 5 },
    ],
    faq: [
      { question: 'When is the early bird deadline?', answer: 'Early bird pricing ends May 1, 2026. After that, tickets go to full price. Group discounts of 20% are available for teams of 5+.' },
      { question: 'Is there a virtual attendance option?', answer: 'Yes. Virtual passes include live streams of all keynotes and panels, plus access to recordings for 30 days after the event.' },
      { question: 'What is included in the ticket?', answer: 'Full access to all talks, workshops, networking events, meals, and the after-party. VIP tickets include front-row seating and speaker meet-and-greets.' },
      { question: 'Where is the venue?', answer: 'Moscone Center, San Francisco. We have negotiated hotel blocks at nearby hotels with discounted rates for attendees.' },
    ],
    metadata: {
      conversionGoal: 'ticket-purchase',
      targetAudience: 'ai-professionals',
      primaryEmotion: 'excitement',
    },
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce',
    category: 'Digital Product',
    description: 'Dark luxury premium. Fraunces serif meets Nunito for a premium but approachable feel with gold accents.',
    useCase: 'Digital products, courses, templates, physical goods, marketplaces',
    fonts: { display: 'Fraunces', body: 'Nunito' },
    colors: {
      primary: '#1C1917',
      primaryLight: '#292524',
      accent: '#CA8A04',
      background: '#fef7f0',
      surface: '#ffffff',
      text: '#1C1917',
      textMuted: '#57534e',
      border: '#e7e5e4',
    },
    sections: ['Hero + Product Image', 'Features/Benefits', 'Product Gallery', 'Pricing Tiers', 'Testimonials', 'FAQ', 'CTA', 'Footer'],
    gradient: 'linear-gradient(135deg, #1C1917, #CA8A04)',
    architecture: 'offer-stack',
    hero: {
      headline: 'The Complete Design System Kit',
      subheadline: '2,400+ components, 180+ page templates, and a complete design token system. Built for Figma and coded for React. Ship beautiful products faster.',
      cta: 'Get the Kit - $149',
      secondaryCta: 'Preview Components',
    },
    stats: [
      { value: 2400, suffix: '+', label: 'Components' },
      { value: 180, suffix: '+', label: 'Templates' },
      { value: 15000, suffix: '+', label: 'Happy Customers' },
      { value: 4.9, suffix: '/5', label: 'Average Rating' },
    ],
    features: [
      { icon: 'layers', title: 'Design Tokens', description: 'Colors, typography, spacing, and shadows all defined as tokens. Change your entire theme in seconds.' },
      { icon: 'code', title: 'React Components', description: 'Every component ships with production-ready React code. TypeScript, accessible, and fully customizable.' },
      { icon: 'zap', title: 'Copy & Paste', description: 'No complex setup. Copy a component, paste into your project, customize the props. That simple.' },
      { icon: 'globe', title: 'Responsive by Default', description: 'Every component and template is fully responsive. Mobile-first design that looks great on any screen.' },
      { icon: 'check', title: 'WCAG 2.1 Accessible', description: 'Built with accessibility in mind. Proper ARIA labels, keyboard navigation, and screen reader support.' },
      { icon: 'star', title: 'Lifetime Updates', description: 'Buy once, get updates forever. New components added monthly. No subscriptions, no recurring fees.' },
    ],
    testimonials: [
      { name: 'Emily Zhang', role: 'Product Designer', company: 'Stripe', quote: 'This kit saved our team hundreds of hours. The quality of the components is better than most design systems I have seen at major tech companies.', rating: 5 },
      { name: 'Tom Anderson', role: 'Indie Developer', company: 'ShipFast', quote: 'I launched my SaaS in two weeks instead of two months. The pre-built templates gave me a massive head start.', rating: 5 },
      { name: 'Nina Patel', role: 'Design Lead', company: 'Notion', quote: 'The attention to detail is remarkable. Every component handles edge cases properly and the code quality is excellent.', rating: 5 },
    ],
    pricing: [
      {
        name: 'Essential',
        price: '$79',
        description: 'Core components for personal projects.',
        features: [
          { text: '500+ base components', included: true },
          { text: '40 page templates', included: true },
          { text: 'Figma file access', included: true },
          { text: 'React code export', included: false },
          { text: 'Design tokens', included: false },
          { text: 'Priority support', included: false },
        ],
      },
      {
        name: 'Professional',
        price: '$149',
        description: 'Everything you need for client and team work.',
        highlighted: true,
        features: [
          { text: '2,400+ components', included: true },
          { text: '180+ page templates', included: true },
          { text: 'Figma file access', included: true },
          { text: 'React code export', included: true },
          { text: 'Design tokens', included: true },
          { text: 'Priority support', included: false },
        ],
      },
      {
        name: 'Enterprise',
        price: '$399',
        description: 'For teams that need everything plus support.',
        features: [
          { text: '2,400+ components', included: true },
          { text: '180+ page templates', included: true },
          { text: 'Figma file access', included: true },
          { text: 'React code export', included: true },
          { text: 'Design tokens', included: true },
          { text: 'Priority support', included: true },
        ],
        buttonText: 'Contact Sales',
      },
    ],
    faq: [
      { question: 'What is included in the purchase?', answer: 'You get the complete Figma file with all 2,400+ components, 180+ page templates, design tokens, and React code for every component. Plus lifetime updates.' },
      { question: 'Can I use this for client projects?', answer: 'Yes. The Professional and Enterprise licenses include unlimited client projects. The Essential license is for personal use only.' },
      { question: 'Do I get free updates?', answer: 'Yes. All purchases include lifetime updates. We add new components and templates every month at no additional cost.' },
      { question: 'What if I am not satisfied?', answer: 'We offer a 30-day money-back guarantee. If the kit does not meet your expectations, email us for a full refund. No questions asked.' },
      { question: 'Which frameworks are supported?', answer: 'Components ship as React + TypeScript by default. We also provide vanilla HTML/CSS versions and are adding Vue and Svelte support soon.' },
    ],
    metadata: {
      conversionGoal: 'product-purchase',
      targetAudience: 'designers-and-developers',
      primaryEmotion: 'desire',
    },
  },
  {
    id: 'custom',
    name: 'Custom Builder',
    category: 'Flexible',
    description: 'Geometric Modern. Outfit + Work Sans. Mix and match from 11 reusable blocks with indigo + emerald palette.',
    useCase: 'Any business that needs a custom layout built from modular blocks',
    fonts: { display: 'Outfit', body: 'Work Sans' },
    colors: {
      primary: '#6366f1',
      primaryLight: '#818cf8',
      accent: '#10B981',
      background: '#ffffff',
      surface: '#f8fafc',
      text: '#0f172a',
      textMuted: '#64748b',
      border: '#e2e8f0',
    },
    sections: ['Hero', 'Stats Row', 'Features 3-Col', 'Features Alternating', 'Testimonial', 'Testimonials Grid', 'CTA Banner', 'FAQ Accordion', 'Contact Form', 'Text Block'],
    gradient: 'linear-gradient(135deg, #6366f1, #10B981)',
    architecture: 'interactive-modular',
    hero: {
      headline: 'Build Your Perfect Landing Page',
      subheadline: 'Choose from 10 conversion-optimized blocks and assemble a landing page that fits your brand. No code required.',
      cta: 'Start Building',
      secondaryCta: 'View Blocks',
    },
    stats: [
      { value: 10, label: 'Building Blocks' },
      { value: 50, suffix: '+', label: 'Combinations' },
      { value: 5, label: 'Minute Setup' },
      { value: 100, suffix: '%', label: 'Customizable' },
    ],
    features: [
      { icon: 'layers', title: 'Modular Blocks', description: 'Ten fully-designed sections that snap together. Hero, features, pricing, testimonials, and more.' },
      { icon: 'zap', title: 'Instant Preview', description: 'See your changes in real-time. Drag blocks, change colors, update copy -- all reflected instantly.' },
      { icon: 'globe', title: 'Responsive Output', description: 'Every block is mobile-first and responsive. Your page looks great on any device automatically.' },
      { icon: 'code', title: 'Clean Code Export', description: 'Export production-ready HTML, React, or Next.js code. No lock-in, no proprietary frameworks.' },
      { icon: 'star', title: 'Brand Theming', description: 'Set your colors, fonts, and spacing once. Every block inherits your brand automatically.' },
      { icon: 'shield', title: 'CRO Optimized', description: 'Each block is designed with conversion principles baked in. Proven layouts that drive action.' },
    ],
    testimonials: [
      { name: 'Rachel Kim', role: 'Marketing Director', company: 'GrowthLab', quote: 'We used to spend weeks on landing pages. Now we assemble them in an afternoon and they convert better than anything our agency built.', rating: 5 },
      { name: 'Daniel Foster', role: 'Startup Founder', company: 'LaunchPad', quote: 'The block system is brilliant. I built five different landing pages for A/B testing in a single sitting. Our conversion rate doubled.', rating: 5 },
      { name: 'Sofia Martinez', role: 'Freelance Designer', company: 'SM Design Co', quote: 'Finally a page builder that produces code I am not embarrassed to ship. Clean, semantic, accessible.', rating: 5 },
    ],
    faq: [
      { question: 'How many blocks can I use per page?', answer: 'There is no limit. Use as many or as few blocks as you need. Most high-converting pages use 5-8 blocks.' },
      { question: 'Can I customize the design?', answer: 'Everything is customizable. Colors, fonts, spacing, content, images, and layout can all be adjusted to match your brand.' },
      { question: 'Do I need coding skills?', answer: 'No. The builder is entirely visual. But if you want to customize the exported code, you will have clean, well-structured HTML or React to work with.' },
      { question: 'Can I export the code?', answer: 'Yes. Export as static HTML/CSS, React components, or Next.js pages. The code is yours to host anywhere.' },
    ],
    metadata: {
      conversionGoal: 'product-trial',
      targetAudience: 'marketers-and-founders',
      primaryEmotion: 'empowerment',
    },
  },
  {
    id: 'educational',
    name: 'Educational Authority',
    category: 'Professional Services',
    description: 'Educational landing pages for professional services. Builds trust through clear explanations and positions professional help as the natural next step.',
    useCase: 'Tax resolution, legal services, medical billing, debt counseling, insurance claims',
    fonts: { display: 'Plus Jakarta Sans', body: 'DM Sans' },
    colors: {
      primary: '#1E3A5F',
      primaryLight: '#2D5F8B',
      accent: '#0D9488',
      background: '#FAFBFC',
      surface: '#FFFFFF',
      text: '#1A202C',
      textMuted: '#64748B',
      border: '#E2E8F0',
    },
    sections: ['Hero', 'Explainer', 'Resolution Options', 'Process Timeline', 'Reassurance', 'FAQ', 'Glossary', 'Related Topics', 'CTA'],
    gradient: 'linear-gradient(135deg, #1E3A5F, #0D9488)',
    architecture: 'educational-funnel',
    hero: {
      headline: 'Understand Your Options and Take the Right Next Step',
      subheadline: 'Clear, trustworthy guidance for people facing complex professional service situations. No jargon, no scare tactics.',
      cta: 'Get Help Understanding Your Options',
      secondaryCta: 'See What Resolution Options You May Qualify For',
    },
    stats: [
      { value: 10, suffix: '+', label: 'Topic Guides' },
      { value: 100, suffix: '%', label: 'Free to Read' },
      { value: 50, suffix: '+', label: 'FAQs Answered' },
      { value: 4.9, suffix: '/5', label: 'Helpfulness Rating' },
    ],
    features: [
      { icon: 'shield', title: 'Plain English Explanations', description: 'Complex topics broken down into clear, understandable language anyone can follow.' },
      { icon: 'chart', title: 'Resolution Options', description: 'Every legitimate path forward laid out with eligibility criteria and expected outcomes.' },
      { icon: 'clock', title: 'Step-by-Step Process', description: 'Visual timelines showing exactly what happens and when during the resolution process.' },
      { icon: 'users', title: 'Reassurance First', description: 'Designed for people under stress. Calm, supportive tone that reduces panic through understanding.' },
      { icon: 'check', title: 'Glossary & FAQ', description: 'Every technical term defined. Every common question answered with real, useful information.' },
      { icon: 'globe', title: 'SEO Optimized', description: 'Each page targets real search queries with proper structure, metadata, and internal linking.' },
    ],
    testimonials: [
      { name: 'Tax Resolution Client', role: 'Individual', company: 'Verified User', quote: 'This was the first page that actually explained what an Offer in Compromise is in plain English. I finally understood my options.', rating: 5 },
      { name: 'Small Business Owner', role: 'Business', company: 'Verified User', quote: 'The step-by-step process timeline made everything less scary. I knew exactly what to expect before I even called.', rating: 5 },
      { name: 'Tax Professional', role: 'CPA', company: 'Regional Firm', quote: 'We send our clients to these guides before consultations. They come in informed and calmer. Saves everyone time.', rating: 5 },
    ],
    faq: [
      { question: 'What verticals are supported?', answer: 'Tax resolution is fully built with 10 topic guides. The system supports any vertical -- legal, medical billing, debt resolution, insurance claims. Same template, different content.' },
      { question: 'Can I generate new topics with AI?', answer: 'Yes. The API accepts a topic name and vertical, generates a complete educational page config using Claude, validates it, and stores it for instant deployment.' },
      { question: 'How are these pages optimized for conversion?', answer: 'Soft CTAs throughout, educational-first approach, sticky CTA bars, and trust-building section flow. No aggressive sales language -- just informed decisions.' },
    ],
    metadata: {
      conversionGoal: 'consultation-booking',
      targetAudience: 'stressed-individuals-seeking-help',
      primaryEmotion: 'relief',
    },
  },
]
