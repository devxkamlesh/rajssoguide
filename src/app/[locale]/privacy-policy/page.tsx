import type { Metadata } from "next";
import { canonicalFor, alternates } from "@/lib/schema";
import { site } from "@/lib/site";

type Props = {
  params: Promise<{ locale: "en" | "hi" }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  const titles = {
    en: "Privacy Policy | RajSSO Guide",
    hi: "गोपनीयता नीति | RajSSO Guide"
  };
  
  const descriptions = {
    en: "Privacy Policy for RajSSO Guide - How we collect, use, and protect your information. GDPR compliant. We never store your SSO ID or password.",
    hi: "RajSSO Guide की गोपनीयता नीति - हम आपकी जानकारी कैसे एकत्र, उपयोग और सुरक्षित करते हैं। GDPR अनुपालन। हम कभी आपकी SSO ID या पासवर्ड स्टोर नहीं करते।"
  };

  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: canonicalFor(locale, "/privacy-policy"),
      ...alternates("/privacy-policy")
    },
    openGraph: {
      title: titles[locale],
      description: descriptions[locale],
      url: canonicalFor(locale, "/privacy-policy"),
      siteName: site.name,
      locale: locale === "en" ? "en_IN" : "hi_IN",
      type: "website"
    }
  };
}

export default async function PrivacyPolicyPage({ params }: Props) {
  const { locale } = await params;

  if (locale === "hi") {
    return <PrivacyPolicyHindi />;
  }

  return <PrivacyPolicyEnglish />;
}

