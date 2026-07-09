// DRAFT — not published. Candidate Rajasthan SSO / e-Mitra services to expand
// the services section, grouped by category. `priority: true` marks the core
// pages to build first.
//
// ponytail: data-only, rendered solely on the local dev server (see the
// /services hub). NOT in the sitemap and NOT indexable. Real pages live at the
// existing route `/service/[slug]` (singular); slugs here follow that. Some
// already exist as real pages (paymanager, rajkaj, jan-aadhaar) and are omitted
// or noted. No content is written here — that happens when a real page is built.

export interface DraftService {
  slug: string;
  name: string;
  priority?: boolean;
}

export interface DraftServiceGroup {
  category: string;
  items: DraftService[];
}

export const draftServiceGroups: DraftServiceGroup[] = [
  {
    category: "Citizen Services",
    items: [
      { slug: "emitra", name: "e-Mitra", priority: true },
      { slug: "jan-soochna", name: "Jan Soochna Portal", priority: true },
      { slug: "rajsampark", name: "Rajasthan Sampark (grievance)", priority: true },
      { slug: "e-district", name: "e-District", priority: true },
      { slug: "rti", name: "Right to Information (RTI)" },
      { slug: "digilocker", name: "DigiLocker Integration" },
      { slug: "e-vault", name: "Rajasthan e-Vault" },
    ],
  },
  {
    category: "Government Employee Services",
    items: [
      { slug: "sipf", name: "SIPF", priority: true },
      { slug: "ifms", name: "IFMS", priority: true },
      { slug: "paymanager-ddo", name: "PayManager DDO", priority: true },
      { slug: "eoffice", name: "eOffice", priority: true },
      { slug: "hrms", name: "HRMS" },
      { slug: "attendance", name: "Employee Attendance" },
      { slug: "leave-management", name: "Leave Management" },
      { slug: "acr", name: "ACR / APAR" },
      { slug: "employee-directory", name: "Employee Directory" },
    ],
  },
  {
    category: "Certificate Services",
    items: [
      { slug: "birth-certificate", name: "Birth Certificate" },
      { slug: "death-certificate", name: "Death Certificate" },
      { slug: "caste-certificate", name: "Caste Certificate" },
      { slug: "income-certificate", name: "Income Certificate" },
      { slug: "domicile-certificate", name: "Domicile Certificate" },
      { slug: "marriage-certificate", name: "Marriage Certificate" },
      { slug: "disability-certificate", name: "Disability Certificate" },
      { slug: "character-certificate", name: "Character Certificate" },
    ],
  },
  {
    category: "Land & Revenue",
    items: [
      { slug: "apna-khata", name: "Apna Khata", priority: true },
      { slug: "bhunaksha", name: "BhuNaksha", priority: true },
      { slug: "property-registration", name: "Property Registration", priority: true },
      { slug: "land-conversion", name: "Land Conversion" },
      { slug: "stamp-duty", name: "Stamp & Registration" },
      { slug: "revenue-records", name: "Revenue Records" },
    ],
  },
  {
    category: "Health",
    items: [
      { slug: "chiranjeevi", name: "Mukhyamantri Chiranjeevi", priority: true },
      { slug: "rghs", name: "Rajasthan Government Health Scheme (RGHS)", priority: true },
      { slug: "health-card", name: "Health Card" },
      { slug: "hospital-booking", name: "Hospital Appointment" },
      { slug: "blood-bank", name: "Blood Bank" },
    ],
  },
  {
    category: "Education",
    items: [
      { slug: "scholarship", name: "Scholarships" },
      { slug: "student-corner", name: "Student Services" },
      { slug: "hostel", name: "Hostel Services" },
      { slug: "college-admission", name: "College Admission" },
      { slug: "university-admission", name: "University Admission" },
      { slug: "degree-verification", name: "Degree Verification" },
    ],
  },
  {
    category: "Utility Services",
    items: [
      { slug: "electricity-bill", name: "Electricity Bill" },
      { slug: "water-bill", name: "Water Bill" },
      { slug: "property-tax", name: "Property Tax" },
      { slug: "mobile-recharge", name: "Mobile Recharge" },
      { slug: "dth-recharge", name: "DTH Recharge" },
      { slug: "gas-booking", name: "LPG Services" },
    ],
  },
  {
    category: "Transport",
    items: [
      { slug: "driving-licence", name: "Driving Licence", priority: true },
      { slug: "vehicle-registration", name: "Vehicle Registration" },
      { slug: "vehicle-permit", name: "Vehicle Permit" },
      { slug: "echallan", name: "e-Challan" },
      { slug: "fitness-certificate", name: "Vehicle Fitness" },
    ],
  },
  {
    category: "Agriculture",
    items: [
      { slug: "farmer-registration", name: "Farmer Registration" },
      { slug: "agriculture-schemes", name: "Agriculture Schemes" },
      { slug: "soil-health-card", name: "Soil Health Card" },
      { slug: "crop-insurance", name: "Crop Insurance" },
      { slug: "mandi-rates", name: "Mandi Rates" },
    ],
  },
  {
    category: "Business",
    items: [
      { slug: "eprocurement", name: "e-Procurement", priority: true },
      { slug: "building-plan", name: "Building Plan Approval (BPAS)", priority: true },
      { slug: "eauction", name: "e-Auction" },
      { slug: "msme", name: "MSME Services" },
      { slug: "startup-rajasthan", name: "Startup Rajasthan" },
      { slug: "fire-noc", name: "Fire NOC" },
      { slug: "trade-license", name: "Trade License" },
      { slug: "gst-services", name: "GST Services" },
    ],
  },
  {
    category: "Social Welfare",
    items: [
      { slug: "social-security-pension", name: "Social Security Pension", priority: true },
      { slug: "old-age-pension", name: "Old Age Pension" },
      { slug: "widow-pension", name: "Widow Pension" },
      { slug: "disability-pension", name: "Disability Pension" },
      { slug: "palanhar", name: "Palanhar Scheme" },
      { slug: "devnarayan", name: "Devnarayan Scheme" },
    ],
  },
  {
    category: "Other Digital Services",
    items: [
      { slug: "disaster-management", name: "Disaster Management" },
      { slug: "tourism", name: "Rajasthan Tourism" },
      { slug: "mining", name: "Mining Services" },
      { slug: "commercial-tax", name: "Commercial Tax" },
      { slug: "excise", name: "Excise Services" },
      { slug: "forest", name: "Forest Services" },
    ],
  },
];

// Count of services flagged as priority (build-first).
export const draftServicePriorityCount = draftServiceGroups
  .flatMap((g) => g.items)
  .filter((s) => s.priority).length;
