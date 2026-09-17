export interface OverviewRow {
  feature: string;
  description: string;
  badge?: string;
}

export interface FeeRow {
  category: string;
  fee: string;
}

export interface DocRow {
  updateType: string;
  requiredDoc: string;
}

export const OVERVIEW_TABLE: OverviewRow[] = [
  { feature: "Portal Name", description: "Rajasthan Single Sign-On (RajSSO)" },
  { feature: "Initiative By", description: "Department of Information Technology & Communication (DoIT&C), Govt of Rajasthan" },
  { feature: "Target Audience", description: "Citizens, Business Owners (Udhyog), State Government Employees" },
  { feature: "Services Covered", description: "Recruitment (OTR), Jan Aadhaar, e-Mitra, Scholarships, Land Records (Apna Khata), Health Insurance" },
  { feature: "Official URL", description: "https://sso.rajasthan.gov.in", badge: "Official Portal" },
  { feature: "Toll-Free Helpline", description: "1800 180 6127 (Toll-Free) / 0141-5153222 (General Helpdesk)" },
  { feature: "Official Support Email", description: "helpdesk.sso@rajasthan.gov.in" },
  { feature: "Recovery SMS Code", description: "SMS RJ SSO to 9223166166 from registered mobile" },
  { feature: "Registration Cost", description: "100% Free of cost for all Indian citizens", badge: "Free" },
];

export const OTR_FEES: FeeRow[] = [
  { category: "General / OBC (Creamy Layer) / Other State Candidates", fee: "₹600" },
  { category: "SC / ST / OBC (Non-Creamy Layer) / EWS / PwD (Rajasthan Domicile)", fee: "₹400" },
  { category: "Divyangjan (Special Abled Persons)", fee: "₹400" },
];

export const JAN_AADHAAR_DOCS: DocRow[] = [
  { updateType: "Annual Family Income", requiredDoc: "Income Certificate or Notarized Self-Declaration" },
  { updateType: "Bank Account Details", requiredDoc: "Copy of Bank Passbook showing IFSC & Account No., or Cancelled Cheque" },
  { updateType: "Adding New Family Member", requiredDoc: "Official Birth Certificate and Aadhaar Card of child" },
  { updateType: "Marriage Status Record", requiredDoc: "Registered Marriage Certificate issued by competent registrar" },
  { updateType: "Agricultural Land Record", requiredDoc: "Verified Jamabandi (RoR) from Apna Khata Revenue Portal" },
];

export const HOME_FAQS = [
  {
    question: "What is SSO ID Rajasthan and why is it required?",
    answer:
      "SSO ID (Single Sign-On Identity) is an online centralized digital credential launched by the Department of Information Technology & Communication (DoIT&C), Government of Rajasthan. It provides citizens, business owners, and state employees unified, single-credential access to over 100+ public government portals—including e-Mitra, Jan Aadhaar, scholarship schemes, land records (Apna Khata), and state recruitment exams (RPSC/RSSB)—without needing separate logins for each department.",
  },
  {
    question: "How do I register for an SSO ID for the first time?",
    answer:
      "Visit the official portal at https://sso.rajasthan.gov.in/register. Rajasthan residents should select the Citizen tab and register using their 10-digit Jan Aadhaar number or enrollment slip for instant profile authentication. Non-residents or out-of-state applicants can register using an active Google (Gmail) account. Once identity verification via OTP is completed, you create a permanent username and alphanumeric password.",
  },
  {
    question: "Is there any fee charged for creating or maintaining an SSO ID?",
    answer:
      "No. Registration and continuous maintenance of an SSO ID on the official Rajasthan government portal (sso.rajasthan.gov.in) is 100% free of cost for all citizens, students, commercial businesses, and government employees. The state government never charges access fees for holding a digital single sign-on identity.",
  },
  {
    question: "What is One-Time Registration (OTR) on SSO Rajasthan and how does the fee work?",
    answer:
      "One-Time Registration (OTR) is a mandatory recruitment feature within the SSO Recruitment Portal. Candidates pay a one-time verification fee per recruitment cycle (₹600 for General/Other States, ₹400 for reserved categories of Rajasthan domicile). Once OTR is finalized, aspirants can submit unlimited job applications across RPSC and RSSB examinations without paying separate application fees for each exam.",
  },
  {
    question: "What should I do if my Class 10 certificate details differ from Jan Aadhaar in OTR?",
    answer:
      "Your OTR profile permanently locks your Full Name, Father's Name, Date of Birth, and Gender based on your authentication source. If your Jan Aadhaar contains spelling discrepancies compared to your Secondary (Class 10) mark sheet, you must update your Jan Aadhaar record via the Jan Aadhaar portal or an e-Mitra kiosk before completing OTR fee payment. Correcting OTR fields after final submission requires official amendment window fees (approx. ₹300).",
  },
  {
    question: "How can I merge duplicate SSO IDs if I made two accounts?",
    answer:
      "To merge duplicate accounts, log in to the secondary account that you wish to close. Navigate to your dashboard, click the 'Edit Profile' pencil icon at the top right, select 'Deactivate Account', and choose the 'Merge' option. Complete Aadhaar OTP authentication and enter your Primary SSO ID as the destination. All linked departmental profiles and past recruitment records will migrate to your primary account, and the duplicate ID will be permanently deleted.",
  },
  {
    question: "How do I recover my SSO ID username or reset my password if I forget it?",
    answer:
      "For username recovery, send an SMS with the text 'RJ SSO' to 9223166166 from your registered mobile number; the system will reply immediately with your active SSOID. For password reset, click 'Forgot Password' on sso.rajasthan.gov.in and choose between mobile OTP verification, email reset link, or biometric Jan Aadhaar authentication.",
  },
  {
    question: "Can candidates from other Indian states apply for Rajasthan competitive exams via SSO?",
    answer:
      "Yes. Citizens residing in any state or union territory in India can register on sso.rajasthan.gov.in using their Google account. Under One-Time Registration (OTR), candidates without Rajasthan domicile certificates are categorized under the General (Unreserved) category and pay the ₹600 fee schedule.",
  },
  {
    question: "How do I update my mobile number in SSO ID if my registered SIM is lost or deactivated?",
    answer:
      "Because your SSO profile is synchronized with Jan Aadhaar and Aadhaar, you must first update your active mobile number in your Aadhaar card at an authorized Aadhaar Seva Kendra, followed by an e-KYC update in your Jan Aadhaar card. Once the state database refreshes, log in to SSO and click 'Sync Jan Aadhaar Data' in your profile settings to reflect your new phone number.",
  },
  {
    question: "What is the official toll-free customer care helpline for SSO Rajasthan?",
    answer:
      "The official Department of Information Technology & Communication (DoIT&C) helpdesk can be reached at 0141-5153222 or 0141-5123717. For Jan Aadhaar-specific inquiries, call the toll-free number 1800 180 6127. For administrative service complaints, citizens can dial Rajasthan Sampark CM Helpline at 181.",
  },
];
