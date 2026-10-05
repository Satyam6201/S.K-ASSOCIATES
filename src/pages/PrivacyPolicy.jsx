import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Eye, FileText, Bell, Database, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';

const PrivacyPolicy = () => {
  const [activeTopic, setActiveTopic] = useState('dpdp');

  const sections = [
    {
      id: 'collection',
      icon: <Eye className="text-blue-500" />,
      title: "1. Information We Collect",
      content: "We collect personal and financial information voluntarily provided during engagement with our statutory advisory services. This includes: (a) Identity & KYC records (PAN, Aadhaar, Passport, DIN, DSC); (b) Business identifiers (GSTIN, Corporate Identification Number CIN, TAN); (c) Financial statements, GSTR files, bank account statements, and invoices necessary for income tax and statutory audit execution."
    },
    {
      id: 'usage',
      icon: <Lock className="text-[#007bb6]" />,
      title: "2. Lawful Basis & Purpose of Processing",
      content: "All data is processed strictly under the mandate of professional consultancy agreements and in accordance with Indian Statutory Laws (Income Tax Act 1961, CGST Act 2017, and Companies Act 2013). We do not sell, lease, or monetize client data to any third-party marketing or advertising networks."
    },
    {
      id: 'dpdp',
      icon: <ShieldCheck className="text-emerald-500" />,
      title: "3. Digital Personal Data Protection Act (DPDP 2023) Compliance",
      content: "As a Data Processor and Fiduciary for your business records, S.K Associates implements end-to-end AES-256 bit encryption at rest and TLS 1.3 in transit. Access to financial records is role-restricted strictly to assigned Chartered Accountants, company secretaries, and audit associates under formal NDAs."
    },
    {
      id: 'retention',
      icon: <Database className="text-indigo-500" />,
      title: "4. Statutory Data Retention Periods",
      content: "In compliance with Section 128 of the Companies Act 2013 and Section 44AA of the Income Tax Act 1961, audit documentation and return acknowledgments are retained for a minimum of 8 financial years preceding the current assessment year, after which they are securely purged upon client instruction."
    }
  ];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 bg-slate-50 dark:bg-[#020617] min-h-screen text-slate-900 dark:text-slate-100 transition-colors duration-500 selection:bg-[#007bb6]/30">
      <SEO 
        title="Privacy Policy & DPDP Act 2023 Data Governance"
        description="Data governance and privacy standards at S.K Associates. Full compliance with Digital Personal Data Protection Act 2023, AES-256 encryption, and statutory record retention."
        keywords="Privacy Policy S.K Associates, DPDP Act 2023 Compliance, Financial Data Security Chartered Accountants"
        canonicalPath="/privacy-policy"
        breadcrumbs={[
          { name: "Legal", url: "/privacy-policy" },
          { name: "Privacy Policy", url: "/privacy-policy" }
        ]}
      />
      <div className="max-w-4xl mx-auto space-y-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-[#007bb6] dark:text-sky-400 text-xs font-black uppercase tracking-widest border border-blue-500/20">
            <ShieldCheck size={14} /> Statutory Data Protection
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight dark:text-white">
            Privacy Policy & <span className="text-[#007bb6] dark:text-sky-400">Data Governance</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium text-sm sm:text-base max-w-xl mx-auto">
            Governed by the Digital Personal Data Protection Act 2023 and the Code of Ethics of the Institute of Chartered Accountants of India (ICAI).
          </p>
          <p className="text-xs text-slate-400 font-bold">Last Statutory Review: April 2026 • Version 3.2</p>
        </motion.div>

        <div className="p-6 bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 rounded-3xl flex items-start gap-4">
          <ShieldCheck className="text-blue-600 dark:text-sky-400 mt-1 shrink-0" size={24} />
          <div className="space-y-1 text-xs">
            <h4 className="font-black text-slate-900 dark:text-white text-sm">Professional Privilege & Confidentiality</h4>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              Information shared with S.K Associates for filing taxes, drafting appeals, or conducting statutory audits is protected under professional legal privilege and strict ICAI confidentiality protocols.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {sections.map((section, idx) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-white dark:bg-[#0d1730] p-6 sm:p-8 rounded-[2.5rem] shadow-xl border border-slate-200/80 dark:border-[#1a2c56] space-y-4"
            >
              <div className="flex items-center gap-4">
                <div className="p-3.5 bg-slate-100 dark:bg-[#15244a] rounded-2xl shrink-0">
                  {section.icon}
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">{section.title}</h2>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-medium pl-1">
                {section.content}
              </p>
            </motion.div>
          ))}

          <motion.div 
            className="p-8 md:p-10 bg-gradient-to-br from-[#003865] via-[#005f9e] to-[#007bb6] rounded-[2.8rem] text-white shadow-2xl space-y-4 border border-white/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <div className="p-3 bg-white/10 rounded-2xl">
                <Bell size={22} className="text-sky-300" />
              </div>
              <h3 className="text-2xl font-black">Data Protection & Grievance Officer</h3>
            </div>
            <p className="text-slate-200 text-sm leading-relaxed font-medium">
              If you wish to exercise your rights under DPDP 2023 (access, correction, erasure, or grievance redressal), you may submit a formal request to our Compliance Office:
            </p>
            <div className="p-4 bg-white/10 rounded-2xl border border-white/20 text-xs font-semibold space-y-1">
              <p><strong>Officer:</strong> Compliance Officer, S.K Associates</p>
              <p><strong>Email:</strong> officeska2000@gmail.com</p>
              <p><strong>Address:</strong> Office 1063, 10th Floor, Gaur City Mall, Noida West, UP 201306</p>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;