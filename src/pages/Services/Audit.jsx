import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart3, ShieldCheck, Search, FileText, 
  CheckCircle, AlertCircle, Scale, ClipboardCheck,
  CheckCircle2, Sparkles, ArrowRight, Calculator,
  PieChart, RefreshCw, AlertTriangle, Layers, Download, Check
} from 'lucide-react';
import ServiceLayout from './ServiceLayout';

const Audit = () => {
  const [turnover, setTurnover] = useState(150000000);
  const [entityType, setEntityType] = useState('pvt_ltd');
  const [cashPct, setCashPct] = useState('below_5');

  const [checklist, setChecklist] = useState({
    bankRecon: true,
    gstRecon: true,
    fixedAssets: false,
    tdsFiling: true,
    inventoryVal: false,
    partnerVouchers: true
  });

  const toggleCheck = (key) => {
    setChecklist(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const checkedCount = Object.values(checklist).filter(Boolean).length;
  const readinessPercent = Math.round((checkedCount / 6) * 100);

  const isTaxAuditRequired = () => {
    if (entityType === 'pvt_ltd') return true;
    if (cashPct === 'below_5') {
      return turnover > 100000000;
    }
    return turnover > 10000000;
  };

  const isCaroRequired = entityType === 'pvt_ltd' && turnover > 10000000;

  const auditPhases = [
    { title: "Planning & Scoping", desc: "Understanding internal controls, ICAI standards, and risk assessment.", icon: <Search size={22}/>, color: "from-emerald-500 to-teal-600" },
    { title: "Execution & Testing", desc: "Substantive testing, GSTR-2B reconciliations, & ledger verification.", icon: <ClipboardCheck size={22}/>, color: "from-blue-500 to-indigo-600" },
    { title: "Independent Review", desc: "Peer-reviewed partner quality control & CARO 2020 verification.", icon: <Scale size={22}/>, color: "from-purple-500 to-indigo-600" },
    { title: "Formal Reporting", desc: "Issuing statutory audit opinions, 3CA/3CB reports, & management letter.", icon: <FileText size={22}/>, color: "from-orange-500 to-amber-600" }
  ];

  return (
    <div className="relative overflow-hidden bg-slate-50 dark:bg-[#020617] transition-colors duration-500 selection:bg-emerald-500/30">
      
      <ServiceLayout 
        title="Audit & Assurance Services"
        colorClass="emerald"
        icon={<BarChart3 size={32} />}
        description="Providing stakeholder transparency, internal control (ICFR) optimization, and ICAI-compliant statutory auditing for Private Limited companies, LLPs, and enterprise SMEs across India."
        features={[
          "Statutory Audits under Companies Act 2013",
          "Tax Audits u/s 44AB of Income Tax Act",
          "Internal Control over Financial Reporting (ICFR)",
          "CARO 2020 21-Clause Compliance Reporting",
          "GST & Transfer Pricing Audits u/s 9C"
        ]}
      />

      <section className="py-20 px-6 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-black uppercase tracking-widest border border-emerald-500/20">
                <Calculator size={14} /> Compliance Evaluator
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                Am I Required to Undergo <br />
                <span className="text-emerald-600 dark:text-emerald-400 italic">Statutory or Tax Audit?</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                Configure your business turnover and entity type to instantly verify whether Tax Audit u/s 44AB or CARO 2020 reporting applies to your business for FY 2024-25 / FY 2025-26.
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-7 bg-slate-50 dark:bg-slate-950 p-8 md:p-12 rounded-[3rem] shadow-2xl border border-slate-200 dark:border-slate-800 space-y-8"
            >
              <div className="space-y-6">
                
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-wider text-slate-400">Entity Type</label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: 'pvt_ltd', label: 'Private Limited / PLC' },
                      { id: 'llp', label: 'LLP Firm' },
                      { id: 'prop', label: 'Proprietorship / Firm' }
                    ].map(item => (
                      <button
                        key={item.id}
                        onClick={() => setEntityType(item.id)}
                        className={`p-3 rounded-2xl text-xs font-bold transition-all border ${
                          entityType === item.id 
                          ? 'bg-emerald-600 text-white border-emerald-600 shadow-md' 
                          : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-bold dark:text-slate-200">Annual Gross Receipts / Turnover (₹)</label>
                    <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400">₹{(turnover / 10000000).toFixed(1)} Crore</span>
                  </div>
                  <input 
                    type="range" 
                    min="10000000" 
                    max="500000000" 
                    step="10000000"
                    value={turnover}
                    onChange={(e) => setTurnover(Number(e.target.value))}
                    className="w-full h-3 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                  />
                  <div className="flex justify-between text-xs text-slate-400 font-bold">
                    <span>₹1 Crore</span>
                    <span>₹25 Crore</span>
                    <span>₹50 Crore</span>
                  </div>
                </div>

                {entityType !== 'pvt_ltd' && (
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-wider text-slate-400">Cash Receipts & Cash Payments Ratio</label>
                    <div className="flex p-1 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
                      <button
                        onClick={() => setCashPct('below_5')}
                        className={`flex-1 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                          cashPct === 'below_5' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-500 dark:text-slate-400'
                        }`}
                      >
                        ≤ 5% Cash Receipts (Limit ₹10 Cr)
                      </button>
                      <button
                        onClick={() => setCashPct('above_5')}
                        className={`flex-1 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                          cashPct === 'above_5' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-500 dark:text-slate-400'
                        }`}
                      >
                        &gt; 5% Cash Receipts (Limit ₹1 Cr)
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {isTaxAuditRequired() ? (
                      <CheckCircle2 className="text-emerald-500 shrink-0" size={24} />
                    ) : (
                      <AlertCircle className="text-amber-500 shrink-0" size={24} />
                    )}
                    <div>
                      <h4 className="font-black dark:text-white text-base">
                        {entityType === 'pvt_ltd' 
                          ? 'Statutory Companies Act Audit: MANDATORY'
                          : isTaxAuditRequired() 
                            ? 'Tax Audit u/s 44AB: APPLICABLE'
                            : 'Tax Audit u/s 44AB: NOT MANDATORY'}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                        {isTaxAuditRequired() 
                          ? 'Your business exceeds threshold limits. Form 3CA/3CB & Form 3CD must be filed by 30th September.'
                          : 'Turnover is within threshold limits. Presumptive taxation u/s 44AD / 44ADA may apply.'}
                      </p>
                    </div>
                  </div>
                </div>

                {isCaroRequired && (
                  <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    <ShieldCheck size={16} /> CARO 2020 21-Clause Reporting Applicable
                  </div>
                )}
              </div>

            </motion.div>

          </div>
        </div>
      </section>

      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20 max-w-3xl mx-auto"
          >
            <span className="text-emerald-600 dark:text-emerald-400 font-black uppercase tracking-widest text-xs">Phased Assurance</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mt-2">The 4-Step Audit Lifecycle</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-4 font-medium">Delivering zero-error compliance with complete independence.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {auditPhases.map((phase, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 relative group shadow-xl hover:shadow-2xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="absolute top-6 right-8 text-6xl font-black text-slate-100 dark:text-slate-800 group-hover:text-emerald-500/10 transition-colors pointer-events-none">
                    0{i + 1}
                  </div>
                  <div className={`w-14 h-14 bg-gradient-to-br ${phase.color} text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:rotate-[10deg] transition-transform`}>
                    {phase.icon}
                  </div>
                  <h4 className="text-xl font-black dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">{phase.title}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{phase.desc}</p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  <span>Phase 0{i + 1}</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-black uppercase tracking-widest border border-emerald-500/20">
                <Layers size={14} /> Document Checklist
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                Interactive Audit <br />
                <span className="text-emerald-600 dark:text-emerald-400 italic">Readiness Scorecard</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                Check off your completed financial reconciliations below to evaluate your corporate audit readiness for seamless auditor sign-off.
              </p>

              <div className="p-6 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-black uppercase tracking-wider text-slate-400">Audit Preparedness Score</span>
                  <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400">{readinessPercent}%</span>
                </div>
                <div className="h-3 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${readinessPercent}%` }}
                    className="h-full bg-emerald-500 transition-all duration-500"
                  />
                </div>
                <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
                  {readinessPercent >= 80 ? '🟢 Highly Prepared for Smooth Audit Sign-off' : '⚠️ Additional Document Reconciliations Required'}
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
              {[
                { key: 'bankRecon', title: 'Bank Statements & Reconciliations' },
                { key: 'gstRecon', title: 'GSTR-3B vs 2B & ITC Reconciliation' },
                { key: 'fixedAssets', title: 'Fixed Assets Register & Depreciation' },
                { key: 'tdsFiling', title: 'TDS Returns & Form 26AS Matching' },
                { key: 'inventoryVal', title: 'Physical Stock & Inventory Valuation' },
                { key: 'partnerVouchers', title: 'Related Party & Vouchers Support' },
              ].map(item => (
                <motion.div
                  key={item.key}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => toggleCheck(item.key)}
                  className={`p-5 rounded-2xl border-2 cursor-pointer transition-all flex items-center justify-between ${
                    checklist[item.key]
                    ? 'bg-emerald-50 dark:bg-slate-800 border-emerald-500 text-slate-900 dark:text-white shadow-md'
                    : 'bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-500'
                  }`}
                >
                  <span className="text-xs font-bold leading-snug">{item.title}</span>
                  <div className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 ml-2 ${
                    checklist[item.key] ? 'bg-emerald-500 text-white' : 'border border-slate-300 dark:border-slate-700'
                  }`}>
                    {checklist[item.key] && <Check size={14} />}
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            
            <motion.div 
              whileHover={{ y: -8 }}
              className="lg:col-span-2 bg-gradient-to-br from-[#00325b] via-[#005f9e] to-[#007bb6] dark:from-[#020617] dark:via-[#091124] dark:to-[#001524] rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl border border-white/10"
            >
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-sky-300" size={36} />
                  <h3 className="text-3xl font-black">CARO 2020 & ICFR Compliance</h3>
                </div>
                <p className="text-slate-200 text-base leading-relaxed max-w-lg font-medium">
                  We specialize in CARO 2020 21-clause reporting, Ind-AS financial statement transitions, and ICFR internal control auditing required for statutory MCA compliance.
                </p>
                <div className="grid md:grid-cols-2 gap-4 pt-4">
                  <div className="flex items-center gap-3 p-4 bg-white/10 rounded-2xl border border-white/20">
                    <CheckCircle className="text-emerald-400" size={20} />
                    <span className="text-sm font-bold">Zero-Error Documentation</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white/10 rounded-2xl border border-white/20">
                    <AlertCircle className="text-amber-300" size={20} />
                    <span className="text-sm font-bold">Risk Mitigation Strategy</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -8 }}
              className="bg-emerald-600 rounded-[3rem] p-10 text-white flex flex-col justify-between shadow-2xl relative overflow-hidden"
            >
              <div className="space-y-4">
                <span className="px-3 py-1 bg-white/20 rounded-full text-[10px] font-black uppercase tracking-wider">Internal Audit</span>
                <h3 className="text-3xl font-black">Process & Operations Audit</h3>
                <p className="text-emerald-100 text-sm leading-relaxed font-medium">
                  Identifies revenue leakages, operational bottlenecks, and internal control gaps before they affect your balance sheet.
                </p>
              </div>
              
              <a 
                href="mailto:officeska2000@gmail.com?subject=Audit%20Brochure%20Request" 
                className="mt-8 flex items-center justify-between w-full p-4 bg-white text-emerald-900 rounded-2xl hover:bg-emerald-50 transition-all font-black text-sm shadow-lg"
              >
                <span>Request Audit Proposal</span>
                <Download size={18} />
              </a>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Audit;