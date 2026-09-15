import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Calculator, ShieldCheck, Award, Users, Landmark } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const heroRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll();
  const smoothY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const scale = useTransform(smoothY, [0, 0.2], [1, 0.95]);

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    });
  };

  const metrics = [
    { label: "GST Returns Filed", value: "10,000+", icon: <ShieldCheck size={20} className="text-sky-400" /> },
    { label: "Corporate Clients", value: "500+", icon: <Users size={20} className="text-amber-400" /> },
    { label: "Appeals Win Rate", value: "99.9%", icon: <Award size={20} className="text-emerald-400" /> },
    { label: "Years of Excellence", value: "08+ Yrs", icon: <Landmark size={20} className="text-indigo-400" /> }
  ];

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#00284d] via-[#00558f] to-[#007bb6] dark:from-[#050b18] dark:via-[#09132d] dark:to-[#070e24] pt-20 sm:pt-28 pb-16 transition-colors duration-500"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.25, 1], opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-20 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-sky-400/20 dark:bg-blue-600/20 rounded-full blur-[100px] sm:blur-[130px]" 
        />
        <motion.div 
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 -right-20 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-amber-500/15 dark:bg-sky-500/15 rounded-full blur-[100px] sm:blur-[130px]" 
        />
        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-[#007bb6]/20 dark:from-[#060b18] to-transparent" />
      </div>

      <motion.div
        style={{ 
          rotateY: mousePos.x * 8, 
          rotateX: -mousePos.y * 8,
          scale 
        }}
        className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto w-full"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-5 py-2 rounded-full bg-white/10 dark:bg-white/5 border border-white/20 text-sky-200 dark:text-sky-300 text-[11px] sm:text-xs md:text-sm font-bold mb-6 sm:mb-8 backdrop-blur-md shadow-xl"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500"></span>
          </span>
          <span>Trusted Tax & Legal Counsel for 500+ Enterprises Across India</span>
        </motion.div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white leading-[1.05] tracking-tighter drop-shadow-lg">
          S.K <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-white to-amber-300 dark:from-[#38bdf8] dark:via-white dark:to-sky-400">ASSOCIATES</span>
        </h1>

        <p className="mt-6 sm:mt-8 text-base sm:text-xl md:text-2xl text-slate-100 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium px-2">
          Bridging the gap between <span className="text-amber-300 dark:text-amber-400 font-bold">Complex Statutory Compliance</span> and <span className="text-sky-300 dark:text-sky-400 font-bold">Business Growth</span> with expert CA & Legal counsel since 2017.
        </p>

        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center w-full px-4">
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="w-full sm:w-auto">
            <Link
              to="/query"
              className="w-full sm:w-auto bg-[#007bb6] hover:bg-sky-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-black text-base sm:text-lg flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(0,123,182,0.4)] transition-all group"
            >
              Start Free Consultation <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="w-full sm:w-auto">
            <Link
              to="/calculators"
              className="w-full sm:w-auto border-2 border-white/30 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg hover:bg-white/10 backdrop-blur-md transition-all flex items-center justify-center gap-2"
            >
              <Calculator size={18} /> Tax Calculators
            </Link>
          </motion.div>
        </div>

        <div className="mt-14 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto pt-8 sm:pt-10 border-t border-white/20">
          {metrics.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-3.5 sm:p-5 rounded-2xl bg-white/10 dark:bg-[#0d1730]/70 backdrop-blur-xl border border-white/10 dark:border-slate-800 text-left shadow-lg group cursor-default"
            >
              <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                <div className="p-1.5 sm:p-2 rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors shrink-0">
                  {item.icon}
                </div>
                <span className="text-xl sm:text-2xl md:text-3xl font-black text-white">{item.value}</span>
              </div>
              <p className="text-[10px] sm:text-xs font-bold text-slate-200 dark:text-slate-400 uppercase tracking-wider">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
