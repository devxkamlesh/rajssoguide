"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";

const labels = {
  en: {
    dob: "Date of birth",
    asOf: "Calculate age as of",
    calc: "Calculate age",
    result: "Your age",
    years: "years",
    months: "months",
    days: "days",
    invalid: "Please enter a date of birth that is not in the future.",
  },
  hi: {
    dob: "जन्म तिथि",
    asOf: "इस तिथि के अनुसार आयु",
    calc: "आयु जानें",
    result: "आपकी आयु",
    years: "वर्ष",
    months: "माह",
    days: "दिन",
    invalid: "कृपया ऐसी जन्म तिथि दर्ज करें जो भविष्य में न हो।",
  },
} as const;

function diff(from: Date, to: Date) {
  let years = to.getFullYear() - from.getFullYear();
  let months = to.getMonth() - from.getMonth();
  let days = to.getDate() - from.getDate();
  if (days < 0) {
    months -= 1;
    days += new Date(to.getFullYear(), to.getMonth(), 0).getDate();
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }
  return { years, months, days };
}

export function AgeCalculator({ locale }: { locale: Locale }) {
  const t = labels[locale];
  const today = new Date().toISOString().slice(0, 10);
  const [dob, setDob] = useState("");
  const [asOf, setAsOf] = useState(today);

  const from = dob ? new Date(dob) : null;
  const to = new Date(asOf);
  const valid = from && from <= to;
  const r = valid ? diff(from, to) : null;

  return (
    <div className="max-w-md rounded-2xl border border-zinc-200 p-6">
      <div className="space-y-4">
        <label className="block">
          <span className="text-sm font-medium text-zinc-700">{t.dob}</span>
          <input
            type="date"
            value={dob}
            max={today}
            onChange={(e) => setDob(e.target.value)}
            className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-zinc-700">{t.asOf}</span>
          <input
            type="date"
            value={asOf}
            onChange={(e) => setAsOf(e.target.value)}
            className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2"
          />
        </label>

        {dob && !valid && (
          <p className="text-sm text-red-600">{t.invalid}</p>
        )}
        {r && (
          <div className="rounded-xl bg-amber-50 p-4 text-center">
            <p className="text-sm text-zinc-500">{t.result}</p>
            <p className="text-2xl font-bold text-amber-700">
              {r.years} {t.years} {r.months} {t.months} {r.days} {t.days}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
