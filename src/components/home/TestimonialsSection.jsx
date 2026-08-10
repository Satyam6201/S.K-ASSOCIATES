import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, ShieldCheck } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rajesh Malhotra",
      role: "Managing Director",
      company: "Nexus Logistics Pvt Ltd",
      text: "S.K Associates restructured our corporate tax strategy, saving us over ₹45 Lakhs in legitimate GST ITC refunds within 6 months. Their CA team is unmatched in technical clarity.",
      rating: 5,
      impact: "₹45 Lakhs Saved"
    },
    {
      name: "Pooja Sundaram",
      role: "Founder & CEO",
      company: "Vanguard Tech Solutions",
      text: "Their prompt handling of MCA ROC compliance, ESOP structuring, and tax scrutiny notices gave our board complete peace of mind during our Series A funding.",
      rating: 5,
      impact: "Series A Compliance"
    },
    {
      name: "Amitabh Verma",
      role: "Chief Financial Officer",
      company: "Apex Healthcare SME",
      text: "From Startup India registration to statutory tax audits u/s 44AB, S.K Associates delivers 5-star service with true professional ethics and 24/7 responsiveness.",
      rating: 5,
      impact: "100% Tax Audit Accuracy"
    }
  ];

  return (
    <section className="py-32 bg-slate-50 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#007bb6] dark:text-sky-400 font-black uppercase tracking-widest text-xs">Client Success Stories</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mt-2">What Enterprise Leaders Say</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-4 font-medium">Read how S.K Associates empowers business growth across India.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group"
            >
              <Quote size={80} className="absolute -top-4 -right-4 text-slate-100 dark:text-slate-800/40 group-hover:text-blue-500/10 transition-colors pointer-events-none" />

              <div className="space-y-4 relative z-10">
                <div className="flex justify-between items-center">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, r) => (
                      <Star key={r} size={18} fill="currentColor" />
                    ))}
                  </div>
                  <span className="px-3 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-wider border border-emerald-500/20">
                    {item.impact}
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 italic text-sm leading-relaxed font-medium">
                  "{item.text}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 relative z-10 flex items-center justify-between">
                <div>
                  <h4 className="font-black text-slate-900 dark:text-white text-base">{item.name}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">{item.role}</p>
                  <p className="text-xs text-[#007bb6] dark:text-sky-400 font-bold mt-0.5">{item.company}</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-[#007bb6] dark:text-sky-400 flex items-center justify-center shrink-0">
                  <ShieldCheck size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
