import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PayMatrixCalculator } from "@/components/PayMatrixCalculator";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqSection } from "@/components/FaqSection";
import { RelatedLinks } from "@/components/RelatedLinks";
import { isLocale, locales, getDictionary, type Locale } from "@/lib/i18n";
import { DA_LAST_VERIFIED, DEFAULT_DA_PERCENT } from "@/data/payMatrix";
import type { FaqItem } from "@/lib/schema";
import {
  alternates,
  breadcrumbSchema,
  buildGraph,
  canonicalFor,
  faqSchema,
  socialMeta,
  softwareAppSchema,
} from "@/lib/schema";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const titles = {
  en: "Rajasthan Pay Matrix Calculator 2026 (7th CPC Salary)",
  hi: "राजस्थान पे मैट्रिक्स कैलकुलेटर 2026 (7वां वेतन आयोग)",
};

const metaDescriptions = {
  en: "Free interactive Rajasthan 7th Pay Commission pay matrix. Find your Level and Stage, check basic pay, and estimate salary with editable DA and HRA.",
  hi: "मुफ़्त इंटरैक्टिव राजस्थान 7वां वेतन आयोग पे मैट्रिक्स। अपना लेवल व स्टेज खोजें, बेसिक पे जांचें, और संपादन योग्य DA व HRA से वेतन का अनुमान लगाएं।",
};

const intro = {
  en: [
    "This tool shows the full Rajasthan 7th Pay Commission pay matrix, effective from the Revised Pay Rules, 2017. Every Level (L-1 to L-18) and Stage is laid out as a grid, the same way PayManager and your pay slip reference it. Click any cell to open a salary breakdown for that exact Level and Stage.",
    "Search by your current basic pay to jump straight to your position in the matrix, or browse level by level if you know your pay level but not the exact stage. The breakdown panel lets you adjust the DA and HRA percentages, since these change periodically by government order and depend on where you are posted.",
  ],
  hi: [
    "यह टूल राजस्थान के 7वें वेतन आयोग का पूरा पे मैट्रिक्स दिखाता है, जो रिवाइज्ड पे रूल्स, 2017 से प्रभावी है। हर लेवल (L-1 से L-18) और स्टेज एक ग्रिड में दिया गया है, वैसे ही जैसे PayManager और आपकी सैलरी स्लिप इसे दिखाती है। किसी भी सेल पर क्लिक करें और उस सटीक लेवल व स्टेज की सैलरी ब्रेकडाउन खोलें।",
    "अपने वर्तमान बेसिक पे से सर्च कर सीधे मैट्रिक्स में अपनी स्थिति पर पहुंचें, या यदि आपको अपना पे लेवल पता है पर सटीक स्टेज नहीं, तो लेवल अनुसार देखें। ब्रेकडाउन पैनल में DA और HRA प्रतिशत बदले जा सकते हैं, क्योंकि ये समय-समय पर सरकारी आदेश से बदलते हैं और आपकी पोस्टिंग जगह पर निर्भर करते हैं।",
  ],
};

