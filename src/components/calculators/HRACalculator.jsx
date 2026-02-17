import React, { useState } from 'react';
import { motion } from 'framer-motion';

const HRACalculator = () => {
  const [basic, setBasic] = useState(0);
  const [hraReceived, setHraReceived] = useState(0);
  const [rentPaid, setRentPaid] = useState(0);
  const [isMetro, setIsMetro] = useState(true);

  // Indian Income Tax HRA Exemption Logic
  const calcExemption = () => {
    const rule1 = hraReceived;
    const rule2 = isMetro ? (basic * 0.5) : (basic * 0.4);
    const rule3 = rentPaid - (basic * 0.1);
    
    // Minimum of the three is exempt
    const exempt = Math.max(0, Math.min(rule1, rule2, rule3));
    return exempt;
  };

  const exemption = calcExemption();

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-bold dark:text-slate-300">Basic Salary + DA (Annual)</label>
          <input type="number" onChange={(e) => setBasic(Number(e.target.value))} className="w-full p-4 rounded-xl bg-slate-100 dark:bg-slate-700 outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold dark:text-slate-300">HRA Received (Annual)</label>
          <input type="number" onChange={(e) => setHraReceived(Number(e.target.value))} className="w-full p-4 rounded-xl bg-slate-100 dark:bg-slate-700 outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-bold dark:text-slate-300">Total Rent Paid (Annual)</label>
          <input type="number" onChange={(e) => setRentPaid(Number(e.target.value))} className="w-full p-4 rounded-xl bg-slate-100 dark:bg-slate-700 outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold dark:text-slate-300">City Type</label>
          <div className="flex p-1 bg-slate-100 dark:bg-slate-700 rounded-xl h-[56px]">
            <button 
              onClick={() => setIsMetro(true)}
              className={`flex-1 rounded-lg font-bold text-xs transition-all ${isMetro ? 'bg-white dark:bg-slate-600 shadow-sm text-indigo-600' : 'text-slate-400'}`}
            >Metro</button>
            <button 
              onClick={() => setIsMetro(false)}
              className={`flex-1 rounded-lg font-bold text-xs transition-all ${!isMetro ? 'bg-white dark:bg-slate-600 shadow-sm text-indigo-600' : 'text-slate-400'}`}
            >Non-Metro</button>
          </div>
        </div>
      </div>

      <div className="bg-indigo-600 rounded-3xl p-8 text-white shadow-xl shadow-indigo-500/20 relative overflow-hidden">
        <div className="relative z-10">
          <p className="text-indigo-200 text-sm font-medium mb-1 uppercase tracking-widest">Exempt HRA Amount</p>
          <h3 className="text-4xl font-black">₹{exemption.toLocaleString()}</h3>
          <div className="mt-4 pt-4 border-t border-indigo-400/30 flex justify-between text-sm">
            <span>Taxable HRA:</span>
            <span className="font-bold">₹{(hraReceived - exemption).toLocaleString()}</span>
          </div>
        </div>
        {/* Decorative circle */}
        <div className="absolute top-[-20px] right-[-20px] w-32 h-32 bg-white/10 rounded-full"></div>
      </div>
    </motion.div>
  );
};

export default HRACalculator;