"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";

const OFFICIAL = "https://janaadhaar.rajasthan.gov.in";

const labels = {
  en: {
    field: "Jan Aadhaar / Enrolment / Receipt number",
    check: "Check format & open portal",
    valid: "Format looks valid. Continue on the official portal below.",
    invalid: "Enter a 7 to 16 digit number (digits only).",
    open: "Open official Jan Aadhaar status page ↗",
    stepsTitle: "How to check your status",
    steps: [
      "Log in to sso.rajasthan.gov.in and open the Jan Aadhaar icon, or go to the official Jan Aadhaar portal.",
      "Select 'Enrolment Status' or 'Check Status'.",
      "Enter your Jan Aadhaar / enrolment / receipt number.",
      "View the status — a green tick means approved, a red cross means re-upload a clearer document.",
    ],
    note: "This tool only checks the number format on your device. It does not connect to the government database. Use the official portal for the real status.",
  },
  hi: {
    field: "जन आधार / नामांकन / रसीद संख्या",
    check: "फॉर्मेट जांचें और पोर्टल खोलें",
    valid: "फॉर्मेट मान्य लगता है। नीचे आधिकारिक पोर्टल पर जारी रखें।",
    invalid: "7 से 16 अंकों की संख्या दर्ज करें (केवल अंक)।",
    open: "आधिकारिक जन आधार स्थिति पेज खोलें ↗",
    stepsTitle: "स्थिति कैसे जांचें",
    steps: [
      "sso.rajasthan.gov.in पर लॉगिन कर जन आधार आइकन खोलें, या आधिकारिक जन आधार पोर्टल पर जाएं।",
      "'Enrolment Status' या 'Check Status' चुनें।",
      "अपनी जन आधार / नामांकन / रसीद संख्या दर्ज करें।",
      "स्थिति देखें — हरा टिक स्वीकृत, लाल क्रॉस का अर्थ स्पष्ट दस्तावेज़ पुनः अपलोड करें।",
    ],
    note: "यह टूल केवल आपके डिवाइस पर संख्या का फॉर्मेट जांचता है। यह सरकारी डेटाबेस से कनेक्ट नहीं होता। वास्तविक स्थिति के लिए आधिकारिक पोर्टल का उपयोग करें।",
  },
} as const;

const PATTERN = /^\d{7,16}$/;

export function JanAadhaarStatusChecker({ locale }: { locale: Locale }) {
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
          inputMode="numeric"
          value={value}
          onChange={(e) => {
            setValue(e.target.value.replace(/\s/g, ""));
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
        <div className="mt-3">
          <p
            className={`text-sm font-medium ${ok ? "text-green-700" : "text-red-600"}`}
          >
            {ok ? t.valid : t.invalid}
          </p>
          {ok && (
            <a
              href={OFFICIAL}
              target="_blank"
              rel="noopener"
              className="mt-2 inline-block text-sm font-semibold text-amber-700 underline"
            >
              {t.open}
            </a>
          )}
        </div>
      )}

      <div className="mt-4 border-t border-zinc-200 pt-4">
        <p className="text-sm font-medium text-zinc-700">{t.stepsTitle}</p>
        <ol className="mt-2 list-inside list-decimal space-y-1 text-sm text-zinc-600">
          {t.steps.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ol>
      </div>
      <p className="mt-4 text-xs text-zinc-400">{t.note}</p>
    </div>
  );
}
