import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqSection } from "@/components/FaqSection";
import { cities } from "@/lib/content";
import { getDictionary, isLocale, locales, type Locale } from "@/lib/i18n";
import type { FaqItem } from "@/lib/schema";
import {
  alternates,
  breadcrumbSchema,
  buildGraph,
  canonicalFor,
  faqSchema,
  itemListSchema,
  socialMeta,
} from "@/lib/schema";

const intro = {
  en: [
    "A Rajasthan SSO ID works the same way in every city and district. It is a single state-wide login, not a separate account for each place. The pages below explain how registration, login, and e-Mitra help work locally, with notes for larger cities like Jaipur, Jodhpur, Kota, and Udaipur.",
    "Wherever you live, the official portal is the same: sso.rajasthan.gov.in. A city e-Mitra kiosk is most useful when you need help in person, for example updating a changed mobile number, finishing Jan Aadhaar e-KYC, or getting back into an account when you can no longer receive OTP on your old number.",
  ],
  hi: [
    "राजस्थान एसएसओ आईडी हर शहर और जिले में एक जैसी काम करती है। यह पूरे राज्य के लिए एक ही लॉगिन है, हर जगह के लिए अलग खाता नहीं। नीचे दिए पेज बताते हैं कि रजिस्ट्रेशन, लॉगिन और ई-मित्र सहायता स्थानीय स्तर पर कैसे काम करती है, जिसमें जयपुर, जोधपुर, कोटा और उदयपुर जैसे बड़े शहरों की जानकारी शामिल है।",
    "आप कहीं भी रहें, आधिकारिक पोर्टल एक ही है: sso.rajasthan.gov.in। शहर का ई-मित्र केंद्र तब सबसे उपयोगी होता है जब आपको व्यक्तिगत सहायता चाहिए, जैसे बदला हुआ मोबाइल नंबर अपडेट करना, जन आधार ई-केवाईसी पूरा करना, या पुराने नंबर पर ओटीपी न मिलने पर खाता वापस पाना।",
  ],
} as const;

type Section = {
  heading: { en: string; hi: string };
  body: { en: string[]; hi: string[] };
  points?: { en: string[]; hi: string[] };
};

