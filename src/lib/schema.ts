// JSON-LD structured data builders. These power rich snippets
// (FAQ, HowTo, Breadcrumb) and entity signals (WebSite, Organization).
import { site } from "./site";
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
    sameAs: [`https://x.com/${site.social.twitter.replace("@", "")}`],
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
    name: site.author.name,
    url: site.author.url,
    worksFor: { "@id": `${site.url}/#org` },
  };
}

export interface FaqItem {
  question: string;
  answer: string;
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
