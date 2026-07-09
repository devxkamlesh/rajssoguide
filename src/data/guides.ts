// Editorial content for the core SSO guide pages, bilingual.
// Each guide drives an HowTo + FAQ page with schema.
import type { Locale } from "@/lib/i18n";
import type { FaqItem, HowToStep } from "@/lib/schema";

// Optional prose subsection (heading + paragraphs) for richer guides.
export interface GuideSection {
  title: Record<Locale, string>;
  body: Record<Locale, string[]>;
}

// Optional data table for richer guides (e.g. login methods, error fixes).
export interface GuideTable {
  title: Record<Locale, string>;
  cols: Record<Locale, string[]>;
  rows: Record<Locale, string[][]>;
}

export interface Guide {
  slug: string;
  title: Record<Locale, string>;
  intro: Record<Locale, string>;
  body: Record<Locale, string[]>;
  steps: Record<Locale, HowToStep[]>;
  faqs: Record<Locale, FaqItem[]>;
  lastVerified: string;
  /** Optional SEO meta title (falls back to title). */
  metaTitle?: Record<Locale, string>;
  /** Optional SEO meta description (falls back to intro). */
  metaDescription?: Record<Locale, string>;
  /** Optional prose sections rendered after the intro body. */
  sections?: GuideSection[];
  /** Optional tables rendered after the prose sections. */
  tables?: GuideTable[];
}

