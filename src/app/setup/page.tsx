"use client"

import { useState } from "react"
import Link from "next/link"

const DEPLOY_URL = `https://vercel.com/new/clone?repository-url=https://github.com/lordshua1337/partner-portal-templates&env=ANTHROPIC_API_KEY,NEXT_PUBLIC_SUPABASE_URL,NEXT_PUBLIC_SUPABASE_ANON_KEY&envDescription=API%20keys%20needed%20for%20AI%20generation%20and%20database&project-name=my-partner-portal&repository-name=my-partner-portal`

interface StepProps {
  readonly step: number
  readonly title: string
  readonly description: string
  readonly children: React.ReactNode
  readonly active: boolean
  readonly completed: boolean
  readonly onActivate: () => void
}

function SetupStep({ step, title, description, children, active, completed, onActivate }: StepProps) {
  return (
    <div
      style={{
        borderRadius: 16,
        border: `1px solid ${active ? "#0D9488" : completed ? "#10B981" : "#E2E8F0"}`,
        background: active ? "#FAFBFC" : "#FFFFFF",
        overflow: "hidden",
        transition: "all 0.2s ease",
      }}
    >
      <button
        onClick={onActivate}
        style={{
          width: "100%",
          padding: "20px 24px",
          display: "flex",
          alignItems: "center",
          gap: 16,
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 14,
            fontWeight: 700,
            flexShrink: 0,
            background: completed ? "#10B981" : active ? "#0D9488" : "#E2E8F0",
            color: completed || active ? "#fff" : "#64748B",
            transition: "all 0.2s ease",
          }}
        >
          {completed ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ) : (
            step
          )}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 16, fontWeight: 600, color: "#1A202C", marginBottom: 2, fontFamily: "var(--font-jakarta)" }}>
            {title}
          </div>
          <div style={{ fontSize: 13, color: "#64748B" }}>
            {description}
          </div>
        </div>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#94A3B8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            transform: active ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
          }}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {active && (
        <div style={{ padding: "0 24px 24px", borderTop: "1px solid #E2E8F0" }}>
          <div style={{ paddingTop: 20 }}>
            {children}
          </div>
        </div>
      )}
    </div>
  )
}

function CodeBlock({ children }: { readonly children: string }) {
  return (
    <pre
      style={{
        padding: 16,
        background: "#1A202C",
        color: "#E2E8F0",
        borderRadius: 10,
        fontSize: 13,
        lineHeight: 1.6,
        overflow: "auto",
        fontFamily: "monospace",
      }}
    >
      {children}
    </pre>
  )
}

