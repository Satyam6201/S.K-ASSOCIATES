import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  ShieldCheck, 
  Clock, 
  AlertCircle, 
  CheckCircle2, 
  ArrowRight, 
  Scale, 
  Calendar,
  Building2,
  FileCheck2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ROCFilings = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 pt-20">
      
      {/* --- HERO SECTION --- */}
      <section className="relative py-24 bg-[#001524] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              ROC & <span className="text-sky-400">MCA Compliance</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
              Stay ahead of statutory deadlines. We provide end-to-end secretarial support for Private Limited Companies, LLPs, and OPCs to ensure 100% compliance with the Companies Act, 2013.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button className="bg-[#007bb6] text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg">
                File Your Annual Return
              </button>
              <button className="border border-white/20 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all">
                Download Deadline Calendar
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- COMPLIANCE TRACKER (STICKY DEADBINES) --- */}
      <section className="py-12 -mt-10 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <DeadlineCard form="MSME-1" date="30th April" status="Half Yearly" />
            <DeadlineCard form="DPT-3" date="30th June" status="Annual" />
            <DeadlineCard form="DIR-3 KYC" date="30th Sept" status="Director" />
            <DeadlineCard form="AOC-4" date="30 Days from AGM" status="Financials" />
          </div>
        </div>
      </section>

      {/* --- CORE SERVICES GRID --- */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[#007bb6] font-black tracking-widest uppercase mb-4">Statutory Services</h2>
            <h3 className="text-3xl md:text-5xl font-black dark:text-white">Professional Secretarial Solutions</h3>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <ServiceDetailCard 
              icon={<Building2 className="text-orange-500" />}
              title="Annual Compliances"
              items={['Preparation of Board Reports', 'MGT-7 (Annual Return)', 'AOC-4 (Financial Statements)', 'ADT-1 (Auditor Appointment)']}
            />
            <ServiceDetailCard 
              icon={<Scale className="text-blue-500" />}
              title="Event Based Filings"
              items={['Change in Directors (DIR-12)', 'Registered Office Change', 'Increase in Share Capital', 'Allotment of Shares (PAS-3)']}
            />
            <ServiceDetailCard 
              icon={<FileCheck2 className="text-emerald-500" />}
              title="Company Formation"
              items={['Private Limited Incorporation', 'LLP Registration', 'Section 8 (NGO) Companies', 'Nidhi Company Setup']}
            />
            <ServiceDetailCard 
              icon={<Clock className="text-purple-500" />}
              title="LLP Compliances"
              items={['Form 8 (Statement of Accounts)', 'Form 11 (Annual Return)', 'LLP Agreement Drafting', 'Partner Add/Remove']}
            />
            <ServiceDetailCard 
              icon={<ShieldCheck className="text-sky-500" />}
              title="Charge Management"
              items={['Creation of Charges (CHG-1)', 'Satisfaction of Charges (CHG-4)', 'Modification of Charges', 'CIBIL Support']}
            />
            <ServiceDetailCard 
              icon={<AlertCircle className="text-rose-500" />}
              title="Closure & Striking Off"
              items={['Fast Track Exit (STK-2)', 'Voluntary Liquidation', 'Dormant Status Filing', 'Defunct Company Removal']}
            />
          </motion.div>
        </div>
      </section>

      {/* --- WHY CHOOSE US FOR ROC? --- */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-sky-400 font-bold mb-4 uppercase tracking-widest">Why S.K Associates?</h2>
            <h3 className="text-4xl font-black mb-8">Avoid Heavy Penalties with Precision Filing</h3>
            <div className="space-y-6">
              <CheckItem title="Expert Review" desc="Every document is vetted by a qualified Company Secretary/CA before submission." />
              <CheckItem title="Digital Vault" desc="We maintain digital copies of all your MOA, AOA, and past filings for instant access." />
              <CheckItem title="Automated Reminders" desc="Never miss a deadline with our automated SMS and Email compliance alerts." />
              <CheckItem title="Transparent Pricing" desc="No hidden government fee markups. Professional fees are clear and upfront." />
            </div>
          </motion.div>

          <div className="relative">
            <div className="absolute inset-0 bg-[#007bb6] rounded-3xl blur-3xl opacity-20 animate-pulse" />
            <div className="bg-slate-800/50 p-10 rounded-[2.5rem] border border-white/10 backdrop-blur-xl relative">
              <h4 className="text-2xl font-bold mb-6 text-center">Current Penalty Structure</h4>
              <div className="space-y-4">
                <PenaltyRow label="Delayed AOC-4/MGT-7" amount="₹100 / Per Day" color="text-rose-400" />
                <PenaltyRow label="Non-filing DIR-3 KYC" amount="₹5000 (One-time)" color="text-orange-400" />
                <PenaltyRow label="Incorrect Disclosure" amount="Upto ₹5,00,000" color="text-rose-600" />
              </div>
              <p className="mt-8 text-sm text-slate-400 text-center italic">
                *Penalties are as per Companies (Amendment) Act 2020.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-[#007bb6] rounded-[3rem] p-12 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
          <h2 className="text-3xl md:text-5xl font-black mb-6">Need a Compliance Audit?</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Get a free status check of your company on the MCA portal. We help you identify pending filings and regularize them before the ROC issues a strike-off notice.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/query" className="bg-white text-[#007bb6] px-10 py-5 rounded-2xl font-black hover:scale-105 transition shadow-lg">
              Check Company Status
            </Link>
            <Link to="/contact" className="bg-blue-800/50 text-white border border-white/20 px-10 py-5 rounded-2xl font-black hover:bg-blue-800 transition shadow-lg">
              Talk to a Secretary
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

/* --- SUB-COMPONENTS --- */

const DeadlineCard = ({ form, date, status }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-xl border-l-4 border-[#007bb6] flex flex-col justify-center"
  >
    <div className="flex items-center gap-2 mb-2">
      <Calendar size={16} className="text-[#007bb6]" />
      <span className="text-xs font-black uppercase tracking-tighter text-slate-400">{status}</span>
    </div>
    <h4 className="text-xl font-black dark:text-white">{form}</h4>
    <p className="text-[#007bb6] font-bold">Due: {date}</p>
  </motion.div>
);

const ServiceDetailCard = ({ icon, title, items }) => (
  <motion.div 
    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
    className="bg-white dark:bg-slate-900/50 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all group"
  >
    <div className="w-14 h-14 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h4 className="text-2xl font-black mb-6 dark:text-white">{title}</h4>
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-slate-500 dark:text-slate-400 text-sm">
          <CheckCircle2 size={16} className="text-[#007bb6] mt-0.5 shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

const CheckItem = ({ title, desc }) => (
  <div className="flex gap-4">
    <div className="w-6 h-6 bg-sky-400/20 text-sky-400 rounded-full flex items-center justify-center shrink-0 mt-1">
      <CheckCircle2 size={14} />
    </div>
    <div>
      <h5 className="font-bold text-lg">{title}</h5>
      <p className="text-slate-400 text-sm">{desc}</p>
    </div>
  </div>
);

const PenaltyRow = ({ label, amount, color }) => (
  <div className="flex justify-between items-center py-4 border-b border-white/5">
    <span className="text-slate-300 font-medium">{label}</span>
    <span className={`font-black ${color}`}>{amount}</span>
  </div>
);

export default ROCFilings;