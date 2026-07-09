import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { HowToSection } from "@/components/HowToSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedLinks } from "@/components/RelatedLinks";
import { errors, getError } from "@/lib/content";
import { getDictionary, isLocale, locales, type Locale } from "@/lib/i18n";
import { reviewed } from "@/lib/reviewed";
import { relatedForError } from "@/lib/related";
import {
  alternates,
  breadcrumbSchema,
  buildGraph,
  canonicalFor,
  howToSchema,
  socialMeta,
} from "@/lib/schema";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    errors.map((e) => ({ locale, code: e.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; code: string }>;
}): Promise<Metadata> {
  const { locale, code } = await params;
  const e = getError(code);
  if (!e || !isLocale(locale)) return {};
  return {
    title: e.title[locale],
    description: e.problem[locale],
    keywords: e.keywords,
    alternates: {
      canonical: canonicalFor(locale, `/error/${code}`),
      ...alternates(`/error/${code}`),
    },
    ...socialMeta({
      locale,
      title: e.title[locale],
      description: e.problem[locale],
      path: `/error/${code}`,
    }),
  };
}

export default async function ErrorPage({
  params,
}: {
  params: Promise<{ locale: string; code: string }>;
}) {
  const { locale, code } = await params;
  if (!isLocale(locale)) notFound();
  const e = getError(code);
  if (!e) notFound();
  const loc = locale as Locale;
  const t = getDictionary(loc);

  const steps = e.fixes[loc].map((text, i) => ({
    name: `${t.common.steps} ${i + 1}`,
    text,
  }));

  const base = `/${loc}`;
  const graph = buildGraph([
    howToSchema(e.title[loc], steps),
    breadcrumbSchema([
      { name: t.common.home, path: base },
      { name: t.nav.guides, path: `${base}/guides` },
      { name: e.title[loc], path: `${base}/error/${code}` },
    ]),
  ]);

  return (
    <article>
      <JsonLd data={graph} />
      <Breadcrumbs
        items={[
          { name: t.common.home, href: base },
          { name: t.nav.guides, href: `${base}/guides` },
          { name: e.title[loc] },
        ]}
      />
      <h1 className="text-3xl font-bold tracking-tight">{e.title[loc]}</h1>
      <p className="mt-3 text-lg text-zinc-600">{e.problem[loc]}</p>
      <p className="mt-2 text-sm text-zinc-500">
        {t.common.lastVerified}: {reviewed.errors}
      </p>
      <HowToSection
        title={loc === "hi" ? "समाधान" : "How to fix it"}
        steps={steps}
      />
      <RelatedLinks title={t.common.related} links={relatedForError(code, loc)} />
    </article>
  );
}
