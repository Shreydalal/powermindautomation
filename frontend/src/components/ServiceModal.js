import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  CheckCircle, 
  ArrowRight, 
  X,
  Users, 
  Database, 
  Mail, 
  Calendar, 
  Workflow, 
  BarChart3,
  Target,
  Clock,
  Zap,
  Shield
} from 'lucide-react';

const ServiceModal = ({ service, isOpen, onClose }) => {
  if (!service) return null;

  const getServiceIcon = (title) => {
    const iconMap = {
      "Lead Management Automation": Users,
      "CRM & Pipeline Management": Database,
      "Email & Outreach Automation": Mail,
      "Booking & Appointment Scheduling": Calendar,
      "Workflow & Task Automation": Workflow,
      "Analytics & Reporting": BarChart3
    };
    return iconMap[title] || Users;
  };

  const getServiceDetails = (title) => {
    const detailsMap = {
      "Lead Management Automation": {
        overview: "Transform your lead generation and qualification process with AI-powered automation that works 24/7 to identify, score, and nurture your most promising prospects.",
        keyBenefits: [
          "Increase lead quality by 85% with intelligent scoring",
          "Reduce manual qualification time by 40+ hours weekly",
          "Boost conversion rates by 180% with targeted nurturing",
          "Automate lead routing to the right sales representatives"
        ],
        howItWorks: [
          "AI analyzes visitor behavior and engagement patterns",
          "Automatically scores leads based on predefined criteria", 
          "Routes qualified leads to appropriate sales team members",
          "Triggers personalized nurturing sequences based on lead score"
        ],
        results: {
          metric: "Average Results",
          stats: [
            { label: "Lead Quality Improvement", value: "85%" },
            { label: "Time Saved Weekly", value: "40+ hrs" },
            { label: "Conversion Rate Increase", value: "180%" },
            { label: "Implementation Time", value: "5-7 days" }
          ]
        },
        pricing: "Starting at $497/month",
        timeline: "5-7 days setup + 2 weeks optimization"
      },
      "CRM & Pipeline Management": {
        overview: "Streamline your entire sales process with intelligent pipeline automation that moves deals forward automatically while keeping your team focused on closing.",
        keyBenefits: [
          "Automate deal progression through sales stages",
          "Increase sales team productivity by 250%",
          "Never lose a deal due to poor follow-up again",
          "Get real-time insights into pipeline health"
        ],
        howItWorks: [
          "Integrates with your existing CRM system",
          "Automatically updates deal stages based on actions",
          "Sends smart reminders for follow-ups and tasks",
          "Provides predictive analytics for deal closure"
        ],
        results: {
          metric: "Typical Improvements",
          stats: [
            { label: "Sales Productivity", value: "250%" },
            { label: "Deal Velocity", value: "40% faster" },
            { label: "Pipeline Accuracy", value: "95%" },
            { label: "Revenue Growth", value: "35%" }
          ]
        },
        pricing: "Starting at $697/month",
        timeline: "7-10 days setup + 3 weeks optimization"
      },
      "Email & Outreach Automation": {
        overview: "Scale your outreach efforts with AI-driven email campaigns that feel personal, deliver at the right time, and convert prospects into customers automatically.",
        keyBenefits: [
          "Send 10x more personalized emails without extra effort",
          "Achieve 92% open rates with optimal send timing",
          "Increase email ROI by 400% with smart sequences",
          "Automatically follow up with engaged prospects"
        ],
        howItWorks: [
          "AI personalizes emails based on prospect data",
          "Optimal send times determined by recipient behavior",
          "Automatic A/B testing finds best-performing content",
          "Smart follow-up sequences based on engagement"
        ],
        results: {
          metric: "Email Performance",
          stats: [
            { label: "Open Rate", value: "92%" },
            { label: "Response Rate", value: "35%" },
            { label: "ROI Increase", value: "400%" },
            { label: "Time Saved", value: "30 hrs/week" }
          ]
        },
        pricing: "Starting at $397/month",
        timeline: "3-5 days setup + 1 week optimization"
      },
      "Booking & Appointment Scheduling": {
        overview: "Eliminate scheduling friction with intelligent calendar management that automatically books appointments, sends reminders, and reduces no-shows by 70%.",
        keyBenefits: [
          "Reduce no-shows by 70% with smart reminders",
          "Eliminate back-and-forth scheduling emails",
          "Automatically reschedule based on priorities",
          "Integrate with all major calendar platforms"
        ],
        howItWorks: [
          "Smart calendar integration with availability detection",
          "Automated reminder sequences via email and SMS",
          "Intelligent rescheduling based on urgency and value",
          "Real-time calendar updates across all platforms"
        ],
        results: {
          metric: "Scheduling Efficiency",
          stats: [
            { label: "No-Show Reduction", value: "70%" },
            { label: "Scheduling Time Saved", value: "25 hrs/week" },
            { label: "Booking Conversion", value: "85%" },
            { label: "Client Satisfaction", value: "98%" }
          ]
        },
        pricing: "Starting at $297/month",
        timeline: "2-3 days setup + 1 week optimization"
      },
      "Workflow & Task Automation": {
        overview: "Automate repetitive tasks and create seamless workflows that boost team productivity by 300% while eliminating human error and reducing operational costs.",
        keyBenefits: [
          "Boost team productivity by 300% instantly",
          "Eliminate human error in repetitive processes",
          "Reduce operational costs by 45%",
          "Create custom workflows for any business process"
        ],
        howItWorks: [
          "Map existing workflows and identify automation opportunities",
          "Build custom automation rules and triggers",
          "Integrate with existing tools and platforms",
          "Monitor and optimize workflow performance"
        ],
        results: {
          metric: "Operational Efficiency",
          stats: [
            { label: "Productivity Increase", value: "300%" },
            { label: "Cost Reduction", value: "45%" },
            { label: "Error Reduction", value: "99%" },
            { label: "Process Speed", value: "10x faster" }
          ]
        },
        pricing: "Starting at $797/month",
        timeline: "10-14 days setup + 3 weeks optimization"
      },
      "Analytics & Reporting": {
        overview: "Get actionable insights with automated reporting and real-time analytics dashboards that help you make data-driven decisions and track ROI automatically.",
        keyBenefits: [
          "Real-time dashboards with key performance metrics",
          "Automatic report generation and distribution",
          "Predictive analytics for future performance",
          "ROI tracking across all automation systems"
        ],
        howItWorks: [
          "Connects to all your business systems and tools",
          "Automatically generates custom reports on schedule",
          "Provides predictive insights using AI analysis",
          "Delivers actionable recommendations for improvement"
        ],
        results: {
          metric: "Business Intelligence",
          stats: [
            { label: "Reporting Time Saved", value: "20 hrs/week" },
            { label: "Decision Speed", value: "5x faster" },
            { label: "Data Accuracy", value: "99.9%" },
            { label: "ROI Visibility", value: "100%" }
          ]
        },
        pricing: "Starting at $597/month",
        timeline: "5-7 days setup + 2 weeks optimization"
      }
    };
    return detailsMap[title] || detailsMap["Lead Management Automation"];
  };

  const IconComponent = getServiceIcon(service.title);
  const details = getServiceDetails(service.title);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white">
        <DialogHeader className="pb-6 border-b border-gray-200">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
              <IconComponent className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <DialogTitle className="text-2xl font-bold text-gray-900 mb-2">
                {service.title}
              </DialogTitle>
              <DialogDescription className="text-lg text-gray-600">
                {service.description}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="py-6 space-y-8">
          {/* Overview */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Target className="h-5 w-5 text-blue-600 mr-2" />
              Overview
            </h3>
            <p className="text-gray-700 leading-relaxed">{details.overview}</p>
          </div>

          {/* Key Benefits */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
              Key Benefits
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {details.keyBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg border border-green-200">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Workflow className="h-5 w-5 text-purple-600 mr-2" />
              How It Works
            </h3>
            <div className="space-y-3">
              {details.howItWorks.map((step, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold text-sm">{index + 1}</span>
                  </div>
                  <span className="text-gray-700">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Results & Stats */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <BarChart3 className="h-5 w-5 text-blue-600 mr-2" />
              {details.results.metric}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {details.results.stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="text-2xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-700">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing & Timeline */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
              <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                <Zap className="h-5 w-5 text-blue-600 mr-2" />
                Investment
              </h4>
              <p className="text-2xl font-bold text-blue-600 mb-2">{details.pricing}</p>
              <p className="text-sm text-gray-600">Includes setup, training, and 30-day support</p>
            </div>
            <div className="p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200">
              <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                <Clock className="h-5 w-5 text-green-600 mr-2" />
                Timeline
              </h4>
              <p className="text-lg font-semibold text-green-600 mb-2">{details.timeline}</p>
              <p className="text-sm text-gray-600">From consultation to full deployment</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row gap-4">
          <Button 
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105 group"
            onClick={() => {
              onClose();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get Started with This Service
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            className="flex-1 border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 px-6 py-3 rounded-lg font-semibold transition-all duration-200"
            onClick={() => {
              onClose();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Schedule Consultation
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceModal;