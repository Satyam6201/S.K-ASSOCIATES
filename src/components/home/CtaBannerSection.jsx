import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Send } from "lucide-react";
import { Link } from "react-router-dom";

const CtaBannerSection = () => {
  return (
    <section className="py-20 px-6 bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-br from-[#002f56] via-[#005f9e] to-[#007bb6] dark:from-[#020617] dark:via-[#091124] dark:to-[#001524] rounded-[3.5rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl border border-white/10"
        >
          <div className="relative z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-sky-200 text-xs font-black uppercase tracking-widest mb-6 border border-white/20">
              Get Expert Advisory
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
              Ready to Secure Your <br/> Statutory Compliance & Tax Growth?
            </h2>
            <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              Join hundreds of successful enterprises who have optimized their taxes with S.K Associates.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Link to="/query" className="w-full sm:w-auto bg-white text-[#007bb6] px-10 py-5 rounded-2xl font-black text-lg shadow-xl hover:bg-slate-100 transition flex items-center justify-center gap-3">
                  Book Consultation Call <ArrowRight size={20} />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Link to="/contact" className="w-full sm:w-auto bg-white/10 text-white border border-white/30 px-10 py-5 rounded-2xl font-black text-lg backdrop-blur-md hover:bg-white/20 transition flex items-center justify-center gap-2">
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
