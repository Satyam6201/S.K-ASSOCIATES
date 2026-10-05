import React from 'react';
import { motion } from 'framer-motion';
import { Scale, CheckCircle2, AlertCircle, Gavel, FileCheck, Shield, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';

const TermsOfService = () => {
  const clauses = [
    {
      icon: <Gavel className="text-[#007bb6] dark:text-sky-400" size={20} />,
      title: "1. Professional Engagement & Scope",
      content: "By engaging S.K Associates for Tax, Audit, ROC, or Secretarial services, a client-consultant relationship is established. All advice, return filings, and legal submissions are formulated based on the prevailing statutory laws of India (Income Tax Act 1961, CGST Act 2017, Companies Act 2013) at the time of execution."
    },
    {
      icon: <AlertCircle className="text-amber-500" size={20} />,
      title: "2. Client Accuracy & Document Authenticity",
      content: "The client bears sole statutory responsibility for the authenticity and completeness of provided source documents (including PAN, invoices, purchase registers, and financial ledgers). S.K Associates shall not be held liable for statutory fines, interest, or prosecution resulting from forged, undisclosed, or misrepresented client records."
    },
    {
      icon: <Clock className="text-emerald-500" size={20} />,
      title: "3. Turnaround SLA & Deadline Obligations",
      content: "Statutory filings (GSTR-1, GSTR-3B, ITR, AOC-4, MGT-7) require client approval and document handover at least 48 hours prior to statutory portal deadlines. Submissions received with less than 24 hours remaining are executed on a best-effort basis subject to portal server uptime."
    },
    {
      icon: <CheckCircle2 className="text-blue-500" size={20} />,
      title: "4. Professional Fee Schedule & Refund Policy",
      content: "Professional retainers and filing fees must be remitted as per invoice milestones. In the event a service is cancelled prior to drafting or portal document submission, a refund minus administrative processing costs (15%) is issued within 7 working days."
    },
    {
      icon: <Shield className="text-indigo-500" size={20} />,
      title: "5. Jurisdiction & Dispute Resolution",
      content: "Any disputes arising from advisory engagements are subject to amicable mutual arbitration under the Arbitration and Conciliation Act 1996, with exclusive legal jurisdiction vested in the competent Courts of Gautam Buddha Nagar (Noida) / Delhi NCR."
    }
  ];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 bg-slate-50 dark:bg-[#020617] min-h-screen text-slate-900 dark:text-slate-100 transition-colors duration-500 selection:bg-[#007bb6]/30">
      <SEO 
        title="Terms of Professional Service & Engagement SLAs"
        description="Professional engagement terms, statutory compliance SLAs, fee schedules, refund policies, and legal jurisdiction for S.K Associates advisory clients."
        keywords="Terms of Service S.K Associates, CA Engagement Terms, Tax Advisory SLAs India"
        canonicalPath="/terms-of-service"
        breadcrumbs={[
          { name: "Legal", url: "/terms-of-service" },
          { name: "Terms of Service", url: "/terms-of-service" }
        ]}
      />
      <div className="max-w-4xl mx-auto space-y-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-[#007bb6] dark:text-sky-400 text-xs font-black uppercase tracking-widest border border-blue-500/20">
            <Scale size={14} /> Statutory Master Agreement
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight dark:text-white">
            Terms of <span className="text-[#007bb6] dark:text-sky-400">Professional Service</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium text-sm sm:text-base max-w-xl mx-auto">
            Governing statutory consulting, corporate filing retainers, and client representations with S.K Associates.
          </p>
          <p className="text-xs text-slate-400 font-bold">Effective Date: April 2026 • Registered Firm ID: SKA-2017</p>
        </motion.div>

        <div className="space-y-6">
          {clauses.map((clause, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-white dark:bg-[#0d1730] p-6 sm:p-8 rounded-[2.5rem] shadow-xl border border-slate-200/80 dark:border-[#1a2c56] space-y-3"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-3 bg-slate-100 dark:bg-[#15244a] rounded-2xl shrink-0">
                  {clause.icon}
                </div>
                <h2 className="text-xl font-black text-slate-900 dark:text-white">{clause.title}</h2>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-medium pl-1">
                {clause.content}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="p-8 bg-slate-900 dark:bg-[#0d1730] text-white rounded-[2.5rem] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <h4 className="font-black text-lg">Have Questions About Engagement Terms?</h4>
            <p className="text-xs text-slate-400 mt-0.5">Our compliance desk is available to assist you with contract details.</p>
          </div>
          <Link 
            to="/contact"
            className="px-6 py-3.5 bg-[#007bb6] hover:bg-blue-600 text-white rounded-xl font-black text-xs uppercase tracking-wider shrink-0 transition"
          >
            Contact Legal Desk
          </Link>
        </motion.div>

      </div>
    </div>
  );
};

export default TermsOfService;