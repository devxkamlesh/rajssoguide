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
  loginTitle: L<string>;
  loginSteps: L<string[]>;
  registerTitle: L<string>;
  registerSteps: L<string[]>;
  servicesTitle: L<string>;
  services: L<string[]>;
  faqs: L<FaqItem[]>;
} = {
  metaTitle: {
    en: "SSO ID Rajasthan – SSO Login, Registration & RajSSO Portal 2026",
    hi: "एसएसओ आईडी राजस्थान – एसएसओ लॉगिन, रजिस्ट्रेशन और RajSSO पोर्टल 2026",
  },
  metaDescription: {
    en: "SSO ID Rajasthan guide: how to do SSO login, SSO ID registration and recover your RajSSO ID at sso.rajasthan.gov.in. Step-by-step help in English and Hindi.",
    hi: "एसएसओ आईडी राजस्थान गाइड: sso.rajasthan.gov.in पर एसएसओ लॉगिन, एसएसओ आईडी रजिस्ट्रेशन और RajSSO आईडी रिकवर करना सीखें। हिंदी और अंग्रेज़ी में स्टेप-बाय-स्टेप मदद।",
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
      "SSO ID (Single Sign-On ID) is a single digital identity created by the Government of Rajasthan in 2013 and managed by the Department of Information Technology & Communication (DoITC). With one SSO login you can access more than 100 services on the RajSSO portal at sso.rajasthan.gov.in.",
      "Using your SSO ID Rajasthan account you can apply for government jobs, fill scholarship forms, use e-Mitra, pay your bijli bill, download admit cards, and access schemes like Jan Aadhaar and Chiranjeevi — all without a separate login for each service.",
    ],
    hi: [
      "एसएसओ आईडी (सिंगल साइन-ऑन आईडी) राजस्थान सरकार द्वारा 2013 में बनाई गई एक डिजिटल पहचान है, जिसे सूचना प्रौद्योगिकी और संचार विभाग (DoITC) संचालित करता है। एक एसएसओ लॉगिन से आप sso.rajasthan.gov.in पर 100 से अधिक सेवाओं का उपयोग कर सकते हैं।",
      "अपने एसएसओ आईडी राजस्थान अकाउंट से आप सरकारी नौकरी के लिए आवेदन, छात्रवृत्ति फॉर्म, ई-मित्र, बिजली बिल भुगतान, एडमिट कार्ड डाउनलोड और जन आधार व चिरंजीवी जैसी योजनाओं का लाभ ले सकते हैं — हर सेवा के लिए अलग लॉगिन की ज़रूरत नहीं।",
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
