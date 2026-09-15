import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, Phone, Mail, 
  Send, Linkedin, 
  Twitter, Facebook, ChevronRight,
  ExternalLink, CheckCircle2,
  Zap, Headphones, MessageCircle,
  ShieldCheck, Video, Navigation
} from 'lucide-react';

const Contact = () => {
  const [formStep, setFormStep] = useState('idle'); // idle, sending, success
  const [ticketId, setTicketId] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'GST Registration & Filings',
    budget: '₹25k - ₹50k',
    preferredTime: 'Morning (10 AM - 1 PM)',
    summary: ''
  });

  const [activeTab, setActiveTab] = useState('form'); // form, direct, location
  const [currentTime, setCurrentTime] = useState('');
  const [isOpenNow, setIsOpenNow] = useState(true);

  // Live IST Time & Office Open/Close status calculation
  useEffect(() => {
    const updateIST = () => {
      const now = new Date();
      const options = { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
      const istTimeString = now.toLocaleTimeString('en-US', options);
      setCurrentTime(istTimeString);

      // Extract real IST hour and day
      const istDate = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
      const hour = istDate.getHours();
      const day = istDate.getDay();
      // Sunday closed (0), Mon-Sat 10AM to 7PM (10 to 19)
      if (day === 0 || hour < 10 || hour >= 19) {
        setIsOpenNow(false);
      } else {
        setIsOpenNow(true);
      }
    };

    updateIST();
    const interval = setInterval(updateIST, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStep('sending');
    const randomTicket = 'SKA-' + Math.floor(100000 + Math.random() * 900000);
    setTicketId(randomTicket);
    setTimeout(() => setFormStep('success'), 1400);
  };

  const contactCards = [
    { 
      icon: <MapPin />, 
      title: "Visit Headquarters", 
      details: "Office 1063, 10th Floor, Gaur City Mall, Noida West, UP 201306",
      action: "https://www.google.com/maps/search/Gaur+City+Mall+Noida+West",
      label: "Get Driving Directions",
      color: "from-blue-600 to-indigo-600"
    },
    { 
      icon: <Phone />, 
      title: "Direct Support Hotline", 
      details: "+91 80102 57124",
      action: "tel:+918010257124",
      label: "Call Instantly",
      color: "from-emerald-500 to-teal-600"
    },
    { 
      icon: <MessageCircle />, 
      title: "WhatsApp Priority Desk", 
      details: "+91 80102 57124",
      action: "https://wa.me/918010257124?text=Hi%20SK%20Associates,%20I%20want%20to%20schedule%20a%20tax%20consultation",
      label: "Chat on WhatsApp",
      color: "from-emerald-600 to-green-500"
    },
    { 
      icon: <Mail />, 
      title: "Email Advisory Desk", 
      details: "officeska2000@gmail.com",
      action: "mailto:officeska2000@gmail.com",
      label: "Email Query",
      color: "from-orange-500 to-amber-500"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-white transition-colors duration-500 selection:bg-[#007bb6]/30 overflow-hidden">
      
      {/* Background Decor Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/15 dark:bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/15 dark:bg-sky-500/10 rounded-full blur-[120px]" />
      </div>

      {/* Hero Header */}
      <section className="relative pt-36 pb-16 px-6 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Live Status Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-xs font-black uppercase tracking-wider mb-8 shadow-lg">
            <span className="relative flex h-3 w-3">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isOpenNow ? 'bg-emerald-400' : 'bg-amber-400'} opacity-75`}></span>
              <span className={`relative inline-flex rounded-full h-3 w-3 ${isOpenNow ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
            </span>
            <span className="text-slate-700 dark:text-slate-200">
              {isOpenNow ? '🟢 Office Open Now' : '🌙 Office Closed (Message Desk Active)'}
            </span>
            <span className="text-slate-400 dark:text-slate-500">|</span>
            <span className="text-[#007bb6] dark:text-sky-400 font-bold">IST {currentTime}</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 leading-none text-slate-900 dark:text-white">
            LET'S <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-400 to-orange-500">CONNECT.</span>
          </h1>

          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
            Strategic corporate tax planning and legal advisory is just one click away. Connect with senior Chartered Accountants today.
          </p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-6 relative z-10 pb-32">
        
        {/* Quick Action Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactCards.map((info, idx) => (
            <motion.a 
              href={info.action}
              target={info.action.startsWith('http') ? "_blank" : "_self"}
              rel="noreferrer"
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-8 rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center mb-6 shadow-lg group-hover:rotate-[12deg] transition-transform duration-300`}>
                  {React.cloneElement(info.icon, { size: 24, className: "text-white" })}
                </div>
                
                <h3 className="text-lg font-black mb-2 dark:text-white group-hover:text-[#007bb6] dark:group-hover:text-sky-400 transition-colors">{info.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 font-medium">{info.details}</p>
              </div>

              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#007bb6] dark:text-sky-400 group-hover:gap-3 transition-all pt-4 border-t border-slate-100 dark:border-slate-800">
                {info.label} <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Tab Switcher for Consultation Modes */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg">
            <button
              onClick={() => setActiveTab('form')}
              className={`px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeTab === 'form' ? 'bg-[#007bb6] text-white shadow-md' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Send size={14} /> Priority Form Inquiry
            </button>
            <button
              onClick={() => setActiveTab('direct')}
              className={`px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeTab === 'direct' ? 'bg-[#007bb6] text-white shadow-md' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Video size={14} /> Video & WhatsApp Desk
            </button>
            <button
              onClick={() => setActiveTab('location')}
              className={`px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeTab === 'location' ? 'bg-[#007bb6] text-white shadow-md' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Navigation size={14} /> Office Map & Directions
            </button>
          </div>
        </div>

        {/* Main Interactive Section */}
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Priority Contact Form */}
          <motion.div 
            className="lg:col-span-8 bg-white dark:bg-slate-900 p-8 md:p-14 rounded-[3rem] border border-slate-200/80 dark:border-slate-800 shadow-2xl relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#007bb6] rounded-2xl flex items-center justify-center text-white shadow-lg">
                    <Headphones size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-black tracking-tight dark:text-white">Priority Advisory Inquiry</h2>
                    <p className="text-xs font-bold text-slate-500 dark:text-slate-400 mt-0.5">Guaranteed CA Callback within 2 Business Hours</p>
                  </div>
                </div>

                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-black border border-emerald-500/20">
                  <ShieldCheck size={14} /> 100% Confidential
                </span>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <AnimatePresence mode="wait">
                  {formStep === 'success' ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-12 text-center space-y-6"
                    >
                      <div className="w-24 h-24 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-inner">
                        <CheckCircle2 size={48} />
                      </div>
                      
                      <div>
                        <span className="px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs font-mono font-bold">Ref ID: {ticketId}</span>
                        <h3 className="text-3xl md:text-4xl font-black dark:text-white mt-3">Consultation Request Dispatched!</h3>
                        <p className="text-slate-600 dark:text-slate-300 max-w-md mx-auto mt-2 text-sm leading-relaxed font-medium">
                          Thank you, <strong>{formData.name || 'Valued Client'}</strong>. Our senior partner has received your request for <strong>{formData.service}</strong> and will reach out via phone/email shortly.
                        </p>
                      </div>

                      <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                        <a 
                          href="https://wa.me/918010257124" 
                          target="_blank" 
                          rel="noreferrer"
                          className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-black text-sm flex items-center justify-center gap-2 shadow-lg"
                        >
                          <MessageCircle size={16} /> Fast-Track on WhatsApp
                        </a>
                        <button 
                          type="button" 
                          onClick={() => setFormStep('idle')} 
                          className="px-6 py-3.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-xl font-bold text-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition"
                        >
                          Submit Another Query
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div exit={{ opacity: 0 }} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">Full Name *</label>
                          <input 
                            required 
                            type="text" 
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:border-[#007bb6] outline-none font-medium transition-all" 
                            placeholder="e.g. Rajesh Sharma" 
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">Email Address *</label>
                          <input 
                            required 
                            type="email" 
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:border-[#007bb6] outline-none font-medium transition-all" 
                            placeholder="rajesh@company.com" 
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">Phone Number (WhatsApp) *</label>
                          <input 
                            required 
                            type="tel" 
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:border-[#007bb6] outline-none font-medium transition-all" 
                            placeholder="+91 98765 43210" 
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">Nature of Service *</label>
                          <select 
                            value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:border-[#007bb6] outline-none font-bold appearance-none cursor-pointer"
                          >
                            <option>GST Registration & Filings</option>
                            <option>Income Tax Scrutiny & Appeals</option>
                            <option>Statutory Audit & Assurance</option>
                            <option>Private Limited / Startup Incorporation</option>
                            <option>ROC Annual Compliances</option>
                            <option>Virtual CFO & Accounting Services</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">Preferred Callback Window</label>
                          <select 
                            value={formData.preferredTime}
                            onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                            className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:border-[#007bb6] outline-none font-bold appearance-none cursor-pointer"
                          >
                            <option>Morning (10 AM - 1 PM)</option>
                            <option>Afternoon (1 PM - 4 PM)</option>
                            <option>Evening (4 PM - 7 PM)</option>
                          </select>
                        </div>

                        <div className="space-y-2">
                          <label className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">Estimated Annual Turnover / Budget</label>
                          <select 
                            value={formData.budget}
                            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                            className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:border-[#007bb6] outline-none font-bold appearance-none cursor-pointer"
                          >
                            <option>Under ₹20 Lakhs (Micro SME / Individual)</option>
                            <option>₹20 Lakhs - ₹1 Crore (Growing SME)</option>
                            <option>₹1 Crore - ₹10 Crore (Enterprise)</option>
                            <option>Above ₹10 Crore (Corporate)</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">Brief Inquiry Description</label>
                        <textarea 
                          rows="4" 
                          value={formData.summary}
                          onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                          className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:border-[#007bb6] outline-none font-medium transition-all" 
                          placeholder="Provide any specific details regarding your tax status, notice details, or business incorporation requirements..."
                        />
                      </div>

                      <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={formStep === 'sending'}
                        className="w-full py-5 bg-[#007bb6] hover:bg-blue-700 text-white rounded-2xl font-black flex items-center justify-center gap-3 shadow-xl shadow-blue-600/30 transition-all text-base tracking-wide"
                      >
                        {formStep === 'sending' ? "DISPATCHING INQUIRY..." : "DISPATCH CONSULTATION REQUEST"} 
                        <Zap size={20} fill="currentColor" />
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>

          {/* Sidebar & Quick Action Cards */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Direct WhatsApp Callout Card */}
            <motion.div 
              whileHover={{ y: -6 }}
              className="bg-gradient-to-br from-emerald-600 via-teal-700 to-slate-900 p-8 rounded-[3rem] text-white shadow-2xl relative overflow-hidden"
            >
              <div className="relative z-10 space-y-4">
                <span className="px-3 py-1 bg-white/20 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/20">Instant Advisory</span>
                <h3 className="text-2xl font-black leading-tight">Need Urgent Tax or Scrutiny Legal Support?</h3>
                <p className="text-emerald-100 text-xs leading-relaxed font-medium">
                  Connect directly with our senior CA partner on WhatsApp for real-time document review & notice analysis.
                </p>
                <a 
                  href="https://wa.me/918010257124?text=Hi%20SK%20Associates,%20I%20need%20urgent%20tax%20advisory"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-emerald-800 rounded-xl font-black text-xs uppercase tracking-wider hover:bg-emerald-50 transition shadow-lg"
                >
                  <MessageCircle size={16} /> Open WhatsApp Desk
                </a>
              </div>
            </motion.div>

            {/* Interactive Map Card */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-[3rem] border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-4">
              <div className="flex justify-between items-center px-2">
                <h4 className="text-lg font-black dark:text-white">Headquarters Map</h4>
                <a 
                  href="https://www.google.com/maps/search/Gaur+City+Mall+Noida+West" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-[#007bb6] dark:text-sky-400 text-xs font-bold flex items-center gap-1 hover:underline"
                >
                  Full Map <ExternalLink size={12} />
                </a>
              </div>

              <div className="h-[220px] rounded-[2rem] overflow-hidden border border-slate-200 dark:border-slate-800 relative group/map">
                <iframe 
                  title="Gaur City Mall Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5619175783515!2d77.42211997549463!3d28.61293217567439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee447f52f36d%3A0x6b485d4615217466!2sGaur%20City%20Mall!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                  className="w-full h-full border-0 transition-all duration-700 group-hover/map:scale-105"
                  allowFullScreen="" 
                  loading="lazy"
                />
              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-2xl text-xs font-medium text-slate-500 dark:text-slate-400 space-y-1">
                <p className="font-bold text-slate-800 dark:text-slate-200">📍 Office 1063, 10th Floor, Gaur City Mall</p>
                <p>Noida Extension, Greater Noida West, UP 201306</p>
              </div>
            </div>

            {/* Social Channels */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-[3rem] border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-4">
              <h4 className="text-xl font-black dark:text-white">Knowledge Updates</h4>
              <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed font-medium">Follow us for real-time circulars on Income Tax, Budget 2026, and GST notifications.</p>
              <div className="flex gap-3 pt-2">
                <SocialIcon icon={<Linkedin />} href="#" />
                <SocialIcon icon={<Twitter />} href="#" />
                <SocialIcon icon={<Facebook />} href="#" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

const SocialIcon = ({ icon, href }) => (
  <motion.a 
    whileHover={{ y: -4, scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    href={href}
    className="w-12 h-12 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-[#007bb6] hover:text-white rounded-2xl flex items-center justify-center text-slate-600 dark:text-slate-300 transition-all shadow-md"
  >
    {React.cloneElement(icon, { size: 20 })}
  </motion.a>
);

export default Contact;