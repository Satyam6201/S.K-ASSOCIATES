import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowRight, ShieldCheck, Zap, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/logo.jpeg';

const Navbar = ({ darkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Team', path: '/team' },
    { 
      name: 'Services', 
      type: 'dropdown', 
      items: [
        { name: 'Income Tax Advisory', path: '/income-tax' },
        { name: 'GST & Indirect Tax', path: '/gst' },
        { name: 'Audit & Assurance', path: '/audit' },
        { name: 'Corporate & ROC', path: '/corporate-services' },
        { name: 'Accounting & CFO', path: '/accounting-services' },
      ]
    },
    { 
      name: 'Knowledge Bank', 
      type: 'dropdown', 
      items: [
        { name: 'Financial Calculators', path: '/calculators' },
        { name: 'Compliance Bulletins', path: '/bulletins' },
        { name: 'Software Utilities', path: '/utilities' },
        { name: 'Acts & Statutes', path: '/acts' },
        { name: 'Regulatory Rules', path: '/rules' },
        { name: 'Downloadable Forms', path: '/forms' },
      ]
    },
    { name: 'Query', path: '/query' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`sticky top-0 w-full z-[100] transition-all duration-500 ease-in-out ${
      scrolled 
      ? 'h-16 lg:h-20 bg-white/95 dark:bg-[#0c152d]/95 backdrop-blur-xl shadow-xl border-b border-slate-200/80 dark:border-slate-800/80' 
      : 'h-16 lg:h-20 bg-gradient-to-r from-[#00355e] via-[#005a96] to-[#007bb6] dark:from-[#081026] dark:via-[#0c183a] dark:to-[#080e1e] text-white border-b border-white/10 dark:border-slate-800/80'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex justify-between items-center">
        <Link to="/" onClick={closeMenu} className="flex items-center gap-2.5 sm:gap-3 group">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className={`relative p-1 rounded-xl bg-white shadow-md transition-all duration-500 ${
              scrolled ? 'h-9 w-9 lg:h-11 lg:w-11' : 'h-10 w-10 lg:h-12 lg:w-12'
            }`}
          >
            <img src={logo} alt="S.K Associates Logo" className="h-full w-full object-contain rounded-lg" />
          </motion.div>

          <div className="flex flex-col">
            <span className={`font-black text-base sm:text-lg lg:text-xl tracking-tighter leading-none transition-all duration-500 ${
              scrolled ? 'text-slate-900 dark:text-white' : 'text-white'
            }`}>
              S.K ASSOCIATES
            </span>
            <div className="flex items-center gap-1">
              <ShieldCheck size={10} className={scrolled ? 'text-[#007bb6] dark:text-sky-400' : 'text-sky-300'} />
              <span className={`text-[8px] sm:text-[9px] lg:text-[10px] uppercase tracking-[0.18em] font-bold transition-colors ${
                scrolled ? 'text-[#007bb6] dark:text-sky-400' : 'text-sky-200'
              }`}>
                Tax Consultants
              </span>
            </div>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-2 h-full">
          {navLinks.map((link) => (
            <div key={link.name} className="relative h-full flex items-center group">
              {link.type === 'dropdown' ? (
                <>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold text-[14px] transition-all ${
                      scrolled 
                      ? 'text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-800' 
                      : 'text-white hover:bg-white/10'
                    }`}
                  >
                    {link.name} 
                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300 text-orange-500" />
                  </motion.button>
                  
                  <div className="absolute top-[80%] left-0 invisible group-hover:visible opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <div className="mt-2 bg-white dark:bg-slate-900 shadow-2xl rounded-2xl border border-slate-100 dark:border-slate-800 p-3 min-w-[250px]">
                      {link.items.map((item) => (
                        <motion.div key={item.name} whileHover={{ x: 4 }}>
                          <Link 
                            to={item.path}
                            onClick={closeMenu}
                            className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-blue-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm font-semibold transition-all group/item"
                          >
                            <span>{item.name}</span>
                            <ArrowRight size={14} className="opacity-0 group-hover/item:opacity-100 text-[#007bb6] dark:text-sky-400 transition-all" />
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    to={link.path}
                    onClick={closeMenu}
                    className={`relative px-4 py-2 rounded-xl font-bold text-[14px] transition-all block ${
                      scrolled 
                      ? 'text-slate-700 dark:text-slate-200 hover:text-[#007bb6] dark:hover:text-sky-400' 
                      : 'text-white hover:bg-white/10'
                    }`}
                  >
                    {link.name}
                    {location.pathname === link.path && (
                      <motion.span layoutId="nav-underline" className="absolute bottom-0 left-4 right-4 h-0.5 bg-orange-500" />
                    )}
                  </Link>
                </motion.div>
              )}
            </div>
          ))}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            aria-label="Toggle Day and Night Mode"
            className={`flex items-center gap-2 px-3.5 py-2 rounded-2xl font-black text-xs uppercase tracking-wider transition-all duration-300 ml-2 shadow-sm border ${
              scrolled 
              ? 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700' 
              : 'bg-white/15 border-white/20 text-white hover:bg-white/25'
            }`}
          >
            {darkMode ? (
              <>
                <Moon size={16} className="text-sky-300 fill-sky-300 animate-pulse" />
                <span>Night</span>
              </>
            ) : (
              <>
                <Sun size={16} className="text-amber-500 fill-amber-400 animate-spin-slow" />
                <span>Day</span>
              </>
            )}
          </motion.button>
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Day and Night Mode"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors border ${
              scrolled 
              ? 'text-slate-800 dark:text-white bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700' 
              : 'text-white bg-white/15 border-white/20'
            }`}
          >
            {darkMode ? <Moon size={16} className="text-sky-300" /> : <Sun size={16} className="text-amber-400" />}
            <span>{darkMode ? 'Night' : 'Day'}</span>
          </button>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className={`p-2 rounded-lg transition-colors ${
              scrolled 
              ? 'text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800' 
              : 'text-white bg-white/10'
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 h-screen w-full bg-[#f4f7fb] dark:bg-[#070d1e] text-slate-900 dark:text-white z-[200] lg:hidden flex flex-col"
          >
            <div className="p-4 sm:p-5 flex justify-between items-center border-b border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-[#0c152d]/80 backdrop-blur-md">
              <div className="flex items-center gap-2.5">
                <img src={logo} alt="S.K Associates Logo" className="h-8 w-8 rounded-lg object-contain bg-white p-0.5" />
                <div>
                  <span className="font-black text-slate-900 dark:text-white text-sm tracking-tight block">S.K ASSOCIATES</span>
                  <span className="text-[9px] uppercase tracking-widest text-[#007bb6] dark:text-sky-400 font-bold block">Tax & Advisory</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={toggleTheme} 
                  aria-label="Toggle Theme"
                  className="p-2 bg-slate-100 dark:bg-slate-800 rounded-xl text-amber-500 dark:text-sky-400 border border-slate-200 dark:border-slate-700"
                >
                  {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                </button>
                <button onClick={closeMenu} aria-label="Close menu" className="p-2 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700">
                  <X size={20} />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
              <div className="flex flex-col gap-2.5">
                {navLinks.map((link, idx) => (
                  <motion.div 
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                  >
                    {link.type === 'dropdown' ? (
                      <div className="rounded-2xl bg-white dark:bg-[#0d1730] overflow-hidden border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
                        <button 
                          onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                          className="w-full flex justify-between items-center p-4 text-base font-bold text-slate-900 dark:text-white"
                        >
                          <span>{link.name}</span>
                          <ChevronDown size={18} className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180 text-orange-500' : 'text-slate-400'}`} />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === link.name && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden bg-slate-50 dark:bg-[#111e3f]/60"
                            >
                              {link.items.map(item => (
                                <Link 
                                  key={item.name} 
                                  to={item.path}
                                  onClick={closeMenu}
                                  className="flex items-center gap-3 p-3.5 pl-6 text-slate-700 dark:text-slate-200 font-semibold border-t border-slate-200/50 dark:border-slate-800/60 text-sm hover:text-[#007bb6] dark:hover:text-sky-400"
                                >
                                  <Zap size={14} className="text-orange-500 shrink-0" />
                                  <span>{item.name}</span>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link 
                        to={link.path}
                        onClick={closeMenu}
                        className="block p-4 rounded-2xl bg-white dark:bg-[#0d1730] text-base font-bold text-slate-900 dark:text-white border border-slate-200/80 dark:border-slate-800/80 hover:text-[#007bb6] dark:hover:text-sky-400 shadow-sm transition-colors"
                      >
                        {link.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="p-4 sm:p-6 border-t border-slate-200/80 dark:border-slate-800 bg-white/90 dark:bg-[#0c152d]/90 backdrop-blur-md space-y-3">
              <div className="grid grid-cols-2 gap-2 text-xs font-bold">
                <a
                  href="tel:+918010257124"
                  className="py-3 px-2 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-xl text-center flex items-center justify-center gap-1.5 border border-slate-200 dark:border-slate-700"
                >
                  Direct Call
                </a>
                <a
                  href="https://wa.me/918010257124"
                  target="_blank"
                  rel="noreferrer"
                  className="py-3 px-2 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-xl text-center flex items-center justify-center gap-1.5 border border-emerald-500/30"
                >
                  WhatsApp
                </a>
              </div>
              <Link 
                to="/query" 
                onClick={closeMenu}
                className="w-full flex justify-center items-center gap-2 py-4 bg-[#007bb6] hover:bg-blue-700 text-white rounded-2xl font-black text-sm shadow-xl shadow-blue-600/30 transition-all"
              >
                Book Free Consultation <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;