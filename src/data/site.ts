export interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

export const SITE = {
  name: "SSO ID Guide",
  shortName: "RajSSO Guide",
  domain: "rajssoidguide.in",
  url: "https://rajssoidguide.in",
  titleTemplate: "%s — SSO ID Rajasthan",
  defaultTitle: "SSO ID Rajasthan 2026 — SSO Portal, SSO ID Login & Registration",
  defaultDescription:
    "Complete independent guide to SSO ID Rajasthan (sso.rajasthan.gov.in). Learn step-by-step SSO ID login, online registration, password recovery, Jan Aadhaar e-KYC, and 100+ portal services.",
  officialPortalUrl: "https://sso.rajasthan.gov.in",
  officialLoginUrl: "https://sso.rajasthan.gov.in/signin",
  officialRegisterUrl: "https://sso.rajasthan.gov.in/register",
  officialForgotUrl: "https://sso.rajasthan.gov.in/forgotsd",
  officialEmitraUrl: "https://emitra.rajasthan.gov.in",
  lastUpdated: "2026-09-16",
  lastVerifiedLabel: "Verified September 16, 2026",
  
  author: {
    name: "Kamlesh Choudhary",
    title: "Lead Digital Identity Researcher & Web Developer",
    url: "https://devxkamlesh.com",
  },

  support: {
    helplineTollFree: "1800 180 6127",
    generalHelpline: "0141-5153222",
    generalHelplineAlt: "0141-2925554",
    cmHelpline: "181",
    email: "helpdesk.sso@rajasthan.gov.in",
    hours: "Monday – Friday, 10:00 AM – 6:00 PM IST",
    smsNumber: "9223166166",
    smsFormat: "RJ SSO",
  },

  disclaimer:
    "RajSSO Guide (rajssoidguide.in) is an independent public information portal created to simplify digital governance navigation. We are NOT affiliated with, authorized by, or associated with the Government of Rajasthan or DoIT&C. All official logins, registrations, and personal documents must be processed directly on the official state portal at sso.rajasthan.gov.in.",
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Login Guide", href: "/sso-id-login" },
  { label: "Registration", href: "/sso-id-registration" },
  { label: "Password Recovery", href: "/forgot-sso-id" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_LINKS = {
  guides: [
    { label: "SSO ID Login Guide", href: "/sso-id-login" },
    { label: "SSO Registration (Citizen/Govt)", href: "/sso-id-registration" },
    { label: "Forgot SSO ID & Password", href: "/forgot-sso-id" },
    { label: "Jan Aadhaar Update via SSO", href: "/#jan-aadhaar-update" },
    { label: "Merge Duplicate SSO IDs", href: "/#merge-duplicate-sso" },
    { label: "OTR Recruitment Registration", href: "/#recruitment-otr" },
  ],
  official: [
    { label: "SSO Rajasthan Portal", href: "https://sso.rajasthan.gov.in", isExternal: true },
    { label: "Official Sign-In Page", href: "https://sso.rajasthan.gov.in/signin", isExternal: true },
    { label: "Official Registration", href: "https://sso.rajasthan.gov.in/register", isExternal: true },
    { label: "e-Mitra Rajasthan", href: "https://emitra.rajasthan.gov.in", isExternal: true },
    { label: "Jan Aadhaar Yojana", href: "https://janaadhaar.rajasthan.gov.in", isExternal: true },
  ],
  company: [
    { label: "About This Guide", href: "/about" },
    { label: "Official Helpdesk & Support", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ],
};
