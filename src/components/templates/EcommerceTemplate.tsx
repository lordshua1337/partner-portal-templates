"use client"

import { useState, useCallback } from "react"
import type { TemplateConfig } from "@/data/templates"
import FadeIn from "@/components/motion/FadeIn"
import FloatingElement from "@/components/motion/FloatingElement"
import FeatureGrid from "@/components/sections/FeatureGrid"
import PricingTable from "@/components/sections/PricingTable"
import TestimonialGrid from "@/components/sections/TestimonialGrid"
import FAQ from "@/components/sections/FAQ"
import CTABanner from "@/components/sections/CTABanner"
import CountUp from "@/components/motion/CountUp"
import useEmblaCarousel from "embla-carousel-react"
import * as Dialog from "@radix-ui/react-dialog"

const GALLERY_ITEMS = [
  { label: "Dashboard", colorKey: "primary" as const },
  { label: "Forms", colorKey: "accent" as const },
  { label: "Cards", colorKey: "primaryLight" as const },
  { label: "Navigation", colorKey: "accent" as const },
  { label: "Charts", colorKey: "primary" as const },
  { label: "Modals", colorKey: "primaryLight" as const },
] as const

type ColorKey = "primary" | "accent" | "primaryLight"

export default function EcommerceTemplate({ template: t }: { readonly template: TemplateConfig }) {
  const c = t.colors
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" })
  const [activeSlide, setActiveSlide] = useState(0)
  const [lightboxItem, setLightboxItem] = useState<{ label: string; color: string } | null>(null)

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
    setActiveSlide(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
    setActiveSlide(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  const scrollTo = useCallback((index: number) => {
    if (!emblaApi) return
    emblaApi.scrollTo(index)
    setActiveSlide(index)
  }, [emblaApi])

  const getColor = (key: ColorKey): string => c[key]

  return (
    <div style={{ minHeight: "100vh", background: c.background, color: c.text, fontFamily: `'${t.fonts.body}', sans-serif` }}>
      {/* Hero: split layout */}
      <section style={{ padding: "clamp(48px, 8vw, 80px) clamp(16px, 4vw, 24px)", position: "relative", overflow: "hidden" }}>
        <div style={{
          maxWidth: 1100, margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))",
          gap: "clamp(32px, 6vw, 64px)", alignItems: "center",
        }}>
          <FadeIn direction="left">
            <div>
              <p style={{ fontSize: 13, letterSpacing: 2, textTransform: "uppercase", color: c.accent, fontWeight: 600, marginBottom: 16 }}>
                New Release
              </p>
              <h1 style={{
                fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 800,
                lineHeight: 1.1, marginBottom: 20,
                fontFamily: `'${t.fonts.display}', sans-serif`,
              }}>
                {t.hero.headline}
              </h1>
              <p style={{ fontSize: "clamp(15px, 2vw, 17px)", color: c.textMuted, lineHeight: 1.7, marginBottom: 32 }}>
                {t.hero.subheadline}
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
                <button style={{
                  padding: "16px 32px", background: c.primary, color: "#fff",
                  borderRadius: 10, fontSize: 16, fontWeight: 700, border: "none", cursor: "pointer",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 8px 30px ${c.primary}44` }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none" }}
                >
                  {t.hero.cta}
                </button>
                <button style={{
                  padding: "16px 32px", background: "transparent", color: c.text,
                  borderRadius: 10, fontSize: 16, fontWeight: 600, border: `1px solid ${c.border}`, cursor: "pointer",
                }}>
                  {t.hero.secondaryCta}
                </button>
              </div>
              {/* Trust signals */}
              <div style={{ display: "flex", gap: "clamp(16px, 3vw, 24px)", marginTop: 32, flexWrap: "wrap" }}>
                {t.stats.map(stat => (
                  <div key={stat.label}>
                    <div style={{ fontSize: "clamp(18px, 2.5vw, 22px)", fontWeight: 800, color: c.primary, fontFamily: `'${t.fonts.display}', sans-serif` }}>
                      <CountUp end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                    </div>
                    <div style={{ fontSize: 12, color: c.textMuted }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Product image placeholder */}
          <FadeIn direction="right" delay={0.2}>
            <FloatingElement duration={8}>
              <div style={{
                borderRadius: 24, overflow: "hidden", position: "relative",
                background: `linear-gradient(135deg, ${c.primary}11, ${c.accent}11)`,
                border: `1px solid ${c.border}`,
                padding: "clamp(20px, 4vw, 32px)",
                aspectRatio: "1",
                maxWidth: 420, margin: "0 auto",
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              }}>
                {/* Best seller badge */}
                <div style={{
                  position: "absolute", top: 20, right: 20,
                  padding: "6px 16px", background: c.accent, color: "#fff",
                  borderRadius: 20, fontSize: 12, fontWeight: 700,
                }}>
                  Best Seller
                </div>
                {/* Product mockup */}
                <div style={{
                  width: "clamp(120px, 40%, 180px)", height: "clamp(160px, 50%, 220px)", borderRadius: 16,
                  background: `linear-gradient(135deg, ${c.primary}22, ${c.accent}22)`,
                  border: `2px solid ${c.border}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 24,
                }}>
                  <div style={{
                    width: 80, height: 80, borderRadius: 12,
                    background: `linear-gradient(135deg, ${c.primary}44, ${c.accent}44)`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={c.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                </div>
                <div style={{ fontSize: "clamp(18px, 3vw, 22px)", fontWeight: 700, fontFamily: `'${t.fonts.display}', sans-serif`, color: c.text }}>Design System Kit</div>
                <div style={{ fontSize: 14, color: c.textMuted, marginTop: 4 }}>v3.0 -- 2,400+ Components</div>
              </div>
            </FloatingElement>
          </FadeIn>
        </div>
      </section>

      {/* Features */}
      <FeatureGrid
        features={t.features}
        backgroundColor={c.surface}
        cardBackground={c.background}
        textColor={c.text}
        mutedColor={c.textMuted}
        accentColor={c.accent}
        borderColor={c.border}
        title="Everything Included"
        subtitle="One purchase, zero limitations. Here is what you get."
        displayFont={`'${t.fonts.display}', sans-serif`}
      />

      {/* Product Gallery -- Embla Carousel + Radix Dialog Lightbox */}
      <section style={{ padding: "clamp(48px, 8vw, 80px) clamp(16px, 4vw, 24px)", background: c.background }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <FadeIn>
            <h2 style={{
              fontSize: "clamp(26px, 4vw, 32px)", fontWeight: 700, textAlign: "center",
              marginBottom: 40, fontFamily: `'${t.fonts.display}', sans-serif`, color: c.text,
            }}>
              Preview the Components
            </h2>
          </FadeIn>

          {/* Carousel */}
          <div style={{ position: "relative" }}>
            <div ref={emblaRef} style={{ overflow: "hidden", borderRadius: 16 }}>
              <div style={{ display: "flex", gap: 16 }}>
                {GALLERY_ITEMS.map((item) => {
                  const itemColor = getColor(item.colorKey)
                  return (
                    <div
                      key={item.label}
                      style={{ flex: "0 0 calc(33.333% - 11px)", minWidth: 0 }}
                    >
                      <div
                        role="button"
                        tabIndex={0}
                        onClick={() => setLightboxItem({ label: item.label, color: itemColor })}
                        onKeyDown={e => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault()
                            setLightboxItem({ label: item.label, color: itemColor })
                          }
                        }}
                        style={{
                          aspectRatio: "4/3", borderRadius: 12,
                          background: `linear-gradient(135deg, ${itemColor}11, ${itemColor}22)`,
                          border: `1px solid ${c.border}`,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          cursor: "pointer", overflow: "hidden", position: "relative",
                          transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        }}
                        onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.03)"; e.currentTarget.style.boxShadow = `0 8px 30px ${itemColor}22` }}
                        onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "none" }}
                      >
                        <div style={{ textAlign: "center" }}>
                          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={itemColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 8 }}>
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                          </svg>
                          <span style={{ fontSize: 15, fontWeight: 600, color: c.text, display: "block" }}>{item.label}</span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Prev / Next buttons */}
            <button
              onClick={scrollPrev}
              aria-label="Previous slide"
              style={{
                position: "absolute", left: -16, top: "50%", transform: "translateY(-50%)",
                width: 40, height: 40, borderRadius: "50%",
                background: c.background, border: `1px solid ${c.border}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                transition: "background 0.2s ease",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = c.surface }}
              onMouseLeave={e => { e.currentTarget.style.background = c.background }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={c.text} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next slide"
              style={{
                position: "absolute", right: -16, top: "50%", transform: "translateY(-50%)",
                width: 40, height: 40, borderRadius: "50%",
                background: c.background, border: `1px solid ${c.border}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                transition: "background 0.2s ease",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = c.surface }}
              onMouseLeave={e => { e.currentTarget.style.background = c.background }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={c.text} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            {/* Dot indicators */}
            <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 24 }}>
              {GALLERY_ITEMS.map((item, i) => (
                <button
                  key={item.label}
                  onClick={() => scrollTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  style={{
                    width: activeSlide === i ? 24 : 8,
                    height: 8,
                    borderRadius: 4,
                    border: "none",
                    background: activeSlide === i ? c.primary : c.border,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    padding: 0,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog.Root open={lightboxItem !== null} onOpenChange={open => { if (!open) setLightboxItem(null) }}>
        <Dialog.Portal>
          <Dialog.Overlay style={{
            position: "fixed", inset: 0,
            background: "rgba(0, 0, 0, 0.7)",
            backdropFilter: "blur(4px)",
            zIndex: 9998,
            animation: "fadeIn 0.2s ease",
          }} />
          <Dialog.Content
            aria-describedby="lightbox-description"
            style={{
              position: "fixed", top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
              width: "min(90vw, 640px)",
              background: c.background,
              borderRadius: 20,
              border: `1px solid ${c.border}`,
              padding: "clamp(24px, 4vw, 40px)",
              zIndex: 9999,
              boxShadow: "0 24px 64px rgba(0, 0, 0, 0.3)",
              animation: "fadeIn 0.2s ease",
              outline: "none",
            }}
          >
            <Dialog.Title style={{
              fontSize: "clamp(22px, 3vw, 28px)", fontWeight: 700,
              fontFamily: `'${t.fonts.display}', sans-serif`,
              marginBottom: 8, color: c.text,
            }}>
              {lightboxItem?.label}
            </Dialog.Title>
            <p id="lightbox-description" style={{ fontSize: 15, color: c.textMuted, marginBottom: 24 }}>
              Component preview -- click outside to close.
            </p>
            {lightboxItem && (
              <div style={{
                aspectRatio: "16/10", borderRadius: 14,
                background: `linear-gradient(135deg, ${lightboxItem.color}15, ${lightboxItem.color}30)`,
                border: `1px solid ${c.border}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 24,
              }}>
                <div style={{ textAlign: "center" }}>
                  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke={lightboxItem.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 12 }}>
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                  <div style={{ fontSize: 20, fontWeight: 700, color: c.text }}>{lightboxItem.label} Components</div>
                  <div style={{ fontSize: 14, color: c.textMuted, marginTop: 4 }}>Full preview of {lightboxItem.label.toLowerCase()} elements</div>
                </div>
              </div>
            )}
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Dialog.Close asChild>
                <button style={{
                  padding: "12px 28px", background: c.primary, color: "#fff",
                  borderRadius: 10, fontSize: 15, fontWeight: 600, border: "none", cursor: "pointer",
                  transition: "opacity 0.2s ease",
                }}
                onMouseEnter={e => { e.currentTarget.style.opacity = "0.9" }}
                onMouseLeave={e => { e.currentTarget.style.opacity = "1" }}
                >
                  Close Preview
                </button>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      {/* Pricing */}
      {t.pricing && (
        <PricingTable
          tiers={t.pricing}
          backgroundColor={c.surface}
          cardBackground={c.background}
          textColor={c.text}
          mutedColor={c.textMuted}
          accentColor={c.accent}
          borderColor={c.border}
          displayFont={`'${t.fonts.display}', sans-serif`}
        />
      )}

      {/* Testimonials */}
      <TestimonialGrid
        testimonials={t.testimonials}
        backgroundColor={c.background}
        cardBackground={c.surface}
        textColor={c.text}
        mutedColor={c.textMuted}
        accentColor={c.primary}
        borderColor={c.border}
        displayFont={`'${t.fonts.display}', sans-serif`}
      />

      {/* FAQ */}
      <FAQ
        items={t.faq}
        backgroundColor={c.surface}
        textColor={c.text}
        mutedColor={c.textMuted}
        accentColor={c.accent}
        borderColor={c.border}
        displayFont={`'${t.fonts.display}', sans-serif`}
      />

      {/* CTA */}
      <CTABanner
        headline="Get the Complete Kit Today"
        description="2,400+ components, 180+ templates, lifetime updates. One purchase, no subscriptions."
        buttonText="Get Started - $149"
        gradient={`linear-gradient(135deg, ${c.accent}, ${c.primary})`}
        displayFont={`'${t.fonts.display}', sans-serif`}
      />

      {/* Footer */}
      <footer style={{ padding: "32px clamp(16px, 4vw, 24px)", textAlign: "center", borderTop: `1px solid ${c.border}`, background: c.surface }}>
        <p style={{ fontSize: 13, color: c.textMuted }}>{t.name} Template -- Partner Portal Templates</p>
      </footer>
    </div>
  )
}
