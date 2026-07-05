import type { ReactNode } from "react";

// A consistent section heading with an amber accent bar and optional eyebrow
// label. Used to give long-form home page sections a clear visual rhythm.
export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "default",
}: {
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  tone?: "default" | "amber" | "red";
}) {
  const accent =
    tone === "amber"
      ? "bg-amber-500"
      : tone === "red"
        ? "bg-red-500"
        : "bg-amber-600";

  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700">
          <span className={`h-3 w-1 rounded-full ${accent}`} />
          {eyebrow}
        </span>
      )}
      <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
        {title}
      </h2>
      {intro && (
        <div className="mt-3 space-y-3 leading-relaxed text-zinc-600">
          {intro}
        </div>
      )}
    </div>
  );
}
