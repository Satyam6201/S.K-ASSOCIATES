import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Clock, Check, Copy } from "lucide-react";
import { Link } from "react-router-dom";

const ComplianceCalendarSection = () => {
  const [copiedIdx, setCopiedIdx] = useState(null);

  const dueDates = [
    { date: "11th Every Month", title: "GSTR-1 Outward Supplies", category: "GST", status: "Monthly", color: "border-sky-500 text-sky-500 bg-sky-500/10" },
    { date: "20th Every Month", title: "GSTR-3B Summary Return", category: "GST", status: "Monthly", color: "border-blue-500 text-blue-500 bg-blue-500/10" },
    { date: "30th April", title: "MSME-1 Half Yearly Return", category: "ROC", status: "Half-Yearly", color: "border-amber-500 text-amber-500 bg-amber-500/10" },
    { date: "30th September", title: "DIR-3 KYC Director Annual", category: "ROC", status: "Annual", color: "border-indigo-500 text-indigo-500 bg-indigo-500/10" },
    { date: "31st October", title: "Tax Audit Report u/s 44AB", category: "Income Tax", status: "Annual", color: "border-rose-500 text-rose-500 bg-rose-500/10" },
    { date: "31st December", title: "GSTR-9 / 9C Annual Filing", category: "GST", status: "Annual", color: "border-emerald-500 text-emerald-500 bg-emerald-500/10" },
  ];

  const handleCopyDate = (idx, item) => {
    navigator.clipboard.writeText(`${item.title} - Due Date: ${item.date} (${item.category})`);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  return (
    <section className="py-16 sm:py-24 bg-white/75 dark:bg-[#070d1e]/80 backdrop-blur-sm border-b border-slate-200/70 dark:border-[#1a2c56] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-4 space-y-4 sm:space-y-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-black uppercase tracking-widest border border-amber-500/20">
              <Clock size={14} /> Live Deadline Tracker
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              Statutory Compliance <br />
              <span className="text-[#007bb6] dark:text-sky-400 italic">Due Dates Calendar</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed text-sm sm:text-base">
              Stay ahead of mandatory filing deadlines. Non-compliance results in heavy late fees (₹100/day for AOC-4/MGT-7, ₹50/day for GSTR-3B, & Sec 234E for TDS).
            </p>
            <Link 
              to="/rules" 
              className="inline-flex items-center gap-2 text-[#007bb6] dark:text-sky-400 font-bold hover:gap-3 transition-all text-sm"
            >
              View Full Statutory Regulatory Rules <ArrowRight size={16} />
            </Link>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {dueDates.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`p-5 sm:p-6 rounded-3xl sm:rounded-[2rem] bg-slate-50/90 dark:bg-[#0d1730] border-2 ${item.color.split(' ')[0]} shadow-lg flex flex-col justify-between space-y-4 relative group`}
              >
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className={`px-2.5 py-0.5 rounded-md text-[9px] font-black uppercase tracking-widest ${item.color}`}>
                      {item.category}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase">{item.status}</span>
                  </div>
                  <h4 className="font-black text-slate-900 dark:text-white text-base leading-snug">{item.title}</h4>
                </div>

                <div className="pt-3 border-t border-slate-200/60 dark:border-[#1a2c56] flex items-center justify-between text-xs font-bold text-slate-600 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-[#007bb6] dark:text-sky-400 shrink-0" />
                    <span>Due: {item.date}</span>
                  </div>
                  <button
                    onClick={() => handleCopyDate(idx, item)}
                    title="Copy deadline"
                    className="p-1 rounded-md text-slate-400 hover:text-[#007bb6] dark:hover:text-sky-400 transition"
                  >
                    {copiedIdx === idx ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ComplianceCalendarSection;