const howItWorks: Record<Locale, { title: string; body: string[] }> = {
  en: {
    title: "How the pay matrix works",
    body: [
      "The 7th Pay Commission replaced the old pay-band-plus-grade-pay system with a single matrix. Each column is a Level, roughly corresponding to your old grade pay, and each row is a Stage, which is your position within that Level based on years of service. Every year of service that earns an increment moves you one Stage down the same column, and the pay at each Stage is fixed at 3% more than the Stage above it, rounded to the nearest hundred rupees.",
      "A promotion moves you to a different Level, usually landing on the Stage in the new column whose pay is next-above your current basic pay, so a promotion is never a pay cut. Your DDO or HR office fixes the exact Level and Stage for your post when you join or get promoted, and PayManager reflects it directly on your pay slip.",
    ],
  },
  hi: {
    title: "पे मैट्रिक्स कैसे काम करता है",
    body: [
      "7वें वेतन आयोग ने पुराने पे-बैंड-प्लस-ग्रेड-पे सिस्टम को एक ही मैट्रिक्स से बदल दिया। हर कॉलम एक लेवल है, जो लगभग आपकी पुरानी ग्रेड पे के बराबर है, और हर पंक्ति एक स्टेज है, जो सेवा के वर्षों के आधार पर उस लेवल में आपकी स्थिति दर्शाती है। सेवा का हर वर्ष जो इंक्रीमेंट देता है वह आपको उसी कॉलम में एक स्टेज नीचे ले जाता है, और हर स्टेज की पे ऊपर वाले स्टेज से 3% अधिक तय होती है, निकटतम सौ रुपये तक राउंड की गई।",
      "प्रोमोशन आपको दूसरे लेवल में ले जाता है, आमतौर पर नए कॉलम के उस स्टेज पर जिसकी पे आपकी वर्तमान बेसिक पे से ठीक ऊपर हो, इसलिए प्रोमोशन कभी वेतन कटौती नहीं होती। आपका DDO या HR कार्यालय जॉइनिंग या प्रोमोशन पर आपके पद का सटीक लेवल व स्टेज तय करता है, और PayManager इसे आपकी सैलरी स्लिप पर सीधे दिखाता है।",
    ],
  },
};

const faqs: Record<Locale, FaqItem[]> = {
  en: [
    {
      question: "How do I find my Level and Stage on this pay matrix?",
      answer:
        "Check your latest salary slip on PayManager (Employee Corner → Employee Report → Pay Slip). It states your Level directly. Then search your current basic pay in the calculator above, or scan down that Level's column, to find your matching Stage.",
    },
    {
      question: "What is the current DA for Rajasthan government employees?",
      answer: `The Rajasthan Finance Department last revised DA to ${DEFAULT_DA_PERCENT}% of basic pay, effective ${DA_LAST_VERIFIED}. DA is revised periodically, so confirm the current rate on PayManager or your latest pay slip before relying on this calculator's default.`,
    },
    {
      question: "Why does my actual salary slip show a different HRA percentage?",
      answer:
        "HRA depends on how your posting city is classified and can change when the government revises the classification or the DA crosses a set threshold. Use the custom HRA option in the calculator and enter the exact percentage from your pay slip for an accurate estimate.",
    },
    {
      question: "Does this calculator include income tax or GPF/NPS deductions?",
      answer:
        "It estimates only gross salary (Basic + DA + HRA). Deductions like NPS, GPF, income tax, and professional tax depend on your specific scheme, income slab, and declarations, so they are not subtracted here. Check the deductions section of your PayManager pay slip for exact figures.",
    },
    {
      question: "Is this an official Rajasthan government calculator?",
      answer:
        "No. RajSSO Guide is an independent informational website and this tool is not affiliated with the Government of Rajasthan or the Finance Department. For your official, legally valid salary slip and pay fixation, use PayManager at paymanager.rajasthan.gov.in.",
    },
  ],
  hi: [
    {
      question: "इस पे मैट्रिक्स पर अपना लेवल व स्टेज कैसे खोजें?",
      answer:
        "PayManager (Employee Corner → Employee Report → Pay Slip) पर अपनी नवीनतम सैलरी स्लिप देखें। यह आपका लेवल सीधे बताती है। फिर ऊपर कैलकुलेटर में अपनी वर्तमान बेसिक पे सर्च करें, या उस लेवल के कॉलम में नीचे स्कैन करें, ताकि आपका मिलान स्टेज मिल जाए।",
    },
    {
      question: "राजस्थान सरकारी कर्मचारियों के लिए वर्तमान DA क्या है?",
      answer: `राजस्थान वित्त विभाग ने अंतिम बार DA को बेसिक पे का ${DEFAULT_DA_PERCENT}% किया, जो ${DA_LAST_VERIFIED} से प्रभावी है। DA समय-समय पर संशोधित होता है, इसलिए इस कैलकुलेटर के डिफ़ॉल्ट पर भरोसा करने से पहले PayManager या अपनी नवीनतम सैलरी स्लिप पर वर्तमान दर पुष्टि करें।`,
    },
    {
      question: "मेरी असली सैलरी स्लिप में HRA प्रतिशत अलग क्यों दिखता है?",
      answer:
        "HRA इस पर निर्भर करता है कि आपकी पोस्टिंग वाला शहर कैसे वर्गीकृत है और सरकार द्वारा वर्गीकरण बदलने या DA किसी सीमा को पार करने पर बदल सकता है। सटीक अनुमान के लिए कैलकुलेटर में कस्टम HRA विकल्प चुनें और अपनी सैलरी स्लिप से सटीक प्रतिशत दर्ज करें।",
    },
    {
      question: "क्या यह कैलकुलेटर आयकर या GPF/NPS कटौती शामिल करता है?",
      answer:
        "यह केवल सकल वेतन (बेसिक + DA + HRA) का अनुमान लगाता है। NPS, GPF, आयकर और पेशेवर कर जैसी कटौतियां आपकी विशेष योजना, आय स्लैब व घोषणाओं पर निर्भर करती हैं, इसलिए यहां घटाई नहीं गई हैं। सटीक आंकड़ों के लिए अपनी PayManager सैलरी स्लिप का कटौती सेक्शन देखें।",
    },
    {
      question: "क्या यह आधिकारिक राजस्थान सरकारी कैलकुलेटर है?",
      answer:
        "नहीं। RajSSO Guide एक स्वतंत्र सूचनात्मक वेबसाइट है और यह टूल राजस्थान सरकार या वित्त विभाग से संबद्ध नहीं है। अपनी आधिकारिक, कानूनी रूप से मान्य सैलरी स्लिप और पे फिक्सेशन के लिए paymanager.rajasthan.gov.in पर PayManager का उपयोग करें।",
    },
  ],
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
    description: metaDescriptions[locale],
    alternates: {
      canonical: canonicalFor(locale, "/tools/pay-matrix-calculator"),
      ...alternates("/tools/pay-matrix-calculator"),
    },
    ...socialMeta({
      locale,
      title: titles[locale],
      description: metaDescriptions[locale],
      path: "/tools/pay-matrix-calculator",
    }),
  };
}

