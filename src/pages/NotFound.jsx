import React from 'react';
import { motion } from 'framer-motion';
import { Home, Compass, Calculator, FileText, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 flex items-center justify-center bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-white transition-colors duration-500 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/15 dark:bg-sky-500/10 rounded-full blur-[100px]" 
        />
        <motion.div 
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/15 dark:bg-amber-500/10 rounded-full blur-[100px]" 
        />
      </div>

      <div className="max-w-2xl w-full mx-auto text-center relative z-10 space-y-8">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-28 h-28 mx-auto rounded-[2.5rem] bg-gradient-to-tr from-[#007bb6] to-sky-400 text-white flex items-center justify-center shadow-2xl shadow-blue-500/30 border border-white/20"
        >
          <Compass size={56} className="animate-spin-slow" />
        </motion.div>

        <div>
          <span className="px-4 py-1.5 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 text-xs font-black uppercase tracking-widest border border-rose-500/20">
            Error 404 • Page Not Found
          </span>
          <h1 className="text-6xl sm:text-8xl font-black tracking-tighter mt-4 text-slate-900 dark:text-white leading-none">
            Lost in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007bb6] via-sky-400 to-amber-500">Compliance?</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-4 text-base sm:text-lg font-medium leading-relaxed max-w-lg mx-auto">
            The statutory page or document you are searching for might have been regularized, amended, or moved to a new regulatory section.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            to="/"
            className="w-full sm:w-auto px-8 py-4 bg-[#007bb6] hover:bg-blue-700 text-white font-black rounded-2xl flex items-center justify-center gap-2 shadow-xl shadow-blue-500/25 transition-all text-sm uppercase tracking-wider"
          >
            <Home size={18} /> Return to Homepage
          </Link>
          <Link
            to="/calculators"
            className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all text-sm"
          >
            <Calculator size={18} className="text-[#007bb6] dark:text-sky-400" /> Tax Calculators
          </Link>
        </div>

        <div className="p-6 bg-white dark:bg-slate-900/80 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xl text-left space-y-4">
          <p className="text-xs font-black uppercase tracking-wider text-slate-400 text-center">Looking for one of these?</p>
          <div className="grid sm:grid-cols-3 gap-3">
            <Link 
              to="/income-tax" 
              className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-slate-700 transition flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-200"
            >
              <FileText size={16} className="text-[#007bb6]" /> Income Tax
            </Link>
            <Link 
              to="/gst" 
              className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-slate-700 transition flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-200"
            >
              <FileText size={16} className="text-orange-500" /> GST Filings
            </Link>
            <Link 
              to="/contact" 
              className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-slate-700 transition flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-200"
            >
              <Phone size={16} className="text-emerald-500" /> Contact Desk
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
