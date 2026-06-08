import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SsoIdValidator } from "@/components/SsoIdValidator";
import { JsonLd } from "@/components/JsonLd";
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
  en: "SSO ID Validator — Check Your SSO Username Format",
  hi: "एसएसओ आईडी वैलिडेटर — अपने एसएसओ यूज़रनेम फॉर्मेट की जांच करें",
};

const body = {
  en: [
    "The SSO ID Validator is a simple privacy-friendly tool that checks whether the SSO ID or username you typed follows the usual Rajasthan SSO format before you use it on the official portal. A typical SSO ID is between 5 and 30 characters and uses only letters, numbers, dots, underscores, or hyphens — no spaces or special symbols.",
    "Catching a small typo early saves time, because the SSO username cannot be changed after registration. If you choose your username at sign-up, this tool helps you confirm it is in an acceptable shape; if you are logging in and keep seeing 'Invalid Username', checking the format here can rule out a simple mistake before you use the official Forgot SSOID recovery option.",
    "Important: this validator runs entirely in your browser. It only checks the text pattern and never connects to sso.rajasthan.gov.in, so it cannot tell you whether an SSO ID actually exists or whether the password is correct. To verify a real account, recover your ID by sending an SMS to the official number or by using the recovery tools on the government portal. RajSSO Guide never asks for or stores your SSO ID or password.",
  ],
  hi: [
    "एसएसओ आईडी वैलिडेटर एक सरल और गोपनीयता-अनुकूल टूल है जो जांचता है कि आपने टाइप की गई एसएसओ आईडी या यूज़रनेम सामान्य राजस्थान एसएसओ फॉर्मेट का पालन करती है या नहीं, इससे पहले कि आप इसे आधिकारिक पोर्टल पर उपयोग करें। एक सामान्य एसएसओ आईडी 5 से 30 अक्षरों की होती है और इसमें केवल अक्षर, अंक, डॉट, अंडरस्कोर या हाइफ़न होते हैं — कोई स्पेस या विशेष चिह्न नहीं।",
    "छोटी टाइपिंग गलती जल्दी पकड़ना समय बचाता है, क्योंकि रजिस्ट्रेशन के बाद एसएसओ यूज़रनेम बदला नहीं जा सकता। साइन-अप के समय यूज़रनेम चुनते वक्त यह टूल पुष्टि करने में मदद करता है कि वह स्वीकार्य रूप में है; और यदि लॉगिन करते समय बार-बार 'Invalid Username' दिख रहा है, तो यहाँ फॉर्मेट जांचना आधिकारिक Forgot SSOID रिकवरी उपयोग करने से पहले एक साधारण गलती को खारिज कर सकता है।",
    "महत्वपूर्ण: यह वैलिडेटर पूरी तरह आपके ब्राउज़र में चलता है। यह केवल टेक्स्ट पैटर्न जांचता है और कभी sso.rajasthan.gov.in से कनेक्ट नहीं होता, इसलिए यह नहीं बता सकता कि कोई एसएसओ आईडी वास्तव में मौजूद है या पासवर्ड सही है। वास्तविक अकाउंट सत्यापित करने के लिए आधिकारिक नंबर पर एसएमएस भेजकर या सरकारी पोर्टल के रिकवरी टूल से अपनी आईडी रिकवर करें। RajSSO Guide कभी भी आपकी एसएसओ आईडी या पासवर्ड नहीं मांगता या संग्रहीत करता।",
  ],
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    title: titles[locale],
    description: body[locale][0].slice(0, 155),
    alternates: {
      canonical: canonicalFor(locale, "/tools/sso-id-validator"),
      ...alternates("/tools/sso-id-validator"),
    },
  };
}

export default async function SsoIdValidatorPage({
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
      { name: titles[loc], path: `/${loc}/tools/sso-id-validator` },
    ]),
  ]);

  return (
    <div>
      <JsonLd data={graph} />
      <h1 className="text-3xl font-bold tracking-tight">{titles[loc]}</h1>
      <div className="mt-6">
        <SsoIdValidator locale={loc} />
      </div>
      <div className="mt-8 space-y-4 leading-relaxed text-zinc-700">
        {body[loc].map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  );
}
