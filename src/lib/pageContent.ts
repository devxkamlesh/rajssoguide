// Generates substantial (200+ word) localized body content for the
// programmatic pages, weaving in each entity's specific data so pages differ.
import type { Locale } from "./i18n";
import type { Exam, Service, City, Scholarship } from "./content";
import type { FaqItem } from "./schema";

export function examBody(e: Exam, loc: Locale): string[] {
  const name = e.name[loc];
  const full = e.fullName[loc];
  if (loc === "hi") {
    return [
      `${full} के लिए आवेदन राजस्थान एसएसओ पोर्टल (sso.rajasthan.gov.in) के माध्यम से किया जाता है। पहले अपनी एसएसओ आईडी से लॉगिन करें, फिर भर्ती पोर्टल खोलें और वन-टाइम रजिस्ट्रेशन (OTR) पूरा करें। OTR एक बार करने के बाद आप 2026 की कई भर्तियों में बिना बार-बार शुल्क दिए आवेदन कर सकते हैं।`,
      `${name} की OTR फीस श्रेणी अनुसार है — सामान्य/ओबीसी (क्रीमी)/अन्य राज्य के लिए ₹${e.otrFee.general} और राजस्थान के एससी/एसटी/ओबीसी (एनसीएल)/ईडब्ल्यूएस/दिव्यांग के लिए ₹${e.otrFee.sc_st}। यह शुल्क एक बार देना होता है। OTR के दौरान आपका नाम, जन्मतिथि और लिंग आधार/जन आधार से स्वतः प्राप्त होते हैं, इसलिए सुनिश्चित करें कि ये विवरण आपकी 10वीं की अंकतालिका से मेल खाते हों।`,
      `इस परीक्षा से जुड़ी प्रमुख एसएसओ सेवाएं हैं: ${e.services.join(", ")}. आवेदन की अंतिम तिथि ${e.lastDate} तक है — समय रहते आवेदन करें क्योंकि अंतिम दिनों में पोर्टल पर भार बढ़ जाता है। नवीनतम अधिसूचना और सटीक तिथियों के लिए हमेशा RPSC/RSSB की आधिकारिक वेबसाइट और एसएसओ पोर्टल देखें।`,
    ];
  }
  return [
    `Applications for ${full} are submitted through the Rajasthan SSO portal at sso.rajasthan.gov.in. First log in with your SSO ID, open the Recruitment Portal, and complete your One-Time Registration (OTR). Once OTR is done, you can apply to multiple 2026 vacancies without paying the fee again for each exam.`,
    `The OTR fee for ${name} is category-based — ₹${e.otrFee.general} for General/OBC (creamy)/other-state candidates and ₹${e.otrFee.sc_st} for Rajasthan SC/ST/OBC (NCL)/EWS/PwD candidates. This fee is paid only once. During OTR your name, date of birth, and gender are auto-fetched from Aadhaar or Jan Aadhaar, so make sure these details match your Class 10 marksheet exactly to avoid correction charges.`,
    `Key SSO services linked to this exam include: ${e.services.join(", ")}. The last date to apply is ${e.lastDate} — apply early, because the portal gets heavy traffic in the final days before the deadline. For the latest notification and exact dates, always confirm on the official RPSC/RSSB websites and the SSO portal.`,
  ];
}

