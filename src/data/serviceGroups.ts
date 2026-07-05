// Bilingual, audience-grouped service catalogue for the home page's
// "Major Services" section. Each group targets one type of SSO user.
import type { Locale } from "@/lib/i18n";

type L<T> = Record<Locale, T>;

export interface ServiceItem {
  name: string;
  desc: string;
}
export interface ServiceGroup {
  audience: string;
  icon: string;
  services: ServiceItem[];
}

export const serviceGroupsTitle: L<string> = {
  en: "Major Services Available Through SSO",
  hi: "एसएसओ के माध्यम से उपलब्ध प्रमुख सेवाएं",
};

export const serviceGroupsIntro: L<string> = {
  en: "Your single SSO login opens a dashboard of tiles grouped loosely by who needs them. Here is what one account actually reaches.",
  hi: "आपका एक एसएसओ लॉगिन एक डैशबोर्ड खोलता है जहां सेवाएं उपयोगकर्ता के अनुसार समूहित होती हैं। एक खाता वास्तव में किन सेवाओं तक पहुंचता है, देखें।",
};

export const serviceGroups: L<ServiceGroup[]> = {
  en: [
    {
      audience: "Students & Job Seekers",
      icon: "🎓",
      services: [
        { name: "Recruitment Portal (OTR)", desc: "RPSC and RSMSSB vacancies and One-Time Registration applications." },
        { name: "Scholarship Portals", desc: "SJE schemes for SC, ST, OBC, EWS, and minority students." },
        { name: "e-Learning & e-Library", desc: "Digital study material and reference resources." },
        { name: "Academic Bank of Credits", desc: "Sync your degrees and credits with your ABC ID." },
      ],
    },
    {
      audience: "General Citizens",
      icon: "👥",
      services: [
        { name: "e-Mitra", desc: "Hundreds of services from bill payments to certificate issuance." },
        { name: "Jan Aadhaar", desc: "Manage family records and check scheme eligibility." },
        { name: "Chiranjeevi / MAAY", desc: "Enrol in state health-insurance schemes." },
        { name: "Raj eVault", desc: "Digital locker for storing verified documents." },
      ],
    },
    {
      audience: "Government Employees",
      icon: "🏛️",
      services: [
        { name: "RajKaj", desc: "Leave applications, ACRs, and inter-departmental work." },
        { name: "SIPF", desc: "Provident fund balances, insurance, and loan applications." },
        { name: "PayManager", desc: "Salary slips and GA-55 forms." },
        { name: "Attendance MIS & e-Gras", desc: "Office attendance records and government receipts." },
      ],
    },
    {
      audience: "Business Owners",
      icon: "🏢",
      services: [
        { name: "State GST Portal", desc: "File returns and manage GST compliance." },
        { name: "BPAS", desc: "Building plan approvals for construction projects." },
        { name: "Udyog Aadhaar / BRN", desc: "Business registration and industrial licensing." },
        { name: "Labour Compliance", desc: "Labour department tools and renewals." },
      ],
    },
  ],
  hi: [
    {
      audience: "छात्र और नौकरी चाहने वाले",
      icon: "🎓",
      services: [
        { name: "भर्ती पोर्टल (OTR)", desc: "RPSC और RSMSSB रिक्तियां और वन-टाइम रजिस्ट्रेशन आवेदन।" },
        { name: "छात्रवृत्ति पोर्टल", desc: "SC, ST, OBC, EWS और अल्पसंख्यक छात्रों के लिए SJE योजनाएं।" },
        { name: "ई-लर्निंग और ई-लाइब्रेरी", desc: "डिजिटल अध्ययन सामग्री और संदर्भ संसाधन।" },
        { name: "एकेडमिक बैंक ऑफ क्रेडिट्स", desc: "अपनी डिग्री और क्रेडिट को ABC ID से सिंक करें।" },
      ],
    },
    {
      audience: "सामान्य नागरिक",
      icon: "👥",
      services: [
        { name: "ई-मित्र", desc: "बिल भुगतान से लेकर प्रमाण पत्र जारी करने तक सैकड़ों सेवाएं।" },
        { name: "जन आधार", desc: "परिवार रिकॉर्ड प्रबंधित करें और योजना पात्रता जांचें।" },
        { name: "चिरंजीवी / MAAY", desc: "राज्य स्वास्थ्य बीमा योजनाओं में नामांकन करें।" },
        { name: "राज ई-वॉल्ट", desc: "सत्यापित दस्तावेज़ संग्रहीत करने के लिए डिजिटल लॉकर।" },
      ],
    },
    {
      audience: "सरकारी कर्मचारी",
      icon: "🏛️",
      services: [
        { name: "राजकाज", desc: "अवकाश आवेदन, ACR और अंतर-विभागीय कार्य।" },
        { name: "SIPF", desc: "भविष्य निधि शेष, बीमा और ऋण आवेदन।" },
        { name: "पे-मैनेजर", desc: "वेतन पर्ची और GA-55 फॉर्म।" },
        { name: "अटेंडेंस MIS और e-Gras", desc: "कार्यालय उपस्थिति रिकॉर्ड और सरकारी रसीदें।" },
      ],
    },
    {
      audience: "व्यवसाय स्वामी",
      icon: "🏢",
      services: [
        { name: "राज्य GST पोर्टल", desc: "रिटर्न दाखिल करें और GST अनुपालन प्रबंधित करें।" },
        { name: "BPAS", desc: "निर्माण परियोजनाओं के लिए भवन योजना अनुमोदन।" },
        { name: "उद्योग आधार / BRN", desc: "व्यवसाय पंजीकरण और औद्योगिक लाइसेंसिंग।" },
        { name: "श्रम अनुपालन", desc: "श्रम विभाग उपकरण और नवीनीकरण।" },
      ],
    },
  ],
};
