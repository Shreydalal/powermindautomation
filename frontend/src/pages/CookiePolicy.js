import React from 'react';

const CookiePolicy = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>
      <p className="text-sm text-gray-500 mb-10">Last updated: {new Date().toLocaleDateString()}</p>

      <section className="mb-8" id="what">
        <h2 className="text-xl font-semibold mb-2">1. What Cookies Are</h2>
        <p>Cookies are small text files stored on your device to help websites function, remember preferences, and analyze performance.</p>
      </section>

      <section className="mb-8" id="use">
        <h2 className="text-xl font-semibold mb-2">2. How We Use Cookies</h2>
        <p>We use: (a) Essential cookies for basic functionality (forms, navigation), (b) Performance & analytics cookies (Google Analytics) to understand usage, and (c) Preference cookies to remember basic settings.</p>
      </section>

      <section className="mb-8" id="third-party">
        <h2 className="text-xl font-semibold mb-2">3. Third-Party Cookies</h2>
        <p>Google Analytics sets cookies to collect anonymized usage stats (pages viewed, time on site). Google may process this per its own policies. We do not control third-party cookie behavior.</p>
      </section>

      <section className="mb-8" id="managing">
        <h2 className="text-xl font-semibold mb-2">4. Managing Cookies</h2>
        <p>You can block or delete cookies via your browser settings. Most browsers allow you to refuse third-party cookies. Disabling essential cookies may affect site functionality.</p>
      </section>

      <section className="mb-12" id="consent">
        <h2 className="text-xl font-semibold mb-2">5. Consent</h2>
        <p>By continuing to use this site you consent to our use of cookies as described here. Where required, a banner will request your explicit consent for non-essential cookies.</p>
      </section>

      <p className="text-sm text-gray-500">Questions? Email <a href="mailto:privacy@powermindautomation.tech" className="text-blue-600 underline">privacy@powermindautomation.tech</a>.</p>
    </div>
  );
};

export default CookiePolicy;
