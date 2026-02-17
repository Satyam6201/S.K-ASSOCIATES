import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, ShieldCheck, Search, FileText, 
  CheckCircle, AlertCircle, Scale, ClipboardCheck 
} from 'lucide-react';
import ServiceLayout from './ServiceLayout';

const Audit = () => {
  const auditPhases = [
    { title: "Planning", desc: "Understanding business processes and risk assessment.", icon: <Search size={20}/> },
    { title: "Execution", desc: "Substantive testing and verification of financial data.", icon: <ClipboardCheck size={20}/> },
    { title: "Review", desc: "Independent quality control by senior partners.", icon: <Scale size={20}/> },
    { title: "Reporting", desc: "Issuing formal audit opinions and management letters.", icon: <FileText size={20}/> }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* 1. Core Service Layout Wrapper */}
      <ServiceLayout 
        title="Audit & Assurance"
        colorClass="emerald"
        icon={<BarChart3 size={32} />}
        description="We go beyond just checking boxes. Our audit process provides deep insights into your business's financial health, ensuring transparency for stakeholders and absolute compliance with ICAI standards."
        features={[
          "Statutory Audits under Companies Act 2013",
          "Tax Audits u/s 44AB of Income Tax Act",
          "Internal Control over Financial Reporting (ICFR)",
          "GST & Transfer Pricing Audits",
          "Management & Performance Evaluation"
        ]}
      />

      {/* 2. Interactive Audit Lifecycle */}
      <section className="py-24 bg-white dark:bg-slate-950 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-emerald-500 font-bold uppercase tracking-widest text-xs">Our Process</span>
            <h2 className="text-4xl font-black dark:text-white mt-2">The Audit Lifecycle</h2>
            <p className="text-slate-500 mt-4">A systematic approach to financial transparency.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {auditPhases.map((phase, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 relative group"
              >
                <div className="absolute top-6 right-8 text-6xl font-black text-slate-200 dark:text-slate-800 opacity-50 group-hover:text-emerald-500/20 transition-colors">
                  0{i + 1}
                </div>
                <div className="w-14 h-14 bg-emerald-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20">
                  {phase.icon}
                </div>
                <h4 className="text-xl font-bold dark:text-white mb-2">{phase.title}</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{phase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Risk & Compliance Bento Grid */}
      <section className="pb-24 px-6 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Regulatory Compliance Card */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="lg:col-span-2 bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] p-12 text-white relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <ShieldCheck className="text-emerald-400" size={32} />
                  <h3 className="text-2xl font-bold">Regulatory Compliance</h3>
                </div>
                <p className="text-slate-400 mb-8 max-w-lg">
                  We ensure your organization stays ahead of changing regulations, including CARO 2020, Ind-AS transitions, and complex Tax Audit requirements.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/10">
                    <CheckCircle className="text-emerald-400" size={18} />
                    <span className="text-sm font-medium">Zero-Error Documentation</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/10">
                    <AlertCircle className="text-amber-400" size={18} />
                    <span className="text-sm font-medium">Risk Mitigation Strategy</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 opacity-5">
                <Scale size={300} />
              </div>
            </motion.div>

            {/* Special Audit Highlight */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-emerald-600 rounded-[3rem] p-10 text-white flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4">Internal Audit</h3>
                <p className="text-emerald-100 text-sm leading-relaxed mb-6">
                  Strengthening your internal controls and identifying operational inefficiencies before they impact your bottom line.
                </p>
              </div>
              <button className="group flex items-center justify-between w-full p-4 bg-white/10 border border-white/20 rounded-2xl hover:bg-white hover:text-emerald-600 transition-all font-bold">
                Download Brochure
                <FileText size={20} className="group-hover:animate-bounce" />
              </button>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Audit;