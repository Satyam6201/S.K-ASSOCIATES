import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Info } from 'lucide-react';

const GST = () => {
  const [amount, setAmount] = useState(100000);
  const [rate, setRate] = useState(18);
  const [calcMode, setCalcMode] = useState('add');
  const [isInterState, setIsInterState] = useState(false);
  const [copied, setCopied] = useState(false);

  const numAmount = Math.max(0, Number(amount) || 0);

  let netPrice = 0;
  let gstAmount = 0;
  let grossPrice = 0;

  if (calcMode === 'add') {
    netPrice = numAmount;
    gstAmount = (netPrice * rate) / 100;
    grossPrice = netPrice + gstAmount;
  } else {
    grossPrice = numAmount;
    netPrice = grossPrice / (1 + rate / 100);
    gstAmount = grossPrice - netPrice;
  }

  const cgst = isInterState ? 0 : gstAmount / 2;
  const sgst = isInterState ? 0 : gstAmount / 2;
  const igst = isInterState ? gstAmount : 0;

  const handleCopy = () => {
    const summaryText = `S.K Associates GST Calculation:\nBase Price: ₹${netPrice.toLocaleString(undefined, { maximumFractionDigits: 2 })}\nGST (${rate}%): ₹${gstAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })}\nTotal Invoice Price: ₹${grossPrice.toLocaleString(undefined, { maximumFractionDigits: 2 })}`;
    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
      
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-xs font-black uppercase tracking-wider text-slate-400">Calculation Type</label>
          <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl">
            <button
              onClick={() => setCalcMode('add')}
              className={`flex-1 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                calcMode === 'add' ? 'bg-[#007bb6] text-white shadow-md' : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              Add GST (Exclusive)
            </button>
            <button
              onClick={() => setCalcMode('remove')}
              className={`flex-1 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                calcMode === 'remove' ? 'bg-[#007bb6] text-white shadow-md' : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              Remove GST (Inclusive)
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-black uppercase tracking-wider text-slate-400">Transaction Type</label>
          <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl">
            <button
              onClick={() => setIsInterState(false)}
              className={`flex-1 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                !isInterState ? 'bg-orange-500 text-white shadow-md' : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              Intra-State (CGST + SGST)
            </button>
            <button
              onClick={() => setIsInterState(true)}
              className={`flex-1 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                isInterState ? 'bg-orange-500 text-white shadow-md' : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              Inter-State (IGST)
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label htmlFor="gst-calc-amount" className="text-sm font-bold dark:text-slate-200">
              {calcMode === 'add' ? 'Net Taxable Amount (₹)' : 'Total Invoice Amount (₹)'}
            </label>
            <span className="text-2xl font-black text-[#007bb6] dark:text-sky-400">₹{numAmount.toLocaleString()}</span>
          </div>
          <input 
            id="gst-calc-amount"
            aria-label={calcMode === 'add' ? 'Net Taxable Amount in Rupees' : 'Total Invoice Amount in Rupees'}
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold outline-none border border-slate-200 dark:border-slate-700 focus:border-[#007bb6]"
            placeholder="100000"
          />
          <input 
            id="gst-calc-amount-slider"
            aria-label="GST Amount Slider"
            aria-valuenow={numAmount}
            type="range"
            min="1000"
            max="1000000"
            step="5000"
            value={numAmount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#007bb6]"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-black uppercase tracking-wider text-slate-400">Select GST Slab Rate (%)</label>
          <div className="grid grid-cols-5 gap-3">
            {[5, 12, 18, 28, 0.25].map((r) => (
              <button
                key={r}
                onClick={() => setRate(r)}
                className={`py-3 rounded-2xl font-black text-xs transition-all border ${
                  rate === r 
                  ? 'bg-orange-500 text-white border-orange-500 shadow-md scale-105' 
                  : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-orange-500'
                }`}
              >
                {r}%
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-orange-500/10 via-amber-500/5 to-slate-900/5 dark:bg-slate-800/80 border-2 border-orange-500/30 space-y-6 relative overflow-hidden">
        
        <div className="flex justify-between items-center pb-4 border-b border-orange-200 dark:border-slate-700">
          <div>
            <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Base Net Value</p>
            <h4 className="text-2xl font-black dark:text-white">₹{netPrice.toLocaleString(undefined, { maximumFractionDigits: 2 })}</h4>
          </div>
          <div className="text-right">
            <p className="text-xs font-bold text-orange-500 uppercase tracking-widest">Total GST ({rate}%)</p>
            <h4 className="text-3xl font-black text-orange-600 dark:text-orange-400">+₹{gstAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })}</h4>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm font-semibold">
          {!isInterState ? (
            <>
              <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700">
                <span className="text-xs text-slate-400 block font-bold">CGST ({(rate/2)}%)</span>
                <span className="text-lg font-black dark:text-white">₹{cgst.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
              </div>
              <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700">
                <span className="text-xs text-slate-400 block font-bold">SGST ({(rate/2)}%)</span>
                <span className="text-lg font-black dark:text-white">₹{sgst.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
              </div>
            </>
          ) : (
            <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 col-span-2">
              <span className="text-xs text-slate-400 block font-bold">IGST ({rate}%)</span>
              <span className="text-lg font-black dark:text-white">₹{igst.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
            </div>
          )}

          <div className="p-4 bg-orange-500 text-white rounded-2xl shadow-lg flex flex-col justify-center">
            <span className="text-xs text-orange-100 block font-bold uppercase">Final Gross Total</span>
            <span className="text-xl font-black">₹{grossPrice.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
          </div>
        </div>

        <div className="space-y-1 pt-2">
          <div className="flex justify-between text-xs font-bold text-slate-500 dark:text-slate-400">
            <span>Base Value: {Math.round((netPrice / grossPrice) * 100 || 0)}%</span>
            <span>GST Tax Component: {Math.round((gstAmount / grossPrice) * 100 || 0)}%</span>
          </div>
          <div className="h-3 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden flex">
            <div style={{ width: `${(netPrice / grossPrice) * 100}%` }} className="bg-[#007bb6] h-full" />
            <div style={{ width: `${(gstAmount / grossPrice) * 100}%` }} className="bg-orange-500 h-full" />
          </div>
        </div>

        <div className="flex justify-between items-center pt-2">
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
            <Info size={14} className="text-orange-500 shrink-0" />
            <span>Compliant with Indian GST Law Section 15.</span>
          </div>

          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold text-xs hover:scale-105 transition"
          >
            {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
            <span>{copied ? 'Summary Copied!' : 'Copy Calculation'}</span>
          </button>
        </div>

      </div>
    </motion.div>
  );
};

export default GST;