// Bilingual content for the SEO-optimized home page.
import type { Locale } from "@/lib/i18n";
import type { FaqItem } from "@/lib/schema";

type L<T> = Record<Locale, T>;

export const homeContent: {
  metaTitle: L<string>;
  metaDescription: L<string>;
  h1: L<string>;
  heroLead: L<string>;
  stats: L<{ value: string; label: string }[]>;
  whatTitle: L<string>;
  whatBody: L<string[]>;
  whyImportantTitle: L<string>;
  whyImportantBody: L<string[]>;
  whyImportantPoints: L<string[]>;
  userCategoriesTitle: L<string>;
  userCategories: L<{ title: string; desc: string }[]>;
  majorServicesTitle: L<string>;
  majorServices: L<{ title: string; desc: string }[]>;
  benefitsTitle: L<string>;
  benefitsPoints: L<string[]>;
  loginTitle: L<string>;
  loginSteps: L<string[]>;
  registerTitle: L<string>;
  registerSteps: L<string[]>;
  servicesTitle: L<string>;
  services: L<string[]>;
  safetyTitle: L<string>;
  safetyTips: L<string[]>;
  faqs: L<FaqItem[]>;
} = {
  metaTitle: {
    en: "SSO ID Rajasthan — Login, Registration & Complete Guide 2026",
    hi: "SSO ID राजस्थान — लॉगिन, रजिस्ट्रेशन और पूरी जानकारी 2026",
  },
  metaDescription: {
    en: "Complete guide to SSO ID Rajasthan — how to log in at sso.rajasthan.gov.in, create a new account, recover a forgotten SSO ID, and access 100+ government services like scholarships, RPSC exams, and PayManager salary slips. An independent informational guide.",
    hi: "SSO ID राजस्थान की पूरी गाइड हिंदी में। SSO ID लॉगिन करें, नया SSO ID बनाएं, भूला हुआ ID वापस पाएं। स्कॉलरशिप, सरकारी नौकरी, सैलरी स्लिप — सब एक जगह। sso.rajasthan.gov.in की जानकारी।",
  },
  h1: {
    en: "SSO ID Rajasthan — Login & Registration Guide",
    hi: "एसएसओ आईडी राजस्थान — लॉगिन और रजिस्ट्रेशन गाइड",
  },
  heroLead: {
    en: "Whether you need a scholarship, a government job form, or a salary slip — one thing handles it all: your SSO ID. This guide covers how to do SSO login on sso.rajasthan.gov.in, create a new account, and recover a forgotten SSO ID or password. No jargon, no runaround.",
    hi: "स्कॉलरशिप चाहिए, सरकारी नौकरी के लिए फॉर्म भरना है, या PayManager से सैलरी स्लिप निकालनी है — सब काम एक ही चीज़ से होता है: आपकी SSO ID। यहाँ मिलेगा sso.rajasthan.gov.in पर लॉगिन करने का तरीका, नया रजिस्ट्रेशन, और भूले हुए SSO ID या पासवर्ड को वापस पाने की पूरी जानकारी — सीधी और आसान भाषा में।",
  },
  stats: {
    en: [
      { value: "100+", label: "Government services" },
      { value: "2013", label: "Launched by DoITC" },
      { value: "1", label: "Single sign-on ID" },
    ],
    hi: [
      { value: "100+", label: "सरकारी सेवाएं" },
      { value: "2013", label: "DoITC द्वारा शुरू" },
      { value: "1", label: "सिंगल साइन-ऑन आईडी" },
    ],
  },
  whatTitle: {
    en: "What is SSO ID Rajasthan?",
    hi: "एसएसओ आईडी राजस्थान क्या है?",
  },
  whatBody: {
    en: [
      "SSO stands for Single Sign-On. In Rajasthan's case, it means one account — one username and password — that opens the door to over 100 government services. Scholarship forms, exam registrations, salary slips, ration card updates: all of it runs through this one SSO portal at sso.rajasthan.gov.in.",
      "The Rajasthan government launched this Rajasthan Single Sign-On system in 2013 under the Department of Information Technology & Communication (DoITC). Before SSO existed, a citizen had to create separate logins for each department. Now, a student in Barmer and a government teacher in Jaipur both use the same SSO ID to access completely different services — that is the whole point of a single sign-on.",
      "If you live in Rajasthan and interact with the government online even once a year, you need an SSO ID. The three groups who use it most are everyday citizens (with Aadhaar or Jan Aadhaar), government employees (for PayManager, RajKaj, and SIPF), and business owners (for GST, BPAS approvals, and labour compliance).",
    ],
    hi: [
      "SSO का मतलब है Single Sign-On — यानी एक अकाउंट जो 100 से ज़्यादा सरकारी सेवाओं का दरवाज़ा खोलता है। स्कॉलरशिप फॉर्म, परीक्षा रजिस्ट्रेशन, सैलरी स्लिप, राशन कार्ड अपडेट — सब कुछ एक ही SSO पोर्टल से होता है: sso.rajasthan.gov.in।",
      "राजस्थान सरकार ने यह राजस्थान सिंगल साइन ऑन सिस्टम 2013 में सूचना प्रौद्योगिकी एवं संचार विभाग (DoITC) के तहत शुरू किया था। पहले हर विभाग का अलग लॉगिन था, अलग पासवर्ड था। अब बाड़मेर का एक स्टूडेंट और जयपुर की एक सरकारी टीचर — दोनों एक ही SSO ID से अपनी-अपनी ज़रूरत की सेवाएं ले सकते हैं। यही सिंगल साइन-ऑन का असली मतलब है।",
      "अगर आप राजस्थान में रहते हैं और साल में एक बार भी सरकार से ऑनलाइन काम पड़ता है — SSO ID होना ज़रूरी है। इसे सबसे ज़्यादा तीन तरह के लोग इस्तेमाल करते हैं: आम नागरिक (आधार या जन आधार से), सरकारी कर्मचारी (PayManager, RajKaj, SIPF के लिए), और व्यापारी (GST, BPAS अप्रूवल, लेबर कॉम्प्लायंस के लिए)।",
    ],
  },
  whyImportantTitle: {
    en: "Why Your SSO ID Is the Most Useful Thing the Rajasthan Government Ever Made",
    hi: "SSO ID — राजस्थान सरकार का सबसे काम का डिजिटल काम",
  },
  whyImportantBody: {
    en: [
      "Most government websites are painful. You already know this. Rajasthan's SSO portal is genuinely different — not perfect, but different.",
      "Before 2013, filling a scholarship form meant visiting the education department in person. Checking your SIPF balance meant calling someone. Every department had its own password, its own login page, and its own way of losing your data.",
      "Now one SSO ID handles all of it. A Class 12 student in Jhunjhunu can register on the SSO portal, apply for a post-matric scholarship, check the e-Mitra status of that application, and download an admit card — without leaving their chair. That is not nothing.",
      "Is the portal slow sometimes? Yes. Does the OTP occasionally take five minutes to arrive? Also yes. But the core idea — that a single verified identity connects you to every government service — is solid, and Rajasthan has executed it better than most Indian states. If you have not created your SSO ID yet, that is the first thing to fix.",
    ],
    hi: [
      "ज़्यादातर सरकारी वेबसाइटें थकाने वाली होती हैं। यह बात आप भी जानते हैं। SSO Rajasthan थोड़ा अलग है — परफेक्ट नहीं, लेकिन बाकियों से बेहतर ज़रूर है।",
      "2013 से पहले स्कॉलरशिप फॉर्म भरने के लिए शिक्षा विभाग के ऑफिस जाना पड़ता था। SIPF बैलेंस चेक करने के लिए किसी को फोन करना पड़ता था। हर विभाग का अपना पासवर्ड, अपना लॉगिन पेज, और अपना डेटा खोने का तरीका था।",
      "अब एक SSO ID से यह सब हो जाता है। झुंझुनू के किसी 12वीं के छात्र ने SSO पोर्टल पर रजिस्ट्रेशन किया, पोस्ट-मैट्रिक स्कॉलरशिप के लिए अप्लाई किया, e-Mitra से स्टेटस चेक किया, और एडमिट कार्ड डाउनलोड किया — बिना कुर्सी छोड़े। यह छोटी बात नहीं है।",
      "पोर्टल कभी-कभी स्लो होता है? हाँ। OTP आने में पाँच मिनट लग जाते हैं? वो भी होता है। लेकिन जो मूल विचार है — एक वेरिफाइड पहचान से सारी सरकारी सेवाएं — वो सही है, और राजस्थान ने इसे ज़्यादातर राज्यों से बेहतर किया है। अगर अभी तक SSO ID नहीं बनाई, तो यही पहला काम करना है।",
    ],
  },
  whyImportantPoints: {
    en: [
      "Access e-Mitra services online",
      "Apply for Rajasthan government jobs",
      "Register for RPSC and RSMSSB examinations",
      "Use Jan Aadhaar related services",
      "Access PayManager and RajKaj portals",
      "Apply for scholarships and welfare schemes",
      "Download admit cards and recruitment notifications",
      "Access various departmental services from one dashboard",
    ],
    hi: [
      "ई-मित्र सेवाओं तक ऑनलाइन पहुंच",
      "राजस्थान सरकारी नौकरियों के लिए आवेदन करें",
      "RPSC और RSMSSB परीक्षाओं के लिए पंजीकरण करें",
      "जन आधार संबंधित सेवाओं का उपयोग करें",
      "PayManager और RajKaj पोर्टल तक पहुंच",
      "छात्रवृत्ति और कल्याण योजनाओं के लिए आवेदन करें",
      "एडमिट कार्ड और भर्ती अधिसूचनाएं डाउनलोड करें",
      "एक डैशबोर्ड से विभिन्न विभागीय सेवाओं तक पहुंच",
    ],
  },
  userCategoriesTitle: {
    en: "Who Can Use SSO ID Rajasthan?",
    hi: "एसएसओ आईडी राजस्थान का उपयोग कौन कर सकता है?",
  },
  userCategories: {
    en: [
      {
        title: "Citizens",
        desc: "Residents of Rajasthan can create an account using Jan Aadhaar, Aadhaar, or other supported methods to access public services and welfare schemes.",
      },
      {
        title: "Government Employees",
        desc: "Government staff can use SSO credentials to access official portals such as PayManager, RajKaj, departmental systems, and employee-related services.",
      },
      {
        title: "Businesses and Industries",
        desc: "Business users can access services related to registrations, approvals, compliance requirements, and other government interactions.",
      },
    ],
    hi: [
      {
        title: "नागरिक",
        desc: "राजस्थान के निवासी सार्वजनिक सेवाओं और कल्याण योजनाओं तक पहुंचने के लिए जन आधार, आधार, या अन्य समर्थित तरीकों का उपयोग करके खाता बना सकते हैं।",
      },
      {
        title: "सरकारी कर्मचारी",
        desc: "सरकारी कर्मचारी PayManager, RajKaj, विभागीय प्रणाली, और कर्मचारी-संबंधित सेवाओं तक पहुंचने के लिए SSO क्रेडेंशियल्स का उपयोग कर सकते हैं।",
      },
      {
        title: "व्यवसाय और उद्योग",
        desc: "व्यावसायिक उपयोगकर्ता पंजीकरण, अनुमोदन, अनुपालन आवश्यकताओं, और अन्य सरकारी बातचीत से संबंधित सेवाओं तक पहुंच सकते हैं।",
      },
    ],
  },
  majorServicesTitle: {
    en: "Major Services Available Through SSO",
    hi: "एसएसओ के माध्यम से उपलब्ध प्रमुख सेवाएं",
  },
  majorServices: {
    en: [
      {
        title: "e-Mitra Services",
        desc: "e-Mitra is one of the most widely used digital service platforms in Rajasthan. Citizens can access various government and utility services through integrated online systems.",
      },
      {
        title: "Jan Aadhaar",
        desc: "Jan Aadhaar is a key identity and service delivery platform in Rajasthan. Many government schemes and benefits are connected with Jan Aadhaar information.",
      },
      {
        title: "PayManager",
        desc: "PayManager is used by government employees for salary slips, payroll management, and employee-related services.",
      },
      {
        title: "Recruitment and Examinations",
        desc: "Many recruitment processes and examination-related activities are connected with the Rajasthan SSO ecosystem. Candidates preparing for RPSC, RSMSSB, CET, Patwari, LDC examinations often use their SSO account.",
      },
    ],
    hi: [
      {
        title: "ई-मित्र सेवाएं",
        desc: "ई-मित्र राजस्थान में सबसे व्यापक रूप से उपयोग किए जाने वाले डिजिटल सेवा प्लेटफार्मों में से एक है। नागरिक एकीकृत ऑनलाइन सिस्टम के माध्यम से विभिन्न सरकारी और उपयोगिता सेवाओं तक पहुंच सकते हैं।",
      },
      {
        title: "जन आधार",
        desc: "जन आधार राजस्थान में एक प्रमुख पहचान और सेवा वितरण मंच है। कई सरकारी योजनाएं और लाभ जन आधार जानकारी से जुड़े हुए हैं।",
      },
      {
        title: "पे-मैनेजर",
        desc: "पे-मैनेजर का उपयोग सरकारी कर्मचारियों द्वारा वेतन पर्ची, पेरोल प्रबंधन, और कर्मचारी-संबंधित सेवाओं के लिए किया जाता है।",
      },
      {
        title: "भर्ती और परीक्षाएं",
        desc: "कई भर्ती प्रक्रियाएं और परीक्षा-संबंधित गतिविधियां राजस्थान SSO पारिस्थितिकी तंत्र से जुड़ी हुई हैं। RPSC, RSMSSB, CET, पटवारी, LDC परीक्षाओं की तैयारी करने वाले उम्मीदवार अक्सर अपने SSO खाते का उपयोग करते हैं।",
      },
    ],
  },
  benefitsTitle: {
    en: "Benefits of Using Rajasthan SSO Portal",
    hi: "राजस्थान एसएसओ पोर्टल के लाभ",
  },
  benefitsPoints: {
    en: [
      "One login for multiple government services",
      "Faster access to online applications",
      "Reduced paperwork and office visits",
      "Secure authentication and account management",
      "Integration with various state government departments",
      "Convenient access from desktop and mobile devices",
      "Streamlined examination and recruitment applications",
      "Easier management of personal records and services",
    ],
    hi: [
      "कई सरकारी सेवाओं के लिए एक लॉगिन",
      "ऑनलाइन आवेदनों तक तेज़ पहुंच",
      "कम कागजी कार्रवाई और कार्यालय की यात्राएं",
      "सुरक्षित प्रमाणीकरण और खाता प्रबंधन",
      "विभिन्न राज्य सरकार विभागों के साथ एकीकरण",
      "डेस्कटॉप और मोबाइल उपकरणों से सुविधाजनक पहुंच",
      "सुव्यवस्थित परीक्षा और भर्ती आवेदन",
      "व्यक्तिगत रिकॉर्ड और सेवाओं का आसान प्रबंधन",
    ],
  },
  safetyTitle: {
    en: "Safety Tips for SSO Users",
    hi: "एसएसओ उपयोगकर्ताओं के लिए सुरक्षा सुझाव",
  },
  safetyTips: {
    en: [
      "Always check the URL says sso.rajasthan.gov.in before entering credentials — then bookmark it.",
      "Never share your SSO password with anyone, including e-Mitra operators or 'helpline' numbers that call you.",
      "Use a strong password: at least eight characters with one number and one special character.",
      "Keep your registered mobile number active; if your SIM changes, update it at e-Mitra before you lose access.",
      "Log out after using SSO on shared or public computers.",
      "If someone calls asking for your OTP, hang up — no real SSO support team ever asks for an OTP.",
      "Be cautious of unofficial websites that claim to 'recover' or 'fix' your SSO ID for a fee; official recovery is always free.",
      "Update your Jan Aadhaar and contact details promptly when they change, rather than waiting until you urgently need them.",
    ],
    hi: [
      "Login से पहले हमेशा URL चेक करें — sso.rajasthan.gov.in होना चाहिए। इसे bookmark कर लें।",
      "SSO पासवर्ड किसी को मत बताएं — e-Mitra operator को भी नहीं, और फोन करने वाले 'helpline' वाले को भी नहीं।",
      "मज़बूत पासवर्ड रखें — कम से कम 8 अक्षर, एक नंबर और एक special character।",
      "जो मोबाइल नंबर दर्ज किया है उसे active रखें; SIM बदले तो access खोने से पहले e-Mitra से update करवाएं।",
      "Public या shared कंप्यूटर पर SSO इस्तेमाल करने के बाद logout करें।",
      "OTP माँगने वाली किसी भी कॉल पर फोन काट दें — कोई भी असली SSO सपोर्ट टीम कभी OTP नहीं माँगती।",
      "जो वेबसाइट या व्यक्ति शुल्क लेकर आपकी SSO ID 'recover' या 'ठीक' करने का दावा करे उससे सावधान रहें; आधिकारिक रिकवरी हमेशा मुफ्त है।",
      "जन आधार और संपर्क विवरण बदलते ही तुरंत update करें, ज़रूरत पड़ने तक इंतज़ार न करें।",
    ],
  },
  loginTitle: {
    en: "How to do SSO ID Login",
    hi: "एसएसओ आईडी लॉगिन कैसे करें",
  },
  loginSteps: {
    en: [
      "Open sso.rajasthan.gov.in in Chrome or Firefox — older browsers sometimes break the CAPTCHA.",
      "Enter your SSO ID in the username field — this is the username you chose at registration, not your Aadhaar or phone number.",
      "Enter your password, then type the CAPTCHA exactly as shown (click refresh if it is hard to read).",
      "Click Login to open your RajSSO dashboard. Three failed password attempts lock the account for 30 minutes, so use Forgot Password instead of guessing.",
    ],
    hi: [
      "Chrome या Firefox में sso.rajasthan.gov.in खोलें — पुराने ब्राउज़र में CAPTCHA टूट सकता है।",
      "Username वाले बॉक्स में अपनी SSO ID डालें — यह वही username है जो रजिस्ट्रेशन के समय बनाया था, आधार या फोन नंबर नहीं।",
      "अपना पासवर्ड डालें और स्क्रीन पर दिख रहा CAPTCHA सही-सही टाइप करें (पढ़ने में दिक्कत हो तो refresh दबाएं)।",
      "Login पर क्लिक करें। तीन बार गलत पासवर्ड पर अकाउंट 30 मिनट के लिए लॉक हो जाता है, इसलिए अंदाज़ा लगाने की जगह Forgot Password इस्तेमाल करें।",
    ],
  },
  registerTitle: {
    en: "How to do SSO ID Registration",
    hi: "एसएसओ आईडी रजिस्ट्रेशन कैसे करें",
  },
  registerSteps: {
    en: [
      "Go to sso.rajasthan.gov.in and click Registration.",
      "Choose your type: Jan Aadhaar (best for families), Aadhaar (best for individual students), or Google/Facebook (quick but limited).",
      "Verify with the OTP sent to the mobile number linked to your Aadhaar.",
      "Pick a username you will remember and set a strong password — your username becomes your permanent SSO ID and cannot be changed later.",
    ],
    hi: [
      "sso.rajasthan.gov.in पर जाकर Registration पर क्लिक करें।",
      "अपना तरीका चुनें: जन आधार (परिवारों के लिए सबसे अच्छा), Aadhaar (अकेले स्टूडेंट्स के लिए), या Google/Facebook (तेज़ पर सीमित)।",
      "अपने आधार से लिंक मोबाइल नंबर पर आई OTP से वेरिफाई करें।",
      "एक याद रहने वाला username चुनें और मज़बूत पासवर्ड सेट करें — यही username आपकी permanent SSO ID बनेगी और बाद में बदली नहीं जा सकती।",
    ],
  },
  servicesTitle: {
    en: "Popular services on the SSO Portal",
    hi: "एसएसओ पोर्टल पर लोकप्रिय सेवाएं",
  },
  services: {
    en: [
      "e-Mitra",
      "Government Jobs (OTR)",
      "Scholarship Forms",
      "Jan Aadhaar",
      "Chiranjeevi Yojana",
      "PayManager",
      "RajKaj",
      "Bijli Bill Payment",
    ],
    hi: [
      "ई-मित्र",
      "सरकारी नौकरी (OTR)",
      "छात्रवृत्ति फॉर्म",
      "जन आधार",
      "चिरंजीवी योजना",
      "पे-मैनेजर",
      "राजकाज",
      "बिजली बिल भुगतान",
    ],
  },
  faqs: {
    en: [
      {
        question: "What is SSO ID Rajasthan?",
        answer:
          "SSO ID Rajasthan is a Single Sign-On account issued by the Rajasthan government through sso.rajasthan.gov.in. It gives you access to 100+ government services — scholarships, exams, salary slips, health insurance, and more — using one username and password.",
      },
      {
        question: "What is SSO ID used for?",
        answer:
          "Your SSO ID is used to log in to the Rajasthan SSO portal and access services like RPSC exam applications, post-matric scholarships (SJE), PayManager salary slips, e-Mitra, Jan Aadhaar, Chiranjeevi health insurance, and dozens of other government portals.",
      },
      {
        question: "How do I do SSO ID login?",
        answer:
          "Go to sso.rajasthan.gov.in, enter your SSO ID (username) and password, type the CAPTCHA, and click Login. If you have forgotten your password, use the 'Forgot Password' link on the same page.",
      },
      {
        question: "How do I register for SSO ID?",
        answer:
          "Click 'Registration' on the SSO portal. Choose your type: Jan Aadhaar (for families), Aadhaar (for individuals), or Google/Facebook (limited access). Enter the required details, verify with OTP, and set a username and password. Your username becomes your permanent SSO ID.",
      },
      {
        question: "How do I recover a forgotten SSO ID?",
        answer:
          "The fastest way is to send the SMS 'RJ SSO' to 9223166166 from your registered mobile number — your SSO ID is returned by SMS within seconds. Online, click 'Forgot Username' on the SSO login page, enter the mobile number or email registered on your account, verify with OTP, and your SSO ID will appear on screen and be sent to your registered contact.",
      },
      {
        question: "Is SSO ID registration free?",
        answer:
          "Yes. Creating an SSO ID on sso.rajasthan.gov.in is completely free. Some services accessed through SSO (like OTR exam registration) have their own fees set by the respective departments.",
      },
      {
        question: "Can I have two SSO IDs?",
        answer:
          "Technically you can create two accounts, but you shouldn't. One Aadhaar number and one phone number can link to only one SSO ID. If you have two accounts, use the merge option in your profile to combine them into one.",
      },
      {
        question: "What documents are needed for SSO ID registration?",
        answer:
          "You need either an Aadhaar card or a Jan Aadhaar card, a mobile number linked to that document (for OTP), and an email address. A recent photograph is not required for registration itself.",
      },
      {
        question: "Who runs the SSO Rajasthan portal?",
        answer:
          "The SSO portal is maintained by the Department of Information Technology & Communication (DoITC), Government of Rajasthan. It has been operational since 2013.",
      },
      {
        question: "What is the Rajasthan Single Sign-On portal address?",
        answer:
          "The official Rajasthan Single Sign-On portal address is sso.rajasthan.gov.in. This is the only legitimate login URL — avoid any third-party sites that ask for your SSO credentials.",
      },
      {
        question: "Can someone living outside Rajasthan create an SSO ID?",
        answer:
          "Yes, mainly for exam purposes. Out-of-state candidates can register and complete OTR for RPSC or RSSB exams open to all-India applicants, but they are generally treated as the General fee category regardless of their home state's reservation category.",
      },
      {
        question: "Is my old Bhamashah-based SSO ID still valid in 2026?",
        answer:
          "Bhamashah has been folded into Jan Aadhaar, but SSO accounts originally created through Bhamashah generally continue to work. If login fails on an old account, first confirm the linked mobile number is still active rather than assuming the account expired.",
      },
      {
        question: "What happens if the name on my SSO ID does not match my Aadhaar?",
        answer:
          "Most day-to-day use is unaffected, but it becomes a problem during OTR for recruitment exams, where auto-filled details are checked against your Class 10 marksheet. Correcting a mismatch after submission usually carries a separate fee, so fix it in your profile before you apply.",
      },
      {
        question: "Do I need a computer, or can I register entirely on a phone?",
        answer:
          "Registration works fine on mobile. Document uploads for scholarship forms or exam applications are the part that struggles on mobile browsers, particularly on slower connections, so those steps are better done on a desktop or laptop where possible.",
      },
      {
        question: "Is my SSO ID the same thing as my Jan Aadhaar number?",
        answer:
          "No. Jan Aadhaar is a 10-digit family identity number used as one method to register. Your SSO ID is the separate username you choose during that registration, and it is this username — not your Jan Aadhaar number — that you use to log in afterward.",
      },
      {
        question: "If I move to a different city within Rajasthan, does my SSO ID change?",
        answer:
          "No. The SSO ID is tied to your identity, not your address. Moving cities does not require a new account, though updating your address under Jan Aadhaar may still be worth doing if a welfare scheme you use checks residence details.",
      },
    ],
    hi: [
      {
        question: "SSO ID राजस्थान क्या है?",
        answer:
          "SSO ID राजस्थान एक Single Sign-On अकाउंट है जो sso.rajasthan.gov.in पर 100+ सरकारी सेवाएं एक login से देता है। यह राजस्थान सरकार के सूचना प्रौद्योगिकी एवं संचार विभाग (DoITC) द्वारा 2013 से चलाया जा रहा है।",
      },
      {
        question: "SSO ID से क्या-क्या होता है?",
        answer:
          "SSO ID से RPSC परीक्षा आवेदन, SJE स्कॉलरशिप, PayManager सैलरी स्लिप, e-Mitra, Jan Aadhaar, चिरंजीवी हेल्थ इंश्योरेंस, और दर्जनों दूसरे सरकारी पोर्टल access होते हैं।",
      },
      {
        question: "SSO ID लॉगिन कैसे करें?",
        answer:
          "sso.rajasthan.gov.in खोलें, अपनी SSO ID (username) और पासवर्ड डालें, CAPTCHA type करें, और Login पर क्लिक करें। पासवर्ड भूल गए हों तो उसी पेज पर 'Forgot Password' का लिंक है।",
      },
      {
        question: "SSO ID कैसे बनाएं?",
        answer:
          "SSO पोर्टल पर 'Registration' पर क्लिक करें। रजिस्ट्रेशन का तरीका चुनें: जन आधार (परिवारों के लिए), Aadhaar (अकेले के लिए), या Google/Facebook (सीमित सेवाएं)। जानकारी भरें, OTP से verify करें, username और पासवर्ड सेट करें। आपका username ही आपकी permanent SSO ID होगी।",
      },
      {
        question: "SSO ID भूल गए तो क्या करें?",
        answer:
          "सबसे तेज़ तरीका: अपने रजिस्टर्ड मोबाइल नंबर से 9223166166 पर 'RJ SSO' SMS भेजें — कुछ ही सेकंड में SSO ID return SMS से आ जाएगी। ऑनलाइन तरीके के लिए SSO लॉगिन पेज पर 'Forgot Username' पर क्लिक करें, रजिस्टर्ड मोबाइल नंबर या ईमेल डालें, OTP से verify करें। SSO ID स्क्रीन पर आ जाएगी और रजिस्टर्ड contact पर भी।",
      },
      {
        question: "SSO ID बनाना फ्री है?",
        answer:
          "हाँ। sso.rajasthan.gov.in पर SSO ID बनाना और इस्तेमाल करना पूरी तरह मुफ्त है। कुछ सेवाओं की अपनी fee होती है — जैसे OTR exam registration — जो संबंधित विभाग तय करता है।",
      },
      {
        question: "क्या दो SSO ID रख सकते हैं?",
        answer:
          "नहीं रखनी चाहिए। एक Aadhaar नंबर और एक मोबाइल नंबर सिर्फ एक SSO ID से link हो सकते हैं। अगर गलती से दो बन गई हैं तो profile में Merge option से एक में मिला लें।",
      },
      {
        question: "SSO ID रजिस्ट्रेशन के लिए कौन से दस्तावेज़ चाहिए?",
        answer:
          "आधार कार्ड या जन आधार कार्ड, उस दस्तावेज़ से linked मोबाइल नंबर (OTP के लिए), और एक ईमेल एड्रेस। रजिस्ट्रेशन के लिए फोटो की ज़रूरत नहीं होती।",
      },
      {
        question: "SSO राजस्थान पोर्टल कौन चलाता है?",
        answer:
          "यह पोर्टल राजस्थान सरकार का सूचना प्रौद्योगिकी एवं संचार विभाग (DoITC) चलाता है। यह 2013 से active है।",
      },
      {
        question: "SSO राजस्थान पोर्टल का address क्या है?",
        answer:
          "आधिकारिक पोर्टल का address है sso.rajasthan.gov.in। यही एकमात्र valid URL है। किसी भी third-party साइट पर SSO credentials मत डालें।",
      },
      {
        question: "पासवर्ड रीसेट करने के बाद भी लॉगिन नहीं हो रहा?",
        answer:
          "नया पासवर्ड सेट करते ही login करें — OTP session जल्दी expire होता है। Browser cache clear करें और incognito mode में try करें। अगर फिर भी नहीं हो रहा तो e-Mitra जाएं।",
      },
      {
        question: "क्या राजस्थान के बाहर रहने वाला व्यक्ति SSO ID बना सकता है?",
        answer:
          "हाँ, मुख्य रूप से परीक्षा के लिए। दूसरे राज्य के उम्मीदवार RPSC या RSSB की अखिल भारतीय परीक्षाओं के लिए रजिस्टर करके OTR पूरा कर सकते हैं, लेकिन उन्हें आमतौर पर 'सामान्य' शुल्क श्रेणी में गिना जाता है — भले ही उनके गृह राज्य में आरक्षण श्रेणी कुछ भी हो।",
      },
      {
        question: "क्या पुरानी भामाशाह-आधारित SSO ID 2026 में अभी भी चलती है?",
        answer:
          "भामाशाह को अब जन आधार में मिला दिया गया है, लेकिन भामाशाह से बनी पुरानी SSO ID आम तौर पर चलती रहती हैं। अगर पुरानी ID से login नहीं हो रहा तो यह मान लेने की बजाय कि अकाउंट खत्म हो गया, पहले जाँचें कि उससे जुड़ा मोबाइल नंबर अभी active है या नहीं।",
      },
      {
        question: "अगर SSO ID पर नाम आधार से मेल नहीं खाता तो क्या होगा?",
        answer:
          "रोज़मर्रा के काम में इससे फ़र्क नहीं पड़ता, पर भर्ती परीक्षाओं के OTR के समय यह समस्या बनती है, जहाँ auto-fill हुए विवरण आपकी 10वीं की अंकतालिका से मिलाए जाते हैं। submit करने के बाद मेल न खाने को ठीक करने में अलग शुल्क लगता है, इसलिए आवेदन से पहले profile में इसे ठीक कर लें।",
      },
      {
        question: "रजिस्ट्रेशन के लिए कंप्यूटर चाहिए या फोन से भी हो जाएगा?",
        answer:
          "रजिस्ट्रेशन मोबाइल पर आराम से हो जाता है। दिक्कत स्कॉलरशिप फॉर्म या परीक्षा आवेदन में document upload के समय आती है, खासकर धीमे कनेक्शन पर, इसलिए वे step हो सके तो desktop या laptop पर करना बेहतर है।",
      },
      {
        question: "क्या SSO ID और जन आधार नंबर एक ही चीज़ हैं?",
        answer:
          "नहीं। जन आधार एक 10-अंकों का परिवार पहचान नंबर है जिसे रजिस्ट्रेशन के एक तरीके के रूप में इस्तेमाल किया जाता है। SSO ID वह अलग username है जो आप उसी रजिस्ट्रेशन के दौरान चुनते हैं — और login इसी username से होता है, जन आधार नंबर से नहीं।",
      },
      {
        question: "अगर मैं राजस्थान में दूसरे शहर चला जाऊं तो क्या SSO ID बदलेगी?",
        answer:
          "नहीं। SSO ID आपकी पहचान से जुड़ी है, पते से नहीं। शहर बदलने पर नया अकाउंट नहीं चाहिए, हालाँकि अगर कोई योजना निवास विवरण जाँचती है तो जन आधार में अपना पता अपडेट कर लेना उपयोगी रहता है।",
      },
    ],
  },
};
