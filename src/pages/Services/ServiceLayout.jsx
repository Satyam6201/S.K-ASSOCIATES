import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2, Shield, Zap, Info, ArrowRight } from 'lucide-react';

const ServiceLayout = ({ title, description, features, icon, colorClass }) => {
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div className="relative pt-32 pb-20 bg-slate-50 dark:bg-slate-950 min-h-screen overflow-hidden">
      
      {/* --- Ambient Background Elements --- */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-${colorClass}-500/10 to-transparent pointer-events-none`} />
      <motion.div 
        style={{ y: yRange }}
        className={`absolute -top-24 -right-24 w-96 h-96 bg-${colorClass}-500/20 rounded-full blur-[120px]`} 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- Breadcrumb Style Header --- */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-xs font-bold tracking-widest text-slate-400 uppercase mb-8"
        >
          <span>Services</span>
          <ArrowRight size={12} />
          <span className={`text-${colorClass}-500`}>{title}</span>
        </motion.div>

        {/* --- Hero Section --- */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className={`w-20 h-20 rounded-[2rem] flex items-center justify-center bg-white dark:bg-slate-900 text-${colorClass}-500 shadow-2xl shadow-${colorClass}-500/20 border border-slate-100 dark:border-slate-800`}>
              {React.cloneElement(icon, { size: 40 })}
            </div>
            
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl font-black dark:text-white tracking-tighter leading-[0.9]">
                {title} <br /> 
                <span className={`text-${colorClass}-500 italic`}>Excellence.</span>
              </h1>
              <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl">
                {description}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-10 py-5 bg-${colorClass}-500 text-white rounded-2xl font-black shadow-2xl shadow-${colorClass}-500/40 flex items-center gap-3`}
              >
                Inquire Now <Zap size={20} fill="currentColor" />
              </motion.button>
              <button className="px-10 py-5 bg-white dark:bg-slate-900 dark:text-white rounded-2xl font-bold border border-slate-200 dark:border-slate-800 hover:bg-slate-50 transition-colors">
                Pricing Guide
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* The "Floating Glass" Card */}
            <div className={`absolute -inset-4 bg-${colorClass}-500/10 rounded-[4rem] blur-2xl`} />
            <div className="relative bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl p-10 rounded-[3.5rem] shadow-2xl border border-white dark:border-slate-800">
              <div className="flex justify-between items-center mb-10">
                <h3 className="text-2xl font-black dark:text-white flex items-center gap-3">
                  <Shield className={`text-${colorClass}-500`} /> Service Scope
                </h3>
                <span className="px-4 py-1 bg-emerald-500/10 text-emerald-500 rounded-full text-xs font-black uppercase">Active</span>
              </div>
              
              <div className="grid gap-5">
                {features.map((f, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="group flex items-center gap-5 p-5 rounded-[2rem] bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 hover:border-emerald-500/50 transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                      <CheckCircle2 size={20} />
                    </div>
                    <span className="font-bold text-slate-700 dark:text-slate-200">{f}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- Detailed Trust Metrics --- */}
        <div className="grid md:grid-cols-3 gap-12 pt-20 border-t border-slate-200 dark:border-slate-800">
          <MetricCard 
            number="01" 
            title="Rigorous Compliance" 
            desc="Every filing undergoes a 3-layer verification process by senior auditors."
            colorClass={colorClass}
          />
          <MetricCard 
            number="02" 
            title="Real-time Tracking" 
            desc="Get instant updates on your application status through our dedicated portal."
            colorClass={colorClass}
          />
          <MetricCard 
            number="03" 
            title="Confidentiality" 
            desc="Your financial data is protected with enterprise-grade AES-256 encryption."
            colorClass={colorClass}
          />
        </div>
      </div>
    </div>
  );
};

const MetricCard = ({ number, title, desc, colorClass }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="group space-y-4 p-8 rounded-[2.5rem] hover:bg-white dark:hover:bg-slate-900 hover:shadow-2xl transition-all duration-500"
  >
    <h4 className={`text-6xl font-black text-slate-200 dark:text-slate-800 group-hover:text-${colorClass}-500/20 transition-colors`}>
      {number}
    </h4>
    <p className="text-xl font-black dark:text-white">{title}</p>
    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed italic">
      "{desc}"
    </p>
  </motion.div>
);

export default ServiceLayout;