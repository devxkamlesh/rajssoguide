import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";
import { alternates, canonicalFor } from "@/lib/schema";

const tools = [
  {
    en: "OTR Fee Calculator",
    hi: "ओटीआर फीस कैलकुलेटर",
    href: "/tools/otr-fee-calculator",
    ready: true,
  },
  { en: "SSO ID Validator", hi: "एसएसओ आईडी वैलिडेटर", ready: false },
  { en: "Age Calculator", hi: "आयु कैलकुलेटर", ready: false },
  { en: "Scholarship Calculator", hi: "छात्रवृत्ति कैलकुलेटर", ready: false },
  { en: "Photo Resizer", hi: "फोटो रिसाइज़र", ready: false },
  { en: "Jan Aadhaar Status Checker", hi: "जन आधार स्थिति चेकर", ready: false },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    title: "Free SSO & Government Tools",
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

  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight">{t.nav.tools}</h1>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) =>
          tool.ready && tool.href ? (
            <Link
              key={tool.en}
              href={`/${loc}${tool.href}`}
              className="rounded-xl border border-zinc-200 p-5 hover:border-amber-500"
            >
              <h2 className="font-semibold">{tool[loc]}</h2>
              <p className="mt-1 text-sm text-amber-600">
                {loc === "hi" ? "उपलब्ध" : "Open tool"}
              </p>
            </Link>
          ) : (
            <div
              key={tool.en}
              className="rounded-xl border border-zinc-200 p-5"
            >
              <h2 className="font-semibold">{tool[loc]}</h2>
              <p className="mt-1 text-sm text-zinc-400">
                {loc === "hi" ? "जल्द आ रहा है" : "Coming soon"}
              </p>
            </div>
          ),
        )}
      </div>
    </div>
  );
}
