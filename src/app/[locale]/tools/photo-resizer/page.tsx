import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PhotoResizer } from "@/components/PhotoResizer";
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
  en: "Photo Resizer — Resize Photo & Signature for SSO Forms",
  hi: "फोटो रिसाइज़र — एसएसओ फॉर्म के लिए फोटो और हस्ताक्षर रिसाइज़ करें",
};

const body = {
  en: [
    "When you apply for jobs, scholarships, or certificates through the Rajasthan SSO portal, online forms usually ask for a passport-size photo and a signature in exact pixel dimensions. This free Photo Resizer lets you resize any JPG or PNG to the size your form needs in a couple of clicks, right inside your browser.",
    "Pick a preset such as passport photo (200×230) or signature (140×60), or enter custom width and height, then upload your image and click Resize & download. The tool draws your image onto a clean white background at the chosen size and saves a JPG you can upload to the portal. Because everything happens on your device, your photo is never sent to any server.",
    "For best results, start from a clear, well-lit photo with your face centred, and a signature done with dark ink on white paper. Always re-check the exact dimensions and maximum file size mentioned in your specific form or recruitment notice, since requirements differ between RPSC, RSSB, scholarship, and e-Mitra applications. RajSSO Guide is an independent guide and does not store any of your files.",
  ],
  hi: [
    "जब आप राजस्थान एसएसओ पोर्टल से नौकरी, छात्रवृत्ति या प्रमाणपत्र के लिए आवेदन करते हैं, तो ऑनलाइन फॉर्म आमतौर पर पासपोर्ट साइज़ फोटो और हस्ताक्षर सटीक पिक्सेल आयाम में मांगते हैं। यह मुफ़्त फोटो रिसाइज़र किसी भी JPG या PNG को आपके फॉर्म की ज़रूरत के अनुसार कुछ ही क्लिक में आपके ब्राउज़र में ही रिसाइज़ कर देता है।",
    "पासपोर्ट फोटो (200×230) या हस्ताक्षर (140×60) जैसा प्रीसेट चुनें, या कस्टम चौड़ाई और ऊंचाई दर्ज करें, फिर अपनी इमेज अपलोड कर 'रिसाइज़ करें और डाउनलोड करें' पर क्लिक करें। टूल आपकी इमेज को चुनी गई साइज़ पर साफ सफेद बैकग्राउंड पर बनाता है और एक JPG सहेजता है जिसे आप पोर्टल पर अपलोड कर सकते हैं। चूंकि सब कुछ आपके डिवाइस पर होता है, आपकी फोटो कभी किसी सर्वर पर नहीं भेजी जाती।",
    "बेहतर परिणाम के लिए स्पष्ट, अच्छी रोशनी वाली फोटो लें जिसमें चेहरा केंद्र में हो, और हस्ताक्षर सफेद कागज़ पर गहरी स्याही से करें। हमेशा अपने विशिष्ट फॉर्म या भर्ती सूचना में दी गई सटीक आयाम और अधिकतम फ़ाइल साइज़ दोबारा जांचें, क्योंकि RPSC, RSSB, छात्रवृत्ति और ई-मित्र आवेदनों में आवश्यकताएं अलग होती हैं। RajSSO Guide एक स्वतंत्र गाइड है और आपकी कोई फ़ाइल संग्रहीत नहीं करता।",
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
      canonical: canonicalFor(locale, "/tools/photo-resizer"),
      ...alternates("/tools/photo-resizer"),
    },
    ...socialMeta({ locale, title: titles[locale], description, path: "/tools/photo-resizer" }),
  };
}

export default async function PhotoResizerPage({
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
      { name: titles[loc], path: `/${loc}/tools/photo-resizer` },
    ]),
    softwareAppSchema({
      name: titles[loc],
      description: body[loc][0].slice(0, 155),
      path: "/tools/photo-resizer",
      locale: loc,
    }),
  ]);

  return (
    <div>
      <JsonLd data={graph} />
      <h1 className="text-3xl font-bold tracking-tight">{titles[loc]}</h1>
      <div className="mt-6">
        <PhotoResizer locale={loc} />
      </div>
      <div className="mt-8 space-y-4 leading-relaxed text-zinc-700">
        {body[loc].map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  );
}
