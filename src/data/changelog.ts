// Public, user-facing changelog: a transparent record of what changed on this
// guide and when. Distinct from `updates.ts` (which tracks external SSO/exam
// news). Newest entries first. To log a change, add an entry at the top.
import type { Locale } from "@/lib/i18n";

export interface ChangeItem {
  text: Record<Locale, string>;
  /** Optional path (without locale prefix) of the page that changed. */
  href?: string;
}

export interface ChangelogEntry {
  /** ISO date, e.g. "2026-07-08". */
  date: string;
  changes: ChangeItem[];
}

export const changelog: ChangelogEntry[] = [
  {
    date: "2026-07-08",
    changes: [
      {
        text: {
          en: "Added a new SSO ID Helpdesk & customer care guide with the official helpline numbers and a warning about fake support numbers.",
          hi: "आधिकारिक हेल्पलाइन नंबरों और नकली सपोर्ट नंबरों की चेतावनी के साथ नई एसएसओ आईडी हेल्पडेस्क व कस्टमर केयर गाइड जोड़ी।",
        },
        href: "/sso-id-helpdesk",
      },
      {
        text: {
          en: "Added a FAQ to the Rajasthan Exam Calendar explaining OTR, deadlines, and where to confirm official dates.",
          hi: "राजस्थान परीक्षा कैलेंडर में OTR, अंतिम तिथियों और आधिकारिक तिथियां कहाँ जांचें, यह समझाने वाला FAQ जोड़ा।",
        },
        href: "/exam-calendar",
      },
      {
        text: {
          en: "The SSO login guide now opens the official sign-in page directly.",
          hi: "एसएसओ लॉगिन गाइड अब सीधे आधिकारिक साइन-इन पेज खोलती है।",
        },
        href: "/sso-id-login",
      },
      {
        text: {
          en: "Added dedicated support email addresses on the Contact and Privacy pages.",
          hi: "संपर्क और गोपनीयता पेजों पर समर्पित सहायता ईमेल पते जोड़े।",
        },
        href: "/contact",
      },
    ],
  },
  {
    date: "2026-07-06",
    changes: [
      {
        text: {
          en: "Added full step-by-step guides for the RajKaj and Jan Aadhaar services.",
          hi: "RajKaj और जन आधार सेवाओं के लिए पूरी चरण-दर-चरण गाइड जोड़ीं।",
        },
        href: "/service/rajkaj",
      },
      {
        text: {
          en: "Added new fix guides for OTP-not-received, session timeout, and name-mismatch errors.",
          hi: "ओटीपी न आना, सेशन टाइमआउट और नाम मेल न खाने की त्रुटियों के लिए नई समाधान गाइड जोड़ीं।",
        },
        href: "/error/otp-not-received",
      },
      {
        text: {
          en: "Reviewed the city and scholarship pages and added helpful FAQs to each.",
          hi: "शहर और छात्रवृत्ति पेजों की समीक्षा की और हर पेज पर उपयोगी FAQ जोड़े।",
        },
        href: "/cities",
      },
    ],
  },
  {
    date: "2026-06-27",
    changes: [
      {
        text: {
          en: "Completed a full review of the home page and all core SSO guides against the official portal.",
          hi: "होम पेज और सभी मुख्य एसएसओ गाइड्स की आधिकारिक पोर्टल के अनुसार पूर्ण समीक्षा की।",
        },
        href: "/guides",
      },
    ],
  },
];

// Most recent change date (ISO) — used for the visible "last updated" label.
export const changelogLastUpdated = changelog[0]?.date ?? "";
