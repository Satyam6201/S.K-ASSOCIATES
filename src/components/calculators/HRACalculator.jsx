import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building, Info } from 'lucide-react';

const HRACalculator = () => {
  const [basic, setBasic] = useState(600000);
  const [hraReceived, setHraReceived] = useState(300000);
  const [rentPaid, setRentPaid] = useState(240000);
  const [isMetro, setIsMetro] = useState(true);

  const numBasic = Math.max(0, Number(basic) || 0);
  const numHra = Math.max(0, Number(hraReceived) || 0);
  const numRent = Math.max(0, Number(rentPaid) || 0);

  const rule1 = numHra;
  const rule2 = isMetro ? (numBasic * 0.50) : (numBasic * 0.40);
  const rule3 = Math.max(0, numRent - (numBasic * 0.10));

  const exemptAmount = Math.max(0, Math.min(rule1, rule2, rule3));
  const taxableHra = Math.max(0, numHra - exemptAmount);

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
      
      <div className="flex justify-between items-center p-4 bg-slate-100 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
        <div>
          <h4 className="font-black text-sm dark:text-white flex items-center gap-2">
            <Building size={16} className="text-indigo-500" /> Accommodation City Type
          </h4>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Metro: Delhi, Mumbai, Kolkata, Chennai (50% of Basic)</p>
        </div>

        <div className="flex p-1 bg-white dark:bg-slate-900 rounded-xl shadow-inner">
          <button
            onClick={() => setIsMetro(true)}
            className={`px-5 py-2.5 rounded-lg font-black text-xs uppercase tracking-wider transition-all ${
              isMetro ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 dark:text-slate-400'
            }`}
          >
            Metro (50%)
          </button>
          <button
            onClick={() => setIsMetro(false)}
            className={`px-5 py-2.5 rounded-lg font-black text-xs uppercase tracking-wider transition-all ${
              !isMetro ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 dark:text-slate-400'
            }`}
          >
            Non-Metro (40%)
          </button>
        </div>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="text-sm font-bold dark:text-slate-200">Basic Annual Salary + DA (₹)</label>
            <span className="text-xl font-black text-indigo-600 dark:text-indigo-400">₹{numBasic.toLocaleString()}</span>
          </div>
          <input 
            type="number" 
            value={basic}
            onChange={(e) => setBasic(e.target.value)}
            className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold outline-none border border-slate-200 dark:border-slate-700 focus:border-indigo-500"
          />
          <input 
            type="range"
            min="100000"
            max="3000000"
            step="50000"
            value={numBasic}
            onChange={(e) => setBasic(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-sm font-bold dark:text-slate-200">Annual HRA Component Received (₹)</label>
              <span className="text-lg font-black text-indigo-600 dark:text-indigo-400">₹{numHra.toLocaleString()}</span>
            </div>
            <input 
              type="number" 
              value={hraReceived}
              onChange={(e) => setHraReceived(e.target.value)}
              className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold outline-none border border-slate-200 dark:border-slate-700 focus:border-indigo-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-sm font-bold dark:text-slate-200">Actual Rent Paid Annually (₹)</label>
              <span className="text-lg font-black text-indigo-600 dark:text-indigo-400">₹{numRent.toLocaleString()}</span>
            </div>
            <input 
              type="number" 
              value={rentPaid}
              onChange={(e) => setRentPaid(e.target.value)}
              className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold outline-none border border-slate-200 dark:border-slate-700 focus:border-indigo-500"
            />
          </div>
        </div>
      </div>

      <div className="p-8 rounded-[2.5rem] bg-indigo-600 text-white shadow-2xl space-y-6 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <span className="text-xs font-bold text-indigo-200 uppercase tracking-widest block mb-1">Exempt HRA Amount (Sec 10(13A))</span>
            <h3 className="text-4xl md:text-5xl font-black">₹{exemptAmount.toLocaleString()}</h3>
          </div>

          <div className="p-4 bg-white/10 rounded-2xl border border-white/20">
            <span className="text-xs font-bold text-indigo-100 uppercase tracking-widest block">Taxable HRA Balance</span>
            <span className="text-2xl font-black">₹{taxableHra.toLocaleString()}</span>
          </div>
        </div>

        <div className="pt-6 border-t border-indigo-400/30 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className={`p-4 rounded-2xl bg-white/10 ${exemptAmount === rule1 ? 'ring-2 ring-emerald-400' : ''}`}>
            <span className="text-indigo-200 font-bold block">1. Actual HRA Received</span>
            <span className="text-base font-black">₹{rule1.toLocaleString()}</span>
          </div>

          <div className={`p-4 rounded-2xl bg-white/10 ${exemptAmount === rule2 ? 'ring-2 ring-emerald-400' : ''}`}>
            <span className="text-indigo-200 font-bold block">2. {isMetro ? '50%' : '40%'} of Basic Salary</span>
            <span className="text-base font-black">₹{rule2.toLocaleString()}</span>
          </div>

          <div className={`p-4 rounded-2xl bg-white/10 ${exemptAmount === rule3 ? 'ring-2 ring-emerald-400' : ''}`}>
            <span className="text-indigo-200 font-bold block">3. Rent Paid - 10% Basic</span>
            <span className="text-base font-black">₹{rule3.toLocaleString()}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-indigo-200 font-medium">
          <Info size={14} className="shrink-0 text-emerald-300" />
          <span>Rule 2A grants exemption on the minimum of the 3 statutory conditions above under the Old Tax Regime.</span>
        </div>
      </div>

    </motion.div>
  );
};

export default HRACalculator;