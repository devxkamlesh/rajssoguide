"use client";

import { useState } from "react";
import type { Exam } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

const labels = {
  en: {
    exam: "Select exam",
    category: "Category",
    general: "General / OBC",
    sc_st: "SC / ST / PwD",
    fee: "Estimated OTR fee",
    note: "Indicative fee based on the latest published OTR structure. Always confirm on the official portal.",
  },
  hi: {
    exam: "परीक्षा चुनें",
    category: "श्रेणी",
    general: "सामान्य / ओबीसी",
    sc_st: "एससी / एसटी / दिव्यांग",
    fee: "अनुमानित ओटीआर फीस",
    note: "नवीनतम प्रकाशित ओटीआर संरचना पर आधारित संकेतक फीस। हमेशा आधिकारिक पोर्टल पर पुष्टि करें।",
  },
} as const;

export function OtrFeeCalculator({
  exams,
  locale,
}: {
  exams: Exam[];
  locale: Locale;
}) {
  const t = labels[locale];
  const [slug, setSlug] = useState(exams[0]?.slug ?? "");
  const [category, setCategory] = useState<"general" | "sc_st">("general");

  const exam = exams.find((e) => e.slug === slug);
  const fee = exam ? exam.otrFee[category] : 0;

  return (
    <div className="max-w-md rounded-2xl border border-zinc-200 p-6">
      <div className="space-y-4">
        <label className="block">
          <span className="text-sm font-medium text-zinc-700">{t.exam}</span>
          <select
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2"
          >
            {exams.map((e) => (
              <option key={e.slug} value={e.slug}>
                {e.name[locale]}
              </option>
            ))}
          </select>
        </label>

        <fieldset>
          <span className="text-sm font-medium text-zinc-700">
            {t.category}
          </span>
          <div className="mt-2 flex gap-2">
            {(["general", "sc_st"] as const).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={`flex-1 rounded-lg border px-3 py-2 text-sm ${
                  category === cat
                    ? "border-amber-600 bg-amber-50 font-medium text-amber-700"
                    : "border-zinc-300 text-zinc-600"
                }`}
              >
                {t[cat]}
              </button>
            ))}
          </div>
        </fieldset>

        <div className="rounded-xl bg-amber-50 p-4 text-center">
          <p className="text-sm text-zinc-500">{t.fee}</p>
          <p className="text-3xl font-bold text-amber-700">₹{fee}</p>
        </div>
        <p className="text-xs text-zinc-400">{t.note}</p>
      </div>
    </div>
  );
}
