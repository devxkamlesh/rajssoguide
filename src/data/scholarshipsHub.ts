// Rich, long-form content for the scholarships hub page, keyed by locale.
// When a locale has an entry, the hub page renders this full guide; locales
// without an entry fall back to the simpler intro + card grid + FAQ.
import type { Locale } from "@/lib/i18n";
import type { FaqItem, HowToStep } from "@/lib/schema";

export type HubBlock =
  | { type: "section"; title: string; body: string[] }
  | { type: "steps"; title: string; steps: HowToStep[] }
  | { type: "list"; title: string; intro?: string; items: string[]; note?: string }
  | { type: "table"; title: string; cols: string[]; rows: string[][] };

export interface HubContent {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  warning: { title: string; body: string };
  portalNote: string;
  lastVerified: string;
  blocks: HubBlock[];
  faqs: FaqItem[];
}

export const scholarshipsHub: Partial<Record<Locale, HubContent>> = {
  en: {
    metaTitle:
      "Rajasthan Scholarship 2026 — Apply Online via SSO, Eligibility & Status Check",
    metaDescription:
      "Rajasthan scholarship 2026 apply online via SSO ID — SJE post-matric, Anuprati coaching, Kali Bai Bhil scooty, CM Higher Education. Eligibility, documents, income limits, status check, and why applications get rejected. Updated June 2026.",
    h1: "Rajasthan Scholarship 2026 — Apply Online, Eligibility & Status Check via SSO",
    intro: [
      "Post-Matric Scholarship applications for the 2025-26 academic session are currently open, with the deadline extended to June 30, 2026 through the official SJE portal. If you have not applied yet and you are eligible, that window is closing.",
      "Rajasthan runs several scholarship schemes for students from SC, ST, OBC, EBC, EWS, and Minority categories — and a few open to all girls regardless of category. All of them run through your SSO ID. This guide covers every major scheme, the income limits that actually apply, what documents to prepare before you open the form, and the one step most students miss that gets their application stuck for months.",
    ],
    warning: {
      title: "Before you start: complete Jan Aadhaar e-KYC first",
      body: "Without a completed Jan Aadhaar e-KYC, your application will be rejected at the verification stage. Do this before opening any scholarship form. It is free, takes five minutes, and is done through your SSO ID dashboard on the Jan Aadhaar portal. Applications submitted without it are rejected — not pending, rejected.",
    },
    portalNote: "sje.rajasthan.gov.in",
    lastVerified: "2026-06-18",
    blocks: [
      {
        type: "section",
        title: "Three things you need before you open the form",
        body: [
          "Applying for Rajasthan Scholarship 2026 requires three active accounts: an SSO ID, a Jan Aadhaar profile, and a verified bank account linked to both.",
          "SSO ID: you cannot apply without one. Registration is free at sso.rajasthan.gov.in and takes under five minutes with your Aadhaar or Jan Aadhaar.",
          "Jan Aadhaar with completed e-KYC: your family income, category, and member details are verified against this. If your Jan Aadhaar records are outdated — wrong income, old address, incorrect member details — fix them at an e-Mitra kiosk before applying.",
          "Bank account in your own name: the scholarship is disbursed directly into students' bank accounts via Direct Benefit Transfer (DBT). If the account is in a parent's name, the transfer may fail. Minors can use a joint account with a parent, but confirm with your institution's scholarship coordinator first.",
        ],
      },
      {
        type: "list",
        title: "The 8 documents to prepare before you start",
        intro:
          "Collect all 8 documents before opening the form. The portal has a time limit on sessions, and scrambling for documents mid-form causes people to lose their progress.",
        items: [
          "Caste or category certificate (SC/ST/OBC/EBC/EWS — issued by Tehsildar or SDM, not older than 3 years)",
          "Income certificate (fresh, issued by Tehsildar or SDM — certificates older than 3 years are not accepted)",
          "Domicile certificate (permanent resident of Rajasthan)",
          "Jan Aadhaar card",
          "Aadhaar card",
          "Bank passbook — first page showing account number, IFSC code, and your name",
          "Fee receipt or enrollment certificate from your institution",
          "Latest marksheet",
        ],
        note: "Scan quality matters. The portal rejects blurry or cut-off images. Use a scanner app on your phone in good light, clear enough to read every detail.",
      },
      {
        type: "section",
        title: "SJE Post-Matric Scholarship (most applied-for scheme)",
        body: [
          "The annual family income should not exceed ₹2.5 lakh for SC/ST candidates and ₹1 lakh for OBC/EBC/DNT candidates.",
          "Who can apply: SC, ST, OBC, SBC, EBC, and DNT students studying in Class 11 and above, including degree, postgraduate, and professional courses.",
          "What it covers: tuition fee reimbursement, examination fees, and a maintenance allowance. The exact amount depends on your course level and whether you live in a hostel or at home.",
          "Portal: sje.rajasthan.gov.in (accessed through the SSO dashboard, not the HTE portal). The application window is typically September to November each year. Missing the window means waiting an entire year, so set a reminder to check sso.rajasthan.gov.in in September 2026.",
        ],
      },
      {
        type: "section",
        title: "CM Higher Education Scholarship (EWS students)",
        body: [
          "For students from Economically Weaker Sections (EWS) pursuing higher education. Income limit: family income below ₹2.5 lakh per year.",
          "Portal: the HTE portal (hte.rajasthan.gov.in) via the SSO dashboard, not the SJE portal. This is where most EWS students go wrong — they look for this scheme on SJE and cannot find it. CM Higher Education and Kali Bai Bhil Scooty are both under the HTE portal, not SJE.",
        ],
      },
      {
        type: "section",
        title: "Mukhyamantri Anuprati Coaching Yojana (coaching fee reimbursement)",
        body: [
          "This is the most valuable scheme for students preparing for competitive exams. It reimburses coaching fees up to ₹75,000 per year for students from SC, ST, OBC, MBC, EWS, and Minority categories preparing for UPSC (IAS/IFS), RAS, REET, SI, Constable, NEET, JEE, CLAT, and other notified exams.",
          "Eligibility: family income below ₹8 lakh per year, and a last exam score of 60% or above. Selection is merit-based, district-wise and category-wise. There is no separate entrance exam — the Social Justice and Empowerment Department selects students purely on a merit list prepared from board exam percentages.",
          "A student can receive free coaching under the Anuprati Yojana only once in their lifetime, for a maximum period of one year. If you study in a city different from your home district, you can claim accommodation support — submit a rent agreement or hostel fee receipt and the amount transfers to your bank via DBT.",
        ],
      },
      {
        type: "section",
        title: "Kali Bai Bhil Medhavi Chhatra Scooty Yojana (scooty for girl students)",
        body: [
          "This scheme is open to girls from all categories, including General, which makes it unique among Rajasthan scholarship schemes. What you get: a free electric or petrol scooty plus ₹20,000 cash for transport support.",
          "Eligibility: girls only; RBSE students need at least 65% marks in Class 12, while CBSE/ICSE students need at least 75%; total annual family income from all sources must not exceed ₹2.5 lakh; and you must be enrolled as a regular student in a recognized undergraduate program in Rajasthan.",
          "Portal: the HTE portal (hte.rajasthan.gov.in), not SJE. Applications are online only, with no offline option.",
        ],
      },
      {
        type: "section",
        title: "Chief Minister Sarvjan Scholarship Scheme (CMSS)",
        body: [
          "CMSS offers ₹500 per month (₹5,000 annually) to EWS students and ₹1,000 per month (₹10,000 annually) to disabled students for up to five years. Eligibility includes 60% marks and income below ₹2.5 lakh annually.",
          "This scheme is for students in recognized institutions under the Department of Higher Education, Rajasthan, regardless of caste or community background — one of the few schemes open to General category students.",
        ],
      },
      {
        type: "section",
        title: "Minority Scholarship",
        body: [
          "For students from Muslim, Christian, Sikh, Buddhist, Jain, and Zoroastrian communities. Income limit varies by level: pre-matric below ₹1 lakh, post-matric below ₹2 lakh.",
          "Most scholarships for minorities above Class 10 run through the National Scholarship Portal (scholarships.gov.in), not the SJE portal. Check which portal your institution is registered with before applying. You cannot apply for both central (NSP) and state scholarship — duplicate benefits are not permitted. Apply on whichever portal your institution is registered with.",
        ],
      },
      {
        type: "steps",
        title: "How to apply — step by step",
        steps: [
          { name: "Log in to SSO", text: "Log in to sso.rajasthan.gov.in with your SSO ID and password." },
          { name: "Open the right portal tile", text: "Find the Scholarship (SJE) tile for SC/ST/OBC/EBC schemes, or the HTE tile for CM Higher Education and Kali Bai Bhil Scooty." },
          { name: "Register as a student", text: "Open the scholarship portal. If applying for the first time, click 'New Registration' and select 'Student'." },
          { name: "Check auto-filled details", text: "Your Aadhaar and Jan Aadhaar details auto-populate. Check them against your actual documents." },
          { name: "Fill course and bank details", text: "Fill in course details, institution name, and bank account information." },
          { name: "Upload all 8 documents", text: "Upload scanned copies of all 8 documents listed above." },
          { name: "Review and submit", text: "Review every detail before clicking Submit — once submitted, most fields lock. Note your application number immediately." },
          { name: "Follow up for institute verification", text: "Your school or college principal must verify and forward the application on the SJE portal. Follow up within 7 days, because without institute verification the application stays pending and is never processed." },
        ],
      },
      {
        type: "section",
        title: "The one step most students miss",
        body: [
          "This is the single most important thing on this entire page. Most students assume submitting the form means the job is done. It does not. The institute has to verify and forward it.",
          "If your college's scholarship coordinator is slow or forgets, your application sits permanently in 'Submitted' status and never gets processed. Go to the office, ask for confirmation in writing, and follow up again if you do not see the status change within two weeks.",
        ],
      },
      {
        type: "steps",
        title: "How to check your scholarship application status",
        steps: [
          { name: "Log in to your SSO ID", text: "Sign in at sso.rajasthan.gov.in." },
          { name: "Open the SJE Scholarship portal", text: "Open the scholarship portal from your dashboard." },
          { name: "Find Application Status", text: "Look for 'Application Status' or 'Enrolment Status'." },
          { name: "Enter your details", text: "Enter your application number and required details to see the current stage." },
        ],
      },
      {
        type: "table",
        title: "What each status means",
        cols: ["Status", "What it means", "What to do"],
        rows: [
          ["Submitted", "Form received, waiting for institute", "Follow up with your college scholarship coordinator"],
          ["Institute Verified", "College has forwarded it", "Wait for district verification (allow 15–30 days)"],
          ["Objection Raised", "A document or detail needs correction", "Log in and fix the flagged issue before the deadline"],
          ["Rejected", "Application not approved", "Check the reason code and reapply if the correction window is open"],
          ["Approved", "Amount sanctioned", "Wait for DBT transfer (30–90 days)"],
          ["Disbursed", "Money sent to your bank", "Check your account; allow 7–10 working days to reflect"],
        ],
      },
      {
        type: "list",
        title: "Why applications get rejected — and how to avoid it",
        intro:
          "Missing the institute verification step is the top reason applications do not get processed. But there are six more reasons that come up regularly:",
        items: [
          "Jan Aadhaar e-KYC not completed — checked at verification; rejection happens even if every other document is perfect. Complete it before applying.",
          "Income certificate expired or from the wrong authority — must be issued by a Tehsildar or SDM and not older than 3 years. Certificates from sarpanches or ward members are not valid.",
          "Bank account not in the student's name — DBT only works to a student's own account; a parent's account causes transfer failure that shows as Approved but never arrives.",
          "Applying for both NSP and state scholarship — flagged at verification. Choose one, based on which portal your institution is registered with.",
          "Blurry or incomplete document uploads — the portal flags documents where details are not readable. Re-upload with better scans.",
          "Duplicate application — only one application per student per scheme is allowed; a second submission under the same SSO ID is auto-rejected.",
        ],
      },
      {
        type: "section",
        title: "After approval — when does the money come?",
        body: [
          "Approved amounts are transferred directly to your Aadhaar-linked bank account via Direct Benefit Transfer (DBT). Processing takes 30 to 90 days after final approval.",
          "If it has been more than 90 days since your status shows Approved and no money has arrived: check pfms.nic.in → Know Your Payment to confirm whether a transfer was initiated, verify the bank account number in your application was correct, check that your bank account is linked to your Aadhaar (Aadhaar seeding) and get it done at your bank if not, and contact your District Welfare Officer (DWO) if none of that resolves it.",
          "Scholarship amounts are tax-free. Educational scholarships are exempt under Income Tax Act Section 10(16).",
        ],
      },
      {
        type: "section",
        title: "Renewal applications",
        body: [
          "If you received a scholarship last year and are continuing your course, you need to renew, not apply fresh. Renewal applications are simpler: most of your details carry over and you mainly need to upload current-year documents (fee receipt, current-year marksheet, and updated enrollment certificate).",
          "Log in to the same portal, select 'Renewal' instead of 'New Application', verify your carried-over details, update the fresh documents, and submit before the renewal deadline. One mistake to avoid: logging in and selecting 'New Application' when you should be renewing. This creates a duplicate and causes a rejection.",
        ],
      },
      {
        type: "table",
        title: "Scholarship helpline",
        cols: ["Contact", "Details"],
        rows: [
          ["SJE Scholarship Helpline", "1800-180-6127 (toll free)"],
          ["SJE Email", "helpdesk.scholarship@rajasthan.gov.in"],
          ["SJMS Support", "support.sje@rajasthan.gov.in"],
          ["SJMS Phone", "0141-2226638 (Mon–Fri, 9:30 AM – 6:00 PM)"],
          ["Official SJE Portal", "sje.rajasthan.gov.in"],
          ["HTE Portal", "hte.rajasthan.gov.in"],
        ],
      },
    ],
    faqs: [
      { question: "How do I apply for Rajasthan scholarship 2026 online?", answer: "Log in to sso.rajasthan.gov.in with your SSO ID. Open the Scholarship (SJE) tile for SC/ST/OBC/EBC schemes, or the HTE tile for CM Higher Education and Kali Bai Bhil Scooty. Select New Registration, choose Student, fill your details, upload documents, and submit. After submission, follow up with your college within 7 days to ensure institute verification is completed." },
      { question: "What is the income limit for Rajasthan post-matric scholarship?", answer: "For SC and ST students, the annual family income limit is ₹2.5 lakh. For OBC, EBC, and DNT students, the limit is ₹1 lakh. For the Anuprati Coaching Yojana, the limit is ₹8 lakh. For CMSS and Kali Bai Bhil Scooty, it is ₹2.5 lakh. Always use an income certificate issued by a Tehsildar or SDM." },
      { question: "Is Jan Aadhaar compulsory for Rajasthan scholarship?", answer: "Yes. Jan Aadhaar is mandatory for OTR completion and DBT bank linkage. Applications without a completed Jan Aadhaar e-KYC are rejected at the verification stage. Complete e-KYC through your SSO ID on the Jan Aadhaar portal before you open the scholarship form." },
      { question: "What is the last date for Rajasthan post-matric scholarship 2026?", answer: "The deadline for Post-Matric Scholarship applications for the 2025-26 session was extended to June 30, 2026. For the 2026-27 session, the application window typically opens in September. Check sje.rajasthan.gov.in for official dates as deadlines change each year." },
      { question: "Why is my Rajasthan scholarship application stuck in Submitted status?", answer: "Your college has not completed institute verification yet. After you submit the form, your institution's scholarship coordinator must verify and forward it on the SJE portal. Without this step, the application does not move forward. Go to your college office, confirm they have received the application, and follow up to ensure they forward it within 7 days." },
      { question: "How do I check Rajasthan scholarship status?", answer: "Log in to your SSO ID and open the SJE portal from your dashboard. Click Application Status, enter your application number, and view the current stage. The status flow is Submitted → Institute Verified → District Verified → State Verified → Approved → Disbursed. To verify DBT payment, check pfms.nic.in with your bank account number." },
      { question: "Can I apply for both the NSP and the Rajasthan state scholarship?", answer: "No. Duplicate scholarship benefits across central and state portals are not permitted. Apply on the portal your institution is registered with. If your college is on the National Scholarship Portal (scholarships.gov.in), apply there. If it is on the Rajasthan state portal, apply there." },
      { question: "What is the Anuprati Coaching Yojana?", answer: "The Mukhyamantri Anuprati Coaching Yojana reimburses coaching fees up to ₹75,000 per year for students from SC, ST, OBC, MBC, EWS, and Minority categories preparing for competitive exams including UPSC, RAS, NEET, JEE, and CLAT. Income limit is ₹8 lakh per year. Selection is merit-based from board exam scores. The benefit can be used only once in a lifetime." },
      { question: "What is the Kali Bai Bhil Scooty Yojana and who can apply?", answer: "The Kali Bai Bhil Medhavi Chhatra Scooty Yojana gives girl students a free scooty and ₹20,000 cash. It is open to girls from all categories including General. RBSE students need 65% in Class 12; CBSE/ICSE students need 75%. Annual family income must be below ₹2.5 lakh. Applications go through the HTE portal, not SJE." },
      { question: "How long does it take for the scholarship money to reach my bank after approval?", answer: "DBT transfer takes 30 to 90 days after final state-level approval. If no payment arrives after 90 days, check pfms.nic.in with your bank account number. If no transfer record exists, contact your District Welfare Officer with your application number." },
      { question: "Can I apply for Rajasthan scholarship without an SSO ID?", answer: "No. The SSO ID is the mandatory gateway for all SJE and HTE scholarship applications. Register for free at sso.rajasthan.gov.in before starting any application." },
    ],
  },
  hi: {
    metaTitle:
      "राजस्थान छात्रवृत्ति 2026 — SSO से ऑनलाइन आवेदन, पात्रता और स्टेटस चेक",
    metaDescription:
      "राजस्थान छात्रवृत्ति 2026 SSO ID से ऑनलाइन आवेदन — SJE पोस्ट मैट्रिक, अनुप्रति coaching, कालीबाई भील scooty, CM उच्च शिक्षा। पात्रता, documents, आय सीमा, स्टेटस चेक, और rejection के कारण। June 2026 अपडेटेड।",
    h1: "राजस्थान छात्रवृत्ति 2026 — SSO से ऑनलाइन आवेदन, पात्रता और स्टेटस चेक",
    intro: [
      "2025-26 सत्र की पोस्ट मैट्रिक छात्रवृत्ति के आवेदन अभी चल रहे हैं। आधिकारिक SJE portal पर last date बढ़ाकर 30 June 2026 की गई है। अगर आवेदन नहीं किया और पात्र हैं तो अब करें — यह window बंद होने वाली है।",
      "राजस्थान में SC, ST, OBC, EBC, EWS, और Minority categories के students के लिए कई scholarship schemes हैं — और कुछ schemes सभी categories की लड़कियों के लिए खुली हैं। सबमें SSO ID से आवेदन होता है। यह गाइड हर बड़ी scheme, उसकी आय सीमा, आवेदन से पहले कौन से documents तैयार रखने हैं, और वह एक step जो ज़्यादातर students miss करते हैं और application महीनों तक अटकी रहती है — सब बताती है।",
    ],
    warning: {
      title: "आवेदन से पहले: Jan Aadhaar e-KYC पूरी करें",
      body: "Jan Aadhaar e-KYC complete किए बिना application verification stage पर reject होती है। Scholarship form खोलने से पहले यह करें। यह free है, पाँच मिनट में होता है, और SSO ID dashboard से Jan Aadhaar portal पर जाकर होता है। बिना e-KYC के submit की गई applications pending नहीं होतीं — reject होती हैं।",
    },
    portalNote: "sje.rajasthan.gov.in",
    lastVerified: "2026-06-18",
    blocks: [
      {
        type: "section",
        title: "Form खोलने से पहले तीन चीज़ें तैयार रखें",
        body: [
          "राजस्थान छात्रवृत्ति 2026 के लिए तीन active accounts चाहिए: SSO ID, Jan Aadhaar profile, और दोनों से linked verified bank account।",
          "SSO ID: इसके बिना आवेदन नहीं होता। sso.rajasthan.gov.in पर free registration है — Aadhaar या Jan Aadhaar से पाँच मिनट में हो जाता है।",
          "Jan Aadhaar और completed e-KYC: परिवार की आय, category, और सदस्यों की जानकारी इसी से verify होती है। Jan Aadhaar records में पुरानी आय, गलत address, या गलत details हैं तो आवेदन से पहले e-Mitra kiosk जाकर update करवाएं।",
          "अपने नाम का bank account: छात्रवृत्ति DBT (Direct Benefit Transfer) से सीधे student के bank account में आती है। Parents के नाम का account होने पर transfer fail हो सकता है। नाबालिग हैं तो parent के साथ joint account काम कर सकता है — लेकिन पहले अपने college के scholarship coordinator से confirm करें।",
        ],
      },
      {
        type: "list",
        title: "आवेदन से पहले ये 8 documents तैयार करें",
        intro:
          "Form खोलने से पहले सभी 8 documents इकट्ठे कर लें। Portal पर session का time limit होता है — बीच में documents ढूंढते रहे तो progress चली जाती है।",
        items: [
          "जाति या category प्रमाण पत्र (SC/ST/OBC/EBC/EWS — Tehsildar या SDM से जारी, 3 साल से पुराना नहीं)",
          "आय प्रमाण पत्र (fresh, Tehsildar या SDM से — 3 साल से पुराना accepted नहीं)",
          "मूल निवास प्रमाण पत्र (राजस्थान का स्थायी निवासी)",
          "Jan Aadhaar card",
          "Aadhaar card",
          "Bank passbook — पहला page जिसमें account number, IFSC code, और नाम साफ दिखे",
          "विद्यालय या महाविद्यालय से fee receipt या enrollment certificate",
          "नवीनतम marksheet",
        ],
        note: "Scan quality का ध्यान रखें। Portal धुंधली या कटी-छंटी images reject करता है। अच्छी रोशनी में phone के scanner app से scan करें ताकि हर detail साफ पढ़ी जा सके।",
      },
      {
        type: "section",
        title: "SJE पोस्ट मैट्रिक छात्रवृत्ति (सबसे ज़्यादा apply होने वाली scheme)",
        body: [
          "SC और ST students के लिए वार्षिक पारिवारिक आय ₹2.5 लाख से अधिक नहीं होनी चाहिए। OBC, EBC, और DNT students के लिए यह सीमा ₹1 लाख है।",
          "कौन apply कर सकता है: SC, ST, OBC, SBC, EBC, और DNT category के students जो Class 11 और उससे ऊपर पढ़ रहे हैं — degree, postgraduate, और professional courses सहित।",
          "क्या मिलता है: tuition fee reimbursement, examination fees, और maintenance allowance। राशि course level और hostel या घर से पढ़ाई के हिसाब से अलग-अलग होती है।",
          "Portal: sje.rajasthan.gov.in — SSO dashboard से access होता है, HTE portal से नहीं। Application window हर साल आमतौर पर September से November के बीच होती है। Window miss होने पर पूरे साल इंतज़ार करना पड़ता है, इसलिए September 2026 में sso.rajasthan.gov.in check करने का reminder अभी set करें।",
        ],
      },
      {
        type: "section",
        title: "CM उच्च शिक्षा छात्रवृत्ति (EWS students के लिए)",
        body: [
          "आर्थिक रूप से कमज़ोर वर्ग (EWS) के उच्च शिक्षा में पढ़ रहे students के लिए। आय सीमा: वार्षिक पारिवारिक आय ₹2.5 लाख से कम।",
          "Portal: HTE portal (hte.rajasthan.gov.in) — SSO dashboard से access होता है, SJE portal से नहीं। यहीं ज़्यादातर EWS students गलती करते हैं — SJE portal पर scheme ढूंढते रहते हैं जो वहाँ है ही नहीं। CM Higher Education और Kali Bai Bhil Scooty दोनों HTE portal पर हैं, SJE पर नहीं।",
        ],
      },
      {
        type: "section",
        title: "मुख्यमंत्री अनुप्रति coaching योजना (coaching fees reimbursement)",
        body: [
          "Competitive exams की तैयारी करने वाले students के लिए यह सबसे valuable scheme है। SC, ST, OBC, MBC, EWS, और Minority category के students को UPSC (IAS/IFS), RAS, REET, SI, Constable, NEET, JEE, CLAT और अन्य notified exams की coaching fees ₹75,000 प्रति वर्ष तक reimbursed होती हैं।",
          "पात्रता: वार्षिक पारिवारिक आय ₹8 लाख से कम, और पिछली परीक्षा में 60% या उससे अधिक अंक। Selection merit-based है, district-wise और category-wise। अलग से entrance exam नहीं होती — Social Justice and Empowerment Department board exam percentages के आधार पर merit list बनाती है।",
          "अनुप्रति योजना का coaching benefit जीवन में सिर्फ एक बार, अधिकतम एक साल के लिए मिलता है। घर के ज़िले से अलग शहर में coaching करते हैं तो accommodation support claim कर सकते हैं — rent agreement या hostel fee receipt जमा करें, राशि DBT से bank account में आएगी।",
        ],
      },
      {
        type: "section",
        title: "कालीबाई भील मेधावी छात्रा scooty योजना (छात्राओं के लिए scooty)",
        body: [
          "यह scheme राजस्थान की सभी scholarship schemes में खास है क्योंकि यह General category की छात्राओं के लिए भी खुली है। क्या मिलता है: मुफ्त electric या petrol scooty और transport support के लिए ₹20,000 cash।",
          "पात्रता: सिर्फ छात्राएं; RBSE students को Class 12 में कम से कम 65% अंक चाहिए, CBSE/ICSE students को कम से कम 75%; सभी स्रोतों से वार्षिक पारिवारिक आय ₹2.5 लाख से अधिक नहीं; और राजस्थान के किसी recognized undergraduate program में regular student के रूप में enrolled होना ज़रूरी है।",
          "Portal: HTE portal (hte.rajasthan.gov.in), SJE नहीं। आवेदन सिर्फ online है, कोई offline option नहीं।",
        ],
      },
      {
        type: "section",
        title: "मुख्यमंत्री सर्वजन उच्च शिक्षा छात्रवृत्ति योजना (CMSS)",
        body: [
          "CMSS EWS students को ₹500 प्रति माह (₹5,000 सालाना) और divyang students को ₹1,000 प्रति माह (₹10,000 सालाना) — पाँच साल तक देती है। 60% अंक और ₹2.5 लाख से कम आय ज़रूरी है।",
          "यह scheme जाति या समुदाय के बावजूद सभी students के लिए है जो राजस्थान के Department of Higher Education के अंतर्गत किसी recognized institution में पढ़ रहे हैं — General category के students भी इसमें आते हैं।",
        ],
      },
      {
        type: "section",
        title: "Minority छात्रवृत्ति",
        body: [
          "Muslim, Christian, Sikh, Buddhist, Jain, और Zoroastrian communities के students के लिए। आय सीमा level के हिसाब से अलग है: pre-matric ₹1 लाख से कम, post-matric ₹2 लाख से कम।",
          "Class 10 के बाद की ज़्यादातर minority scholarships National Scholarship Portal (scholarships.gov.in) से होती हैं, SJE portal से नहीं। आवेदन से पहले यह confirm करें कि आपका institution किस portal पर registered है। Central (NSP) और State scholarship दोनों के लिए एक साथ आवेदन नहीं कर सकते — जिस portal पर institution registered है, वहीं apply करें।",
        ],
      },
      {
        type: "steps",
        title: "आवेदन कैसे करें — step by step",
        steps: [
          { name: "SSO पर login करें", text: "SSO ID और password से sso.rajasthan.gov.in पर login करें।" },
          { name: "सही portal tile खोलें", text: "SC/ST/OBC/EBC schemes के लिए Scholarship (SJE) tile, या CM Higher Education और Kali Bai Bhil Scooty के लिए HTE tile ढूंढें।" },
          { name: "Student registration करें", text: "Scholarship portal खोलें। पहली बार apply कर रहे हैं तो 'New Registration' click करें और 'Student' select करें।" },
          { name: "Auto-fill details check करें", text: "Aadhaar और Jan Aadhaar details auto-fill होती हैं। इन्हें अपने actual documents से verify करें।" },
          { name: "Course और bank details भरें", text: "Course details, institution का नाम, और bank account information भरें।" },
          { name: "सभी 8 documents upload करें", text: "ऊपर दिए सभी 8 documents की scanned copies upload करें।" },
          { name: "Review और submit करें", text: "Submit से पहले हर detail check करें — submit होने के बाद ज़्यादातर fields lock हो जाती हैं। Application number तुरंत note करें।" },
          { name: "Institute verification के लिए follow-up करें", text: "School या college principal को SJE portal पर application verify करके forward करनी होती है। Submit के 7 दिन के अंदर follow-up करें, क्योंकि institute verification के बिना application pending रहती है और कभी process नहीं होती।" },
        ],
      },
      {
        type: "section",
        title: "वह एक step जो ज़्यादातर students miss करते हैं",
        body: [
          "यह इस पूरे page की सबसे ज़रूरी बात है। ज़्यादातर students सोचते हैं कि form submit होने के बाद काम खत्म हो गया। नहीं हुआ। College को verify करके forward करना होता है।",
          "अगर scholarship coordinator ने ध्यान नहीं दिया या भूल गया, तो application permanently 'Submitted' में बैठी रहेगी और कभी process नहीं होगी। Office जाएं, लिखित confirmation लें, और दो हफ्ते में status नहीं बदला तो फिर follow-up करें।",
        ],
      },
      {
        type: "steps",
        title: "Application status कैसे check करें",
        steps: [
          { name: "SSO ID में login करें", text: "sso.rajasthan.gov.in पर sign in करें।" },
          { name: "SJE Scholarship portal खोलें", text: "Dashboard से scholarship portal खोलें।" },
          { name: "Application Status ढूंढें", text: "'Application Status' या 'Enrolment Status' ढूंढें।" },
          { name: "Details डालें", text: "Application number और required details डालकर current stage देखें।" },
        ],
      },
      {
        type: "table",
        title: "हर status का मतलब",
        cols: ["Status", "मतलब", "क्या करें"],
        rows: [
          ["Submitted", "Form मिला, institute का इंतज़ार", "College scholarship coordinator से follow-up करें"],
          ["Institute Verified", "College ने forward कर दिया", "District verification का इंतज़ार करें (15–30 दिन दें)"],
          ["Objection Raised", "कोई document या detail ठीक करनी है", "Login करें और flagged issue deadline से पहले fix करें"],
          ["Rejected", "Application approve नहीं हुई", "Reason code check करें, correction window खुली हो तो reapply करें"],
          ["Approved", "राशि sanctioned", "DBT transfer का इंतज़ार करें (30–90 दिन)"],
          ["Disbursed", "Bank को पैसे भेज दिए", "Account check करें; 7–10 working days लग सकते हैं"],
        ],
      },
      {
        type: "list",
        title: "Applications reject क्यों होती हैं — और कैसे बचें",
        intro:
          "Institute verification miss करना सबसे बड़ा कारण है जिससे applications process नहीं होतीं। लेकिन छह और कारण हैं जो बार-बार सामने आते हैं:",
        items: [
          "Jan Aadhaar e-KYC पूरी नहीं — verification पर यही check होता है; बाकी सब perfect होने पर भी reject होती है। Apply से पहले पूरी करें।",
          "Income certificate expired या गलत authority से — Tehsildar या SDM से जारी और 3 साल से पुराना नहीं होना चाहिए। Sarpanch या ward member से जारी valid नहीं।",
          "Bank account student के नाम का नहीं — DBT सिर्फ student के अपने account में जाती है; parent के account पर transfer fail होता है जो Approved दिखता है पर आता नहीं।",
          "NSP और State scholarship दोनों के लिए apply — verification पर flag होता है। एक चुनें, जिस portal पर institution registered है।",
          "Documents की scan quality खराब — portal उन्हें flag करता है जिनमें details readable नहीं। बेहतर scan के साथ re-upload करें।",
          "Duplicate application — एक student एक scheme में सिर्फ एक बार; same SSO ID से दूसरी submission auto-reject होती है।",
        ],
      },
      {
        type: "section",
        title: "Approve होने के बाद पैसे कब आते हैं?",
        body: [
          "Approve हुई राशि DBT से सीधे Aadhaar-linked bank account में आती है। Final approval के बाद 30 से 90 दिन लगते हैं।",
          "Approved status के 90 दिन बाद भी पैसे नहीं आए तो: pfms.nic.in पर 'Know Your Payment' में check करें कि transfer initiate हुआ या नहीं, application में दिया bank account number सही था या नहीं verify करें, bank account Aadhaar से linked है या नहीं देखें (Aadhaar seeding) और न हो तो bank branch जाकर करवाएं, और इनमें से कुछ काम न आए तो application number लेकर District Welfare Officer (DWO) से संपर्क करें।",
          "छात्रवृत्ति income tax free होती है। Income Tax Act Section 10(16) के तहत educational scholarships पूरी तरह exempt हैं।",
        ],
      },
      {
        type: "section",
        title: "Renewal applications",
        body: [
          "पिछले साल scholarship मिली थी और उसी course में पढ़ाई जारी है तो renewal करनी होगी — fresh apply नहीं। Renewal आसान होता है: ज़्यादातर details carry over होती हैं और मुख्यतः current year के documents update करने होते हैं (fee receipt, current year marksheet, और updated enrollment certificate)।",
          "Same portal पर login करें, 'New Application' की जगह 'Renewal' select करें, carry-over details verify करें, नए documents upload करें, और renewal deadline से पहले submit करें। एक गलती जो होती है: renewal करना था लेकिन 'New Application' select कर लिया। इससे duplicate बनती है और rejection आती है।",
        ],
      },
      {
        type: "table",
        title: "छात्रवृत्ति हेल्पलाइन",
        cols: ["संपर्क", "जानकारी"],
        rows: [
          ["SJE Scholarship Helpline", "1800-180-6127 (toll free)"],
          ["SJE Email", "helpdesk.scholarship@rajasthan.gov.in"],
          ["SJMS Support", "support.sje@rajasthan.gov.in"],
          ["SJMS Phone", "0141-2226638 (सोमवार–शुक्रवार, सुबह 9:30 – शाम 6:00)"],
          ["Official SJE Portal", "sje.rajasthan.gov.in"],
          ["HTE Portal", "hte.rajasthan.gov.in"],
        ],
      },
    ],
    faqs: [
      { question: "राजस्थान छात्रवृत्ति 2026 के लिए ऑनलाइन आवेदन कैसे करें?", answer: "SSO ID से sso.rajasthan.gov.in पर login करें। SC/ST/OBC/EBC schemes के लिए Scholarship (SJE) tile खोलें, CM Higher Education और Kali Bai Bhil Scooty के लिए HTE tile। New Registration में Student select करें, details भरें, documents upload करें, submit करें। Submit के 7 दिन के अंदर college से follow-up करें कि institute verification complete हो जाए।" },
      { question: "राजस्थान पोस्ट मैट्रिक छात्रवृत्ति की आय सीमा क्या है?", answer: "SC और ST students के लिए वार्षिक पारिवारिक आय सीमा ₹2.5 लाख है। OBC, EBC, और DNT students के लिए ₹1 लाख है। अनुप्रति coaching योजना के लिए ₹8 लाख है। CMSS और कालीबाई भील scooty के लिए ₹2.5 लाख है। आय प्रमाण पत्र हमेशा Tehsildar या SDM से जारी होना चाहिए।" },
      { question: "राजस्थान छात्रवृत्ति के लिए Jan Aadhaar ज़रूरी है?", answer: "हाँ। Jan Aadhaar e-KYC mandatory है। इसके बिना application verification stage पर reject होती है। Scholarship form खोलने से पहले SSO ID से Jan Aadhaar portal पर e-KYC पूरी करें।" },
      { question: "राजस्थान पोस्ट मैट्रिक छात्रवृत्ति 2026 की last date क्या है?", answer: "2025-26 सत्र की Post-Matric Scholarship की deadline 30 June 2026 तक बढ़ाई गई है। 2026-27 सत्र के लिए application window आमतौर पर September में खुलती है। Official dates के लिए sje.rajasthan.gov.in check करें — हर साल dates बदलती हैं।" },
      { question: "Application Submitted status में क्यों अटकी है?", answer: "College ने institute verification अभी complete नहीं की। Form submit होने के बाद institution के scholarship coordinator को SJE portal पर verify करके forward करना होता है। इस step के बिना application आगे नहीं बढ़ती। College office जाएं, confirm करें कि application मिली, और 7 दिन में forward हो जाए यह सुनिश्चित करें।" },
      { question: "राजस्थान छात्रवृत्ति का status कैसे check करें?", answer: "SSO ID से login करें, SJE portal खोलें, Application Status में application number डालें। Status flow: Submitted → Institute Verified → District Verified → State Verified → Approved → Disbursed। DBT payment verify करने के लिए pfms.nic.in पर 'Know Your Payment' में bank account number डालें।" },
      { question: "क्या NSP और State scholarship दोनों के लिए एक साथ apply कर सकते हैं?", answer: "नहीं। Central और State portal दोनों पर एक साथ apply नहीं हो सकता। जिस portal पर institution registered है वहाँ apply करें। NSP (scholarships.gov.in) पर है तो वहाँ, State portal पर है तो वहाँ।" },
      { question: "अनुप्रति coaching योजना क्या है?", answer: "मुख्यमंत्री अनुप्रति coaching योजना SC, ST, OBC, MBC, EWS, और Minority category के students को UPSC, RAS, NEET, JEE, CLAT जैसे competitive exams की coaching fees ₹75,000 प्रति वर्ष तक reimburse करती है। आय सीमा ₹8 लाख प्रति वर्ष है। Selection merit-based होता है। यह benefit जीवन में सिर्फ एक बार मिलता है।" },
      { question: "कालीबाई भील scooty योजना क्या है और कौन apply कर सकता है?", answer: "कालीबाई भील मेधावी छात्रा scooty योजना में छात्राओं को free scooty और ₹20,000 cash मिलता है। General category की छात्राएं भी apply कर सकती हैं। RBSE students को Class 12 में 65% चाहिए, CBSE/ICSE को 75%। आय ₹2.5 लाख से कम होनी चाहिए। आवेदन HTE portal से होता है, SJE से नहीं।" },
      { question: "Approve होने के बाद scholarship पैसे कब तक bank में आते हैं?", answer: "Final state-level approval के बाद DBT transfer में 30 से 90 दिन लगते हैं। 90 दिन बाद भी नहीं आए तो pfms.nic.in पर check करें। Transfer record नहीं है तो application number लेकर District Welfare Officer से मिलें।" },
      { question: "SSO ID के बिना राजस्थान छात्रवृत्ति के लिए apply हो सकता है?", answer: "नहीं। SSO ID सभी SJE और HTE scholarship applications के लिए mandatory है। sso.rajasthan.gov.in पर पहले free registration करें।" },
    ],
  },
};

export function getScholarshipsHub(locale: Locale): HubContent | undefined {
  return scholarshipsHub[locale];
}
