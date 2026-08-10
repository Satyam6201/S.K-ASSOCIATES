import React from "react";
import { motion } from "framer-motion";
import { Award, Users, BarChart3, Globe, Landmark, TrendingUp, ShieldCheck } from "lucide-react";

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
    <section className="py-32 bg-white dark:bg-[#020617] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#007bb6] dark:text-sky-400 font-black tracking-widest uppercase mb-4">The Advantage</h2>
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-8 leading-tight">
              Why Industry Leaders Trust S.K Associates?
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-xl mb-10 leading-relaxed font-medium">
              We don't just file statutory returns; we build financial fortresses. Our approach combines traditional auditing precision with modern digital compliance tools.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              <FeaturePoint icon={<Award />} title="Expert Panel" desc="Qualified CA, CS, and Legal advocates under one roof." />
              <FeaturePoint icon={<Users />} title="Dedicated Relationship" desc="Dedicated account manager for every corporate SME." />
              <FeaturePoint icon={<BarChart3 />} title="Live Compliance Tech" desc="Real-time tracking of your GST & Income Tax status." />
              <FeaturePoint icon={<Globe />} title="Pan India Delivery" desc="Serving clients across 20+ Indian states." />
            </div>
          </motion.div>

          <div className="relative">
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                 <motion.div 
                   whileHover={{ y: -8, scale: 1.02 }}
                   className="h-64 bg-slate-100 dark:bg-slate-900 rounded-[2.5rem] p-8 flex flex-col justify-end border border-slate-200 dark:border-slate-800 shadow-xl"
                 >
                    <h4 className="text-5xl font-black text-[#007bb6] dark:text-sky-400">98%</h4>
                    <p className="text-slate-500 font-bold uppercase text-xs tracking-wider mt-2">Client Retention Rate</p>
                 </motion.div>

                 <motion.div 
                   whileHover={{ y: -8, scale: 1.02 }}
                   className="h-48 bg-[#007bb6] rounded-[2.5rem] p-8 text-white shadow-xl flex flex-col justify-center"
                 >
                    <Landmark size={36} className="mb-3 text-sky-200" />
                    <h4 className="text-xl font-bold leading-tight">Banking Grade Data Security</h4>
                 </motion.div>
              </div>

              <div className="space-y-4">
                 <motion.div 
                   whileHover={{ y: -8, scale: 1.02 }}
                   className="h-48 bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-xl flex flex-col justify-center border border-white/10"
                 >
                    <TrendingUp size={36} className="mb-3 text-sky-400" />
                    <h4 className="text-xl font-bold leading-tight">Proactive Tax Optimization</h4>
                 </motion.div>

                 <motion.div 
                   whileHover={{ y: -8, scale: 1.02 }}
                   className="h-64 bg-slate-100 dark:bg-slate-900 rounded-[2.5rem] p-8 flex flex-col justify-end border border-slate-200 dark:border-slate-800 shadow-xl"
                 >
                    <h4 className="text-5xl font-black text-[#007bb6] dark:text-sky-400">24/7</h4>
                    <p className="text-slate-500 font-bold uppercase text-xs tracking-wider mt-2">Priority Query Support</p>
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
