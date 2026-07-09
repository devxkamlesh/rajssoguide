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
  rajkaj: {
    en: {
      metaTitle:
        "RajKaj Rajasthan 2026 — SSO Login, e-Leave & Integrated e-Office Guide",
      metaDescription:
        "RajKaj (rajkaj.rajasthan.gov.in) guide for Rajasthan government employees — log in via SSO, apply for leave (e-Leave), track files (e-File), and access APAR, service book and GPF. Updated 2026.",
      h1: "RajKaj Rajasthan 2026 — SSO Login, e-Leave & Integrated e-Office",
      intro:
        "RajKaj is the Government of Rajasthan's Integrated e-Office system for state employees. Leave applications, file and note movement, APAR performance reports, service book records, GPF, and government residential allotment all run through it — and you reach all of it with your SSO ID. If you work for the Rajasthan government, RajKaj is where your day-to-day official workflow lives.",
      portalNote: "rajkaj.rajasthan.gov.in",
      lastVerified: "2026-07-06",
      blocks: [
        {
          type: "section",
          title: "How RajKaj connects to your SSO ID",
          body: [
            "You reach RajKaj through your SSO ID — there is no separate RajKaj registration. Log in to sso.rajasthan.gov.in and click the RajKaj tile on your dashboard.",
            "If the RajKaj tile is not on your dashboard, your employee account has not been mapped to RajKaj yet. This mapping is done by your department's RajKaj admin or nodal officer, not by you — contact your office administrator to get added.",
          ],
        },
        {
          type: "table",
          title: "Quick reference",
          cols: ["Task", "Where to go"],
          rows: [
            ["Apply for leave", "RajKaj → e-Leave → Apply Leave"],
            ["Check leave balance", "RajKaj → e-Leave → Leave Balance"],
            ["Track a file / note", "RajKaj → e-File → File Tracking"],
            ["APAR / ACR", "RajKaj → APAR module"],
            ["Service book", "RajKaj → Employee Service Book"],
            ["GPF details", "RajKaj → GPF module"],
            ["Residential allotment", "RajKaj → Estate / Allotment module"],
          ],
        },
        {
          type: "section",
          title: "What is RajKaj?",
          body: [
            "RajKaj is Rajasthan's Integrated e-Office, built to move government work from paper files to a digital workflow. Instead of physical note-sheets travelling between desks, files, dak, and approvals move electronically between officers.",
            "For an ordinary employee, the most-used part is e-Leave — applying for leave and watching it get approved online. For officers, RajKaj also handles file noting, APAR, and inter-departmental correspondence. It is maintained by the Department of Information Technology & Communication (DoIT&C) and RISL.",
          ],
        },
        {
          type: "steps",
          title: "How to apply for leave on RajKaj (e-Leave)",
          steps: [
            { name: "Log in through SSO", text: "Sign in at sso.rajasthan.gov.in and open the RajKaj tile." },
            { name: "Open e-Leave", text: "In RajKaj, go to the e-Leave (Leave Management) module." },
            { name: "Click Apply Leave", text: "Select Apply Leave to start a new leave request." },
            { name: "Choose leave type and dates", text: "Pick the leave type (Casual, Earned, Half Pay, etc.), enter the From and To dates, and check the balance shown." },
            { name: "Add a reason and attachments", text: "Enter the reason for leave and attach a supporting document if the leave type needs one (for example a medical certificate)." },
            { name: "Submit for approval", text: "Submit the application. It routes to your reporting/controlling officer, who approves or returns it." },
            { name: "Track the status", text: "Return to e-Leave to see whether the request is Pending, Approved, or Rejected." },
          ],
        },
        {
          type: "section",
          title: "Leave types you will see in e-Leave",
          body: [
            "The leave types follow the Rajasthan Service Rules. Casual Leave (CL) is for short absences and cannot usually be combined with other leave or taken for long stretches. Earned Leave (EL), also called Privilege Leave, accumulates over service and is used for longer planned leave. Half Pay Leave (HPL) is commonly used for medical reasons, and there are separate provisions for Maternity, Paternity, and special leave.",
            "Exact entitlements and how much has accrued depend on your service category and years of service, and they are calculated by the system. Always go by the balance shown in your own e-Leave module rather than a general figure, and apply in advance for planned leave so your officer has time to approve it.",
          ],
        },
        {
          type: "section",
          title: "e-File and note movement",
          body: [
            "Beyond leave, RajKaj runs the government's electronic files. Dak (incoming correspondence) is received, converted into or attached to a file, and moved with digital note-sheets from one officer to the next. Each action is time-stamped, so files are easier to trace than a physical folder that could sit forgotten on a desk.",
            "If you are an officer or dealing hand, the File Tracking option shows where a file currently sits and its history. This is the RajKaj feature most people mean when they say a file is 'in the system'.",
          ],
        },
        {
          type: "table",
          title: "Common RajKaj issues and fixes",
          cols: ["Issue", "Cause", "Fix"],
          rows: [
            ["RajKaj tile not on SSO dashboard", "Employee not mapped to RajKaj", "Ask your department's RajKaj admin/nodal officer to map your account"],
            ["Leave application not reaching an officer", "Reporting/controlling officer not set", "Contact your office admin to set your reporting officer in RajKaj"],
            ["Login fails at SSO stage", "SSO password or account issue", "Reset via SSO Forgot Password; SSO login issues go to the SSO helpdesk, not RajKaj"],
            ["Leave balance looks wrong", "Service data not updated", "Raise it with your DDO/establishment section to correct the service record"],
            ["Page not loading / slow", "Heavy traffic or maintenance", "Try during off-peak hours and use an updated Chrome or Firefox"],
          ],
        },
        {
          type: "section",
          title: "RajKaj vs PayManager — which one for what",
          body: [
            "People often mix these up because both are for government employees and both open through SSO. PayManager is for money — salary slips, GA-55, and pay details. RajKaj is for office workflow — leave, files, APAR, and service records. If you want a salary slip, that is PayManager; if you want to apply for leave, that is RajKaj.",
          ],
        },
      ],
      faqs: [
        { question: "How do I apply for leave on RajKaj?", answer: "Log in at sso.rajasthan.gov.in, open the RajKaj tile, go to the e-Leave module, and click Apply Leave. Choose the leave type and dates, add a reason, attach any required document, and submit. The request goes to your reporting officer for approval." },
        { question: "How do I access RajKaj?", answer: "RajKaj is accessed through your SSO ID. Log in to sso.rajasthan.gov.in and click the RajKaj tile on your dashboard. There is no separate RajKaj login." },
        { question: "The RajKaj tile is not showing on my SSO dashboard. Why?", answer: "Your employee account has not been mapped to RajKaj yet. This is done by your department's RajKaj admin or nodal officer. Contact your office administrator to get your account added." },
        { question: "How do I check my leave balance?", answer: "Open RajKaj through SSO, go to the e-Leave module, and select Leave Balance. Always rely on the balance shown there, since it reflects your actual service record." },
        { question: "What is APAR in RajKaj?", answer: "APAR (Annual Performance Appraisal Report), earlier called ACR, is the yearly performance report for government employees. RajKaj lets employees and reporting officers fill and forward APAR digitally instead of on paper." },
        { question: "Is RajKaj the same as PayManager?", answer: "No. RajKaj handles office workflow — leave, files, APAR, and service records. PayManager handles salary — pay slips, GA-55, and pay details. Both open through your SSO ID but are separate systems." },
        { question: "Can I track where my file has reached in RajKaj?", answer: "Yes. The e-File / File Tracking option shows the current location of a file and its movement history, with each step time-stamped." },
        { question: "I can't log in to RajKaj. What should I do?", answer: "RajKaj login goes through SSO, so a login failure is usually an SSO issue. Reset your password with SSO Forgot Password. For persistent SSO problems, contact the SSO helpdesk on 0141-5153222 rather than a RajKaj number." },
      ],
    },
    hi: {
      metaTitle:
        "RajKaj राजस्थान 2026 — SSO Login, e-Leave और Integrated e-Office गाइड",
      metaDescription:
        "RajKaj (rajkaj.rajasthan.gov.in) गाइड — राजस्थान सरकारी कर्मचारियों के लिए SSO से login, छुट्टी आवेदन (e-Leave), file tracking (e-File), APAR, service book और GPF। 2026 अपडेटेड।",
      h1: "RajKaj राजस्थान 2026 — SSO Login, e-Leave और Integrated e-Office",
      intro:
        "RajKaj राजस्थान सरकार का Integrated e-Office सिस्टम है — राज्य कर्मचारियों के लिए। छुट्टी आवेदन, file और note movement, APAR परफॉरमेंस रिपोर्ट, service book, GPF, और सरकारी आवास आवंटन सब इसी से चलते हैं, और यह सब आपकी SSO ID से खुलता है। अगर आप राजस्थान सरकार में काम करते हैं, तो आपका रोज़ का official काम RajKaj पर ही होता है।",
      portalNote: "rajkaj.rajasthan.gov.in",
      lastVerified: "2026-07-06",
      blocks: [
        {
          type: "section",
          title: "RajKaj का SSO ID से connection",
          body: [
            "RajKaj तक SSO ID से पहुँचा जाता है — अलग RajKaj registration नहीं होता। sso.rajasthan.gov.in पर login करें और dashboard पर RajKaj tile click करें।",
            "अगर dashboard पर RajKaj tile नहीं दिख रही, तो आपका employee account अभी RajKaj से map नहीं हुआ है। यह mapping आपके विभाग का RajKaj admin या nodal officer करता है, आप खुद नहीं — जुड़ने के लिए office administrator से संपर्क करें।",
          ],
        },
        {
          type: "table",
          title: "Quick reference",
          cols: ["काम", "कहाँ जाएं"],
          rows: [
            ["छुट्टी के लिए आवेदन", "RajKaj → e-Leave → Apply Leave"],
            ["Leave balance देखें", "RajKaj → e-Leave → Leave Balance"],
            ["File / note track करें", "RajKaj → e-File → File Tracking"],
            ["APAR / ACR", "RajKaj → APAR module"],
            ["Service book", "RajKaj → Employee Service Book"],
            ["GPF details", "RajKaj → GPF module"],
            ["आवास आवंटन", "RajKaj → Estate / Allotment module"],
          ],
        },
        {
          type: "section",
          title: "RajKaj क्या है?",
          body: [
            "RajKaj राजस्थान का Integrated e-Office है, जो सरकारी काम को कागज़ी फाइलों से digital workflow पर लाने के लिए बना है। डेस्क-दर-डेस्क घूमती physical note-sheets की जगह files, dak और approvals officers के बीच electronically चलते हैं।",
            "आम कर्मचारी के लिए सबसे ज़्यादा use होने वाला हिस्सा e-Leave है — छुट्टी के लिए आवेदन और उसका online approval देखना। Officers के लिए RajKaj file noting, APAR और अंतर-विभागीय पत्राचार भी संभालता है। इसे सूचना प्रौद्योगिकी एवं संचार विभाग (DoIT&C) और RISL संभालते हैं।",
          ],
        },
        {
          type: "steps",
          title: "RajKaj पर छुट्टी के लिए आवेदन कैसे करें (e-Leave)",
          steps: [
            { name: "SSO से login करें", text: "sso.rajasthan.gov.in पर login करें और RajKaj tile खोलें।" },
            { name: "e-Leave खोलें", text: "RajKaj में e-Leave (Leave Management) module पर जाएं।" },
            { name: "Apply Leave click करें", text: "नया leave request शुरू करने के लिए Apply Leave चुनें।" },
            { name: "Leave type और dates चुनें", text: "Leave type (Casual, Earned, Half Pay आदि) चुनें, From और To dates डालें, और दिखाया गया balance जांचें।" },
            { name: "कारण और attachment जोड़ें", text: "छुट्टी का कारण डालें और यदि leave type के लिए ज़रूरी हो तो supporting document (जैसे medical certificate) attach करें।" },
            { name: "Approval के लिए submit करें", text: "आवेदन submit करें। यह आपके reporting/controlling officer के पास जाता है, जो approve या return करते हैं।" },
            { name: "Status track करें", text: "e-Leave में वापस जाकर देखें कि request Pending, Approved या Rejected है।" },
          ],
        },
        {
          type: "section",
          title: "e-Leave में दिखने वाले Leave types",
          body: [
            "Leave types राजस्थान सेवा नियमों के अनुसार होते हैं। Casual Leave (CL) छोटी अनुपस्थिति के लिए है और आमतौर पर अन्य leave के साथ या लंबे समय के लिए नहीं ली जा सकती। Earned Leave (EL), जिसे Privilege Leave भी कहते हैं, सेवा के साथ जमा होती है और लंबी नियोजित छुट्टी के लिए use होती है। Half Pay Leave (HPL) आमतौर पर चिकित्सा कारणों के लिए होती है, और Maternity, Paternity व special leave के अलग प्रावधान हैं।",
            "सटीक हक़ और कितना जमा है यह आपकी सेवा श्रेणी और सेवा वर्षों पर निर्भर करता है और system द्वारा गणना होती है। हमेशा अपने e-Leave module में दिखाए गए balance के अनुसार चलें, और नियोजित छुट्टी के लिए पहले से आवेदन करें ताकि officer के पास approve करने का समय हो।",
          ],
        },
        {
          type: "section",
          title: "e-File और note movement",
          body: [
            "छुट्टी के अलावा RajKaj सरकार की electronic files भी चलाता है। Dak (आने वाला पत्राचार) प्राप्त होकर किसी file में जुड़ता है और digital note-sheets के साथ एक officer से दूसरे तक जाता है। हर action time-stamped होता है, इसलिए physical फ़ोल्डर की तुलना में file को ट्रेस करना आसान होता है।",
            "यदि आप officer या dealing hand हैं, तो File Tracking option दिखाता है कि file इस समय कहाँ है और उसका इतिहास क्या है। जब लोग कहते हैं कि file 'system में है', तो आमतौर पर इसी feature की बात होती है।",
          ],
        },
        {
          type: "table",
          title: "RajKaj की सामान्य समस्याएं और हल",
          cols: ["समस्या", "कारण", "हल"],
          rows: [
            ["SSO dashboard पर RajKaj tile नहीं दिख रही", "Employee RajKaj से map नहीं", "विभाग के RajKaj admin/nodal officer से account map करवाएं"],
            ["Leave application किसी officer तक नहीं पहुँच रही", "Reporting/controlling officer set नहीं", "Office admin से RajKaj में अपना reporting officer set करवाएं"],
            ["SSO स्तर पर login fail", "SSO password या account समस्या", "SSO Forgot Password से reset करें; SSO login समस्या SSO helpdesk पर, RajKaj पर नहीं"],
            ["Leave balance गलत दिख रहा", "Service data update नहीं", "DDO/establishment section से service record ठीक करवाएं"],
            ["Page load नहीं हो रहा / slow", "Heavy traffic या maintenance", "Off-peak समय में try करें और updated Chrome या Firefox use करें"],
          ],
        },
        {
          type: "section",
          title: "RajKaj बनाम PayManager — किसके लिए कौन सा",
          body: [
            "लोग अक्सर इन्हें मिला देते हैं क्योंकि दोनों सरकारी कर्मचारियों के लिए हैं और दोनों SSO से खुलते हैं। PayManager पैसे के लिए है — salary slip, GA-55, और pay details। RajKaj office workflow के लिए है — छुट्टी, files, APAR, और service records। Salary slip चाहिए तो PayManager; छुट्टी के लिए आवेदन करना है तो RajKaj।",
          ],
        },
      ],
      faqs: [
        { question: "RajKaj पर छुट्टी के लिए आवेदन कैसे करें?", answer: "sso.rajasthan.gov.in पर login करें, RajKaj tile खोलें, e-Leave module पर जाएं और Apply Leave click करें। Leave type और dates चुनें, कारण डालें, ज़रूरी document attach करें और submit करें। Request आपके reporting officer के पास approval के लिए जाती है।" },
        { question: "RajKaj कैसे access करें?", answer: "RajKaj आपकी SSO ID से access होता है। sso.rajasthan.gov.in पर login करें और dashboard पर RajKaj tile click करें। अलग RajKaj login नहीं होता।" },
        { question: "SSO dashboard पर RajKaj tile क्यों नहीं दिख रही?", answer: "आपका employee account अभी RajKaj से map नहीं हुआ। यह विभाग का RajKaj admin या nodal officer करता है। जुड़ने के लिए office administrator से संपर्क करें।" },
        { question: "अपना leave balance कैसे देखें?", answer: "SSO से RajKaj खोलें, e-Leave module पर जाएं और Leave Balance चुनें। हमेशा वहीं दिखाए गए balance पर भरोसा करें, क्योंकि वह आपके actual service record को दर्शाता है।" },
        { question: "RajKaj में APAR क्या है?", answer: "APAR (Annual Performance Appraisal Report), पहले ACR कहलाता था, सरकारी कर्मचारियों की सालाना परफॉरमेंस रिपोर्ट है। RajKaj में कर्मचारी और reporting officer इसे कागज़ के बजाय digitally भरते और forward करते हैं।" },
        { question: "क्या RajKaj और PayManager एक ही हैं?", answer: "नहीं। RajKaj office workflow संभालता है — छुट्टी, files, APAR, service records। PayManager salary संभालता है — pay slip, GA-55, pay details। दोनों SSO ID से खुलते हैं पर अलग systems हैं।" },
        { question: "क्या मैं RajKaj में अपनी file की स्थिति track कर सकता हूँ?", answer: "हाँ। e-File / File Tracking option file की वर्तमान स्थिति और उसका movement इतिहास दिखाता है, हर चरण time-stamped के साथ।" },
        { question: "RajKaj में login नहीं हो रहा। क्या करूँ?", answer: "RajKaj login SSO से होता है, इसलिए login fail आमतौर पर SSO समस्या है। SSO Forgot Password से password reset करें। लगातार SSO समस्या पर RajKaj नंबर के बजाय SSO helpdesk 0141-5153222 पर संपर्क करें।" },
      ],
    },
  },
  "jan-aadhaar": {
    en: {
      metaTitle:
        "Jan Aadhaar Rajasthan 2026 — SSO Login, e-KYC, Update & Status Guide",
      metaDescription:
        "Jan Aadhaar guide — complete e-KYC, update income, mobile, bank or address, add a family member, and check enrolment status through your SSO ID. janaadhaar.rajasthan.gov.in. Updated 2026.",
      h1: "Jan Aadhaar Rajasthan 2026 — SSO Login, e-KYC, Update & Status",
      intro:
        "Jan Aadhaar is Rajasthan's family identity system, the successor to Bhamashah. It gives each family a 10-digit Jan Aadhaar ID and every member an individual ID, and it is the record that dozens of state schemes check before they pay out. Chiranjeevi health insurance, scholarships, pensions, and many e-Mitra services all read your family and income details from Jan Aadhaar — and you manage all of it through your SSO ID.",
      portalNote: "janaadhaar.rajasthan.gov.in",
      lastVerified: "2026-07-06",
      blocks: [
        {
          type: "section",
          title: "How Jan Aadhaar connects to your SSO ID",
          body: [
            "You manage Jan Aadhaar through your SSO ID. Log in to sso.rajasthan.gov.in and open the Jan Aadhaar tile on your dashboard to reach enrolment, e-KYC, updates, and status.",
            "Some quick tasks, like checking status, can also be done directly on janaadhaar.rajasthan.gov.in, but edits to your family record are done from inside the SSO-linked Jan Aadhaar section.",
          ],
        },
        {
          type: "table",
          title: "Quick reference",
          cols: ["Task", "Where to go"],
          rows: [
            ["Complete e-KYC", "SSO → Jan Aadhaar → e-KYC"],
            ["Update income", "Jan Aadhaar → Edit → Income"],
            ["Update mobile number", "Jan Aadhaar → Edit → Mobile"],
            ["Update bank details", "Jan Aadhaar → Edit → Bank"],
            ["Add a family member", "Jan Aadhaar → Add Member"],
            ["Check enrolment / update status", "Jan Aadhaar → Enrolment Status"],
          ],
        },
        {
          type: "section",
          title: "What is Jan Aadhaar?",
          body: [
            "Jan Aadhaar replaced the older Bhamashah scheme as Rajasthan's single family database. The family gets one 10-digit Jan Aadhaar number, and each member gets their own member ID linked to it. The head of the family holds the primary registration.",
            "It matters because eligibility for welfare is checked against it. When you apply for a scholarship, a pension, Chiranjeevi cover, or many certificates, the portal pulls your family size, income, and member details straight from Jan Aadhaar. If that record is wrong or out of date, the application can fail — which is why keeping Jan Aadhaar current is worth the effort before a deadline, not after.",
          ],
        },
        {
          type: "steps",
          title: "How to complete Jan Aadhaar e-KYC",
          steps: [
            { name: "Log in through SSO", text: "Sign in at sso.rajasthan.gov.in and open the Jan Aadhaar tile." },
            { name: "Open the e-KYC option", text: "In the Jan Aadhaar section, select the e-KYC option." },
            { name: "Select the member", text: "Choose the family member whose e-KYC you are completing." },
            { name: "Verify with Aadhaar OTP", text: "An OTP goes to the Aadhaar-linked mobile number; enter it to authenticate that member." },
            { name: "Repeat for each member", text: "Every family member above five years of age must complete e-KYC before other details can be edited." },
          ],
        },
        {
          type: "steps",
          title: "How to update Jan Aadhaar details",
          steps: [
            { name: "Finish e-KYC first", text: "e-KYC is the mandatory first step; you cannot edit details until it is done." },
            { name: "Open the edit option", text: "In the Jan Aadhaar section, choose the detail you want to change — income, bank, mobile, address, or a family member." },
            { name: "Enter the new details", text: "Type the corrected information exactly as it appears on your supporting document." },
            { name: "Upload the supporting document", text: "Attach a clear scan of the document required for that update type (see the table below)." },
            { name: "Submit and wait for verification", text: "The request goes through a two-level verification that usually takes about 7 to 15 days." },
          ],
        },
        {
          type: "table",
          title: "Documents required by update type",
          cols: ["Update", "Document needed"],
          rows: [
            ["Income", "Self-declaration or income certificate"],
            ["Bank details", "Bank passbook copy or a cancelled cheque"],
            ["New family member", "Birth certificate and Aadhaar card"],
            ["Marriage record", "Marriage certificate"],
            ["Land / farmer details", "Jamabandi (land record)"],
            ["Mobile number", "Aadhaar OTP verification of the member"],
          ],
        },
        {
          type: "section",
          title: "How to check your enrolment or update status",
          body: [
            "Open the Enrolment Status option in your Jan Aadhaar dashboard to see where a request stands. A green checkmark means the update was approved. A red cross means it was rejected — usually because a scanned document was unclear — and you should re-upload a better copy and submit again.",
            "You can also check status by entering your Jan Aadhaar or enrolment number on the official janaadhaar.rajasthan.gov.in portal. Keep the receipt or enrolment number you get after submitting; it is the quickest way to look up a pending request.",
          ],
        },
        {
          type: "table",
          title: "Common Jan Aadhaar issues and fixes",
          cols: ["Issue", "Cause", "Fix"],
          rows: [
            ["'Jan Aadhaar not found / data mismatch'", "Wrong number, or name does not match records", "Re-check the 10-digit family ID; if it still fails, verify at an e-Mitra centre"],
            ["Mobile number not registered", "Old or unlinked number on the record", "Update the mobile via e-KYC, or do it at an e-Mitra centre with Aadhaar"],
            ["e-KYC pending", "A member has not completed e-KYC", "Complete e-KYC for every member above five before editing details"],
            ["A family member is not showing", "Member not yet added or linked", "Use Add Member with a birth certificate and Aadhaar, or visit an e-Mitra centre"],
            ["Biometric / OTP e-KYC keeps failing", "Aadhaar mobile inactive or biometric mismatch", "Use the email/OTP route if available, otherwise complete it at an e-Mitra centre"],
            ["Update rejected (red cross)", "Unclear or wrong document uploaded", "Re-upload a clear, correct scan and resubmit"],
          ],
        },
        {
          type: "section",
          title: "A note on safety and cost",
          body: [
            "Enrolling in and updating Jan Aadhaar is free. An e-Mitra operator may charge a small government-set fee for assisted service or printouts, but never for the record itself. Never share your SSO password or an OTP with anyone, including someone who calls claiming to be from a helpline. RajSSO Guide is an independent guide and never asks for your SSO ID, password, or OTP.",
          ],
        },
      ],
      faqs: [
        { question: "How do I complete Jan Aadhaar e-KYC?", answer: "Log in at sso.rajasthan.gov.in, open the Jan Aadhaar tile, and select e-KYC. Choose the member, verify with the Aadhaar OTP sent to the linked mobile, and repeat for each member. Every family member above five years must complete e-KYC before other details can be edited." },
        { question: "Is Jan Aadhaar required for scholarships?", answer: "Yes. Scholarship eligibility, including income and family details, is verified through Jan Aadhaar e-KYC. Your Jan Aadhaar record must be complete and up to date before you apply through the SSO scholarship portal." },
        { question: "How do I update my mobile number in Jan Aadhaar?", answer: "Log in through SSO, open Jan Aadhaar, and choose the mobile update option. It is verified with an Aadhaar OTP. If the OTP cannot reach you because the old number is inactive, update it at an e-Mitra centre with your Aadhaar." },
        { question: "How long does a Jan Aadhaar update take?", answer: "Updates usually take about 7 to 15 days because they go through a two-level verification. You can track the request under Enrolment Status in your dashboard." },
        { question: "How do I check my Jan Aadhaar status?", answer: "Open the Enrolment Status option in your Jan Aadhaar dashboard, or enter your Jan Aadhaar or enrolment number on janaadhaar.rajasthan.gov.in. A green tick means approved; a red cross means rejected and needing resubmission." },
        { question: "What is the difference between Jan Aadhaar and Aadhaar?", answer: "Aadhaar is the 12-digit national ID issued by UIDAI for an individual. Jan Aadhaar is Rajasthan's 10-digit family ID that links all family members and is used to check eligibility for state schemes. They are separate; Jan Aadhaar uses Aadhaar for e-KYC verification." },
        { question: "Is creating or updating Jan Aadhaar free?", answer: "Yes. Enrolment and updates are free. An e-Mitra operator may charge a small government-set fee for assisted service or printouts, but never for the Jan Aadhaar record itself." },
        { question: "A family member is not showing in my Jan Aadhaar. What do I do?", answer: "Use the Add Member option with the member's birth certificate and Aadhaar card, then complete their e-KYC. If it will not go through online, visit an e-Mitra centre with the documents to add the member to the family record." },
      ],
    },
    hi: {
      metaTitle:
        "जन आधार राजस्थान 2026 — SSO Login, e-KYC, अपडेट और स्थिति गाइड",
      metaDescription:
        "जन आधार गाइड — SSO ID से e-KYC पूरा करें, आय, मोबाइल, बैंक या पता अपडेट करें, नया सदस्य जोड़ें और नामांकन स्थिति जांचें। janaadhaar.rajasthan.gov.in। 2026 अपडेटेड।",
      h1: "जन आधार राजस्थान 2026 — SSO Login, e-KYC, अपडेट और स्थिति",
      intro:
        "जन आधार राजस्थान की परिवार पहचान प्रणाली है, जो भामाशाह की उत्तराधिकारी है। हर परिवार को 10-अंकीय जन आधार आईडी और हर सदस्य को अलग सदस्य आईडी मिलती है, और यही वह रिकॉर्ड है जिसे कई राज्य योजनाएं भुगतान से पहले जांचती हैं। चिरंजीवी स्वास्थ्य बीमा, छात्रवृत्ति, पेंशन और कई ई-मित्र सेवाएं आपके परिवार और आय विवरण जन आधार से पढ़ती हैं — और यह सब आप अपनी SSO ID से प्रबंधित करते हैं।",
      portalNote: "janaadhaar.rajasthan.gov.in",
      lastVerified: "2026-07-06",
      blocks: [
        {
          type: "section",
          title: "जन आधार का SSO ID से connection",
          body: [
            "जन आधार आप अपनी SSO ID से प्रबंधित करते हैं। sso.rajasthan.gov.in पर login करें और dashboard पर जन आधार tile खोलें — नामांकन, e-KYC, अपडेट और स्थिति यहीं मिलते हैं।",
            "स्थिति जांचने जैसे कुछ त्वरित काम janaadhaar.rajasthan.gov.in पर सीधे भी हो सकते हैं, पर परिवार रिकॉर्ड में बदलाव SSO से जुड़े जन आधार सेक्शन से ही किए जाते हैं।",
          ],
        },
        {
          type: "table",
          title: "Quick reference",
          cols: ["काम", "कहाँ जाएं"],
          rows: [
            ["e-KYC पूरा करें", "SSO → जन आधार → e-KYC"],
            ["आय अपडेट करें", "जन आधार → Edit → Income"],
            ["मोबाइल नंबर अपडेट करें", "जन आधार → Edit → Mobile"],
            ["बैंक विवरण अपडेट करें", "जन आधार → Edit → Bank"],
            ["नया सदस्य जोड़ें", "जन आधार → Add Member"],
            ["नामांकन / अपडेट स्थिति जांचें", "जन आधार → Enrolment Status"],
          ],
        },
        {
          type: "section",
          title: "जन आधार क्या है?",
          body: [
            "जन आधार ने राजस्थान की एकल परिवार डेटाबेस के रूप में पुरानी भामाशाह योजना की जगह ली। परिवार को एक 10-अंकीय जन आधार नंबर मिलता है, और हर सदस्य को उससे जुड़ी अपनी सदस्य आईडी। मुख्य पंजीकरण परिवार के मुखिया के पास होता है।",
            "यह इसलिए महत्वपूर्ण है क्योंकि कल्याणकारी योजनाओं की पात्रता इसी से जांची जाती है। जब आप छात्रवृत्ति, पेंशन, चिरंजीवी या कई प्रमाण पत्रों के लिए आवेदन करते हैं, तो पोर्टल आपका परिवार आकार, आय और सदस्य विवरण सीधे जन आधार से लेता है। रिकॉर्ड गलत या पुराना हो तो आवेदन fail हो सकता है — इसलिए जन आधार को अंतिम तिथि के बाद नहीं, पहले अद्यतन रखना समझदारी है।",
          ],
        },
        {
          type: "steps",
          title: "जन आधार e-KYC कैसे पूरा करें",
          steps: [
            { name: "SSO से login करें", text: "sso.rajasthan.gov.in पर login करें और जन आधार tile खोलें।" },
            { name: "e-KYC option खोलें", text: "जन आधार सेक्शन में e-KYC option चुनें।" },
            { name: "सदस्य चुनें", text: "जिस सदस्य का e-KYC कर रहे हैं उसे चुनें।" },
            { name: "Aadhaar OTP से verify करें", text: "आधार से जुड़े मोबाइल पर OTP आता है; उस सदस्य को authenticate करने के लिए इसे डालें।" },
            { name: "हर सदस्य के लिए दोहराएं", text: "अन्य विवरण edit करने से पहले पाँच वर्ष से ऊपर के हर सदस्य को e-KYC पूरा करना होता है।" },
          ],
        },
        {
          type: "steps",
          title: "जन आधार विवरण कैसे अपडेट करें",
          steps: [
            { name: "पहले e-KYC पूरा करें", text: "e-KYC अनिवार्य पहला चरण है; जब तक यह न हो, विवरण edit नहीं होंगे।" },
            { name: "Edit option खोलें", text: "जन आधार सेक्शन में जो विवरण बदलना है चुनें — आय, बैंक, मोबाइल, पता, या परिवार सदस्य।" },
            { name: "नया विवरण डालें", text: "supporting document पर जैसा लिखा है वैसा ही सही विवरण डालें।" },
            { name: "supporting document अपलोड करें", text: "उस update type के लिए ज़रूरी document का स्पष्ट स्कैन attach करें (नीचे तालिका देखें)।" },
            { name: "submit कर verification का इंतज़ार करें", text: "अनुरोध दो-स्तरीय verification से गुज़रता है, जो आमतौर पर 7 से 15 दिन लेता है।" },
          ],
        },
        {
          type: "table",
          title: "update type अनुसार आवश्यक दस्तावेज़",
          cols: ["Update", "आवश्यक दस्तावेज़"],
          rows: [
            ["आय", "स्व-घोषणा या आय प्रमाण पत्र"],
            ["बैंक विवरण", "बैंक पासबुक कॉपी या रद्द चेक"],
            ["नया परिवार सदस्य", "जन्म प्रमाण पत्र और आधार कार्ड"],
            ["विवाह रिकॉर्ड", "विवाह प्रमाण पत्र"],
            ["भूमि / किसान विवरण", "जमाबंदी (भूमि रिकॉर्ड)"],
            ["मोबाइल नंबर", "सदस्य का Aadhaar OTP सत्यापन"],
          ],
        },
        {
          type: "section",
          title: "नामांकन या अपडेट स्थिति कैसे जांचें",
          body: [
            "अपने जन आधार dashboard में Enrolment Status option खोलें और देखें कि अनुरोध कहाँ है। हरा checkmark का अर्थ है अपडेट स्वीकृत। लाल क्रॉस का अर्थ है अस्वीकृत — आमतौर पर स्कैन दस्तावेज़ अस्पष्ट होने से — और आपको बेहतर कॉपी फिर से अपलोड कर दोबारा submit करना चाहिए।",
            "आप janaadhaar.rajasthan.gov.in पर अपना जन आधार या नामांकन नंबर डालकर भी स्थिति जांच सकते हैं। submit के बाद मिली रसीद या नामांकन संख्या संभाल कर रखें; लंबित अनुरोध देखने का यह सबसे तेज़ तरीका है।",
          ],
        },
        {
          type: "table",
          title: "जन आधार की सामान्य समस्याएं और हल",
          cols: ["समस्या", "कारण", "हल"],
          rows: [
            ["'Jan Aadhaar not found / data mismatch'", "गलत नंबर, या नाम रिकॉर्ड से मेल नहीं", "10-अंकीय family ID दोबारा जांचें; फिर भी न हो तो ई-मित्र केंद्र पर सत्यापित करें"],
            ["मोबाइल नंबर registered नहीं", "रिकॉर्ड पर पुराना या unlinked नंबर", "e-KYC से मोबाइल update करें, या आधार के साथ ई-मित्र केंद्र पर करें"],
            ["e-KYC pending", "किसी सदस्य ने e-KYC पूरा नहीं किया", "विवरण edit करने से पहले पाँच वर्ष से ऊपर हर सदस्य का e-KYC पूरा करें"],
            ["कोई परिवार सदस्य नहीं दिख रहा", "सदस्य अभी जोड़ा/लिंक नहीं", "जन्म प्रमाण पत्र और आधार के साथ Add Member use करें, या ई-मित्र केंद्र जाएं"],
            ["Biometric / OTP e-KYC बार-बार fail", "आधार मोबाइल निष्क्रिय या biometric mismatch", "उपलब्ध हो तो email/OTP route use करें, वरना ई-मित्र केंद्र पर पूरा करें"],
            ["Update अस्वीकृत (लाल क्रॉस)", "अस्पष्ट या गलत दस्तावेज़ अपलोड", "स्पष्ट, सही स्कैन फिर से अपलोड कर दोबारा submit करें"],
          ],
        },
        {
          type: "section",
          title: "सुरक्षा और शुल्क पर एक बात",
          body: [
            "जन आधार में नामांकन और अपडेट मुफ़्त है। ई-मित्र संचालक सहायता या प्रिंटआउट के लिए सरकार द्वारा तय छोटा शुल्क ले सकते हैं, पर रिकॉर्ड के लिए कभी नहीं। अपना SSO password या OTP किसी को न दें, चाहे कोई helpline से होने का दावा करके कॉल करे। RajSSO Guide एक स्वतंत्र गाइड है और कभी आपकी SSO ID, password या OTP नहीं मांगता।",
          ],
        },
      ],
      faqs: [
        { question: "जन आधार e-KYC कैसे पूरा करें?", answer: "sso.rajasthan.gov.in पर login करें, जन आधार tile खोलें और e-KYC चुनें। सदस्य चुनें, linked मोबाइल पर आए Aadhaar OTP से verify करें, और हर सदस्य के लिए दोहराएं। अन्य विवरण edit करने से पहले पाँच वर्ष से ऊपर हर सदस्य का e-KYC ज़रूरी है।" },
        { question: "क्या छात्रवृत्ति के लिए जन आधार जरूरी है?", answer: "हाँ। छात्रवृत्ति पात्रता, आय और परिवार विवरण सहित, जन आधार e-KYC से सत्यापित होती है। SSO छात्रवृत्ति पोर्टल से आवेदन से पहले आपका जन आधार रिकॉर्ड पूर्ण और अद्यतन होना चाहिए।" },
        { question: "जन आधार में मोबाइल नंबर कैसे अपडेट करें?", answer: "SSO से login कर जन आधार खोलें और मोबाइल update option चुनें। यह Aadhaar OTP से verify होता है। पुराना नंबर निष्क्रिय होने से OTP न पहुँचे तो आधार के साथ ई-मित्र केंद्र पर update करें।" },
        { question: "जन आधार अपडेट में कितना समय लगता है?", answer: "अपडेट आमतौर पर 7 से 15 दिन लेते हैं क्योंकि वे दो-स्तरीय verification से गुज़रते हैं। आप dashboard में Enrolment Status के तहत अनुरोध track कर सकते हैं।" },
        { question: "जन आधार स्थिति कैसे जांचें?", answer: "अपने जन आधार dashboard में Enrolment Status option खोलें, या janaadhaar.rajasthan.gov.in पर अपना जन आधार या नामांकन नंबर डालें। हरा टिक स्वीकृत; लाल क्रॉस अस्वीकृत और दोबारा submit की ज़रूरत।" },
        { question: "जन आधार और आधार में क्या फर्क है?", answer: "आधार UIDAI द्वारा व्यक्ति के लिए जारी 12-अंकीय राष्ट्रीय पहचान है। जन आधार राजस्थान की 10-अंकीय परिवार आईडी है जो सभी सदस्यों को जोड़ती है और राज्य योजनाओं की पात्रता जांचने में उपयोग होती है। दोनों अलग हैं; जन आधार e-KYC सत्यापन के लिए आधार का उपयोग करता है।" },
        { question: "क्या जन आधार बनाना या अपडेट करना मुफ़्त है?", answer: "हाँ। नामांकन और अपडेट मुफ़्त हैं। ई-मित्र संचालक सहायता या प्रिंटआउट के लिए सरकार द्वारा तय छोटा शुल्क ले सकते हैं, पर जन आधार रिकॉर्ड के लिए कभी नहीं।" },
        { question: "मेरे जन आधार में कोई परिवार सदस्य नहीं दिख रहा। क्या करूँ?", answer: "सदस्य के जन्म प्रमाण पत्र और आधार कार्ड के साथ Add Member option use करें, फिर उनका e-KYC पूरा करें। online न हो तो दस्तावेज़ों के साथ ई-मित्र केंद्र जाकर सदस्य को परिवार रिकॉर्ड में जोड़ें।" },
      ],
    },
  },
};

export function getServiceContent(slug: string, locale: Locale): ServiceRich | undefined {
  return serviceContent[slug]?.[locale];
}
