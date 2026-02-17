import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, Phone, Mail, Clock, 
  Linkedin, Twitter, Facebook, 
  ArrowRight, ShieldCheck, Send, ExternalLink,
  Globe, Instagram
} from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '/src/assets/logo.jpeg'; // Ensure path is correct

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#020617] text-white pt-24 pb-10 overflow-hidden border-t border-slate-800">
      {/* Dynamic Background Accents */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- 1. Newsletter Section (Floating Card Style) --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-8 mb-20 p-8 md:p-12 rounded-[3rem] bg-gradient-to-br from-[#007bb6] via-blue-700 to-indigo-900 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Globe size={120} />
          </div>
          <div className="lg:col-span-2 relative z-10">
            <h3 className="text-3xl md:text-4xl font-black mb-3 tracking-tighter">Stay Ahead of Tax Changes</h3>
            <p className="text-blue-100/80 text-lg max-w-xl font-medium">Get curated GST updates and Income Tax notifications delivered directly to your inbox.</p>
          </div>
          <div className="flex items-center relative z-10">
            <div className="relative w-full">
              <input 
                type="email" 
                placeholder="Professional Email Address" 
                className="w-full px-7 py-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-blue-200 outline-none focus:ring-4 focus:ring-white/20 transition-all font-bold"
              />
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute right-2 top-2 bottom-2 px-6 bg-white text-[#007bb6] rounded-xl font-black flex items-center gap-2 shadow-xl hover:bg-blue-50 transition-colors"
              >
                JOIN <Send size={18} />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* --- 2. Main Footer Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Brand & Identity (4 Cols) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-white rounded-2xl shadow-xl w-16 h-16 flex items-center justify-center overflow-hidden border-2 border-slate-800">
                  <img src={logo} alt="S.K Associates Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h4 className="text-2xl font-black tracking-tighter leading-none">S.K ASSOCIATES</h4>
                  <span className="text-[10px] tracking-[0.3em] font-bold text-blue-400 uppercase">Consulting Excellence</span>
                </div>
              </div>
              <p className="text-slate-400 text-base leading-relaxed max-w-sm">
                A premier multi-disciplinary financial advisory firm. We specialize in transforming complex tax challenges into strategic business advantages through precision and integrity.
              </p>
            </div>
            <div className="flex gap-4">
              <SocialIcon icon={<Linkedin />} href="#" />
              <SocialIcon icon={<Twitter />} href="#" />
              <SocialIcon icon={<Instagram />} href="#" />
              <SocialIcon icon={<Facebook />} href="#" />
            </div>
          </div>

          {/* Quick Links (2 Cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-slate-500 mb-8">Solutions</h4>
            <ul className="space-y-4">
              <FooterLink to="/income-tax">Income Tax</FooterLink>
              <FooterLink to="/service-tax">GST Returns</FooterLink>
              <FooterLink to="/audit">Statutory Audit</FooterLink>
              <FooterLink to="/corporate-services">ROC Compliance</FooterLink>
              <FooterLink to="/calculators">Tax Tools</FooterLink>
            </ul>
          </div>

          {/* Location & Map Feature (6 Cols) */}
          <div className="lg:col-span-6">
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-slate-500 mb-8 px-2">Global Headquarters</h4>
            <div className="grid md:grid-cols-2 gap-6 bg-slate-900/50 p-6 rounded-[2.5rem] border border-slate-800/50 backdrop-blur-sm">
              <div className="space-y-6">
                <ContactInfo 
                  icon={<MapPin />} 
                  label="Visit Us" 
                  value="10th Floor, Office 1063, Gaur City Mall, Noida West, UP-201318"
                  link="https://maps.google.com"
                />
                <ContactInfo 
                  icon={<Phone />} 
                  label="Direct Line" 
                  value="+91 80102 57124"
                  link="tel:+918010257124"
                />
                <ContactInfo 
                  icon={<Mail />} 
                  label="Official Inquiry" 
                  value="officeska2000@gmail.com"
                  link="mailto:officeska2000@gmail.com"
                />
              </div>
              
              {/* Interactive Map Placeholder/Iframe */}
              <div className="h-full min-h-[150px] rounded-3xl overflow-hidden grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700 border border-slate-700">
                <iframe 
                  title="office-location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.4682006394595!2d77.4243623!3d28.6001099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee22c66810a5%3A0x63359d99596395!2sGaur%20City%20Mall!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* --- 3. Footer Bottom Bar --- */}
        <div className="pt-10 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-slate-500">
            <p>© {currentYear} S.K Associates. Member of ICAI.</p>
            <span className="hidden md:block w-1.5 h-1.5 bg-slate-800 rounded-full"></span>
            <div className="flex gap-6">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Sitemap</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
             <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 rounded-full border border-slate-800 shadow-inner">
               <ShieldCheck size={16} className="text-emerald-500" />
               <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">ISO 9001 Certified Practice</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper Components
const FooterLink = ({ to, children }) => (
  <li>
    <Link to={to} className="text-slate-400 font-bold text-sm hover:text-white transition-all flex items-center gap-2 group">
      <div className="w-0 group-hover:w-4 h-0.5 bg-[#007bb6] transition-all rounded-full" />
      {children}
    </Link>
  </li>
);

const ContactInfo = ({ icon, label, value, link }) => (
  <a href={link} target="_blank" rel="noreferrer" className="flex gap-4 group cursor-pointer">
    <div className="p-3 bg-slate-800/50 rounded-2xl group-hover:bg-[#007bb6] transition-all duration-500 group-hover:scale-110">
      {React.cloneElement(icon, { size: 18, className: "text-blue-400 group-hover:text-white" })}
    </div>
    <div className="flex flex-col">
      <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest group-hover:text-blue-500 transition-colors">{label}</span>
      <span className="text-xs font-bold text-slate-300 leading-snug group-hover:text-white transition-colors">{value}</span>
    </div>
  </a>
);

const SocialIcon = ({ icon, href }) => (
  <motion.a 
    whileHover={{ y: -5, scale: 1.1 }}
    href={href} 
    className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center text-slate-400 hover:bg-[#007bb6] hover:text-white transition-all shadow-xl"
  >
    {React.cloneElement(icon, { size: 20 })}
  </motion.a>
);

export default Footer;