import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqSection } from "@/components/FaqSection";
import { ImportantLinks } from "@/components/ImportantLinks";
import { services } from "@/lib/content";
import { servicesHub as sh, servicesLong } from "@/data/servicesHub";
import { draftServiceGroups, draftServicePriorityCount } from "@/data/draftServices";
import { importantLinksForService } from "@/lib/related";
import { site } from "@/lib/site";
import { getDictionary, isLocale, locales, type Locale } from "@/lib/i18n";
import {
  alternates,
  breadcrumbSchema,
  buildGraph,
  canonicalFor,
  faqSchema,
  itemListSchema,
  socialMeta,
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
    title: sh.metaTitle[locale],
    description: sh.metaDescription[locale],
    alternates: {
      canonical: canonicalFor(locale, "/services"),
      ...alternates("/services"),
    },
    ...socialMeta({
      locale,
      title: sh.metaTitle[locale],
      description: sh.metaDescription[locale],
      path: "/services",
    }),
  };
}

export default async function ServicesHub({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const loc = locale as Locale;
  const t = getDictionary(loc);
  const base = `/${loc}`;

  const graph = buildGraph([
    breadcrumbSchema([
      { name: t.common.home, path: base },
      { name: t.nav.services, path: `${base}/services` },
    ]),
    itemListSchema(
      services.map((s) => ({ name: s.name[loc], path: `${base}/service/${s.slug}` })),
    ),
    faqSchema(sh.faqs[loc]),
  ]);

  return (
    <div>
      <JsonLd data={graph} />
      <Breadcrumbs
        items={[{ name: t.common.home, href: base }, { name: t.nav.services }]}
      />
      <h1 className="text-3xl font-bold tracking-tight">
        {loc === "hi" ? "राजस्थान एसएसओ सेवाएं" : "Rajasthan SSO Services"}
      </h1>
      <p className="mt-3 max-w-2xl text-lg text-zinc-600">
        {loc === "hi"
          ? "एक SSO ID से राजस्थान सरकार की 100 से अधिक सेवाओं का लाभ उठाएँ — PayManager पर सैलरी स्लिप डाउनलोड करने से लेकर Jan Aadhaar अपडेट करने और सरकारी नौकरी के लिए आवेदन करने तक।"
          : "One SSO ID unlocks 100+ Rajasthan government services — from downloading your salary slip on PayManager to updating Jan Aadhaar details and applying for government jobs."}
      </p>
      <p className="mt-3 text-sm text-zinc-500">
        {t.common.lastVerified}: {sh.lastVerified}
      </p>

      {/* Popular Services Grid */}
      <p className="mt-8 text-sm text-zinc-500">
        {loc === "hi" ? `कुल ${services.length} सेवाएं` : `Showing ${services.length} services`}
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <Link
            key={s.slug}
            href={`${base}/service/${s.slug}`}
            className="group flex h-full flex-col rounded-2xl border border-zinc-200 p-5 transition hover:border-amber-500 hover:shadow-sm"
          >
            <h2 className="text-base font-semibold text-zinc-900">{s.name[loc]}</h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
              {s.purpose[loc]}
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-amber-700">
              {loc === "hi" ? "विवरण देखें" : "View details"}
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </span>
          </Link>
        ))}
      </div>

      {/* What Are Rajasthan SSO Services */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold tracking-tight">
          {loc === "hi" ? "राजस्थान SSO सेवाएँ क्या हैं?" : "What Are Rajasthan SSO Services?"}
        </h2>
        <div className="mt-4 space-y-4 leading-relaxed text-zinc-600">
          <p>
            {loc === "hi"
              ? "राजस्थान सिंगल साइन-ऑन (SSO) पोर्टल — डिजिटल राजस्थान अभियान के तहत सूचना प्रौद्योगिकी एवं संचार विभाग द्वारा लॉन्च किया गया — एक ऐसा एकीकृत प्लेटफ़ॉर्म है जो नागरिकों, सरकारी कर्मचारियों और व्यवसायियों को एक ही लॉगिन से 100 से अधिक राज्य सरकार की सेवाओं तक पहुँच देता है। हर विभाग के लिए अलग-अलग यूज़रनेम और पासवर्ड याद रखने की ज़रूरत नहीं — बस एक बार sso.rajasthan.gov.in पर लॉगिन करें और अपने डैशबोर्ड से किसी भी सेवा पर जाएँ।"
              : "The Rajasthan Single Sign-On (SSO) portal — launched by the Department of Information Technology & Communication under the Digital Rajasthan initiative — is a unified gateway that lets citizens, government employees, and businesses access more than 100 state government services with a single set of credentials. Instead of remembering a different username and password for each department, you log in once at sso.rajasthan.gov.in and navigate to any integrated service directly from your personalised dashboard."}
          </p>
        </div>
      </section>

      {/* Services for Citizens */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold tracking-tight">
          {loc === "hi" ? "नागरिकों के लिए सेवाएँ" : "Services for Citizens"}
        </h2>
        <div className="mt-4 space-y-4 leading-relaxed text-zinc-600">
          <p>
            {loc === "hi"
              ? "जो नागरिक Jan Aadhaar ID या Google अकाउंट से रजिस्ट्रेशन करते हैं, वे सरकार-से-नागरिक (G2C) सेवाओं की एक विस्तृत श्रृंखला का लाभ उठा सकते हैं:"
              : "Citizens who register using their Jan Aadhaar ID or Google account can access a wide range of government-to-citizen (G2C) services:"}
          </p>
          <ul className="space-y-3">
            <li className="flex gap-2.5">
              <span className="mt-1 text-amber-600">•</span>
              <span className="text-zinc-700">
                <strong className="text-zinc-900">Jan Aadhaar</strong> — {loc === "hi" ? "e-KYC पूरी करें, परिवार की नामांकन स्थिति जाँचें, परिवार के सदस्यों की जानकारी जोड़ें या अपडेट करें।" : "Complete e-KYC, check family enrolment status, add or update member details."}
              </span>
            </li>
            <li className="flex gap-2.5">
              <span className="mt-1 text-amber-600">•</span>
              <span className="text-zinc-700">
                <strong className="text-zinc-900">e-Mitra</strong> — {loc === "hi" ? "बिल भरें, 500+ प्रमाण-पत्र के लिए आवेदन करें, RTI अनुरोध दर्ज करें।" : "Pay bills, apply for 500+ certificates, submit RTI requests."}
              </span>
            </li>
            <li className="flex gap-2.5">
              <span className="mt-1 text-amber-600">•</span>
              <span className="text-zinc-700">
                <strong className="text-zinc-900">{loc === "hi" ? "छात्रवृत्ति" : "Scholarships"}</strong> — {loc === "hi" ? "SC, ST, OBC, MBC, EWS और अल्पसंख्यक छात्रवृत्तियों के लिए ऑनलाइन आवेदन करें।" : "Apply for SC, ST, OBC, MBC, EWS, and Minority scholarships."}
              </span>
            </li>
            <li className="flex gap-2.5">
              <span className="mt-1 text-amber-600">•</span>
              <span className="text-zinc-700">
                <strong className="text-zinc-900">{loc === "hi" ? "अपना खाता" : "Apna Khata"}</strong> — {loc === "hi" ? "ज़मीन की जमाबंदी, खसरा नक्शा ऑनलाइन देखें।" : "View land records, jamabandi, Khasra maps online."}
              </span>
            </li>
            <li className="flex gap-2.5">
              <span className="mt-1 text-amber-600">•</span>
              <span className="text-zinc-700">
                <strong className="text-zinc-900">{loc === "hi" ? "भर्ती पोर्टल" : "Recruitment Portals"}</strong> — {loc === "hi" ? "RPSC और RSSB परीक्षाओं के लिए आवेदन करें, OTR शुल्क जमा करें।" : "Apply for RPSC and RSSB exams, pay OTR fees, track admit cards."}
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Services for Government Employees */}
      <section className="mt-12 rounded-2xl border border-amber-100 bg-amber-50/30 p-6">
        <h2 className="text-2xl font-bold tracking-tight text-amber-900">
          {loc === "hi" ? "सरकारी कर्मचारियों के लिए सेवाएँ" : "Services for Government Employees"}
        </h2>
        <div className="mt-4 space-y-4 leading-relaxed text-zinc-700">
          <p>
            {loc === "hi"
              ? "राज्य सरकार के कर्मचारी 'Govt. Employee' टैब से अपने SIPF नंबर का उपयोग करके रजिस्ट्रेशन करते हैं।"
              : "State government employees register under the 'Govt. Employee' tab using their SIPF number."}
          </p>
          <ul className="space-y-3">
            <li className="flex gap-2.5">
              <span className="mt-1 text-amber-600">•</span>
              <span>
                <strong className="text-zinc-900">PayManager</strong> — {loc === "hi" ? "मासिक सैलरी स्लिप डाउनलोड करें, वेतन इतिहास देखें, बैंक विवरण अपडेट करें।" : "Download monthly salary slips, view pay history, update bank details."}
              </span>
            </li>
            <li className="flex gap-2.5">
              <span className="mt-1 text-amber-600">•</span>
              <span>
                <strong className="text-zinc-900">RajKaj</strong> — {loc === "hi" ? "छुट्टी के लिए आवेदन करें, APAR भरें, संपत्ति विवरण दाखिल करें।" : "Apply for leave, file APAR, submit property returns, manage correspondence."}
              </span>
            </li>
            <li className="flex gap-2.5">
              <span className="mt-1 text-amber-600">•</span>
              <span>
                <strong className="text-zinc-900">IFMS</strong> — {loc === "hi" ? "बजट प्रबंधन और वित्तीय रिपोर्टिंग।" : "Budget management and financial reporting for officers."}
              </span>
            </li>
            <li className="flex gap-2.5">
              <span className="mt-1 text-amber-600">•</span>
              <span>
                <strong className="text-zinc-900">{loc === "hi" ? "शाला दर्पण" : "Shala Darpan"}</strong> — {loc === "hi" ? "छात्र डेटा और उपस्थिति प्रबंधित करें।" : "Manage student data and teacher attendance."}
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* How the Dashboard Works */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold tracking-tight">
          {loc === "hi" ? "SSO डैशबोर्ड कैसे काम करता है?" : "How the SSO Dashboard Works"}
        </h2>
        <div className="mt-4 space-y-4 leading-relaxed text-zinc-600">
          <p>
            {loc === "hi"
              ? "लॉगिन करने के बाद आपका डैशबोर्ड आपके अकाउंट प्रकार (नागरिक, कर्मचारी या उद्योग) के अनुसार प्रासंगिक सेवाओं की एक व्यक्तिगत ग्रिड दिखाता है। शीर्ष पर एक सर्च बार है जहाँ से नाम टाइप करके कोई भी सेवा खोजी जा सकती है। किसी सेवा टाइल पर क्लिक करते ही संबंधित विभाग का पोर्टल खुल जाता है — दूसरी बार लॉगिन की ज़रूरत नहीं। यही SSO की मूल उपयोगिता है।"
              : "After logging in, your dashboard displays a personalised grid of services relevant to your account type (citizen, employee, or Udyog). A search bar at the top lets you find any service by name. Clicking a service tile opens the corresponding department portal with your authentication already passed — no second login required. This seamless hand-off is the core value of the SSO architecture."}
          </p>
        </div>
      </section>

      {/* Tips for Using SSO Services */}
      <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold tracking-tight">
          {loc === "hi" ? "SSO सेवाओं को बिना किसी समस्या के उपयोग करने के टिप्स" : "Tips for Using SSO Services Without Issues"}
        </h2>
        <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
          <li className="flex gap-2.5">
            <span className="mt-1 text-amber-600">✓</span>
            <span className="text-zinc-700">
              {loc === "hi" ? "सर्वोत्तम संगतता के लिए हमेशा Chrome या Edge का उपयोग करें।" : "Always use Chrome or Edge for best compatibility."}
            </span>
          </li>
          <li className="flex gap-2.5">
            <span className="mt-1 text-amber-600">✓</span>
            <span className="text-zinc-700">
              {loc === "hi" ? "लॉगिन के बाद खाली पेज दिखे तो ब्राउज़र कैश साफ़ करें।" : "Clear browser cache if you see a blank page after login."}
            </span>
          </li>
          <li className="flex gap-2.5">
            <span className="mt-1 text-amber-600">✓</span>
            <span className="text-zinc-700">
              {loc === "hi" ? "फॉर्म भरते समय ब्राउज़र का बैक बटन न दबाएँ।" : "Do not use browser back button while filling forms."}
            </span>
          </li>
          <li className="flex gap-2.5">
            <span className="mt-1 text-amber-600">✓</span>
            <span className="text-zinc-700">
              {loc === "hi" ? "साझा कंप्यूटर पर SSO सत्र से लॉगआउट करना न भूलें।" : "Log out from SSO session on shared computers."}
            </span>
          </li>
          <li className="flex gap-2.5">
            <span className="mt-1 text-amber-600">✓</span>
            <span className="text-zinc-700">
              {loc === "hi" ? "आपकी SSO ID केवल sso.rajasthan.gov.in पर ही दर्ज करें।" : "Enter SSO ID only on sso.rajasthan.gov.in."}
            </span>
          </li>
        </ul>
      </section>

      {/* SSO services by user type */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold tracking-tight">{sh.categoryTitle[loc]}</h2>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-zinc-200">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-zinc-900 text-left text-white">
                <th className="px-4 py-3 font-semibold">{sh.categoryCols[loc][0]}</th>
                <th className="px-4 py-3 font-semibold">{sh.categoryCols[loc][1]}</th>
                <th className="px-4 py-3 font-semibold">{sh.categoryCols[loc][2]}</th>
              </tr>
            </thead>
            <tbody>
              {sh.categoryRows[loc].map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-zinc-50"}>
                  <td className="px-4 py-3 font-medium text-zinc-800">{r.audience}</td>
                  <td className="px-4 py-3 text-zinc-600">{r.services}</td>
                  <td className="px-4 py-3 text-zinc-600">{r.registerWith}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Official portals quick reference */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold tracking-tight">{sh.quickRefTitle[loc]}</h2>
        <div className="mt-4 overflow-hidden rounded-2xl border border-zinc-200">
          <table className="w-full border-collapse text-sm">
            <tbody>
              {sh.quickRef[loc].map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-zinc-50"}>
                  <th
                    scope="row"
                    className="w-1/2 px-4 py-3 text-left font-medium text-zinc-700"
                  >
                    {r.a}
                  </th>
                  <td className="w-1/2 px-4 py-3 text-zinc-600">{r.b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Long-form editorial */}
      {servicesLong.map((sec, i) => (
        <section key={i} className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight">{sec.title[loc]}</h2>
          <div className="mt-4 space-y-4 leading-relaxed text-zinc-600">
            {sec.body[loc].map((p, j) => (
              <p key={j}>{p}</p>
            ))}
          </div>
        </section>
      ))}

      {/* FAQ */}
      <div className="mt-12">
        <FaqSection title={t.common.faqTitle} faqs={sh.faqs[loc]} />
      </div>

      {/* Important links */}
      <ImportantLinks
        title={loc === "hi" ? "महत्वपूर्ण लिंक" : "Important Links"}
        rows={importantLinksForService(loc)}
      />

      {/* ponytail: DRAFT — dev-only. NODE_ENV is "production" during `next build`
          and on Cloudflare, so this never ships to prod or Google. Lets the
          editor review candidate service pages before they are built. */}
      {process.env.NODE_ENV !== "production" && (
        <section className="mt-14 rounded-2xl border-2 border-dashed border-amber-400 bg-amber-50/40 p-6">
          <p className="mb-1 text-xs font-bold uppercase tracking-wide text-amber-700">
            {loc === "hi"
              ? "ड्राफ्ट — केवल पूर्वावलोकन (Google पर प्रकाशित नहीं)"
              : "Draft — preview only (not published to Google)"}
          </p>
          <h2 className="text-xl font-semibold tracking-tight">
            {loc === "hi" ? "जोड़ने के लिए और सेवाएं" : "More services to add"}
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-zinc-600">
            {loc === "hi"
              ? `SSO और ई-मित्र से जुड़ी सेवाओं की योजना सूची। ⭐ = पहले बनाने योग्य प्राथमिकता पेज (${draftServicePriorityCount})। यह खंड केवल dev में दिखता है, production/Google में नहीं। असली पेज /service/[slug] रूट पर बनेंगे।`
              : `A planning list of SSO and e-Mitra services. ⭐ = priority pages to build first (${draftServicePriorityCount}). This block shows in dev only, not in production/Google. Real pages will live at the /service/[slug] route.`}
          </p>
          <div className="mt-5 space-y-8">
            {draftServiceGroups.map((group) => (
              <div key={group.category}>
                <h3 className="text-base font-semibold text-zinc-900">
                  {group.category}{" "}
                  <span className="text-xs font-normal text-zinc-500">
                    ({group.items.length})
                  </span>
                </h3>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((s) => (
                    <li
                      key={s.slug}
                      className="flex items-center gap-2 rounded-lg border border-amber-200 bg-white px-3 py-2 text-sm"
                    >
                      {s.priority && <span aria-hidden>⭐</span>}
                      <span className="font-medium text-zinc-800">{s.name}</span>
                      <code className="ml-auto text-xs text-zinc-400">
                        /service/{s.slug}
                      </code>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      <p className="mt-10 text-center text-sm text-zinc-500">
        {t.common.officialPortalNote}{" "}
        <a
          href={site.officialPortal}
          rel="nofollow noopener"
          className="text-amber-700 underline"
        >
          {site.officialPortal.replace("https://", "")}
        </a>
      </p>
    </div>
  );
}
