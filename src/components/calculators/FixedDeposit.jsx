import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Landmark, PieChart, Info } from 'lucide-react';

const FixedDeposit = () => {
  const [principal, setPrincipal] = useState(100000);
  const [rate, setRate] = useState(6.5);
  const [years, setYears] = useState(5);
  const [maturity, setMaturity] = useState(0);

  useEffect(() => {
    // Formula: A = P * (1 + r/100)^t (Assuming annual compounding for simplicity)
    const amount = principal * Math.pow((1 + rate / 100), years);
    setMaturity(Math.round(amount));
  }, [principal, rate, years]);

  const interestGained = maturity - principal;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      className="space-y-8"
    >
      <div className="grid md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Investment (₹)</label>
          <input 
            type="number" 
            value={principal}
            onChange={(e) => setPrincipal(Number(e.target.value))}
            className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border-2 border-transparent focus:border-sky-500 outline-none transition-all dark:text-white font-bold"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Interest Rate (% p.a)</label>
          <input 
            type="number" 
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border-2 border-transparent focus:border-sky-500 outline-none transition-all dark:text-white font-bold"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Tenure (Years)</label>
          <input 
            type="number" 
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border-2 border-transparent focus:border-sky-500 outline-none transition-all dark:text-white font-bold"
          />
        </div>
      </div>

      <div className="relative p-8 rounded-[2.5rem] bg-gradient-to-br from-sky-500 to-blue-700 text-white shadow-2xl overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-1 text-center md:text-left">
            <p className="text-sky-100 text-sm font-medium">Estimated Maturity Value</p>
            <h3 className="text-5xl font-black">₹{maturity.toLocaleString('en-IN')}</h3>
          </div>
          
          <div className="h-24 w-[2px] bg-white/20 hidden md:block"></div>

          <div className="grid grid-cols-2 gap-8">
            <div className="text-center">
              <p className="text-sky-200 text-xs font-bold uppercase">Principal</p>
              <p className="text-xl font-bold">₹{principal.toLocaleString('en-IN')}</p>
            </div>
            <div className="text-center">
              <p className="text-sky-200 text-xs font-bold uppercase">Total Interest</p>
              <p className="text-xl font-bold text-sky-300">+₹{interestGained.toLocaleString('en-IN')}</p>
            </div>
          </div>
        </div>
        
        {/* Animated Background Pulse */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }} 
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="flex items-start gap-3 p-4 bg-slate-100 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700">
        <Info className="text-sky-500 shrink-0" size={18} />
        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
          This calculation assumes annual compounding. Bank FD rates usually compound quarterly. For exact calculations including TDS deductions, please reach out to our desk.
        </p>
      </div>
    </motion.div>
  );
};

export default FixedDeposit;