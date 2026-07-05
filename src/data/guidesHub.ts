// Editorial content for the /guides hub (index) page, bilingual.
// This hub targets the head term "Rajasthan SSO ID Guide" and links out
// to the four core how-to guides. Kept separate from rendering so copy
// can be edited without touching the page component.
import type { Locale } from "@/lib/i18n";
import type { FaqItem } from "@/lib/schema";

type Bi<T> = Record<Locale, T>;

export interface PickRow {
  scenario: string;
  guide: string;
  slug: string;
}

export interface CompareRow {
  guide: string;
  time: string;
  need: string;
}

export const guidesHub = {
  metaTitle: {
    en: "SSO ID Rajasthan Guides 2026 — Login, Registration & Recovery",
    hi: "एसएसओ आईडी राजस्थान गाइड्स 2026 — लॉगिन, रजिस्ट्रेशन और रिकवरी",
  } as Bi<string>,
  metaDescription: {
    en: "All Rajasthan SSO ID guides in one place — step-by-step help for login, new registration, forgotten ID or password recovery, and merging duplicate accounts on sso.rajasthan.gov.in.",
    hi: "राजस्थान एसएसओ आईडी की सभी गाइड्स एक जगह — sso.rajasthan.gov.in पर लॉगिन, नई रजिस्ट्रेशन, भूली आईडी/पासवर्ड रिकवरी और डुप्लिकेट अकाउंट मर्ज की स्टेप-बाय-स्टेप मदद।",
  } as Bi<string>,

  h1: {
    en: "SSO ID Rajasthan Guides",
    hi: "एसएसओ आईडी राजस्थान गाइड्स",
  } as Bi<string>,
  lead: {
    en: "This is your complete guide hub for the Rajasthan Single Sign-On (RajSSO) portal. Whether you are creating a new SSO ID, logging in, recovering a forgotten ID, or merging duplicate accounts, every step is explained in plain language with official references. Read them in order, or jump straight to the guide you need.",
    hi: "यह राजस्थान सिंगल साइन-ऑन (RajSSO) पोर्टल के लिए आपका पूरा गाइड हब है। चाहे आप नई एसएसओ आईडी बना रहे हों, लॉगिन कर रहे हों, भूली हुई आईडी रिकवर कर रहे हों या डुप्लिकेट अकाउंट मर्ज कर रहे हों — हर चरण सरल भाषा में आधिकारिक संदर्भों के साथ समझाया गया है। इन्हें क्रम से पढ़ें या सीधे अपनी ज़रूरत की गाइड पर जाएं।",
  } as Bi<string>,

  lastVerified: "2026-06-18",

  // "What are these guides" intro section
  introTitle: {
    en: "What you will find in these guides",
    hi: "इन गाइड्स में आपको क्या मिलेगा",
  } as Bi<string>,
  introBody: {
    en: [
      "SSO ID (Single Sign-On ID) is the one free login that opens more than 100 Rajasthan government services at sso.rajasthan.gov.in — e-Mitra, the Recruitment Portal for government jobs, scholarship forms, electricity and water bill payment, Jan Aadhaar, and health schemes like Chiranjeevi. Instead of a separate username for each department, you sign in once and reach everything from a single secure dashboard.",
      "These guides were written for Rajasthan citizens, students, farmers, business owners, and government employees who want clear answers without jargon. Each guide gives you the official process, the common error messages you might see, and the exact helpline to call if you get stuck. We are an independent resource and never ask for your password, OTP, or SSO ID.",
    ],
    hi: [
      "एसएसओ आईडी (सिंगल साइन-ऑन आईडी) वह एक मुफ़्त लॉगिन है जो sso.rajasthan.gov.in पर 100 से अधिक राजस्थान सरकारी सेवाएं खोलती है — ई-मित्र, सरकारी नौकरियों के लिए भर्ती पोर्टल, छात्रवृत्ति फॉर्म, बिजली व पानी बिल भुगतान, जन आधार, और चिरंजीवी जैसी स्वास्थ्य योजनाएं। हर विभाग के लिए अलग यूज़रनेम के बजाय आप एक बार लॉगिन कर एक ही सुरक्षित डैशबोर्ड से सब कुछ पाते हैं।",
      "ये गाइड्स राजस्थान के नागरिकों, छात्रों, किसानों, व्यवसाय मालिकों और सरकारी कर्मचारियों के लिए लिखी गई हैं जो बिना कठिन शब्दों के स्पष्ट जवाब चाहते हैं। हर गाइड में आधिकारिक प्रक्रिया, संभावित सामान्य एरर मैसेज, और अटकने पर कॉल करने का सही हेल्पलाइन नंबर दिया गया है। हम एक स्वतंत्र संसाधन हैं और कभी भी आपका पासवर्ड, ओटीपी या एसएसओ आईडी नहीं मांगते।",
    ],
  } as Bi<string[]>,

  // "Which guide first" — scenario routing table
  pickTitle: {
    en: "Which guide should you read first?",
    hi: "आपको पहले कौन-सी गाइड पढ़नी चाहिए?",
  } as Bi<string>,
  pickCols: {
    en: ["Your situation", "Start with this guide"],
    hi: ["आपकी स्थिति", "इस गाइड से शुरू करें"],
  } as Bi<[string, string]>,
  pickRows: {
    en: [
      { scenario: "I do not have an SSO ID yet", guide: "SSO ID Registration", slug: "sso-id-registration" },
      { scenario: "I have an ID but cannot sign in", guide: "SSO ID Login", slug: "sso-id-login" },
      { scenario: "I forgot my SSO ID or password", guide: "Forgot SSO ID", slug: "forgot-sso-id" },
      { scenario: "I accidentally made two accounts", guide: "Merge SSO ID", slug: "merge-sso-id" },
    ],
    hi: [
      { scenario: "मेरे पास अभी एसएसओ आईडी नहीं है", guide: "एसएसओ आईडी रजिस्ट्रेशन", slug: "sso-id-registration" },
      { scenario: "आईडी है पर लॉगिन नहीं हो रहा", guide: "एसएसओ आईडी लॉगिन", slug: "sso-id-login" },
      { scenario: "मैं आईडी या पासवर्ड भूल गया", guide: "एसएसओ आईडी भूल गए", slug: "forgot-sso-id" },
      { scenario: "गलती से दो अकाउंट बन गए", guide: "एसएसओ आईडी मर्ज", slug: "merge-sso-id" },
    ],
  } as Bi<PickRow[]>,

  // Compare table
  compareTitle: {
    en: "Guide comparison at a glance",
    hi: "एक नज़र में गाइड तुलना",
  } as Bi<string>,
  compareCols: {
    en: ["Guide", "Time needed", "What you need"],
    hi: ["गाइड", "लगने वाला समय", "क्या चाहिए"],
  } as Bi<[string, string, string]>,
  compareRows: {
    en: [
      { guide: "Registration", time: "Under 5 minutes", need: "Jan Aadhaar / Aadhaar / Google" },
      { guide: "Login", time: "Under 1 minute", need: "SSO ID + password" },
      { guide: "Forgot ID / Password", time: "2–5 minutes", need: "Registered mobile number" },
      { guide: "Merge IDs", time: "3–5 minutes", need: "Both SSO IDs + OTP access" },
    ],
    hi: [
      { guide: "रजिस्ट्रेशन", time: "5 मिनट से कम", need: "जन आधार / आधार / Google" },
      { guide: "लॉगिन", time: "1 मिनट से कम", need: "एसएसओ आईडी + पासवर्ड" },
      { guide: "आईडी / पासवर्ड भूले", time: "2–5 मिनट", need: "रजिस्टर्ड मोबाइल नंबर" },
      { guide: "आईडी मर्ज", time: "3–5 मिनट", need: "दोनों एसएसओ आईडी + ओटीपी" },
    ],
  } as Bi<CompareRow[]>,

  // Services unlocked
  servicesTitle: {
    en: "Services you unlock with one SSO ID",
    hi: "एक एसएसओ आईडी से खुलने वाली सेवाएं",
  } as Bi<string>,
  servicesIntro: {
    en: "After you finish the registration and login guides, the same SSO ID gives you access to the services below. Each one used to need its own account — now a single login is enough.",
    hi: "रजिस्ट्रेशन और लॉगिन गाइड पूरी करने के बाद वही एसएसओ आईडी आपको नीचे दी सेवाओं तक पहुँच देती है। पहले हर सेवा के लिए अलग अकाउंट चाहिए होता था — अब एक ही लॉगिन काफी है।",
  } as Bi<string>,
  services: {
    en: [
      "e-Mitra services & bill payment",
      "Recruitment Portal (RPSC / RSMSSB jobs)",
      "Scholarship applications (SJE)",
      "Jan Aadhaar enrolment & updates",
      "Chiranjeevi health scheme",
      "PayManager salary slips",
      "RajKaj for employees",
      "Jan Soochna Portal",
    ],
    hi: [
      "ई-मित्र सेवाएं व बिल भुगतान",
      "भर्ती पोर्टल (RPSC / RSMSSB नौकरियां)",
      "छात्रवृत्ति आवेदन (SJE)",
      "जन आधार नामांकन व अपडेट",
      "चिरंजीवी स्वास्थ्य योजना",
      "PayManager सैलरी स्लिप",
      "कर्मचारियों के लिए RajKaj",
      "जन सूचना पोर्टल",
    ],
  } as Bi<string[]>,

  // Quick reference table
  quickRefTitle: {
    en: "Quick reference",
    hi: "त्वरित संदर्भ",
  } as Bi<string>,
  quickRef: {
    en: [
      { a: "Official portal", b: "sso.rajasthan.gov.in" },
      { a: "SSO helpdesk", b: "0141-5153222" },
      { a: "Helpdesk email", b: "helpdesk.sso@rajasthan.gov.in" },
      { a: "Recover SSO ID by SMS", b: "Send 'RJ SSO' to 9223166166" },
      { a: "Reset password by SMS", b: "Send 'RJ SSO PASSWORD' to 9223166166" },
      { a: "Registration fee", b: "Free" },
    ],
    hi: [
      { a: "आधिकारिक पोर्टल", b: "sso.rajasthan.gov.in" },
      { a: "एसएसओ हेल्पडेस्क", b: "0141-5153222" },
      { a: "हेल्पडेस्क ईमेल", b: "helpdesk.sso@rajasthan.gov.in" },
      { a: "एसएमएस से आईडी रिकवरी", b: "9223166166 पर 'RJ SSO' भेजें" },
      { a: "एसएमएस से पासवर्ड रीसेट", b: "9223166166 पर 'RJ SSO PASSWORD' भेजें" },
      { a: "रजिस्ट्रेशन शुल्क", b: "नि:शुल्क" },
    ],
  } as Bi<{ a: string; b: string }[]>,

  // Safety tips
  safetyTitle: {
    en: "Stay safe while using these guides",
    hi: "इन गाइड्स का उपयोग करते समय सुरक्षित रहें",
  } as Bi<string>,
  safetyTips: {
    en: [
      "Only enter your login details on the official sso.rajasthan.gov.in portal.",
      "Never share your password or OTP with anyone, including callers claiming to be officials.",
      "Avoid logging in on public or shared computers and cyber cafés.",
      "Keep your registered mobile number active — it is needed for every OTP and recovery.",
    ],
    hi: [
      "अपनी लॉगिन जानकारी केवल आधिकारिक sso.rajasthan.gov.in पोर्टल पर ही दर्ज करें।",
      "अपना पासवर्ड या ओटीपी किसी को न दें, भले ही कॉल करने वाला खुद को अधिकारी बताए।",
      "सार्वजनिक या साझा कंप्यूटर और साइबर कैफे पर लॉगिन न करें।",
      "अपना रजिस्टर्ड मोबाइल नंबर सक्रिय रखें — हर ओटीपी और रिकवरी के लिए यह ज़रूरी है।",
    ],
  } as Bi<string[]>,

  faqs: {
    en: [
      {
        question: "Is the SSO ID and these guides free to use?",
        answer:
          "Yes. Creating an SSO ID on sso.rajasthan.gov.in is completely free, and all guides on this site are free to read. We are an independent resource and never charge for information.",
      },
      {
        question: "In which order should I read the SSO ID guides?",
        answer:
          "If you are new, start with SSO ID Registration, then Login. If you already have an account, go straight to the guide that matches your problem — Forgot SSO ID for recovery, or Merge SSO ID for duplicate accounts.",
      },
      {
        question: "Can I create an SSO ID without a Jan Aadhaar card?",
        answer:
          "Yes. Citizens can register using Aadhaar, a Google account, or Bhamashah. However, Jan Aadhaar is recommended for Rajasthan residents because it gives instant access to scholarship and recruitment services.",
      },
      {
        question: "Who do I contact if a guide does not solve my problem?",
        answer:
          "Call the official SSO helpdesk on 0141-5153222 or email helpdesk.sso@rajasthan.gov.in. For changes that need ID proof, visit your nearest e-Mitra centre.",
      },
      {
        question: "Are these guides official government pages?",
        answer:
          "No. RajSSO Guide is an independent informational website and is not affiliated with the Government of Rajasthan. The official portal is sso.rajasthan.gov.in.",
      },
    ],
    hi: [
      {
        question: "क्या एसएसओ आईडी और ये गाइड्स मुफ़्त हैं?",
        answer:
          "हाँ। sso.rajasthan.gov.in पर एसएसओ आईडी बनाना पूरी तरह मुफ़्त है, और इस साइट की सभी गाइड्स पढ़ना भी मुफ़्त है। हम एक स्वतंत्र संसाधन हैं और जानकारी के लिए कभी शुल्क नहीं लेते।",
      },
      {
        question: "एसएसओ आईडी गाइड्स किस क्रम में पढ़ूं?",
        answer:
          "यदि आप नए हैं तो पहले एसएसओ आईडी रजिस्ट्रेशन, फिर लॉगिन पढ़ें। यदि अकाउंट पहले से है तो सीधे अपनी समस्या से मेल खाती गाइड पर जाएं — रिकवरी के लिए एसएसओ आईडी भूल गए, या डुप्लिकेट अकाउंट के लिए एसएसओ आईडी मर्ज।",
      },
      {
        question: "क्या जन आधार कार्ड के बिना एसएसओ आईडी बना सकते हैं?",
        answer:
          "हाँ। नागरिक आधार, Google अकाउंट या भामाशाह से रजिस्टर कर सकते हैं। हालांकि राजस्थान निवासियों के लिए जन आधार अनुशंसित है क्योंकि इससे छात्रवृत्ति और भर्ती सेवाओं तक तुरंत पहुँच मिलती है।",
      },
      {
        question: "गाइड से समस्या हल न हो तो किससे संपर्क करें?",
        answer:
          "आधिकारिक एसएसओ हेल्पडेस्क 0141-5153222 पर कॉल करें या helpdesk.sso@rajasthan.gov.in पर ईमेल करें। पहचान प्रमाण वाले बदलावों के लिए नज़दीकी ई-मित्र केंद्र जाएं।",
      },
      {
        question: "क्या ये गाइड्स आधिकारिक सरकारी पेज हैं?",
        answer:
          "नहीं। RajSSO Guide एक स्वतंत्र सूचनात्मक वेबसाइट है और राजस्थान सरकार से संबद्ध नहीं है। आधिकारिक पोर्टल sso.rajasthan.gov.in है।",
      },
    ],
  } as Bi<FaqItem[]>,
};

