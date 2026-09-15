import type { Metadata, Viewport } from "next";
import { Fraunces, Public_Sans } from "next/font/google";
import { siteConfig, absoluteUrl } from "@/lib/site-config";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { CookieConsent } from "@/components/layout/CookieConsent";
import "./globals.css";

const displayFont = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  axes: ["opsz", "SOFT", "WONK"],
  style: ["normal", "italic"],
  display: "swap",
});

const bodyFont = Public_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s — ${siteConfig.shortTitle}`,
  },
  description: siteConfig.description,
  keywords: [
    "strategia przeglądarkowa",
    "gra strategiczna dla jednego gracza",
    "gra bez pobierania",
    "gra strategiczna online",
    "gra w przeglądarce",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "pl-PL": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.shortTitle,
    images: [{ url: absoluteUrl("/opengraph-image"), width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: siteConfig.themeColor,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body>
        <a href="#glowna-tresc" className="skip-link">
          Przejdź do treści głównej
        </a>
        <SiteHeader />
        <main id="glowna-tresc">{children}</main>
        <SiteFooter />
        <CookieConsent />
      </body>
    </html>
  );
}
