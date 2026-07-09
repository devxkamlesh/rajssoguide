import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedLinks } from "@/components/RelatedLinks";
import { ImportantLinks } from "@/components/ImportantLinks";
import { exams, getExam } from "@/lib/content";
import { getDictionary, isLocale, locales, type Locale } from "@/lib/i18n";
import { getExamDetailedContent } from "@/lib/examContent";
import { relatedForExam, importantLinksForExam } from "@/lib/related";
import {
  alternates,
  breadcrumbSchema,
  buildGraph,
  canonicalFor,
  socialMeta,
} from "@/lib/schema";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    exams.map((e) => ({ locale, slug: e.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const e = getExam(slug);
  if (!e || !isLocale(locale)) return {};
  const title = `${e.fullName[locale]} — SSO ID & OTR`;
  const description =
    locale === "hi"
      ? `${e.fullName[locale]} के लिए राजस्थान एसएसओ पोर्टल से आवेदन — वन-टाइम रजिस्ट्रेशन (OTR), शुल्क और चरण-दर-चरण गाइड।`
      : `Apply for ${e.fullName[locale]} through the Rajasthan SSO portal — One-Time Registration (OTR), fees, and a step-by-step guide.`;
  return {
    title,
    description,
    keywords: e.keywords,
    alternates: {
      canonical: canonicalFor(locale, `/exam/${slug}`),
      ...alternates(`/exam/${slug}`),
    },
    ...socialMeta({ locale, title, description, path: `/exam/${slug}`, type: "article" }),
  };
}

export default async function ExamPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const e = getExam(slug);
  if (!e) notFound();
  const loc = locale as Locale;
  const t = getDictionary(loc);

  const graph = buildGraph([
    breadcrumbSchema([
      { name: t.common.home, path: `/${loc}` },
      { name: t.nav.exams, path: `/${loc}/exams` },
      { name: e.name[loc], path: `/${loc}/exam/${slug}` },
    ]),
  ]);

  const detailedContent = getExamDetailedContent(slug, loc);

  return (
    <article>
      <JsonLd data={graph} />
      <Breadcrumbs
        items={[
          { name: t.common.home, href: `/${loc}` },
          { name: t.nav.exams, href: `/${loc}/exams` },
          { name: e.name[loc] },
        ]}
      />
      <h1 className="text-3xl font-bold tracking-tight">
        {e.fullName[loc]}
      </h1>
      <dl className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
          <dt className="text-sm text-zinc-500">OTR Fee (General)</dt>
          <dd className="text-xl font-semibold">₹{e.otrFee.general}</dd>
        </div>
        <div className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
          <dt className="text-sm text-zinc-500">OTR Fee (SC/ST)</dt>
          <dd className="text-xl font-semibold">₹{e.otrFee.sc_st}</dd>
        </div>
        <div className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
          <dt className="text-sm text-zinc-500">Last Date</dt>
          <dd className="text-xl font-semibold">{e.lastDate}</dd>
        </div>
      </dl>

      {detailedContent && (
        <div className="mt-8 space-y-4 leading-relaxed text-zinc-700">
          {detailedContent.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      )}

      <h2 className="mt-8 text-xl font-semibold">{loc === "hi" ? "SSO के माध्यम से सेवाएं" : "Services via SSO"}</h2>
      <ul className="mt-3 list-inside list-disc text-zinc-600 dark:text-zinc-400">
        {e.services.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>

      <ImportantLinks
        title={loc === "hi" ? "महत्वपूर्ण लिंक" : "Important Links"}
        rows={importantLinksForExam(loc)}
      />

      <RelatedLinks title={t.common.related} links={relatedForExam(slug, loc)} />
    </article>
  );
}
