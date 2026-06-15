// Builds a flat, searchable list of every page for a locale.
// Used by the client-side search box on /search.
import type { Locale } from "./i18n";
import { exams, services, cities, scholarships, errors } from "./content";
import { guides } from "@/data/guides";

export interface SearchItem {
  title: string;
  path: string; // includes locale prefix
  category: string;
}

export function buildSearchIndex(loc: Locale): SearchItem[] {
  const base = `/${loc}`;
  const cat = (en: string, hi: string) => (loc === "hi" ? hi : en);

  const items: SearchItem[] = [
    { title: cat("Home", "होम"), path: base, category: cat("Page", "पेज") },
    { title: cat("Latest Updates", "ताज़ा अपडेट"), path: `${base}/updates`, category: cat("Page", "पेज") },
    { title: cat("Exam Calendar 2026", "परीक्षा कैलेंडर 2026"), path: `${base}/exam-calendar`, category: cat("Page", "पेज") },
    { title: cat("All Tools", "सभी टूल्स"), path: `${base}/tools`, category: cat("Page", "पेज") },
    { title: cat("About", "हमारे बारे में"), path: `${base}/about`, category: cat("Page", "पेज") },
  ];

  for (const g of guides) {
    items.push({ title: g.title[loc], path: `${base}/${g.slug}`, category: cat("Guide", "गाइड") });
  }
  for (const e of exams) {
    items.push({ title: e.fullName[loc], path: `${base}/exam/${e.slug}`, category: cat("Exam", "परीक्षा") });
  }
  for (const s of services) {
    items.push({ title: s.name[loc], path: `${base}/service/${s.slug}`, category: cat("Service", "सेवा") });
  }
  for (const s of scholarships) {
    items.push({ title: s.name[loc], path: `${base}/scholarship/${s.slug}`, category: cat("Scholarship", "छात्रवृत्ति") });
  }
  for (const c of cities) {
    items.push({ title: `SSO ID ${c.name[loc]}`, path: `${base}/city/${c.slug}`, category: cat("City", "शहर") });
  }
  for (const e of errors) {
    items.push({ title: e.title[loc], path: `${base}/error/${e.slug}`, category: cat("Fix", "समाधान") });
  }

  const tools: { slug: string; en: string; hi: string }[] = [
    { slug: "otr-fee-calculator", en: "OTR Fee Calculator", hi: "OTR फीस कैलकुलेटर" },
    { slug: "age-calculator", en: "Age Calculator", hi: "आयु कैलकुलेटर" },
    { slug: "sso-id-validator", en: "SSO ID Validator", hi: "एसएसओ आईडी वैलिडेटर" },
    { slug: "scholarship-calculator", en: "Scholarship Calculator", hi: "छात्रवृत्ति कैलकुलेटर" },
    { slug: "photo-resizer", en: "Photo Resizer", hi: "फोटो रिसाइज़र" },
    { slug: "jan-aadhaar-status", en: "Jan Aadhaar Status", hi: "जन आधार स्थिति" },
  ];
  for (const tool of tools) {
    items.push({ title: cat(tool.en, tool.hi), path: `${base}/tools/${tool.slug}`, category: cat("Tool", "टूल") });
  }

  return items;
}
