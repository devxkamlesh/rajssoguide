import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ScholarshipCalculator } from "@/components/ScholarshipCalculator";
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
  en: "Scholarship Calculator — Rajasthan SSO Scholarship Eligibility",
  hi: "छात्रवृत्ति कैलकुलेटर — राजस्थान एसएसओ छात्रवृत्ति पात्रता",
};

const body = {
  en: [
    "The Scholarship Calculator gives Rajasthan students a quick, indicative check of whether their annual family income falls within the limit for SC/ST, OBC/MBC, EWS, or Minority scholarships before they apply through the SSO portal. Choose your category, enter your annual family income, and the tool instantly shows whether you are likely eligible on income grounds.",
    "Scholarships under the Department of Social Justice & Empowerment (SJE) are applied for using your SSO ID. Before applying, complete your Jan Aadhaar e-KYC, because your family and income details are verified through Jan Aadhaar. Keep documents ready such as an income certificate, caste or category certificate, bank passbook, and your latest marksheet.",
    "Please note that this is only a rough guide based on common income slabs. The exact income limit, eligibility conditions, required documents, and last date vary by scheme and change from year to year, so always confirm the current rules on the official SJE portal before submitting your application. This tool runs entirely in your browser and stores nothing — RajSSO Guide is an independent resource and never asks for your SSO ID or password.",
  ],
  hi: [
    "छात्रवृत्ति कैलकुलेटर राजस्थान के छात्रों को आवेदन से पहले एक त्वरित, संकेतक जांच देता है कि उनकी वार्षिक पारिवारिक आय एससी/एसटी, ओबीसी/एमबीसी, ईडब्ल्यूएस या अल्पसंख्यक छात्रवृत्ति की सीमा में है या नहीं। अपनी श्रेणी चुनें, वार्षिक पारिवारिक आय दर्ज करें, और टूल तुरंत बताता है कि आय के आधार पर आप संभवतः पात्र हैं या नहीं।",
    "सामाजिक न्याय एवं अधिकारिता विभाग (SJE) की छात्रवृत्ति के लिए आवेदन आपकी एसएसओ आईडी से किया जाता है। आवेदन से पहले अपना जन आधार ई-केवाईसी पूरा करें, क्योंकि आपके परिवार और आय विवरण जन आधार से सत्यापित होते हैं। आय प्रमाणपत्र, जाति/श्रेणी प्रमाणपत्र, बैंक पासबुक और नवीनतम अंकतालिका जैसे दस्तावेज़ तैयार रखें।",
    "ध्यान दें कि यह सामान्य आय स्लैब पर आधारित केवल एक मोटा मार्गदर्शन है। सटीक आय सीमा, पात्रता शर्तें, आवश्यक दस्तावेज़ और अंतिम तिथि योजना अनुसार और हर वर्ष बदलती हैं, इसलिए आवेदन जमा करने से पहले हमेशा आधिकारिक SJE पोर्टल पर वर्तमान नियम देखें। यह टूल पूरी तरह आपके ब्राउज़र में चलता है और कुछ संग्रहीत नहीं करता — RajSSO Guide एक स्वतंत्र संसाधन है और कभी भी आपकी एसएसओ आईडी या पासवर्ड नहीं मांगता।",
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
      canonical: canonicalFor(locale, "/tools/scholarship-calculator"),
      ...alternates("/tools/scholarship-calculator"),
    },
    ...socialMeta({ locale, title: titles[locale], description, path: "/tools/scholarship-calculator" }),
  };
}

export default async function ScholarshipCalculatorPage({
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
      { name: titles[loc], path: `/${loc}/tools/scholarship-calculator` },
    ]),
    softwareAppSchema({
      name: titles[loc],
      description: body[loc][0].slice(0, 155),
      path: "/tools/scholarship-calculator",
      locale: loc,
    }),
  ]);

  return (
    <div>
      <JsonLd data={graph} />
      <h1 className="text-3xl font-bold tracking-tight">{titles[loc]}</h1>
      <div className="mt-6">
        <ScholarshipCalculator locale={loc} />
      </div>
      <div className="mt-8 space-y-4 leading-relaxed text-zinc-700">
        {body[loc].map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  );
}
