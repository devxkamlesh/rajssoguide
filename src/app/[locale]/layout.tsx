import type { ReactNode } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import {
  locales,
  isLocale,
  hreflangMap,
  type Locale,
} from "@/lib/i18n";
import { site } from "@/lib/site";
import {
  buildGraph,
  organizationSchema,
  personSchema,
  websiteSchema,
} from "@/lib/schema";
import { ATTRIBUTION } from "@/lib/attribution";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc: Locale = isLocale(locale) ? locale : site.locale.default;
  return {
    metadataBase: new URL(site.url),
    title: {
      default: site.tagline[loc],
      template: `%s | ${site.name}`,
    },
    description: site.description[loc],
    authors: [{ name: ATTRIBUTION.name, url: ATTRIBUTION.url }],
    creator: `${ATTRIBUTION.name} — ${ATTRIBUTION.handle}`,
    publisher: site.name,
    icons: {
      icon: [
        // Google needs a favicon that's at least 48x48px and a multiple of 48px
        // to show it in search results; 16/32px alone fall back to a globe.
        { url: site.assets.favicons.icon192, sizes: "192x192", type: "image/png" },
        { url: site.assets.favicons.icon512, sizes: "512x512", type: "image/png" },
        { url: site.assets.favicons.icon32, sizes: "32x32", type: "image/png" },
        { url: site.assets.favicons.icon16, sizes: "16x16", type: "image/png" },
        { url: site.assets.favicons.ico },
      ],
      apple: site.assets.favicons.apple,
    },
    manifest: site.assets.favicons.manifest,
    openGraph: {
      siteName: site.name,
      locale: hreflangMap[loc],
      type: "website",
      images: [
        {
          url: site.assets.ogImage[loc],
          width: 1200,
          height: 630,
          alt: site.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: site.social.twitter,
      images: [site.assets.ogImage[loc]],
    },
    verification: {
      google: "p_abO8_AL_rYysORgZ8oWGT4ZwacZdbNoR6FCtwNU48",
    },
    other: {
      "designed-by": `${ATTRIBUTION.name} (${ATTRIBUTION.url})`,
      generator: `Next.js — built by ${ATTRIBUTION.handle}`,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const graph = buildGraph([websiteSchema(), organizationSchema(), personSchema()]);
  // Native GA4 Measurement ID for the rajssoidguide.in web data stream.
  // (Previously G-RYT943398Y, which only forwarded here via tag destinations.)
  const GA_ID = "G-H7XRW67HZH";
  // Additional Google tag (container) — loaded alongside the GA4 stream.
  const GTAG_ID = "GT-K8FC4S4H";

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-amber-700 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        {locale === "hi" ? "मुख्य सामग्री पर जाएं" : "Skip to main content"}
      </a>
      <JsonLd data={graph} />
      {/* Google Analytics — loads only when browser is idle */}
      {GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="lazyOnload"
          />
          <Script id="gtag-init" strategy="lazyOnload">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');gtag('config','${GTAG_ID}');`}
          </Script>
        </>
      )}
      <Header locale={locale} />
      <main id="main-content" className="mx-auto w-full max-w-5xl flex-1 px-4 py-8">
        {children}
      </main>
      <Footer locale={locale} />
    </>
  );
}
