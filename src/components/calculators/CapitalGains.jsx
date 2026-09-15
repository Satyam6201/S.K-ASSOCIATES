import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Info, Building2, Coins } from 'lucide-react';

const CapitalGains = () => {
  const [assetType, setAssetType] = useState('property');
  const [salePrice, setSalePrice] = useState(7500000);
  const [purchasePrice, setPurchasePrice] = useState(4000000);
  const [transferExpenses, setTransferExpenses] = useState(50000);
  const [holdingMonths, setHoldingMonths] = useState(36);
  const [exemptionReinvested, setExemptionReinvested] = useState(0);

  const numSale = Math.max(0, Number(salePrice) || 0);
  const numPur = Math.max(0, Number(purchasePrice) || 0);
  const numExp = Math.max(0, Number(transferExpenses) || 0);
  const numReinvest = Math.max(0, Number(exemptionReinvested) || 0);

  const rawGain = numSale - numPur - numExp;
  const isLTCG = (assetType === 'equity' && holdingMonths >= 12) || (assetType !== 'equity' && holdingMonths >= 24);

  let taxRate = 0;
  if (assetType === 'equity') {
    taxRate = isLTCG ? 12.5 : 20;
  } else if (assetType === 'property') {
    taxRate = isLTCG ? 12.5 : 30;
  } else {
    taxRate = isLTCG ? 12.5 : 30;
  }

  const taxableGainBeforeExemption = Math.max(0, rawGain);
  const gainAfterReinvestment = Math.max(0, taxableGainBeforeExemption - numReinvest);
  const equityExemption = (assetType === 'equity' && isLTCG) ? Math.min(gainAfterReinvestment, 125000) : 0;
  const netTaxableGain = Math.max(0, gainAfterReinvestment - equityExemption);

  const taxAmount = (netTaxableGain * taxRate) / 100;
  const cess = taxAmount * 0.04;
  const totalTax = taxAmount + cess;

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
      
      <div className="space-y-2">
        <label className="text-xs font-black uppercase tracking-wider text-slate-400">Select Asset Category</label>
        <div className="grid grid-cols-3 gap-3">
          {[
            { id: 'property', label: 'Real Estate / Property', icon: <Building2 size={16} /> },
            { id: 'equity', label: 'Equity / Mutual Funds', icon: <TrendingUp size={16} /> },
            { id: 'gold', label: 'Gold / Bonds / Other', icon: <Coins size={16} /> }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setAssetType(item.id)}
              className={`p-3.5 rounded-2xl text-xs font-bold transition-all border flex items-center justify-center gap-2 ${
                assetType === item.id 
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-md' 
                : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-emerald-500'
              }`}
            >
              {item.icon}
              <span className="hidden sm:inline">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="text-sm font-bold dark:text-slate-200">Full Sale Consideration (₹)</label>
            <span className="text-lg font-black text-emerald-600 dark:text-emerald-400">₹{numSale.toLocaleString()}</span>
          </div>
          <input 
            type="number" 
            value={salePrice}
            onChange={(e) => setSalePrice(e.target.value)}
            className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold outline-none border border-slate-200 dark:border-slate-700 focus:border-emerald-500"
          />
          <input 
            type="range"
            min="100000"
            max="20000000"
            step="100000"
            value={numSale}
            onChange={(e) => setSalePrice(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="text-sm font-bold dark:text-slate-200">Purchase / Acquisition Cost (₹)</label>
            <span className="text-lg font-black text-[#007bb6] dark:text-sky-400">₹{numPur.toLocaleString()}</span>
          </div>
          <input 
            type="number" 
            value={purchasePrice}
            onChange={(e) => setPurchasePrice(e.target.value)}
            className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold outline-none border border-slate-200 dark:border-slate-700 focus:border-emerald-500"
          />
          <input 
            type="range"
            min="50000"
            max="15000000"
            step="100000"
            value={numPur}
            onChange={(e) => setPurchasePrice(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-black uppercase tracking-wider text-slate-400">Holding Period (Months)</label>
          <input 
            type="number"
            value={holdingMonths}
            onChange={(e) => setHoldingMonths(Number(e.target.value))}
            className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold outline-none border border-slate-200 dark:border-slate-700 focus:border-emerald-500"
          />
          <span className="text-xs font-bold text-slate-500 dark:text-slate-400 block">
            Status: <strong className={isLTCG ? 'text-emerald-500' : 'text-amber-500'}>{isLTCG ? 'Long Term (LTCG)' : 'Short Term (STCG)'}</strong>
          </span>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-black uppercase tracking-wider text-slate-400">Transfer / Brokerage Expense (₹)</label>
          <input 
            type="number"
            value={transferExpenses}
            onChange={(e) => setTransferExpenses(e.target.value)}
            className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold outline-none border border-slate-200 dark:border-slate-700 focus:border-emerald-500"
            placeholder="50000"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-black uppercase tracking-wider text-slate-400">Sec 54 / 54F Reinvestment (₹)</label>
          <input 
            type="number"
            value={exemptionReinvested}
            onChange={(e) => setExemptionReinvested(e.target.value)}
            className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold outline-none border border-slate-200 dark:border-slate-700 focus:border-emerald-500"
            placeholder="0"
          />
        </div>
      </div>

      <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-slate-900/5 dark:bg-slate-800/80 border-2 border-emerald-500/30 space-y-6">
        
        <div className="flex justify-between items-center pb-4 border-b border-emerald-200 dark:border-slate-700">
          <div>
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Net Gain / Profit</span>
            <h3 className={`text-3xl font-black ${rawGain >= 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600'}`}>
              ₹{rawGain.toLocaleString()}
            </h3>
          </div>

          <div className="text-right">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">Applicable Tax Rate</span>
            <h3 className="text-2xl font-black dark:text-white">{taxRate}%</h3>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm font-semibold">
          <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700">
            <span className="text-xs text-slate-400 block font-bold">Taxable Capital Gain</span>
            <span className="text-lg font-black dark:text-white">₹{netTaxableGain.toLocaleString()}</span>
          </div>

          <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700">
            <span className="text-xs text-slate-400 block font-bold">Health & Edu Cess (4%)</span>
            <span className="text-lg font-black dark:text-white">₹{cess.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
          </div>

          <div className="p-4 bg-emerald-600 text-white rounded-2xl shadow-lg col-span-2 md:col-span-1 flex flex-col justify-center">
            <span className="text-xs text-emerald-100 block font-bold uppercase">Estimated Tax Liability</span>
            <span className="text-xl font-black">₹{totalTax.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
          </div>
        </div>

        {equityExemption > 0 && (
          <div className="flex items-center gap-2 p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-xs text-emerald-600 dark:text-emerald-400 font-bold">
            <Info size={16} className="shrink-0" />
            <span>Section 112A ₹1,25,000 annual exemption deducted from equity long term gains.</span>
          </div>
        )}

        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium pt-2">
          <Info size={14} className="text-emerald-500 shrink-0" />
          <span>Section 54 / 54F permits tax exemption if net proceeds are reinvested in residential property within 2 years.</span>
        </div>

      </div>

    </motion.div>
  );
};

export default CapitalGains;