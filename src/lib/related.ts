// Builds contextual "related links" for content pages to raise
// pages-per-session and strengthen internal linking.
import type { Locale } from "./i18n";
import type { RelatedLink } from "@/components/RelatedLinks";
import type { ImportantLinkRow } from "@/components/ImportantLinks";
import { exams, services, scholarships } from "./content";
import { site } from "./site";

const L = (loc: Locale, en: string, hi: string) => (loc === "hi" ? hi : en);

export function relatedForExam(slug: string, loc: Locale): RelatedLink[] {
  const base = `/${loc}`;
  const others = exams
    .filter((e) => e.slug !== slug)
    .slice(0, 2)
    .map((e) => ({ href: `${base}/exam/${e.slug}`, label: e.fullName[loc] }));
  return [
    {
      href: `${base}/tools/otr-fee-calculator`,
      label: L(loc, "OTR Fee Calculator", "OTR फीस कैलकुलेटर"),
      desc: L(loc, "Check category-wise fees", "श्रेणी अनुसार शुल्क देखें"),
    },
    {
      href: `${base}/sso-id-registration`,
      label: L(loc, "SSO ID Registration", "एसएसओ आईडी रजिस्ट्रेशन"),
      desc: L(loc, "Create your account first", "पहले खाता बनाएं"),
    },
    ...others,
  ];
}

export function relatedForService(slug: string, loc: Locale): RelatedLink[] {
  const base = `/${loc}`;
  const others = services
    .filter((s) => s.slug !== slug)
    .slice(0, 2)
    .map((s) => ({ href: `${base}/service/${s.slug}`, label: s.name[loc] }));
  return [
    {
      href: `${base}/sso-id-login`,
      label: L(loc, "SSO Login Guide", "एसएसओ लॉगिन गाइड"),
      desc: L(loc, "How to sign in", "लॉगिन कैसे करें"),
    },
    { href: `${base}/services`, label: L(loc, "All Services", "सभी सेवाएं") },
    ...others,
  ];
}

export function relatedForCity(loc: Locale): RelatedLink[] {
  const base = `/${loc}`;
  return [
    {
      href: `${base}/sso-id-registration`,
      label: L(loc, "SSO Registration", "एसएसओ रजिस्ट्रेशन"),
      desc: L(loc, "Create a new SSO ID", "नई एसएसओ आईडी बनाएं"),
    },
    { href: `${base}/exams`, label: L(loc, "Government Exams", "सरकारी परीक्षाएं") },
    { href: `${base}/cities`, label: L(loc, "Other Cities", "अन्य शहर") },
  ];
}

export function relatedForScholarship(slug: string, loc: Locale): RelatedLink[] {
  const base = `/${loc}`;
  const others = scholarships
    .filter((s) => s.slug !== slug)
    .slice(0, 2)
    .map((s) => ({ href: `${base}/scholarship/${s.slug}`, label: s.name[loc] }));
  return [
    {
      href: `${base}/tools/scholarship-calculator`,
      label: L(loc, "Scholarship Calculator", "छात्रवृत्ति कैलकुलेटर"),
      desc: L(loc, "Check eligibility", "पात्रता जांचें"),
    },
    { href: `${base}/scholarships`, label: L(loc, "All Scholarships", "सभी छात्रवृत्ति") },
    ...others,
  ];
}

export function relatedForGuide(slug: string, loc: Locale): RelatedLink[] {
  const base = `/${loc}`;
  const all = [
    { slug: "sso-id-login", en: "SSO Login", hi: "एसएसओ लॉगिन" },
    { slug: "sso-id-registration", en: "SSO Registration", hi: "एसएसओ रजिस्ट्रेशन" },
    { slug: "forgot-sso-id", en: "Forgot SSO ID", hi: "एसएसओ आईडी भूल गए" },
    { slug: "merge-sso-id", en: "Merge SSO ID", hi: "एसएसओ आईडी मर्ज" },
  ];
  return all
    .filter((g) => g.slug !== slug)
    .map((g) => ({ href: `${base}/${g.slug}`, label: L(loc, g.en, g.hi) }));
}

