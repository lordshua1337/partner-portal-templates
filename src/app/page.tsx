import Link from 'next/link'
import { TEMPLATES } from '@/data/templates'

export default function HomePage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#faf8f3',
      fontFamily: "'DM Sans', system-ui, sans-serif",
    }}>
      {/* Header */}
      <header style={{
        padding: '16px 24px',
        borderBottom: '1px solid #e8e4dc',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: 1200,
        margin: '0 auto',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 20,
            fontWeight: 700,
            color: '#2d5016',
          }}>Partner Portal</span>
          <span style={{ color: '#c8a96e', fontSize: 13 }}>Templates</span>
        </div>
        <Link href="/auth" style={{
          padding: '8px 20px',
          background: '#2d5016',
          color: '#fff',
          borderRadius: 8,
          fontSize: 14,
          fontWeight: 600,
          textDecoration: 'none',
        }}>Sign In</Link>
      </header>

      {/* Hero */}
      <section style={{
        padding: '80px 24px 60px',
        textAlign: 'center',
        maxWidth: 800,
        margin: '0 auto',
      }}>
        <p style={{
          fontSize: 14,
          letterSpacing: 3,
          color: '#c8a96e',
          textTransform: 'uppercase',
          marginBottom: 16,
          fontWeight: 600,
        }}>LANDING PAGE TEMPLATES</p>
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 48,
          fontWeight: 800,
          color: '#1a1a1a',
          lineHeight: 1.1,
          marginBottom: 20,
        }}>
          Six Professional Templates. Zero Guesswork.
        </h1>
        <p style={{
          fontSize: 18,
          color: '#5a5a5a',
          lineHeight: 1.6,
          maxWidth: 560,
          margin: '0 auto',
        }}>
          Pre-designed landing pages for every business type. Each template is fully specified with typography, colors, spacing, and sections. Pick one and launch.
        </p>
      </section>

      {/* Template Grid */}
      <section style={{
        padding: '0 24px 96px',
        maxWidth: 1200,
        margin: '0 auto',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
        }}>
          {TEMPLATES.map((template) => (
            <Link
              key={template.id}
              href={`/templates/${template.id}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div style={{
                background: '#ffffff',
                borderRadius: 16,
                overflow: 'hidden',
                border: '1px solid #e8e4dc',
              }}>
                {/* Preview strip */}
                <div style={{
                  height: 180,
                  background: template.gradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <span style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: '#fff',
                    padding: '6px 16px',
                    background: 'rgba(0,0,0,0.3)',
                    borderRadius: 20,
                  }}>{template.category}</span>
                </div>

                {/* Info */}
                <div style={{ padding: 24 }}>
                  <h3 style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: '#1a1a1a',
                    marginBottom: 8,
                  }}>{template.name}</h3>
                  <p style={{
                    fontSize: 14,
                    color: '#5a5a5a',
                    lineHeight: 1.5,
                    marginBottom: 16,
                  }}>{template.description}</p>

                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 12 }}>
                    <span style={{
                      fontSize: 11, padding: '3px 10px',
                      borderRadius: 12, background: '#f5f5f0', color: '#5a5a5a',
                    }}>{template.fonts.display}</span>
                    <span style={{
                      fontSize: 11, padding: '3px 10px',
                      borderRadius: 12, background: '#f5f5f0', color: '#5a5a5a',
                    }}>{template.fonts.body}</span>
                  </div>

                  <p style={{ fontSize: 12, color: '#a1a1a1' }}>
                    {template.sections.length} sections
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '32px 24px',
        borderTop: '1px solid #e8e4dc',
        textAlign: 'center',
      }}>
        <p style={{ fontSize: 13, color: '#a1a1a1' }}>
          Partner Portal Templates -- 6 landing page designs for the block builder
        </p>
      </footer>
    </div>
  )
}
