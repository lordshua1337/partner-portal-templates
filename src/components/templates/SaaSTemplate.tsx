"use client"

import { useState } from "react"
import type { TemplateConfig } from "@/data/templates"
import FadeIn from "@/components/motion/FadeIn"
import GlowCard from "@/components/motion/GlowCard"
import FeatureGrid from "@/components/sections/FeatureGrid"
import PricingTable from "@/components/sections/PricingTable"
import FAQ from "@/components/sections/FAQ"
import CTABanner from "@/components/sections/CTABanner"
import TestimonialGrid from "@/components/sections/TestimonialGrid"
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts"
import * as Tabs from "@radix-ui/react-tabs"

const DASHBOARD_DATA = [
  { name: "Jan", deploys: 320, latency: 52, users: 780 },
  { name: "Feb", deploys: 480, latency: 48, users: 920 },
  { name: "Mar", deploys: 590, latency: 45, users: 1050 },
  { name: "Apr", deploys: 720, latency: 42, users: 1180 },
  { name: "May", deploys: 680, latency: 44, users: 1320 },
  { name: "Jun", deploys: 910, latency: 38, users: 1480 },
  { name: "Jul", deploys: 1100, latency: 35, users: 1640 },
  { name: "Aug", deploys: 1340, latency: 33, users: 1820 },
  { name: "Sep", deploys: 1520, latency: 31, users: 2010 },
  { name: "Oct", deploys: 1780, latency: 29, users: 2200 },
  { name: "Nov", deploys: 2100, latency: 28, users: 2500 },
  { name: "Dec", deploys: 2847, latency: 26, users: 2847 },
]

const TOUR_TABS = [
  {
    id: "deploy",
    label: "Deploy",
    title: "Deploy in Seconds",
    desc: "Push your code and watch it go live instantly. Zero-config deployments with automatic SSL, CDN, and edge caching.",
    icon: "M13 2L3 14h9l-1 10 10-12h-9l1-10z",
  },
  {
    id: "monitor",
    label: "Monitor",
    title: "Monitor Everything",
    desc: "Real-time dashboards for every metric. Set up alerts, track errors, and get notified before your users notice a problem.",
    icon: "M18 20V10M12 20V4M6 20v-6",
  },
  {
    id: "scale",
    label: "Scale",
    title: "Scale Without Thinking",
    desc: "Auto-scaling infrastructure that handles traffic spikes effortlessly. Pay only for what you use, scale to millions.",
    icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
  },
]

