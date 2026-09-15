import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, ShieldCheck } from 'lucide-react';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "918010257124"; 

  const quickPrompts = [
    { label: "Tax Scrutiny Help", query: "Hello SK Associates, I received an Income Tax scrutiny notice and need urgent advisory." },
    { label: "GST Return & ITC", query: "Hello SK Associates, I need assistance with GST 2B reconciliation and return filing." },
    { label: "Startup Pvt Ltd", query: "Hello SK Associates, I want to register a new Private Limited Company." },
    { label: "Statutory Audit", query: "Hello SK Associates, I would like to inquire about Tax Audit u/s 44AB services." },
  ];

  const handleOpenWhatsApp = (customText) => {
    const text = customText || "Hello S.K Associates, I would like to inquire about your tax and corporate advisory services.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-[120] flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="w-80 sm:w-96 bg-white dark:bg-[#0d1730] rounded-[2rem] shadow-2xl border border-slate-200 dark:border-[#1a2c56] overflow-hidden mb-2"
          >
            <div className="bg-[#007bb6] p-5 text-white flex justify-between items-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-xl pointer-events-none" />
              <div className="flex items-center gap-3 relative z-10">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-black text-sm">
                    SKA
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-white rounded-full"></span>
                </div>
                <div>
                  <h4 className="font-black text-sm leading-tight">S.K Associates Helpdesk</h4>
                  <p className="text-[11px] text-sky-200 flex items-center gap-1 font-medium">
                    <ShieldCheck size={12} /> Senior CA Desk • Online
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full hover:bg-white/20 transition relative z-10 text-white"
                aria-label="Close Chat"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-5 space-y-4 bg-slate-50/50 dark:bg-[#070d1e]/50">
              <div className="p-4 rounded-2xl bg-white dark:bg-[#15244a]/50 border border-slate-100 dark:border-[#1a2c56] shadow-sm text-xs leading-relaxed text-slate-700 dark:text-slate-200">
                👋 Welcome to S.K Associates! Connect directly with our Senior CA & Legal team on WhatsApp for instant guidance.
              </div>

              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Tap a topic to chat:</p>
                <div className="grid grid-cols-2 gap-2">
                  {quickPrompts.map((p, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleOpenWhatsApp(p.query)}
                      className="p-2.5 rounded-xl bg-white dark:bg-[#15244a]/60 hover:bg-emerald-50 dark:hover:bg-[#1c3060] border border-slate-200/80 dark:border-[#1a2c56] text-left transition-all group"
                    >
                      <span className="text-[11px] font-bold text-slate-800 dark:text-slate-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 flex items-center justify-between">
                        {p.label}
                        <Send size={10} className="opacity-0 group-hover:opacity-100 transition-opacity text-emerald-500" />
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-[#0d1730] border-t border-slate-100 dark:border-[#1a2c56]">
              <button
                onClick={() => handleOpenWhatsApp()}
                className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-emerald-600 text-white font-black text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition"
              >
                <MessageCircle size={16} /> Start WhatsApp Chat
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-2">
        {!isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-[#0d1730] text-slate-800 dark:text-slate-200 rounded-full shadow-lg border border-slate-200 dark:border-[#1a2c56] text-xs font-bold"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span>Priority WhatsApp Desk</span>
          </motion.div>
        )}

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          aria-label="Open WhatsApp chat"
          className="relative w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-[0_12px_35px_rgba(37,211,102,0.45)] transition-all"
        >
          {isOpen ? (
            <X size={26} />
          ) : (
            <>
              <MessageCircle size={30} />
              <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none" />
              <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-rose-500 border-2 border-white rounded-full"></span>
            </>
          )}
        </motion.button>
      </div>

    </div>
  );
};

export default WhatsAppWidget;