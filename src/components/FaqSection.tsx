import type { FaqItem } from "@/lib/schema";

export function FaqSection({
  title,
  faqs,
}: {
  title: string;
  faqs: FaqItem[];
}) {
  if (!faqs.length) return null;
  return (
    <section className="mt-10" aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="text-2xl font-semibold tracking-tight">
        {title}
      </h2>
      <dl className="mt-4 divide-y divide-zinc-200 dark:divide-zinc-800">
        {faqs.map((f, i) => (
          <div key={i} className="py-4">
            <dt className="font-medium text-zinc-900 dark:text-zinc-100">
              {f.question}
            </dt>
            <dd className="mt-1 text-zinc-600 dark:text-zinc-400">{f.answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
