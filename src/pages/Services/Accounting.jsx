import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, Calculator, BarChart4, Receipt, 
  TrendingUp, FileSpreadsheet, Layers, PieChart 
} from 'lucide-react';
import ServiceLayout from './ServiceLayout';

const Accounting = () => {
  const workflow = [
    { title: "Data Collection", desc: "Automated gathering of vouchers and bank statements.", icon: <Receipt size={20}/> },
    { title: "Processing", desc: "Categorization and entry into cloud accounting software.", icon: <Layers size={20}/> },
    { title: "Review", desc: "Verification of ledgers by senior audit partners.", icon: <Calculator size={20}/> },
    { title: "Reporting", desc: "Final MIS reports and Balance Sheet generation.", icon: <PieChart size={20}/> }
  ];

  return (
    <div className="relative">
      {/* 1. Base Service Layout */}
      <ServiceLayout 
        title="Expert Accounting"
        colorClass="sky"
        icon={<BookOpen size={32} />}
        description="Transform your financial records from mere numbers into a strategic asset. S.K Associates provides end-to-end bookkeeping and virtual CFO services for startups and SMEs."
        features={[
          "Cloud-Based Real-time Bookkeeping",
          "Automated Bank Reconciliations",
          "Fixed Asset & Inventory Management",
          "Customized Management Information System (MIS)",
          "Payroll & Reimbursement Processing"
        ]}
      />

      {/* 2. Interactive Process Timeline */}
      <section className="pb-24 bg-slate-50 dark:bg-slate-950 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-black dark:text-white mb-4">Our Methodology</h2>
            <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflow.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="relative p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-800 group"
              >
                <div className="w-12 h-12 bg-sky-500/10 text-sky-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sky-500 group-hover:text-white transition-all duration-500">
                  {step.icon}
                </div>
                <h4 className="text-xl font-bold dark:text-white mb-2">{step.title}</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{step.desc}</p>
                
                {idx !== workflow.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 z-20 text-slate-300 dark:text-slate-700">
                    <TrendingUp size={24} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Specialized Solutions Bento Grid */}
      <section className="py-24 bg-white dark:bg-slate-900/50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-slate-900 rounded-[3rem] p-12 text-white overflow-hidden relative">
              <div className="relative z-10">
                <h3 className="text-3xl font-black mb-4">Virtual CFO Services</h3>
                <p className="text-slate-400 mb-8 max-w-md">Get the expertise of a senior financial officer without the full-time cost. We manage cash flow, financial planning, and risk management.</p>
                <ul className="grid md:grid-cols-2 gap-4">
                  <li className="flex items-center gap-2 text-sm"><BarChart4 size={16} className="text-sky-400"/> Strategic Growth Planning</li>
                  <li className="flex items-center gap-2 text-sm"><FileSpreadsheet size={16} className="text-sky-400"/> Budget vs Actual Analysis</li>
                </ul>
              </div>
              <div className="absolute top-0 right-0 p-12 opacity-10">
                <BarChart4 size={200} />
              </div>
            </div>

            <div className="bg-gradient-to-br from-sky-500 to-blue-700 rounded-[3rem] p-12 text-white">
              <h3 className="text-2xl font-bold mb-4">Quick Audit Prep</h3>
              <p className="text-sky-100 text-sm mb-6">We ensure your accounts are audit-ready, reducing the friction during statutory and tax audits.</p>
              <button className="w-full py-4 bg-white text-blue-600 rounded-2xl font-black hover:bg-sky-50 transition-colors">
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accounting;