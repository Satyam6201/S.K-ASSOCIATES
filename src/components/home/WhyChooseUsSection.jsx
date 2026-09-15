import React from "react";
import { motion } from "framer-motion";
import { Award, Users, BarChart3, Globe, Landmark, TrendingUp } from "lucide-react";

const FeaturePoint = ({ icon, title, desc }) => (
  <motion.div 
    whileHover={{ x: 6 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="flex gap-4 group cursor-default"
  >
    <div className="h-12 w-12 shrink-0 bg-[#007bb6]/10 text-[#007bb6] dark:text-sky-400 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-[#007bb6] group-hover:text-white transition-all duration-300">
      {icon}
    </div>
    <div>
      <h4 className="font-black text-slate-900 dark:text-white text-lg group-hover:text-[#007bb6] dark:group-hover:text-sky-400 transition-colors">{title}</h4>
      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium">{desc}</p>
    </div>
  </motion.div>
);

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 sm:py-28 md:py-32 bg-gradient-to-b from-[#f4f7fb] via-[#eef4fc] to-[#f4f7fb] dark:from-[#070d1e] dark:via-[#0c1630] dark:to-[#070d1e] transition-colors duration-500 border-b border-slate-200/70 dark:border-[#1a2c56]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#007bb6] dark:text-sky-400 font-black tracking-widest uppercase mb-4 text-xs">The Advantage</h2>
            <h3 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 sm:mb-8 leading-tight">
              Why Industry Leaders Trust S.K Associates?
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-base sm:text-xl mb-8 sm:mb-10 leading-relaxed font-medium">
              We don't just file statutory returns; we build financial fortresses. Our approach combines traditional auditing precision with modern digital compliance tools.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <FeaturePoint icon={<Award size={22} />} title="Expert Panel" desc="Qualified CA, CS, and Legal advocates under one roof." />
              <FeaturePoint icon={<Users size={22} />} title="Dedicated Relationship" desc="Dedicated account manager for every corporate SME." />
              <FeaturePoint icon={<BarChart3 size={22} />} title="Live Compliance Tech" desc="Real-time tracking of your GST & Income Tax status." />
              <FeaturePoint icon={<Globe size={22} />} title="Pan India Delivery" desc="Serving clients across 20+ Indian states." />
            </div>
          </motion.div>

          <div className="relative">
            <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-4 sm:pt-12">
                 <motion.div 
                   whileHover={{ y: -8, scale: 1.02 }}
                   className="min-h-[14rem] sm:h-64 bg-white/90 dark:bg-[#0d1730] rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-8 flex flex-col justify-end border border-slate-200/80 dark:border-[#1a2c56] shadow-xl group hover:border-[#007bb6]/40 transition-colors"
                 >
                    <h4 className="text-4xl sm:text-5xl font-black text-[#007bb6] dark:text-sky-400 group-hover:scale-105 transition-transform origin-left">98%</h4>
                    <p className="text-slate-500 dark:text-slate-400 font-bold uppercase text-xs tracking-wider mt-2">Client Retention Rate</p>
                 </motion.div>

                 <motion.div 
                   whileHover={{ y: -8, scale: 1.02 }}
                   className="min-h-[12rem] sm:h-48 bg-gradient-to-br from-[#004b7e] to-[#007bb6] rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-8 text-white shadow-xl flex flex-col justify-center relative overflow-hidden"
                 >
                    <Landmark size={36} className="mb-3 text-sky-200" />
                    <h4 className="text-lg sm:text-xl font-bold leading-tight">Banking Grade Data Security</h4>
                 </motion.div>
              </div>

              <div className="space-y-4">
                 <motion.div 
                   whileHover={{ y: -8, scale: 1.02 }}
                   className="min-h-[12rem] sm:h-48 bg-[#09152b] dark:bg-[#0a152d] rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-8 text-white shadow-xl flex flex-col justify-center border border-white/10 relative overflow-hidden"
                 >
                    <TrendingUp size={36} className="mb-3 text-sky-400" />
                    <h4 className="text-lg sm:text-xl font-bold leading-tight">Proactive Tax Optimization</h4>
                 </motion.div>

                 <motion.div 
                   whileHover={{ y: -8, scale: 1.02 }}
                   className="min-h-[14rem] sm:h-64 bg-white/90 dark:bg-[#0d1730] rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-8 flex flex-col justify-end border border-slate-200/80 dark:border-[#1a2c56] shadow-xl group hover:border-[#007bb6]/40 transition-colors"
                 >
                    <h4 className="text-4xl sm:text-5xl font-black text-[#007bb6] dark:text-sky-400 group-hover:scale-105 transition-transform origin-left">24/7</h4>
                    <p className="text-slate-500 dark:text-slate-400 font-bold uppercase text-xs tracking-wider mt-2">Priority Query Support</p>
                 </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
