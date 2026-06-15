"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";

type Tone = "open" | "soon" | "closed";

function compute(date: string, locale: Locale): { label: string; tone: Tone } {
  const target = new Date(date + "T23:59:59").getTime();
  const days = Math.ceil((target - Date.now()) / (24 * 60 * 60 * 1000));
  if (days < 0) return { tone: "closed", label: locale === "hi" ? "बंद" : "Closed" };
  if (days === 0)
    return { tone: "soon", label: locale === "hi" ? "आज अंतिम दिन" : "Last day today" };
  return {
    tone: days <= 7 ? "soon" : "open",
    label: locale === "hi" ? `${days} दिन शेष` : `${days} day${days === 1 ? "" : "s"} left`,
  };
}

// Live "days left" badge for a target date. Computed in the browser so it
// stays accurate between deploys.
export function DaysLeft({ date, locale }: { date: string; locale: Locale }) {
  const [state, setState] = useState<{ label: string; tone: Tone } | null>(null);

  useEffect(() => {
    // Client-only: depends on the current date, so it must run after mount
    // to avoid an SSR/hydration mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setState(compute(date, locale));
  }, [date, locale]);

  if (!state) {
    return <span className="text-xs text-zinc-400">—</span>;
  }

  const styles =
    state.tone === "closed"
      ? "bg-zinc-100 text-zinc-500"
      : state.tone === "soon"
        ? "bg-red-100 text-red-700"
        : "bg-green-100 text-green-700";

  return (
    <span className={`rounded px-2 py-0.5 text-xs font-medium ${styles}`}>
      {state.label}
    </span>
  );
}
