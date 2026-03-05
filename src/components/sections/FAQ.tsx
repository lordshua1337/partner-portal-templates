"use client"

import { useState, useCallback } from "react"
import FadeIn from "@/components/motion/FadeIn"

interface FAQItem {
  readonly question: string
  readonly answer: string
}

interface FAQProps {
  readonly items: readonly FAQItem[]
  readonly backgroundColor?: string
  readonly textColor?: string
  readonly mutedColor?: string
  readonly accentColor?: string
  readonly borderColor?: string
  readonly title?: string
  readonly displayFont?: string
}

function AccordionItem({
  item,
  isOpen,
  onToggle,
  textColor,
  mutedColor,
  accentColor,
  borderColor,
}: {
  readonly item: FAQItem
  readonly isOpen: boolean
  readonly onToggle: () => void
  readonly textColor: string
  readonly mutedColor: string
  readonly accentColor: string
  readonly borderColor: string
}) {
  return (
    <div
      style={{
        borderBottom: `1px solid ${borderColor}`,
        overflow: "hidden",
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          padding: "20px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: "left",
          gap: 16,
          minHeight: 48,
        }}
      >
        <span style={{ fontSize: 16, fontWeight: 600, color: textColor }}>
          {item.question}
        </span>
        <span
          style={{
            fontSize: 20,
            color: accentColor,
            transition: "transform var(--duration-std, 300ms) ease",
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
            flexShrink: 0,
          }}
        >
          +
        </span>
      </button>
      <div
        style={{
          maxHeight: isOpen ? 300 : 0,
          opacity: isOpen ? 1 : 0,
          transition: "max-height var(--duration-std, 300ms) ease, opacity var(--duration-std, 300ms) ease",
          overflow: "hidden",
        }}
      >
        <p
          style={{
            fontSize: 15,
            color: mutedColor,
            lineHeight: 1.7,
            paddingBottom: 20,
          }}
        >
          {item.answer}
        </p>
      </div>
    </div>
  )
}

export default function FAQ({
  items,
  backgroundColor = "transparent",
  textColor = "#1a1a1a",
  mutedColor = "#666",
  accentColor = "#2563eb",
  borderColor = "#e5e5e5",
  title = "Frequently Asked Questions",
  displayFont,
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleToggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }, [])

  return (
    <section style={{ padding: "80px 24px", background: backgroundColor }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <FadeIn>
          <h2
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: textColor,
              marginBottom: 40,
              textAlign: "center",
              fontFamily: displayFont,
            }}
          >
            {title}
          </h2>
        </FadeIn>
        {items.map((item, i) => (
          <FadeIn key={item.question} delay={i * 0.05}>
            <AccordionItem
              item={item}
              isOpen={openIndex === i}
              onToggle={() => handleToggle(i)}
              textColor={textColor}
              mutedColor={mutedColor}
              accentColor={accentColor}
              borderColor={borderColor}
            />
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
