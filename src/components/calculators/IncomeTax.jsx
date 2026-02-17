import React, { useState } from 'react';
import { motion } from 'framer-motion';

const IncomeTax = () => {
  const [income, setIncome] = useState(0);
  const [tax, setTax] = useState(0);

  const calculate = () => {
    let t = 0;
    if (income > 1500000) t = income * 0.30;
    else if (income > 1000000) t = income * 0.20;
    else if (income > 500000) t = income * 0.10;
    setTax(t);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div>
        <label className="block text-sm font-bold mb-2">Annual Income (₹)</label>
        <input 
          type="number" 
          onChange={(e) => setIncome(e.target.value)}
          className="w-full p-4 rounded-xl bg-slate-100 dark:bg-slate-700 border-none outline-none focus:ring-2 focus:ring-blue-500" 
          placeholder="e.g. 800000"
        />
      </div>
      <button onClick={calculate} className="w-full bg-[#007bb6] text-white py-3 rounded-xl font-bold">Calculate Tax</button>
      <div className="p-6 bg-blue-50 dark:bg-slate-700/50 rounded-2xl border-l-4 border-blue-500">
        <p className="text-sm text-slate-500 dark:text-slate-400">Estimated Tax Liability</p>
        <h3 className="text-3xl font-black text-blue-600 dark:text-sky-400">₹{tax.toLocaleString()}</h3>
      </div>
    </motion.div>
  );
};
export default IncomeTax;