export const guides: Guide[] = [
  {
    slug: "sso-id-login",
    title: {
      en: "SSO ID Login Rajasthan 2026 — Complete Guide",
      hi: "एसएसओ आईडी लॉगिन राजस्थान 2026 — पूरी गाइड",
    },
    metaTitle: {
      en: "SSO ID Login Rajasthan 2026 — Step-by-Step Guide",
      hi: "एसएसओ आईडी लॉगिन राजस्थान 2026 — स्टेप-बाय-स्टेप गाइड",
    },
    metaDescription: {
      en: "SSO ID login guide for sso.rajasthan.gov.in — step-by-step login, fix account lock, OTP issues, and common errors. Jan Aadhaar and Google login options covered. Updated June 2026.",
      hi: "sso.rajasthan.gov.in के लिए एसएसओ आईडी लॉगिन गाइड — स्टेप-बाय-स्टेप लॉगिन, अकाउंट लॉक, ओटीपी समस्या और आम एरर ठीक करें। जन आधार और Google लॉगिन विकल्प शामिल। जून 2026 अपडेटेड।",
    },
    intro: {
      en: "SSO ID login is the single step that unlocks everything — scholarship forms, exam applications, salary slips, e-Mitra services, and 100+ Rajasthan government portals. One username, one password, one place: sso.rajasthan.gov.in.",
      hi: "एसएसओ आईडी लॉगिन वह एक कदम है जो सब कुछ खोल देता है — स्कॉलरशिप फॉर्म, परीक्षा आवेदन, सैलरी स्लिप, ई-मित्र सेवाएं और 100+ राजस्थान सरकारी पोर्टल। एक यूज़रनेम, एक पासवर्ड, एक जगह: sso.rajasthan.gov.in।",
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
          question: "What is SSO ID login?",
          answer:
            "SSO ID login is the process of signing in to the Rajasthan government's Single Sign-On portal at sso.rajasthan.gov.in using your SSO username and password. A single login gives you access to 100+ state government services including e-Mitra, scholarships, exam portals, PayManager, Jan Aadhaar, and health schemes.",
        },
        {
          question: "How do I do SSO ID login?",
          answer:
            "Go to sso.rajasthan.gov.in, enter your SSO ID (username) and password, type the CAPTCHA shown on screen, and click Login. If you registered via Jan Aadhaar or Google, you can also log in using those methods from the same page.",
        },
        {
          question: "What do I do if the captcha is not loading?",
          answer:
            "Clear your browser cache, then reload the page. If that does not fix it, open the portal in a private/incognito window, or switch to an updated version of Chrome. A stuck CAPTCHA is almost always a browser cache issue.",
        },
        {
          question: "Why does SSO login say 'Invalid Username or Password'?",
          answer:
            "Either your SSO ID or password is wrong, or Caps Lock is on. Your SSO ID is the username you chose at registration — not your email, not your Aadhaar number. Use the 'I Forgot my SSOID' or 'I Forgot my Password' links instead of guessing again, because three wrong attempts lock the account for 30 minutes.",
        },
        {
          question: "How long is my account locked after failed login attempts?",
          answer:
            "After three consecutive failed login attempts, the account is locked for approximately 30 minutes. Wait it out, then use the Forgot Password link to reset your password properly before trying again.",
        },
        {
          question: "How long does an SSO session stay active?",
          answer:
            "The SSO portal keeps your session active for about 30 minutes of inactivity. If you are filling a long form — a scholarship application or an OTR profile — save your progress before stepping away, because the portal does not always warn you before it logs you out.",
        },
        {
          question: "Can I log in with Jan Aadhaar or Google instead of a password?",
          answer:
            "Yes. If you linked Jan Aadhaar, Google, or Facebook during registration, those login options appear on the SSO portal homepage. Click the relevant button and follow the OTP or account verification steps.",
        },
        {
          question: "What does 'Connection is not private' mean on the login page?",
          answer:
            "It usually means your device's date or time is set incorrectly. Fix the clock in your device settings, reload the page, and the warning disappears. It is not a problem with the SSO portal itself.",
        },
        {
          question: "My OTP is not arriving — what should I do?",
          answer:
            "First confirm you are using the mobile number linked to your Aadhaar or Jan Aadhaar, not just any number. Wait 5 minutes — network delays are common. Then try the email OTP option instead. If that also fails, clear your browser cache and retry, or visit an e-Mitra kiosk with your Aadhaar card.",
        },
        {
          question: "Is there an SSO helpline for login problems?",
          answer:
            "Yes. Call 0141-5153222 or email helpdesk.sso@rajasthan.gov.in. Lines are open Monday to Friday, 10 AM to 6 PM. For non-urgent queries, email usually gets a faster response than the phone helpline during peak times.",
        },
      ],
      hi: [
        {
          question: "एसएसओ आईडी लॉगिन क्या है?",
          answer:
            "एसएसओ आईडी लॉगिन राजस्थान सरकार के सिंगल साइन-ऑन पोर्टल sso.rajasthan.gov.in पर अपने एसएसओ यूज़रनेम और पासवर्ड से साइन इन करने की प्रक्रिया है। एक लॉगिन से ई-मित्र, स्कॉलरशिप, परीक्षा पोर्टल, PayManager, जन आधार और स्वास्थ्य योजनाओं सहित 100+ सरकारी सेवाएं मिलती हैं।",
        },
        {
          question: "एसएसओ आईडी लॉगिन कैसे करें?",
          answer:
            "sso.rajasthan.gov.in खोलें, अपनी एसएसओ आईडी (यूज़रनेम) और पासवर्ड डालें, स्क्रीन पर दिख रहा CAPTCHA टाइप करें और Login पर क्लिक करें। यदि आपने जन आधार या Google से रजिस्टर किया है, तो उसी पेज से उन तरीकों से भी लॉगिन कर सकते हैं।",
        },
        {
          question: "कैप्चा लोड नहीं हो रहा तो क्या करें?",
          answer:
            "ब्राउज़र कैश साफ करें और पेज रीलोड करें। ठीक न हो तो पोर्टल को प्राइवेट/इनकॉग्निटो विंडो में खोलें, या अद्यतन Chrome पर जाएं। अटका कैप्चा लगभग हमेशा ब्राउज़र कैश की समस्या होती है।",
        },
        {
          question: "'Invalid Username or Password' क्यों दिखता है?",
          answer:
            "या तो आपकी एसएसओ आईडी या पासवर्ड गलत है, या Caps Lock चालू है। आपकी एसएसओ आईडी वह यूज़रनेम है जो रजिस्ट्रेशन के समय चुना था — ईमेल या आधार नंबर नहीं। बार-बार अनुमान लगाने के बजाय 'I Forgot my SSOID' या 'I Forgot my Password' लिंक उपयोग करें, क्योंकि तीन गलत प्रयास अकाउंट को 30 मिनट के लिए लॉक कर देते हैं।",
        },
        {
          question: "गलत प्रयासों के बाद अकाउंट कितनी देर लॉक रहता है?",
          answer:
            "लगातार तीन गलत लॉगिन प्रयासों के बाद अकाउंट लगभग 30 मिनट के लिए लॉक हो जाता है। प्रतीक्षा करें, फिर दोबारा प्रयास से पहले Forgot Password लिंक से पासवर्ड सही ढंग से रीसेट करें।",
        },
        {
          question: "एसएसओ सेशन कितनी देर active रहता है?",
          answer:
            "एसएसओ पोर्टल आपका सेशन लगभग 30 मिनट की निष्क्रियता तक active रखता है। यदि आप लंबा फॉर्म भर रहे हैं — स्कॉलरशिप आवेदन या OTR प्रोफ़ाइल — तो जाने से पहले प्रगति सेव करें, क्योंकि पोर्टल लॉगआउट से पहले हमेशा चेतावनी नहीं देता।",
        },
        {
          question: "क्या पासवर्ड के बजाय जन आधार या Google से लॉगिन कर सकते हैं?",
          answer:
            "हाँ। यदि रजिस्ट्रेशन के समय आपने जन आधार, Google या Facebook लिंक किया था, तो वे लॉगिन विकल्प एसएसओ पोर्टल होमपेज पर दिखते हैं। संबंधित बटन पर क्लिक करें और ओटीपी या अकाउंट वेरिफिकेशन चरण पूरे करें।",
        },
        {
          question: "लॉगिन पेज पर 'Connection is not private' का क्या मतलब है?",
          answer:
            "आमतौर पर इसका मतलब है कि आपके डिवाइस की तारीख या समय गलत सेट है। डिवाइस सेटिंग्स में घड़ी ठीक करें, पेज रीलोड करें, और चेतावनी हट जाएगी। यह एसएसओ पोर्टल की समस्या नहीं है।",
        },
        {
          question: "ओटीपी नहीं आ रही — क्या करें?",
          answer:
            "पहले पुष्टि करें कि आप आधार या जन आधार से लिंक मोबाइल नंबर उपयोग कर रहे हैं, कोई भी नंबर नहीं। 5 मिनट रुकें — नेटवर्क देरी आम है। फिर SMS की जगह ईमेल ओटीपी आज़माएं। वह भी विफल हो तो ब्राउज़र कैश साफ कर पुनः प्रयास करें, या आधार कार्ड के साथ ई-मित्र कियोस्क जाएं।",
        },
        {
          question: "क्या लॉगिन समस्याओं के लिए एसएसओ हेल्पलाइन है?",
          answer:
            "हाँ। 0141-5153222 पर कॉल करें या helpdesk.sso@rajasthan.gov.in पर ईमेल करें। समय सोमवार से शुक्रवार, सुबह 10 बजे से शाम 6 बजे तक। peak समय में फोन की तुलना में ईमेल का जवाब अक्सर जल्दी मिलता है।",
        },
      ],
    },
    sections: [
      {
        title: {
          en: "What SSO ID login gives you access to",
          hi: "एसएसओ आईडी लॉगिन से आपको किस तक पहुँच मिलती है",
        },
        body: {
          en: [
            "Rajasthan SSO ID login is the single doorway to more than 100 state government services. The Single Sign-On (SSO) system, run by the Department of Information Technology and Communication since 2013, replaced dozens of separate department logins with one digital identity. Once you sign in at sso.rajasthan.gov.in, your authentication carries across the whole platform, so you do not log in again for each service.",
            "After login you reach a personalised dashboard. From there citizens use e-Mitra for bills and certificates, apply for RPSC and RSSB jobs through the Recruitment Portal, file scholarship forms, update Jan Aadhaar, and use health schemes like Chiranjeevi. Government employees open PayManager for salary slips and RajKaj for leave and office files. This is why a smooth, secure login matters — everything else depends on it.",
          ],
          hi: [
            "राजस्थान एसएसओ आईडी लॉगिन 100 से अधिक राज्य सरकारी सेवाओं का एकमात्र दरवाज़ा है। सूचना प्रौद्योगिकी एवं संचार विभाग द्वारा 2013 से संचालित सिंगल साइन-ऑन (SSO) प्रणाली ने दर्जनों अलग विभागीय लॉगिन की जगह एक डिजिटल पहचान दी। sso.rajasthan.gov.in पर लॉगिन करते ही आपका प्रमाणीकरण पूरे प्लेटफ़ॉर्म में चलता है, इसलिए हर सेवा के लिए दोबारा लॉगिन नहीं करना पड़ता।",
            "लॉगिन के बाद आप एक व्यक्तिगत डैशबोर्ड पर पहुँचते हैं। वहाँ से नागरिक बिल व प्रमाण-पत्र के लिए ई-मित्र, भर्ती पोर्टल से RPSC व RSSB नौकरियाँ, छात्रवृत्ति फॉर्म, जन आधार अपडेट, और चिरंजीवी जैसी स्वास्थ्य योजनाएँ उपयोग करते हैं। सरकारी कर्मचारी सैलरी स्लिप के लिए PayManager और छुट्टी व ऑफिस फाइलों के लिए RajKaj खोलते हैं। इसीलिए सहज, सुरक्षित लॉगिन मायने रखता है — बाकी सब इसी पर निर्भर है।",
          ],
        },
      },
      {
        title: {
          en: "What you see after you log in",
          hi: "लॉगिन के बाद आपको क्या दिखता है",
        },
        body: {
          en: [
            "After a successful SSO login you land on a personalised dashboard of service tiles, and what appears depends on your account type. Citizen accounts show tiles for e-Mitra, the Recruitment Portal, Jan Aadhaar, Chiranjeevi health insurance, scholarship portals, Raj eVault, and more. Government employee accounts surface PayManager, RajKaj, SIPF, and Attendance MIS up front. Business accounts show GST, BPAS, Udyog Aadhaar, and labour compliance tiles.",
            "The dashboard does not display every service by default — use the search bar at the top, or scroll the 'All Apps' section, to find a specific one. Some services open inside the SSO window; others redirect to a separate portal tab and silently reuse your SSO credentials, so you do not log in again. One thing to remember: your session times out after roughly 30 minutes of inactivity, so save your progress on long forms like an OTR profile or scholarship application before stepping away — the portal does not always warn you first.",
          ],
          hi: [
            "सफल एसएसओ लॉगिन के बाद आप सेवा टाइल्स वाले एक व्यक्तिगत डैशबोर्ड पर पहुँचते हैं, और क्या दिखेगा यह आपके अकाउंट प्रकार पर निर्भर करता है। नागरिक अकाउंट में ई-मित्र, भर्ती पोर्टल, जन आधार, चिरंजीवी स्वास्थ्य बीमा, छात्रवृत्ति पोर्टल, राज ई-वॉल्ट आदि टाइल्स दिखती हैं। सरकारी कर्मचारी अकाउंट में PayManager, RajKaj, SIPF और Attendance MIS सामने रहते हैं। व्यवसाय अकाउंट में GST, BPAS, उद्योग आधार और श्रम अनुपालन टाइल्स दिखती हैं।",
            "डैशबोर्ड डिफ़ॉल्ट रूप से हर सेवा नहीं दिखाता — किसी विशेष सेवा के लिए ऊपर सर्च बार उपयोग करें या 'All Apps' सेक्शन स्क्रॉल करें। कुछ सेवाएं एसएसओ विंडो में ही खुलती हैं; कुछ अलग पोर्टल टैब पर भेजती हैं और पृष्ठभूमि में आपके एसएसओ क्रेडेंशियल का उपयोग करती हैं, इसलिए दोबारा लॉगिन नहीं करना पड़ता। एक बात याद रखें: लगभग 30 मिनट की निष्क्रियता के बाद सेशन टाइम आउट हो जाता है, इसलिए OTR प्रोफ़ाइल या स्कॉलरशिप आवेदन जैसे लंबे फॉर्म पर जाने से पहले प्रगति सेव करें — पोर्टल हमेशा पहले चेतावनी नहीं देता।",
          ],
        },
      },
      {
        title: {
          en: "Login on the website vs the SSO Raj mobile app",
          hi: "वेबसाइट बनाम SSO Raj मोबाइल ऐप पर लॉगिन",
        },
        body: {
          en: [
            "You can log in two ways. On a computer or phone browser, open sso.rajasthan.gov.in, enter your SSO ID and password, solve the captcha, and click Login. The website is best for long forms, uploads, and printing receipts.",
            "On a smartphone, the official SSO Raj app offers the same login with a faster, mobile-friendly dashboard and quick access to frequently used services. Whichever you choose, your SSO ID and password are identical — the app and the website share one account. For sensitive tasks, avoid logging in on someone else's device and always log out when you finish.",
          ],
          hi: [
            "आप दो तरीकों से लॉगिन कर सकते हैं। कंप्यूटर या फोन ब्राउज़र पर sso.rajasthan.gov.in खोलें, अपनी एसएसओ आईडी और पासवर्ड डालें, कैप्चा भरें और लॉगिन पर क्लिक करें। लंबे फॉर्म, अपलोड और रसीद प्रिंट के लिए वेबसाइट सबसे अच्छी है।",
            "स्मार्टफोन पर आधिकारिक SSO Raj ऐप वही लॉगिन तेज़, मोबाइल-अनुकूल डैशबोर्ड और अक्सर उपयोग होने वाली सेवाओं तक त्वरित पहुँच के साथ देता है। आप जो भी चुनें, आपकी एसएसओ आईडी और पासवर्ड एक ही रहते हैं — ऐप और वेबसाइट एक ही अकाउंट साझा करते हैं। संवेदनशील कार्यों के लिए किसी और के डिवाइस पर लॉगिन से बचें और काम पूरा होने पर हमेशा लॉगआउट करें।",
          ],
        },
      },
      {
        title: {
          en: "What to do when the portal is slow or 'server busy'",
          hi: "जब पोर्टल धीमा हो या 'server busy' दिखे तो क्या करें",
        },
        body: {
          en: [
            "Near exam deadlines and scholarship cut-offs the portal sees heavy traffic and can feel slow or show a 'server busy' message. This is usually temporary. Try again after a few minutes, ideally early morning or late night when traffic is lower, and avoid refreshing repeatedly, which only adds load.",
            "If you only need to recover your SSO ID rather than log in fully, you can skip the website entirely: send an SMS with 'RJ SSO' to 9223166166 from your registered mobile number and the portal replies with your ID. Plan important submissions a day or two before the deadline so a busy server never costs you an application.",
          ],
          hi: [
            "परीक्षा की अंतिम तिथियों और छात्रवृत्ति कट-ऑफ के पास पोर्टल पर भारी ट्रैफ़िक होता है और यह धीमा लग सकता है या 'server busy' संदेश दिखा सकता है। यह आमतौर पर अस्थायी है। कुछ मिनट बाद दोबारा प्रयास करें, बेहतर हो सुबह जल्दी या देर रात जब ट्रैफ़िक कम हो, और बार-बार रिफ्रेश से बचें जो केवल भार बढ़ाता है।",
            "यदि आपको पूरी तरह लॉगिन के बजाय केवल एसएसओ आईडी रिकवर करनी है, तो वेबसाइट छोड़ सकते हैं: अपने रजिस्टर्ड मोबाइल नंबर से 'RJ SSO' को 9223166166 पर एसएमएस भेजें और पोर्टल आपकी आईडी भेज देगा। महत्वपूर्ण सबमिशन अंतिम तिथि से एक-दो दिन पहले करें ताकि व्यस्त सर्वर कभी आपका आवेदन न रोके।",
          ],
        },
      },
      {
        title: {
          en: "Keeping your SSO login secure",
          hi: "अपना एसएसओ लॉगिन सुरक्षित रखना",
        },
        body: {
          en: [
            "Your SSO ID links to your Aadhaar, Jan Aadhaar, bank, and government records, so treat the password like a bank PIN. Use a strong, unique password, change it periodically through Update Profile, and never reuse it on other websites. Enable any available recovery options so you are never locked out.",
            "Only ever type your credentials on the official sso.rajasthan.gov.in domain. Government departments and RajSSO Guide will never call, message, or email you asking for your password or OTP — anyone who does is attempting fraud. Avoid public Wi-Fi and shared computers for login, and if you must use one, log out completely and clear the browser afterwards.",
          ],
          hi: [
            "आपकी एसएसओ आईडी आपके आधार, जन आधार, बैंक और सरकारी रिकॉर्ड से जुड़ी होती है, इसलिए पासवर्ड को बैंक पिन की तरह मानें। मज़बूत, अद्वितीय पासवर्ड उपयोग करें, Update Profile से समय-समय पर बदलें, और इसे अन्य वेबसाइटों पर दोबारा उपयोग न करें। उपलब्ध रिकवरी विकल्प सक्षम रखें ताकि आप कभी लॉक आउट न हों।",
            "अपनी जानकारी केवल आधिकारिक sso.rajasthan.gov.in डोमेन पर ही दर्ज करें। सरकारी विभाग और RajSSO Guide कभी कॉल, संदेश या ईमेल कर आपका पासवर्ड या ओटीपी नहीं मांगेंगे — जो ऐसा करे वह धोखाधड़ी का प्रयास है। लॉगिन के लिए सार्वजनिक वाई-फाई और साझा कंप्यूटर से बचें, और यदि उपयोग करना ही पड़े तो पूरी तरह लॉगआउट कर ब्राउज़र साफ़ करें।",
          ],
        },
      },
    ],
    tables: [
      {
        title: {
          en: "Ways to log in to your SSO account",
          hi: "अपने एसएसओ अकाउंट में लॉगिन करने के तरीके",
        },
        cols: {
          en: ["Login method", "Best for", "What you need"],
          hi: ["लॉगिन तरीका", "किसके लिए सर्वोत्तम", "क्या चाहिए"],
        },
        rows: {
          en: [
            ["SSO ID + password", "All users", "Your SSO ID and password"],
            ["Jan Aadhaar", "Rajasthan residents", "Linked Jan Aadhaar + OTP"],
            ["Google account", "Citizens who linked Google", "Linked Gmail login"],
            ["SIPF number", "Government employees", "SIPF credentials"],
          ],
          hi: [
            ["एसएसओ आईडी + पासवर्ड", "सभी उपयोगकर्ता", "आपकी एसएसओ आईडी और पासवर्ड"],
            ["जन आधार", "राजस्थान निवासी", "लिंक जन आधार + ओटीपी"],
            ["Google अकाउंट", "जिन्होंने Google लिंक किया", "लिंक Gmail लॉगिन"],
            ["SIPF नंबर", "सरकारी कर्मचारी", "SIPF क्रेडेंशियल"],
          ],
        },
      },
      {
        title: {
          en: "Common login errors and how to fix them",
          hi: "सामान्य लॉगिन एरर और उनका समाधान",
        },
        cols: {
          en: ["Error message", "Likely cause", "Fix"],
          hi: ["एरर संदेश", "संभावित कारण", "समाधान"],
        },
        rows: {
          en: [
            ["Invalid Username or Password", "Wrong details or Caps Lock", "Use Forgot ID/Password links"],
            ["Account locked", "Too many failed attempts", "Wait ~30 minutes, then reset password"],
            ["Captcha not loading", "Cache or browser issue", "Clear cache or use a private window"],
            ["Connection is not private", "Wrong device date/time", "Fix the clock and reload"],
            ["Server busy / slow", "Heavy traffic at deadlines", "Retry after a few minutes"],
          ],
          hi: [
            ["Invalid Username or Password", "गलत विवरण या Caps Lock", "Forgot ID/Password लिंक उपयोग करें"],
            ["Account locked", "बहुत बार गलत प्रयास", "~30 मिनट प्रतीक्षा कर पासवर्ड रीसेट करें"],
            ["Captcha not loading", "कैश या ब्राउज़र समस्या", "कैश साफ़ करें या प्राइवेट विंडो उपयोग करें"],
            ["Connection is not private", "गलत डिवाइस तारीख/समय", "घड़ी ठीक कर रीलोड करें"],
            ["Server busy / slow", "अंतिम तिथि पर भारी ट्रैफ़िक", "कुछ मिनट बाद दोबारा प्रयास करें"],
          ],
        },
      },
    ],
    lastVerified: "2026-06-18",
  },
  {
    slug: "sso-id-registration",
    title: {
      en: "SSO ID Registration Rajasthan 2026 — How to Create a New Account",
      hi: "SSO ID रजिस्ट्रेशन राजस्थान 2026 — नया अकाउंट कैसे बनाएं",
    },
    metaTitle: {
      en: "SSO ID Registration Rajasthan 2026 — Create New Account",
      hi: "SSO ID रजिस्ट्रेशन राजस्थान 2026 — नया अकाउंट कैसे बनाएं",
    },
    metaDescription: {
      en: "How to create a new SSO ID on sso.rajasthan.gov.in — Jan Aadhaar, Aadhaar, and Google methods explained. Free registration, takes 5 minutes. Documents needed, common mistakes, and what happens after. Updated June 2026.",
      hi: "SSO ID कैसे बनाएं sso.rajasthan.gov.in पर — Jan Aadhaar, Aadhaar और Google तरीका हिंदी में। फ्री रजिस्ट्रेशन, 5 मिनट में। कौन से documents चाहिए, क्या गलतियाँ होती हैं, और रजिस्ट्रेशन के बाद क्या होता है। June 2026 अपडेटेड।",
    },
    intro: {
      en: "SSO ID registration on sso.rajasthan.gov.in is free and takes about five minutes if your documents are ready. One account opens up 100+ Rajasthan government services: scholarship applications, exam forms, PayManager salary slips, e-Mitra, Jan Aadhaar management, and more.",
      hi: "sso.rajasthan.gov.in पर SSO ID बनाना पूरी तरह मुफ्त है और documents तैयार हों तो पाँच मिनट में हो जाता है। एक अकाउंट से 100 से ज़्यादा राजस्थान सरकारी सेवाएं मिलती हैं: स्कॉलरशिप आवेदन, परीक्षा फॉर्म, PayManager सैलरी स्लिप, e-Mitra, Jan Aadhaar, और बहुत कुछ।",
    },
    body: {
      en: [
        "There are three registration methods. Which one you use affects what you can access later. This guide explains each method, what to have ready before you start, and what happens the moment registration is complete.",
        "Whatever mobile number is linked to your Aadhaar or Jan Aadhaar is the one that receives the OTP. If that SIM is no longer active, you will not be able to complete registration through either of those methods. In that case, an Aadhaar-linked number update at an enrolment center would need to happen first.",
        "One thing worth saying clearly: the username you type during registration is your permanent SSO ID. The portal gives no option to change it later. Pick something simple you will remember, like your first name combined with your birth year, and write it down somewhere physical before submitting.",
        "If you registered via Google and later realise you need Aadhaar-verified access for scholarships or exams, you cannot upgrade the existing account. You would need to create a new account via Aadhaar and merge or replace the old one using the merge process in your SSO profile settings.",
      ],
      hi: [
        "रजिस्ट्रेशन के तीन तरीके हैं। कौन सा तरीका चुनते हैं यह बाद में मिलने वाली सेवाओं पर असर डालता है। यह गाइड तीनों तरीके, शुरू करने से पहले क्या तैयार रखें, और रजिस्ट्रेशन पूरा होने के तुरंत बाद क्या होता है — यह सब बताती है।",
        "Aadhaar या Jan Aadhaar से linked जो मोबाइल नंबर है, OTP उसी पर जाती है। अगर वह SIM अब active नहीं है, तो इन दोनों तरीकों से रजिस्ट्रेशन नहीं होगा। उस स्थिति में पहले Aadhaar enrolment center जाकर नंबर update करवाना होगा।",
        "एक बात पहले से साफ कर दें: रजिस्ट्रेशन के दौरान जो username टाइप करते हैं वही permanent SSO ID बन जाती है। Portal में बाद में बदलने का कोई option नहीं है। कुछ simple चुनें जो याद रहे, जैसे नाम और जन्म वर्ष, और Register click करने से पहले कहीं physical लिख लें।",
        "Google से रजिस्ट्रेशन किया है और बाद में Aadhaar-verified access चाहिए scholarships या exams के लिए, तो existing account upgrade नहीं होता। Aadhaar से नया account बनाना होगा और पुराने को SSO profile settings में merge process से replace करना होगा।",
      ],
    },
    steps: {
      en: [
        { name: "Open the SSO portal", text: "Go to sso.rajasthan.gov.in in Chrome or Firefox and click the Registration button." },
        { name: "Choose your registration method", text: "Select Jan Aadhaar (for families), Aadhaar (for individuals), or Google or Facebook (for basic access only)." },
        { name: "Enter your ID number and verify", text: "Enter your Jan Aadhaar or Aadhaar number. An OTP is sent to your registered mobile number. Enter the OTP within 10 minutes." },
        { name: "Choose a username", text: "Select a username. This becomes your permanent SSO ID and cannot be changed later. Write it down before clicking Register." },
        { name: "Set a password and register", text: "Set a password of at least 8 characters with one number and one special character. Click Register. Your SSO ID appears on the confirmation screen and is sent to your registered mobile." },
      ],
      hi: [
        { name: "Portal खोलें", text: "Chrome या Firefox में sso.rajasthan.gov.in खोलें और Registration button click करें।" },
        { name: "रजिस्ट्रेशन तरीका चुनें", text: "Jan Aadhaar (परिवारों के लिए), Aadhaar (व्यक्तिगत के लिए), या Google या Facebook (सिर्फ basic access) में से चुनें।" },
        { name: "ID नंबर डालें और verify करें", text: "Jan Aadhaar या Aadhaar number डालें। Registered mobile पर OTP आती है। OTP 10 मिनट के अंदर डालें।" },
        { name: "Username चुनें", text: "एक username चुनें। यह आपकी permanent SSO ID बन जाती है और बाद में नहीं बदलती। Register click करने से पहले लिख लें।" },
        { name: "Password set करें और Register करें", text: "कम से कम 8 अक्षर, एक नंबर और एक special character वाला password set करें। Register click करें। SSO ID confirmation screen पर आती है और registered mobile पर SMS भी।" },
      ],
    },
    faqs: {
      en: [
        { question: "How do I create a new SSO ID?", answer: "Go to sso.rajasthan.gov.in and click Registration. Choose your registration method: Jan Aadhaar (recommended for families), Aadhaar (recommended for individual citizens and students), or Google or Facebook (for basic access only). Enter your details, verify with OTP, choose a username, and set a password. Your username becomes your permanent SSO ID." },
        { question: "Is SSO ID registration free?", answer: "Yes, creating an SSO ID on sso.rajasthan.gov.in costs nothing. Some government services accessed through SSO (such as OTR exam registration) have fees set by the relevant department, but the SSO account itself is free." },
        { question: "Can I register for SSO ID without an Aadhaar card?", answer: "You can register using a Google or Facebook account without Aadhaar, but this creates a basic account only. Scholarship portals (SJE), RPSC and RSMSSB exam applications, OTR registration, and Jan Aadhaar-linked services all require an Aadhaar-verified account. Students and job seekers should use the Aadhaar or Jan Aadhaar method." },
        { question: "Which registration method should I choose?", answer: "Use Jan Aadhaar if you have a family Jan Aadhaar ID and the registered mobile number is active. Use Aadhaar if you are registering as an individual and your Aadhaar-linked mobile is active. Use Google or Facebook only if you have no Aadhaar or Jan Aadhaar access and only need basic SSO services." },
        { question: "Can I change my SSO ID username after registration?", answer: "No. The username you choose during registration is permanent and cannot be changed. Pick something simple, write it down before clicking Register, and store it somewhere you will find years later." },
        { question: "What documents are required for SSO ID registration?", answer: "For Jan Aadhaar registration: the 10-digit Jan Aadhaar family ID number and access to the family head's registered mobile for OTP. For Aadhaar registration: your 12-digit Aadhaar number and the mobile number currently linked to it. For Google or Facebook registration: just the account itself." },
        { question: "How long does SSO ID registration take?", answer: "About 5 minutes if you have your Aadhaar or Jan Aadhaar number ready and your registered mobile number is active. The longest part is waiting for the OTP to arrive, which usually takes under a minute." },
        { question: "What happens after I complete SSO registration?", answer: "Your SSO ID appears on the confirmation screen. An SMS with the SSO ID is sent to your registered mobile. You can log in immediately. No activation wait is required. Your dashboard starts mostly empty and fills up as you add services." },
        { question: "My OTP is not arriving during registration. What do I do?", answer: "Make sure you are using the mobile number registered with your Aadhaar or Jan Aadhaar, not your current everyday SIM if it is different. Wait 5 minutes for network delays, then click Resend OTP. If it still does not arrive, try the email OTP option if your email is registered in Aadhaar records. If nothing works, visit an Aadhaar enrolment center to update your registered mobile number." },
        { question: "I already have an SSO ID but created another one by mistake. What now?", answer: "Use the merge option in your SSO profile. Log into the account you want to close, go to Edit Profile, click Deactivate, choose Merge, and enter the SSO ID of the account you want to keep. All your data moves to the primary account and the duplicate closes." },
        { question: "Can I use the same mobile number to register multiple SSO IDs?", answer: "One Aadhaar number and one mobile number can link to only one SSO ID. The portal will reject registration if it detects the Aadhaar is already linked to an existing account." },
      ],
      hi: [
        { question: "SSO ID कैसे बनाएं?", answer: "sso.rajasthan.gov.in खोलें और Registration पर click करें। रजिस्ट्रेशन तरीका चुनें: Jan Aadhaar (परिवारों के लिए), Aadhaar (व्यक्तिगत citizens और students के लिए), या Google या Facebook (सिर्फ basic access के लिए)। Details डालें, OTP से verify करें, username चुनें, और password set करें। Username ही permanent SSO ID बन जाती है।" },
        { question: "SSO ID रजिस्ट्रेशन फ्री है?", answer: "हाँ। sso.rajasthan.gov.in पर SSO ID बनाना बिल्कुल मुफ्त है। SSO के ज़रिए access होने वाली कुछ सरकारी सेवाओं की अपनी fees होती हैं, जैसे OTR exam registration, लेकिन SSO account खुद free है।" },
        { question: "Aadhaar card के बिना SSO ID बन सकती है?", answer: "Google या Facebook account से Aadhaar के बिना रजिस्ट्रेशन हो सकता है, लेकिन यह सिर्फ basic account बनता है। Scholarship portal (SJE), RPSC और RSMSSB exam applications, OTR registration, और Jan Aadhaar-linked services सब Aadhaar-verified account माँगती हैं। Students और नौकरी तलाशने वाले Aadhaar या Jan Aadhaar तरीका इस्तेमाल करें।" },
        { question: "कौन सा रजिस्ट्रेशन तरीका चुनें?", answer: "Jan Aadhaar चुनें अगर परिवार का Jan Aadhaar ID है और registered mobile active है। Aadhaar चुनें अगर अकेले रजिस्ट्रेशन कर रहे हैं और Aadhaar-linked mobile active है। Google या Facebook सिर्फ तब जब Aadhaar या Jan Aadhaar access नहीं है और सिर्फ basic SSO services चाहिए।" },
        { question: "रजिस्ट्रेशन के बाद SSO ID username बदल सकते हैं?", answer: "नहीं। रजिस्ट्रेशन के समय चुना हुआ username permanent है और बाद में नहीं बदलता। Register click करने से पहले कुछ simple चुनें और लिख लें।" },
        { question: "SSO ID रजिस्ट्रेशन के लिए कौन से documents चाहिए?", answer: "Jan Aadhaar रजिस्ट्रेशन के लिए: 10 अंकों का Jan Aadhaar family ID नंबर और परिवार के मुखिया के registered mobile तक access। Aadhaar रजिस्ट्रेशन के लिए: 12 अंकों का Aadhaar नंबर और उससे linked active mobile। Google या Facebook रजिस्ट्रेशन के लिए: सिर्फ वह account।" },
        { question: "SSO ID रजिस्ट्रेशन में कितना समय लगता है?", answer: "Aadhaar या Jan Aadhaar नंबर तैयार हो और registered mobile active हो तो लगभग 5 मिनट। सबसे ज़्यादा समय OTP का इंतज़ार करने में जाता है, जो आमतौर पर एक मिनट से कम में आती है।" },
        { question: "रजिस्ट्रेशन पूरा होने के बाद क्या होता है?", answer: "SSO ID confirmation screen पर दिखती है। Registered mobile पर SMS आता है जिसमें SSO ID होती है। तुरंत login किया जा सकता है, कोई activation wait नहीं। Dashboard शुरू में ज़्यादातर खाली होता है और सेवाएं जैसे-जैसे इस्तेमाल होती हैं वैसे-वैसे दिखती हैं।" },
        { question: "रजिस्ट्रेशन के दौरान OTP नहीं आ रही, क्या करें?", answer: "Confirm करें कि Aadhaar या Jan Aadhaar से linked mobile number use कर रहे हैं, कोई और SIM नहीं। 5 मिनट रुकें, फिर Resend OTP click करें। Email OTP option available हो तो try करें। कुछ नहीं आया तो Aadhaar enrolment center जाकर registered mobile number update करवाएं।" },
        { question: "गलती से दो SSO ID बन गई हैं, अब क्या करें?", answer: "SSO profile में merge option है। जो account बंद करना है उसमें login करें, Edit Profile जाएं, Deactivate click करें, Merge चुनें, और रखने वाली SSO ID का नंबर डालें। सारा data primary account में चला जाता है।" },
        { question: "क्या एक ही mobile number से दो SSO ID बन सकती हैं?", answer: "नहीं। एक Aadhaar number और एक mobile number सिर्फ एक SSO ID से link हो सकते हैं। Portal reject कर देता है अगर Aadhaar पहले से किसी account से linked है।" },
      ],
    },
    sections: [
      {
        title: { en: "What you need before you register", hi: "रजिस्ट्रेशन शुरू करने से पहले क्या तैयार रखें" },
        body: {
          en: [
            "Getting these ready before you open the portal saves the most time. The registration form has a timer on some OTP steps, so fumbling for documents mid-form can cause issues.",
            "For Jan Aadhaar registration you need the 10-digit Jan Aadhaar family ID number (not a member sub-number) and access to the mobile number registered to the family head, because the OTP goes there. For Aadhaar registration you need your 12-digit Aadhaar card number and the mobile number currently linked to that Aadhaar (the OTP goes to that number only). For Google or Facebook registration you just need the account itself, no OTP or documents.",
          ],
          hi: [
            "पोर्टल खोलने से पहले ये सब तैयार रखना सबसे ज़्यादा समय बचाता है। रजिस्ट्रेशन फॉर्म कुछ OTP स्टेप्स पर टाइमर रखता है, इसलिए बीच में दस्तावेज़ ढूंढना दिक्कत दे सकता है।",
            "जन आधार रजिस्ट्रेशन के लिए 10 अंकों का जन आधार परिवार ID नंबर (सदस्य का sub-number नहीं) और परिवार मुखिया के रजिस्टर्ड मोबाइल नंबर तक पहुँच चाहिए क्योंकि OTP वहीं आएगी। आधार रजिस्ट्रेशन के लिए 12 अंकों का आधार नंबर और उससे वर्तमान में लिंक मोबाइल नंबर (OTP केवल उसी पर आएगी)। Google या Facebook रजिस्ट्रेशन के लिए बस अकाउंट चाहिए, कोई OTP या दस्तावेज़ नहीं।",
          ],
        },
      },
      {
        title: { en: "The three registration methods", hi: "रजिस्ट्रेशन के तीन तरीके" },
        body: {
          en: [
            "Jan Aadhaar registration is best for families. Open sso.rajasthan.gov.in, click Registration, select Jan Aadhaar, enter your 10-digit family ID, verify the OTP sent to the family head's phone, select your name from the member list, choose a username, set a password, and click Register. Your SSO ID is confirmed on screen and sent to the registered mobile.",
            "Aadhaar registration is best for individuals, especially students. Select Aadhaar, enter your 12-digit number, choose OTP delivery (mobile or email), enter the OTP within 10 minutes, check that the auto-filled name and date of birth match your Class 10 marksheet (not just your Aadhaar card, because exam portals go by marksheet details), choose a username, set a password, and click Register.",
            "Google or Facebook registration is the fastest but limited. Click the Google or Facebook button, sign in, choose a username, and click Register. The limitation is real: accounts created this way cannot access SJE scholarships, RPSC exam applications, OTR registrations, PayManager, or any other service requiring Aadhaar verification. Students should not use this method.",
          ],
          hi: [
            "जन आधार रजिस्ट्रेशन परिवारों के लिए सबसे अच्छा है। sso.rajasthan.gov.in खोलें, Registration पर क्लिक करें, Jan Aadhaar चुनें, 10 अंकों का परिवार ID डालें, परिवार मुखिया के फोन पर आई OTP वेरिफाई करें, सदस्य लिस्ट से अपना नाम चुनें, username बनाएं, पासवर्ड सेट करें और Register पर क्लिक करें।",
            "आधार रजिस्ट्रेशन अकेले व्यक्तियों, खासकर स्टूडेंट्स के लिए बेस्ट है। Aadhaar चुनें, 12 अंकों का नंबर डालें, OTP डिलीवरी चुनें (मोबाइल या ईमेल), 10 मिनट में OTP दर्ज करें, अपने-आप भरे नाम और जन्मतिथि को 10वीं की मार्कशीट से मिलाएं (केवल आधार कार्ड से नहीं, क्योंकि परीक्षा पोर्टल मार्कशीट डिटेल्स देखते हैं), username चुनें, पासवर्ड सेट करें और Register करें।",
            "Google या Facebook रजिस्ट्रेशन सबसे तेज़ लेकिन सीमित है। Google या Facebook बटन पर क्लिक करें, साइन इन करें, username चुनें और Register करें। सीमा असली है: इस तरह बने अकाउंट SJE स्कॉलरशिप, RPSC परीक्षा आवेदन, OTR, PayManager, या कोई भी आधार-सत्यापित सेवा एक्सेस नहीं कर सकते। स्टूडेंट्स इस तरीके का उपयोग न करें।",
          ],
        },
      },
      {
        title: { en: "What happens immediately after registration", hi: "रजिस्ट्रेशन के तुरंत बाद क्या होता है" },
        body: {
          en: [
            "Within seconds of a successful registration: your SSO ID appears on the confirmation screen, an SMS is sent to your registered mobile number with the SSO ID, and a confirmation email goes to your registered email address if you provided one. You can log in immediately. There is no activation wait, no email confirmation required before first login.",
            "Your dashboard will be mostly empty at first. That is normal. Government service tiles appear as you use them or can be found through the search bar. The portal does not automatically load every available service the moment you register.",
            "One thing to do right after registration: note your SSO ID from the confirmation screen and save it somewhere you will find in three years. The SMS helps, but people change phones, delete messages, and then spend 20 minutes on the Forgot Username flow because they never wrote it down.",
          ],
          hi: [
            "सफल रजिस्ट्रेशन के कुछ ही सेकंड में: आपकी SSO ID कन्फर्मेशन स्क्रीन पर दिखती है, रजिस्टर्ड मोबाइल पर SSO ID के साथ SMS आता है, और ईमेल एड्रेस दिया हो तो कन्फर्मेशन ईमेल भी। आप तुरंत लॉगिन कर सकते हैं। कोई activation wait नहीं, पहले लॉगिन से पहले ईमेल कन्फर्मेशन की ज़रूरत नहीं।",
            "आपका डैशबोर्ड शुरू में ज़्यादातर खाली रहेगा। यह सामान्य है। सरकारी सेवा टाइल्स जैसे-जैसे आप उपयोग करते हैं दिखती हैं या सर्च बार से मिलती हैं। रजिस्टर करते ही पोर्टल हर उपलब्ध सेवा अपने-आप लोड नहीं करता।",
            "रजिस्ट्रेशन के तुरंत बाद एक काम करें: कन्फर्मेशन स्क्रीन से SSO ID नोट करें और ऐसी जगह सेव करें जो तीन साल बाद भी मिले। SMS मदद करता है, लेकिन लोग फोन बदलते हैं, मैसेज डिलीट करते हैं, और फिर 20 मिनट Forgot Username पर खर्च करते हैं क्योंकि कभी लिखा ही नहीं था।",
          ],
        },
      },
    ],
    tables: [
      {
        title: { en: "Account types and what they can access", hi: "अकाउंट प्रकार और उनकी पहुँच" },
        cols: { en: ["Account type", "How registered", "Services available"], hi: ["अकाउंट प्रकार", "कैसे रजिस्टर", "उपलब्ध सेवाएं"] },
        rows: {
          en: [
            ["Citizen (Aadhaar-verified)", "Via Aadhaar or Jan Aadhaar", "All services including scholarships, exams, health schemes, e-Mitra, salary portals"],
            ["Citizen (social login)", "Via Google or Facebook", "Basic services only. Scholarship, exam, and Aadhaar-linked portals are blocked"],
            ["Government employee", "Via SIPF or department credentials", "PayManager, RajKaj, SIPF, Attendance MIS, and all citizen services"],
            ["Udyog (business)", "Via Udyog Aadhaar or BRN", "GST portal, BPAS, labour compliance, and citizen services"],
          ],
          hi: [
            ["नागरिक (आधार-सत्यापित)", "आधार या जन आधार से", "सभी सेवाएं जिनमें स्कॉलरशिप, परीक्षा, स्वास्थ्य योजनाएं, ई-मित्र, सैलरी पोर्टल शामिल"],
            ["नागरिक (सोशल लॉगिन)", "Google या Facebook से", "केवल बेसिक सेवाएं। स्कॉलरशिप, परीक्षा और आधार-लिंक पोर्टल ब्लॉक"],
            ["सरकारी कर्मचारी", "SIPF या विभागीय क्रेडेंशियल से", "PayManager, RajKaj, SIPF, Attendance MIS और सभी नागरिक सेवाएं"],
            ["उद्योग (व्यवसाय)", "उद्योग आधार या BRN से", "GST पोर्टल, BPAS, लेबर कॉम्प्लायंस और नागरिक सेवाएं"],
          ],
        },
      },
      {
        title: { en: "Common registration errors and how to fix them", hi: "सामान्य रजिस्ट्रेशन एरर और उनका समाधान" },
        cols: { en: ["Error", "Cause", "Fix"], hi: ["एरर", "कारण", "समाधान"] },
        rows: {
          en: [
            ["OTP not received", "Aadhaar-linked number is inactive or different from what you are using", "Use the number linked to your Aadhaar. If outdated, update at an Aadhaar enrolment center first"],
            ["Username already taken", "Someone else has that exact username", "Try adding a number suffix: rahul2003 instead of rahul"],
            ["Name mismatch after auto-fill", "Aadhaar name differs from what you expected", "The Aadhaar name is what gets stored. Check it at uidai.gov.in if needed"],
            ["OTP expired", "You took more than 10 minutes to enter it", "Click Resend OTP and complete the step without leaving the browser window"],
            ["Jan Aadhaar member list is wrong", "Family records in Jan Aadhaar database are outdated", "Visit nearest e-Mitra kiosk to update the Jan Aadhaar family record"],
            ["Page timeout mid-registration", "Browser was idle too long", "Restart registration from the beginning. The portal does not save partial progress"],
          ],
          hi: [
            ["OTP नहीं आई", "आधार-लिंक नंबर बंद है या आप दूसरा नंबर उपयोग कर रहे", "आधार से लिंक नंबर उपयोग करें। पुराना हो तो पहले आधार एनरोलमेंट सेंटर पर अपडेट कराएं"],
            ["Username already taken", "उस username को किसी ने पहले ले लिया", "नंबर जोड़ें: rahul की जगह rahul2003 आज़माएं"],
            ["Name mismatch after auto-fill", "आधार का नाम आपकी उम्मीद से अलग है", "आधार वाला नाम ही स्टोर होता है। uidai.gov.in पर जांचें"],
            ["OTP expired", "OTP दर्ज करने में 10 मिनट से ज़्यादा लगे", "Resend OTP करें और ब्राउज़र विंडो छोड़े बिना स्टेप पूरा करें"],
            ["Jan Aadhaar member list गलत है", "जन आधार डेटाबेस में परिवार रिकॉर्ड पुराने हैं", "पास के ई-मित्र कियोस्क पर जन आधार फैमिली रिकॉर्ड अपडेट कराएं"],
            ["पेज टाइमआउट", "ब्राउज़र बहुत देर idle रहा", "शुरू से रजिस्ट्रेशन दोबारा करें। पोर्टल अधूरी progress सेव नहीं करता"],
          ],
        },
      },
    ],
    lastVerified: "2026-06-18",
  },
  {
    slug: "forgot-sso-id",
    title: {
      en: "Forgot SSO ID or Password? How to Recover Your Rajasthan SSO Account",
      hi: "SSO ID या पासवर्ड भूल गए? राजस्थान SSO अकाउंट कैसे Recover करें",
    },
    metaTitle: {
      en: "Forgot SSO ID or Password? Recover Your Rajasthan SSO Account",
      hi: "SSO ID या पासवर्ड भूल गए? राजस्थान SSO अकाउंट recover करें",
    },
    metaDescription: {
      en: "Forgot your SSO ID or Rajasthan SSO password? Recover in 60 seconds via SMS — send RJ SSO to 9223166166. Or use the online portal, email, or e-Mitra. Every recovery method explained. Updated June 2026.",
      hi: "SSO ID या पासवर्ड भूल गए? 60 सेकंड में SMS से recover करें — RJ SSO भेजें 9223166166 पर। Online portal, email, e-Mitra — हर तरीका हिंदी में। June 2026 अपडेटेड।",
    },
    intro: {
      en: "If you are reading this before a deadline, here is the fastest fix: send 'RJ SSO' as an SMS to 9223166166 from your registered mobile number. The portal replies with your SSO ID within seconds. No browser, no internet, no login needed.",
      hi: "अगर कोई deadline सामने है और SSO ID याद नहीं — रुकिए मत। सबसे तेज़ तरीका यह है: अपने registered mobile number से 'RJ SSO' SMS करें 9223166166 पर। कुछ ही सेकंड में portal आपकी SSO ID reply कर देता है। Browser नहीं, internet नहीं, login नहीं।",
    },
    body: {
      en: [
        "If that does not work because your registered number has changed, or you need to reset your password rather than find your username, the sections below cover every other recovery path available on the SSO portal.",
        "Forgetting your SSO ID is more common than you might think, especially for people who registered two or three years ago for a scholarship and have not logged in since. The good news is that recovery is always free, takes minutes, and never requires creating a new account.",
      ],
      hi: [
        "अगर यह काम नहीं किया क्योंकि registered number बदल गया है, या username नहीं बल्कि password reset करना है — नीचे हर situation का अलग तरीका दिया है।",
        "SSO ID भूलना उतना असामान्य नहीं जितना लगता है, खासकर उनके लिए जिन्होंने दो-तीन साल पहले scholarship के लिए रजिस्ट्रेशन किया और तब से login नहीं किया। अच्छी बात यह है कि recovery हमेशा मुफ्त है, मिनटों में होती है, और कभी नया account बनाने की ज़रूरत नहीं पड़ती।",
      ],
    },
    steps: {
      en: [
        { name: "Try SMS recovery first", text: "Send 'RJ SSO' as a text message to 9223166166 from your registered mobile number. Your SSO ID arrives by return SMS within seconds." },
        { name: "Use online portal if SMS does not work", text: "Go to sso.rajasthan.gov.in and click 'I Forgot my Digital Identity (SSOID)' below the login form." },
        { name: "Select your user category", text: "Choose Citizen, Udyog (business), or Government Employee based on how you originally registered." },
        { name: "Enter your identity document", text: "Provide the detail used at registration: Aadhaar number, Jan Aadhaar ID, Google account, GSTIN, or SIPF number." },
        { name: "Complete CAPTCHA and submit", text: "Fill the CAPTCHA and click Submit. Your SSO ID appears on screen and is sent to your registered mobile and email." },
      ],
      hi: [
        { name: "पहले SMS रिकवरी आज़माएं", text: "अपने रजिस्टर्ड मोबाइल नंबर से 'RJ SSO' को 9223166166 पर SMS भेजें। SSO ID सेकंडों में reply SMS से आ जाती है।" },
        { name: "SMS न चले तो ऑनलाइन पोर्टल", text: "sso.rajasthan.gov.in खोलें और लॉगिन फॉर्म के नीचे 'I Forgot my Digital Identity (SSOID)' पर क्लिक करें।" },
        { name: "अपनी श्रेणी चुनें", text: "Citizen, Udyog (व्यवसाय), या Government Employee चुनें — जैसे आपने रजिस्ट्रेशन किया था।" },
        { name: "पहचान दस्तावेज़ दर्ज करें", text: "रजिस्ट्रेशन में उपयोग किया विवरण दें: आधार नंबर, जन आधार ID, Google अकाउंट, GSTIN, या SIPF नंबर।" },
        { name: "CAPTCHA भरें और Submit करें", text: "CAPTCHA भरकर Submit पर क्लिक करें। SSO ID स्क्रीन पर दिखती है और रजिस्टर्ड मोबाइल व ईमेल पर भेजी जाती है।" },
      ],
    },
    faqs: {
      en: [
        { question: "How do I recover a forgotten SSO ID?", answer: "The fastest method: send 'RJ SSO' as an SMS to 9223166166 from your registered mobile number. Your SSO ID arrives by return SMS within seconds. For online recovery, go to sso.rajasthan.gov.in, click 'I Forgot my Digital Identity (SSOID)', select your user category, enter your identity document number, and complete the CAPTCHA. Your SSO ID is displayed on screen and sent to your registered contact." },
        { question: "How do I reset a forgotten SSO password?", answer: "Go to sso.rajasthan.gov.in and click 'I Forgot my Password'. Enter your SSO ID, choose mobile OTP or email, and follow the reset link sent to your registered contact. You can also send 'RJ SSO PASSWORD' as an SMS to 9223166166 from your registered mobile to receive a temporary password without opening a browser." },
        { question: "What if I forgot both my SSO ID and password?", answer: "Recover your SSO ID first using the SMS method (RJ SSO to 9223166166) or the online portal. Once you have your SSO ID, use the Forgot Password flow to reset the password." },
        { question: "The SMS recovery is not working. What now?", answer: "The SMS must be sent from the exact mobile number registered on your SSO account. If you are sending from a different number, the service will not respond. Also confirm that you logged into the SSO portal at least once after September 7, 2018. If both conditions are met and the SMS still does not work, use the online portal recovery method instead." },
        { question: "My registered mobile number has changed. How do I recover my SSO ID?", answer: "Online recovery is not possible without access to the registered number. Visit your nearest e-Mitra kiosk with your Aadhaar card or Jan Aadhaar card. Ask the operator to update your registered mobile number on the SSO account. After the update, use normal online or SMS recovery." },
        { question: "How long is my SSO account locked after wrong password attempts?", answer: "The account is locked for 30 minutes after three consecutive wrong password attempts. Wait out the 30 minutes, then use the Forgot Password link to set a new password rather than guessing again." },
        { question: "How long is the password reset link valid?", answer: "Password reset links sent by the SSO portal are valid for 30 minutes. If the link expires before you use it, return to the portal and request a new one." },
        { question: "Is SSO ID recovery free?", answer: "Yes. All official SSO recovery methods (portal, SMS, and e-Mitra assistance) are free. Standard SMS charges from your telecom provider may apply for the 9223166166 SMS service. Any third party charging a fee for SSO recovery is not a government service." },
        { question: "My SSO account shows as deactivated. Is my data lost?", answer: "No. SSO accounts are not deleted and your data is not lost. A deactivated account can be reactivated through the SSO helpdesk at 0141-5153222. Contact them with your Aadhaar details. Deactivation and account locking are different things: a lock expires in 30 minutes by itself, while a deactivated account needs helpdesk intervention to restore." },
        { question: "Can I recover my SSO ID without Aadhaar or Jan Aadhaar?", answer: "Yes. If you registered via Google or Facebook, you can use that same Google or Facebook account to recover access through the portal recovery page. If you registered as a business, use your GSTIN. If you are a government employee, use your SIPF number." },
        { question: "I received my SSO ID via SMS but still cannot log in. What do I do?", answer: "Confirm you are typing the SSO ID exactly as it arrived in the SMS, including correct capitalisation. Then reset your password using the Forgot Password link. If login still fails after the password reset, clear your browser cache, try an incognito window, or switch to Chrome. Persistent issues can be reported to the helpdesk at 0141-5153222." },
      ],
      hi: [
        { question: "SSO ID भूल गए तो कैसे recover करें?", answer: "सबसे तेज़ तरीका: registered mobile से 'RJ SSO' SMS करें 9223166166 पर। कुछ ही सेकंड में reply में SSO ID आती है। Online recovery के लिए sso.rajasthan.gov.in खोलें, 'I Forgot my Digital Identity (SSOID)' click करें, user category चुनें, registration में use की identity detail डालें, CAPTCHA भरें और Submit करें। SSO ID screen पर आती है और registered contact पर भी।" },
        { question: "SSO पासवर्ड कैसे reset करें?", answer: "sso.rajasthan.gov.in पर 'I Forgot my Password' click करें। SSO ID डालें, Mobile OTP या Email choose करें, और registered contact पर आई reset link से नया password set करें। Browser बिना भी कर सकते हैं: registered mobile से 'RJ SSO PASSWORD' SMS करें 9223166166 पर, temporary password reply में आ जाता है।" },
        { question: "SSO ID और पासवर्ड दोनों भूल गए तो क्या करें?", answer: "पहले SSO ID recover करें: registered mobile से RJ SSO SMS करें 9223166166 पर, या portal पर Forgot Username flow use करें। SSO ID मिल जाए तो Forgot Password से password reset करें।" },
        { question: "SMS recovery काम नहीं कर रहा, क्या करें?", answer: "SMS उसी number से भेजना होगा जो SSO account पर registered है। दूसरे number से भेजने पर service respond नहीं करती। यह भी confirm करें कि September 7, 2018 के बाद कम से कम एक बार SSO portal पर login किया हो। दोनों conditions सही हों और SMS फिर भी न आए तो तरीका 2 — online portal recovery — आज़माएं।" },
        { question: "Registered mobile number बदल गया है, SSO ID कैसे recover होगी?", answer: "Online recovery उस number के बिना possible नहीं है। Aadhaar card या Jan Aadhaar card लेकर नज़दीकी e-Mitra kiosk पर जाएं। Operator से SSO account पर registered mobile number update करवाएं। Update के बाद normal online या SMS recovery करें।" },
        { question: "गलत password से account कितने समय के लिए lock होता है?", answer: "तीन बार लगातार गलत password डालने पर account 30 मिनट के लिए lock होता है। 30 मिनट रुकें, फिर Forgot Password से नया password set करें। दोबारा अंदाज़ा मत लगाएं।" },
        { question: "Password reset link कितनी देर valid रहती है?", answer: "SSO portal की reset link 30 मिनट तक valid रहती है। Expire हो जाए तो sso.rajasthan.gov.in पर वापस जाकर नई request करें।" },
        { question: "SSO ID recovery फ्री है?", answer: "हाँ। Portal, SMS, और e-Mitra — सभी official recovery methods government की तरफ से free हैं। SMS service के लिए telecom provider के normal SMS charges लग सकते हैं। कोई third-party agent recovery के लिए पैसे माँगे तो वह government service नहीं है।" },
        { question: "Account deactivated दिख रहा है, data तो नहीं गया?", answer: "नहीं। SSO accounts delete नहीं होते और data सुरक्षित रहता है। Deactivated account को SSO helpdesk 0141-5153222 पर Aadhaar details के साथ contact करने पर reactivate कर सकती है। Account locking और deactivation अलग हैं: lock 30 मिनट में खुद खुलता है, deactivated account के लिए helpdesk से संपर्क करना होता है।" },
        { question: "Aadhaar या Jan Aadhaar के बिना SSO ID recover हो सकती है?", answer: "हाँ। Google या Facebook से रजिस्ट्रेशन किया था तो उसी account से portal recovery page पर recover होगी। Business registration है तो GSTIN से। Government employee हैं तो SIPF number से।" },
        { question: "SSO ID SMS से मिली लेकिन login नहीं हो रहा, क्या करें?", answer: "SMS में जो SSO ID आई उसे exactly वैसे टाइप करें जैसे आई है — capitalization सहित। फिर Forgot Password से password reset करें। Reset के बाद भी login न हो तो browser cache clear करें, incognito window में try करें, या Chrome पर switch करें। लगातार problem हो तो helpdesk को 0141-5153222 पर call करें।" },
      ],
    },
    sections: [
      {
        title: { en: "Method 1: SMS recovery (fastest, no internet needed)", hi: "तरीका 1: SMS रिकवरी (सबसे तेज़, इंटरनेट ज़रूरी नहीं)" },
        body: {
          en: [
            "This is the method most people never know about, and it is the one that saves the most time. From the mobile number you registered with, send a text message with the text 'RJ SSO' to 9223166166. Your SSO ID arrives in an SMS reply within seconds.",
            "Two conditions apply. The SMS must come from the exact mobile number registered on your SSO account. And this service works only if you logged into the SSO portal at least once after September 7, 2018. Standard SMS charges from your telecom provider apply. If the reply does not arrive after two minutes, the number you sent from is probably not the one registered on your account.",
          ],
          hi: [
            "यह वह तरीका है जो ज़्यादातर लोगों को पता नहीं होता, और सबसे ज़्यादा समय बचाता है। अपने रजिस्टर्ड मोबाइल नंबर से 'RJ SSO' टेक्स्ट के साथ 9223166166 पर SMS भेजें। SSO ID कुछ ही सेकंड में reply SMS से आ जाती है।",
            "दो शर्तें हैं। SMS उसी मोबाइल नंबर से जाना चाहिए जो SSO अकाउंट पर रजिस्टर्ड है। और यह सेवा तभी काम करती है जब आपने 7 सितंबर 2018 के बाद कम से कम एक बार SSO पोर्टल पर लॉगिन किया हो। आपकी telecom कंपनी के मानक SMS शुल्क लागू होते हैं। दो मिनट बाद भी reply न आए तो जिस नंबर से भेजा वह शायद अकाउंट पर रजिस्टर्ड नहीं है।",
          ],
        },
      },
      {
        title: { en: "Method 2: Recover SSO ID online (portal method)", hi: "तरीका 2: ऑनलाइन SSO ID रिकवर करें (पोर्टल तरीका)" },
        body: {
          en: [
            "If SMS recovery did not work, or you prefer to do it through the browser: open sso.rajasthan.gov.in, click 'I Forgot my Digital Identity (SSOID)' below the login form, select your user category (Citizen, Udyog, or Government Employee), and enter the identity detail that matches how you registered. This could be your Aadhaar number, Jan Aadhaar ID, registered email or Google account, GSTIN, or SIPF number. Complete the CAPTCHA and click Submit.",
            "Your SSO ID appears on screen and is sent to your registered mobile and email. One thing that trips people up: you need to enter the identity you used at registration, not just any number associated with you. If you registered with Jan Aadhaar but enter your Aadhaar number here, the portal will not find your account.",
          ],
          hi: [
            "SMS रिकवरी काम नहीं किया, या ब्राउज़र से करना चाहते हैं तो: sso.rajasthan.gov.in खोलें, लॉगिन फॉर्म के नीचे 'I Forgot my Digital Identity (SSOID)' पर क्लिक करें, अपनी श्रेणी चुनें (Citizen, Udyog, या Government Employee), और रजिस्ट्रेशन के समय उपयोग की पहचान डालें। यह आधार नंबर, जन आधार ID, रजिस्टर्ड ईमेल या Google अकाउंट, GSTIN, या SIPF नंबर हो सकता है। CAPTCHA भरें और Submit करें।",
            "SSO ID स्क्रीन पर दिखती है और रजिस्टर्ड मोबाइल व ईमेल पर भेजी जाती है। एक बात जो लोगों को confuse करती है: आपको वही पहचान डालनी है जो रजिस्ट्रेशन के समय उपयोग की थी। अगर जन आधार से रजिस्टर किया था लेकिन यहाँ आधार नंबर डालते हैं तो पोर्टल अकाउंट नहीं ढूंढ पाएगा।",
          ],
        },
      },
      {
        title: { en: "Method 3: Reset forgotten password", hi: "तरीका 3: भूला हुआ पासवर्ड रीसेट करें" },
        body: {
          en: [
            "Forgetting your password is different from forgetting your SSO ID. Password reset requires you to know your SSO ID or registered email. If you have forgotten both, recover the SSO ID first using Method 1 or 2 above, then come back here.",
            "To reset via mobile OTP: go to sso.rajasthan.gov.in and click 'I Forgot my Password', enter your SSO ID, select the Mobile option, enter your registered mobile number and complete the CAPTCHA. A reset link arrives by SMS. Open it and set a new password. Log in immediately with the new password.",
            "To reset via email: follow the same steps but select Email instead of Mobile. The reset link arrives in your inbox. Use email reset if your mobile has poor signal. The reset link is valid for 30 minutes. Password reset via SMS (no browser needed): send 'RJ SSO PASSWORD' to 9223166166 from your registered mobile. The portal sends a temporary password by return SMS.",
          ],
          hi: [
            "पासवर्ड भूलना और SSO ID भूलना अलग चीज़ है। पासवर्ड रीसेट के लिए आपको SSO ID या रजिस्टर्ड ईमेल पता होना चाहिए। दोनों भूल गए हैं तो पहले ऊपर तरीका 1 या 2 से SSO ID रिकवर करें, फिर यहाँ आएं।",
            "मोबाइल OTP से रीसेट: sso.rajasthan.gov.in खोलें और 'I Forgot my Password' पर क्लिक करें, SSO ID डालें, Mobile option चुनें, रजिस्टर्ड मोबाइल नंबर और CAPTCHA भरें। SMS से reset link आता है। खोलें और नया पासवर्ड सेट करें। नए पासवर्ड से तुरंत login करें।",
            "ईमेल से रीसेट: वही steps करें लेकिन Mobile की जगह Email चुनें। Reset link inbox में आता है। मोबाइल में signal कम हो तो email reset उपयोगी है। Reset link 30 मिनट तक valid रहती है। SMS से पासवर्ड रीसेट (ब्राउज़र नहीं चाहिए): रजिस्टर्ड मोबाइल से 'RJ SSO PASSWORD' को 9223166166 पर भेजें। पोर्टल temporary password reply SMS से भेजता है।",
          ],
        },
      },
      {
        title: { en: "What to do when your registered mobile number has changed", hi: "जब रजिस्टर्ड मोबाइल नंबर बदल गया हो" },
        body: {
          en: [
            "This is the hardest situation and there is no online shortcut for it. If the mobile number you registered with is no longer yours, whether the SIM was deactivated, the number was reassigned, or you simply changed operators, you cannot receive any OTP for online recovery. The SMS method will also not work.",
            "What you need to do: visit your nearest e-Mitra kiosk (any Common Service Centre in Rajasthan works), carry your original Aadhaar card or Jan Aadhaar card, ask the operator to update the registered mobile number on your SSO account. Once updated, return to Method 1 or 2 to complete the recovery.",
            "Do not create a new SSO account while waiting. Your existing account holds your scholarship history, exam application records, and all linked services. A duplicate account linked to the same Aadhaar will cause conflicts and block those services on both accounts.",
          ],
          hi: [
            "यह सबसे मुश्किल स्थिति है और इसका कोई online shortcut नहीं है। अगर रजिस्ट्रेशन वाला मोबाइल नंबर अब आपके पास नहीं है, चाहे SIM बंद हो गई हो, नंबर किसी और को मिल गया हो, या operator बदला हो, तो ऑनलाइन रिकवरी के लिए कोई OTP नहीं मिलेगी। SMS तरीका भी काम नहीं करेगा।",
            "करना यह है: नज़दीकी ई-मित्र कियोस्क जाएं (राजस्थान का कोई भी Common Service Centre चलेगा), मूल आधार कार्ड या जन आधार कार्ड ले जाएं, ऑपरेटर से SSO अकाउंट पर रजिस्टर्ड मोबाइल नंबर update करवाएं। अपडेट होने के बाद तरीका 1 या 2 से रिकवरी पूरी करें।",
            "इंतज़ार में नया SSO अकाउंट मत बनाएं। आपके मौजूदा अकाउंट में स्कॉलरशिप हिस्ट्री, परीक्षा आवेदन रिकॉर्ड और सभी linked सेवाएं हैं। एक ही Aadhaar से जुड़ा duplicate अकाउंट दोनों accounts पर services block करता है।",
          ],
        },
      },
      {
        title: { en: "Account locked after wrong password attempts", hi: "गलत पासवर्ड से अकाउंट लॉक हो गया" },
        body: {
          en: [
            "If you entered the wrong password three or more times, the SSO portal locks the account for 30 minutes automatically. This is a security measure and it cannot be bypassed. Wait the 30 minutes out. Attempting login again during the lock period resets the timer in some cases, so it is better to leave it alone.",
            "After 30 minutes, do not guess again. Use the Forgot Password link to set a known password, then log in with that. Three more wrong guesses will lock the account again.",
          ],
          hi: [
            "अगर तीन या उससे ज़्यादा बार गलत पासवर्ड डाला, तो SSO पोर्टल अकाउंट को 30 मिनट के लिए अपने-आप लॉक कर देता है। यह सुरक्षा उपाय है और bypass नहीं हो सकता। 30 मिनट इंतज़ार करें। लॉक अवधि में दोबारा लॉगिन try करने से कई बार timer reset हो जाता है, इसलिए छोड़ देना बेहतर है।",
            "30 मिनट बाद फिर से अंदाज़ा मत लगाएं। Forgot Password link से पासवर्ड set करें, फिर उससे login करें। तीन और गलत tries अकाउंट को दोबारा लॉक कर देंगी।",
          ],
        },
      },
      {
        title: { en: "Account deactivated vs account locked: what is the difference", hi: "अकाउंट deactivated बनाम account locked: क्या अंतर है" },
        body: {
          en: [
            "People sometimes confuse these two situations. An account is locked temporarily (30 minutes) after multiple failed login attempts. It unlocks on its own and your data is untouched. Use Forgot Password to reset credentials before trying again.",
            "An account is deactivated when you (or someone with access) deliberately chose the Deactivate option in Edit Profile, usually as the first step of a merge process. A deactivated account can be reactivated through the SSO helpdesk if the merge was not completed. Contact them with your Aadhaar details.",
            "Neither situation means your account is deleted. SSO accounts are not deleted. All your data, application history, and linked services remain intact. Recovery only restores your access.",
          ],
          hi: [
            "लोग कभी-कभी इन दो स्थितियों में confuse हो जाते हैं। अकाउंट लॉक अस्थायी रूप से (30 मिनट) कई गलत लॉगिन प्रयासों के बाद होता है। यह अपने-आप खुल जाता है और डेटा को कोई नुकसान नहीं होता। दोबारा try से पहले Forgot Password से credentials reset करें।",
            "अकाउंट deactivated तब होता है जब आपने (या access वाले किसी ने) Edit Profile में Deactivate option जानबूझकर चुना, आमतौर पर merge process के पहले step के रूप में। Deactivated अकाउंट SSO helpdesk के ज़रिए reactivate हो सकता है अगर merge पूरा नहीं हुआ। अपने Aadhaar details के साथ उनसे संपर्क करें।",
            "दोनों में से कोई भी स्थिति का मतलब यह नहीं कि अकाउंट delete हो गया। SSO अकाउंट delete नहीं होते। आपका सारा डेटा, आवेदन हिस्ट्री, और linked सेवाएं intact रहती हैं। रिकवरी बस आपकी access बहाल करती है।",
          ],
        },
      },
      {
        title: { en: "Security tips after recovery", hi: "रिकवरी के बाद सुरक्षा सुझाव" },
        body: {
          en: [
            "Once you recover access, two things are worth doing before closing the browser. First, go to Edit Profile (the pencil icon at the top of your dashboard) and check that your registered mobile number and email are current. An outdated number is what caused the problem in the first place for many people.",
            "Second, change your password to something new if you reset it using a temporary one. A password like your name or date of birth is not secure for an account that holds your Aadhaar-linked data, scholarship records, and salary information.",
          ],
          hi: [
            "Access मिलने के बाद ब्राउज़र बंद करने से पहले दो काम करें। पहला, Edit Profile (डैशबोर्ड के ऊपर pencil icon) में जाकर check करें कि registered mobile नंबर और email current हैं। ज़्यादातर लोगों की problem पुराना नंबर ही था।",
            "दूसरा, अगर temporary password से reset किया है तो पासवर्ड बदलकर कुछ नया रखें। अपने नाम या जन्मतिथि जैसा पासवर्ड उस अकाउंट के लिए safe नहीं जिसमें Aadhaar-linked data, scholarship records, और salary information है।",
          ],
        },
      },
    ],
    tables: [
      {
        title: { en: "Quick reference: what you forgot and the fastest fix", hi: "त्वरित संदर्भ: क्या भूले और सबसे तेज़ हल" },
        cols: { en: ["What you forgot", "Fastest method"], hi: ["क्या भूले", "सबसे तेज़ तरीका"] },
        rows: {
          en: [
            ["SSO ID (username) only", "SMS: send RJ SSO to 9223166166"],
            ["Password only (remember SSO ID)", "Portal: Forgot Password link"],
            ["Both SSO ID and password", "Start with SMS to get SSO ID, then reset password"],
            ["Registered mobile is inactive", "Visit e-Mitra with Aadhaar card"],
          ],
          hi: [
            ["सिर्फ SSO ID (username)", "SMS: RJ SSO भेजें 9223166166 पर"],
            ["सिर्फ पासवर्ड (SSO ID याद है)", "पोर्टल: Forgot Password link"],
            ["दोनों SSO ID और पासवर्ड", "पहले SMS से SSO ID लें, फिर पासवर्ड रीसेट करें"],
            ["रजिस्टर्ड मोबाइल inactive है", "आधार कार्ड लेकर ई-मित्र जाएं"],
          ],
        },
      },
      {
        title: { en: "Recovery methods by registration type", hi: "रजिस्ट्रेशन प्रकार अनुसार रिकवरी तरीके" },
        cols: { en: ["How you registered", "SSO ID recovery options", "Password reset options"], hi: ["कैसे रजिस्टर किया", "SSO ID रिकवरी", "पासवर्ड रीसेट"] },
        rows: {
          en: [
            ["Via Aadhaar", "SMS to 9223166166, or portal using Aadhaar number", "Mobile OTP, email, or SMS password reset"],
            ["Via Jan Aadhaar", "SMS to 9223166166, or portal using Jan Aadhaar ID", "Mobile OTP or SMS password reset"],
            ["Via Google", "Portal using Google account login", "Sign in to Google account (no separate SSO password)"],
            ["Via Facebook", "Portal using Facebook account login", "Sign in to Facebook account"],
            ["Government employee (SIPF)", "Portal using SIPF number", "Contact departmental IT or SIPF helpdesk"],
            ["Udyog (business)", "Portal using GSTIN", "Mobile OTP or email"],
          ],
          hi: [
            ["आधार से", "SMS 9223166166 पर, या पोर्टल पर आधार नंबर से", "मोबाइल OTP, ईमेल, या SMS पासवर्ड रीसेट"],
            ["जन आधार से", "SMS 9223166166 पर, या पोर्टल पर जन आधार ID से", "मोबाइल OTP या SMS पासवर्ड रीसेट"],
            ["Google से", "पोर्टल पर Google account login से", "Google अकाउंट में sign in करें (अलग SSO पासवर्ड नहीं)"],
            ["Facebook से", "पोर्टल पर Facebook account login से", "Facebook अकाउंट में sign in करें"],
            ["सरकारी कर्मचारी (SIPF)", "पोर्टल पर SIPF नंबर से", "विभागीय IT या SIPF helpdesk से संपर्क करें"],
            ["उद्योग (व्यवसाय)", "पोर्टल पर GSTIN से", "मोबाइल OTP या ईमेल"],
          ],
        },
      },
    ],
    lastVerified: "2026-06-18",
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
            "No. Linked services and history move from the account you close to the one you keep. After merging, log in to your primary ID and verify each important service is present.",
        },
        {
          question: "Which SSO ID should I keep as my primary account?",
          answer:
            "Keep the ID that already has your important services linked — recruitment OTR, scholarship records, or your SIPF employee ID. Government employees should always keep the SIPF-based ID.",
        },
        {
          question: "Why can't I just keep both SSO IDs?",
          answer:
            "Your Aadhaar can be linked to only one SSO ID. Having duplicates can block scholarship and recruitment applications and cause OTP confusion, so merging into one is necessary.",
        },
        {
          question: "Does 'Deactivate Account' delete my data?",
          answer:
            "No. Despite the name, the Deactivate Account option opens the merge dialogue. Your data is transferred to your primary ID rather than deleted.",
        },
        {
          question: "Can a merge be undone?",
          answer:
            "Merging permanently closes the secondary ID, so it cannot be easily reversed. Confirm which account to keep before you start, and contact the SSO helpdesk on 0141-5153222 if you are unsure.",
        },
      ],
      hi: [
        {
          question: "मर्ज करने पर क्या मेरा डेटा खो जाएगा?",
          answer:
            "नहीं। लिंक सेवाएं और हिस्ट्री बंद की जाने वाली आईडी से रखी जाने वाली आईडी में आ जाती हैं। मर्ज के बाद अपनी प्राथमिक आईडी से लॉगिन कर हर महत्वपूर्ण सेवा की मौजूदगी जांच लें।",
        },
        {
          question: "कौन-सी एसएसओ आईडी प्राथमिक अकाउंट के रूप में रखूं?",
          answer:
            "वह आईडी रखें जिसमें आपकी महत्वपूर्ण सेवाएं पहले से लिंक हैं — भर्ती OTR, छात्रवृत्ति रिकॉर्ड, या आपकी SIPF कर्मचारी आईडी। सरकारी कर्मचारियों को हमेशा SIPF-आधारित आईडी रखनी चाहिए।",
        },
        {
          question: "मैं दोनों एसएसओ आईडी क्यों नहीं रख सकता?",
          answer:
            "आपका आधार केवल एक एसएसओ आईडी से लिंक हो सकता है। डुप्लिकेट होने से छात्रवृत्ति व भर्ती आवेदन रुक सकते हैं और ओटीपी भ्रम होता है, इसलिए एक में मर्ज करना ज़रूरी है।",
        },
        {
          question: "क्या 'Deactivate Account' मेरा डेटा हटा देता है?",
          answer:
            "नहीं। नाम के बावजूद Deactivate Account विकल्प मर्ज डायलॉग खोलता है। आपका डेटा हटाया नहीं जाता, बल्कि आपकी प्राथमिक आईडी में स्थानांतरित होता है।",
        },
        {
          question: "क्या मर्ज वापस किया जा सकता है?",
          answer:
            "मर्ज सेकेंडरी आईडी को स्थायी रूप से बंद कर देता है, इसलिए इसे आसानी से वापस नहीं किया जा सकता। शुरू करने से पहले तय करें कि कौन-सा अकाउंट रखना है, और अनिश्चित हों तो एसएसओ हेल्पडेस्क 0141-5153222 पर संपर्क करें।",
        },
      ],
    },
    sections: [
      {
        title: {
          en: "Why duplicate SSO IDs are a problem",
          hi: "डुप्लिकेट एसएसओ आईडी समस्या क्यों हैं",
        },
        body: {
          en: [
            "It is easy to end up with two SSO IDs without realising it — for example, registering once with a Google account and again later with Jan Aadhaar because you forgot the first one existed. The portal allows the accounts to be created, but it ties your Aadhaar to only one of them, and that mismatch causes real trouble later.",
            "Duplicates most often surface at the worst moment: a scholarship form rejects your Aadhaar because it is linked elsewhere, or a recruitment OTR cannot verify your identity. Merging combines everything into a single account so your records, services, and Aadhaar all point to one ID, ending the conflict for good.",
          ],
          hi: [
            "बिना एहसास के दो एसएसओ आईडी हो जाना आसान है — जैसे एक बार Google अकाउंट से रजिस्टर करना और बाद में जन आधार से, क्योंकि पहली का होना याद नहीं रहा। पोर्टल अकाउंट बनने देता है, पर आपका आधार उनमें से केवल एक से जुड़ता है, और यह बेमेल बाद में असली परेशानी देता है।",
            "डुप्लिकेट अक्सर सबसे बुरे समय पर सामने आते हैं: छात्रवृत्ति फॉर्म आपका आधार अस्वीकार करता है क्योंकि वह कहीं और लिंक है, या भर्ती OTR आपकी पहचान सत्यापित नहीं कर पाता। मर्ज सब कुछ एक अकाउंट में मिला देता है ताकि आपके रिकॉर्ड, सेवाएं और आधार सभी एक आईडी की ओर इंगित करें, और टकराव हमेशा के लिए समाप्त हो।",
          ],
        },
      },
      {
        title: {
          en: "Decide which account to keep first",
          hi: "पहले तय करें कि कौन-सा अकाउंट रखना है",
        },
        body: {
          en: [
            "Before you merge anything, log in to both accounts and check what each one holds. Keep the ID that already carries your important services — recruitment OTR, scholarship applications, or linked bank and Jan Aadhaar details. The account you keep becomes your permanent primary ID, so this choice matters.",
            "Government employees have a clear rule: always keep the SIPF-based employee SSO ID as the primary one, because it connects PayManager, RajKaj, and your service records. The merge process closes the other account, so confirm your decision before you begin rather than midway through.",
          ],
          hi: [
            "कुछ भी मर्ज करने से पहले दोनों अकाउंट में लॉगिन कर जांचें कि हर एक में क्या है। वह आईडी रखें जिसमें आपकी महत्वपूर्ण सेवाएं पहले से हैं — भर्ती OTR, छात्रवृत्ति आवेदन, या लिंक बैंक व जन आधार विवरण। जो अकाउंट आप रखते हैं वह आपकी स्थायी प्राथमिक आईडी बन जाता है, इसलिए यह चुनाव मायने रखता है।",
            "सरकारी कर्मचारियों के लिए स्पष्ट नियम है: हमेशा SIPF-आधारित कर्मचारी एसएसओ आईडी को प्राथमिक रखें, क्योंकि यह PayManager, RajKaj और आपके सेवा रिकॉर्ड से जुड़ी है। मर्ज प्रक्रिया दूसरे अकाउंट को बंद कर देती है, इसलिए बीच में नहीं, शुरू करने से पहले अपना निर्णय पक्का करें।",
          ],
        },
      },
      {
        title: {
          en: "After the merge: verify everything moved",
          hi: "मर्ज के बाद: जांचें कि सब कुछ स्थानांतरित हुआ",
        },
        body: {
          en: [
            "Once you confirm the merge, the linked services and history from the secondary account transfer to your primary SSO ID, and the duplicate is permanently closed. Log in to your primary ID and open each important service — recruitment, scholarships, e-Mitra — to confirm it now appears there.",
            "Keeping only one active SSO ID removes the OTP confusion of having two accounts and ensures future applications verify cleanly against your Aadhaar. If a service does not appear after merging or you hit an error, contact the SSO helpdesk on 0141-5153222 or email helpdesk.sso@rajasthan.gov.in for help.",
          ],
          hi: [
            "मर्ज की पुष्टि करते ही सेकेंडरी अकाउंट की लिंक सेवाएं और हिस्ट्री आपकी प्राथमिक एसएसओ आईडी में स्थानांतरित हो जाती हैं, और डुप्लिकेट स्थायी रूप से बंद हो जाता है। अपनी प्राथमिक आईडी से लॉगिन करें और हर महत्वपूर्ण सेवा — भर्ती, छात्रवृत्ति, ई-मित्र — खोलकर पुष्टि करें कि अब वह वहां दिखती है।",
            "केवल एक सक्रिय एसएसओ आईडी रखने से दो अकाउंट के ओटीपी भ्रम समाप्त होते हैं और भविष्य के आवेदन आपके आधार के विरुद्ध साफ़-साफ़ सत्यापित होते हैं। यदि मर्ज के बाद कोई सेवा न दिखे या एरर आए, तो मदद के लिए एसएसओ हेल्पडेस्क 0141-5153222 पर कॉल करें या helpdesk.sso@rajasthan.gov.in पर ईमेल करें।",
          ],
        },
      },
    ],
    tables: [
      {
        title: {
          en: "Which SSO ID should be your primary account?",
          hi: "कौन-सी एसएसओ आईडी आपकी प्राथमिक होनी चाहिए?",
        },
        cols: {
          en: ["If you are a…", "Keep this ID as primary", "Why"],
          hi: ["यदि आप हैं…", "इसे प्राथमिक रखें", "क्यों"],
        },
        rows: {
          en: [
            ["Government employee", "SIPF-based employee ID", "Links PayManager, RajKaj, service records"],
            ["Student / job seeker", "ID with recruitment OTR or scholarship", "Keeps exam and scholarship history"],
            ["General citizen", "ID linked to Jan Aadhaar", "Keeps Aadhaar and benefits aligned"],
          ],
          hi: [
            ["सरकारी कर्मचारी", "SIPF-आधारित कर्मचारी आईडी", "PayManager, RajKaj, सेवा रिकॉर्ड से जुड़ी"],
            ["छात्र / नौकरी आवेदक", "भर्ती OTR या छात्रवृत्ति वाली आईडी", "परीक्षा व छात्रवृत्ति हिस्ट्री रखती है"],
            ["आम नागरिक", "जन आधार से लिंक आईडी", "आधार व लाभ संरेखित रखती है"],
          ],
        },
      },
    ],
    lastVerified: "2026-06-18",
  },
  {
    slug: "sso-id-helpdesk",
    title: {
      en: "SSO ID Helpdesk & Customer Care Number — Rajasthan 2026",
      hi: "एसएसओ आईडी हेल्पडेस्क और कस्टमर केयर नंबर — राजस्थान 2026",
    },
    metaTitle: {
      en: "SSO ID Helpdesk & Customer Care Number Rajasthan 2026",
      hi: "एसएसओ आईडी हेल्पडेस्क और कस्टमर केयर नंबर राजस्थान 2026",
    },
    metaDescription: {
      en: "Official RajSSO helpdesk and customer care contacts: call 0141-5153222 or email helpdesk.sso@rajasthan.gov.in (Mon-Fri, 10 AM to 6 PM). Support numbers, Jan Aadhaar toll-free, grievance 181, and how to avoid fake SSO customer care numbers.",
      hi: "आधिकारिक RajSSO हेल्पडेस्क और कस्टमर केयर संपर्क: 0141-5153222 पर कॉल करें या helpdesk.sso@rajasthan.gov.in पर ईमेल करें (सोम-शुक्र, सुबह 10 से शाम 6)। हेल्पलाइन नंबर, जन आधार टोल-फ्री, शिकायत 181, और नकली एसएसओ कस्टमर केयर नंबरों से बचाव।",
    },
    intro: {
      en: "If your SSO login or account is genuinely stuck, the official help route is the Rajasthan SSO helpdesk on 0141-5153222 or helpdesk.sso@rajasthan.gov.in. Before you call, though, most problems have a faster self-service fix. This page lists the real, official contacts and shows the quickest ways to solve common issues yourself.",
      hi: "अगर आपका एसएसओ लॉगिन या अकाउंट सचमुच अटक गया है, तो आधिकारिक मदद का रास्ता है राजस्थान एसएसओ हेल्पडेस्क — 0141-5153222 या helpdesk.sso@rajasthan.gov.in। पर कॉल करने से पहले, ज़्यादातर समस्याओं का तेज़ स्व-समाधान मौजूद है। यह पेज असली, आधिकारिक संपर्क और सामान्य समस्याओं को खुद हल करने के सबसे तेज़ तरीके बताता है।",
    },
    body: {
      en: [
        "The Rajasthan SSO helpdesk is the government's own support line for the portal at sso.rajasthan.gov.in. You can reach it on 0141-5153222 or by email at helpdesk.sso@rajasthan.gov.in, Monday to Friday between 10 AM and 6 PM. It is free, and it is the only official phone support for SSO login and account issues.",
        "Most people searching for an SSO ID customer care number actually have a problem they can fix in a minute. A forgotten SSO ID comes back by SMS if you send RJ SSO to 9223166166 from your registered mobile. A forgotten password resets from the 'I Forgot my Password' link on the login page. A locked account clears on its own after about 30 minutes. Try those first. The helpdesk is worth calling when none of them work, for example when your registered mobile number has changed and no OTP reaches you.",
        "Be careful which number you trust. There is no private SSO customer care company. Search results, YouTube comments, and social media are full of fake helpline numbers that ask you to share your password or OTP, or to pay a fee to unlock your account. No real government support agent ever asks for your password or OTP. Use only the official numbers on this page, and if a call feels off, hang up.",
        "RajSSO Guide is an independent guide, not a call centre and not affiliated with the government. We do not run a helpdesk and never ask for your SSO ID, password, or OTP. This page simply gathers the official contacts and the fastest self-service options so you can get unstuck without waiting on hold.",
      ],
      hi: [
        "राजस्थान एसएसओ हेल्पडेस्क sso.rajasthan.gov.in पोर्टल के लिए सरकार की अपनी सहायता लाइन है। इसे 0141-5153222 पर या helpdesk.sso@rajasthan.gov.in पर ईमेल से, सोमवार से शुक्रवार सुबह 10 से शाम 6 बजे तक संपर्क किया जा सकता है। यह निःशुल्क है और एसएसओ लॉगिन व अकाउंट समस्याओं के लिए एकमात्र आधिकारिक फोन सहायता है।",
        "एसएसओ आईडी कस्टमर केयर नंबर खोजने वाले ज़्यादातर लोगों की समस्या एक मिनट में खुद हल हो सकती है। भूली हुई एसएसओ आईडी तब वापस आ जाती है जब आप रजिस्टर्ड मोबाइल से RJ SSO को 9223166166 पर भेजते हैं। भूला हुआ पासवर्ड लॉगिन पेज पर 'I Forgot my Password' लिंक से रीसेट होता है। लॉक हुआ अकाउंट लगभग 30 मिनट में अपने आप खुल जाता है। पहले यही आज़माएं। हेल्पडेस्क तब उपयोगी है जब इनमें से कुछ काम न करे, जैसे जब रजिस्टर्ड मोबाइल नंबर बदल गया हो और कोई ओटीपी न पहुँचे।",
        "किस नंबर पर भरोसा करें, इसमें सावधान रहें। कोई निजी एसएसओ कस्टमर केयर कंपनी नहीं है। सर्च रिज़ल्ट, यूट्यूब कमेंट और सोशल मीडिया नकली हेल्पलाइन नंबरों से भरे हैं जो आपसे पासवर्ड या ओटीपी साझा करने, या अकाउंट अनलॉक के नाम पर शुल्क माँगते हैं। कोई असली सरकारी सहायता कर्मी कभी पासवर्ड या ओटीपी नहीं माँगता। केवल इस पेज पर दिए आधिकारिक नंबर उपयोग करें, और कॉल संदेहजनक लगे तो काट दें।",
        "RajSSO Guide एक स्वतंत्र गाइड है, न कोई कॉल सेंटर और न सरकार से संबद्ध। हम हेल्पडेस्क नहीं चलाते और कभी आपकी एसएसओ आईडी, पासवर्ड या ओटीपी नहीं माँगते। यह पेज केवल आधिकारिक संपर्क और सबसे तेज़ स्व-समाधान एक जगह रखता है ताकि आप बिना इंतज़ार के समस्या सुलझा सकें।",
      ],
    },
    sections: [
      {
        title: {
          en: "When to call the helpdesk, and when e-Mitra is faster",
          hi: "हेल्पडेस्क कब कॉल करें, और ई-मित्र कब तेज़ है",
        },
        body: {
          en: [
            "Phone and email support suit questions the portal cannot answer on its own: an account that stays locked, a service that will not open, or confusion about which login method your account uses. Keep your SSO ID and registered mobile number ready when you call so the agent can help faster.",
            "For anything that needs your identity verified in person, a nearby e-Mitra centre is usually quicker than the phone. Changing a registered mobile number you no longer control, or finishing Jan Aadhaar e-KYC, are the common examples. Carry your Aadhaar or Jan Aadhaar card, and the operator can update the record on the spot.",
          ],
          hi: [
            "फोन और ईमेल सहायता उन सवालों के लिए ठीक है जिन्हें पोर्टल खुद हल नहीं कर सकता: लगातार लॉक रहने वाला अकाउंट, न खुलने वाली सेवा, या यह उलझन कि आपका अकाउंट कौन सा लॉगिन तरीका उपयोग करता है। कॉल करते समय अपनी एसएसओ आईडी और रजिस्टर्ड मोबाइल नंबर तैयार रखें ताकि सहायता तेज़ मिले।",
            "जिस काम में व्यक्तिगत पहचान सत्यापन ज़रूरी है, उसके लिए नज़दीकी ई-मित्र केंद्र आमतौर पर फोन से तेज़ होता है। ऐसा रजिस्टर्ड मोबाइल नंबर बदलना जो अब आपके पास नहीं, या जन आधार ई-केवाईसी पूरा करना, इसके सामान्य उदाहरण हैं। अपना आधार या जन आधार कार्ड साथ ले जाएं, संचालक रिकॉर्ड वहीं अपडेट कर देगा।",
          ],
        },
      },
      {
        title: {
          en: "Fake SSO customer care numbers: how to stay safe",
          hi: "नकली एसएसओ कस्टमर केयर नंबर: सुरक्षित कैसे रहें",
        },
        body: {
          en: [
            "Treat your SSO login like a bank password. Official recovery is always free, and no genuine helpdesk agent will ask for your password, OTP, or a payment to unlock your account.",
            "Reach the portal by typing sso.rajasthan.gov.in yourself rather than clicking an ad or a forwarded link, and use only the official numbers listed below. If someone calls claiming to be SSO support and asks for an OTP, it is a scam. Hang up.",
          ],
          hi: [
            "अपने एसएसओ लॉगिन को बैंक पासवर्ड की तरह समझें। आधिकारिक रिकवरी हमेशा मुफ़्त है, और कोई असली हेल्पडेस्क कर्मी आपका पासवर्ड, ओटीपी या अकाउंट अनलॉक के लिए भुगतान नहीं माँगेगा।",
            "किसी विज्ञापन या फॉरवर्ड लिंक पर क्लिक करने के बजाय sso.rajasthan.gov.in खुद टाइप करके पोर्टल खोलें, और केवल नीचे दिए आधिकारिक नंबर उपयोग करें। कोई एसएसओ सपोर्ट होने का दावा कर ओटीपी माँगे तो यह धोखा है। कॉल काट दें।",
          ],
        },
      },
    ],
    tables: [
      {
        title: {
          en: "Official SSO helpline & support contacts",
          hi: "आधिकारिक एसएसओ हेल्पलाइन और सहायता संपर्क",
        },
        cols: {
          en: ["Purpose", "Contact"],
          hi: ["उद्देश्य", "संपर्क"],
        },
        rows: {
          en: [
            ["SSO login & account help", "0141-5153222"],
            ["Alternate helplines", "0141-2925554 / 0141-5123717"],
            ["Email support", "helpdesk.sso@rajasthan.gov.in"],
            ["Jan Aadhaar toll-free", "1800-180-6127"],
            ["Grievance / Rajasthan Sampark", "181"],
            ["Support hours", "Monday to Friday, 10 AM to 6 PM"],
          ],
          hi: [
            ["एसएसओ लॉगिन व अकाउंट सहायता", "0141-5153222"],
            ["वैकल्पिक हेल्पलाइन", "0141-2925554 / 0141-5123717"],
            ["ईमेल सहायता", "helpdesk.sso@rajasthan.gov.in"],
            ["जन आधार टोल-फ्री", "1800-180-6127"],
            ["शिकायत / राजस्थान संपर्क", "181"],
            ["सहायता समय", "सोमवार से शुक्रवार, सुबह 10 से शाम 6"],
          ],
        },
      },
    ],
    steps: {
      en: [
        { name: "Try the self-service fix first", text: "For a forgotten ID, SMS RJ SSO to 9223166166; for a password, use 'I Forgot my Password'; for a locked account, wait 30 minutes." },
        { name: "Keep your details ready", text: "Note your SSO ID and registered mobile number before you contact support." },
        { name: "Call or email the helpdesk", text: "Call 0141-5153222 or email helpdesk.sso@rajasthan.gov.in, Monday to Friday, 10 AM to 6 PM." },
        { name: "Use e-Mitra for identity changes", text: "If your registered mobile changed, visit an e-Mitra centre with your Aadhaar to update it." },
        { name: "Escalate a grievance", text: "If an issue stays unresolved, raise it with Rajasthan Sampark on 181." },
      ],
      hi: [
        { name: "पहले स्व-समाधान आज़माएं", text: "भूली आईडी के लिए RJ SSO को 9223166166 पर SMS करें; पासवर्ड के लिए 'I Forgot my Password' उपयोग करें; लॉक अकाउंट के लिए 30 मिनट रुकें।" },
        { name: "अपना विवरण तैयार रखें", text: "सहायता से संपर्क से पहले अपनी एसएसओ आईडी और रजिस्टर्ड मोबाइल नंबर नोट कर लें।" },
        { name: "हेल्पडेस्क को कॉल या ईमेल करें", text: "0141-5153222 पर कॉल करें या helpdesk.sso@rajasthan.gov.in पर ईमेल करें, सोम-शुक्र सुबह 10 से शाम 6।" },
        { name: "पहचान बदलाव के लिए ई-मित्र", text: "रजिस्टर्ड मोबाइल बदल गया हो तो आधार के साथ ई-मित्र केंद्र जाकर अपडेट कराएं।" },
        { name: "शिकायत आगे बढ़ाएं", text: "समस्या न सुलझे तो राजस्थान संपर्क 181 पर शिकायत दर्ज करें।" },
      ],
    },
    faqs: {
      en: [
        { question: "What is the SSO ID helpdesk number?", answer: "The official Rajasthan SSO helpdesk number is 0141-5153222. You can also email helpdesk.sso@rajasthan.gov.in. Support is available Monday to Friday, 10 AM to 6 PM." },
        { question: "Is there an SSO ID customer care number?", answer: "There is no separate private customer care line. The government's own SSO helpdesk (0141-5153222, helpdesk.sso@rajasthan.gov.in) is the official support. Be wary of any other 'customer care' number, especially ones that ask for your password, OTP, or a fee." },
        { question: "What are the SSO helpdesk timings?", answer: "The SSO helpdesk operates Monday to Friday, from 10 AM to 6 PM. It is closed on government holidays. Email support at helpdesk.sso@rajasthan.gov.in can be used any time, with replies during working hours." },
        { question: "Can the helpdesk recover my SSO ID or password?", answer: "The helpdesk guides you, but the fastest recovery is self-service: SMS RJ SSO to 9223166166 for a forgotten ID, or use the 'I Forgot my Password' link. If your registered mobile number has changed, an e-Mitra centre can update it with your Aadhaar." },
        { question: "Will the SSO helpdesk ever ask for my password or OTP?", answer: "No. No genuine government helpdesk asks for your password or OTP. Anyone who does is running a scam. Official recovery is always free, so never pay to 'unlock' an account." },
        { question: "Who do I contact for Jan Aadhaar problems?", answer: "For Jan Aadhaar enrolment or update issues, call the Jan Aadhaar toll-free number 1800-180-6127, or visit an e-Mitra centre with your Aadhaar. Jan Aadhaar issues are separate from the SSO login helpdesk." },
        { question: "How do I file a grievance if my issue is not resolved?", answer: "If the helpdesk cannot resolve your problem, raise a grievance with Rajasthan Sampark by dialling 181. Keep a note of your SSO ID and what you have already tried." },
      ],
      hi: [
        { question: "एसएसओ आईडी हेल्पडेस्क नंबर क्या है?", answer: "आधिकारिक राजस्थान एसएसओ हेल्पडेस्क नंबर 0141-5153222 है। आप helpdesk.sso@rajasthan.gov.in पर ईमेल भी कर सकते हैं। सहायता सोमवार से शुक्रवार, सुबह 10 से शाम 6 बजे तक उपलब्ध है।" },
        { question: "क्या कोई एसएसओ आईडी कस्टमर केयर नंबर है?", answer: "कोई अलग निजी कस्टमर केयर लाइन नहीं है। सरकार का अपना एसएसओ हेल्पडेस्क (0141-5153222, helpdesk.sso@rajasthan.gov.in) ही आधिकारिक सहायता है। किसी और 'कस्टमर केयर' नंबर से सावधान रहें, खासकर जो पासवर्ड, ओटीपी या शुल्क माँगे।" },
        { question: "एसएसओ हेल्पडेस्क का समय क्या है?", answer: "एसएसओ हेल्पडेस्क सोमवार से शुक्रवार, सुबह 10 से शाम 6 बजे तक काम करता है। सरकारी अवकाश पर बंद रहता है। helpdesk.sso@rajasthan.gov.in पर ईमेल कभी भी भेज सकते हैं, जवाब कार्य समय में मिलता है।" },
        { question: "क्या हेल्पडेस्क मेरी एसएसओ आईडी या पासवर्ड रिकवर कर सकता है?", answer: "हेल्पडेस्क मार्गदर्शन करता है, पर सबसे तेज़ रिकवरी स्व-सेवा है: भूली आईडी के लिए RJ SSO को 9223166166 पर SMS करें, या 'I Forgot my Password' लिंक उपयोग करें। रजिस्टर्ड मोबाइल बदल गया हो तो ई-मित्र केंद्र आधार से अपडेट कर सकता है।" },
        { question: "क्या एसएसओ हेल्पडेस्क कभी मेरा पासवर्ड या ओटीपी माँगेगा?", answer: "नहीं। कोई असली सरकारी हेल्पडेस्क पासवर्ड या ओटीपी नहीं माँगता। जो माँगे वह धोखा है। आधिकारिक रिकवरी हमेशा मुफ़्त है, इसलिए अकाउंट 'अनलॉक' के नाम पर कभी भुगतान न करें।" },
        { question: "जन आधार समस्याओं के लिए किससे संपर्क करूँ?", answer: "जन आधार नामांकन या अपडेट समस्या के लिए टोल-फ्री नंबर 1800-180-6127 पर कॉल करें, या आधार के साथ ई-मित्र केंद्र जाएं। जन आधार समस्याएं एसएसओ लॉगिन हेल्पडेस्क से अलग हैं।" },
        { question: "समस्या न सुलझे तो शिकायत कैसे दर्ज करें?", answer: "हेल्पडेस्क समस्या हल न कर पाए तो राजस्थान संपर्क पर 181 डायल कर शिकायत दर्ज करें। अपनी एसएसओ आईडी और अब तक किए प्रयास नोट रखें।" },
      ],
    },
    lastVerified: "2026-07-08",
  },
  {
    slug: "sso-id-portal",
    title: {
      en: "SSO ID Portal Rajasthan 2026 — Services, Dashboard & Access Guide",
      hi: "एसएसओ आईडी पोर्टल राजस्थान 2026 — सेवाएं, डैशबोर्ड और एक्सेस गाइड",
    },
    metaTitle: {
      en: "SSO ID Portal Rajasthan 2026 — What It Is & How to Use It",
      hi: "एसएसओ आईडी पोर्टल राजस्थान 2026 — यह क्या है और कैसे उपयोग करें",
    },
    metaDescription: {
      en: "What the Rajasthan SSO ID portal (sso.rajasthan.gov.in) is, the services on your dashboard, how to access it with one login, the mobile app, and safety tips. Independent guide, updated 2026.",
      hi: "राजस्थान एसएसओ आईडी पोर्टल (sso.rajasthan.gov.in) क्या है, आपके डैशबोर्ड की सेवाएं, एक लॉगिन से एक्सेस कैसे करें, मोबाइल ऐप और सुरक्षा सुझाव। स्वतंत्र गाइड, 2026 अपडेटेड।",
    },
    intro: {
      en: "The SSO ID portal is Rajasthan's single front door to online government. One account at sso.rajasthan.gov.in opens more than 100 services, from scholarships and exam forms to salary slips and electricity bills. This guide explains what the portal is, what sits on your dashboard, and how to get into it.",
      hi: "एसएसओ आईडी पोर्टल राजस्थान की ऑनलाइन सरकार का एकमात्र दरवाज़ा है। sso.rajasthan.gov.in पर एक खाता 100 से अधिक सेवाएं खोलता है — छात्रवृत्ति और परीक्षा फॉर्म से लेकर सैलरी स्लिप और बिजली बिल तक। यह गाइड बताती है कि पोर्टल क्या है, आपके डैशबोर्ड पर क्या होता है, और उसमें कैसे पहुँचें।",
    },
    body: {
      en: [
        "The SSO ID portal is the Rajasthan government's Single Sign-On system, run by the Department of Information Technology and Communication (DoIT&C). It has been live since 2013. The idea behind it is simple: instead of a separate username and password for every department, you get one identity that works everywhere. Log in once at sso.rajasthan.gov.in and you can move between scholarships, recruitment, e-Mitra, PayManager, Jan Aadhaar, and dozens of other services without signing in again.",
        "Once you are inside, the portal shows a dashboard of app tiles. Each tile is a government service you are entitled to use, grouped loosely by who you are. A student sees scholarship and recruitment tiles, a government employee sees PayManager and RajKaj, and a business owner sees GST and licensing tiles. If a service you expect is missing, it usually means your account has not been linked to it yet, which is normal for department-specific tools like PayManager.",
        "Three kinds of people use the portal the most: ordinary citizens who register with Jan Aadhaar or Aadhaar, government employees who register through SIPF, and business owners who register with a Udyog Aadhaar or business registration number. Whichever group you fall into, the portal itself is the same. Only the tiles on your dashboard differ, based on the records tied to your account.",
        "The portal is free to use, and creating an account costs nothing. It is worth being clear about what this page is: RajSSO Guide is an independent guide, not the government and not the portal. We explain how the portal works and link to the official site, but every real login, registration, and payment happens on sso.rajasthan.gov.in itself. We never ask for your SSO ID, password, or OTP.",
      ],
      hi: [
        "एसएसओ आईडी पोर्टल राजस्थान सरकार का सिंगल साइन-ऑन सिस्टम है, जिसे सूचना प्रौद्योगिकी एवं संचार विभाग (DoIT&C) चलाता है। यह 2013 से चालू है। इसके पीछे विचार सरल है: हर विभाग के लिए अलग यूज़रनेम और पासवर्ड के बजाय, आपको एक ही पहचान मिलती है जो हर जगह काम करती है। sso.rajasthan.gov.in पर एक बार लॉगिन करें और छात्रवृत्ति, भर्ती, ई-मित्र, PayManager, जन आधार और दर्जनों अन्य सेवाओं के बीच बिना दोबारा साइन-इन किए जा सकते हैं।",
        "अंदर पहुँचते ही पोर्टल ऐप टाइल्स का एक डैशबोर्ड दिखाता है। हर टाइल एक सरकारी सेवा है जिसका उपयोग आप कर सकते हैं, मोटे तौर पर इस आधार पर समूहित कि आप कौन हैं। छात्र को छात्रवृत्ति और भर्ती टाइल्स दिखती हैं, सरकारी कर्मचारी को PayManager और RajKaj, और व्यवसायी को GST व लाइसेंसिंग टाइल्स। कोई अपेक्षित सेवा न दिखे तो आमतौर पर इसका मतलब है कि आपका खाता उससे अभी लिंक नहीं हुआ, जो PayManager जैसे विभाग-विशिष्ट टूल्स के लिए सामान्य है।",
        "पोर्टल का सबसे ज़्यादा उपयोग तीन तरह के लोग करते हैं: आम नागरिक जो जन आधार या आधार से रजिस्टर करते हैं, सरकारी कर्मचारी जो SIPF से रजिस्टर करते हैं, और व्यवसायी जो उद्योग आधार या व्यवसाय रजिस्ट्रेशन नंबर से। आप किसी भी समूह में हों, पोर्टल एक ही रहता है। केवल डैशबोर्ड की टाइल्स बदलती हैं, आपके खाते से जुड़े रिकॉर्ड के आधार पर।",
        "पोर्टल का उपयोग मुफ़्त है, और खाता बनाने का कोई शुल्क नहीं। यह साफ़ रखना ज़रूरी है कि यह पेज क्या है: RajSSO Guide एक स्वतंत्र गाइड है, न सरकार और न पोर्टल। हम बताते हैं कि पोर्टल कैसे काम करता है और आधिकारिक साइट से लिंक करते हैं, पर हर असली लॉगिन, रजिस्ट्रेशन और भुगतान sso.rajasthan.gov.in पर ही होता है। हम कभी आपकी एसएसओ आईडी, पासवर्ड या ओटीपी नहीं माँगते।",
      ],
    },
    sections: [
      {
        title: {
          en: "How to access the SSO ID portal",
          hi: "एसएसओ आईडी पोर्टल कैसे एक्सेस करें",
        },
        body: {
          en: [
            "If you already have an account, open sso.rajasthan.gov.in, enter your SSO ID and password, type the captcha, and you land on your dashboard. If you registered through Jan Aadhaar or Google, those buttons on the login screen work too. For the full walk-through of login problems, see our SSO login guide.",
            "If you do not have an account yet, the same portal has a Registration option. Citizens can register with Jan Aadhaar or Aadhaar, government employees with their SIPF details, and businesses with a Udyog Aadhaar or business registration number. Registration is free and takes a few minutes; the username you choose becomes your permanent SSO ID.",
          ],
          hi: [
            "अगर आपके पास पहले से खाता है, तो sso.rajasthan.gov.in खोलें, अपनी एसएसओ आईडी और पासवर्ड डालें, कैप्चा भरें, और आप अपने डैशबोर्ड पर पहुँच जाते हैं। जन आधार या Google से रजिस्टर किया हो तो लॉगिन स्क्रीन पर वे बटन भी काम करते हैं। लॉगिन समस्याओं की पूरी जानकारी के लिए हमारी एसएसओ लॉगिन गाइड देखें।",
            "अगर अभी खाता नहीं है, तो उसी पोर्टल पर Registration विकल्प है। नागरिक जन आधार या आधार से, सरकारी कर्मचारी अपने SIPF विवरण से, और व्यवसायी उद्योग आधार या व्यवसाय रजिस्ट्रेशन नंबर से रजिस्टर कर सकते हैं। रजिस्ट्रेशन मुफ़्त है और कुछ मिनट लेता है; आपका चुना यूज़रनेम ही स्थायी एसएसओ आईडी बनता है।",
          ],
        },
      },
      {
        title: {
          en: "The SSO Rajasthan mobile app",
          hi: "एसएसओ राजस्थान मोबाइल ऐप",
        },
        body: {
          en: [
            "There is an official SSO Rajasthan app on Android and iOS that mirrors most of the portal. It is handy for quick logins, checking your dashboard, and receiving OTPs on the same phone. For everyday tasks the app is fine.",
            "For heavier work, such as filling a scholarship form, completing OTR for a recruitment, or uploading documents, the desktop browser is more reliable. The mobile upload screens can time out on a slow connection, and a half-finished form is more frustrating than a two-minute wait at a computer.",
          ],
          hi: [
            "Android और iOS पर एक आधिकारिक एसएसओ राजस्थान ऐप है जो पोर्टल के अधिकांश हिस्से को दर्शाता है। यह त्वरित लॉगिन, डैशबोर्ड देखने और उसी फोन पर ओटीपी पाने के लिए उपयोगी है। रोज़मर्रा के कामों के लिए ऐप ठीक है।",
            "भारी काम के लिए, जैसे छात्रवृत्ति फॉर्म भरना, भर्ती के लिए OTR पूरा करना, या दस्तावेज़ अपलोड करना, डेस्कटॉप ब्राउज़र ज़्यादा भरोसेमंद है। मोबाइल अपलोड स्क्रीन धीमे कनेक्शन पर टाइम आउट हो सकती हैं, और आधा-अधूरा फॉर्म कंप्यूटर पर दो मिनट के इंतज़ार से ज़्यादा परेशान करता है।",
          ],
        },
      },
      {
        title: {
          en: "Staying safe on the SSO portal",
          hi: "एसएसओ पोर्टल पर सुरक्षित रहना",
        },
        body: {
          en: [
            "The single most useful habit is to type sso.rajasthan.gov.in yourself and bookmark it, rather than clicking an ad or a forwarded link. Many look-alike websites copy the government design to collect logins. The real portal is the only place you should ever enter your SSO password.",
            "No genuine helpline, e-Mitra operator, or support agent will ask for your password or OTP. Recovery is always free, so never pay anyone to unlock or fix your account. If you ever get stuck, the official SSO helpdesk is on 0141-5153222, and our SSO helpdesk page lists the other official contacts.",
          ],
          hi: [
            "सबसे उपयोगी आदत है sso.rajasthan.gov.in खुद टाइप करके बुकमार्क करना, न कि किसी विज्ञापन या फॉरवर्ड लिंक पर क्लिक करना। कई मिलती-जुलती वेबसाइटें लॉगिन इकट्ठा करने के लिए सरकारी डिज़ाइन की नकल करती हैं। असली पोर्टल ही एकमात्र जगह है जहाँ आपको अपना एसएसओ पासवर्ड डालना चाहिए।",
            "कोई असली हेल्पलाइन, ई-मित्र संचालक या सपोर्ट कर्मी आपका पासवर्ड या ओटीपी नहीं माँगेगा। रिकवरी हमेशा मुफ़्त है, इसलिए अकाउंट अनलॉक या ठीक करने के नाम पर किसी को भुगतान न करें। कभी अटक जाएं तो आधिकारिक एसएसओ हेल्पडेस्क 0141-5153222 पर है, और हमारी एसएसओ हेल्पडेस्क पेज अन्य आधिकारिक संपर्क सूचीबद्ध करती है।",
          ],
        },
      },
    ],
    tables: [
      {
        title: {
          en: "What you can do on the SSO ID portal",
          hi: "एसएसओ आईडी पोर्टल पर आप क्या कर सकते हैं",
        },
        cols: {
          en: ["Category", "Examples of services"],
          hi: ["श्रेणी", "सेवाओं के उदाहरण"],
        },
        rows: {
          en: [
            ["Students & job seekers", "Recruitment Portal (OTR), RPSC & RSMSSB forms, SJE scholarships"],
            ["General citizens", "e-Mitra bill payments, Jan Aadhaar, Chiranjeevi, certificates"],
            ["Government employees", "PayManager salary slips, RajKaj, SIPF, GA-55"],
            ["Business owners", "State GST, BPAS building approvals, Udyog Aadhaar, labour compliance"],
          ],
          hi: [
            ["छात्र व नौकरी आवेदक", "भर्ती पोर्टल (OTR), RPSC व RSMSSB फॉर्म, SJE छात्रवृत्ति"],
            ["आम नागरिक", "ई-मित्र बिल भुगतान, जन आधार, चिरंजीवी, प्रमाण पत्र"],
            ["सरकारी कर्मचारी", "PayManager सैलरी स्लिप, RajKaj, SIPF, GA-55"],
            ["व्यवसायी", "स्टेट GST, BPAS भवन स्वीकृति, उद्योग आधार, श्रम अनुपालन"],
          ],
        },
      },
    ],
    steps: {
      en: [
        { name: "Open the portal", text: "Type sso.rajasthan.gov.in in your browser and bookmark it." },
        { name: "Log in or register", text: "Enter your SSO ID and password, or use the Registration option if you are new." },
        { name: "Open your dashboard", text: "After the captcha, you land on your dashboard of service tiles." },
        { name: "Find a service", text: "Use the search box on the dashboard to find a tile such as PayManager or Scholarship." },
        { name: "Use the service", text: "Click the tile to open that service without logging in again." },
      ],
      hi: [
        { name: "पोर्टल खोलें", text: "ब्राउज़र में sso.rajasthan.gov.in टाइप करें और बुकमार्क करें।" },
        { name: "लॉगिन या रजिस्टर करें", text: "अपनी एसएसओ आईडी और पासवर्ड डालें, या नए हैं तो Registration विकल्प उपयोग करें।" },
        { name: "डैशबोर्ड खोलें", text: "कैप्चा के बाद आप सेवा टाइल्स के डैशबोर्ड पर पहुँच जाते हैं।" },
        { name: "सेवा ढूंढें", text: "डैशबोर्ड के सर्च बॉक्स से PayManager या Scholarship जैसी टाइल ढूंढें।" },
        { name: "सेवा उपयोग करें", text: "दोबारा लॉगिन किए बिना उस सेवा को खोलने के लिए टाइल पर क्लिक करें।" },
      ],
    },
    faqs: {
      en: [
        { question: "What is the SSO ID portal?", answer: "The SSO ID portal is the Rajasthan government's Single Sign-On website at sso.rajasthan.gov.in. It lets residents, government employees, and businesses use one login to reach more than 100 state government services, from scholarships and exams to salary slips and bill payments. It has been run by the Department of IT & Communication (DoIT&C) since 2013." },
        { question: "What is the SSO ID portal address?", answer: "The official Rajasthan SSO portal address is sso.rajasthan.gov.in. This is the only legitimate login URL. Type it yourself and avoid look-alike sites that copy the government design to steal logins." },
        { question: "Is the SSO ID portal free to use?", answer: "Yes. Creating an SSO ID and using the portal are completely free. Some services accessed through it, such as OTR exam registration, have their own fees set by the respective departments, but the portal and account cost nothing." },
        { question: "What services are available on the SSO portal?", answer: "Over 100 services, grouped by user type: recruitment (OTR), RPSC and RSMSSB exams, and SJE scholarships for students; e-Mitra, Jan Aadhaar, and Chiranjeevi for citizens; PayManager, RajKaj, and SIPF for employees; and GST, BPAS, and Udyog Aadhaar for businesses." },
        { question: "Why is a service tile missing from my dashboard?", answer: "A missing tile usually means your account has not been linked to that service yet. This is common for department-specific tools like PayManager, where your DDO links your Employee ID to your SSO account. Contact the relevant department to get it added." },
        { question: "Is there an SSO portal mobile app?", answer: "Yes, the official SSO Rajasthan app is on Android and iOS and covers most portal functions. It is good for quick logins and OTPs. For filling forms or uploading documents, the desktop browser is more reliable." },
        { question: "Is RajSSO Guide the official SSO portal?", answer: "No. RajSSO Guide is an independent guide that explains how the portal works. The official portal is sso.rajasthan.gov.in, and all real logins and transactions happen there. We never ask for your SSO ID, password, or OTP." },
      ],
      hi: [
        { question: "एसएसओ आईडी पोर्टल क्या है?", answer: "एसएसओ आईडी पोर्टल राजस्थान सरकार की सिंगल साइन-ऑन वेबसाइट sso.rajasthan.gov.in है। यह निवासियों, सरकारी कर्मचारियों और व्यवसायों को एक लॉगिन से 100 से अधिक राज्य सेवाओं तक पहुँच देती है — छात्रवृत्ति व परीक्षा से लेकर सैलरी स्लिप व बिल भुगतान तक। इसे 2013 से सूचना प्रौद्योगिकी एवं संचार विभाग (DoIT&C) चलाता है।" },
        { question: "एसएसओ आईडी पोर्टल का पता क्या है?", answer: "आधिकारिक राजस्थान एसएसओ पोर्टल का पता sso.rajasthan.gov.in है। यही एकमात्र वैध लॉगिन URL है। इसे खुद टाइप करें और लॉगिन चुराने के लिए सरकारी डिज़ाइन की नकल करने वाली मिलती-जुलती साइटों से बचें।" },
        { question: "क्या एसएसओ आईडी पोर्टल उपयोग करना मुफ़्त है?", answer: "हाँ। एसएसओ आईडी बनाना और पोर्टल उपयोग करना पूरी तरह मुफ़्त है। इसके ज़रिए ली जाने वाली कुछ सेवाओं, जैसे OTR परीक्षा रजिस्ट्रेशन, के अपने शुल्क संबंधित विभाग तय करते हैं, पर पोर्टल और खाता निःशुल्क हैं।" },
        { question: "एसएसओ पोर्टल पर कौन सी सेवाएं उपलब्ध हैं?", answer: "100 से अधिक सेवाएं, उपयोगकर्ता अनुसार समूहित: छात्रों के लिए भर्ती (OTR), RPSC व RSMSSB परीक्षाएं, और SJE छात्रवृत्ति; नागरिकों के लिए ई-मित्र, जन आधार व चिरंजीवी; कर्मचारियों के लिए PayManager, RajKaj व SIPF; और व्यवसायों के लिए GST, BPAS व उद्योग आधार।" },
        { question: "मेरे डैशबोर्ड से कोई सेवा टाइल क्यों गायब है?", answer: "गायब टाइल का आमतौर पर मतलब है कि आपका खाता उस सेवा से अभी लिंक नहीं हुआ। यह PayManager जैसे विभाग-विशिष्ट टूल्स के लिए सामान्य है, जहाँ आपका DDO आपकी Employee ID को एसएसओ खाते से लिंक करता है। जुड़वाने के लिए संबंधित विभाग से संपर्क करें।" },
        { question: "क्या एसएसओ पोर्टल का मोबाइल ऐप है?", answer: "हाँ, आधिकारिक एसएसओ राजस्थान ऐप Android और iOS पर है और अधिकांश पोर्टल फंक्शन कवर करता है। यह त्वरित लॉगिन और ओटीपी के लिए अच्छा है। फॉर्म भरने या दस्तावेज़ अपलोड के लिए डेस्कटॉप ब्राउज़र ज़्यादा भरोसेमंद है।" },
        { question: "क्या RajSSO Guide आधिकारिक एसएसओ पोर्टल है?", answer: "नहीं। RajSSO Guide एक स्वतंत्र गाइड है जो बताती है कि पोर्टल कैसे काम करता है। आधिकारिक पोर्टल sso.rajasthan.gov.in है, और सभी असली लॉगिन व लेनदेन वहीं होते हैं। हम कभी आपकी एसएसओ आईडी, पासवर्ड या ओटीपी नहीं माँगते।" },
      ],
    },
    lastVerified: "2026-07-08",
  },
];

export const getGuide = (slug: string) => guides.find((g) => g.slug === slug);
