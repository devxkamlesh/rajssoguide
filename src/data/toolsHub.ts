// Editorial content for the /tools hub (index) page, bilingual.
// Targets "Rajasthan SSO tools / SSO ID tools" and routes users to the
// free browser-based utilities. Kept separate from rendering so copy can
// be edited without touching the page component.
import type { Locale } from "@/lib/i18n";
import type { FaqItem } from "@/lib/schema";

type Bi<T> = Record<Locale, T>;

export interface ToolItem {
  slug: string;
  name: Bi<string>;
  desc: Bi<string>;
}

export const toolsHub = {
  metaTitle: {
    en: "Free SSO & Rajasthan Government Tools 2026 — OTR Fee, Age & Photo Resizer",
    hi: "मुफ़्त एसएसओ व राजस्थान सरकारी टूल्स 2026 — OTR फीस, आयु व फोटो रिसाइज़र",
  } as Bi<string>,
  metaDescription: {
    en: "Free online tools for Rajasthan SSO users, students and job seekers — OTR fee calculator, age & exam eligibility calculator, SSO ID validator, scholarship calculator, photo resizer and Jan Aadhaar status checker. No login, no data stored.",
    hi: "राजस्थान एसएसओ उपयोगकर्ताओं, छात्रों व नौकरी आवेदकों के लिए मुफ़्त ऑनलाइन टूल्स — OTR फीस कैलकुलेटर, आयु व परीक्षा पात्रता कैलकुलेटर, एसएसओ आईडी वैलिडेटर, छात्रवृत्ति कैलकुलेटर, फोटो रिसाइज़र और जन आधार स्थिति चेकर। कोई लॉगिन नहीं, कोई डेटा संग्रहीत नहीं।",
  } as Bi<string>,

  h1: {
    en: "Free SSO & Government Tools",
    hi: "मुफ़्त एसएसओ व सरकारी टूल्स",
  } as Bi<string>,
  lead: {
    en: "These free tools help Rajasthan SSO users, students, and job seekers with everyday tasks — checking exam fees, confirming age eligibility, resizing application photos, and more. Every tool runs entirely in your browser: there is no login, nothing is uploaded, and no data is stored.",
    hi: "ये मुफ़्त टूल राजस्थान एसएसओ उपयोगकर्ताओं, छात्रों और नौकरी आवेदकों के रोज़मर्रा के कामों में मदद करते हैं — परीक्षा शुल्क जांचना, आयु पात्रता पुष्टि करना, आवेदन फोटो रिसाइज़ करना, और बहुत कुछ। हर टूल पूरी तरह आपके ब्राउज़र में चलता है: कोई लॉगिन नहीं, कुछ अपलोड नहीं होता, और कोई डेटा संग्रहीत नहीं होता।",
  } as Bi<string>,

  lastVerified: "2026-06-18",

  tools: [
    {
      slug: "otr-fee-calculator",
      name: { en: "OTR Fee Calculator", hi: "ओटीआर फीस कैलकुलेटर" },
      desc: {
        en: "Check category-wise One-Time Registration fees for RPSC and RSSB exams.",
        hi: "RPSC व RSSB परीक्षाओं के लिए श्रेणी अनुसार वन-टाइम रजिस्ट्रेशन शुल्क जांचें।",
      },
    },
    {
      slug: "age-calculator",
      name: { en: "Age Calculator", hi: "आयु कैलकुलेटर" },
      desc: {
        en: "Calculate your exact age on any cut-off date to confirm exam eligibility.",
        hi: "परीक्षा पात्रता पुष्टि करने के लिए किसी भी कट-ऑफ तिथि पर अपनी सटीक आयु निकालें।",
      },
    },
    {
      slug: "sso-id-validator",
      name: { en: "SSO ID Validator", hi: "एसएसओ आईडी वैलिडेटर" },
      desc: {
        en: "Check whether your SSO ID username follows the allowed format.",
        hi: "जांचें कि आपका एसएसओ आईडी यूज़रनेम अनुमत फॉर्मेट का है या नहीं।",
      },
    },
    {
      slug: "scholarship-calculator",
      name: { en: "Scholarship Calculator", hi: "छात्रवृत्ति कैलकुलेटर" },
      desc: {
        en: "Estimate scholarship eligibility by category, income and course.",
        hi: "श्रेणी, आय और कोर्स अनुसार छात्रवृत्ति पात्रता का अनुमान लगाएं।",
      },
    },
    {
      slug: "photo-resizer",
      name: { en: "Photo Resizer", hi: "फोटो रिसाइज़र" },
      desc: {
        en: "Resize and compress photos and signatures to meet form upload limits.",
        hi: "फॉर्म अपलोड सीमा के अनुसार फोटो व हस्ताक्षर रिसाइज़ और कंप्रेस करें।",
      },
    },
    {
      slug: "jan-aadhaar-status",
      name: { en: "Jan Aadhaar Status Checker", hi: "जन आधार स्थिति चेकर" },
      desc: {
        en: "Find the official link and steps to check your Jan Aadhaar enrolment status.",
        hi: "जन आधार नामांकन स्थिति जांचने का आधिकारिक लिंक और चरण पाएं।",
      },
    },
  ] as ToolItem[],

  // Why use these tools
  whyTitle: {
    en: "Why use these tools?",
    hi: "इन टूल्स का उपयोग क्यों करें?",
  } as Bi<string>,
  whyPoints: {
    en: [
      "100% free — no account or SSO login required.",
      "Privacy-first — everything runs in your browser, nothing is uploaded.",
      "Built for Rajasthan exams, scholarships and SSO forms.",
      "Works on mobile and desktop, in Hindi and English.",
    ],
    hi: [
      "100% मुफ़्त — कोई अकाउंट या एसएसओ लॉगिन ज़रूरी नहीं।",
      "गोपनीयता-प्रथम — सब कुछ ब्राउज़र में चलता है, कुछ अपलोड नहीं होता।",
      "राजस्थान परीक्षाओं, छात्रवृत्ति और एसएसओ फॉर्म के लिए बनाए गए।",
      "मोबाइल व डेस्कटॉप पर, हिंदी और अंग्रेज़ी दोनों में काम करते हैं।",
    ],
  } as Bi<string[]>,

  faqs: {
    en: [
      {
        question: "Are these SSO tools free to use?",
        answer:
          "Yes. Every tool on this page is completely free. You do not need an SSO ID, an account, or any login to use them.",
      },
      {
        question: "Do these tools store my personal data?",
        answer:
          "No. The tools run entirely in your browser. Nothing you type or upload is sent to a server or stored — your data stays on your device.",
      },
      {
        question: "Which tool should I use to check exam fees?",
        answer:
          "Use the OTR Fee Calculator. It shows the category-wise one-time registration fees for RPSC and RSSB recruitment so you know the exact amount before paying.",
      },
      {
        question: "How do I resize a photo for an SSO or exam form?",
        answer:
          "Open the Photo Resizer, upload your photo or signature, and adjust the dimensions and file size to match the form's upload limit before downloading.",
      },
      {
        question: "Are these official Rajasthan government tools?",
        answer:
          "No. RajSSO Guide is an independent informational website and is not affiliated with the Government of Rajasthan. The official portal is sso.rajasthan.gov.in.",
      },
    ],
    hi: [
      {
        question: "क्या ये एसएसओ टूल्स मुफ़्त हैं?",
        answer:
          "हाँ। इस पेज का हर टूल पूरी तरह मुफ़्त है। इन्हें उपयोग करने के लिए आपको एसएसओ आईडी, अकाउंट या किसी लॉगिन की ज़रूरत नहीं।",
      },
      {
        question: "क्या ये टूल्स मेरा निजी डेटा संग्रहीत करते हैं?",
        answer:
          "नहीं। टूल्स पूरी तरह आपके ब्राउज़र में चलते हैं। आप जो टाइप या अपलोड करते हैं वह किसी सर्वर पर नहीं भेजा जाता और न संग्रहीत होता है — आपका डेटा आपके डिवाइस पर ही रहता है।",
      },
      {
        question: "परीक्षा शुल्क जांचने के लिए कौन-सा टूल उपयोग करूं?",
        answer:
          "OTR फीस कैलकुलेटर का उपयोग करें। यह RPSC और RSSB भर्ती के लिए श्रेणी अनुसार वन-टाइम रजिस्ट्रेशन शुल्क दिखाता है ताकि भुगतान से पहले सही राशि पता हो।",
      },
      {
        question: "एसएसओ या परीक्षा फॉर्म के लिए फोटो कैसे रिसाइज़ करूं?",
        answer:
          "फोटो रिसाइज़र खोलें, अपनी फोटो या हस्ताक्षर अपलोड करें, और डाउनलोड से पहले फॉर्म की अपलोड सीमा के अनुसार आयाम व फाइल साइज़ समायोजित करें।",
      },
      {
        question: "क्या ये आधिकारिक राजस्थान सरकारी टूल्स हैं?",
        answer:
          "नहीं। RajSSO Guide एक स्वतंत्र सूचनात्मक वेबसाइट है और राजस्थान सरकार से संबद्ध नहीं है। आधिकारिक पोर्टल sso.rajasthan.gov.in है।",
      },
    ],
  } as Bi<FaqItem[]>,
};

