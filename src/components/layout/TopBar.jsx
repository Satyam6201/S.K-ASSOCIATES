import React, { useState, useEffect } from 'react';
import { Phone, Mail, Clock } from 'lucide-react';

const TopBar = () => {
  const [istTime, setIstTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options = { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
      setIstTime(new Date().toLocaleTimeString('en-US', options));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0b1528] dark:bg-[#060b18] text-slate-200 py-2 px-3 sm:px-6 md:px-12 flex justify-between items-center text-xs border-b border-slate-800/80 font-medium backdrop-blur-md transition-colors duration-500">
      <div className="flex gap-2 sm:gap-6 items-center">
        <a 
          href="tel:+918010257124" 
          className="flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-300 hover:text-sky-400 transition-colors group"
        >
          <Phone size={12} className="text-sky-400 shrink-0 group-hover:scale-110 transition-transform" /> 
          <span className="hidden sm:inline text-slate-400">0120-4194983 | </span>
          <span className="font-semibold text-white sm:text-slate-200">+91 80102 57124</span>
        </a>

        <a 
          href="mailto:officeska2000@gmail.com" 
          className="items-center gap-1.5 border-l border-slate-700/80 pl-4 hidden md:flex text-xs text-slate-300 hover:text-sky-400 transition-colors group"
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