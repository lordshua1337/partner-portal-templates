'use client'

import { useState } from 'react'
import { createSupabaseBrowser } from '@/lib/auth/client'

export default function AuthPage() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const supabase = createSupabaseBrowser()
    const { error: authError } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${window.location.origin}/auth/callback` },
    })

    if (authError) {
      setError(authError.message)
    } else {
      setSent(true)
    }
    setLoading(false)
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a2e0a 0%, #2d5016 50%, #4a7c2f 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'DM Sans', system-ui, sans-serif",
    }}>
      <div style={{
        width: '100%',
        maxWidth: 420,
        padding: 40,
        background: 'rgba(255,255,255,0.95)',
        borderRadius: 16,
        boxShadow: '0 24px 80px rgba(0,0,0,0.3)',
      }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{
            fontSize: 14,
            fontFamily: "'Playfair Display', serif",
            color: '#2d5016',
            letterSpacing: 2,
            marginBottom: 8,
            fontWeight: 700,
          }}>PARTNER PORTAL</div>
          <h1 style={{
            fontSize: 28,
            fontWeight: 700,
            color: '#1a1a1a',
            margin: 0,
            fontFamily: "'Playfair Display', serif",
          }}>Template Gallery</h1>
          <p style={{ color: '#5a5a5a', fontSize: 14, marginTop: 8 }}>
            Sign in to customize and save templates.
          </p>
        </div>

        {sent ? (
          <div style={{
            textAlign: 'center', padding: 24,
            background: '#f0fdf4', border: '1px solid #86efac',
            borderRadius: 8, color: '#166534',
          }}>
            <p style={{ fontWeight: 600, marginBottom: 8 }}>Check your email</p>
            <p style={{ fontSize: 14 }}>Magic link sent to {email}</p>
          </div>
        ) : (
          <form onSubmit={handleLogin}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              required
              style={{
                width: '100%', padding: '12px 16px',
                border: '2px solid #e8e4dc', borderRadius: 8,
                fontSize: 16, marginBottom: 16, boxSizing: 'border-box',
              }}
            />
            {error && <p style={{ color: '#dc2626', fontSize: 13, marginBottom: 12 }}>{error}</p>}
            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%', padding: '12px 24px',
                background: '#2d5016', color: '#fff',
                border: 'none', borderRadius: 8,
                fontSize: 16, fontWeight: 600,
                cursor: loading ? 'not-allowed' : 'pointer',
              }}
            >
              {loading ? 'Sending...' : 'Send Magic Link'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
