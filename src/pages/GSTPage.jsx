import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
  FileText,
  Sparkles,
  ReceiptText
} from 'lucide-react';
import SEO from '../components/common/SEO';

const GSTPage = () => {
  const containerVars = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="bg-gradient-to-b from-[#f4f7fb] via-[#eaf2fb] to-[#f4f7fb] dark:from-[#070d1e] dark:via-[#0c1630] dark:to-[#070d1e] text-slate-900 dark:text-slate-100 transition-colors duration-500">
      <SEO 
        title="GST Advisory, Return Filings & ITC 2B Reconciliation"
        description="End-to-end GST management: GSTR-1, GSTR-3B, GSTR-9/9C annual audits, 100% 2B vs 3B input tax credit optimization, LUT export filing, and GST department appeal defense."
        keywords="GST Filing Noida, GST Consultant CA, GSTR 2B Reconciliation, GSTR 9 9C Audit, GST Refund Export LUT"
        canonicalPath="/gst"
        breadcrumbs={[
          { name: "Services", url: "/" },
          { name: "GST & Indirect Tax", url: "/gst" }
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
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-sky-200 dark:text-sky-300 font-bold text-xs mb-6 border border-white/20 backdrop-blur-md">
              <Sparkles size={14} className="text-amber-400" /> Complete GST Lifecycle Management
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
              Seamless <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-white to-amber-300">GST Compliance</span> & Advisory
            </h1>
            <p className="text-base sm:text-xl text-slate-200 mb-8 sm:mb-10 leading-relaxed font-medium">
              Navigate the complexities of Indirect Taxation with S.K Associates. From registrations to high-stake litigations, we ensure your business remains compliant while optimizing your Input Tax Credit (ITC).
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/query" className="w-full sm:w-auto bg-[#007bb6] text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-sky-600 transition shadow-lg shadow-blue-900/40">
                Get GST Consultation <ArrowRight size={18} />
              </Link>
              <Link to="/calculators" className="w-full sm:w-auto bg-white/10 text-white border border-white/20 px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition backdrop-blur-md text-center">
                Launch GST Calculator
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-[#007bb6] dark:text-sky-400 font-black uppercase tracking-widest text-xs">Our GST Vertical</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black dark:text-white mt-2">End-to-End Solutions</h2>
        </div>

        <motion.div 
          variants={containerVars}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <GSTServiceCard 
            icon={<UserPlus className="text-blue-500" size={28} />}
            title="GST Registration"
            items={["New Registration", "Amendment of Reg.", "Cancellation & Revocation", "LUT Filing for Exports"]}
          />
          <GSTServiceCard 
            icon={<RefreshCcw className="text-emerald-500" size={28} />}
            title="GST Returns"
            items={["GSTR-1 & GSTR-3B", "GSTR-9 (Annual)", "GSTR-9C (Reconciliation)", "IFF for QRMP Scheme"]}
          />
          <GSTServiceCard 
            icon={<ShieldAlert className="text-rose-500" size={28} />}
            title="Litigation & Notices"
            items={["ASMT-10 Response", "Scrutiny of Returns", "Appellate Representation", "Anti-Profiteering Cases"]}
          />
          <GSTServiceCard 
            icon={<Search className="text-amber-500" size={28} />}
            title="Audit & Health Check"
            items={["ITC Reconciliation", "Liability Assessment", "GSTR-2A/2B Matching", "Internal GST Audit"]}
          />
          <GSTServiceCard 
            icon={<Truck className="text-purple-500" size={28} />}
            title="E-Way Bill & E-Invoice"
            items={["Bulk Generation", "Consolidated E-Way Bills", "System Integration", "Compliance Training"]}
          />
          <GSTServiceCard 
            icon={<FileCheck className="text-sky-500" size={28} />}
            title="GST Refunds"
            items={["Export Refunds", "Inverted Duty Structure", "Deemed Exports", "Refund Tracking"]}
          />
        </motion.div>
      </section>

      {/* Checklist & Features */}
      <section className="py-20 sm:py-28 bg-white/80 dark:bg-[#0d1730]/80 border-y border-slate-200/80 dark:border-[#1a2c56]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-slate-50 dark:bg-[#070d1e] p-6 sm:p-10 rounded-3xl sm:rounded-[3rem] shadow-xl border border-slate-200/80 dark:border-[#1a2c56]"
          >
            <h3 className="text-2xl font-black mb-6 flex items-center gap-3 dark:text-white">
              <FileText className="text-[#007bb6] dark:text-sky-400" /> Monthly Compliance Checklist
            </h3>
            <div className="space-y-4">
              <ChecklistItem date="11th" title="GSTR-1 Filing" desc="Reporting of monthly outward supply invoices." />
              <ChecklistItem date="13th" title="IFF Filing" desc="Invoice Furnishing Facility for QRMP taxpayers." />
              <ChecklistItem date="20th" title="GSTR-3B Filing" desc="Monthly summary return and tax cash payment." />
              <ChecklistItem date="25th" title="GST PMT-06" desc="Monthly tax challan deposit for QRMP users." />
            </div>
          </motion.div>

          <div className="space-y-6">
            <span className="text-[#007bb6] dark:text-sky-400 font-black tracking-widest uppercase text-xs">Why S.K Associates?</span>
            <h3 className="text-3xl sm:text-4xl font-black dark:text-white leading-tight">Proactive GST Management for Growing Businesses</h3>
            <div className="space-y-6">
              <FeatureItem title="100% ITC Optimization" desc="We ensure not a single rupee of Input Tax Credit is lost due to supplier filing mismatches." />
              <FeatureItem title="Automated 2B Reconciliation" desc="Advanced computational tools to match 2B with your purchase register in real-time." />
              <FeatureItem title="Experienced Litigation Cell" desc="Specialized representation for handling GST summons, ASMT-10 notices, and search cases." />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 sm:py-28 max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-black text-center mb-12 sm:mb-16 dark:text-white">GST Frequently Asked Questions</h2>
        <div className="space-y-4">
          <FAQItem question="Who is required to register for GST?" answer="Businesses with a turnover exceeding ₹40 Lakhs (Goods) or ₹20 Lakhs (Services) must register. Lower limits (₹10/20 Lakhs) apply for special category North Eastern states." />
          <FAQItem question="What is GSTR-9 and is it mandatory?" answer="GSTR-9 is the consolidated annual return. It is mandatory for taxpayers with an aggregate annual turnover above ₹2 Crores." />
          <GSTRefundFAQ />
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#00325b] via-[#005f9e] to-[#007bb6] rounded-3xl sm:rounded-[3rem] p-8 sm:p-14 text-center text-white relative overflow-hidden shadow-2xl border border-white/20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 relative z-10 leading-tight">Filing GST returns shouldn't be a headache.</h2>
          <p className="text-blue-100 text-base sm:text-lg mb-8 max-w-2xl mx-auto relative z-10 font-medium">
            Let our Chartered Accountants handle the compliance while you focus on scaling your business. Get a free GST health checkup today.
          </p>
          <Link to="/query" className="inline-block bg-white text-[#007bb6] px-8 sm:px-12 py-4 sm:py-5 rounded-2xl font-black text-base hover:bg-slate-100 transition relative z-10 shadow-xl">
            Connect with GST Partner
          </Link>
        </div>
      </section>
    </div>
  );
};

const GSTServiceCard = ({ icon, title, items }) => (
  <motion.div 
    whileHover={{ y: -8, scale: 1.02 }}
    className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0d1730] border border-slate-200/80 dark:border-[#1a2c56] shadow-xl flex flex-col justify-between"
  >
    <div>
      <div className="h-14 w-14 rounded-2xl bg-slate-100 dark:bg-[#15244a] flex items-center justify-center mb-6">
        {icon}
      </div>
      <h4 className="text-xl sm:text-2xl font-black mb-4 dark:text-white">{title}</h4>
      <ul className="space-y-2.5">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-medium text-sm">
            <CheckCircle2 size={16} className="text-[#007bb6] dark:text-sky-400 shrink-0" /> {item}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const ChecklistItem = ({ date, title, desc }) => (
  <div className="flex gap-4 p-3.5 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors">
    <div className="text-xl font-black text-[#007bb6] dark:text-sky-400 shrink-0 w-12">{date}</div>
    <div>
      <h4 className="font-bold dark:text-white text-sm">{title}</h4>
      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{desc}</p>
    </div>
  </div>
);

const FeatureItem = ({ title, desc }) => (
  <div className="flex gap-4 items-start">
    <div className="h-10 w-10 shrink-0 bg-[#007bb6] text-white rounded-xl flex items-center justify-center shadow-md">
      <CheckCircle2 size={20} />
    </div>
    <div>
      <h4 className="text-lg font-black dark:text-white">{title}</h4>
      <p className="text-slate-600 dark:text-slate-400 text-sm mt-0.5 font-medium leading-relaxed">{desc}</p>
    </div>
  </div>
);

const FAQItem = ({ question, answer }) => (
  <details className="group border border-slate-200 dark:border-[#1a2c56] bg-white dark:bg-[#0d1730] rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
    <summary className="flex items-center justify-between text-base sm:text-lg font-bold dark:text-white">
      {question}
      <span className="transition group-open:rotate-180 ml-2">
        <HelpCircle className="text-slate-400 shrink-0" size={18} />
      </span>
    </summary>
    <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium">
      {answer}
    </p>
  </details>
);

const GSTRefundFAQ = () => (
  <details className="group border border-slate-200 dark:border-[#1a2c56] bg-white dark:bg-[#0d1730] rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
    <summary className="flex items-center justify-between text-base sm:text-lg font-bold dark:text-white">
      How much time does it take for GST Refund?
      <span className="transition group-open:rotate-180 ml-2">
        <HelpCircle className="text-slate-400 shrink-0" size={18} />
      </span>
    </summary>
    <div className="mt-3 text-slate-600 dark:text-slate-400 text-sm space-y-2 font-medium">
      <p>Generally, the statutory refund process follows these milestones:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Acknowledgment in Form RFD-02 within 15 days of filing.</li>
        <li>Provisional Refund of 90% in Form RFD-04 within 7 days (for zero-rated exporters).</li>
        <li>Final Sanction Order in Form RFD-06 within 60 days of application.</li>
      </ul>
    </div>
  </details>
);

export default GSTPage;