// Dated "Latest Updates" feed — powers the homepage table and /updates hub.
// Add newest entries at the TOP. `date` is ISO (YYYY-MM-DD).
// `href` is a path WITHOUT the locale prefix (e.g. "/exam/rpsc-cet"),
// or a full URL when `external` is true.
import type { Locale } from "@/lib/i18n";

export type UpdateTag = "exam" | "scholarship" | "service" | "general";

export interface Update {
  date: string;
  title: Record<Locale, string>;
  href: string;
  external?: boolean;
  tag: UpdateTag;
}

export const updates: Update[] = [
  {
    date: "2026-06-10",
    title: {
      en: "RPSC CET 2026 — OTR application open, last date 31 July",
      hi: "RPSC CET 2026 — OTR आवेदन शुरू, अंतिम तिथि 31 जुलाई",
    },
    href: "/exam/rpsc-cet",
    tag: "exam",
  },
  {
    date: "2026-06-05",
    title: {
      en: "RSMSSB LDC 2026 exam scheduled for 5–6 July",
      hi: "RSMSSB LDC 2026 परीक्षा 5–6 जुलाई को निर्धारित",
    },
    href: "/exam/rsmssb-ldc",
    tag: "exam",
  },
  {
    date: "2026-05-28",
    title: {
      en: "Rajasthan Patwari 2026 — apply via SSO before 10 September",
      hi: "राजस्थान पटवारी 2026 — 10 सितंबर से पहले SSO से आवेदन करें",
    },
    href: "/exam/patwari",
    tag: "exam",
  },
  {
    date: "2026-05-20",
    title: {
      en: "Post-matric scholarship portal open for SC/ST/OBC students",
      hi: "एससी/एसटी/ओबीसी छात्रों के लिए पोस्ट-मैट्रिक छात्रवृत्ति पोर्टल खुला",
    },
    href: "/scholarships",
    tag: "scholarship",
  },
  {
    date: "2026-05-12",
    title: {
      en: "PayManager salary slip download enabled for June",
      hi: "PayManager जून सैलरी स्लिप डाउनलोड सक्षम",
    },
    href: "/service/paymanager",
    tag: "service",
  },
  {
    date: "2026-05-02",
    title: {
      en: "Jan Aadhaar e-KYC now mandatory for scholarship forms",
      hi: "छात्रवृत्ति फॉर्म के लिए जन आधार ई-केवाईसी अब अनिवार्य",
    },
    href: "/service/jan-aadhaar",
    tag: "service",
  },
];

// Newest first.
export const sortedUpdates = [...updates].sort((a, b) =>
  b.date.localeCompare(a.date),
);

// An update is "new" if posted within the last 21 days of the build.
export function isRecent(date: string, days = 21): boolean {
  const diff = Date.now() - new Date(date).getTime();
  return diff >= 0 && diff <= days * 24 * 60 * 60 * 1000;
}
