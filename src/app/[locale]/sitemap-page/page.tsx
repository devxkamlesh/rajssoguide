import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";
import { guides } from "@/data/guides";
import { exams, services, cities, errors, scholarships } from "@/lib/content";
import { alternates, breadcrumbSchema, buildGraph, canonicalFor } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";

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
    title: locale === "hi" ? "साइटमैप — RajSSO Guide" : "Sitemap — RajSSO Guide",
    robots: { index: false },
    alternates: {
      canonical: canonicalFor(locale, "/sitemap-page"),
      ...alternates("/sitemap-page"),
    },
  };
}

interface Section {
  heading: string;
  links: { label: string; href: string }[];
}

export default async function SitemapPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const loc = locale as Locale;
  const base = `/${loc}`;

  const graph = buildGraph([
    breadcrumbSchema([
      { name: "Home", path: base },
      { name: loc === "hi" ? "साइटमैप" : "Sitemap", path: `${base}/sitemap-page` },
    ]),
  ]);

  const sections: Section[] = [
    {
      heading: loc === "hi" ? "मुख्य गाइड" : "Core Guides",
      links: guides.map((g) => ({
        label: g.title[loc],
        href: `${base}/${g.slug}`,
      })),
    },
    {
      heading: loc === "hi" ? "परीक्षाएं" : "Exams",
      links: exams.map((e) => ({
        label: e.fullName[loc],
        href: `${base}/exam/${e.slug}`,
      })),
    },
    {
      heading: loc === "hi" ? "सेवाएं" : "Services",
      links: services.map((s) => ({
        label: s.name[loc],
        href: `${base}/service/${s.slug}`,
      })),
    },
    {
      heading: loc === "hi" ? "छात्रवृत्ति" : "Scholarships",
      links: scholarships.map((s) => ({
        label: s.name[loc],
        href: `${base}/scholarship/${s.slug}`,
      })),
    },
    {
      heading: loc === "hi" ? "शहर अनुसार मदद" : "Help by City",
      links: cities.map((c) => ({
        label: c.name[loc],
        href: `${base}/city/${c.slug}`,
      })),
    },
    {
      heading: loc === "hi" ? "समस्या समाधान" : "Troubleshooting",
      links: errors.map((e) => ({
        label: e.title[loc],
        href: `${base}/error/${e.slug}`,
      })),
    },
    {
      heading: loc === "hi" ? "टूल्स" : "Tools",
      links: [
        { label: loc === "hi" ? "ओटीआर फीस कैलकुलेटर" : "OTR Fee Calculator",         href: `${base}/tools/otr-fee-calculator` },
        { label: loc === "hi" ? "आयु कैलकुलेटर"        : "Age Calculator",              href: `${base}/tools/age-calculator` },
        { label: loc === "hi" ? "एसएसओ आईडी वैलिडेटर"  : "SSO ID Validator",            href: `${base}/tools/sso-id-validator` },
        { label: loc === "hi" ? "छात्रवृत्ति कैलकुलेटर": "Scholarship Calculator",      href: `${base}/tools/scholarship-calculator` },
        { label: loc === "hi" ? "फोटो रिसाइज़र"         : "Photo Resizer",               href: `${base}/tools/photo-resizer` },
        { label: loc === "hi" ? "जन आधार स्थिति चेकर"  : "Jan Aadhaar Status Checker",  href: `${base}/tools/jan-aadhaar-status` },
      ],
    },
    {
      heading: loc === "hi" ? "अन्य पेज" : "Other Pages",
      links: [
        { label: loc === "hi" ? "होम"          : "Home",    href: base },
        { label: loc === "hi" ? "हमारे बारे में": "About",  href: `${base}/about` },
      ],
    },
  ];

  return (
    <div className="max-w-3xl">
      <JsonLd data={graph} />
      <h1 className="text-3xl font-bold tracking-tight">
        {loc === "hi" ? "साइटमैप" : "Sitemap"}
      </h1>
      <p className="mt-2 text-sm text-zinc-500">
        {loc === "hi"
          ? `${site.name} के सभी पेजों की सूची`
          : `All pages on ${site.name}`}
      </p>

      <div className="mt-8 space-y-8">
        {sections.map((section) => (
          <section key={section.heading}>
            <h2 className="border-b border-zinc-200 pb-2 text-lg font-semibold text-zinc-800">
              {section.heading}
            </h2>
            <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-amber-700 hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <p className="mt-10 text-xs text-zinc-400">
        {loc === "hi"
          ? `XML साइटमैप: `
          : "XML sitemap: "}
        <a
          href="/sitemap.xml"
          className="underline"
          target="_blank"
          rel="noopener"
        >
          {site.url}/sitemap.xml
        </a>
      </p>
    </div>
  );
}
