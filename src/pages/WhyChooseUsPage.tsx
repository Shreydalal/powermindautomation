import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Award, 
  Zap, 
  TrendingUp, 
  Clock, 
  Shield, 
  Users, 
  Database, 
  BarChart3, 
  Headphones 
} from 'lucide-react';
import Button from '../components/Button';
import FeatureCard from '../components/FeatureCard';
import TestimonialCard from '../components/TestimonialCard';

const WhyChooseUsPage = () => {
  const benefits = [
    {
      icon: Clock,
      title: 'Save Time',
      description: 'Automate routine inquiries and lead qualification, freeing up your agents to focus on closing deals.',
    },
    {
      icon: TrendingUp,
      title: 'Increase Conversions',
      description: 'Respond to leads instantly, 24/7, dramatically improving conversion rates and client satisfaction.',
    },
    {
      icon: Database,
      title: 'Data-Driven Insights',
      description: 'Gain valuable insights into client preferences and behavior patterns to optimize your marketing strategy.',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Your data is protected with bank-level encryption and strict privacy controls.',
    },
    {
      icon: Zap,
      title: 'Seamless Integration',
      description: 'Easily integrate with your existing CRM, website, and other business tools.',
    },
    {
      icon: Headphones,
      title: 'Dedicated Support',
      description: 'Our customer success team ensures you get the most out of your Powermind implementation.',
    },
  ];

  const testimonials = [
    {
      name: 'David Rodriguez',
      role: 'Broker',
      company: 'Elite Properties',
      testimonial: 'Since implementing Powermind, our response time to inquiries has dropped from hours to seconds. Our clients love the instant answers, and we have seen a 35% increase in qualified leads.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    },
    {
      name: 'Jennifer Lee',
      role: 'Operations Manager',
      company: 'Skyline Realty',
      testimonial: 'The AI chatbot has transformed our business. It handles routine questions flawlessly, allowing our team to focus on high-value activities. The ROI has been incredible.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    },
    {
      name: 'Marcus Johnson',
      role: 'Real Estate Agent',
      company: 'Prestige Homes',
      testimonial: 'As an individual agent, Powermind has been a game-changer. It is like having a personal assistant working 24/7. My clients get immediate responses, and I never miss a lead.',
      rating: 4,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    },
  ];

  const stats = [
    { value: '40%', label: 'Average increase in lead conversion' },
    { value: '24/7', label: 'Availability for client inquiries' },
    { value: '90%', label: 'Client satisfaction rate' },
    { value: '60%', label: 'Reduction in response time' },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Why Choose Powermind Automation
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl mb-8"
            >
              Discover how our AI-powered solutions are transforming real estate businesses across the country.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
            <p className="text-xl text-gray-600">
              We combine cutting-edge AI technology with deep real estate industry expertise to deliver solutions that drive real business results.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <motion.img
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Team working on AI solutions"
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
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold">Industry-Leading Technology</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Our proprietary AI models are specifically trained on real estate conversations and scenarios, enabling more accurate and helpful responses than generic chatbots.
                </p>
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold">Real Estate Expertise</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Built by real estate professionals for real estate professionals. We understand the unique challenges of the industry and design our solutions accordingly.
                </p>
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <BarChart3 className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold">Data-Driven Results</h3>
                </div>
                <p className="text-gray-600">
                  We measure success by the tangible business outcomes we deliver: more leads, higher conversion rates, and increased agent productivity.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Key Benefits</h2>
            <p className="text-xl text-gray-600">
              Discover how Powermind Automation can transform your real estate business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FeatureCard
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Hear from real estate professionals who have transformed their businesses with Powermind.
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
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience the Difference?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join the hundreds of real estate professionals who are already using Powermind Automation to transform their businesses.
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

export default WhyChooseUsPage;