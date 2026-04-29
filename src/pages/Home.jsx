import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Scale, Landmark, FileText, ShieldCheck, Zap,
  Globe, MessageSquare, TrendingUp, CheckCircle2, ChevronRight,
  Target, Award, Users, BarChart3, Briefcase
} from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const { scrollYProgress } = useScroll();
  const smoothY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const scale = useTransform(smoothY, [0, 0.2], [1, 0.95]);

  /* 3D HERO EFFECT */
  const heroRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = heroRef.current.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    });
  };

  return (
    <div className="bg-white dark:bg-slate-950 transition-colors duration-500">
      
      {/* ================= HERO SECTION ================= */}
      <section
        ref={heroRef}
        onMouseMove={handleMouseMove}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#001524] pt-20"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3] 
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-blue-600/20 blur-[150px] rounded-full" 
          />
          <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-[#007bb6]/10 to-transparent" />
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        </div>

        <motion.div
          style={{ 
            rotateY: mousePos.x * 20, 
            rotateX: -mousePos.y * 20,
            scale 
          }}
          className="relative z-10 text-center px-6 max-w-6xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sky-400 text-sm font-bold mb-8 backdrop-blur-md"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
            Trusted by 500+ Corporations Across India
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-white leading-tight tracking-tighter">
            S.K <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#007bb6] to-sky-400">ASSOCIATES</span>
          </h1>

          <p className="mt-8 text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium">
            Bridging the gap between <span className="text-white">Complex Compliance</span> and <span className="text-white">Business Growth</span> with expert Tax & Legal Consultancy since 2017.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link
              to="/query"
              className="w-full sm:w-auto bg-[#007bb6] px-12 py-6 rounded-2xl text-white font-black text-lg flex items-center justify-center gap-3 hover:bg-[#005f8d] shadow-[0_20px_50px_rgba(0,123,182,0.3)] transition-all group"
            >
              Start Free Consultation <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>

            <Link
              to="/contact"
              className="w-full sm:w-auto border border-white/20 px-12 py-6 rounded-2xl text-white font-bold text-lg hover:bg-white/10 backdrop-blur-sm transition-all"
            >
              Our Offices
            </Link>
          </div>
        </motion.div>

        {/* Floating Metrics */}
        <div className="absolute bottom-10 left-0 w-full hidden lg:block">
          <div className="max-w-7xl mx-auto px-6 flex justify-between border-t border-white/10 pt-10">
            <MetricItem label="GST Returns" value="10k+" />
            <MetricItem label="Corporate Clients" value="500+" />
            <MetricItem label="Success Rate" value="99.9%" />
            <MetricItem label="Years of Legacy" value="08+" />
          </div>
        </div>
      </section>

      {/* ================= MARQUEE TICKER ================= */}
      <div className="bg-[#007bb6] py-6 overflow-hidden flex whitespace-nowrap">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 items-center text-white font-black text-2xl uppercase tracking-tighter"
        >
          {[...Array(10)].map((_, i) => (
            <React.Fragment key={i}>
              <span>Income Tax Planning</span>
              <Target className="text-sky-200" />
              <span>GST Compliance</span>
              <ShieldCheck className="text-sky-200" />
              <span>Startup India</span>
              <Zap className="text-sky-200" />
              <span>Company Audit</span>
              <Briefcase className="text-sky-200" />
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-32 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
              <h2 className="text-[#007bb6] font-black tracking-widest uppercase mb-4">The Advantage</h2>
              <h3 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-8 leading-tight">
                Why Industry Leaders Trust S.K Associates?
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-xl mb-10 leading-relaxed">
                We don't just file papers; we build financial fortresses. Our approach combines traditional auditing precision with modern digital compliance.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                <FeaturePoint icon={<Award />} title="Expert Panel" desc="CA, CS, and Legal heads under one roof." />
                <FeaturePoint icon={<Users />} title="Client Centric" desc="Dedicated relationship managers for every SME." />
                <FeaturePoint icon={<BarChart3 />} title="Real-time Tech" desc="Live tracking of your filing status." />
                <FeaturePoint icon={<Globe />} title="Pan India" desc="Services delivered in 20+ states across India." />
              </div>
            </motion.div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#007bb6] to-sky-400 rounded-[3rem] blur-2xl opacity-20 animate-pulse" />
              <div className="relative grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                   <div className="h-64 bg-slate-100 dark:bg-slate-900 rounded-[2rem] p-8 flex flex-col justify-end border border-slate-200 dark:border-slate-800 shadow-xl">
                      <h4 className="text-4xl font-black text-[#007bb6]">98%</h4>
                      <p className="text-slate-500 font-bold uppercase text-xs">Retention Rate</p>
                   </div>
                   <div className="h-48 bg-[#007bb6] rounded-[2rem] p-8 text-white shadow-xl">
                      <Landmark size={32} className="mb-4" />
                      <h4 className="text-xl font-bold leading-tight">Banking Grade Security</h4>
                   </div>
                </div>
                <div className="space-y-4">
                   <div className="h-48 bg-slate-900 rounded-[2rem] p-8 text-white shadow-xl">
                      <TrendingUp size={32} className="mb-4 text-sky-400" />
                      <h4 className="text-xl font-bold leading-tight">Tax Optimization</h4>
                   </div>
                   <div className="h-64 bg-slate-100 dark:bg-slate-900 rounded-[2rem] p-8 flex flex-col justify-end border border-slate-200 dark:border-slate-800 shadow-xl">
                      <h4 className="text-4xl font-black text-[#007bb6]">24/7</h4>
                      <p className="text-slate-500 font-bold uppercase text-xs">Query Support</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="py-32 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-[#007bb6] font-black tracking-widest uppercase mb-4">Our Expertise</h2>
              <h3 className="text-5xl font-black dark:text-white">Comprehensive Financial Solutions</h3>
            </div>
            <Link to="/services" className="flex items-center gap-2 font-black text-[#007bb6] hover:gap-4 transition-all">
              VIEW ALL SERVICES <ChevronRight />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
  icon={<Scale size={32} />} 
  title="Tax Litigation" 
  desc="Expert representation for GST appeals, Income Tax notices, and department hearings."
  color="border-blue-500"
  link="/income-tax"
/>

<ServiceCard 
  icon={<FileText size={32} />} 
  title="GST & Indirect Tax" 
  desc="End-to-end GST management including registration, reconciliation, and refund claims."
  color="border-sky-500"
  link="/gst"
/>

<ServiceCard 
  icon={<Landmark size={32} />} 
  title="Audit & Assurance" 
  desc="Statutory, Tax, and Internal audits designed to add value beyond compliance."
  color="border-indigo-500"
  link="/audit"
/>

<ServiceCard 
  icon={<Zap size={32} />} 
  title="Startup Incorporation" 
  desc="Fast-track Private Limited, LLP registration and Startup India recognition."
  color="border-orange-500"
  link="/contact"
/>

<ServiceCard 
  icon={<ShieldCheck size={32} />} 
  title="ROC Compliance" 
  desc="Maintaining corporate governance with timely filings of AOC-4, MGT-7 and more."
  color="border-emerald-500"
  link="/roc"
/>

<ServiceCard 
  icon={<TrendingUp size={32} />} 
  title="Wealth Management" 
  desc="Strategic tax planning and financial modeling for high-net-worth individuals."
  color="border-rose-500"
  link="/corporate-services"
/>
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-[#001524] to-[#007bb6] rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[100px] rounded-full -mr-32 -mt-32" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8">Ready to Secure Your <br/> Financial Future?</h2>
              <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto">
                Join hundreds of successful businesses who have optimized their taxes with S.K Associates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/query" className="bg-white text-[#007bb6] px-10 py-5 rounded-2xl font-black text-lg shadow-xl hover:scale-105 transition">
                  Book a Discovery Call
                </Link>
                <Link to="/contact" className="bg-blue-800/40 text-white border border-white/20 px-10 py-5 rounded-2xl font-black text-lg backdrop-blur-md hover:bg-blue-800/60 transition">
                  Email Our Experts
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

/* ================= REUSABLE COMPONENTS ================= */

const MetricItem = ({ label, value }) => (
  <div className="text-left">
    <h4 className="text-3xl font-black text-white">{value}</h4>
    <p className="text-slate-400 font-bold text-sm uppercase tracking-widest">{label}</p>
  </div>
);

const FeaturePoint = ({ icon, title, desc }) => (
  <div className="flex gap-4">
    <div className="h-12 w-12 shrink-0 bg-[#007bb6]/10 text-[#007bb6] rounded-xl flex items-center justify-center">
      {icon}
    </div>
    <div>
      <h4 className="font-black text-slate-900 dark:text-white text-lg">{title}</h4>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

const ServiceCard = ({ icon, title, desc, color, link }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className={`bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] border-b-4 ${color} shadow-xl shadow-slate-200/50 dark:shadow-none transition-all group`}
  >
    <div className="mb-6 h-16 w-16 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-[#007bb6] group-hover:bg-[#007bb6] group-hover:text-white transition-colors">
      {icon}
    </div>

    <h4 className="text-2xl font-black mb-4 dark:text-white">
      {title}
    </h4>

    <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
      {desc}
    </p>

    <Link
      to={link}
      className="text-[#007bb6] font-bold flex items-center gap-2 group-hover:gap-3 transition-all"
    >
      Learn More <ArrowRight size={16} />
    </Link>
  </motion.div>
);

export default Home;