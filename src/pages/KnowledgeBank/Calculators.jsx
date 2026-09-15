import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Percent, Wallet, Receipt, 
  TrendingUp, Home, Landmark, ChevronRight,
  ShieldCheck, Sparkles, Search
} from 'lucide-react';
import IncomeTax from '../../components/calculators/IncomeTax';
import GST from '../../components/calculators/GST';
import CapitalGains from '../../components/calculators/CapitalGains';
import HRACalculator from '../../components/calculators/HRACalculator';
import FixedDeposit from '../../components/calculators/FixedDeposit';
import TDS from '../../components/calculators/TDS';

const colorStyles = {
  blue: {
    bg: 'bg-blue-500/10 text-[#007bb6] dark:text-sky-400',
    border: 'hover:border-[#007bb6]/50',
    badge: 'bg-blue-500/10 text-blue-600 dark:text-sky-400'
  },
  orange: {
    bg: 'bg-orange-500/10 text-orange-600 dark:text-orange-400',
    border: 'hover:border-orange-500/50',
    badge: 'bg-orange-500/10 text-orange-600 dark:text-orange-400'
  },
  emerald: {
    bg: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
    border: 'hover:border-emerald-500/50',
    badge: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
  },
  indigo: {
    bg: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400',
    border: 'hover:border-indigo-500/50',
    badge: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400'
  },
  sky: {
    bg: 'bg-sky-500/10 text-sky-600 dark:text-sky-400',
    border: 'hover:border-sky-500/50',
    badge: 'bg-sky-500/10 text-sky-600 dark:text-sky-400'
  },
  rose: {
    bg: 'bg-rose-500/10 text-rose-600 dark:text-rose-400',
    border: 'hover:border-rose-500/50',
    badge: 'bg-rose-500/10 text-rose-600 dark:text-rose-400'
  },
};

