// Bilingual SEO content for the /updates hub page.
import type { Locale } from "@/lib/i18n";
import type { FaqItem } from "@/lib/schema";

type L<T> = Record<Locale, T>;

interface LabeledItem {
  label: string;
  text: string;
}

interface Step {
  title: string;
  text: string;
}

export const updatesHub: {
  metaTitle: L<string>;
  metaDescription: L<string>;
  keywords: L<string[]>;
  h1: L<string>;
  intro: L<string>;
  disclaimer: L<string>;
  whatTitle: L<string>;
  whatIntro: L<string>;
  categories: L<LabeledItem[]>;
  whyTitle: L<string>;
  whyBody: L<string[]>;
  useTitle: L<string>;
  useSteps: L<Step[]>;
  missTitle: L<string>;
  missPoints: L<LabeledItem[]>;
  safetyTitle: L<string>;
  safetyBody: L<string>;
  faqs: L<FaqItem[]>;
  ctaTitle: L<string>;
  ctaBody: L<string>;
} = {
  metaTitle: {
    en: "Rajasthan SSO Updates 2026: Exam, Scholarship & Service News",
    hi: "राजस्थान एसएसओ अपडेट 2026 — परीक्षा, छात्रवृत्ति व सेवा सूचनाएं",
  },
  metaDescription: {
    en: "Latest Rajasthan SSO updates 2026: exam last dates, OTR notices, scholarship portals and PayManager & Jan Aadhaar service alerts. Verify on the official portal.",
    hi: "राजस्थान एसएसओ की ताज़ा अपडेट 2026: परीक्षा अंतिम तिथियां, OTR सूचनाएं, छात्रवृत्ति पोर्टल और सेवा अलर्ट। हमेशा आधिकारिक पोर्टल पर पुष्टि करें।",
  },
  keywords: {
    en: [
      "Rajasthan SSO updates",
      "SSO ID latest news 2026",
      "Rajasthan SSO exam last date",
      "RPSC RSMSSB OTR update",
      "Rajasthan scholarship portal update",
      "PayManager Jan Aadhaar notice",
      "sso.rajasthan.gov.in latest update",
      "Rajasthan sarkari exam notification 2026",
      "SSO ID news Hindi",
    ],
    hi: [
      "राजस्थान एसएसओ अपडेट",
      "एसएसओ आईडी ताज़ा समाचार 2026",
      "राजस्थान एसएसओ परीक्षा अंतिम तिथि",
      "RPSC RSMSSB OTR अपडेट",
      "राजस्थान छात्रवृत्ति पोर्टल अपडेट",
      "PayManager जन आधार सूचना",
      "sso.rajasthan.gov.in नवीनतम अपडेट",
      "राजस्थान सरकारी परीक्षा अधिसूचना 2026",
    ],
  },
  h1: {
    en: "Rajasthan SSO Updates 2026 — Exams, Scholarships & Services",
    hi: "राजस्थान एसएसओ अपडेट 2026 — परीक्षा, छात्रवृत्ति और सेवाएं",
  },
  intro: {
    en: "This is the live Rajasthan SSO updates page — a single, dated feed of the most recent notifications connected to the Rajasthan Single Sign-On (SSO) ID portal. Whether you are tracking an exam's last date, watching for a scholarship window to open, or waiting on a service notice like a PayManager salary slip or Jan Aadhaar e-KYC change, this page gathers those time-sensitive items in one place so you do not have to check several departments separately.",
    hi: "यह राजस्थान एसएसओ अपडेट पेज है — राजस्थान सिंगल साइन-ऑन (एसएसओ) आईडी पोर्टल से जुड़ी सबसे ताज़ा सूचनाओं की एक तिथिवार सूची। चाहे आप किसी परीक्षा की अंतिम तिथि देख रहे हों, किसी छात्रवृत्ति पोर्टल के खुलने का इंतज़ार कर रहे हों, या PayManager सैलरी स्लिप व जन आधार ई-केवाईसी जैसी किसी सेवा सूचना की प्रतीक्षा कर रहे हों — यह पेज इन सभी समय-संवेदनशील जानकारियों को एक जगह लाता है, ताकि आपको अलग-अलग विभागों की वेबसाइट बार-बार न देखनी पड़े।",
  },
  disclaimer: {
    en: "RajSSO Guide is an independent guide, not the government portal. For every notice, the official source is sso.rajasthan.gov.in and the relevant department's website. We never ask for your SSO ID, password, or OTP.",
    hi: "RajSSO Guide एक स्वतंत्र मार्गदर्शिका है, सरकारी पोर्टल नहीं। हर सूचना का आधिकारिक स्रोत sso.rajasthan.gov.in और संबंधित विभाग की वेबसाइट है। हम कभी भी आपकी एसएसओ आईडी, पासवर्ड या ओटीपी नहीं मांगते।",
  },
  whatTitle: {
    en: "What you will find on this page",
    hi: "इस पेज पर आपको क्या मिलेगा",
  },
  whatIntro: {
    en: "Each entry shows a category tag, a short headline, and the date it was posted. The newest items appear at the top, and anything published recently is marked with a New badge so you can spot fresh notices at a glance. Updates fall into four categories:",
    hi: "हर प्रविष्टि में एक श्रेणी टैग, एक छोटी हेडलाइन और पोस्ट करने की तिथि दिखती है। सबसे नई सूचनाएं सबसे ऊपर रहती हैं, और हाल ही में प्रकाशित सूचनाओं पर 'नया' बैज लगा होता है ताकि ताज़ा अपडेट एक नज़र में पहचानी जा सकें। अपडेट चार श्रेणियों में आती हैं:",
  },
  categories: {
    en: [
      { label: "Exam", text: "recruitment notices tied to the SSO recruitment flow: RPSC and RSMSSB notifications, One-Time Registration (OTR) windows, application last dates, and exam-date announcements (for example, RPSC CET, RSMSSB LDC, and Patwari)." },
      { label: "Scholarship", text: "openings and deadlines for SSO-linked scholarship portals, such as the SC, ST, OBC, EWS, and minority schemes run through the Social Justice and Empowerment department." },
      { label: "Service", text: "changes to everyday SSO services such as PayManager salary slips, RajKaj leave workflows, and Jan Aadhaar e-KYC requirements." },
      { label: "General", text: "broader portal news that does not fit the other three, such as maintenance windows or policy changes." },
    ],
    hi: [
      { label: "परीक्षा", text: "एसएसओ भर्ती प्रक्रिया से जुड़ी सूचनाएं: RPSC और RSMSSB अधिसूचनाएं, वन-टाइम रजिस्ट्रेशन (OTR) की अवधि, आवेदन की अंतिम तिथियां और परीक्षा-तिथि की घोषणाएं (जैसे RPSC CET, RSMSSB LDC और पटवारी)।" },
      { label: "छात्रवृत्ति", text: "एसएसओ से जुड़े छात्रवृत्ति पोर्टल के खुलने और अंतिम तिथियां, जैसे सामाजिक न्याय एवं अधिकारिता विभाग द्वारा संचालित एससी, एसटी, ओबीसी, ईडब्ल्यूएस और अल्पसंख्यक योजनाएं।" },
      { label: "सेवा", text: "रोज़मर्रा की एसएसओ सेवाओं में बदलाव, जैसे PayManager सैलरी स्लिप, RajKaj छुट्टी प्रक्रिया और जन आधार ई-केवाईसी आवश्यकताएं।" },
      { label: "सामान्य", text: "पोर्टल से जुड़ी अन्य सूचनाएं जो ऊपर की तीन श्रेणियों में नहीं आतीं, जैसे रखरखाव अवधि या नीति परिवर्तन।" },
    ],
  },
  whyTitle: {
    en: "Why timely SSO updates matter",
    hi: "समय पर एसएसओ अपडेट क्यों ज़रूरी हैं",
  },
  whyBody: {
    en: [
      "Most Rajasthan government deadlines are firm. An OTR or application last date that passes means waiting for the next cycle, which can be months away. A scholarship form often depends on a completed Jan Aadhaar e-KYC, and that verification takes time to reflect. Knowing about a change early — rather than on the final day — gives you room to fix a mismatched name, update a registered mobile number at an e-Mitra centre, or arrange the application fee before the portal gets crowded near the deadline.",
      "A second reason is traffic. The SSO and recruitment portals slow down in the last 48 hours before a popular deadline. Acting on an update as soon as it appears here helps you apply during quieter hours.",
    ],
    hi: [
      "राजस्थान सरकार की अधिकांश तिथियां तय होती हैं। OTR या आवेदन की अंतिम तिथि निकल जाने का मतलब है अगले चक्र का इंतज़ार, जो कई महीने दूर हो सकता है। छात्रवृत्ति फॉर्म अक्सर पूरी हुई जन आधार ई-केवाईसी पर निर्भर करता है, और यह सत्यापन दिखने में समय लेता है। किसी बदलाव की जानकारी पहले से होने पर — अंतिम दिन के बजाय — आपको नाम की गलती सुधारने, ई-मित्र केंद्र पर रजिस्टर्ड मोबाइल नंबर अपडेट कराने, या भीड़ बढ़ने से पहले आवेदन शुल्क की व्यवस्था करने का समय मिल जाता है।",
      "दूसरा कारण है ट्रैफ़िक। किसी लोकप्रिय अंतिम तिथि से पहले के 48 घंटों में एसएसओ और भर्ती पोर्टल धीमे हो जाते हैं। अपडेट दिखते ही कार्रवाई करने से आप शांत समय में आवेदन कर पाते हैं।",
    ],
  },
  useTitle: {
    en: "How to use this updates page",
    hi: "इस अपडेट पेज का उपयोग कैसे करें",
  },
  useSteps: {
    en: [
      { title: "Scan the top of the feed.", text: "The most recent notices are listed first; look for the New badge." },
      { title: "Read the category tag.", text: "It tells you instantly whether an item is about an exam, a scholarship, a service, or general news." },
      { title: "Open the linked page.", text: "Each headline links to the detail page on this site (or, where marked, to an external official source) so you can read the full context." },
      { title: "Verify on the official portal.", text: "Before you apply or pay, confirm the exact date, fee, and eligibility on sso.rajasthan.gov.in or the conducting body's site." },
      { title: "Act early.", text: "If a deadline is close, complete your step well before the final day to avoid portal congestion." },
    ],
    hi: [
      { title: "फ़ीड का ऊपरी हिस्सा देखें।", text: "सबसे नई सूचनाएं सबसे पहले दिखती हैं; 'नया' बैज ढूंढें।" },
      { title: "श्रेणी टैग पढ़ें।", text: "यह तुरंत बता देता है कि सूचना परीक्षा, छात्रवृत्ति, सेवा या सामान्य समाचार से जुड़ी है।" },
      { title: "लिंक किया गया पेज खोलें।", text: "हर हेडलाइन इस साइट के विस्तृत पेज (या, जहां चिह्नित हो, बाहरी आधिकारिक स्रोत) से जुड़ी होती है ताकि आप पूरा संदर्भ पढ़ सकें।" },
      { title: "आधिकारिक पोर्टल पर पुष्टि करें।", text: "आवेदन या भुगतान से पहले सही तिथि, शुल्क और पात्रता sso.rajasthan.gov.in या आयोजक संस्था की वेबसाइट पर ज़रूर जांचें।" },
      { title: "जल्दी कार्रवाई करें।", text: "यदि अंतिम तिथि नज़दीक है, तो अंतिम दिन से पहले ही अपना चरण पूरा करें ताकि पोर्टल की भीड़ से बचा जा सके।" },
    ],
  },
  missTitle: {
    en: "How to never miss an update",
    hi: "कोई अपडेट छूटे नहीं — ऐसे तैयार रहें",
  },
  missPoints: {
    en: [
      { label: "Bookmark this page", text: "and check it weekly during exam season." },
      { label: "Share to WhatsApp", text: "using the button on this page so friends and family preparing for the same exams stay informed." },
      { label: "Use the Exam Calendar", text: "to see upcoming last dates and exam dates in one visual view." },
      { label: "Keep your registered mobile number active", text: "because official OTP and SMS notices go there. If it has changed, update it at an e-Mitra centre before the next deadline." },
    ],
    hi: [
      { label: "इस पेज को बुकमार्क करें", text: "और परीक्षा सीज़न में हर सप्ताह देखें।" },
      { label: "व्हाट्सऐप पर साझा करें", text: "इस पेज पर मौजूद बटन से, ताकि एक ही परीक्षा की तैयारी कर रहे मित्र और परिवार भी सूचित रहें।" },
      { label: "परीक्षा कैलेंडर का उपयोग करें", text: "ताकि आगामी अंतिम तिथियां और परीक्षा-तिथियां एक नज़र में दिख जाएं।" },
      { label: "अपना रजिस्टर्ड मोबाइल नंबर सक्रिय रखें", text: "क्योंकि आधिकारिक ओटीपी और एसएमएस सूचनाएं वहीं आती हैं। यदि नंबर बदल गया है, तो अगली अंतिम तिथि से पहले ई-मित्र केंद्र पर अपडेट कराएं।" },
    ],
  },
  safetyTitle: {
    en: "A quick safety note",
    hi: "एक ज़रूरी सुरक्षा सलाह",
  },
  safetyBody: {
    en: "Updates here point you to official actions, but they never replace the official portal. You only ever enter your SSO ID, password, or OTP on sso.rajasthan.gov.in. Treat any message — SMS, social post, or website — that asks for those details elsewhere as a scam. RajSSO Guide will only ever link you to the official portal; it will not collect your credentials.",
    hi: "यहां दी गई अपडेट आपको आधिकारिक कार्रवाई की ओर ले जाती हैं, लेकिन ये कभी आधिकारिक पोर्टल का विकल्प नहीं हैं। आप अपनी एसएसओ आईडी, पासवर्ड या ओटीपी केवल sso.rajasthan.gov.in पर ही दर्ज करें। कोई भी संदेश — एसएमएस, सोशल पोस्ट या वेबसाइट — जो ये विवरण कहीं और मांगे, उसे धोखाधड़ी समझें। RajSSO Guide आपको केवल आधिकारिक पोर्टल तक पहुंचाता है; यह आपके लॉगिन विवरण कभी एकत्र नहीं करता।",
  },
  faqs: {
    en: [
      { question: "How often is this Rajasthan SSO updates page refreshed?", answer: "The feed is updated as new notifications are released by RPSC, RSMSSB, the scholarship departments, and the SSO service teams. During active exam and scholarship cycles, expect more frequent entries. Always confirm the precise date on the official portal, since deadlines can be extended or revised." },
      { question: "Are the dates and fees shown here official?", answer: "This is an independent guide. We summarise notices to help you keep track, but the official source is always sso.rajasthan.gov.in and the relevant department's website. Verify any date, fee, or eligibility detail there before applying or paying." },
      { question: "What does the New badge mean?", answer: "It marks updates posted recently, so you can quickly tell which notices are fresh. Older entries stay listed below for reference, newest first." },
      { question: "I missed a deadline I saw here. What can I do?", answer: "If an application or OTR last date has passed, watch this page and the Exam Calendar for the next cycle or any extension. Some departments do announce short extensions, but you should not rely on them — apply within the original window whenever possible." },
      { question: "Will RajSSO Guide ever ask for my SSO ID or OTP through an update?", answer: "No. We never request your SSO ID, password, or OTP anywhere. Those are entered only on the official portal. Any update or message asking for them elsewhere should be ignored and reported." },
    ],
    hi: [
      { question: "यह राजस्थान एसएसओ अपडेट पेज कितनी बार अपडेट होता है?", answer: "जैसे ही RPSC, RSMSSB, छात्रवृत्ति विभागों और एसएसओ सेवा टीमों द्वारा नई अधिसूचनाएं जारी होती हैं, फ़ीड अपडेट होती है। सक्रिय परीक्षा और छात्रवृत्ति चक्रों में अधिक प्रविष्टियां अपेक्षित हैं। सटीक तिथि की पुष्टि हमेशा आधिकारिक पोर्टल पर करें, क्योंकि अंतिम तिथियां बढ़ाई या बदली जा सकती हैं।" },
      { question: "क्या यहां दिखाई गई तिथियां और शुल्क आधिकारिक हैं?", answer: "यह एक स्वतंत्र मार्गदर्शिका है। हम आपकी सुविधा के लिए सूचनाओं का सारांश देते हैं, लेकिन आधिकारिक स्रोत हमेशा sso.rajasthan.gov.in और संबंधित विभाग की वेबसाइट है। आवेदन या भुगतान से पहले वहां हर तिथि, शुल्क और पात्रता जांच लें।" },
      { question: "'नया' बैज का क्या मतलब है?", answer: "यह हाल ही में पोस्ट की गई अपडेट को चिह्नित करता है, ताकि आप जल्दी पहचान सकें कि कौन-सी सूचनाएं ताज़ा हैं। पुरानी प्रविष्टियां संदर्भ के लिए नीचे, नई-से-पुरानी क्रम में बनी रहती हैं।" },
      { question: "यहां देखी गई कोई अंतिम तिथि मुझसे छूट गई, अब क्या करूं?", answer: "यदि किसी आवेदन या OTR की अंतिम तिथि निकल गई है, तो अगले चक्र या किसी विस्तार के लिए इस पेज और परीक्षा कैलेंडर पर नज़र रखें। कुछ विभाग छोटे विस्तार की घोषणा करते हैं, पर इन पर निर्भर न रहें — जब भी संभव हो, मूल अवधि में ही आवेदन करें।" },
      { question: "क्या RajSSO Guide किसी अपडेट के ज़रिए मेरी एसएसओ आईडी या ओटीपी मांगेगा?", answer: "नहीं। हम कभी भी, कहीं भी आपकी एसएसओ आईडी, पासवर्ड या ओटीपी नहीं मांगते। ये केवल आधिकारिक पोर्टल पर दर्ज किए जाते हैं। कोई भी अपडेट या संदेश जो इन्हें कहीं और मांगे, उसे अनदेखा करें और रिपोर्ट करें।" },
    ],
  },
  ctaTitle: {
    en: "Start with the right page",
    hi: "सही पेज से शुरुआत करें",
  },
  ctaBody: {
    en: "New to the SSO portal? Read the SSO Login and Registration guides first. Tracking deadlines? Open the Exam Calendar. Looking for a specific exam, scholarship, or service? Use the hubs below to jump straight to the detail page you need.",
    hi: "एसएसओ पोर्टल पर नए हैं? पहले एसएसओ लॉगिन और रजिस्ट्रेशन गाइड पढ़ें। अंतिम तिथियां ट्रैक कर रहे हैं? परीक्षा कैलेंडर खोलें। किसी खास परीक्षा, छात्रवृत्ति या सेवा की तलाश है? नीचे दिए हब से सीधे ज़रूरी विवरण पेज पर जाएं।",
  },
};
