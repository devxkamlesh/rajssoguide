// Editorial content for the core SSO guide pages, bilingual.
// Each guide drives an HowTo + FAQ page with schema.
import type { Locale } from "@/lib/i18n";
import type { FaqItem, HowToStep } from "@/lib/schema";

export interface Guide {
  slug: string;
  title: Record<Locale, string>;
  intro: Record<Locale, string>;
  steps: Record<Locale, HowToStep[]>;
  faqs: Record<Locale, FaqItem[]>;
  lastVerified: string;
}

export const guides: Guide[] = [
  {
    slug: "sso-id-login",
    title: {
      en: "Rajasthan SSO ID Login 2026",
      hi: "राजस्थान एसएसओ आईडी लॉगिन 2026",
    },
    intro: {
      en: "Follow these steps to log in to the Rajasthan SSO portal safely.",
      hi: "राजस्थान एसएसओ पोर्टल में सुरक्षित रूप से लॉगिन करने के लिए ये चरण अपनाएं।",
    },
    steps: {
      en: [
        { name: "Open the portal", text: "Visit sso.rajasthan.gov.in." },
        { name: "Enter SSO ID", text: "Type your SSO ID and password." },
        { name: "Solve captcha", text: "Enter the captcha shown on screen." },
        { name: "Login", text: "Click Login to open your dashboard." },
      ],
      hi: [
        { name: "पोर्टल खोलें", text: "sso.rajasthan.gov.in पर जाएं।" },
        { name: "एसएसओ आईडी डालें", text: "अपनी एसएसओ आईडी और पासवर्ड टाइप करें।" },
        { name: "कैप्चा भरें", text: "स्क्रीन पर दिख रहा कैप्चा दर्ज करें।" },
        { name: "लॉगिन करें", text: "डैशबोर्ड खोलने के लिए लॉगिन पर क्लिक करें।" },
      ],
    },
    faqs: {
      en: [
        {
          question: "What do I do if the captcha is not loading?",
          answer:
            "Refresh the page, clear your browser cache, or try a different browser.",
        },
      ],
      hi: [
        {
          question: "कैप्चा लोड नहीं हो रहा तो क्या करें?",
          answer:
            "पेज रिफ्रेश करें, ब्राउज़र कैश साफ करें, या दूसरा ब्राउज़र आज़माएं।",
        },
      ],
    },
    lastVerified: "2026-06-08",
  },
  {
    slug: "sso-id-registration",
    title: {
      en: "Rajasthan SSO ID Registration 2026",
      hi: "राजस्थान एसएसओ आईडी रजिस्ट्रेशन 2026",
    },
    intro: {
      en: "Create a new Rajasthan SSO ID as a citizen in a few minutes.",
      hi: "कुछ ही मिनटों में नागरिक के रूप में नई राजस्थान एसएसओ आईडी बनाएं।",
    },
    steps: {
      en: [
        { name: "Open registration", text: "Go to sso.rajasthan.gov.in and click Registration." },
        { name: "Choose Citizen", text: "Select the Citizen option." },
        { name: "Verify identity", text: "Use Jan Aadhaar or Google to register." },
        { name: "Set credentials", text: "Create your username and password." },
      ],
      hi: [
        { name: "रजिस्ट्रेशन खोलें", text: "sso.rajasthan.gov.in पर जाकर रजिस्ट्रेशन पर क्लिक करें।" },
        { name: "नागरिक चुनें", text: "Citizen विकल्प चुनें।" },
        { name: "पहचान सत्यापित करें", text: "जन आधार या Google से रजिस्टर करें।" },
        { name: "क्रेडेंशियल बनाएं", text: "अपना यूज़रनेम और पासवर्ड बनाएं।" },
      ],
    },
    faqs: {
      en: [
        {
          question: "Which documents do I need to register?",
          answer:
            "Citizens can register using a Jan Aadhaar number or a Google account.",
        },
      ],
      hi: [
        {
          question: "रजिस्ट्रेशन के लिए कौन से दस्तावेज़ चाहिए?",
          answer:
            "नागरिक जन आधार नंबर या Google अकाउंट से रजिस्टर कर सकते हैं।",
        },
      ],
    },
    lastVerified: "2026-06-08",
  },
  {
    slug: "forgot-sso-id",
    title: {
      en: "Forgot SSO ID — Recover Your Account",
      hi: "एसएसओ आईडी भूल गए — अपना अकाउंट रिकवर करें",
    },
    intro: {
      en: "Recover a forgotten SSO ID or reset your password securely.",
      hi: "भूली हुई एसएसओ आईडी रिकवर करें या पासवर्ड सुरक्षित रूप से रीसेट करें।",
    },
    steps: {
      en: [
        { name: "Open login page", text: "Go to sso.rajasthan.gov.in." },
        { name: "Click 'I Forgot my SSOID'", text: "Select the recovery link." },
        { name: "Enter details", text: "Provide your registered mobile or Jan Aadhaar." },
        { name: "Verify OTP", text: "Enter the OTP to recover your ID." },
      ],
      hi: [
        { name: "लॉगिन पेज खोलें", text: "sso.rajasthan.gov.in पर जाएं।" },
        { name: "'I Forgot my SSOID' पर क्लिक करें", text: "रिकवरी लिंक चुनें।" },
        { name: "विवरण दर्ज करें", text: "रजिस्टर्ड मोबाइल या जन आधार दें।" },
        { name: "ओटीपी सत्यापित करें", text: "आईडी रिकवर करने के लिए ओटीपी डालें।" },
      ],
    },
    faqs: {
      en: [
        {
          question: "I no longer have my registered mobile number. What now?",
          answer:
            "Visit your nearest e-Mitra centre with your ID proof to update your details.",
        },
      ],
      hi: [
        {
          question: "मेरा रजिस्टर्ड मोबाइल नंबर अब नहीं है, अब क्या करें?",
          answer:
            "अपने पहचान प्रमाण के साथ नज़दीकी ई-मित्र केंद्र पर जाकर विवरण अपडेट कराएं।",
        },
      ],
    },
    lastVerified: "2026-06-08",
  },
  {
    slug: "merge-sso-id",
    title: {
      en: "Merge Multiple SSO IDs",
      hi: "एक से अधिक एसएसओ आईडी मर्ज करें",
    },
    intro: {
      en: "Combine duplicate SSO IDs into a single account.",
      hi: "डुप्लिकेट एसएसओ आईडी को एक अकाउंट में मिलाएं।",
    },
    steps: {
      en: [
        { name: "Login", text: "Log in with the SSO ID you want to keep." },
        { name: "Open profile", text: "Go to your profile settings." },
        { name: "Select merge", text: "Choose the merge accounts option." },
        { name: "Confirm", text: "Verify and confirm the merge." },
      ],
      hi: [
        { name: "लॉगिन करें", text: "जिस एसएसओ आईडी को रखना है उससे लॉगिन करें।" },
        { name: "प्रोफ़ाइल खोलें", text: "अपनी प्रोफ़ाइल सेटिंग्स में जाएं।" },
        { name: "मर्ज चुनें", text: "अकाउंट मर्ज विकल्प चुनें।" },
        { name: "पुष्टि करें", text: "सत्यापित कर मर्ज की पुष्टि करें।" },
      ],
    },
    faqs: {
      en: [
        {
          question: "Will I lose data when merging SSO IDs?",
          answer:
            "Linked services move to the retained account; verify each service after merging.",
        },
      ],
      hi: [
        {
          question: "मर्ज करने पर क्या मेरा डेटा खो जाएगा?",
          answer:
            "लिंक की गई सेवाएं रखी गई आईडी में आ जाती हैं; मर्ज के बाद हर सेवा जांच लें।",
        },
      ],
    },
    lastVerified: "2026-06-08",
  },
];

export const getGuide = (slug: string) => guides.find((g) => g.slug === slug);
