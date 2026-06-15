import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { guides } from "@/data/guides";
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
        ? "एसएसओ आईडी गाइड्स — लॉगिन, रजिस्ट्रेशन, रिकवरी"
        : "SSO ID Guides — Login, Registration, Recovery",
    description:
      locale === "hi"
        ? "राजस्थान एसएसओ आईडी लॉगिन, रजिस्ट्रेशन, आईडी रिकवरी और मर्ज की स्टेप-बाय-स्टेप गाइड।"
        : "Step-by-step guides for Rajasthan SSO ID login, registration, recovery and merging.",
    alternates: {
      canonical: canonicalFor(locale, "/guides"),
      ...alternates("/guides"),
    },
  };
}

export default async function GuidesHub({
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
      { name: t.nav.guides, path: `${base}/guides` },
    ]),
    itemListSchema(
      guides.map((g) => ({ name: g.title[loc], path: `${base}/${g.slug}` })),
    ),
  ]);

  return (
    <div>
      <JsonLd data={graph} />
      <Breadcrumbs
        items={[{ name: t.common.home, href: base }, { name: t.nav.guides }]}
      />
      <h1 className="text-3xl font-bold tracking-tight">
        {loc === "hi" ? "एसएसओ आईडी गाइड्स" : "SSO ID Guides"}
      </h1>
      <p className="mt-3 max-w-2xl text-lg text-zinc-600">
        {loc === "hi"
          ? "इन गाइड्स को क्रम से पढ़ें — खाता बनाने से लेकर रिकवरी और मर्ज तक।"
          : "Follow these guides in order — from creating an account to recovery and merging."}
      </p>

      <ol className="mt-8 space-y-4">
        {guides.map((g, i) => (
          <li key={g.slug}>
            <Link
              href={`${base}/${g.slug}`}
              className="flex gap-4 rounded-2xl border border-zinc-200 p-6 transition hover:border-amber-500 hover:shadow-sm"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm font-semibold text-amber-700">
                {i + 1}
              </span>
              <span>
                <span className="block text-lg font-semibold text-zinc-900">
                  {g.title[loc]}
                </span>
                <span className="mt-1 block text-sm leading-relaxed text-zinc-600">
                  {g.intro[loc]}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
