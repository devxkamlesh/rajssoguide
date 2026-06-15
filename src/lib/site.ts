// Central site configuration. Single source of truth for URLs, brand, author.
export const site = {
  name: "RajSSO Guide",
  domain: "rajssoguide.in",
  url: "https://rajssoguide.in",
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
  officialHelpdesk: {
    phone: "0141-5153222",
    email: "helpdesk.sso@rajasthan.gov.in",
  },
  contactEmail: "contact@rajssoguide.in",
  contactWhatsApp: "919257241205",
  established: "2024",
  author: {
    name: "RajSSO Guide Editorial Team",
    url: "https://rajssoguide.in/about",
  },
  social: {
    twitter: "@rajssoguide",
  },
  locale: {
    default: "en" as const,
  },
  assets: {
    logoSquare: "/RajSSO/logo-square.png",
    logoHorizontal: "/RajSSO/logo-horizontal.png",
    hero: "/RajSSO/hero-banner.webp",
    ogImage: {
      en: "/RajSSO/og-image.webp",
      hi: "/RajSSO/og-image-hi.webp",
    },
    favicons: {
      ico: "/RajSSO/favicon_io/favicon.ico",
      icon16: "/RajSSO/favicon_io/favicon-16x16.png",
      icon32: "/RajSSO/favicon_io/favicon-32x32.png",
      apple: "/RajSSO/favicon_io/apple-touch-icon.png",
      manifest: "/RajSSO/favicon_io/site.webmanifest",
    },
  },
} as const;

export type SiteConfig = typeof site;
