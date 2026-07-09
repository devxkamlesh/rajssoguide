import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JanAadhaarStatusChecker } from "@/components/JanAadhaarStatusChecker";
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
  en: "Jan Aadhaar Status Checker — Check Enrolment Status via SSO",
  hi: "जन आधार स्थिति चेकर — एसएसओ से नामांकन स्थिति जांचें",
};

const body = {
  en: [
    "The Jan Aadhaar Status Checker helps Rajasthan residents confirm their enrolment or update status after applying through the SSO portal. Enter your Jan Aadhaar, enrolment, or receipt number to check the format, then open the official Jan Aadhaar portal to view the live status. Jan Aadhaar is essential because schemes like Chiranjeevi health insurance, scholarships, and Anuprati coaching are linked to it.",
    "After you submit a new enrolment or an update such as income, bank account, mobile number, or a new family member, requests usually take about 7 to 15 days through a two-level verification process. In your Jan Aadhaar dashboard, a green tick means the update is approved, while a red cross means the request was rejected and you should re-upload a clearer scanned document.",
    "For your privacy, this tool only validates the number format on your device — it does not connect to the government database, so it cannot fetch your actual status. The real status is always shown on the official Jan Aadhaar portal or inside your SSO dashboard. If a member is not showing in your family list, visit an e-Mitra centre to update the record. RajSSO Guide is an independent guide and never asks for your SSO ID, password, or OTP.",
  ],
  hi: [
    "जन आधार स्थिति चेकर राजस्थान निवासियों को एसएसओ पोर्टल से आवेदन के बाद अपने नामांकन या अपडेट की स्थिति की पुष्टि करने में मदद करता है। फॉर्मेट जांचने के लिए अपनी जन आधार, नामांकन या रसीद संख्या दर्ज करें, फिर लाइव स्थिति देखने के लिए आधिकारिक जन आधार पोर्टल खोलें। जन आधार आवश्यक है क्योंकि चिरंजीवी स्वास्थ्य बीमा, छात्रवृत्ति और अनुप्रति कोचिंग जैसी योजनाएं इससे जुड़ी हैं।",
    "नया नामांकन या आय, बैंक खाता, मोबाइल नंबर या नए सदस्य जैसे अपडेट जमा करने के बाद, अनुरोध आमतौर पर दो-स्तरीय सत्यापन प्रक्रिया से लगभग 7 से 15 दिन लेते हैं। आपके जन आधार डैशबोर्ड में हरा टिक स्वीकृत अपडेट दर्शाता है, जबकि लाल क्रॉस का अर्थ है अनुरोध अस्वीकृत हुआ और आपको स्पष्ट स्कैन दस्तावेज़ पुनः अपलोड करना चाहिए।",
    "आपकी गोपनीयता के लिए यह टूल केवल आपके डिवाइस पर संख्या का फॉर्मेट सत्यापित करता है — यह सरकारी डेटाबेस से कनेक्ट नहीं होता, इसलिए आपकी वास्तविक स्थिति नहीं ला सकता। वास्तविक स्थिति हमेशा आधिकारिक जन आधार पोर्टल या आपके एसएसओ डैशबोर्ड पर दिखती है। यदि कोई सदस्य आपकी परिवार सूची में नहीं दिख रहा, तो रिकॉर्ड अपडेट कराने के लिए ई-मित्र केंद्र पर जाएं। RajSSO Guide एक स्वतंत्र गाइड है और कभी भी आपकी एसएसओ आईडी, पासवर्ड या ओटीपी नहीं मांगता।",
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
      canonical: canonicalFor(locale, "/tools/jan-aadhaar-status"),
      ...alternates("/tools/jan-aadhaar-status"),
    },
    ...socialMeta({ locale, title: titles[locale], description, path: "/tools/jan-aadhaar-status" }),
  };
}

export default async function JanAadhaarStatusPage({
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
      { name: titles[loc], path: `/${loc}/tools/jan-aadhaar-status` },
    ]),
    softwareAppSchema({
      name: titles[loc],
      description: body[loc][0].slice(0, 155),
      path: "/tools/jan-aadhaar-status",
      locale: loc,
    }),
  ]);

  return (
    <div>
      <JsonLd data={graph} />
      <h1 className="text-3xl font-bold tracking-tight">{titles[loc]}</h1>
      <div className="mt-6">
        <JanAadhaarStatusChecker locale={loc} />
      </div>
      <div className="mt-8 space-y-4 leading-relaxed text-zinc-700">
        {body[loc].map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  );
}
