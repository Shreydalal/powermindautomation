import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageSquare, Clock, Users, BarChart } from 'lucide-react';
import Button from '../components/Button';
import FeatureCard from '../components/FeatureCard';
import TestimonialCard from '../components/TestimonialCard';

const HomePage = () => {
  const features = [
    {
      icon: MessageSquare,
      title: 'Intelligent Conversations',
      description: 'Our AI chatbot engages in natural conversations with potential clients, answering their queries instantly.',
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Never miss a lead with round-the-clock automated responses, even when your office is closed.',
    },
    {
      icon: Users,
      title: 'Lead Generation',
      description: 'Capture qualified leads automatically and sync them with your existing CRM systems.',
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Track chatbot performance, user engagement, and conversion rates with detailed analytics.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'Prime Properties',
      testimonial: 'Powermind Automation has transformed how we engage with clients. Our lead conversion has increased by 40% since implementation.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    },
    {
      name: 'Michael Chen',
      role: 'CEO',
      company: 'Horizon Realty',
      testimonial: 'The chatbot handles routine inquiries perfectly, freeing up our agents to focus on closing deals. Worth every penny!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    },
    {
      name: 'Priya Sharma',
      role: 'Sales Manager',
      company: 'Urban Spaces',
      testimonial: 'We have seen a significant improvement in customer satisfaction since implementing the AI chatbot. It is like having an extra team member.',
      rating: 4,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white pt-32 pb-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Revolutionize Your Real Estate Business with AI
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl mb-8"
            >
              Boost client engagement, simplify property inquiries, and generate leads 24/7.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link to="/contact">
                <Button variant="primary" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Get Started
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How Powermind Automation Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered chatbot streamlines your real estate business operations and enhances client interactions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
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
          <div className="text-center mt-12">
            <Link to="/features">
              <Button variant="outline">
                Explore All Features
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <motion.img
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Real estate agent using AI chatbot"
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
                <h2 className="text-3xl font-bold mb-6">Transform Your Customer Experience</h2>
                <p className="text-gray-600 mb-6">
                  In today's competitive real estate market, providing instant responses to client inquiries can make all the difference. Our AI chatbot ensures you never miss an opportunity.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <p className="text-gray-700">Respond to property inquiries instantly, 24/7</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <p className="text-gray-700">Qualify leads automatically based on preferences</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <p className="text-gray-700">Schedule property viewings without human intervention</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <p className="text-gray-700">Integrate seamlessly with your existing CRM systems</p>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link to="/why-choose-us">
                    <Button variant="primary">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from real estate professionals who have transformed their businesses with our AI chatbot.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
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
          <Link to="/contact">
            <Button variant="primary" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;