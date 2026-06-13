import type { Metadata } from "next";
import { canonicalFor, alternates } from "@/lib/schema";
import { site } from "@/lib/site";

type Props = {
  params: Promise<{ locale: "en" | "hi" }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  const titles = {
    en: "Terms of Service | RajSSO Guide",
    hi: "सेवा की शर्तें | RajSSO Guide"
  };
  
  const descriptions = {
    en: "Terms of Service for RajSSO Guide - Legal disclaimers, limitations of liability, and terms of use for our informational website.",
    hi: "RajSSO Guide की सेवा की शर्तें - कानूनी अस्वीकरण, दायित्व की सीमाएं, और हमारी सूचनात्मक वेबसाइट के उपयोग की शर्तें।"
  };

  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: canonicalFor(locale, "/terms-of-service"),
      ...alternates("/terms-of-service")
    },
    openGraph: {
      title: titles[locale],
      description: descriptions[locale],
      url: canonicalFor(locale, "/terms-of-service"),
      siteName: site.name,
      locale: locale === "en" ? "en_IN" : "hi_IN",
      type: "website"
    }
  };
}

export default async function TermsOfServicePage({ params }: Props) {
  const { locale } = await params;

  if (locale === "hi") {
    return <TermsOfServiceHindi />;
  }

  return <TermsOfServiceEnglish />;
}