// Sarkari-style "Important Links" action box for an exam page.
export function importantLinksForExam(loc: Locale): ImportantLinkRow[] {
  const base = `/${loc}`;
  return [
    {
      label: L(loc, "SSO Login", "एसएसओ लॉगिन"),
      actions: [
        { text: L(loc, "Login Guide", "लॉगिन गाइड"), href: `${base}/sso-id-login` },
        { text: L(loc, "Official Portal", "आधिकारिक पोर्टल"), href: site.officialPortal, external: true },
      ],
    },
    {
      label: L(loc, "One-Time Registration (OTR)", "वन-टाइम रजिस्ट्रेशन (OTR)"),
      actions: [
        { text: L(loc, "Registration Guide", "रजिस्ट्रेशन गाइड"), href: `${base}/sso-id-registration` },
        { text: L(loc, "Recruitment Portal", "भर्ती पोर्टल"), href: "https://recruitment.rajasthan.gov.in", external: true },
      ],
    },
    {
      label: L(loc, "Check Fees", "शुल्क जांचें"),
      actions: [
        { text: L(loc, "OTR Fee Calculator", "OTR फीस कैलकुलेटर"), href: `${base}/tools/otr-fee-calculator` },
      ],
    },
    {
      label: L(loc, "All Exams", "सभी परीक्षाएं"),
      actions: [
        { text: L(loc, "View Exam List", "परीक्षा सूची देखें"), href: `${base}/exams` },
      ],
    },
  ];
}

// "Important Links" box for a service page.
export function importantLinksForService(loc: Locale): ImportantLinkRow[] {
  const base = `/${loc}`;
  return [
    {
      label: L(loc, "SSO Login", "एसएसओ लॉगिन"),
      actions: [
        { text: L(loc, "Login Guide", "लॉगिन गाइड"), href: `${base}/sso-id-login` },
        { text: L(loc, "Official Portal", "आधिकारिक पोर्टल"), href: site.officialPortal, external: true },
      ],
    },
    {
      label: L(loc, "New User", "नया उपयोगकर्ता"),
      actions: [
        { text: L(loc, "Registration Guide", "रजिस्ट्रेशन गाइड"), href: `${base}/sso-id-registration` },
      ],
    },
    {
      label: L(loc, "All Services", "सभी सेवाएं"),
      actions: [
        { text: L(loc, "View Service List", "सेवा सूची देखें"), href: `${base}/services` },
      ],
    },
  ];
}

// "Important Links" box for a scholarship page.
export function importantLinksForScholarship(loc: Locale): ImportantLinkRow[] {
  const base = `/${loc}`;
  return [
    {
      label: L(loc, "Apply / Login", "आवेदन / लॉगिन"),
      actions: [
        { text: L(loc, "SSO Login Guide", "एसएसओ लॉगिन गाइड"), href: `${base}/sso-id-login` },
        { text: L(loc, "SJE Portal", "SJE पोर्टल"), href: "https://sje.rajasthan.gov.in", external: true },
      ],
    },
    {
      label: L(loc, "Check Eligibility", "पात्रता जांचें"),
      actions: [
        { text: L(loc, "Scholarship Calculator", "छात्रवृत्ति कैलकुलेटर"), href: `${base}/tools/scholarship-calculator` },
      ],
    },
    {
      label: L(loc, "All Scholarships", "सभी छात्रवृत्ति"),
      actions: [
        { text: L(loc, "View Scholarship List", "छात्रवृत्ति सूची देखें"), href: `${base}/scholarships` },
      ],
    },
  ];
}

// "Important Links" box for a core guide page.
export function importantLinksForGuide(loc: Locale): ImportantLinkRow[] {
  const base = `/${loc}`;
  return [
    {
      label: L(loc, "Official Portal", "आधिकारिक पोर्टल"),
      actions: [
        { text: "sso.rajasthan.gov.in", href: site.officialPortal, external: true },
      ],
    },
    {
      label: L(loc, "More Guides", "अधिक गाइड्स"),
      actions: [
        { text: L(loc, "All Guides", "सभी गाइड्स"), href: `${base}/guides` },
        { text: L(loc, "Tools", "टूल्स"), href: `${base}/tools` },
      ],
    },
    {
      label: L(loc, "SSO Helpdesk", "एसएसओ हेल्पडेस्क"),
      actions: [
        { text: "0141-5153222", href: "tel:01415153222", external: true },
      ],
    },
  ];
}
