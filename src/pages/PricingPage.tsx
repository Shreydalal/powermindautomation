import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import PricingCard from '../components/PricingCard';


const PricingPage = () => {
  const pricingPlans = [
    {
      title: 'Starter',
      price: '$99',
      description: 'Perfect for small real estate agencies just getting started with automation.',
      features: [
        { text: 'AI Chatbot with basic responses', included: true },
        { text: 'Up to 500 conversations per month', included: true },
        { text: 'Email lead notifications', included: true },
        { text: 'Basic analytics dashboard', included: true },
        { text: 'Standard support (email)', included: true },
        { text: 'CRM integration', included: false },
        { text: 'Custom branding', included: false },
        { text: 'Advanced analytics', included: false },
        { text: 'Priority support', included: false },
      ],
      isPopular: false,
    },
    {
      title: 'Professional',
      price: '$249',
      description: 'Ideal for growing real estate businesses looking to scale their operations.',
      features: [
        { text: 'Advanced AI Chatbot with property-specific responses', included: true },
        { text: 'Up to 2,000 conversations per month', included: true },
        { text: 'Real-time lead notifications', included: true },
        { text: 'Advanced analytics dashboard', included: true },
        { text: 'Priority support (email & chat)', included: true },
        { text: 'CRM integration', included: true },
        { text: 'Custom branding', included: true },
        { text: 'Multi-agent support', included: false },
        { text: 'Dedicated account manager', included: false },
      ],
      isPopular: true,
    },
    {
      title: 'Enterprise',
      price: '$499',
      description: 'For established real estate companies with high volume and custom needs.',
      features: [
        { text: 'Premium AI Chatbot with advanced personalization', included: true },
        { text: 'Unlimited conversations', included: true },
        { text: 'Priority lead routing', included: true },
        { text: 'Custom analytics and reporting', included: true },
        { text: 'VIP support (24/7 phone, email & chat)', included: true },
        { text: 'Advanced CRM integration', included: true },
        { text: 'White-labeling options', included: true },
        { text: 'Multi-agent support', included: true },
        { text: 'Dedicated account manager', included: true },
      ],
      isPopular: false,
    },
  ];


  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Simple, Transparent Pricing
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl mb-8"
            >
              Choose the perfect plan for your real estate business needs.
              All plans include a 14-day free trial.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <PricingCard {...plan} />
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Need a custom solution? Contact us for a tailored plan that fits your specific requirements.
            </p>
            <Link to="/contact">
              <Button variant="outline">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Compare Plan Features</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-4 font-semibold">Feature</th>
                    <th className="text-center py-4 px-4 font-semibold">Starter</th>
                    <th className="text-center py-4 px-4 font-semibold">Professional</th>
                    <th className="text-center py-4 px-4 font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-4">Monthly conversations</td>
                    <td className="text-center py-4 px-4">500</td>
                    <td className="text-center py-4 px-4">2,000</td>
                    <td className="text-center py-4 px-4">Unlimited</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-100">
                    <td className="py-4 px-4">AI response quality</td>
                    <td className="text-center py-4 px-4">Basic</td>
                    <td className="text-center py-4 px-4">Advanced</td>
                    <td className="text-center py-4 px-4">Premium</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-4">Lead notifications</td>
                    <td className="text-center py-4 px-4">Email</td>
                    <td className="text-center py-4 px-4">Real-time</td>
                    <td className="text-center py-4 px-4">Priority routing</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-100">
                    <td className="py-4 px-4">CRM integration</td>
                    <td className="text-center py-4 px-4">
                      <span className="text-red-500">✕</span>
                    </td>
                    <td className="text-center py-4 px-4">
                      <span className="text-green-500">✓</span>
                    </td>
                    <td className="text-center py-4 px-4">
                      <span className="text-green-500">✓</span> Advanced
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-4">Branding options</td>
                    <td className="text-center py-4 px-4">
                      <span className="text-red-500">✕</span>
                    </td>
                    <td className="text-center py-4 px-4">
                      <span className="text-green-500">✓</span> Custom
                    </td>
                    <td className="text-center py-4 px-4">
                      <span className="text-green-500">✓</span> White-label
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-100">
                    <td className="py-4 px-4">Support level</td>
                    <td className="text-center py-4 px-4">Standard</td>
                    <td className="text-center py-4 px-4">Priority</td>
                    <td className="text-center py-4 px-4">VIP 24/7</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-4">Analytics</td>
                    <td className="text-center py-4 px-4">Basic</td>
                    <td className="text-center py-4 px-4">Advanced</td>
                    <td className="text-center py-4 px-4">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
      