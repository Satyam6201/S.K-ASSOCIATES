import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Book, Search, ExternalLink, FileText, Gavel } from 'lucide-react';

const ActsRules = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const legalData = [
    { title: "Income Tax Act, 1961", category: "Direct Tax", year: "1961", link: "#" },
    { title: "Companies Act, 2013", category: "Corporate Law", year: "2013", link: "#" },
    { title: "CGST Act, 2017", category: "Indirect Tax", year: "2017", link: "#" },
    { title: "LLP Act, 2008", category: "Corporate Law", year: "2008", link: "#" },
    { title: "Finance Act, 2024", category: "Budget", year: "2024", link: "#" },
  ];

  const filtered = legalData.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-32 pb-20 px-6 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-black dark:text-white mb-4 flex items-center gap-3"
          >
            <Gavel className="text-blue-600" /> Acts & Rules Gallery
          </motion.h1>
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Search Acts, Rules or Sections..."
              className="w-full pl-12 pr-6 py-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5 }}
              className="p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-blue-50 dark:bg-blue-500/10 rounded-xl text-blue-600">
                  <Book size={24} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full dark:text-slate-400">
                  {item.category}
                </span>
              </div>
              <h3 className="text-lg font-bold dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-slate-500 mb-6">Standard legal reference for {item.year}.</p>
              <a href={item.link} className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:underline">
                View Full Act <ExternalLink size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActsRules;