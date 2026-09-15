import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2, Shield, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const colorThemes = {
  blue: {
    text: 'text-blue-600 dark:text-sky-400',
    hoverText: 'group-hover:text-blue-600 dark:group-hover:text-sky-400',
    bg: 'bg-blue-600',
    shadow: 'shadow-blue-600/30',
    lightBg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
  orange: {
    text: 'text-orange-600 dark:text-orange-400',
    hoverText: 'group-hover:text-orange-600 dark:group-hover:text-orange-400',
    bg: 'bg-orange-600',
    shadow: 'shadow-orange-600/30',
    lightBg: 'bg-orange-500/10',
    border: 'border-orange-500/20',
  },
  emerald: {
    text: 'text-emerald-600 dark:text-emerald-400',
    hoverText: 'group-hover:text-emerald-600 dark:group-hover:text-emerald-400',
    bg: 'bg-emerald-600',
    shadow: 'shadow-emerald-600/30',
    lightBg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
  },
  indigo: {
    text: 'text-indigo-600 dark:text-indigo-400',
    hoverText: 'group-hover:text-indigo-600 dark:group-hover:text-indigo-400',
    bg: 'bg-indigo-600',
    shadow: 'shadow-indigo-600/30',
    lightBg: 'bg-indigo-500/10',
    border: 'border-indigo-500/20',
  },
  sky: {
    text: 'text-sky-600 dark:text-sky-400',
    hoverText: 'group-hover:text-sky-600 dark:group-hover:text-sky-400',
    bg: 'bg-sky-600',
    shadow: 'shadow-sky-600/30',
    lightBg: 'bg-sky-500/10',
    border: 'border-sky-500/20',
  },
};

const ServiceLayout = ({ title, description, features, icon, colorClass = 'blue' }) => {
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const theme = colorThemes[colorClass] || colorThemes.blue;

  return (
    <div className="relative pt-32 pb-20 bg-slate-50 dark:bg-slate-950 min-h-screen overflow-hidden">
      
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] ${theme.lightBg} blur-[100px] pointer-events-none`} />
      <motion.div 
        style={{ y: yRange }}
        className={`absolute -top-24 -right-24 w-96 h-96 ${theme.lightBg} rounded-full blur-[100px]`} 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-xs font-bold tracking-widest text-slate-400 uppercase mb-8"
        >
          <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <ArrowRight size={12} />
          <span>Services</span>
          <ArrowRight size={12} />
          <span className={theme.text}>{title}</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className={`w-20 h-20 rounded-[2rem] flex items-center justify-center bg-white dark:bg-slate-900 ${theme.text} shadow-2xl ${theme.shadow} border border-slate-100 dark:border-slate-800`}>
              {React.cloneElement(icon, { size: 40 })}
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-black dark:text-white tracking-tighter leading-[0.95]">
                {title} <br /> 
                <span className={`${theme.text} italic`}>Excellence.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
                {description}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link 
                to="/query"
                className={`px-10 py-5 ${theme.bg} text-white rounded-2xl font-black shadow-2xl ${theme.shadow} flex items-center gap-3 hover:opacity-90 transition-opacity`}
              >
                Inquire Now <Zap size={20} fill="currentColor" />
              </Link>
              <Link 
                to="/contact"
                className="px-10 py-5 bg-white dark:bg-slate-900 dark:text-white text-slate-800 rounded-2xl font-bold border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                Talk to Advisor
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className={`absolute -inset-4 ${theme.lightBg} rounded-[4rem] blur-xl`} />
            <div className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-10 rounded-[3.5rem] shadow-2xl border border-slate-100 dark:border-slate-800">
              <div className="flex justify-between items-center mb-10">
                <h3 className="text-2xl font-black dark:text-white flex items-center gap-3">
                  <Shield className={theme.text} /> Service Scope
                </h3>
                <span className="px-4 py-1 bg-emerald-500/10 text-emerald-500 rounded-full text-xs font-black uppercase tracking-widest">Active</span>
              </div>
              
              <div className="grid gap-4">
                {features.map((f, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + (i * 0.08) }}
                    whileHover={{ scale: 1.01, x: 4 }}
                    className="group flex items-center gap-4 p-4 rounded-[2rem] bg-slate-50 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 hover:border-emerald-500/50 transition-all"
                  >
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                      <CheckCircle2 size={18} />
                    </div>
                    <span className="font-bold text-sm text-slate-700 dark:text-slate-200">{f}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 pt-16 border-t border-slate-200 dark:border-slate-800">
          <MetricCard 
            number="01" 
            title="Rigorous Compliance" 
            desc="Every filing undergoes a 3-layer verification process by senior auditors."
            theme={theme}
          />
          <MetricCard 
            number="02" 
            title="Real-time Tracking" 
            desc="Get instant updates on your application status through our dedicated portal."
            theme={theme}
          />
          <MetricCard 
            number="03" 
            title="Confidentiality" 
            desc="Your financial data is protected with enterprise-grade AES-256 encryption."
            theme={theme}
          />
        </div>
      </div>
    </div>
  );
};

const MetricCard = ({ number, title, desc, theme }) => (
  <motion.div 
    whileHover={{ y: -6 }}
    className="group space-y-3 p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300"
  >
    <h4 className={`text-5xl font-black text-slate-200 dark:text-slate-800 ${theme.hoverText} transition-colors`}>
      {number}
    </h4>
    <p className="text-lg font-black dark:text-white">{title}</p>
    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
      "{desc}"
    </p>
  </motion.div>
);

export default ServiceLayout;