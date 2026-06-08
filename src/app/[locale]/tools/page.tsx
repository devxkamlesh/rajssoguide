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
  {
    en: "Age Calculator",
    hi: "आयु कैलकुलेटर",
    href: "/tools/age-calculator",
    ready: true,
  },
  {
    en: "SSO ID Validator",
    hi: "एसएसओ आईडी वैलिडेटर",
    href: "/tools/sso-id-validator",
    ready: true,
  },
  {
    en: "Scholarship Calculator",
    hi: "छात्रवृत्ति कैलकुलेटर",
    href: "/tools/scholarship-calculator",
    ready: true,
  },
  {
    en: "Photo Resizer",
    hi: "फोटो रिसाइज़र",
    href: "/tools/photo-resizer",
    ready: true,
  },
  {
    en: "Jan Aadhaar Status Checker",
    hi: "जन आधार स्थिति चेकर",
    href: "/tools/jan-aadhaar-status",
    ready: true,
  },
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
      <p className="mt-3 max-w-2xl leading-relaxed text-zinc-600">
        {loc === "hi"
          ? "ये मुफ़्त टूल राजस्थान एसएसओ उपयोगकर्ताओं, छात्रों और नौकरी आवेदकों की मदद के लिए बनाए गए हैं। ये सभी आपके ब्राउज़र में चलते हैं — कोई लॉगिन नहीं, कोई डेटा संग्रहीत नहीं। आयु कैलकुलेटर से परीक्षा पात्रता जांचें, ओटीआर फीस कैलकुलेटर से श्रेणी अनुसार शुल्क देखें, और एसएसओ आईडी वैलिडेटर से अपने यूज़रनेम का फॉर्मेट जांचें।"
          : "These free tools are built to help Rajasthan SSO users, students, and job seekers. They all run in your browser — no login and no data stored. Use the Age Calculator to check exam eligibility, the OTR Fee Calculator to see category-wise fees, and the SSO ID Validator to check your username format."}
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) =>
          tool.ready && tool.href ? (
            <Link
              key={tool.en}
              href={`/${loc}${tool.href}`}
              className="rounded-xl border border-zinc-200 p-5 hover:border-amber-500"
            >
              <h2 className="font-semibold">{tool[loc]}</h2>
              <p className="mt-1 text-sm text-amber-700">
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
