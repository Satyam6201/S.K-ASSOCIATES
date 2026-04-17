import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '/src/assets/logo.jpeg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

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
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ease-in-out ${
      scrolled 
      ? 'h-16 lg:h-20 bg-white/90 backdrop-blur-xl shadow-lg border-b border-slate-100' 
      : 'h-20 lg:h-24 bg-[#007bb6] text-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex justify-between items-center">
        
        {/* --- Logo Section --- */}
        <Link to="/" className="flex items-center gap-3 group">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className={`relative p-1 rounded-xl bg-white shadow-md transition-all duration-500 ${
              scrolled ? 'h-10 w-10 lg:h-12 lg:w-12' : 'h-12 w-12 lg:h-14 lg:w-14'
            }`}
          >
            <img src={logo} alt="Logo" className="h-full w-full object-contain rounded-lg" />
          </motion.div>

          <div className="flex flex-col">
            <span className={`font-black text-lg lg:text-xl tracking-tighter leading-none transition-all duration-500 ${
              scrolled ? 'text-slate-900' : 'text-white'
            }`}>
              S.K ASSOCIATES
            </span>
            <div className="flex items-center gap-1">
              <ShieldCheck size={10} className={scrolled ? 'text-[#007bb6]' : 'text-sky-300'} />
              <span className={`text-[9px] lg:text-[10px] uppercase tracking-[0.2em] font-bold transition-colors ${
                scrolled ? 'text-[#007bb6]' : 'text-sky-200'
              }`}>
                Tax Consultants
              </span>
            </div>
          </div>
        </Link>

        {/* --- Desktop Navigation --- */}
        <div className="hidden lg:flex items-center gap-1 h-full">
          {navLinks.map((link) => (
            <div key={link.name} className="relative h-full flex items-center group">
              {link.type === 'dropdown' ? (
                <>
                  <button className={`flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold text-[14px] transition-all ${
                    scrolled ? 'text-slate-700 hover:bg-blue-50' : 'text-white hover:bg-white/10'
                  }`}>
                    {link.name} 
                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300 text-orange-500" />
                  </button>
                  
                  <div className="absolute top-[80%] left-0 invisible group-hover:visible opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <div className="mt-2 bg-white shadow-2xl rounded-2xl border border-slate-100 p-3 min-w-[240px]">
                      {link.items.map((item) => (
                        <Link 
                          key={item} 
                          to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                          className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-blue-50 text-slate-700 text-sm font-semibold transition-all group/item"
                        >
                          <span>{item}</span>
                          <ArrowRight size={14} className="opacity-0 group-hover/item:opacity-100 text-[#007bb6] transition-all" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link 
                  to={link.path}
                  className={`relative px-4 py-2 rounded-xl font-bold text-[14px] transition-all ${
                    scrolled ? 'text-slate-700 hover:text-[#007bb6]' : 'text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.span layoutId="nav-underline" className="absolute bottom-0 left-4 right-4 h-0.5 bg-orange-500" />
                  )}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* --- Mobile Toggle --- */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-slate-900 bg-slate-100' : 'text-white bg-white/10'}`}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* --- Mobile Fullscreen Menu --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 h-screen w-full bg-white z-[200] lg:hidden flex flex-col"
          >
            <div className="p-6 flex justify-between items-center border-b">
              <div className="flex items-center gap-2">
                <img src={logo} alt="Logo" className="h-8 w-8 rounded-md" />
                <span className="font-black text-slate-900">MENU</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 bg-slate-100 rounded-full text-slate-900">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              <div className="flex flex-col gap-4">
                {navLinks.map((link, idx) => (
                  <motion.div 
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    {link.type === 'dropdown' ? (
                      <div className="rounded-2xl bg-slate-50 overflow-hidden">
                        <button 
                          onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                          className="w-full flex justify-between items-center p-4 text-xl font-bold text-slate-900"
                        >
                          {link.name} 
                          <ChevronDown size={20} className={`transition-transform ${activeDropdown === link.name ? 'rotate-180 text-orange-500' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === link.name && (
                            <motion.div 
                              initial={{ height: 0 }}
                              animate={{ height: 'auto' }}
                              exit={{ height: 0 }}
                              className="overflow-hidden bg-slate-100/50"
                            >
                              {link.items.map(item => (
                                <Link 
                                  key={item} 
                                  to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                  className="flex items-center gap-3 p-4 pl-6 text-slate-600 font-semibold border-t border-white"
                                >
                                  <Zap size={14} className="text-orange-500" />
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
                        className="block p-4 text-xl font-bold text-slate-900 hover:text-[#007bb6] transition-colors"
                      >
                        {link.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="p-6">
              <Link to="/contact" className="flex justify-center items-center gap-2 py-4 bg-[#007bb6] text-white rounded-2xl font-bold shadow-lg">
                Contact Us <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;