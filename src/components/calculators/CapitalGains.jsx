import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Info } from 'lucide-react';

const CapitalGains = () => {
  const [salePrice, setSalePrice] = useState(0);
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [expense, setExpense] = useState(0);

  const gain = salePrice - purchasePrice - expense;
  const taxEstimate = gain > 0 ? gain * 0.20 : 0; // Standard 20% for LTCG with Indexation (Simplified)

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-bold dark:text-slate-300">Sale Consideration (₹)</label>
          <input 
            type="number" 
            onChange={(e) => setSalePrice(Number(e.target.value))}
            className="w-full p-4 rounded-xl bg-slate-100 dark:bg-slate-700 border-none outline-none focus:ring-2 focus:ring-emerald-500 dark:text-white"
            placeholder="0.00"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold dark:text-slate-300">Cost of Acquisition (₹)</label>
          <input 
            type="number" 
            onChange={(e) => setPurchasePrice(Number(e.target.value))}
            className="w-full p-4 rounded-xl bg-slate-100 dark:bg-slate-700 border-none outline-none focus:ring-2 focus:ring-emerald-500 dark:text-white"
            placeholder="0.00"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold dark:text-slate-300">Transfer Expenses (Brokerage, etc.) (₹)</label>
        <input 
          type="number" 
          onChange={(e) => setExpense(Number(e.target.value))}
          className="w-full p-4 rounded-xl bg-slate-100 dark:bg-slate-700 border-none outline-none focus:ring-2 focus:ring-emerald-500 dark:text-white"
        />
      </div>

      <div className={`p-6 rounded-2xl border-l-4 ${gain >= 0 ? 'bg-emerald-50 border-emerald-500' : 'bg-rose-50 border-rose-500'} dark:bg-slate-900/40 transition-colors`}>
        <div className="flex justify-between items-end">
          <div>
            <p className="text-xs uppercase font-bold text-slate-500 mb-1">Net Capital Gain/Loss</p>
            <h3 className={`text-3xl font-black ${gain >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
              ₹{gain.toLocaleString()}
            </h3>
          </div>
          <div className="text-right">
            <p className="text-xs font-bold text-slate-400">Est. Tax (20%)</p>
            <p className="text-lg font-bold dark:text-white">₹{taxEstimate.toLocaleString()}</p>
          </div>
        </div>
      </div>

      <div className="flex gap-2 text-[10px] text-slate-400 italic">
        <Info size={12} />
        <span>Calculation assumes Long Term Capital Gain (LTCG). Indexation not applied in this preview.</span>
      </div>
    </motion.div>
  );
};

export default CapitalGains;