import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqSection } from "@/components/FaqSection";
import { LatestUpdates } from "@/components/LatestUpdates";
import { ShareWhatsApp } from "@/components/ShareWhatsApp";
import { getDictionary, isLocale, locales, type Locale } from "@/lib/i18n";
import { sortedUpdates } from "@/data/updates";
import { updatesHub as c } from "@/data/updatesHub";
import {
  alternates,
  breadcrumbSchema,
  buildGraph,
  canonicalFor,
  faqSchema,
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
    title: c.metaTitle[locale],
    description: c.metaDescription[locale],
    keywords: c.keywords[locale],
    alternates: {
      canonical: canonicalFor(locale, "/updates"),
      ...alternates("/updates"),
    },
  };
}

export default async function UpdatesHub({
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
      { name: t.nav.updates, path: `${base}/updates` },
    ]),
    itemListSchema(
      sortedUpdates.map((u) => ({
        name: u.title[loc],
        path: u.external ? u.href : `${base}${u.href}`,
      })),
    ),
    faqSchema(c.faqs[loc]),
  ]);

  const related: { href: string; label: string }[] = [
    { href: `${base}/exam-calendar`, label: hi ? "परीक्षा कैलेंडर" : "Exam Calendar" },
    { href: `${base}/exams`, label: hi ? "सरकारी परीक्षाएं" : "Government Exams" },
    { href: `${base}/scholarships`, label: hi ? "छात्रवृत्ति" : "Scholarships" },
    { href: `${base}/services`, label: hi ? "सेवाएं" : "Services" },
    { href: `${base}/sso-id-login`, label: hi ? "एसएसओ आईडी लॉगिन" : "SSO ID Login" },
    { href: `${base}/sso-id-registration`, label: hi ? "एसएसओ आईडी रजिस्ट्रेशन" : "SSO ID Registration" },
  ];

  return (
    <div>
      <JsonLd data={graph} />
      <Breadcrumbs
        items={[{ name: t.common.home, href: base }, { name: t.nav.updates }]}
      />
      <h1 className="text-3xl font-bold tracking-tight">{c.h1[loc]}</h1>
      <p className="mt-4 max-w-3xl leading-relaxed text-zinc-600">{c.intro[loc]}</p>
      <p className="mt-3 max-w-3xl rounded-lg border border-amber-100 bg-amber-50/40 px-4 py-3 text-sm text-amber-900">
        {c.disclaimer[loc]}
      </p>

      {/* Live feed */}
      <div className="mt-8">
        <LatestUpdates title={t.common.latestUpdates} locale={loc} />
      </div>

      <div className="mt-6">
        <ShareWhatsApp
          path={`${base}/updates`}
          title={hi ? "राजस्थान एसएसओ ताज़ा अपडेट" : "Rajasthan SSO Latest Updates"}
          locale={loc}
        />
      </div>

      {/* What you'll find */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold tracking-tight">{c.whatTitle[loc]}</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-zinc-600">{c.whatIntro[loc]}</p>
        <ul className="mt-5 space-y-3">
          {c.categories[loc].map((cat, i) => (
            <li key={i} className="flex gap-2.5">
              <span className="mt-1 text-amber-600">•</span>
              <span className="text-zinc-700">
                <strong className="text-zinc-900">{cat.label}</strong> — {cat.text}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Why it matters */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold tracking-tight">{c.whyTitle[loc]}</h2>
        <div className="mt-4 max-w-3xl space-y-4 leading-relaxed text-zinc-600">
          {c.whyBody[loc].map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* How to use */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold tracking-tight">{c.useTitle[loc]}</h2>
        <ol className="mt-5 space-y-4">
          {c.useSteps[loc].map((s, i) => (
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
      </section>

      {/* Never miss */}
      <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold tracking-tight">{c.missTitle[loc]}</h2>
        <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
          {c.missPoints[loc].map((p, i) => (
            <li key={i} className="flex gap-2.5">
              <span className="mt-1 text-amber-600">✓</span>
              <span className="text-zinc-700">
                <strong className="text-zinc-900">{p.label}</strong> {p.text}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Safety note */}
      <section className="mt-12 rounded-2xl border border-red-100 bg-red-50/20 p-6">
        <h2 className="text-2xl font-bold tracking-tight text-red-900">{c.safetyTitle[loc]}</h2>
        <p className="mt-3 max-w-3xl leading-relaxed text-zinc-700">{c.safetyBody[loc]}</p>
      </section>

      {/* FAQ */}
      <div className="mt-12">
        <FaqSection title={t.common.faqTitle} faqs={c.faqs[loc]} />
      </div>

      {/* Related / CTA */}
      <section className="mt-12 rounded-2xl border border-zinc-200 bg-zinc-900 px-6 py-8 text-white sm:px-10">
        <h2 className="text-xl font-bold tracking-tight sm:text-2xl">{c.ctaTitle[loc]}</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-300">{c.ctaBody[loc]}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          {related.map((r) => (
            <Link
              key={r.href}
              href={r.href}
              className="rounded-full border border-zinc-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-amber-500"
            >
              {r.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
