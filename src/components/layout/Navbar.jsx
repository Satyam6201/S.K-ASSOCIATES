import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Sun, Moon, ArrowRight } from 'lucide-react';
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
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
      scrolled 
      ? 'h-16 bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl shadow-lg border-b border-slate-200/50 dark:border-slate-800/50' 
      : 'h-20 bg-[#007bb6] dark:bg-slate-900 text-white'
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
        
        {/* --- Logo Section --- */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="bg-white p-1.5 rounded-xl overflow-hidden shadow-md group-hover:scale-105 transition-transform">
            <img src={logo} alt="Logo" className="h-9 w-9 object-contain" />
          </div>
          <div className="flex flex-col">
            <span className={`font-black text-xl tracking-tighter leading-none transition-colors ${
              scrolled ? 'text-slate-900 dark:text-white' : 'text-white'
            }`}>
              S.K ASSOCIATES
            </span>
            <span className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-colors ${
              scrolled ? 'text-[#007bb6] dark:text-sky-400' : 'text-sky-200'
            }`}>
              Tax Consultants
            </span>
          </div>
        </Link>

        {/* --- Desktop Navigation --- */}
        <div className="hidden lg:flex items-center gap-2 h-full">
          {navLinks.map((link) => (
            <div key={link.name} className="relative h-full flex items-center group">
              {link.type === 'dropdown' ? (
                <>
                  <button className={`flex items-center gap-1 px-4 py-2 rounded-xl font-bold text-sm transition-all ${
                    scrolled 
                    ? 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800' 
                    : 'text-white hover:bg-white/10'
                  }`}>
                    {link.name} <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                  </button>
                  
                  {/* Dropdown Menu */}
                  <div className="absolute top-[80%] left-0 invisible group-hover:visible opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                    <div className="mt-4 bg-white dark:bg-slate-800 shadow-2xl rounded-2xl border border-slate-100 dark:border-slate-700 p-2 min-w-[240px]">
                      {link.items.map(item => (
                        <Link 
                          key={item} 
                          to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                          className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-blue-50 dark:hover:bg-slate-700/50 text-slate-700 dark:text-slate-200 text-sm font-bold transition-all group/item"
                        >
                          {item}
                          <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-[#007bb6] dark:text-sky-400" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link 
                  to={link.path}
                  className={`px-4 py-2 rounded-xl font-bold text-sm transition-all ${
                    scrolled 
                    ? 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800' 
                    : 'text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}

          {/* Theme Toggle (Desktop) */}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className={`ml-4 p-2.5 rounded-xl transition-all ${
              scrolled 
              ? 'bg-slate-100 dark:bg-slate-800 text-[#007bb6] dark:text-yellow-400' 
              : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
        </div>

        {/* --- Mobile Controls --- */}
        <div className="lg:hidden flex items-center gap-3">
          <button 
            onClick={toggleTheme} 
            className={`p-2.5 rounded-xl transition-colors ${
              scrolled ? 'bg-slate-100 dark:bg-slate-800 dark:text-yellow-400' : 'bg-white/10'
            }`}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 transition-colors ${scrolled ? 'text-slate-900 dark:text-white' : 'text-white'}`}
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* --- Mobile Menu --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 h-screen w-full bg-white dark:bg-slate-950 z-[110] lg:hidden p-6 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-10">
              <span className="font-black text-2xl text-[#007bb6] dark:text-white">SK ASSOCIATES</span>
              <button onClick={() => setIsOpen(false)} className="p-2 bg-slate-100 dark:bg-slate-900 rounded-full dark:text-white">
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-2">
              {navLinks.map((link, idx) => (
                <motion.div 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  {link.type === 'dropdown' ? (
                    <div className="border-b border-slate-100 dark:border-slate-800">
                      <button 
                        onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                        className="w-full flex justify-between items-center py-5 text-xl font-bold text-slate-800 dark:text-white"
                      >
                        {link.name} <ChevronDown size={20} className={activeDropdown === link.name ? 'rotate-180' : ''} />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === link.name && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden bg-slate-50 dark:bg-slate-900/50 rounded-2xl mb-4"
                          >
                            {link.items.map(item => (
                              <Link 
                                key={item} 
                                to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                className="block px-6 py-4 text-slate-600 dark:text-slate-400 font-medium active:text-[#007bb6]"
                              >
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
                      className="block py-5 text-xl font-bold text-slate-800 dark:text-white border-b border-slate-100 dark:border-slate-800"
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;