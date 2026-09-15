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
    <div className="bg-slate-900/95 text-slate-200 py-2 px-4 md:px-12 flex flex-col sm:flex-row justify-between items-center text-xs border-b border-slate-800 font-medium backdrop-blur-md">
      <div className="flex gap-3 sm:gap-6 items-center flex-wrap justify-center sm:justify-start">
        <a 
          href="tel:+918010257124" 
          className="flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-300 hover:text-sky-400 transition-colors group"
        >
          <Phone size={13} className="text-sky-400 shrink-0 group-hover:scale-110 transition-transform" /> 
          <span>0120-4194983 | +91 8010257124</span>
        </a>

        <a 
          href="mailto:officeska2000@gmail.com" 
          className="items-center gap-1.5 border-l border-slate-700 pl-4 hidden sm:flex text-[11px] sm:text-xs text-slate-300 hover:text-sky-400 transition-colors group"
        >
          <Mail size={13} className="text-sky-400 shrink-0 group-hover:scale-110 transition-transform" /> 
          <span>officeska2000@gmail.com</span>
        </a>
      </div>

      <div className="flex items-center gap-3 mt-1 sm:mt-0 text-[11px] sm:text-xs text-slate-400">
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-emerald-400 font-bold">{istTime} IST</span>
        </div>
        <span className="text-slate-600 hidden md:inline">|</span>
        <div className="flex items-center gap-1.5 hidden md:flex">
          <Clock size={12} className="text-sky-400 shrink-0" />
          <span>Mon - Sat: 10:00 AM - 07:00 PM</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;