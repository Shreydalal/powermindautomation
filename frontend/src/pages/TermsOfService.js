import React from 'react';

const TermsOfService = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="text-sm text-gray-500 mb-10">Last updated: {new Date().toLocaleDateString()}</p>

      <section className="mb-8" id="acceptance">
        <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
        <p>By accessing or using this website (the "Site") you agree to these Terms. If you don’t agree, please do not use the Site. These Terms may be updated periodically and continued use means you accept any changes.</p>
      </section>

      <section className="mb-8" id="services">
        <h2 className="text-xl font-semibold mb-2">2. Services Provided</h2>
        <p>We offer workflow automation, AI integration, optimization consulting, and related implementation services. Information on the Site is for general guidance and does not constitute a binding offer unless explicitly stated in a written agreement.</p>
      </section>

      <section className="mb-8" id="use">
        <h2 className="text-xl font-semibold mb-2">3. Use of the Website</h2>
        <p>You agree not to misuse the Site (no unauthorized access, scraping, reverse engineering, or interference). You may submit information to request a consultation or book a call; you are responsible for ensuring it is accurate.</p>
      </section>

      <section className="mb-8" id="payments">
        <h2 className="text-xl font-semibold mb-2">4. Payments & Refunds</h2>
        <p>Any paid engagements are governed by a separate proposal or service agreement. Unless otherwise stated in that agreement, all payments are non-refundable once work has commenced. We do not process payments directly through this Site.</p>
      </section>

      <section className="mb-8" id="liability">
        <h2 className="text-xl font-semibold mb-2">5. Limitation of Liability</h2>
        <p>To the fullest extent permitted by law, we are not liable for indirect, incidental, special, or consequential damages, lost profits, data loss, or business interruption arising from use of the Site or services.</p>
      </section>

      <section className="mb-8" id="ip">
        <h2 className="text-xl font-semibold mb-2">6. Intellectual Property</h2>
        <p>All trademarks, logos, copy, graphics, and site components are our intellectual property or licensed to us. You may not reproduce or redistribute any content without prior written consent, aside from normal browser caching.</p>
      </section>

      <section className="mb-8" id="termination">
        <h2 className="text-xl font-semibold mb-2">7. Termination</h2>
        <p>We may suspend or terminate access to the Site at any time for any misuse or suspected abuse. Provisions that by nature should survive termination (intellectual property, disclaimers, limitation of liability) will continue to apply.</p>
      </section>

      <section className="mb-12" id="law">
        <h2 className="text-xl font-semibold mb-2">8. Governing Law</h2>
        <p>These Terms are governed by the laws of India, without regard to conflict of law principles. Disputes will be handled in the competent courts located in Gujarat, India, unless agreed otherwise in writing.</p>
      </section>

      <p className="text-sm text-gray-500">Questions? Contact us at <a href="mailto:hello@powermindautomation.tech" className="text-blue-600 underline">hello@powermindautomation.tech</a>.</p>
    </div>
  );
};

export default TermsOfService;
