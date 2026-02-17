import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, CheckCircle2, Scale, Landmark, FileText, 
  Briefcase, ShieldCheck, Zap, Globe, MessageSquare, 
  Calendar, PieChart, TrendingUp, ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      
      {/* --- 1. HERO SECTION WITH MESH GRADIENT --- */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-600/10 rounded-full blur-[120px]"></div>
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069" 
            alt="Corporate Office" 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
        </div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative z-10 text-center px-6 max-w-6xl"
        >
          <motion.div variants={fadeInUp} className="flex justify-center mb-6">
            <span className="px-5 py-2 text-xs font-bold tracking-[0.2em] text-sky-400 uppercase bg-sky-500/10 backdrop-blur-xl border border-sky-500/20 rounded-full">
              Excellence • Integrity • Reliability
            </span>
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-6xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
            SMART <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007bb6] to-sky-400">FINANCE</span><br/> 
            LEGAL <span className="text-orange-500 italic font-serif">VISION.</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            S.K Associates provides a seamless bridge between complex tax laws and your business success. Empowering enterprises since 2017.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/query" className="group relative bg-[#007bb6] text-white px-12 py-5 rounded-2xl font-bold transition-all overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">Start Consultation <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform"/></span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Link>
            <Link to="/contact" className="text-white font-bold flex items-center gap-3 hover:text-orange-500 transition-colors">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-orange-500">
                <Globe size={20} />
              </div>
              Our Presence
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
        </motion.div>
      </section>

      {/* --- 2. BENTO GRID SERVICES --- */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-[#007bb6] font-bold text-sm tracking-widest uppercase mb-4">Service Ecosystem</h2>
            <h3 className="text-4xl md:text-6xl font-bold dark:text-white tracking-tight">How we empower you</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
            <BentoItem 
              colSpan="md:col-span-2" 
              rowSpan="md:row-span-2"
              icon={<Scale size={40}/>}
              title="Tax Litigation"
              desc="Defending your interests in Income Tax & GST appeals with 4+ partners' collective expertise."
              bg="bg-blue-600"
              img="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070"
            />
            <BentoItem 
              icon={<Zap size={30}/>}
              title="Startup Setup"
              desc="Registration & Licensing for new ventures."
              bg="bg-orange-500"
            />
            <BentoItem 
              icon={<Landmark size={30}/>}
              title="Audit"
              desc="Statutory & Internal Audits."
              bg="bg-slate-800"
            />
            <BentoItem 
              colSpan="md:col-span-2"
              icon={<FileText size={30}/>}
              title="ROC Compliances"
              desc="Monthly and Annual filings made easy for private limited companies."
              bg="bg-[#007bb6]"
            />
          </div>
        </div>
      </section>

      {/* --- 3. PROCESS SECTION (MOBILE RESPONSIVE STEPPER) --- */}
      <section className="py-32 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-orange-500 font-bold mb-4">Our Methodology</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-8">Seamless Compliance in 4 Steps</h3>
              <p className="text-slate-400 mb-12 text-lg">We've refined the consulting process to save you time and mitigate risks effectively.</p>
              
              <div className="space-y-8">
                <ProcessStep number="01" title="Data Collection" desc="Secure digital onboarding of your financial records." />
                <ProcessStep number="02" title="Expert Analysis" desc="Detailed review by our specialized tax partners." />
                <ProcessStep number="03" title="Review & Feedback" desc="Interactive session to discuss tax saving opportunities." />
                <ProcessStep number="04" title="Final Submission" desc="Prompt filing and acknowledgment delivery." />
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 blur-[100px]"></div>
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2111" 
                className="rounded-[40px] shadow-2xl relative z-10 border border-white/10" 
                alt="Process"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. WHY CHOOSE US (FEATURE GRID) --- */}
      <section className="py-32 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-16">
            <Feature icon={<ShieldCheck className="text-blue-500" />} title="Zero Error Policy" desc="Multi-layered review system for every filing." />
            <Feature icon={<TrendingUp className="text-green-500" />} title="Growth Focused" desc="We don't just file taxes; we provide financial insights." />
            <Feature icon={<MessageSquare className="text-orange-500" />} title="Prompt Support" desc="Direct access to partners for critical queries." />
          </div>
        </div>
      </section>

      {/* --- 5. CLIENT TRUST MARQUEE (SIMULATED) --- */}
      <div className="py-12 bg-slate-50 dark:bg-slate-800 border-y border-slate-200 dark:border-slate-700">
         <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
            <span className="text-2xl font-bold text-slate-400">MANUFACTURING</span>
            <span className="text-2xl font-bold text-slate-400">REAL ESTATE</span>
            <span className="text-2xl font-bold text-slate-400">IT SERVICES</span>
            <span className="text-2xl font-bold text-slate-400">E-COMMERCE</span>
            <span className="text-2xl font-bold text-slate-400">HEALTHCARE</span>
         </div>
      </div>
    </div>
  );
};

// --- SUB-COMPONENTS ---

const BentoItem = ({ colSpan = "", rowSpan = "", icon, title, desc, bg, img }) => (
  <motion.div 
    whileHover={{ scale: 0.98 }}
    className={`${colSpan} ${rowSpan} relative group rounded-3xl p-8 overflow-hidden flex flex-col justify-end ${bg} min-h-[250px] shadow-xl`}
  >
    {img && <img src={img} className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-700" alt={title}/>}
    <div className="relative z-10 text-white">
      <div className="mb-4 bg-white/20 w-fit p-3 rounded-2xl backdrop-blur-md">{icon}</div>
      <h4 className="text-2xl font-bold mb-2">{title}</h4>
      <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

const ProcessStep = ({ number, title, desc }) => (
  <div className="flex gap-6 group">
    <span className="text-2xl font-black text-white/20 group-hover:text-orange-500 transition-colors">{number}</span>
    <div>
      <h4 className="text-xl font-bold mb-1">{title}</h4>
      <p className="text-slate-400 text-sm">{desc}</p>
    </div>
  </div>
);

const Feature = ({ icon, title, desc }) => (
  <div className="text-center md:text-left">
    <div className="mb-6 inline-block p-4 bg-slate-100 dark:bg-slate-800 rounded-2xl">{icon}</div>
    <h4 className="text-2xl font-bold mb-4 dark:text-white">{title}</h4>
    <p className="text-slate-500 dark:text-slate-400">{desc}</p>
  </div>
);

export default Home;