// DRAFT — not published. Candidate Rajasthan exams to expand the exam section,
// grouped by recruiting authority. Extracted from keyword + exam research and
// kept honest about the login route (many RSSB/RPSC exams use SSO/OTR; High
// Court, university, and some cooperative posts use a SEPARATE registration and
// are NOT via SSO — flagged accordingly).
//
// ponytail: data-only, rendered solely on the local dev server (see the
// exam-calendar page). NOT in the sitemap and NOT indexable. No dates/fees are
// stored here on purpose — those get verified when a real /exam/[slug] page is
// built. English-only is fine for a draft; add Hindi when a page is published.

export type LoginRoute = "OTR + SSO" | "SSO" | "Separate";

export interface DraftExam {
  name: string;
  category: string;
  login: LoginRoute;
}

export interface DraftExamGroup {
  authority: string;
  portal: string;
  exams: DraftExam[];
}

export const draftExamGroups: DraftExamGroup[] = [
  {
    authority: "RPSC (Rajasthan Public Service Commission)",
    portal: "RPSC Recruitment Portal",
    exams: [
      { name: "RAS (Rajasthan Administrative Service)", category: "Civil Services", login: "OTR + SSO" },
      { name: "RTS (Subordinate Services)", category: "Civil Services", login: "OTR + SSO" },
      { name: "School Lecturer (1st Grade)", category: "Education", login: "OTR + SSO" },
      { name: "Senior Teacher (2nd Grade)", category: "Education", login: "OTR + SSO" },
      { name: "Assistant Professor", category: "Higher Education", login: "OTR + SSO" },
      { name: "Assistant Prosecution Officer (APO)", category: "Law", login: "OTR + SSO" },
      { name: "Junior Legal Officer (JLO)", category: "Law", login: "OTR + SSO" },
      { name: "Assistant Engineer (AE)", category: "Engineering", login: "OTR + SSO" },
      { name: "Junior Chemist", category: "Technical", login: "OTR + SSO" },
      { name: "Senior Scientific Officer", category: "Scientific", login: "OTR + SSO" },
      { name: "Food Safety Officer", category: "Health", login: "OTR + SSO" },
      { name: "Veterinary Officer", category: "Veterinary", login: "OTR + SSO" },
      { name: "Librarian Grade II", category: "Library", login: "OTR + SSO" },
      { name: "Programmer", category: "Information Technology", login: "OTR + SSO" },
      { name: "Statistical Officer", category: "Statistics", login: "OTR + SSO" },
      { name: "Rajasthan Police Sub Inspector (SI)", category: "Police", login: "OTR + SSO" },
    ],
  },
  {
    authority: "RSSB (Rajasthan Staff Selection Board, formerly RSMSSB)",
    portal: "State Recruitment Portal",
    exams: [
      { name: "CET (Graduation Level)", category: "Common Eligibility", login: "SSO" },
      { name: "CET (Senior Secondary Level)", category: "Common Eligibility", login: "SSO" },
      { name: "Patwari", category: "Revenue", login: "SSO" },
      { name: "Village Development Officer (VDO)", category: "Panchayati Raj", login: "SSO" },
      { name: "Gram Sevak", category: "Panchayat", login: "SSO" },
      { name: "LDC Grade II", category: "Office Staff", login: "SSO" },
      { name: "Junior Assistant", category: "Office Staff", login: "SSO" },
      { name: "Junior Accountant", category: "Finance", login: "SSO" },
      { name: "Tehsil Revenue Accountant", category: "Revenue", login: "SSO" },
      { name: "Agriculture Supervisor", category: "Agriculture", login: "SSO" },
      { name: "Lab Assistant", category: "Science", login: "SSO" },
      { name: "Forest Guard", category: "Forest", login: "SSO" },
      { name: "Forester", category: "Forest", login: "SSO" },
      { name: "Driver", category: "Transport", login: "SSO" },
      { name: "Conductor", category: "Transport", login: "SSO" },
      { name: "Motor Vehicle Sub Inspector", category: "Transport", login: "SSO" },
      { name: "Platoon Commander", category: "Security", login: "SSO" },
      { name: "Jail Prahari", category: "Home Department", login: "SSO" },
      { name: "Informatics Assistant", category: "Information Technology", login: "SSO" },
      { name: "Computer Instructor", category: "Education", login: "SSO" },
      { name: "Librarian Grade III", category: "Education", login: "SSO" },
      { name: "Physical Training Instructor (PTI)", category: "Education", login: "SSO" },
      { name: "Stenographer", category: "Office Staff", login: "SSO" },
      { name: "Tax Assistant", category: "Finance", login: "SSO" },
      { name: "Supervisor (Women)", category: "Social Welfare", login: "SSO" },
      { name: "Hostel Superintendent", category: "Education", login: "SSO" },
      { name: "ANM", category: "Medical", login: "SSO" },
      { name: "GNM", category: "Medical", login: "SSO" },
      { name: "Community Health Officer", category: "Health (NHM)", login: "SSO" },
      { name: "Pharmacist", category: "Medical", login: "SSO" },
      { name: "Nursing Officer", category: "Medical", login: "SSO" },
      { name: "Female Health Worker", category: "Medical", login: "SSO" },
      { name: "Multi Purpose Health Worker", category: "Medical", login: "SSO" },
      { name: "Animal Attendant", category: "Veterinary", login: "SSO" },
      { name: "Fourth Class Employee", category: "Group D", login: "SSO" },
      { name: "Police Constable", category: "Police", login: "SSO" },
    ],
  },
  {
    authority: "Other Rajasthan exam portals",
    portal: "Varies (see login route)",
    exams: [
      { name: "REET (Teacher Eligibility, RBSE)", category: "Teaching / Eligibility", login: "SSO" },
      { name: "State Eligibility Test (SET, University of Kota)", category: "Eligibility", login: "SSO" },
      { name: "Rajasthan Cooperative Recruitment (RAJFED)", category: "Cooperative", login: "SSO" },
      { name: "Rajasthan High Court LDC", category: "Judiciary Staff", login: "Separate" },
      { name: "Rajasthan High Court Civil Judge", category: "Judiciary", login: "Separate" },
      { name: "Rajasthan Judiciary (other posts)", category: "Judiciary", login: "Separate" },
      { name: "Rajasthan University Recruitments", category: "University", login: "Separate" },
    ],
  },
];