const Calculators = () => {
  const [activeCalc, setActiveCalc] = useState(null);
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveCalc(null);
      }
    };
    if (activeCalc) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeCalc]);

  const calcList = [
    { id: 'it', category: 'Tax', name: 'Income Tax Calculator', icon: <Wallet size={28} />, component: <IncomeTax />, color: 'blue', desc: 'Compute tax liability under New vs Old Regime with latest statutory slabs & ₹75,000 std deduction.' },
    { id: 'gst', category: 'Tax', name: 'GST Calculator', icon: <Receipt size={28} />, component: <GST />, color: 'orange', desc: 'Compute IGST, CGST, & SGST breakdown for Goods and Services in Exclusive & Inclusive modes.' },
    { id: 'tds', category: 'Tax', name: 'TDS Calculator', icon: <Percent size={28} />, component: <TDS />, color: 'rose', desc: 'Determine Tax Deduction at Source for Sec 194C, 194J, 194IA, 194IB, & 194Q.' },
    { id: 'cap', category: 'Investment', name: 'Capital Gains Calculator', icon: <TrendingUp size={28} />, component: <CapitalGains />, color: 'emerald', desc: 'Estimate LTCG & STCG tax liability on Property, Stocks, Mutual Funds, & Sec 54 reinvestments.' },
    { id: 'hra', category: 'Tax', name: 'HRA Exemption Calculator', icon: <Home size={28} />, component: <HRACalculator />, color: 'indigo', desc: 'Calculate House Rent Allowance tax exemption u/s 10(13A) under Rule 2A.' },
    { id: 'fd', category: 'Investment', name: 'FD & Deposit Calculator', icon: <Landmark size={28} />, component: <FixedDeposit />, color: 'sky', desc: 'Predict maturity value, quarterly compounding interest, & Sec 194A TDS threshold.' },
  ];

  const filteredCalcs = calcList.filter(calc => {
    const matchesFilter = filter === 'All' || calc.category === filter;
    const matchesSearch = calc.name.toLowerCase().includes(search.toLowerCase()) || calc.desc.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-slate-100 transition-colors duration-500 pb-20 selection:bg-[#007bb6]/30">
      
      {/* Header Banner */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#00325b] via-[#005f9e] to-[#007bb6] dark:from-[#020617] dark:via-[#091124] dark:to-[#001524] transition-colors duration-500 pt-36 pb-40 px-6 border-b border-white/10">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-400/20 dark:bg-blue-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/15 dark:bg-orange-600/10 rounded-full blur-[120px]" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-7xl mx-auto text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sky-200 dark:text-sky-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles size={14} className="text-amber-400" /> Compliant Financial Utilities
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight drop-shadow-md">
            Statutory Tax & Financial <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-white to-amber-300">Calculators</span>
          </h1>
          <p className="text-slate-100 dark:text-slate-300 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Updated for Income Tax FY 2025-26, GST Slabs, TDS Rules, & MCA Regulations.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Navigation & Search */}
          <aside className="lg:w-72 space-y-6">
            <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl p-6 rounded-[2.5rem] shadow-xl border border-slate-200/80 dark:border-slate-800 sticky top-24 space-y-6">
              
              {/* Search Bar */}
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-slate-400 tracking-wider">Search Tool</label>
                <div className="relative">
                  <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input 
                    type="text" 
                    placeholder="Search GST, TDS, HRA..." 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 outline-none text-xs font-bold focus:border-[#007bb6]"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="space-y-2">
                <h4 className="text-xs font-black text-slate-400 uppercase tracking-wider">Categories</h4>
                <div className="space-y-2">
                  {[
                    { id: 'All', count: calcList.length },
                    { id: 'Tax', count: calcList.filter(c => c.category === 'Tax').length },
                    { id: 'Investment', count: calcList.filter(c => c.category === 'Investment').length }
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setFilter(cat.id)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-xs font-black uppercase tracking-wider transition-all ${
                        filter === cat.id 
                        ? 'bg-[#007bb6] text-white shadow-lg shadow-blue-500/20' 
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      <span>{cat.id}</span>
                      <span className={`px-2 py-0.5 rounded-full text-[10px] ${filter === cat.id ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>
                        {cat.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </aside>

          {/* Main Calculators Grid */}
          <main className="flex-1">
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredCalcs.map((calc) => {
                  const style = colorStyles[calc.color] || colorStyles.blue;
                  return (
                    <motion.div
                      key={calc.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      whileHover={{ y: -10, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      onClick={() => setActiveCalc(calc)}
                      className={`group relative bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-xl border border-slate-200/80 dark:border-slate-800 cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-2xl flex flex-col justify-between ${style.border}`}
                    >
                      <div>
                        <div className="flex justify-between items-start mb-6">
                          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-6 duration-300 ${style.bg}`}>
                            {calc.icon}
                          </div>
                          <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${style.badge}`}>
                            {calc.category}
                          </span>
                        </div>

                        <h3 className="text-2xl font-black dark:text-white mb-3 tracking-tight group-hover:text-[#007bb6] dark:group-hover:text-sky-400 transition-colors">
                          {calc.name}
                        </h3>

                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 font-medium">
                          {calc.desc}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#007bb6] dark:text-sky-400 group-hover:gap-3 transition-all pt-4 border-t border-slate-100 dark:border-slate-800">
                        Launch Calculator <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          </main>

        </div>
      </div>

      {/* Interactive Tool Modal */}
      <AnimatePresence>
        {activeCalc && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setActiveCalc(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 30, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-[3rem] shadow-2xl flex flex-col max-h-[90vh] overflow-hidden border border-slate-200 dark:border-slate-800 z-10"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between p-6 md:p-8 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-2xl bg-[#007bb6] text-white shadow-lg">
                    {activeCalc.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-black dark:text-white tracking-tight">{activeCalc.name}</h2>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">S.K Associates Statutory Utility</p>
                  </div>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setActiveCalc(null)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-rose-500 hover:text-white transition-all text-slate-600 dark:text-slate-300 shadow-md"
                >
                  <X size={20} />
                </motion.button>
              </div>

              {/* Scrollable Tool Content */}
              <div className="flex-1 overflow-y-auto p-6 md:p-10">
                {activeCalc.component}
              </div>

              {/* Modal Footer */}
              <div className="p-6 bg-slate-900 text-white flex items-center justify-between border-t border-slate-800">
                <div className="flex items-center gap-3 text-xs md:text-sm font-medium text-slate-300">
                  <ShieldCheck className="text-emerald-400 shrink-0" size={18} />
                  <span>Verified for FY 2025-26 Tax & Statutory Regulations</span>
                </div>

                <button 
                  onClick={() => setActiveCalc(null)}
                  className="hidden md:flex items-center gap-2 text-xs font-bold text-sky-400 hover:underline"
                >
                  Close Tool <X size={14} />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Calculators;