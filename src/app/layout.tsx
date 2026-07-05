import type { ReactNode } from "react";
import { headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import { hreflangMap, isLocale, defaultLocale, type Locale } from "@/lib/i18n";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Next.js 16 requires the root layout to render <html> and <body>. The active
// locale is resolved from the x-locale header set by middleware so each locale
// still gets the correct lang attribute for SEO. Locale-specific UI (Header,
// Footer, scripts) lives in src/app/[locale]/layout.tsx.
export default async function RootLayout({ children }: { children: ReactNode }) {
  const headerList = await headers();
  const localeHeader = headerList.get("x-locale") ?? "";
  const locale: Locale = isLocale(localeHeader) ? localeHeader : defaultLocale;

  return (
    <html
      lang={hreflangMap[locale]}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="192x192" />
        <link rel="author" type="text/plain" href="/humans.txt" />
        <link
          rel="preload"
          href="/RajSSO/logo-horizontal.webp"
          as="image"
          type="image/webp"
        />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="" />
      </head>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
