import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { services, getService } from "@/lib/content";
import { getDictionary, isLocale, locales, type Locale } from "@/lib/i18n";
import {
  alternates,
  breadcrumbSchema,
  buildGraph,
  canonicalFor,
} from "@/lib/schema";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    services.map((s) => ({ locale, slug: s.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const s = getService(slug);
  if (!s || !isLocale(locale)) return {};
  return {
    title: `${s.name[locale]} — SSO Login Guide`,
    description: s.purpose[locale],
    keywords: s.keywords,
    alternates: {
      canonical: canonicalFor(locale, `/service/${slug}`),
      ...alternates(`/service/${slug}`),
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const s = getService(slug);
  if (!s) notFound();
  const loc = locale as Locale;
  const t = getDictionary(loc);

  const graph = buildGraph([
    breadcrumbSchema([
      { name: "Home", path: `/${loc}` },
      { name: t.nav.services, path: `/${loc}` },
      { name: s.name[loc], path: `/${loc}/service/${slug}` },
    ]),
  ]);

  return (
    <article>
      <JsonLd data={graph} />
      <h1 className="text-3xl font-bold tracking-tight">{s.name[loc]}</h1>
      <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">
        {s.purpose[loc]}
      </p>
    </article>
  );
}