// Long-form editorial sections rendered below the tools grid so the hub
// crosses the 1500-word depth threshold with genuinely useful guidance
// (not filler). Each section is a heading + paragraphs, bilingual.
export interface ProseSection {
  title: Bi<string>;
  body: Bi<string[]>;
}

export const toolsLong: ProseSection[] = [
  {
    title: {
      en: "What are the RajSSO Guide tools?",
      hi: "RajSSO Guide टूल्स क्या हैं?",
    },
    body: {
      en: [
        "Applying for a Rajasthan government job, scholarship, or certificate often gets stuck on small technical hurdles — a photo that is a few kilobytes too large, confusion about the exact registration fee for your category, or uncertainty about whether you meet the age limit on the cut-off date. These are not difficult problems, but they cost applicants time and sometimes a rejected form. The tools on this page exist to remove those hurdles in a few seconds, without sending you to a paid third-party website.",
        "Each utility is purpose-built for the Rajasthan SSO ecosystem and the exams, scholarships, and services that run on top of it. Because they run completely inside your browser, you can use them on a basic smartphone with a slow connection, and nothing you enter ever leaves your device. There is no sign-up wall, no advertisement redirect, and no request for your SSO ID or password — we never ask for credentials of any kind.",
      ],
      hi: [
        "राजस्थान सरकारी नौकरी, छात्रवृत्ति या प्रमाण-पत्र के लिए आवेदन अक्सर छोटी तकनीकी अड़चनों पर अटक जाता है — फोटो जो कुछ किलोबाइट बड़ी हो, आपकी श्रेणी के लिए सही रजिस्ट्रेशन शुल्क को लेकर भ्रम, या कट-ऑफ तिथि पर आयु सीमा पूरी करने को लेकर अनिश्चितता। ये कठिन समस्याएं नहीं हैं, पर आवेदकों का समय लेती हैं और कभी-कभी फॉर्म अस्वीकृत करा देती हैं। इस पेज के टूल इन अड़चनों को कुछ सेकंड में हटाने के लिए हैं, वह भी आपको किसी भुगतान वाली थर्ड-पार्टी वेबसाइट पर भेजे बिना।",
        "हर उपयोगिता राजस्थान एसएसओ इकोसिस्टम और उस पर चलने वाली परीक्षाओं, छात्रवृत्तियों व सेवाओं के लिए विशेष रूप से बनाई गई है। चूंकि ये पूरी तरह आपके ब्राउज़र में चलते हैं, आप इन्हें धीमे कनेक्शन वाले साधारण स्मार्टफोन पर भी उपयोग कर सकते हैं, और आपकी दर्ज की गई कोई जानकारी कभी आपके डिवाइस से बाहर नहीं जाती। न कोई साइन-अप दीवार, न विज्ञापन रीडायरेक्ट, और न आपकी एसएसओ आईडी या पासवर्ड की मांग — हम किसी भी प्रकार की क्रेडेंशियल कभी नहीं मांगते।",
      ],
    },
  },
  {
    title: {
      en: "A closer look at each tool",
      hi: "हर टूल पर एक नज़र",
    },
    body: {
      en: [
        "OTR Fee Calculator: Rajasthan moved to a One-Time Registration (OTR) system for RPSC and RSSB recruitment, where you pay a registration charge once and then apply to multiple exams. Fees differ by category — general, OBC, SC, ST, and EWS candidates do not all pay the same amount. This calculator shows the correct category-wise figure so you can keep the exact balance ready in your e-Mitra wallet or net banking before the last date.",
        "Age Calculator: Almost every government recruitment sets a minimum and maximum age measured on a fixed cut-off date, usually 1 January of the relevant year. Counting the years and months by hand is error-prone. Enter your date of birth and the cut-off date, and the tool returns your exact age in years, months, and days, so you can confirm eligibility before you spend money on the application.",
        "SSO ID Validator: Your SSO ID becomes a permanent username that cannot be changed after registration, and the portal accepts only certain characters and lengths. This validator checks the format of a username you are considering, helping you avoid an error during sign-up and pick an ID that is easy to remember.",
        "Scholarship Calculator: Rajasthan runs separate scholarship schemes for SC, ST, OBC, MBC, EWS, and minority students, each with its own income ceiling and course conditions. This tool gives a quick estimate of which schemes you are likely to qualify for based on category, family income, and course, so you know what to apply for through the SJE portal.",
        "Photo Resizer: SSO registration, recruitment forms, and scholarship applications all enforce strict limits on photo and signature dimensions and file size. The resizer lets you crop, scale, and compress an image to fit those limits, then download it — entirely on your device, so a sensitive document photo is never uploaded anywhere.",
        "Jan Aadhaar Status Checker: Many citizen services depend on a Jan Aadhaar that is fully enrolled and linked. This tool points you to the official status-check link and walks you through the steps to confirm your enrolment number and family member details so a pending Jan Aadhaar does not block your scholarship or e-Mitra work.",
      ],
      hi: [
        "OTR फीस कैलकुलेटर: राजस्थान ने RPSC और RSSB भर्ती के लिए वन-टाइम रजिस्ट्रेशन (OTR) प्रणाली अपनाई है, जहां आप एक बार रजिस्ट्रेशन शुल्क देकर कई परीक्षाओं में आवेदन कर सकते हैं। शुल्क श्रेणी अनुसार अलग है — सामान्य, OBC, SC, ST और EWS अभ्यर्थी सभी समान राशि नहीं देते। यह कैलकुलेटर सही श्रेणी-वार राशि दिखाता है ताकि अंतिम तिथि से पहले आप अपने ई-मित्र वॉलेट या नेट बैंकिंग में सही बैलेंस तैयार रखें।",
        "आयु कैलकुलेटर: लगभग हर सरकारी भर्ती न्यूनतम और अधिकतम आयु एक निश्चित कट-ऑफ तिथि पर मापती है, आमतौर पर संबंधित वर्ष की 1 जनवरी। हाथ से वर्ष व महीने गिनना गलती-प्रवण है। अपनी जन्मतिथि और कट-ऑफ तिथि डालें, और टूल आपकी सटीक आयु वर्ष, महीने व दिनों में लौटाता है, ताकि आवेदन पर पैसा खर्च करने से पहले पात्रता पुष्टि कर सकें।",
        "एसएसओ आईडी वैलिडेटर: आपकी एसएसओ आईडी एक स्थायी यूज़रनेम बन जाती है जो रजिस्ट्रेशन के बाद बदली नहीं जा सकती, और पोर्टल केवल कुछ निश्चित अक्षर व लंबाई स्वीकार करता है। यह वैलिडेटर आपके सोचे गए यूज़रनेम का फॉर्मेट जांचता है, जिससे साइन-अप के दौरान एरर से बचें और याद रखने में आसान आईडी चुनें।",
        "छात्रवृत्ति कैलकुलेटर: राजस्थान SC, ST, OBC, MBC, EWS और अल्पसंख्यक छात्रों के लिए अलग-अलग छात्रवृत्ति योजनाएं चलाता है, हर एक की अपनी आय सीमा व कोर्स शर्तें हैं। यह टूल श्रेणी, पारिवारिक आय और कोर्स के आधार पर एक त्वरित अनुमान देता है कि आप किन योजनाओं के लिए पात्र हो सकते हैं, ताकि आप SJE पोर्टल से सही योजना के लिए आवेदन करें।",
        "फोटो रिसाइज़र: एसएसओ रजिस्ट्रेशन, भर्ती फॉर्म और छात्रवृत्ति आवेदन सभी फोटो व हस्ताक्षर के आयाम और फाइल साइज़ पर सख्त सीमा लगाते हैं। रिसाइज़र आपको इमेज को क्रॉप, स्केल और कंप्रेस कर उन सीमाओं में लाने और फिर डाउनलोड करने देता है — पूरी तरह आपके डिवाइस पर, ताकि संवेदनशील दस्तावेज़ फोटो कहीं अपलोड न हो।",
        "जन आधार स्थिति चेकर: कई नागरिक सेवाएं पूरी तरह नामांकित और लिंक जन आधार पर निर्भर करती हैं। यह टूल आपको आधिकारिक स्थिति-जांच लिंक तक पहुंचाता है और नामांकन संख्या व परिवार सदस्य विवरण की पुष्टि के चरण बताता है, ताकि लंबित जन आधार आपकी छात्रवृत्ति या ई-मित्र कार्य न रोके।",
      ],
    },
  },
  {
    title: {
      en: "How to use these tools during exam and scholarship season",
      hi: "परीक्षा व छात्रवृत्ति सीज़न में इन टूल्स का उपयोग कैसे करें",
    },
    body: {
      en: [
        "The smartest way to use this page is in order, before you open the official portal. First, run the Age Calculator against the notification's cut-off date to confirm you are eligible — there is no point paying a fee for an exam you cannot sit. Next, use the OTR Fee Calculator to find your category fee and load that exact amount into your payment method. Then prepare your documents: resize your photo and signature with the Photo Resizer so they pass the upload check on the first try.",
        "When you reach the registration step, the SSO ID Validator helps first-time users choose a clean, valid username they will keep for life. Students chasing financial support should run the Scholarship Calculator early in the academic year, because scholarship windows on the SJE portal open and close on tight schedules. Keeping your Jan Aadhaar verified through the status checker in advance means you will not be blocked at the final submission. Used together, these tools turn a stressful, error-prone process into a short checklist.",
      ],
      hi: [
        "इस पेज का सबसे समझदार उपयोग क्रम में है, आधिकारिक पोर्टल खोलने से पहले। पहले, नोटिफिकेशन की कट-ऑफ तिथि के विरुद्ध आयु कैलकुलेटर चलाकर पात्रता पुष्टि करें — जिस परीक्षा में बैठ ही नहीं सकते उसके लिए शुल्क देने का कोई अर्थ नहीं। फिर OTR फीस कैलकुलेटर से अपनी श्रेणी का शुल्क पता करें और वही राशि अपने भुगतान माध्यम में रखें। फिर दस्तावेज़ तैयार करें: फोटो रिसाइज़र से अपनी फोटो व हस्ताक्षर रिसाइज़ करें ताकि अपलोड जांच पहली बार में पास हो।",
        "रजिस्ट्रेशन चरण पर पहुंचने पर एसएसओ आईडी वैलिडेटर नए उपयोगकर्ताओं को साफ़, वैध यूज़रनेम चुनने में मदद करता है जिसे वे जीवन भर रखेंगे। वित्तीय सहायता चाहने वाले छात्रों को शैक्षणिक वर्ष की शुरुआत में ही छात्रवृत्ति कैलकुलेटर चलाना चाहिए, क्योंकि SJE पोर्टल पर छात्रवृत्ति विंडो सख्त समय-सारणी पर खुलती-बंद होती हैं। स्थिति चेकर से पहले ही जन आधार सत्यापित रखने का मतलब है कि अंतिम सबमिशन पर आप नहीं अटकेंगे। साथ उपयोग करने पर ये टूल एक तनावपूर्ण, गलती-प्रवण प्रक्रिया को एक छोटी चेकलिस्ट में बदल देते हैं।",
      ],
    },
  },
  {
    title: {
      en: "Accuracy, privacy, and how we maintain these tools",
      hi: "सटीकता, गोपनीयता, और हम इन टूल्स को कैसे बनाए रखते हैं",
    },
    body: {
      en: [
        "Government fee structures, age rules, and form specifications change from time to time. Our editorial team reviews each tool against the latest official notifications and updates the figures it uses, and we show a 'last verified' date at the top of this page so you can judge how current the information is. Where a tool gives an estimate — such as scholarship eligibility — treat the result as guidance and always confirm the final decision on the relevant official portal.",
        "Privacy is built into the design rather than added as a policy. Because the calculators and the photo resizer run client-side, your date of birth, income figures, and document images stay in your browser and are discarded when you close the tab. RajSSO Guide is an independent informational resource and is not affiliated with the Government of Rajasthan; for the authoritative process, fees, and submissions, the official portal remains sso.rajasthan.gov.in, and the SSO helpdesk on 0141-5153222 can resolve account-specific issues.",
      ],
      hi: [
        "सरकारी शुल्क संरचना, आयु नियम और फॉर्म विनिर्देश समय-समय पर बदलते हैं। हमारी संपादकीय टीम हर टूल की नवीनतम आधिकारिक नोटिफिकेशन के विरुद्ध समीक्षा करती है और उसमें उपयोग होने वाले आंकड़े अपडेट करती है, और हम इस पेज के शीर्ष पर 'अंतिम सत्यापित' तिथि दिखाते हैं ताकि आप जानकारी की वर्तमानता आंक सकें। जहां टूल अनुमान देता है — जैसे छात्रवृत्ति पात्रता — वहां परिणाम को मार्गदर्शन मानें और अंतिम निर्णय हमेशा संबंधित आधिकारिक पोर्टल पर पुष्टि करें।",
        "गोपनीयता डिज़ाइन में अंतर्निहित है, किसी नीति के रूप में जोड़ी नहीं गई। चूंकि कैलकुलेटर और फोटो रिसाइज़र क्लाइंट-साइड चलते हैं, आपकी जन्मतिथि, आय आंकड़े और दस्तावेज़ इमेज आपके ब्राउज़र में रहते हैं और टैब बंद करते ही हट जाते हैं। RajSSO Guide एक स्वतंत्र सूचनात्मक संसाधन है और राजस्थान सरकार से संबद्ध नहीं है; आधिकारिक प्रक्रिया, शुल्क और सबमिशन के लिए आधिकारिक पोर्टल sso.rajasthan.gov.in ही है, और एसएसओ हेल्पडेस्क 0141-5153222 अकाउंट-विशेष समस्याएं हल कर सकता है।",
      ],
    },
  },
];
