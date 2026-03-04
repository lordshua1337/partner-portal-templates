import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Partner Portal Templates -- Landing Page Collection",
  description:
    "Pre-built landing page templates for tax and financial services partner portals. Each template is conversion-optimized and ready to customize.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
