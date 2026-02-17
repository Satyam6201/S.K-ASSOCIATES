import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Clock, ArrowRight } from 'lucide-react';

const Bulletins = () => {
  const updates = [
    { date: "Oct 24, 2024", title: "Extension of ITR Filing Deadline for Corporates", tag: "Income Tax" },
    { date: "Oct 20, 2024", title: "New Advisory on GST Geo-coding Functionality", tag: "GST" },
    { date: "Oct 15, 2024", title: "MCA updates regarding E-form CSR-1", tag: "Corporate" },
  ];

  return (
    <div className="pt-32 pb-20 px-6 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl font-black dark:text-white">Professional Bulletins</h1>
            <p className="text-slate-500 mt-2">Latest circulars, notifications, and press releases.</p>
          </div>
          <div className="w-16 h-16 bg-orange-500/10 text-orange-500 rounded-full flex items-center justify-center animate-bounce">
            <Bell size={30} />
          </div>
        </div>

        <div className="space-y-4">
          {updates.map((news, i) => (
            <motion.div
              key={news.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-orange-500/50 transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-6">
                <div className="hidden md:block text-center pr-6 border-r border-slate-100 dark:border-slate-800">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Date</p>
                  <p className="text-sm font-black dark:text-white leading-none mt-1">{news.date.split(',')[0]}</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-orange-600 bg-orange-50 dark:bg-orange-500/10 px-2 py-0.5 rounded uppercase">
                    {news.tag}
                  </span>
                  <h3 className="text-lg font-bold dark:text-white mt-1 group-hover:text-orange-500 transition-colors">
                    {news.title}
                  </h3>
                </div>
              </div>
              <ArrowRight className="text-slate-300 group-hover:text-orange-500 group-hover:translate-x-2 transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bulletins;