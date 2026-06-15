import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { sortedUpdates, isRecent, type UpdateTag } from "@/data/updates";

const tagStyles: Record<UpdateTag, string> = {
  exam: "bg-blue-100 text-blue-700",
  scholarship: "bg-green-100 text-green-700",
  service: "bg-purple-100 text-purple-700",
  general: "bg-zinc-100 text-zinc-600",
};

const tagLabel: Record<UpdateTag, { en: string; hi: string }> = {
  exam: { en: "Exam", hi: "परीक्षा" },
  scholarship: { en: "Scholarship", hi: "छात्रवृत्ति" },
  service: { en: "Service", hi: "सेवा" },
  general: { en: "Update", hi: "अपडेट" },
};

function fmtDate(iso: string, loc: Locale) {
  return new Date(iso).toLocaleDateString(loc === "hi" ? "hi-IN" : "en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function LatestUpdates({
  title,
  locale,
  limit,
  viewAllHref,
  viewAllLabel,
}: {
  title: string;
  locale: Locale;
  limit?: number;
  viewAllHref?: string;
  viewAllLabel?: string;
}) {
  const base = `/${locale}`;
  const items = limit ? sortedUpdates.slice(0, limit) : sortedUpdates;

  return (
    <section className="overflow-hidden rounded-2xl border border-zinc-200">
      <div className="flex items-center justify-between bg-zinc-900 px-5 py-3">
        <h2 className="text-base font-semibold text-white">{title}</h2>
        {viewAllHref && (
          <Link
            href={viewAllHref}
            className="text-xs font-medium text-amber-300 hover:underline"
          >
            {viewAllLabel}
          </Link>
        )}
      </div>
      <ul className="divide-y divide-zinc-100">
        {items.map((u) => {
          const href = u.external ? u.href : `${base}${u.href}`;
          return (
            <li key={u.date + u.href}>
              {u.external ? (
                <a
                  href={href}
                  target="_blank"
                  rel="nofollow noopener"
                  className="flex flex-wrap items-center gap-x-3 gap-y-1 px-5 py-3 hover:bg-amber-50/50"
                >
                  <UpdateRow u={u} locale={locale} />
                </a>
              ) : (
                <Link
                  href={href}
                  className="flex flex-wrap items-center gap-x-3 gap-y-1 px-5 py-3 hover:bg-amber-50/50"
                >
                  <UpdateRow u={u} locale={locale} />
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function UpdateRow({
  u,
  locale,
}: {
  u: (typeof sortedUpdates)[number];
  locale: Locale;
}) {
  return (
    <>
      <span
        className={`rounded px-2 py-0.5 text-xs font-medium ${tagStyles[u.tag]}`}
      >
        {tagLabel[u.tag][locale]}
      </span>
      <span className="flex-1 text-sm text-zinc-700">{u.title[locale]}</span>
      {isRecent(u.date) && (
        <span className="rounded bg-red-500 px-1.5 py-0.5 text-[10px] font-bold uppercase text-white">
          {locale === "hi" ? "नया" : "New"}
        </span>
      )}
      <span className="text-xs text-zinc-400">{fmtDate(u.date, locale)}</span>
    </>
  );
}
