import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqSection } from "@/components/FaqSection";
import { scholarships } from "@/lib/content";
import { getDictionary, isLocale, locales, type Locale } from "@/lib/i18n";
import type { FaqItem } from "@/lib/schema";
import { getScholarshipsHub } from "@/data/scholarshipsHub";
import {
  alternates,
  breadcrumbSchema,
  buildGraph,
  canonicalFor,
  faqSchema,
  howToSchema,
  itemListSchema,
  socialMeta,
} from "@/lib/schema";

const intro = {
  en: [
    "All Rajasthan scholarships are applied for online with your SSO ID through the Social Justice & Empowerment (SJE) portal. The schemes below are grouped by category — SC, ST, OBC, EWS, and minority — but the application route is the same: log in, complete Jan Aadhaar e-KYC, fill the form, and upload your documents.",
    "Before applying, make sure your Jan Aadhaar income and family details are up to date, because scholarship eligibility is verified against them. Keep your income certificate, caste or category certificate, bank passbook, and latest marksheet ready as clear scans to avoid rejection.",
  ],
  hi: [
    "सभी राजस्थान छात्रवृत्तियों के लिए आवेदन आपकी एसएसओ आईडी से सामाजिक न्याय एवं अधिकारिता विभाग (SJE) पोर्टल के माध्यम से ऑनलाइन किया जाता है। नीचे दी योजनाएं श्रेणी अनुसार समूहित हैं — एससी, एसटी, ओबीसी, ईडब्ल्यूएस और अल्पसंख्यक — पर आवेदन का तरीका एक ही है: लॉगिन करें, जन आधार ई-केवाईसी पूरा करें, फॉर्म भरें और दस्तावेज़ अपलोड करें।",
    "आवेदन से पहले सुनिश्चित करें कि आपके जन आधार में आय और परिवार विवरण अद्यतन हैं, क्योंकि छात्रवृत्ति पात्रता इन्हीं से सत्यापित होती है। अस्वीकृति से बचने के लिए आय प्रमाण पत्र, जाति/श्रेणी प्रमाण पत्र, बैंक पासबुक और नवीनतम अंकतालिका की स्पष्ट स्कैन तैयार रखें।",
  ],
} as const;

