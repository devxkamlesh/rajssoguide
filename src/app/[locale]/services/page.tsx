import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { services } from "@/lib/content";
import { getDictionary, isLocale, locales, type Locale } from "@/lib/i18n";
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
        ? "राजस्थान एसएसओ सेवाएं — PayManager, RajKaj, जन आधार"
        : "Rajasthan SSO Services — PayManager, RajKaj, Jan Aadhaar",
    description:
      locale === "hi"
        ? "एक एसएसओ लॉगिन से उपलब्ध प्रमुख राजस्थान सरकारी सेवाएं और उनका उपयोग कैसे करें।"
        : "Key Rajasthan government services available through one SSO login and how to use them.",
    alternates: {
      canonical: canonicalFor(locale, "/services"),
      ...alternates("/services"),
    },
  };
}

export default async function ServicesHub({
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
      { name: t.nav.services, path: `${base}/services` },
    ]),
    itemListSchema(
      services.map((s) => ({ name: s.name[loc], path: `${base}/service/${s.slug}` })),
    ),
  ]);

  return (
    <div>
      <JsonLd data={graph} />
      <Breadcrumbs
        items={[{ name: t.common.home, href: base }, { name: t.nav.services }]}
      />
      <h1 className="text-3xl font-bold tracking-tight">
        {loc === "hi" ? "राजस्थान एसएसओ सेवाएं" : "Rajasthan SSO Services"}
      </h1>
      <p className="mt-3 max-w-2xl text-lg text-zinc-600">
        {loc === "hi"
          ? "एक ही एसएसओ लॉगिन से 100+ सेवाओं तक पहुंच। नीचे सबसे लोकप्रिय सेवाएं दी गई हैं।"
          : "One SSO login unlocks 100+ services. The most popular ones are listed below."}
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <Link
            key={s.slug}
            href={`${base}/service/${s.slug}`}
            className="rounded-2xl border border-zinc-200 p-6 transition hover:border-amber-500 hover:shadow-sm"
          >
            <h2 className="text-lg font-semibold text-zinc-900">{s.name[loc]}</h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
              {s.purpose[loc]}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
