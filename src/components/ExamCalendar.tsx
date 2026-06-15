import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Exam } from "@/lib/content";

type EventType = "last" | "exam";

interface DayEvent {
  type: EventType;
  examName: string;
  slug: string;
}

const MONTHS: Record<Locale, string[]> = {
  en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  hi: ["जनवरी", "फरवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर"],
};

const WEEKDAYS: Record<Locale, string[]> = {
  en: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  hi: ["र", "सो", "मं", "बु", "गु", "शु", "श"],
};

// Builds a visual month-by-month calendar marking application last dates
// (red) and exam dates (blue) for all exams.
export function ExamCalendar({ exams, locale }: { exams: Exam[]; locale: Locale }) {
  const base = `/${locale}`;

  // Collect events keyed by "YYYY-M-D".
  const events = new Map<string, DayEvent[]>();
  const monthKeys = new Set<string>();

  const add = (iso: string, ev: DayEvent) => {
    const d = new Date(iso);
    const y = d.getFullYear();
    const m = d.getMonth();
    monthKeys.add(`${y}-${m}`);
    const key = `${y}-${m}-${d.getDate()}`;
    const list = events.get(key) ?? [];
    list.push(ev);
    events.set(key, list);
  };

  for (const e of exams) {
    add(e.lastDate, { type: "last", examName: e.name[locale], slug: e.slug });
    if (e.examDate) {
      add(e.examDate, { type: "exam", examName: e.name[locale], slug: e.slug });
    }
  }

  const sortedMonths = [...monthKeys]
    .map((k) => k.split("-").map(Number) as [number, number])
    .sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  return (
    <div>
      {/* Legend */}
      <div className="mb-5 flex flex-wrap gap-4 text-sm">
        <span className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-full bg-red-500" />
          {locale === "hi" ? "आवेदन अंतिम तिथि" : "Application last date"}
        </span>
        <span className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-full bg-blue-500" />
          {locale === "hi" ? "परीक्षा तिथि" : "Exam date"}
        </span>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sortedMonths.map(([year, month]) => (
          <MonthGrid
            key={`${year}-${month}`}
            year={year}
            month={month}
            events={events}
            locale={locale}
            base={base}
          />
        ))}
      </div>
    </div>
  );
}

function MonthGrid({
  year,
  month,
  events,
  locale,
  base,
}: {
  year: number;
  month: number;
  events: Map<string, DayEvent[]>;
  locale: Locale;
  base: string;
}) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <div className="rounded-2xl border border-zinc-200 p-4">
      <h3 className="mb-3 text-center font-semibold text-zinc-900">
        {MONTHS[locale][month]} {year}
      </h3>
      <div className="grid grid-cols-7 gap-1 text-center text-xs">
        {WEEKDAYS[locale].map((w, i) => (
          <span key={i} className="py-1 font-medium text-zinc-400">
            {w}
          </span>
        ))}
        {cells.map((day, i) => {
          if (day === null) return <span key={i} />;
          const evs = events.get(`${year}-${month}-${day}`);
          if (!evs || evs.length === 0) {
            return (
              <span key={i} className="py-1.5 text-zinc-600">
                {day}
              </span>
            );
          }
          const hasLast = evs.some((e) => e.type === "last");
          const tone = hasLast ? "bg-red-500" : "bg-blue-500";
          const title = evs
            .map(
              (e) =>
                `${e.examName} — ${e.type === "last" ? (locale === "hi" ? "अंतिम तिथि" : "Last date") : locale === "hi" ? "परीक्षा" : "Exam"}`,
            )
            .join(", ");
          return (
            <Link
              key={i}
              href={`${base}/exam/${evs[0].slug}`}
              title={title}
              className={`flex items-center justify-center rounded-full py-1.5 font-semibold text-white ${tone}`}
            >
              {day}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
