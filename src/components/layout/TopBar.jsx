import React from 'react';
import { Phone, Mail, Clock } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-slate-900 text-slate-200 py-2 px-4 md:px-12 flex flex-col sm:flex-row justify-between items-center text-xs border-b border-slate-700 font-medium">
      <div className="flex gap-4 sm:gap-6 items-center">
        <span className="flex items-center gap-1.5 text-[11px] sm:text-xs">
          <Phone size={13} className="text-sky-400 shrink-0" /> 0120-4194983 | +91 8010257124
        </span>
        <span className="flex items-center gap-1.5 border-l border-slate-600 pl-4 hidden sm:flex text-[11px] sm:text-xs">
          <Mail size={13} className="text-sky-400 shrink-0" /> officeska2000@gmail.com
        </span>
      </div>
      <div className="flex items-center gap-1.5 mt-1 sm:mt-0 text-[11px] sm:text-xs text-slate-400">
        <Clock size={13} className="text-sky-400 shrink-0" /> Mon - Sat: 10:00 AM - 07:00 PM
      </div>
    </div>
  );
};

export default TopBar;