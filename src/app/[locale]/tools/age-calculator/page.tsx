import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AgeCalculator } from "@/components/AgeCalculator";
import { JsonLd } from "@/components/JsonLd";
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
  en: "Age Calculator — Check Eligibility for Exams & Scholarships",
  hi: "आयु कैलकुलेटर — परीक्षा और छात्रवृत्ति पात्रता जांचें",
};

const body = {
  en: [
    "This free Age Calculator helps Rajasthan students and job seekers work out their exact age in years, months, and days as on any date. It is useful when you are checking eligibility for RPSC, RSSB, Patwari, and Police recruitments, where age limits are measured as on a fixed cut-off date mentioned in the official notification.",
    "To use it, enter your date of birth and the date you want to calculate your age 'as of' — by default this is today, but for recruitment you should enter the cut-off date from the exam notice (often 1 January of the exam year). The result updates instantly on your device; nothing is sent to any server.",
    "Knowing your precise age also helps with scholarship applications and Jan Aadhaar records, where date of birth must match your Class 10 marksheet and Aadhaar. If you find a mismatch, correct it in your Aadhaar or Jan Aadhaar first, then sync it to your SSO profile. Always confirm the exact age limits and relaxations for reserved categories on the official RPSC or RSSB notification before applying.",
  ],
  hi: [
    "यह मुफ़्त आयु कैलकुलेटर राजस्थान के छात्रों और नौकरी आवेदकों को किसी भी तिथि के अनुसार वर्ष, माह और दिनों में सटीक आयु निकालने में मदद करता है। यह तब उपयोगी है जब आप RPSC, RSSB, पटवारी और पुलिस भर्ती की पात्रता जांच रहे हों, जहाँ आयु सीमा अधिसूचना में दी गई एक निश्चित कट-ऑफ तिथि के अनुसार मापी जाती है।",
    "उपयोग के लिए अपनी जन्म तिथि और वह तिथि दर्ज करें जिसके अनुसार आयु जाननी है — डिफ़ॉल्ट रूप से यह आज की तिथि है, लेकिन भर्ती के लिए परीक्षा सूचना में दी गई कट-ऑफ तिथि (अक्सर परीक्षा वर्ष की 1 जनवरी) दर्ज करें। परिणाम आपके डिवाइस पर तुरंत बनता है; कोई डेटा सर्वर पर नहीं भेजा जाता।",
    "सटीक आयु जानना छात्रवृत्ति आवेदन और जन आधार रिकॉर्ड में भी मदद करता है, जहाँ जन्म तिथि आपकी 10वीं की अंकतालिका और आधार से मेल खानी चाहिए। यदि अंतर मिले, तो पहले आधार या जन आधार में सुधार कराएं, फिर इसे अपनी एसएसओ प्रोफ़ाइल में सिंक करें। आवेदन से पहले आरक्षित श्रेणियों की सटीक आयु सीमा और छूट आधिकारिक RPSC या RSSB अधिसूचना पर अवश्य देखें।",
  ],
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const description = body[locale][0].slice(0, 155);
  return {
    title: titles[locale],
    description,
    alternates: {
      canonical: canonicalFor(locale, "/tools/age-calculator"),
      ...alternates("/tools/age-calculator"),
    },
    ...socialMeta({ locale, title: titles[locale], description, path: "/tools/age-calculator" }),
  };
}

export default async function AgeCalculatorPage({
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
      { name: titles[loc], path: `/${loc}/tools/age-calculator` },
    ]),
    softwareAppSchema({
      name: titles[loc],
      description: body[loc][0].slice(0, 155),
      path: "/tools/age-calculator",
      locale: loc,
    }),
  ]);

  return (
    <div>
      <JsonLd data={graph} />
      <h1 className="text-3xl font-bold tracking-tight">{titles[loc]}</h1>
      <div className="mt-6">
        <AgeCalculator locale={loc} />
      </div>
      <div className="mt-8 space-y-4 leading-relaxed text-zinc-700">
        {body[loc].map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  );
}
