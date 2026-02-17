import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Sun, Moon, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '/src/assets/logo.jpeg';

const Navbar = ({ darkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Team', path: '/team' },
    { 
      name: 'Services', 
      type: 'dropdown', 
      items: ['Income Tax', 'Service Tax', 'Audit', 'TDS', 'Corporate Services', 'Accounting Services'] 
    },
    { 
      name: 'Knowledge Bank', 
      type: 'dropdown', 
      items: ['Calculators', 'Bulletins', 'Utilities', 'Acts', 'Rules', 'Forms'] 
    },
    { name: 'Query', path: '/query' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-700 ease-in-out ${
      scrolled 
      ? 'h-20 bg-white/80 dark:bg-slate-950/80 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] border-b border-white/20 dark:border-slate-800/50' 
      : 'h-24 bg-[#007bb6] dark:bg-slate-900 text-white'
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
        
        {/* --- 1. Dynamic Logo Section --- */}
        <Link to="/" className="flex items-center gap-4 group relative">
          <motion.div 
            whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
            className={`relative p-1 rounded-2xl bg-white shadow-2xl transition-all duration-500 ${
              scrolled ? 'h-14 w-14' : 'h-16 w-16'
            }`}
          >
            <img src={logo} alt="Logo" className="h-full w-full object-contain rounded-xl" />
            {/* Status Dot */}
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-orange-500 border-2 border-white dark:border-slate-900"></span>
            </span>
          </motion.div>

          <div className="flex flex-col">
            <span className={`font-black text-2xl tracking-tighter leading-none transition-all duration-500 ${
              scrolled ? 'text-slate-900 dark:text-white scale-95' : 'text-white scale-100'
            }`}>
              S.K ASSOCIATES
            </span>
            <div className="flex items-center gap-1">
              <ShieldCheck size={12} className={scrolled ? 'text-[#007bb6]' : 'text-sky-300'} />
              <span className={`text-[11px] uppercase tracking-[0.3em] font-extrabold transition-colors ${
                scrolled ? 'text-[#007bb6] dark:text-sky-400' : 'text-sky-200'
              }`}>
                Tax Consultants
              </span>
            </div>
          </div>
        </Link>

        {/* --- 2. Desktop Navigation --- */}
        <div className="hidden lg:flex items-center gap-1 h-full">
          {navLinks.map((link) => (
            <div key={link.name} className="relative h-full flex items-center group">
              {link.type === 'dropdown' ? (
                <>
                  <button className={`flex items-center gap-1.5 px-5 py-2.5 rounded-2xl font-bold text-[15px] transition-all duration-300 ${
                    scrolled 
                    ? 'text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-800' 
                    : 'text-white hover:bg-white/10'
                  }`}>
                    {link.name} 
                    <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-500 ease-out text-orange-500" />
                  </button>
                  
                  {/* Ultra-Styled Dropdown */}
                  <div className="absolute top-[85%] left-[-20px] invisible group-hover:visible opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]">
                    <div className="mt-4 bg-white dark:bg-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-blue-900/10 rounded-[2rem] border border-slate-100 dark:border-slate-800 p-4 min-w-[280px]">
                      <div className="grid grid-cols-1 gap-1">
                        {link.items.map((item, i) => (
                          <Link 
                            key={item} 
                            to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                            className="flex items-center justify-between px-5 py-4 rounded-2xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-white dark:hover:from-slate-800 dark:hover:to-slate-900 text-slate-700 dark:text-slate-300 text-sm font-bold transition-all group/item"
                          >
                            <span className="group-hover/item:translate-x-1 transition-transform">{item}</span>
                            <div className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 opacity-0 group-hover/item:opacity-100 transition-all">
                                <ArrowRight size={14} className="text-[#007bb6] dark:text-sky-400" />
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <Link 
                  to={link.path}
                  className={`relative px-5 py-2.5 rounded-2xl font-bold text-[15px] transition-all duration-300 ${
                    scrolled 
                    ? 'text-slate-700 dark:text-slate-200 hover:text-[#007bb6]' 
                    : 'text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.span layoutId="nav-underline" className="absolute bottom-0 left-5 right-5 h-0.5 bg-orange-500 rounded-full" />
                  )}
                </Link>
              )}
            </div>
          ))}

          {/* Theme Switcher with Hover Label */}
          <div className="relative flex items-center ml-4">
            <motion.button 
              whileHover={{ rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className={`p-3 rounded-2xl transition-all shadow-xl border ${
                scrolled 
                ? 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-[#007bb6] dark:text-yellow-400' 
                : 'bg-white/10 border-white/10 text-white hover:bg-white/20'
              }`}
            >
              {darkMode ? <Sun size={22} fill="currentColor" /> : <Moon size={22} fill="currentColor" />}
            </motion.button>
          </div>
        </div>

        {/* --- 3. Mobile Controls --- */}
        <div className="lg:hidden flex items-center gap-4">
          <button 
            onClick={toggleTheme} 
            className={`p-3 rounded-2xl transition-all ${
              scrolled ? 'bg-slate-100 dark:bg-slate-800 dark:text-yellow-400' : 'bg-white/10'
            }`}
          >
            {darkMode ? <Sun size={22} /> : <Moon size={22} />}
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`relative p-2 transition-transform active:scale-90 ${scrolled ? 'text-slate-900 dark:text-white' : 'text-white'}`}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* --- 4. Mobile Fullscreen Menu --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-0 h-screen w-full bg-slate-50 dark:bg-slate-950 z-[200] lg:hidden flex flex-col"
          >
            {/* Mobile Menu Header */}
            <div className="p-8 flex justify-between items-center bg-white dark:bg-slate-900 shadow-sm">
              <div className="flex items-center gap-3">
                <img src={logo} alt="Logo" className="h-10 w-10 rounded-lg shadow-lg" />
                <span className="font-black text-xl dark:text-white">NAVIGATION</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-3 bg-slate-100 dark:bg-slate-800 rounded-2xl dark:text-white">
                <X size={28} />
              </button>
            </div>

            {/* Scrollable Links */}
            <div className="flex-1 overflow-y-auto px-8 py-10 space-y-6">
              {navLinks.map((link, idx) => (
                <motion.div 
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  {link.type === 'dropdown' ? (
                    <div className="space-y-4">
                      <button 
                        onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                        className="w-full flex justify-between items-center text-3xl font-black text-slate-900 dark:text-white"
                      >
                        {link.name} 
                        <ChevronDown size={28} className={`transition-transform duration-500 ${activeDropdown === link.name ? 'rotate-180 text-orange-500' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === link.name && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="grid grid-cols-1 gap-3 pl-4 overflow-hidden"
                          >
                            {link.items.map(item => (
                              <Link 
                                key={item} 
                                to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                className="flex items-center gap-3 py-3 text-xl font-bold text-slate-500 dark:text-slate-400 active:text-[#007bb6]"
                              >
                                <Zap size={16} className="text-orange-500" />
                                {item}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link 
                      to={link.path}
                      className="block text-3xl font-black text-slate-900 dark:text-white transition-transform active:translate-x-2"
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Mobile Footer CTA */}
            <div className="p-8 bg-gradient-to-br from-[#007bb6] to-blue-800 rounded-t-[3rem]">
                <p className="text-blue-100 text-sm mb-4 font-bold tracking-widest uppercase text-center">Ready to discuss your taxes?</p>
                <Link to="/contact" className="w-full flex justify-center items-center gap-3 py-5 bg-white text-[#007bb6] rounded-3xl font-black text-lg shadow-2xl">
                    Schedule a Consultation <ArrowRight size={20} />
                </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;