export function serviceBody(s: Service, loc: Locale): string[] {
  const name = s.name[loc];
  if (loc === "hi") {
    return [
      `${name} राजस्थान एसएसओ पोर्टल से जुड़ी एक प्रमुख सेवा है। ${s.purpose[loc]} इसका उपयोग करने के लिए sso.rajasthan.gov.in पर अपनी एसएसओ आईडी से लॉगिन करें और डैशबोर्ड पर ${name} आइकन चुनें।`,
      `एक ही एसएसओ लॉगिन से आप ${name} सहित 100 से अधिक सरकारी सेवाओं तक पहुँच सकते हैं — हर सेवा के लिए अलग यूज़रनेम और पासवर्ड की ज़रूरत नहीं होती। यदि आपके पास अभी तक एसएसओ आईडी नहीं है, तो पहले मुफ़्त रजिस्ट्रेशन पूरा करें, जो जन आधार, आधार या Google अकाउंट से किया जा सकता है।`,
      `सुरक्षा के लिए ${name} या किसी भी सेवा की जानकारी केवल आधिकारिक पोर्टल पर ही दर्ज करें। यदि लॉगिन या सेवा में समस्या आती है, तो ब्राउज़र कैश साफ करें, ऑफ-पीक समय में पुनः प्रयास करें, या एसएसओ हेल्पडेस्क 0141-5153222 पर संपर्क करें। RajSSO Guide एक स्वतंत्र मार्गदर्शिका है और कभी भी आपका पासवर्ड या ओटीपी नहीं मांगता।`,
    ];
  }
  return [
    `${name} is one of the key services linked to the Rajasthan SSO portal. ${s.purpose[loc]} To use it, log in with your SSO ID at sso.rajasthan.gov.in and select the ${name} icon on your dashboard.`,
    `A single SSO login gives you access to ${name} and more than 100 other government services — there is no need for a separate username and password for each one. If you do not have an SSO ID yet, complete the free registration first, which can be done using Jan Aadhaar, Aadhaar, or a Google account.`,
    `For your security, only enter ${name} or any service details on the official portal. If you face a login or service issue, clear your browser cache, try again during off-peak hours, or contact the SSO helpdesk on 0141-5153222. RajSSO Guide is an independent guide and never asks for your password or OTP.`,
  ];
}

export function cityBody(c: City, loc: Locale): string[] {
  const name = c.name[loc];
  const region = c.region[loc];
  const knownFor = c.knownFor[loc];
  const note = c.localNote[loc];
  if (loc === "hi") {
    return [
      `${name}, राजस्थान के ${region} क्षेत्र में, ${knownFor} है। यहाँ के निवासी एक ही राजस्थान एसएसओ आईडी से 100 से अधिक सरकारी सेवाओं तक पहुँच सकते हैं — नौकरी और छात्रवृत्ति आवेदन से लेकर बिजली बिल भुगतान और जन आधार अपडेट तक, सब कुछ sso.rajasthan.gov.in पर, बार-बार सरकारी कार्यालय जाए बिना।`,
      `${name} में ई-मित्र केंद्रों का व्यापक नेटवर्क है जहाँ आप एसएसओ आईडी रजिस्ट्रेशन, दस्तावेज़ अपडेट और सेवा आवेदन में सीधी सहायता ले सकते हैं। यदि आपका रजिस्टर्ड मोबाइल नंबर बदल गया है या ओटीपी नहीं मिल रहा, तो अपने आधार या जन आधार के साथ ${name} के नज़दीकी ई-मित्र केंद्र पर जाएं ताकि संचालक आपके विवरण व्यक्तिगत रूप से अपडेट कर सके।`,
      `${name} के छात्रों और नौकरी आवेदकों के लिए एसएसओ आईडी आवश्यक है, क्योंकि RPSC, RSSB और पटवारी भर्तियों के लिए वन-टाइम रजिस्ट्रेशन (OTR) इसी पोर्टल से होता है। ${note} नई एसएसओ आईडी बनाना पूरी तरह मुफ़्त है और पाँच मिनट से कम समय लेता है — आधिकारिक कार्यों के लिए हमेशा sso.rajasthan.gov.in का ही उपयोग करें।`,
    ];
  }
  return [
    `${name}, in the ${region} region of Rajasthan, is ${knownFor}. Its residents use a single Rajasthan SSO ID to reach more than 100 government services online — from applying for jobs and scholarships to paying electricity bills and updating Jan Aadhaar — all at sso.rajasthan.gov.in without repeated trips to a government office.`,
    `${name} has a wide network of e-Mitra centres where you can get hands-on help with SSO ID registration, document updates, and service applications. If your registered mobile number has changed or your OTP is not arriving, visit a nearby e-Mitra centre in ${name} with your Aadhaar or Jan Aadhaar so an operator can update your details in person.`,
    `For students and job seekers in ${name}, the SSO ID is essential because the One-Time Registration (OTR) for recruitments such as RPSC, RSSB, and Patwari is done through this portal. ${note} Creating a new SSO ID is completely free and takes under five minutes — for all official actions, always use sso.rajasthan.gov.in.`,
  ];
}

