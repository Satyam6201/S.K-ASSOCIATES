import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Book, Search, ExternalLink, FileText, Gavel, Sparkles, ShieldCheck, X } from 'lucide-react';
import SEO from '../../components/common/SEO';

const ActsRules = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const legalData = [
    { title: "Income Tax Act, 1961", category: "Direct Tax", year: "1961 (Amended)", link: "https://www.indiacode.nic.in/bitstream/123456789/2435/1/a1961-43.pdf", desc: "Comprehensive statutory framework governing individual and corporate direct taxation in India." },
    { title: "Companies Act, 2013", category: "Corporate Law", year: "2013 (Amended)", link: "https://www.indiacode.nic.in/bitstream/123456789/2114/5/A2013-18.pdf", desc: "Primary legislation regulating company incorporation, board duties, statutory audit, and MCA filings." },
    { title: "Central Goods and Services Tax (CGST) Act, 2017", category: "Indirect Tax", year: "2017", link: "https://cbic-gst.gov.in/pdf/CGST-Act-Updated-30092020.pdf", desc: "Foundational legislation governing intra-state supply of goods and services, ITC mechanisms, and penalties." },
    { title: "Limited Liability Partnership (LLP) Act, 2008", category: "Corporate Law", year: "2008", link: "https://upload.indiacode.nic.in/view-casepdf?type=act&id=AC_CEN_22_29_00007_200906_1517807325904", desc: "Framework governing formation, governance, and annual filings of Limited Liability Partnerships." },
    { title: "Finance Act, 2024 / 2025", category: "Budget", year: "2024-25", link: "https://www.indiabudget.gov.in/budget2024-25/doc/Finance_Bill.pdf", desc: "Enacts statutory tax amendments, updated slab rates u/s 115BAC, and capital gains rate updates." },
    { title: "Foreign Exchange Management Act (FEMA), 1999", category: "Corporate Law", year: "1999", link: "https://www.rbi.org.in/scripts/Fema.aspx", desc: "Regulations facilitating external trade, foreign investment (FDI/ODI), and overseas remittance compliance." },
  ];

  const categories = ["All", "Direct Tax", "Indirect Tax", "Corporate Law", "Budget"];

  const filtered = legalData.filter(item => {
    const matchesCat = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.desc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 bg-gradient-to-b from-[#f4f7fb] via-[#eaf2fb] to-[#f4f7fb] dark:from-[#070d1e] dark:via-[#0c1630] dark:to-[#070d1e] min-h-screen text-slate-900 dark:text-slate-100 transition-colors duration-500">
      <SEO 
        title="Indian Tax Acts, Statutes & Corporate Law Library"
        description="Comprehensive repository of Indian statutory acts: Income Tax Act 1961, Companies Act 2013, CGST Act 2017, LLP Act 2008, FEMA, and latest Finance Acts."
        keywords="Income Tax Act 1961 Bare Act, Companies Act 2013, CGST Act 2017, Finance Act 2024 2025, Indian Tax Statutes"
        canonicalPath="/acts"
        breadcrumbs={[
          { name: "Knowledge Bank", url: "/acts" },
          { name: "Acts & Statutes", url: "/acts" }
        ]}
      />
      <div className="max-w-6xl mx-auto">
        
        <header className="mb-12 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-[#007bb6] dark:text-sky-400 text-xs font-black uppercase tracking-widest mb-4 border border-blue-500/20">
            <Sparkles size={14} className="text-amber-500" /> Official Statutory Repository
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-5xl md:text-6xl font-black dark:text-white mb-4 tracking-tight"
          >
            Acts & Regulatory <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-400 to-amber-500">Statutes</span>
          </motion.h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base font-medium max-w-2xl mb-8">
            Access verified and authenticated PDFs of Indian Statutory Acts directly from government repositories (India Code, CBIC, and Ministry of Finance).
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative w-full sm:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                id="acts-search-input"
                aria-label="Search Acts, Rules, or Statutes"
                type="text" 
                value={searchTerm}
                placeholder="Search Acts, Rules, or Statutes..."
                className="w-full pl-12 pr-10 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 dark:text-white focus:border-[#007bb6] outline-none transition-all text-sm font-medium shadow-sm"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm("")} 
                  aria-label="Clear search input"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            <div className="flex overflow-x-auto no-scrollbar gap-1.5 w-full sm:w-auto p-1 bg-white/80 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                    selectedCategory === cat
                      ? "bg-[#007bb6] text-white shadow-md"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-blue-50 dark:bg-blue-500/10 rounded-2xl text-[#007bb6] dark:text-sky-400 group-hover:scale-110 transition-transform">
                      <Book size={24} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-black dark:text-white mb-2 group-hover:text-[#007bb6] dark:group-hover:text-sky-400 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400">{item.year}</span>
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#007bb6] dark:text-sky-400 hover:underline group-hover:gap-2 transition-all"
                  >
                    View Official Act <ExternalLink size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800">
            <Book size={40} className="mx-auto text-slate-400 mb-3" />
            <h4 className="font-black text-slate-800 dark:text-white">No statutory acts found</h4>
            <p className="text-xs text-slate-500 mt-1">Try clearing your search terms or category filter.</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default ActsRules;