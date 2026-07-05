import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getDictionary, isLocale, locales, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";
import { ATTRIBUTION } from "@/lib/attribution";
import {
  alternates,
  breadcrumbSchema,
  buildGraph,
  canonicalFor,
  organizationSchema,
} from "@/lib/schema";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    title: locale === "hi" ? "संपर्क करें — RajSSO Guide" : "Contact Us — RajSSO Guide",
    description:
      locale === "hi"
        ? "RajSSO Guide संपादकीय टीम से संपर्क करें या किसी गलत जानकारी की रिपोर्ट करें।"
        : "Contact the RajSSO Guide editorial team or report incorrect information.",
    alternates: {
      canonical: canonicalFor(locale, "/contact"),
      ...alternates("/contact"),
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const loc = locale as Locale;
  const t = getDictionary(loc);
  const base = `/${loc}`;
  const hi = loc === "hi";

  const graph = buildGraph([
    organizationSchema(),
    breadcrumbSchema([
      { name: t.common.home, path: base },
      { name: hi ? "संपर्क करें" : "Contact", path: `${base}/contact` },
    ]),
  ]);

  return (
    <article className="max-w-3xl">
      <JsonLd data={graph} />
      <Breadcrumbs
        items={[
          { name: t.common.home, href: base },
          { name: hi ? "संपर्क करें" : "Contact" },
        ]}
      />
      <h1 className="text-3xl font-bold tracking-tight">
        {hi ? "संपर्क करें" : "Contact Us"}
      </h1>
      <p className="mt-4 text-zinc-600">
        {hi
          ? "हम आपकी प्रतिक्रिया का स्वागत करते हैं। नीचे दिए गए तरीकों से हमारी संपादकीय टीम तक पहुँचें।"
          : "We welcome your feedback. Reach our editorial team using the options below."}
      </p>

      {/* Editorial contact */}
      <section className="mt-8 rounded-2xl border border-zinc-200 p-6">
        <h2 className="text-xl font-semibold">
          {hi ? "संपादकीय टीम" : "Editorial Team"}
        </h2>
        <p className="mt-2 text-zinc-600">
          {hi
            ? "वेबसाइट की सामग्री, सुझाव या किसी गलत जानकारी की रिपोर्ट के लिए संपर्क करें:"
            : "For content feedback, suggestions, or to report incorrect information, reach us at:"}
        </p>
        <ul className="mt-4 space-y-2">
          <li>
            <span className="text-zinc-500">{hi ? "ईमेल: " : "Email: "}</span>
            <a
              href={`mailto:${site.contactEmail}`}
              className="font-medium text-amber-700 hover:underline"
            >
              {site.contactEmail}
            </a>
          </li>
          <li>
            <span className="text-zinc-500">{hi ? "व्हाट्सएप: " : "WhatsApp: "}</span>
            <a
              href={`https://wa.me/${site.contactWhatsApp}`}
              target="_blank"
              rel="noopener"
              className="font-medium text-green-700 hover:underline"
            >
              +91 92572 41205 ↗
            </a>
          </li>
          <li>
            <span className="text-zinc-500">LinkedIn: </span>
            <a
              href={ATTRIBUTION.linkedin}
              target="_blank"
              rel="noopener"
              className="font-medium text-amber-700 hover:underline"
            >
              {ATTRIBUTION.handle} ↗
            </a>
          </li>
        </ul>
      </section>

      {/* WhatsApp quick button */}
      <div className="mt-6">
        <a
          href={`https://wa.me/${site.contactWhatsApp}?text=${encodeURIComponent(
            hi ? "नमस्ते, मुझे RajSSO Guide के बारे में पूछना है।" : "Hi, I have a question about RajSSO Guide.",
          )}`}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 rounded-full bg-green-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.8 14.01c-.24.68-1.42 1.31-1.96 1.36-.5.05-.96.24-3.23-.67-2.72-1.07-4.45-3.86-4.59-4.04-.13-.18-1.1-1.46-1.1-2.79 0-1.33.7-1.98.95-2.25.24-.27.53-.34.71-.34.18 0 .36 0 .51.01.16.01.39-.06.6.46.24.56.81 1.93.88 2.07.07.14.12.3.02.48-.09.18-.14.3-.27.46-.14.16-.29.36-.41.48-.14.14-.28.28-.12.55.16.27.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.21 1.37.27.14.43.12.59-.07.16-.18.68-.79.86-1.06.18-.27.36-.23.6-.14.24.09 1.55.73 1.81.86.27.14.45.2.51.31.07.11.07.64-.17 1.32z" />
          </svg>
          {hi ? "व्हाट्सएप पर संपर्क करें" : "Chat on WhatsApp"}
        </a>
      </div>

      {/* Report incorrect info */}
      <section className="mt-6 rounded-2xl border border-amber-200 bg-amber-50/40 p-6">
        <h2 className="text-xl font-semibold text-amber-900">
          {hi ? "गलत जानकारी की रिपोर्ट करें" : "Report Incorrect Information"}
        </h2>
        <p className="mt-2 text-zinc-700">
          {hi
            ? "यदि किसी पेज पर कोई तिथि, शुल्क या चरण गलत लगे, तो हमें ईमेल में पेज का लिंक भेजें। हम उसे आधिकारिक पोर्टल से सत्यापित कर शीघ्र सुधारते हैं।"
            : "If a date, fee, or step on any page looks wrong, email us the page link. We verify it against the official portal and correct it quickly."}
        </p>
      </section>

      {/* Official helpdesk */}
      <section className="mt-6 rounded-2xl border border-zinc-200 p-6">
        <h2 className="text-xl font-semibold">
          {hi ? "आधिकारिक एसएसओ हेल्पडेस्क" : "Official SSO Helpdesk"}
        </h2>
        <p className="mt-2 text-zinc-600">
          {hi
            ? "अपने एसएसओ खाते, पासवर्ड या लॉगिन से जुड़ी समस्याओं के लिए केवल सरकारी हेल्पडेस्क से संपर्क करें:"
            : "For issues with your actual SSO account, password, or login, contact only the government helpdesk:"}
        </p>
        <ul className="mt-3 space-y-1 text-zinc-700">
          <li>
            {hi ? "फ़ोन: " : "Phone: "}
            <a href={`tel:${site.officialHelpdesk.phone.replace(/-/g, "")}`} className="font-medium text-amber-700 hover:underline">
              {site.officialHelpdesk.phone}
            </a>
          </li>
          <li>
            {hi ? "ईमेल: " : "Email: "}
            <a href={`mailto:${site.officialHelpdesk.email}`} className="font-medium text-amber-700 hover:underline">
              {site.officialHelpdesk.email}
            </a>
          </li>
        </ul>
      </section>

      <p className="mt-8 text-sm text-zinc-500">
        {hi
          ? "ध्यान दें: हम एक स्वतंत्र गाइड हैं और कभी भी आपका पासवर्ड या ओटीपी नहीं मांगते।"
          : "Note: We are an independent guide and never ask for your password or OTP."}
      </p>
    </article>
  );
}
