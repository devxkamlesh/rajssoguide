// Unique, detailed content for each exam page (research-based)
import type { Locale } from "./i18n";

interface ExamContent {
  slug: string;
  content: Record<Locale, string[]>;
}

export const examDetailedContent: ExamContent[] = [
  {
    slug: "rpsc-cet",
    content: {
      en: [
        "The Rajasthan Common Eligibility Test (CET) is conducted by the Rajasthan Public Service Commission (RPSC) as a qualifying examination for recruitment to various state government posts at Graduate and Senior Secondary levels. Introduced to streamline the recruitment process, CET acts as a single gateway exam for multiple departments across Rajasthan. Candidates who qualify CET become eligible to apply for specific departmental recruitments without appearing for separate preliminary exams repeatedly.",
        "The RPSC CET exam pattern consists of objective-type questions testing General Knowledge (with emphasis on Rajasthan), General Science, and Current Affairs. The exam is conducted in offline mode (OMR-based) and typically has 150 questions worth 150 marks with negative marking of 1/3 mark for each incorrect answer. The exam duration is 3 hours. There are two levels of CET: Graduate Level (for Bachelor's degree holders) and 12th Level (for Senior Secondary passed candidates).",
        "To apply for RPSC CET through SSO portal, candidates must first complete One-Time Registration (OTR) on the SSO recruitment portal. The OTR fee is ₹600 for General/OBC(Creamy)/Other State candidates and ₹400 for Rajasthan SC/ST/OBC(NCL)/EWS/PwD candidates. This fee is payable only once and allows you to apply for multiple RPSC exams throughout 2026-2027 without paying again. Your personal details like name, date of birth, and gender are auto-fetched from Aadhaar or Jan Aadhaar, so ensure these match your Class 10th certificate exactly.",
      ],
      hi: [
        "राजस्थान समान पात्रता परीक्षा (सीईटी) राजस्थान लोक सेवा आयोग (RPSC) द्वारा राज्य सरकार के विभिन्न स्नातक स्तर और वरिष्ठ माध्यमिक स्तर के पदों पर भर्ती के लिए एक योग्यता परीक्षा के रूप में आयोजित की जाती है। भर्ती प्रक्रिया को सुव्यवस्थित करने के लिए शुरू की गई, CET राजस्थान भर में कई विभागों के लिए एकल गेटवे परीक्षा के रूप में कार्य करती है। जो उम्मीदवार सीईटी में उत्तीर्ण होते हैं, वे बार-बार अलग-अलग प्रारंभिक परीक्षाओं में शामिल हुए बिना विशिष्ट विभागीय भर्तियों के लिए आवेदन करने के पात्र हो जाते हैं।",
        "आरपीएससी सीईटी परीक्षा पैटर्न में वस्तुनिष्ठ प्रकार के प्रश्न होते हैं जो सामान्य ज्ञान (राजस्थान पर जोर के साथ), सामान्य विज्ञान और करंट अफेयर्स का परीक्षण करते हैं। परीक्षा ऑफलाइन मोड (OMR-आधारित) में आयोजित की जाती है और आमतौर पर 150 अंकों के 150 प्रश्न होते हैं जिसमें प्रत्येक गलत उत्तर के लिए 1/3 अंक की नकारात्मक अंकन होता है। परीक्षा की अवधि 3 घंटे है। सीईटी के दो स्तर हैं: स्नातक स्तर (स्नातक डिग्री धारकों के लिए) और 12वीं स्तर (वरिष्ठ माध्यमिक उत्तीर्ण उम्मीदवारों के लिए)।",
        "एसएसओ पोर्टल के माध्यम से आरपीएससी सीईटी के लिए आवेदन करने के लिए, उम्मीदवारों को पहले एसएसओ भर्ती पोर्टल पर वन-टाइम रजिस्ट्रेशन (OTR) पूरा करना होगा। OTR शुल्क सामान्य/ओबीसी(क्रीमी)/अन्य राज्य के उम्मीदवारों के लिए ₹600 और राजस्थान एससी/एसटी/ओबीसी(एनसीएल)/ईडब्ल्यूएस/दिव्यांग उम्मीदवारों के लिए ₹400 है। यह शुल्क केवल एक बार देय है और आपको 2026-2027 में कई आरपीएससी परीक्षाओं के लिए फिर से भुगतान किए बिना आवेदन करने की अनुमति देता है। आपका नाम, जन्म तिथि और लिंग जैसे व्यक्तिगत विवरण आधार या जन आधार से स्वचालित रूप से प्राप्त होते हैं, इसलिए सुनिश्चित करें कि ये आपके कक्षा 10वीं के प्रमाणपत्र से बिल्कुल मेल खाते हों।",
      ],
    },
  },
  {
    slug: "rsmssb-ldc",
    content: {
      en: [
        "The Lower Division Clerk (LDC) and Junior Assistant recruitment is conducted by the Rajasthan Subordinate and Ministerial Services Selection Board (RSMSSB) to fill clerical and administrative positions across various government departments in Rajasthan. The 2026 recruitment announced over 10,644 vacancies, making it one of the largest clerical-level recruitments in the state. LDC posts are essential for day-to-day administrative operations in government offices, handling documentation, record-keeping, and assisting senior officials.",
        "Eligibility for RSMSSB LDC requires candidates to have passed Senior Secondary (12th class) from a recognized board along with a certificate in computer applications or typing. The minimum age is 18 years and maximum is 40 years as of January 1, 2027, with relaxations of 5 years for SC/ST/OBC(Rajasthan) and General category women candidates. The selection process includes a written examination (300 marks), a typing/skill test (qualifying), and document verification. The written exam tests General Knowledge, Rajasthan GK, Hindi, English, Mathematics, and Computer Knowledge.",
        "Applications for RSMSSB LDC are submitted through the SSO portal after completing OTR. The exam is scheduled for July 5-6, 2026. The OTR fee is ₹600 for General/OBC(Creamy) and ₹400 for reserved categories. Once you clear the written exam, you must pass the typing test at a speed of 30 words per minute in English or 25 words per minute in Hindi on a computer. Document verification checks your educational certificates, caste certificate (if applicable), and identity proof. Successful candidates receive posting orders for LDC or Junior Assistant positions across Rajasthan government offices with a starting salary in the pay matrix level.",
      ],
      hi: [
        "लोअर डिवीजन क्लर्क (एलडीसी) और जूनियर असिस्टेंट भर्ती राजस्थान अधीनस्थ और मंत्रिस्तरीय सेवा चयन बोर्ड (RSMSSB) द्वारा राजस्थान में विभिन्न सरकारी विभागों में लिपिक और प्रशासनिक पदों को भरने के लिए आयोजित की जाती है। 2026 की भर्ती में 10,644 से अधिक रिक्तियों की घोषणा की गई, जो राज्य में सबसे बड़ी लिपिक स्तर की भर्तियों में से एक है। एलडीसी पद सरकारी कार्यालयों में दिन-प्रतिदिन के प्रशासनिक संचालन, दस्तावेजीकरण, रिकॉर्ड-कीपिंग और वरिष्ठ अधिकारियों की सहायता के लिए आवश्यक हैं।",
        "आरएसएमएसएसबी एलडीसी के लिए पात्रता के लिए उम्मीदवारों को किसी मान्यता प्राप्त बोर्ड से वरिष्ठ माध्यमिक (12वीं कक्षा) उत्तीर्ण होना चाहिए और साथ ही कंप्यूटर एप्लिकेशन या टाइपिंग में प्रमाणपत्र होना चाहिए। न्यूनतम आयु 18 वर्ष और अधिकतम 40 वर्ष है (1 जनवरी, 2027 तक), एससी/एसटी/ओबीसी(राजस्थान) और सामान्य श्रेणी की महिला उम्मीदवारों के लिए 5 वर्ष की छूट के साथ। चयन प्रक्रिया में लिखित परीक्षा (300 अंक), टाइपिंग/स्किल टेस्ट (योग्यता), और दस्तावेज़ सत्यापन शामिल हैं। लिखित परीक्षा सामान्य ज्ञान, राजस्थान जीके, हिंदी, अंग्रेजी, गणित, और कंप्यूटर ज्ञान का परीक्षण करती है।",
        "आरएसएमएसएसबी एलडीसी के लिए आवेदन OTR पूरा करने के बाद एसएसओ पोर्टल के माध्यम से जमा किए जाते हैं। परीक्षा 5-6 जुलाई, 2026 के लिए निर्धारित है। OTR शुल्क सामान्य/ओबीसी(क्रीमी) के लिए ₹600 और आरक्षित श्रेणियों के लिए ₹400 है। एक बार जब आप लिखित परीक्षा उत्तीर्ण कर लेते हैं, तो आपको कंप्यूटर पर अंग्रेजी में 30 शब्द प्रति मिनट या हिंदी में 25 शब्द प्रति मिनट की गति से टाइपिंग परीक्षा उत्तीर्ण करनी होगी। दस्तावेज़ सत्यापन आपके शैक्षिक प्रमाणपत्र, जाति प्रमाणपत्र (यदि लागू हो), और पहचान प्रमाण की जाँच करता है। सफल उम्मीदवारों को राजस्थान सरकार के कार्यालयों में एलडीसी या जूनियर असिस्टेंट पदों के लिए पोस्टिंग आदेश मिलते हैं।",
      ],
    },
  },
  {
    slug: "patwari",
    content: {
      en: [
        "The Rajasthan Patwari (Revenue Officer) recruitment is conducted by RSMSSB for one of the most sought-after government posts in the state. Patwaris are village-level revenue officials responsible for maintaining land records, measuring agricultural land, assisting in revenue collection, and updating the Khasra-Khatauni (land ownership documents). This position offers direct interaction with rural communities and carries significant responsibilities in land administration and revenue operations across Rajasthan's districts.",
        "Eligibility criteria for Patwari posts require candidates to possess a Bachelor's degree in any discipline from a recognized university. The age limit is 18 to 40 years for general category candidates with relaxations for reserved categories as per Rajasthan government norms. The selection process includes a written examination covering General Knowledge (with focus on Rajasthan geography, history, culture, and polity), General Science, Mathematics, Computer Knowledge, Hindi, and English. The exam pattern typically consists of 100 objective-type questions worth 100 marks with a duration of 2 hours and negative marking for wrong answers.",
        "To apply for Rajasthan Patwari through SSO, candidates must complete OTR on the recruitment portal. The OTR fee structure is ₹600 for General/OBC(Creamy Layer) candidates and ₹400 for SC/ST/OBC(Non-Creamy Layer)/EWS/PwD candidates from Rajasthan. After qualifying the written exam, candidates undergo document verification where original certificates of educational qualification, caste (if applicable), domicile, and age proof are checked. Selected candidates receive training before being posted as Patwaris in various tehsils across Rajasthan. The salary is competitive with allowances for rural posting, making it an attractive career option for graduates interested in revenue administration and rural development work.",
      ],
      hi: [
        "राजस्थान पटवारी (राजस्व अधिकारी) भर्ती RSMSSB द्वारा राज्य के सबसे प्रतिष्ठित सरकारी पदों में से एक के लिए आयोजित की जाती है। पटवारी ग्राम स्तर के राजस्व अधिकारी हैं जो भूमि रिकॉर्ड बनाए रखने, कृषि भूमि को मापने, राजस्व संग्रह में सहायता करने, और खसरा-खतौनी (भूमि स्वामित्व दस्तावेज) को अपडेट करने के लिए जिम्मेदार हैं। यह पद ग्रामीण समुदायों के साथ प्रत्यक्ष बातचीत प्रदान करता है और राजस्थान के जिलों में भूमि प्रशासन और राजस्व संचालन में महत्वपूर्ण जिम्मेदारियां वहन करता है।",
        "पटवारी पदों के लिए पात्रता मानदंड के लिए उम्मीदवारों को किसी मान्यता प्राप्त विश्वविद्यालय से किसी भी विषय में स्नातक की डिग्री होना आवश्यक है। सामान्य श्रेणी के उम्मीदवारों के लिए आयु सीमा 18 से 40 वर्ष है, आरक्षित श्रेणियों के लिए राजस्थान सरकार के मानदंडों के अनुसार छूट के साथ। चयन प्रक्रिया में सामान्य ज्ञान (राजस्थान के भूगोल, इतिहास, संस्कृति और राजनीति पर ध्यान केंद्रित), सामान्य विज्ञान, गणित, कंप्यूटर ज्ञान, हिंदी और अंग्रेजी को कवर करने वाली लिखित परीक्षा शामिल है। परीक्षा पैटर्न में आमतौर पर 100 अंकों के 100 वस्तुनिष्ठ प्रकार के प्रश्न होते हैं जिसमें 2 घंटे की अवधि और गलत उत्तरों के लिए नकारात्मक अंकन होता है।",
        "एसएसओ के माध्यम से राजस्थान पटवारी के लिए आवेदन करने के लिए, उम्मीदवारों को भर्ती पोर्टल पर OTR पूरा करना होगा। OTR शुल्क संरचना सामान्य/ओबीसी(क्रीमी लेयर) उम्मीदवारों के लिए ₹600 और राजस्थान के एससी/एसटी/ओबीसी(गैर-क्रीमी लेयर)/ईडब्ल्यूएस/दिव्यांग उम्मीदवारों के लिए ₹400 है। लिखित परीक्षा में योग्य होने के बाद, उम्मीदवार दस्तावेज़ सत्यापन से गुजरते हैं जहाँ शैक्षिक योग्यता, जाति (यदि लागू हो), अधिवास, और आयु प्रमाण के मूल प्रमाणपत्र की जाँच की जाती है। चयनित उम्मीदवार राजस्थान भर में विभिन्न तहसीलों में पटवारी के रूप में पोस्ट किए जाने से पहले प्रशिक्षण प्राप्त करते हैं। वेतन ग्रामीण पोस्टिंग के लिए भत्तों के साथ प्रतिस्पर्धी है, जो इसे राजस्व प्रशासन और ग्रामीण विकास कार्य में रुचि रखने वाले स्नातकों के लिए एक आकर्षक कैरियर विकल्प बनाता है।",
      ],
    },
  },
];

export function getExamDetailedContent(slug: string, locale: Locale): string[] | null {
  const exam = examDetailedContent.find((e) => e.slug === slug);
  return exam ? exam.content[locale] : null;
}
