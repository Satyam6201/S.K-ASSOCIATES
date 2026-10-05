import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Info, AlertCircle, CheckCircle, Copy, Check, ShieldCheck } from 'lucide-react';

const TDS = () => {
  const [section, setSection] = useState('194C_IND');
  const [amount, setAmount] = useState(150000);
  const [isNonFiler206AB, setIsNonFiler206AB] = useState(false);
  const [copied, setCopied] = useState(false);

  const sectionsData = {
    '194C_IND': { name: 'Sec 194C - Contractor (Individual/HUF)', rate: 1, threshold: 30000, form: '26Q' },
    '194C_OTH': { name: 'Sec 194C - Contractor (Company/Firm)', rate: 2, threshold: 30000, form: '26Q' },
    '194J_PROF': { name: 'Sec 194J - Professional Fees', rate: 10, threshold: 30000, form: '26Q' },
    '194J_TECH': { name: 'Sec 194J - Technical Services', rate: 2, threshold: 30000, form: '26Q' },
    '194IA': { name: 'Sec 194IA - Property Purchase (> ₹50L)', rate: 1, threshold: 5000000, form: '26QB' },
    '194IB': { name: 'Sec 194IB - Rent (> ₹50,000/mo)', rate: 5, threshold: 600000, form: '26QC' },
    '194Q': { name: 'Sec 194Q - Purchase of Goods (> ₹50L)', rate: 0.1, threshold: 5000000, form: '26Q' },
    '194H': { name: 'Sec 194H - Commission / Brokerage', rate: 2, threshold: 15000, form: '26Q' },
    '194I_PLANT': { name: 'Sec 194I - Rent of Plant & Machinery', rate: 2, threshold: 240000, form: '26Q' },
    '194I_LAND': { name: 'Sec 194I - Rent of Land & Building', rate: 10, threshold: 240000, form: '26Q' },
  };

  const selectedSec = sectionsData[section];
  const numAmount = Math.max(0, Number(amount) || 0);
  const isThresholdMet = numAmount >= selectedSec.threshold;

  let effectiveRate = selectedSec.rate;
  if (isNonFiler206AB) {
    effectiveRate = Math.max(5, selectedSec.rate * 2);
  }

  let tdsDeducted = 0;
  if (numAmount > 0 && isThresholdMet) {
    if (section === '194Q') {
      tdsDeducted = ((numAmount - selectedSec.threshold) * effectiveRate) / 100;
    } else {
      tdsDeducted = (numAmount * effectiveRate) / 100;
    }
  }

  const netPayable = numAmount - tdsDeducted;

  const handleCopy = () => {
    const summary = `S.K Associates TDS Calculation:\nSection: ${selectedSec.name}\nGross Amount: ₹${numAmount.toLocaleString()}\nApplicable Rate: ${effectiveRate}%\nTDS Deducted: ₹${tdsDeducted.toLocaleString()}\nNet Amount Payable: ₹${netPayable.toLocaleString()}`;
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="tds-calc-section" className="text-xs font-black uppercase tracking-wider text-slate-400">TDS Section & Statutory Category</label>
          <select 
            id="tds-calc-section"
            aria-label="TDS Section and Statutory Category"
            value={section} 
            onChange={(e) => setSection(e.target.value)} 
            className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold outline-none border border-slate-200 dark:border-slate-700 focus:border-rose-500 cursor-pointer"
          >
            {Object.entries(sectionsData).map(([key, data]) => (
              <option key={key} value={key}>{data.name} ({data.rate}%)</option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label htmlFor="tds-calc-amount" className="text-xs font-black uppercase tracking-wider text-slate-400">Total Transaction Value (₹)</label>
            <span className="text-sm font-black text-rose-600 dark:text-rose-400">₹{numAmount.toLocaleString()}</span>
          </div>
          <input 
            id="tds-calc-amount"
            aria-label="Total Transaction Value in Rupees"
            type="number" 
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white outline-none border border-slate-200 dark:border-slate-700 focus:border-rose-500 font-bold"
            placeholder="150000"
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-bold text-slate-400">Quick Presets:</span>
        {[50000, 100000, 500000, 2500000, 6000000].map((preset) => (
          <button
            key={preset}
            onClick={() => setAmount(preset)}
            className={`px-3 py-1 rounded-xl text-xs font-bold transition-all border ${
              numAmount === preset
              ? 'bg-rose-500 text-white border-rose-500 shadow-md'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-rose-500'
            }`}
          >
            ₹{(preset / 100000).toFixed(preset >= 100000 ? 1 : 2)}L
          </button>
        ))}
      </div>

      <div className="p-4 bg-slate-100 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-center justify-between">
        <div>
          <span className="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-slate-200 block">Section 206AB / 206CCA Higher Rate Check</span>
          <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Applies higher rate (minimum 5% or 2x rate) if payee is a specified non-filer of ITR.</span>
        </div>
        <button
          onClick={() => setIsNonFiler206AB(!isNonFiler206AB)}
          className={`px-4 py-2 rounded-xl font-black text-xs uppercase tracking-wider transition-all ${
            isNonFiler206AB 
            ? 'bg-rose-600 text-white shadow-md' 
            : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
          }`}
        >
          {isNonFiler206AB ? '206AB Applied (Higher)' : 'Standard Rate'}
        </button>
      </div>

      {numAmount > 0 && !isThresholdMet && (
        <div className="flex items-center gap-3 p-4 bg-amber-500/10 border border-amber-500/30 rounded-2xl text-amber-700 dark:text-amber-400 text-xs font-bold">
          <AlertCircle size={18} className="shrink-0 text-amber-500" />
          <span>Transaction is below statutory threshold of ₹{selectedSec.threshold.toLocaleString()}. TDS is ₹0 (Not Deductible).</span>
        </div>
      )}

      {numAmount > 0 && isThresholdMet && (
        <div className="flex items-center gap-3 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-emerald-700 dark:text-emerald-400 text-xs font-bold">
          <CheckCircle size={18} className="shrink-0 text-emerald-500" />
          <span>Statutory threshold exceeded. TDS is mandatory under Form {selectedSec.form} at {effectiveRate}%.</span>
        </div>
      )}

      <div className="p-8 bg-gradient-to-br from-rose-500/10 via-pink-500/5 to-slate-900/5 dark:bg-slate-800/80 rounded-[2.5rem] border-2 border-rose-500/30 space-y-6">
        <div className="flex justify-between items-center pb-4 border-b border-rose-200 dark:border-slate-700">
          <div>
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Applicable Statutory Rate</span>
            <h4 className="text-2xl font-black text-rose-600 dark:text-rose-400">{effectiveRate}%</h4>
          </div>
          <div className="text-right">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">TDS to Deduct</span>
            <h4 className="text-3xl font-black text-rose-600 dark:text-rose-400">₹{tdsDeducted.toLocaleString(undefined, { maximumFractionDigits: 2 })}</h4>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-xs font-semibold">
          <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700">
            <span className="text-slate-400 block font-bold">Gross Invoice Amount</span>
            <span className="text-lg font-black dark:text-white">₹{numAmount.toLocaleString()}</span>
          </div>

          <div className="p-4 bg-emerald-600 text-white rounded-2xl shadow-lg flex flex-col justify-center">
            <span className="text-emerald-100 block font-bold uppercase">Net Payable to Vendor</span>
            <span className="text-xl font-black">₹{netPayable.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
          </div>
        </div>

        <div className="flex justify-between items-center pt-2">
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
            <Info size={14} className="text-rose-500 shrink-0" />
            <span>TDS must be deposited with Govt by 7th of the following month via Challan ITNS 281.</span>
          </div>

          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold text-xs hover:scale-105 transition shadow-md shrink-0"
          >
            {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
            <span>{copied ? 'Copied!' : 'Copy Summary'}</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default TDS;
