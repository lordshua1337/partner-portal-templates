import Link from 'next/link'
import { notFound } from 'next/navigation'
import { TEMPLATES } from '@/data/templates'

export function generateStaticParams() {
  return TEMPLATES.map((t) => ({ id: t.id }))
}

export default async function TemplatePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const template = TEMPLATES.find((t) => t.id === id)
  if (!template) notFound()

  return (
    <div style={{
      minHeight: '100vh',
      background: template.colors.background,
      fontFamily: `'${template.fonts.body}', system-ui, sans-serif`,
      color: template.colors.text,
    }}>
      {/* Back nav */}
      <nav style={{
        padding: '12px 24px',
        borderBottom: `1px solid ${template.colors.border}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: 1200,
        margin: '0 auto',
      }}>
        <Link href="/" style={{
          color: template.colors.textMuted,
          textDecoration: 'none',
          fontSize: 14,
        }}>
          Back to Templates
        </Link>
        <span style={{
          fontSize: 12,
          padding: '4px 12px',
          borderRadius: 12,
          background: template.colors.primary,
          color: '#fff',
        }}>{template.category}</span>
      </nav>

      {/* Hero */}
      <section style={{
        minHeight: 620,
        background: template.gradient,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 24px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.45) 40%)',
          zIndex: 1,
        }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 700 }}>
          <p style={{
            fontSize: 14,
            letterSpacing: 3,
            color: template.colors.accent,
            textTransform: 'uppercase',
            marginBottom: 16,
            fontWeight: 600,
          }}>
            {template.useCase.split(',')[0].toUpperCase()}
          </p>
          <h1 style={{
            fontFamily: `'${template.fonts.display}', serif`,
            fontSize: 48,
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.1,
            marginBottom: 20,
            textShadow: '0 2px 12px rgba(0,0,0,0.4)',
          }}>
            Your Headline Goes Here and Makes an Impact
          </h1>
          <p style={{
            fontSize: 20,
            color: 'rgba(255,255,255,0.88)',
            maxWidth: 560,
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            A compelling subheadline that supports the main message and encourages the visitor to take action.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 36 }}>
            <button style={{
              padding: '14px 32px',
              borderRadius: 8,
              fontWeight: 600,
              fontSize: 16,
              background: template.colors.accent,
              color: '#1a1a1a',
              border: `2px solid ${template.colors.accent}`,
              cursor: 'pointer',
            }}>Get Started</button>
            <button style={{
              padding: '14px 32px',
              borderRadius: 8,
              fontWeight: 600,
              fontSize: 16,
              background: 'transparent',
              color: '#ffffff',
              border: '2px solid rgba(255,255,255,0.6)',
              cursor: 'pointer',
            }}>Learn More</button>
          </div>
        </div>
      </section>

      {/* Section list */}
      <section style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '96px 24px',
      }}>
        <h2 style={{
          fontFamily: `'${template.fonts.display}', serif`,
          fontSize: 30,
          fontWeight: 700,
          marginBottom: 48,
          textAlign: 'center',
        }}>
          Template Sections
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
        }}>
          {template.sections.map((section, i) => (
            <div key={section} style={{
              background: template.colors.surface,
              border: `1px solid ${template.colors.border}`,
              borderRadius: 12,
              padding: 28,
            }}>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 36,
                height: 36,
                borderRadius: '50%',
                background: template.colors.primary,
                color: '#fff',
                fontWeight: 700,
                fontSize: 14,
                marginBottom: 12,
              }}>{i + 1}</span>
              <h3 style={{
                fontFamily: `'${template.fonts.display}', serif`,
                fontSize: 20,
                fontWeight: 600,
                marginBottom: 8,
              }}>{section}</h3>
              <p style={{
                fontSize: 14,
                color: template.colors.textMuted,
                lineHeight: 1.5,
              }}>
                Pre-designed with exact typography, spacing, and color specifications.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Color palette */}
      <section style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 24px 96px',
      }}>
        <h2 style={{
          fontFamily: `'${template.fonts.display}', serif`,
          fontSize: 30,
          fontWeight: 700,
          marginBottom: 32,
          textAlign: 'center',
        }}>Color Palette</h2>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          {Object.entries(template.colors).map(([name, color]) => (
            <div key={name} style={{ textAlign: 'center' }}>
              <div style={{
                width: 80,
                height: 80,
                borderRadius: 12,
                background: color,
                border: '1px solid #e5e5e5',
                marginBottom: 8,
              }} />
              <p style={{ fontSize: 11, color: template.colors.textMuted }}>{name}</p>
              <p style={{ fontSize: 11, fontFamily: 'monospace', color: template.colors.textMuted }}>{color}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Typography */}
      <section style={{
        maxWidth: 800,
        margin: '0 auto',
        padding: '0 24px 96px',
      }}>
        <h2 style={{
          fontFamily: `'${template.fonts.display}', serif`,
          fontSize: 30,
          fontWeight: 700,
          marginBottom: 32,
          textAlign: 'center',
        }}>Typography</h2>
        <div style={{
          background: template.colors.surface,
          border: `1px solid ${template.colors.border}`,
          borderRadius: 12,
          padding: 40,
        }}>
          <div style={{ marginBottom: 32 }}>
            <p style={{ fontSize: 12, color: template.colors.textMuted, marginBottom: 8 }}>
              Display: {template.fonts.display}
            </p>
            <p style={{
              fontFamily: `'${template.fonts.display}', serif`,
              fontSize: 48,
              fontWeight: 800,
              lineHeight: 1.1,
            }}>The Quick Brown Fox</p>
          </div>
          <div>
            <p style={{ fontSize: 12, color: template.colors.textMuted, marginBottom: 8 }}>
              Body: {template.fonts.body}
            </p>
            <p style={{
              fontFamily: `'${template.fonts.body}', sans-serif`,
              fontSize: 16,
              lineHeight: 1.7,
              color: template.colors.textMuted,
            }}>
              The quick brown fox jumps over the lazy dog. This is a sample body text paragraph demonstrating the {template.fonts.body} font at 16px with a line-height of 1.7 for optimal readability.
            </p>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section style={{
        background: template.colors.primary,
        padding: '80px 24px',
        textAlign: 'center',
      }}>
        <h2 style={{
          fontFamily: `'${template.fonts.display}', serif`,
          fontSize: 36,
          fontWeight: 800,
          color: '#ffffff',
          marginBottom: 16,
        }}>Best For</h2>
        <p style={{
          fontSize: 18,
          color: 'rgba(255,255,255,0.8)',
          maxWidth: 600,
          margin: '0 auto',
          lineHeight: 1.6,
        }}>{template.useCase}</p>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '32px 24px',
        borderTop: `1px solid ${template.colors.border}`,
        textAlign: 'center',
      }}>
        <Link href="/" style={{
          color: template.colors.primary,
          textDecoration: 'none',
          fontSize: 14,
          fontWeight: 600,
        }}>
          View All Templates
        </Link>
      </footer>
    </div>
  )
}
