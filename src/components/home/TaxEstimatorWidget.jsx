import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, CheckCircle2, Sparkles, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

const TaxEstimatorWidget = () => {
  const [income, setIncome] = useState(1200000);
  const [showBreakdown, setShowBreakdown] = useState(false);

  const calcNewRegime = (inc) => {
    const stdDed = 75000;
    const taxable = Math.max(0, inc - stdDed);
    if (taxable <= 700000) return { tax: 0, taxable, cess: 0 };
    
    let baseTax = 0;
    if (taxable > 1500000) baseTax += (taxable - 1500000) * 0.30 + 140000;
    else if (taxable > 1200000) baseTax += (taxable - 1200000) * 0.20 + 80000;
    else if (taxable > 1000000) baseTax += (taxable - 1000000) * 0.15 + 50000;
    else if (taxable > 700000) baseTax += (taxable - 700000) * 0.10 + 20000;
    else if (taxable > 300000) baseTax += (taxable - 300000) * 0.05;

    const excessOver7L = taxable - 700000;
    if (excessOver7L > 0 && baseTax > excessOver7L) {
      baseTax = excessOver7L;
    }

    const cess = baseTax * 0.04;
    return { tax: baseTax + cess, taxable, cess };
  };

  const calcOldRegime = (inc) => {
    const stdDed = 50000;
    const ded80C = 150000;
    const taxable = Math.max(0, inc - stdDed - ded80C);
    if (taxable <= 500000) return { tax: 0, taxable, cess: 0 };
    
    let baseTax = 0;
    if (taxable > 1000000) baseTax += (taxable - 1000000) * 0.30 + 112500;
    else if (taxable > 500000) baseTax += (taxable - 500000) * 0.20 + 12500;
    else if (taxable > 250000) baseTax += (taxable - 250000) * 0.05;

    const excessOver5L = taxable - 500000;
    if (excessOver5L > 0 && baseTax > excessOver5L) {
      baseTax = excessOver5L;
    }

    const cess = baseTax * 0.04;
    return { tax: baseTax + cess, taxable, cess };
  };

  const newResult = calcNewRegime(income);
  const oldResult = calcOldRegime(income);
  const newTax = Math.round(newResult.tax);
  const oldTax = Math.round(oldResult.tax);
  const savings = Math.abs(oldTax - newTax);
  const bestRegime = newTax < oldTax ? 'New Tax Regime' : (oldTax < newTax ? 'Old Tax Regime' : 'Both Regimes Equal');

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-[#f4f7fb] via-[#ebf3fc] to-[#f4f7fb] dark:from-[#070d1e] dark:via-[#0b1632] dark:to-[#070d1e] border-b border-slate-200/80 dark:border-slate-800 relative overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-4 sm:space-y-6 text-center lg:text-left"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-[#007bb6] dark:text-sky-400 text-xs font-black uppercase tracking-widest border border-blue-500/20">
              <Sparkles size={14} /> Instant Estimator Tool
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              Income Tax Savings <br />
              <span className="text-[#007bb6] dark:text-sky-400 italic">Calculator FY 2025-26</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base font-medium leading-relaxed max-w-lg mx-auto lg:mx-0">
              Drag the annual income slider to instantly compare tax liability under the New vs Old Tax Regime with standard deduction & 87A rebate rules applied.
            </p>
            <Link to="/calculators" className="inline-flex items-center gap-2 text-[#007bb6] dark:text-sky-400 font-bold hover:gap-3 transition-all group text-sm">
              Launch Detailed Statutory Calculator <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white dark:bg-[#0c152d] p-6 sm:p-8 md:p-12 rounded-[2rem] sm:rounded-[3rem] shadow-2xl border border-slate-200/80 dark:border-slate-800 space-y-6 sm:space-y-8"
          >
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 mb-4">
                <label htmlFor="annual-income-slider" className="font-bold text-slate-700 dark:text-slate-200 text-sm md:text-base">Annual Gross Salary / Business Income:</label>
                <span className="text-2xl sm:text-3xl font-black text-[#007bb6] dark:text-sky-400">₹{income.toLocaleString()}</span>
              </div>
              <input 
                id="annual-income-slider"
                aria-label="Annual gross salary or business income slider"
                aria-valuenow={income}
                aria-valuemin={400000}
                aria-valuemax={5000000}
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
              <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-slate-800/80 border border-emerald-200 dark:border-slate-700 transition-all">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs uppercase font-bold text-slate-500 dark:text-slate-400">New Tax Regime</span>
                  {bestRegime === 'New Tax Regime' && <span className="px-2 py-0.5 bg-emerald-500 text-white rounded-md text-[9px] font-black uppercase">Cheaper</span>}
                </div>
                <p className="text-3xl font-black text-emerald-600 dark:text-emerald-400">₹{newTax.toLocaleString()}</p>
                <p className="text-[10px] text-slate-400 mt-1 font-bold">Standard deduction ₹75,000 + 87A rebate</p>
              </div>

              <div className="p-6 rounded-2xl bg-blue-50 dark:bg-slate-800/80 border border-blue-200 dark:border-slate-700 transition-all">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs uppercase font-bold text-slate-500 dark:text-slate-400">Old Tax Regime</span>
                  {bestRegime === 'Old Tax Regime' && <span className="px-2 py-0.5 bg-blue-500 text-white rounded-md text-[9px] font-black uppercase">Cheaper</span>}
                </div>
                <p className="text-3xl font-black text-[#007bb6] dark:text-sky-400">₹{oldTax.toLocaleString()}</p>
                <p className="text-[10px] text-slate-400 mt-1 font-bold">Assumes ₹1.5L Sec 80C + ₹50k std deduction</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-emerald-500 shrink-0" />
                <span className="text-sm font-bold dark:text-slate-200">
                  {bestRegime === 'Both Regimes Equal' ? (
                    <span>Tax liability is identical under both regimes (<strong>₹{newTax.toLocaleString()}</strong>).</span>
                  ) : (
                    <span>Recommended: <strong className="text-[#007bb6] dark:text-sky-400">{bestRegime}</strong> saves you <strong className="text-emerald-600 dark:text-emerald-400">₹{savings.toLocaleString()}</strong></span>
                  )}
                </span>
              </div>
              <button 
                onClick={() => setShowBreakdown(!showBreakdown)}
                className="text-xs font-bold text-[#007bb6] dark:text-sky-400 hover:underline flex items-center gap-1"
              >
                <HelpCircle size={14} /> {showBreakdown ? 'Hide Breakdown' : 'View Slabs'}
              </button>
            </div>

            {showBreakdown && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 text-xs space-y-2"
              >
                <div className="flex justify-between font-bold text-slate-600 dark:text-slate-300 pb-1 border-b border-slate-200 dark:border-slate-700">
                  <span>New Taxable Income: ₹{newResult.taxable.toLocaleString()}</span>
                  <span>Old Taxable Income: ₹{oldResult.taxable.toLocaleString()}</span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-[11px]">
                  *New Regime includes Section 87A marginal relief (if taxable is ₹7.01L-₹7.27L). Old Regime gives full rebate up to ₹5L taxable income.
                </p>
              </motion.div>
            )}

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TaxEstimatorWidget;
