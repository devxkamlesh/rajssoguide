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
  socialMeta,
  softwareAppSchema,
} from "@/lib/schema";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const titles = {
  en: "OTR Fee Calculator — Rajasthan Exams",
  hi: "ओटीआर फीस कैलकुलेटर — राजस्थान परीक्षाएं",
};

const body = {
  en: [
    "This free OTR Fee Calculator helps Rajasthan candidates work out the One-Time Registration fee for state government exams by category. OTR is paid once on the SSO Recruitment Portal, after which you can apply to multiple RPSC and RSSB vacancies in the same cycle without paying a separate registration fee for each one.",
    "Pick an exam and your category to see the estimated fee. As a rule, General, OBC (Creamy Layer), and out-of-state candidates pay the higher slab, while Rajasthan-domicile SC, ST, OBC (Non-Creamy Layer), EWS, and PwD candidates pay the concessional slab. Candidates from other states are usually treated as 'General' for fee purposes regardless of their home-state category.",
    "Treat the figure here as a planning estimate. Exact fees, concessions, and deadlines are fixed by RPSC and RSSB and can change between recruitment cycles, so always confirm the current amount on the official exam notification before you pay. The fee is collected during OTR on sso.rajasthan.gov.in — RajSSO Guide is an independent guide and never collects any payment.",
  ],
  hi: [
    "यह मुफ़्त ओटीआर फीस कैलकुलेटर राजस्थान के उम्मीदवारों को राज्य सरकार की परीक्षाओं की वन-टाइम रजिस्ट्रेशन फीस श्रेणी अनुसार जानने में मदद करता है। ओटीआर एसएसओ भर्ती पोर्टल पर एक बार भरी जाती है, जिसके बाद आप उसी चक्र की कई RPSC और RSSB भर्तियों में बिना हर बार अलग शुल्क दिए आवेदन कर सकते हैं।",
    "परीक्षा और अपनी श्रेणी चुनें और अनुमानित फीस देखें। आमतौर पर सामान्य, ओबीसी (क्रीमी लेयर) और अन्य राज्य के उम्मीदवार ऊँचा स्लैब देते हैं, जबकि राजस्थान के मूल निवासी एससी, एसटी, ओबीसी (एनसीएल), ईडब्ल्यूएस और दिव्यांग उम्मीदवार रियायती स्लैब देते हैं। अन्य राज्यों के उम्मीदवारों को शुल्क के लिए आमतौर पर 'सामान्य' माना जाता है, चाहे उनके गृह राज्य की श्रेणी कुछ भी हो।",
    "यहाँ दिखाई गई राशि को केवल एक अनुमान मानें। सटीक शुल्क, छूट और अंतिम तिथियाँ RPSC और RSSB तय करते हैं और भर्ती चक्रों के बीच बदल सकती हैं, इसलिए भुगतान से पहले आधिकारिक परीक्षा अधिसूचना पर मौजूदा राशि अवश्य जांचें। शुल्क sso.rajasthan.gov.in पर ओटीआर के दौरान लिया जाता है — RajSSO Guide एक स्वतंत्र मार्गदर्शिका है और कोई भुगतान नहीं लेता।",
  ],
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const description =
    locale === "hi"
      ? "राजस्थान सरकारी परीक्षाओं की ओटीआर फीस श्रेणी अनुसार जानें।"
      : "Calculate the OTR fee for Rajasthan government exams by category.";
  return {
    title: titles[locale],
    description,
    alternates: {
      canonical: canonicalFor(locale, "/tools/otr-fee-calculator"),
      ...alternates("/tools/otr-fee-calculator"),
    },
    ...socialMeta({ locale, title: titles[locale], description, path: "/tools/otr-fee-calculator" }),
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
    softwareAppSchema({
      name: titles[loc],
      description: body[loc][0].slice(0, 155),
      path: "/tools/otr-fee-calculator",
      locale: loc,
    }),
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
      <div className="mt-8 space-y-4 leading-relaxed text-zinc-700">
        {body[loc].map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  );
}
