import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, Search } from "lucide-react";

const FaqSection = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [search, setSearch] = useState("");

  const faqs = [
    {
      q: "What tax and legal services does S.K Associates specialize in?",
      a: "We specialize in end-to-end Income Tax planning & scrutiny defence, GST returns & ITC refunds, Statutory Audits, MCA ROC filings, Startup India incorporation, and Virtual CFO services."
    },
    {
      q: "How fast can you file my GST returns or Company Incorporation?",
      a: "GST returns are processed within 24-48 hours of document receipt. Company incorporation is completed within 3 to 5 business days subject to MCA SPICe+ approval."
    },
    {
      q: "Which Income Tax regime is better for FY 2025-26?",
      a: "The New Tax Regime (u/s 115BAC) offers lower rates with a ₹75,000 standard deduction and full tax rebate up to ₹7 Lakhs taxable income. If you have deductions above ₹3.75 Lakhs (80C, 80D, HRA), the Old Regime may still save more. Use our interactive calculator to check!"
    },
    {
      q: "Can S.K Associates represent my firm during Income Tax Scrutiny or GST Appeals?",
      a: "Yes. Our senior CA and legal team represents clients directly before the Income Tax Department, CIT (Appeals), and GST Appellate authorities across India."
    },
    {
      q: "What documents are required for Private Limited Company Registration?",
      a: "You need PAN Card, Aadhaar Card, Passport-size photo, Bank statement (less than 2 months old), and Electricity Bill/Rent Agreement with NOC for the registered office."
    }
  ];

  const filteredFaqs = faqs.filter(f => 
    f.q.toLowerCase().includes(search.toLowerCase()) || 
    f.a.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="py-24 bg-white dark:bg-[#020617] transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-[#007bb6] dark:text-sky-400 font-black uppercase tracking-widest text-xs">Got Questions?</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mt-2">Frequently Asked Questions</h2>
        </div>

        {/* FAQ Search Input */}
        <div className="relative mb-10 max-w-xl mx-auto">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search tax, GST, or ROC queries..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-14 pr-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:border-[#007bb6] outline-none font-bold text-sm shadow-sm transition-all"
          />
        </div>

        <div className="space-y-4">
          <AnimatePresence>
            {filteredFaqs.map((faq, idx) => (
              <motion.div 
                key={faq.q}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl overflow-hidden transition-all shadow-sm hover:border-[#007bb6]/40"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex justify-between items-center p-6 text-left font-bold text-slate-900 dark:text-white text-base md:text-lg"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle size={20} className="text-[#007bb6] dark:text-sky-400 shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown size={20} className={`transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-amber-500' : ''}`} />
                </button>
                {openFaq === idx && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6 text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-t border-slate-200/60 dark:border-slate-800 pt-4 font-medium"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
