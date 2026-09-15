import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Info, AlertCircle, CheckCircle } from 'lucide-react';

const TDS = () => {
  const [section, setSection] = useState('194C_IND');
  const [amount, setAmount] = useState('');

  const sectionsData = {
    '194C_IND': { name: 'Sec 194C - Contractor (Individual/HUF)', rate: 1, threshold: 30000 },
    '194C_OTH': { name: 'Sec 194C - Contractor (Company/Firm)', rate: 2, threshold: 30000 },
    '194J_PROF': { name: 'Sec 194J - Professional Fees', rate: 10, threshold: 30000 },
    '194J_TECH': { name: 'Sec 194J - Technical Services', rate: 2, threshold: 30000 },
    '194IA': { name: 'Sec 194IA - Property Purchase (> ₹50L)', rate: 1, threshold: 5000000 },
    '194IB': { name: 'Sec 194IB - Rent (> ₹50,000/mo)', rate: 5, threshold: 600000 },
    '194Q': { name: 'Sec 194Q - Purchase of Goods (> ₹50L)', rate: 0.1, threshold: 5000000 },
  };

  const selectedSec = sectionsData[section];
  const numAmount = Number(amount) || 0;
  const isThresholdMet = numAmount >= selectedSec.threshold;

  let tdsDeducted = 0;
  if (numAmount > 0 && isThresholdMet) {
    if (section === '194Q') {
      tdsDeducted = ((numAmount - selectedSec.threshold) * selectedSec.rate) / 100;
    } else {
      tdsDeducted = (numAmount * selectedSec.rate) / 100;
    }
  }

  const netPayable = numAmount - tdsDeducted;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-bold dark:text-slate-300">TDS Section & Category</label>
          <select 
            value={section} 
            onChange={(e) => setSection(e.target.value)} 
            className="w-full p-4 rounded-xl bg-slate-100 dark:bg-slate-800 dark:text-white font-bold outline-none focus:ring-2 focus:ring-rose-500"
          >
            {Object.entries(sectionsData).map(([key, data]) => (
              <option key={key} value={key}>{data.name} ({data.rate}%)</option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold dark:text-slate-300">Total Transaction Amount (₹)</label>
          <input 
            type="number" 
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-4 rounded-xl bg-slate-100 dark:bg-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-rose-500 font-bold"
            placeholder="e.g. 100000"
          />
        </div>
      </div>

      {numAmount > 0 && !isThresholdMet && (
        <div className="flex items-center gap-3 p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-700 dark:text-amber-400 text-xs font-bold">
          <AlertCircle size={18} className="shrink-0 text-amber-500" />
          <span>Amount is below the statutory threshold of ₹{selectedSec.threshold.toLocaleString()}. TDS is ₹0 (Not Deductible).</span>
        </div>
      )}

      {numAmount > 0 && isThresholdMet && (
        <div className="flex items-center gap-3 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-700 dark:text-emerald-400 text-xs font-bold">
          <CheckCircle size={18} className="shrink-0 text-emerald-500" />
          <span>Statutory threshold exceeded. TDS is mandatory at {selectedSec.rate}%.</span>
        </div>
      )}

      <div className="p-6 bg-rose-50 dark:bg-slate-800/80 rounded-2xl border-l-4 border-rose-500 space-y-4">
        <div className="flex justify-between items-center pb-3 border-b border-rose-200 dark:border-slate-700">
          <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">Applicable Statutory Rate:</span>
          <span className="text-lg font-black text-rose-600 dark:text-rose-400">{selectedSec.rate}%</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">TDS Amount to Deduct:</span>
          <span className="text-2xl font-black text-rose-600 dark:text-rose-400">₹{tdsDeducted.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
        </div>
        <div className="flex justify-between items-center pt-2 border-t border-rose-200 dark:border-slate-700">
          <span className="text-sm font-bold dark:text-slate-200">Net Amount Payable to Payee:</span>
          <span className="text-xl font-bold dark:text-white">₹{netPayable.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
        </div>
      </div>

      <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 italic">
        <Info size={14} className="text-rose-500 shrink-0" />
        <span>Single transaction threshold for {selectedSec.name.split(' - ')[0]} is ₹{selectedSec.threshold.toLocaleString()}. Ensure TAN is quoted in Form 26Q / 27Q.</span>
      </div>
    </motion.div>
  );
};

export default TDS;
