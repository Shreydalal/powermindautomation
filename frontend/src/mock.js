// Mock data for Powermind Automation website

export const mockCompanyInfo = {
  name: "Powermind Automation",
  tagline: "Automate Your Business with AI-Powered Solutions",
  description: "Transform your operations, boost productivity by 300%, and scale effortlessly with our cutting-edge AI automation systems.",
  email: "hello@powermindautomation.com",
  phone: "+1 (555) 123-4567",
  address: "123 Innovation Drive, Tech Valley, CA 94105"
};

export const mockServices = [
  {
    id: 1,
    title: "Lead Management Automation",
    description: "Automatically capture, qualify, and nurture leads through intelligent scoring and routing systems.",
    features: ["Smart lead scoring", "Automated routing", "Lead nurturing sequences", "ROI tracking"],
    icon: "Users"
  },
  {
    id: 2,
    title: "CRM & Pipeline Management", 
    description: "Streamline your sales process with automated pipeline management and customer relationship optimization.",
    features: ["Pipeline automation", "Deal progression", "Contact management", "Sales forecasting"],
    icon: "Database"
  },
  {
    id: 3,
    title: "Email & Outreach Automation",
    description: "Scale your outreach with personalized, AI-driven email campaigns that convert prospects into customers.",
    features: ["Personalized sequences", "A/B testing", "Performance analytics", "Smart follow-ups"],
    icon: "Mail"
  },
  {
    id: 4,
    title: "Booking & Appointment Scheduling",
    description: "Eliminate scheduling hassles with intelligent calendar management and automated booking systems.",
    features: ["Smart scheduling", "Calendar sync", "Reminder automation", "No-show reduction"],
    icon: "Calendar"
  },
  {
    id: 5,
    title: "Workflow & Task Automation",
    description: "Automate repetitive tasks and create seamless workflows that boost team productivity by 300%.",
    features: ["Custom workflows", "Task automation", "Team collaboration", "Process optimization"],
    icon: "Workflow"
  },
  {
    id: 6,
    title: "Analytics & Reporting",
    description: "Get actionable insights with automated reporting and real-time analytics dashboards.",
    features: ["Real-time dashboards", "Custom reports", "Performance metrics", "Predictive analytics"],
    icon: "BarChart3"
  }
];

export const mockTestimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "VP of Sales",
    company: "TechStartup Inc.",
    content: "Powermind transformed our entire sales process. We went from drowning in unqualified leads to having a steady stream of high-quality prospects. Our conversion rate increased by 180% in just 3 months.",
    rating: 5,
    results: "180% increase in conversion rate"
  },
  {
    id: 2,
    name: "Michael Chen", 
    role: "Operations Director",
    company: "E-commerce Giant",
    content: "The automation systems handle 80% of our customer inquiries automatically while maintaining exceptional service quality. Our response time went from 20 minutes to 2 minutes.",
    rating: 5,
    results: "90% reduction in response time"
  },
  {
    id: 3,
    name: "Amanda Rodriguez",
    role: "Managing Partner", 
    company: "Professional Services Firm",
    content: "Our team now focuses on high-value strategic work instead of administrative tasks. Client satisfaction has never been higher, and our profit margins improved by 28%.",
    rating: 5,
    results: "28% increase in profit margin"
  },
  {
    id: 4,
    name: "David Thompson",
    role: "CEO",
    company: "GrowthCo Solutions",
    content: "The ROI was immediate. Within 60 days, we saw a 250% increase in qualified leads and our sales team became 3x more productive. Best investment we've made.",
    rating: 5,
    results: "250% increase in qualified leads"
  },
  {
    id: 5,
    name: "Lisa Park",
    role: "Marketing Director",
    company: "InnovateLLC",
    content: "Their email automation sequences are incredible. We're now nurturing 10x more prospects while maintaining personal touch. Our email ROI increased by 400%.",
    rating: 5,
    results: "400% increase in email ROI"
  }
];

export const mockCaseStudies = [
  {
    id: 1,
    company: "TechStartup Inc.",
    industry: "SaaS Technology", 
    challenge: "Manual lead qualification consuming 40+ hours weekly",
    solution: "Implemented AI-powered lead scoring and automated nurturing sequences",
    timeframe: "3 months",
    results: {
      leadQuality: { value: "85%", improvement: "+65%" },
      timeSaved: { value: "35 hrs/week", improvement: "87.5%" },
      conversionRate: { value: "24%", improvement: "+180%" },
      revenueImpact: { value: "$2.4M", improvement: "+320%" }
    },
    testimonial: "Powermind transformed our entire sales process. We went from drowning in unqualified leads to having a steady stream of high-quality prospects.",
    clientName: "Sarah Johnson",
    clientRole: "VP of Sales"
  },
  {
    id: 2,
    company: "E-commerce Giant",
    industry: "Retail & E-commerce",
    challenge: "Inefficient customer support and order management processes", 
    solution: "Automated customer service workflows and intelligent order routing",
    timeframe: "2 months",
    results: {
      responseTime: { value: "2 minutes", improvement: "-90%" },
      satisfaction: { value: "94%", improvement: "+40%" },
      processing: { value: "500%", improvement: "+400%" },
      costReduction: { value: "$180K", improvement: "45%" }
    },
    testimonial: "The automation systems handle 80% of our customer inquiries automatically while maintaining exceptional service quality.",
    clientName: "Michael Chen",
    clientRole: "Operations Director"
  }
];

export const mockStats = {
  clientsServed: "500+",
  productivityBoost: "300%",
  avgImplementationTime: "7 days",
  clientSatisfaction: "98%",
  totalAutomatedTasks: "50,000+",
  avgROI: "420%"
};

export const mockContactForm = {
  fields: [
    {
      name: "fullName",
      label: "Full Name",
      type: "text",
      required: true,
      placeholder: "Enter your full name"
    },
    {
      name: "email", 
      label: "Email Address",
      type: "email",
      required: true,
      placeholder: "Enter your email address"
    },
    {
      name: "company",
      label: "Company Name", 
      type: "text",
      required: true,
      placeholder: "Enter your company name"
    },
    {
      name: "phone",
      label: "Phone Number",
      type: "tel", 
      required: false,
      placeholder: "Enter your phone number"
    },
    {
      name: "service",
      label: "Service Interest",
      type: "select",
      required: true,
      options: [
        "Lead Management Automation",
        "CRM & Pipeline Management", 
        "Email & Outreach Automation",
        "Booking & Appointment Scheduling",
        "Workflow & Task Automation",
        "Analytics & Reporting",
        "Full Automation Suite"
      ]
    },
    {
      name: "message",
      label: "Project Details",
      type: "textarea",
      required: true,
      placeholder: "Tell us about your automation needs and current challenges..."
    }
  ]
};

// Mock function to simulate form submission
export const mockSubmitForm = (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Form submitted with data:", formData);
      resolve({
        success: true,
        message: "Thank you! We'll contact you within 24 hours to schedule your free strategy session."
      });
    }, 1000);
  });
};