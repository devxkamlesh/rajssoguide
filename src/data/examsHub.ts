// Bilingual SEO content for the /exams hub page.
import type { Locale } from "@/lib/i18n";
import type { FaqItem } from "@/lib/schema";

type L<T> = Record<Locale, T>;

interface Step {
  title: string;
  text: string;
}

export const examsHub: {
  metaTitle: L<string>;
  metaDescription: L<string>;
  keywords: L<string[]>;
  intro: L<string>;
  disclaimer: L<string>;
  otrTitle: L<string>;
  otrIntro: L<string>;
  otrPoints: L<Step[]>;
  otrClose: L<string>;
  applyTitle: L<string>;
  applySteps: L<Step[]>;
  applyImportant: L<string>;
  overviewTitle: L<string>;
  overviewBody: L<string[]>;
  faqs: L<FaqItem[]>;
  ctaTitle: L<string>;
  ctaBody: L<string>;
} = {
  metaTitle: {
    en: "Rajasthan Government Exams 2026 — SSO OTR Fee & Application Guide",
    hi: "राजस्थान सरकारी परीक्षाएं 2026 — SSO OTR शुल्क और आवेदन गाइड",
  },
  metaDescription: {
    en: "Complete guide to Rajasthan government exams 2026 — RPSC CET, RSMSSB LDC, Patwari, REET, RAS and more. Check OTR fees, last dates, and how to apply through your SSO ID on the official recruitment portal.",
    hi: "राजस्थान 2026 की सभी सरकारी परीक्षाओं की पूरी जानकारी — RPSC CET, RSMSSB LDC, पटवारी, REET, RAS और अधिक। SSO ID से OTR शुल्क, अंतिम तिथि और ऑनलाइन आवेदन कैसे करें जानें।",
  },
  keywords: {
    en: [
      "Rajasthan government exams 2026",
      "RPSC exam SSO ID apply",
      "RSMSSB OTR application 2026",
      "Rajasthan CET 2026 apply online",
      "SSO ID exam application Rajasthan",
      "OTR fee Rajasthan exams",
      "Rajasthan exam calendar 2026",
      "REET 2026 OTR apply",
      "RAS 2026 SSO application",
      "Rajasthan recruitment portal SSO",
      "Rajasthan sarkari exam 2026",
      "RPSC RSMSSB apply online SSO",
    ],
    hi: [
      "राजस्थान सरकारी परीक्षा 2026",
      "RPSC SSO ID से आवेदन",
      "RSMSSB OTR आवेदन 2026",
      "राजस्थान CET 2026 ऑनलाइन आवेदन",
      "SSO ID से परीक्षा आवेदन राजस्थान",
      "OTR शुल्क राजस्थान परीक्षा",
      "राजस्थान परीक्षा कैलेंडर 2026",
      "REET 2026 OTR आवेदन",
      "RAS 2026 SSO आवेदन",
      "राजस्थान भर्ती पोर्टल SSO",
    ],
  },
  intro: {
    en: "Every major Rajasthan government recruitment — from RPSC CET and RSMSSB LDC to REET and RAS — runs through a single online gateway: your SSO ID and the One-Time Registration (OTR) on the Rajasthan Recruitment Portal. You pay the OTR fee once per exam and your personal details are carried forward automatically every time you apply. This page lists all covered exams with their OTR fees and last dates, and explains exactly how to apply step by step.",
    hi: "राजस्थान की हर बड़ी सरकारी भर्ती — RPSC CET, RSMSSB LDC, REET और RAS — एक ही ऑनलाइन माध्यम से होती है: आपकी SSO ID और राजस्थान भर्ती पोर्टल पर वन-टाइम रजिस्ट्रेशन (OTR)। OTR शुल्क हर परीक्षा के लिए एक बार देना होता है और आपकी व्यक्तिगत जानकारी हर बार स्वचालित रूप से आगे जाती है। इस पेज पर सभी परीक्षाओं की OTR शुल्क और अंतिम तिथियां दी गई हैं, साथ ही आवेदन की पूरी प्रक्रिया भी बताई गई है।",
  },
  disclaimer: {
    en: "This is an independent guide. We are not affiliated with the Government of Rajasthan. Always apply through the official portal at recruitment.rajasthan.gov.in or sso.rajasthan.gov.in.",
    hi: "यह एक स्वतंत्र गाइड है। हम राजस्थान सरकार से संबद्ध नहीं हैं। हमेशा आधिकारिक पोर्टल recruitment.rajasthan.gov.in या sso.rajasthan.gov.in से ही आवेदन करें।",
  },
  otrTitle: {
    en: "What Is SSO OTR and Why Does Every Rajasthan Exam Need It?",
    hi: "SSO OTR क्या है और हर राजस्थान परीक्षा के लिए यह क्यों जरूरी है?",
  },
  otrIntro: {
    en: "One-Time Registration (OTR) is the foundation of Rajasthan's online recruitment system. Before you can apply for any exam on the Recruitment Portal, you must complete your OTR profile — it collects your name, date of birth, father's name, mother's name, category, educational qualifications, and Aadhaar-based verification. Do it once and the same information auto-populates every future application.",
    hi: "वन-टाइम रजिस्ट्रेशन (OTR) राजस्थान की ऑनलाइन भर्ती प्रणाली की नींव है। भर्ती पोर्टल पर किसी भी परीक्षा के लिए आवेदन करने से पहले आपको अपनी OTR प्रोफ़ाइल पूरी करनी होगी — इसमें आपका नाम, जन्मतिथि, पिता का नाम, माता का नाम, श्रेणी, शैक्षणिक योग्यता और आधार आधारित सत्यापन शामिल होता है। यह प्रक्रिया एक बार करें और यही जानकारी आगे के हर आवेदन में स्वचालित रूप से भर जाएगी।",
  },
  otrPoints: {
    en: [
      { title: "No re-filling.", text: "Your personal and educational details carry forward to every RPSC and RSMSSB application automatically." },
      { title: "Category verification upfront.", text: "Your SC/ST/OBC/EWS relaxation is verified at the OTR stage, so there are no last-minute certificate rejections." },
      { title: "Fee transparency.", text: "The OTR fee is the total recruitment fee — there are no hidden charges added at later stages." },
      { title: "Mandatory for all.", text: "As of 2026, OTR is compulsory for every candidate applying through the Rajasthan Recruitment Portal, including government employees who must complete Aadhaar/Jan Aadhaar KYC first." },
    ],
    hi: [
      { title: "बार-बार भरने की जरूरत नहीं।", text: "आपकी व्यक्तिगत और शैक्षणिक जानकारी हर RPSC और RSMSSB आवेदन में अपने आप आ जाती है।" },
      { title: "श्रेणी सत्यापन पहले ही।", text: "SC/ST/OBC/EWS छूट OTR स्तर पर ही सत्यापित होती है, इसलिए बाद में प्रमाण पत्र अस्वीकृति का खतरा नहीं रहता।" },
      { title: "शुल्क पारदर्शिता।", text: "OTR शुल्क ही कुल भर्ती शुल्क है — बाद के चरणों में कोई छिपा हुआ शुल्क नहीं जोड़ा जाता।" },
      { title: "सभी के लिए अनिवार्य।", text: "2026 से OTR राजस्थान भर्ती पोर्टल के माध्यम से आवेदन करने वाले हर उम्मीदवार के लिए अनिवार्य है।" },
    ],
  },
  otrClose: {
    en: "If you already have an OTR profile from a previous exam cycle, you do not need to create a new one — just log in and apply directly.",
    hi: "यदि आपने पिछले परीक्षा चक्र में पहले से OTR प्रोफ़ाइल बना ली है, तो नई प्रोफ़ाइल बनाने की जरूरत नहीं — बस लॉगिन करें और सीधे आवेदन करें।",
  },
  applyTitle: {
    en: "How to Apply for Any Rajasthan Government Exam via SSO — 5 Steps",
    hi: "SSO के जरिए राजस्थान सरकारी परीक्षा में आवेदन कैसे करें — 5 आसान चरण",
  },
  applySteps: {
    en: [
      { title: "Create or log in to your SSO ID.", text: "Go to sso.rajasthan.gov.in. New users can register using Jan Aadhaar, Aadhaar, or Google. Existing users simply log in. Never share your password or OTP with anyone — not even this website." },
      { title: "Open the Recruitment Portal.", text: "On your SSO dashboard, find and click the \"Recruitment Portal\" icon (listed under Citizen Apps / G2C). This takes you to recruitment.rajasthan.gov.in." },
      { title: "Complete your OTR profile (first-time applicants).", text: "Click \"One Time Registration\" and fill in your personal details — name, date of birth, parents' names, category, and educational qualifications — exactly as they appear on your Class 10 marksheet. Verify using Aadhaar or Jan Aadhaar. Government employees must complete KYC first." },
      { title: "Find your exam and click \"Apply Now\".", text: "The dashboard shows all active recruitments. Select the exam, review the notification PDF, and click \"Apply Now\". Your OTR details auto-fill the form. Add any additional information required (preferences, address, etc.)." },
      { title: "Upload documents and pay the OTR fee.", text: "Upload your photo and signature in JPEG format within the prescribed size limits. Pay the OTR fee via UPI, debit card, credit card, or net banking. Download and save your confirmation slip." },
    ],
    hi: [
      { title: "SSO ID बनाएं या लॉगिन करें।", text: "sso.rajasthan.gov.in पर जाएं। नए उपयोगकर्ता Jan Aadhaar, आधार या Google से रजिस्ट्रेशन कर सकते हैं। पुराने उपयोगकर्ता सीधे लॉगिन करें। अपना पासवर्ड या OTP किसी के साथ साझा न करें।" },
      { title: "भर्ती पोर्टल खोलें।", text: "SSO डैशबोर्ड पर \"Recruitment Portal\" आइकन ढूंढें और क्लिक करें (Citizen Apps / G2C में मिलेगा)। यह आपको recruitment.rajasthan.gov.in पर ले जाएगा।" },
      { title: "OTR प्रोफ़ाइल पूरी करें (पहली बार आवेदन करने वाले)।", text: "\"One Time Registration\" पर क्लिक करें और अपना नाम, जन्मतिथि, माता-पिता का नाम, श्रेणी और शैक्षणिक योग्यता — बिल्कुल कक्षा 10 की मार्कशीट के अनुसार — भरें। आधार या Jan Aadhaar से सत्यापन करें। सरकारी कर्मचारियों को पहले KYC पूरी करनी होगी।" },
      { title: "परीक्षा चुनें और \"Apply Now\" पर क्लिक करें।", text: "डैशबोर्ड पर सभी सक्रिय भर्तियां दिखती हैं। अपनी परीक्षा चुनें, अधिसूचना PDF देखें और \"Apply Now\" पर क्लिक करें। आपकी OTR जानकारी फ़ॉर्म में स्वचालित रूप से भर जाएगी।" },
      { title: "दस्तावेज अपलोड करें और OTR शुल्क जमा करें।", text: "JPEG फ़ॉर्मेट में फ़ोटो और हस्ताक्षर अपलोड करें। OTR शुल्क UPI, डेबिट कार्ड, क्रेडिट कार्ड या नेट बैंकिंग से जमा करें। पुष्टि पर्ची डाउनलोड करके सुरक्षित रखें।" },
    ],
  },
  applyImportant: {
    en: "Important: The OTR fee is non-refundable. Double-check your category selection before paying — it determines the fee amount and your exam eligibility.",
    hi: "महत्वपूर्ण: OTR शुल्क वापस नहीं होता। भुगतान से पहले अपनी श्रेणी की जांच जरूर करें — इसी से शुल्क और पात्रता तय होती है।",
  },
  overviewTitle: {
    en: "Rajasthan Government Exams Covered on This Site",
    hi: "इस साइट पर कौन-सी राजस्थान सरकारी परीक्षाएं शामिल हैं",
  },
  overviewBody: {
    en: [
      "RPSC Exams are conducted by the Rajasthan Public Service Commission and include some of the most competitive posts in state administration. The RPSC CET (Common Eligibility Test) is the gateway exam for Group B and C posts. The premier RPSC RAS exam, with 607 vacancies announced for 2026, has its application window open from 4 June to 3 July 2026. All RPSC applications go through the SSO portal and require OTR completion.",
      "RSMSSB / RSSB Exams are conducted by the Rajasthan Staff Selection Board for non-gazetted posts. Major recruitments in the 2026 calendar include LDC (Lower Division Clerk), Agriculture Supervisor, Mahila Supervisor, Forester (Vanpal), and Patwari. The board has announced over 1 lakh vacancies in a joint drive with RPSC for 2026. All applications use the SSO portal and OTR system.",
      "REET (Rajasthan Eligibility Examination for Teachers) is conducted by RSSB for teaching posts in state schools. REET Mains 2026 was held in January; a new cycle is expected to be announced. REET Level 1 covers Classes 1–5; Level 2 covers Classes 6–8.",
      "More exams will be added to this page as notifications are released. Check the Exam Calendar for upcoming last dates and exam dates in one view.",
    ],
    hi: [
      "RPSC परीक्षाएं राजस्थान लोक सेवा आयोग द्वारा आयोजित की जाती हैं और इनमें राज्य प्रशासन के सबसे प्रतिस्पर्धी पदों को शामिल किया जाता है। RPSC CET (सामान्य पात्रता परीक्षा) ग्रुप B और C पदों के लिए प्रवेश परीक्षा है। प्रतिष्ठित RPSC RAS परीक्षा 2026 में 607 पदों के लिए आवेदन 4 जून से 3 जुलाई 2026 तक स्वीकार किए गए। सभी RPSC आवेदन SSO पोर्टल के माध्यम से OTR पूरी करने के बाद होते हैं।",
      "RSMSSB / RSSB परीक्षाएं राजस्थान कर्मचारी चयन बोर्ड द्वारा गैर-राजपत्रित पदों के लिए आयोजित की जाती हैं। 2026 की प्रमुख भर्तियों में LDC (कनिष्ठ लिपिक), कृषि पर्यवेक्षक, महिला पर्यवेक्षक, वनपाल और पटवारी शामिल हैं। RPSC के साथ संयुक्त अभियान में 2026 के लिए 1 लाख से अधिक पदों की घोषणा की गई है।",
      "REET (राजस्थान अध्यापक पात्रता परीक्षा) RSSB द्वारा राज्य के सरकारी स्कूलों में शिक्षक पदों के लिए आयोजित होती है। REET Mains 2026 जनवरी में हुई; नए चक्र की घोषणा अपेक्षित है। REET स्तर 1 कक्षा 1–5 के लिए और स्तर 2 कक्षा 6–8 के लिए है।",
      "अधिसूचनाएं जारी होने पर इस पेज पर और परीक्षाएं जोड़ी जाएंगी। अंतिम तिथियों और परीक्षा तिथियों का एक नजर में अवलोकन करने के लिए परीक्षा कैलेंडर देखें।",
    ],
  },
  faqs: {
    en: [
      { question: "Do I need a new OTR registration for every Rajasthan exam I apply for?", answer: "No. OTR (One-Time Registration) is created once per candidate. Once your profile is complete and verified on the Rajasthan Recruitment Portal, you reuse the same profile for every future exam — RPSC, RSMSSB, or any other board. You only pay a fresh OTR fee for each new exam notification you apply to; the profile itself does not need to be recreated." },
      { question: "What is the OTR fee for Rajasthan government exams in 2026?", answer: "The OTR fee varies by exam and category. For most RPSC and RSMSSB exams, the general category fee is around ₹600. SC/ST candidates from Rajasthan typically pay a reduced fee, and some categories may receive a full waiver — but this differs per notification. Always check the official notification PDF for the exact fee applicable to your category before paying." },
      { question: "I already have an SSO ID. Do I still need to create a new account to apply?", answer: "No. Your existing SSO ID is all you need. Log in to sso.rajasthan.gov.in, open the Recruitment Portal from your dashboard, and check whether your OTR profile is already complete. If it is, you can apply for any active recruitment directly. If you have never accessed the Recruitment Portal before, you will need to complete the OTR profile once before applying." },
      { question: "Can I apply for multiple Rajasthan exams at the same time with the same SSO ID?", answer: "Yes. You can apply for multiple active recruitments simultaneously using a single SSO ID and OTR profile. Each application is treated separately — you pay the OTR fee for each exam, select your preferences, and submit individually. Your basic personal details remain the same across all applications." },
      { question: "What documents do I need ready before applying for a Rajasthan government exam?", answer: "Keep these ready before starting your application: Aadhaar card (for OTR verification), Class 10 marksheet (for name and date of birth), recent passport-size photograph in JPEG format, scanned signature in JPEG format, category certificate (if applying under SC/ST/OBC/EWS), and your payment method (UPI, debit card, credit card, or net banking). Having these prepared in advance avoids mid-session errors that could disrupt your application." },
    ],
    hi: [
      { question: "क्या हर राजस्थान परीक्षा के लिए नया OTR पंजीकरण करना होगा?", answer: "नहीं। OTR (वन-टाइम रजिस्ट्रेशन) एक उम्मीदवार के लिए एक बार बनाया जाता है। एक बार आपकी प्रोफ़ाइल राजस्थान भर्ती पोर्टल पर पूरी और सत्यापित हो जाए, तो आप उसी प्रोफ़ाइल को भविष्य की हर परीक्षा — RPSC, RSMSSB या किसी भी बोर्ड — के लिए इस्तेमाल कर सकते हैं। हर नई भर्ती अधिसूचना के लिए OTR शुल्क नया देना होता है, लेकिन प्रोफ़ाइल दोबारा नहीं बनानी होती।" },
      { question: "2026 में राजस्थान सरकारी परीक्षाओं के लिए OTR शुल्क क्या है?", answer: "OTR शुल्क परीक्षा और श्रेणी के अनुसार अलग-अलग होता है। अधिकांश RPSC और RSMSSB परीक्षाओं में सामान्य श्रेणी का शुल्क लगभग ₹600 है। राजस्थान के SC/ST उम्मीदवारों को आमतौर पर कम शुल्क देना होता है और कुछ श्रेणियों को पूर्ण छूट भी मिल सकती है — लेकिन यह हर अधिसूचना के अनुसार अलग होता है। भुगतान से पहले हमेशा आधिकारिक अधिसूचना PDF में अपनी श्रेणी के अनुसार शुल्क जांचें।" },
      { question: "मेरे पास पहले से SSO ID है। क्या मुझे नया खाता बनाना होगा?", answer: "नहीं। आपकी मौजूदा SSO ID ही पर्याप्त है। sso.rajasthan.gov.in पर लॉगिन करें, डैशबोर्ड से भर्ती पोर्टल खोलें और जांचें कि आपकी OTR प्रोफ़ाइल पहले से पूरी है या नहीं। यदि है, तो आप सीधे किसी भी सक्रिय भर्ती के लिए आवेदन कर सकते हैं। यदि पहले कभी भर्ती पोर्टल नहीं खोला, तो आवेदन से पहले OTR प्रोफ़ाइल एक बार पूरी करनी होगी।" },
      { question: "क्या एक ही SSO ID से एक साथ कई राजस्थान परीक्षाओं के लिए आवेदन कर सकते हैं?", answer: "हां। एक SSO ID और OTR प्रोफ़ाइल से आप एक साथ कई सक्रिय भर्तियों के लिए आवेदन कर सकते हैं। प्रत्येक आवेदन अलग होता है — हर परीक्षा के लिए OTR शुल्क अलग देना होगा और आवेदन अलग जमा करना होगा। आपकी बुनियादी व्यक्तिगत जानकारी सभी आवेदनों में समान रहती है।" },
      { question: "राजस्थान सरकारी परीक्षा के लिए आवेदन से पहले कौन-से दस्तावेज तैयार रखें?", answer: "आवेदन शुरू करने से पहले ये तैयार रखें: आधार कार्ड (OTR सत्यापन के लिए), कक्षा 10 की मार्कशीट (नाम और जन्मतिथि के लिए), हाल की पासपोर्ट साइज फ़ोटो JPEG फ़ॉर्मेट में, स्कैन किया हुआ हस्ताक्षर JPEG फ़ॉर्मेट में, श्रेणी प्रमाण पत्र (SC/ST/OBC/EWS के लिए), और भुगतान का माध्यम (UPI, डेबिट कार्ड, क्रेडिट कार्ड या नेट बैंकिंग)। इन्हें पहले से तैयार रखने से आवेदन के बीच में रुकावट नहीं आती।" },
    ],
  },
  ctaTitle: {
    en: "Not sure where to start?",
    hi: "पहली बार आवेदन कर रहे हैं? यहां से शुरू करें।",
  },
  ctaBody: {
    en: "If this is your first time applying for a Rajasthan government exam, the fastest path is: create your SSO ID, complete OTR, pick an exam from the list above, and apply before the last date. Use the Exam Calendar to track all upcoming deadlines in one place, or read the SSO Login Guide if you are setting up your account for the first time.",
    hi: "यदि आप पहली बार राजस्थान सरकारी परीक्षा के लिए आवेदन कर रहे हैं, तो सबसे आसान रास्ता है: SSO ID बनाएं, OTR पूरी करें, ऊपर दी गई सूची से परीक्षा चुनें और अंतिम तिथि से पहले आवेदन करें। सभी आगामी अंतिम तिथियों को एक जगह देखने के लिए परीक्षा कैलेंडर देखें, या पहली बार खाता बना रहे हैं तो SSO लॉगिन गाइड पढ़ें।",
  },
};
