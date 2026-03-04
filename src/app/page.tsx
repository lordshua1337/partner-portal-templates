import Link from "next/link";

const TEMPLATE_CARDS = [
  {
    id: "lead-capture",
    title: "Lead Capture",
    description:
      "Authoritative, trust-forward design for service businesses. Converts visitors into consultations with a clear CTA funnel.",
    gradient: "linear-gradient(135deg, #2d5016, #4a7c2f)",
    icon: "capture",
  },
  {
    id: "authority-builder",
    title: "Authority Builder",
    description:
      "Dark, precise, and technical. Deep navy with electric blue accents. Product-centric hero with browser mockup preview.",
    gradient: "linear-gradient(135deg, #060b18, #2563eb)",
    icon: "authority",
  },
  {
    id: "comparison",
    title: "Comparison",
    description:
      "Black, white, and amber. High-contrast editorial design with elegant serif typography and clear service differentiation.",
    gradient: "linear-gradient(135deg, #1a1a1a, #d97706)",
    icon: "comparison",
  },
  {
    id: "calculator",
    title: "Calculator",
    description:
      "Bold and kinetic with vivid purple-to-pink gradients. Dramatic typography with countdown timers and urgency-driven CTAs.",
    gradient: "linear-gradient(135deg, #7c3aed, #ec4899)",
    icon: "calculator",
  },
  {
    id: "testimonial-wall",
    title: "Testimonial Wall",
    description:
      "Warm, confident, and aspirational. Burnt orange meets teal for a premium but approachable product showcase.",
    gradient: "linear-gradient(135deg, #c2410c, #0d9488)",
    icon: "testimonial",
  },
  {
    id: "faq-hub",
    title: "FAQ Hub",
    description:
      "Modular block-based system with variable brand colors. Mix and match from reusable blocks to build any layout.",
    gradient: "linear-gradient(135deg, #6366f1, #f59e0b)",
    icon: "faq",
  },
] as const;

function TemplateIcon({ type }: { type: string }) {
  const size = 28;
  const color = "#fff";

  switch (type) {
    case "capture":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M12 8v8" />
          <path d="M8 12h8" />
        </svg>
      );
    case "authority":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      );
    case "comparison":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="7" height="18" rx="1" />
          <rect x="14" y="3" width="7" height="18" rx="1" />
        </svg>
      );
    case "calculator":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="4" y="2" width="16" height="20" rx="2" />
          <line x1="8" y1="6" x2="16" y2="6" />
          <line x1="8" y1="10" x2="10" y2="10" />
          <line x1="14" y1="10" x2="16" y2="10" />
          <line x1="8" y1="14" x2="10" y2="14" />
          <line x1="14" y1="14" x2="16" y2="14" />
          <line x1="8" y1="18" x2="16" y2="18" />
        </svg>
      );
    case "testimonial":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        </svg>
      );
    case "faq":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      );
    default:
      return null;
  }
}

export default function HomePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--bg-base)",
      }}
    >
      {/* Header */}
      <header
        style={{
          padding: "16px 24px",
          borderBottom: "1px solid var(--border-color)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: "var(--text-primary)",
              letterSpacing: "-0.02em",
            }}
          >
            Partner Portal
          </span>
          <span
            style={{
              fontSize: 13,
              color: "var(--accent-light)",
              fontWeight: 500,
            }}
          >
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
            textDecoration: "none",
            transition: "opacity 0.2s ease",
          }}
        >
          Sign In
        </Link>
      </header>

      {/* Hero */}
      <section
        style={{
          padding: "96px 24px 64px",
          textAlign: "center",
          maxWidth: 800,
          margin: "0 auto",
          position: "relative",
        }}
      >
        {/* Decorative glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            height: 400,
            background:
              "radial-gradient(ellipse at center, rgba(37,99,235,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <p
          style={{
            fontSize: 13,
            letterSpacing: 3,
            color: "var(--accent-light)",
            textTransform: "uppercase",
            marginBottom: 20,
            fontWeight: 600,
            position: "relative",
          }}
        >
          Landing Page Collection
        </p>
        <h1
          style={{
            fontSize: 48,
            fontWeight: 800,
            color: "var(--text-primary)",
            lineHeight: 1.1,
            marginBottom: 20,
            letterSpacing: "-0.03em",
            position: "relative",
          }}
        >
          Partner Portal Templates
        </h1>
        <p
          style={{
            fontSize: 18,
            color: "var(--text-secondary)",
            lineHeight: 1.6,
            maxWidth: 560,
            margin: "0 auto",
            position: "relative",
          }}
        >
          Pre-built landing page templates for tax and financial services
          partner portals. Each template is conversion-optimized and ready to
          customize.
        </p>
      </section>

      {/* Template Grid */}
      <section
        style={{
          padding: "0 24px 96px",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {TEMPLATE_CARDS.map((template) => (
            <div
              key={template.id}
              style={{
                background: "var(--bg-surface)",
                borderRadius: 16,
                overflow: "hidden",
                border: "1px solid var(--border-color)",
                transition: "border-color 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              {/* Preview gradient strip */}
              <div
                style={{
                  height: 160,
                  background: template.gradient,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                {/* Overlay for depth */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.3) 100%)",
                  }}
                />
                <div style={{ position: "relative", zIndex: 1 }}>
                  <TemplateIcon type={template.icon} />
                </div>
              </div>

              {/* Card body */}
              <div style={{ padding: 24 }}>
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: 8,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {template.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                    marginBottom: 20,
                  }}
                >
                  {template.description}
                </p>

                {/* Preview button */}
                <Link
                  href={`/templates/${template.id}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "10px 24px",
                    background: "var(--accent)",
                    color: "#fff",
                    borderRadius: 8,
                    fontSize: 14,
                    fontWeight: 600,
                    textDecoration: "none",
                    transition: "opacity 0.2s ease",
                  }}
                >
                  Preview
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: "32px 24px",
          borderTop: "1px solid var(--border-color)",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: 13, color: "var(--text-muted)" }}>
          Partner Portal Templates -- 6 conversion-optimized landing page
          designs
        </p>
      </footer>
    </div>
  );
}
