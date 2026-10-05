import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, Calculator, BarChart4, Receipt, 
  TrendingUp, FileSpreadsheet, Layers, PieChart,
  CheckCircle2, ArrowRight, ShieldCheck, Zap,
  Server, Database, Award, ArrowUpRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceLayout from './ServiceLayout';
import SEO from '../../components/common/SEO';

const Accounting = () => {
  const [selectedTier, setSelectedTier] = useState('growth');

  const workflow = [
    { title: "Data Ingestion", desc: "Cloud integration with bank feeds, GST portal, and digital invoices.", icon: <Receipt size={22}/> },
    { title: "Double-Entry Ledger", desc: "Accurate ledger mapping, bank & vendor reconciliations under AS/Ind-AS.", icon: <Layers size={22}/> },
    { title: "Senior CA Review", desc: "Monthly internal audit & statutory discrepancy checks by partners.", icon: <Calculator size={22}/> },
    { title: "CFO MIS & Reporting", desc: "Board-level P&L, balance sheets, cashflow forecasts, and KPI metrics.", icon: <PieChart size={22}/> }
  ];

  const packages = [
    {
      id: 'starter',
      name: 'Essential Bookkeeping',
      badge: 'Early Stage & Startups',
      desc: 'Complete ledger maintenance and statutory monthly compliance for micro-enterprises.',
      features: [
        'Monthly Cloud Bookkeeping (Up to 150 txns)',
        'Bank & Credit Card Reconciliation',
        'Monthly P&L & Balance Sheet Draft',
        'GST & TDS Input Ready Statements',
        'Dedicated Accountant & CA Review'
      ],
      suitable: 'Turnover up to ₹50 Lakhs'
    },
    {
      id: 'growth',
      name: 'Growth & Payroll Hub',
      badge: 'Popular for SMEs',
      desc: 'End-to-end accounting, employee payroll, vendor payment processing, and quarterly MIS.',
      features: [
        'Unlimited Ledger & Bank Reconciliations',
        'Payroll Processing (PF, ESIC, PT, Form 16)',
        'Accounts Payable & Receivable Tracking',
        'Monthly Detailed MIS Dashboard',
        'GSTR-2B vs Purchase Reconciliations',
        'Quarterly Tax Planning Review'
      ],
      suitable: 'Turnover ₹50L - ₹5 Crores'
    },
    {
      id: 'cfo',
      name: 'Virtual CFO Enterprise',
      badge: 'Scale-ups & Corporates',
      desc: 'Senior financial leadership, cash flow modeling, board reporting, and audit representation.',
      features: [
        'Dedicated Senior CA as Virtual CFO',
        'Budgeting, Cashflow & Runway Projections',
        'Investor Due Diligence & Valuation Prep',
        'Statutory Audit & CARO 2020 Readiness',
        'Board Meeting Presentations',
        'Direct Tax & Indirect Tax Advisory'
      ],
      suitable: 'Turnover ₹5 Crores+'
    }
  ];

  const supportedSoftware = [
    { name: "Tally Prime", desc: "Gold Certified Partner" },
    { name: "Zoho Books", desc: "Cloud Automated Workflows" },
    { name: "QuickBooks", desc: "Multi-Currency Global Books" },
    { name: "Busy Accounting", desc: "Inventory & Manufacturing" },
    { name: "SAP Business One", desc: "Enterprise ERP Support" }
  ];

  return (
    <div className="relative">
      <SEO 
        title="Virtual CFO Services & Cloud Bookkeeping | Tally, Zoho, SAP"
        description="Outsourced Virtual CFO services, cloud bookkeeping (Tally Prime, Zoho Books, QuickBooks), payroll compliance, cash flow forecasting, and monthly board MIS reporting."
        keywords="Virtual CFO Services India, Cloud Bookkeeping Noida, Outsourced Accounting CA, Tally Prime Zoho Accounting, Payroll Compliance"
        canonicalPath="/accounting-services"
        breadcrumbs={[
          { name: "Services", url: "/" },
          { name: "Accounting & CFO", url: "/accounting-services" }
        ]}
      />
      <ServiceLayout 
        title="Virtual CFO & Accounting"
        colorClass="sky"
        icon={<BookOpen size={32} />}
        description="Transform your financial records from mere historical numbers into a strategic growth asset. S.K Associates provides cloud-native bookkeeping, payroll management, and Virtual CFO advisory for high-growth startups and established Indian enterprises."
        features={[
          "Cloud-Based Real-time Bookkeeping (Tally, Zoho, QuickBooks)",
          "Automated Bank, GSTR-2B, & Vendor Reconciliations",
          "Comprehensive Payroll & Statutory Labour Compliance",
          "Customized Management Information Systems (MIS) & KPIs",
          "Virtual CFO Cash-Flow Modeling & Board Reporting"
        ]}
      />

      <section className="pb-24 bg-slate-50 dark:bg-slate-950 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sky-600 dark:text-sky-400 text-xs font-black uppercase tracking-widest">Methodology</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black dark:text-white mt-2">The S.K Associates Accounting Pipeline</h2>
            <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full mt-4"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflow.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-xl border border-slate-200/80 dark:border-slate-800 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 bg-sky-500/10 text-sky-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sky-500 group-hover:text-white transition-all duration-500 shadow-md">
                    {step.icon}
                  </div>
                  <span className="text-xs font-black text-sky-500 uppercase tracking-widest block mb-1">Step 0{idx + 1}</span>
                  <h4 className="text-xl font-black dark:text-white mb-3 group-hover:text-sky-500 transition-colors">{step.title}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{step.desc}</p>
                </div>
                
                {idx !== workflow.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 z-20 text-slate-300 dark:text-slate-700">
                    <TrendingUp size={20} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accounting Tiers */}
      <section className="py-24 bg-white dark:bg-slate-900/50 px-6 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sky-600 dark:text-sky-400 text-xs font-black uppercase tracking-widest">Tailored Engagements</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black dark:text-white mt-2">Accounting & CFO Retainers</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-4 text-base font-medium">Select the level of financial oversight that matches your business scale.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => {
              const isSelected = selectedTier === pkg.id;
              return (
                <motion.div
                  key={pkg.id}
                  whileHover={{ y: -8 }}
                  onClick={() => setSelectedTier(pkg.id)}
                  className={`p-8 md:p-10 rounded-[2.5rem] transition-all cursor-pointer flex flex-col justify-between relative overflow-hidden border-2 ${
                    isSelected
                    ? 'bg-gradient-to-b from-[#003865] to-[#005f9e] text-white border-sky-400 shadow-2xl shadow-sky-500/20'
                    : 'bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white border-slate-200 dark:border-slate-800 hover:border-sky-500/50'
                  }`}
                >
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                        isSelected ? 'bg-sky-400/20 text-sky-200 border border-sky-400/30' : 'bg-sky-500/10 text-sky-600 dark:text-sky-400'
                      }`}>
                        {pkg.badge}
                      </span>
                      <span className={`text-xs font-bold ${isSelected ? 'text-sky-200' : 'text-slate-400'}`}>
                        {pkg.suitable}
                      </span>
                    </div>

                    <h3 className="text-2xl font-black mb-3">{pkg.name}</h3>
                    <p className={`text-xs leading-relaxed font-medium mb-8 ${isSelected ? 'text-sky-100' : 'text-slate-500 dark:text-slate-400'}`}>
                      {pkg.desc}
                    </p>

                    <div className="space-y-3 pt-4 border-t border-slate-200/40 dark:border-slate-800">
                      {pkg.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-3 text-xs font-semibold">
                          <CheckCircle2 size={16} className={`shrink-0 mt-0.5 ${isSelected ? 'text-sky-300' : 'text-emerald-500'}`} />
                          <span className={isSelected ? 'text-slate-100' : 'text-slate-700 dark:text-slate-300'}>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 mt-8 border-t border-slate-200/40 dark:border-slate-800">
                    <Link
                      to="/query"
                      className={`w-full py-4 rounded-2xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                        isSelected 
                        ? 'bg-white text-[#003865] shadow-lg hover:bg-sky-50' 
                        : 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-[#007bb6] dark:hover:bg-sky-400 dark:hover:text-slate-900'
                      }`}
                    >
                      <span>Inquire for {pkg.name}</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Software Integration Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="p-8 md:p-14 bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-xl">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-10">
              <div className="space-y-2 text-center lg:text-left">
                <span className="text-xs font-black uppercase tracking-wider text-sky-500">Software Agnostic</span>
                <h3 className="text-2xl md:text-3xl font-black dark:text-white">Seamless Cloud Integration with Your ERP</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Our team is proficient in all major Indian and global accounting packages.</p>
              </div>

              <Link
                to="/query"
                className="px-8 py-4 bg-[#007bb6] hover:bg-blue-600 text-white font-bold rounded-2xl text-xs uppercase tracking-wider shrink-0 shadow-lg flex items-center gap-2"
              >
                <span>Request Custom Setup</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {supportedSoftware.map((sw, sIdx) => (
                <div key={sIdx} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-center space-y-1">
                  <Server className="mx-auto text-sky-500 mb-2" size={24} />
                  <h4 className="font-bold text-sm dark:text-white">{sw.name}</h4>
                  <p className="text-[10px] text-slate-400 font-medium">{sw.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accounting;