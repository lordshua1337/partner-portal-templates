"use client";

import { useState } from "react";
import Link from "next/link";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setLoading(true);

    // Simulate a brief delay for static demo
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 800);
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--bg-base)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow effects */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 700,
          height: 500,
          background:
            "radial-gradient(ellipse at center, rgba(37,99,235,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "40%",
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(37,99,235,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          width: "100%",
          maxWidth: 420,
          padding: 40,
          background: "var(--bg-surface)",
          borderRadius: 16,
          border: "1px solid var(--border-color)",
          boxShadow: "0 24px 80px rgba(0,0,0,0.4)",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Back link */}
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontSize: 13,
            color: "var(--text-secondary)",
            marginBottom: 32,
            textDecoration: "none",
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
          </svg>
          Back to Templates
        </Link>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div
            style={{
              fontSize: 12,
              color: "var(--accent-light)",
              letterSpacing: 3,
              marginBottom: 12,
              fontWeight: 600,
              textTransform: "uppercase",
            }}
          >
            Partner Portal
          </div>
          <h1
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: "var(--text-primary)",
              letterSpacing: "-0.02em",
              marginBottom: 8,
            }}
          >
            Sign In
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: 14 }}>
            Access the template gallery to customize and deploy landing pages.
          </p>
        </div>

        {submitted ? (
          <div
            style={{
              textAlign: "center",
              padding: 28,
              background: "rgba(37, 99, 235, 0.08)",
              border: "1px solid rgba(37, 99, 235, 0.2)",
              borderRadius: 12,
            }}
          >
            {/* Checkmark icon */}
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "rgba(37, 99, 235, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--accent-light)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <p
              style={{
                fontWeight: 600,
                marginBottom: 8,
                color: "var(--text-primary)",
                fontSize: 16,
              }}
            >
              Check your email
            </p>
            <p style={{ fontSize: 14, color: "var(--text-secondary)" }}>
              A magic link has been sent to{" "}
              <strong style={{ color: "var(--text-primary)" }}>{email}</strong>
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="email"
              style={{
                display: "block",
                fontSize: 13,
                fontWeight: 600,
                color: "var(--text-secondary)",
                marginBottom: 8,
              }}
            >
              Email address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              required
              style={{
                width: "100%",
                padding: "12px 16px",
                background: "var(--bg-raised)",
                border: "1px solid var(--border-subtle)",
                borderRadius: 8,
                fontSize: 16,
                color: "var(--text-primary)",
                marginBottom: 20,
                boxSizing: "border-box",
                outline: "none",
              }}
            />
            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                padding: "12px 24px",
                background: loading ? "var(--border-subtle)" : "var(--accent)",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                fontSize: 16,
                fontWeight: 600,
                cursor: loading ? "not-allowed" : "pointer",
                transition: "opacity 0.2s ease",
              }}
            >
              {loading ? "Sending..." : "Send Magic Link"}
            </button>
          </form>
        )}

        {/* Divider */}
        <div
          style={{
            margin: "28px 0",
            borderTop: "1px solid var(--border-color)",
          }}
        />

        {/* Info text */}
        <p
          style={{
            fontSize: 12,
            color: "var(--text-muted)",
            textAlign: "center",
            lineHeight: 1.5,
          }}
        >
          No account needed. Enter your email and we will send a secure login
          link. No passwords to remember.
        </p>
      </div>
    </div>
  );
}
