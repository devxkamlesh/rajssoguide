import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { cities, getCity } from "@/lib/content";
import { getDictionary, isLocale, locales, type Locale } from "@/lib/i18n";
import {
  alternates,
  breadcrumbSchema,
  buildGraph,
  canonicalFor,
} from "@/lib/schema";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    cities.map((c) => ({ locale, slug: c.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const c = getCity(slug);
  if (!c || !isLocale(locale)) return {};
  return {
    title: `SSO ID ${c.name[locale]} — Login, Registration & e-Mitra`,
    description: c.keywords.join(", "),
    keywords: c.keywords,
    alternates: {
      canonical: canonicalFor(locale, `/city/${slug}`),
      ...alternates(`/city/${slug}`),
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const c = getCity(slug);
  if (!c) notFound();
  const loc = locale as Locale;
  const t = getDictionary(loc);
  const base = `/${loc}`;

  const graph = buildGraph([
    breadcrumbSchema([
      { name: "Home", path: base },
      { name: c.name[loc], path: `${base}/city/${slug}` },
    ]),
  ]);

  return (
    <article>
      <JsonLd data={graph} />
      <h1 className="text-3xl font-bold tracking-tight">
        SSO ID {c.name[loc]}
      </h1>
      <p className="mt-3 text-lg text-zinc-600">
        {loc === "hi"
          ? `${c.name[loc]} में एसएसओ आईडी लॉगिन, रजिस्ट्रेशन और ई-मित्र सेवाओं की जानकारी।`
          : `SSO ID login, registration and e-Mitra service help for ${c.name[loc]}, Rajasthan.`}
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href={`${base}/sso-id-login`}
          className="rounded-full bg-amber-600 px-5 py-2.5 font-medium text-white"
        >
          {t.nav.login}
        </Link>
        <Link
          href={`${base}/sso-id-registration`}
          className="rounded-full border border-amber-600 px-5 py-2.5 font-medium text-amber-700"
        >
          {t.nav.registration}
        </Link>
      </div>
    </article>
  );
}
