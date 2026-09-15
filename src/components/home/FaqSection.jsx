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
    <section className="py-16 sm:py-24 bg-white/75 dark:bg-[#070d1e]/80 backdrop-blur-sm border-b border-slate-200/70 dark:border-[#1a2c56] transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-[#007bb6] dark:text-sky-400 font-black uppercase tracking-widest text-xs">Got Questions?</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white mt-2">Frequently Asked Questions</h2>
        </div>

        {/* FAQ Search Input */}
        <div className="relative mb-8 sm:mb-10 max-w-xl mx-auto">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search tax, GST, or ROC queries..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-14 pr-6 py-3.5 sm:py-4 rounded-2xl bg-slate-50 dark:bg-[#0d1730] border border-slate-200 dark:border-[#1a2c56] text-slate-900 dark:text-white focus:border-[#007bb6] outline-none font-bold text-sm shadow-sm transition-all"
          />
        </div>

        <div className="space-y-4">
          <AnimatePresence>
            {filteredFaqs.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12 bg-slate-50 dark:bg-[#0d1730] rounded-2xl border border-slate-200 dark:border-[#1a2c56]"
              >
                <HelpCircle size={40} className="mx-auto text-slate-400 mb-3" />
                <p className="font-bold text-slate-700 dark:text-slate-300">No matching FAQs found</p>
                <p className="text-xs text-slate-500 mt-1">Try searching for 'tax', 'GST', or 'regime'</p>
                <button
                  onClick={() => setSearch("")}
                  className="mt-4 px-4 py-2 bg-[#007bb6] text-white text-xs font-bold rounded-xl hover:bg-[#006097] transition-all"
                >
                  Clear Search
                </button>
              </motion.div>
            ) : (
              filteredFaqs.map((faq) => {
                const isOpen = openFaq === faq.q;
                return (
                  <motion.div 
                    key={faq.q}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="bg-slate-50/90 dark:bg-[#0d1730] border border-slate-200/80 dark:border-[#1a2c56] rounded-2xl overflow-hidden transition-all shadow-sm hover:border-[#007bb6]/40"
                  >
                    <button 
                      onClick={() => setOpenFaq(isOpen ? null : faq.q)}
                      className="w-full flex justify-between items-center p-5 sm:p-6 text-left font-bold text-slate-900 dark:text-white text-base md:text-lg"
                    >
                      <span className="flex items-center gap-3">
                        <HelpCircle size={20} className="text-[#007bb6] dark:text-sky-400 shrink-0" />
                        {faq.q}
                      </span>
                      <ChevronDown size={20} className={`transition-transform duration-300 shrink-0 ml-4 ${isOpen ? 'rotate-180 text-amber-500' : ''}`} />
                    </button>
                    {isOpen && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-5 sm:px-6 pb-5 sm:pb-6 text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-t border-slate-200/60 dark:border-[#1a2c56] pt-4 font-medium"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </motion.div>
                );
              })
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
