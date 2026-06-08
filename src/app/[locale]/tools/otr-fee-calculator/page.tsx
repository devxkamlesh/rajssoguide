import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { OtrFeeCalculator } from "@/components/OtrFeeCalculator";
import { JsonLd } from "@/components/JsonLd";
import { exams } from "@/lib/content";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import {
  alternates,
  breadcrumbSchema,
  buildGraph,
  canonicalFor,
} from "@/lib/schema";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const titles = {
  en: "OTR Fee Calculator — Rajasthan Exams",
  hi: "ओटीआर फीस कैलकुलेटर — राजस्थान परीक्षाएं",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    title: titles[locale],
    description:
      locale === "hi"
        ? "राजस्थान सरकारी परीक्षाओं की ओटीआर फीस श्रेणी अनुसार जानें।"
        : "Calculate the OTR fee for Rajasthan government exams by category.",
    alternates: {
      canonical: canonicalFor(locale, "/tools/otr-fee-calculator"),
      ...alternates("/tools/otr-fee-calculator"),
    },
  };
}

export default async function OtrFeeCalculatorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const loc = locale as Locale;

  const graph = buildGraph([
    breadcrumbSchema([
      { name: "Home", path: `/${loc}` },
      { name: "Tools", path: `/${loc}/tools` },
      { name: titles[loc], path: `/${loc}/tools/otr-fee-calculator` },
    ]),
  ]);

  return (
    <div>
      <JsonLd data={graph} />
      <h1 className="text-3xl font-bold tracking-tight">{titles[loc]}</h1>
      <p className="mt-3 text-zinc-600">
        {loc === "hi"
          ? "परीक्षा और श्रेणी चुनें और अनुमानित ओटीआर फीस देखें।"
          : "Pick an exam and category to see the estimated OTR fee."}
      </p>
      <div className="mt-6">
        <OtrFeeCalculator exams={exams} locale={loc} />
      </div>
    </div>
  );
}
