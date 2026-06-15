import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { cities } from "@/lib/content";
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
        ? "शहर अनुसार एसएसओ आईडी मदद — राजस्थान"
        : "SSO ID Help by City — Rajasthan",
    description:
      locale === "hi"
        ? "जयपुर, जोधपुर, कोटा सहित राजस्थान के शहरों में एसएसओ आईडी और ई-मित्र सहायता।"
        : "SSO ID and e-Mitra help across Rajasthan cities including Jaipur, Jodhpur and Kota.",
    alternates: {
      canonical: canonicalFor(locale, "/cities"),
      ...alternates("/cities"),
    },
  };
}

export default async function CitiesHub({
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
      { name: t.nav.cities, path: `${base}/cities` },
    ]),
    itemListSchema(
      cities.map((c) => ({ name: c.name[loc], path: `${base}/city/${c.slug}` })),
    ),
  ]);

  return (
    <div>
      <JsonLd data={graph} />
      <Breadcrumbs
        items={[{ name: t.common.home, href: base }, { name: t.nav.cities }]}
      />
      <h1 className="text-3xl font-bold tracking-tight">
        {loc === "hi" ? "शहर अनुसार मदद" : "SSO ID Help by City"}
      </h1>
      <p className="mt-3 max-w-2xl text-lg text-zinc-600">
        {loc === "hi"
          ? "अपने शहर में एसएसओ आईडी रजिस्ट्रेशन, लॉगिन और ई-मित्र सेवाओं की जानकारी पाएं।"
          : "Find SSO ID registration, login and e-Mitra service help in your city."}
      </p>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {cities.map((c) => (
          <Link
            key={c.slug}
            href={`${base}/city/${c.slug}`}
            className="rounded-xl border border-zinc-200 px-4 py-3 text-center font-medium text-zinc-700 transition hover:border-amber-500 hover:shadow-sm"
          >
            {c.name[loc]}
          </Link>
        ))}
      </div>
    </div>
  );
}
