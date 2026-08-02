import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nosiah Studios — Digital work for the near future",
    template: "%s — Nosiah Studios",
  },
  description:
    "Nosiah Studios is an independent digital studio creating thoughtful products, precise interfaces, and modern web experiences.",
  keywords: [
    "Nosiah Studios",
    "digital studio",
    "portfolio",
    "web development",
    "interface design",
    "product engineering",
  ],
  openGraph: {
    title: "Nosiah Studios — Digital work for the near future",
    description:
      "Thoughtful products, precise interfaces, and digital experiences built where design and engineering meet.",
    type: "website",
    locale: "en_AU",
    siteName: "Nosiah Studios",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <div className="page-atmosphere" aria-hidden="true" />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
