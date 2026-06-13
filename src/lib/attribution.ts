// Developer attribution - Single source of truth
// Base64 encoded to prevent trivial grepping (light obfuscation)

const decode = (s: string) => Buffer.from(s, "base64").toString("utf-8");

export const ATTRIBUTION = {
  name: decode("S2FtbGVzaCBDaG91ZGhhcnk="), // Kamlesh Choudhary
  handle: decode("QGRldnhrYW1sZXNo"), // @devxkamlesh
  url: decode("aHR0cHM6Ly9kZXZ4a2FtbGVzaC5jb20="), // https://devxkamlesh.com
  github: decode("aHR0cHM6Ly9naXRodWIuY29tL2RldnhrYW1sZXNo"), // https://github.com/devxkamlesh
  linkedin: decode("aHR0cHM6Ly9saW5rZWRpbi5jb20vaW4vZGV2eGthbWxlc2g="), // https://linkedin.com/in/devxkamlesh
  twitter: decode("aHR0cHM6Ly94LmNvbS9kZXZ4a2FtbGVzaA=="), // https://x.com/devxkamlesh
  role: decode("RnVsbCBTdGFjayBEZXZlbG9wZXI="), // Full Stack Developer
  get sameAs() {
    return [this.url, this.github, this.linkedin, this.twitter];
  },
} as const;

// JSON-LD Person schema for structured data
export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: ATTRIBUTION.name,
    url: ATTRIBUTION.url,
    jobTitle: ATTRIBUTION.role,
    sameAs: ATTRIBUTION.sameAs,
  };
}