const fallbackFaqs: Record<Locale, FaqItem[]> = {
  en: [
    { question: "How do I apply for a Rajasthan scholarship?", answer: "Log in at sso.rajasthan.gov.in, open the SJE scholarship portal, complete your Jan Aadhaar e-KYC, fill the application form, and upload the required documents." },
    { question: "Is Jan Aadhaar required for scholarships?", answer: "Yes. Income and family details for scholarships are verified through Jan Aadhaar e-KYC, so your Jan Aadhaar record must be up to date before you apply." },
    { question: "Are scholarship applications free?", answer: "Yes. Creating an SSO ID and applying for a scholarship on the official portal are both completely free." },
    { question: "How do I check my scholarship status?", answer: "After submitting, track your status (Pending / Approved / Rejected) from the scholarship section of your SSO dashboard." },
    { question: "What documents do I need?", answer: "Typically an income certificate, a caste or category certificate, your bank passbook, and your latest marksheet — uploaded as clear, readable scans." },
  ],
  hi: [
    { question: "राजस्थान छात्रवृत्ति के लिए आवेदन कैसे करें?", answer: "sso.rajasthan.gov.in पर लॉगिन करें, SJE छात्रवृत्ति पोर्टल खोलें, जन आधार ई-केवाईसी पूरा करें, आवेदन फॉर्म भरें और आवश्यक दस्तावेज़ अपलोड करें।" },
    { question: "क्या छात्रवृत्ति के लिए जन आधार जरूरी है?", answer: "हाँ। छात्रवृत्ति के लिए आय और परिवार विवरण जन आधार ई-केवाईसी से सत्यापित होते हैं, इसलिए आवेदन से पहले आपका जन आधार रिकॉर्ड अद्यतन होना चाहिए।" },
    { question: "क्या छात्रवृत्ति आवेदन मुफ़्त है?", answer: "हाँ। आधिकारिक पोर्टल पर एसएसओ आईडी बनाना और छात्रवृत्ति के लिए आवेदन करना — दोनों पूरी तरह मुफ़्त हैं।" },
    { question: "मैं अपनी छात्रवृत्ति स्थिति कैसे जांचूं?", answer: "आवेदन जमा करने के बाद अपनी एसएसओ डैशबोर्ड के छात्रवृत्ति सेक्शन से स्थिति (लंबित/स्वीकृत/अस्वीकृत) देखें।" },
    { question: "मुझे कौन से दस्तावेज़ चाहिए?", answer: "आमतौर पर आय प्रमाण पत्र, जाति या श्रेणी प्रमाण पत्र, बैंक पासबुक और नवीनतम अंकतालिका — स्पष्ट, पढ़ने योग्य स्कैन के रूप में अपलोड करें।" },
  ],
};

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
  const hub = getScholarshipsHub(locale);
  const title =
    hub?.metaTitle ??
    (locale === "hi"
      ? "राजस्थान छात्रवृत्ति 2026 — SSO आवेदन गाइड"
      : "Rajasthan Scholarships 2026 — SSO Application Guide");
  const description =
    hub?.metaDescription ??
    (locale === "hi"
      ? "एससी, एसटी, ओबीसी, ईडब्ल्यूएस और अल्पसंख्यक छात्रवृत्ति के लिए एसएसओ आईडी से आवेदन कैसे करें।"
      : "How to apply for SC, ST, OBC, EWS and Minority scholarships using your SSO ID.");
  return {
    title,
    description,
    alternates: {
      canonical: canonicalFor(locale, "/scholarships"),
      ...alternates("/scholarships"),
    },
    ...socialMeta({ locale, title, description, path: "/scholarships" }),
  };
}

