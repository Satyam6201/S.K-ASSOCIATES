import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, Phone, Mail, Clock, 
  Linkedin, Twitter, Facebook, 
  ArrowRight, ShieldCheck, Send 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0f172a] text-white pt-20 pb-10 overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- Newsletter / Subscription Section --- */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16 p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-blue-600 to-indigo-700 shadow-2xl items-center">
          <div className="lg:col-span-2">
            <h3 className="text-2xl md:text-3xl font-black mb-2">Subscribe to Tax Alerts</h3>
            <p className="text-blue-100 opacity-80">Stay updated with latest GST notifications and Income Tax deadlines.</p>
          </div>
          <div className="relative">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-blue-100 outline-none focus:ring-2 focus:ring-white/50 transition-all"
            />
            <button className="absolute right-2 top-2 p-3 bg-white text-blue-600 rounded-xl hover:bg-blue-50 transition-colors shadow-lg">
              <Send size={20} />
            </button>
          </div>
        </div>

        {/* --- Main Footer Content --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand Identity */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center font-black text-xl italic shadow-lg shadow-blue-500/20">S</div>
              <h4 className="text-2xl font-black tracking-tight">S.K <span className="text-blue-400">Associates</span></h4>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Premier Financial Advisory firm established in 2017. We bridge the gap between complex tax laws and your business growth with reliability and precision.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<Linkedin />} href="#" />
              <SocialIcon icon={<Twitter />} href="#" />
              <SocialIcon icon={<Facebook />} href="#" />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span> Quick Navigation
            </h4>
            <ul className="space-y-4">
              <FooterLink to="/income-tax">Income Tax Return</FooterLink>
              <FooterLink to="/service-tax">GST & Indirect Tax</FooterLink>
              <FooterLink to="/audit">Audit & Assurance</FooterLink>
              <FooterLink to="/calculators">Financial Tools</FooterLink>
              <FooterLink to="/query">File a Query</FooterLink>
            </ul>
          </div>

          {/* Column 3: Contact Details (Clickable) */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span> Reach Us
            </h4>
            <ul className="space-y-5">
              <li className="flex gap-4 group">
                <div className="p-3 bg-slate-800 rounded-xl group-hover:bg-blue-600 transition-colors shrink-0">
                  <MapPin size={20} className="text-blue-400 group-hover:text-white" />
                </div>
                <span className="text-sm text-slate-400 leading-snug">
                  10th Floor, Office 1063, Gaur City Mall, Greater Noida West, UP-201318
                </span>
              </li>
              <li>
                <a href="tel:+918010257124" className="flex gap-4 group items-center">
                  <div className="p-3 bg-slate-800 rounded-xl group-hover:bg-green-600 transition-colors shrink-0">
                    <Phone size={20} className="text-green-400 group-hover:text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-500 uppercase font-bold">Call Now</span>
                    <span className="text-sm text-slate-300 font-medium">+91 8010257124</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:officeska2000@gmail.com" className="flex gap-4 group items-center">
                  <div className="p-3 bg-slate-800 rounded-xl group-hover:bg-orange-600 transition-colors shrink-0">
                    <Mail size={20} className="text-orange-400 group-hover:text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-500 uppercase font-bold">Email Us</span>
                    <span className="text-sm text-slate-300 font-medium">officeska2000@gmail.com</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Hours & Trust */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span> Availability
            </h4>
            <div className="p-6 bg-slate-800/50 rounded-3xl border border-slate-700/50">
              <div className="flex items-center gap-3 mb-4 text-emerald-400">
                <Clock size={20} />
                <span className="text-sm font-bold uppercase tracking-widest">Office Hours</span>
              </div>
              <p className="text-sm text-slate-300 mb-2">Mon - Sat: 10:00 AM - 07:00 PM</p>
              <p className="text-xs text-slate-500">Sunday: Closed / Prior Appointment</p>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500 px-2">
              <ShieldCheck size={16} className="text-blue-500" />
              <span>Certified ICAI Member Practice</span>
            </div>
          </div>

        </div>

        {/* --- Footer Bottom Bar --- */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {currentYear} S.K Associates. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
          <p className="font-medium italic">Reliability. Promptness. Precision.</p>
        </div>
      </div>
    </footer>
  );
};

// Sub-components for cleaner code
const FooterLink = ({ to, children }) => (
  <li>
    <Link to={to} className="text-slate-400 text-sm hover:text-white hover:translate-x-2 transition-all flex items-center gap-2 group">
      <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-500" />
      {children}
    </Link>
  </li>
);

const SocialIcon = ({ icon, href }) => (
  <a href={href} className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:-translate-y-1 transition-all shadow-lg">
    {React.cloneElement(icon, { size: 18 })}
  </a>
);

export default Footer;