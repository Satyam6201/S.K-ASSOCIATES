import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Clock, 
  AlertCircle, 
  CheckCircle2, 
  Scale, 
  Calendar,
  Building2,
  FileCheck2,
  Sparkles,
  ArrowRight,
  Landmark
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';

const ROCFilings = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#f4f7fb] via-[#eaf2fb] to-[#f4f7fb] dark:from-[#070d1e] dark:via-[#0c1630] dark:to-[#070d1e] text-slate-900 dark:text-slate-100 transition-colors duration-500">
      <SEO 
        title="MCA ROC Annual Filings | AOC-4, MGT-7, DIR-3 KYC"
        description="Avoid ₹100/day MCA default penalties. S.K Associates manages annual ROC compliance (AOC-4, MGT-7, Form 11), director KYC, and board secretarial maintenance."
        keywords="ROC Filings Noida, MCA AOC 4 MGT 7, Director KYC DIR 3, Company Annual Compliances, LLP Form 11"
        canonicalPath="/roc"
        breadcrumbs={[
          { name: "Services", url: "/" },
          { name: "ROC Filings", url: "/roc" }
        ]}
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-gradient-to-br from-[#002f56] via-[#005f9e] to-[#007bb6] dark:from-[#070d1e] dark:via-[#0c183a] dark:to-[#070d1e] transition-colors duration-500 border-b border-white/10">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-400/20 dark:bg-blue-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/15 dark:bg-orange-600/10 rounded-full blur-[120px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-sky-200 dark:text-sky-300 font-bold text-xs mb-6 border border-white/20 backdrop-blur-md">
              <Sparkles size={14} className="text-amber-400" /> MCA V3 Corporate Secretarial Vertical
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
              ROC & <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-white to-amber-300">MCA Compliance</span>
            </h1>
            <p className="text-slate-200 text-base sm:text-lg md:text-xl leading-relaxed font-medium">
              Stay ahead of statutory MCA deadlines. We provide end-to-end secretarial support for Private Limited Companies, LLPs, and Section 8 NGOs under the Companies Act, 2013.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/query" className="w-full sm:w-auto bg-[#007bb6] text-white px-8 py-4 rounded-2xl font-bold hover:bg-sky-600 transition-all shadow-lg flex items-center justify-center gap-2">
                File Annual ROC Return <ArrowRight size={18} />
              </Link>
              <Link to="/rules" className="w-full sm:w-auto bg-white/10 text-white border border-white/20 px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition-all text-center">
                Review MCA Regulatory Rules
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Deadline Matrix Cards */}
      <section className="py-10 -mt-10 relative z-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <DeadlineCard form="MSME-1" date="30th April" status="Half Yearly" desc="Outstanding payments to micro & small suppliers" />
            <DeadlineCard form="DPT-3" date="30th June" status="Annual Return" desc="Return of deposits and exempt transactions" />
            <DeadlineCard form="DIR-3 KYC" date="30th Sept" status="Director Annual" desc="Mandatory annual e-KYC for all DIN holders" />
            <DeadlineCard form="AOC-4" date="30 Days from AGM" status="Financials" desc="Filing balance sheet and P&L statement" />
          </div>
        </div>
      </section>

      {/* Statutory Services Grid */}
      <section className="py-20 sm:py-28 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-[#007bb6] dark:text-sky-400 font-black tracking-widest uppercase text-xs">Statutory Services</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black dark:text-white mt-2">Professional Secretarial Solutions</h2>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            <ServiceDetailCard 
              icon={<Building2 className="text-orange-500" size={28} />}
              title="Annual Compliances"
              items={['Preparation of Board Reports', 'MGT-7 / MGT-7A (Annual Return)', 'AOC-4 (Financial Statements)', 'ADT-1 (Auditor Appointment)']}
            />
            <ServiceDetailCard 
              icon={<Scale className="text-blue-500" size={28} />}
              title="Event Based Filings"
              items={['Change in Directors (DIR-12)', 'Registered Office Shifting (INC-22)', 'Increase in Authorized Capital (SH-7)', 'Allotment of Shares (PAS-3)']}
            />
            <ServiceDetailCard 
              icon={<FileCheck2 className="text-emerald-500" size={28} />}
              title="Company Incorporation"
              items={['Private Limited (SPICe+ Part A & B)', 'LLP Registration (FiLLiP)', 'Section 8 (NGO / Non-Profit)', 'Startup India DPIIT Recognition']}
            />
            <ServiceDetailCard 
              icon={<Clock className="text-purple-500" size={28} />}
              title="LLP Compliances"
              items={['Form 8 (Statement of Solvency)', 'Form 11 (Annual Return)', 'LLP Agreement Amendment (Form 3)', 'Designated Partner KYC']}
            />
            <ServiceDetailCard 
              icon={<ShieldCheck className="text-sky-500" size={28} />}
              title="Charge Management"
              items={['Creation of Charges (CHG-1)', 'Satisfaction of Charges (CHG-4)', 'Modification of Charges', 'Bank CIBIL Regularization']}
            />
            <ServiceDetailCard 
              icon={<AlertCircle className="text-rose-500" size={28} />}
              title="Closure & Striking Off"
              items={['Fast Track Exit (STK-2)', 'Voluntary Strike-off of LLP', 'Dormant Company Status Filing', 'Revocation of Inactive Status']}
            />
          </motion.div>
        </div>
      </section>

      {/* Penalty Matrix & Why Choose Us */}
      <section className="py-20 sm:py-28 bg-[#0d1730] text-white border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="text-sky-400 font-bold uppercase tracking-widest text-xs">Why S.K Associates?</span>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight">Avoid Compounding Penalties with Accurate Secretarial Filings</h3>
            <div className="space-y-5">
              <CheckItem title="Qualified CS & CA Review" desc="Every MCA submission is verified by qualified Company Secretaries and Chartered Accountants." />
              <CheckItem title="Secured Digital Vault" desc="We maintain digital archives of all your MOA, AOA, board minutes, and past filed challans." />
              <CheckItem title="Statutory Deadline Alerts" desc="Never miss a statutory due date with our proactive email and WhatsApp compliance notifications." />
              <CheckItem title="Transparent Fee Structure" desc="No hidden government fee markups. Standard professional rates with itemized ROC challans." />
            </div>
          </motion.div>

          <div className="relative">
            <div className="bg-[#070d1e] p-6 sm:p-10 rounded-3xl sm:rounded-[2.5rem] border border-white/10 shadow-2xl space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <AlertCircle size={22} className="text-amber-400" />
                <h4 className="text-xl font-bold">MCA Statutory Penalty Matrix</h4>
              </div>
              <div className="space-y-3">
                <PenaltyRow label="Delayed AOC-4 / MGT-7 Filing" amount="₹100 / Per Day (Compounding)" color="text-rose-400" />
                <PenaltyRow label="Late DIR-3 KYC Director Annual" amount="₹5,000 (Per Director)" color="text-orange-400" />
                <PenaltyRow label="Delayed DPT-3 Return of Deposits" amount="₹5,000 to ₹50,000" color="text-amber-400" />
                <PenaltyRow label="Failure to File INC-20A Commencement" amount="₹50,000 + Director Disqualification" color="text-rose-500" />
              </div>
              <p className="text-xs text-slate-400 italic pt-2">
                *Penalties are enforced under the Companies (Amendment) Act and MCA V3 Portal regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#00325b] via-[#005f9e] to-[#007bb6] rounded-3xl sm:rounded-[3rem] p-8 sm:p-14 text-center text-white shadow-2xl relative overflow-hidden border border-white/20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 relative z-10 leading-tight">Need an MCA Company Compliance Audit?</h2>
          <p className="text-blue-100 text-base sm:text-lg mb-8 max-w-2xl mx-auto relative z-10 font-medium leading-relaxed">
            Get a free status check of your company on the MCA V3 portal. We help you identify pending annual filings and regularize them before strike-off notices are issued.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <Link to="/query" className="bg-white text-[#007bb6] px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-black text-base hover:bg-slate-100 transition shadow-xl">
              Check Company Status
            </Link>
            <Link to="/contact" className="bg-white/10 text-white border border-white/20 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-base hover:bg-white/20 transition">
              Consult Corporate Secretary
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const DeadlineCard = ({ form, date, status, desc }) => (
  <motion.div 
    whileHover={{ y: -6, scale: 1.02 }}
    className="bg-white dark:bg-[#0d1730] p-5 sm:p-6 rounded-3xl shadow-xl border-l-4 border-[#007bb6] border border-slate-200/80 dark:border-[#1a2c56] flex flex-col justify-between"
  >
    <div>
      <div className="flex items-center gap-2 mb-2">
        <Calendar size={14} className="text-[#007bb6] dark:text-sky-400" />
        <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">{status}</span>
      </div>
      <h4 className="text-lg sm:text-xl font-black dark:text-white">{form}</h4>
      <p className="text-[#007bb6] dark:text-sky-400 font-bold text-sm mt-0.5">Due: {date}</p>
    </div>
    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-3 font-medium leading-relaxed">{desc}</p>
  </motion.div>
);

const ServiceDetailCard = ({ icon, title, items }) => (
  <motion.div 
    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
    whileHover={{ y: -6, scale: 1.02 }}
    className="bg-white dark:bg-[#0d1730] p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-[#1a2c56] shadow-xl flex flex-col justify-between"
  >
    <div>
      <div className="w-14 h-14 bg-slate-100 dark:bg-[#15244a] rounded-2xl flex items-center justify-center mb-6">
        {icon}
      </div>
      <h4 className="text-xl sm:text-2xl font-black mb-4 dark:text-white">{title}</h4>
      <ul className="space-y-2.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2.5 text-slate-600 dark:text-slate-400 text-sm font-medium">
            <CheckCircle2 size={16} className="text-[#007bb6] dark:text-sky-400 mt-0.5 shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const CheckItem = ({ title, desc }) => (
  <div className="flex gap-4 items-start">
    <div className="w-8 h-8 bg-sky-400/20 text-sky-400 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
      <CheckCircle2 size={18} />
    </div>
    <div>
      <h5 className="font-bold text-base sm:text-lg text-white">{title}</h5>
      <p className="text-slate-400 text-xs sm:text-sm font-medium mt-0.5 leading-relaxed">{desc}</p>
    </div>
  </div>
);

const PenaltyRow = ({ label, amount, color }) => (
  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-white/5 gap-1 text-sm">
    <span className="text-slate-300 font-medium">{label}</span>
    <span className={`font-black ${color}`}>{amount}</span>
  </div>
);

export default ROCFilings;