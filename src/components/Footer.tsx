import { getDictionary, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";
import { ATTRIBUTION } from "@/lib/attribution";
import Link from "next/link";
import Image from "next/image";
import { DevBadge } from "./DevBadge";

export function Footer({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const base = `/${locale}`;
  const hi = locale === "hi";

  const columns: { title: string; links: { label: string; href: string; external?: boolean }[] }[] = [
    {
      title: hi ? "गाइड्स" : "Guides",
      links: [
        { label: t.nav.login, href: `${base}/sso-id-login` },
        { label: t.nav.registration, href: `${base}/sso-id-registration` },
        { label: t.nav.forgot, href: `${base}/forgot-sso-id` },
        { label: hi ? "मर्ज SSO ID" : "Merge SSO ID", href: `${base}/merge-sso-id` },
        { label: hi ? "SSO हेल्पडेस्क" : "SSO Helpdesk", href: `${base}/sso-id-helpdesk` },
        { label: hi ? "SSO आईडी पोर्टल" : "SSO ID Portal", href: `${base}/sso-id-portal` },
        { label: hi ? "सभी गाइड्स" : "All Guides", href: `${base}/guides` },
      ],
    },
    {
      title: hi ? "एक्सप्लोर करें" : "Explore",
      links: [
        { label: t.nav.exams, href: `${base}/exams` },
        { label: hi ? "परीक्षा कैलेंडर" : "Exam Calendar", href: `${base}/exam-calendar` },
        { label: t.nav.services, href: `${base}/services` },
        { label: t.nav.scholarships, href: `${base}/scholarships` },
        { label: t.nav.cities, href: `${base}/cities` },
        { label: t.nav.tools, href: `${base}/tools` },
      ],
    },
    {
      title: hi ? "मदद व जानकारी" : "Help & Info",
      links: [
        { label: t.nav.updates, href: `${base}/updates` },
        { label: hi ? "चेंजलॉग" : "Changelog", href: `${base}/changelog` },
        { label: hi ? "हमारे बारे में" : "About", href: `${base}/about` },
        { label: hi ? "संपर्क करें" : "Contact", href: `${base}/contact` },
        { label: hi ? "गोपनीयता नीति" : "Privacy Policy", href: `${base}/privacy-policy` },
        { label: hi ? "सेवा की शर्तें" : "Terms of Service", href: `${base}/terms-of-service` },
        { label: hi ? "साइटमैप" : "Sitemap", href: "/sitemap.xml", external: true },
      ],
    },
  ];

  return (
    <footer className="mt-16 border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Image
              src={site.assets.logoHorizontal}
              alt={site.name}
              width={150}
              height={36}
              className="h-8 w-auto"
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-500">
              {t.footer.disclaimer}
            </p>
            <div className="mt-4 flex gap-3">
              <a href={ATTRIBUTION.github} target="_blank" rel="noopener" aria-label="GitHub" className="text-zinc-400 transition hover:text-amber-700">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.34 1.12 2.91.85.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.36 9.36 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" /></svg>
              </a>
              <a href={ATTRIBUTION.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn" className="text-zinc-400 transition hover:text-amber-700">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V9.99H5.67v8.35h2.67zM7 8.8a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zm11.34 9.54v-4.57c0-2.45-1.31-3.59-3.06-3.59-1.41 0-2.04.78-2.39 1.32v-1.13h-2.67c.04.75 0 8.35 0 8.35h2.67v-4.66c0-.24.02-.48.09-.65.19-.48.63-.97 1.36-.97.96 0 1.34.73 1.34 1.8v4.48h2.66z" /></svg>
              </a>
              <a href={`https://x.com/${site.social.twitter.replace("@", "")}`} target="_blank" rel="noopener" aria-label="X" className="text-zinc-400 transition hover:text-amber-700">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.46l8.6-9.83L0 1.15h7.6l5.24 6.93 6.06-6.93zm-1.29 19.5h2.04L6.49 3.24H4.3L17.61 20.65z" /></svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-zinc-900">{col.title}</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {col.links.map((l) =>
                  l.external ? (
                    <li key={l.href}>
                      <a href={l.href} className="text-zinc-500 transition hover:text-amber-700">
                        {l.label}
                      </a>
                    </li>
                  ) : (
                    <li key={l.href}>
                      <Link href={l.href} className="text-zinc-500 transition hover:text-amber-700">
                        {l.label}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact row */}
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-zinc-200 pt-6 text-sm">
          <a href={`mailto:${site.contactEmail}`} className="flex items-center gap-2 text-zinc-600 hover:text-amber-700">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            {site.contactEmail}
          </a>
          <a href={`https://wa.me/${site.contactWhatsApp}`} target="_blank" rel="noopener" className="flex items-center gap-2 text-zinc-600 hover:text-green-700">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.8 14.01c-.24.68-1.42 1.31-1.96 1.36-.5.05-.96.24-3.23-.67-2.72-1.07-4.45-3.86-4.59-4.04-.13-.18-1.1-1.46-1.1-2.79 0-1.33.7-1.98.95-2.25.24-.27.53-.34.71-.34.18 0 .36 0 .51.01.16.01.39-.06.6.46.24.56.81 1.93.88 2.07.07.14.12.3.02.48-.09.18-.14.3-.27.46-.14.16-.29.36-.41.48-.14.14-.28.28-.12.55.16.27.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.21 1.37.27.14.43.12.59-.07.16-.18.68-.79.86-1.06.18-.27.36-.23.6-.14.24.09 1.55.73 1.81.86z" /></svg>
            {hi ? "व्हाट्सएप" : "WhatsApp"}
          </a>
          <a href={site.officialPortal} target="_blank" rel="nofollow noopener" className="flex items-center gap-2 text-zinc-600 hover:text-amber-700">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 010 5.656l-3 3a4 4 0 01-5.656-5.656l1.5-1.5M10.172 13.828a4 4 0 010-5.656l3-3a4 4 0 115.656 5.656l-1.5 1.5" /></svg>
            {hi ? "आधिकारिक पोर्टल" : "Official Portal"}
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-zinc-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name} ·{" "}
            {hi ? "एक स्वतंत्र गाइड, सरकार से संबद्ध नहीं" : "An independent guide, not affiliated with the government"}
          </p>
          <DevBadge />
        </div>
      </div>
    </footer>
  );
}