export default async function ScholarshipsHub({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const loc = locale as Locale;
  const t = getDictionary(loc);
  const base = `/${loc}`;
  const hub = getScholarshipsHub(loc);

  const schemaItems = [
    breadcrumbSchema([
      { name: t.common.home, path: base },
      { name: t.nav.scholarships, path: `${base}/scholarships` },
    ]),
    itemListSchema(
      scholarships.map((s) => ({
        name: s.name[loc],
        path: `${base}/scholarship/${s.slug}`,
      })),
    ),
  ];
  if (hub) {
    for (const block of hub.blocks) {
      if (block.type === "steps") schemaItems.push(howToSchema(block.title, block.steps));
    }
    schemaItems.push(faqSchema(hub.faqs));
  } else {
    schemaItems.push(faqSchema(fallbackFaqs[loc]));
  }
  const graph = buildGraph(schemaItems);

  const categoryGrid = (
    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {scholarships.map((s) => (
        <Link
          key={s.slug}
          href={`${base}/scholarship/${s.slug}`}
          className="rounded-2xl border border-zinc-200 p-6 transition hover:border-amber-500 hover:shadow-sm"
        >
          <h2 className="text-lg font-semibold text-zinc-900">{s.name[loc]}</h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600">
            {s.eligibility[loc]}
          </p>
        </Link>
      ))}
    </div>
  );

  return (
    <div>
      <JsonLd data={graph} />
      <Breadcrumbs
        items={[{ name: t.common.home, href: base }, { name: t.nav.scholarships }]}
      />

      {hub ? (
        <>
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-amber-800">
                Official Portal
              </p>
              <p className="text-sm font-semibold text-zinc-800">{hub.portalNote}</p>
            </div>
            <a
              href={`https://${hub.portalNote}`}
              target="_blank"
              rel="noopener"
              className="rounded-full bg-amber-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-amber-800"
            >
              Visit Portal →
            </a>
          </div>

          <h1 className="mt-6 text-3xl font-bold tracking-tight">{hub.h1}</h1>
          <div className="mt-3 max-w-2xl space-y-3 text-lg text-zinc-600">
            {hub.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <p className="mt-2 text-sm text-zinc-500">
            {t.common.lastVerified}: {hub.lastVerified}
          </p>

          {/* Critical warning */}
          <div className="mt-6 rounded-2xl border border-red-200 bg-red-50/60 p-5">
            <p className="flex items-center gap-2 font-semibold text-red-900">
              <span aria-hidden>⚠</span> {hub.warning.title}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-red-900/90">
              {hub.warning.body}
            </p>
          </div>

          {/* Browse schemes by category */}
          {categoryGrid}

          {hub.blocks.map((block, i) => {
            if (block.type === "section") {
              return (
                <section key={i} className="mt-8">
                  <h2 className="text-2xl font-semibold tracking-tight">{block.title}</h2>
                  <div className="mt-4 space-y-4 leading-relaxed text-zinc-700">
                    {block.body.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                </section>
              );
            }
            if (block.type === "list") {
              return (
                <section key={i} className="mt-8">
                  <h2 className="text-2xl font-semibold tracking-tight">{block.title}</h2>
                  {block.intro && (
                    <p className="mt-4 leading-relaxed text-zinc-700">{block.intro}</p>
                  )}
                  <ul className="mt-4 space-y-2.5">
                    {block.items.map((item, j) => (
                      <li key={j} className="flex gap-2.5">
                        <span className="mt-1 text-amber-600">•</span>
                        <span className="text-zinc-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  {block.note && (
                    <p className="mt-4 rounded-xl bg-amber-50/70 px-4 py-3 text-sm leading-relaxed text-amber-900">
                      {block.note}
                    </p>
                  )}
                </section>
              );
            }
            if (block.type === "steps") {
              return (
                <section key={i} className="mt-8">
                  <h2 className="text-2xl font-semibold tracking-tight">{block.title}</h2>
                  <ol className="mt-4 space-y-3">
                    {block.steps.map((step, j) => (
                      <li key={j} className="flex gap-3">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-700 text-sm font-semibold text-white">
                          {j + 1}
                        </span>
                        <span className="pt-0.5 text-zinc-700">
                          <span className="font-medium text-zinc-900">{step.name}.</span>{" "}
                          {step.text}
                        </span>
                      </li>
                    ))}
                  </ol>
                </section>
              );
            }
            // table
            return (
              <section key={i} className="mt-8">
                <h2 className="text-2xl font-semibold tracking-tight">{block.title}</h2>
                <div className="mt-4 overflow-x-auto rounded-2xl border border-zinc-200 shadow-sm">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-zinc-900 text-left text-white">
                        {block.cols.map((c, j) => (
                          <th key={j} className="px-4 py-3 font-semibold">{c}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.rows.map((row, r) => (
                        <tr key={r} className={r % 2 === 0 ? "bg-white" : "bg-zinc-50"}>
                          {row.map((cell, c) => (
                            <td
                              key={c}
                              className={
                                c === 0
                                  ? "px-4 py-3 font-medium text-zinc-800"
                                  : "px-4 py-3 text-zinc-600"
                              }
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            );
          })}

          <FaqSection title={t.common.faqTitle} faqs={hub.faqs} />
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold tracking-tight">
            {loc === "hi" ? "राजस्थान छात्रवृत्ति" : "Rajasthan Scholarships"}
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-zinc-600">
            {loc === "hi"
              ? "श्रेणी अनुसार छात्रवृत्ति योजनाएं — सभी एसएसओ आईडी से ऑनलाइन आवेदन की जाती हैं।"
              : "Category-wise scholarship schemes — all applied for online with your SSO ID."}
          </p>
          {categoryGrid}
          <div className="mt-10 max-w-2xl space-y-4 leading-relaxed text-zinc-700">
            {intro[loc].map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <FaqSection title={t.common.faqTitle} faqs={fallbackFaqs[loc]} />
        </>
      )}
    </div>
  );
}
