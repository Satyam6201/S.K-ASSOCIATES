import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const IncomeTax = () => {
  const [grossIncome, setGrossIncome] = useState('');
  const [sec80C, setSec80C] = useState('');
  const [sec80D, setSec80D] = useState('');
  const [otherDeductions, setOtherDeductions] = useState('');

  const gross = Number(grossIncome) || 0;
  const ded80C = Math.min(150000, Number(sec80C) || 0);
  const ded80D = Number(sec80D) || 0;
  const dedOther = Number(otherDeductions) || 0;

  // --- NEW REGIME CALCULATION (FY 2025-26 u/s 115BAC) ---
  const calculateNewRegime = (income) => {
    const stdDeduction = 75000;
    const taxable = Math.max(0, income - stdDeduction);
    if (taxable === 0) return { tax: 0, cess: 0, total: 0, taxable };

    // Slabs: 0-3L (0%), 3-7L (5%), 7-10L (10%), 10-12L (15%), 12-15L (20%), >15L (30%)
    let tax = 0;
    if (taxable > 1500000) {
      tax += (taxable - 1500000) * 0.30 + 140000;
    } else if (taxable > 1200000) {
      tax += (taxable - 1200000) * 0.20 + 80000;
    } else if (taxable > 1000000) {
      tax += (taxable - 1000000) * 0.15 + 50000;
    } else if (taxable > 700000) {
      tax += (taxable - 700000) * 0.10 + 20000;
    } else if (taxable > 300000) {
      tax += (taxable - 300000) * 0.05;
    }

    // Sec 87A rebate & marginal relief under New Regime
    if (taxable <= 700000) {
      tax = 0;
    } else {
      const excess = taxable - 700000;
      if (tax > excess) {
        tax = excess;
      }
    }

    const cess = tax * 0.04;
    return { tax, cess, total: tax + cess, taxable };
  };

  // --- OLD REGIME CALCULATION ---
  const calculateOldRegime = (income, totalDeductions) => {
    const stdDeduction = 50000;
    const taxable = Math.max(0, income - stdDeduction - totalDeductions);
    if (taxable === 0) return { tax: 0, cess: 0, total: 0, taxable };

    let tax = 0;
    if (taxable > 1000000) {
      tax += (taxable - 1000000) * 0.30 + 112500;
    } else if (taxable > 500000) {
      tax += (taxable - 500000) * 0.20 + 12500;
    } else if (taxable > 250000) {
      tax += (taxable - 250000) * 0.05;
    }

    // Sec 87A rebate under Old Regime (Rebate up to taxable income ₹5,00,000)
    if (taxable <= 500000) tax = 0;

    const cess = tax * 0.04;
    return { tax, cess, total: tax + cess, taxable };
  };

  const newResult = calculateNewRegime(gross);
  const oldResult = calculateOldRegime(gross, ded80C + ded80D + dedOther);
  const savings = Math.abs(oldResult.total - newResult.total);
  const recommendedRegime = newResult.total <= oldResult.total ? 'New Tax Regime' : 'Old Tax Regime';

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-bold dark:text-slate-300">Gross Annual Salary / Income (₹)</label>
          <input 
            type="number" 
            value={grossIncome}
            onChange={(e) => setGrossIncome(e.target.value)}
            className="w-full p-4 rounded-xl bg-slate-100 dark:bg-slate-800 dark:text-white font-bold outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. 1200000"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold dark:text-slate-300">Deduction 80C (PPF, ELSS, EPF) (Max ₹1.5L)</label>
          <input 
            type="number" 
            value={sec80C}
            onChange={(e) => setSec80C(e.target.value)}
            className="w-full p-4 rounded-xl bg-slate-100 dark:bg-slate-800 dark:text-white font-bold outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. 150000"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-bold dark:text-slate-300">Health Insurance 80D (₹)</label>
          <input 
            type="number" 
            value={sec80D}
            onChange={(e) => setSec80D(e.target.value)}
            className="w-full p-4 rounded-xl bg-slate-100 dark:bg-slate-800 dark:text-white font-bold outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. 25000"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold dark:text-slate-300">Other Deductions (NPS 80CCD, HRA, etc.) (₹)</label>
          <input 
            type="number" 
            value={otherDeductions}
            onChange={(e) => setOtherDeductions(e.target.value)}
            className="w-full p-4 rounded-xl bg-slate-100 dark:bg-slate-800 dark:text-white font-bold outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. 50000"
          />
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="grid md:grid-cols-2 gap-6 pt-2">
        <div className={`p-6 rounded-2xl border-2 transition-all ${recommendedRegime === 'New Tax Regime' ? 'border-emerald-500 bg-emerald-50/60 dark:bg-slate-800/80 shadow-lg' : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900'}`}>
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-black text-lg dark:text-white">New Tax Regime</h4>
            {recommendedRegime === 'New Tax Regime' && (
              <span className="px-3 py-1 bg-emerald-500 text-white rounded-full text-[10px] font-black uppercase">Recommended</span>
            )}
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-slate-600 dark:text-slate-400">
              <span>Standard Deduction:</span>
              <span className="font-bold">₹75,000</span>
            </div>
            <div className="flex justify-between text-slate-600 dark:text-slate-400">
              <span>Taxable Income:</span>
              <span className="font-bold">₹{newResult.taxable.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-slate-600 dark:text-slate-400">
              <span>Health & Edu Cess (4%):</span>
              <span className="font-bold">₹{newResult.cess.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center pt-3 border-t border-slate-200 dark:border-slate-700 text-lg font-black dark:text-white">
              <span>Total Tax:</span>
              <span className="text-emerald-600 dark:text-emerald-400">₹{newResult.total.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className={`p-6 rounded-2xl border-2 transition-all ${recommendedRegime === 'Old Tax Regime' ? 'border-emerald-500 bg-emerald-50/60 dark:bg-slate-800/80 shadow-lg' : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900'}`}>
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-black text-lg dark:text-white">Old Tax Regime</h4>
            {recommendedRegime === 'Old Tax Regime' && (
              <span className="px-3 py-1 bg-emerald-500 text-white rounded-full text-[10px] font-black uppercase">Recommended</span>
            )}
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-slate-600 dark:text-slate-400">
              <span>Std. + Chapter VI-A Deductions:</span>
              <span className="font-bold">₹{(50000 + ded80C + ded80D + dedOther).toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-slate-600 dark:text-slate-400">
              <span>Taxable Income:</span>
              <span className="font-bold">₹{oldResult.taxable.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-slate-600 dark:text-slate-400">
              <span>Health & Edu Cess (4%):</span>
              <span className="font-bold">₹{oldResult.cess.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center pt-3 border-t border-slate-200 dark:border-slate-700 text-lg font-black dark:text-white">
              <span>Total Tax:</span>
              <span className="text-blue-600 dark:text-sky-400">₹{oldResult.total.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 bg-blue-50 dark:bg-slate-800 rounded-2xl border border-blue-200 dark:border-slate-700 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <CheckCircle2 className="text-emerald-500 shrink-0" size={20} />
          <span className="text-sm font-bold dark:text-slate-200">
            You save <span className="text-emerald-600 dark:text-emerald-400">₹{savings.toLocaleString()}</span> by choosing the <strong className="text-blue-600 dark:text-sky-400">{recommendedRegime}</strong>.
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default IncomeTax;