// Editorial content for the core SSO guide pages, bilingual.
// Each guide drives an HowTo + FAQ page with schema.
import type { Locale } from "@/lib/i18n";
import type { FaqItem, HowToStep } from "@/lib/schema";

export interface Guide {
  slug: string;
  title: Record<Locale, string>;
  intro: Record<Locale, string>;
  body: Record<Locale, string[]>;
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
    body: {
      en: [
        "SSO ID login is the single sign-on gateway to more than 100 Rajasthan government services. Once you log in at sso.rajasthan.gov.in, you can use e-Mitra, apply for government jobs through the Recruitment Portal, file scholarship forms, pay your electricity and water bills, update Jan Aadhaar, and access health schemes like Chiranjeevi — all from one secure dashboard, without a separate username for each department.",
        "You can sign in with your SSO ID and password, or with your Jan Aadhaar, Google, or Facebook account if you linked them during registration. On the login screen, type your SSO ID and password, enter the six-digit captcha shown in the security image, and click Login. If the captcha is hard to read, click the refresh icon to load a new one.",
        "A few common login problems have quick fixes. If you see 'Invalid Username or Password', use the 'I Forgot my SSOID' or 'I Forgot my Password' links instead of guessing repeatedly. Too many failed attempts can lock your account for about 30 minutes. A 'Connection not private' warning usually means your device date and time are wrong — correct them and reload. If the captcha will not load, clear your browser cache or open the portal in a private window.",
        "Security reminder: only ever enter your SSO login details on the official portal, and never on a public or shared computer. RajSSO Guide is an independent resource and never asks for your password, OTP, or SSO ID. For official help you can call the SSO helpdesk on 0141-5153222 or email helpdesk.sso@rajasthan.gov.in.",
      ],
      hi: [
        "एसएसओ आईडी लॉगिन 100 से अधिक राजस्थान सरकारी सेवाओं का सिंगल साइन-ऑन गेटवे है। sso.rajasthan.gov.in पर लॉगिन करने के बाद आप ई-मित्र, भर्ती पोर्टल से सरकारी नौकरी आवेदन, छात्रवृत्ति फॉर्म, बिजली व पानी बिल भुगतान, जन आधार अपडेट और चिरंजीवी जैसी स्वास्थ्य योजनाओं का उपयोग एक ही सुरक्षित डैशबोर्ड से कर सकते हैं — हर विभाग के लिए अलग यूज़रनेम की ज़रूरत नहीं।",
        "आप अपनी एसएसओ आईडी और पासवर्ड से, या रजिस्ट्रेशन के समय लिंक किए गए जन आधार, Google या Facebook अकाउंट से लॉगिन कर सकते हैं। लॉगिन स्क्रीन पर अपनी एसएसओ आईडी और पासवर्ड डालें, सुरक्षा इमेज में दिख रहा छह अंकों का कैप्चा भरें और लॉगिन पर क्लिक करें। कैप्चा पढ़ने में कठिन हो तो रिफ्रेश आइकन पर क्लिक करें।",
        "कुछ सामान्य लॉगिन समस्याओं के आसान समाधान हैं। 'Invalid Username or Password' दिखे तो बार-बार अनुमान लगाने के बजाय 'I Forgot my SSOID' या 'I Forgot my Password' लिंक का उपयोग करें। बहुत बार गलत प्रयास करने पर अकाउंट लगभग 30 मिनट के लिए लॉक हो सकता है। 'Connection not private' चेतावनी अक्सर डिवाइस की गलत तारीख-समय के कारण आती है — उसे ठीक करें। कैप्चा लोड न हो तो ब्राउज़र कैश साफ करें या प्राइवेट विंडो में खोलें।",
        "सुरक्षा सलाह: अपनी एसएसओ लॉगिन जानकारी केवल आधिकारिक पोर्टल पर ही दर्ज करें, सार्वजनिक या साझा कंप्यूटर पर कभी नहीं। RajSSO Guide एक स्वतंत्र संसाधन है और कभी भी आपका पासवर्ड, ओटीपी या एसएसओ आईडी नहीं मांगता। आधिकारिक मदद के लिए 0141-5153222 पर कॉल करें या helpdesk.sso@rajasthan.gov.in पर ईमेल करें।",
      ],
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
    body: {
      en: [
        "SSO ID registration on the RajSSO portal is completely free and usually takes under five minutes. There are three account types: Citizen (for residents, students, and farmers), Udyog (for business owners), and Government Employee (for state staff). Choosing the correct category at the start ensures you see the right services on your dashboard afterwards.",
        "Citizens can register using a Jan Aadhaar number, Aadhaar, Google, or Facebook account. Jan Aadhaar is recommended for Rajasthan residents because it gives immediate access to scholarship and recruitment portals. Government employees register with their SIPF number, where the default password is often the date of birth in DDMMYYYY format. Business owners register with a BRN or Udyog Aadhaar number.",
        "During registration you verify a one-time password (OTP) sent to your mobile, then choose a username and a strong password. Pick the username carefully — it becomes your permanent SSO ID and cannot be changed later, so using your real name (for example, ramesh.sharma2026) makes it easier to remember. After you click Register, your SSO ID is confirmed by SMS and email; save it somewhere safe right away.",
        "If the OTP does not arrive, make sure your mobile number is linked to Aadhaar or Jan Aadhaar and try Resend after a couple of minutes. If you see 'Mobile Number Already Exists' or 'ID Already Exists', you probably registered before — use the Forgot SSOID recovery tool instead of creating a duplicate account. Keep your registered mobile number active, as it is needed for future OTP verification and account recovery.",
      ],
      hi: [
        "RajSSO पोर्टल पर एसएसओ आईडी रजिस्ट्रेशन पूरी तरह मुफ़्त है और आमतौर पर पाँच मिनट से कम समय लेता है। तीन प्रकार के अकाउंट हैं: नागरिक (निवासी, छात्र और किसान), उद्योग (व्यवसाय मालिक) और सरकारी कर्मचारी (राज्य कर्मचारी)। शुरुआत में सही श्रेणी चुनने से बाद में डैशबोर्ड पर सही सेवाएं दिखती हैं।",
        "नागरिक जन आधार नंबर, आधार, Google या Facebook अकाउंट से रजिस्टर कर सकते हैं। राजस्थान निवासियों के लिए जन आधार अनुशंसित है क्योंकि इससे छात्रवृत्ति और भर्ती पोर्टल तक तुरंत पहुँच मिलती है। सरकारी कर्मचारी अपने SIPF नंबर से रजिस्टर करते हैं, जहाँ डिफ़ॉल्ट पासवर्ड अक्सर DDMMYYYY प्रारूप में जन्मतिथि होता है। व्यवसाय मालिक BRN या उद्योग आधार से रजिस्टर करते हैं।",
        "रजिस्ट्रेशन के दौरान आप मोबाइल पर भेजे गए ओटीपी को सत्यापित करते हैं, फिर यूज़रनेम और मज़बूत पासवर्ड चुनते हैं। यूज़रनेम सावधानी से चुनें — यही आपकी स्थायी एसएसओ आईडी बनती है और बाद में बदली नहीं जा सकती, इसलिए अपना असली नाम (जैसे ramesh.sharma2026) उपयोग करना याद रखने में आसान रहता है। रजिस्टर पर क्लिक करने के बाद आपकी एसएसओ आईडी एसएमएस और ईमेल से पुष्टि होती है; इसे तुरंत सुरक्षित जगह सहेजें।",
        "यदि ओटीपी न आए, तो सुनिश्चित करें कि आपका मोबाइल नंबर आधार या जन आधार से लिंक है और कुछ मिनट बाद Resend आज़माएं। 'Mobile Number Already Exists' या 'ID Already Exists' दिखे तो संभवतः आपने पहले रजिस्टर किया है — डुप्लिकेट अकाउंट बनाने के बजाय Forgot SSOID रिकवरी टूल का उपयोग करें। अपना रजिस्टर्ड मोबाइल नंबर सक्रिय रखें, क्योंकि यह भविष्य में ओटीपी सत्यापन और अकाउंट रिकवरी के लिए ज़रूरी है।",
      ],
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
    body: {
      en: [
        "If you forgot your SSO ID, you can recover it in minutes without creating a new account. The quickest method needs no internet at all: from your registered mobile number, send an SMS with the text 'RJ SSO' to 9223166166, and the portal replies instantly with your SSO ID. This is handy when the website is busy near exam deadlines.",
        "You can also recover online. Open sso.rajasthan.gov.in, click 'I Forgot my Digital Identity (SSOID)', choose how you want to find your ID — registered mobile number, Jan Aadhaar, or Bhamashah — verify the OTP, and your SSO ID is shown on screen.",
        "To reset a forgotten password, send 'RJ SSO PASSWORD' to 9223166166 from your registered number, or use the 'I Forgot my Password' link on the login page. Enter your SSO ID and registered email, choose how to receive the OTP, open the reset link, and set a strong new password that you have not used before.",
        "If your registered mobile number is lost or deactivated and you cannot receive the OTP, visit your nearest e-Mitra centre with your Aadhaar or Jan Aadhaar to update your contact details in person. Avoid registering a second SSO ID, because your Aadhaar can only be linked to one account and duplicates can block scholarship and job applications. For help, the SSO helpdesk is reachable on 0141-5153222.",
      ],
      hi: [
        "यदि आप अपनी एसएसओ आईडी भूल गए हैं, तो नई आईडी बनाए बिना कुछ ही मिनटों में इसे रिकवर कर सकते हैं। सबसे तेज़ तरीका बिना इंटरनेट के है: अपने रजिस्टर्ड मोबाइल नंबर से 'RJ SSO' टेक्स्ट के साथ 9223166166 पर एसएमएस भेजें, और पोर्टल तुरंत आपकी एसएसओ आईडी भेज देता है। परीक्षा की अंतिम तिथियों के पास वेबसाइट व्यस्त होने पर यह उपयोगी है।",
        "आप ऑनलाइन भी रिकवर कर सकते हैं। sso.rajasthan.gov.in खोलें, 'I Forgot my Digital Identity (SSOID)' पर क्लिक करें, आईडी खोजने का तरीका चुनें — रजिस्टर्ड मोबाइल नंबर, जन आधार या भामाशाह — ओटीपी सत्यापित करें, और आपकी एसएसओ आईडी स्क्रीन पर दिख जाती है।",
        "भूला हुआ पासवर्ड रीसेट करने के लिए अपने रजिस्टर्ड नंबर से 'RJ SSO PASSWORD' को 9223166166 पर भेजें, या लॉगिन पेज पर 'I Forgot my Password' लिंक का उपयोग करें। अपनी एसएसओ आईडी और रजिस्टर्ड ईमेल डालें, ओटीपी प्राप्त करने का तरीका चुनें, रीसेट लिंक खोलें और ऐसा मज़बूत नया पासवर्ड बनाएं जो पहले उपयोग न किया हो।",
        "यदि आपका रजिस्टर्ड मोबाइल नंबर खो गया या बंद हो गया है और ओटीपी नहीं मिल रहा, तो अपने आधार या जन आधार के साथ नज़दीकी ई-मित्र केंद्र पर जाकर संपर्क विवरण अपडेट कराएं। दूसरी एसएसओ आईडी न बनाएं, क्योंकि आपका आधार केवल एक अकाउंट से लिंक हो सकता है और डुप्लिकेट छात्रवृत्ति व नौकरी आवेदन रोक सकते हैं। मदद के लिए एसएसओ हेल्पडेस्क 0141-5153222 पर उपलब्ध है।",
      ],
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
    body: {
      en: [
        "Many users accidentally create more than one SSO ID — for example, one with a Google account and another with Jan Aadhaar. This causes a real problem because your Aadhaar can be linked to only one SSO ID, and having duplicates can block scholarship and recruitment applications. The merge feature solves this by safely transferring all your data into a single account that you keep.",
        "To merge, log in to the SSO ID you want to close (not the one you want to keep). Click the Edit Profile (pencil) icon at the top right of your dashboard. Then choose the Deactivate Account option — despite the name, this does not delete your data; it opens a merge dialogue that combines your accounts.",
        "Verify the OTP sent to your mobile, then enter the SSO ID you want to keep as your primary account. After you confirm, all linked services and history from the secondary account move to your primary SSO ID, and the duplicate is permanently closed. Government employees should always keep their employee (SIPF) SSO ID as the primary one.",
        "Keeping only one active SSO ID prevents confusion with OTP verification and future service applications. If you are unsure which account to keep, check which one already has your important services — such as recruitment OTR or scholarship records — linked to it before you merge. For assistance, contact the SSO helpdesk on 0141-5153222 or email helpdesk.sso@rajasthan.gov.in.",
      ],
      hi: [
        "कई उपयोगकर्ता गलती से एक से अधिक एसएसओ आईडी बना लेते हैं — जैसे एक Google अकाउंट से और दूसरी जन आधार से। यह वास्तविक समस्या बनती है क्योंकि आपका आधार केवल एक एसएसओ आईडी से लिंक हो सकता है, और डुप्लिकेट होने से छात्रवृत्ति व भर्ती आवेदन रुक सकते हैं। मर्ज सुविधा आपके सारे डेटा को सुरक्षित रूप से एक अकाउंट में स्थानांतरित कर इसे हल करती है।",
        "मर्ज करने के लिए, जिस एसएसओ आईडी को बंद करना है उससे लॉगिन करें (जिसे रखना है उससे नहीं)। डैशबोर्ड के ऊपर दाईं ओर Edit Profile (पेंसिल) आइकन पर क्लिक करें। फिर Deactivate Account विकल्प चुनें — नाम के बावजूद यह आपका डेटा नहीं हटाता; यह मर्ज डायलॉग खोलता है जो आपके अकाउंट मिलाता है।",
        "मोबाइल पर भेजे ओटीपी को सत्यापित करें, फिर जिस एसएसओ आईडी को प्राथमिक अकाउंट के रूप में रखना है उसे दर्ज करें। पुष्टि के बाद सेकेंडरी अकाउंट की सभी लिंक सेवाएं और हिस्ट्री आपकी प्राथमिक एसएसओ आईडी में आ जाती हैं और डुप्लिकेट स्थायी रूप से बंद हो जाती है। सरकारी कर्मचारियों को हमेशा अपनी कर्मचारी (SIPF) एसएसओ आईडी प्राथमिक रखनी चाहिए।",
        "केवल एक सक्रिय एसएसओ आईडी रखने से ओटीपी सत्यापन और भविष्य के सेवा आवेदन में भ्रम नहीं होता। यदि निश्चित न हों कि कौन-सी आईडी रखें, तो मर्ज से पहले जांचें कि किसमें आपकी महत्वपूर्ण सेवाएं — जैसे भर्ती OTR या छात्रवृत्ति रिकॉर्ड — पहले से लिंक हैं। सहायता के लिए एसएसओ हेल्पडेस्क 0141-5153222 पर कॉल करें या helpdesk.sso@rajasthan.gov.in पर ईमेल करें।",
      ],
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