function PrivacyPolicyEnglish() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <article className="prose prose-zinc lg:prose-lg">
        <h1 className="text-3xl font-bold text-zinc-900 mb-6">Privacy Policy</h1>
        
        <p className="text-sm text-zinc-600 mb-6">
          <strong>Last Updated:</strong> June 13, 2026
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">1. Introduction</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            Welcome to RajSSO Guide ("we," "our," or "us"). We are committed to protecting your privacy and being transparent about how we handle information. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your data.
          </p>
          <p className="text-zinc-700 leading-relaxed mb-4">
            <strong>Important:</strong> RajSSO Guide is an independent informational website. We are <strong>not affiliated</strong> with the Government of Rajasthan or the SSO Rajasthan portal (sso.rajasthan.gov.in). We <strong>never</strong> ask for or store your SSO ID, password, OTP, or any login credentials.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">2. Information We Collect</h2>
          
          <h3 className="text-xl font-semibold text-zinc-800 mb-3">2.1 Information You Provide</h3>
          <p className="text-zinc-700 leading-relaxed mb-4">
            We <strong>do not require</strong> you to create an account or provide personal information to use our website. Our tools (OTR Fee Calculator, Age Calculator, Photo Resizer, etc.) run entirely in your web browser and do not transmit any data to our servers.
          </p>

          <h3 className="text-xl font-semibold text-zinc-800 mb-3">2.2 Automatically Collected Information</h3>
          <p className="text-zinc-700 leading-relaxed mb-4">
            When you visit our website, we automatically collect certain information through Google Analytics and Vercel Analytics:
          </p>
          <ul className="list-disc pl-6 text-zinc-700 space-y-2 mb-4">
            <li><strong>Device Information:</strong> Browser type, operating system, device type (mobile/desktop)</li>
            <li><strong>Usage Data:</strong> Pages visited, time spent on pages, referral source, clicks</li>
            <li><strong>Technical Data:</strong> IP address (anonymized), approximate location (city/state level), language preference</li>
            <li><strong>Performance Data:</strong> Page load times, errors (via Vercel Speed Insights)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">3. How We Use Your Information</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            We use the collected information for the following purposes:
          </p>
          <ul className="list-disc pl-6 text-zinc-700 space-y-2 mb-4">
            <li><strong>Website Analytics:</strong> Understand how visitors use our site to improve content and user experience</li>
            <li><strong>Performance Monitoring:</strong> Identify and fix technical issues, optimize page load times</li>
            <li><strong>Content Optimization:</strong> Determine which guides and tools are most helpful to prioritize updates</li>
            <li><strong>Security:</strong> Detect and prevent abuse, spam, or malicious activity</li>
          </ul>
          <p className="text-zinc-700 leading-relaxed mb-4">
            <strong>We do NOT:</strong>
          </p>
          <ul className="list-disc pl-6 text-zinc-700 space-y-2 mb-4">
            <li>Sell your data to third parties</li>
            <li>Store your SSO ID, passwords, or OTPs</li>
            <li>Track you across other websites</li>
            <li>Use your data for marketing without consent</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">4. Cookies and Tracking Technologies</h2>
          
          <h3 className="text-xl font-semibold text-zinc-800 mb-3">4.1 Google Analytics</h3>
          <p className="text-zinc-700 leading-relaxed mb-4">
            We use Google Analytics to understand website traffic and usage patterns. Google Analytics uses cookies (small text files) to collect anonymous information. These cookies:
          </p>
          <ul className="list-disc pl-6 text-zinc-700 space-y-2 mb-4">
            <li>Track pages you visit and time spent on site</li>
            <li>Record your device type and browser</li>
            <li>Store a randomly generated ID (not linked to your identity)</li>
            <li>Expire after 2 years of inactivity</li>
          </ul>
          <p className="text-zinc-700 leading-relaxed mb-4">
            Google's use of this data is governed by the <a href="https://policies.google.com/privacy" target="_blank" rel="noopener" className="text-amber-700 underline">Google Privacy Policy</a>.
          </p>

          <h3 className="text-xl font-semibold text-zinc-800 mb-3">4.2 Vercel Analytics</h3>
          <p className="text-zinc-700 leading-relaxed mb-4">
            We use Vercel Speed Insights (privacy-friendly) to monitor website performance. This service:
          </p>
          <ul className="list-disc pl-6 text-zinc-700 space-y-2 mb-4">
            <li>Does not use cookies</li>
            <li>Collects anonymous performance metrics</li>
            <li>Does not track individual users</li>
          </ul>

          <h3 className="text-xl font-semibold text-zinc-800 mb-3">4.3 Managing Cookies</h3>
          <p className="text-zinc-700 leading-relaxed mb-4">
            You can control cookies through your browser settings:
          </p>
          <ul className="list-disc pl-6 text-zinc-700 space-y-2 mb-4">
            <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies</li>
            <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies</li>
            <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
          </ul>
          <p className="text-zinc-700 leading-relaxed mb-4">
            You can also opt out of Google Analytics tracking by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener" className="text-amber-700 underline">Google Analytics Opt-out Browser Add-on</a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">5. Client-Side Tools (Photo Resizer, Calculators)</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            All our tools run <strong>entirely in your web browser</strong> (client-side). This means:
          </p>
          <ul className="list-disc pl-6 text-zinc-700 space-y-2 mb-4">
            <li><strong>Photo Resizer:</strong> Your uploaded images are processed locally in your browser. They are <strong>never uploaded</strong> to our servers.</li>
            <li><strong>OTR Fee Calculator:</strong> Your exam and category selections are not transmitted or stored.</li>
            <li><strong>Age Calculator:</strong> The dates you enter remain in your browser only.</li>
            <li><strong>SSO ID Validator:</strong> Your input is validated locally; we never see what you type.</li>
          </ul>
          <p className="text-zinc-700 leading-relaxed mb-4">
            When you close your browser tab, all data from these tools is automatically deleted.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">6. Third-Party Links</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            Our website contains links to external websites, including:
          </p>
          <ul className="list-disc pl-6 text-zinc-700 space-y-2 mb-4">
            <li>SSO Rajasthan official portal (sso.rajasthan.gov.in)</li>
            <li>Government service portals (PayManager, RajKaj, Jan Aadhaar)</li>
            <li>Educational resources and exam websites</li>
          </ul>
          <p className="text-zinc-700 leading-relaxed mb-4">
            We are <strong>not responsible</strong> for the privacy practices of these external sites. Please review their privacy policies before providing any personal information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">7. Data Security</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            We implement security measures to protect the limited data we collect:
          </p>
          <ul className="list-disc pl-6 text-zinc-700 space-y-2 mb-4">
            <li><strong>HTTPS Encryption:</strong> All data transmitted to/from our site is encrypted via SSL/TLS</li>
            <li><strong>No User Database:</strong> We do not store user accounts, so there's no user data to breach</li>
            <li><strong>Static Site Architecture:</strong> Our website is pre-built (static), reducing attack surface</li>
            <li><strong>Regular Updates:</strong> We keep our software dependencies up-to-date with security patches</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">8. Your Rights (GDPR Compliance)</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            If you are in the European Economic Area (EEA) or India (under DPDP Act), you have the following rights:
          </p>
          <ul className="list-disc pl-6 text-zinc-700 space-y-2 mb-4">
            <li><strong>Right to Access:</strong> Request a copy of data we have about you (note: we collect minimal data)</li>
            <li><strong>Right to Erasure:</strong> Request deletion of your data (you can clear cookies/browser data)</li>
            <li><strong>Right to Object:</strong> Object to our processing of your data (opt out of Google Analytics)</li>
            <li><strong>Right to Restriction:</strong> Request we limit processing of your data</li>
            <li><strong>Right to Data Portability:</strong> Receive your data in a structured format</li>
          </ul>
          <p className="text-zinc-700 leading-relaxed mb-4">
            To exercise these rights, please contact us using the information in Section 12 below.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">9. Children's Privacy</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            Our website is intended for general audiences and does not knowingly collect information from children under 13. If you believe we have inadvertently collected such information, please contact us immediately.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">10. Data Retention</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            We retain analytics data for up to 26 months (Google Analytics default). After this period, data is automatically anonymized and aggregated. You can delete cookies from your browser at any time.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">11. Changes to This Privacy Policy</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last Updated" date. We encourage you to review this policy periodically. Continued use of our website after changes constitutes acceptance of the updated policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">12. Contact Us</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
          </p>
          <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-4">
            <p className="text-zinc-800 mb-2">
              <strong>RajSSO Guide</strong>
            </p>
            <p className="text-zinc-700 mb-2">
              Email: <a href="mailto:privacy@rajssoguide.online" className="text-amber-700 underline">privacy@rajssoguide.online</a>
            </p>
            <p className="text-zinc-700">
              Website: <a href="https://rajssoguide.online" className="text-amber-700 underline">rajssoguide.online</a>
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">13. Legal Basis for Processing (GDPR)</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            Our legal basis for processing your data under GDPR is:
          </p>
          <ul className="list-disc pl-6 text-zinc-700 space-y-2 mb-4">
            <li><strong>Legitimate Interest:</strong> Website analytics to improve user experience</li>
            <li><strong>Consent:</strong> By using our website, you consent to cookies as described in this policy</li>
          </ul>
        </section>

        <div className="bg-amber-50 border-l-4 border-amber-600 p-4 mt-8">
          <p className="text-sm text-zinc-700">
            <strong>Reminder:</strong> RajSSO Guide is an independent guide. We are not affiliated with the Government of Rajasthan. For official SSO services, always visit <a href="https://sso.rajasthan.gov.in" target="_blank" rel="nofollow noopener" className="text-amber-700 underline font-semibold">sso.rajasthan.gov.in</a>.
          </p>
        </div>
      </article>
    </main>
  );
}

