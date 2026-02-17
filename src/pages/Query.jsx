import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, FileCheck, User, Phone, MessageSquare, 
  ClipboardList, Upload, CheckCircle2, ShieldCheck, 
  Zap, Clock, Sparkles, HelpCircle
} from 'lucide-react';

const Query = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API Call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) return <SuccessState />;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-32 px-6 relative overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* --- Left Column: Value Proposition --- */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-4 space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-600 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                <Sparkles size={14} /> Priority Support
              </div>
              <h1 className="text-5xl font-black dark:text-white leading-[1.1]">
                Expert <span className="text-blue-600">Financial</span> Guidance.
              </h1>
              <p className="text-slate-500 dark:text-slate-400 mt-4 leading-relaxed">
                Connect with our specialized team for a detailed audit of your tax and corporate compliance status.
              </p>
            </div>

            <div className="space-y-4">
              <FeatureCard icon={<Clock />} title="24h Response" desc="Guaranteed reply within 1 business day." color="blue" />
              <FeatureCard icon={<ShieldCheck />} title="Encrypted" desc="Your financial data is fully protected." color="emerald" />
              <FeatureCard icon={<Zap />} title="Direct Action" desc="Get practical steps, not just advice." color="orange" />
            </div>

            <div className="p-6 bg-slate-100 dark:bg-slate-900 rounded-[2rem] border border-dashed border-slate-300 dark:border-slate-700">
              <p className="text-xs font-bold text-slate-400 uppercase mb-3 flex items-center gap-2">
                <HelpCircle size={14} /> Need immediate help?
              </p>
              <p className="text-sm dark:text-slate-300">Call our helpline: <span className="font-bold text-blue-600">+91 91361-55551</span></p>
            </div>
          </motion.div>

          {/* --- Right Column: The Modern Form --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-[3.5rem] shadow-2xl shadow-blue-500/5 border border-slate-100 dark:border-slate-800 p-8 md:p-12 relative"
          >
            {/* Step Indicator */}
            <div className="flex gap-4 mb-10">
              {[1, 2].map((i) => (
                <div key={i} className={`h-1.5 flex-grow rounded-full transition-all duration-500 ${step >= i ? 'bg-blue-600' : 'bg-slate-100 dark:bg-slate-800'}`} />
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <AnimatePresence mode="wait">
                {step === 1 ? (
                  <motion.div 
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormInput label="Full Name" icon={<User size={18}/>} placeholder="Sunil Chaudhary" />
                      <FormInput label="WhatsApp Number" icon={<Phone size={18}/>} placeholder="+91 00000-00000" />
                    </div>
                    <FormInput label="Business/Personal Email" icon={<Send size={18}/>} placeholder="office@example.com" />
                    <button 
                      type="button"
                      onClick={() => setStep(2)}
                      className="w-full bg-slate-900 dark:bg-white dark:text-slate-900 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-blue-600 dark:hover:bg-blue-600 dark:hover:text-white transition-all"
                    >
                      Next Details <ArrowRight size={20}/>
                    </button>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase text-slate-400 tracking-widest ml-1">Service Required</label>
                      <select className="w-full p-5 rounded-2xl bg-slate-50 dark:bg-slate-800 dark:text-white border-none focus:ring-2 focus:ring-blue-500 outline-none appearance-none cursor-pointer font-bold">
                        <option>Tax Scrutiny / Assessment</option>
                        <option>GST Refund Issue</option>
                        <option>New Company Incorporation</option>
                        <option>Internal Audit Inquiry</option>
                        <option>Other Legal Query</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase text-slate-400 tracking-widest ml-1">Upload Relevant Document (Optional)</label>
                      <label className="w-full p-8 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-3xl flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-blue-500/5 hover:border-blue-500 transition-all group">
                        <Upload className="text-slate-400 group-hover:text-blue-500 group-hover:bounce" size={32} />
                        <span className="text-sm font-bold text-slate-500">Click to upload PDF or Image</span>
                        <input type="file" className="hidden" />
                      </label>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase text-slate-400 tracking-widest ml-1">Case Description</label>
                      <textarea rows="4" className="w-full p-5 rounded-2xl bg-slate-50 dark:bg-slate-800 dark:text-white border-none focus:ring-2 focus:ring-blue-500 outline-none font-medium" placeholder="Briefly describe your situation..."></textarea>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 pt-4">
                      <button type="button" onClick={() => setStep(1)} className="py-5 rounded-2xl font-bold text-slate-500 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition-all">Go Back</button>
                      <button 
                        disabled={isSubmitting}
                        className="bg-blue-600 text-white py-5 rounded-2xl font-black text-lg shadow-2xl shadow-blue-600/30 flex items-center justify-center gap-3 hover:scale-[1.02] transition-all disabled:opacity-50"
                      >
                        {isSubmitting ? 'Processing...' : 'Submit Final Query'} <Send size={20}/>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const FormInput = ({ label, icon, placeholder }) => (
  <div className="space-y-2">
    <label className="text-xs font-black uppercase text-slate-400 tracking-widest ml-1">{label}</label>
    <div className="relative group">
      <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors">{icon}</div>
      <input type="text" className="w-full pl-14 pr-6 py-5 rounded-2xl bg-slate-50 dark:bg-slate-800 dark:text-white border-none focus:ring-2 focus:ring-blue-600 outline-none font-bold transition-all" placeholder={placeholder} />
    </div>
  </div>
);

const FeatureCard = ({ icon, title, desc, color }) => (
  <div className="flex gap-4 group">
    <div className={`w-12 h-12 rounded-2xl bg-${color}-500/10 text-${color}-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
      {icon}
    </div>
    <div>
      <h4 className="font-bold dark:text-white text-sm">{title}</h4>
      <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
    </div>
  </div>
);

const SuccessState = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 px-6">
    <motion.div 
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="max-w-md w-full text-center space-y-6"
    >
      <div className="w-24 h-24 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto">
        <CheckCircle2 size={48} />
      </div>
      <h2 className="text-3xl font-black dark:text-white leading-tight">Query Received Successfully!</h2>
      <p className="text-slate-500">One of our senior partners has been notified. You will receive a summary of this query on your WhatsApp shortly.</p>
      <button 
        onClick={() => window.location.href = "/"}
        className="w-full py-4 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-2xl font-bold shadow-xl"
      >
        Return Home
      </button>
    </motion.div>
  </div>
);

const ArrowRight = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
);

export default Query;