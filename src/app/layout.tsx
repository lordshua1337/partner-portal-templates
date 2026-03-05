import type { Metadata } from "next"
import {
  Playfair_Display,
  DM_Sans,
  Syne,
  Outfit,
  Anton,
  Plus_Jakarta_Sans,
  Fraunces,
  Nunito,
  Bodoni_Moda,
  Jost,
  Work_Sans,
} from "next/font/google"
import "./globals.css"

const playfairDisplay = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" })
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", display: "swap" })
const syne = Syne({ subsets: ["latin"], variable: "--font-syne", display: "swap" })
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", display: "swap" })
const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-anton", display: "swap" })
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" })
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" })
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito", display: "swap" })
const bodoniModa = Bodoni_Moda({ subsets: ["latin"], variable: "--font-bodoni", display: "swap" })
const jost = Jost({ subsets: ["latin"], variable: "--font-jost", display: "swap" })
const workSans = Work_Sans({ subsets: ["latin"], variable: "--font-work-sans", display: "swap" })

const fontVariables = [
  playfairDisplay.variable,
  dmSans.variable,
  syne.variable,
  outfit.variable,
  anton.variable,
  plusJakartaSans.variable,
  fraunces.variable,
  nunito.variable,
  bodoniModa.variable,
  jost.variable,
  workSans.variable,
].join(" ")

export const metadata: Metadata = {
  title: "Partner Portal Templates -- Landing Page Collection",
  description:
    "Pre-built landing page templates for tax and financial services partner portals. Each template is conversion-optimized and ready to customize.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={fontVariables}>
      <body>{children}</body>
    </html>
  )
}
