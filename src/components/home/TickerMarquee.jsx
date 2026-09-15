import React, { useState } from "react";
import { motion } from "framer-motion";
import { Target, ShieldCheck, Zap, Briefcase, Award, Landmark } from "lucide-react";

const TickerMarquee = () => {
  const [isPaused, setIsPaused] = useState(false);

  const items = [
    { text: "Income Tax Advisory", icon: <Target className="text-amber-300" size={18} /> },
    { text: "GST ITC Optimization", icon: <ShieldCheck className="text-sky-200" size={18} /> },
    { text: "Startup India Registration", icon: <Zap className="text-amber-300" size={18} /> },
    { text: "Statutory & Tax Audit", icon: <Briefcase className="text-sky-200" size={18} /> },
    { text: "ROC Annual Compliances", icon: <Landmark className="text-amber-300" size={18} /> },
    { text: "Virtual CFO Services", icon: <Award className="text-sky-200" size={18} /> },
  ];

  return (
    <div 
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative bg-[#007bb6] dark:bg-[#09152b] py-5 overflow-hidden flex whitespace-nowrap border-y border-white/10 shadow-inner group"
    >
      {/* Edge gradient fade masks */}
      <div className="absolute left-0 inset-y-0 w-16 bg-gradient-to-r from-[#007bb6] dark:from-[#09152b] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-16 bg-gradient-to-l from-[#007bb6] dark:from-[#09152b] to-transparent z-10 pointer-events-none" />

      <motion.div 
        animate={{ x: isPaused ? undefined : ["0%", "-50%"] }} 
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="flex gap-16 items-center text-white font-black text-base md:text-lg uppercase tracking-wider cursor-default select-none"
      >
        {[...Array(6)].map((_, loopIdx) => (
          <React.Fragment key={loopIdx}>
            {items.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 hover:text-amber-300 transition-colors">
                <span>{item.text}</span>
                {item.icon}
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default TickerMarquee;
