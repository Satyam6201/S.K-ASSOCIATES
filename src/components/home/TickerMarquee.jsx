import React from "react";
import { motion } from "framer-motion";
import { Target, ShieldCheck, Zap, Briefcase, Award, Landmark } from "lucide-react";

const TickerMarquee = () => {
  const items = [
    { text: "Income Tax Advisory", icon: <Target className="text-amber-300" /> },
    { text: "GST ITC Optimization", icon: <ShieldCheck className="text-sky-200" /> },
    { text: "Startup India Registration", icon: <Zap className="text-amber-300" /> },
    { text: "Statutory & Tax Audit", icon: <Briefcase className="text-sky-200" /> },
    { text: "ROC Annual Compliances", icon: <Landmark className="text-amber-300" /> },
    { text: "Virtual CFO Services", icon: <Award className="text-sky-200" /> },
  ];

  return (
    <div className="bg-[#007bb6] dark:bg-[#09152b] py-5 overflow-hidden flex whitespace-nowrap border-y border-white/10 shadow-inner">
      <motion.div 
        animate={{ x: ["0%", "-50%"] }} 
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex gap-16 items-center text-white font-black text-lg md:text-xl uppercase tracking-tighter"
      >
        {[...Array(6)].map((_, loopIdx) => (
          <React.Fragment key={loopIdx}>
            {items.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
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