export function scholarshipBody(s: Scholarship, loc: Locale): string[] {
  const name = s.name[loc];
  if (loc === "hi") {
    return [
      `${name} राजस्थान सरकार की छात्रवृत्ति योजनाओं का हिस्सा है और इसके लिए आवेदन एसएसओ आईडी से किया जाता है। पात्रता: ${s.eligibility[loc]}`,
      `आवेदन के लिए sso.rajasthan.gov.in पर लॉगिन करें और सामाजिक न्याय एवं अधिकारिता विभाग (SJE) के छात्रवृत्ति पोर्टल को चुनें। आवेदन से पहले अपना जन आधार ई-केवाईसी पूरा कर लें, क्योंकि छात्रवृत्ति के लिए परिवार और आय विवरण जन आधार से सत्यापित होते हैं। आय प्रमाणपत्र, बैंक पासबुक और जाति/श्रेणी प्रमाणपत्र जैसे दस्तावेज़ तैयार रखें।`,
      `आवेदन जमा करने के बाद आप एसएसओ डैशबोर्ड से अपनी छात्रवृत्ति की स्थिति (लंबित/स्वीकृत/अस्वीकृत) देख सकते हैं। सही और स्पष्ट दस्तावेज़ अपलोड करने से स्वीकृति तेज़ होती है। नवीनतम आय सीमा और अंतिम तिथियों के लिए SJE की आधिकारिक वेबसाइट देखें। एसएसओ आईडी बनाना और छात्रवृत्ति आवेदन पूरी तरह मुफ़्त है।`,
    ];
  }
  return [
    `${name} is part of the Government of Rajasthan's scholarship schemes, and applications are submitted using your SSO ID. Eligibility: ${s.eligibility[loc]}`,
    `To apply, log in at sso.rajasthan.gov.in and select the Social Justice & Empowerment (SJE) scholarship portal. Complete your Jan Aadhaar e-KYC before applying, because family and income details for scholarships are verified through Jan Aadhaar. Keep documents ready such as an income certificate, bank passbook, and your caste or category certificate.`,
    `After you submit, you can track your scholarship status (Pending / Approved / Rejected) from the SSO dashboard. Uploading correct and clearly scanned documents helps your application get approved faster. For the latest income slabs and last dates, check the official SJE website. Creating an SSO ID and applying for the scholarship are both completely free.`,
  ];
}