function PrivacyPolicyHindi() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <article className="prose prose-zinc lg:prose-lg">
        <h1 className="text-3xl font-bold text-zinc-900 mb-6">गोपनीयता नीति</h1>
        
        <p className="text-sm text-zinc-600 mb-6">
          <strong>अंतिम अपडेट:</strong> 13 जून 2026
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">1. परिचय</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            RajSSO Guide ("हम," "हमारा," या "हमें") में आपका स्वागत है। हम आपकी गोपनीयता की सुरक्षा और जानकारी को कैसे संभालते हैं, इस बारे में पारदर्शी होने के लिए प्रतिबद्ध हैं। यह गोपनीयता नीति बताती है कि हम क्या जानकारी एकत्र करते हैं, इसका उपयोग कैसे करते हैं, और आपके डेटा के बारे में आपके अधिकार क्या हैं।
          </p>
          <p className="text-zinc-700 leading-relaxed mb-4">
            <strong>महत्वपूर्ण:</strong> RajSSO Guide एक स्वतंत्र सूचनात्मक वेबसाइट है। हम राजस्थान सरकार या SSO राजस्थान पोर्टल (sso.rajasthan.gov.in) से <strong>संबद्ध नहीं</strong> हैं। हम <strong>कभी भी</strong> आपकी SSO ID, पासवर्ड, OTP, या किसी लॉगिन क्रेडेंशियल्स को नहीं मांगते या स्टोर नहीं करते हैं।
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">2. हम कौनसी जानकारी एकत्र करते हैं</h2>
          
          <h3 className="text-xl font-semibold text-zinc-800 mb-3">2.1 आपके द्वारा प्रदान की गई जानकारी</h3>
          <p className="text-zinc-700 leading-relaxed mb-4">
            हमारी वेबसाइट का उपयोग करने के लिए हमें आपको कोई खाता बनाने या व्यक्तिगत जानकारी प्रदान करने की <strong>आवश्यकता नहीं</strong> है। हमारे टूल्स (OTR शुल्क कैलकुलेटर, आयु कैलकुलेटर, फोटो रिसाइज़र, आदि) पूरी तरह से आपके वेब ब्राउज़र में चलते हैं और हमारे सर्वर को कोई डेटा नहीं भेजते हैं।
          </p>

          <h3 className="text-xl font-semibold text-zinc-800 mb-3">2.2 स्वचालित रूप से एकत्रित जानकारी</h3>
          <p className="text-zinc-700 leading-relaxed mb-4">
            जब आप हमारी वेबसाइट पर जाते हैं, तो हम Google Analytics और Vercel Analytics के माध्यम से स्वचालित रूप से कुछ जानकारी एकत्र करते हैं:
          </p>
          <ul className="list-disc pl-6 text-zinc-700 space-y-2 mb-4">
            <li><strong>डिवाइस जानकारी:</strong> ब्राउज़र प्रकार, ऑपरेटिंग सिस्टम, डिवाइस प्रकार (मोबाइल/डेस्कटॉप)</li>
            <li><strong>उपयोग डेटा:</strong> देखे गए पेज, पेज पर बिताया गया समय, रेफरल स्रोत, क्लिक्स</li>
            <li><strong>तकनीकी डेटा:</strong> IP पता (गुमनाम), अनुमानित स्थान (शहर/राज्य स्तर), भाषा प्राथमिकता</li>
            <li><strong>परफॉर्मेंस डेटा:</strong> पेज लोड समय, त्रुटियां (Vercel Speed Insights के माध्यम से)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">3. हम आपकी जानकारी का उपयोग कैसे करते हैं</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            हम एकत्रित जानकारी का उपयोग निम्नलिखित उद्देश्यों के लिए करते हैं:
          </p>
          <ul className="list-disc pl-6 text-zinc-700 space-y-2 mb-4">
            <li><strong>वेबसाइट विश्लेषण:</strong> समझें कि विज़िटर्स हमारी साइट का उपयोग कैसे करते हैं ताकि सामग्री और उपयोगकर्ता अनुभव में सुधार हो सके</li>
            <li><strong>परफॉर्मेंस मॉनिटरिंग:</strong> तकनीकी समस्याओं की पहचान और समाधान, पेज लोड समय को अनुकूलित करना</li>
            <li><strong>सामग्री अनुकूलन:</strong> यह निर्धारित करना कि कौन से गाइड और टूल्स सबसे उपयोगी हैं ताकि अपडेट को प्राथमिकता दी जा सके</li>
            <li><strong>सुरक्षा:</strong> दुरुपयोग, स्पैम या दुर्भावनापूर्ण गतिविधि का पता लगाना और रोकना</li>
          </ul>
          <p className="text-zinc-700 leading-relaxed mb-4">
            <strong>हम नहीं करते:</strong>
          </p>
          <ul className="list-disc pl-6 text-zinc-700 space-y-2 mb-4">
            <li>आपके डेटा को तीसरे पक्ष को बेचना</li>
            <li>आपकी SSO ID, पासवर्ड या OTP को स्टोर करना</li>
            <li>अन्य वेबसाइटों पर आपको ट्रैक करना</li>
            <li>आपकी सहमति के बिना मार्केटिंग के लिए आपके डेटा का उपयोग करना</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">4. कुकीज़ और ट्रैकिंग तकनीकें</h2>
          
          <h3 className="text-xl font-semibold text-zinc-800 mb-3">4.1 Google Analytics</h3>
          <p className="text-zinc-700 leading-relaxed mb-4">
            हम वेबसाइट ट्रैफिक और उपयोग पैटर्न को समझने के लिए Google Analytics का उपयोग करते हैं। Google Analytics गुमनाम जानकारी एकत्र करने के लिए कुकीज़ (छोटी टेक्स्ट फाइलें) का उपयोग करता है। ये कुकीज़:
          </p>
          <ul className="list-disc pl-6 text-zinc-700 space-y-2 mb-4">
            <li>आपके द्वारा देखे गए पेज और साइट पर बिताए गए समय को ट्रैक करती हैं</li>
            <li>आपके डिवाइस प्रकार और ब्राउज़र को रिकॉर्ड करती हैं</li>
            <li>एक यादृच्छिक रूप से जेनरेट की गई ID स्टोर करती हैं (आपकी पहचान से लिंक नहीं)</li>
            <li>निष्क्रियता के 2 साल बाद समाप्त हो जाती हैं</li>
          </ul>
          <p className="text-zinc-700 leading-relaxed mb-4">
            इस डेटा का Google का उपयोग <a href="https://policies.google.com/privacy" target="_blank" rel="noopener" className="text-amber-700 underline">Google गोपनीयता नीति</a> द्वारा नियंत्रित है।
          </p>

          <h3 className="text-xl font-semibold text-zinc-800 mb-3">4.2 Vercel Analytics</h3>
          <p className="text-zinc-700 leading-relaxed mb-4">
            हम वेबसाइट परफॉर्मेंस को मॉनिटर करने के लिए Vercel Speed Insights (गोपनीयता-अनुकूल) का उपयोग करते हैं। यह सेवा:
          </p>
          <ul className="list-disc pl-6 text-zinc-700 space-y-2 mb-4">
            <li>कुकीज़ का उपयोग नहीं करती</li>
            <li>गुमनाम परफॉर्मेंस मेट्रिक्स एकत्र करती है</li>
            <li>व्यक्तिगत उपयोगकर्ताओं को ट्रैक नहीं करती</li>
          </ul>

          <h3 className="text-xl font-semibold text-zinc-800 mb-3">4.3 कुकीज़ प्रबंधित करना</h3>
          <p className="text-zinc-700 leading-relaxed mb-4">
            आप अपनी ब्राउज़र सेटिंग्स के माध्यम से कुकीज़ को नियंत्रित कर सकते हैं:
          </p>
          <ul className="list-disc pl-6 text-zinc-700 space-y-2 mb-4">
            <li><strong>Chrome:</strong> सेटिंग्स → गोपनीयता और सुरक्षा → कुकीज़</li>
            <li><strong>Firefox:</strong> सेटिंग्स → गोपनीयता और सुरक्षा → कुकीज़</li>
            <li><strong>Safari:</strong> प्राथमिकताएं → गोपनीयता → वेबसाइट डेटा प्रबंधित करें</li>
          </ul>
          <p className="text-zinc-700 leading-relaxed mb-4">
            आप <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener" className="text-amber-700 underline">Google Analytics Opt-out Browser Add-on</a> इंस्टॉल करके भी Google Analytics ट्रैकिंग से बाहर निकल सकते हैं।
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">5. क्लाइंट-साइड टूल्स (फोटो रिसाइज़र, कैलकुलेटर)</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            हमारे सभी टूल्स <strong>पूरी तरह से आपके वेब ब्राउज़र में</strong> चलते हैं (क्लाइंट-साइड)। इसका मतलब है:
          </p>
          <ul className="list-disc pl-6 text-zinc-700 space-y-2 mb-4">
            <li><strong>फोटो रिसाइज़र:</strong> आपकी अपलोड की गई छवियां आपके ब्राउज़र में स्थानीय रूप से प्रोसेस होती हैं। वे <strong>कभी भी</strong> हमारे सर्वर पर अपलोड नहीं की जाती हैं।</li>
            <li><strong>OTR शुल्क कैलकुलेटर:</strong> आपकी परीक्षा और श्रेणी चयन प्रसारित या संग्रहीत नहीं किए जाते हैं।</li>
            <li><strong>आयु कैलकुलेटर:</strong> आपके द्वारा दर्ज की गई तारीखें केवल आपके ब्राउज़र में रहती हैं।</li>
            <li><strong>SSO ID Validator:</strong> आपका इनपुट स्थानीय रूप से मान्य किया जाता है; हम कभी नहीं देखते कि आप क्या टाइप करते हैं।</li>
          </ul>
          <p className="text-zinc-700 leading-relaxed mb-4">
            जब आप अपना ब्राउज़र टैब बंद करते हैं, तो इन टूल्स से सभी डेटा स्वचालित रूप से डिलीट हो जाता है।
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">6. तृतीय-पक्ष लिंक</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            हमारी वेबसाइट में बाहरी वेबसाइटों के लिंक हैं, जिनमें शामिल हैं:
          </p>
          <ul className="list-disc pl-6 text-zinc-700 space-y-2 mb-4">
            <li>SSO राजस्थान आधिकारिक पोर्टल (sso.rajasthan.gov.in)</li>
            <li>सरकारी सेवा पोर्टल (PayManager, RajKaj, Jan Aadhaar)</li>
            <li>शैक्षिक संसाधन और परीक्षा वेबसाइटें</li>
          </ul>
          <p className="text-zinc-700 leading-relaxed mb-4">
            हम इन बाहरी साइटों की गोपनीयता प्रथाओं के लिए <strong>जिम्मेदार नहीं</strong> हैं। कृपया कोई भी व्यक्तिगत जानकारी प्रदान करने से पहले उनकी गोपनीयता नीतियों की समीक्षा करें।
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">7. डेटा सुरक्षा</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            हम एकत्रित किए गए सीमित डेटा की सुरक्षा के लिए सुरक्षा उपाय लागू करते हैं:
          </p>
          <ul className="list-disc pl-6 text-zinc-700 space-y-2 mb-4">
            <li><strong>HTTPS एन्क्रिप्शन:</strong> हमारी साइट से/को प्रसारित सभी डेटा SSL/TLS के माध्यम से एन्क्रिप्ट किया गया है</li>
            <li><strong>कोई उपयोगकर्ता डेटाबेस नहीं:</strong> हम उपयोगकर्ता खाते स्टोर नहीं करते हैं, इसलिए भंग करने के लिए कोई उपयोगकर्ता डेटा नहीं है</li>
            <li><strong>स्टेटिक साइट आर्किटेक्चर:</strong> हमारी वेबसाइट पूर्व-निर्मित (स्थिर) है, जो हमला सतह को कम करती है</li>
            <li><strong>नियमित अपडेट:</strong> हम अपनी सॉफ़्टवेयर निर्भरताओं को सुरक्षा पैच के साथ अप-टू-डेट रखते हैं</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">8. आपके अधिकार (GDPR अनुपालन)</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            यदि आप यूरोपीय आर्थिक क्षेत्र (EEA) या भारत (DPDP अधिनियम के तहत) में हैं, तो आपके पास निम्नलिखित अधिकार हैं:
          </p>
          <ul className="list-disc pl-6 text-zinc-700 space-y-2 mb-4">
            <li><strong>पहुंच का अधिकार:</strong> हमारे पास आपके बारे में डेटा की एक प्रति का अनुरोध करें (नोट: हम न्यूनतम डेटा एकत्र करते हैं)</li>
            <li><strong>विलोपन का अधिकार:</strong> अपने डेटा को हटाने का अनुरोध करें (आप कुकीज़/ब्राउज़र डेटा साफ कर सकते हैं)</li>
            <li><strong>आपत्ति का अधिकार:</strong> आपके डेटा की हमारी प्रोसेसिंग पर आपत्ति करें (Google Analytics से बाहर निकलें)</li>
            <li><strong>प्रतिबंध का अधिकार:</strong> अनुरोध करें कि हम आपके डेटा की प्रोसेसिंग सीमित करें</li>
            <li><strong>डेटा पोर्टेबिलिटी का अधिकार:</strong> अपने डेटा को संरचित प्रारूप में प्राप्त करें</li>
          </ul>
          <p className="text-zinc-700 leading-relaxed mb-4">
            इन अधिकारों का प्रयोग करने के लिए, कृपया नीचे धारा 12 में दी गई जानकारी का उपयोग करके हमसे संपर्क करें।
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">9. बच्चों की गोपनीयता</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            हमारी वेबसाइट सामान्य दर्शकों के लिए है और 13 वर्ष से कम उम्र के बच्चों से जानकारी जानबूझकर एकत्र नहीं करती है। यदि आपको लगता है कि हमने अनजाने में ऐसी जानकारी एकत्र की है, तो कृपया तुरंत हमसे संपर्क करें।
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">10. डेटा प्रतिधारण</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            हम 26 महीने तक विश्लेषण डेटा बनाए रखते हैं (Google Analytics डिफ़ॉल्ट)। इस अवधि के बाद, डेटा स्वचालित रूप से गुमनाम और एकत्रित हो जाता है। आप किसी भी समय अपने ब्राउज़र से कुकीज़ हटा सकते हैं।
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">11. इस गोपनीयता नीति में परिवर्तन</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            हम समय-समय पर इस गोपनीयता नीति को अपडेट कर सकते हैं। परिवर्तन इस पेज पर अपडेट की गई "अंतिम अपडेट" तारीख के साथ पोस्ट किए जाएंगे। हम आपको समय-समय पर इस नीति की समीक्षा करने के लिए प्रोत्साहित करते हैं। परिवर्तनों के बाद हमारी वेबसाइट का निरंतर उपयोग अपडेट की गई नीति की स्वीकृति का गठन करता है।
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">12. हमसे संपर्क करें</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            यदि आपके पास इस गोपनीयता नीति के बारे में प्रश्न हैं या आप अपने अधिकारों का प्रयोग करना चाहते हैं, तो कृपया हमसे संपर्क करें:
          </p>
          <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-4">
            <p className="text-zinc-800 mb-2">
              <strong>RajSSO Guide</strong>
            </p>
            <p className="text-zinc-700 mb-2">
              ईमेल: <a href="mailto:privacy@rajssoguide.online" className="text-amber-700 underline">privacy@rajssoguide.online</a>
            </p>
            <p className="text-zinc-700">
              वेबसाइट: <a href="https://rajssoguide.online" className="text-amber-700 underline">rajssoguide.online</a>
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">13. प्रोसेसिंग के लिए कानूनी आधार (GDPR)</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            GDPR के तहत आपके डेटा को प्रोसेस करने के लिए हमारा कानूनी आधार है:
          </p>
          <ul className="list-disc pl-6 text-zinc-700 space-y-2 mb-4">
            <li><strong>वैध रुचि:</strong> उपयोगकर्ता अनुभव में सुधार के लिए वेबसाइट विश्लेषण</li>
            <li><strong>सहमति:</strong> हमारी वेबसाइट का उपयोग करके, आप इस नीति में वर्णित कुकीज़ के लिए सहमति देते हैं</li>
          </ul>
        </section>

        <div className="bg-amber-50 border-l-4 border-amber-600 p-4 mt-8">
          <p className="text-sm text-zinc-700">
            <strong>याद रखें:</strong> RajSSO Guide एक स्वतंत्र गाइड है। हम राजस्थान सरकार से संबद्ध नहीं हैं। आधिकारिक SSO सेवाओं के लिए, हमेशा <a href="https://sso.rajasthan.gov.in" target="_blank" rel="nofollow noopener" className="text-amber-700 underline font-semibold">sso.rajasthan.gov.in</a> पर जाएं।
          </p>
        </div>
      </article>
    </main>
  );
}
