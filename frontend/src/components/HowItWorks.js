import React from "react";
import { BrainCircuit, Settings, Rocket } from "lucide-react";

const HowItWorks = () => {
    const steps = [
        {
            icon: <BrainCircuit className="w-8 h-8 text-white" />,
            title: "1. We Learn Your Business",
            description: "We analyze your website, pricing, services, and FAQs to understand exactly how you operate.",
            color: "bg-purple-600"
        },
        {
            icon: <Settings className="w-8 h-8 text-white" />,
            title: "2. We Train Your AI Agent",
            description: "We configure your voice and chat agents to speak in your brand's tone and handle your specific booking rules.",
            color: "bg-blue-600"
        },
        {
            icon: <Rocket className="w-8 h-8 text-white" />,
            title: "3. Installation & Launch",
            description: "We connect the system to your phone lines and website. It starts answering calls and booking meetings immediately.",
            color: "bg-emerald-600"
        }
    ];

    return (
        <section className="py-20 bg-white" id="how-it-works">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        Simple 3-Step Setup
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        You don't need to be technical. We handle the entire build and installation for you.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Connector Line (Desktop only) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-200 -z-10" />

                    {steps.map((step, index) => (
                        <div key={index} className="relative flex flex-col items-center text-center">
                            <div className={`w-24 h-24 rounded-2xl ${step.color} shadow-lg shadow-slate-300/50 flex items-center justify-center mb-8 rotate-3 transform transition-transform hover:rotate-0`}>
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                            <p className="text-slate-600 leading-relaxed px-4">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
