import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const IncomeTax = () => {
  const [grossIncome, setGrossIncome] = useState(1200000);
  const [sec80C, setSec80C] = useState(150000);
  const [sec80D, setSec80D] = useState(25000);
  const [otherDeductions, setOtherDeductions] = useState(50000);
  const [showSlabDetails, setShowSlabDetails] = useState(false);

  const gross = Number(grossIncome) || 0;
  const ded80C = Math.min(150000, Number(sec80C) || 0);
  const ded80D = Number(sec80D) || 0;
  const dedOther = Number(otherDeductions) || 0;

  const calculateNewRegime = (income) => {
    const stdDeduction = 75000;
    const taxable = Math.max(0, income - stdDeduction);
    if (taxable === 0) return { tax: 0, cess: 0, total: 0, taxable };

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

    if (taxable <= 500000) tax = 0;

    const cess = tax * 0.04;
    return { tax, cess, total: tax + cess, taxable };
  };

  const newResult = calculateNewRegime(gross);
  const oldResult = calculateOldRegime(gross, ded80C + ded80D + dedOther);
  const savings = Math.abs(oldResult.total - newResult.total);
  const recommendedRegime = newResult.total <= oldResult.total ? 'New Tax Regime' : 'Old Tax Regime';

  const presets = [750000, 1000000, 1500000, 2500000, 5000000];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      
      {/* Quick Income Preset Badges */}
      <div className="space-y-1.5">
        <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Quick Income Presets</label>
        <div className="flex flex-wrap gap-2">
          {presets.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setGrossIncome(p)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                gross === p
                  ? 'bg-[#007bb6] text-white border-[#007bb6] shadow-sm'
                  : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-[#007bb6]'
              }`}
            >
              ₹{(p / 100000).toFixed(1)}L
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-bold dark:text-slate-300">Gross Annual Salary / Business Income (₹)</label>
          <input 
            type="number" 
            value={grossIncome}
            onChange={(e) => setGrossIncome(e.target.value)}
            className="w-full p-4 rounded-xl bg-slate-100 dark:bg-slate-800 dark:text-white font-bold outline-none focus:ring-2 focus:ring-[#007bb6]"
            placeholder="e.g. 1200000"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold dark:text-slate-300">Deduction 80C (PPF, ELSS, EPF) (Max ₹1.5L)</label>
          <input 
            type="number" 
            value={sec80C}
            onChange={(e) => setSec80C(e.target.value)}
            className="w-full p-4 rounded-xl bg-slate-100 dark:bg-slate-800 dark:text-white font-bold outline-none focus:ring-2 focus:ring-[#007bb6]"
            placeholder="e.g. 150000"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-bold dark:text-slate-300">Health Insurance 80D (Self & Parents) (₹)</label>
          <input 
            type="number" 
            value={sec80D}
            onChange={(e) => setSec80D(e.target.value)}
            className="w-full p-4 rounded-xl bg-slate-100 dark:bg-slate-800 dark:text-white font-bold outline-none focus:ring-2 focus:ring-[#007bb6]"
            placeholder="e.g. 25000"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold dark:text-slate-300">Other Deductions (NPS 80CCD, HRA, etc.) (₹)</label>
          <input 
            type="number" 
            value={otherDeductions}
            onChange={(e) => setOtherDeductions(e.target.value)}
            className="w-full p-4 rounded-xl bg-slate-100 dark:bg-slate-800 dark:text-white font-bold outline-none focus:ring-2 focus:ring-[#007bb6]"
            placeholder="e.g. 50000"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 pt-2">
        <div className={`p-6 rounded-2xl border-2 transition-all ${recommendedRegime === 'New Tax Regime' ? 'border-emerald-500 bg-emerald-50/60 dark:bg-slate-800/80 shadow-lg' : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900'}`}>
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-black text-lg dark:text-white">New Tax Regime (u/s 115BAC)</h4>
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
              <span className="font-bold">₹{Math.round(newResult.cess).toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center pt-3 border-t border-slate-200 dark:border-slate-700 text-lg font-black dark:text-white">
              <span>Total Tax:</span>
              <span className="text-emerald-600 dark:text-emerald-400">₹{Math.round(newResult.total).toLocaleString()}</span>
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
              <span className="font-bold">₹{Math.round(oldResult.cess).toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center pt-3 border-t border-slate-200 dark:border-slate-700 text-lg font-black dark:text-white">
              <span>Total Tax:</span>
              <span className="text-[#007bb6] dark:text-sky-400">₹{Math.round(oldResult.total).toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 bg-blue-50 dark:bg-slate-800 rounded-2xl border border-blue-200 dark:border-slate-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <CheckCircle2 className="text-emerald-500 shrink-0" size={20} />
          <span className="text-sm font-bold dark:text-slate-200">
            {savings === 0 ? (
              <span>Tax liability is identical under both regimes.</span>
            ) : (
              <span>You save <span className="text-emerald-600 dark:text-emerald-400">₹{Math.round(savings).toLocaleString()}</span> by choosing the <strong className="text-[#007bb6] dark:text-sky-400">{recommendedRegime}</strong>.</span>
            )}
          </span>
        </div>
        <button
          type="button"
          onClick={() => setShowSlabDetails(!showSlabDetails)}
          className="text-xs font-bold text-[#007bb6] dark:text-sky-400 hover:underline flex items-center gap-1"
        >
          {showSlabDetails ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          <span>{showSlabDetails ? 'Hide Slabs' : 'View Slabs'}</span>
        </button>
      </div>

      {showSlabDetails && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 text-xs space-y-2"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-black text-[#007bb6] dark:text-sky-400 mb-1">New Regime Slabs (FY 2025-26):</p>
              <ul className="space-y-0.5 text-slate-600 dark:text-slate-300">
                <li>• ₹0 to ₹3,00,000: NIL</li>
                <li>• ₹3,00,001 to ₹7,00,000: 5% (Sec 87A rebate applies up to ₹7L)</li>
                <li>• ₹7,00,001 to ₹10,00,000: 10%</li>
                <li>• ₹10,00,001 to ₹12,00,000: 15%</li>
                <li>• ₹12,00,001 to ₹15,00,000: 20%</li>
                <li>• Above ₹15,00,000: 30%</li>
              </ul>
            </div>
            <div>
              <p className="font-black text-amber-600 dark:text-amber-400 mb-1">Old Regime Slabs:</p>
              <ul className="space-y-0.5 text-slate-600 dark:text-slate-300">
                <li>• ₹0 to ₹2,50,000: NIL</li>
                <li>• ₹2,50,001 to ₹5,00,000: 5% (Sec 87A rebate applies up to ₹5L)</li>
                <li>• ₹5,00,001 to ₹10,00,000: 20%</li>
                <li>• Above ₹10,00,000: 30%</li>
                <li className="pt-1 text-[11px] text-slate-400">*Permits Sec 80C, 80D, HRA, 24(b) Home Loan interest.</li>
              </ul>
            </div>
          </div>
        </motion.div>
      )}

    </motion.div>
  );
};

export default IncomeTax;