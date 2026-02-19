import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Scale,
  Landmark,
  FileText,
  ShieldCheck,
  Zap,
  Globe,
  MessageSquare,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";

/* =========================
   MAIN COMPONENT
========================= */

const Home = () => {
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, -120]);

  /* 3D HERO EFFECT */
  const heroRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;

    setRotateY(((x - midX) / midX) * 8);
    setRotateX(-((y - midY) / midY) * 8);
  };

  return (
    <div className="overflow-hidden bg-slate-50 dark:bg-slate-950">

      {/* ================= HERO ================= */}
      <section
        ref={heroRef}
        onMouseMove={handleMouseMove}
        className="relative min-h-screen flex items-center justify-center bg-slate-900 overflow-hidden perspective-[1200px]"
      >
        {/* Gradient lights */}
        <div className="absolute inset-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/20 blur-[120px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-500/20 blur-[120px] rounded-full"></div>
        </div>

        <motion.div
          style={{ transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` }}
          className="relative z-10 text-center px-6 max-w-5xl transition-transform duration-200"
        >
          <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9]">
            S.K <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">Associates</span>
          </h1>

          <p className="mt-8 text-xl text-slate-300 leading-relaxed">
            Chartered Accountant & Legal Consultancy Firm providing GST, Income Tax,
            Company Registration, Audit, Compliance & Financial Advisory Services
            across India since 2017.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/query"
              className="bg-[#007bb6] px-10 py-5 rounded-2xl text-white font-bold flex items-center gap-2 hover:scale-105 transition"
            >
              Free Consultation <ArrowRight />
            </Link>

            <Link
              to="/contact"
              className="border border-white/20 px-10 py-5 rounded-2xl text-white hover:bg-white/10 transition"
            >
              Contact Office
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-32 bg-gradient-to-b from-slate-900 to-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

          <motion.div initial={{opacity:0,x:-80}} whileInView={{opacity:1,x:0}} transition={{duration:0.8}}>
            <h2 className="text-sky-400 uppercase tracking-widest mb-4">About Firm</h2>
            <h3 className="text-5xl font-bold mb-8">
              Trusted Financial & Legal Advisors
            </h3>

            <p className="text-slate-400 text-lg mb-6 leading-relaxed">
              S.K Associates is a multidisciplinary consultancy firm specializing in
              taxation, corporate law compliance, and financial advisory services.
              We assist startups, SMEs, professionals, and companies in managing
              regulatory compliance under GST, Income Tax, MCA, and Startup India.
            </p>

            <ul className="space-y-4 text-slate-300">
              <li className="flex gap-3"><CheckCircle2 className="text-sky-400"/> GST Registration & Returns</li>
              <li className="flex gap-3"><CheckCircle2 className="text-sky-400"/> Company & LLP Incorporation</li>
              <li className="flex gap-3"><CheckCircle2 className="text-sky-400"/> Income Tax & Audit</li>
              <li className="flex gap-3"><CheckCircle2 className="text-sky-400"/> ROC & Compliance Filings</li>
            </ul>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            <StatCard number="500+" label="Businesses Served"/>
            <StatCard number="8+" label="Years Experience"/>
            <StatCard number="1000+" label="Returns Filed"/>
            <StatCard number="99%" label="Client Satisfaction"/>
          </div>

        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-[#007bb6] uppercase tracking-widest mb-4 font-bold">Our Services</h2>
          <h3 className="text-5xl font-bold dark:text-white">Professional Solutions</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          <ServiceCard icon={<Scale size={40}/>} title="Tax Litigation" desc="Representation before Income Tax & GST departments."/>
          <ServiceCard icon={<FileText size={40}/>} title="GST & Returns" desc="Monthly/Quarterly filings and compliance handling."/>
          <ServiceCard icon={<Landmark size={40}/>} title="Audit Services" desc="Statutory, Internal & Tax Audits."/>
          <ServiceCard icon={<Zap size={40}/>} title="Startup Registration" desc="Private Ltd, LLP, MSME & Startup India."/>
          <ServiceCard icon={<ShieldCheck size={40}/>} title="ROC Compliance" desc="Annual returns, board resolutions & filings."/>
          <ServiceCard icon={<TrendingUp size={40}/>} title="Financial Advisory" desc="Tax saving & business growth strategies."/>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-32 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-center text-5xl font-bold mb-20">Our Working Process</h2>

          <div className="space-y-12">
            <ProcessStep number="01" title="Consultation" desc="Understanding your business and compliance requirements."/>
            <ProcessStep number="02" title="Document Collection" desc="Secure onboarding and record verification."/>
            <ProcessStep number="03" title="Expert Analysis" desc="Tax planning and legal review by professionals."/>
            <ProcessStep number="04" title="Filing & Support" desc="Submission and continuous support after filing."/>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-32 bg-slate-950 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-16">Client Testimonials</h2>

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex gap-8"
          >
            <Testimonial name="Rohit Sharma" text="Handled my GST notice quickly. Very professional team."/>
            <Testimonial name="Priya Enterprises" text="Company registration completed within 5 days."/>
            <Testimonial name="Ankit Verma" text="Best CA consultancy experience ever."/>
            <Testimonial name="TechNova Pvt Ltd" text="Perfect ROC compliance and audit support."/>
          </motion.div>

        </div>
      </section>

      {/* ================= TRUST BADGES ================= */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-12 opacity-60">
          <span className="font-bold text-2xl">GST</span>
          <span className="font-bold text-2xl">INCOME TAX</span>
          <span className="font-bold text-2xl">MCA</span>
          <span className="font-bold text-2xl">MSME</span>
          <span className="font-bold text-2xl">STARTUP INDIA</span>
        </div>
      </section>

    </div>
  );
};

/* ================= COMPONENTS ================= */

const StatCard = ({ number, label }) => (
  <motion.div
    whileHover={{ scale:1.05, rotateX:6, rotateY:-6 }}
    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center"
  >
    <h4 className="text-4xl font-black text-sky-400">{number}</h4>
    <p className="text-slate-400">{label}</p>
  </motion.div>
);

const ServiceCard = ({ icon, title, desc }) => (
  <motion.div
    whileHover={{ scale:1.05, rotateX:8, rotateY:-8 }}
    className="bg-white/5 border border-slate-200 dark:border-white/10 p-10 rounded-3xl backdrop-blur-xl text-center shadow-xl"
  >
    <div className="mb-6 flex justify-center text-sky-400">{icon}</div>
    <h4 className="text-2xl font-bold mb-4 dark:text-white">{title}</h4>
    <p className="text-slate-500 dark:text-slate-400">{desc}</p>
  </motion.div>
);

const ProcessStep = ({ number, title, desc }) => (
  <div className="flex gap-6">
    <span className="text-4xl font-black text-orange-500">{number}</span>
    <div>
      <h4 className="text-2xl font-bold mb-2">{title}</h4>
      <p className="text-slate-400">{desc}</p>
    </div>
  </div>
);

const Testimonial = ({ name, text }) => (
  <div className="min-w-[350px] bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl">
    <p className="text-slate-300 mb-6">"{text}"</p>
    <h4 className="text-sky-400 font-bold">{name}</h4>
  </div>
);

export default Home;