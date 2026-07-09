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

// Each entry points to a real page on this site. Titles stay honest — we do
// not publish unverified deadlines here; exam/scholarship dates live on their
// own pages and are confirmed against the official notification.
export const updates: Update[] = [
  {
    date: "2026-07-08",
    title: {
      en: "New guide: SSO ID Portal — services, dashboard & how to access",
      hi: "नई गाइड: एसएसओ आईडी पोर्टल — सेवाएं, डैशबोर्ड और एक्सेस कैसे करें",
    },
    href: "/sso-id-portal",
    tag: "general",
  },
  {
    date: "2026-07-08",
    title: {
      en: "New guide: SSO ID Helpdesk & customer care numbers",
      hi: "नई गाइड: एसएसओ आईडी हेल्पडेस्क और कस्टमर केयर नंबर",
    },
    href: "/sso-id-helpdesk",
    tag: "general",
  },
  {
    date: "2026-07-06",
    title: {
      en: "New service guides added for RajKaj and Jan Aadhaar",
      hi: "RajKaj और जन आधार के लिए नई सेवा गाइड जोड़ी गईं",
    },
    href: "/service/rajkaj",
    tag: "service",
  },
  {
    date: "2026-07-06",
    title: {
      en: "New fix guides: OTP not arriving, session timeout, name mismatch",
      hi: "नई समाधान गाइड: ओटीपी न आना, सेशन टाइमआउट, नाम मेल न खाना",
    },
    href: "/error/otp-not-received",
    tag: "general",
  },
  {
    date: "2026-06-10",
    title: {
      en: "RPSC CET 2026 — how to apply via SSO (OTR), fees & steps",
      hi: "RPSC CET 2026 — SSO से आवेदन (OTR), शुल्क और चरण",
    },
    href: "/exam/rpsc-cet",
    tag: "exam",
  },
  {
    date: "2026-06-05",
    title: {
      en: "RSMSSB LDC 2026 — SSO application & OTR guide",
      hi: "RSMSSB LDC 2026 — SSO आवेदन और OTR गाइड",
    },
    href: "/exam/rsmssb-ldc",
    tag: "exam",
  },
  {
    date: "2026-05-28",
    title: {
      en: "Rajasthan Patwari 2026 — how to apply via SSO",
      hi: "राजस्थान पटवारी 2026 — SSO से आवेदन कैसे करें",
    },
    href: "/exam/patwari",
    tag: "exam",
  },
  {
    date: "2026-05-20",
    title: {
      en: "Post-matric scholarships — how to apply via SSO (SC/ST/OBC/EWS/Minority)",
      hi: "पोस्ट-मैट्रिक छात्रवृत्ति — SSO से आवेदन कैसे करें (SC/ST/OBC/EWS/अल्पसंख्यक)",
    },
    href: "/scholarships",
    tag: "scholarship",
  },
  {
    date: "2026-05-12",
    title: {
      en: "PayManager — download your salary slip & GA-55",
      hi: "PayManager — अपनी सैलरी स्लिप और GA-55 डाउनलोड करें",
    },
    href: "/service/paymanager",
    tag: "service",
  },
  {
    date: "2026-05-02",
    title: {
      en: "Jan Aadhaar e-KYC & family record updates through SSO",
      hi: "SSO से जन आधार ई-केवाईसी और परिवार रिकॉर्ड अपडेट",
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
