import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { changelog, changelogLastUpdated } from "@/data/changelog";
import { getDictionary, isLocale, locales, type Locale } from "@/lib/i18n";
import {
  alternates,
  breadcrumbSchema,
  buildGraph,
  canonicalFor,
  socialMeta,
  webPageSchema,
} from "@/lib/schema";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const meta = {
  en: {
    title: "Changelog — Updates to RajSSO Guide",
    description:
      "A transparent, dated record of what we update on RajSSO Guide — new guides, corrections, and content reviews. We are an independent SSO ID resource, not the official portal.",
  },
  hi: {
    title: "चेंजलॉग — RajSSO Guide में अपडेट",
    description:
      "RajSSO Guide पर हम क्या अपडेट करते हैं इसका पारदर्शी, तिथि-सहित रिकॉर्ड — नई गाइड, सुधार और सामग्री समीक्षा। हम एक स्वतंत्र एसएसओ आईडी संसाधन हैं, आधिकारिक पोर्टल नहीं।",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { title, description } = meta[locale];
  return {
    title,
    description,
    alternates: {
      canonical: canonicalFor(locale, "/changelog"),
      ...alternates("/changelog"),
    },
    ...socialMeta({ locale, title, description, path: "/changelog" }),
  };
}

const fmtDate = (iso: string, loc: Locale) =>
  new Date(iso).toLocaleDateString(loc === "hi" ? "hi-IN" : "en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default async function ChangelogPage({
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
    webPageSchema({
      name: meta[loc].title,
      description: meta[loc].description,
      path: `${base}/changelog`,
      locale: loc,
      datePublished: changelog[changelog.length - 1]?.date ?? changelogLastUpdated,
      dateModified: changelogLastUpdated,
    }),
    breadcrumbSchema([
      { name: t.common.home, path: base },
      { name: hi ? "चेंजलॉग" : "Changelog", path: `${base}/changelog` },
    ]),
  ]);

  return (
    <div className="mx-auto max-w-3xl">
      <JsonLd data={graph} />
      <Breadcrumbs
        items={[
          { name: t.common.home, href: base },
          { name: hi ? "चेंजलॉग" : "Changelog" },
        ]}
      />

      <h1 className="mt-4 text-3xl font-bold tracking-tight">
        {hi ? "चेंजलॉग — क्या और कब बदला" : "Changelog — what changed, and when"}
      </h1>
      <p className="mt-4 max-w-2xl leading-relaxed text-zinc-600">
        {hi
          ? "यह पेज बताता है कि हमने इस गाइड पर क्या अपडेट किया और कब। हम हर पेज को आधिकारिक sso.rajasthan.gov.in पोर्टल के अनुसार जांचते हैं और बदलाव यहाँ दर्ज करते हैं ताकि आप देख सकें कि जानकारी कितनी ताज़ा है।"
          : "This page records what we update on this guide and when. We check every page against the official sso.rajasthan.gov.in portal and log changes here, so you can see how current the information is."}
      </p>
      <p className="mt-3 text-sm text-zinc-500">
        {t.common.lastVerified}: {fmtDate(changelogLastUpdated, loc)}
      </p>

      <div className="mt-10 space-y-10">
        {changelog.map((entry) => (
          <section key={entry.date} className="relative">
            <h2 className="text-lg font-semibold tracking-tight text-zinc-900">
              <time dateTime={entry.date}>{fmtDate(entry.date, loc)}</time>
            </h2>
            <ul className="mt-4 space-y-3 border-l-2 border-amber-200 pl-5">
              {entry.changes.map((c, i) => (
                <li key={i} className="text-zinc-700">
                  {c.href ? (
                    <>
                      {c.text[loc]}{" "}
                      <Link
                        href={`${base}${c.href}`}
                        className="font-medium text-amber-700 hover:underline"
                      >
                        {hi ? "पेज देखें →" : "View page →"}
                      </Link>
                    </>
                  ) : (
                    c.text[loc]
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <p className="mt-12 rounded-2xl border border-amber-200 bg-amber-50/50 px-5 py-4 text-sm leading-relaxed text-amber-900">
        {hi
          ? "कोई पुरानी जानकारी या गलती मिली? हमें बताएं और हम उसे आधिकारिक पोर्टल से जांचकर जल्दी सुधारते हैं।"
          : "Found outdated information or an error? Tell us and we verify it against the official portal and fix it quickly."}{" "}
        <Link href={`${base}/contact`} className="font-medium text-amber-800 underline">
          {hi ? "संपर्क करें" : "Contact us"}
        </Link>
      </p>
    </div>
  );
}
