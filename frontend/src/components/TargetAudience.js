import React from "react";
import { CheckCircle2, XCircle } from "lucide-react";

const TargetAudience = () => {
    const industries = [
        "Medical Clinics & Hospitals",
        "Real Estate Agencies",
        "Law Firms & Consultants",
        "Gyms & Wellness Centers",
        "Home Service Providers",
        "Recruitment Agencies"
    ];

    return (
        <section className="py-20 bg-slate-900 text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Is This Right For Your Business?
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Our system is designed specifically for high-volume service businesses that rely on appointments.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    {/* Who it's for */}
                    <div className="bg-slate-800/50 rounded-3xl p-8 border border-slate-700">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <CheckCircle2 className="w-8 h-8 text-green-500" />
                            Perfect For You If...
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                <span className="text-slate-300">You receive 20+ calls or inquiries per day</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                <span className="text-slate-300">You miss calls during busy hours or weekends</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                <span className="text-slate-300">Your staff spends too much time answering repeat questions</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                <span className="text-slate-300">Your business relies on booking appointments</span>
                            </li>
                        </ul>

                        <div className="mt-8 pt-8 border-t border-slate-700">
                            <p className="text-sm font-semibold text-slate-400 mb-4 uppercase tracking-wider">Industries We Serve</p>
                            <div className="flex flex-wrap gap-2">
                                {industries.map((ind, i) => (
                                    <span key={i} className="px-3 py-1 bg-slate-700 rounded-full text-sm text-slate-200">
                                        {ind}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Who it's NOT for */}
                    <div className="bg-white/5 rounded-3xl p-8 border border-white/10 opacity-75">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <XCircle className="w-8 h-8 text-red-400" />
                            NOT For You If...
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                                <span className="text-slate-300">You are an e-commerce store selling products</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                                <span className="text-slate-300">You have very low call volume (less than 5/day)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                                <span className="text-slate-300">You need a physical receptionist for in-person greeting</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                                <span className="text-slate-300">You don't use appointments or scheduled consultations</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TargetAudience;
