import type { ReactNode } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
  websiteSchema,
} from "@/lib/schema";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
    icons: {
      icon: [
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

  const graph = buildGraph([websiteSchema(), organizationSchema()]);

  return (
    <html
      lang={hreflangMap[locale]}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <JsonLd data={graph} />
        <Header locale={locale} />
        <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8">
          {children}
        </main>
        <Footer locale={locale} />
        <SpeedInsights />
      </body>
    </html>
  );
}
