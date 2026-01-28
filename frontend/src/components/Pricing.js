import React from "react";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Pricing = () => {
    return (
        <section className="py-20 bg-white" id="pricing">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 max-w-3xl mx-auto"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        A Full-Time Receptionist for a Fraction of the Cost
                    </h2>
                    <p className="text-lg text-slate-600">
                        Hiring a receptionist costs $3,000+ per month. Our AI Front Desk System costs significantly less and works 24/7 without sick days.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
                    >
                        {/* Background elements */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

                        <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold mb-6">What's Included in the System:</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Custom AI Voice Agent (Inbound calls)",
                                        "AI Message Handler (WhatsApp, Web, IG)",
                                        "Smart Calendar Integration",
                                        "After-Hours & Weekend Coverage",
                                        "Dashboard & Call Recordings",
                                        "Monthly Performance Reports"
                                    ].map((item, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.2 + (i * 0.1) }}
                                            className="flex items-center gap-3"
                                        >
                                            <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                                                <Check className="w-4 h-4 text-blue-400" />
                                            </div>
                                            <span className="text-slate-200">{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                className="w-full md:w-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10 md:min-w-[300px] hover:bg-white/15 transition-colors"
                            >
                                <div className="text-slate-300 mb-2">Starting from just</div>
                                <div className="text-4xl font-bold mb-2">Cost of a Coffee</div>
                                <div className="text-sm text-slate-400 mb-6">per day / per agent</div>

                                <Link
                                    to="contact"
                                    smooth={true}
                                    offset={-100}
                                    duration={800}
                                    className="w-full py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    Get Custom Quote
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                                <p className="text-xs text-slate-400 mt-4">
                                    Every business is unique. We build a custom plan for you.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
