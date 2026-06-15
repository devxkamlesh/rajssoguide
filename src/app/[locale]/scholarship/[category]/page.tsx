import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedLinks } from "@/components/RelatedLinks";
import { ImportantLinks } from "@/components/ImportantLinks";
import { scholarships, getScholarship } from "@/lib/content";
import { getDictionary, isLocale, locales, type Locale } from "@/lib/i18n";
import { scholarshipBody } from "@/lib/pageContent";
import { relatedForScholarship, importantLinksForScholarship } from "@/lib/related";
import {
  alternates,
  breadcrumbSchema,
  buildGraph,
  canonicalFor,
} from "@/lib/schema";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    scholarships.map((s) => ({ locale, category: s.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}): Promise<Metadata> {
  const { locale, category } = await params;
  const s = getScholarship(category);
  if (!s || !isLocale(locale)) return {};
  return {
    title: `${s.name[locale]} — SSO Login & Eligibility`,
    description: s.eligibility[locale],
    keywords: s.keywords,
    alternates: {
      canonical: canonicalFor(locale, `/scholarship/${category}`),
      ...alternates(`/scholarship/${category}`),
    },
  };
}

export default async function ScholarshipPage({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}) {
  const { locale, category } = await params;
  if (!isLocale(locale)) notFound();
  const s = getScholarship(category);
  if (!s) notFound();
  const loc = locale as Locale;
  const t = getDictionary(loc);
  const base = `/${loc}`;

  const graph = buildGraph([
    breadcrumbSchema([
      { name: t.common.home, path: base },
      { name: t.nav.scholarships, path: `${base}/scholarships` },
      { name: s.name[loc], path: `${base}/scholarship/${category}` },
    ]),
  ]);

  return (
    <article>
      <JsonLd data={graph} />
      <Breadcrumbs
        items={[
          { name: t.common.home, href: base },
          { name: t.nav.scholarships, href: `${base}/scholarships` },
          { name: s.name[loc] },
        ]}
      />
      <h1 className="text-3xl font-bold tracking-tight">{s.name[loc]}</h1>

      <h2 className="mt-6 text-xl font-semibold">
        {loc === "hi" ? "पात्रता" : "Eligibility"}
      </h2>
      <p className="mt-2 text-zinc-600">{s.eligibility[loc]}</p>

      <h2 className="mt-6 text-xl font-semibold">
        {loc === "hi" ? "एसएसओ के माध्यम से आवेदन" : "Apply via SSO"}
      </h2>
      <p className="mt-2 text-zinc-600">
        {loc === "hi"
          ? "एसएसओ आईडी से लॉगिन कर SJE/SCholarship पोर्टल में आवेदन करें।"
          : "Log in with your SSO ID and apply on the SJE/Scholarship portal."}
      </p>

      <div className="mt-6">
        <Link
          href={`${base}/sso-id-login`}
          className="rounded-full bg-amber-700 px-5 py-2.5 font-medium text-white transition hover:bg-amber-800"
        >
          {t.nav.login}
        </Link>
      </div>

      <div className="mt-8 space-y-4 leading-relaxed text-zinc-700">
        {scholarshipBody(s, loc).map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <ImportantLinks
        title={loc === "hi" ? "महत्वपूर्ण लिंक" : "Important Links"}
        rows={importantLinksForScholarship(loc)}
      />

      <RelatedLinks
        title={t.common.related}
        links={relatedForScholarship(category, loc)}
      />
    </article>
  );
}
