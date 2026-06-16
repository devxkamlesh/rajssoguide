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
    en: "SSO ID Rajasthan 2026 — Register, Login & Recover Your Account",
    hi: "एसएसओ आईडी राजस्थान 2026 — रजिस्टर, लॉगिन और अकाउंट रिकवरी",
  },
  metaDescription: {
    en: "Complete guide to SSO ID Rajasthan — how to register, login to sso.rajasthan.gov.in, recover a forgotten SSO ID or password, and access scholarship and exam services. Updated for 2026.",
    hi: "एसएसओ आईडी राजस्थान की पूरी गाइड — sso.rajasthan.gov.in पर रजिस्टर और लॉगिन कैसे करें, भूली हुई एसएसओ आईडी या पासवर्ड कैसे रिकवर करें, और छात्रवृत्ति व परीक्षा सेवाओं तक पहुंच। 2026 के लिए अपडेटेड।",
  },
  h1: {
    en: "SSO ID Rajasthan — Login & Registration Guide",
    hi: "एसएसओ आईडी राजस्थान — लॉगिन और रजिस्ट्रेशन गाइड",
  },
  heroLead: {
    en: "One RajSSO login for 100+ Rajasthan government services. Learn how to do SSO login, create a new SSO ID, and recover a forgotten ID — step by step.",
    hi: "100+ राजस्थान सरकारी सेवाओं के लिए एक RajSSO लॉगिन। एसएसओ लॉगिन करना, नई एसएसओ आईडी बनाना और भूली हुई आईडी रिकवर करना सीखें — स्टेप बाय स्टेप।",
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
      "SSO ID Rajasthan (Single Sign-On ID) is the unified digital identity system developed by the Government of Rajasthan to provide citizens, government employees, and businesses with secure access to online government services through a single account. Instead of creating separate usernames and passwords for different departments, users can access multiple services using one SSO login at the official Rajasthan SSO portal.",
      "The Rajasthan Single Sign-On platform was launched in 2013 and is maintained by the Department of Information Technology & Communication (DoITC). Over the years, it has become the primary gateway for accessing hundreds of government services, examinations, welfare schemes, recruitment applications, and citizen-focused digital initiatives across Rajasthan.",
      "Today, residents from Jaipur, Jodhpur, Kota, Udaipur, Ajmer, Bikaner, Bharatpur, Alwar, Sikar, Bhilwara, Pali, Sri Ganganagar, and every other district of Rajasthan use SSO ID to interact with government services online without visiting offices repeatedly.",
    ],
    hi: [
      "एसएसओ आईडी राजस्थान (सिंगल साइन-ऑन आईडी) राजस्थान सरकार द्वारा विकसित एकीकृत डिजिटल पहचान प्रणाली है जो नागरिकों, सरकारी कर्मचारियों और व्यवसायों को एक खाते के माध्यम से ऑनलाइन सरकारी सेवाओं तक सुरक्षित पहुंच प्रदान करती है। विभिन्न विभागों के लिए अलग-अलग यूजरनेम और पासवर्ड बनाने के बजाय, उपयोगकर्ता आधिकारिक राजस्थान SSO पोर्टल पर एक SSO लॉगिन का उपयोग करके कई सेवाओं तक पहुंच सकते हैं।",
      "राजस्थान सिंगल साइन-ऑन प्लेटफ़ॉर्म 2013 में लॉन्च किया गया था और इसे सूचना प्रौद्योगिकी और संचार विभाग (DoITC) द्वारा बनाए रखा जाता है। पिछले कुछ वर्षों में, यह सैकड़ों सरकारी सेवाओं, परीक्षाओं, कल्याण योजनाओं, भर्ती आवेदनों और राजस्थान भर में नागरिक-केंद्रित डिजिटल पहलों तक पहुंचने का प्राथमिक गेटवे बन गया है।",
      "आज, जयपुर, जोधपुर, कोटा, उदयपुर, अजमेर, बीकानेर, भरतपुर, अलवर, सीकर, भीलवाड़ा, पाली, श्री गंगानगर और राजस्थान के हर अन्य जिले के निवासी बार-बार कार्यालयों में जाए बिना ऑनलाइन सरकारी सेवाओं के साथ बातचीत करने के लिए SSO ID का उपयोग करते हैं।",
    ],
  },
  whyImportantTitle: {
    en: "Why is SSO ID Important?",
    hi: "एसएसओ आईडी क्यों महत्वपूर्ण है?",
  },
  whyImportantBody: {
    en: [
      "The Rajasthan government created the SSO platform to simplify access to digital services. A single account reduces paperwork, improves security, and provides a consistent user experience across multiple departments.",
    ],
    hi: [
      "राजस्थान सरकार ने डिजिटल सेवाओं तक पहुंच को सरल बनाने के लिए SSO प्लेटफ़ॉर्म बनाया। एक खाता कागजी कार्रवाई को कम करता है, सुरक्षा में सुधार करता है, और कई विभागों में एक सुसंगत उपयोगकर्ता अनुभव प्रदान करता है।",
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
      "Never share your password with anyone",
      "Use a strong and unique password",
      "Keep your registered mobile number active",
      "Update recovery information when required",
      "Avoid logging in from public computers",
      "Always verify the official website address before entering credentials",
      "Log out after completing sensitive activities",
      "Be cautious of unofficial websites claiming to provide account recovery",
    ],
    hi: [
      "अपना पासवर्ड कभी किसी के साथ साझा न करें",
      "एक मजबूत और अद्वितीय पासवर्ड का उपयोग करें",
      "अपना पंजीकृत मोबाइल नंबर सक्रिय रखें",
      "आवश्यक होने पर रिकवरी जानकारी अपडेट करें",
      "सार्वजनिक कंप्यूटरों से लॉगिन करने से बचें",
      "क्रेडेंशियल्स दर्ज करने से पहले हमेशा आधिकारिक वेबसाइट पते को सत्यापित करें",
      "संवेदनशील गतिविधियों को पूरा करने के बाद लॉग आउट करें",
      "खाता रिकवरी प्रदान करने का दावा करने वाली अनौपचारिक वेबसाइटों से सावधान रहें",
    ],
  },
  loginTitle: {
    en: "How to do SSO ID Login",
    hi: "एसएसओ आईडी लॉगिन कैसे करें",
  },
  loginSteps: {
    en: [
      "Open sso.rajasthan.gov.in.",
      "Enter your SSO ID and password.",
      "Type the captcha shown on screen.",
      "Click Login to open your RajSSO dashboard.",
    ],
    hi: [
      "sso.rajasthan.gov.in खोलें।",
      "अपनी एसएसओ आईडी और पासवर्ड दर्ज करें।",
      "स्क्रीन पर दिख रहा कैप्चा टाइप करें।",
      "RajSSO डैशबोर्ड खोलने के लिए लॉगिन पर क्लिक करें।",
    ],
  },
  registerTitle: {
    en: "How to do SSO ID Registration",
    hi: "एसएसओ आईडी रजिस्ट्रेशन कैसे करें",
  },
  registerSteps: {
    en: [
      "Go to sso.rajasthan.gov.in and click Registration.",
      "Choose Citizen, Udyog, or Government Employee.",
      "Register using Jan Aadhaar, Aadhaar, or Google.",
      "Create your SSO ID username and password.",
    ],
    hi: [
      "sso.rajasthan.gov.in पर जाकर रजिस्ट्रेशन पर क्लिक करें।",
      "नागरिक, उद्योग या सरकारी कर्मचारी चुनें।",
      "जन आधार, आधार या Google से रजिस्टर करें।",
      "अपनी एसएसओ आईडी यूज़रनेम और पासवर्ड बनाएं।",
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
          "SSO ID Rajasthan is a single sign-on digital identity that lets you access 100+ Rajasthan government services with one login at sso.rajasthan.gov.in.",
      },
      {
        question: "How do I do SSO login?",
        answer:
          "Open sso.rajasthan.gov.in, enter your SSO ID and password, type the captcha, and click Login.",
      },
      {
        question: "How can I create a new SSO ID?",
        answer:
          "Click Registration on the RajSSO portal, choose your category, and register using Jan Aadhaar, Aadhaar, or a Google account.",
      },
      {
        question: "I forgot my SSO ID. How do I recover it?",
        answer:
          "Use the 'I Forgot my SSOID' link on the login page and verify your registered mobile number or Jan Aadhaar to recover it.",
      },
      {
        question: "Is RajSSO login free?",
        answer:
          "Yes. Creating and using an SSO ID on the official Rajasthan portal is completely free.",
      },
    ],
    hi: [
      {
        question: "एसएसओ आईडी राजस्थान क्या है?",
        answer:
          "एसएसओ आईडी राजस्थान एक सिंगल साइन-ऑन डिजिटल पहचान है जिससे आप sso.rajasthan.gov.in पर एक लॉगिन से 100+ सरकारी सेवाओं का उपयोग कर सकते हैं।",
      },
      {
        question: "एसएसओ लॉगिन कैसे करें?",
        answer:
          "sso.rajasthan.gov.in खोलें, अपनी एसएसओ आईडी और पासवर्ड डालें, कैप्चा टाइप करें और लॉगिन पर क्लिक करें।",
      },
      {
        question: "नई एसएसओ आईडी कैसे बनाएं?",
        answer:
          "RajSSO पोर्टल पर रजिस्ट्रेशन पर क्लिक करें, अपनी श्रेणी चुनें और जन आधार, आधार या Google अकाउंट से रजिस्टर करें।",
      },
      {
        question: "एसएसओ आईडी भूल गए, कैसे रिकवर करें?",
        answer:
          "लॉगिन पेज पर 'I Forgot my SSOID' लिंक चुनें और अपना रजिस्टर्ड मोबाइल नंबर या जन आधार सत्यापित कर आईडी रिकवर करें।",
      },
      {
        question: "क्या RajSSO लॉगिन मुफ़्त है?",
        answer:
          "हां। आधिकारिक राजस्थान पोर्टल पर एसएसओ आईडी बनाना और उपयोग करना पूरी तरह मुफ़्त है।",
      },
    ],
  },
};
