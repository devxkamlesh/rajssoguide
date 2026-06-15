import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { exams } from "@/lib/content";
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
  const title =
    locale === "hi"
      ? "राजस्थान सरकारी परीक्षाएं 2026 — SSO OTR गाइड"
      : "Rajasthan Government Exams 2026 — SSO OTR Guide";
  return {
    title,
    description:
      locale === "hi"
        ? "RPSC, RSMSSB और पटवारी जैसी राजस्थान परीक्षाओं के लिए एसएसओ आईडी, OTR शुल्क और आवेदन गाइड।"
        : "SSO ID, OTR fees and application guides for Rajasthan exams like RPSC, RSMSSB and Patwari.",
    alternates: {
      canonical: canonicalFor(locale, "/exams"),
      ...alternates("/exams"),
    },
  };
}

export default async function ExamsHub({
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
      { name: t.nav.exams, path: `${base}/exams` },
    ]),
    itemListSchema(
      exams.map((e) => ({ name: e.fullName[loc], path: `${base}/exam/${e.slug}` })),
    ),
  ]);

  return (
    <div>
      <JsonLd data={graph} />
      <Breadcrumbs
        items={[
          { name: t.common.home, href: base },
          { name: t.nav.exams },
        ]}
      />
      <h1 className="text-3xl font-bold tracking-tight">
        {loc === "hi" ? "राजस्थान सरकारी परीक्षाएं" : "Rajasthan Government Exams"}
      </h1>
      <p className="mt-3 max-w-2xl text-lg text-zinc-600">
        {loc === "hi"
          ? "एसएसओ आईडी और वन-टाइम रजिस्ट्रेशन (OTR) के माध्यम से आवेदन की जाने वाली प्रमुख राजस्थान परीक्षाएं।"
          : "Major Rajasthan exams you apply for through your SSO ID and One-Time Registration (OTR)."}
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {exams.map((e) => (
          <Link
            key={e.slug}
            href={`${base}/exam/${e.slug}`}
            className="rounded-2xl border border-zinc-200 p-6 transition hover:border-amber-500 hover:shadow-sm"
          >
            <h2 className="text-lg font-semibold text-zinc-900">
              {e.fullName[loc]}
            </h2>
            <dl className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-zinc-500">
              <div>
                <dt className="inline">
                  {loc === "hi" ? "OTR शुल्क: " : "OTR fee: "}
                </dt>
                <dd className="inline font-medium text-amber-700">
                  ₹{e.otrFee.general}
                </dd>
              </div>
              <div>
                <dt className="inline">
                  {loc === "hi" ? "अंतिम तिथि: " : "Last date: "}
                </dt>
                <dd className="inline font-medium text-zinc-700">
                  {e.lastDate}
                </dd>
              </div>
            </dl>
          </Link>
        ))}
      </div>
    </div>
  );
}
