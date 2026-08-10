import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Calculator, CheckCircle2, TrendingDown, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const TaxEstimatorWidget = () => {
  const [income, setIncome] = useState(1200000);

  // New Tax Regime Calculation (FY 2025-26 u/s 115BAC)
  const calcNewRegime = (inc) => {
    const stdDed = 75000;
    const taxable = Math.max(0, inc - stdDed);
    if (taxable <= 700000) return 0; // 87A rebate
    let tax = 0;
    if (taxable > 1500000) tax += (taxable - 1500000) * 0.30 + 140000;
    else if (taxable > 1200000) tax += (taxable - 1200000) * 0.20 + 80000;
    else if (taxable > 1000000) tax += (taxable - 1000000) * 0.15 + 50000;
    else if (taxable > 700000) tax += (taxable - 700000) * 0.10 + 20000;
    else if (taxable > 300000) tax += (taxable - 300000) * 0.05;
    return tax * 1.04;
  };

  // Old Tax Regime (standard 80C ~1.5L + 50k std)
  const calcOldRegime = (inc) => {
    const stdDed = 50000;
    const ded80C = 150000;
    const taxable = Math.max(0, inc - stdDed - ded80C);
    if (taxable <= 500000) return 0; // 87A rebate
    let tax = 0;
    if (taxable > 1000000) tax += (taxable - 1000000) * 0.30 + 112500;
    else if (taxable > 500000) tax += (taxable - 500000) * 0.20 + 12500;
    else if (taxable > 250000) tax += (taxable - 250000) * 0.05;
    return tax * 1.04;
  };

  const newTax = Math.round(calcNewRegime(income));
  const oldTax = Math.round(calcOldRegime(income));
  const savings = Math.abs(oldTax - newTax);
  const bestRegime = newTax <= oldTax ? 'New Tax Regime' : 'Old Tax Regime';

  return (
    <section className="py-24 bg-slate-100/80 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-[#007bb6] dark:text-sky-400 text-xs font-black uppercase tracking-widest border border-blue-500/20">
              <Sparkles size={14} /> Instant Estimator Tool
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              Income Tax Savings <br />
              <span className="text-[#007bb6] dark:text-sky-400 italic">Calculator FY 2025-26</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
              Drag the annual income slider to instantly compare tax liability under the New vs Old Tax Regime and find out how much you can save.
            </p>
            <Link to="/calculators" className="inline-flex items-center gap-2 text-[#007bb6] dark:text-sky-400 font-bold hover:gap-4 transition-all group text-sm">
              Launch Detailed Statutory Calculator <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[3rem] shadow-2xl border border-slate-200 dark:border-slate-800 space-y-8"
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="font-bold text-slate-700 dark:text-slate-200">Annual Gross Salary / Business Income:</label>
                <span className="text-2xl md:text-3xl font-black text-[#007bb6] dark:text-sky-400">₹{income.toLocaleString()}</span>
              </div>
              <input 
                type="range" 
                min="400000" 
                max="5000000" 
                step="50000"
                value={income}
                onChange={(e) => setIncome(Number(e.target.value))}
                className="w-full h-3 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#007bb6]"
              />
              <div className="flex justify-between text-xs text-slate-400 font-bold mt-2">
                <span>₹4 Lakhs</span>
                <span>₹25 Lakhs</span>
                <span>₹50 Lakhs</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-slate-800/80 border border-emerald-200 dark:border-slate-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs uppercase font-bold text-slate-500 dark:text-slate-400">New Tax Regime</span>
                  {bestRegime === 'New Tax Regime' && <span className="px-2 py-0.5 bg-emerald-500 text-white rounded-md text-[9px] font-black uppercase">Cheaper</span>}
                </div>
                <p className="text-3xl font-black text-emerald-600 dark:text-emerald-400">₹{newTax.toLocaleString()}</p>
                <p className="text-[10px] text-slate-400 mt-1 font-bold">Standard deduction ₹75,000 applied</p>
              </div>

              <div className="p-6 rounded-2xl bg-blue-50 dark:bg-slate-800/80 border border-blue-200 dark:border-slate-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs uppercase font-bold text-slate-500 dark:text-slate-400">Old Tax Regime</span>
                  {bestRegime === 'Old Tax Regime' && <span className="px-2 py-0.5 bg-blue-500 text-white rounded-md text-[9px] font-black uppercase">Cheaper</span>}
                </div>
                <p className="text-3xl font-black text-[#007bb6] dark:text-sky-400">₹{oldTax.toLocaleString()}</p>
                <p className="text-[10px] text-slate-400 mt-1 font-bold">Assumes ₹1.5L Sec 80C + ₹50k std deduction</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-emerald-500 shrink-0" />
                <span className="text-sm font-bold dark:text-slate-200">
                  Recommended: <strong className="text-[#007bb6] dark:text-sky-400">{bestRegime}</strong> saves you <strong className="text-emerald-600 dark:text-emerald-400">₹{savings.toLocaleString()}</strong>
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TaxEstimatorWidget;
