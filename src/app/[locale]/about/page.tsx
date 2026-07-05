import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { isLocale, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";
import { ATTRIBUTION } from "@/lib/attribution";
import {
  alternates,
  breadcrumbSchema,
  buildGraph,
  canonicalFor,
  organizationSchema,
  personSchema,
} from "@/lib/schema";

const copy = {
  en: {
    title: "About RajSSO Guide",
    intro:
      "RajSSO Guide is an independent informational resource that helps Rajasthan citizens use the SSO portal (sso.rajasthan.gov.in) and the government services linked to it — login, registration, account recovery, exams, scholarships, and everyday services.",
    missionTitle: "Our mission",
    mission:
      "Government portals can be confusing, especially on a phone or in a hurry before a deadline. Our goal is simple: explain every SSO task in plain Hindi and English, step by step, so anyone in Rajasthan can get things done without paying a middleman or risking a scam.",
    authorTitle: "Who runs this site",
    author:
      "RajSSO Guide is built and maintained by Kamlesh Choudhary, a full-stack web developer known online as devxkamlesh. He created this guide as an independent project to make Rajasthan's online services easier to navigate for students, job seekers, and families.",
    editorialTitle: "How we keep content accurate",
    editorial:
      "Every guide is written and reviewed manually against the official sso.rajasthan.gov.in portal. We check fees, dates, and steps before publishing and re-verify them when notifications change. Core guides show a 'last verified' date so you know how current the information is. Official sources always take priority over anything on this site.",
    affiliationTitle: "Affiliation",
    affiliation:
      "We are not affiliated with, endorsed by, or operated by the Government of Rajasthan. For official services, always use sso.rajasthan.gov.in.",
    privacyTitle: "Your privacy and security",
    privacy:
      "We never ask for or store your SSO ID, password, OTP, or any login credentials. Our tools run entirely in your browser and send no data anywhere. Enter your real login details only on the official government portal.",
    contactTitle: "Contact us",
  },
  hi: {
    title: "RajSSO Guide के बारे में",
    intro:
      "RajSSO Guide एक स्वतंत्र सूचनात्मक संसाधन है जो राजस्थान के नागरिकों को एसएसओ पोर्टल (sso.rajasthan.gov.in) और उससे जुड़ी सरकारी सेवाओं — लॉगिन, रजिस्ट्रेशन, अकाउंट रिकवरी, परीक्षाएं, छात्रवृत्ति और रोज़मर्रा की सेवाओं — का उपयोग करने में मदद करता है।",
    missionTitle: "हमारा उद्देश्य",
    mission:
      "सरकारी पोर्टल अक्सर भ्रमित करने वाले होते हैं, खासकर मोबाइल पर या किसी अंतिम तिथि से पहले जल्दबाज़ी में। हमारा उद्देश्य सरल है: हर एसएसओ कार्य को सरल हिंदी और अंग्रेज़ी में, चरण-दर-चरण समझाना, ताकि राजस्थान का कोई भी व्यक्ति बिना किसी बिचौलिए या धोखाधड़ी के जोखिम के अपना काम पूरा कर सके।",
    authorTitle: "इस साइट को कौन चलाता है",
    author:
      "RajSSO Guide को कमलेश चौधरी द्वारा बनाया और संभाला जाता है, जो एक फुल-स्टैक वेब डेवलपर हैं और ऑनलाइन devxkamlesh के नाम से जाने जाते हैं। उन्होंने यह गाइड एक स्वतंत्र परियोजना के रूप में बनाई ताकि छात्रों, नौकरी आवेदकों और परिवारों के लिए राजस्थान की ऑनलाइन सेवाएं आसान हो सकें।",
    editorialTitle: "हम सामग्री को सटीक कैसे रखते हैं",
    editorial:
      "हर गाइड को आधिकारिक sso.rajasthan.gov.in पोर्टल के अनुसार मैन्युअल रूप से लिखा और जांचा जाता है। प्रकाशित करने से पहले हम शुल्क, तिथियां और चरण जांचते हैं और अधिसूचना बदलने पर फिर से सत्यापित करते हैं। मुख्य गाइड्स पर 'अंतिम सत्यापन' तिथि दिखाई जाती है। आधिकारिक स्रोत हमेशा इस साइट की किसी भी जानकारी से ऊपर होते हैं।",
    affiliationTitle: "संबद्धता",
    affiliation:
      "हम राजस्थान सरकार से संबद्ध, अनुमोदित या संचालित नहीं हैं। आधिकारिक सेवाओं के लिए हमेशा sso.rajasthan.gov.in का उपयोग करें।",
    privacyTitle: "आपकी गोपनीयता और सुरक्षा",
    privacy:
      "हम कभी भी आपकी एसएसओ आईडी, पासवर्ड, ओटीपी या कोई लॉगिन क्रेडेंशियल नहीं मांगते या संग्रहीत करते। हमारे टूल्स पूरी तरह आपके ब्राउज़र में चलते हैं और कोई डेटा कहीं नहीं भेजते। अपनी असली लॉगिन जानकारी केवल आधिकारिक सरकारी पोर्टल पर ही दर्ज करें।",
    contactTitle: "संपर्क करें",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    title: copy[locale].title,
    description: copy[locale].intro,
    alternates: {
      canonical: canonicalFor(locale, "/about"),
      ...alternates("/about"),
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const loc = locale as Locale;
  const c = copy[loc];

  const graph = buildGraph([
    organizationSchema(),
    personSchema(),
    breadcrumbSchema([
      { name: "Home", path: `/${loc}` },
      { name: c.title, path: `/${loc}/about` },
    ]),
  ]);

  return (
    <article className="prose-zinc max-w-3xl">
      <JsonLd data={graph} />
      <h1 className="text-3xl font-bold tracking-tight">{c.title}</h1>
      <p className="mt-4 text-zinc-600">{c.intro}</p>

      <h2 className="mt-8 text-xl font-semibold">{c.missionTitle}</h2>
      <p className="mt-2 text-zinc-600">{c.mission}</p>

      <h2 className="mt-8 text-xl font-semibold">{c.authorTitle}</h2>
      <p className="mt-2 text-zinc-600">{c.author}</p>
      <p className="mt-3 text-sm text-zinc-600">
        <a href={ATTRIBUTION.url} target="_blank" rel="noopener" className="text-amber-700 underline">
          {ATTRIBUTION.url.replace("https://", "")}
        </a>
        {"  ·  "}
        <a href={ATTRIBUTION.linkedin} target="_blank" rel="noopener" className="text-amber-700 underline">
          LinkedIn ({ATTRIBUTION.handle})
        </a>
      </p>

      <h2 className="mt-8 text-xl font-semibold">{c.editorialTitle}</h2>
      <p className="mt-2 text-zinc-600">{c.editorial}</p>

      <h2 className="mt-8 text-xl font-semibold">{c.affiliationTitle}</h2>
      <p className="mt-2 text-zinc-600">{c.affiliation}</p>

      <h2 className="mt-8 text-xl font-semibold">{c.privacyTitle}</h2>
      <p className="mt-2 text-zinc-600">{c.privacy}</p>

      <h2 className="mt-8 text-xl font-semibold">{c.contactTitle}</h2>
      <p className="mt-2 text-zinc-600">
        {loc === "hi" ? (
          <>
            प्रतिक्रिया या किसी गलत जानकारी की रिपोर्ट के लिए{" "}
            <Link href={`/${loc}/contact`} className="text-amber-700 underline">
              संपर्क पेज
            </Link>{" "}
            देखें।
          </>
        ) : (
          <>
            For feedback or to report incorrect information, see our{" "}
            <Link href={`/${loc}/contact`} className="text-amber-700 underline">
              contact page
            </Link>
            .
          </>
        )}
      </p>

      <p className="mt-8 text-sm text-zinc-500">
        {ATTRIBUTION.name} ·{" "}
        <a href={site.officialPortal} rel="nofollow noopener" className="underline">
          {site.officialPortal.replace("https://", "")}
        </a>
      </p>
    </article>
  );
}
