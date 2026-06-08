import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { HowToSection } from "@/components/HowToSection";
import { errors, getError } from "@/lib/content";
import { getDictionary, isLocale, locales, type Locale } from "@/lib/i18n";
import {
  alternates,
  breadcrumbSchema,
  buildGraph,
  canonicalFor,
  howToSchema,
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

  const graph = buildGraph([
    howToSchema(e.title[loc], steps),
    breadcrumbSchema([
      { name: "Home", path: `/${loc}` },
      { name: e.title[loc], path: `/${loc}/error/${code}` },
    ]),
  ]);

  return (
    <article>
      <JsonLd data={graph} />
      <h1 className="text-3xl font-bold tracking-tight">{e.title[loc]}</h1>
      <p className="mt-3 text-lg text-zinc-600">{e.problem[loc]}</p>
      <HowToSection
        title={loc === "hi" ? "समाधान" : "How to fix it"}
        steps={steps}
      />
    </article>
  );
}
