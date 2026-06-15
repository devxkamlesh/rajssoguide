import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LatestUpdates } from "@/components/LatestUpdates";
import { ShareWhatsApp } from "@/components/ShareWhatsApp";
import { getDictionary, isLocale, locales, type Locale } from "@/lib/i18n";
import { sortedUpdates } from "@/data/updates";
import {
  alternates,
  breadcrumbSchema,
  buildGraph,
  canonicalFor,
  itemListSchema,
} from "@/lib/schema";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    title:
      locale === "hi"
        ? "ताज़ा अपडेट — राजस्थान एसएसओ परीक्षा, छात्रवृत्ति व सेवाएं"
        : "Latest Updates — Rajasthan SSO Exams, Scholarships & Services",
    description:
      locale === "hi"
        ? "राजस्थान एसएसओ से जुड़ी परीक्षाओं, छात्रवृत्ति और सेवाओं की नवीनतम तिथियां और सूचनाएं।"
        : "Latest dates and notifications for Rajasthan SSO exams, scholarships and services.",
    alternates: {
      canonical: canonicalFor(locale, "/updates"),
      ...alternates("/updates"),
    },
  };
}

export default async function UpdatesHub({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const loc = locale as Locale;
  const t = getDictionary(loc);
  const base = `/${loc}`;

  const graph = buildGraph([
    breadcrumbSchema([
      { name: t.common.home, path: base },
      { name: t.nav.updates, path: `${base}/updates` },
    ]),
    itemListSchema(
      sortedUpdates.map((u) => ({
        name: u.title[loc],
        path: u.external ? u.href : `${base}${u.href}`,
      })),
    ),
  ]);

  return (
    <div>
      <JsonLd data={graph} />
      <Breadcrumbs
        items={[{ name: t.common.home, href: base }, { name: t.nav.updates }]}
      />
      <h1 className="text-3xl font-bold tracking-tight">
        {loc === "hi" ? "ताज़ा अपडेट" : "Latest Updates"}
      </h1>
      <p className="mt-3 max-w-2xl text-lg text-zinc-600">
        {loc === "hi"
          ? "राजस्थान एसएसओ परीक्षाओं, छात्रवृत्ति और सेवाओं की नवीनतम तिथियां और सूचनाएं।"
          : "The latest dates and notifications for Rajasthan SSO exams, scholarships and services."}
      </p>

      <div className="mt-8">
        <LatestUpdates title={t.common.latestUpdates} locale={loc} />
      </div>

      <div className="mt-6">
        <ShareWhatsApp
          path={`${base}/updates`}
          title={loc === "hi" ? "राजस्थान एसएसओ ताज़ा अपडेट" : "Rajasthan SSO Latest Updates"}
          locale={loc}
        />
      </div>
    </div>
  );
}
