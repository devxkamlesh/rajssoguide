import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { locales } from "@/lib/i18n";
import { guides } from "@/data/guides";
import { exams, services, cities, errors, scholarships } from "@/lib/content";
import { reviewed } from "@/lib/reviewed";
import { changelogLastUpdated } from "@/data/changelog";

export const dynamic = "force-static";

type Freq = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

interface PathConfig {
  path: string;
  priority: number;
  changeFrequency: Freq;
  /** Optional per-URL lastmod; falls back to build time when omitted. */
  lastModified?: Date;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const paths: PathConfig[] = [
    // ── Home ──────────────────────────────────────────────────── priority 1.0
    { path: "",              priority: 1.0, changeFrequency: "daily"   },

    // ── Category hubs ─────────────────────────────────────────── priority 0.9
    { path: "/guides",        priority: 0.9, changeFrequency: "weekly"  },
    { path: "/exams",         priority: 0.9, changeFrequency: "weekly"  },
    { path: "/exam-calendar", priority: 0.9, changeFrequency: "daily"   },
    { path: "/services",      priority: 0.9, changeFrequency: "weekly"  },
    { path: "/scholarships",  priority: 0.9, changeFrequency: "weekly"  },
    { path: "/updates",       priority: 0.9, changeFrequency: "daily"   },
    { path: "/cities",        priority: 0.8, changeFrequency: "monthly" },

    // ── Core guides ───────────────────────────────────────────── priority 0.9
    ...guides.map((g) => ({
      path: `/${g.slug}`,   priority: 0.9, changeFrequency: "weekly" as Freq,
      lastModified: new Date(g.lastVerified),
    })),

    // ── Tools ─────────────────────────────────────────────────── priority 0.8
    { path: "/tools",                          priority: 0.8, changeFrequency: "weekly"  },
    { path: "/tools/otr-fee-calculator",       priority: 0.8, changeFrequency: "monthly" },
    { path: "/tools/age-calculator",           priority: 0.8, changeFrequency: "monthly" },
    { path: "/tools/sso-id-validator",         priority: 0.8, changeFrequency: "monthly" },
    { path: "/tools/scholarship-calculator",   priority: 0.8, changeFrequency: "monthly" },
    { path: "/tools/photo-resizer",            priority: 0.8, changeFrequency: "monthly" },
    { path: "/tools/jan-aadhaar-status",       priority: 0.8, changeFrequency: "monthly" },
    { path: "/tools/pay-matrix-calculator",    priority: 0.8, changeFrequency: "monthly" },

    // ── Exams ─────────────────────────────────────────────────── priority 0.8
    ...exams.map((e) => ({
      path: `/exam/${e.slug}`,  priority: 0.8, changeFrequency: "weekly" as Freq,
    })),

    // ── Services ──────────────────────────────────────────────── priority 0.7
    ...services.map((s) => ({
      path: `/service/${s.slug}`, priority: 0.7, changeFrequency: "monthly" as Freq,
      lastModified: new Date(reviewed.services),
    })),

    // ── Scholarships ──────────────────────────────────────────── priority 0.7
    ...scholarships.map((s) => ({
      path: `/scholarship/${s.slug}`, priority: 0.7, changeFrequency: "monthly" as Freq,
      lastModified: new Date(reviewed.scholarships),
    })),

    // ── Cities ────────────────────────────────────────────────── priority 0.6
    ...cities.map((c) => ({
      path: `/city/${c.slug}`,  priority: 0.6, changeFrequency: "monthly" as Freq,
      lastModified: new Date(reviewed.cities),
    })),

    // ── Error fixes ───────────────────────────────────────────── priority 0.6
    ...errors.map((e) => ({
      path: `/error/${e.slug}`, priority: 0.6, changeFrequency: "monthly" as Freq,
      lastModified: new Date(reviewed.errors),
    })),

    // ── About & Legal ─────────────────────────────────────────── priority 0.5-0.6
    { path: "/about",  priority: 0.5, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.5, changeFrequency: "monthly" },
    { path: "/changelog", priority: 0.5, changeFrequency: "weekly", lastModified: new Date(changelogLastUpdated) },
    { path: "/privacy-policy", priority: 0.6, changeFrequency: "monthly" },
    { path: "/terms-of-service", priority: 0.6, changeFrequency: "monthly" },
  ];

  // Emit one entry per locale per path - simplified for Google Search Console compatibility
  return locales.flatMap((locale) =>
    paths.map((p) => ({
      url: `${site.url}/${locale}${p.path}`,
      lastModified: p.lastModified ?? lastModified,
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    })),
  );
}
