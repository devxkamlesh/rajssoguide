import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { isLocale, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";
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
      "RajSSO Guide is an independent informational resource that helps Rajasthan citizens use the SSO portal and linked government services.",
    editorial:
      "Our editorial team reviews every guide against the official sso.rajasthan.gov.in portal and updates fees, dates, and steps regularly. Each article shows a 'last verified' date.",
    privacyTitle: "Your privacy and security",
    privacy:
      "We never ask for or store your SSO ID, password, OTP, or any login credentials. Always enter those only on the official government portal.",
    affiliationTitle: "Affiliation",
    affiliation:
      "We are not affiliated with, endorsed by, or operated by the Government of Rajasthan. For official services, use sso.rajasthan.gov.in.",
  },
  hi: {
    title: "RajSSO Guide के बारे में",
    intro:
      "RajSSO Guide एक स्वतंत्र सूचनात्मक संसाधन है जो राजस्थान के नागरिकों को एसएसओ पोर्टल और जुड़ी सरकारी सेवाओं का उपयोग करने में मदद करता है।",
    editorial:
      "हमारी संपादकीय टीम हर गाइड को आधिकारिक sso.rajasthan.gov.in पोर्टल के अनुसार जांचती है और फीस, तिथियां व चरण नियमित रूप से अपडेट करती है। हर लेख पर 'अंतिम सत्यापन' तिथि दिखाई जाती है।",
    privacyTitle: "आपकी गोपनीयता और सुरक्षा",
    privacy:
      "हम कभी भी आपकी एसएसओ आईडी, पासवर्ड, ओटीपी या कोई लॉगिन क्रेडेंशियल नहीं मांगते या संग्रहीत करते। इन्हें केवल आधिकारिक सरकारी पोर्टल पर ही दर्ज करें।",
    affiliationTitle: "संबद्धता",
    affiliation:
      "हम राजस्थान सरकार से संबद्ध, अनुमोदित या संचालित नहीं हैं। आधिकारिक सेवाओं के लिए sso.rajasthan.gov.in का उपयोग करें।",
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

      <h2 className="mt-8 text-xl font-semibold">{c.affiliationTitle}</h2>
      <p className="mt-2 text-zinc-600">{c.affiliation}</p>

      <h2 className="mt-8 text-xl font-semibold">{c.privacyTitle}</h2>
      <p className="mt-2 text-zinc-600">{c.privacy}</p>

      <h2 className="mt-8 text-xl font-semibold">
        {loc === "hi" ? "संपादकीय प्रक्रिया" : "Editorial process"}
      </h2>
      <p className="mt-2 text-zinc-600">{c.editorial}</p>

      <p className="mt-8 text-sm text-zinc-500">
        {site.author.name} ·{" "}
        <a href={site.officialPortal} rel="nofollow noopener" className="underline">
          {site.officialPortal.replace("https://", "")}
        </a>
      </p>
    </article>
  );
}