function TermsOfServiceEnglish() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <article className="prose prose-zinc lg:prose-lg">
        <h1 className="text-3xl font-bold text-zinc-900 mb-6">Terms of Service</h1>
        
        <p className="text-sm text-zinc-600 mb-6">
          <strong>Last Updated:</strong> June 13, 2026
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">1. Acceptance of Terms</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            By accessing and using RajSSO Guide ("the Website"), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use this website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">2. About RajSSO Guide</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            RajSSO Guide is an <strong>independent informational website</strong> that provides guidance about the Rajasthan SSO ID portal, government exams, services, and related topics. We are:
          </p>
          <ul className="list-disc pl-6 text-zinc-700 space-y-2 mb-4">
            <li><strong>NOT affiliated</strong> with the Government of Rajasthan</li>
            <li><strong>NOT affiliated</strong> with the SSO Rajasthan portal (sso.rajasthan.gov.in)</li>
            <li><strong>NOT an official</strong> government website</li>
            <li><strong>NOT authorized</strong> to provide official services</li>
          </ul>
          <p className="text-zinc-700 leading-relaxed mb-4">
            For official services, always visit <a href="https://sso.rajasthan.gov.in" target="_blank" rel="nofollow noopener" className="text-amber-700 underline font-semibold">sso.rajasthan.gov.in</a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">3. Informational Purpose Only</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            The content on this website is provided for <strong>informational and educational purposes only</strong>. We provide:
          </p>
          <ul className="list-disc pl-6 text-zinc-700 space-y-2 mb-4">
            <li>Step-by-step guides for SSO ID login, registration, and recovery</li>
            <li>Information about government exams, services, and scholarships</li>
            <li>Utility tools (calculators, validators) for user convenience</li>
            <li>General information about government processes</li>
          </ul>
          <p className="text-zinc-700 leading-relaxed mb-4">
            <strong>We do NOT provide:</strong>
          </p>
          <ul className="list-disc pl-6 text-zinc-700 space-y-2 mb-4">
            <li>Official government services</li>
            <li>SSO ID creation or management services</li>
            <li>Legal, financial, or professional advice</li>
            <li>Guaranteed exam results or job placements</li>
            <li>Direct access to government portals or databases</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">4. No Collection of Credentials</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            <strong>IMPORTANT:</strong> RajSSO Guide <strong>NEVER</strong> asks for or collects:
          </p>
          <ul className="list-disc pl-6 text-zinc-700 space-y-2 mb-4">
            <li>Your SSO ID username or password</li>
            <li>OTPs (One-Time Passwords)</li>
            <li>Aadhaar number or other government IDs</li>
            <li>Bank account or payment information</li>
            <li>Personal sensitive information</li>
          </ul>
          <p className="text-zinc-700 leading-relaxed mb-4">
            All our tools (Photo Resizer, OTR Calculator, etc.) run entirely in your web browser and <strong>do not transmit</strong> any data to our servers. If any website claiming to be RajSSO Guide asks for such information, it is <strong>fraudulent</strong>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">5. Accuracy of Information</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            We make reasonable efforts to ensure the accuracy and currency of information on this website. However:
          </p>
          <ul className="list-disc pl-6 text-zinc-700 space-y-2 mb-4">
            <li><strong>Information may change:</strong> Government policies, exam dates, fees, and procedures can change without notice.</li>
            <li><strong>Not guaranteed current:</strong> While we update regularly, there may be delays.</li>
            <li><strong>Verify with official sources:</strong> Always confirm critical information with official government portals.</li>
            <li><strong>No warranties:</strong> We provide information "as is" without warranties of any kind.</li>
          </ul>
          <p className="text-zinc-700 leading-relaxed mb-4">
            <strong>Last verified dates</strong> on our guides indicate when we last checked the information, but official sources should always be your final reference.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">6. Limitation of Liability</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            To the fullest extent permitted by law, RajSSO Guide and its operators shall <strong>not be liable</strong> for:
          </p>
          <ul className="list-disc pl-6 text-zinc-700 space-y-2 mb-4">
            <li><strong>Errors or omissions:</strong> Inaccurate, incomplete, or outdated information</li>
            <li><strong>Third-party actions:</strong> Actions taken by government portals, exam boards, or other entities</li>
            <li><strong>Lost opportunities:</strong> Missed exam deadlines, application failures, or lost documents</li>
            <li><strong>Financial loss:</strong> Any direct or indirect financial damages</li>
            <li><strong>Technical issues:</strong> Website downtime, tool malfunctions, or data loss</li>
            <li><strong>Third-party sites:</strong> Content or actions on external websites we link to</li>
          </ul>
          <p className="text-zinc-700 leading-relaxed mb-4">
            <strong>Your use of this website is at your own risk.</strong> We provide information as a courtesy, but you are responsible for verifying it and making your own decisions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">7. Use of Tools and Calculators</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            Our website provides various tools (OTR Fee Calculator, Age Calculator, Photo Resizer, etc.) for your convenience. These tools:
          </p>
          <ul className="list-disc pl-6 text-zinc-700 space-y-2 mb-4">
            <li>Are provided "as is" without guarantees of accuracy</li>
            <li>Run entirely in your browser (client-side processing)</li>
            <li>Do not store or transmit your data to our servers</li>
            <li>Are for estimation and guidance purposes only</li>
            <li>Should not be solely relied upon for official purposes</li>
          </ul>
          <p className="text-zinc-700 leading-relaxed mb-4">
            <strong>Example:</strong> The OTR Fee Calculator provides estimated fees based on available data, but official fees may vary. Always verify with the official exam notification.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">8. Intellectual Property</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            All content on this website, including text, graphics, logos, and software, is the property of RajSSO Guide or used with permission. You may:
          </p>
          <ul className="list-disc pl-6 text-zinc-700 space-y-2 mb-4">
            <li><strong>View and print:</strong> Content for personal, non-commercial use</li>
            <li><strong>Share links:</strong> Links to our pages on social media or websites</li>
          </ul>
          <p className="text-zinc-700 leading-relaxed mb-4">
            You may <strong>NOT</strong>:
          </p>
          <ul className="list-disc pl-6 text-zinc-700 space-y-2 mb-4">
            <li>Reproduce, republish, or distribute content without permission</li>
            <li>Use content for commercial purposes</li>
            <li>Modify or create derivative works</li>
            <li>Remove copyright or attribution notices</li>
            <li>Frame or mirror our website</li>
          </ul>
          <p className="text-zinc-700 leading-relaxed mb-4">
            Government information and official documents referenced on this site remain the property of their respective government agencies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">9. User Conduct</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            You agree <strong>NOT</strong> to:
          </p>
          <ul className="list-disc pl-6 text-zinc-700 space-y-2 mb-4">
            <li>Use the website for illegal purposes</li>
            <li>Attempt to hack, disrupt, or damage the website</li>
            <li>Use automated tools to scrape or copy content</li>
            <li>Impersonate RajSSO Guide or claim affiliation</li>
            <li>Spread misinformation or false content attributed to us</li>
            <li>Upload malicious code or viruses</li>
          </ul>
          <p className="text-zinc-700 leading-relaxed mb-4">
            We reserve the right to block access to users who violate these terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">10. Third-Party Links</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            Our website contains links to external websites, including:
          </p>
          <ul className="list-disc pl-6 text-zinc-700 space-y-2 mb-4">
            <li>Official government portals (sso.rajasthan.gov.in, etc.)</li>
            <li>Exam board websites</li>
            <li>Educational resources</li>
          </ul>
          <p className="text-zinc-700 leading-relaxed mb-4">
            We are <strong>not responsible</strong> for the content, privacy practices, or availability of these external sites. Accessing third-party links is at your own risk.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">11. Advertising and Monetization</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            This website may display advertisements or affiliate links. We may earn commissions from qualifying purchases or actions through these links. However:
          </p>
          <ul className="list-disc pl-6 text-zinc-700 space-y-2 mb-4">
            <li>Ads do not influence our editorial content</li>
            <li>We do not endorse all advertised products or services</li>
            <li>Third-party advertisers may use cookies (see our Privacy Policy)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">12. Termination</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            We reserve the right to:
          </p>
          <ul className="list-disc pl-6 text-zinc-700 space-y-2 mb-4">
            <li>Modify or discontinue the website without notice</li>
            <li>Block access to users who violate these terms</li>
            <li>Remove or modify content at our discretion</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">13. Changes to Terms</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            We may update these Terms of Service from time to time. Changes will be posted on this page with an updated "Last Updated" date. Continued use of the website after changes constitutes acceptance of the updated terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">14. Governing Law</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Rajasthan, India.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">15. Contact Information</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            If you have questions about these Terms of Service, please contact us:
          </p>
          <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-4">
            <p className="text-zinc-800 mb-2">
              <strong>RajSSO Guide</strong>
            </p>
            <p className="text-zinc-700 mb-2">
              Email: <a href="mailto:legal@rajssoguide.in" className="text-amber-700 underline">legal@rajssoguide.in</a>
            </p>
            <p className="text-zinc-700">
              Website: <a href="https://rajssoguide.in" className="text-amber-700 underline">rajssoguide.in</a>
            </p>
          </div>
        </section>

        <div className="bg-red-50 border-l-4 border-red-600 p-4 mt-8">
          <p className="text-sm text-zinc-800 font-semibold mb-2">
            ⚠️ Important Disclaimer
          </p>
          <p className="text-sm text-zinc-700">
            RajSSO Guide is an independent informational website. We are <strong>NOT</strong> affiliated with the Government of Rajasthan or any official SSO portal. We <strong>NEVER</strong> ask for your SSO ID, password, or OTP. Always use official portals for actual services: <a href="https://sso.rajasthan.gov.in" target="_blank" rel="nofollow noopener" className="text-amber-700 underline font-semibold">sso.rajasthan.gov.in</a>
          </p>
        </div>
      </article>
    </main>
  );
}

