import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ReceiptText, FileCheck, RefreshCcw, Landmark, 
  Truck, ShieldAlert, BadgePercent, Database,
  ArrowRightLeft, ExternalLink, CheckCircle2,
  Calendar, ArrowRight, Sparkles, HelpCircle, FileText
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceLayout from './ServiceLayout';

const ServiceTax = () => {
  const [selectedScheme, setSelectedScheme] = useState('monthly');

  const complianceSteps = [
    { title: "Invoice & E-Way Auditing", desc: "Verifying sales, credit notes, and purchase registers against B2B IRN e-invoices.", icon: <Database size={22}/> },
    { title: "Automated ITC Matching", desc: "Real-time 2B vs Purchase Register bots to identify defaulting vendors.", icon: <RefreshCcw size={22}/> },
    { title: "Tax Payment Optimization", desc: "Maximizing eligible electronic credit ledger offsets before cash payments.", icon: <Landmark size={22}/> },
    { title: "Filing & Instant ARN", desc: "Timely GSTR-1 and GSTR-3B submission with generated ARN acknowledgment.", icon: <FileCheck size={22}/> }
  ];

  const gstReturnsSchedule = [
    { returnType: "GSTR-1 (Outward Supplies)", periodicity: "Monthly", dueDate: "11th of every month", applicableTo: "Taxpayers with turnover > ₹5 Cr or monthly filers" },
    { returnType: "IFF (Invoice Furnishing)", periodicity: "Monthly (QRMP)", dueDate: "13th of month 1 & 2", applicableTo: "QRMP taxpayers reporting B2B sales" },
    { returnType: "GSTR-3B (Summary Return)", periodicity: "Monthly", dueDate: "20th of every month", applicableTo: "Regular taxpayers paying net GST" },
    { returnType: "GSTR-3B (Quarterly QRMP)", periodicity: "Quarterly", dueDate: "22nd / 24th of quarter end", applicableTo: "Taxpayers opting for QRMP scheme" },
    { returnType: "GSTR-9 (Annual Return)", periodicity: "Annually", dueDate: "31st December", applicableTo: "Taxpayers with aggregate turnover > ₹2 Cr" },
    { returnType: "GSTR-9C (Reconciliation)", periodicity: "Annually", dueDate: "31st December", applicableTo: "Turnover > ₹5 Cr (Self-certified reconciliation)" }
  ];

  return (
    <div className="relative">
      <ServiceLayout 
        title="GST & Indirect Taxation"
        colorClass="orange"
        icon={<ReceiptText size={32} />}
        description="Master India's Indirect Tax landscape. S.K Associates provides a robust framework for GST reporting, Input Tax Credit (ITC) maximization, export refunds under LUT, and show-cause notice defense before appellate authorities."
        features={[
          "End-to-End GSTR-1, GSTR-3B, & GSTR-9 Annual Return Filings",
          "Automated GSTR-2B vs Purchase Register ITC Reconciliation",
          "Zero-Rated Export GST Refund Processing (LUT & IGST Refund)",
          "Departmental Audit, SCN, & ASMT-10 Mismatch Scrutiny Defense",
          "HSN/SAC Classification, E-Invoicing & E-Way Bill Compliance"
        ]}
      />
      
      {/* ITC Leakage Protection Card */}
      <section className="py-24 bg-white dark:bg-slate-950 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <motion.div 
              whileHover={{ y: -6 }}
              className="lg:col-span-2 p-10 md:p-14 bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 rounded-[3.5rem] text-white relative overflow-hidden shadow-2xl shadow-orange-500/20"
            >
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-white">
                    <BadgePercent size={32} />
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-black">Zero-Loss ITC Protection Cell</h3>
                    <p className="text-orange-100 text-xs font-bold uppercase tracking-wider">Sec 16(2)(aa) Automated Verification</p>
                  </div>
                </div>

                <p className="text-orange-50 text-base md:text-lg leading-relaxed max-w-xl font-medium">
                  Are your vendors filing their GSTR-1 on time? We reconcile your purchase ledgers with official GSTR-2B feeds every month, recovering blocked credits and preventing interest penalties under Section 50.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 text-xs font-bold flex items-center gap-3">
                    <ArrowRightLeft size={18} className="text-orange-200 shrink-0" />
                    <span>Vendor Defaulter Identification</span>
                  </div>
                  <div className="p-4 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 text-xs font-bold flex items-center gap-3">
                    <Truck size={18} className="text-orange-200 shrink-0" />
                    <span>E-Way Bill vs 3B Validation</span>
                  </div>
                </div>
              </div>
              <Database className="absolute -bottom-10 -right-10 text-white/10 pointer-events-none" size={320} />
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-8 md:p-10 bg-slate-50 dark:bg-slate-900 rounded-[3.5rem] border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="w-14 h-14 bg-orange-500/10 text-orange-600 rounded-2xl flex items-center justify-center mb-6">
                  <ShieldAlert size={28} />
                </div>
                <h4 className="text-2xl font-black dark:text-white mb-3">Received ASMT-10 or SCN?</h4>
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mb-6 font-medium">
                  Our indirect tax litigation team specializes in drafting point-by-point reconciliations for DRC-01A, ASMT-10 mismatch intimations, and appellate appeals.
                </p>
              </div>

              <Link 
                to="/query" 
                className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg"
              >
                <span>Request Notice Reply</span>
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>

          {/* Monthly Sprint Steps */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <span className="text-orange-600 dark:text-orange-400 text-xs font-black uppercase tracking-widest">Monthly Rhythm</span>
              <h3 className="text-3xl font-black dark:text-white mt-2">The Monthly GST Compliance Sprint</h3>
              <p className="text-slate-500 text-sm mt-1">How S.K Associates manages your 10th to 20th of every month.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {complianceSteps.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="group p-8 bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] shadow-xl border border-slate-200/80 dark:border-slate-800 hover:border-orange-500/50 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-14 h-14 bg-orange-500/10 text-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500 shadow-inner">
                      {step.icon}
                    </div>
                    <span className="text-xs font-black text-orange-500 uppercase tracking-widest block mb-1">Stage 0{idx + 1}</span>
                    <h4 className="text-xl font-bold dark:text-white mb-2">{step.title}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Statutory Deadlines Table */}
          <div className="bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] p-8 border border-slate-200 dark:border-slate-800 shadow-xl mb-16">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-3">
                <Calendar className="text-orange-500" size={24} />
                <div>
                  <h4 className="text-xl font-black dark:text-white">GST Return Due Date Master Schedule</h4>
                  <p className="text-xs text-slate-400 font-bold">Standard statutory filing dates under Central Goods and Services Tax Rules</p>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-700 text-slate-400 uppercase font-black tracking-wider">
                    <th className="pb-3">GST Form</th>
                    <th className="pb-3">Frequency</th>
                    <th className="pb-3">Statutory Due Date</th>
                    <th className="pb-3">Assessee Category</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                  {gstReturnsSchedule.map((item, idx) => (
                    <tr key={idx} className="hover:bg-white dark:hover:bg-slate-800/50 transition-colors">
                      <td className="py-3.5 font-bold text-orange-600 dark:text-orange-400">{item.returnType}</td>
                      <td className="py-3.5">{item.periodicity}</td>
                      <td className="py-3.5 font-bold text-slate-900 dark:text-white">{item.dueDate}</td>
                      <td className="py-3.5 text-slate-500 dark:text-slate-400">{item.applicableTo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Documents Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 text-orange-600 rounded-full text-xs font-black uppercase mb-6 tracking-widest">
            <Sparkles size={14} /> New Registration Desk
          </div>
          <h3 className="text-3xl md:text-4xl font-black dark:text-white mb-4">Documents Required for New GST Registration</h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xl mx-auto mb-8 font-medium">
            Threshold: ₹40 Lakhs for Goods (₹20L for Special Category States) & ₹20 Lakhs for Services.
          </p>

          <div className="grid md:grid-cols-2 gap-4 text-left mb-8">
            {[
              { doc: 'PAN Card & Aadhaar of Promoters / Partners', sub: 'Mandatory Aadhaar biometric OTP authentication' },
              { doc: 'Electricity Bill / Municipal Tax Receipt', sub: 'Proof of principal place of business (< 2 months old)' },
              { doc: 'Rent Agreement & NOC from Property Owner', sub: 'Signed consent letter along with owner identity proof' },
              { doc: 'Cancelled Cheque or Bank Statement', sub: 'Must show Account Holder Name, IFSC & Branch' }
            ].map((item, i) => (
              <div key={i} className="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-1">
                <div className="flex items-center gap-2 font-bold text-sm text-slate-900 dark:text-slate-100">
                  <CheckCircle2 className="text-emerald-500 shrink-0" size={18} />
                  <span>{item.doc}</span>
                </div>
                <p className="text-xs text-slate-400 pl-6">{item.sub}</p>
              </div>
            ))}
          </div>

          <Link
            to="/query"
            className="inline-flex items-center gap-2 px-10 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-xs uppercase tracking-wider shadow-xl transition"
          >
            Apply for GSTIN within 3 Days <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServiceTax;