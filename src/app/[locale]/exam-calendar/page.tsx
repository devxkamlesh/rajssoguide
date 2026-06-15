import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DaysLeft } from "@/components/DaysLeft";
import { ExamCalendar } from "@/components/ExamCalendar";
import { exams } from "@/lib/content";
import { getDictionary, isLocale, locales, type Locale } from "@/lib/i18n";
import {
  alternates,
  breadcrumbSchema,
  buildGraph,
  canonicalFor,
  itemListSchema,
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
    title:
      locale === "hi"
        ? "राजस्थान परीक्षा कैलेंडर 2026 — आवेदन व परीक्षा तिथियां"
        : "Rajasthan Exam Calendar 2026 — Application & Exam Dates",
    description:
      locale === "hi"
        ? "राजस्थान सरकारी परीक्षाओं की आवेदन अंतिम तिथि, परीक्षा तिथि और शुल्क एक ही टेबल में।"
        : "Application last dates, exam dates and fees for Rajasthan government exams in one table.",
    alternates: {
      canonical: canonicalFor(locale, "/exam-calendar"),
      ...alternates("/exam-calendar"),
    },
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
    </div>
  );
}
