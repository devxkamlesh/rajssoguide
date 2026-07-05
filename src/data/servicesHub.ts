// Supplementary SEO content for the /services hub (index) page, bilingual.
// The page already ships rich editorial prose; this file adds the
// schema-ready FAQ, a category comparison table, quick reference, and
// EEAT/safety blocks so the hub can compete for the head term
// "Rajasthan SSO services" without bloating the component.
import type { Locale } from "@/lib/i18n";
import type { FaqItem } from "@/lib/schema";

type Bi<T> = Record<Locale, T>;

export interface CategoryRow {
  audience: string;
  services: string;
  registerWith: string;
}

export const servicesHub = {
  metaTitle: {
    en: "Rajasthan SSO Services 2026 — PayManager, RajKaj, Jan Aadhaar & e-Mitra",
    hi: "राजस्थान एसएसओ सेवाएं 2026 — PayManager, RajKaj, जन आधार और ई-मित्र",
  } as Bi<string>,
  metaDescription: {
    en: "Full list of Rajasthan SSO ID services and how to use them — e-Mitra, PayManager salary slip, RajKaj leave, Jan Aadhaar e-KYC, scholarships and recruitment, all from one login at sso.rajasthan.gov.in.",
    hi: "राजस्थान एसएसओ आईडी सेवाओं की पूरी सूची और उपयोग — ई-मित्र, PayManager सैलरी स्लिप, RajKaj छुट्टी, जन आधार ई-केवाईसी, छात्रवृत्ति और भर्ती, सब sso.rajasthan.gov.in पर एक लॉगिन से।",
  } as Bi<string>,

  lastVerified: "2026-06-18",

  // Category comparison table: audience -> services -> how to register
  categoryTitle: {
    en: "SSO services by user type",
    hi: "उपयोगकर्ता प्रकार अनुसार एसएसओ सेवाएं",
  } as Bi<string>,
  categoryCols: {
    en: ["You are a…", "Key services", "Register with"],
    hi: ["आप हैं…", "प्रमुख सेवाएं", "रजिस्टर करें"],
  } as Bi<[string, string, string]>,
  categoryRows: {
    en: [
      {
        audience: "Citizen / Student",
        services: "e-Mitra, Scholarships, Jan Aadhaar, Recruitment, Bill payment",
        registerWith: "Jan Aadhaar / Aadhaar / Google",
      },
      {
        audience: "Government Employee",
        services: "PayManager, RajKaj, IFMS, SIPF, Shala Darpan",
        registerWith: "SIPF number",
      },
      {
        audience: "Business / Udyog",
        services: "GST, e-licensing, business registrations",
        registerWith: "BRN / Udyog Aadhaar",
      },
    ],
    hi: [
      {
        audience: "नागरिक / छात्र",
        services: "ई-मित्र, छात्रवृत्ति, जन आधार, भर्ती, बिल भुगतान",
        registerWith: "जन आधार / आधार / Google",
      },
      {
        audience: "सरकारी कर्मचारी",
        services: "PayManager, RajKaj, IFMS, SIPF, शाला दर्पण",
        registerWith: "SIPF नंबर",
      },
      {
        audience: "व्यवसाय / उद्योग",
        services: "GST, ई-लाइसेंसिंग, व्यवसाय रजिस्ट्रेशन",
        registerWith: "BRN / उद्योग आधार",
      },
    ],
  } as Bi<CategoryRow[]>,

  // Quick reference of official portals
  quickRefTitle: {
    en: "Official service portals (quick reference)",
    hi: "आधिकारिक सेवा पोर्टल (त्वरित संदर्भ)",
  } as Bi<string>,
  quickRef: {
    en: [
      { a: "SSO login portal", b: "sso.rajasthan.gov.in" },
      { a: "PayManager", b: "paymanager.rajasthan.gov.in" },
      { a: "RajKaj (e-Office)", b: "rajkaj.rajasthan.gov.in" },
      { a: "Recruitment portal", b: "recruitment.rajasthan.gov.in" },
      { a: "SSO helpdesk", b: "0141-5153222" },
    ],
    hi: [
      { a: "एसएसओ लॉगिन पोर्टल", b: "sso.rajasthan.gov.in" },
      { a: "PayManager", b: "paymanager.rajasthan.gov.in" },
      { a: "RajKaj (ई-ऑफिस)", b: "rajkaj.rajasthan.gov.in" },
      { a: "भर्ती पोर्टल", b: "recruitment.rajasthan.gov.in" },
      { a: "एसएसओ हेल्पडेस्क", b: "0141-5153222" },
    ],
  } as Bi<{ a: string; b: string }[]>,

  faqs: {
    en: [
      {
        question: "How many services can I access with one SSO ID?",
        answer:
          "A single SSO ID gives access to more than 100 Rajasthan government services — including e-Mitra, scholarships, recruitment, Jan Aadhaar, PayManager and RajKaj — all from one dashboard at sso.rajasthan.gov.in.",
      },
      {
        question: "Do I need a separate login for PayManager or RajKaj?",
        answer:
          "No. Government employees open PayManager and RajKaj directly from the SSO dashboard after a single login. Your authentication is passed automatically, so no second password is needed.",
      },
      {
        question: "Which services can ordinary citizens use?",
        answer:
          "Citizens can use e-Mitra bill payment and certificates, scholarship applications, Jan Aadhaar e-KYC, land records (Apna Khata), and apply for RPSC/RSSB recruitment after one-time registration (OTR).",
      },
      {
        question: "Are SSO services free to use?",
        answer:
          "Logging in and accessing services is free. Some transactions — like certain e-Mitra certificates, bill payments, or exam fees — carry the standard government charge for that specific service.",
      },
      {
        question: "Is this the official Rajasthan services portal?",
        answer:
          "No. RajSSO Guide is an independent informational website and is not affiliated with the Government of Rajasthan. The official portal is sso.rajasthan.gov.in.",
      },
    ],
    hi: [
      {
        question: "एक एसएसओ आईडी से कितनी सेवाएं उपयोग कर सकते हैं?",
        answer:
          "एक ही एसएसओ आईडी से 100 से अधिक राजस्थान सरकारी सेवाएं उपलब्ध हैं — ई-मित्र, छात्रवृत्ति, भर्ती, जन आधार, PayManager और RajKaj सहित — sso.rajasthan.gov.in पर एक डैशबोर्ड से।",
      },
      {
        question: "क्या PayManager या RajKaj के लिए अलग लॉगिन चाहिए?",
        answer:
          "नहीं। सरकारी कर्मचारी एक बार लॉगिन के बाद PayManager और RajKaj सीधे एसएसओ डैशबोर्ड से खोलते हैं। प्रमाणीकरण अपने-आप पास हो जाता है, दूसरे पासवर्ड की ज़रूरत नहीं।",
      },
      {
        question: "आम नागरिक कौन-सी सेवाएं उपयोग कर सकते हैं?",
        answer:
          "नागरिक ई-मित्र बिल भुगतान व प्रमाण-पत्र, छात्रवृत्ति आवेदन, जन आधार ई-केवाईसी, भू-अभिलेख (अपना खाता), और वन-टाइम रजिस्ट्रेशन (OTR) के बाद RPSC/RSSB भर्ती के लिए आवेदन कर सकते हैं।",
      },
      {
        question: "क्या एसएसओ सेवाएं नि:शुल्क हैं?",
        answer:
          "लॉगिन और सेवाओं तक पहुँच मुफ़्त है। कुछ लेन-देन — जैसे कुछ ई-मित्र प्रमाण-पत्र, बिल भुगतान या परीक्षा शुल्क — पर उस सेवा का मानक सरकारी शुल्क लगता है।",
      },
      {
        question: "क्या यह आधिकारिक राजस्थान सेवा पोर्टल है?",
        answer:
          "नहीं। RajSSO Guide एक स्वतंत्र सूचनात्मक वेबसाइट है और राजस्थान सरकार से संबद्ध नहीं है। आधिकारिक पोर्टल sso.rajasthan.gov.in है।",
      },
    ],
  } as Bi<FaqItem[]>,
};

