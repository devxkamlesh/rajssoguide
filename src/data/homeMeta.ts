// SEO / GEO additions for the home page: authorship, recency, direct answer,
// the quick-action table, SMS recovery callout, cited official sources, and the
// "About this guide" E-E-A-T block. Kept separate from the bulk home content so
// it is easy to bump dates and review the trust signals.
import type { Locale } from "@/lib/i18n";

type L<T> = Record<Locale, T>;

// Bump `modified` (and the human-readable labels) whenever the page is reviewed.
export const homeMeta: {
  published: string;
  modified: string;
  byPrefix: L<string>;
  updatedLabel: L<string>;
  reviewedWeekly: L<string>;
  shareLabel: L<string>;
  shareTitle: L<string>;
  directAnswer: L<string>;
  examSeason: {
    title: L<string>;
    body: L<string[]>;
    linkPre: L<string>;
    linkText: L<string>;
    linkPost: L<string>;
  };
  quickActionTitle: L<string>;
  quickActionCols: L<[string, string]>;
  quickActions: { need: L<string>; action: L<string>; href?: string }[];
  smsTitle: L<string>;
  smsBody: L<string>;
  aboutTitle: L<string>;
  aboutBody: L<string[]>;
  authorBioPrefix: L<string>;
  authorBio: L<string>;
  correctionNote: L<string>;
  sourcesTitle: L<string>;
  sourcesIntro: L<string>;
  sources: { url: string; label: L<string> }[];
  contactCta: L<string>;
} = {
  published: "2024-01-01",
  modified: "2026-06-27",
  byPrefix: { en: "By", hi: "लेखक" },
  updatedLabel: {
    en: "Updated 27 June 2026",
    hi: "27 जून 2026 को अपडेट किया गया",
  },
  reviewedWeekly: { en: "Reviewed weekly", hi: "साप्ताहिक समीक्षा" },
  shareLabel: { en: "Share this guide:", hi: "यह गाइड शेयर करें:" },
  shareTitle: {
    en: "SSO ID Rajasthan — Complete Login, Registration & Recovery Guide",
    hi: "SSO ID राजस्थान — लॉगिन, रजिस्ट्रेशन और रिकवरी की पूरी गाइड",
  },
  directAnswer: {
    en: "SSO ID Rajasthan is a Single Sign-On account issued by the Rajasthan government's Department of IT & Communication (DoITC) at sso.rajasthan.gov.in. It gives every Rajasthan resident — students, government employees, and business owners — access to 100+ state government services using one username and password. The SSO system has been operational since 2013.",
    hi: "SSO ID राजस्थान, राजस्थान सरकार के सूचना प्रौद्योगिकी एवं संचार विभाग (DoITC) द्वारा sso.rajasthan.gov.in पर जारी एक सिंगल साइन-ऑन अकाउंट है। यह राजस्थान के हर निवासी — छात्र, सरकारी कर्मचारी और व्यापारी — को एक ही username और पासवर्ड से 100+ राज्य सरकार सेवाओं तक पहुंच देता है। यह सिस्टम 2013 से चालू है।",
  },
  examSeason: {
    title: {
      en: "Why searches for SSO ID spike around exam season",
      hi: "परीक्षा के मौसम में SSO ID की सर्च क्यों बढ़ जाती है",
    },
    body: {
      en: [
        "Every time RPSC or RSMSSB opens applications — CET, LDC recruitment, or the Patwari exam — traffic to SSO login pages jumps sharply in the days before the deadline. That is not a coincidence: the Recruitment Portal sits behind the same SSO login as everything else, and One-Time Registration (OTR) has to be completed before a candidate can even see the actual exam application form.",
        "The problem is timing. Most applicants only realise they need an SSO ID a few days before the last date, by which point any registration mistake — a mismatched name, an inactive mobile number, or a duplicate account from years ago — becomes urgent instead of a minor inconvenience.",
      ],
      hi: [
        "जब भी RPSC या RSMSSB आवेदन खोलते हैं — CET, LDC भर्ती, या पटवारी परीक्षा — अंतिम तिथि से पहले वाले दिनों में SSO लॉगिन पेज पर ट्रैफ़िक तेज़ी से बढ़ जाता है। यह संयोग नहीं है: भर्ती पोर्टल भी उसी SSO लॉगिन के पीछे है, और उम्मीदवार को परीक्षा आवेदन फॉर्म दिखने से पहले वन-टाइम रजिस्ट्रेशन (OTR) पूरा करना पड़ता है।",
        "असली दिक्कत समय की है। ज़्यादातर आवेदकों को अंतिम तिथि से कुछ ही दिन पहले पता चलता है कि उन्हें SSO ID चाहिए, और तब तक रजिस्ट्रेशन की कोई भी गलती — नाम का मेल न खाना, बंद मोबाइल नंबर, या सालों पुराना डुप्लिकेट अकाउंट — छोटी परेशानी की जगह बड़ी समस्या बन जाती है।",
      ],
    },
    linkPre: {
      en: "If you want the current application windows and exam dates for CET, LDC, and Patwari in one place, the",
      hi: "CET, LDC और पटवारी की मौजूदा आवेदन तिथियाँ और परीक्षा तिथियाँ एक ही जगह देखनी हों तो",
    },
    linkText: {
      en: "Exam Calendar",
      hi: "परीक्षा कैलेंडर",
    },
    linkPost: {
      en: "keeps them in a single table, updated as RPSC and RSSB publish new dates.",
      hi: "में सब एक टेबल में रहती हैं, जो RPSC और RSSB की नई तिथियों के साथ अपडेट होती हैं।",
    },
  },
  quickActionTitle: {
    en: "What do you need?",
    hi: "आपको क्या चाहिए?",
  },
  quickActionCols: {
    en: ["What do you need?", "Go here"],
    hi: ["आपको क्या चाहिए?", "यहाँ जाएं"],
  },
  quickActions: [
    {
      need: { en: "Create a new SSO ID", hi: "नई SSO ID बनाएं" },
      action: { en: "SSO ID Registration guide", hi: "SSO ID रजिस्ट्रेशन गाइड" },
      href: "/sso-id-registration",
    },
    {
      need: { en: "Log in to SSO", hi: "SSO में लॉगिन करें" },
      action: { en: "SSO ID Login guide", hi: "SSO ID लॉगिन गाइड" },
      href: "/sso-id-login",
    },
    {
      need: { en: "Forgot SSO ID", hi: "SSO ID भूल गए" },
      action: { en: "SMS 'RJ SSO' to 9223166166", hi: "9223166166 पर 'RJ SSO' SMS करें" },
      href: "/forgot-sso-id",
    },
    {
      need: { en: "PayManager salary slip", hi: "PayManager सैलरी स्लिप" },
      action: { en: "PayManager service guide", hi: "PayManager सेवा गाइड" },
      href: "/service/paymanager",
    },
    {
      need: { en: "Scholarship application", hi: "छात्रवृत्ति आवेदन" },
      action: { en: "Scholarships hub", hi: "छात्रवृत्ति हब" },
      href: "/scholarships",
    },
    {
      need: { en: "Exam registration (OTR)", hi: "परीक्षा रजिस्ट्रेशन (OTR)" },
      action: { en: "Exams hub", hi: "परीक्षा हब" },
      href: "/exams",
    },
  ],
  smsTitle: {
    en: "Fastest way to recover a forgotten SSO ID",
    hi: "भूली हुई SSO ID पाने का सबसे तेज़ तरीका",
  },
  smsBody: {
    en: "Send the SMS 'RJ SSO' to 9223166166 from the mobile number registered on your account. Your SSO ID arrives by return SMS within seconds — no browser or CAPTCHA needed. If your registered number has changed, update it at any e-Mitra kiosk with your Aadhaar card first.",
    hi: "अपने अकाउंट से रजिस्टर्ड मोबाइल नंबर से 9223166166 पर 'RJ SSO' SMS भेजें। आपकी SSO ID कुछ ही सेकंड में return SMS से आ जाएगी — न browser चाहिए, न CAPTCHA। अगर रजिस्टर्ड नंबर बदल गया है तो पहले किसी e-Mitra कियोस्क पर आधार कार्ड से उसे अपडेट करवाएं।",
  },
  aboutTitle: {
    en: "About This Guide",
    hi: "इस गाइड के बारे में",
  },
  aboutBody: {
    en: [
      "RajSSO Guide is an independent, free resource for Rajasthan residents who need straight answers about the SSO portal. It is not affiliated with the Government of Rajasthan or any government department.",
      "Every page is researched from primary government sources and updated whenever the SSO portal changes. The last full review of this page was 27 June 2026.",
    ],
    hi: [
      "RajSSO Guide राजस्थान के निवासियों के लिए एक स्वतंत्र, मुफ्त संसाधन है जो SSO पोर्टल के बारे में सीधे जवाब देता है। यह राजस्थान सरकार या किसी सरकारी विभाग से संबद्ध नहीं है।",
      "हर पेज प्राथमिक सरकारी स्रोतों से शोध करके बनाया जाता है और SSO पोर्टल बदलने पर अपडेट किया जाता है। इस पेज की अंतिम पूर्ण समीक्षा 27 जून 2026 को हुई।",
    ],
  },
  authorBioPrefix: {
    en: "Written and maintained by",
    hi: "लिखा और संभाला गया",
  },
  authorBio: {
    en: "Kamlesh Choudhary (devxkamlesh) — full-stack developer and web publisher based in Jaipur, Rajasthan.",
    hi: "कमलेश चौधरी (devxkamlesh) — जयपुर, राजस्थान स्थित फुल-स्टैक डेवलपर और वेब प्रकाशक।",
  },
  correctionNote: {
    en: "Found outdated information or an error? Report it and it gets fixed quickly. Contact our editorial team.",
    hi: "कोई पुरानी जानकारी या गलती मिली? रिपोर्ट करें, इसे जल्दी ठीक कर दिया जाएगा। संपादकीय टीम से संपर्क करें।",
  },
  sourcesTitle: {
    en: "Sources & Official References",
    hi: "स्रोत और आधिकारिक संदर्भ",
  },
  sourcesIntro: {
    en: "This guide is cross-checked against the following official Rajasthan government sources. Last verified: 27 June 2026.",
    hi: "यह गाइड नीचे दिए गए आधिकारिक राजस्थान सरकार स्रोतों से मिलान करके तैयार की गई है। अंतिम सत्यापन: 27 जून 2026।",
  },
  sources: [
    {
      url: "https://sso.rajasthan.gov.in",
      label: {
        en: "Official Rajasthan SSO portal (DoITC, GoR)",
        hi: "आधिकारिक राजस्थान SSO पोर्टल (DoITC, राज. सरकार)",
      },
    },
    {
      url: "https://sje.rajasthan.gov.in",
      label: {
        en: "Social Justice & Empowerment Department (scholarships)",
        hi: "सामाजिक न्याय एवं अधिकारिता विभाग (छात्रवृत्ति)",
      },
    },
    {
      url: "https://paymanager.rajasthan.gov.in",
      label: {
        en: "Finance Department — PayManager salary portal",
        hi: "वित्त विभाग — PayManager सैलरी पोर्टल",
      },
    },
    {
      url: "https://janaadhaar.rajasthan.gov.in",
      label: {
        en: "Jan Aadhaar official portal",
        hi: "जन आधार आधिकारिक पोर्टल",
      },
    },
    {
      url: "https://hte.rajasthan.gov.in",
      label: {
        en: "Higher & Technical Education Department",
        hi: "उच्च एवं तकनीकी शिक्षा विभाग",
      },
    },
    {
      url: "https://rpsc.rajasthan.gov.in",
      label: {
        en: "Rajasthan Public Service Commission (RPSC)",
        hi: "राजस्थान लोक सेवा आयोग (RPSC)",
      },
    },
    {
      url: "https://rsmssb.rajasthan.gov.in",
      label: {
        en: "Rajasthan Staff Selection Board (RSMSSB)",
        hi: "राजस्थान कर्मचारी चयन बोर्ड (RSMSSB)",
      },
    },
    {
      url: "https://sipf.rajasthan.gov.in",
      label: {
        en: "State Insurance & Provident Fund (SIPF)",
        hi: "राज्य बीमा एवं प्रावधायी निधि (SIPF)",
      },
    },
    {
      url: "https://emitra.rajasthan.gov.in",
      label: {
        en: "e-Mitra citizen services portal",
        hi: "ई-मित्र नागरिक सेवा पोर्टल",
      },
    },
  ],
  contactCta: { en: "Contact our editorial team.", hi: "संपादकीय टीम से संपर्क करें।" },
};
