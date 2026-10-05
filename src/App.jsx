import React, { useState, useEffect, useLayoutEffect, lazy, Suspense, memo } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';

import TopBar from './components/layout/TopBar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppWidget from './components/ui/WhatsAppWidget';

const Home = lazy(() => import('./pages/Home'));
const Team = lazy(() => import('./pages/Team'));
const Contact = lazy(() => import('./pages/Contact'));
const Query = lazy(() => import('./pages/Query'));
const IncomeTax = lazy(() => import('./pages/Services/IncomeTax'));
const ServiceTax = lazy(() => import('./pages/Services/ServiceTax'));
const Audit = lazy(() => import('./pages/Services/Audit'));
const CorporateServices = lazy(() => import('./pages/Services/CorporateServices'));
const Accounting = lazy(() => import('./pages/Services/Accounting'));
const ActsRules = lazy(() => import('./pages/KnowledgeBank/ActsRules'));
const Bulletins = lazy(() => import('./pages/KnowledgeBank/Bulletins'));
const Forms = lazy(() => import('./pages/KnowledgeBank/Forms'));
const Utilities = lazy(() => import('./pages/KnowledgeBank/Utilities'));
const Calculators = lazy(() => import('./pages/KnowledgeBank/Calculators'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const GSTPage = lazy(() => import('./pages/GSTPage'));
const ROCFilings = lazy(() => import('./pages/ROCFilings'));
const Rules = lazy(() => import('./pages/Rules'));
const Login = lazy(() => import('./pages/Admin/Login'));
const NotFound = lazy(() => import('./pages/NotFound'));

const ScrollManager = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Isolated Scroll Progress Bar (Prevents root App re-renders during window scrolling)
const ScrollProgressBar = memo(() => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-sky-400 to-orange-500 z-[1000] origin-left shadow-md pointer-events-none"
      style={{ scaleX }}
    />
  );
});

ScrollProgressBar.displayName = 'ScrollProgressBar';

const PageLoader = () => (
  <div className="min-h-[70vh] flex flex-col items-center justify-center gap-4 bg-[#f4f7fb] dark:bg-[#070d1e]">
    <div className="w-12 h-12 border-4 border-[#007bb6] border-t-transparent rounded-full animate-spin" />
    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Loading S.K Associates...</p>
  </div>
);

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/team" element={<PageWrapper><Team /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="/query" element={<PageWrapper><Query /></PageWrapper>} />
        
        <Route path="/income-tax" element={<PageWrapper><IncomeTax /></PageWrapper>} />
        <Route path="/service-tax" element={<PageWrapper><ServiceTax /></PageWrapper>} />
        <Route path="/audit" element={<PageWrapper><Audit /></PageWrapper>} />
        <Route path="/corporate-services" element={<PageWrapper><CorporateServices /></PageWrapper>} />
        <Route path="/accounting-services" element={<PageWrapper><Accounting /></PageWrapper>} />
        
        <Route path="/acts" element={<PageWrapper><ActsRules /></PageWrapper>} />
        <Route path="/bulletins" element={<PageWrapper><Bulletins /></PageWrapper>} />
        <Route path="/forms" element={<PageWrapper><Forms /></PageWrapper>} />
        <Route path="/utilities" element={<PageWrapper><Utilities /></PageWrapper>} />
        <Route path="/calculators" element={<PageWrapper><Calculators /></PageWrapper>} />
        <Route path="/privacy-policy" element={<PageWrapper><PrivacyPolicy /></PageWrapper>} />
        <Route path="/terms-of-service" element={<PageWrapper><TermsOfService /></PageWrapper>} />
        <Route path="/gst" element={<PageWrapper><GSTPage /></PageWrapper>} />
        <Route path="/roc" element={<PageWrapper><ROCFilings /></PageWrapper>} />
        <Route path="/rules" element={<PageWrapper><Rules /></PageWrapper>} />
        <Route path="/calendar" element={<PageWrapper><Rules /></PageWrapper>} />
        <Route path="/tds" element={<PageWrapper><Calculators /></PageWrapper>} />
        <Route path="/login" element={<PageWrapper><Login /></PageWrapper>} />
        <Route path="/admin" element={<PageWrapper><Login /></PageWrapper>} />
        <Route path="/email-login" element={<PageWrapper><Login /></PageWrapper>} />
        <Route path="/time-sheet" element={<PageWrapper><Login /></PageWrapper>} />
        <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    const body = window.document.body;
    if (darkMode) {
      root.classList.add('dark');
      body.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      body.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = React.useCallback(() => {
    setDarkMode(prev => !prev);
  }, []);

  return (
    <Router>
      <ScrollManager />
      
      <div className="relative min-h-screen bg-gradient-to-b from-[#f4f7fb] via-[#ebf3fc] to-[#f4f7fb] dark:from-[#070d1e] dark:via-[#0c1630] dark:to-[#070d1e] text-slate-900 dark:text-slate-100 transition-colors duration-500">
        <ScrollProgressBar />

        <div className="fixed inset-0 pointer-events-none z-0 bg-mesh-light dark:bg-mesh-dark transition-colors duration-500" />

        <header className="relative z-[150]">
          <TopBar />
          <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
        </header>

        <main className="relative z-10">
          <Suspense fallback={<PageLoader />}>
            <AnimatedRoutes />
          </Suspense>
        </main>

        <Footer />
        <WhatsAppWidget />
      </div>
    </Router>
  );
};

export default App;