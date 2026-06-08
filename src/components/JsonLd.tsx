// Injects a JSON-LD <script> into the document. Server component.
export function JsonLd({ data }: { data: string }) {
  return (
    <script
      type="application/ld+json"
      // data is built server-side from our own typed builders, not user input.
      dangerouslySetInnerHTML={{ __html: data }}
    />
  );
}
