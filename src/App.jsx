import React, { useState, useEffect, useLayoutEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import Lenis from '@studio-freight/lenis';

// Layout Components
import TopBar from './components/layout/TopBar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppWidget from './components/ui/WhatsAppWidget';

// Instant Load Pages (Removed Lazy for Smoothness)
import Home from './pages/Home';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Query from './pages/Query';
import IncomeTax from './pages/Services/IncomeTax';
import ServiceTax from './pages/Services/ServiceTax';
import Audit from './pages/Services/Audit';
import CorporateServices from './pages/Services/CorporateServices';
import Accounting from './pages/Services/Accounting';
import ActsRules from './pages/KnowledgeBank/ActsRules';
import Bulletins from './pages/KnowledgeBank/Bulletins';
import Forms from './pages/KnowledgeBank/Forms';
import Utilities from './pages/KnowledgeBank/Utilities';
import Calculators from './pages/KnowledgeBank/Calculators';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import GSTPage from './pages/GSTPage';
import ROCFilings from './pages/ROCFilings';
import Rules from './pages/Rules';

// --- SMOOTH SCROLL ENGINE ---
const ScrollManager = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth inertia
      direction: 'vertical',
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  // Scroll to top instantly on route change
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20, scale: 0.98 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: -20, scale: 1.02 }}
      transition={{ 
        duration: 0.5, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

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
      <ScrollManager />
      
      <div className="relative min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-700">
        
        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-sky-400 to-orange-500 z-[1000] origin-left"
          style={{ scaleX }}
        />

        {/* Global Animated Background Overlay */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full mix-blend-multiply" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full mix-blend-multiply" />
        </div>

        <header className="relative z-[150]">
          <TopBar />
          <Navbar darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)} />
        </header>

        <main className="relative z-10">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
              <Route path="/team" element={<PageWrapper><Team /></PageWrapper>} />
              <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
              <Route path="/query" element={<PageWrapper><Query /></PageWrapper>} />
              
              {/* Services */}
              <Route path="/income-tax" element={<PageWrapper><IncomeTax /></PageWrapper>} />
              <Route path="/service-tax" element={<PageWrapper><ServiceTax /></PageWrapper>} />
              <Route path="/audit" element={<PageWrapper><Audit /></PageWrapper>} />
              <Route path="/corporate-services" element={<PageWrapper><CorporateServices /></PageWrapper>} />
              <Route path="/accounting-services" element={<PageWrapper><Accounting /></PageWrapper>} />
              
              {/* Knowledge Bank */}
              <Route path="/acts" element={<PageWrapper><ActsRules /></PageWrapper>} />
              <Route path="/bulletins" element={<PageWrapper><Bulletins /></PageWrapper>} />
              <Route path="/forms" element={<PageWrapper><Forms /></PageWrapper>} />
              <Route path="/utilities" element={<PageWrapper><Utilities /></PageWrapper>} />
              <Route path="/calculators" element={<PageWrapper><Calculators /></PageWrapper>} />
              <Route path="/privacy-policy" element={<PageWrapper><PrivacyPolicy /></PageWrapper>} />
              <Route path="/terms-of-service" element={<PageWrapper><TermsOfService /></PageWrapper>} />
              <Route path="/gst" element={<PageWrapper><GSTPage /></PageWrapper>} />
              <Route path="/roc" element={<PageWrapper><ROCFilings/></PageWrapper>} />
              <Route path="/rules" element={<PageWrapper><Rules/></PageWrapper>} />
              <Route path="*" element={<PageWrapper><Home /></PageWrapper>} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
        <WhatsAppWidget />
      </div>
    </Router>
  );
};

export default App;