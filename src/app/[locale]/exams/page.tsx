import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqSection } from "@/components/FaqSection";
import { exams } from "@/lib/content";
import { examsHub as c } from "@/data/examsHub";
import { getDictionary, isLocale, locales, type Locale } from "@/lib/i18n";
import {
  alternates,
  breadcrumbSchema,
  buildGraph,
  canonicalFor,
  faqSchema,
  itemListSchema,
  socialMeta,
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
    title: c.metaTitle[locale],
    description: c.metaDescription[locale],
    keywords: c.keywords[locale],
    alternates: {
      canonical: canonicalFor(locale, "/exams"),
      ...alternates("/exams"),
    },
    ...socialMeta({
      locale,
      title: c.metaTitle[locale],
      description: c.metaDescription[locale],
      path: "/exams",
    }),
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
  const hi = loc === "hi";

  const graph = buildGraph([
    breadcrumbSchema([
      { name: t.common.home, path: base },
      { name: t.nav.exams, path: `${base}/exams` },
    ]),
    itemListSchema(
      exams.map((e) => ({ name: e.fullName[loc], path: `${base}/exam/${e.slug}` })),
    ),
    faqSchema(c.faqs[loc]),
  ]);

  return (
    <div>
      <JsonLd data={graph} />
      <Breadcrumbs
        items={[{ name: t.common.home, href: base }, { name: t.nav.exams }]}
      />
      <h1 className="text-3xl font-bold tracking-tight">
        {hi ? "राजस्थान सरकारी परीक्षाएं 2026" : "Rajasthan Government Exams 2026"}
      </h1>
      <p className="mt-4 max-w-3xl leading-relaxed text-zinc-600">{c.intro[loc]}</p>
      <p className="mt-3 max-w-3xl rounded-lg border border-amber-100 bg-amber-50/40 px-4 py-3 text-sm text-amber-900">
        {c.disclaimer[loc]}
      </p>

      {/* Exam cards */}
      <p className="mt-8 text-sm text-zinc-500">
        {hi ? `कुल ${exams.length} परीक्षाएं` : `Showing ${exams.length} exams`}
      </p>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {exams.map((e) => (
          <Link
            key={e.slug}
            href={`${base}/exam/${e.slug}`}
            className="group flex h-full flex-col rounded-2xl border border-zinc-200 p-5 transition hover:border-amber-500 hover:shadow-sm"
          >
            <h2 className="line-clamp-2 min-h-[3rem] text-base font-semibold leading-snug text-zinc-900">
              {e.fullName[loc]}
            </h2>
            <dl className="mt-3 space-y-1.5 border-t border-zinc-100 pt-3 text-sm">
              <div className="flex items-center justify-between gap-2">
                <dt className="text-zinc-500">{hi ? "OTR शुल्क" : "OTR fee"}</dt>
                <dd className="font-semibold text-amber-700">₹{e.otrFee.general}</dd>
              </div>
              <div className="flex items-center justify-between gap-2">
                <dt className="text-zinc-500">{hi ? "अंतिम तिथि" : "Last date"}</dt>
                <dd className="font-medium text-zinc-700">{e.lastDate}</dd>
              </div>
            </dl>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-amber-700">
              {hi ? "विवरण देखें" : "View details"}
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-6">
        <Link
          href={`${base}/exam-calendar`}
          className="inline-flex items-center gap-1 text-sm font-medium text-amber-700 hover:underline"
        >
          {hi ? "परीक्षा कैलेंडर देखें →" : "View the Exam Calendar →"}
        </Link>
      </div>

      {/* What is OTR */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold tracking-tight">{c.otrTitle[loc]}</h2>
        <p className="mt-4 leading-relaxed text-zinc-600">{c.otrIntro[loc]}</p>
        <ul className="mt-5 space-y-3">
          {c.otrPoints[loc].map((p, i) => (
            <li key={i} className="flex gap-2.5">
              <span className="mt-1 text-amber-600">•</span>
              <span className="text-zinc-700">
                <strong className="text-zinc-900">{p.title}</strong> {p.text}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-4 leading-relaxed text-zinc-600">{c.otrClose[loc]}</p>
      </section>

      {/* How to apply */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold tracking-tight">{c.applyTitle[loc]}</h2>
        <ol className="mt-5 space-y-4">
          {c.applySteps[loc].map((s, i) => (
            <li key={i} className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm font-semibold text-amber-700">
                {i + 1}
              </span>
              <span className="text-zinc-700">
                <strong className="text-zinc-900">{s.title}</strong> {s.text}
              </span>
            </li>
          ))}
        </ol>
        <p className="mt-5 rounded-lg border border-red-100 bg-red-50/40 px-4 py-3 text-sm text-red-900">
          {c.applyImportant[loc]}
        </p>
      </section>

      {/* Exams overview */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold tracking-tight">{c.overviewTitle[loc]}</h2>
        <div className="mt-4 space-y-4 leading-relaxed text-zinc-600">
          {c.overviewBody[loc].map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <div className="mt-12">
        <FaqSection title={t.common.faqTitle} faqs={c.faqs[loc]} />
      </div>

      {/* Bottom CTA */}
      <section className="mt-12 rounded-2xl border border-zinc-200 bg-zinc-900 px-6 py-8 text-white sm:px-10">
        <h2 className="text-xl font-bold tracking-tight sm:text-2xl">{c.ctaTitle[loc]}</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-300">{c.ctaBody[loc]}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href={`${base}/exam-calendar`}
            className="rounded-full bg-amber-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-amber-500"
          >
            {hi ? "परीक्षा कैलेंडर" : "Exam Calendar"}
          </Link>
          <Link
            href={`${base}/sso-id-login`}
            className="rounded-full border border-zinc-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-amber-500"
          >
            {hi ? "SSO लॉगिन गाइड" : "SSO Login Guide"}
          </Link>
        </div>
      </section>
    </div>
  );
}
