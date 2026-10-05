import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bell, Clock, ArrowRight, Rss, 
  Search, Filter, Share2, Bookmark, 
  ExternalLink, Zap, Flame, Calendar,
  Check, CheckCircle2, X
} from 'lucide-react';
import SEO from '../../components/common/SEO';

const Bulletins = () => {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [bookmarked, setBookmarked] = useState({});
  const [toastMsg, setToastMsg] = useState("");
  const [showArchive, setShowArchive] = useState(false);

  const categories = ["All", "Income Tax", "GST", "Corporate", "Finance"];

  const initialUpdates = [
    { 
      id: 1,
      date: "April 15, 2026", 
      title: "Mandatory Geo-Tagging for Registered Offices of Companies", 
      desc: "MCA extends the deadline for geo-tagging via the V3 portal. Non-compliance may lead to 'Active-Non-Compliant' status under Rule 25A of the Companies (Incorporation) Rules.",
      tag: "Corporate", 
      priority: "High",
      circularNo: "MCA Circular No. 04/2026",
      source: "https://www.mca.gov.in/"
    },
    { 
      id: 2,
      date: "April 10, 2026", 
      title: "CBIC Introduces Automated Scrutiny of GST Returns (ASMT-10)", 
      desc: "New AI-driven module deployed on the GST portal to automatically compare GSTR-1, 3B, and E-Way bills with near-zero manual departmental intervention.",
      tag: "GST", 
      priority: "Critical",
      circularNo: "CBIC Instruction No. 02/2026-GST",
      source: "https://www.gst.gov.in/"
    },
    { 
      id: 3,
      date: "April 02, 2026", 
      title: "Update on SFT Reporting for High-Value Transactions", 
      desc: "Detailed CBDT guidelines for financial institutions on reporting specified financial transactions (SFT) in Statement of Financial Transactions for FY 2025-26.",
      tag: "Income Tax", 
      priority: "Normal",
      circularNo: "CBDT Notification 28/2026",
      source: "https://www.incometax.gov.in/"
    },
    { 
      id: 4,
      date: "March 28, 2026", 
      title: "MSME Payment Rule (Sec 43B(h)) - Year-End Checklist", 
      desc: "Crucial compliance reminders for timely payments to MSMEs within 45/15 days to ensure expense deductibility for the assessment year.",
      tag: "Finance", 
      priority: "High",
      circularNo: "MSMED Act Sec 15 & 43B(h)",
      source: "https://msme.gov.in/"
    },
  ];

  const archiveUpdates = [
    {
      id: 5,
      date: "February 15, 2026",
      title: "Union Budget 2026 Direct Tax Key Highlights",
      desc: "Standard deduction under Section 115BAC retained at ₹75,000; corporate surcharge rationalized for new manufacturing companies.",
      tag: "Income Tax",
      priority: "High",
      circularNo: "Finance Bill 2026",
      source: "https://www.indiabudget.gov.in/"
    },
    {
      id: 6,
      date: "January 10, 2026",
      title: "Mandatory E-Invoicing for B2B Entities above ₹5 Cr",
      desc: "E-invoicing validation made mandatory across all B2B transactions with real-time IRN generation to prevent fake ITC claims.",
      tag: "GST",
      priority: "Critical",
      circularNo: "Notification No. 10/2026-CT",
      source: "https://www.gst.gov.in/"
    }
  ];

  const allUpdates = showArchive ? [...initialUpdates, ...archiveUpdates] : initialUpdates;

  const filteredUpdates = useMemo(() => {
    return allUpdates.filter(u => {
      const matchCat = filter === "All" || u.tag === filter;
      const matchSearch = u.title.toLowerCase().includes(search.toLowerCase()) || 
                          u.desc.toLowerCase().includes(search.toLowerCase()) ||
                          u.circularNo.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [allUpdates, filter, search]);

  const toggleBookmark = (id, title) => {
    setBookmarked(prev => {
      const updated = { ...prev, [id]: !prev[id] };
      showToast(updated[id] ? `Bookmarked: ${title.slice(0, 30)}...` : `Removed bookmark`);
      return updated;
    });
  };

  const shareCircular = (title, circularNo) => {
    if (navigator.share) {
      navigator.share({
        title: title,
        text: `Compliance Alert: ${title} (${circularNo}) - via S.K Associates`,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(`${title} - ${circularNo} | S.K Associates: ${window.location.href}`);
      showToast("Circular link copied to clipboard!");
    }
  };

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(""), 3000);
  };

  return (
    <div className="pt-32 pb-40 px-4 sm:px-6 bg-[#f8fafc] dark:bg-[#020617] min-h-screen text-slate-900 dark:text-slate-100 transition-colors duration-500 selection:bg-orange-500/30">
      <SEO 
        title="Regulatory Compliance Bulletins & Tax Circulars"
        description="Daily statutory circulars, CBDT income tax notifications, CBIC GST advisory, MCA corporate compliance orders, and legal advisories analyzed by Chartered Accountants."
        keywords="Tax Bulletins India, Income Tax Notifications CBDT, GST Circulars CBIC, MCA V3 Portal Notifications, CA Compliance Alerts"
        canonicalPath="/bulletins"
        breadcrumbs={[
          { name: "Knowledge Bank", url: "/bulletins" },
          { name: "Compliance Bulletins", url: "/bulletins" }
        ]}
      />
      
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[30vw] h-[30vw] bg-orange-500/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] right-[10%] w-[30vw] h-[30vw] bg-blue-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto space-y-12">
        
        <div className="grid lg:grid-cols-2 gap-8 items-end">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-500/10 rounded-full text-orange-600 dark:text-orange-400 text-xs font-black uppercase tracking-widest border border-orange-500/20">
              <Flame size={14} className="animate-pulse" />
              <span>Real-Time Regulatory Desk</span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black dark:text-white tracking-tighter leading-none">
              STATUTORY <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500">BULLETINS.</span>
            </h1>
            <p className="text-slate-500 dark:text-slate-400 font-medium text-sm sm:text-base max-w-md">
              Critical GST circulars, CBDT notifications, and MCA V3 regulatory shifts curated by senior Chartered Accountants.
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
            <div className="relative flex-1 sm:w-72">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search circulars, Sec, rules..."
                className="w-full pl-11 pr-4 py-3.5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-white/10 text-xs font-bold outline-none focus:border-orange-500 shadow-sm"
              />
            </div>
            <a 
              href="mailto:officeska2000@gmail.com?subject=Subscribe%20to%20Regulatory%20Alerts"
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-black text-xs uppercase tracking-wider hover:scale-105 transition-all shadow-xl shrink-0"
            >
              <span>Subscribe</span> <Bell size={14} />
            </a>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex overflow-x-auto no-scrollbar gap-2 p-1.5 bg-white dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl w-fit">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider transition-all whitespace-nowrap ${
                filter === cat 
                ? "bg-orange-500 text-white shadow-md shadow-orange-500/30" 
                : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Bulletins List */}
        <div className="grid gap-6">
          <AnimatePresence mode="popLayout">
            {filteredUpdates.map((news, i) => (
              <motion.div
                key={news.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.06 }}
                className="group relative bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200/80 dark:border-white/5 p-6 sm:p-8 lg:p-10 shadow-xl hover:shadow-2xl dark:hover:border-orange-500/30 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                  
                  <div className="flex-shrink-0 flex md:flex-col items-center justify-center w-full md:w-24 h-16 md:h-24 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/5">
                    <Calendar className="md:hidden text-orange-500 mr-2" size={18} />
                    <span className="text-xl md:text-3xl font-black dark:text-white leading-none">{news.date.split(' ')[1].replace(',', '')}</span>
                    <span className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-widest md:mt-1">{news.date.split(' ')[0]}</span>
                  </div>

                  <div className="flex-grow space-y-3">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-wider ${
                        news.priority === "Critical" ? "bg-red-500 text-white" : 
                        news.priority === "High" ? "bg-orange-500 text-white" : "bg-blue-500 text-white"
                      }`}>
                        {news.priority} Priority
                      </span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        {news.circularNo}
                      </span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                        <Clock size={12} /> 4 min read
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black dark:text-white leading-tight group-hover:text-orange-500 transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 font-medium text-xs sm:text-sm leading-relaxed max-w-3xl">
                      {news.desc}
                    </p>

                    <div className="pt-4 flex items-center justify-between">
                      <a 
                        href={news.source} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-orange-600 dark:text-orange-400 font-black text-xs uppercase tracking-wider flex items-center gap-2 group/btn hover:underline"
                      >
                        Official Notification <ExternalLink size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                      </a>

                      <div className="flex gap-2">
                        <button 
                          onClick={() => shareCircular(news.title, news.circularNo)}
                          aria-label="Share circular"
                          className="p-2.5 rounded-xl bg-slate-50 dark:bg-white/5 text-slate-400 hover:text-orange-500 transition-colors"
                        >
                          <Share2 size={16} />
                        </button>
                        <button 
                          onClick={() => toggleBookmark(news.id, news.title)}
                          aria-label="Bookmark circular"
                          className={`p-2.5 rounded-xl bg-slate-50 dark:bg-white/5 transition-colors ${
                            bookmarked[news.id] ? 'text-orange-500' : 'text-slate-400 hover:text-orange-500'
                          }`}
                        >
                          <Bookmark size={16} className={bookmarked[news.id] ? 'fill-orange-500' : ''} />
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredUpdates.length === 0 && (
            <div className="py-20 text-center space-y-3 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800">
              <Search size={36} className="mx-auto text-slate-400" />
              <h4 className="text-xl font-bold dark:text-white">No bulletins match your search</h4>
              <p className="text-xs text-slate-400">Try searching for another keyword or clear your filter.</p>
              <button onClick={() => { setSearch(""); setFilter("All"); }} className="px-4 py-2 bg-orange-500 text-white rounded-xl text-xs font-bold">
                Reset Filters
              </button>
            </div>
          )}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center pt-8"
        >
          <button 
            onClick={() => setShowArchive(!showArchive)}
            className="px-10 py-4 bg-white dark:bg-slate-900 border-2 border-orange-500 text-orange-500 rounded-full font-black text-xs uppercase tracking-widest hover:bg-orange-500 hover:text-white transition-all shadow-lg"
          >
            {showArchive ? 'Collapse Archive' : 'Load Archive 2025-2026'}
          </button>
        </motion.div>

      </div>

      {/* Toast notification */}
      <AnimatePresence>
        {toastMsg && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[300] px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl shadow-2xl text-xs font-bold flex items-center gap-2 border border-white/20"
          >
            <CheckCircle2 size={16} className="text-emerald-400" />
            <span>{toastMsg}</span>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Bulletins;