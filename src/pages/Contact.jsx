import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, Phone, Mail, Clock, 
  Send, MessageSquare, Linkedin, 
  Twitter, Facebook, ChevronRight,
  ExternalLink, CheckCircle2, Sparkles,
  Zap, Headphones
} from 'lucide-react';

const Contact = () => {
  const [formStep, setFormStep] = useState('idle'); // idle, sending, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStep('sending');
    setTimeout(() => setFormStep('success'), 2000);
  };

  const contactInfo = [
    { 
      icon: <MapPin />, 
      title: "Visit Headquarters", 
      details: "Office 1063, 10th Floor, Gaur City Mall, Noida West, UP",
      action: "https://www.google.com/maps/search/Gaur+City+Mall+Noida+West",
      label: "Open in Maps",
      color: "from-blue-600 to-indigo-600"
    },
    { 
      icon: <Phone />, 
      title: "Direct Support", 
      details: "+91 80102 57124",
      action: "tel:+918010257124",
      label: "Call Now",
      color: "from-emerald-500 to-teal-600"
    },
    { 
      icon: <Mail />, 
      title: "Email Inquiry", 
      details: "officeska2000@gmail.com",
      action: "mailto:officeska2000@gmail.com",
      label: "Send Email",
      color: "from-orange-500 to-pink-500"
    },
    { 
      icon: <Clock />, 
      title: "Office Hours", 
      details: "Mon - Sat: 10 AM - 7 PM",
      action: "#",
      label: "Standard IST",
      color: "from-purple-600 to-blue-600"
    }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden selection:bg-blue-500/30">
      
      {/* --- HYPER-MODERN BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      {/* --- HERO HEADER --- */}
      <section className="relative pt-32 pb-20 px-6 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black uppercase tracking-[0.2em] mb-6">
            <Sparkles size={14} /> Available for Consultation
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.9]">
            LET'S <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-600">CONNECT.</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-xl font-medium">
            Strategic financial counsel is just one message away. 
            Experience precision in every interaction.
          </p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-6 relative z-10 pb-32">
        
        {/* --- 1. INTERACTIVE QUICK-ACTION CARDS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactInfo.map((info, idx) => (
            <motion.a 
              href={info.action}
              target={info.action.startsWith('http') ? "_blank" : "_self"}
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-slate-900/50 backdrop-blur-xl border border-white/5 p-8 rounded-[2.5rem] overflow-hidden transition-all"
            >
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${info.color} opacity-5 rounded-bl-full group-hover:opacity-20 transition-opacity`} />
              
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center mb-6 shadow-xl group-hover:rotate-[10deg] transition-transform`}>
                {React.cloneElement(info.icon, { size: 24, className: "text-white" })}
              </div>
              
              <h3 className="text-lg font-black mb-2 group-hover:text-blue-400 transition-colors">{info.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">{info.details}</p>
              
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-blue-500 group-hover:gap-4 transition-all">
                {info.label} <ChevronRight size={14} />
              </div>
            </motion.a>
          ))}
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          
          {/* --- 2. THE ULTIMATE CONTACT FORM (3 Cols) --- */}
          <motion.div 
            className="lg:col-span-3 bg-slate-900/80 backdrop-blur-3xl p-8 md:p-12 rounded-[3.5rem] border border-white/10 shadow-2xl relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center animate-bounce">
                  <Headphones className="text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-black tracking-tight">Priority Inquiry</h2>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
                    <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Consultants Online Now</span>
                  </div>
                </div>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <AnimatePresence mode="wait">
                  {formStep === 'success' ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-20 text-center space-y-4"
                    >
                      <div className="w-20 h-20 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 size={40} />
                      </div>
                      <h3 className="text-3xl font-black">Message Received!</h3>
                      <p className="text-slate-400">Our senior partner will reach out to you shortly.</p>
                      <button onClick={() => setFormStep('idle')} className="text-blue-500 font-bold underline">Send another message</button>
                    </motion.div>
                  ) : (
                    <motion.div exit={{ opacity: 0, x: -20 }} className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2 group/input">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-2">Full Name</label>
                        <input required type="text" className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 focus:border-blue-500 focus:bg-blue-500/5 outline-none transition-all font-medium" placeholder="E.g. Akash Sharma" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-2">Email Address</label>
                        <input required type="email" className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 focus:border-blue-500 focus:bg-blue-500/5 outline-none transition-all font-medium" placeholder="akash@company.com" />
                      </div>
                      <div className="md:col-span-2 space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-2">Nature of Service</label>
                        <select className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 focus:border-blue-500 outline-none transition-all font-medium appearance-none">
                          <option className="bg-slate-900">GST Registration & Filings</option>
                          <option className="bg-slate-900">Income Tax & Scrutiny</option>
                          <option className="bg-slate-900">Statutory Audit</option>
                          <option className="bg-slate-900">Company Formation</option>
                        </select>
                      </div>
                      <div className="md:col-span-2 space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-2">Brief Summary</label>
                        <textarea rows="4" className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 focus:border-blue-500 outline-none transition-all font-medium" placeholder="How can our experts assist you today?"></textarea>
                      </div>
                      <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={formStep === 'sending'}
                        className="md:col-span-2 w-full py-6 bg-blue-600 hover:bg-blue-500 rounded-[1.5rem] font-black flex items-center justify-center gap-3 shadow-2xl shadow-blue-900/40 transition-all group overflow-hidden relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        {formStep === 'sending' ? "PROCESSING..." : "DISPATCH INQUIRY"} 
                        <Zap size={18} className="fill-current" />
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>

          {/* --- 3. THE MAP & SOCIALS (2 Cols) --- */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="h-[450px] rounded-[3.5rem] overflow-hidden relative border border-white/10 group/map shadow-2xl"
            >
              <div className="absolute top-6 left-6 z-20 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/20 flex items-center gap-2">
                <MapPin size={14} className="text-blue-500" />
                <span className="text-[10px] font-black uppercase tracking-widest">Gaur City Mall, Noida West</span>
              </div>
              <iframe 
                title="Gaur City Mall Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5619175783515!2d77.42211997549463!3d28.61293217567439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee447f52f36d%3A0x6b485d4615217466!2sGaur%20City%20Mall!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                className="w-full h-full border-0 grayscale invert contrast-[1.1] group-hover/map:grayscale-0 group-hover/map:invert-0 transition-all duration-1000 scale-110 group-hover/map:scale-100"
                allowFullScreen="" 
                loading="lazy"
              ></iframe>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-indigo-900/50 to-slate-900/50 p-10 rounded-[3.5rem] border border-white/10 backdrop-blur-xl relative overflow-hidden group"
            >
              <div className="absolute -right-4 -bottom-4 text-white opacity-5 group-hover:opacity-10 transition-opacity">
                <ExternalLink size={120} />
              </div>
              <h4 className="text-xl font-black mb-2">Knowledge Base</h4>
              <p className="text-slate-400 text-sm mb-8 leading-relaxed">Follow us for weekly analysis on Budget 2026 and GST amendments.</p>
              <div className="flex gap-4 relative z-10">
                <SocialIcon icon={<Linkedin />} label="LinkedIn" />
                <SocialIcon icon={<Twitter />} label="Twitter" />
                <SocialIcon icon={<Facebook />} label="Facebook" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SocialIcon = ({ icon, label }) => (
  <motion.button 
    whileHover={{ y: -5, scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="w-12 h-12 bg-white/5 border border-white/10 hover:bg-blue-600 hover:text-white rounded-2xl flex items-center justify-center transition-all shadow-xl"
  >
    {React.cloneElement(icon, { size: 20 })}
  </motion.button>
);

export default Contact;