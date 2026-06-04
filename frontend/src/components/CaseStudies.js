import React from "react";
import { ArrowUpRight } from "lucide-react";

const CaseStudies = () => {
  const cases = [
    {
      category: "Multi-Specialty Clinic",
      title: "Recovered ₹1,85,000/mo in Missed Consultations",
      description: "Apex Dental in Delhi was missing 25% of weekend & late-night patient calls. Our AI Front Desk now handles missed calls with instant WhatsApp booking.",
      stats: [
        { label: "Missed Calls Caught", value: "100%" },
        { label: "New OPD Bookings/Mo", value: "+42" },
        { label: "Est. Revenue", value: "+₹1.85L" }
      ]
    },
    {
      category: "Real Estate Brokerage",
      title: "Qualifying Property Buyers on WhatsApp",
      description: "Landmark Realty in Pune was getting hundreds of raw inquiries. The AI now qualifies buyers by budget and configuration (2BHK/3BHK) on WhatsApp before booking site-visits.",
      stats: [
        { label: "Response Time", value: "< 15s" },
        { label: "Sales Time Saved", value: "15 hrs/wk" },
        { label: "Site-Visit Booking", value: "+3x" }
      ]
    },
    {
      category: "Premium Gym & Spa",
      title: "Converting Late-Night Instagram Inquiries",
      description: "Pulse Fitness in Bengaluru was ignoring late-night trial-pass and pricing inquiries. Our AI system responds instantly on Instagram DM and schedules tours on autopilot.",
      stats: [
        { label: "Admin Workload", value: "-80%" },
        { label: "Tours Scheduled", value: "85+/mo" },
        { label: "New Members", value: "+22%" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-slate-50" id="case-studies">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              Real Results for Real Businesses
            </h2>
            <p className="text-lg text-slate-600">
              See how we help businesses recover lost revenue and save precious time.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 flex flex-col hover:-translate-y-1 transition-transform duration-300">
              <div className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-4">
                {item.category}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 h-14">
                {item.title}
              </h3>
              <p className="text-slate-600 mb-8 flex-grow">
                {item.description}
              </p>

              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-100">
                {item.stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-xl font-bold text-slate-900">{stat.value}</div>
                    <div className="text-xs text-slate-500 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;