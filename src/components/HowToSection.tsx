import type { HowToStep } from "@/lib/schema";

export function HowToSection({
  title,
  steps,
}: {
  title: string;
  steps: HowToStep[];
}) {
  if (!steps.length) return null;
  return (
    <section className="mt-10" aria-labelledby="howto-heading">
      <h2 id="howto-heading" className="text-2xl font-semibold tracking-tight">
        {title}
      </h2>
      <ol className="mt-4 space-y-4">
        {steps.map((s, i) => (
          <li key={i} className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-500 text-sm font-semibold text-white">
              {i + 1}
            </span>
            <div>
              <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
                {s.name}
              </h3>
              <p className="mt-0.5 text-zinc-600 dark:text-zinc-400">
                {s.text}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
