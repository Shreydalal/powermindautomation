import React, { useState, useEffect } from "react";
import { ArrowRight, Phone, MessageSquare, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="relative py-8 sm:py-12 lg:py-16 min-h-[calc(100vh-73px)] flex items-center overflow-hidden bg-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-slate-900" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

      <div className="container relative mx-auto px-4 lg:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">

          {/* Content Column */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4 md:mb-6 backdrop-blur-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-medium text-blue-300">24/7 AI Front Desk</span>
            </motion.div>
 
            <motion.h1
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white mb-4 md:mb-6 leading-tight"
            >
              Stop Losing High-Value <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Bookings</span> to Missed Calls & Late-Night <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">WhatsApp</span> Messages
            </motion.h1>
 
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base md:text-lg text-slate-300 mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Meet the 24/7 AI Front Desk that instantly responds to missed phone calls, answers inquiries on WhatsApp & Instagram, and books appointments directly into your calendar even at 11 PM. No staff leaves, no training delays, and zero missed revenue.
            </motion.p>
 
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <Link
                to="/contact"
                className="w-full sm:w-auto px-6 py-3.5 md:px-8 md:py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base"
              >
                Get Free AI Demo on WhatsApp
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto px-6 py-3.5 md:px-8 md:py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-semibold transition-all duration-300 border border-slate-700 flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base"
              >
                Book a 10-Min Strategy Call
              </Link>
            </motion.div>
 
            <motion.div
              variants={itemVariants}
              className="mt-8 md:mt-12 flex flex-row flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-8 text-slate-400 text-xs sm:text-sm font-medium"
            >
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                <span>24/7 Call-to-WhatsApp</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                <span>WhatsApp & IG Automation</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                <span>Auto-Booking</span>
              </div>
            </motion.div>
          </motion.div>
 
          {/* Visualization/Image Column */}
          <motion.div
            className="flex-1 w-full max-w-[500px] lg:max-w-none"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, type: "spring" }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-30" />
              <div className="relative rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-xl p-4 sm:p-6 lg:p-8 shadow-2xl">
                {/* Mock Chat UI */}
                <div className="space-y-3 sm:space-y-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-start gap-2.5 sm:gap-3"
                  >
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-600 flex items-center justify-center text-[10px] sm:text-xs text-white flex-shrink-0">Usr</div>
                    <div className="bg-slate-700/50 rounded-2xl rounded-tl-none p-2.5 sm:p-3 text-slate-200 text-xs sm:text-sm max-w-[85%] sm:max-w-[80%]">
                      Hi, do you have any appointments available tomorrow at Shah Clinic?
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.0 }}
                    className="flex items-start gap-2.5 sm:gap-3 flex-row-reverse"
                  >
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-600 flex items-center justify-center text-[10px] sm:text-xs text-white flex-shrink-0">AI</div>
                    <div className="bg-blue-600/20 border border-blue-500/20 rounded-2xl rounded-tr-none p-2.5 sm:p-3 text-blue-100 text-xs sm:text-sm max-w-[85%] sm:max-w-[80%]">
                      Yes! Dr. Aditya Shah has openings tomorrow at 11:00 AM and 4:30 PM. Would you like me to book one?
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 3.5 }}
                    className="flex items-start gap-2.5 sm:gap-3"
                  >
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-600 flex items-center justify-center text-[10px] sm:text-xs text-white flex-shrink-0">Usr</div>
                    <div className="bg-slate-700/50 rounded-2xl rounded-tl-none p-2.5 sm:p-3 text-slate-200 text-xs sm:text-sm max-w-[85%] sm:max-w-[80%]">
                      4:30 PM works great.
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 4.5 }}
                    className="flex items-center gap-2 py-1.5 sm:py-2"
                  >
                    <div className="h-px w-full bg-slate-700/50"></div>
                    <span className="text-[10px] sm:text-xs text-slate-500 font-medium whitespace-nowrap">APPOINTMENT BOOKED</span>
                    <div className="h-px w-full bg-slate-700/50"></div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 5.5 }}
                    className="flex items-start gap-2.5 sm:gap-3 flex-row-reverse"
                  >
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-600 flex items-center justify-center text-[10px] sm:text-xs text-white flex-shrink-0">AI</div>
                    <div className="bg-blue-600/20 border border-blue-500/20 rounded-2xl rounded-tr-none p-2.5 sm:p-3 text-blue-100 text-xs sm:text-sm max-w-[85%] sm:max-w-[80%]">
                      Done! Your appointment is confirmed for tomorrow at 4:30 PM. I have sent the details and location to your WhatsApp.
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;