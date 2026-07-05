// Optional rich, long-form content for specific service pages, keyed by slug
// then locale. When a service+locale has an entry here, the service page
// renders this instead of the generic templated body. Locales without an entry
// fall back to the generic serviceBody, so pages never break.
import type { Locale } from "@/lib/i18n";
import type { FaqItem, HowToStep } from "@/lib/schema";

export type ServiceBlock =
  | { type: "section"; title: string; body: string[] }
  | { type: "steps"; title: string; steps: HowToStep[] }
  | { type: "table"; title: string; cols: string[]; rows: string[][] };

export interface ServiceRich {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  portalNote?: string;
  lastVerified: string;
  blocks: ServiceBlock[];
  faqs: FaqItem[];
}

export const serviceContent: Record<string, Partial<Record<Locale, ServiceRich>>> = {
  paymanager: {
    en: {
      metaTitle:
        "PayManager Rajasthan 2026 — Salary Slip Download, GA-55 & SSO Login Guide",
      metaDescription:
        "PayManager Rajasthan salary slip download guide — step-by-step via SSO or direct login. GA-55 download, password reset with Employee ID, DDO login, and common errors fixed. paymanager.rajasthan.gov.in. Updated June 2026.",
      h1: "PayManager Rajasthan 2026 — Salary Slip, GA-55 & Complete Login Guide",
      intro:
        "PayManager is the Rajasthan government's official salary management system for state employees. Every salary slip, GA-55 annual statement, DA arrear, leave encashment record, and income tax detail for Rajasthan government employees lives here. Teachers, police officers, health workers, and administrative staff — all 8 lakh-plus state employees use this portal.",
      portalNote: "paymanager.rajasthan.gov.in",
      lastVerified: "2026-06-18",
      blocks: [
        {
          type: "section",
          title: "How PayManager connects to your SSO ID",
          body: [
            "You reach PayManager through your SSO ID. There is no separate registration. If your department has linked your Employee ID to your SSO account, you are ready to go.",
            "This guide covers the salary slip download path step by step, how to get your GA-55, password reset, DDO login, and every common error that blocks access.",
          ],
        },
        {
          type: "table",
          title: "Quick reference",
          cols: ["Task", "Navigation path"],
          rows: [
            ["Salary Slip", "Employee Corner → Employee Report → Pay Slip (Monthwise)"],
            ["GA-55 / Annual Statement", "Employee Corner → Employee Report → GA 55 Employee Details"],
            ["Bank Details Update", "Employee Corner → Employee Report → Employee Details"],
            ["Income Tax Statement", "Employee Corner → Employee Report → Employee Annual Statement"],
            ["Password Reset", "paymanager.rajasthan.gov.in → Forgot Password (Employee Login)"],
            ["DDO Login", "paymanagerddo.rajasthan.gov.in"],
          ],
        },
        {
          type: "section",
          title: "What is PayManager?",
          body: [
            "PayManager is the Integrated Financial Management System (IFMS) for Rajasthan state government employees. The Finance Department of the Government of Rajasthan runs it, developed in collaboration with the National Informatics Centre (NIC).",
            "Before PayManager existed, salary processing, arrears, and leave encashment required significant paperwork moving between departments and treasury offices. PayManager centralized all of it online. DDOs (Drawing and Disbursing Officers) prepare pay bills through the portal, the treasury processes them, and employees view and download their slips from the same system.",
            "The portal handles salary calculations, deductions, DA arrears, bonus calculations, leave encashment bills, income tax statements, and provident fund details. For an employee, the most-used function is downloading the monthly salary slip, which takes about 30 seconds once you are logged in.",
          ],
        },
        {
          type: "section",
          title: "How to access PayManager — two ways",
          body: [
            "Via SSO ID (recommended): Log in to sso.rajasthan.gov.in with your SSO ID and password. On your dashboard, find the PayManager tile (search 'PayManager' in the search bar if it is not immediately visible) and click it. PayManager opens directly without asking for credentials again, and you land on the employee dashboard.",
            "If the PayManager tile is not visible on your SSO dashboard at all, your Employee ID has not been linked to your SSO account yet. This is done by your DDO, so contact them to initiate the linking.",
            "Via direct login (paymanager.rajasthan.gov.in): On the login page you will see options for DDO, Employee, Digital, Department, Sub DDO, and HOD/Sub HOD. Select 'Employee', enter your Employee ID as the username, enter your password, fill the CAPTCHA, and click Login.",
            "First-time login: If you are logging in for the first time and do not have a password yet, enter your Employee ID as the username and leave the password blank, or try the last four digits of your bank account number as the default. The system prompts you to set a new password immediately. Password rules: the first character must be uppercase, minimum 8 characters, with at least one number and one special character.",
          ],
        },
        {
          type: "steps",
          title: "How to download salary slip from PayManager",
          steps: [
            { name: "Log in to PayManager", text: "Log in via the SSO tile or directly at paymanager.rajasthan.gov.in." },
            { name: "Open Employee Corner", text: "On the dashboard, click Employee Corner in the top navigation menu." },
            { name: "Go to Employee Report", text: "From the dropdown, click Employee Report." },
            { name: "Select Pay Slip (Monthwise)", text: "Click Pay Slip (Monthwise) from the report list." },
            { name: "Select month and year", text: "Choose the Month and Year of the salary slip you want, then click Get Report." },
            { name: "Download the PDF", text: "The salary slip opens as a PDF. Click Print or use your browser's download option to save it." },
          ],
        },
        {
          type: "section",
          title: "Notes on salary slips",
          body: [
            "The salary slip PDF is digitally signed and valid as official proof of employment and salary for loan applications, income tax purposes, and visa documents.",
            "PayManager stores records for several years. Select any previous month and year to retrieve older slips. If a particular month shows no data, your department may have migrated to PayManager after that period — contact your DDO for records from before migration.",
          ],
        },
        {
          type: "steps",
          title: "How to download GA-55 from PayManager",
          steps: [
            { name: "Log in to PayManager", text: "Sign in via SSO or direct login." },
            { name: "Open Employee Report", text: "Click Employee Corner → Employee Report." },
            { name: "Click GA 55 Employee Details", text: "Select GA 55 Employee Details from the list." },
            { name: "Enter name and financial year", text: "Enter your name and select the Financial Year (April to March, e.g. April 2025 to March 2026 for FY 2025-26)." },
            { name: "Choose the option type", text: "Choose Estimated for a full-year projection, or Non-Estimated for accurate figures up to the current month." },
            { name: "Download", text: "Click PDF Format or Excel Format to download." },
          ],
        },
        {
          type: "section",
          title: "GA-55 vs Form 16 — what is the difference?",
          body: [
            "This confuses a lot of employees. GA-55 is the salary statement generated by PayManager. It shows your annual gross salary, all deductions, and net pay for the year. Form 16 is the TDS certificate that your DDO generates from the TRACES portal and gives to you.",
            "For filing your ITR, always use Form 16, not just GA-55. GA-55 is useful for reference and for applications where a salary statement is required, but Form 16 is the document that proves TDS was actually deposited with the government. Many employees file ITR using only GA-55 figures and create mismatches. Use Form 16.",
          ],
        },
        {
          type: "section",
          title: "PayManager password reset — three methods",
          body: [
            "Method 1 (online reset, most common): Go to paymanager.rajasthan.gov.in and click 'Forgot Password (Employee Login)'. Enter your Employee ID (in RJ... format), the bank account number registered in PayManager, and your Date of Birth in DDMMYYYY format. If your mobile number is registered, enter it and click Verify Contact Number, then enter the OTP and set a new password.",
            "If your mobile number is not registered in PayManager, leave the mobile field blank. The reset request then goes to your DDO for approval. Once approved, you can set a new password — ask your DDO to also update your mobile number in your PayManager profile at the same time.",
            "Method 2 (DDO reset): If online reset fails, your DDO can reset your password directly from the DDO panel. This is the fallback when bank account or date of birth details in PayManager do not match what you enter.",
            "Method 3 (default password entry): If you have never set a password, try entering the last four digits of your salary bank account number as the password on first login. If that does not work, use Method 1 or contact your DDO.",
          ],
        },
        {
          type: "section",
          title: "DDO login — what it is and how it works",
          body: [
            "DDO stands for Drawing and Disbursing Officer, the authorized person in each department or school who processes salary bills for their unit's employees. The DDO login URL is paymanagerddo.rajasthan.gov.in, which is separate from the employee login, and DDOs use a different set of credentials. If you are a DDO and have forgotten your DDO Login ID, contact your Treasury Office, which maintains DDO credentials.",
            "Through PayManager, DDOs prepare monthly pay bills, process DA arrears, bonus, and leave encashment bills, approve employee password reset requests, update employee personal details including bank account and mobile number, and forward TA bills to treasury.",
            "Salary cycle timeline: DDOs make changes to employee salary and deductions from the 1st to the 15th of each month. From the 16th to the 22nd, the system automatically allocates and processes bills, and DDOs do not need to take additional action during this phase.",
          ],
        },
        {
          type: "section",
          title: "PayManager vs PayManager 2 vs Pri PayManager",
          body: [
            "Three portals exist in the PayManager family, and people often land on the wrong one. paymanager.rajasthan.gov.in is the main portal, primarily for DDO functions, department logins, HOD/Sub HOD access, bank registration, and department-level reports. Employee login is available here too.",
            "paymanager2.raj.nic.in is the employee-facing version, better optimized for salary slip and GA-55 downloads. If paymanager.rajasthan.gov.in gives you trouble loading employee reports, try paymanager2.raj.nic.in. Login credentials are the same Employee ID and password on both.",
            "pripaymanager.rajasthan.gov.in is built specifically for Panchayati Raj employees. If you work for a gram panchayat, panchayat samiti, or zila parishad under Rajasthan's Panchayati Raj department, this is your portal. The workflow is similar to the main PayManager but the backend systems are separate. In practice, try paymanager.rajasthan.gov.in first via SSO, and switch to paymanager2.raj.nic.in if salary slip reports are slow.",
          ],
        },
        {
          type: "section",
          title: "Income Tax Declaration deadline (April)",
          body: [
            "This directly affects how much TDS gets deducted from your salary all year. Every April, ideally in the first two weeks, submit your Income Tax Declaration to your DDO through PayManager.",
            "From FY 2026-27, the New Tax Regime under Section 115BAC is the default. If you want to continue with the Old Tax Regime (which allows deductions for HRA, 80C investments, home loan interest, and more), you must explicitly opt for it at the start of each financial year. If you miss the April window and your DDO defaults you to the New Regime, more TDS is deducted each month. You can reclaim it when you file ITR, but that means waiting until filing season.",
            "Standard deduction for FY 2026-27 is ₹75,000 under the New Regime and ₹50,000 under the Old Regime. PayManager applies this automatically; the declaration affects everything above that.",
          ],
        },
        {
          type: "table",
          title: "Common PayManager errors and fixes",
          cols: ["Error", "Cause", "Fix"],
          rows: [
            ["PayManager tile not on SSO dashboard", "Employee ID not linked to SSO", "Contact your DDO to link Employee ID to SSO account"],
            ["Login fails with correct credentials", "Password expired or changed by DDO", "Use Forgot Password with Employee ID + Bank Account + DOB"],
            ["OTP not arriving during password reset", "Mobile number not registered in PayManager", "Leave mobile blank, get DDO approval, then update mobile"],
            ["Salary slip not showing for a month", "Department migrated to PayManager after that period", "Contact DDO for records from pre-migration"],
            ["GA-55 shows no data", "Financial year not fully processed", "For current year use Estimated; for past years check with DDO"],
            ["Page not loading / slow", "Heavy traffic or maintenance", "Try early morning, use Chrome incognito, or switch to paymanager2.raj.nic.in"],
            ["Wrong bank account details showing", "Bank changed or merged, old details in system", "Contact DDO to update bank account number and IFSC"],
            ["Name or DOB mismatch on salary slip", "Error in PayManager master data", "Request correction through DDO — cannot be done by employee directly"],
          ],
        },
        {
          type: "table",
          title: "PayManager helpline",
          cols: ["Contact", "Details"],
          rows: [
            ["Phone", "0141-5111010 / 0141-5111007"],
            ["Complaint phone", "0141-2744402"],
            ["Email", "paymanagerrj@gmail.com"],
            ["Portal", "paymanager.rajasthan.gov.in"],
          ],
        },
        {
          type: "section",
          title: "Which helpline to use",
          body: [
            "These are the official PayManager helpline numbers, different from the SSO helpline. SSO issues such as login and dashboard problems go to the SSO helpdesk at 0141-5153222. PayManager-specific issues — salary slip, GA-55, password reset, DDO linking — go to the PayManager numbers above.",
          ],
        },
      ],
      faqs: [
        { question: "How do I download a salary slip from PayManager?", answer: "Log in to PayManager via your SSO ID or directly at paymanager.rajasthan.gov.in using your Employee ID and password. Go to Employee Corner → Employee Report → Pay Slip (Monthwise). Select the month and year, click Get Report, and download the PDF." },
        { question: "How do I access PayManager through SSO?", answer: "Log in to sso.rajasthan.gov.in with your SSO ID and password. Search 'PayManager' on your dashboard and click the tile. If the tile is not visible, your Employee ID has not been linked to your SSO account — contact your DDO to do this." },
        { question: "What is GA-55 in PayManager?", answer: "GA-55 is the annual salary statement generated by PayManager. It shows your total gross salary, all deductions, and net pay for a financial year. It is used for ITR filing reference, home loan applications, and government records. For actual ITR filing, use Form 16 from your DDO, not just GA-55." },
        { question: "How do I download GA-55 from PayManager?", answer: "Log in to PayManager. Go to Employee Corner → Employee Report → GA 55 Employee Details. Enter your name, select the financial year, choose Estimated (full-year projection) or Non-Estimated (accurate up to current month), and download as PDF or Excel." },
        { question: "How do I reset my PayManager password?", answer: "Go to paymanager.rajasthan.gov.in and click Forgot Password (Employee Login). Enter your Employee ID (RJ... format), registered bank account number, and date of birth in DDMMYYYY format. Enter your registered mobile number for OTP, or leave it blank if not registered (DDO approval required). Set a new password after OTP verification." },
        { question: "What is the difference between PayManager and PayManager 2?", answer: "paymanager.rajasthan.gov.in is the main portal, primarily for DDO and department functions. paymanager2.raj.nic.in is the employee-facing version, better for salary slip and GA-55 downloads. Login credentials are the same on both. If one is slow, try the other." },
        { question: "What is Pri PayManager?", answer: "Pri PayManager (pripaymanager.rajasthan.gov.in) is a separate version of PayManager built for Panchayati Raj employees in Rajasthan. If you work for a gram panchayat, panchayat samiti, or zila parishad, this is the portal for your salary slips and records." },
        { question: "PayManager tile is not showing on my SSO dashboard. Why?", answer: "Your Employee ID has not been linked to your SSO ID. This linking is done by your DDO in your department. Contact your DDO and ask them to link your Employee ID to your SSO account. Once linked, the PayManager tile appears on your dashboard." },
        { question: "Can I update my bank account details in PayManager myself?", answer: "No. Bank account details in PayManager are updated by your DDO through the Personal Detail option in the DDO panel. If your bank has changed or merged, inform your DDO and provide the new account number and IFSC code." },
        { question: "What is the PayManager helpline number?", answer: "For PayManager-specific issues, call 0141-5111010 or 0141-5111007, or email paymanagerrj@gmail.com. For complaint escalation, call 0141-2744402. This is a different helpline from the SSO helpdesk (0141-5153222)." },
        { question: "What is the salary processing cycle in PayManager?", answer: "DDOs can modify employee salary details from the 1st to the 15th of each month. From the 16th to the 22nd, the system automatically allocates and processes bills. Salary slips for a given month typically become available for download after the 22nd of that month." },
      ],
    },
    hi: {
      metaTitle:
        "PayManager राजस्थान 2026 — सैलरी स्लिप download, GA-55 और SSO Login गाइड",
      metaDescription:
        "PayManager राजस्थान सैलरी स्लिप download कैसे करें — SSO या direct login से step-by-step। GA-55 download, Employee ID से password reset, DDO login और सामान्य errors का हल। paymanager.rajasthan.gov.in। June 2026 अपडेटेड।",
      h1: "PayManager राजस्थान 2026 — सैलरी स्लिप, GA-55 और पूरी Login गाइड",
      intro:
        "PayManager राजस्थान सरकार का official salary management system है — राज्य के सरकारी कर्मचारियों के लिए। हर सैलरी स्लिप, GA-55 annual statement, DA arrear, leave encashment record, और income tax detail इसी portal पर मिलती है। शिक्षक, पुलिसकर्मी, स्वास्थ्यकर्मी, प्रशासनिक कर्मचारी — राजस्थान के 8 लाख से ज़्यादा सरकारी कर्मचारी यही portal इस्तेमाल करते हैं।",
      portalNote: "paymanager.rajasthan.gov.in",
      lastVerified: "2026-06-18",
      blocks: [
        {
          type: "section",
          title: "PayManager का SSO ID से connection",
          body: [
            "PayManager तक SSO ID से पहुँचा जाता है। अलग registration नहीं होता। अगर विभाग ने Employee ID को SSO account से link कर दिया है, तो आप तैयार हैं।",
            "यह गाइड सैलरी स्लिप download का पूरा रास्ता, GA-55 कैसे निकालें, password reset, DDO login, और access block करने वाली हर common error का हल बताती है।",
          ],
        },
        {
          type: "table",
          title: "Quick reference",
          cols: ["काम", "Navigation path"],
          rows: [
            ["सैलरी स्लिप", "Employee Corner → Employee Report → Pay Slip (Monthwise)"],
            ["GA-55 / Annual Statement", "Employee Corner → Employee Report → GA 55 Employee Details"],
            ["Bank Details Update", "Employee Corner → Employee Report → Employee Details"],
            ["Income Tax Statement", "Employee Corner → Employee Report → Employee Annual Statement"],
            ["Password Reset", "paymanager.rajasthan.gov.in → Forgot Password (Employee Login)"],
            ["DDO Login", "paymanagerddo.rajasthan.gov.in"],
          ],
        },
        {
          type: "section",
          title: "PayManager क्या है?",
          body: [
            "PayManager राजस्थान सरकार का Integrated Financial Management System (IFMS) है। वित्त विभाग (Finance Department) इसे चलाता है, जिसे National Informatics Centre (NIC) ने develop किया है।",
            "PayManager से पहले salary processing, arrears, और leave encashment के लिए कागज़ात विभागों और treasury offices के बीच चक्कर काटते थे। PayManager ने यह सब online एक जगह कर दिया। DDO (Drawing and Disbursing Officer) portal से pay bills तैयार करते हैं, treasury उन्हें process करती है, और कर्मचारी उसी system से अपनी slip देखते और download करते हैं।",
            "Portal salary calculations, deductions, DA arrears, bonus, leave encashment bills, income tax statements, और provident fund details सब handle करता है। कर्मचारी के लिए सबसे ज़्यादा use होने वाला function है monthly salary slip download करना, जो login के बाद लगभग 30 सेकंड में हो जाता है।",
          ],
        },
        {
          type: "section",
          title: "PayManager कैसे access करें — दो तरीके",
          body: [
            "SSO ID से (recommended): sso.rajasthan.gov.in पर SSO ID और password से login करें। Dashboard पर PayManager tile ढूंढें (सीधे न दिखे तो search bar में 'PayManager' टाइप करें) और click करें। PayManager सीधे खुल जाता है, credentials दोबारा नहीं माँगता, और आप employee dashboard पर पहुँच जाते हैं।",
            "अगर SSO dashboard पर PayManager tile बिल्कुल नहीं दिख रही तो Employee ID अभी SSO account से link नहीं हुई है। यह काम DDO करते हैं, इसलिए उनसे मिलकर linking request करें।",
            "Direct login से (paymanager.rajasthan.gov.in): Login page पर DDO, Employee, Digital, Department, Sub DDO, HOD/Sub HOD options दिखेंगे। 'Employee' select करें, Employee ID username में डालें, password डालें, CAPTCHA भरें और Login click करें।",
            "पहली बार login: अगर पहले कभी login नहीं किया और password set नहीं है, तो username में Employee ID डालें और password field खाली छोड़ें, या salary bank account के आखिरी चार अंक try करें। System तुरंत नया password set करने का prompt देगा। Password rules: पहला character uppercase, minimum 8 characters, कम से कम एक नंबर और एक special character।",
          ],
        },
        {
          type: "steps",
          title: "PayManager से सैलरी स्लिप कैसे download करें",
          steps: [
            { name: "PayManager में login करें", text: "SSO tile से या paymanager.rajasthan.gov.in पर direct login करें।" },
            { name: "Employee Corner खोलें", text: "Dashboard के ऊपर navigation menu में Employee Corner click करें।" },
            { name: "Employee Report पर जाएं", text: "Dropdown में Employee Report click करें।" },
            { name: "Pay Slip (Monthwise) चुनें", text: "Report list में Pay Slip (Monthwise) पर click करें।" },
            { name: "Month और Year select करें", text: "जिस महीने और साल की slip चाहिए वह select करें और Get Report click करें।" },
            { name: "PDF download करें", text: "सैलरी स्लिप PDF में खुलती है। Print click करें या browser के download option से save करें।" },
          ],
        },
        {
          type: "section",
          title: "सैलरी स्लिप पर ज़रूरी बातें",
          body: [
            "सैलरी स्लिप PDF digitally signed होती है। यह loan applications, income tax purposes, और visa documents के लिए official proof of employment मानी जाती है।",
            "PayManager में कई साल पुराने records मौजूद हैं। पुराना महीना और साल select करके पुरानी slips निकाल सकते हैं। किसी महीने का data नहीं दिख रहा तो हो सकता है विभाग उस समय के बाद PayManager में आया हो — उस period के records के लिए DDO से संपर्क करें।",
          ],
        },
        {
          type: "steps",
          title: "PayManager से GA-55 कैसे download करें",
          steps: [
            { name: "PayManager में login करें", text: "SSO से या direct login करें।" },
            { name: "Employee Report खोलें", text: "Employee Corner → Employee Report click करें।" },
            { name: "GA 55 Employee Details click करें", text: "List में GA 55 Employee Details चुनें।" },
            { name: "नाम और financial year डालें", text: "अपना नाम डालें और Financial Year select करें (April से March, जैसे April 2025 से March 2026 FY 2025-26 के लिए)।" },
            { name: "Option type चुनें", text: "पूरे साल के projection के लिए Estimated, या current month तक accurate figures के लिए Non-Estimated चुनें।" },
            { name: "Download करें", text: "PDF Format या Excel Format पर click करके download करें।" },
          ],
        },
        {
          type: "section",
          title: "GA-55 और Form 16 में फर्क क्या है?",
          body: [
            "यह बात बहुत कर्मचारियों को confuse करती है, और इसे साफ समझना ज़रूरी है। GA-55 PayManager से generate होने वाला salary statement है। इसमें annual gross salary, सभी deductions, और net pay दिखती है। Form 16 वह TDS certificate है जो DDO TRACES portal से generate करके देते हैं और जो prove करता है कि TDS सरकार के पास जमा हुआ।",
            "ITR भरते समय Form 16 use करें, सिर्फ GA-55 नहीं। बहुत कर्मचारी GA-55 के figures से ITR भर देते हैं और mismatch हो जाती है। GA-55 loan applications और salary proof के लिए काम आती है। ITR के लिए DDO से Form 16 लें।",
          ],
        },
        {
          type: "section",
          title: "PayManager पासवर्ड reset — तीन तरीके",
          body: [
            "तरीका 1 (online reset, सबसे आम): paymanager.rajasthan.gov.in खोलें और 'Forgot Password (Employee Login)' click करें। RJ... format में Employee ID, PayManager में registered Bank Account Number, और DDMMYYYY format में Date of Birth डालें। Mobile number registered हो तो डालें और Verify Contact Number click करें, फिर OTP डालकर नया password set करें।",
            "Mobile number PayManager में registered नहीं है तो field खाली छोड़ें। Reset request DDO के पास approval के लिए जाती है। Approval के बाद नया password set होगा — साथ ही DDO से request करें कि PayManager profile में mobile number भी update कर दें।",
            "तरीका 2 (DDO से reset): Online reset काम न करे तो DDO सीधे DDO panel से password reset कर सकते हैं। यह तब काम आता है जब PayManager में bank account या date of birth details वैसी नहीं हैं जैसी आप enter कर रहे हैं।",
            "तरीका 3 (default password): कभी password set नहीं किया तो पहली बार login पर salary bank account के आखिरी चार अंक try करें। काम न हो तो तरीका 1 use करें या DDO से मिलें।",
          ],
        },
        {
          type: "section",
          title: "DDO Login — क्या होता है और कैसे काम करता है",
          body: [
            "DDO यानी Drawing and Disbursing Officer, हर विभाग या स्कूल में वह अधिकृत व्यक्ति जो अपनी unit के कर्मचारियों की salary bills process करता है। DDO login URL paymanagerddo.rajasthan.gov.in है, जो employee login से अलग है, और DDO के credentials कर्मचारियों से अलग होते हैं। DDO Login ID भूल गए हैं तो Treasury Office से संपर्क करें, जो DDO credentials maintain करती है।",
            "DDO PayManager से अपनी unit की monthly pay bills तैयार करते हैं, DA arrears, bonus, और leave encashment bills process करते हैं, employee password reset requests approve करते हैं, bank account और mobile number सहित employee personal details update करते हैं, और TA bills treasury को forward करते हैं।",
            "Salary cycle timeline: DDO महीने की 1 से 15 तारीख तक employee salary और deductions में changes कर सकते हैं। 16 से 22 तारीख के बीच system automatically bills allocate और process करता है, और इस phase में DDO को कुछ नहीं करना होता।",
          ],
        },
        {
          type: "section",
          title: "PayManager, PayManager 2, और Pri PayManager में फर्क",
          body: [
            "PayManager family में तीन portals हैं और लोग अक्सर गलत पर पहुँच जाते हैं। paymanager.rajasthan.gov.in main portal है, मुख्यतः DDO functions, department logins, HOD/Sub HOD access, bank registration, और department-level reports के लिए। Employee login यहाँ भी है।",
            "paymanager2.raj.nic.in employee-facing version है, salary slip और GA-55 download के लिए better optimized। अगर paymanager.rajasthan.gov.in पर employee reports load नहीं हो रहीं, paymanager2.raj.nic.in try करें। Login credentials दोनों पर एक ही हैं — Employee ID और password।",
            "pripaymanager.rajasthan.gov.in सिर्फ Panchayati Raj employees के लिए है। Gram panchayat, panchayat samiti, या zila parishad में काम करते हैं तो यही portal है। Navigation main PayManager जैसा है लेकिन backend systems अलग हैं। व्यावहारिक सलाह: पहले paymanager.rajasthan.gov.in SSO से try करें, और salary slip reports slow हों तो paymanager2.raj.nic.in switch करें।",
          ],
        },
        {
          type: "section",
          title: "ज़रूरी — Income Tax Declaration की April deadline",
          body: [
            "यह सीधे पूरे साल की salary पर असर डालता है। हर April में, पहले दो हफ्तों में, PayManager के ज़रिए DDO को Income Tax Declaration submit करें।",
            "FY 2026-27 से Section 115BAC के तहत New Tax Regime default है। Old Tax Regime (जिसमें HRA, 80C investments, home loan interest जैसी deductions मिलती हैं) चाहिए तो financial year की शुरुआत में explicitly opt करना होगा। April window miss हो गई और DDO ने New Regime default कर दिया तो पूरे साल ज़्यादा TDS कटेगा। ITR file करते समय वापस मिलेगा, लेकिन उसके लिए filing season तक रुकना पड़ेगा।",
            "Standard deduction FY 2026-27 में New Regime के लिए ₹75,000 और Old Regime के लिए ₹50,000 है। PayManager यह automatically apply करता है; declaration इसके ऊपर की सभी deductions को affect करती है।",
          ],
        },
        {
          type: "table",
          title: "PayManager की सामान्य गलतियाँ और उनके हल",
          cols: ["Error", "कारण", "हल"],
          rows: [
            ["SSO dashboard पर PayManager tile नहीं दिखती", "Employee ID SSO से link नहीं हुई", "DDO से Employee ID को SSO account से link करवाएं"],
            ["सही credentials से login fail हो रहा", "Password expire या DDO ने बदल दिया", "Employee ID + Bank Account + DOB से Forgot Password use करें"],
            ["Password reset पर OTP नहीं आई", "Mobile PayManager में registered नहीं", "Mobile field खाली छोड़ें, DDO से approval लें, फिर mobile update करें"],
            ["किसी महीने की salary slip नहीं दिख रही", "Department उस period के बाद PayManager में आई", "Pre-migration records के लिए DDO से संपर्क करें"],
            ["GA-55 में data नहीं आ रहा", "Current year अभी fully process नहीं हुई", "Current year के लिए Estimated; पुराने साल के लिए DDO से check करें"],
            ["Page load नहीं हो रहा / slow है", "Heavy traffic या server maintenance", "सुबह जल्दी try करें, Chrome incognito में खोलें, या paymanager2.raj.nic.in try करें"],
            ["Bank account details गलत दिख रहीं", "Bank change या merge हुई, पुरानी details system में", "DDO से bank account number और IFSC update करवाएं"],
            ["Salary slip पर नाम या DOB गलत है", "PayManager master data में error", "DDO के ज़रिए correction request करें — कर्मचारी खुद नहीं बदल सकते"],
          ],
        },
        {
          type: "table",
          title: "PayManager हेल्पलाइन",
          cols: ["संपर्क", "जानकारी"],
          rows: [
            ["फोन", "0141-5111010 / 0141-5111007"],
            ["Complaint फोन", "0141-2744402"],
            ["Email", "paymanagerrj@gmail.com"],
            ["Portal", "paymanager.rajasthan.gov.in"],
          ],
        },
        {
          type: "section",
          title: "कौन सी helpline use करें",
          body: [
            "यह SSO helpline से अलग है। SSO issues (login, dashboard) के लिए SSO helpdesk 0141-5153222 है। PayManager-specific issues (salary slip, GA-55, password reset, DDO linking) के लिए ऊपर दिए नंबर use करें।",
          ],
        },
      ],
      faqs: [
        { question: "PayManager से सैलरी स्लिप कैसे download करें?", answer: "SSO ID से या paymanager.rajasthan.gov.in पर Employee ID और password से login करें। Employee Corner → Employee Report → Pay Slip (Monthwise) पर जाएं। Month और Year select करें, Get Report click करें, और PDF download करें।" },
        { question: "SSO से PayManager कैसे access करें?", answer: "sso.rajasthan.gov.in पर login करें। Dashboard पर PayManager tile search करें और click करें। Tile नहीं दिख रही तो Employee ID अभी SSO account से link नहीं हुई — DDO से link करवाएं।" },
        { question: "PayManager में GA-55 क्या होती है?", answer: "GA-55 PayManager से generate होने वाला annual salary statement है। इसमें पूरे financial year की gross salary, सभी deductions, और net pay होती है। Loan applications और salary proof के लिए उपयोगी है। ITR file करने के लिए GA-55 की जगह DDO से Form 16 लें।" },
        { question: "PayManager से GA-55 कैसे download करें?", answer: "PayManager में login करें। Employee Corner → Employee Report → GA 55 Employee Details पर जाएं। नाम डालें, financial year select करें, Estimated (पूरे साल का projection) या Non-Estimated (current month तक accurate) choose करें, और PDF या Excel में download करें।" },
        { question: "PayManager पासवर्ड कैसे reset करें?", answer: "paymanager.rajasthan.gov.in खोलें और Forgot Password (Employee Login) click करें। RJ... format में Employee ID, PayManager में registered Bank Account Number, और DDMMYYYY format में Date of Birth डालें। Mobile number registered हो तो डालें, नहीं है तो खाली छोड़ें (DDO approval लगेगी)। OTP verify के बाद नया password set करें।" },
        { question: "PayManager और PayManager 2 में क्या फर्क है?", answer: "paymanager.rajasthan.gov.in मुख्यतः DDO और department functions के लिए है। paymanager2.raj.nic.in employee salary slip और GA-55 download के लिए बेहतर है। Login credentials दोनों पर एक ही हैं। एक slow हो तो दूसरा try करें।" },
        { question: "Pri PayManager क्या है?", answer: "Pri PayManager (pripaymanager.rajasthan.gov.in) Panchayati Raj employees के लिए बनाया गया अलग portal है। Gram panchayat, panchayat samiti, या zila parishad में काम करते हैं तो salary slip इसी portal से मिलेगी।" },
        { question: "SSO dashboard पर PayManager tile क्यों नहीं दिख रही?", answer: "Employee ID अभी SSO ID से link नहीं हुई। DDO से मिलें और उन्हें Employee ID को SSO account से link करने के लिए कहें। Link होने के बाद tile dashboard पर आ जाती है।" },
        { question: "क्या PayManager में bank account details खुद update कर सकते हैं?", answer: "नहीं। Bank account details DDO Personal Detail option से update करते हैं। Bank change या merge हुई हो तो DDO को नया account number और IFSC code दें। सिर्फ account number देना काफी नहीं होगा अगर IFSC भी बदला है।" },
        { question: "PayManager की helpline number क्या है?", answer: "PayManager-specific issues के लिए 0141-5111010 या 0141-5111007 call करें, या paymanagerrj@gmail.com email करें। Complaint escalation के लिए 0141-2744402। यह SSO helpdesk (0141-5153222) से अलग है।" },
        { question: "GA-55 और Form 16 में क्या फर्क है? ITR के लिए कौन सी चाहिए?", answer: "GA-55 PayManager का salary statement है जो gross salary और deductions दिखाता है। Form 16 DDO का TDS certificate है जो prove करता है कि TDS सरकार को जमा हुआ। ITR हमेशा Form 16 से भरें। GA-55 सिर्फ reference के लिए है, actual TDS proof के लिए नहीं।" },
      ],
    },
  },
};

export function getServiceContent(slug: string, locale: Locale): ServiceRich | undefined {
  return serviceContent[slug]?.[locale];
}
