// Extended bilingual guide content for the home page (pillar content).
import type { Locale } from "@/lib/i18n";

type L<T> = Record<Locale, T>;

interface Row2 {
  a: string;
  b: string;
}
interface Block {
  title: string;
  steps: string[];
  note?: string;
}
interface ErrorRow {
  message: string;
  meaning: string;
  fix: string;
}

export const homeGuide: {
  whoNeedsTitle: L<string>;
  whoNeedsCols: L<[string, string]>;
  whoNeeds: L<Row2[]>;
  documentsTitle: L<string>;
  documents: L<string[]>;
  registrationTitle: L<string>;
  registrationOptions: L<Block[]>;
  recoveryTitle: L<string>;
  recoveryScenarios: L<Block[]>;
  errorsTitle: L<string>;
  errorsCols: L<[string, string, string]>;
  errors: L<ErrorRow[]>;
  appTitle: L<string>;
  appBody: L<string>;
  checklistTitle: L<string>;
  checklist: L<string[]>;
  quickRefTitle: L<string>;
  quickRef: L<Row2[]>;
} = {
  whoNeedsTitle: {
    en: "Who Actually Needs an SSO ID in Rajasthan?",
    hi: "राजस्थान में एसएसओ आईडी की जरूरत किसे है?",
  },
  whoNeedsCols: {
    en: ["User type", "Why they need SSO ID"],
    hi: ["उपयोगकर्ता", "एसएसओ आईडी क्यों जरूरी है"],
  },
  whoNeeds: {
    en: [
      { a: "School / College Students", b: "Mukhyamantri Scholarship, Palanhar Yojana, SJE scholarships" },
      { a: "Job Seekers", b: "RSMSSB exam forms, RPSC applications, Rozgar Mela registrations" },
      { a: "Farmers", b: "PM Kisan status checks, e-Mitra services" },
      { a: "General Citizens", b: "Bhamashah card, ration card updates, birth/death certificates" },
      { a: "Teachers & Government Staff", b: "SIPF pension portal, salary slip access" },
    ],
    hi: [
      { a: "स्कूल / कॉलेज छात्र", b: "मुख्यमंत्री छात्रवृत्ति, पालनहार योजना, SJE छात्रवृत्ति" },
      { a: "नौकरी चाहने वाले", b: "RSMSSB परीक्षा फॉर्म, RPSC आवेदन, रोजगार मेला पंजीकरण" },
      { a: "किसान", b: "पीएम किसान स्थिति जांच, ई-मित्र सेवाएं" },
      { a: "सामान्य नागरिक", b: "भामाशाह कार्ड, राशन कार्ड अपडेट, जन्म/मृत्यु प्रमाण पत्र" },
      { a: "शिक्षक और सरकारी कर्मचारी", b: "SIPF पेंशन पोर्टल, सैलरी स्लिप एक्सेस" },
    ],
  },
  documentsTitle: {
    en: "Documents You Need Before You Start Registration",
    hi: "रजिस्ट्रेशन शुरू करने से पहले जरूरी दस्तावेज",
  },
  documents: {
    en: [
      "Aadhaar Card — the most reliable option for students.",
      "Jan Aadhaar Card (formerly Bhamashah) — preferred for family-linked schemes.",
      "Mobile number linked to Aadhaar — required for OTP verification.",
      "Active email address — needed to set your password and for future recovery.",
      "A recent photograph (JPEG, under 100KB) — only for some service applications, not for SSO registration itself.",
    ],
    hi: [
      "आधार कार्ड — छात्रों के लिए सबसे भरोसेमंद विकल्प।",
      "जन आधार कार्ड (पहले भामाशाह) — परिवार से जुड़ी योजनाओं के लिए बेहतर।",
      "आधार से जुड़ा मोबाइल नंबर — ओटीपी सत्यापन के लिए आवश्यक।",
      "सक्रिय ईमेल पता — पासवर्ड सेट करने और भविष्य की रिकवरी के लिए जरूरी।",
      "हाल की फ़ोटो (JPEG, 100KB से कम) — केवल कुछ सेवा आवेदनों के लिए, एसएसओ रजिस्ट्रेशन के लिए नहीं।",
    ],
  },
  registrationTitle: {
    en: "How to Create Your SSO ID — Registration Options",
    hi: "एसएसओ आईडी कैसे बनाएं — रजिस्ट्रेशन विकल्प",
  },
  registrationOptions: {
    en: [
      {
        title: "Option 1: Register via Jan Aadhaar (recommended for families)",
        steps: [
          "Click Jan Aadhaar on the registration screen.",
          "Enter your 10-digit Jan Aadhaar ID (the main number on the card, not a sub-member number).",
          "An OTP is sent to the family head's registered mobile number.",
          "Enter the OTP and select your name from the family list.",
          "Set a username and password — your username becomes your SSO ID, so note it down.",
        ],
        note: "Common mistake: people enter the individual member ID instead of the family's 10-digit Jan Aadhaar ID.",
      },
      {
        title: "Option 2: Register via Aadhaar (recommended for individual students)",
        steps: [
          "Click Aadhaar Card on the registration page.",
          "Enter your 12-digit Aadhaar number.",
          "Choose OTP delivery by mobile or email (use mobile if your number is seeded).",
          "Enter the OTP within 10 minutes.",
          "Choose a unique username — this becomes your permanent SSO ID.",
          "Set a strong password (at least 8 characters with a number and a special character), then click Register.",
        ],
      },
      {
        title: "Option 3: Register via Google or Facebook (quickest, but limited)",
        steps: [
          "Link your Google or Facebook account to create an SSO ID in under two minutes.",
          "This creates a basic account only.",
        ],
        note: "Several services, including the SJE Scholarship, require an Aadhaar-verified SSO ID. Students should avoid this option.",
      },
    ],
    hi: [
      {
        title: "विकल्प 1: जन आधार से रजिस्टर करें (परिवारों के लिए अनुशंसित)",
        steps: [
          "रजिस्ट्रेशन स्क्रीन पर जन आधार पर क्लिक करें।",
          "अपनी 10-अंकीय जन आधार आईडी दर्ज करें (कार्ड पर मुख्य नंबर, सदस्य का उप-नंबर नहीं)।",
          "परिवार मुखिया के रजिस्टर्ड मोबाइल नंबर पर ओटीपी भेजा जाता है।",
          "ओटीपी दर्ज करें और परिवार सूची से अपना नाम चुनें।",
          "यूज़रनेम और पासवर्ड सेट करें — आपका यूज़रनेम ही एसएसओ आईडी बनता है, इसे नोट कर लें।",
        ],
        note: "आम गलती: लोग परिवार की 10-अंकीय जन आधार आईडी के बजाय सदस्य की व्यक्तिगत आईडी डाल देते हैं।",
      },
      {
        title: "विकल्प 2: आधार से रजिस्टर करें (व्यक्तिगत छात्रों के लिए अनुशंसित)",
        steps: [
          "रजिस्ट्रेशन पेज पर आधार कार्ड पर क्लिक करें।",
          "अपना 12-अंकीय आधार नंबर दर्ज करें।",
          "ओटीपी मोबाइल या ईमेल पर चुनें (नंबर सीडेड हो तो मोबाइल चुनें)।",
          "10 मिनट के भीतर ओटीपी दर्ज करें।",
          "एक अद्वितीय यूज़रनेम चुनें — यही आपकी स्थायी एसएसओ आईडी बनेगी।",
          "मज़बूत पासवर्ड सेट करें (कम से कम 8 अक्षर, एक नंबर और एक विशेष चिन्ह सहित), फिर रजिस्टर पर क्लिक करें।",
        ],
      },
      {
        title: "विकल्प 3: Google या Facebook से रजिस्टर करें (सबसे तेज़, पर सीमित)",
        steps: [
          "Google या Facebook खाता जोड़कर दो मिनट से कम में एसएसओ आईडी बनाएं।",
          "इससे केवल एक बेसिक खाता बनता है।",
        ],
        note: "SJE छात्रवृत्ति सहित कई सेवाओं के लिए आधार-सत्यापित एसएसओ आईडी जरूरी है। छात्र इस विकल्प से बचें।",
      },
    ],
  },
  recoveryTitle: {
    en: "Forgot Your SSO ID or Password? Recovery Scenarios",
    hi: "एसएसओ आईडी या पासवर्ड भूल गए? रिकवरी के तरीके",
  },
  recoveryScenarios: {
    en: [
      {
        title: "You remember your SSO ID but forgot your password",
        steps: [
          "Click Forgot Password below the login box.",
          "Enter your SSO ID (username).",
          "Choose a recovery method: mobile OTP, email OTP, or security question.",
          "Enter the OTP or answer and set a new password, then log in immediately.",
        ],
      },
      {
        title: "You forgot your SSO ID entirely",
        steps: [
          "Click Forgot Username on the login page.",
          "Enter the mobile number or email used during registration.",
          "Enter the OTP sent to verify ownership.",
          "Your SSO ID is shown on screen and sent to your registered mobile/email.",
        ],
      },
      {
        title: "Your account is locked",
        steps: [
          "After three failed login attempts the account locks for 30 minutes.",
          "Wait out the timer, then use Forgot Password to reset instead of guessing again.",
        ],
      },
      {
        title: "Your OTP is not arriving",
        steps: [
          "Confirm the mobile number is the one registered with Aadhaar/Jan Aadhaar.",
          "Wait 5 minutes for network congestion to clear, then retry.",
          "Try the email OTP option instead of SMS.",
          "Clear the browser cache and retry on a fresh tab; if it still fails, visit a nearby e-Mitra kiosk with your Aadhaar.",
        ],
      },
    ],
    hi: [
      {
        title: "एसएसओ आईडी याद है पर पासवर्ड भूल गए",
        steps: [
          "लॉगिन बॉक्स के नीचे Forgot Password पर क्लिक करें।",
          "अपनी एसएसओ आईडी (यूज़रनेम) दर्ज करें।",
          "रिकवरी तरीका चुनें: मोबाइल ओटीपी, ईमेल ओटीपी या सुरक्षा प्रश्न।",
          "ओटीपी या उत्तर दर्ज कर नया पासवर्ड सेट करें, फिर तुरंत लॉगिन करें।",
        ],
      },
      {
        title: "एसएसओ आईडी पूरी तरह भूल गए",
        steps: [
          "लॉगिन पेज पर Forgot Username पर क्लिक करें।",
          "रजिस्ट्रेशन के समय इस्तेमाल किया मोबाइल नंबर या ईमेल दर्ज करें।",
          "स्वामित्व सत्यापित करने के लिए भेजा गया ओटीपी दर्ज करें।",
          "आपकी एसएसओ आईडी स्क्रीन पर दिखती है और रजिस्टर्ड मोबाइल/ईमेल पर भेजी जाती है।",
        ],
      },
      {
        title: "आपका खाता लॉक हो गया है",
        steps: [
          "तीन बार गलत लॉगिन प्रयास के बाद खाता 30 मिनट के लिए लॉक हो जाता है।",
          "टाइमर पूरा होने तक रुकें, फिर बार-बार अनुमान लगाने के बजाय Forgot Password से रीसेट करें।",
        ],
      },
      {
        title: "ओटीपी नहीं आ रहा",
        steps: [
          "जांचें कि मोबाइल नंबर वही है जो आधार/जन आधार से रजिस्टर्ड है।",
          "नेटवर्क भीड़ के लिए 5 मिनट रुकें, फिर पुनः प्रयास करें।",
          "एसएमएस के बजाय ईमेल ओटीपी विकल्प आज़माएं।",
          "ब्राउज़र कैश साफ़ कर नए टैब में पुनः प्रयास करें; फिर भी न हो तो आधार के साथ नज़दीकी ई-मित्र कियोस्क जाएं।",
        ],
      },
    ],
  },
  errorsTitle: {
    en: "Common SSO Login Errors and Their Fixes",
    hi: "सामान्य एसएसओ लॉगिन त्रुटियां और समाधान",
  },
  errorsCols: {
    en: ["Error message", "What it means", "Fix"],
    hi: ["त्रुटि संदेश", "इसका अर्थ", "समाधान"],
  },
  errors: {
    en: [
      { message: "Invalid Username or Password", meaning: "Credentials mismatch", fix: "Use Forgot Password to reset" },
      { message: "Account Locked", meaning: "3+ failed attempts", fix: "Wait 30 minutes, then reset password" },
      { message: "OTP Not Received", meaning: "Wrong mobile number or network issue", fix: "Try email OTP or retry after 5 minutes" },
      { message: "Name Mismatch", meaning: "Name in SSO does not match Aadhaar", fix: "Update profile or use the Aadhaar-matching name" },
      { message: "Session Timeout", meaning: "Inactivity on the portal", fix: "Log in again; save your work frequently" },
      { message: "CAPTCHA Error", meaning: "Misread characters", fix: "Click the refresh icon to get a new CAPTCHA" },
    ],
    hi: [
      { message: "Invalid Username or Password", meaning: "क्रेडेंशियल मेल नहीं खाते", fix: "Forgot Password से रीसेट करें" },
      { message: "Account Locked", meaning: "3+ बार गलत प्रयास", fix: "30 मिनट रुकें, फिर पासवर्ड रीसेट करें" },
      { message: "OTP Not Received", meaning: "गलत मोबाइल नंबर या नेटवर्क समस्या", fix: "ईमेल ओटीपी आज़माएं या 5 मिनट बाद पुनः प्रयास करें" },
      { message: "Name Mismatch", meaning: "एसएसओ का नाम आधार से मेल नहीं खाता", fix: "प्रोफ़ाइल अपडेट करें या आधार वाला नाम उपयोग करें" },
      { message: "Session Timeout", meaning: "पोर्टल पर निष्क्रियता", fix: "दोबारा लॉगिन करें; काम बार-बार सेव करें" },
      { message: "CAPTCHA Error", meaning: "अक्षर गलत पढ़े गए", fix: "नया कैप्चा लाने के लिए रिफ्रेश आइकन पर क्लिक करें" },
    ],
  },
  appTitle: {
    en: "Should You Use the SSO Mobile App?",
    hi: "क्या एसएसओ मोबाइल ऐप का उपयोग करें?",
  },
  appBody: {
    en: "The \"SSO Rajasthan\" app is available on Android and iOS and covers most desktop services, handy for quick OTP access and dashboard browsing. However, for filling scholarship forms, exam applications, or uploading documents, use the desktop browser — the mobile upload interface is known to time out on slow connections.",
    hi: "\"SSO Rajasthan\" ऐप Android और iOS पर उपलब्ध है और अधिकांश डेस्कटॉप सेवाओं को कवर करता है, जो त्वरित ओटीपी और डैशबोर्ड देखने के लिए उपयोगी है। लेकिन छात्रवृत्ति फॉर्म, परीक्षा आवेदन या दस्तावेज़ अपलोड के लिए डेस्कटॉप ब्राउज़र का उपयोग करें — मोबाइल अपलोड इंटरफ़ेस धीमे कनेक्शन पर टाइम आउट हो सकता है।",
  },
  checklistTitle: {
    en: "Before You Register: Quick Checklist",
    hi: "रजिस्टर करने से पहले: त्वरित चेकलिस्ट",
  },
  checklist: {
    en: [
      "Have your Aadhaar or Jan Aadhaar card with you.",
      "Your Aadhaar-linked mobile has signal and can receive SMS.",
      "You are on a stable internet connection.",
      "You have chosen a unique, memorable username (example: rahul.sharma.2006).",
      "Your password has at least one letter, one number, and one special character.",
      "You have written down your SSO ID and password somewhere safe.",
      "You are using Chrome or Firefox (older browsers have compatibility issues).",
    ],
    hi: [
      "अपना आधार या जन आधार कार्ड साथ रखें।",
      "आधार से जुड़े मोबाइल में सिग्नल हो और एसएमएस आ सके।",
      "आप स्थिर इंटरनेट कनेक्शन पर हैं।",
      "आपने एक अद्वितीय, याद रहने वाला यूज़रनेम चुना है (उदाहरण: rahul.sharma.2006)।",
      "आपके पासवर्ड में कम से कम एक अक्षर, एक नंबर और एक विशेष चिन्ह है।",
      "आपने अपनी एसएसओ आईडी और पासवर्ड सुरक्षित जगह लिख लिया है।",
      "आप Chrome या Firefox का उपयोग कर रहे हैं (पुराने ब्राउज़र में समस्या आती है)।",
    ],
  },
  quickRefTitle: {
    en: "SSO Rajasthan at a Glance",
    hi: "एसएसओ राजस्थान एक नज़र में",
  },
  quickRef: {
    en: [
      { a: "Official Portal", b: "sso.rajasthan.gov.in" },
      { a: "Services Available", b: "100+ government services" },
      { a: "Registration Methods", b: "Jan Aadhaar, Aadhaar, Google, Facebook" },
      { a: "Helpline Number", b: "0141-5153222" },
      { a: "e-Mitra Helpdesk", b: "181 (toll-free)" },
      { a: "Mobile App", b: "\"SSO Rajasthan\" on Android & iOS" },
      { a: "Account Lock Duration", b: "30 minutes after 3 failed attempts" },
    ],
    hi: [
      { a: "आधिकारिक पोर्टल", b: "sso.rajasthan.gov.in" },
      { a: "उपलब्ध सेवाएं", b: "100+ सरकारी सेवाएं" },
      { a: "रजिस्ट्रेशन तरीके", b: "जन आधार, आधार, Google, Facebook" },
      { a: "हेल्पलाइन नंबर", b: "0141-5153222" },
      { a: "ई-मित्र हेल्पडेस्क", b: "181 (टोल-फ्री)" },
      { a: "मोबाइल ऐप", b: "\"SSO Rajasthan\" — Android और iOS" },
      { a: "खाता लॉक अवधि", b: "3 बार गलत प्रयास के बाद 30 मिनट" },
    ],
  },
};