function TermsOfServiceHindi() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <article className="prose prose-zinc lg:prose-lg">
        <h1 className="text-3xl font-bold text-zinc-900 mb-6">सेवा की शर्तें</h1>
        
        <p className="text-sm text-zinc-600 mb-6">
          <strong>अंतिम अपडेट:</strong> 13 जून 2026
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">1. शर्तों की स्वीकृति</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            RajSSO Guide ("वेबसाइट") को एक्सेस और उपयोग करके, आप इन सेवा की शर्तों से बाध्य होने के लिए स्वीकार और सहमत होते हैं। यदि आप इन शर्तों से सहमत नहीं हैं, तो कृपया इस वेबसाइट का उपयोग न करें।
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">2. RajSSO Guide के बारे में</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            RajSSO Guide एक <strong>स्वतंत्र सूचनात्मक वेबसाइट</strong> है जो राजस्थान SSO ID पोर्टल, सरकारी परीक्षाओं, सेवाओं और संबंधित विषयों के बारे में मार्गदर्शन प्रदान करती है। हम:
          </p>
          <ul className="list-disc pl-6 text-zinc-700 space-y-2 mb-4">
            <li>राजस्थान सरकार से <strong>संबद्ध नहीं</strong> हैं</li>
            <li>SSO राजस्थान पोर्टल (sso.rajasthan.gov.in) से <strong>संबद्ध नहीं</strong> हैं</li>
            <li>एक आधिकारिक सरकारी वेबसाइट <strong>नहीं</strong> हैं</li>
            <li>आधिकारिक सेवाएं प्रदान करने के लिए <strong>अधिकृत नहीं</strong> हैं</li>
          </ul>
          <p className="text-zinc-700 leading-relaxed mb-4">
            आधिकारिक सेवाओं के लिए, हमेशा <a href="https://sso.rajasthan.gov.in" target="_blank" rel="nofollow noopener" className="text-amber-700 underline font-semibold">sso.rajasthan.gov.in</a> पर जाएं।
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">3. केवल सूचनात्मक उद्देश्य</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            इस वेबसाइट पर सामग्री <strong>केवल सूचनात्मक और शैक्षिक उद्देश्यों</strong> के लिए प्रदान की गई है। हम प्रदान करते हैं:
          </p>
          <ul className="list-disc pl-6 text-zinc-700 space-y-2 mb-4">
            <li>SSO ID लॉगिन, पंजीकरण और रिकवरी के लिए चरण-दर-चरण गाइड</li>
            <li>सरकारी परीक्षाओं, सेवाओं और छात्रवृत्तियों के बारे में जानकारी</li>
            <li>उपयोगकर्ता सुविधा के लिए उपयोगी टूल्स (कैलकुलेटर, वैलिडेटर)</li>
            <li>सरकारी प्रक्रियाओं के बारे में सामान्य जानकारी</li>
          </ul>
          <p className="text-zinc-700 leading-relaxed mb-4">
            <strong>हम प्रदान नहीं करते:</strong>
          </p>
          <ul className="list-disc pl-6 text-zinc-700 space-y-2 mb-4">
            <li>आधिकारिक सरकारी सेवाएं</li>
            <li>SSO ID निर्माण या प्रबंधन सेवाएं</li>
            <li>कानूनी, वित्तीय, या पेशेवर सलाह</li>
            <li>गारंटीड परीक्षा परिणाम या नौकरी प्लेसमेंट</li>
            <li>सरकारी पोर्टल या डेटाबेस तक सीधी पहुंच</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">4. क्रेडेंशियल्स का कोई संग्रह नहीं</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            <strong>महत्वपूर्ण:</strong> RajSSO Guide <strong>कभी भी</strong> निम्नलिखित को नहीं मांगता या एकत्र नहीं करता:
          </p>
          <ul className="list-disc pl-6 text-zinc-700 space-y-2 mb-4">
            <li>आपकी SSO ID यूजरनेम या पासवर्ड</li>
            <li>OTP (वन-टाइम पासवर्ड)</li>
            <li>आधार संख्या या अन्य सरकारी ID</li>
            <li>बैंक खाता या भुगतान जानकारी</li>
            <li>व्यक्तिगत संवेदनशील जानकारी</li>
          </ul>
          <p className="text-zinc-700 leading-relaxed mb-4">
            हमारे सभी टूल्स (फोटो रिसाइज़र, OTR कैलकुलेटर, आदि) पूरी तरह से आपके वेब ब्राउज़र में चलते हैं और हमारे सर्वर को कोई डेटा <strong>प्रसारित नहीं</strong> करते हैं। यदि कोई वेबसाइट RajSSO Guide होने का दावा करते हुए ऐसी जानकारी मांगती है, तो यह <strong>धोखाधड़ी</strong> है।
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">5. जानकारी की सटीकता</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            हम इस वेबसाइट पर जानकारी की सटीकता और करेंसी सुनिश्चित करने के लिए उचित प्रयास करते हैं। हालांकि:
          </p>
          <ul className="list-disc pl-6 text-zinc-700 space-y-2 mb-4">
            <li><strong>जानकारी बदल सकती है:</strong> सरकारी नीतियां, परीक्षा तिथियां, शुल्क और प्रक्रियाएं बिना सूचना के बदल सकती हैं।</li>
            <li><strong>वर्तमान की गारंटी नहीं:</strong> जबकि हम नियमित रूप से अपडेट करते हैं, देरी हो सकती है।</li>
            <li><strong>आधिकारिक स्रोतों से सत्यापित करें:</strong> हमेशा आधिकारिक सरकारी पोर्टलों के साथ महत्वपूर्ण जानकारी की पुष्टि करें।</li>
            <li><strong>कोई वारंटी नहीं:</strong> हम किसी भी प्रकार की वारंटी के बिना "जैसी है" जानकारी प्रदान करते हैं।</li>
          </ul>
          <p className="text-zinc-700 leading-relaxed mb-4">
            हमारे गाइड पर <strong>"अंतिम सत्यापित"</strong> तारीखें इंगित करती हैं कि हमने अंतिम बार जानकारी की जांच कब की थी, लेकिन आधिकारिक स्रोत हमेशा आपका अंतिम संदर्भ होना चाहिए।
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">6. दायित्व की सीमा</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            कानून द्वारा अनुमत पूर्ण सीमा तक, RajSSO Guide और इसके संचालक निम्नलिखित के लिए <strong>उत्तरदायी नहीं</strong> होंगे:
          </p>
          <ul className="list-disc pl-6 text-zinc-700 space-y-2 mb-4">
            <li><strong>त्रुटियां या चूक:</strong> गलत, अधूरी, या पुरानी जानकारी</li>
            <li><strong>तृतीय-पक्ष कार्रवाई:</strong> सरकारी पोर्टल, परीक्षा बोर्ड, या अन्य संस्थाओं द्वारा की गई कार्रवाई</li>
            <li><strong>खोए हुए अवसर:</strong> छूटी हुई परीक्षा समय सीमा, आवेदन विफलताएं, या खोए हुए दस्तावेज</li>
            <li><strong>वित्तीय हानि:</strong> कोई भी प्रत्यक्ष या अप्रत्यक्ष वित्तीय नुकसान</li>
            <li><strong>तकनीकी समस्याएं:</strong> वेबसाइट डाउनटाइम, टूल खराबी, या डेटा हानि</li>
            <li><strong>तृतीय-पक्ष साइटें:</strong> हमारे द्वारा लिंक की गई बाहरी वेबसाइटों पर सामग्री या कार्रवाई</li>
          </ul>
          <p className="text-zinc-700 leading-relaxed mb-4">
            <strong>इस वेबसाइट का उपयोग आपके अपने जोखिम पर है।</strong> हम सौजन्य के रूप में जानकारी प्रदान करते हैं, लेकिन आप इसे सत्यापित करने और अपने स्वयं के निर्णय लेने के लिए जिम्मेदार हैं।
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">7. टूल्स और कैलकुलेटर का उपयोग</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            हमारी वेबसाइट आपकी सुविधा के लिए विभिन्न टूल्स (OTR शुल्क कैलकुलेटर, आयु कैलकुलेटर, फोटो रिसाइज़र, आदि) प्रदान करती है। ये टूल्स:
          </p>
          <ul className="list-disc pl-6 text-zinc-700 space-y-2 mb-4">
            <li>सटीकता की गारंटी के बिना "जैसा है" प्रदान किए जाते हैं</li>
            <li>पूरी तरह से आपके ब्राउज़र में चलते हैं (क्लाइंट-साइड प्रोसेसिंग)</li>
            <li>आपके डेटा को हमारे सर्वर पर स्टोर या प्रसारित नहीं करते</li>
            <li>केवल अनुमान और मार्गदर्शन उद्देश्यों के लिए हैं</li>
            <li>आधिकारिक उद्देश्यों के लिए केवल इन पर निर्भर नहीं रहना चाहिए</li>
          </ul>
          <p className="text-zinc-700 leading-relaxed mb-4">
            <strong>उदाहरण:</strong> OTR शुल्क कैलकुलेटर उपलब्ध डेटा के आधार पर अनुमानित शुल्क प्रदान करता है, लेकिन आधिकारिक शुल्क भिन्न हो सकते हैं। हमेशा आधिकारिक परीक्षा अधिसूचना के साथ सत्यापित करें।
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">8. बौद्धिक संपदा</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            इस वेबसाइट पर सभी सामग्री, टेक्स्ट, ग्राफिक्स, लोगो और सॉफ़्टवेयर सहित, RajSSO Guide की संपत्ति है या अनुमति के साथ उपयोग की जाती है। आप कर सकते हैं:
          </p>
          <ul className="list-disc pl-6 text-zinc-700 space-y-2 mb-4">
            <li><strong>देखें और प्रिंट करें:</strong> व्यक्तिगत, गैर-वाणिज्यिक उपयोग के लिए सामग्री</li>
            <li><strong>लिंक साझा करें:</strong> सोशल मीडिया या वेबसाइटों पर हमारे पेजों के लिंक</li>
          </ul>
          <p className="text-zinc-700 leading-relaxed mb-4">
            आप <strong>नहीं कर सकते:</strong>
          </p>
          <ul className="list-disc pl-6 text-zinc-700 space-y-2 mb-4">
            <li>अनुमति के बिना सामग्री को पुनरुत्पादित, पुनर्प्रकाशित, या वितरित करना</li>
            <li>वाणिज्यिक उद्देश्यों के लिए सामग्री का उपयोग करना</li>
            <li>संशोधित करना या व्युत्पन्न कार्य बनाना</li>
            <li>कॉपीराइट या एट्रिब्यूशन नोटिस हटाना</li>
            <li>हमारी वेबसाइट को फ्रेम या मिरर करना</li>
          </ul>
          <p className="text-zinc-700 leading-relaxed mb-4">
            इस साइट पर संदर्भित सरकारी जानकारी और आधिकारिक दस्तावेज उनकी संबंधित सरकारी एजेंसियों की संपत्ति बने रहते हैं।
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">9. उपयोगकर्ता आचरण</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            आप सहमत हैं <strong>नहीं</strong> करने के लिए:
          </p>
          <ul className="list-disc pl-6 text-zinc-700 space-y-2 mb-4">
            <li>अवैध उद्देश्यों के लिए वेबसाइट का उपयोग करना</li>
            <li>वेबसाइट को हैक, बाधित, या क्षति पहुंचाने का प्रयास करना</li>
            <li>सामग्री को स्क्रैप या कॉपी करने के लिए स्वचालित टूल्स का उपयोग करना</li>
            <li>RajSSO Guide का प्रतिरूपण करना या संबद्धता का दावा करना</li>
            <li>हमारे लिए जिम्मेदार गलत सूचना या झूठी सामग्री फैलाना</li>
            <li>दुर्भावनापूर्ण कोड या वायरस अपलोड करना</li>
          </ul>
          <p className="text-zinc-700 leading-relaxed mb-4">
            हम इन शर्तों का उल्लंघन करने वाले उपयोगकर्ताओं के लिए पहुंच को ब्लॉक करने का अधिकार सुरक्षित रखते हैं।
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">10. तृतीय-पक्ष लिंक</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            हमारी वेबसाइट में बाहरी वेबसाइटों के लिंक हैं, जिनमें शामिल हैं:
          </p>
          <ul className="list-disc pl-6 text-zinc-700 space-y-2 mb-4">
            <li>आधिकारिक सरकारी पोर्टल (sso.rajasthan.gov.in, आदि)</li>
            <li>परीक्षा बोर्ड वेबसाइटें</li>
            <li>शैक्षिक संसाधन</li>
          </ul>
          <p className="text-zinc-700 leading-relaxed mb-4">
            हम इन बाहरी साइटों की सामग्री, गोपनीयता प्रथाओं, या उपलब्धता के लिए <strong>जिम्मेदार नहीं</strong> हैं। तृतीय-पक्ष लिंक तक पहुंचना आपके अपने जोखिम पर है।
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">11. विज्ञापन और मुद्रीकरण</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            यह वेबसाइट विज्ञापन या एफिलिएट लिंक प्रदर्शित कर सकती है। हम इन लिंक्स के माध्यम से योग्यता खरीद या कार्रवाइयों से कमीशन कमा सकते हैं। हालांकि:
          </p>
          <ul className="list-disc pl-6 text-zinc-700 space-y-2 mb-4">
            <li>विज्ञापन हमारी संपादकीय सामग्री को प्रभावित नहीं करते</li>
            <li>हम सभी विज्ञापित उत्पादों या सेवाओं का समर्थन नहीं करते</li>
            <li>तृतीय-पक्ष विज्ञापनदाता कुकीज़ का उपयोग कर सकते हैं (हमारी गोपनीयता नीति देखें)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">12. समाप्ति</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            हम निम्नलिखित का अधिकार सुरक्षित रखते हैं:
          </p>
          <ul className="list-disc pl-6 text-zinc-700 space-y-2 mb-4">
            <li>बिना सूचना के वेबसाइट को संशोधित या बंद करना</li>
            <li>इन शर्तों का उल्लंघन करने वाले उपयोगकर्ताओं के लिए पहुंच को ब्लॉक करना</li>
            <li>हमारे विवेक पर सामग्री को हटाना या संशोधित करना</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">13. शर्तों में परिवर्तन</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            हम समय-समय पर इन सेवा की शर्तों को अपडेट कर सकते हैं। परिवर्तन इस पेज पर अपडेट की गई "अंतिम अपडेट" तारीख के साथ पोस्ट किए जाएंगे। परिवर्तनों के बाद वेबसाइट का निरंतर उपयोग अपडेट की गई शर्तों की स्वीकृति का गठन करता है।
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">14. शासी कानून</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            ये शर्तें भारत के कानूनों के अनुसार शासित और व्याख्यायित की जाएंगी। किसी भी विवाद राजस्थान, भारत में अदालतों के अनन्य क्षेत्राधिकार के अधीन होंगे।
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">15. संपर्क जानकारी</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            यदि आपके पास इन सेवा की शर्तों के बारे में प्रश्न हैं, तो कृपया हमसे संपर्क करें:
          </p>
          <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-4">
            <p className="text-zinc-800 mb-2">
              <strong>RajSSO Guide</strong>
            </p>
            <p className="text-zinc-700 mb-2">
              ईमेल: <a href="mailto:legal@rajssoguide.in" className="text-amber-700 underline">legal@rajssoguide.in</a>
            </p>
            <p className="text-zinc-700">
              वेबसाइट: <a href="https://rajssoguide.in" className="text-amber-700 underline">rajssoguide.in</a>
            </p>
          </div>
        </section>

        <div className="bg-red-50 border-l-4 border-red-600 p-4 mt-8">
          <p className="text-sm text-zinc-800 font-semibold mb-2">
            ⚠️ महत्वपूर्ण अस्वीकरण
          </p>
          <p className="text-sm text-zinc-700">
            RajSSO Guide एक स्वतंत्र सूचनात्मक वेबसाइट है। हम राजस्थान सरकार या किसी आधिकारिक SSO पोर्टल से <strong>संबद्ध नहीं</strong> हैं। हम <strong>कभी भी</strong> आपकी SSO ID, पासवर्ड या OTP नहीं मांगते। वास्तविक सेवाओं के लिए हमेशा आधिकारिक पोर्टल का उपयोग करें: <a href="https://sso.rajasthan.gov.in" target="_blank" rel="nofollow noopener" className="text-amber-700 underline font-semibold">sso.rajasthan.gov.in</a>
          </p>
        </div>
      </article>
    </main>
  );
}
