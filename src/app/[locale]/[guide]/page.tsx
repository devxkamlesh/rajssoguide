import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticle } from "@/components/GuideArticle";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedLinks } from "@/components/RelatedLinks";
import { ImportantLinks } from "@/components/ImportantLinks";
import { ShareWhatsApp } from "@/components/ShareWhatsApp";
import { guides, getGuide } from "@/data/guides";
import { getDictionary, isLocale, locales, type Locale } from "@/lib/i18n";
import { relatedForGuide, importantLinksForGuide } from "@/lib/related";
import { site } from "@/lib/site";
import {
  alternates,
  articleSchema,
  breadcrumbSchema,
  buildGraph,
  canonicalFor,
  faqSchema,
  howToSchema,
  socialMeta,
} from "@/lib/schema";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    guides.map((g) => ({ locale, guide: g.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; guide: string }>;
}): Promise<Metadata> {
  const { locale, guide } = await params;
  const g = getGuide(guide);
  if (!g || !isLocale(locale)) return {};
  const title = g.metaTitle?.[locale] ?? g.title[locale];
  const description = g.metaDescription?.[locale] ?? g.intro[locale];
  return {
    title,
    description,
    alternates: {
      canonical: canonicalFor(locale, `/${guide}`),
      ...alternates(`/${guide}`),
    },
    ...socialMeta({ locale, title, description, path: `/${guide}`, type: "article" }),
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ locale: string; guide: string }>;
}) {
  const { locale, guide } = await params;
  if (!isLocale(locale)) notFound();
  const g = getGuide(guide);
  if (!g) notFound();
  const loc = locale as Locale;
  const t = getDictionary(loc);
  const base = `/${loc}`;

  const graph = buildGraph([
    articleSchema(
      g.title[loc],
      g.intro[loc],
      `/${loc}/${guide}`,
      "2026-01-15",
      new Date().toISOString().split("T")[0],
      loc,
    ),
    howToSchema(g.title[loc], g.steps[loc]),
    faqSchema(g.faqs[loc]),
    breadcrumbSchema([
      { name: t.common.home, path: base },
      { name: t.nav.guides, path: `${base}/guides` },
      { name: g.title[loc], path: `${base}/${guide}` },
    ]),
  ]);

  return (
    <>
      <JsonLd data={graph} />
      <Breadcrumbs
        items={[
          { name: t.common.home, href: base },
          { name: t.nav.guides, href: `${base}/guides` },
          { name: g.title[loc] },
        ]}
      />
      <GuideArticle
        guide={g}
        locale={loc}
        portalUrl={guide === "sso-id-login" ? site.officialSignin : undefined}
      />
      <div className="mt-6">
        <ShareWhatsApp
          path={`${base}/${guide}`}
          title={g.title[loc]}
          locale={loc}
        />
      </div>
      <ImportantLinks
        title={loc === "hi" ? "महत्वपूर्ण लिंक" : "Important Links"}
        rows={importantLinksForGuide(loc)}
      />
      <RelatedLinks title={t.common.related} links={relatedForGuide(guide, loc)} />
    </>
  );
}
