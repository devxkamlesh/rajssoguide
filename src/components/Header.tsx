"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { getDictionary, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";

export function Header({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const base = `/${locale}`;
  const other: Locale = locale === "en" ? "hi" : "en";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Navigation structure with dropdowns
  const navigation = {
    guides: {
      label: locale === "hi" ? "गाइड्स" : "Guides",
      items: [
        { href: `${base}/sso-id-login`, label: t.nav.login, desc: locale === "hi" ? "लॉगिन कैसे करें" : "How to login" },
        { href: `${base}/sso-id-registration`, label: t.nav.registration, desc: locale === "hi" ? "नया खाता बनाएं" : "Create new account" },
        { href: `${base}/forgot-sso-id`, label: t.nav.forgot, desc: locale === "hi" ? "पासवर्ड रिकवर करें" : "Recover password" },
        { href: `${base}/merge-sso-id`, label: locale === "hi" ? "मर्ज SSO ID" : "Merge SSO ID", desc: locale === "hi" ? "IDs को मर्ज करें" : "Merge multiple IDs" },
        { href: `${base}/guides`, label: locale === "hi" ? "सभी गाइड्स →" : "All Guides →", desc: locale === "hi" ? "सभी गाइड्स देखें" : "View all guides" },
      ],
    },
    exams: {
      label: locale === "hi" ? "परीक्षाएं" : "Exams",
      items: [
        { href: `${base}/exam/rpsc-cet`, label: "RPSC CET", desc: locale === "hi" ? "राजस्थान CET परीक्षा" : "Rajasthan CET Exam" },
        { href: `${base}/exam/rsmssb-ldc`, label: "RSMSSB LDC", desc: locale === "hi" ? "LDC परीक्षा" : "LDC Exam" },
        { href: `${base}/exam/patwari`, label: locale === "hi" ? "पटवारी" : "Patwari", desc: locale === "hi" ? "पटवारी परीक्षा" : "Patwari Exam" },
        { href: `${base}/exam-calendar`, label: locale === "hi" ? "परीक्षा कैलेंडर" : "Exam Calendar", desc: locale === "hi" ? "तिथियां और शुल्क" : "Dates & fees" },
        { href: `${base}/exams`, label: locale === "hi" ? "सभी परीक्षाएं →" : "All Exams →", desc: locale === "hi" ? "सभी परीक्षाएं देखें" : "View all exams" },
      ],
    },
    services: {
      label: locale === "hi" ? "सेवाएं" : "Services",
      items: [
        { href: `${base}/service/paymanager`, label: "PayManager", desc: locale === "hi" ? "वेतन प्रबंधन" : "Salary Management" },
        { href: `${base}/service/rajkaj`, label: "RajKaj", desc: locale === "hi" ? "ई-गवर्नेंस पोर्टल" : "E-governance Portal" },
        { href: `${base}/service/jan-aadhaar`, label: locale === "hi" ? "जन आधार" : "Jan Aadhaar", desc: locale === "hi" ? "जन आधार सेवाएं" : "Jan Aadhaar Services" },
        { href: `${base}/scholarships`, label: locale === "hi" ? "छात्रवृत्ति" : "Scholarships", desc: locale === "hi" ? "छात्रवृत्ति योजनाएं" : "Scholarship schemes" },
        { href: `${base}/services`, label: locale === "hi" ? "सभी सेवाएं →" : "All Services →", desc: locale === "hi" ? "सभी सेवाएं देखें" : "View all services" },
      ],
    },
    tools: {
      label: locale === "hi" ? "टूल्स" : "Tools",
      items: [
        { href: `${base}/tools/otr-fee-calculator`, label: locale === "hi" ? "OTR शुल्क कैलकुलेटर" : "OTR Fee Calculator", desc: locale === "hi" ? "शुल्क की गणना करें" : "Calculate exam fees" },
        { href: `${base}/tools/age-calculator`, label: locale === "hi" ? "आयु कैलकुलेटर" : "Age Calculator", desc: locale === "hi" ? "आयु की गणना करें" : "Calculate your age" },
        { href: `${base}/tools/photo-resizer`, label: locale === "hi" ? "फोटो रिसाइज़र" : "Photo Resizer", desc: locale === "hi" ? "फोटो का आकार बदलें" : "Resize photos" },
        { href: `${base}/tools`, label: locale === "hi" ? "सभी टूल्स →" : "All Tools →", desc: locale === "hi" ? "सभी 6 टूल्स देखें" : "View all 6 tools" },
      ],
    },
    help: {
      label: locale === "hi" ? "मदद" : "Help",
      items: [
        { href: `${base}/about`, label: locale === "hi" ? "हमारे बारे में" : "About", desc: locale === "hi" ? "हमारे बारे में जानें" : "Learn about us" },
        { href: `${base}/contact`, label: locale === "hi" ? "संपर्क करें" : "Contact", desc: locale === "hi" ? "हमसे संपर्क करें" : "Get in touch" },
        { href: `${base}/cities`, label: locale === "hi" ? "शहर" : "Cities", desc: locale === "hi" ? "शहर अनुसार मदद" : "Help by city" },
        { href: `/sitemap.xml`, label: locale === "hi" ? "साइटमैप" : "Sitemap", desc: locale === "hi" ? "सभी पेज देखें" : "View all pages" },
        { href: `${base}/privacy-policy`, label: locale === "hi" ? "गोपनीयता" : "Privacy", desc: locale === "hi" ? "गोपनीयता नीति" : "Privacy Policy" },
        { href: `${base}/terms-of-service`, label: locale === "hi" ? "शर्तें" : "Terms", desc: locale === "hi" ? "सेवा की शर्तें" : "Terms of Service" },
      ],
    },
  };

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white shadow-sm">
      {/* Gov-style utility bar */}
      <div className="bg-zinc-900 text-zinc-100">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-1 text-[11px]">
          <span>
            {locale === "hi"
              ? "एक स्वतंत्र मार्गदर्शिका — सरकार से संबद्ध नहीं"
              : "An independent guide — not affiliated with the government"}
          </span>
          <a
            href={site.officialPortal}
            target="_blank"
            rel="nofollow noopener"
            className="hidden underline hover:text-amber-300 sm:inline"
          >
            {site.officialPortal.replace("https://", "")} ↗
          </a>
        </div>
      </div>

      <nav className="mx-auto max-w-6xl px-4" aria-label={locale === "hi" ? "मुख्य नेविगेशन" : "Main navigation"}>
        <div className="flex items-center justify-between py-2">
          {/* Logo */}
          <Link href={base} className="flex items-center" aria-label={site.name}>
            <Image
              src={site.assets.logoHorizontal}
              alt={site.name}
              width={150}
              height={36}
              priority
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-5 lg:flex">
            <Link
              href={`${base}/updates`}
              className="flex items-center gap-1 py-2 text-sm font-medium text-zinc-700 transition-colors hover:text-amber-700"
            >
              {t.nav.updates}
              <span className="rounded bg-red-500 px-1 py-0.5 text-[9px] font-bold uppercase leading-none text-white">
                {locale === "hi" ? "नया" : "New"}
              </span>
            </Link>
            <Link
              href={`${base}/exam-calendar`}
              className="py-2 text-sm font-medium text-zinc-700 transition-colors hover:text-amber-700"
            >
              {locale === "hi" ? "कैलेंडर" : "Calendar"}
            </Link>
            {Object.entries(navigation).map(([key, section]) => (
              <div
                key={key}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(key)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className="flex items-center gap-1 py-2 text-sm font-medium text-zinc-700 hover:text-amber-700 transition-colors"
                  aria-expanded={activeDropdown === key}
                  aria-haspopup="true"
                >
                  {section.label}
                  <svg
                    className={`h-4 w-4 transition-transform ${activeDropdown === key ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu with hover bridge */}
                {activeDropdown === key && (
                  <div className="absolute left-0 top-full pt-2">
                    {/* Invisible bridge to prevent gap */}
                    <div className="h-2 w-full" />
                    <div className="w-64 rounded-lg border border-zinc-200 bg-white shadow-lg">
                      <div className="py-1.5">
                        {section.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-2 hover:bg-amber-50 transition-colors"
                          >
                            <div className="text-sm font-medium text-zinc-900">
                              {item.label}
                            </div>
                            <div className="text-xs text-zinc-500">
                              {item.desc}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <Link
              href={`${base}/search`}
              aria-label={locale === "hi" ? "खोजें" : "Search"}
              className="rounded-md p-2 text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-amber-700"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z" />
              </svg>
            </Link>
            <Link
              href={`/${other}`}
              className="rounded-md border border-zinc-300 px-3 py-1.5 text-sm font-medium hover:bg-zinc-50 transition-colors"
              hrefLang={other}
            >
              {t.common.switchLanguage}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden rounded-md p-2 text-zinc-700 hover:bg-zinc-100"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-zinc-200 py-4 lg:hidden">
            <Link
              href={`${base}/updates`}
              className="mb-4 flex items-center gap-2 rounded-md bg-amber-50 px-3 py-2 text-sm font-semibold text-amber-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.updates}
              <span className="rounded bg-red-500 px-1 py-0.5 text-[9px] font-bold uppercase leading-none text-white">
                {locale === "hi" ? "नया" : "New"}
              </span>
            </Link>
            <Link
              href={`${base}/exam-calendar`}
              className="mb-4 block rounded-md px-3 py-2 text-sm font-semibold text-zinc-800 hover:bg-amber-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              {locale === "hi" ? "परीक्षा कैलेंडर" : "Exam Calendar"}
            </Link>
            {Object.entries(navigation).map(([key, section]) => (
              <div key={key} className="mb-4">
                <div className="px-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">
                  {section.label}
                </div>
                <div className="space-y-1">
                  {section.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-md px-3 py-2 hover:bg-amber-50 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="text-sm font-medium text-zinc-900">
                        {item.label}
                      </div>
                      <div className="text-xs text-zinc-500">
                        {item.desc}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