export default async function PayMatrixCalculatorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const loc = locale as Locale;
  const t = getDictionary(loc);
  const base = `/${loc}`;
  const how = howItWorks[loc];

  const graph = buildGraph([
    breadcrumbSchema([
      { name: t.common.home, path: base },
      { name: t.nav.tools, path: `${base}/tools` },
      { name: titles[loc], path: `${base}/tools/pay-matrix-calculator` },
    ]),
    softwareAppSchema({
      name: titles[loc],
      description: metaDescriptions[loc],
      path: "/tools/pay-matrix-calculator",
      locale: loc,
    }),
    faqSchema(faqs[loc]),
  ]);

  return (
    <div>
      <JsonLd data={graph} />
      <Breadcrumbs
        items={[
          { name: t.common.home, href: base },
          { name: t.nav.tools, href: `${base}/tools` },
          { name: titles[loc] },
        ]}
      />
      <h1 className="mt-4 text-3xl font-bold tracking-tight">{titles[loc]}</h1>
      <div className="mt-3 max-w-2xl space-y-3 text-zinc-600">
        {intro[loc].map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <div className="mt-8">
        <PayMatrixCalculator locale={loc} />
      </div>

      <section className="mt-12 max-w-2xl">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
          {how.title}
        </h2>
        <div className="mt-4 space-y-4 leading-relaxed text-zinc-700">
          {how.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      <FaqSection title={t.common.faqTitle} faqs={faqs[loc]} />

      <RelatedLinks
        title={t.common.related}
        links={[
          {
            href: `${base}/service/paymanager`,
            label: loc === "hi" ? "PayManager गाइड" : "PayManager Guide",
            desc: loc === "hi" ? "सैलरी स्लिप डाउनलोड करें" : "Download your salary slip",
          },
          {
            href: `${base}/tools/otr-fee-calculator`,
            label: loc === "hi" ? "OTR फीस कैलकुलेटर" : "OTR Fee Calculator",
          },
          {
            href: `${base}/tools`,
            label: loc === "hi" ? "सभी टूल्स" : "All Tools",
          },
        ]}
      />
    </div>
  );
}
