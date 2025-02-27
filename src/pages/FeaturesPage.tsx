import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Calendar, 
  Search, 
  UserPlus, 
  Link as LinkIcon, 
  Globe, 
  Bell, 
  Home,
  Database,
  BarChart3,
  Shield,
  Zap
} from 'lucide-react';
import FeatureCard from '../components/FeatureCard';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const FeaturesPage = () => {
  const mainFeatures = [
    {
      icon: Home,
      title: 'Property Listings',
      description: 'Showcase available properties based on user preferences including location, budget, and property type.',
    },
    {
      icon: Calendar,
      title: 'Site Visit Scheduling',
      description: 'Allow users to book property tours directly through the chatbot with automated confirmation.',
    },
    {
      icon: MessageSquare,
      title: 'Instant FAQs',
      description: 'Automated responses for common questions about pricing, location, legal documentation, and more.',
    },
    {
      icon: Search,
      title: 'Smart Property Search',
      description: 'Advanced filtering options for budget, location, property type, and amenities to find the perfect match.',
    },
    {
      icon: UserPlus,
      title: 'Lead Generation',
      description: 'Captures user details for seamless follow-ups and converts casual browsers into qualified leads.',
    },
    {
      icon: LinkIcon,
      title: 'CRM Integration',
      description: 'Sync leads with existing CRM systems to streamline your sales process and follow-up activities.',
    },
    {
      icon: Globe,
      title: 'Multi-Language Support',
      description: 'Engage global audiences with support for multiple languages to expand your market reach.',
    },
    {
      icon: Bell,
      title: 'Promotions & Offers',
      description: 'Notify users about new listings, special deals, and promotional offers to drive engagement.',
    },
  ];

  const advancedFeatures = [
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Gain valuable insights into user behavior, preferences, and conversion patterns to optimize your marketing strategy.',
    },
    {
      icon: BarChart3,
      title: 'Performance Dashboard',
      description: 'Monitor chatbot performance, lead generation metrics, and conversion rates through an intuitive dashboard.',
    },
    {
      icon: Shield,
      title: 'Secure Conversations',
      description: 'End-to-end encryption ensures all client conversations and personal information remain private and secure.',
    },
    {
      icon: Zap,
      title: 'Continuous Learning',
      description: 'Our AI improves over time by learning from interactions, becoming more effective at addressing client needs.',
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-6"
            >
              Powerful Features for Real Estate Success
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl mb-8"
            >
              Our AI-powered chatbot comes packed with features designed specifically for real estate professionals.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link to="/contact">
                <Button variant="primary" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Request Demo
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Core Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to transform your real estate business with AI-powered automation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Feature Sections */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Property Listings */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            <div className="lg:w-1/2">
              <motion.img
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Property listings feature"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">Property Listings</h2>
                <p className="text-gray-600 mb-6">
                  Our AI chatbot can showcase your property listings based on user preferences, creating a personalized experience for each potential client.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <p className="text-gray-700">Personalized property recommendations based on user preferences</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <p className="text-gray-700">Detailed property information including photos, floor plans, and virtual tours</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <p className="text-gray-700">Real-time availability updates to prevent inquiries about sold properties</p>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Smart Property Search */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 mb-20">
            <div className="lg:w-1/2">
              <motion.img
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                src="https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Smart property search feature"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">Smart Property Search</h2>
                <p className="text-gray-600 mb-6">
                  Our advanced search functionality helps users find their dream property quickly and efficiently, improving user satisfaction and conversion rates.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <p className="text-gray-700">Natural language processing to understand complex search queries</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <p className="text-gray-700">Multiple filtering options including price range, location, property type, and amenities</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <p className="text-gray-700">Remembers user preferences for future interactions and recommendations</p>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Lead Generation */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <motion.img
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Lead generation feature"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">Lead Generation</h2>
                <p className="text-gray-600 mb-6">
                  Convert website visitors into qualified leads with our intelligent chatbot that engages users and collects valuable information.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <p className="text-gray-700">Automated lead qualification based on budget, timeline, and preferences</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <p className="text-gray-700">Seamless contact information collection without disrupting the conversation flow</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <p className="text-gray-700">Instant notifications to your team when high-value leads are identified</p>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Advanced Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take your real estate business to the next level with these powerful advanced features.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advancedFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Seamless Integrations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our chatbot integrates with your existing tools and platforms to create a unified workflow.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
            >
              <div className="h-16 w-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-lg">CRM</span>
              </div>
              <p className="text-center font-medium">CRM Systems</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
            >
              <div className="h-16 w-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-lg">Email</span>
              </div>
              <p className="text-center font-medium">Email Marketing</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
            >
              <div className="h-16 w-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-lg">Cal</span>
              </div>
              <p className="text-center font-medium">Calendar Apps</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
            >
              <div className="h-16 w-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-lg">API</span>
              </div>
              <p className="text-center font-medium">Custom APIs</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Real Estate Business?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join hundreds of real estate professionals who are already using Powermind Automation to boost their business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/pricing">
              <Button variant="primary" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                View Pricing
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-blue-700">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;