// Long-form editorial sections to push the services hub past the
// 1500-word depth threshold with substantive, accurate guidance.
export interface ProseSection {
  title: Bi<string>;
  body: Bi<string[]>;
}

export const servicesLong: ProseSection[] = [
  {
    title: {
      en: "One login, the whole of Rajasthan's e-governance",
      hi: "एक लॉगिन, राजस्थान का पूरा ई-गवर्नेंस",
    },
    body: {
      en: [
        "The real strength of the Rajasthan SSO portal is not any single service but the way it ties them together. A teacher can download a salary slip on PayManager, apply for leave on RajKaj, and check a family member's Jan Aadhaar status without logging in three separate times. A student can pay an exam fee, apply for a post-matric scholarship, and download a domicile certificate from e-Mitra in one sitting. This consolidation is what e-governance was meant to deliver, and it is the reason more than 100 services now sit behind a single SSO ID.",
        "For most people the journey starts with a practical need — a bill that is due, an exam notification, a scholarship deadline — rather than an interest in the portal itself. That is why this page groups services the way real users think about them: by who you are and what you are trying to finish today. Once you know which service you need, the linked guides explain exactly how to reach it from your dashboard.",
      ],
      hi: [
        "राजस्थान एसएसओ पोर्टल की असली ताकत कोई एक सेवा नहीं, बल्कि उन्हें आपस में जोड़ने का तरीका है। एक शिक्षक PayManager पर सैलरी स्लिप डाउनलोड कर सकता है, RajKaj पर छुट्टी के लिए आवेदन कर सकता है, और परिवार सदस्य की जन आधार स्थिति जांच सकता है — तीन बार अलग-अलग लॉगिन किए बिना। एक छात्र परीक्षा शुल्क भर सकता है, पोस्ट-मैट्रिक छात्रवृत्ति के लिए आवेदन कर सकता है, और ई-मित्र से मूल निवास प्रमाण-पत्र एक ही बैठक में डाउनलोड कर सकता है। यही समेकन ई-गवर्नेंस का लक्ष्य था, और यही कारण है कि अब 100 से अधिक सेवाएं एक एसएसओ आईडी के पीछे हैं।",
        "अधिकांश लोगों की यात्रा पोर्टल में रुचि से नहीं, बल्कि एक व्यावहारिक ज़रूरत से शुरू होती है — एक बकाया बिल, परीक्षा नोटिफिकेशन, छात्रवृत्ति की अंतिम तिथि। इसीलिए यह पेज सेवाओं को उसी तरह समूहित करता है जैसे वास्तविक उपयोगकर्ता सोचते हैं: आप कौन हैं और आज क्या पूरा करना चाहते हैं। जब आप जान जाते हैं कि कौन-सी सेवा चाहिए, तो लिंक की गई गाइड्स बताती हैं कि उसे अपने डैशबोर्ड से कैसे पहुंचें।",
      ],
    },
  },
  {
    title: {
      en: "Most-used services explained",
      hi: "सबसे अधिक उपयोग होने वाली सेवाएं समझें",
    },
    body: {
      en: [
        "e-Mitra is the busiest service for ordinary citizens. Through it you can pay electricity, water, and other utility bills, apply for more than 500 certificates and documents such as income, caste, and domicile certificates, and submit applications to various schemes. Payments can be made from your e-Mitra wallet or by net banking, and most receipts are available to download immediately.",
        "PayManager is the pay-bill preparation system for Rajasthan state employees, used mainly to generate and download monthly salary slips, view pay history, and check deductions. RajKaj is the integrated e-Office where employees apply for leave, file their Annual Performance Appraisal Report (APAR), submit property returns, and manage official correspondence — replacing paper files with a digital workflow.",
        "Jan Aadhaar is the state's family-based identity and benefit-transfer system. Through the portal you can complete e-KYC, check enrolment status, and add or update family members, which keeps your scholarship and direct-benefit payments flowing. The Recruitment Portal handles RPSC and RSSB applications through One-Time Registration, while the SJE portal manages the SC, ST, OBC, MBC, EWS, and minority scholarship schemes.",
      ],
      hi: [
        "ई-मित्र आम नागरिकों के लिए सबसे व्यस्त सेवा है। इसके माध्यम से आप बिजली, पानी और अन्य उपयोगिता बिल भर सकते हैं, आय, जाति और मूल निवास जैसे 500 से अधिक प्रमाण-पत्र व दस्तावेज़ों के लिए आवेदन कर सकते हैं, और विभिन्न योजनाओं में आवेदन जमा कर सकते हैं। भुगतान आपके ई-मित्र वॉलेट या नेट बैंकिंग से किया जा सकता है, और अधिकांश रसीदें तुरंत डाउनलोड के लिए उपलब्ध होती हैं।",
        "PayManager राजस्थान राज्य कर्मचारियों के लिए पे-बिल तैयारी प्रणाली है, जो मुख्यतः मासिक सैलरी स्लिप बनाने व डाउनलोड करने, वेतन इतिहास देखने और कटौती जांचने में उपयोग होती है। RajKaj एकीकृत ई-ऑफिस है जहां कर्मचारी छुट्टी के लिए आवेदन करते हैं, अपनी वार्षिक प्रदर्शन मूल्यांकन रिपोर्ट (APAR) भरते हैं, संपत्ति विवरण जमा करते हैं, और आधिकारिक पत्राचार प्रबंधित करते हैं — कागज़ी फाइलों की जगह डिजिटल वर्कफ़्लो।",
        "जन आधार राज्य की परिवार-आधारित पहचान व लाभ-हस्तांतरण प्रणाली है। पोर्टल से आप ई-केवाईसी पूरी कर सकते हैं, नामांकन स्थिति जांच सकते हैं, और परिवार के सदस्य जोड़ या अपडेट कर सकते हैं, जिससे आपकी छात्रवृत्ति व प्रत्यक्ष-लाभ भुगतान चलते रहते हैं। भर्ती पोर्टल वन-टाइम रजिस्ट्रेशन के माध्यम से RPSC और RSSB आवेदन संभालता है, जबकि SJE पोर्टल SC, ST, OBC, MBC, EWS और अल्पसंख्यक छात्रवृत्ति योजनाएं प्रबंधित करता है।",
      ],
    },
  },
  {
    title: {
      en: "Getting the most from your SSO dashboard",
      hi: "अपने एसएसओ डैशबोर्ड का अधिकतम उपयोग",
    },
    body: {
      en: [
        "After you log in, the dashboard shows a grid of service icons tailored to your account type. If you cannot see a service you expected, use the search bar at the top to find it by name rather than scrolling — the catalogue is large. Pinning or remembering the few services you use often saves time, and clicking any icon hands your authentication straight to that department's portal, so you are never asked to log in twice.",
        "A few habits prevent the most common frustrations. Use an up-to-date Chrome or Edge browser for the best compatibility, and clear your cache if a service opens to a blank page. Avoid pressing the browser back button midway through a form, because partly submitted government forms can fail silently. On a shared or public computer, always log out of your SSO session when you finish, and never save the password in a browser that other people use.",
      ],
      hi: [
        "लॉगिन के बाद डैशबोर्ड आपके अकाउंट प्रकार के अनुसार सेवा आइकनों की एक ग्रिड दिखाता है। यदि अपेक्षित सेवा न दिखे, तो स्क्रॉल करने के बजाय शीर्ष पर दिए सर्च बार से उसे नाम से खोजें — कैटलॉग बड़ा है। जिन कुछ सेवाओं का आप अक्सर उपयोग करते हैं उन्हें याद रखना समय बचाता है, और किसी भी आइकन पर क्लिक करने से आपका प्रमाणीकरण सीधे उस विभाग के पोर्टल को मिल जाता है, इसलिए आपसे कभी दोबारा लॉगिन नहीं मांगा जाता।",
        "कुछ आदतें सबसे आम परेशानियां रोकती हैं। सर्वोत्तम संगतता के लिए अद्यतन Chrome या Edge ब्राउज़र उपयोग करें, और यदि कोई सेवा खाली पेज पर खुले तो कैश साफ़ करें। फॉर्म भरते बीच में ब्राउज़र का बैक बटन न दबाएं, क्योंकि आंशिक रूप से जमा सरकारी फॉर्म चुपचाप विफल हो सकते हैं। साझा या सार्वजनिक कंप्यूटर पर काम पूरा होने पर हमेशा अपना एसएसओ सत्र लॉगआउट करें, और दूसरों द्वारा उपयोग किए जाने वाले ब्राउज़र में पासवर्ड कभी न सहेजें।",
      ],
    },
  },
  {
    title: {
      en: "Accuracy and our independent role",
      hi: "सटीकता और हमारी स्वतंत्र भूमिका",
    },
    body: {
      en: [
        "Service availability, portal links, and procedures are updated by the government from time to time. We review the services listed here against the official portals and refresh the 'last verified' date shown above when we do. For any transaction that involves a payment or a legal document, always complete and confirm it on the official portal rather than relying on a summary.",
        "RajSSO Guide is an independent informational website and is not affiliated with the Government of Rajasthan. We explain how the services work in plain Hindi and English so you can act with confidence, but the authoritative source is always sso.rajasthan.gov.in and the linked department portals. For account or transaction issues that only the department can resolve, contact the SSO helpdesk on 0141-5153222 or helpdesk.sso@rajasthan.gov.in.",
      ],
      hi: [
        "सेवा उपलब्धता, पोर्टल लिंक और प्रक्रियाएं सरकार द्वारा समय-समय पर अपडेट होती हैं। हम यहां सूचीबद्ध सेवाओं की आधिकारिक पोर्टलों के विरुद्ध समीक्षा करते हैं और ऐसा करने पर ऊपर दिखाई 'अंतिम सत्यापित' तिथि ताज़ा करते हैं। किसी भी ऐसे लेन-देन के लिए जिसमें भुगतान या कानूनी दस्तावेज़ शामिल हो, सारांश पर भरोसा करने के बजाय हमेशा आधिकारिक पोर्टल पर ही पूरा कर पुष्टि करें।",
        "RajSSO Guide एक स्वतंत्र सूचनात्मक वेबसाइट है और राजस्थान सरकार से संबद्ध नहीं है। हम सेवाओं के काम करने का तरीका सरल हिंदी व अंग्रेज़ी में समझाते हैं ताकि आप आत्मविश्वास से कार्य कर सकें, पर आधिकारिक स्रोत हमेशा sso.rajasthan.gov.in और लिंक किए विभाग पोर्टल ही हैं। केवल विभाग द्वारा हल होने वाली अकाउंट या लेन-देन समस्याओं के लिए एसएसओ हेल्पडेस्क 0141-5153222 या helpdesk.sso@rajasthan.gov.in पर संपर्क करें।",
      ],
    },
  },
];
