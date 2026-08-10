import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, Phone, Mail, Clock, 
  Linkedin, Twitter, Facebook, 
  ArrowRight, ShieldCheck, Send, 
  Globe, Instagram, ChevronUp, Sparkles,
  CheckCircle2, Building2, Zap, Award, Check
} from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '/src/assets/logo.jpeg'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [istTime, setIstTime] = useState('');

  // Live IST Clock Tracker
  useEffect(() => {
    const updateTime = () => {
      const options = { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
      setIstTime(new Date().toLocaleTimeString('en-US', options));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3500);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#020617] text-white pt-24 pb-12 overflow-hidden border-t border-slate-800">
      
      {/* 1. Animated Ambient Glowing Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.25, 1],
            opacity: [0.15, 0.3, 0.15],
            rotate: [0, 60, 0]
          }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute -top-[20%] -left-[10%] w-[700px] h-[700px] bg-blue-600/20 rounded-full blur-[140px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.25, 0.1],
            rotate: [0, -45, 0]
          }}
          transition={{ duration: 14, repeat: Infinity }}
          className="absolute -bottom-[20%] -right-[10%] w-[700px] h-[700px] bg-orange-600/15 rounded-full blur-[140px]" 
        />
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#007bb6] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* 2. Avant-Garde Newsletter Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-20 p-1 group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-[#007bb6] via-sky-400 to-amber-500 rounded-[3rem] blur-md opacity-30 group-hover:opacity-60 transition duration-1000"></div>
          
          <div className="relative grid lg:grid-cols-12 gap-8 p-8 md:p-14 rounded-[2.8rem] bg-slate-900/90 backdrop-blur-2xl border border-white/10 items-center overflow-hidden shadow-2xl">
            
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-sky-400 text-xs font-black uppercase tracking-widest">
                <Sparkles size={14} className="text-amber-400" /> Compliance Advisory Bulletin
              </div>
              <h3 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
                Master Your Corporate <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-white to-amber-400">Tax Strategy.</span>
              </h3>
              <p className="text-slate-400 text-sm md:text-base max-w-xl font-medium">
                Join 2,000+ CFOs and business owners receiving monthly statutory compliance updates, Income Tax alerts, & GST due dates.
              </p>
            </div>
            
            <div className="lg:col-span-5">
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your work email address..." 
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-[#007bb6] transition-all font-medium text-sm"
                  />
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="px-8 py-4 bg-[#007bb6] hover:bg-blue-500 text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shrink-0 text-sm transition"
                  >
                    {subscribed ? <Check size={18} className="text-emerald-300" /> : <Send size={16} />}
                    <span>{subscribed ? 'Subscribed!' : 'Subscribe'}</span>
                  </motion.button>
                </div>
                <div className="flex items-center gap-4 text-[11px] text-slate-400 font-medium pl-1">
                  <span className="flex items-center gap-1"><CheckCircle2 size={12} className="text-emerald-400" /> No Spam</span>
                  <span className="flex items-center gap-1"><CheckCircle2 size={12} className="text-emerald-400" /> Monthly Digest</span>
                  <span className="flex items-center gap-1"><CheckCircle2 size={12} className="text-emerald-400" /> Unsubscribe Anytime</span>
                </div>
              </form>
            </div>

          </div>
        </motion.div>

        {/* 3. Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Bio Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <motion.div 
                whileHover={{ rotate: 6, scale: 1.05 }}
                className="p-2 bg-white rounded-2xl w-12 h-12 flex items-center justify-center relative border border-white/20 shadow-xl"
              >
                <img src={logo} alt="S.K Associates Logo" className="w-full h-full object-contain" />
              </motion.div>
              <div>
                <h4 className="text-2xl font-black tracking-tighter leading-none">S.K ASSOCIATES</h4>
                <p className="text-[10px] font-black tracking-[0.25em] text-[#007bb6] dark:text-sky-400 uppercase mt-1">Tax & Advisory Consultants</p>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              Pioneering financial clarity, statutory assurance, and tax litigation defense since 2017. Serving 500+ corporate clients across India.
            </p>

            {/* Live IST Clock Card */}
            <div className="p-4 bg-slate-900/60 rounded-2xl border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <div>
                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider block">Office Status (IST)</span>
                  <span className="text-xs font-bold text-emerald-400">Open • {istTime}</span>
                </div>
              </div>
              <Clock size={16} className="text-slate-400" />
            </div>

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              <SocialIcon icon={<Linkedin />} href="https://linkedin.com" />
              <SocialIcon icon={<Instagram />} href="https://instagram.com" />
              <SocialIcon icon={<Twitter />} href="https://twitter.com" />
              <SocialIcon icon={<Facebook />} href="https://facebook.com" />
            </div>
          </div>

          {/* Solutions Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-[0.25em] text-[#007bb6] dark:text-sky-400">Services</h4>
            <ul className="space-y-3">
              <FooterLink to="/income-tax">Income Tax</FooterLink>
              <FooterLink to="/service-tax">GST & Indirect Tax</FooterLink>
              <FooterLink to="/audit">Audit & Assurance</FooterLink>
              <FooterLink to="/corporate-services">Corporate Advisory</FooterLink>
              <FooterLink to="/accounting-services">Cloud Accounting</FooterLink>
              <FooterLink to="/query">Scrutiny Consultation</FooterLink>
            </ul>
          </div>

          {/* Utilities & Knowledge Bank */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-[0.25em] text-[#007bb6] dark:text-sky-400">Knowledge Bank</h4>
            <ul className="space-y-3">
              <FooterLink to="/calculators">Financial Calculators</FooterLink>
              <FooterLink to="/bulletins">Compliance Bulletins</FooterLink>
              <FooterLink to="/utilities">Due Date Utilities</FooterLink>
              <FooterLink to="/acts">Acts & Statutory</FooterLink>
              <FooterLink to="/rules">MCA & Tax Rules</FooterLink>
              <FooterLink to="/forms">Downloadable Forms</FooterLink>
            </ul>
          </div>

          {/* Contact & Live Map Card */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-[0.25em] text-[#007bb6] dark:text-sky-400">Headquarters</h4>
            
            <div className="bg-slate-900/60 border border-white/10 rounded-3xl p-6 backdrop-blur-md space-y-5">
              <ContactItem 
                icon={<MapPin />} 
                text="Gaur City Mall, Noida West, UP" 
                sub="10th Floor, Office Suite 1063" 
              />
              <ContactItem 
                icon={<Phone />} 
                text="0120-4194983 | +91 8010257124" 
                sub="Mon-Sat, 10:00 AM - 07:00 PM" 
              />
              <ContactItem 
                icon={<Mail />} 
                text="officeska2000@gmail.com" 
                sub="Instant Priority Helpdesk" 
              />

              {/* Embedded Google Map Preview */}
              <div className="h-32 rounded-2xl overflow-hidden relative border border-white/10 shadow-lg group/map">
                <div className="absolute inset-0 bg-[#007bb6]/10 z-10 pointer-events-none group-hover/map:opacity-0 transition-opacity duration-500" />
                <iframe 
                  title="S.K Associates Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.57124!2d77.424!3d28.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzAwLjAiTiA3N8KwMjUnMjYuNCJF!5e0!3m2!1sen!2sin!4v1620000000000"
                  className="w-full h-full grayscale-[0.8] invert-[0.9] contrast-[1.2] group-hover/map:grayscale-0 group-hover/map:invert-0 transition-all duration-700 scale-105 group-hover/map:scale-100"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

        </div>

        {/* 4. Bottom Copyright & Verification Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-xs font-medium text-slate-400 text-center sm:text-left">
            <p>© {currentYear} S.K Associates. All Rights Reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy-policy" className="hover:text-sky-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-sky-400 transition-colors">Terms of Service</Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-[11px] font-bold">
              <ShieldCheck size={14} /> ICAI Peer-Reviewed Firm
            </div>

            <motion.button 
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Scroll to top of page"
              className="w-11 h-11 rounded-2xl bg-[#007bb6] text-white flex items-center justify-center shadow-lg hover:bg-blue-600 transition"
            >
              <ChevronUp size={20} />
            </motion.button>
          </div>
        </div>

      </div>
    </footer>
  );
};

const FooterLink = ({ to, children }) => (
  <motion.li whileHover={{ x: 5 }}>
    <Link to={to} className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-200">
      <div className="w-1.5 h-1.5 rounded-full bg-[#007bb6] opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="font-semibold text-xs text-slate-300 group-hover:text-sky-400 transition-colors">{children}</span>
    </Link>
  </motion.li>
);

const ContactItem = ({ icon, text, sub }) => (
  <motion.div whileHover={{ x: 4 }} className="flex gap-3.5 items-start group cursor-pointer">
    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-sky-400 group-hover:bg-[#007bb6] group-hover:text-white transition-all shrink-0">
      {React.cloneElement(icon, { size: 18 })}
    </div>
    <div>
      <p className="text-xs font-bold text-white group-hover:text-sky-400 transition-colors leading-tight">{text}</p>
      <p className="text-[10px] font-medium text-slate-400 mt-0.5">{sub}</p>
    </div>
  </motion.div>
);

const SocialIcon = ({ icon, href }) => (
  <motion.a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -5, scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-[#007bb6] hover:text-white transition shadow-md"
  >
    {React.cloneElement(icon, { size: 18 })}
  </motion.a>
);

export default Footer;