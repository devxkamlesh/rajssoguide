// Generates substantial (200+ word) localized body content for the
// programmatic pages, weaving in each entity's specific data so pages differ.
import type { Locale } from "./i18n";
import type { Exam, Service, City, Scholarship } from "./content";

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
  if (loc === "hi") {
    return [
      `${name} के निवासी राजस्थान एसएसओ आईडी का उपयोग कर 100 से अधिक सरकारी सेवाओं तक पहुँच सकते हैं — सभी एक ही लॉगिन से। चाहे सरकारी नौकरी के लिए आवेदन हो, छात्रवृत्ति फॉर्म भरना हो, बिजली बिल भरना हो या जन आधार अपडेट करना हो, यह सब sso.rajasthan.gov.in पर किया जा सकता है।`,
      `${name} में कई ई-मित्र केंद्र हैं जहाँ आप एसएसओ आईडी रजिस्ट्रेशन, दस्तावेज़ अपडेट और सेवा आवेदन में सहायता ले सकते हैं। यदि आपका रजिस्टर्ड मोबाइल नंबर बदल गया है या ओटीपी नहीं मिल रहा, तो अपने आधार या जन आधार के साथ नज़दीकी ई-मित्र केंद्र पर जाएं।`,
      `${name} के छात्रों और नौकरी आवेदकों के लिए एसएसओ आईडी विशेष रूप से उपयोगी है, क्योंकि RPSC, RSSB और पटवारी जैसी भर्तियों के लिए OTR इसी पोर्टल से होता है। नई एसएसओ आईडी बनाना पूरी तरह मुफ़्त है और पाँच मिनट से कम समय लेता है। आधिकारिक कार्यों के लिए हमेशा sso.rajasthan.gov.in का उपयोग करें।`,
    ];
  }
  return [
    `Residents of ${name} can use a Rajasthan SSO ID to access more than 100 government services — all from a single login. Whether you need to apply for a government job, fill a scholarship form, pay an electricity bill, or update Jan Aadhaar, it can all be done at sso.rajasthan.gov.in.`,
    `${name} has several e-Mitra centres where you can get help with SSO ID registration, document updates, and service applications. If your registered mobile number has changed or you are not receiving the OTP, visit a nearby e-Mitra centre in ${name} with your Aadhaar or Jan Aadhaar to update your details.`,
    `For students and job seekers in ${name}, the SSO ID is especially useful because the One-Time Registration (OTR) for recruitments such as RPSC, RSSB, and Patwari is done through this portal. Creating a new SSO ID is completely free and takes under five minutes. For all official actions, always use sso.rajasthan.gov.in.`,
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