const sections: Section[] = [
  {
    heading: {
      en: "How one SSO ID covers all of Rajasthan",
      hi: "एक एसएसओ आईडी पूरे राजस्थान में कैसे काम करती है",
    },
    body: {
      en: [
        "Your SSO ID belongs to you, not to your address. Once you create it, the same username and password work in every district. If you register in Kota and later move to Jaipur for college, you keep the same login and the same history. Nothing has to be transferred, and you do not open a second account.",
        "From that one account you can reach more than a hundred state services. You can apply for jobs and scholarships, pay an electricity bill, book an e-Mitra service, or update your Jan Aadhaar details. The web address stays the same everywhere, sso.rajasthan.gov.in, so save it once and avoid look-alike sites that copy the government design.",
      ],
      hi: [
        "आपकी एसएसओ आईडी आपसे जुड़ी होती है, आपके पते से नहीं। एक बार बनाने के बाद वही यूज़रनेम और पासवर्ड हर जिले में काम करता है। अगर आप कोटा में रजिस्टर करते हैं और बाद में पढ़ाई के लिए जयपुर आ जाते हैं, तो वही लॉगिन और वही रिकॉर्ड बना रहता है। कुछ भी ट्रांसफर करने की ज़रूरत नहीं, और दूसरा खाता नहीं खोलना पड़ता।",
        "उसी एक खाते से आप 100 से अधिक राज्य सेवाओं तक पहुँच सकते हैं। नौकरी और छात्रवृत्ति के लिए आवेदन, बिजली बिल भुगतान, ई-मित्र सेवा, या जन आधार अपडेट सब यहीं से होता है। वेबसाइट का पता हर जगह एक ही रहता है, sso.rajasthan.gov.in, इसलिए इसे एक बार सेव कर लें और सरकारी डिज़ाइन की नकल करने वाली मिलती-जुलती साइटों से बचें।",
      ],
    },
  },
  {
    heading: {
      en: "When a local e-Mitra centre is worth the trip",
      hi: "ई-मित्र केंद्र जाना कब उपयोगी है",
    },
    body: {
      en: [
        "Most SSO tasks work fine from a phone at home. You really need a centre only when something blocks you online. These are the usual reasons people walk into an e-Mitra shop:",
      ],
      hi: [
        "ज़्यादातर एसएसओ काम घर से मोबाइल पर ही हो जाते हैं। केंद्र की ज़रूरत तब पड़ती है जब कोई चीज़ ऑनलाइन रोक देती है। लोग आमतौर पर इन कारणों से ई-मित्र दुकान पर जाते हैं:",
      ],
    },
    points: {
      en: [
        "Your registered mobile number changed and the OTP no longer reaches you.",
        "Jan Aadhaar e-KYC keeps failing at the biometric step.",
        "You forgot which mobile number or email is linked to the account.",
        "An older family member wants help and prefers to sit with an operator.",
      ],
      hi: [
        "आपका रजिस्टर्ड मोबाइल नंबर बदल गया है और ओटीपी अब नहीं आता।",
        "जन आधार ई-केवाईसी बायोमेट्रिक चरण पर बार-बार फेल हो रही है।",
        "आप भूल गए हैं कि खाते से कौन सा मोबाइल नंबर या ईमेल जुड़ा है।",
        "घर का कोई बुज़ुर्ग सदस्य संचालक के साथ बैठकर मदद लेना चाहता है।",
      ],
    },
  },
  {
    heading: {
      en: "What to take to an e-Mitra centre",
      hi: "ई-मित्र केंद्र क्या लेकर जाएं",
    },
    body: {
      en: [
        "Carry a few things so the visit stays short:",
      ],
      hi: [
        "कुछ चीज़ें साथ ले जाएं ताकि काम जल्दी हो जाए:",
      ],
    },
    points: {
      en: [
        "Your Aadhaar card or Aadhaar number.",
        "Your Jan Aadhaar card or enrolment number.",
        "The phone you want linked, so an OTP can be set up on the spot.",
        "Any document the specific service asks for, such as an income or caste certificate.",
      ],
      hi: [
        "आपका आधार कार्ड या आधार नंबर।",
        "आपका जन आधार कार्ड या नामांकन नंबर।",
        "जो फ़ोन जोड़ना है वह साथ रखें, ताकि वहीं ओटीपी सेट हो सके।",
        "जिस सेवा के लिए जो दस्तावेज़ चाहिए, जैसे आय या जाति प्रमाण पत्र।",
      ],
    },
  },
  {
    heading: {
      en: "SSO for students and job seekers",
      hi: "छात्रों और नौकरी आवेदकों के लिए एसएसओ",
    },
    body: {
      en: [
        "For students, the SSO ID is the gateway to recruitment. RPSC, RSSB, and Patwari applications all run through One-Time Registration on the SSO recruitment portal, so you set OTR up once and reuse it across exams in the same cycle. Keep your name and date of birth exactly matching your Class 10 marksheet, because a mismatch leads to correction charges and delays later.",
        "College towns like Kota, Sikar, and Jaipur see the heaviest use during exam season, and the portal slows down near a deadline. Apply a few days early rather than on the last night. Check the exams and scholarships pages for current fees and last dates before you start.",
      ],
      hi: [
        "छात्रों के लिए एसएसओ आईडी भर्ती का प्रवेश द्वार है। RPSC, RSSB और पटवारी के आवेदन एसएसओ भर्ती पोर्टल पर वन-टाइम रजिस्ट्रेशन से होते हैं, इसलिए OTR एक बार करें और उसी चक्र की कई परीक्षाओं में दोबारा उपयोग करें। अपना नाम और जन्म तिथि 10वीं की अंकतालिका से बिल्कुल मिलती रखें, वरना बाद में सुधार शुल्क और देरी होती है।",
        "कोटा, सीकर और जयपुर जैसे शिक्षा केंद्रों में परीक्षा सीज़न में सबसे ज़्यादा उपयोग होता है, और अंतिम तिथि के पास पोर्टल धीमा हो जाता है। आखिरी रात के बजाय कुछ दिन पहले आवेदन करें। शुरू करने से पहले परीक्षा और छात्रवृत्ति पेज पर मौजूदा शुल्क और अंतिम तिथियां देख लें।",
      ],
    },
  },
  {
    heading: {
      en: "Staying safe with local kiosks",
      hi: "स्थानीय दुकानों पर सतर्क रहें",
    },
    body: {
      en: [
        "Treat your SSO login like a bank password. The official portal and a genuine e-Mitra operator will never ask you to share your password or an OTP over the phone or on WhatsApp. If a shop asks for your password to save time, say no and type it yourself.",
        "Scam pages often copy the government layout and use similar names. Type sso.rajasthan.gov.in yourself instead of clicking an ad or a forwarded link. RajSSO Guide is an independent help site and never asks for your credentials.",
      ],
      hi: [
        "अपने एसएसओ लॉगिन को बैंक पासवर्ड की तरह समझें। आधिकारिक पोर्टल और असली ई-मित्र संचालक कभी भी फोन या व्हाट्सएप पर आपका पासवर्ड या ओटीपी नहीं मांगते। अगर कोई दुकान समय बचाने के नाम पर पासवर्ड मांगे, तो मना करें और खुद टाइप करें।",
        "धोखाधड़ी वाले पेज अक्सर सरकारी डिज़ाइन और मिलते-जुलते नाम इस्तेमाल करते हैं। किसी विज्ञापन या फॉरवर्ड किए गए लिंक पर क्लिक करने के बजाय sso.rajasthan.gov.in खुद टाइप करें। RajSSO Guide एक स्वतंत्र मार्गदर्शिका है और कभी आपकी लॉगिन जानकारी नहीं मांगती।",
      ],
    },
  },
  {
    heading: {
      en: "Which registration route to pick",
      hi: "रजिस्ट्रेशन का कौन सा तरीका चुनें",
    },
    body: {
      en: [
        "You can create an SSO ID three ways: with your Jan Aadhaar number, with your Aadhaar, or with a Google account. For most citizens in Rajasthan, Jan Aadhaar is the smoothest choice, because it already links your family and income records that many schemes and scholarships check later. Aadhaar works well if you do not have your Jan Aadhaar handy. A Google account is quick to start with, but you may still need to add Jan Aadhaar before you apply for state benefits.",
        "Whichever route you pick, you end up with the same single SSO ID. There is no separate city account to choose, and moving to another district later does not change how you log in.",
      ],
      hi: [
        "आप एसएसओ आईडी तीन तरीकों से बना सकते हैं: जन आधार नंबर से, आधार से, या Google अकाउंट से। राजस्थान के अधिकांश नागरिकों के लिए जन आधार सबसे आसान विकल्प है, क्योंकि इसमें आपके परिवार और आय के रिकॉर्ड पहले से जुड़े होते हैं, जिन्हें कई योजनाएं और छात्रवृत्तियां बाद में जांचती हैं। अगर जन आधार तुरंत उपलब्ध न हो तो आधार भी ठीक काम करता है। Google अकाउंट से शुरुआत जल्दी होती है, पर राज्य लाभ के लिए आवेदन से पहले जन आधार जोड़ना पड़ सकता है।",
        "आप जो भी तरीका चुनें, अंत में वही एक एसएसओ आईडी बनती है। कोई अलग शहर खाता नहीं चुनना पड़ता, और बाद में दूसरे जिले में जाने से लॉगिन का तरीका नहीं बदलता।",
      ],
    },
  },
  {
    heading: {
      en: "Updating your address or district details",
      hi: "पता या जिला विवरण अपडेट करना",
    },
    body: {
      en: [
        "If you move to a new district, your SSO login stays the same. Some services, such as ration or local certificates, read the address from your Jan Aadhaar, so update it there first and let it sync to your profile. You can begin most of this online and finish the biometric part at any e-Mitra centre if the portal asks for verification.",
        "Keep one mobile number and one email on the account that you actually use. When both are current, password resets and OTP recovery stay simple, and you avoid a centre visit for something you could fix from home.",
      ],
      hi: [
        "अगर आप नए जिले में जाते हैं, तो आपका एसएसओ लॉगिन वही रहता है। कुछ सेवाएं, जैसे राशन या स्थानीय प्रमाण पत्र, पता जन आधार से पढ़ती हैं, इसलिए पहले वहां अपडेट करें और उसे अपनी प्रोफ़ाइल में सिंक होने दें। अधिकांश काम ऑनलाइन शुरू कर सकते हैं, और यदि पोर्टल सत्यापन मांगे तो बायोमेट्रिक हिस्सा किसी भी ई-मित्र केंद्र पर पूरा कर सकते हैं।",
        "खाते पर वही एक मोबाइल नंबर और एक ईमेल रखें जो आप सच में उपयोग करते हैं। जब दोनों अद्यतन हों, तो पासवर्ड रीसेट और ओटीपी रिकवरी आसान रहती है, और घर से हो सकने वाले काम के लिए केंद्र नहीं जाना पड़ता।",
      ],
    },
  },
  {
    heading: {
      en: "Helping parents and older family members",
      hi: "माता-पिता और बुज़ुर्गों की मदद करना",
    },
    body: {
      en: [
        "A lot of city visits happen because someone is helping a parent or grandparent. If you are that person, take the account holder along when biometrics are involved, since the fingerprint has to be theirs. For everyday help, you can sit with them at home and go through the steps on their phone.",
        "Write down their SSO ID somewhere safe, but never save the password in a shared chat. If they keep missing OTP because the linked number is old, updating that mobile number once at a centre usually ends the repeated problem.",
      ],
      hi: [
        "कई बार शहर के केंद्र इसलिए जाना पड़ता है क्योंकि कोई अपने माता-पिता या दादा-दादी की मदद कर रहा होता है। अगर आप वह व्यक्ति हैं, तो बायोमेट्रिक वाले काम में खाताधारक को साथ ले जाएं, क्योंकि फिंगरप्रिंट उन्हीं का चाहिए। रोज़मर्रा की मदद के लिए आप उनके साथ घर पर बैठकर उनके फोन पर चरण पूरे कर सकते हैं।",
        "उनकी एसएसओ आईडी कहीं सुरक्षित लिख लें, पर पासवर्ड किसी साझा चैट में कभी न रखें। अगर पुराने नंबर के कारण बार-बार ओटीपी नहीं मिलता, तो एक बार केंद्र पर वह मोबाइल नंबर अपडेट करा देने से यह समस्या आमतौर पर खत्म हो जाती है।",
      ],
    },
  },
  {
    heading: {
      en: "A quick checklist before you visit",
      hi: "जाने से पहले एक छोटी चेकलिस्ट",
    },
    body: {
      en: [
        "Run through this before you spend time travelling to a centre. Most of it you can settle at home, and it saves a wasted trip:",
      ],
      hi: [
        "केंद्र जाने में समय लगाने से पहले इसे देख लें। इसमें से ज़्यादातर घर पर ही तय हो जाता है और बेकार का चक्कर बचता है:",
      ],
    },
    points: {
      en: [
        "Do you already have an SSO ID? If yes, try a password reset online first.",
        "Is the linked mobile number still with you? If not, a centre can update it.",
        "Do you have your Aadhaar and Jan Aadhaar numbers ready?",
        "Is the task one that truly needs biometrics, or can you finish it on your phone?",
      ],
      hi: [
        "क्या आपके पास पहले से एसएसओ आईडी है? यदि हां, तो पहले ऑनलाइन पासवर्ड रीसेट आज़माएं।",
        "क्या जुड़ा हुआ मोबाइल नंबर अब भी आपके पास है? यदि नहीं, तो केंद्र उसे अपडेट कर सकता है।",
        "क्या आपके आधार और जन आधार नंबर तैयार हैं?",
        "क्या काम में सचमुच बायोमेट्रिक ज़रूरी है, या आप उसे फोन पर ही पूरा कर सकते हैं?",
      ],
    },
  },
];

