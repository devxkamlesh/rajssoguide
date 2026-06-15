import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { scholarships } from "@/lib/content";
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
        ? "राजस्थान छात्रवृत्ति 2026 — SSO आवेदन गाइड"
        : "Rajasthan Scholarships 2026 — SSO Application Guide",
    description:
      locale === "hi"
        ? "एससी, एसटी, ओबीसी, ईडब्ल्यूएस और अल्पसंख्यक छात्रवृत्ति के लिए एसएसओ आईडी से आवेदन कैसे करें।"
        : "How to apply for SC, ST, OBC, EWS and Minority scholarships using your SSO ID.",
    alternates: {
      canonical: canonicalFor(locale, "/scholarships"),
      ...alternates("/scholarships"),
    },
  };
}

export default async function ScholarshipsHub({
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
      { name: t.nav.scholarships, path: `${base}/scholarships` },
    ]),
    itemListSchema(
      scholarships.map((s) => ({
        name: s.name[loc],
        path: `${base}/scholarship/${s.slug}`,
      })),
    ),
  ]);

  return (
    <div>
      <JsonLd data={graph} />
      <Breadcrumbs
        items={[{ name: t.common.home, href: base }, { name: t.nav.scholarships }]}
      />
      <h1 className="text-3xl font-bold tracking-tight">
        {loc === "hi" ? "राजस्थान छात्रवृत्ति" : "Rajasthan Scholarships"}
      </h1>
      <p className="mt-3 max-w-2xl text-lg text-zinc-600">
        {loc === "hi"
          ? "श्रेणी अनुसार छात्रवृत्ति योजनाएं — सभी एसएसओ आईडी से ऑनलाइन आवेदन की जाती हैं।"
          : "Category-wise scholarship schemes — all applied for online with your SSO ID."}
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {scholarships.map((s) => (
          <Link
            key={s.slug}
            href={`${base}/scholarship/${s.slug}`}
            className="rounded-2xl border border-zinc-200 p-6 transition hover:border-amber-500 hover:shadow-sm"
          >
            <h2 className="text-lg font-semibold text-zinc-900">{s.name[loc]}</h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
              {s.eligibility[loc]}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
