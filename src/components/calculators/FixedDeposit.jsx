import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Landmark, PieChart, Info, ShieldCheck, TrendingUp } from 'lucide-react';

const FixedDeposit = () => {
  const [principal, setPrincipal] = useState(500000);
  const [rate, setRate] = useState(7.25);
  const [years, setYears] = useState(5);
  const [compoundingFreq, setCompoundingFreq] = useState(4); // 4 = Quarterly, 1 = Annual, 2 = Half-Yearly, 12 = Monthly
  const [maturity, setMaturity] = useState(0);

  const numPrincipal = Math.max(0, Number(principal) || 0);
  const numRate = Math.max(0, Number(rate) || 0);
  const numYears = Math.max(0, Number(years) || 0);

  useEffect(() => {
    // Formula: A = P * (1 + r / (n * 100))^(n * t)
    const n = compoundingFreq;
    const amount = numPrincipal * Math.pow((1 + (numRate / (n * 100))), (n * numYears));
    setMaturity(Math.round(amount));
  }, [numPrincipal, numRate, numYears, compoundingFreq]);

  const interestGained = Math.max(0, maturity - numPrincipal);
  const interestPercentage = Math.round((interestGained / numPrincipal) * 100 || 0);

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
      
      {/* Compounding Frequency Chips */}
      <div className="space-y-2">
        <label className="text-xs font-black uppercase tracking-wider text-slate-400">Compounding Frequency</label>
        <div className="grid grid-cols-4 gap-3">
          {[
            { n: 4, label: 'Quarterly (Standard)' },
            { n: 12, label: 'Monthly' },
            { n: 2, label: 'Half-Yearly' },
            { n: 1, label: 'Annual' }
          ].map((item) => (
            <button
              key={item.n}
              onClick={() => setCompoundingFreq(item.n)}
              className={`p-3 rounded-2xl text-xs font-bold transition-all border ${
                compoundingFreq === item.n 
                ? 'bg-sky-600 text-white border-sky-600 shadow-md' 
                : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-sky-500'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Input Sliders */}
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="text-sm font-bold dark:text-slate-200">Total FD Deposit Amount (₹)</label>
            <span className="text-2xl font-black text-sky-600 dark:text-sky-400">₹{numPrincipal.toLocaleString()}</span>
          </div>
          <input 
            type="number" 
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold outline-none border border-slate-200 dark:border-slate-700 focus:border-sky-500"
          />
          <input 
            type="range"
            min="10000"
            max="10000000"
            step="10000"
            value={numPrincipal}
            onChange={(e) => setPrincipal(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-sky-500"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-sm font-bold dark:text-slate-200">Annual Interest Rate (% p.a)</label>
              <span className="text-lg font-black text-sky-600 dark:text-sky-400">{numRate}%</span>
            </div>
            <input 
              type="number"
              step="0.1"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold outline-none border border-slate-200 dark:border-slate-700 focus:border-sky-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-sm font-bold dark:text-slate-200">Tenure (Years)</label>
              <span className="text-lg font-black text-sky-600 dark:text-sky-400">{numYears} Years</span>
            </div>
            <input 
              type="number"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold outline-none border border-slate-200 dark:border-slate-700 focus:border-sky-500"
            />
          </div>
        </div>
      </div>

      {/* Result Card */}
      <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-sky-600 via-blue-700 to-slate-900 text-white shadow-2xl space-y-6 relative overflow-hidden">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <span className="text-xs font-bold text-sky-200 uppercase tracking-widest block mb-1">Total Estimated Maturity Value</span>
            <h3 className="text-4xl md:text-5xl font-black">₹{maturity.toLocaleString('en-IN')}</h3>
          </div>

          <div className="p-4 bg-white/10 rounded-2xl border border-white/20">
            <span className="text-xs font-bold text-sky-200 uppercase tracking-widest block">Wealth Gain Ratio</span>
            <span className="text-2xl font-black text-sky-300">+{interestPercentage}% Return</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-sky-400/30">
          <div className="p-4 bg-white/10 rounded-2xl">
            <span className="text-xs text-sky-200 block font-bold uppercase">Invested Principal</span>
            <span className="text-xl font-black">₹{numPrincipal.toLocaleString('en-IN')}</span>
          </div>

          <div className="p-4 bg-emerald-500/20 rounded-2xl border border-emerald-400/30">
            <span className="text-xs text-emerald-200 block font-bold uppercase">Net Interest Earned</span>
            <span className="text-xl font-black text-emerald-300">+₹{interestGained.toLocaleString('en-IN')}</span>
          </div>
        </div>

        {/* Visual Progress Bar */}
        <div className="space-y-1 pt-2">
          <div className="flex justify-between text-xs font-bold text-sky-200">
            <span>Principal: {Math.round((numPrincipal / maturity) * 100 || 0)}%</span>
            <span>Interest Wealth: {Math.round((interestGained / maturity) * 100 || 0)}%</span>
          </div>
          <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden flex">
            <div style={{ width: `${(numPrincipal / maturity) * 100}%` }} className="bg-sky-400 h-full" />
            <div style={{ width: `${(interestGained / maturity) * 100}%` }} className="bg-emerald-400 h-full" />
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-sky-200 font-medium pt-2">
          <Info size={14} className="shrink-0 text-amber-300" />
          <span>Note: Section 194A mandates 10% TDS deduction on annual bank FD interest exceeding ₹40,000 (₹50,000 for Senior Citizens).</span>
        </div>

      </div>

    </motion.div>
  );
};

export default FixedDeposit;