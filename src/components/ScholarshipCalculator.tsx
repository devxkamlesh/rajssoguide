"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";

const labels = {
  en: {
    category: "Category",
    income: "Annual family income (₹)",
    check: "Check eligibility",
    eligible: "Likely eligible",
    notEligible: "May not be eligible on income grounds",
    limitNote: "Indicative income limit for this category",
    note: "This is an indicative check only, based on common income slabs. Confirm the exact limit, documents, and last date on the official SJE portal before applying.",
    categories: {
      sc_st: "SC / ST",
      obc: "OBC / MBC",
      ews: "EWS",
      minority: "Minority",
    },
  },
  hi: {
    category: "श्रेणी",
    income: "वार्षिक पारिवारिक आय (₹)",
    check: "पात्रता जांचें",
    eligible: "संभवतः पात्र",
    notEligible: "आय के आधार पर पात्र नहीं हो सकते",
    limitNote: "इस श्रेणी के लिए संकेतक आय सीमा",
    note: "यह केवल संकेतक जांच है, सामान्य आय स्लैब पर आधारित। आवेदन से पहले सटीक सीमा, दस्तावेज़ और अंतिम तिथि आधिकारिक SJE पोर्टल पर देखें।",
    categories: {
      sc_st: "एससी / एसटी",
      obc: "ओबीसी / एमबीसी",
      ews: "ईडब्ल्यूएस",
      minority: "अल्पसंख्यक",
    },
  },
} as const;

// Indicative annual income limits (₹) used only for a rough eligibility hint.
const LIMITS: Record<string, number> = {
  sc_st: 250000,
  obc: 150000,
  ews: 800000,
  minority: 200000,
};

type Cat = keyof typeof LIMITS;

export function ScholarshipCalculator({ locale }: { locale: Locale }) {
  const t = labels[locale];
  const [category, setCategory] = useState<Cat>("sc_st");
  const [income, setIncome] = useState("");
  const [checked, setChecked] = useState(false);

  const limit = LIMITS[category];
  const value = Number(income);
  const eligible = income !== "" && value <= limit;

  return (
    <div className="max-w-md rounded-2xl border border-zinc-200 p-6">
      <div className="space-y-4">
        <label className="block">
          <span className="text-sm font-medium text-zinc-700">{t.category}</span>
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value as Cat);
              setChecked(false);
            }}
            className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2"
          >
            {(Object.keys(t.categories) as Cat[]).map((c) => (
              <option key={c} value={c}>
                {t.categories[c]}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="text-sm font-medium text-zinc-700">{t.income}</span>
          <input
            type="number"
            inputMode="numeric"
            min={0}
            value={income}
            onChange={(e) => {
              setIncome(e.target.value);
              setChecked(false);
            }}
            className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2"
          />
        </label>

        <p className="text-xs text-zinc-500">
          {t.limitNote}: ₹{limit.toLocaleString("en-IN")}
        </p>

        <button
          type="button"
          onClick={() => setChecked(true)}
          className="rounded-full bg-amber-700 px-5 py-2 text-sm font-semibold text-white transition hover:bg-amber-800"
        >
          {t.check}
        </button>

        {checked && income !== "" && (
          <div
            className={`rounded-xl p-4 text-center font-semibold ${
              eligible
                ? "bg-green-50 text-green-700"
                : "bg-red-50 text-red-700"
            }`}
          >
            {eligible ? t.eligible : t.notEligible}
          </div>
        )}

        <p className="text-xs text-zinc-400">{t.note}</p>
      </div>
    </div>
  );
}
