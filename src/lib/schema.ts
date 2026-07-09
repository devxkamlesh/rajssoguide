// JSON-LD structured data builders. These power rich snippets
// (FAQ, HowTo, Breadcrumb) and entity signals (WebSite, Organization).
import { site } from "./site";
import { ATTRIBUTION } from "./attribution";
import type { Locale } from "./i18n";

type Json = Record<string, unknown>;

export function websiteSchema(): Json {
  return {
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    potentialAction: {
      "@type": "SearchAction",
      target: `${site.url}/search?q={query}`,
      "query-input": "required name=query",
    },
  };
}

export function organizationSchema(): Json {
  return {
    "@type": "Organization",
    "@id": `${site.url}/#org`,
    name: site.name,
    url: site.url,
    logo: `${site.url}${site.assets.logoSquare}`,
    description: site.description.en,
    foundingDate: site.established,
    email: site.contactEmail,
    areaServed: { "@type": "State", name: "Rajasthan, India" },
    sameAs: [
      `https://x.com/${site.social.twitter.replace("@", "")}`,
      ATTRIBUTION.linkedin,
      ATTRIBUTION.github,
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "editorial",
      email: site.contactEmail,
      availableLanguage: ["en", "hi"],
    },
  };
}

export function personSchema(): Json {
  return {
    "@type": "Person",
    "@id": `${site.url}/#author`,
    name: ATTRIBUTION.name,
    url: ATTRIBUTION.url,
    jobTitle: ATTRIBUTION.role,
    sameAs: ATTRIBUTION.sameAs,
    worksFor: { "@id": `${site.url}/#org` },
  };
}

export function articleSchema(
  headline: string,
  description: string,
  path: string,
  datePublished: string,
  dateModified: string,
  locale: Locale,
): Json {
  return {
    "@type": "Article",
    headline,
    description,
    url: `${site.url}${path}`,
    datePublished,
    dateModified,
    author: { "@id": `${site.url}/#author` },
    publisher: { "@id": `${site.url}/#org` },
    inLanguage: locale === "hi" ? "hi-IN" : "en-IN",
    image: site.assets.ogImage[locale],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${site.url}${path}`,
    },
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}

// The Rajasthan SSO portal as a GovernmentService entity. Used as the `about`
// of the home WebPage so search/AI engines tie the page to the real-world
// service it documents.
export function ssoGovernmentService(locale: Locale): Json {
  const hi = locale === "hi";
  return {
    "@type": "GovernmentService",
    name: hi
      ? "राजस्थान सिंगल साइन-ऑन (SSO) पोर्टल"
      : "Rajasthan Single Sign-On (SSO) Portal",
    url: site.officialPortal,
    serviceType: hi
      ? "सिंगल साइन-ऑन डिजिटल पहचान"
      : "Single Sign-On digital identity",
    provider: {
      "@type": "GovernmentOrganization",
      name: hi
        ? "सूचना प्रौद्योगिकी एवं संचार विभाग, राजस्थान सरकार"
        : "Department of Information Technology & Communication, Government of Rajasthan",
    },
    areaServed: {
      "@type": "State",
      name: "Rajasthan",
      containedInPlace: { "@type": "Country", name: "India" },
    },
  };
}

// WebPage node — anchors the page as an entity, attributes authorship and
// review, exposes recency (datePublished/dateModified) and speakable regions
// for voice assistants and AI answer engines (GEO).
export function webPageSchema({
  name,
  description,
  path,
  locale,
  datePublished,
  dateModified,
  speakableSelectors,
  about,
}: {
  name: string;
  description: string;
  path: string; // path including locale prefix, e.g. "/en"
  locale: Locale;
  datePublished: string;
  dateModified: string;
  speakableSelectors?: string[];
  about?: Json;
}): Json {
  const url = `${site.url}${path}`;
  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: locale === "hi" ? "hi-IN" : "en-IN",
    isPartOf: { "@id": `${site.url}/#website` },
    datePublished,
    dateModified,
    author: { "@id": `${site.url}/#author` },
    publisher: { "@id": `${site.url}/#org` },
    reviewedBy: { "@id": `${site.url}/#author` },
    mainEntityOfPage: url,
    ...(about ? { about } : {}),
    ...(speakableSelectors
      ? {
          speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: speakableSelectors,
          },
        }
      : {}),
  };
}

export function faqSchema(faqs: FaqItem[]): Json {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export interface HowToStep {
  name: string;
  text: string;
}

export function howToSchema(name: string, steps: HowToStep[]): Json {
  return {
    "@type": "HowTo",
    name,
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

export interface Crumb {
  name: string;
  path: string; // path relative to site root, e.g. "/en/exam/rpsc-cet"
}

export function breadcrumbSchema(crumbs: Crumb[]): Json {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${site.url}${c.path}`,
    })),
  };
}

// ItemList for hub/listing pages — helps Google understand collections.
export function itemListSchema(
  items: { name: string; path: string }[],
): Json {
  return {
    "@type": "ItemList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      url: `${site.url}${it.path}`,
    })),
  };
}

// Compose a single @graph document from multiple schema nodes.
export function buildGraph(nodes: Json[]): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": nodes,
  });
}

// Helper to build canonical + hreflang alternates for a given path
// (path WITHOUT the locale prefix, e.g. "/sso-id-login").
export function alternates(pathWithoutLocale: string) {
  const clean = pathWithoutLocale === "/" ? "" : pathWithoutLocale;
  const languages: Record<string, string> = {
    "en-IN": `${site.url}/en${clean}`,
    "hi-IN": `${site.url}/hi${clean}`,
    "x-default": `${site.url}/en${clean}`,
  };
  return { languages };
}

export function canonicalFor(locale: Locale, pathWithoutLocale: string) {
  const clean = pathWithoutLocale === "/" ? "" : pathWithoutLocale;
  return `${site.url}/${locale}${clean}`;
}

// WebApplication (a SoftwareApplication subtype) for the free browser tools.
// Truthfully marked free (price 0 / isAccessibleForFree) — helps search and AI
// engines recognise the tools as usable free utilities.
export function softwareAppSchema({
  name,
  description,
  path,
  locale,
}: {
  name: string;
  description: string;
  path: string; // WITHOUT locale prefix, e.g. "/tools/age-calculator"
  locale: Locale;
}): Json {
  return {
    "@type": "WebApplication",
    name,
    description,
    url: canonicalFor(locale, path),
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Web",
    browserRequirements: "Requires JavaScript",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
    inLanguage: locale === "hi" ? "hi-IN" : "en-IN",
    publisher: { "@id": `${site.url}/#org` },
  };
}

// Per-page Open Graph + Twitter card metadata. Next.js does NOT copy a page's
// `title`/`description` into openGraph automatically, so any page that omits
// this falls back to the generic site-level card when shared (WhatsApp, X,
// LinkedIn). Spread the result into a page's Metadata return.
// `path` is WITHOUT the locale prefix, e.g. "/exams" or "/exam/rpsc-cet".
export function socialMeta({
  locale,
  title,
  description,
  path,
  type = "website",
}: {
  locale: Locale;
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
}) {
  const url = canonicalFor(locale, path);
  const image = site.assets.ogImage[locale];
  return {
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      type,
      locale: locale === "hi" ? "hi_IN" : "en_IN",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image" as const,
      site: site.social.twitter,
      title,
      description,
      images: [image],
    },
  };
}