const faqs: Record<Locale, FaqItem[]> = {
  en: [
    {
      question: "Is the SSO ID different for each city?",
      answer:
        "No. A Rajasthan SSO ID is a single state-wide login that works across all districts. You do not need a separate account for each city.",
    },
    {
      question: "Can I use my Jaipur SSO ID in another city?",
      answer:
        "Yes. Your SSO ID is tied to you, not to a location, so the same login works whether you are in Jaipur, Kota, or anywhere else in Rajasthan.",
    },
    {
      question: "I moved to a new city. Do I need a new SSO ID?",
      answer:
        "No. Keep your existing SSO ID. It works in every Rajasthan district, so you only update your address details if a particular service asks for them.",
    },
    {
      question: "Where do I find an e-Mitra centre in my city?",
      answer:
        "Authorised e-Mitra kiosks operate in every city and most towns. Carry your Aadhaar or Jan Aadhaar for help with registration, document updates, or contact-detail changes.",
    },
    {
      question: "My village has no e-Mitra centre nearby. What are my options?",
      answer:
        "You can do most tasks yourself at sso.rajasthan.gov.in from any phone with internet. For steps that need biometrics, visit the nearest centre at your block or tehsil headquarters.",
    },
    {
      question: "Can I finish Jan Aadhaar e-KYC at any e-Mitra centre?",
      answer:
        "Yes. Any authorised e-Mitra centre in Rajasthan can complete Jan Aadhaar e-KYC. Bring the family head's Aadhaar and the members' details for verification.",
    },
    {
      question: "Do e-Mitra centres charge for SSO help?",
      answer:
        "Creating and using an SSO ID is free. e-Mitra operators may charge a small government-set fee for specific transactions like certificate applications, but never for SSO registration itself.",
    },
    {
      question: "Is online registration better than visiting a centre?",
      answer:
        "For a straightforward new account, online is faster and free. Use a centre when the OTP fails, biometrics are involved, or you want someone to guide you through it.",
    },
  ],
  hi: [
    {
      question: "क्या हर शहर के लिए एसएसओ आईडी अलग होती है?",
      answer:
        "नहीं। राजस्थान एसएसओ आईडी पूरे राज्य के लिए एक ही लॉगिन है जो सभी जिलों में काम करती है। हर शहर के लिए अलग खाता बनाने की जरूरत नहीं।",
    },
    {
      question: "क्या मैं अपनी जयपुर एसएसओ आईडी दूसरे शहर में उपयोग कर सकता हूँ?",
      answer:
        "हाँ। आपकी एसएसओ आईडी आपसे जुड़ी होती है, किसी स्थान से नहीं, इसलिए वही लॉगिन जयपुर, कोटा या राजस्थान में कहीं भी काम करता है।",
    },
    {
      question: "मैं नए शहर में आ गया हूँ। क्या नई एसएसओ आईडी चाहिए?",
      answer:
        "नहीं। अपनी मौजूदा एसएसओ आईडी ही रखें। यह हर जिले में काम करती है, इसलिए केवल तब पता विवरण अपडेट करें जब कोई विशेष सेवा मांगे।",
    },
    {
      question: "मेरे शहर में ई-मित्र केंद्र कहाँ मिलेगा?",
      answer:
        "अधिकृत ई-मित्र केंद्र हर शहर और अधिकांश कस्बों में होते हैं। रजिस्ट्रेशन, दस्तावेज़ अपडेट या संपर्क विवरण बदलने में सहायता के लिए अपना आधार या जन आधार साथ ले जाएं।",
    },
    {
      question: "मेरे गाँव के पास ई-मित्र केंद्र नहीं है। क्या करूँ?",
      answer:
        "अधिकांश काम आप sso.rajasthan.gov.in पर इंटरनेट वाले किसी भी फोन से खुद कर सकते हैं। बायोमेट्रिक वाले चरणों के लिए अपने ब्लॉक या तहसील मुख्यालय के नज़दीकी केंद्र पर जाएं।",
    },
    {
      question: "क्या जन आधार ई-केवाईसी किसी भी ई-मित्र केंद्र पर हो सकती है?",
      answer:
        "हाँ। राजस्थान का कोई भी अधिकृत ई-मित्र केंद्र जन आधार ई-केवाईसी पूरी कर सकता है। सत्यापन के लिए परिवार के मुखिया का आधार और सदस्यों का विवरण साथ लाएं।",
    },
    {
      question: "क्या ई-मित्र केंद्र एसएसओ सहायता के लिए शुल्क लेते हैं?",
      answer:
        "एसएसओ आईडी बनाना और उपयोग करना मुफ़्त है। ई-मित्र संचालक कुछ विशेष सेवाओं (जैसे प्रमाण पत्र आवेदन) के लिए सरकार द्वारा तय छोटा शुल्क ले सकते हैं, पर एसएसओ रजिस्ट्रेशन के लिए कभी नहीं।",
    },
    {
      question: "ऑनलाइन रजिस्ट्रेशन बेहतर है या केंद्र पर जाना?",
      answer:
        "सीधे-सादे नए खाते के लिए ऑनलाइन तेज़ और मुफ़्त है। केंद्र तब चुनें जब ओटीपी न आए, बायोमेट्रिक ज़रूरी हो, या कोई आपको गाइड करे।",
    },
  ],
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const title =
    locale === "hi"
      ? "शहर अनुसार एसएसओ आईडी मदद — राजस्थान"
      : "SSO ID Help by City — Rajasthan";
  const description =
    locale === "hi"
      ? "जयपुर, जोधपुर, कोटा सहित राजस्थान के शहरों में एसएसओ आईडी और ई-मित्र सहायता।"
      : "SSO ID and e-Mitra help across Rajasthan cities including Jaipur, Jodhpur and Kota.";
  return {
    title,
    description,
    alternates: {
      canonical: canonicalFor(locale, "/cities"),
      ...alternates("/cities"),
    },
    ...socialMeta({ locale, title, description, path: "/cities" }),
  };
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className={className}>
      <path
        fillRule="evenodd"
        d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.5 7.6a1 1 0 0 1-1.42.006l-3.5-3.5a1 1 0 1 1 1.414-1.414l2.79 2.79 6.796-6.89a1 1 0 0 1 1.414-.006Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 10h11m0 0-4-4m4 4-4 4" />
    </svg>
  );
}

function PinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className={className}>
      <path
        fillRule="evenodd"
        d="M10 2a5 5 0 0 0-5 5c0 3.5 5 9 5 9s5-5.5 5-9a5 5 0 0 0-5-5Zm0 6.8A1.8 1.8 0 1 1 10 5.2a1.8 1.8 0 0 1 0 3.6Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default async function CitiesHub({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const loc = locale as Locale;
  const t = getDictionary(loc);
  const base = `/${loc}`;
  const hi = loc === "hi";

  const graph = buildGraph([
    breadcrumbSchema([
      { name: t.common.home, path: base },
      { name: t.nav.cities, path: `${base}/cities` },
    ]),
    itemListSchema(
      cities.map((c) => ({ name: c.name[loc], path: `${base}/city/${c.slug}` })),
    ),
    faqSchema(faqs[loc]),
  ]);

  const nextSteps = [
    { href: `${base}/sso-id-registration`, label: t.nav.registration },
    { href: `${base}/forgot-sso-id`, label: t.nav.forgot },
    { href: `${base}/exams`, label: t.nav.exams },
    { href: `${base}/exam-calendar`, label: hi ? "परीक्षा कैलेंडर" : "Exam Calendar" },
    { href: `${base}/scholarships`, label: t.nav.scholarships },
  ];

  const stats = [
    { value: String(cities.length), label: hi ? "शहर शामिल" : "cities covered" },
    { value: "1", label: hi ? "आईडी, पूरे राज्य में" : "ID, statewide" },
    { value: "e-Mitra", label: hi ? "व्यक्तिगत सहायता" : "in-person help" },
  ];

  const toc = [
    ...sections.map((s) => ({ id: slugify(s.heading.en), label: s.heading[loc] })),
    { id: "known-for", label: hi ? "हर शहर की पहचान" : "What each city is known for" },
    { id: "faq", label: hi ? "सामान्य प्रश्न" : "Common questions" },
  ];

  return (
    <div className="mx-auto max-w-4xl">
      <JsonLd data={graph} />
      <Breadcrumbs
        items={[{ name: t.common.home, href: base }, { name: t.nav.cities }]}
      />

      {/* Hero */}
      <section className="mt-4 overflow-hidden rounded-3xl border border-amber-100 bg-gradient-to-br from-amber-50 via-white to-white px-6 py-10 sm:px-10 sm:py-12">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800">
          <PinIcon className="h-3.5 w-3.5" />
          {hi ? "पूरे राजस्थान में एक ही लॉगिन" : "One login across Rajasthan"}
        </span>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          {hi ? "शहर अनुसार एसएसओ आईडी मदद" : "SSO ID Help by City"}
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
          {hi
            ? "अपने शहर में एसएसओ आईडी रजिस्ट्रेशन, लॉगिन और ई-मित्र सेवाओं की जानकारी पाएं।"
            : "Find SSO ID registration, login and e-Mitra service help in your city."}
        </p>
        <dl className="mt-8 grid max-w-lg grid-cols-3 gap-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-zinc-200 bg-white/70 p-4 text-center backdrop-blur"
            >
              <dt className="text-2xl font-bold text-amber-700">{s.value}</dt>
              <dd className="mt-1 text-xs text-zinc-500">{s.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* City directory */}
      <section id="cities" className="mt-12 scroll-mt-24">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
          {hi ? "अपना शहर चुनें" : "Choose your city"}
        </h2>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {cities.map((c) => (
            <Link
              key={c.slug}
              href={`${base}/city/${c.slug}`}
              className="group rounded-2xl border border-zinc-200 p-4 transition hover:border-amber-400 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              <span className="block font-semibold text-zinc-900">{c.name[loc]}</span>
              <span className="mt-0.5 block text-xs text-zinc-500">{c.region[loc]}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Intro */}
      <div className="mt-10 max-w-2xl space-y-4 leading-relaxed text-zinc-700">
        {intro[loc].map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {/* On this page */}
      <nav
        aria-label={hi ? "इस पेज पर" : "On this page"}
        className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50/70 p-5"
      >
        <p className="text-sm font-semibold text-zinc-900">
          {hi ? "इस पेज पर" : "On this page"}
        </p>
        <ul className="mt-3 grid gap-x-6 gap-y-2 sm:grid-cols-2">
          {toc.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="text-sm text-amber-700 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Content sections */}
      {sections.map((s) => {
        const id = slugify(s.heading.en);
        const isSafety = id === "staying-safe-with-local-kiosks";
        return (
          <section
            key={id}
            id={id}
            className={
              isSafety
                ? "mt-12 scroll-mt-24 rounded-2xl border border-amber-200 bg-amber-50/50 p-6 sm:p-8"
                : "mt-12 scroll-mt-24"
            }
          >
            <h2 className="flex items-center gap-2.5 text-2xl font-bold tracking-tight text-zinc-900">
              <span
                aria-hidden="true"
                className="h-6 w-1.5 shrink-0 rounded-full bg-amber-500"
              />
              {s.heading[loc]}
            </h2>
            <div className="mt-4 max-w-2xl space-y-4 leading-relaxed text-zinc-700">
              {s.body[loc].map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </div>
            {s.points && (
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {s.points[loc].map((pt, j) => (
                  <li
                    key={j}
                    className="flex gap-3 rounded-xl border border-zinc-100 bg-white px-4 py-3 shadow-sm"
                  >
                    <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                    <span className="text-sm leading-relaxed text-zinc-700">{pt}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        );
      })}

      {/* Known-for table */}
      <section id="known-for" className="mt-12 scroll-mt-24">
        <h2 className="flex items-center gap-2.5 text-2xl font-bold tracking-tight text-zinc-900">
          <span aria-hidden="true" className="h-6 w-1.5 shrink-0 rounded-full bg-amber-500" />
          {hi ? "राजस्थान के हर शहर की पहचान" : "What each Rajasthan city is known for"}
        </h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-zinc-700">
          {hi
            ? "हर शहर पेज उन्हीं मूल चरणों में स्थानीय जानकारी जोड़ता है। अपना शहर चुनें।"
            : "Each city page adds local context to the same core steps. Pick your city below."}
        </p>
        <div className="mt-5 overflow-x-auto rounded-2xl border border-zinc-200 shadow-sm">
          <table className="w-full border-collapse text-sm">
            <caption className="sr-only">
              {hi
                ? "राजस्थान के शहर, उनके क्षेत्र और पहचान"
                : "Rajasthan cities, their region and what they are known for"}
            </caption>
            <thead>
              <tr className="bg-zinc-900 text-left text-white">
                <th scope="col" className="px-4 py-3 font-semibold">{hi ? "शहर" : "City"}</th>
                <th scope="col" className="px-4 py-3 font-semibold">{hi ? "क्षेत्र" : "Region"}</th>
                <th scope="col" className="px-4 py-3 font-semibold">{hi ? "पहचान" : "Known for"}</th>
              </tr>
            </thead>
            <tbody>
              {cities.map((c, i) => (
                <tr
                  key={c.slug}
                  className={`transition hover:bg-amber-50/40 ${i % 2 === 0 ? "bg-white" : "bg-zinc-50"}`}
                >
                  <td className="px-4 py-3">
                    <Link
                      href={`${base}/city/${c.slug}`}
                      className="font-medium text-amber-700 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                    >
                      {c.name[loc]}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-zinc-600">{c.region[loc]}</td>
                  <td className="px-4 py-3 text-zinc-600">{c.knownFor[loc]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Next steps */}
      <section className="mt-12 scroll-mt-24">
        <h2 className="flex items-center gap-2.5 text-2xl font-bold tracking-tight text-zinc-900">
          <span aria-hidden="true" className="h-6 w-1.5 shrink-0 rounded-full bg-amber-500" />
          {hi ? "आगे क्या करें" : "Helpful next steps"}
        </h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {nextSteps.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group flex items-center justify-between rounded-2xl border border-zinc-200 px-5 py-4 font-medium text-zinc-800 transition hover:border-amber-400 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              <span>{s.label}</span>
              <ArrowIcon className="h-5 w-5 shrink-0 text-amber-600 transition-transform group-hover:translate-x-0.5" />
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mt-12 scroll-mt-24">
        <FaqSection title={t.common.faqTitle} faqs={faqs[loc]} />
      </section>
    </div>
  );
}
