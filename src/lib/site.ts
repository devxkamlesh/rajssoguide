// Central site configuration. Single source of truth for URLs, brand, author.
export const site = {
  name: "RajSSO Guide",
  domain: "rajssoidguide.in",
  url: "https://rajssoidguide.in",
  tagline: {
    en: "SSO ID Rajasthan — Login, Registration & Services Guide",
    hi: "एसएसओ आईडी राजस्थान — लॉगिन, रजिस्ट्रेशन और सेवाएं गाइड",
  },
  description: {
    en: "Independent step-by-step guide to Rajasthan SSO ID login, registration, recovery, and linked services like PayManager, RajKaj, Jan Aadhaar and government exams.",
    hi: "राजस्थान एसएसओ आईडी लॉगिन, रजिस्ट्रेशन, रिकवरी और PayManager, RajKaj, जन आधार व सरकारी परीक्षाओं की स्टेप-बाय-स्टेप गाइड।",
  },
  // We are an INDEPENDENT guide, not the official portal.
  officialPortal: "https://sso.rajasthan.gov.in",
  // Direct sign-in page on the official portal (used by the SSO login guide CTA).
  officialSignin: "https://sso.rajasthan.gov.in/signin",
  officialHelpdesk: {
    phone: "0141-5153222",
    email: "helpdesk.sso@rajasthan.gov.in",
  },
  contactEmail: "contact@rajssoidguide.in",
  // Purpose-specific inboxes.
  emails: {
    contact: "contact@rajssoidguide.in", // general user queries
    editor: "editor@rajssoidguide.in", // editorial / content corrections
    legal: "legal@rajssoidguide.in", // legal notices, terms, takedown/DMCA
    privacy: "privacy@rajssoidguide.in", // privacy / data requests (GDPR / India DPDP)
    grievance: "grievance@rajssoidguide.in", // Grievance Officer (India IT Rules 2021)
  },
  contactWhatsApp: "919257241205",
  established: "2024",
  geo: {
    region: "IN-RJ",
    placename: "Jaipur, Rajasthan, India",
    position: "26.9124;75.7873",
    icbm: "26.9124, 75.7873",
  },
  author: {
    name: "RajSSO Guide Editorial Team",
    url: "https://rajssoidguide.in/about",
  },
  social: {
    twitter: "@devxkamlesh",
  },
  locale: {
    default: "en" as const,
  },
  assets: {
    logoSquare: "/RajSSO/logo-square.png",
    logoHorizontal: "/RajSSO/logo-horizontal.webp",
    hero: "/RajSSO/hero-banner.webp",
    ogImage: {
      en: "/RajSSO/sso-id-rajasthan-2026-og-image-en.webp",
      hi: "/RajSSO/sso-id-rajasthan-2026-og-image-hi.webp",
    },
    favicons: {
      ico: "/RajSSO/favicon_io/favicon.ico",
      icon16: "/RajSSO/favicon_io/favicon-16x16.png",
      icon32: "/RajSSO/favicon_io/favicon-32x32.png",
      icon192: "/RajSSO/favicon_io/android-chrome-192x192.png",
      icon512: "/RajSSO/favicon_io/android-chrome-512x512.png",
      apple: "/RajSSO/favicon_io/apple-touch-icon.png",
      manifest: "/RajSSO/favicon_io/site.webmanifest",
    },
  },
} as const;

export type SiteConfig = typeof site;
