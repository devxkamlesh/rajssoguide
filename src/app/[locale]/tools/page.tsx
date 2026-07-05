import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqSection } from "@/components/FaqSection";
import { ImportantLinks } from "@/components/ImportantLinks";
import { toolsHub as th, toolsLong } from "@/data/toolsHub";
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
    title: th.metaTitle[locale],
    description: th.metaDescription[locale],
    alternates: {
      canonical: canonicalFor(locale, "/tools"),
      ...alternates("/tools"),
    },
  };
}

export default async function ToolsPage({
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
      { name: t.nav.tools, path: `${base}/tools` },
    ]),
    itemListSchema(
      th.tools.map((tool) => ({
        name: tool.name[loc],
        path: `${base}/tools/${tool.slug}`,
      })),
    ),
    faqSchema(th.faqs[loc]),
  ]);

  return (
    <div className="space-y-12">
      <JsonLd data={graph} />
      <Breadcrumbs
        items={[{ name: t.common.home, href: base }, { name: t.nav.tools }]}
      />

      {/* Header */}
      <header>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {th.h1[loc]}
        </h1>
        <p className="mt-4 max-w-3xl leading-relaxed text-zinc-600">
          {th.lead[loc]}
        </p>
        <p className="mt-3 text-sm text-zinc-500">
          {t.common.lastVerified}: {th.lastVerified}
        </p>
      </header>

      {/* Tools grid */}
      <section aria-labelledby="all-tools">
        <h2 id="all-tools" className="sr-only">
          {t.nav.tools}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {th.tools.map((tool) => (
            <Link
              key={tool.slug}
              href={`${base}/tools/${tool.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-zinc-200 p-5 transition hover:border-amber-500 hover:shadow-sm"
            >
              <h3 className="text-base font-semibold text-zinc-900">
                {tool.name[loc]}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600">
                {tool.desc[loc]}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-amber-700">
                {loc === "hi" ? "टूल खोलें" : "Open tool"}
                <span className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Why use these tools */}
      <section className="rounded-2xl border border-amber-100 bg-amber-50/30 p-6">
        <h2 className="text-2xl font-bold tracking-tight text-amber-900">
          {th.whyTitle[loc]}
        </h2>
        <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
          {th.whyPoints[loc].map((point, i) => (
            <li key={i} className="flex gap-2.5">
              <span className="mt-1 text-amber-600">✓</span>
              <span className="text-zinc-700">{point}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Long-form editorial */}
      {toolsLong.map((sec, i) => (
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
      <FaqSection title={t.common.faqTitle} faqs={th.faqs[loc]} />

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
