import React from "react";
import { PhoneMissed, Clock, UserX } from "lucide-react";
import { motion } from "framer-motion";

const Problem = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            The Hidden Cost of "Being Busy"
          </h2>
          <p className="text-lg text-slate-600">
            For service businesses, every unanswered call or message is money walking out the door.
            If you're relying on manual replies or a receptionist, you're leaking revenue.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-2xl bg-red-50 border border-red-100 hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
              <PhoneMissed className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Calls Go Unanswered</h3>
            <p className="text-slate-600 leading-relaxed">
              60% of customers won't leave a voicemail. If you don't pick up, they call your competitor immediately.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-2xl bg-orange-50 border border-orange-100 hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
              <Clock className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Slow Response Times</h3>
            <p className="text-slate-600 leading-relaxed">
              Leads that aren't contacted within 5 minutes are 9x less likely to convert. Speed is everything.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 bg-slate-200 rounded-xl flex items-center justify-center mb-6">
              <UserX className="w-6 h-6 text-slate-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Inconsistent Staff</h3>
            <p className="text-slate-600 leading-relaxed">
              Sick days, holidays, and after-hours mean your front desk is offline 70% of the week.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
