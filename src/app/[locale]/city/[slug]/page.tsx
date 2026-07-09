import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedLinks } from "@/components/RelatedLinks";
import { FaqSection } from "@/components/FaqSection";
import { cities, getCity } from "@/lib/content";
import { getDictionary, isLocale, locales, type Locale } from "@/lib/i18n";
import { reviewed } from "@/lib/reviewed";
import { cityBody, cityFaqs } from "@/lib/pageContent";
import { relatedForCity } from "@/lib/related";
import {
  alternates,
  breadcrumbSchema,
  buildGraph,
  canonicalFor,
  faqSchema,
  socialMeta,
} from "@/lib/schema";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    cities.map((c) => ({ locale, slug: c.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const c = getCity(slug);
  if (!c || !isLocale(locale)) return {};
  const description =
    locale === "hi"
      ? `${c.name[locale]} (${c.region[locale]}, राजस्थान) में एसएसओ आईडी लॉगिन, नया रजिस्ट्रेशन, भूली हुई आईडी रिकवरी और ई-मित्र केंद्र की मदद। एसएसओ आईडी बनाना मुफ़्त है।`
      : `SSO ID help for ${c.name[locale]}, ${c.region[locale]} Rajasthan — login, new registration, forgot-ID recovery, and finding e-Mitra centres. Creating an SSO ID is free.`;
  const title = `SSO ID ${c.name[locale]} — Login, Registration & e-Mitra`;
  return {
    title,
    description,
    keywords: c.keywords,
    alternates: {
      canonical: canonicalFor(locale, `/city/${slug}`),
      ...alternates(`/city/${slug}`),
    },
    ...socialMeta({ locale, title, description, path: `/city/${slug}` }),
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const c = getCity(slug);
  if (!c) notFound();
  const loc = locale as Locale;
  const t = getDictionary(loc);
  const base = `/${loc}`;

  const faqs = cityFaqs(c, loc);
  const graph = buildGraph([
    breadcrumbSchema([
      { name: t.common.home, path: base },
      { name: t.nav.cities, path: `${base}/cities` },
      { name: c.name[loc], path: `${base}/city/${slug}` },
    ]),
    faqSchema(faqs),
  ]);

  return (
    <article>
      <JsonLd data={graph} />
      <Breadcrumbs
        items={[
          { name: t.common.home, href: base },
          { name: t.nav.cities, href: `${base}/cities` },
          { name: c.name[loc] },
        ]}
      />
      <h1 className="text-3xl font-bold tracking-tight">
        SSO ID {c.name[loc]}
      </h1>
      <p className="mt-3 text-lg text-zinc-600">
        {loc === "hi"
          ? `${c.name[loc]} (${c.knownFor[loc]}) में एसएसओ आईडी लॉगिन, रजिस्ट्रेशन और ई-मित्र सेवाओं की जानकारी।`
          : `SSO ID login, registration and e-Mitra service help for ${c.name[loc]} — ${c.knownFor[loc]}.`}
      </p>
      <p className="mt-2 text-sm text-zinc-500">
        {t.common.lastVerified}: {reviewed.cities}
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href={`${base}/sso-id-login`}
          className="rounded-full bg-amber-700 px-5 py-2.5 font-medium text-white transition hover:bg-amber-800"
        >
          {t.nav.login}
        </Link>
        <Link
          href={`${base}/sso-id-registration`}
          className="rounded-full border border-amber-700 px-5 py-2.5 font-medium text-amber-800"
        >
          {t.nav.registration}
        </Link>
      </div>

      <div className="mt-8 space-y-4 leading-relaxed text-zinc-700">
        {cityBody(c, loc).map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <FaqSection title={t.common.faqTitle} faqs={faqs} />

      <RelatedLinks title={t.common.related} links={relatedForCity(loc)} />
    </article>
  );
}
