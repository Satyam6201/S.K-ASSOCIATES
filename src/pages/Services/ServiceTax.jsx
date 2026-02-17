import React from 'react';
import { motion } from 'framer-motion';
import { 
  ReceiptText, FileCheck, RefreshCcw, Landmark, 
  Truck, ShieldAlert, BadgePercent, Database,
  ArrowRightLeft, ExternalLink
} from 'lucide-react';
import ServiceLayout from './ServiceLayout';

const ServiceTax = () => {
  const complianceSteps = [
    { title: "Invoice Auditing", desc: "Verifying sales and purchase registers for GSTR-1/3B.", icon: <Database size={20}/> },
    { title: "ITC Matching", desc: "Automated 2B vs Purchase Register reconciliation.", icon: <RefreshCcw size={20}/> },
    { title: "Tax Payment", desc: "Optimizing cash ledger vs credit ledger usage.", icon: <Landmark size={20}/> },
    { title: "Filing & ARN", desc: "Timely submission with generated ARN for records.", icon: <FileCheck size={20}/> }
  ];

  return (
    <div className="relative">
      {/* 1. Core Service Layout */}
      <ServiceLayout 
        title="GST Compliance"
        colorClass="orange"
        icon={<ReceiptText size={32} />}
        description="Master the Indirect Tax landscape. S.K Associates provides a robust framework for GST reporting, Input Tax Credit (ITC) optimization, and department representation, ensuring your supply chain remains tax-efficient."
        features={[
          "End-to-End GSTR-1, 3B, and GSTR-9 Filings",
          "Real-time 2A/2B Reconciliation to prevent ITC loss",
          "GST Refund Processing for Exporters (LUT & IGST)",
          "Departmental Audit & Show Cause Notice (SCN) Handling",
          "HSN/SAC Code Classification & Rate Advisory"
        ]}
      />

      {/* 2. ITC Optimization Visualizer */}
      
      <section className="py-24 bg-white dark:bg-slate-950 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="lg:col-span-2 p-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-[3.5rem] text-white relative overflow-hidden shadow-2xl shadow-orange-500/20"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <BadgePercent className="text-orange-100" size={40} />
                  <h3 className="text-3xl font-black">ITC Leakage Protection</h3>
                </div>
                <p className="text-orange-50 mb-10 text-lg max-w-xl">
                  Are your vendors filing their returns? We track non-compliant suppliers to ensure you don't lose Input Tax Credit, potentially saving your business lakhs in cash flow.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="px-6 py-3 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 text-sm font-bold flex items-center gap-2">
                    <ArrowRightLeft size={16} /> GSTR-2B Matching
                  </div>
                  <div className="px-6 py-3 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 text-sm font-bold flex items-center gap-2">
                    <Truck size={16} /> E-Way Bill Integration
                  </div>
                </div>
              </div>
              <Database className="absolute -bottom-10 -right-10 opacity-10" size={300} />
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-10 bg-slate-100 dark:bg-slate-900 rounded-[3.5rem] border border-slate-200 dark:border-slate-800 flex flex-col justify-center"
            >
              <ShieldAlert className="text-orange-500 mb-6" size={48} />
              <h4 className="text-2xl font-black dark:text-white mb-4">GST Notice?</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                ASMT-10 or SCN received? Our legal team specializes in drafting replies for mismatch notices and scrutiny assessments.
              </p>
              <a href="/query" className="text-orange-600 font-black flex items-center gap-2 hover:gap-4 transition-all">
                Legal Assistance <ExternalLink size={18} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Monthly Filing Cycle Animation */}
      <section className="pb-24 bg-slate-50 dark:bg-slate-950 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black dark:text-white mb-4">The Monthly GST Sprint</h2>
            <p className="text-slate-500">How we manage your 10th to 20th of every month.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceSteps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-800 hover:border-orange-500/50 transition-all"
              >
                <div className="w-14 h-14 bg-orange-500/10 text-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500 shadow-inner">
                  {step.icon}
                </div>
                <h4 className="text-xl font-bold dark:text-white mb-2">{step.title}</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Document Checklist Section */}
      <section className="py-20 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 text-orange-600 rounded-full text-xs font-black uppercase mb-6 tracking-widest">
            Registration Helper
          </div>
          <h3 className="text-3xl font-black dark:text-white mb-8">Documents Required for GST Registration</h3>
          <div className="grid md:grid-cols-2 gap-4 text-left">
            {['PAN Card & Aadhaar', 'Electricity Bill/Rent Agreement', 'Cancelled Cheque', 'NOC from Owner'].map((doc, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
                <div className="w-2 h-2 bg-orange-500 rounded-full" />
                <span className="text-sm font-bold dark:text-slate-300">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceTax;