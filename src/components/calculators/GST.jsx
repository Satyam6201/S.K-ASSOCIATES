import React, { useState } from 'react';

const GST = () => {
  const [amount, setAmount] = useState(0);
  const [rate, setRate] = useState(18);
  
  const gstAmount = (amount * rate) / 100;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-bold mb-2">Amount (₹)</label>
          <input type="number" onChange={(e)=>setAmount(e.target.value)} className="w-full p-4 rounded-xl bg-slate-100 dark:bg-slate-700" />
        </div>
        <div>
          <label className="block text-sm font-bold mb-2">GST Rate (%)</label>
          <select onChange={(e)=>setRate(e.target.value)} className="w-full p-4 rounded-xl bg-slate-100 dark:bg-slate-700">
            <option value="5">5%</option>
            <option value="12">12%</option>
            <option value="18" selected>18%</option>
            <option value="28">28%</option>
          </select>
        </div>
      </div>
      <div className="p-6 bg-orange-50 dark:bg-slate-700/50 rounded-2xl border-l-4 border-orange-500">
        <div className="flex justify-between mb-2"><span>CGST ({(rate/2)}%):</span> <b>₹{(gstAmount/2).toFixed(2)}</b></div>
        <div className="flex justify-between mb-2"><span>SGST ({(rate/2)}%):</span> <b>₹{(gstAmount/2).toFixed(2)}</b></div>
        <div className="flex justify-between pt-2 border-t border-orange-200 text-xl font-bold">
          <span>Total GST:</span> <span>₹{gstAmount.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};
export default GST;