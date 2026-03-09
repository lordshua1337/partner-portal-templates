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
  Space_Grotesk,
  Sora,
  Nunito_Sans,
  Source_Sans_3,
  Darker_Grotesque,
  Manrope,
  Open_Sans,
  Inter,
  Public_Sans,
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
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk", display: "swap" })
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" })
const nunitoSans = Nunito_Sans({ subsets: ["latin"], variable: "--font-nunito-sans", display: "swap" })
const sourceSans3 = Source_Sans_3({ subsets: ["latin"], variable: "--font-source-sans", display: "swap" })
const darkerGrotesque = Darker_Grotesque({ subsets: ["latin"], variable: "--font-darker-grotesque", display: "swap" })
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" })
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-open-sans", display: "swap" })
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" })
const publicSans = Public_Sans({ subsets: ["latin"], variable: "--font-public-sans", display: "swap" })

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
  spaceGrotesk.variable,
  sora.variable,
  nunitoSans.variable,
  sourceSans3.variable,
  darkerGrotesque.variable,
  manrope.variable,
  openSans.variable,
  inter.variable,
  publicSans.variable,
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
