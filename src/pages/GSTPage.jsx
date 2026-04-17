import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileCheck, 
  RefreshCcw, 
  ShieldAlert, 
  Truck, 
  UserPlus, 
  Search,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  FileText
} from 'lucide-react';

const GSTPage = () => {
  // Animation Variants
  const containerVars = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVars = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-white dark:bg-slate-950">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-sky-500/10 text-sky-400 font-bold text-sm mb-6 border border-sky-500/20">
              Complete GST Lifecycle Management
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
              Seamless <span className="text-[#007bb6]">GST Compliance</span> & Advisory
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Navigate the complexities of Indirect Taxation with S.K Associates. From registrations to high-stake litigations, we ensure your business remains compliant while optimizing your Input Tax Credit (ITC).
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#007bb6] text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-blue-600 transition shadow-lg shadow-blue-900/40">
                Get GST Consultation <ArrowRight size={20} />
              </button>
              <button className="bg-white/5 text-white border border-white/10 px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition backdrop-blur-md">
                View Compliance Calendar
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SERVICE GRID --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[#007bb6] font-black uppercase tracking-widest mb-4">Our GST Vertical</h2>
          <p className="text-4xl font-black dark:text-white">End-to-End Solutions</p>
        </div>

        <motion.div 
          variants={containerVars}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <GSTServiceCard 
            icon={<UserPlus className="text-blue-500" />}
            title="GST Registration"
            items={["New Registration", "Amendment of Reg.", "Cancellation & Revocation", "LUT Filing for Exports"]}
          />
          <GSTServiceCard 
            icon={<RefreshCcw className="text-emerald-500" />}
            title="GST Returns"
            items={["GSTR-1 & GSTR-3B", "GSTR-9 (Annual)", "GSTR-9C (Reconciliation)", "IFF for QRMP Scheme"]}
          />
          <GSTServiceCard 
            icon={<ShieldAlert className="text-rose-500" />}
            title="Litigation & Notices"
            items={["ASMT-10 Response", "Scrutiny of Returns", "Appellate Representation", "Anti-Profiteering Cases"]}
          />
          <GSTServiceCard 
            icon={<Search className="text-amber-500" />}
            title="Audit & Health Check"
            items={["ITC Reconciliation", "Liability Assessment", "GSTR-2A/2B Matching", "Internal GST Audit"]}
          />
          <GSTServiceCard 
            icon={<Truck className="text-purple-500" />}
            title="E-Way Bill & E-Invoice"
            items={["Bulk Generation", "Consolidated E-Way Bills", "System Integration", "Compliance Training"]}
          />
          <GSTServiceCard 
            icon={<FileCheck className="text-sky-500" />}
            title="GST Refunds"
            items={["Export Refunds", "Inverted Duty Structure", "Deemed Exports", "Refund Tracking"]}
          />
        </motion.div>
      </section>

      {/* --- COMPLIANCE TRACKER SECTION --- */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-slate-900 p-8 rounded-[3rem] shadow-2xl border border-slate-100 dark:border-slate-800"
          >
            <h3 className="text-2xl font-black mb-8 flex items-center gap-3 dark:text-white">
              <FileText className="text-[#007bb6]" /> Monthly Compliance Checklist
            </h3>
            <div className="space-y-6">
              <ChecklistItem date="11th" title="GSTR-1 Filing" desc="Reporting of outward supplies." />
              <ChecklistItem date="13th" title="IFF Filing" desc="For QRMP scheme taxpayers." />
              <ChecklistItem date="20th" title="GSTR-3B Filing" desc="Summary return and tax payment." />
              <ChecklistItem date="25th" title="GST PMT-06" desc="Tax deposit for QRMP users." />
            </div>
          </motion.div>

          <div>
            <h2 className="text-[#007bb6] font-black tracking-widest uppercase mb-4">Why S.K Associates?</h2>
            <h3 className="text-4xl font-black mb-8 dark:text-white leading-tight">Proactive GST Management for Global Businesses</h3>
            <div className="space-y-8">
              <FeatureItem title="100% ITC Optimization" desc="We ensure not a single rupee of Input Tax Credit is lost due to supplier non-compliance." />
              <FeatureItem title="Automated Reconciliation" desc="Advanced tools to match 2A/2B with your purchase register instantly." />
              <FeatureItem title="Litigation Expert" desc="In-house legal team for handling complex GST summons and search cases." />
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-24 max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-black text-center mb-16 dark:text-white">GST Frequently Asked Questions</h2>
        <div className="space-y-4">
          <FAQItem question="Who is required to register for GST?" answer="Businesses with a turnover exceeding ₹40 Lakhs (Goods) or ₹20 Lakhs (Services) must register. Lower limits apply for special category states." />
          <FAQItem question="What is GSTR-9 and is it mandatory?" answer="GSTR-9 is the annual return. It is mandatory for taxpayers with an aggregate turnover above ₹2 Crores, though it's recommended for all." />
          <GSTRefundFAQ />
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#007bb6] to-blue-800 rounded-[2.5rem] p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]" />
          <h2 className="text-4xl font-black mb-6 relative z-10">Filing GST returns shouldn't be a headache.</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto relative z-10">
            Let our experts handle the compliance while you focus on scaling your business. Get a free GST health checkup today.
          </p>
          <button className="bg-white text-[#007bb6] px-12 py-5 rounded-2xl font-black text-lg hover:scale-105 transition relative z-10">
            Connect with GST Expert
          </button>
        </div>
      </section>
    </div>
  );
};

/* --- SUB-COMPONENTS --- */

const GSTServiceCard = ({ icon, title, items }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none"
  >
    <div className="h-14 w-14 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-6 text-2xl">
      {icon}
    </div>
    <h4 className="text-2xl font-black mb-6 dark:text-white">{title}</h4>
    <ul className="space-y-3">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-medium">
          <CheckCircle2 size={16} className="text-[#007bb6]" /> {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

const ChecklistItem = ({ date, title, desc }) => (
  <div className="flex gap-6 p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
    <div className="text-2xl font-black text-[#007bb6]">{date}</div>
    <div>
      <h4 className="font-black dark:text-white">{title}</h4>
      <p className="text-sm text-slate-500">{desc}</p>
    </div>
  </div>
);

const FeatureItem = ({ title, desc }) => (
  <div className="flex gap-5">
    <div className="h-10 w-10 shrink-0 bg-[#007bb6] text-white rounded-lg flex items-center justify-center">
      <CheckCircle2 size={24} />
    </div>
    <div>
      <h4 className="text-xl font-black mb-2 dark:text-white">{title}</h4>
      <p className="text-slate-500 dark:text-slate-400">{desc}</p>
    </div>
  </div>
);

const FAQItem = ({ question, answer }) => (
  <details className="group border border-slate-200 dark:border-slate-800 rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
    <summary className="flex items-center justify-between text-lg font-bold dark:text-white">
      {question}
      <span className="transition group-open:rotate-180">
        <HelpCircle className="text-slate-400" />
      </span>
    </summary>
    <p className="mt-4 text-slate-500 leading-relaxed">
      {answer}
    </p>
  </details>
);

const GSTRefundFAQ = () => (
  <details className="group border border-slate-200 dark:border-slate-800 rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
    <summary className="flex items-center justify-between text-lg font-bold dark:text-white">
      How much time does it take for GST Refund?
      <span className="transition group-open:rotate-180">
        <HelpCircle className="text-slate-400" />
      </span>
    </summary>
    <div className="mt-4 text-slate-500 space-y-2">
      <p>Generally, the refund process follows these steps:</p>
      <ul className="list-disc pl-5">
        <li>Acknowledgment (RFD-02) within 15 days.</li>
        <li>Provisional Refund within 7 days (for exports).</li>
        <li>Final Order (RFD-06) within 60 days.</li>
      </ul>
    </div>
  </details>
);

export default GSTPage;