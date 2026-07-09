import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqSection } from "@/components/FaqSection";
import { ImportantLinks } from "@/components/ImportantLinks";
import { guides } from "@/data/guides";
import { guidesHub as h, guidesLong } from "@/data/guidesHub";
import { getDictionary, isLocale, locales, type Locale } from "@/lib/i18n";
import { importantLinksForGuide } from "@/lib/related";
import { site } from "@/lib/site";
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
    title: h.metaTitle[locale],
    description: h.metaDescription[locale],
    alternates: {
      canonical: canonicalFor(locale, "/guides"),
      ...alternates("/guides"),
    },
    ...socialMeta({
      locale,
      title: h.metaTitle[locale],
      description: h.metaDescription[locale],
      path: "/guides",
    }),
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
    faqSchema(h.faqs[loc]),
  ]);

  return (
    <div className="space-y-12">
      <JsonLd data={graph} />
      <Breadcrumbs
        items={[{ name: t.common.home, href: base }, { name: t.nav.guides }]}
      />

      {/* Header */}
      <header>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {h.h1[loc]}
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-zinc-600">
          {h.lead[loc]}
        </p>
        <p className="mt-3 text-sm text-zinc-500">
          {t.common.lastVerified}: {h.lastVerified}
        </p>
      </header>

      {/* Core guides list */}
      <section aria-labelledby="all-guides">
        <h2 id="all-guides" className="text-2xl font-bold tracking-tight">
          {loc === "hi" ? "मुख्य गाइड्स" : "Core guides"}
        </h2>
        <ol className="mt-6 space-y-4">
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
      </section>

      {/* What you will find */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight">{h.introTitle[loc]}</h2>
        <div className="mt-4 space-y-4 leading-relaxed text-zinc-600">
          {h.introBody[loc].map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* Which guide first */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight">{h.pickTitle[loc]}</h2>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-zinc-200">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-zinc-900 text-left text-white">
                <th className="px-4 py-3 font-semibold">{h.pickCols[loc][0]}</th>
                <th className="px-4 py-3 font-semibold">{h.pickCols[loc][1]}</th>
              </tr>
            </thead>
            <tbody>
              {h.pickRows[loc].map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-zinc-50"}>
                  <td className="px-4 py-3 text-zinc-700">{r.scenario}</td>
                  <td className="px-4 py-3">
                    <Link
                      href={`${base}/${r.slug}`}
                      className="font-medium text-amber-700 hover:underline"
                    >
                      {r.guide}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Comparison */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight">{h.compareTitle[loc]}</h2>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-zinc-200">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-zinc-900 text-left text-white">
                <th className="px-4 py-3 font-semibold">{h.compareCols[loc][0]}</th>
                <th className="px-4 py-3 font-semibold">{h.compareCols[loc][1]}</th>
                <th className="px-4 py-3 font-semibold">{h.compareCols[loc][2]}</th>
              </tr>
            </thead>
            <tbody>
              {h.compareRows[loc].map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-zinc-50"}>
                  <td className="px-4 py-3 font-medium text-zinc-800">{r.guide}</td>
                  <td className="px-4 py-3 text-zinc-600">{r.time}</td>
                  <td className="px-4 py-3 text-zinc-600">{r.need}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Services unlocked */}
      <section className="rounded-2xl border border-amber-100 bg-amber-50/30 p-6">
        <h2 className="text-2xl font-bold tracking-tight text-amber-900">
          {h.servicesTitle[loc]}
        </h2>
        <p className="mt-3 leading-relaxed text-zinc-700">{h.servicesIntro[loc]}</p>
        <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
          {h.services[loc].map((s, i) => (
            <li key={i} className="flex gap-2.5">
              <span className="mt-1 text-amber-600">✓</span>
              <span className="text-zinc-700">{s}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Quick reference */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight">{h.quickRefTitle[loc]}</h2>
        <div className="mt-4 overflow-hidden rounded-2xl border border-zinc-200">
          <table className="w-full border-collapse text-sm">
            <tbody>
              {h.quickRef[loc].map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-zinc-50"}>
                  <th
                    scope="row"
                    className="w-1/2 px-4 py-3 text-left font-medium text-zinc-700"
                  >
                    {r.a}
                  </th>
                  <td className="w-1/2 px-4 py-3 text-zinc-600">{r.b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Safety */}
      <section className="rounded-2xl border border-red-100 bg-red-50/20 p-6">
        <h2 className="text-2xl font-bold tracking-tight text-red-900">
          {h.safetyTitle[loc]}
        </h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {h.safetyTips[loc].map((tip, i) => (
            <li key={i} className="flex gap-2.5">
              <span className="mt-0.5 text-red-600">🔒</span>
              <span className="text-sm leading-relaxed text-zinc-700">{tip}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Long-form editorial */}
      {guidesLong.map((sec, i) => (
        <section key={i}>
          <h2 className="text-2xl font-bold tracking-tight">{sec.title[loc]}</h2>
          <div className="mt-4 space-y-4 leading-relaxed text-zinc-600">
            {sec.body[loc].map((p, j) => (
              <p key={j}>{p}</p>
            ))}
          </div>
        </section>
      ))}

      {/* FAQ */}
      <FaqSection title={t.common.faqTitle} faqs={h.faqs[loc]} />

      {/* Important links */}
      <ImportantLinks
        title={loc === "hi" ? "महत्वपूर्ण लिंक" : "Important Links"}
        rows={importantLinksForGuide(loc)}
      />

      <p className="text-center text-sm text-zinc-500">
        {t.common.officialPortalNote}{" "}
        <a
          href={site.officialPortal}
          rel="nofollow noopener"
          className="text-amber-700 underline"
        >
          {site.officialPortal.replace("https://", "")}
        </a>
      </p>
    </div>
  );
}
