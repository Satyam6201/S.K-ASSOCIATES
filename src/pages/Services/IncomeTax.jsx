import React from 'react';
import { motion } from 'framer-motion';
import { 
  Wallet, PieChart, ShieldCheck, FileText, 
  TrendingDown, Search, History, Scale,
  ExternalLink, ArrowUpRight
} from 'lucide-react';
import ServiceLayout from './ServiceLayout';

const IncomeTax = () => {
  const taxSolutions = [
    {
      title: "Tax Planning",
      desc: "Legal strategies to reduce your tax burden using 80C, 80D, and corporate deductions.",
      icon: <TrendingDown size={20} />,
      color: "bg-blue-500"
    },
    {
      title: "Litigation Support",
      desc: "Expert representation for Income Tax notices, scrutinies, and CIT appeals.",
      icon: <Scale size={20} />,
      color: "bg-indigo-600"
    },
    {
      title: "TDS Compliance",
      desc: "End-to-end management of TDS payments, returns, and Form 16/16A generation.",
      icon: <FileText size={20} />,
      color: "bg-sky-500"
    },
    {
      title: "Foreign Assets",
      desc: "Disclosure of foreign income and assets (Schedule FA) to ensure global compliance.",
      icon: <History size={20} />,
      color: "bg-blue-700"
    }
  ];

  return (
    <div className="relative">
      {/* 1. Base Service Layout Wrapper */}
      <ServiceLayout 
        title="Income Tax"
        colorClass="blue"
        icon={<Wallet size={32} />}
        description="Beyond just filing—we engineer tax strategies. S.K Associates provides data-driven direct tax solutions for HNIs, Salaried Professionals, and Business Houses to ensure you never pay a rupee more than necessary."
        features={[
          "ITR 1 to ITR 7 Filing (Individuals to Corporates)",
          "Capital Gains Advisory (Property & Stocks)",
          "Form 15CA & 15CB (Foreign Remittances)",
          "Income Tax Survey & Search Representation",
          "Tax Audit Support u/s 44AB"
        ]}
      />

      {/* 2. The Interactive Filing Timeline */}
      <section className="py-24 bg-white dark:bg-slate-950 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 border-l-4 border-blue-600 pl-6"
          >
            <h2 className="text-4xl font-black dark:text-white">Seamless Filing Cycle</h2>
            <p className="text-slate-500 mt-2">How we handle your taxes from document to refund.</p>
          </motion.div>

          

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Data Collation', 'Tax Computation', 'Quality Check', 'E-Verification'].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="relative p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 group"
              >
                <span className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg">
                  {i + 1}
                </span>
                <h4 className="text-lg font-bold dark:text-white mb-2 mt-2">{step}</h4>
                <div className="w-12 h-1 bg-blue-600/20 group-hover:w-full transition-all duration-500 rounded-full"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Deep Dive Bento Grid */}
      <section className="pb-24 px-6 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Main Spotlight Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="lg:col-span-2 bg-gradient-to-br from-blue-700 to-blue-900 rounded-[3rem] p-12 text-white relative overflow-hidden"
            >
              <div className="relative z-10">
                <ShieldCheck className="text-blue-300 mb-6" size={48} />
                <h3 className="text-3xl font-bold mb-4">Notice Protection Plan</h3>
                <p className="text-blue-100/80 mb-8 max-w-lg">
                  Received a notice u/s 143(1), 139(9), or 148? Our specialized litigation cell handles 
                  complex scrutiny cases and provides documented responses to the IT department.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="px-4 py-2 bg-white/10 rounded-full text-xs font-bold border border-white/20">Response Drafting</span>
                  <span className="px-4 py-2 bg-white/10 rounded-full text-xs font-bold border border-white/20">CIT Appeals</span>
                  <span className="px-4 py-2 bg-white/10 rounded-full text-xs font-bold border border-white/20">Rectification Filings</span>
                </div>
              </div>
              <Search className="absolute -bottom-10 -right-10 text-white/5" size={280} />
            </motion.div>

            {/* Side Solution Grid */}
            <div className="grid gap-6">
              {taxSolutions.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-white dark:bg-slate-900 rounded-[2rem] shadow-xl shadow-blue-500/5 border border-slate-100 dark:border-slate-800 flex gap-4"
                >
                  <div className={`w-12 h-12 rounded-2xl ${item.color} text-white flex items-center justify-center shrink-0`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold dark:text-white text-sm">{item.title}</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
          
          {/* Bottom CTA Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-16 p-10 bg-white dark:bg-slate-900 rounded-[3rem] border-2 border-dashed border-slate-200 dark:border-slate-800 text-center"
          >
            <PieChart className="mx-auto text-blue-500 mb-4" size={40} />
            <h3 className="text-2xl font-black dark:text-white">Is your Tax liability too high?</h3>
            <p className="text-slate-500 mb-8 max-w-xl mx-auto mt-2">
              Our partners offer a 1-on-1 Tax Health Checkup to identify missed deductions and optimize your investment portfolio.
            </p>
            <button className="inline-flex items-center gap-2 px-10 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 group">
              Get a Tax Health Checkup
              <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IncomeTax;