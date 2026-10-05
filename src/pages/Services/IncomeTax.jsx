import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Wallet, PieChart, ShieldCheck, FileText, 
  TrendingDown, Search, History, Scale,
  ExternalLink, ArrowUpRight, CheckCircle2,
  AlertTriangle, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceLayout from './ServiceLayout';
import SEO from '../../components/common/SEO';

const IncomeTax = () => {
  const [selectedItr, setSelectedItr] = useState('itr1');

  const taxSolutions = [
    {
      title: "Strategic Tax Planning",
      desc: "Legitimate tax optimization utilizing 80C, 80D, 80G, 80CCD, and Section 54/54F capital reinvestment schemes.",
      icon: <TrendingDown size={20} />,
      color: "bg-blue-500"
    },
    {
      title: "Litigation & Scrutiny Appeals",
      desc: "Senior Advocate & CA representation for Faceless Assessment u/s 143(3), 147 reassessments, and CIT appeals.",
      icon: <Scale size={20} />,
      color: "bg-indigo-600"
    },
    {
      title: "TDS / TCS Compliance",
      desc: "End-to-end quarterly returns (24Q, 26Q, 27Q), TRACES justification reports, & 16/16A certificate generation.",
      icon: <FileText size={20} />,
      color: "bg-sky-500"
    },
    {
      title: "Foreign Assets & Remittance",
      desc: "Schedule FA foreign asset disclosures, Form 15CA/15CB certifications, and NRI DTAA tax credit claims.",
      icon: <History size={20} />,
      color: "bg-blue-700"
    }
  ];

  const itrProfiles = {
    itr1: {
      title: "ITR-1 (Sahaj)",
      forWhom: "Salaried Individuals & Pensioners",
      eligibility: "Income up to ₹50 Lakhs from Salary, 1 House Property, & Other Sources (Interest/Dividend).",
      exclusions: "Cannot be used if you have Capital Gains, Foreign Assets, or Business Income.",
      filingDeadline: "31st July 2026"
    },
    itr2: {
      title: "ITR-2",
      forWhom: "Individuals & HUFs with Capital Gains / Multiple Properties",
      eligibility: "Income from Stocks, Mutual Funds, Crypto (VDA), Property Sale, Directorship in Pvt Ltd, or Foreign Assets.",
      exclusions: "Cannot be used if having business/professional proprietary profits.",
      filingDeadline: "31st July 2026"
    },
    itr3: {
      title: "ITR-3",
      forWhom: "Business Owners & Professionals",
      eligibility: "Proprietorship turnover, Doctors, Lawyers, Tech Consultants, F&O / Intraday Traders.",
      exclusions: "Comprehensive P&L and Balance Sheet reporting required.",
      filingDeadline: "31st Oct 2026 (Audit) / 31st July (Non-Audit)"
    },
    itr4: {
      title: "ITR-4 (Sugam)",
      forWhom: "Presumptive Taxpayers (Sec 44AD / 44ADA)",
      eligibility: "Small businesses with turnover up to ₹3 Cr (6%/8% profit) & professionals up to ₹75L (50% profit).",
      exclusions: "No detailed books of accounts maintenance required.",
      filingDeadline: "31st July 2026"
    },
    itr56: {
      title: "ITR-5 & ITR-6",
      forWhom: "Partnerships, LLPs, & Private Limited Companies",
      eligibility: "All corporate entities and firms registered under Companies Act 2013 / LLP Act 2008.",
      exclusions: "Mandatory digital signature (DSC) e-verification.",
      filingDeadline: "31st October 2026"
    }
  };

  const noticesMatrix = [
    { code: "143(1) Intimation", desc: "Tax demand or refund mismatch after return processing.", timeline: "Within 30 Days", action: "Rectification or Demand Payment" },
    { code: "139(9) Defective Return", desc: "Gross mismatch between 26AS/AIS and filed revenue.", timeline: "15 Days", action: "File Revised Defective Response" },
    { code: "148 Reassessment Notice", desc: "Escaped income belief by AO for past assessment years.", timeline: "30 Days", action: "Legal Objections & Fresh ITR" },
    { code: "142(1) Inquiry Notice", desc: "Request for books of accounts & bank vouchers.", timeline: "Specific Date", action: "Collation of Financial Records" }
  ];

  return (
    <div className="relative">
      <SEO 
        title="Income Tax Advisory & Scrutiny Defense | ITR 1-7 Filings"
        description="Comprehensive Income Tax return filing (ITR-1 to ITR-7), Section 115BAC tax optimization, faceless scrutiny defense u/s 143/148, and Form 15CA/CB certifications."
        keywords="Income Tax Filing Noida, ITR Filing CA, Tax Scrutiny Notice Defense, Section 115BAC New Tax Regime, Form 15CA CB Certificate"
        canonicalPath="/income-tax"
        breadcrumbs={[
          { name: "Services", url: "/" },
          { name: "Income Tax Advisory", url: "/income-tax" }
        ]}
      />
      <ServiceLayout 
        title="Income Tax Advisory"
        colorClass="blue"
        icon={<Wallet size={32} />}
        description="Beyond just tax filing—we engineer proactive statutory strategies. S.K Associates provides data-driven direct tax solutions for HNIs, salaried executives, business houses, and NRIs to protect wealth and eliminate compliance friction."
        features={[
          "ITR 1 through ITR 7 Filing with 100% AIS/TIS Reconciliation",
          "Capital Gains Optimization on Real Estate, Stocks & ESOPs",
          "Form 15CA & 15CB Foreign Remittance Certifications",
          "Faceless Scrutiny Defense & High Court / CIT Appeals",
          "Advance Tax Planning & Tax Audit Support u/s 44AB"
        ]}
      />

      {/* Interactive ITR Finder */}
      <section className="py-24 bg-white dark:bg-slate-900/50 px-6 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 dark:text-sky-400 text-xs font-black uppercase tracking-widest">Interactive Helper</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black dark:text-white mt-2">Which ITR Form Should You File?</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-4 text-base font-medium">Click on an ITR profile below to review eligibility criteria and statutory schedules.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 flex flex-col gap-2.5">
              {Object.keys(itrProfiles).map((k) => (
                <button
                  key={k}
                  onClick={() => setSelectedItr(k)}
                  className={`p-4 rounded-2xl text-left font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-between border ${
                    selectedItr === k
                    ? 'bg-blue-600 text-white border-blue-600 shadow-xl shadow-blue-500/20 translate-x-1'
                    : 'bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-blue-500'
                  }`}
                >
                  <div>
                    <span className="text-sm font-black block">{itrProfiles[k].title}</span>
                    <span className={`text-[10px] ${selectedItr === k ? 'text-blue-100' : 'text-slate-400'}`}>{itrProfiles[k].forWhom}</span>
                  </div>
                  <ArrowRight size={16} className={selectedItr === k ? 'text-white' : 'text-slate-400'} />
                </button>
              ))}
            </div>

            <div className="lg:col-span-8 bg-slate-50 dark:bg-slate-900 p-8 md:p-12 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-2xl space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-sky-400 rounded-full text-[10px] font-black uppercase tracking-wider">
                    Statutory Form Overview
                  </span>
                  <h3 className="text-3xl font-black dark:text-white mt-2">{itrProfiles[selectedItr].title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-bold mt-1">Designed for: {itrProfiles[selectedItr].forWhom}</p>
                </div>

                <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shrink-0">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Filing Deadline</span>
                  <span className="text-sm font-black text-rose-600 dark:text-rose-400">{itrProfiles[selectedItr].filingDeadline}</span>
                </div>
              </div>

              <div className="space-y-4 text-xs font-semibold">
                <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-1">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold uppercase block">Eligibility & Income Scope</span>
                  <p className="text-slate-700 dark:text-slate-200 text-sm">{itrProfiles[selectedItr].eligibility}</p>
                </div>

                <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-1">
                  <span className="text-amber-600 dark:text-amber-400 font-bold uppercase block">Important Exclusions & Restrictions</span>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">{itrProfiles[selectedItr].exclusions}</p>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/query" 
                  className="flex-1 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-xs uppercase tracking-wider text-center shadow-lg transition"
                >
                  File {itrProfiles[selectedItr].title} with Senior CA
                </Link>
                <Link 
                  to="/calculators" 
                  className="px-6 py-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold text-xs uppercase tracking-wider rounded-2xl border border-slate-200 dark:border-slate-700 text-center hover:bg-slate-100 dark:hover:bg-slate-700 transition"
                >
                  Calculate Tax Slabs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Step Filing Pipeline */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 border-l-4 border-blue-600 pl-6"
          >
            <span className="text-blue-600 dark:text-sky-400 text-xs font-black uppercase tracking-widest">Workflow</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black dark:text-white mt-1">Seamless ITR Filing Lifecycle</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-2">Zero errors from document collection to AIS matching and instant refund processing.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'AIS / 26AS Matching', desc: 'Syncing all bank interest, dividends, SFT transactions, and Form 16 credits.' },
              { title: 'Dual Regime Computation', desc: 'Detailed mathematical comparison between New (115BAC) vs Old Tax Regime.' },
              { title: 'Senior Partner Review', desc: 'Quality audit check for missed deductions, HRA claims, & Schedule FA accuracy.' },
              { title: 'E-Verification & ITR-V', desc: 'Instant Aadhaar OTP verification and electronic ITR acknowledgment dispatch.' }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15 }}
                className="relative p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl group flex flex-col justify-between"
              >
                <div>
                  <span className="w-10 h-10 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-bold text-sm shadow-lg mb-6">
                    0{i + 1}
                  </span>
                  <h4 className="text-lg font-black dark:text-white mb-2 group-hover:text-blue-600 transition-colors">{step.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{step.desc}</p>
                </div>
                <div className="w-12 h-1 bg-blue-600/20 group-hover:w-full transition-all duration-500 rounded-full mt-6"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notice Protection Plan & Notice Matrix */}
      <section className="pb-24 px-6 bg-white dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto pt-16">
          <div className="grid lg:grid-cols-12 gap-8 mb-16 items-center">
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="lg:col-span-7 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-950 rounded-[3rem] p-10 md:p-14 text-white relative overflow-hidden shadow-2xl"
            >
              <div className="relative z-10 space-y-6">
                <ShieldCheck className="text-sky-300" size={48} />
                <h3 className="text-3xl md:text-4xl font-black">Income Tax Notice Defense Plan</h3>
                <p className="text-blue-100 text-sm md:text-base font-medium leading-relaxed max-w-lg">
                  Received an assessment notice or mismatch intimation? Our specialized litigation team prepares written arguments, legal submissions, and files e-proceedings before the faceless assessment center.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-white/10 rounded-full text-xs font-bold border border-white/20">Section 143(1) Demand Rectification</span>
                  <span className="px-4 py-2 bg-white/10 rounded-full text-xs font-bold border border-white/20">Section 148 Reassessment Defense</span>
                  <span className="px-4 py-2 bg-white/10 rounded-full text-xs font-bold border border-white/20">CIT (Appeals) Drafting</span>
                </div>
              </div>
              <Search className="absolute -bottom-10 -right-10 text-white/5" size={280} />
            </motion.div>

            <div className="lg:col-span-5 grid gap-4">
              {taxSolutions.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  className="p-5 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 flex gap-4 items-center shadow-md"
                >
                  <div className={`w-12 h-12 rounded-2xl ${item.color} text-white flex items-center justify-center shrink-0 shadow-md`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold dark:text-white text-sm">{item.title}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

          {/* Statutory Notices Table */}
          <div className="bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] p-8 border border-slate-200 dark:border-slate-800 shadow-xl">
            <h4 className="text-xl font-black dark:text-white mb-6 flex items-center gap-2">
              <AlertTriangle className="text-amber-500" size={20} /> Common Income Tax Department Notices & Response Timelines
            </h4>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-700 text-slate-400 uppercase font-black tracking-wider">
                    <th className="pb-3">Notice Type</th>
                    <th className="pb-3">Statutory Reason</th>
                    <th className="pb-3">Response SLA</th>
                    <th className="pb-3">Recommended S.K Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                  {noticesMatrix.map((item, idx) => (
                    <tr key={idx} className="hover:bg-white dark:hover:bg-slate-800/50 transition-colors">
                      <td className="py-3 font-bold text-blue-600 dark:text-sky-400">{item.code}</td>
                      <td className="py-3">{item.desc}</td>
                      <td className="py-3 font-bold text-rose-500">{item.timeline}</td>
                      <td className="py-3">{item.action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-16 p-10 bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 rounded-[3rem] text-center text-white shadow-2xl"
          >
            <PieChart className="mx-auto text-sky-200 mb-4" size={40} />
            <h3 className="text-3xl font-black">Is Your Tax Liability Too High?</h3>
            <p className="text-sky-100 mb-8 max-w-xl mx-auto mt-2 text-sm font-medium leading-relaxed">
              Book a 1-on-1 Tax Health Checkup with our Senior Partners to identify missed deductions, structure your salary, and plan capital gains exemptions.
            </p>
            <Link 
              to="/query"
              className="inline-flex items-center gap-2 px-10 py-4 bg-white text-blue-700 rounded-2xl font-black hover:bg-slate-100 transition-all shadow-xl text-sm"
            >
              Book Tax Health Checkup <ArrowUpRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IncomeTax;