export default function SetupPage() {
  const [activeStep, setActiveStep] = useState(1)
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set())

  const markComplete = (step: number) => {
    setCompletedSteps((prev) => {
      const next = new Set(prev)
      next.add(step)
      return next
    })
    setActiveStep(step + 1)
  }

  return (
    <div style={{ minHeight: "100vh", background: "#FAFBFC", fontFamily: "var(--font-dm-sans)" }}>
      {/* Header */}
      <nav
        style={{
          padding: "16px 24px",
          borderBottom: "1px solid #E2E8F0",
          background: "#FFFFFF",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Link
            href="/"
            style={{
              fontSize: 16,
              fontWeight: 700,
              color: "#1A202C",
              textDecoration: "none",
              fontFamily: "var(--font-outfit)",
            }}
          >
            Partner Portal Templates
          </Link>
          <span
            style={{
              fontSize: 11,
              fontWeight: 600,
              padding: "3px 10px",
              borderRadius: 20,
              background: "rgba(13, 148, 136, 0.1)",
              color: "#0D9488",
            }}
          >
            Setup Guide
          </span>
        </div>
        <Link
          href="/"
          style={{
            fontSize: 13,
            color: "#64748B",
            textDecoration: "none",
            fontWeight: 500,
          }}
        >
          View Templates
        </Link>
      </nav>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "48px 24px" }}>
        {/* Hero */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h1
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 700,
              color: "#1A202C",
              lineHeight: 1.2,
              marginBottom: 16,
              fontFamily: "var(--font-jakarta)",
            }}
          >
            Deploy Your Portal in 5 Minutes
          </h1>
          <p style={{ fontSize: 17, color: "#64748B", lineHeight: 1.6, maxWidth: 520, margin: "0 auto" }}>
            Get your own instance of Partner Portal Templates running on Vercel with AI-powered topic generation.
          </p>
        </div>

        {/* One-click deploy */}
        <div
          style={{
            padding: 32,
            borderRadius: 16,
            background: "linear-gradient(135deg, #1E3A5F, #0D9488)",
            textAlign: "center",
            marginBottom: 32,
          }}
        >
          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 8, fontFamily: "var(--font-jakarta)" }}>
            One-Click Deploy
          </h2>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", marginBottom: 20 }}>
            Fork the repo and deploy to Vercel instantly. You will be prompted for API keys.
          </p>
          <a
            href={DEPLOY_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "14px 32px",
              background: "#FFFFFF",
              color: "#1E3A5F",
              borderRadius: 10,
              fontSize: 15,
              fontWeight: 700,
              textDecoration: "none",
              transition: "transform 0.15s ease",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 76 65" fill="#1E3A5F">
              <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
            </svg>
            Deploy to Vercel
          </a>
        </div>

        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <span style={{ fontSize: 13, color: "#94A3B8", fontWeight: 500 }}>
            or set up manually
          </span>
        </div>

        {/* Setup steps */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <SetupStep
            step={1}
            title="Clone and Install"
            description="Get the code running locally"
            active={activeStep === 1}
            completed={completedSteps.has(1)}
            onActivate={() => setActiveStep(1)}
          >
            <CodeBlock>{`git clone https://github.com/lordshua1337/partner-portal-templates.git
cd partner-portal-templates
npm install
cp .env.example .env.local`}</CodeBlock>
            <button
              onClick={() => markComplete(1)}
              style={{
                marginTop: 16,
                padding: "10px 24px",
                background: "#0D9488",
                color: "#fff",
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
              }}
            >
              Done -- Next Step
            </button>
          </SetupStep>

          <SetupStep
            step={2}
            title="Configure Environment"
            description="Add your API keys for AI generation"
            active={activeStep === 2}
            completed={completedSteps.has(2)}
            onActivate={() => setActiveStep(2)}
          >
            <p style={{ fontSize: 14, color: "#64748B", marginBottom: 12, lineHeight: 1.6 }}>
              Add these to your <code style={{ background: "#E2E8F0", padding: "2px 6px", borderRadius: 4, fontSize: 13 }}>.env.local</code> file:
            </p>
            <CodeBlock>{`# Required for AI topic generation
ANTHROPIC_API_KEY=sk-ant-...

# Optional: Supabase (for topic storage)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...

# Optional: Site URL (for sitemap)
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app`}</CodeBlock>
            <p style={{ fontSize: 13, color: "#94A3B8", marginTop: 12 }}>
              The site works without Supabase -- topics are pre-built as static files. AI generation requires the Anthropic key.
            </p>
            <button
              onClick={() => markComplete(2)}
              style={{
                marginTop: 16,
                padding: "10px 24px",
                background: "#0D9488",
                color: "#fff",
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
              }}
            >
              Done -- Next Step
            </button>
          </SetupStep>

          <SetupStep
            step={3}
            title="Run Locally"
            description="Start the dev server and preview templates"
            active={activeStep === 3}
            completed={completedSteps.has(3)}
            onActivate={() => setActiveStep(3)}
          >
            <CodeBlock>{`npm run dev`}</CodeBlock>
            <p style={{ fontSize: 14, color: "#64748B", marginTop: 12, lineHeight: 1.6 }}>
              Open <code style={{ background: "#E2E8F0", padding: "2px 6px", borderRadius: 4, fontSize: 13 }}>http://localhost:3000</code> to see all templates and educational pages.
            </p>
            <div style={{ marginTop: 16, display: "flex", gap: 8, flexWrap: "wrap" }}>
              <span style={{ fontSize: 12, padding: "4px 10px", borderRadius: 6, background: "#E2E8F0", color: "#64748B" }}>6 landing page templates</span>
              <span style={{ fontSize: 12, padding: "4px 10px", borderRadius: 6, background: "#E2E8F0", color: "#64748B" }}>10 tax resolution guides</span>
              <span style={{ fontSize: 12, padding: "4px 10px", borderRadius: 6, background: "#E2E8F0", color: "#64748B" }}>AI topic generation API</span>
            </div>
            <button
              onClick={() => markComplete(3)}
              style={{
                marginTop: 16,
                padding: "10px 24px",
                background: "#0D9488",
                color: "#fff",
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
              }}
            >
              Done -- Next Step
            </button>
          </SetupStep>

          <SetupStep
            step={4}
            title="Generate New Topics (Optional)"
            description="Use the AI API to create new educational pages"
            active={activeStep === 4}
            completed={completedSteps.has(4)}
            onActivate={() => setActiveStep(4)}
          >
            <p style={{ fontSize: 14, color: "#64748B", marginBottom: 12, lineHeight: 1.6 }}>
              With your Anthropic API key configured, generate new topics via the API:
            </p>
            <CodeBlock>{`curl -X POST http://localhost:3000/api/generate-topic \\
  -H "Content-Type: application/json" \\
  -d '{
    "topic": "Payroll Tax Debt",
    "vertical": "tax-resolution"
  }'`}</CodeBlock>
            <p style={{ fontSize: 13, color: "#94A3B8", marginTop: 12, lineHeight: 1.6 }}>
              The API generates a complete educational page config using Claude, validates it with Zod, and returns the structured content ready to render.
            </p>
            <button
              onClick={() => markComplete(4)}
              style={{
                marginTop: 16,
                padding: "10px 24px",
                background: "#0D9488",
                color: "#fff",
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
              }}
            >
              Done -- Next Step
            </button>
          </SetupStep>

          <SetupStep
            step={5}
            title="Deploy to Vercel"
            description="Push to production"
            active={activeStep === 5}
            completed={completedSteps.has(5)}
            onActivate={() => setActiveStep(5)}
          >
            <CodeBlock>{`# Connect to Vercel
npx vercel

# Deploy to production
npx vercel --prod`}</CodeBlock>
            <p style={{ fontSize: 14, color: "#64748B", marginTop: 12, lineHeight: 1.6 }}>
              Add your environment variables in the Vercel dashboard under Settings &gt; Environment Variables. The site will rebuild automatically on every push to main.
            </p>
            <button
              onClick={() => markComplete(5)}
              style={{
                marginTop: 16,
                padding: "10px 24px",
                background: "#0D9488",
                color: "#fff",
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
              }}
            >
              Complete Setup
            </button>
          </SetupStep>
        </div>

        {completedSteps.size === 5 && (
          <div
            style={{
              marginTop: 32,
              padding: 32,
              borderRadius: 16,
              background: "#FFFFFF",
              border: "1px solid #10B981",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 32, marginBottom: 12 }}>Done</div>
            <h3 style={{ fontSize: 20, fontWeight: 700, color: "#1A202C", marginBottom: 8, fontFamily: "var(--font-jakarta)" }}>
              Your portal is ready
            </h3>
            <p style={{ fontSize: 14, color: "#64748B", marginBottom: 20 }}>
              All templates and educational pages are live. Generate new topics anytime via the API.
            </p>
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 28px",
                background: "#0D9488",
                color: "#fff",
                borderRadius: 10,
                fontSize: 15,
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              View Your Portal
            </Link>
          </div>
        )}

        {/* What is included */}
        <div style={{ marginTop: 48, padding: "32px 0", borderTop: "1px solid #E2E8F0" }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, color: "#1A202C", marginBottom: 20, fontFamily: "var(--font-jakarta)" }}>
            What is included
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
            {[
              { label: "Landing Page Templates", value: "7" },
              { label: "Educational Topics", value: "10" },
              { label: "Section Components", value: "14" },
              { label: "Motion Components", value: "7" },
              { label: "Google Fonts", value: "11" },
              { label: "AI Generation API", value: "Built-in" },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  padding: 16,
                  borderRadius: 10,
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                }}
              >
                <div style={{ fontSize: 24, fontWeight: 700, color: "#1E3A5F", marginBottom: 4, fontFamily: "var(--font-jakarta)" }}>
                  {item.value}
                </div>
                <div style={{ fontSize: 13, color: "#64748B" }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