export default function SaaSTemplate({ template: t }: { readonly template: TemplateConfig }) {
  const c = t.colors
  const [activeTab, setActiveTab] = useState("deploy")

  return (
    <div style={{ minHeight: "100vh", background: c.background, color: c.text, fontFamily: `'${t.fonts.body}', sans-serif` }}>
      {/* Hero: Dark with glowing browser mockup */}
      <section
        style={{
          padding: "120px 24px 80px",
          paddingLeft: "max(24px, env(safe-area-inset-left))",
          paddingRight: "max(24px, env(safe-area-inset-right))",
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        {/* Subtle grid background -- reduced opacity for readability */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(${c.border}18 1px, transparent 1px), linear-gradient(90deg, ${c.border}18 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          pointerEvents: "none",
        }} />

        {/* Glow */}
        <div style={{
          position: "absolute", top: "30%", left: "50%", transform: "translate(-50%, -50%)",
          width: 700, height: 500,
          background: `radial-gradient(ellipse, ${c.primary}18 0%, transparent 70%)`,
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <FadeIn>
            <p style={{ fontSize: 13, letterSpacing: 3, textTransform: "uppercase", color: c.primaryLight, marginBottom: 20, fontWeight: 600 }}>
              Developer Platform
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 style={{
              fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 800, lineHeight: 1.1,
              marginBottom: 20, fontFamily: `'${t.fonts.display}', sans-serif`,
              color: c.text,
            }}>
              {t.hero.headline}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p style={{ fontSize: 18, color: c.textMuted, lineHeight: 1.7, maxWidth: 560, margin: "0 auto 36px" }}>
              {t.hero.subheadline}
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <button style={{
                padding: "16px 36px", background: c.primary, color: "#fff",
                borderRadius: 10, fontSize: 16, fontWeight: 700, border: "none", cursor: "pointer",
                boxShadow: `0 0 30px ${c.primary}44`,
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
              onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
              >
                {t.hero.cta}
              </button>
              <button style={{
                padding: "16px 36px", background: "transparent", color: c.textMuted,
                borderRadius: 10, fontSize: 16, fontWeight: 600, border: `1px solid ${c.border}`, cursor: "pointer",
              }}>
                {t.hero.secondaryCta}
              </button>
            </div>
          </FadeIn>
        </div>

        {/* Browser mockup -- perspective disabled on mobile via media query workaround */}
        <FadeIn delay={0.5}>
          <div style={{
            maxWidth: 900, margin: "60px auto 0",
            borderRadius: 16, overflow: "hidden",
            border: `1px solid ${c.border}`,
            boxShadow: `0 20px 80px ${c.primary}18, 0 0 0 1px ${c.border}`,
            background: c.surface,
            position: "relative",
          }}>
            <style>{`
              .saas-browser-mockup {
                transform: perspective(1000px) rotateX(2deg);
              }
              @media (max-width: 768px) {
                .saas-browser-mockup {
                  transform: none;
                }
              }
            `}</style>
            <div className="saas-browser-mockup">
              {/* Browser chrome */}
              <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "12px 16px", background: c.background, borderBottom: `1px solid ${c.border}` }}>
                <div style={{ display: "flex", gap: 6 }}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
                </div>
                <div style={{ flex: 1, textAlign: "center" }}>
                  <div style={{ display: "inline-block", padding: "4px 40px", borderRadius: 6, background: c.surface, fontSize: 12, color: c.textMuted }}>
                    app.devplatform.io/dashboard
                  </div>
                </div>
              </div>
              {/* Dashboard with Recharts */}
              <div style={{ padding: "16px 16px 20px", minHeight: 300, position: "relative" }}>
                {/* Stat cards */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 12, marginBottom: 16 }}>
                  {[
                    { label: "Deployments", value: "2,847", trend: "+12%" },
                    { label: "Uptime", value: "99.97%", trend: "+0.02%" },
                    { label: "Avg Response", value: "48ms", trend: "-8ms" },
                    { label: "Active Users", value: "1,204", trend: "+18%" },
                  ].map(item => (
                    <div key={item.label} style={{ padding: "12px 14px", borderRadius: 10, background: c.background, border: `1px solid ${c.border}` }}>
                      <div style={{ fontSize: 11, color: c.textMuted, marginBottom: 4 }}>{item.label}</div>
                      <div style={{ fontSize: 20, fontWeight: 700, color: c.text }}>{item.value}</div>
                      <div style={{ fontSize: 11, color: "#22c55e", marginTop: 2 }}>{item.trend}</div>
                    </div>
                  ))}
                </div>
                {/* Area chart */}
                <div style={{ height: 140, borderRadius: 10, background: c.background, border: `1px solid ${c.border}`, padding: "12px 8px 4px" }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={DASHBOARD_DATA}>
                      <defs>
                        <linearGradient id="saasChartGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor={c.primary} stopOpacity={0.3} />
                          <stop offset="100%" stopColor={c.primary} stopOpacity={0.02} />
                        </linearGradient>
                      </defs>
                      <Area
                        type="monotone"
                        dataKey="deploys"
                        stroke={c.primary}
                        strokeWidth={2}
                        fill="url(#saasChartGradient)"
                        dot={false}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Social proof strip */}
      <section style={{ padding: "36px 24px", borderTop: `1px solid ${c.border}`, borderBottom: `1px solid ${c.border}` }}>
        <FadeIn>
          <div style={{ maxWidth: 960, margin: "0 auto", display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap", alignItems: "center" }}>
            <span style={{ fontSize: 13, color: c.textMuted, fontWeight: 500 }}>Trusted by</span>
            {["Vercel", "Stripe", "Linear", "Notion", "Figma"].map(name => (
              <span key={name} style={{ fontSize: 16, fontWeight: 700, color: c.textMuted, opacity: 0.5 }}>{name}</span>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Features */}
      <FeatureGrid
        features={t.features}
        backgroundColor={c.background}
        cardBackground={c.surface}
        textColor={c.text}
        mutedColor={c.textMuted}
        accentColor={c.primary}
        borderColor={c.border}
        title="Everything You Need to Ship"
        subtitle="One platform for your entire development workflow."
        displayFont={`'${t.fonts.display}', sans-serif`}
        useGlow
      />

      {/* Product Tour: Radix Tabs */}
      <section style={{ padding: "80px 24px", background: c.surface }}>
        <style>{`
          .saas-tab-trigger {
            padding: 14px 28px;
            font-size: 15px;
            font-weight: 600;
            border: none;
            cursor: pointer;
            border-radius: 8px;
            transition: background 0.2s, color 0.2s;
            font-family: '${t.fonts.display}', sans-serif;
          }
          .saas-tab-trigger[data-state="inactive"] {
            background: transparent;
            color: ${c.textMuted};
          }
          .saas-tab-trigger[data-state="active"] {
            background: ${c.primary};
            color: #fff;
            box-shadow: 0 4px 20px ${c.primary}33;
          }
          @media (max-width: 640px) {
            .saas-tab-trigger {
              padding: 10px 16px;
              font-size: 13px;
            }
          }
        `}</style>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <h2 style={{
                fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700,
                marginBottom: 12, fontFamily: `'${t.fonts.display}', sans-serif`,
                color: c.text,
              }}>
                How It Works
              </h2>
              <p style={{ fontSize: 16, color: c.textMuted, maxWidth: 500, margin: "0 auto" }}>
                From code push to global deployment in three simple steps.
              </p>
            </div>
          </FadeIn>

          <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
            <FadeIn delay={0.1}>
              <Tabs.List style={{
                display: "flex", gap: 8, justifyContent: "center",
                marginBottom: 48, flexWrap: "wrap",
              }}>
                {TOUR_TABS.map(tab => (
                  <Tabs.Trigger
                    key={tab.id}
                    value={tab.id}
                    className="saas-tab-trigger"
                  >
                    {tab.label}
                  </Tabs.Trigger>
                ))}
              </Tabs.List>
            </FadeIn>

            {TOUR_TABS.map(tab => (
              <Tabs.Content key={tab.id} value={tab.id}>
                <FadeIn>
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: 48,
                    alignItems: "center",
                  }}>
                    <div>
                      <h3 style={{
                        fontSize: "clamp(22px, 3vw, 28px)", fontWeight: 700, marginBottom: 12,
                        fontFamily: `'${t.fonts.display}', sans-serif`, color: c.text,
                      }}>
                        {tab.title}
                      </h3>
                      <p style={{ fontSize: 16, color: c.textMuted, lineHeight: 1.7 }}>
                        {tab.desc}
                      </p>
                    </div>
                    <div style={{
                      height: 240, borderRadius: 16,
                      background: c.background, border: `1px solid ${c.border}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      position: "relative", overflow: "hidden",
                    }}>
                      {/* Subtle grid pattern -- low opacity */}
                      <div style={{
                        position: "absolute", inset: 0,
                        backgroundImage: `linear-gradient(${c.border}12 1px, transparent 1px), linear-gradient(90deg, ${c.border}12 1px, transparent 1px)`,
                        backgroundSize: "32px 32px",
                        pointerEvents: "none",
                      }} />
                      <div style={{
                        width: 64, height: 64, borderRadius: 16,
                        background: `${c.primary}15`, border: `1px solid ${c.primary}33`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={c.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d={tab.icon} />
                        </svg>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </Tabs.Content>
            ))}
          </Tabs.Root>
        </div>
      </section>

      {/* Pricing */}
      {t.pricing && (
        <PricingTable
          tiers={t.pricing}
          backgroundColor={c.background}
          cardBackground={c.surface}
          textColor={c.text}
          mutedColor={c.textMuted}
          accentColor={c.primary}
          borderColor={c.border}
          displayFont={`'${t.fonts.display}', sans-serif`}
        />
      )}

      {/* Testimonials */}
      <TestimonialGrid
        testimonials={t.testimonials}
        backgroundColor={c.surface}
        cardBackground={c.background}
        textColor={c.text}
        mutedColor={c.textMuted}
        accentColor={c.accent}
        borderColor={c.border}
      />

      {/* FAQ */}
      <FAQ
        items={t.faq}
        backgroundColor={c.background}
        textColor={c.text}
        mutedColor={c.textMuted}
        accentColor={c.primary}
        borderColor={c.border}
        displayFont={`'${t.fonts.display}', sans-serif`}
      />

      {/* CTA */}
      <CTABanner
        headline="Start Building for Free"
        description="No credit card required. Deploy your first project in under 2 minutes."
        buttonText="Start Free Trial"
        gradient={`linear-gradient(135deg, ${c.primary}, ${c.accent})`}
        displayFont={`'${t.fonts.display}', sans-serif`}
      />

      {/* Footer */}
      <footer style={{ padding: "32px 24px", textAlign: "center", borderTop: `1px solid ${c.border}` }}>
        <p style={{ fontSize: 13, color: c.textMuted }}>{t.name} Template -- Partner Portal Templates</p>
      </footer>
    </div>
  )
}
