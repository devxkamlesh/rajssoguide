import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DaysLeft } from "@/components/DaysLeft";
import { ExamCalendar } from "@/components/ExamCalendar";
import { FaqSection } from "@/components/FaqSection";
import { draftExamGroups } from "@/data/draftExams";
import { exams } from "@/lib/content";
import { getDictionary, isLocale, locales, type Locale } from "@/lib/i18n";
import type { FaqItem } from "@/lib/schema";
import {
  alternates,
  breadcrumbSchema,
  buildGraph,
  canonicalFor,
  faqSchema,
  itemListSchema,
  socialMeta,
} from "@/lib/schema";

const calendarFaqs: Record<Locale, FaqItem[]> = {
  en: [
    {
      question: "Do I need an SSO ID to apply for these exams?",
      answer:
        "Yes. RPSC, RSMSSB, and Patwari applications all run through the Recruitment Portal behind your Rajasthan SSO login. You complete a One-Time Registration (OTR) once and then apply to multiple exams in the same cycle.",
    },
    {
      question: "How early should I apply before the last date?",
      answer:
        "Apply at least a few days early. The portal gets heavy traffic in the final 48 hours before a deadline, and any registration issue — an OTP failure, a name mismatch, or a duplicate account — becomes urgent instead of a minor fix.",
    },
    {
      question: "Where can I confirm the official exam and application dates?",
      answer:
        "Always confirm dates on the official RPSC (rpsc.rajasthan.gov.in) and RSMSSB (rsmssb.rajasthan.gov.in) notifications. The dates on this page are indicative and are updated as the boards publish new schedules.",
    },
    {
      question: "Is the OTR fee paid once or for every exam?",
      answer:
        "The One-Time Registration fee is paid once per registration cycle. After OTR, you can apply to several RPSC and RSSB recruitments without paying a separate registration fee for each. Exam-specific application fees, if any, are set in each notification.",
    },
  ],
  hi: [
    {
      question: "क्या इन परीक्षाओं के आवेदन के लिए एसएसओ आईडी चाहिए?",
      answer:
        "हाँ। RPSC, RSMSSB और पटवारी के आवेदन आपकी राजस्थान एसएसओ लॉगिन के पीछे भर्ती पोर्टल से होते हैं। वन-टाइम रजिस्ट्रेशन (OTR) एक बार करें और उसी चक्र की कई परीक्षाओं में आवेदन करें।",
    },
    {
      question: "अंतिम तिथि से कितना पहले आवेदन करें?",
      answer:
        "कम से कम कुछ दिन पहले आवेदन करें। अंतिम 48 घंटों में पोर्टल पर भारी ट्रैफ़िक रहता है, और ओटीपी न आना, नाम का मेल न खाना या डुप्लिकेट अकाउंट जैसी कोई भी समस्या तब छोटी नहीं, बड़ी बन जाती है।",
    },
    {
      question: "आधिकारिक परीक्षा और आवेदन तिथियां कहाँ जांचें?",
      answer:
        "तिथियां हमेशा आधिकारिक RPSC (rpsc.rajasthan.gov.in) और RSMSSB (rsmssb.rajasthan.gov.in) अधिसूचना पर जांचें। इस पेज की तिथियां सांकेतिक हैं और बोर्ड द्वारा नई तिथियां जारी होने पर अपडेट होती हैं।",
    },
    {
      question: "OTR शुल्क एक बार लगता है या हर परीक्षा के लिए?",
      answer:
        "वन-टाइम रजिस्ट्रेशन शुल्क प्रति रजिस्ट्रेशन चक्र एक बार लगता है। OTR के बाद आप कई RPSC और RSSB भर्तियों में बिना हर बार अलग रजिस्ट्रेशन शुल्क दिए आवेदन कर सकते हैं। परीक्षा-विशिष्ट आवेदन शुल्क, यदि हो, हर अधिसूचना में तय होता है।",
    },
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
  const title =
    locale === "hi"
      ? "राजस्थान परीक्षा कैलेंडर 2026 — आवेदन व परीक्षा तिथियां"
      : "Rajasthan Exam Calendar 2026 — Application & Exam Dates";
  const description =
    locale === "hi"
      ? "राजस्थान सरकारी परीक्षाओं की आवेदन अंतिम तिथि, परीक्षा तिथि और शुल्क एक ही टेबल में।"
      : "Application last dates, exam dates and fees for Rajasthan government exams in one table.";
  return {
    title,
    description,
    alternates: {
      canonical: canonicalFor(locale, "/exam-calendar"),
      ...alternates("/exam-calendar"),
    },
    ...socialMeta({ locale, title, description, path: "/exam-calendar" }),
  };
}

const fmt = (iso: string, loc: Locale) =>
  new Date(iso).toLocaleDateString(loc === "hi" ? "hi-IN" : "en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

export default async function ExamCalendarPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const loc = locale as Locale;
  const t = getDictionary(loc);
  const base = `/${loc}`;

  const sorted = [...exams].sort((a, b) => a.lastDate.localeCompare(b.lastDate));

  const graph = buildGraph([
    breadcrumbSchema([
      { name: t.common.home, path: base },
      { name: t.nav.exams, path: `${base}/exams` },
      { name: loc === "hi" ? "परीक्षा कैलेंडर" : "Exam Calendar", path: `${base}/exam-calendar` },
    ]),
    itemListSchema(
      sorted.map((e) => ({ name: e.fullName[loc], path: `${base}/exam/${e.slug}` })),
    ),
    faqSchema(calendarFaqs[loc]),
  ]);

  return (
    <div>
      <JsonLd data={graph} />
      <Breadcrumbs
        items={[
          { name: t.common.home, href: base },
          { name: t.nav.exams, href: `${base}/exams` },
          { name: loc === "hi" ? "परीक्षा कैलेंडर" : "Exam Calendar" },
        ]}
      />
      <h1 className="text-3xl font-bold tracking-tight">
        {loc === "hi" ? "राजस्थान परीक्षा कैलेंडर 2026" : "Rajasthan Exam Calendar 2026"}
      </h1>
      <p className="mt-3 max-w-2xl text-lg text-zinc-600">
        {loc === "hi"
          ? "आवेदन की अंतिम तिथि, परीक्षा तिथि और OTR शुल्क — सभी प्रमुख परीक्षाओं के लिए एक नज़र में।"
          : "Application last date, exam date and OTR fee for all major exams at a glance."}
      </p>
      <p className="mt-4">
        <Link
          href={`${base}/exams`}
          className="inline-flex items-center gap-1 text-sm font-medium text-amber-700 hover:underline"
        >
          {loc === "hi"
            ? "← सभी परीक्षा गाइड देखें"
            : "← Browse all exam guides"}
        </Link>
      </p>

      {/* Visual calendar */}
      <div className="mt-8">
        <ExamCalendar exams={sorted} locale={loc} />
      </div>

      <h2 className="mt-10 text-xl font-semibold tracking-tight">
        {loc === "hi" ? "तिथि सूची" : "Date List"}
      </h2>
      <div className="mt-4 overflow-x-auto rounded-2xl border border-zinc-200">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-zinc-900 text-left text-white">
              <th className="px-4 py-3 font-semibold">{loc === "hi" ? "परीक्षा" : "Exam"}</th>
              <th className="px-4 py-3 font-semibold">{loc === "hi" ? "अंतिम तिथि" : "Last Date"}</th>
              <th className="px-4 py-3 font-semibold">{loc === "hi" ? "स्थिति" : "Status"}</th>
              <th className="px-4 py-3 font-semibold">{loc === "hi" ? "परीक्षा तिथि" : "Exam Date"}</th>
              <th className="px-4 py-3 font-semibold">{loc === "hi" ? "शुल्क" : "Fee"}</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((e, i) => (
              <tr key={e.slug} className={i % 2 === 0 ? "bg-white" : "bg-zinc-50"}>
                <td className="px-4 py-3">
                  <Link
                    href={`${base}/exam/${e.slug}`}
                    className="font-medium text-amber-700 hover:underline"
                  >
                    {e.fullName[loc]}
                  </Link>
                </td>
                <td className="px-4 py-3 text-zinc-700">{fmt(e.lastDate, loc)}</td>
                <td className="px-4 py-3">
                  <DaysLeft date={e.lastDate} locale={loc} />
                </td>
                <td className="px-4 py-3 text-zinc-700">
                  {e.examDate ? fmt(e.examDate, loc) : "—"}
                </td>
                <td className="px-4 py-3 text-zinc-700">₹{e.otrFee.general}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-xs text-zinc-400">
        {loc === "hi"
          ? "तिथियां सांकेतिक हैं। आधिकारिक अधिसूचना के लिए RPSC/RSSB वेबसाइट देखें।"
          : "Dates are indicative. Always confirm with the official RPSC/RSSB notification."}
      </p>

      {/* How the calendar works */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight">
          {loc === "hi" ? "यह कैलेंडर कैसे काम करता है" : "How this calendar works"}
        </h2>
        <div className="mt-3 max-w-2xl space-y-4 leading-relaxed text-zinc-700">
          <p>
            {loc === "hi"
              ? "यह टेबल राजस्थान की प्रमुख सरकारी परीक्षाओं की आवेदन अंतिम तिथि, परीक्षा तिथि और OTR शुल्क एक जगह रखती है। हर परीक्षा नाम पर क्लिक कर उसकी विस्तृत गाइड खोलें, जहाँ आवेदन के चरण और श्रेणी अनुसार शुल्क मिलते हैं। सभी आवेदन एसएसओ आईडी से भर्ती पोर्टल के ज़रिए होते हैं।"
              : "This table keeps the application last date, exam date, and OTR fee for Rajasthan's major government exams in one place. Click any exam name to open its full guide, with the application steps and category-wise fees. All applications go through the Recruitment Portal behind your SSO ID."}
          </p>
          <p>
            {loc === "hi"
              ? "'स्थिति' कॉलम अंतिम तिथि तक बचे दिन दिखाता है। बोर्ड नई अधिसूचना जारी करते ही तिथियां अपडेट की जाती हैं, पर भुगतान या आवेदन से पहले आधिकारिक अधिसूचना पर पुष्टि ज़रूर करें।"
              : "The 'Status' column shows how many days remain until the last date. Dates are updated as the boards publish new notifications, but always confirm on the official notification before you pay or apply."}
          </p>
        </div>
      </section>

      <FaqSection title={t.common.faqTitle} faqs={calendarFaqs[loc]} />

      {/* ponytail: DRAFT — dev-only. NODE_ENV is "production" during `next build`
          and on Cloudflare, so this block never ships to prod or Google. It lets
          the editor preview candidate exams at localhost before real pages exist. */}
      {process.env.NODE_ENV !== "production" && (
        <section className="mt-14 rounded-2xl border-2 border-dashed border-amber-400 bg-amber-50/40 p-6">
          <p className="mb-1 text-xs font-bold uppercase tracking-wide text-amber-700">
            {loc === "hi"
              ? "ड्राफ्ट — केवल पूर्वावलोकन (Google पर प्रकाशित नहीं)"
              : "Draft — preview only (not published to Google)"}
          </p>
          <h2 className="text-xl font-semibold tracking-tight">
            {loc === "hi"
              ? "जोड़ने के लिए और राजस्थान एसएसओ परीक्षाएं"
              : "More Rajasthan SSO exams to add"}
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-zinc-600">
            {loc === "hi"
              ? "केवल वे परीक्षाएं जिनके आवेदन एसएसओ भर्ती पोर्टल से होते हैं। JEE, NEET, SSC, UGC NET जैसी राष्ट्रीय परीक्षाएं जानबूझकर बाहर रखी गई हैं क्योंकि वे एसएसओ से नहीं जुड़ीं। यह खंड केवल dev में दिखता है और production/Google में शामिल नहीं होता।"
              : "Only exams applied through the SSO Recruitment Portal. National exams like JEE, NEET, SSC, and UGC NET are intentionally excluded because they are not SSO-linked. This block shows in dev only and is left out of the production build and Google."}
          </p>
          <div className="mt-5 space-y-8">
            {draftExamGroups.map((group) => (
              <div key={group.authority}>
                <h3 className="text-base font-semibold text-zinc-900">
                  {group.authority}
                </h3>
                <p className="text-xs text-zinc-500">
                  {loc === "hi" ? "पोर्टल: " : "Portal: "}
                  {group.portal} · {group.exams.length}{" "}
                  {loc === "hi" ? "परीक्षाएं" : "exams"}
                </p>
                <div className="mt-3 overflow-x-auto rounded-xl border border-amber-200 bg-white">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-zinc-900 text-left text-white">
                        <th className="px-4 py-2.5 font-semibold">{loc === "hi" ? "परीक्षा" : "Exam"}</th>
                        <th className="px-4 py-2.5 font-semibold">{loc === "hi" ? "श्रेणी" : "Category"}</th>
                        <th className="px-4 py-2.5 font-semibold">{loc === "hi" ? "लॉगिन" : "Login"}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {group.exams.map((d, i) => (
                        <tr key={d.name} className={i % 2 === 0 ? "bg-white" : "bg-amber-50/40"}>
                          <td className="px-4 py-2.5 font-medium text-zinc-800">{d.name}</td>
                          <td className="px-4 py-2.5 text-zinc-600">{d.category}</td>
                          <td className="px-4 py-2.5">
                            <span
                              className={
                                d.login === "Separate"
                                  ? "rounded bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600"
                                  : "rounded bg-green-100 px-2 py-0.5 text-xs text-green-700"
                              }
                            >
                              {d.login}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
