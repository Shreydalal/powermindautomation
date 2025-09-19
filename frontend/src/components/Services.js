import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import ServiceModal from './ServiceModal';
import { 
  Users, 
  Database, 
  Mail, 
  Calendar, 
  Workflow, 
  BarChart3,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      icon: Users,
      title: "Lead Management Automation",
      description: "Automatically capture, qualify, and nurture leads through intelligent scoring and routing systems.",
      features: ["Smart lead scoring", "Automated routing", "Lead nurturing sequences", "ROI tracking"],
      color: "blue"
    },
    {
      icon: Database,
      title: "CRM & Pipeline Management",
      description: "Streamline your sales process with automated pipeline management and customer relationship optimization.",
      features: ["Pipeline automation", "Deal progression", "Contact management", "Sales forecasting"],
      color: "green"
    },
    {
      icon: Mail,
      title: "Email & Outreach Automation",
      description: "Scale your outreach with personalized, AI-driven email campaigns that convert prospects into customers.",
      features: ["Personalized sequences", "A/B testing", "Performance analytics", "Smart follow-ups"],
      color: "purple"
    },
    {
      icon: Calendar,
      title: "Booking & Appointment Scheduling",
      description: "Eliminate scheduling hassles with intelligent calendar management and automated booking systems.",
      features: ["Smart scheduling", "Calendar sync", "Reminder automation", "No-show reduction"],
      color: "orange"
    },
    {
      icon: Workflow,
      title: "Workflow & Task Automation",
      description: "Automate repetitive tasks and create seamless workflows that boost team productivity by 300%.",
      features: ["Custom workflows", "Task automation", "Team collaboration", "Process optimization"],
      color: "indigo"
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Get actionable insights with automated reporting and real-time analytics dashboards.",
      features: ["Real-time dashboards", "Custom reports", "Performance metrics", "Predictive analytics"],
      color: "teal"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: "bg-blue-100 text-blue-600 border-blue-200",
      green: "bg-green-100 text-green-600 border-green-200",
      purple: "bg-purple-100 text-purple-600 border-purple-200",
      orange: "bg-orange-100 text-orange-600 border-orange-200",
      indigo: "bg-indigo-100 text-indigo-600 border-indigo-200",
      teal: "bg-teal-100 text-teal-600 border-teal-200"
    };
    return colorMap[color] || colorMap.blue;
  };

  const handleLearnMore = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Workflow className="h-4 w-4" />
            <span>Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Complete AI Automation Solutions
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Transform every aspect of your business with our comprehensive automation services. 
            From lead generation to analytics, we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-blue-200 bg-white/50 backdrop-blur-sm h-full flex flex-col"
            >
              <CardHeader className="pb-4 flex-shrink-0">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl ${getColorClasses(service.color)} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
                <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 flex-grow flex flex-col">
                <ul className="space-y-2 mb-6 flex-grow">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 text-sm sm:text-base py-2 sm:py-3"
                  onClick={() => handleLearnMore(service)}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 sm:p-8 lg:p-12">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Ready to Automate Your Business?
          </h3>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Get a personalized automation strategy session and discover how we can boost your productivity by 300%.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Button 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-200 hover:shadow-lg hover:scale-105 group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Free Strategy Session
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-200"
              onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Case Studies
            </Button>
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      <ServiceModal 
        service={selectedService}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default Services;