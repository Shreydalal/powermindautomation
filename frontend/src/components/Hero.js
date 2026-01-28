import React, { useState, useEffect } from "react";
import { ArrowRight, Phone, MessageSquare, Calendar } from "lucide-react";
import { Link } from "react-scroll";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-slate-900" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

      <div className="container relative mx-auto px-4 lg:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Content Column */}
          <div className={`flex-1 text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8 backdrop-blur-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              <span className="text-sm font-medium text-blue-300">AI Front Desk System</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
              Never Miss a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Call</span> or <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Message</span> Again
            </h1>

            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              We help service businesses replace missed opportunities with booked appointments. Install a 24/7 AI Front Desk that answers enquiries, books meetings, and resolves queries instantly.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link
                to="contact"
                smooth={true}
                offset={-100}
                duration={800}
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 cursor-pointer"
              >
                Book Free Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="how-it-works"
                smooth={true}
                offset={-100}
                duration={800}
                className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-semibold transition-all duration-300 border border-slate-700 flex items-center justify-center gap-2 cursor-pointer"
              >
                See How It Works
              </Link>
            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-slate-400 text-sm font-medium">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>24/7 Call Handling</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-blue-400" />
                <span>Instant Replies</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-400" />
                <span>Auto-Booking</span>
              </div>
            </div>
          </div>

          {/* Visualization/Image Column */}
          <div className={`flex-1 w-full max-w-[600px] lg:max-w-none transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-30" />
              <div className="relative rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-xl p-6 lg:p-8 shadow-2xl">
                {/* Mock Chat UI */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center text-xs text-white">Usr</div>
                    <div className="bg-slate-700/50 rounded-2xl rounded-tl-none p-3 text-slate-200 text-sm max-w-[80%]">
                      Hi, do you have any appointments available tomorrow?
                    </div>
                  </div>
                  <div className="flex items-start gap-3 flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs text-white">AI</div>
                    <div className="bg-blue-600/20 border border-blue-500/20 rounded-2xl rounded-tr-none p-3 text-blue-100 text-sm max-w-[80%]">
                      Yes! We have openings at 10:00 AM and 2:30 PM. Would you like me to book one for you?
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center text-xs text-white">Usr</div>
                    <div className="bg-slate-700/50 rounded-2xl rounded-tl-none p-3 text-slate-200 text-sm max-w-[80%]">
                      2:30 PM works great.
                    </div>
                  </div>
                  <div className="flex items-center gap-2 py-2">
                    <div className="h-px w-full bg-slate-700/50"></div>
                    <span className="text-xs text-slate-500 font-medium whitespace-nowrap">APPOINTMENT BOOKED</span>
                    <div className="h-px w-full bg-slate-700/50"></div>
                  </div>
                  <div className="flex items-start gap-3 flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs text-white">AI</div>
                    <div className="bg-blue-600/20 border border-blue-500/20 rounded-2xl rounded-tr-none p-3 text-blue-100 text-sm max-w-[80%]">
                      Done! You are booked for tomorrow at 2:30 PM. You'll receive a confirmation SMS shortly.
                    </div>
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

export default Hero;