import React, { useState, useEffect } from 'react';
import { Phone, Mail, Clock } from 'lucide-react';

const istFormatter = new Intl.DateTimeFormat('en-US', {
  timeZone: 'Asia/Kolkata',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: true,
});

const TopBar = () => {
  const [istTime, setIstTime] = useState(() => istFormatter.format(new Date()));

  useEffect(() => {
    const updateTime = () => setIstTime(istFormatter.format(new Date()));
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0b1528] dark:bg-[#060b18] text-slate-200 py-2 px-3 sm:px-6 md:px-12 flex justify-between items-center text-xs border-b border-slate-800/80 font-medium backdrop-blur-md transition-colors duration-500">
      <div className="flex gap-2 sm:gap-6 items-center">
        <a 
          href="tel:+918010257124" 
          aria-label="Call S.K Associates at +91 80102 57124"
          className="flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-300 hover:text-sky-400 transition-colors group py-1"
        >
          <Phone size={12} className="text-sky-400 shrink-0 group-hover:scale-110 transition-transform" /> 
          <span className="hidden sm:inline text-slate-400">0120-4194983 | </span>
          <span className="font-semibold text-white sm:text-slate-200">+91 80102 57124</span>
        </a>

        <a 
          href="mailto:officeska2000@gmail.com" 
          aria-label="Email S.K Associates at officeska2000@gmail.com"
          className="items-center gap-1.5 border-l border-slate-700/80 pl-4 hidden md:flex text-xs text-slate-300 hover:text-sky-400 transition-colors group py-1"
        >
          <Mail size={12} className="text-sky-400 shrink-0 group-hover:scale-110 transition-transform" /> 
          <span>officeska2000@gmail.com</span>
        </a>
      </div>

      <div className="flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs text-slate-400">
        <div className="flex items-center gap-1.5 bg-emerald-500/10 dark:bg-emerald-500/15 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-emerald-400 font-bold tracking-tight">{istTime || 'IST'}</span>
        </div>
        <span className="text-slate-700 hidden lg:inline">|</span>
        <div className="flex items-center gap-1.5 hidden lg:flex text-slate-300">
          <Clock size={12} className="text-amber-400 shrink-0" />
          <span>Mon - Sat: 10 AM - 7 PM IST</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;