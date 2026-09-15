import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, User, Phone, 
  Upload, CheckCircle2, ShieldCheck, 
  Zap, Clock, Sparkles, HelpCircle, ArrowRight,
  Check, Copy, MessageCircle, RefreshCw, AlertCircle
} from 'lucide-react';

const Query = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copied, setCopied] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [fileName, setFileName] = useState('');
  const [validationError, setValidationError] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Tax Scrutiny / Assessment Notice',
    urgency: 'Standard (24h SLA)',
    details: ''
  });

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const randomTicket = 'SKA-QRY-' + Math.floor(100000 + Math.random() * 900000);
    setTicketId(randomTicket);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1800);
  };

  const handleCopyTicket = () => {
    navigator.clipboard.writeText(ticketId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (isSuccess) {
    return (
      <SuccessState 
        formData={formData} 
        ticketId={ticketId} 
        copied={copied} 
        handleCopyTicket={handleCopyTicket} 
        resetForm={() => {
          setIsSuccess(false);
          setStep(1);
          setFileName('');
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] py-32 px-6 relative overflow-hidden transition-colors duration-500 selection:bg-[#007bb6]/30">
      
      {/* --- Beautiful Animated Ambient Glow Orbs --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div 
          animate={{ scale: [1, 1.25, 1], opacity: [0.15, 0.35, 0.15], x: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-10 w-[550px] h-[550px] bg-blue-600/20 dark:bg-sky-500/15 rounded-full blur-[130px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15], y: [0, -40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-10 left-10 w-[550px] h-[550px] bg-emerald-500/15 dark:bg-indigo-600/15 rounded-full blur-[130px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[100px]" 
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[#007bb6] dark:text-sky-400 text-xs font-black uppercase tracking-widest mb-4 backdrop-blur-md shadow-lg">
            <Sparkles size={14} className="animate-spin-slow text-amber-500" /> Fast-Track Advisory Portal
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            Submit Your Legal & Tax <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-400 to-amber-500">Query</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-4 text-lg font-medium">
            Get confidential case analysis and actionable statutory advice directly from senior Advocates & CAs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* --- Left Column: Value Cards --- */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 space-y-6"
          >
            <div className="p-8 bg-white/80 dark:bg-slate-900/90 backdrop-blur-xl rounded-[2.5rem] border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-6">
              <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                <ShieldCheck className="text-[#007bb6] dark:text-sky-400" /> Guarantee Protocol
              </h3>

              <div className="space-y-4">
                <FeatureCard icon={<Clock />} title="24h Guaranteed Reply" desc="Every submitted query is assigned to a partner within 2 hours." color="blue" />
                <FeatureCard icon={<ShieldCheck />} title="Encrypted & Confidential" desc="NDAs applied automatically under ICAI ethics standards." color="emerald" />
                <FeatureCard icon={<Zap />} title="Direct Legal Counsel" desc="Actionable steps for scrutiny notices, GST appeals & ROC." color="orange" />
              </div>
            </div>

            {/* Helpline Box */}
            <motion.div 
              whileHover={{ y: -4 }}
              className="p-6 bg-gradient-to-br from-[#00325b] to-[#007bb6] text-white rounded-[2rem] shadow-xl border border-white/20 relative overflow-hidden"
            >
              <div className="absolute -right-4 -bottom-4 text-white/10">
                <Phone size={100} />
              </div>
              <p className="text-xs font-bold text-sky-200 uppercase tracking-wider mb-1 flex items-center gap-2">
                <HelpCircle size={14} /> Urgent Assistance Hotline
              </p>
              <h4 className="text-2xl font-black text-white">+91 80102 57124</h4>
              <p className="text-[11px] text-slate-200 mt-2 font-medium">Mon - Sat: 10:00 AM to 7:00 PM IST</p>
            </motion.div>
          </motion.div>

          {/* --- Right Column: Animated Multi-Step Form --- */}
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-8 bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl rounded-[3rem] shadow-2xl border border-slate-200/80 dark:border-slate-800 p-8 md:p-12 relative overflow-hidden"
          >
            {/* Step Progress Bar Header */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-100 dark:border-slate-800">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-[#007bb6] dark:text-sky-400">Step {step} of 2</span>
                <h3 className="text-xl font-black text-slate-900 dark:text-white mt-0.5">
                  {step === 1 ? 'Contact & Client Information' : 'Case Details & Document Upload'}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <span className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-xs transition-colors ${step >= 1 ? 'bg-[#007bb6] text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>1</span>
                <div className={`w-10 h-1 rounded-full transition-colors ${step >= 2 ? 'bg-[#007bb6]' : 'bg-slate-200 dark:bg-slate-800'}`} />
                <span className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-xs transition-colors ${step === 2 ? 'bg-[#007bb6] text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>2</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <AnimatePresence mode="wait">
                {step === 1 ? (
                  <motion.div 
                    key="step1"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormInput 
                        label="Full Name *" 
                        icon={<User size={18}/>} 
                        placeholder="e.g. Akash Roy" 
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                      <FormInput 
                        label="WhatsApp Phone Number *" 
                        icon={<Phone size={18}/>} 
                        placeholder="+91 98765 43210" 
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>

                    <FormInput 
                      label="Business / Personal Email Address *" 
                      icon={<Send size={18}/>} 
                      placeholder="akash@company.com" 
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />

                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase text-slate-500 dark:text-slate-400 tracking-widest ml-1">Priority / SLA Window</label>
                      <div className="grid grid-cols-3 gap-3">
                        {['Standard (24h SLA)', 'Urgent (12h SLA)', 'Emergency (Notice Due)'].map((opt) => (
                          <button
                            type="button"
                            key={opt}
                            onClick={() => setFormData({ ...formData, urgency: opt })}
                            className={`p-3 rounded-2xl text-xs font-bold transition-all border text-center ${
                              formData.urgency === opt 
                              ? 'bg-[#007bb6] text-white border-[#007bb6] shadow-md' 
                              : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-[#007bb6]'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    {validationError && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 bg-rose-500/10 border border-rose-500/30 rounded-2xl flex items-center gap-3 text-rose-600 dark:text-rose-400 text-xs font-bold"
                      >
                        <AlertCircle size={18} className="shrink-0" />
                        <span>{validationError}</span>
                      </motion.div>
                    )}

                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      onClick={() => {
                        if (formData.name.trim() && formData.phone.trim() && formData.email.trim()) {
                          setValidationError('');
                          setStep(2);
                        } else {
                          setValidationError("Please fill in your name, phone, and email before proceeding.");
                        }
                      }}
                      className="w-full bg-[#007bb6] hover:bg-blue-700 text-white py-5 rounded-2xl font-black text-base flex items-center justify-center gap-3 shadow-xl shadow-blue-600/30 transition-all"
                    >
                      Proceed to Case Details <ArrowRight size={18}/>
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="step2"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase text-slate-500 dark:text-slate-400 tracking-widest ml-1">Statutory Advisory Category *</label>
                      <select 
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full p-5 rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:border-[#007bb6] outline-none appearance-none cursor-pointer font-bold"
                      >
                        <option>Tax Scrutiny / Assessment Notice (Section 143/147)</option>
                        <option>GST ITC Refund & Reconcilation Issue</option>
                        <option>Company / LLP Startup Incorporation</option>
                        <option>Statutory Audit & 44AB Compliance</option>
                        <option>ROC AOC-4 / MGT-7 Delay Advisory</option>
                        <option>Other Legal & Financial Query</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase text-slate-500 dark:text-slate-400 tracking-widest ml-1">Upload Notice / Supporting Document (Optional)</label>
                      <label className="w-full p-6 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-3xl flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-blue-500/5 hover:border-[#007bb6] transition-all group">
                        <Upload className="text-[#007bb6] dark:text-sky-400 group-hover:scale-110 transition-transform" size={28} />
                        <span className="text-xs font-bold text-slate-600 dark:text-slate-300">
                          {fileName ? `Attached: ${fileName}` : 'Click to select Tax Notice PDF or Image'}
                        </span>
                        <span className="text-[10px] text-slate-400 font-medium">Supported: PDF, PNG, JPG (Max 15MB)</span>
                        <input type="file" className="hidden" onChange={handleFileChange} />
                      </label>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase text-slate-500 dark:text-slate-400 tracking-widest ml-1">Case Summary / Background</label>
                      <textarea 
                        rows="4" 
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        className="w-full p-5 rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:border-[#007bb6] outline-none font-medium text-sm" 
                        placeholder="Provide any specific details regarding notice date, financial year, or statutory requirement..."
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 pt-2">
                      <button 
                        type="button" 
                        onClick={() => setStep(1)} 
                        className="py-4 rounded-2xl font-bold text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all text-sm"
                      >
                        Back to Step 1
                      </button>

                      <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={isSubmitting}
                        type="submit"
                        className="bg-[#007bb6] hover:bg-blue-700 text-white py-4 rounded-2xl font-black text-base shadow-xl shadow-blue-600/30 flex items-center justify-center gap-3 transition-all disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <RefreshCw size={18} className="animate-spin" /> Submitting Query...
                          </>
                        ) : (
                          <>
                            Submit Priority Query <Send size={18}/>
                          </>
                        )}
                      </motion.button>
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

const FormInput = ({ label, icon, placeholder, type = "text", value, onChange, required }) => (
  <div className="space-y-2">
    <label className="text-xs font-black uppercase text-slate-500 dark:text-slate-400 tracking-widest ml-1">{label}</label>
    <div className="relative group">
      <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#007bb6] transition-colors">{icon}</div>
      <input 
        required={required}
        type={type} 
        value={value}
        onChange={onChange}
        className="w-full pl-14 pr-6 py-4.5 rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:border-[#007bb6] outline-none font-bold text-sm transition-all" 
        placeholder={placeholder} 
      />
    </div>
  </div>
);

const FeatureCard = ({ icon, title, desc, color = 'blue' }) => {
  const colorMap = {
    blue: 'bg-blue-500/10 text-blue-600 dark:text-sky-400',
    emerald: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
    orange: 'bg-orange-500/10 text-orange-600 dark:text-orange-400',
  };

  return (
    <motion.div whileHover={{ x: 4 }} className="flex gap-4 group cursor-default">
      <div className={`w-12 h-12 rounded-2xl ${colorMap[color] || colorMap.blue} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-slate-900 dark:text-white text-sm">{title}</h4>
        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{desc}</p>
      </div>
    </motion.div>
  );
};

const SuccessState = ({ formData, ticketId, copied, handleCopyTicket, resetForm }) => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-[#020617] px-6 py-20 transition-colors duration-500">
    <motion.div 
      initial={{ scale: 0.85, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="max-w-xl w-full bg-white dark:bg-slate-900 p-10 md:p-14 rounded-[3.5rem] border border-slate-200/80 dark:border-slate-800 shadow-2xl text-center space-y-6 relative overflow-hidden"
    >
      <div className="w-24 h-24 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-inner">
        <CheckCircle2 size={52} />
      </div>

      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-mono font-bold border border-slate-200 dark:border-slate-700">
          <span>Query Ticket: <strong>{ticketId}</strong></span>
          <button onClick={handleCopyTicket} className="ml-1 text-[#007bb6] dark:text-sky-400 hover:scale-110 transition-transform">
            {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
          </button>
        </div>

        <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Query Assigned to Senior Partner!
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-sm max-w-md mx-auto font-medium leading-relaxed">
          Thank you, <strong>{formData.name || 'Valued Client'}</strong>. Your inquiry for <strong>{formData.service}</strong> has been logged. A partner will contact you at <strong>{formData.phone}</strong> within <strong>{formData.urgency}</strong>.
        </p>
      </div>

      <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
        <a 
          href={`https://wa.me/918010257124?text=Hi%20SK%20Associates,%20my%20query%20ticket%20is%20${ticketId}`}
          target="_blank" 
          rel="noreferrer"
          className="px-6 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-black text-sm flex items-center justify-center gap-2 shadow-lg transition"
        >
          <MessageCircle size={18} /> Fast-Track on WhatsApp
        </a>
        <button 
          onClick={resetForm}
          className="px-6 py-4 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-2xl font-bold text-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition"
        >
          Submit New Query
        </button>
      </div>
    </motion.div>
  </div>
);

export default Query;