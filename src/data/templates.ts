export interface TemplateConfig {
  id: string
  name: string
  category: string
  description: string
  useCase: string
  fonts: { display: string; body: string }
  colors: {
    primary: string
    primaryLight: string
    accent: string
    background: string
    surface: string
    text: string
    textMuted: string
    border: string
  }
  sections: string[]
  gradient: string
}

export const TEMPLATES: TemplateConfig[] = [
  {
    id: 'lead-gen',
    name: 'Lead Generation',
    category: 'Service Business',
    description: 'Authoritative, trust-forward design for service businesses. Dark forest green + warm cream. Converts visitors into consultations.',
    useCase: 'Law firms, financial advisors, consultants, tax resolution, home services',
    fonts: { display: 'Playfair Display', body: 'DM Sans' },
    colors: {
      primary: '#2d5016',
      primaryLight: '#4a7c2f',
      accent: '#c8a96e',
      background: '#faf8f3',
      surface: '#ffffff',
      text: '#1a1a1a',
      textMuted: '#5a5a5a',
      border: '#e8e4dc',
    },
    sections: ['Hero', 'Trust Bar', 'Problem/Solution', 'How It Works', 'Testimonials', 'CTA Banner', 'Footer'],
    gradient: 'linear-gradient(135deg, #2d5016, #4a7c2f)',
  },
  {
    id: 'saas',
    name: 'SaaS Product',
    category: 'Software',
    description: 'Dark, precise, technical. Deep navy + electric blue with grid texture. Product-centric hero with browser mockup.',
    useCase: 'SaaS products, developer tools, portfolio apps, subscription software',
    fonts: { display: 'Syne', body: 'IBM Plex Sans' },
    colors: {
      primary: '#2563eb',
      primaryLight: '#3b82f6',
      accent: '#06b6d4',
      background: '#060b18',
      surface: '#0d1526',
      text: '#f1f5f9',
      textMuted: '#94a3b8',
      border: '#1e2d47',
    },
    sections: ['Hero + Product Preview', 'Social Proof Strip', 'Feature Grid', 'Product Tour', 'Pricing', 'FAQ', 'CTA', 'Footer'],
    gradient: 'linear-gradient(135deg, #060b18, #2563eb)',
  },
  {
    id: 'b2b',
    name: 'Professional Services',
    category: 'B2B',
    description: 'Black + white + amber. High contrast editorial design. Cormorant Garamond elegance meets modern grid layout.',
    useCase: 'Agencies, consulting firms, B2B services, professional practices',
    fonts: { display: 'Cormorant Garamond', body: 'Outfit' },
    colors: {
      primary: '#0a0a0a',
      primaryLight: '#262626',
      accent: '#d97706',
      background: '#ffffff',
      surface: '#fafafa',
      text: '#0a0a0a',
      textMuted: '#525252',
      border: '#e5e5e5',
    },
    sections: ['Hero', 'Clients Strip', 'Services Grid', 'Case Study', 'Results/Metrics', 'Team', 'Contact Form', 'Footer'],
    gradient: 'linear-gradient(135deg, #0a0a0a, #d97706)',
  },
  {
    id: 'event',
    name: 'Event / Launch',
    category: 'Announcement',
    description: 'Purple + pink + yellow. Bold, kinetic energy. Anton display font with striking countdown and speaker grid.',
    useCase: 'Product launches, conferences, webinars, limited-time offers',
    fonts: { display: 'Anton', body: 'Plus Jakarta Sans' },
    colors: {
      primary: '#7c3aed',
      primaryLight: '#8b5cf6',
      accent: '#f59e0b',
      background: '#0c0015',
      surface: '#1a0a2e',
      text: '#f5f3ff',
      textMuted: '#a78bfa',
      border: '#2e1065',
    },
    sections: ['Hero + Countdown', 'Speakers Grid', 'Agenda Timeline', 'Sponsors', 'Early Bird CTA', 'Footer'],
    gradient: 'linear-gradient(135deg, #7c3aed, #ec4899, #f59e0b)',
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce',
    category: 'Digital Product',
    description: 'Burnt orange + teal. Warm, textured, tactile. Fraunces serif meets Nunito for a premium but approachable feel.',
    useCase: 'Digital products, courses, templates, physical goods, marketplaces',
    fonts: { display: 'Fraunces', body: 'Nunito' },
    colors: {
      primary: '#c2410c',
      primaryLight: '#ea580c',
      accent: '#0d9488',
      background: '#fef7f0',
      surface: '#ffffff',
      text: '#1c1917',
      textMuted: '#57534e',
      border: '#e7e5e4',
    },
    sections: ['Hero + Product Image', 'Features/Benefits', 'Product Gallery', 'Pricing Tiers', 'Testimonials', 'FAQ', 'CTA', 'Footer'],
    gradient: 'linear-gradient(135deg, #c2410c, #0d9488)',
  },
  {
    id: 'custom',
    name: 'Custom Builder',
    category: 'Flexible',
    description: 'Variable brand color system. DM Serif Display + DM Sans. Mix and match from 11 reusable blocks.',
    useCase: 'Any business that needs a custom layout built from modular blocks',
    fonts: { display: 'DM Serif Display', body: 'DM Sans' },
    colors: {
      primary: '#6366f1',
      primaryLight: '#818cf8',
      accent: '#f59e0b',
      background: '#ffffff',
      surface: '#f8fafc',
      text: '#0f172a',
      textMuted: '#64748b',
      border: '#e2e8f0',
    },
    sections: ['Hero', 'Stats Row', 'Features 3-Col', 'Features Alternating', 'Testimonial', 'Testimonials Grid', 'CTA Banner', 'FAQ Accordion', 'Contact Form', 'Text Block'],
    gradient: 'linear-gradient(135deg, #6366f1, #f59e0b)',
  },
]
