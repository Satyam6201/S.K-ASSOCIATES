import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileDown, Search, FolderOpen, FileText } from 'lucide-react';

const Forms = () => {
  const [activeTab, setActiveTab] = useState("Income Tax");

  const formData = {
    "Income Tax": [
      { id: 1, name: "Form 16/16A", desc: "TDS Certificate for Salary/Other Income", size: "450 KB" },
      { id: 2, name: "Form 10E", desc: "Arrears of salary relief u/s 89(1)", size: "210 KB" },
      { id: 3, name: "Form 15G/H", desc: "Non-deduction of TDS declaration", size: "180 KB" }
    ],
    "GST": [
      { id: 4, name: "REG-01", desc: "Application for GST Registration", size: "1.2 MB" },
      { id: 5, name: "RFD-01", desc: "Refund application form", size: "800 KB" }
    ],
    "Corporate": [
      { id: 6, name: "INC-32 (SPICe+)", desc: "Company Incorporation Form", size: "2.4 MB" },
      { id: 7, name: "DIR-3", desc: "Application for DIN", size: "320 KB" }
    ]
  };

  return (
    <div className="pt-32 pb-20 px-6 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-5xl font-black dark:text-white mb-4">Official Forms</h1>
          <p className="text-slate-500 font-medium italic">Latest statutory forms for filing and compliance.</p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap gap-2 mb-10 p-2 bg-slate-200/50 dark:bg-slate-900/50 rounded-3xl w-fit">
          {Object.keys(formData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-2xl font-bold transition-all ${
                activeTab === tab 
                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30" 
                : "text-slate-500 hover:bg-white dark:hover:bg-slate-800"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Forms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {formData[activeTab].map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.05 }}
                className="group p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none"
              >
                <div className="w-14 h-14 bg-blue-50 dark:bg-blue-500/10 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <FileText size={28} />
                </div>
                <h3 className="text-xl font-black dark:text-white mb-2">{item.name}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 min-h-[40px]">{item.desc}</p>
                <div className="flex items-center justify-between border-t border-slate-50 dark:border-slate-800 pt-6">
                  <span className="text-xs font-bold text-slate-400">{item.size}</span>
                  <button className="flex items-center gap-2 text-blue-600 font-black text-sm group-hover:underline">
                    Download <FileDown size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Forms;