import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-10">Last updated: {new Date().toLocaleDateString()}</p>

      <section className="mb-8" id="info">
        <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
        <p>We collect information you submit via forms or booking links: name, email, phone number, company name, and any message details. We also collect basic usage data through cookies (see Cookies section).</p>
      </section>

      <section className="mb-8" id="use">
        <h2 className="text-xl font-semibold mb-2">2. How We Use Information</h2>
        <p>We use your data to: respond to inquiries, schedule calls, deliver proposals, improve our services, personalize communication, and maintain internal records. We may send service or update emails—you can opt out of non-essential messages.</p>
      </section>

      <section className="mb-8" id="cookies">
        <h2 className="text-xl font-semibold mb-2">3. Cookies & Tracking</h2>
        <p>We use cookies and similar technologies for functionality, performance, and analytics (Google Analytics). You can disable cookies in your browser; essential features may still require basic cookie use.</p>
      </section>

      <section className="mb-8" id="sharing">
        <h2 className="text-xl font-semibold mb-2">4. Data Sharing</h2>
        <p>We do not sell your personal data. We may share it with trusted service providers strictly for operations (analytics, hosting, communications) under confidentiality obligations, or when required by law.</p>
      </section>

      <section className="mb-8" id="security">
        <h2 className="text-xl font-semibold mb-2">5. Data Security</h2>
        <p>We apply reasonable administrative, technical, and organizational safeguards. However, no method of transmission or storage is 100% secure, so we cannot guarantee absolute security.</p>
      </section>

      <section className="mb-8" id="rights">
        <h2 className="text-xl font-semibold mb-2">6. Your Rights</h2>
        <p>You may request access, correction, deletion, or restriction of your personal data. You may also object to processing or request data portability where applicable. To exercise rights, email us at <a href="mailto:privacy@powermindautomation.tech" className="text-blue-600 underline">privacy@powermindautomation.tech</a>. You can opt out of non-essential emails anytime.</p>
      </section>

      <section className="mb-12" id="contact">
        <h2 className="text-xl font-semibold mb-2">7. Contact Information</h2>
        <p>For privacy concerns email <a href="mailto:privacy@powermindautomation.tech" className="text-blue-600 underline">privacy@powermindautomation.tech</a>.</p>
      </section>

      <p className="text-sm text-gray-500">If we make material changes, we will update this page with a new date.</p>
    </div>
  );
};

export default PrivacyPolicy;