// City-specific FAQ. Factual, no invented numbers — adds unique content and
// a FAQPage rich-result opportunity to each city page.
export function cityFaqs(c: City, loc: Locale): FaqItem[] {
  const name = c.name[loc];
  if (loc === "hi") {
    return [
      {
        question: `${name} में एसएसओ आईडी की मदद कहाँ से मिलेगी?`,
        answer: `${name} के निवासी sso.rajasthan.gov.in पर ऑनलाइन एसएसओ आईडी बना या रिकवर कर सकते हैं, या अपने आधार/जन आधार कार्ड के साथ ${name} के नज़दीकी ई-मित्र केंद्र पर जाकर रजिस्ट्रेशन, ओटीपी समस्या और दस्तावेज़ अपडेट में व्यक्तिगत सहायता ले सकते हैं।`,
      },
      {
        question: `${name} में एसएसओ आईडी बनाना मुफ़्त है?`,
        answer: `हाँ। ${name} सहित पूरे राजस्थान में एसएसओ आईडी बनाना पूरी तरह मुफ़्त है। ई-मित्र केंद्र सहायता या प्रिंटआउट के लिए छोटा सेवा शुल्क ले सकते हैं, पर एसएसओ खाता स्वयं निःशुल्क है।`,
      },
      {
        question: `${name} के छात्र एसएसओ आईडी से RPSC/RSMSSB परीक्षाओं के लिए आवेदन कर सकते हैं?`,
        answer: `हाँ। ${name} के छात्र इसी एसएसओ आईडी से वन-टाइम रजिस्ट्रेशन (OTR) पूरा करके भर्ती पोर्टल के माध्यम से RPSC, RSMSSB और पटवारी भर्तियों में आवेदन करते हैं।`,
      },
    ];
  }
  return [
    {
      question: `Where can I get SSO ID help in ${name}?`,
      answer: `Residents of ${name} can create or recover an SSO ID online at sso.rajasthan.gov.in, or visit any nearby e-Mitra centre in ${name} with an Aadhaar or Jan Aadhaar card for in-person help with registration, OTP issues, and document updates.`,
    },
    {
      question: `Is creating an SSO ID free in ${name}?`,
      answer: `Yes. Creating an SSO ID is completely free anywhere in Rajasthan, including ${name}. e-Mitra centres may charge a small service fee for assisted registration or printouts, but the SSO account itself costs nothing.`,
    },
    {
      question: `Can students in ${name} apply for RPSC and RSMSSB exams with their SSO ID?`,
      answer: `Yes. Students in ${name} use the same SSO ID to complete One-Time Registration (OTR) and then apply for RPSC, RSMSSB, and Patwari recruitments through the Recruitment Portal at sso.rajasthan.gov.in.`,
    },
  ];
}

// Scholarship-specific FAQ. Factual and non-numeric (income limits/amounts
// change yearly and are intentionally left to the official SJE portal).
export function scholarshipFaqs(s: Scholarship, loc: Locale): FaqItem[] {
  const name = s.name[loc];
  if (loc === "hi") {
    return [
      {
        question: `${name} के लिए एसएसओ आईडी से आवेदन कैसे करें?`,
        answer: `sso.rajasthan.gov.in पर लॉगिन करें, सामाजिक न्याय एवं अधिकारिता विभाग (SJE) का छात्रवृत्ति पोर्टल खोलें, जन आधार ई-केवाईसी पूरा करें, फॉर्म भरें, आवश्यक दस्तावेज़ अपलोड करें और सबमिट करें। आवेदन निःशुल्क है।`,
      },
      {
        question: `${name} के लिए कौन-कौन से दस्तावेज़ चाहिए?`,
        answer: `आम तौर पर जन आधार, आय प्रमाणपत्र, जाति/श्रेणी प्रमाणपत्र, बैंक पासबुक, पिछली अंकतालिका और वर्तमान प्रवेश/फीस रसीद। अस्वीकृति से बचने के लिए स्पष्ट स्कैन तैयार रखें।`,
      },
      {
        question: `${name} की स्थिति कैसे जांचें?`,
        answer: `सबमिट करने के बाद अपने एसएसओ डैशबोर्ड में लॉगिन कर छात्रवृत्ति पोर्टल खोलें और देखें कि आवेदन लंबित, स्वीकृत या अस्वीकृत है। नवीनतम आय सीमा और अंतिम तिथियों के लिए आधिकारिक SJE वेबसाइट देखें।`,
      },
    ];
  }
  return [
    {
      question: `How do I apply for the ${name} using my SSO ID?`,
      answer: `Log in at sso.rajasthan.gov.in, open the Social Justice & Empowerment (SJE) scholarship portal, complete your Jan Aadhaar e-KYC, fill the scholarship form, upload the required documents, and submit. Applying is free.`,
    },
    {
      question: `What documents are needed for the ${name}?`,
      answer: `Typically your Jan Aadhaar, an income certificate, a caste or category certificate, a bank passbook, your previous marksheet, and a current admission or fee receipt. Keep clear scans ready to avoid rejection.`,
    },
    {
      question: `How can I check my ${name} application status?`,
      answer: `After submitting, log in to your SSO dashboard and open the scholarship portal to see whether your application is Pending, Approved, or Rejected. For the latest income limits and last dates, check the official SJE website.`,
    },
  ];
}
