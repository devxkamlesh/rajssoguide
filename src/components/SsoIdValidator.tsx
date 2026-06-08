"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";

const labels = {
  en: {
    field: "Enter your SSO ID / username",
    check: "Check format",
    valid: "This looks like a valid SSO ID format.",
    invalid: "This does not match the usual SSO ID format.",
    rules: "Format rules",
    r1: "Length between 5 and 30 characters",
    r2: "Letters, numbers, dots, underscores or hyphens only",
    r3: "No spaces or special symbols",
    note: "This tool only checks the format on your device. It does not connect to the government portal or verify whether an account exists.",
  },
  hi: {
    field: "अपनी एसएसओ आईडी / यूज़रनेम दर्ज करें",
    check: "फॉर्मेट जांचें",
    valid: "यह एक मान्य एसएसओ आईडी फॉर्मेट जैसा दिखता है।",
    invalid: "यह सामान्य एसएसओ आईडी फॉर्मेट से मेल नहीं खाता।",
    rules: "फॉर्मेट नियम",
    r1: "लंबाई 5 से 30 अक्षरों के बीच",
    r2: "केवल अक्षर, अंक, डॉट, अंडरस्कोर या हाइफ़न",
    r3: "कोई स्पेस या विशेष चिह्न नहीं",
    note: "यह टूल केवल आपके डिवाइस पर फॉर्मेट जांचता है। यह सरकारी पोर्टल से कनेक्ट नहीं होता और न ही अकाउंट के अस्तित्व की पुष्टि करता है।",
  },
} as const;

const PATTERN = /^[A-Za-z0-9._-]{5,30}$/;

export function SsoIdValidator({ locale }: { locale: Locale }) {
  const t = labels[locale];
  const [value, setValue] = useState("");
  const [checked, setChecked] = useState(false);
  const ok = PATTERN.test(value);

  return (
    <div className="max-w-md rounded-2xl border border-zinc-200 p-6">
      <label className="block">
        <span className="text-sm font-medium text-zinc-700">{t.field}</span>
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setChecked(false);
          }}
          className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2"
        />
      </label>
      <button
        type="button"
        onClick={() => setChecked(true)}
        className="mt-3 rounded-full bg-amber-700 px-5 py-2 text-sm font-semibold text-white transition hover:bg-amber-800"
      >
        {t.check}
      </button>

      {checked && value && (
        <p
          className={`mt-3 text-sm font-medium ${ok ? "text-green-700" : "text-red-600"}`}
        >
          {ok ? t.valid : t.invalid}
        </p>
      )}

      <div className="mt-4 border-t border-zinc-200 pt-4">
        <p className="text-sm font-medium text-zinc-700">{t.rules}</p>
        <ul className="mt-2 list-inside list-disc text-sm text-zinc-600">
          <li>{t.r1}</li>
          <li>{t.r2}</li>
          <li>{t.r3}</li>
        </ul>
      </div>
      <p className="mt-4 text-xs text-zinc-400">{t.note}</p>
    </div>
  );
}
