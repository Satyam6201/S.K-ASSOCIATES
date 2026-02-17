import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';

// Layout Components
import TopBar from './components/layout/TopBar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppWidget from './components/ui/WhatsAppWidget';

// Lazy Loaded Pages
const Home = React.lazy(() => import('./pages/Home'));
const Team = React.lazy(() => import('./pages/Team'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Query = React.lazy(() => import('./pages/Query'));

// Service Pages
const IncomeTax = React.lazy(() => import('./pages/Services/IncomeTax'));
const ServiceTax = React.lazy(() => import('./pages/Services/ServiceTax'));
const Audit = React.lazy(() => import('./pages/Services/Audit'));
const CorporateServices = React.lazy(() => import('./pages/Services/CorporateServices'));
const Accounting = React.lazy(() => import('./pages/Services/Accounting'));

// Knowledge Bank
const ActsRules = React.lazy(() => import('./pages/KnowledgeBank/ActsRules'));
const Bulletins = React.lazy(() => import('./pages/KnowledgeBank/Bulletins'));
const Forms = React.lazy(() => import('./pages/KnowledgeBank/Forms'));
const Utilities = React.lazy(() => import('./pages/KnowledgeBank/Utilities'));
const Calculators = React.lazy(() => import('./pages/KnowledgeBank/Calculators'));

const PageLoader = () => (
  <div className="h-[60vh] w-full flex flex-col items-center justify-center bg-transparent">
    <motion.div 
      animate={{ rotate: 360, borderRadius: ["20%", "50%", "20%"] }}
      transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      className="w-16 h-16 border-4 border-blue-600 border-t-orange-500"
    />
  </div>
);

const PageTransition = ({ children }) => {
  const location = useLocation();
  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
};

const App = () => {
  // 1. IMPROVED: Initialize theme based on storage OR system preference
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // 2. FEATURE: The "Bridge" between React State and Tailwind HTML Class
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <Router>
      {/* 3. FEATURE: Apply transition classes to the wrapper */}
      <div className="relative min-h-screen transition-colors duration-500 ease-in-out bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-blue-600/30">
        
        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-600 to-orange-500 z-[999] origin-left"
          style={{ scaleX }}
        />

        {/* Dynamic Background Mesh (Updates color based on theme) */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: darkMode ? 0.3 : 0.6 }}
            className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-[120px]" 
          />
          <motion.div 
            animate={{ scale: [1, 1.3, 1], opacity: darkMode ? 0.2 : 0.4 }}
            className="absolute bottom-[-10%] right-[-5%] w-[50vw] h-[50vw] bg-orange-400/20 dark:bg-orange-600/5 rounded-full blur-[120px]" 
          />
        </div>

        <header className="z-[150] relative">
          <TopBar />
          {/* Pass the theme state and toggle function to Navbar */}
          <Navbar darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)} />
        </header>

        <main className="relative z-10">
          <Suspense fallback={<PageLoader />}>
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<PageTransition><Home /></PageTransition>} />
                <Route path="/team" element={<PageTransition><Team /></PageTransition>} />
                <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
                <Route path="/query" element={<PageTransition><Query /></PageTransition>} />
                {/* ... other routes remain the same ... */}
                <Route path="/income-tax" element={<PageTransition><IncomeTax /></PageTransition>} />
                <Route path="/service-tax" element={<PageTransition><ServiceTax /></PageTransition>} />
                <Route path="/audit" element={<PageTransition><Audit /></PageTransition>} />
                <Route path="/corporate-services" element={<PageTransition><CorporateServices /></PageTransition>} />
                <Route path="/accounting-services" element={<PageTransition><Accounting /></PageTransition>} />
                <Route path="/acts" element={<PageTransition><ActsRules /></PageTransition>} />
                <Route path="/bulletins" element={<PageTransition><Bulletins /></PageTransition>} />
                <Route path="/forms" element={<PageTransition><Forms /></PageTransition>} />
                <Route path="/utilities" element={<PageTransition><Utilities /></PageTransition>} />
                <Route path="/calculators" element={<PageTransition><Calculators /></PageTransition>} />
                <Route path="*" element={<PageTransition><Home /></PageTransition>} />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </main>

        <Footer />
        <WhatsAppWidget />
      </div>
    </Router>
  );
};

export default App;