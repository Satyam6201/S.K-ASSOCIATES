import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bell, Clock, ArrowRight, Rss, 
  Search, Filter, Share2, Bookmark, 
  ExternalLink, Zap, Flame, Calendar
} from 'lucide-react';

const Bulletins = () => {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Income Tax", "GST", "Corporate", "Finance"];

  const updates = [
    { 
      id: 1,
      date: "April 15, 2026", 
      title: "Mandatory Geo-Tagging for Registered Offices of Companies", 
      desc: "MCA extends the deadline for geo-tagging via the V3 portal. Non-compliance may lead to 'Active-Non-Compliant' status.",
      tag: "Corporate", 
      priority: "High" 
    },
    { 
      id: 2,
      date: "April 10, 2026", 
      title: "CBIC Introduces Automated Scrutiny of GST Returns (ASMT-10)", 
      desc: "New AI-driven module to compare GSTR-1, 3B, and E-Way bills with near-zero manual intervention.",
      tag: "GST", 
      priority: "Critical" 
    },
    { 
      id: 3,
      date: "April 02, 2026", 
      title: "Update on SFT Reporting for High-Value Transactions", 
      desc: "Detailed guidelines for financial institutions on reporting specified financial transactions for FY 2025-26.",
      tag: "Income Tax", 
      priority: "Normal" 
    },
    { 
      id: 4,
      date: "March 28, 2026", 
      title: "MSME Payment Rule (Sec 43B(h)) - Year-End Checklist", 
      desc: "Crucial reminders for timely payments to MSMEs to ensure expense deductibility for the current tax year.",
      tag: "Finance", 
      priority: "High" 
    },
  ];

  const filteredUpdates = filter === "All" ? updates : updates.filter(u => u.tag === filter);

  return (
    <div className="pt-32 pb-40 px-6 bg-[#f8fafc] dark:bg-[#020617] min-h-screen">
      
      {/* --- FLOATING BACKGROUND ELEMENT --- */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[30vw] h-[30vw] bg-orange-500/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] right-[10%] w-[30vw] h-[30vw] bg-blue-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto">
        
        {/* --- HEADER SECTION --- */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 rounded-full text-orange-600 mb-6">
              <Flame size={16} className="animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest">Live Updates</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black dark:text-white tracking-tighter leading-none mb-6">
              INTELLIGENCE <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">BULLETINS.</span>
            </h1>
            <p className="text-slate-500 dark:text-slate-400 font-medium text-lg max-w-md italic">
              Critical regulatory shifts and statutory deadlines, curated for the modern enterprise.
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-3 lg:justify-end">
            <button className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-white/10 text-slate-500 hover:text-orange-500 transition-all shadow-xl shadow-slate-200/50 dark:shadow-none">
              <Rss size={24} />
            </button>
            <button className="flex items-center gap-3 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-2xl">
              Subscribe to Alerts <Bell size={18} />
            </button>
          </div>
        </div>

        {/* --- CATEGORY FILTER --- */}
        <div className="flex overflow-x-auto no-scrollbar gap-2 mb-12 p-2 bg-white dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[2.5rem] w-fit mx-auto lg:mx-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-4 rounded-[2rem] font-black text-xs uppercase tracking-widest transition-all ${
                filter === cat 
                ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30" 
                : "text-slate-500 hover:bg-slate-100 dark:hover:bg-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* --- NEWS FEED --- */}
        <div className="grid gap-6">
          <AnimatePresence mode="popLayout">
            {filteredUpdates.map((news, i) => (
              <motion.div
                key={news.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: "circOut" }}
                className="group relative bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-white/5 p-8 lg:p-10 shadow-xl shadow-slate-200/40 dark:shadow-none hover:shadow-2xl hover:shadow-orange-500/10 dark:hover:border-orange-500/30 transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  
                  {/* Date Badge */}
                  <div className="flex-shrink-0 flex md:flex-col items-center justify-center w-full md:w-24 h-16 md:h-24 bg-slate-50 dark:bg-white/5 rounded-3xl border border-slate-100 dark:border-white/5">
                    <Calendar className="md:hidden text-orange-500 mr-2" size={20} />
                    <span className="text-xl md:text-3xl font-black dark:text-white leading-none">{news.date.split(' ')[1].replace(',', '')}</span>
                    <span className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-widest md:mt-1">{news.date.split(' ')[0]}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] ${
                        news.priority === "Critical" ? "bg-red-500 text-white" : 
                        news.priority === "High" ? "bg-orange-500 text-white" : "bg-blue-500 text-white"
                      }`}>
                        {news.priority}
                      </span>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <Clock size={12} /> 5 min read
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-black dark:text-white mb-4 leading-tight group-hover:text-orange-500 transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-3xl">
                      {news.desc}
                    </p>

                    <div className="mt-8 flex items-center gap-6">
                      <button className="text-orange-600 dark:text-orange-500 font-black text-xs uppercase tracking-[0.2em] flex items-center gap-2 group/btn">
                        Read Circular <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
                      </button>
                      <div className="flex gap-4 text-slate-400">
                        <Share2 size={16} className="hover:text-orange-500 cursor-pointer transition-colors" />
                        <Bookmark size={16} className="hover:text-orange-500 cursor-pointer transition-colors" />
                      </div>
                    </div>
                  </div>

                  {/* External Icon (Desktop Only) */}
                  <div className="hidden lg:block">
                     <div className="w-12 h-12 rounded-2xl border border-slate-100 dark:border-white/10 flex items-center justify-center text-slate-300 group-hover:text-orange-500 transition-colors">
                        <ExternalLink size={20} />
                     </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* --- PAGINATION/LOAD MORE --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center"
        >
          <button className="px-12 py-5 bg-white dark:bg-slate-900 border-2 border-orange-500 text-orange-500 rounded-full font-black uppercase tracking-widest hover:bg-orange-500 hover:text-white transition-all">
            Load Archive 2025
          </button>
        </motion.div>

      </div>
    </div>
  );
};

export default Bulletins;