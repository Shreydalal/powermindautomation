import React, { useState } from "react";
import { Phone, MessageSquare, Calendar, ChevronRight } from "lucide-react";

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "AI Call Handler",
      description: "Answers every missed call instantly with a human-like voice.",
      details: [
        "Handles multiple calls simultaneously at any time of day",
        "Qualifies leads & answers common questions naturally",
        "Filters out spam and connects urgent calls to staff",
        "Books appointments directly into your calendar"
      ]
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "AI Message Handler",
      description: "Responds to WhatsApp, Instagram & Webchat 24/7.",
      details: [
        "Instantly replies to messages on all your social channels",
        "Nurtures leads who ask about pricing and availability",
        "Follows up with old leads to reactivate them",
        "Collects necessary details before human handover"
      ]
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Smart Booking & Notifications",
      description: "Automates your entire scheduling workflow.",
      details: [
        "Syncs with Google Calendar, Calendly, and other tools",
        "Sends SMS & WhatsApp reminders to reduce no-shows",
        "Reschedules cancelled appointments automatically",
        "Notifies you instantly when a new booking is made"
      ]
    }
  ];

  return (
    <section className="py-20 bg-slate-50" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="text-blue-600 font-semibold mb-2 tracking-wide uppercase text-sm">One Unified System</div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            The AI Front Desk System
          </h2>
          <p className="text-lg text-slate-600">
            We don't offer dozen of random automations. We install one complete system that replaces your receptionist and sales admin workload.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Tabs/Navigation */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            {features.map((feature, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`text-left p-6 rounded-2xl transition-all duration-300 border ${activeTab === index
                    ? 'bg-white border-blue-500 shadow-xl shadow-blue-500/10 scale-105'
                    : 'bg-white/50 border-slate-200 hover:bg-white hover:border-slate-300'
                  }`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-colors ${activeTab === index ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-500'
                  }`}>
                  {feature.icon}
                </div>
                <h3 className={`text-xl font-bold mb-2 ${activeTab === index ? 'text-slate-900' : 'text-slate-700'}`}>
                  {feature.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-xl h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />

              <div className="relative relative z-10 animate-fade-in">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
                  {features[activeTab].title} Features
                </div>

                <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                  {features[activeTab].details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center mt-1">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                      </div>
                      <p className="text-slate-700 text-lg">{detail}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-12 bg-slate-900 rounded-xl p-6 text-white">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                  <div className="font-mono text-sm text-green-400">
                      > System Active: {features[activeTab].title} module initialized...<br />
                      > Monitoring inbound channels...<br />
                      > <span className="text-blue-300">Ready to handle inquiries 24/7.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;