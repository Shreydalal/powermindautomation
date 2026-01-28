import React from "react";
import { ArrowUpRight } from "lucide-react";

const CaseStudies = () => {
  const cases = [
    {
      category: "Dental Clinic",
      title: "Recovered $12,000/mo in Missed Appointments",
      description: "A busy dental practice was missing 25% of weekend calls. Our AI Agent now handles all after-hours inquiries and books appointments directly.",
      stats: [
        { label: "Missed Calls Caught", value: "100%" },
        { label: "New Bookings/Mo", value: "+34" },
        { label: "Est. Revenue", value: "+$12k" }
      ]
    },
    {
      category: "Real Estate Agency",
      title: "Instant Qualification of Property Leads",
      description: "Agents were wasting hours on unqualified leads. The AI now qualifies buyers via WhatsApp before scheduling viewings for the agents.",
      stats: [
        { label: "Response Time", value: "< 10s" },
        { label: "Agent Hours Saved", value: "15/wk" },
        { label: "Show-up Rate", value: "92%" }
      ]
    },
    {
      category: "CrossFit Gym",
      title: "Doubled Trial Class Bookings",
      description: "Potential members were dropping off outside gym hours. The AI Front Desk now answers questions and books trials 24/7.",
      stats: [
        { label: "Admin Workload", value: "-80%" },
        { label: "Trial Bookings", value: "2.1x" },
        { label: "Member Signups", value: "+18%" }
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