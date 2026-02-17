import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calculator, X, Percent, Wallet, Receipt, 
  TrendingUp, Home, Landmark, ChevronRight,
  ShieldCheck, Info, Sparkles
} from 'lucide-react';
import IncomeTax from '../../components/calculators/IncomeTax';
import GST from '../../components/calculators/GST';
import CapitalGains from '../../components/calculators/CapitalGains';
import HRACalculator from '../../components/calculators/HRACalculator';
import FixedDeposit from '../../components/calculators/FixedDeposit';

// Import sub-calculators


const Calculators = () => {
  const [activeCalc, setActiveCalc] = useState(null);
  const [filter, setFilter] = useState('All');

  const calcList = [
    { id: 'it', category: 'Tax', name: 'Income Tax', icon: <Wallet />, component: <IncomeTax />, color: 'blue', desc: 'Calculate tax liability for FY 2024-25 under new & old regimes.' },
    { id: 'gst', category: 'Tax', name: 'GST Calculator', icon: <Receipt />, component: < GST/>, color: 'orange', desc: 'Compute IGST, CGST, and SGST for goods and services.' },
    { id: 'cap', category: 'Investment', name: 'Capital Gains', icon: <TrendingUp />, component: <CapitalGains />, color: 'emerald', desc: 'Estimate profit and tax on sale of assets and property.' },
    { id: 'hra', category: 'Tax', name: 'HRA Calculator', icon: <Home />, component: <HRACalculator />, color: 'indigo', desc: 'Find your house rent allowance exemption u/s 10(13A).' },
    { id: 'fd', category: 'Investment', name: 'FD Calculator', icon: <Landmark />, component: <FixedDeposit/>, color: 'sky', desc: 'Predict maturity value and interest gained on deposits.' },
    { id: 'tds', category: 'Tax', name: 'TDS Calculator', icon: <Percent />, component: <div className="p-10 text-center">TDS logic updating...</div>, color: 'rose', desc: 'Determine tax deduction at source for various payments.' },
  ];

  const filteredCalcs = filter === 'All' ? calcList : calcList.filter(c => c.category === filter);

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-slate-950 transition-colors duration-500 pb-20">
      
      {/* --- Dynamic Hero Header --- */}
      <div className="relative overflow-hidden bg-slate-900 pt-32 pb-40 px-6">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-7xl mx-auto text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sky-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles size={14} /> Professional Toolkit
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Financial <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">Command Center</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Instant, accurate, and compliant calculators built for Indian financial regulations. 
            Empowering your decision-making with real-time data.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-20">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* --- Sidebar Filters --- */}
          <aside className="lg:w-64 space-y-4">
            <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-6 rounded-[2rem] shadow-xl border border-white dark:border-slate-800 sticky top-24">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Categories</h4>
              <div className="space-y-2">
                {['All', 'Tax', 'Investment'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-bold transition-all ${
                      filter === cat 
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                      : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    {cat}
                    {filter === cat && <ChevronRight size={16} />}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* --- Main Grid --- */}
          <main className="flex-1">
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredCalcs.map((calc) => (
                  <motion.div
                    key={calc.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    whileHover={{ y: -10 }}
                    onClick={() => setActiveCalc(calc)}
                    className="group relative bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-800 cursor-pointer overflow-hidden transition-shadow hover:shadow-2xl hover:shadow-blue-500/10"
                  >
                    {/* Background Glow */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-${calc.color}-500/5 rounded-full blur-3xl group-hover:bg-${calc.color}-500/10 transition-colors`}></div>

                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-500 bg-${calc.color}-500/10 text-${calc.color}-500`}>
                      {calc.icon}
                    </div>
                    <h3 className="text-2xl font-bold dark:text-white mb-3 tracking-tight">{calc.name}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                      {calc.desc}
                    </p>
                    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-blue-600 group-hover:text-blue-500 transition-colors">
                      Launch Tool <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </main>
        </div>
      </div>

      {/* --- Full-Screen Immersive Modal --- */}
      <AnimatePresence>
        {activeCalc && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setActiveCalc(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl"
            />
            
            <motion.div 
              initial={{ y: 100, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-[3rem] shadow-2xl flex flex-col max-h-[90vh] overflow-hidden border border-white/20"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between p-8 border-b dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
                <div className="flex items-center gap-4">
                  <div className={`p-4 rounded-2xl bg-blue-500 text-white shadow-lg shadow-blue-500/20`}>
                    {activeCalc.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-black dark:text-white tracking-tight">{activeCalc.name}</h2>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Financial Utility</p>
                  </div>
                </div>
                <button 
                  onClick={() => setActiveCalc(null)}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-rose-500 hover:text-white transition-all text-slate-600 dark:text-slate-300"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Scrollable Tool Content */}
              <div className="flex-1 overflow-y-auto p-10 custom-scrollbar">
                {activeCalc.component}
              </div>

              {/* Modal Footer Info */}
              <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
                <div className="flex items-center gap-3 text-sm font-medium">
                  <ShieldCheck className="text-emerald-400" size={18} />
                  Verified for FY 2024-25 Regulations
                </div>
                <div className="hidden md:flex items-center gap-2 text-slate-400 text-xs italic">
                  <Info size={14} /> Powered by S.K Associates Analytics
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Calculators;