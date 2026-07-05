// Additional bilingual pillar content for the home page: OTR, account merge,
// Jan Aadhaar updates, and official helpline contacts. Kept separate from
// home.ts/homeGuide.ts so each section stays easy to edit.
import type { Locale } from "@/lib/i18n";

type L<T> = Record<Locale, T>;

interface Row2 {
  a: string;
  b: string;
}
interface Block {
  title: string;
  steps: string[];
  note?: string;
}

export const homeExtra: {
  disclaimer: L<string>;

  otrTitle: L<string>;
  otrIntro: L<string[]>;
  otrSteps: L<string[]>;
  otrFeeTitle: L<string>;
  otrFeeCols: L<[string, string]>;
  otrFees: L<Row2[]>;
  otrNote: L<string>;

  mergeTitle: L<string>;
  mergeIntro: L<string[]>;
  mergeSteps: L<string[]>;
  mergeNote: L<string>;

  janTitle: L<string>;
  janIntro: L<string>;
  janPhases: L<Block[]>;
  janDocTitle: L<string>;
  janDocCols: L<[string, string]>;
  janDocs: L<Row2[]>;
  janNote: L<string>;

  helplineTitle: L<string>;
  helplineCols: L<[string, string]>;
  helplines: L<Row2[]>;
  helplineNote: L<string>;
} = {
  disclaimer: {
    en: "This is an independent, informational guide. All actual registrations, logins, and transactions must be completed on the official Rajasthan SSO portal at sso.rajasthan.gov.in.",
    hi: "यह एक स्वतंत्र, सूचनात्मक गाइड है। सभी वास्तविक रजिस्ट्रेशन, लॉगिन और लेन-देन आधिकारिक राजस्थान एसएसओ पोर्टल sso.rajasthan.gov.in पर ही पूरे करने चाहिए।",
  },

  otrTitle: {
    en: "One-Time Registration (OTR) for Government Recruitment",
    hi: "सरकारी भर्ती के लिए वन-टाइम रजिस्ट्रेशन (OTR)",
  },
  otrIntro: {
    en: [
      "If you plan to apply for Rajasthan government jobs, the Recruitment Portal's One-Time Registration (OTR) system is the gateway you will use repeatedly through the year.",
      "The idea is simple: pay a single registration fee once, then apply to multiple recruitment drives — CET, LDC, Patwari, and other RPSC or RSSB exams — without paying a separate fee for each one during that registration cycle.",
    ],
    hi: [
      "अगर आप राजस्थान सरकारी नौकरियों के लिए आवेदन करने की सोच रहे हैं, तो भर्ती पोर्टल का वन-टाइम रजिस्ट्रेशन (OTR) वह रास्ता है जिसका उपयोग आप साल भर बार-बार करेंगे।",
      "विचार सरल है: एक बार रजिस्ट्रेशन शुल्क दें, फिर उस रजिस्ट्रेशन चक्र में कई भर्तियों — CET, LDC, पटवारी और अन्य RPSC या RSSB परीक्षाओं — के लिए अलग-अलग शुल्क दिए बिना आवेदन करें।",
    ],
  },
  otrSteps: {
    en: [
      "Log in to your SSO account and open the Recruitment Portal.",
      "Click \"One Time Registration\" on the portal dashboard.",
      "Choose Aadhaar or Jan Aadhaar verification (recommended) — it auto-fills your name, father's name, date of birth, and gender from official records.",
      "Cross-check every auto-filled detail against your Class 10 marksheet; later corrections usually carry a separate fee (commonly cited around ₹300).",
      "Link your Academic Bank of Credits (ABC ID), if you have one, to sync your educational records digitally.",
    ],
    hi: [
      "अपने एसएसओ खाते में लॉगिन करें और भर्ती पोर्टल खोलें।",
      "पोर्टल डैशबोर्ड पर \"One Time Registration\" पर क्लिक करें।",
      "आधार या जन आधार सत्यापन चुनें (अनुशंसित) — यह आपका नाम, पिता का नाम, जन्म तिथि और लिंग आधिकारिक रिकॉर्ड से अपने-आप भर देता है।",
      "हर अपने-आप भरी गई जानकारी को अपनी कक्षा 10 की मार्कशीट से मिलाएं; बाद में सुधार पर आमतौर पर अलग शुल्क (लगभग ₹300) लगता है।",
      "यदि आपके पास Academic Bank of Credits (ABC ID) है तो उसे लिंक करें ताकि शैक्षिक रिकॉर्ड डिजिटल रूप से सिंक हो जाएं।",
    ],
  },
  otrFeeTitle: {
    en: "OTR fee structure",
    hi: "OTR शुल्क संरचना",
  },
  otrFeeCols: {
    en: ["Category", "Typical fee"],
    hi: ["श्रेणी", "सामान्य शुल्क"],
  },
  otrFees: {
    en: [
      { a: "General / OBC (Creamy Layer) / candidates from other states", b: "₹600" },
      { a: "SC / ST / OBC (Non-Creamy Layer) / EWS / PwD (Rajasthan domicile)", b: "₹400" },
    ],
    hi: [
      { a: "सामान्य / OBC (क्रीमी लेयर) / अन्य राज्यों के उम्मीदवार", b: "₹600" },
      { a: "SC / ST / OBC (नॉन-क्रीमी लेयर) / EWS / PwD (राजस्थान मूल निवासी)", b: "₹400" },
    ],
  },
  otrNote: {
    en: "Out-of-state candidates are generally treated as \"General\" for fee purposes regardless of their home-state category. Exact fees are set by RPSC and RSSB and can change, so confirm the current figure on the official recruitment notification before paying. Many high-security drives now require face authentication, so keep a working camera and a clear, well-lit space ready.",
    hi: "अन्य राज्यों के उम्मीदवारों को शुल्क के लिए आमतौर पर \"सामान्य\" माना जाता है, चाहे उनके गृह राज्य की श्रेणी कुछ भी हो। सटीक शुल्क RPSC और RSSB तय करते हैं और बदल सकते हैं, इसलिए भुगतान से पहले आधिकारिक भर्ती अधिसूचना पर मौजूदा राशि जांचें। कई हाई-सिक्योरिटी भर्तियों में अब फेस ऑथेंटिकेशन जरूरी है, इसलिए चालू कैमरा और अच्छी रोशनी वाली जगह तैयार रखें।",
  },

  mergeTitle: {
    en: "How to Merge Duplicate SSO IDs",
    hi: "डुप्लीकेट एसएसओ आईडी कैसे मर्ज करें",
  },
  mergeIntro: {
    en: [
      "A common situation: someone registers once through Google for convenience, then again through Jan Aadhaar when applying for a scholarship — ending up with two SSO IDs. Since an Aadhaar number can link to only one account, this duplication quietly blocks scholarship and recruitment services tied to that Aadhaar.",
      "The \"Deactivate Account\" option does not delete anything outright — it opens a merge flow that safely transfers your data into a single primary account.",
    ],
    hi: [
      "एक आम स्थिति: कोई सुविधा के लिए एक बार Google से रजिस्टर करता है, फिर छात्रवृत्ति के लिए जन आधार से दोबारा — और दो एसएसओ आईडी बन जाती हैं। चूंकि एक आधार नंबर केवल एक खाते से जुड़ सकता है, यह डुप्लीकेशन उस आधार से जुड़ी छात्रवृत्ति व भर्ती सेवाओं को चुपचाप रोक देता है।",
      "\"Deactivate Account\" विकल्प कुछ भी सीधे नहीं मिटाता — यह एक मर्ज प्रक्रिया खोलता है जो आपका डेटा सुरक्षित रूप से एक प्राथमिक खाते में स्थानांतरित कर देता है।",
    ],
  },
  mergeSteps: {
    en: [
      "Log in to the account you want to close — typically the newer or less-used citizen ID.",
      "Open Edit Profile using the pencil icon at the top of your dashboard.",
      "Click \"Deactivate Account,\" then choose the Merge option from the dialog.",
      "Verify your identity with an OTP, then enter the SSO ID of the account you want to keep as primary.",
      "Confirm the merge. Your data transfers to the primary account and the duplicate is permanently closed.",
    ],
    hi: [
      "उस खाते में लॉगिन करें जिसे आप बंद करना चाहते हैं — आमतौर पर नई या कम इस्तेमाल हुई सिटीजन आईडी।",
      "डैशबोर्ड के ऊपर पेंसिल आइकन से Edit Profile खोलें।",
      "\"Deactivate Account\" पर क्लिक करें, फिर डायलॉग से Merge विकल्प चुनें।",
      "ओटीपी से अपनी पहचान सत्यापित करें, फिर उस एसएसओ आईडी को दर्ज करें जिसे आप प्राथमिक रखना चाहते हैं।",
      "मर्ज की पुष्टि करें। आपका डेटा प्राथमिक खाते में चला जाता है और डुप्लीकेट स्थायी रूप से बंद हो जाता है।",
    ],
  },
  mergeNote: {
    en: "Double-check at step one that you are logged into the account you intend to close, not the one you intend to keep — this single mix-up is the most common merge mistake.",
    hi: "पहले चरण में दोबारा जांचें कि आप उसी खाते में लॉगिन हैं जिसे बंद करना है, उस खाते में नहीं जिसे रखना है — यही एक गलती मर्ज में सबसे आम है।",
  },

  janTitle: {
    en: "Updating Jan Aadhaar Details Through SSO",
    hi: "एसएसओ के माध्यम से जन आधार विवरण अपडेट करना",
  },
  janIntro: {
    en: "Many welfare schemes — including Chiranjeevi health insurance and various scholarship schemes — require an up-to-date Jan Aadhaar record. Updates are free and handled in two phases.",
    hi: "कई कल्याण योजनाओं — जिनमें चिरंजीवी स्वास्थ्य बीमा और विभिन्न छात्रवृत्ति योजनाएं शामिल हैं — के लिए अद्यतन जन आधार रिकॉर्ड जरूरी है। अपडेट मुफ़्त हैं और दो चरणों में होते हैं।",
  },
  janPhases: {
    en: [
      {
        title: "Phase 1 — E-KYC (mandatory first step)",
        steps: [
          "Every family member above five years of age must complete E-KYC before any other detail can be edited.",
          "Log in, open the Jan Aadhaar section, and select the E-KYC option.",
          "Authenticate each member with an Aadhaar OTP.",
        ],
      },
      {
        title: "Phase 2 — Editing specific details",
        steps: [
          "Once E-KYC is complete, update income, bank account details, mobile number, or address.",
          "Each type of update needs a specific supporting document (see the table below).",
          "After uploading, the request goes through a two-level verification that typically takes one to two weeks.",
        ],
      },
    ],
    hi: [
      {
        title: "चरण 1 — ई-केवाईसी (अनिवार्य पहला कदम)",
        steps: [
          "कोई भी अन्य विवरण संपादित करने से पहले पांच वर्ष से ऊपर के हर परिवार सदस्य को ई-केवाईसी पूरी करनी होगी।",
          "लॉगिन करें, जन आधार सेक्शन खोलें और E-KYC विकल्प चुनें।",
          "प्रत्येक सदस्य को आधार ओटीपी से प्रमाणित करें।",
        ],
      },
      {
        title: "चरण 2 — विशिष्ट विवरण संपादित करना",
        steps: [
          "ई-केवाईसी पूरी होने पर आय, बैंक खाता विवरण, मोबाइल नंबर या पता अपडेट करें।",
          "हर प्रकार के अपडेट के लिए एक विशिष्ट सहायक दस्तावेज़ चाहिए (नीचे तालिका देखें)।",
          "अपलोड के बाद अनुरोध दो-स्तरीय सत्यापन से गुजरता है, जिसमें आमतौर पर एक से दो सप्ताह लगते हैं।",
        ],
      },
    ],
  },
  janDocTitle: {
    en: "Documents required by update type",
    hi: "अपडेट प्रकार अनुसार आवश्यक दस्तावेज़",
  },
  janDocCols: {
    en: ["Update type", "Document required"],
    hi: ["अपडेट प्रकार", "आवश्यक दस्तावेज़"],
  },
  janDocs: {
    en: [
      { a: "Income", b: "Self-declaration or income certificate" },
      { a: "Bank details", b: "Passbook copy or a cancelled cheque" },
      { a: "New family member", b: "Birth certificate and Aadhaar card" },
      { a: "Marriage record", b: "Marriage certificate" },
      { a: "Land / farmer details", b: "Jamabandi (land record)" },
    ],
    hi: [
      { a: "आय", b: "स्व-घोषणा या आय प्रमाण पत्र" },
      { a: "बैंक विवरण", b: "पासबुक की कॉपी या कैंसिल चेक" },
      { a: "नया परिवार सदस्य", b: "जन्म प्रमाण पत्र और आधार कार्ड" },
      { a: "विवाह रिकॉर्ड", b: "विवाह प्रमाण पत्र" },
      { a: "भूमि / किसान विवरण", b: "जमाबंदी (भू-अभिलेख)" },
    ],
  },
  janNote: {
    en: "Track progress under \"Enrolment Status\" in your Jan Aadhaar dashboard — a green checkmark means approved, while a red cross means the request was rejected (usually an unclear scan) and needs to be re-submitted with a better copy.",
    hi: "अपने जन आधार डैशबोर्ड में \"Enrolment Status\" के तहत प्रगति देखें — हरा चेकमार्क स्वीकृत दर्शाता है, जबकि लाल क्रॉस अस्वीकृति (आमतौर पर अस्पष्ट स्कैन) दर्शाता है, जिसे बेहतर कॉपी के साथ दोबारा जमा करना होगा।",
  },

  helplineTitle: {
    en: "Official Helpline and Support Contacts",
    hi: "आधिकारिक हेल्पलाइन और सहायता संपर्क",
  },
  helplineCols: {
    en: ["Service", "Contact"],
    hi: ["सेवा", "संपर्क"],
  },
  helplines: {
    en: [
      { a: "General Helpline", b: "0141-5153222 / 0141-2925554 / 0141-5123717" },
      { a: "Jan Aadhaar Toll-Free", b: "1800-180-6127" },
      { a: "Grievance / Rajasthan Sampark", b: "181" },
      { a: "Support Hours", b: "Monday–Friday, 10:00 AM – 6:00 PM" },
    ],
    hi: [
      { a: "सामान्य हेल्पलाइन", b: "0141-5153222 / 0141-2925554 / 0141-5123717" },
      { a: "जन आधार टोल-फ्री", b: "1800-180-6127" },
      { a: "शिकायत / राजस्थान संपर्क", b: "181" },
      { a: "सहायता समय", b: "सोमवार–शुक्रवार, सुबह 10:00 – शाम 6:00" },
    ],
  },
  helplineNote: {
    en: "Helpline numbers and support hours are occasionally revised, so check the official sso.rajasthan.gov.in contact page if a number listed here does not connect.",
    hi: "हेल्पलाइन नंबर और सहायता समय कभी-कभी बदलते रहते हैं, इसलिए यदि यहां दिया गया कोई नंबर न लगे तो आधिकारिक sso.rajasthan.gov.in संपर्क पेज देखें।",
  },
};
