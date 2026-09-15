import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const CtaBannerSection = () => {
  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 bg-transparent transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-br from-[#002f56] via-[#005f9e] to-[#007bb6] dark:from-[#070d1e] dark:via-[#0f1f44] dark:to-[#070d1e] rounded-3xl sm:rounded-[3.5rem] p-8 sm:p-14 md:p-24 text-center relative overflow-hidden shadow-2xl border border-white/15 dark:border-[#1a2c56]"
        >
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-sky-400/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-sky-200 text-xs font-black uppercase tracking-widest mb-6 border border-white/20">
              Get Expert Advisory
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white mb-6 sm:mb-8 leading-tight">
              Ready to Secure Your <br className="hidden sm:block" /> Statutory Compliance & Tax Growth?
            </h2>
            <p className="text-blue-100 text-base sm:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              Join hundreds of successful enterprises who have optimized their taxes with S.K Associates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Link to="/query" className="w-full sm:w-auto bg-white text-[#007bb6] px-6 sm:px-10 py-4 sm:py-5 rounded-2xl font-black text-base sm:text-lg shadow-xl hover:bg-slate-100 transition flex items-center justify-center gap-3">
                  Book Consultation Call <ArrowRight size={20} />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Link to="/contact" className="w-full sm:w-auto bg-white/10 text-white border border-white/30 px-6 sm:px-10 py-4 sm:py-5 rounded-2xl font-black text-base sm:text-lg backdrop-blur-md hover:bg-white/20 transition flex items-center justify-center gap-2">
                  <Phone size={18} /> Contact Our Office
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaBannerSection;
