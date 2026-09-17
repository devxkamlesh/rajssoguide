export interface Step {
  step: number;
  title: string;
  description: string;
  tip?: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface GuidePage {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  lead: string;
  officialUrl: string;
  officialButtonLabel: string;
  prerequisites: string[];
  steps: Step[];
  commonIssues?: { title: string; solution: string }[];
  faqs: Faq[];
}

export const GUIDES: Record<string, GuidePage> = {
  "sso-id-login": {
    slug: "sso-id-login",
    title: "SSO ID Login Rajasthan — Official Portal Sign-In Steps & Fixes",
    metaTitle: "SSO ID Login Rajasthan 2026 — Sign-In Guide & Error Solutions",
    metaDescription:
      "Step-by-step SSO ID Login guide for Rajasthan government portal (sso.rajasthan.gov.in). Learn how to sign in as Citizen, Employee, or Udyog, and fix common login errors.",
    eyebrow: "AUTHENTICATION PROTOCOL",
    lead:
      "To access government schemes, recruitment portals, and citizen certificates, sign in directly on the official Rajasthan Single Sign-On portal at sso.rajasthan.gov.in. Always ensure the browser URL ends in rajasthan.gov.in before typing your credentials.",
    officialUrl: "https://sso.rajasthan.gov.in/signin",
    officialButtonLabel: "Open Official SSO Login Portal",
    prerequisites: [
      "A registered Rajasthan SSO ID (Digital Identity username)",
      "Your secret account password (case-sensitive)",
      "Access to the registered mobile number (for 2FA/OTP if enabled)",
      "An updated web browser (Google Chrome, Mozilla Firefox, or Microsoft Edge recommended)",
    ],
    steps: [
      {
        step: 1,
        title: "Navigate to the Official Sign-In Endpoint",
        description:
          "Open your desktop or smartphone web browser and visit the verified government endpoint: https://sso.rajasthan.gov.in/signin. Inspect the browser address bar to confirm the secure HTTPS padlock and that the domain ends strictly in .rajasthan.gov.in.",
        tip: "Avoid clicking sponsored Google search ads or unverified WhatsApp links that mimic the official state login interface.",
      },
      {
        step: 2,
        title: "Enter Your Digital Identity (SSOID)",
        description:
          "Type your registered username into the 'Digital Identity (SSOID / Username)' input field. SSOIDs are not case-sensitive, but make sure not to paste leading or trailing whitespace characters.",
      },
      {
        step: 3,
        title: "Enter Your Account Password",
        description:
          "Carefully enter your password into the 'Password' field. Passwords are case-sensitive. Verify that your keyboard's Caps Lock is switched off and your input language is set to English.",
      },
      {
        step: 4,
        title: "Solve the 6-Digit Numeric Captcha Code",
        description:
          "Inspect the 6-digit numeric security captcha rendered inside the box on the right side. Enter the exact numbers in the 'Enter Captcha' box. If the numbers appear distorted or faint, click the circular reload arrow icon to generate a fresh code.",
      },
      {
        step: 5,
        title: "Submit Credentials & Authenticate OTP (If Prompted)",
        description:
          "Click the green 'Login' button. If your profile has two-factor authentication enabled or if you are logging in from an unfamiliar IP subnet, enter the 6-digit OTP received on your Jan Aadhaar-linked mobile phone.",
      },
      {
        step: 6,
        title: "Access Your Integrated Application Dashboard",
        description:
          "Upon verification, the portal loads your personalized RajSSO workspace. Use the quick-filter search bar to launch key state services including e-Mitra, Jan Aadhaar, RPSC Recruitment Portal, and Scholarship modules.",
      },
    ],
    commonIssues: [
      {
        title: "Invalid Digital Identity (SSOID) or Password",
        solution:
          "Verify if Caps Lock is enabled. Passwords are strictly case-sensitive. If forgotten, do not attempt more than 3 consecutive incorrect passwords to prevent a temporary lock. Use the 'Forgot Password' recovery link immediately.",
      },
      {
        title: "Session Expired / Session Timed Out Immediately",
        solution:
          "This occurs when your browser cache holds stale session tokens or when third-party cookies are blocked. Clear your browser cache and cookies for rajasthan.gov.in, or open an Incognito/Private browsing window.",
      },
      {
        title: "Captcha Code Does Not Match Error",
        solution:
          "The security captcha refreshes every 2 minutes. If you spend too long typing your password, the captcha expires in the backend. Always click the circular refresh arrow to generate a fresh 6-digit captcha before clicking Submit.",
      },
      {
        title: "White Screen or Portal Loading Error (Server 500 / 504)",
        solution:
          "During peak exam application dates (RPSC/RSSB), government servers experience heavy traffic. Wait 15–30 minutes, or access the portal during non-peak hours (early morning before 8 AM or late evening after 10 PM).",
      },
      {
        title: "OTP Not Received on Registered Mobile Number",
        solution:
          "Check whether your mobile carrier has active incoming SMS service and that Do Not Disturb (DND) is not blocking service route SMS. If your number changed, update it via Jan Aadhaar at an e-Mitra kiosk.",
      },
      {
        title: "Account Temporarily Locked (Exceeded Maximum Attempts)",
        solution:
          "After 5 failed login attempts, the system imposes an automated 30-minute security lockout. Wait 30 minutes without attempting to log in, then use 'Forgot Password' to reset your credentials.",
      },
    ],
    faqs: [
      {
        question: "What is the official website for SSO ID Login Rajasthan?",
        answer:
          "The official login URL is https://sso.rajasthan.gov.in/signin. Never enter your credentials on third-party portals, unverified mobile APKs, or unofficial guide websites.",
      },
      {
        question: "Can I log in using my mobile number instead of SSO ID?",
        answer:
          "No, the direct sign-in form requires your unique SSOID username. However, if you forgot your username, you can recover it in 10 seconds by sending an SMS with the text 'RJ SSO' to 9223166166 from your registered mobile number.",
      },
      {
        question: "How do government employees log in to the Rajasthan SSO portal?",
        answer:
          "Government employees sign in on the same portal (sso.rajasthan.gov.in/signin) using their assigned SIPF Employee ID (e.g., RJXX...) as their SSOID. Once logged in, their dashboard displays G2G apps like RajKaj, PayManager, and IFMS.",
      },
      {
        question: "Why does the SSO portal say 'Session Expired' immediately after clicking Login?",
        answer:
          "This issue typically stems from corrupted browser cookies, browser extensions (such as aggressive ad blockers), or clock desynchronization on your device. Clearing your browser cache or switching to an Incognito window usually resolves it instantly.",
      },
      {
        question: "Is there an official SSO Rajasthan mobile application?",
        answer:
          "Yes, the Government of Rajasthan provides the official 'RajSSO' mobile application on the Google Play Store, developed by the Department of Information Technology & Communication (DoIT&C).",
      },
      {
        question: "What should I do if my SSO ID account is locked?",
        answer:
          "Accounts are temporarily locked for 30 minutes after multiple failed password attempts. Wait for the automated timer to expire, or contact the DoIT&C Helpdesk at 0141-5153222 or email helpdesk.sso@rajasthan.gov.in to request an unlock.",
      },
      {
        question: "Can I use the same SSO ID on multiple computers simultaneously?",
        answer:
          "No. For security and anti-fraud purposes, Rajasthan SSO enforces single-session concurrent access. Logging in on a new device or browser tab will automatically terminate your previous active session.",
      },
      {
        question: "What should I do if the Captcha image is unreadable or fails repeatedly?",
        answer:
          "Click the circular green reload icon right beside the captcha image. This requests a clean 6-digit numeric token from the state server. Ensure your device's date and time are synchronized with network time.",
      },
      {
        question: "How do I safely sign out of SSO ID on a public cyber cafe computer?",
        answer:
          "Always click the 'Logout' link located at the top-right corner of the SSO dashboard. Never merely close the browser tab. After logging out, clear your browser history and delete any downloaded PDF certificates or admit cards from the local Downloads folder.",
      },
      {
        question: "Can non-Rajasthan residents log in to the Rajasthan SSO portal?",
        answer:
          "Yes. Candidates from other states across India who register using their Google account can sign in using their assigned SSOID to apply for open-competition recruitment exams (RPSC, RSSB) and state tenders.",
      },
    ],
  },

  "sso-id-registration": {
    slug: "sso-id-registration",
    title: "SSO ID Registration Rajasthan — How to Create a New Account",
    metaTitle: "SSO ID Registration Rajasthan 2026 — Create New SSO ID Online",
    metaDescription:
      "Complete guide for new SSO ID Registration in Rajasthan. Step-by-step instructions for Citizens (Jan Aadhaar & Google), Businesses (Udyog BRN), and Government Employees.",
    eyebrow: "NEW ACCOUNT SETUP",
    lead:
      "Creating an SSO ID is completely free for all citizens, businesses, and government employees of Rajasthan. A single digital identity grants lifetime access to state scholarships, recruitment exams, utility bill payments, and healthcare schemes.",
    officialUrl: "https://sso.rajasthan.gov.in/register",
    officialButtonLabel: "Open Official SSO Registration",
    prerequisites: [
      "Rajasthan Residents: Jan Aadhaar Card (mandatory for state subsidies & job quotas)",
      "Non-Rajasthan Residents: Valid Google Account (@gmail.com)",
      "Active mobile number linked to Jan Aadhaar / Aadhaar for OTP verification",
      "For Businesses: 16-digit Business Registration Number (BRN) or Udyog Aadhaar",
      "For Govt Employees: SIPF Employee Number and state-registered mobile number",
    ],
    steps: [
      {
        step: 1,
        title: "Open the Official State Registration Gateway",
        description:
          "Visit https://sso.rajasthan.gov.in/register directly in your browser. Look for the three primary category registration tabs on the screen: Citizen (नागरिक), Udhyog (उद्योग), and Govt. Employee (सरकारी कर्मचारी).",
        tip: "Registration on the official portal is 100% free. Never pay any fee or intermediary charge to create an SSO ID.",
      },
      {
        step: 2,
        title: "Select Your Registration Category",
        description:
          "Choose 'Citizen' if you are an individual applying for government schemes, recruitment exams, or welfare programs. Choose 'Udhyog' if you represent a proprietary firm, partnership, or corporate entity. Choose 'Govt. Employee' if you are a state civil servant.",
      },
      {
        step: 3,
        title: "Select Digital Identity Provider (Jan Aadhaar vs Google)",
        description:
          "For Rajasthan residents, select 'Jan Aadhaar'. Enter your 10-digit Jan Aadhaar Family ID or 16-digit Enrolment Receipt Number. If you reside outside Rajasthan, select 'Google' to authenticate with your Gmail credentials.",
        tip: "Rajasthan domicile holders MUST register using Jan Aadhaar. Creating an initial account via Google creates duplicate identity conflicts that block subsequent scholarship and exam applications!",
      },
      {
        step: 4,
        title: "Select Family Member & Authenticate Mobile OTP",
        description:
          "If registering via Jan Aadhaar, the system retrieves all family members enrolled on the card. Select your individual name radio button. Click 'Send OTP'. Enter the 6-digit one-time password dispatched to the mobile number registered with your Jan Aadhaar profile.",
      },
      {
        step: 5,
        title: "Choose Your Unique SSO Username & Set Password",
        description:
          "The system suggests an available SSOID username (e.g., your name followed by digits). You can customize it; an active green checkmark confirms availability. Create a strong password (minimum 8 characters with at least one uppercase letter, one lowercase letter, one number, and one special character like @, #, or $).",
      },
      {
        step: 6,
        title: "Submit Registration & Receive SMS Confirmation",
        description:
          "Click the 'Register' button. The portal generates your lifetime Rajasthan Single Sign-On digital identity and immediately dispatches a confirmation SMS containing your SSOID to your registered phone. You can now proceed to login immediately.",
      },
    ],
    commonIssues: [
      {
        title: "Jan Aadhaar / Aadhaar Already Linked to Another SSO ID",
        solution:
          "This indicates you or a family member previously created an SSO account using this Aadhaar or Jan Aadhaar number. Do not create another account. Use the 'Forgot SSOID' tool with your Jan Aadhaar number to retrieve your original username, or follow our account merge protocol.",
      },
      {
        title: "OTP Not Received on Registered Mobile Number",
        solution:
          "The OTP is dispatched to the mobile number seeded in your Jan Aadhaar card, not necessarily your current primary SIM. Verify which mobile number is mapped to your name in your Jan Aadhaar card at an e-Mitra kiosk or via the Jan Aadhaar citizen app.",
      },
      {
        title: "SSOID Username is Already Taken",
        solution:
          "SSO usernames are unique across the entire state database. If your preferred name is taken, append your birth year, district code, or initials (e.g., rahul_jaipur98) until the system shows a green checkmark indicating availability.",
      },
      {
        title: "Business Registration Number (BRN) Validation Error",
        solution:
          "For Udhyog registrations, ensure your 16-digit BRN is actively verified on the Rajasthan Business Register portal (raxbp.rajasthan.gov.in). Inactive or newly applied BRNs may take 24–48 hours to synchronize with SSO.",
      },
      {
        title: "Government Employee SIPF Details Not Found",
        solution:
          "Ensure your DDO (Drawing and Disbursing Officer) has entered your employee master data in the State Insurance and Provident Fund (SIPF) portal. If recently appointed, contact your department nodal officer for SIPF profile activation.",
      },
    ],
    faqs: [
      {
        question: "Is there any fee or charge for SSO ID registration in Rajasthan?",
        answer:
          "No. Registration on the Rajasthan SSO portal is 100% free of charge. No government fee is levied. If an internet cafe or agent assists you, they can only charge a nominal computer assistance fee, but the government service itself is completely free.",
      },
      {
        question: "Can someone residing outside Rajasthan create an SSO ID?",
        answer:
          "Yes. Residents of other Indian states and union territories can register using the 'Google' option under the Citizen tab. They can utilize the account to apply for open-category competitive recruitment exams (RPSC, RSSB) and state tenders.",
      },
      {
        question: "Can an individual citizen have two separate SSO IDs?",
        answer:
          "No. Rajasthan government policy strictly prohibits duplicate SSO accounts for a single citizen. Your Jan Aadhaar and Aadhaar numbers can only be mapped to one active SSOID. Having duplicate IDs leads to application rejections in RPSC/RSSB recruitment and scholarship audits.",
      },
      {
        question: "What documents are required for Rajasthan SSO ID registration?",
        answer:
          "For Rajasthan residents: Jan Aadhaar Card (or Jan Aadhaar Enrolment ID) and an active mobile number linked to it. For non-residents: A valid Google Account. For businesses: 16-digit BRN. For state employees: SIPF Employee ID.",
      },
      {
        question: "Why should Rajasthan residents never register using Google?",
        answer:
          "Registering via Google creates an unlinked citizen account. When you later attempt to link your Jan Aadhaar for exam fee exemptions or domicile verification, the system throws duplicate record errors. Registering directly with Jan Aadhaar prevents this entirely.",
      },
      {
        question: "Can multiple family members share a single Jan Aadhaar for different SSO IDs?",
        answer:
          "Yes! A single Jan Aadhaar card contains multiple family members. During registration, the portal displays all enrolled family members. Each family member can select their individual name and create their own independent SSO ID with their own unique password.",
      },
      {
        question: "What are the password requirements for a new SSO ID?",
        answer:
          "Your password must be at least 8 characters long and contain at least one uppercase letter (A-Z), one lowercase letter (a-z), one numeral (0-9), and one special symbol (e.g., @, #, $, %, !). Avoid using your name or date of birth.",
      },
      {
        question: "How do I update my mobile number if I change my SIM card after registration?",
        answer:
          "Log in to your SSO dashboard, click the 'Edit Profile' pencil icon at the top, and update your mobile number via OTP verification. You must also update your mobile number in your Jan Aadhaar card at any authorized e-Mitra kiosk.",
      },
      {
        question: "Can I change my SSO ID username after completing registration?",
        answer:
          "No. Once an SSOID username is created and registered in the state database, it cannot be edited or renamed. However, all personal details (name, email, phone, address, photo) within the profile can be updated at any time.",
      },
      {
        question: "What should I do if the registration portal displays 'Internal Server Error'?",
        answer:
          "This typically occurs during statewide recruitment application deadlines when server load spikes. Clear your browser cookies, verify your internet connection, or retry during off-peak hours (early morning before 8:00 AM or late evening).",
      },
    ],
  },

  "forgot-sso-id": {
    slug: "forgot-sso-id",
    title: "Forgot SSO ID or Password — Complete Recovery Protocols",
    metaTitle: "Forgot SSO ID & Password Rajasthan — Recovery Guide (SMS & Online)",
    metaDescription:
      "Easily recover your forgotten SSO ID username or reset your SSO password in Rajasthan. Official SMS code (9223166166), Jan Aadhaar OTP, and Helpdesk assistance.",
    eyebrow: "RECOVERY PROTOCOL",
    lead:
      "If you cannot sign in because you forgot your SSO username or misplaced your password, do not register a new account. Use the official SMS recovery service or the portal's online self-service recovery options.",
    officialUrl: "https://sso.rajasthan.gov.in/forgotsd",
    officialButtonLabel: "Open Official Account Recovery",
    prerequisites: [
      "Registered mobile number active to receive SMS and OTPs",
      "Jan Aadhaar Card Number (10 digits) or Aadhaar Number (12 digits)",
      "Access to registered email address (if utilizing email reset link)",
      "Registered SIM card inserted in phone (if utilizing 10-second SMS recovery)",
    ],
    steps: [
      {
        step: 1,
        title: "Fastest Method: Retrieve SSOID via 10-Second SMS",
        description:
          "Open your mobile phone's SMS application. Create a new message: type RJ SSO (with a single space) and send it to 9223166166. Within 10 to 30 seconds, the Rajasthan state server replies with your exact registered SSOID username.",
        tip: "You must send this SMS from the exact SIM card registered to your Jan Aadhaar / SSO profile. Standard carrier SMS rates apply.",
      },
      {
        step: 2,
        title: "Online Method: Open the Official Recovery Gateway",
        description:
          "If you prefer an online web interface, navigate to https://sso.rajasthan.gov.in/signin. Locate the two self-service recovery links situated directly beneath the login credentials box: 'I Forgot my SSOID' and 'I Forgot my Password'.",
      },
      {
        step: 3,
        title: "Select Your Recovery Identifier (Jan Aadhaar, Aadhaar, or Google)",
        description:
          "Click 'I Forgot my SSOID'. Select your user category ('Citizen'). Choose your verification identifier: 'Jan Aadhaar' (enter your 10-digit ID), 'Aadhaar' (enter 12 digits), or 'Google' (if you registered with Gmail).",
      },
      {
        step: 4,
        title: "Authenticate with One-Time Password (OTP)",
        description:
          "If using Jan Aadhaar, select your individual name from the family roster. Click 'Send OTP'. The portal transmits a 6-digit verification code to your registered mobile phone. Enter the code to validate your identity.",
      },
      {
        step: 5,
        title: "Reveal and Record Your Retrieved SSOID",
        description:
          "Upon successful OTP validation, the screen immediately displays your registered SSOID. Simultaneously, the state gateway dispatches an SMS confirmation to your phone for permanent record-keeping.",
      },
      {
        step: 6,
        title: "Reset Forgotten Password in 3 Simple Steps",
        description:
          "If you know your SSOID but misplaced your password, click 'I Forgot my Password'. Enter your SSOID. Choose your reset channel: Mobile OTP, Email Link, or Aadhaar Biometric. Enter the verification code and set a new password (min. 8 characters with upper, lower, numeric, and special symbols).",
      },
    ],
    commonIssues: [
      {
        title: "Registered Mobile Number is Lost or Deactivated",
        solution:
          "If you no longer retain access to the phone number on file, automated OTP recovery will not work. You must visit your local authorized e-Mitra kiosk with your physical Jan Aadhaar card and Aadhaar card to update your mobile number via biometric fingerprint authentication.",
      },
      {
        title: "SMS to 9223166166 Failed to Deliver or No Reply",
        solution:
          "Verify that your SIM card has an active SMS balance or plan (some prepaid plans block outgoing SMS without a top-up). On dual-SIM phones, ensure you sent the SMS from SIM 1 or SIM 2 matching your registered number.",
      },
      {
        title: "Password Reset Link Has Expired",
        solution:
          "For cybersecurity reasons, the password reset token dispatched to your email address or SMS expires exactly 15 minutes after issuance. If expired, return to the recovery page and request a fresh reset link.",
      },
      {
        title: "Aadhaar OTP Not Arriving on Mobile",
        solution:
          "UIDAI Aadhaar OTPs are sent to the mobile number registered in the central Aadhaar database (UIDAI), which may differ from your Jan Aadhaar number. Verify your registered mobile on uidai.gov.in before retrying.",
      },
      {
        title: "Account Permanently Blocked Due to Inactivity",
        solution:
          "If an SSO ID remains unused for over 3 years, it may enter an archived state. Contact the DoIT&C Helpdesk at 0141-5153222 or email helpdesk.sso@rajasthan.gov.in with scanned proof of identity to reactivate your profile.",
      },
    ],
    faqs: [
      {
        question: "What is the official SMS number and syntax to recover Rajasthan SSO ID?",
        answer:
          "Compose an SMS with the exact text 'RJ SSO' (in capital letters with a space) and send it to 9223166166 from your registered mobile phone. You will receive an instant SMS reply containing your SSOID.",
      },
      {
        question: "Can I recover my SSO ID if I lost my registered mobile SIM card?",
        answer:
          "Yes, but you cannot use the instant SMS or online OTP method. You must visit any nearby e-Mitra kiosk with your original Jan Aadhaar and Aadhaar card, undergo biometric fingerprint verification, and update your active mobile number in the state registry.",
      },
      {
        question: "How do I reset my SSO password if I already know my username?",
        answer:
          "Go to sso.rajasthan.gov.in/signin and click 'I Forgot my Password'. Enter your SSOID and choose either Mobile SMS, Email, or Aadhaar. Authenticate the OTP sent to your chosen channel and enter your new password twice.",
      },
      {
        question: "What are the password complexity rules for Rajasthan SSO?",
        answer:
          "Your new password must be at least 8 characters in length and include at least one uppercase letter (A-Z), one lowercase letter (a-z), one numeric digit (0-9), and one special symbol (such as @, #, $, or %).",
      },
      {
        question: "How long does a password reset link remain valid?",
        answer:
          "The password reset token sent via email or SMS link remains valid for 15 minutes. If you do not complete the reset within this window, the token automatically expires and you must request a new link.",
      },
      {
        question: "Will recovering my password erase my past exam forms or certificates?",
        answer:
          "No. Resetting your password only updates your authentication credential. All your previous RPSC/RSSB applications, admit cards, Jan Aadhaar data, and e-Mitra payment receipts remain 100% intact.",
      },
      {
        question: "Can I recover my SSO ID using my Aadhaar number or Virtual ID (VID)?",
        answer:
          "Yes. On the 'I Forgot my SSOID' portal page, select 'Aadhaar' as your identifier and enter your 12-digit Aadhaar number or 16-digit VID. Validate the OTP sent to your UIDAI-registered phone to reveal your SSOID.",
      },
      {
        question: "Why did I not receive a reply after sending SMS RJ SSO to 9223166166?",
        answer:
          "Common reasons include: (1) Sending the SMS from an unregistered SIM card; (2) Insufficient balance on your cellular plan for outgoing SMS; (3) Telecom network routing delays during peak hours. Verify your carrier balance and retry.",
      },
      {
        question: "Can multiple family members recover different SSO IDs from the same phone number?",
        answer:
          "Yes. If multiple family members share a registered mobile number on their Jan Aadhaar card, the online recovery portal lists all member names enrolled under that card. Select your individual name to recover your specific SSOID.",
      },
      {
        question: "What is the official helpline for SSO ID recovery escalation?",
        answer:
          "If all automated recovery methods fail, contact the Department of IT&C Helpdesk by phone at 0141-5153222 / 0141-2740038 (Monday to Friday, 9:30 AM to 6:00 PM) or email helpdesk.sso@rajasthan.gov.in with your identity documents.",
      },
    ],
  },
};
