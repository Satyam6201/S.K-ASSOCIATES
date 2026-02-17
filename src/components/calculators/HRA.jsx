import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, ShieldCheck, AlertCircle } from 'lucide-react';

const HRA = () => {
  const [basic, setBasic] = useState(500000);
  const [hra, setHra] = useState(200000);
  const [rent, setRent] = useState(150000);
  const [isMetro, setIsMetro] = useState(true);

  // Exemption Logic
  const rule1 = hra;
  const rule2 = isMetro ? (basic * 0.5) : (basic * 0.4);
  const rule3 = Math.max(0, rent - (basic * 0.1));
  const exemptAmount = Math.min(rule1, rule2, rule3);
  const taxableHra = Math.max(0, hra - exemptAmount);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-xs font-black uppercase text-slate-400 ml-1">Annual Basic + DA</label>
            <input type="number" value={basic} onChange={(e) => setBasic(Number(e.target.value))} className="w-full p-4 rounded-2xl bg-slate-100 dark:bg-slate-700 focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white font-bold" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-black uppercase text-slate-400 ml-1">Annual HRA Received</label>
            <input type="number" value={hra} onChange={(e) => setHra(Number(e.target.value))} className="w-full p-4 rounded-2xl bg-slate-100 dark:bg-slate-700 focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white font-bold" />
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-xs font-black uppercase text-slate-400 ml-1">Total Rent Paid (Yearly)</label>
            <input type="number" value={rent} onChange={(e) => setRent(Number(e.target.value))} className="w-full p-4 rounded-2xl bg-slate-100 dark:bg-slate-700 focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white font-bold" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-black uppercase text-slate-400 ml-1">City of Residence</label>
            <div className="flex bg-slate-100 dark:bg-slate-700 p-1 rounded-2xl h-[58px]">
              <button 
                onClick={() => setIsMetro(true)}
                className={`flex-1 rounded-xl font-bold transition-all ${isMetro ? 'bg-white dark:bg-slate-600 text-indigo-600 shadow-md' : 'text-slate-400'}`}
              >Metro</button>
              <button 
                onClick={() => setIsMetro(false)}
                className={`flex-1 rounded-xl font-bold transition-all ${!isMetro ? 'bg-white dark:bg-slate-600 text-indigo-600 shadow-md' : 'text-slate-400'}`}
              >Non-Metro</button>
            </div>
          </div>
        </div>
      </div>

      {/* Result Card */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-8 bg-indigo-600 rounded-[2rem] text-white shadow-xl relative overflow-hidden group">
          <ShieldCheck className="absolute top-4 right-4 text-white/20 group-hover:scale-125 transition-transform" size={60} />
          <p className="text-indigo-100 text-sm font-semibold mb-1">Tax Exempt HRA</p>
          <h3 className="text-4xl font-black">₹{exemptAmount.toLocaleString('en-IN')}</h3>
          <p className="mt-4 text-xs text-indigo-200">Legal deduction under Section 10(13A)</p>
        </div>

        <div className="p-8 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-[2rem] shadow-xl">
          <p className="text-slate-400 text-sm font-semibold mb-1">Taxable HRA Portion</p>
          <h3 className="text-4xl font-black text-rose-500">₹{taxableHra.toLocaleString('en-IN')}</h3>
          <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full mt-6">
            <motion.div 
              initial={{ width: 0 }} 
              animate={{ width: `${(taxableHra/hra)*100}%` }} 
              className="h-full bg-rose-500 rounded-full"
            ></motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HRA;