// Long-form editorial sections rendered on the guides hub so the page
// crosses the 1500-word depth threshold with substantive guidance.
export interface ProseSection {
  title: Bi<string>;
  body: Bi<string[]>;
}

export const guidesLong: ProseSection[] = [
  {
    title: {
      en: "Understanding the Rajasthan SSO portal before you begin",
      hi: "शुरू करने से पहले राजस्थान एसएसओ पोर्टल को समझें",
    },
    body: {
      en: [
        "The Rajasthan Single Sign-On portal, known as RajSSO, was launched in 2013 by the Department of Information Technology and Communication (DoIT&C) under the Digital Rajasthan programme. Its purpose is simple but powerful: give every resident, student, business owner, and government employee one digital identity that works across the entire state government. Before SSO existed, each department ran its own login system, so a citizen might hold a dozen different usernames and passwords. Today a single SSO ID connects them all.",
        "Understanding this design helps you use the guides below more effectively. Your SSO ID is not a service in itself — it is the key that opens other services such as e-Mitra, the Recruitment Portal, the SJE scholarship system, Jan Aadhaar, PayManager, and RajKaj. That is why registration and login are the first two guides: almost everything else depends on having a working account. The remaining guides exist to keep that single account healthy, by recovering it when you forget your details and by merging duplicates so your Aadhaar stays linked to exactly one ID.",
      ],
      hi: [
        "राजस्थान सिंगल साइन-ऑन पोर्टल, जिसे RajSSO कहते हैं, 2013 में सूचना प्रौद्योगिकी एवं संचार विभाग (DoIT&C) द्वारा डिजिटल राजस्थान कार्यक्रम के तहत लॉन्च किया गया था। इसका उद्देश्य सरल पर शक्तिशाली है: हर निवासी, छात्र, व्यवसाय मालिक और सरकारी कर्मचारी को एक डिजिटल पहचान देना जो पूरे राज्य सरकार में काम करे। एसएसओ से पहले हर विभाग का अपना लॉगिन सिस्टम था, इसलिए एक नागरिक के पास दर्जनों अलग यूज़रनेम और पासवर्ड हो सकते थे। आज एक एसएसओ आईडी इन सबको जोड़ती है।",
        "इस डिज़ाइन को समझना नीचे दी गाइड्स को अधिक प्रभावी ढंग से उपयोग करने में मदद करता है। आपकी एसएसओ आईडी स्वयं में कोई सेवा नहीं है — यह वह चाबी है जो ई-मित्र, भर्ती पोर्टल, SJE छात्रवृत्ति प्रणाली, जन आधार, PayManager और RajKaj जैसी अन्य सेवाएं खोलती है। इसीलिए रजिस्ट्रेशन और लॉगिन पहली दो गाइड्स हैं: लगभग बाकी सब कुछ एक कार्यशील अकाउंट होने पर निर्भर करता है। शेष गाइड्स उस एक अकाउंट को स्वस्थ रखने के लिए हैं — विवरण भूलने पर रिकवरी और डुप्लिकेट मर्ज कर आधार को ठीक एक आईडी से लिंक रखना।",
      ],
    },
  },
  {
    title: {
      en: "Choosing the right account type",
      hi: "सही अकाउंट प्रकार चुनना",
    },
    body: {
      en: [
        "The portal offers three account categories, and picking the correct one at the start shapes everything you see afterwards. Choose Citizen if you are a resident, student, or farmer applying for scholarships, certificates, recruitment, or bill payments — this is the right choice for the vast majority of people. Choose Udyog if you own or represent a business and need licensing or GST-related services. Choose Government Employee if you are a state staff member who needs PayManager salary slips or RajKaj office workflows.",
        "Your registration method follows from your category. Citizens usually register with Jan Aadhaar, which is recommended for Rajasthan residents because it instantly links scholarship and recruitment eligibility, although Aadhaar, Google, and Bhamashah also work. Government employees register with their SIPF number, where the default password is often the date of birth in DDMMYYYY format. Business users register with a Business Registration Number (BRN) or Udyog Aadhaar. The registration guide walks through each of these paths step by step.",
      ],
      hi: [
        "पोर्टल तीन अकाउंट श्रेणियां देता है, और शुरुआत में सही चुनना बाद में दिखने वाली हर चीज़ को आकार देता है। यदि आप निवासी, छात्र या किसान हैं और छात्रवृत्ति, प्रमाण-पत्र, भर्ती या बिल भुगतान के लिए आवेदन कर रहे हैं तो नागरिक चुनें — अधिकांश लोगों के लिए यही सही विकल्प है। यदि आप व्यवसाय के मालिक हैं या प्रतिनिधित्व करते हैं और लाइसेंसिंग या GST सेवाएं चाहिए तो उद्योग चुनें। यदि आप राज्य कर्मचारी हैं जिसे PayManager सैलरी स्लिप या RajKaj ऑफिस वर्कफ़्लो चाहिए तो सरकारी कर्मचारी चुनें।",
        "आपका रजिस्ट्रेशन तरीका आपकी श्रेणी से तय होता है। नागरिक आमतौर पर जन आधार से रजिस्टर करते हैं, जो राजस्थान निवासियों के लिए अनुशंसित है क्योंकि यह छात्रवृत्ति और भर्ती पात्रता तुरंत लिंक करता है, हालांकि आधार, Google और भामाशाह भी काम करते हैं। सरकारी कर्मचारी अपने SIPF नंबर से रजिस्टर करते हैं, जहां डिफ़ॉल्ट पासवर्ड अक्सर DDMMYYYY प्रारूप में जन्मतिथि होता है। व्यवसाय उपयोगकर्ता बिज़नेस रजिस्ट्रेशन नंबर (BRN) या उद्योग आधार से रजिस्टर करते हैं। रजिस्ट्रेशन गाइड इन सभी रास्तों को चरण-दर-चरण समझाती है।",
      ],
    },
  },
  {
    title: {
      en: "Common problems these guides solve",
      hi: "ये गाइड्स कौन-सी सामान्य समस्याएं हल करती हैं",
    },
    body: {
      en: [
        "Most users do not read a guide until something goes wrong, so it helps to know which guide answers which problem. If the login page rejects your details, the Login guide covers invalid password warnings, the 30-minute lockout after too many attempts, captcha that will not load, and the 'connection not private' message caused by a wrong device clock. If you cannot even reach the login stage because you have lost your ID, the Forgot SSO ID guide shows both the instant SMS recovery method and the online recovery flow using your registered mobile, Jan Aadhaar, or Bhamashah.",
        "Two problems deserve special attention because they quietly block scholarship and job applications. The first is duplicate accounts — created when someone registers once with Google and again with Jan Aadhaar — which the Merge guide resolves by safely combining everything into one primary ID. The second is an outdated registered mobile number, which stops every OTP. When that happens, no online tool can help and you must visit an e-Mitra centre with your Aadhaar or Jan Aadhaar to update your contact details in person.",
      ],
      hi: [
        "अधिकांश उपयोगकर्ता तब तक गाइड नहीं पढ़ते जब तक कुछ गलत न हो, इसलिए यह जानना मददगार है कि कौन-सी गाइड किस समस्या का उत्तर देती है। यदि लॉगिन पेज आपके विवरण अस्वीकार करता है, तो लॉगिन गाइड अमान्य पासवर्ड चेतावनी, बहुत बार प्रयास के बाद 30 मिनट का लॉकआउट, लोड न होने वाला कैप्चा, और गलत डिवाइस घड़ी से आने वाला 'connection not private' संदेश कवर करती है। यदि आईडी खो जाने से आप लॉगिन चरण तक भी नहीं पहुंच पाते, तो एसएसओ आईडी भूल गए गाइड तुरंत एसएमएस रिकवरी विधि और रजिस्टर्ड मोबाइल, जन आधार या भामाशाह से ऑनलाइन रिकवरी दोनों दिखाती है।",
        "दो समस्याएं विशेष ध्यान देने योग्य हैं क्योंकि वे चुपचाप छात्रवृत्ति और नौकरी आवेदन रोक देती हैं। पहली है डुप्लिकेट अकाउंट — जब कोई एक बार Google से और फिर जन आधार से रजिस्टर करता है — जिसे मर्ज गाइड सब कुछ एक प्राथमिक आईडी में सुरक्षित रूप से मिलाकर हल करती है। दूसरी है पुराना रजिस्टर्ड मोबाइल नंबर, जो हर ओटीपी रोक देता है। ऐसा होने पर कोई ऑनलाइन टूल मदद नहीं कर सकता और आपको अपने आधार या जन आधार के साथ ई-मित्र केंद्र जाकर संपर्क विवरण स्वयं अपडेट कराना होगा।",
      ],
    },
  },
  {
    title: {
      en: "How we keep these guides accurate",
      hi: "हम इन गाइड्स को सटीक कैसे रखते हैं",
    },
    body: {
      en: [
        "Government processes change, so accuracy matters more than volume. Every guide on this site carries a 'last verified' date, and our editorial team rechecks the steps against the live portal and official notifications before updating that date. Where a fact comes from an official source — the helpdesk number, the SMS recovery codes, the registration methods — we state it plainly so you can confirm it yourself rather than take our word for it.",
        "RajSSO Guide is an independent resource, not a government website, and we never ask for your SSO ID, password, or OTP. Use these guides to understand the process in plain language, then complete the actual task on the official portal at sso.rajasthan.gov.in. If a guide does not resolve your issue, the official SSO helpdesk on 0141-5153222 or helpdesk.sso@rajasthan.gov.in handles account-specific problems that only the department can fix.",
      ],
      hi: [
        "सरकारी प्रक्रियाएं बदलती रहती हैं, इसलिए मात्रा से अधिक सटीकता मायने रखती है। इस साइट की हर गाइड पर 'अंतिम सत्यापित' तिथि होती है, और हमारी संपादकीय टीम उस तिथि को अपडेट करने से पहले चरणों को लाइव पोर्टल और आधिकारिक नोटिफिकेशन के विरुद्ध दोबारा जांचती है। जहां कोई तथ्य आधिकारिक स्रोत से आता है — हेल्पडेस्क नंबर, एसएमएस रिकवरी कोड, रजिस्ट्रेशन तरीके — हम उसे स्पष्ट रूप से बताते हैं ताकि आप हमारी बात मानने के बजाय स्वयं पुष्टि कर सकें।",
        "RajSSO Guide एक स्वतंत्र संसाधन है, सरकारी वेबसाइट नहीं, और हम कभी आपकी एसएसओ आईडी, पासवर्ड या ओटीपी नहीं मांगते। इन गाइड्स से प्रक्रिया सरल भाषा में समझें, फिर वास्तविक कार्य आधिकारिक पोर्टल sso.rajasthan.gov.in पर पूरा करें। यदि कोई गाइड आपकी समस्या हल न करे, तो आधिकारिक एसएसओ हेल्पडेस्क 0141-5153222 या helpdesk.sso@rajasthan.gov.in उन अकाउंट-विशेष समस्याओं को संभालता है जिन्हें केवल विभाग ठीक कर सकता है।",
      ],
    },
  },
];
