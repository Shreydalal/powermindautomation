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
    name: "Dr. Aditya Shah",
    role: "Founder & Chief Surgeon",
    company: "Shah Dental & Implant Clinic",
    content: "Managing a multi-specialty clinic means our reception desk is always chaotic. Half the incoming patient calls were going unanswered. Since setting up Powermind AI, every missed call is instantly greeted with a WhatsApp message and a booking link. We recovered ₹1.5 Lakhs in patient consultations in the first 30 days alone!",
    rating: 5,
    results: "₹1.5 Lakhs recovered in 30 days"
  },
  {
    id: 2,
    name: "Rohan Mehta",
    role: "Managing Director",
    company: "Landmark Realty Group",
    content: "Our digital ads run 24/7, and prospects usually message us late at night. Our property consultants couldn't reply until the next morning. Powermind's AI now qualifies buyers on WhatsApp filtering them by budget and BHK preference and books them directly for site visits. It's like having a highly efficient, 24/7 sales coordinator.",
    rating: 5,
    results: "3.5x increase in site-visits"
  },
  {
    id: 3,
    name: "Meera Nair",
    role: "Operations Head",
    company: "Pulse Gym & Wellness Centers",
    content: "Staff unpunctuality and sudden attrition were my biggest bottlenecks. With Powermind AI, our Instagram and WhatsApp inquiries are answered within 5 seconds. We no longer lose gym trial signups because our staff was late or on leave.",
    rating: 5,
    results: "85+ tours booked monthly"
  },
  {
    id: 4,
    name: "Dr. Ananya Rao",
    role: "Clinical Operations Head",
    company: "CareFirst Multi-Specialty Clinic",
    content: "Our staff used to spend hours answering FAQs and repeat questions on WhatsApp. The AI now automates 90% of repeat queries and schedules OPD slots instantly, letting our team focus on in-patient care.",
    rating: 5,
    results: "90% of FAQ queries automated"
  },
  {
    id: 5,
    name: "Vikram Malhotra",
    role: "Founder & CEO",
    company: "Malhotra Luxury Retail",
    content: "High-end showrooms need instant responses to maintain a premium feel. The AI handles late-night catalogs and inquiries on Instagram DMs instantly, resulting in double the walk-ins over weekends.",
    rating: 5,
    results: "2x weekend showroom walk-ins"
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