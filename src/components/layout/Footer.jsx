import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, Phone, Mail, Clock, 
  Linkedin, Twitter, Facebook, 
  ArrowRight, ShieldCheck, Send, 
  Globe, Instagram, ChevronUp, Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '/src/assets/logo.jpeg'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isHovered, setIsHovered] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#020617] text-white pt-32 pb-12 overflow-hidden">
      {/* --- 1. AVANT-GARDE BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Animated Aurora */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
            rotate: [0, 45, 0]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -top-[20%] -left-[10%] w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[140px]" 
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- 2. FLOATING ACTION CARD --- */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-24 p-1 group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[3.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative grid lg:grid-cols-3 gap-12 p-10 md:p-16 rounded-[3.2rem] bg-slate-900/80 backdrop-blur-2xl border border-white/10 items-center overflow-hidden">
            <div className="lg:col-span-2 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
                <Sparkles size={14} /> Newsletter
              </div>
              <h3 className="text-4xl md:text-5xl font-black tracking-tighter leading-none">
                Master your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Tax Strategy.</span>
              </h3>
              <p className="text-slate-400 text-lg max-w-xl">Join 2,000+ business owners receiving monthly compliance insights.</p>
            </div>
            
            <div className="relative group/input">
              <input 
                type="email" 
                placeholder="Work Email" 
                className="w-full px-8 py-6 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-blue-500/50 transition-all font-medium"
              />
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute right-3 top-3 bottom-3 px-8 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-blue-900/20 transition-all"
              >
                Join <Send size={18} />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* --- 3. MAIN CONTENT GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
          
          {/* Brand Bio */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-6">
              <Link to="/" className="flex items-center gap-4 group">
                <div className="relative">
                  <div className="absolute -inset-2 bg-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                  <div className="p-2 bg-white rounded-2xl w-14 h-14 flex items-center justify-center relative border border-slate-200 shadow-2xl">
                    <img src={logo} alt="Logo" className="w-full h-full object-contain" />
                  </div>
                </div>
                <div>
                  <h4 className="text-2xl font-black tracking-tighter leading-none">S.K ASSOCIATES</h4>
                  <p className="text-[10px] font-black tracking-[0.3em] text-blue-500 uppercase mt-1">Founding 2017</p>
                </div>
              </Link>
              <p className="text-slate-400 text-lg leading-relaxed font-medium">
                Pioneering financial clarity in an era of complex regulation. Your growth is our precision.
              </p>
            </div>
            <div className="flex gap-4">
              <SocialIcon icon={<Linkedin />} href="#" />
              <SocialIcon icon={<Instagram />} href="#" />
              <SocialIcon icon={<Twitter />} href="#" />
              <SocialIcon icon={<Facebook />} href="#" />
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-500 mb-10">Solutions</h4>
            <ul className="space-y-5">
              <FooterLink to="/income-tax">Income Tax</FooterLink>
              <FooterLink to="/gst">GST Returns</FooterLink>
              <FooterLink to="/audit">Audit & Assurance</FooterLink>
              <FooterLink to="/roc">ROC Filings</FooterLink>
            </ul>
          </div>

          {/* Contact & Map Card */}
          <div className="lg:col-span-6">
             <div className="bg-slate-900/40 border border-white/5 rounded-[2.5rem] p-8 backdrop-blur-md">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-8">
                    <h4 className="text-xs font-black uppercase tracking-[0.3em] text-blue-500">Reach Us</h4>
                    <ContactItem 
                      icon={<MapPin />} 
                      text="Gaur City Mall, Noida West, UP" 
                      sub="10th Floor, Suite 1063" 
                    />
                    <ContactItem 
                      icon={<Phone />} 
                      text="+91 80102 57124" 
                      sub="Mon-Sat, 10am - 7pm" 
                    />
                    <ContactItem 
                      icon={<Mail />} 
                      text="officeska2000@gmail.com" 
                      sub="Instant Response" 
                    />
                  </div>
                  <div className="h-full min-h-[200px] rounded-3xl overflow-hidden relative group/map border border-white/10 shadow-2xl">
                    <div className="absolute inset-0 bg-blue-600/10 z-10 pointer-events-none group-hover/map:opacity-0 transition-opacity duration-700" />
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.57124!2d77.424!3d28.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzAwLjAiTiA3N8KwMjUnMjYuNCJF!5e0!3m2!1sen!2sin!4v1620000000000"
                      className="w-full h-full grayscale-[1] invert-[0.9] contrast-[1.2] group-hover/map:grayscale-0 group-hover/map:invert-0 transition-all duration-1000 scale-110 group-hover/map:scale-100"
                      loading="lazy"
                    />
                  </div>
                </div>
             </div>
          </div>
        </div>

        {/* --- 4. BOTTOM BAR --- */}
        <div className="pt-12 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6 text-sm font-medium text-slate-500">
            <p className="flex items-center gap-2 italic">
              © <motion.span animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 3, repeat: Infinity }}>{currentYear}</motion.span> S.K Associates
            </p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            </div>
          </div>

          <motion.button 
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-blue-400 shadow-2xl hover:bg-blue-600 hover:text-white transition-all"
          >
            <ChevronUp size={24} />
          </motion.button>

          <div className="flex items-center gap-3 px-6 py-2 bg-blue-500/5 border border-blue-500/10 rounded-full">
            <ShieldCheck size={16} className="text-emerald-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Certified ICAI Member</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- ENHANCED HELPER COMPONENTS ---

const FooterLink = ({ to, children }) => (
  <li>
    <Link to={to} className="group flex items-center gap-3 text-slate-400 hover:text-white transition-all duration-300">
      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 scale-0 group-hover:scale-100 transition-transform duration-300" />
      <span className="font-bold text-sm tracking-tight group-hover:translate-x-1 transition-transform">{children}</span>
    </Link>
  </li>
);

const ContactItem = ({ icon, text, sub }) => (
  <div className="flex gap-5 group cursor-pointer">
    <div className="w-12 h-12 rounded-2xl bg-slate-800/50 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 group-hover:rotate-[10deg]">
      {React.cloneElement(icon, { size: 20 })}
    </div>
    <div>
      <p className="text-sm font-black text-white group-hover:text-blue-400 transition-colors">{text}</p>
      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">{sub}</p>
    </div>
  </div>
);

const SocialIcon = ({ icon, href }) => (
  <motion.a 
    href={href}
    whileHover={{ y: -8, rotate: 8, scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="w-12 h-12 rounded-2xl bg-slate-900 border border-white/5 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-500 shadow-xl transition-all duration-300"
  >
    {React.cloneElement(icon, { size: 20 })}
  </motion.a>
);

export default Footer;