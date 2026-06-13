import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { locales } from "@/lib/i18n";
import { guides } from "@/data/guides";
import { exams, services, cities, errors, scholarships } from "@/lib/content";

export const dynamic = "force-static";

type Freq = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

interface PathConfig {
  path: string;
  priority: number;
  changeFrequency: Freq;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const paths: PathConfig[] = [
    // ── Home ──────────────────────────────────────────────────── priority 1.0
    { path: "",              priority: 1.0, changeFrequency: "daily"   },

    // ── Core guides ───────────────────────────────────────────── priority 0.9
    ...guides.map((g) => ({
      path: `/${g.slug}`,   priority: 0.9, changeFrequency: "weekly" as Freq,
    })),

    // ── Tools ─────────────────────────────────────────────────── priority 0.8
    { path: "/tools",                          priority: 0.8, changeFrequency: "weekly"  },
    { path: "/tools/otr-fee-calculator",       priority: 0.8, changeFrequency: "monthly" },
    { path: "/tools/age-calculator",           priority: 0.8, changeFrequency: "monthly" },
    { path: "/tools/sso-id-validator",         priority: 0.8, changeFrequency: "monthly" },
    { path: "/tools/scholarship-calculator",   priority: 0.8, changeFrequency: "monthly" },
    { path: "/tools/photo-resizer",            priority: 0.8, changeFrequency: "monthly" },
    { path: "/tools/jan-aadhaar-status",       priority: 0.8, changeFrequency: "monthly" },

    // ── Exams ─────────────────────────────────────────────────── priority 0.8
    ...exams.map((e) => ({
      path: `/exam/${e.slug}`,  priority: 0.8, changeFrequency: "weekly" as Freq,
    })),

    // ── Services ──────────────────────────────────────────────── priority 0.7
    ...services.map((s) => ({
      path: `/service/${s.slug}`, priority: 0.7, changeFrequency: "monthly" as Freq,
    })),

    // ── Scholarships ──────────────────────────────────────────── priority 0.7
    ...scholarships.map((s) => ({
      path: `/scholarship/${s.slug}`, priority: 0.7, changeFrequency: "monthly" as Freq,
    })),

    // ── Cities ────────────────────────────────────────────────── priority 0.6
    ...cities.map((c) => ({
      path: `/city/${c.slug}`,  priority: 0.6, changeFrequency: "monthly" as Freq,
    })),

    // ── Error fixes ───────────────────────────────────────────── priority 0.6
    ...errors.map((e) => ({
      path: `/error/${e.slug}`, priority: 0.6, changeFrequency: "monthly" as Freq,
    })),

    // ── About & Legal ─────────────────────────────────────────── priority 0.5-0.6
    { path: "/about",  priority: 0.5, changeFrequency: "monthly" },
    { path: "/privacy-policy", priority: 0.6, changeFrequency: "monthly" },
    { path: "/terms-of-service", priority: 0.6, changeFrequency: "monthly" },
  ];

  // Emit one entry per locale per path - simplified for Google Search Console compatibility
  return locales.flatMap((locale) =>
    paths.map(({ path, priority, changeFrequency }) => ({
      url: `${site.url}/${locale}${path}`,
      lastModified,
      changeFrequency,
      priority,
    })),
  );
}
