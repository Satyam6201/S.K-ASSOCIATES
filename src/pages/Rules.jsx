import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { 
  ShieldAlert, Gavel, Scale, Fingerprint, 
  FileWarning, Landmark, Info, CheckCircle2, 
  ChevronRight, Lock, Eye, AlertTriangle,
  BookOpen, Globe, Users
} from 'lucide-react';

const Rules = () => {
  const [activeSection, setActiveSection] = useState("gst-compliance");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const sections = [
    { id: "gst-compliance", title: "GST Compliance", icon: <Scale size={18}/> },
    { id: "income-tax", title: "Income Tax Act", icon: <Landmark size={18}/> },
    { id: "corporate-law", title: "Corporate Governance", icon: <Gavel size={18}/> },
    { id: "data-privacy", title: "Data & Privacy", icon: <Lock size={18}/> },
    { id: "client-ethics", title: "Client Ethics", icon: <Fingerprint size={18}/> },
  ];

  return (
    <div className="bg-slate-50 dark:bg-[#020617] min-h-screen">
      {/* TOP PROGRESS BAR */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1.5 bg-blue-600 z-[110] origin-left"
        style={{ scaleX }}
      />

      <div className="pt-32 pb-40 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* --- LEFT: STICKY NAVIGATION --- */}
          <aside className="lg:w-1/4 lg:sticky lg:top-32 h-fit">
            <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 border border-slate-200 dark:border-white/5 shadow-xl shadow-slate-200/50 dark:shadow-none">
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-blue-600 mb-8">Navigation</h4>
              <nav className="space-y-2">
                {sections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      setActiveSection(s.id);
                      document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }}
                    className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-sm font-bold transition-all ${
                      activeSection === s.id 
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-500/40" 
                      : "text-slate-500 hover:bg-slate-50 dark:hover:bg-white/5"
                    }`}
                  >
                    {s.icon}
                    {s.title}
                  </button>
                ))}
              </nav>

              <div className="mt-12 p-6 bg-amber-500/10 border border-amber-500/20 rounded-3xl">
                <div className="flex items-center gap-2 text-amber-600 mb-2">
                  <AlertTriangle size={16} />
                  <span className="text-[10px] font-black uppercase">Urgent Update</span>
                </div>
                <p className="text-[11px] text-amber-700 dark:text-amber-400 leading-relaxed font-medium">
                  MCA V3 Portal migration rules updated as of April 2026. Review Section 3.
                </p>
              </div>
            </div>
          </aside>

          {/* --- RIGHT: CONTENT ENGINE --- */}
          <main className="lg:w-3/4 space-y-32">
            
            {/* INTRO */}
            <header>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <h1 className="text-6xl md:text-8xl font-black dark:text-white tracking-tighter mb-8 leading-none">
                  REGULATORY <br /> <span className="text-blue-600">PROTOCOLS.</span>
                </h1>
                <p className="text-xl text-slate-500 dark:text-slate-400 font-medium max-w-2xl leading-relaxed">
                  The following frameworks govern our advisory standards and your compliance obligations under Indian Statutory Law.
                </p>
              </motion.div>
            </header>

            {/* SECTION: GST */}
            <RuleSection id="gst-compliance" title="GST Compliance & Filing Rules">
              <RuleCard 
                title="Input Tax Credit (ITC) Rules" 
                desc="ITC can only be claimed if the supplier has uploaded the invoice in GSTR-1 and it reflects in GSTR-2B. Section 16(2)(aa) of the CGST Act is strictly enforced."
                tag="Section 16"
              />
              <RuleCard 
                title="E-Invoicing Mandate" 
                desc="Entities with turnover exceeding ₹5 Cr in any previous financial year must generate IRN for B2B transactions. Failure results in invalid tax invoices."
                tag="Rule 48(4)"
              />
              <RuleCard 
                title="GSTR-9/9C Annual Audit" 
                desc="Self-certified reconciliation statements are mandatory for taxpayers with aggregate turnover above ₹5 Cr."
                tag="Compliance"
              />
            </RuleSection>

            {/* SECTION: INCOME TAX */}
            <RuleSection id="income-tax" title="Income Tax Statutory Rules">
              <RuleCard 
                title="Tax Audit Limits (Sec 44AB)" 
                desc="Audit is mandatory if business turnover exceeds ₹1 Cr. This limit is increased to ₹10 Cr if cash transactions are less than 5% of total receipts."
                tag="Mandatory"
              />
              <RuleCard 
                title="TDS/TCS Compliance" 
                desc="Late filing of TDS returns attracts a penalty of ₹200 per day under Section 234E. Failure to deduct results in 30% disallowance of expenses."
                tag="Critical"
              />
              <RuleCard 
                title="Advance Tax Installments" 
                desc="Every taxpayer whose estimated tax liability is ₹10,000 or more must pay advance tax in 4 installments (15% June, 45% Sept, 75% Dec, 100% Mar)."
                tag="Section 208"
              />
            </RuleSection>

            {/* SECTION: DATA PRIVACY */}
            <RuleSection id="data-privacy" title="Information Security & DPDP Act">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-10 bg-slate-900 rounded-[3rem] text-white relative overflow-hidden group">
                  <Lock className="absolute -right-4 -bottom-4 w-32 h-32 opacity-10 group-hover:rotate-12 transition-transform" />
                  <h4 className="text-2xl font-black mb-4">Zero-Leak Policy</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    S.K Associates utilizes AES-256 bit encryption for all financial documents. Client data is never stored on third-party public clouds.
                  </p>
                </div>
                <div className="p-10 bg-blue-600 rounded-[3rem] text-white relative overflow-hidden group">
                  <Eye className="absolute -right-4 -bottom-4 w-32 h-32 opacity-10 group-hover:-rotate-12 transition-transform" />
                  <h4 className="text-2xl font-black mb-4">DPDP Act 2023</h4>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    We act as a Data Processor under the Digital Personal Data Protection Act. Explicit consent is required for any cross-border data transfer.
                  </p>
                </div>
              </div>
            </RuleSection>

            {/* SECTION: CLIENT ETHICS */}
            <RuleSection id="client-ethics" title="Professional Ethics & KYC">
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-[3rem] p-12">
                <ul className="space-y-8">
                  <li className="flex gap-6 group">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                      <CheckCircle2 size={24}/>
                    </div>
                    <div>
                      <h5 className="text-xl font-black dark:text-white">AML Compliance</h5>
                      <p className="text-slate-500 dark:text-slate-400 mt-1">Strict Anti-Money Laundering checks are performed before onboarding any corporate entity.</p>
                    </div>
                  </li>
                  <li className="flex gap-6 group">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                      <BookOpen size={24}/>
                    </div>
                    <div>
                      <h5 className="text-xl font-black dark:text-white">ICAI Code of Ethics</h5>
                      <p className="text-slate-500 dark:text-slate-400 mt-1">Our practitioners adhere to the Council of the Institute of Chartered Accountants of India standards.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </RuleSection>

          </main>
        </div>
      </div>

      {/* --- FOOTER CTA --- */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto bg-blue-600 rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
          <Globe className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10 animate-spin-slow" />
          <h2 className="text-4xl md:text-6xl font-black mb-8 relative z-10">Need a Compliance Audit?</h2>
          <button className="relative z-10 px-12 py-5 bg-white text-blue-600 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-all">
            Schedule Review
          </button>
        </div>
      </section>
    </div>
  );
};

// --- SUB-COMPONENTS ---

const RuleSection = ({ id, title, children }) => (
  <section id={id} className="scroll-mt-32">
    <div className="flex items-center gap-4 mb-10">
      <div className="h-px flex-grow bg-slate-200 dark:bg-white/10" />
      <h3 className="text-xs font-black uppercase tracking-[0.5em] text-slate-400 whitespace-nowrap">{title}</h3>
      <div className="h-px flex-grow bg-slate-200 dark:bg-white/10" />
    </div>
    <div className="space-y-6">
      {children}
    </div>
  </section>
);

const RuleCard = ({ title, desc, tag }) => (
  <motion.div 
    whileHover={{ x: 10 }}
    className="group bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-200 dark:border-white/5 shadow-xl shadow-slate-200/50 dark:shadow-none flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
  >
    <div className="max-w-2xl">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-2 h-2 rounded-full bg-blue-600" />
        <h4 className="text-xl font-black dark:text-white tracking-tight">{title}</h4>
      </div>
      <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed">{desc}</p>
    </div>
    <div className="px-5 py-2 bg-slate-100 dark:bg-white/5 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-500 whitespace-nowrap">
      {tag}
    </div>
  </motion.div>
);

export default Rules;