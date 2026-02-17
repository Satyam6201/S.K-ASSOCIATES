import React from 'react';
import { Phone, Mail, Clock } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-slate-900 text-slate-200 py-2 px-4 md:px-12 flex flex-col md:flex-row justify-between items-center text-xs border-b border-slate-700">
      <div className="flex gap-6 items-center">
        <span className="flex items-center gap-2">
          <Phone size={14} className="text-sky-400" /> 0120-4194983 | +91 8010257124
        </span>
        <span className="flex items-center gap-2 border-l border-slate-600 pl-6 hidden sm:flex">
          <Mail size={14} className="text-sky-400" /> officeska2000@gmail.com
        </span>
      </div>
      <div className="flex items-center gap-2 mt-1 md:mt-0">
        <Clock size={14} className="text-sky-400" /> Mon - Sat: 10:00 AM - 07:00 PM
      </div>
    </div>
  );
};

export default TopBar;