import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scale, FileText, Landmark, Zap, ShieldCheck, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServiceCard = ({ icon, title, desc, color, link, category }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    whileHover={{ y: -12, scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className={`bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] border-b-4 ${color} shadow-xl shadow-slate-200/50 dark:shadow-none transition-all group border-t border-x border-slate-200/60 dark:border-slate-800 flex flex-col justify-between hover:shadow-2xl`}
  >
    <div>
      <div className="mb-6 h-16 w-16 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-[#007bb6] dark:text-sky-400 group-hover:bg-[#007bb6] group-hover:text-white group-hover:rotate-6 transition-all duration-300">
        {icon}
      </div>

      <span className="text-[10px] font-black uppercase tracking-widest text-[#007bb6] dark:text-sky-400 mb-2 block">{category}</span>

      <h4 className="text-2xl font-black mb-4 dark:text-white group-hover:text-[#007bb6] dark:group-hover:text-sky-400 transition-colors">
        {title}
      </h4>

      <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6 font-medium text-sm">
        {desc}
      </p>
    </div>

    <Link
      to={link}
      className="text-[#007bb6] dark:text-sky-400 font-bold flex items-center gap-2 group-hover:gap-4 transition-all text-sm pt-4 border-t border-slate-100 dark:border-slate-800"
    >
      Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
    </Link>
  </motion.div>
);

const ServicesGridSection = () => {
  const [activeTab, setActiveTab] = useState("All");

  const services = [
    {
      category: "Taxation",
      icon: <Scale size={32} />,
      title: "Tax Litigation & Appeals",
      desc: "Expert representation for GST appeals, Income Tax scrutiny notices, and CIT department hearings.",
      color: "border-blue-500",
      link: "/income-tax"
    },
    {
      category: "GST",
      icon: <FileText size={32} />,
      title: "GST & Indirect Taxation",
      desc: "End-to-end GST management including registration, 2B reconciliation, LUT for exports, and refund claims.",
      color: "border-sky-500",
      link: "/gst"
    },
    {
      category: "Audit",
      icon: <Landmark size={32} />,
      title: "Statutory & Internal Audit",
      desc: "Statutory, Tax u/s 44AB, and Internal audits designed to ensure financial transparency and ICAI compliance.",
      color: "border-indigo-500",
      link: "/audit"
    },
    {
      category: "Corporate",
      icon: <Zap size={32} />,
      title: "Startup & Entity Incorporation",
      desc: "Fast-track Private Limited, LLP registration, Section 8 NGO, and Startup India recognition.",
      color: "border-amber-500",
      link: "/corporate-services"
    },
    {
      category: "Corporate",
      icon: <ShieldCheck size={32} />,
      title: "ROC & MCA Compliances",
      desc: "Maintaining corporate governance with timely filings of AOC-4, MGT-7, DIR-3 KYC, and Board minutes.",
      color: "border-emerald-500",
      link: "/roc"
    },
    {
      category: "Advisory",
      icon: <TrendingUp size={32} />,
      title: "Virtual CFO & Accounting",
      desc: "Strategic financial planning, cash flow management, cloud bookkeeping, and MIS reporting.",
      color: "border-rose-500",
      link: "/accounting-services"
    }
  ];

  const filteredServices = activeTab === "All" ? services : services.filter(s => s.category === activeTab);

  return (
    <section className="py-32 bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-[#007bb6] dark:text-sky-400 font-black tracking-widest uppercase mb-4 text-xs">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-black dark:text-white tracking-tight">Comprehensive Financial & Legal Verticals</h3>
          </div>

          <div className="flex overflow-x-auto no-scrollbar gap-2 p-1.5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md">
            {["All", "Taxation", "GST", "Audit", "Corporate", "Advisory"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all whitespace-nowrap ${
                  activeTab === tab 
                  ? "bg-[#007bb6] text-white shadow-md" 
                  : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGridSection;
