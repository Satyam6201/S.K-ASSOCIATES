import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, Scale, Users, FileSignature, 
  Globe, Briefcase, Landmark, ShieldAlert,
  ChevronRight, ExternalLink, CheckCircle2,
  X, Check, AlertCircle, ArrowRight, Sparkles, FileText
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceLayout from './ServiceLayout';
import SEO from '../../components/common/SEO';

const CorporateServices = () => {
  const [showComparison, setShowComparison] = useState(false);
  const [selectedEntity, setSelectedEntity] = useState('pvt_ltd');

  const formationSteps = [
    { title: "Digital Signature", desc: "Procuring Class 3 DSC for proposed directors & designated partners.", icon: <FileSignature size={22}/> },
    { title: "Name Approval", desc: "RUN (Reserve Unique Name) & Part-A SPICe+ filing with MCA.", icon: <Globe size={22}/> },
    { title: "SPICe+ Filing", desc: "MOA, AOA, AGILE-PRO-S form filing & Certificate of Incorporation.", icon: <Building2 size={22}/> },
    { title: "PAN/TAN/Bank", desc: "Immediate post-incorporation registrations, EPFO/ESIC & Bank A/c setup.", icon: <Landmark size={22}/> }
  ];

  const entityMatrix = {
    pvt_ltd: {
      name: "Private Limited Company",
      minMembers: "2 Members, 2 Directors",
      maxMembers: "200 Members",
      liability: "Limited to share capital unpaid",
      taxRate: "22% + Surcharge (Sec 115BAA)",
      statutoryAudit: "Mandatory (Every Year)",
      fundraising: "Ideal for VC / Angel Funding / ESOPs",
      complianceCost: "Moderate to High",
      mcaForms: "AOC-4, MGT-7, DIR-3 KYC, ADT-1"
    },
    llp: {
      name: "Limited Liability Partnership (LLP)",
      minMembers: "2 Designated Partners",
      maxMembers: "No Limit",
      liability: "Limited to agreed contribution",
      taxRate: "30% Flat Rate",
      statutoryAudit: "Mandatory only if Turnover > ₹40L or Capital > ₹25L",
      fundraising: "Restricted (No equity share issuance)",
      complianceCost: "Low to Moderate",
      mcaForms: "Form 8, Form 11, DIR-3 KYC"
    },
    opc: {
      name: "One Person Company (OPC)",
      minMembers: "1 Member, 1 Nominee",
      maxMembers: "1 Member",
      liability: "Limited to shares subscribed",
      taxRate: "22% + Surcharge",
      statutoryAudit: "Mandatory",
      fundraising: "Limited (Cannot issue equity to multiple investors)",
      complianceCost: "Moderate",
      mcaForms: "AOC-4, MGT-7A, DIR-3 KYC"
    }
  };

  return (
    <div className="relative">
      <SEO 
        title="Company Incorporation & Corporate Secretarial ROC Services"
        description="Private Limited Company registration, LLP incorporation, SPICe+ filing, Annual ROC compliance (AOC-4, MGT-7), DIR-3 KYC, and Startup India tax exemptions."
        keywords="Company Registration Noida, Private Limited Incorporation, LLP Registration CA, ROC Filings AOC 4 MGT 7, Startup India Registration"
        canonicalPath="/corporate-services"
        breadcrumbs={[
          { name: "Services", url: "/" },
          { name: "Corporate Services", url: "/corporate-services" }
        ]}
      />
      <ServiceLayout 
        title="Corporate Secretarial & ROC"
        colorClass="indigo"
        icon={<Building2 size={32} />}
        description="Comprehensive Secretarial, Legal, and Corporate Governance support for startups and established enterprises. From day-1 SPICe+ company formation to complex annual ROC compliances, S.K Associates ensures your corporate standing remains active and penalty-free."
        features={[
          "End-to-End Company (Pvt Ltd / OPC / Section 8) & LLP Incorporation",
          "Annual ROC Filings (AOC-4 Financials & MGT-7/7A Returns)",
          "Maintenance of Statutory Registers & Board Resolutions",
          "Director KYC (DIR-3 KYC) & DIN Allotment Services",
          "Secretarial Audit, Share Transfers & Increase in Authorized Capital"
        ]}
      />
      
      {/* 4 Step Incorporation */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-indigo-600 dark:text-indigo-400 text-xs font-black uppercase tracking-widest">Fast-Track Process</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black dark:text-white mt-2">Startup Incorporation in 4 Steps</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-3 font-medium">Average timeline: 3 to 5 business days from document collation.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {formationSteps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="flex flex-col justify-between p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl group"
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shadow-md mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                    {step.icon}
                  </div>
                  <span className="text-xs font-black text-indigo-500 uppercase tracking-widest block mb-1">Phase 0{i + 1}</span>
                  <h4 className="font-black text-xl dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{step.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{step.desc}</p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-indigo-500">
                  <span>Standard SLA: 24h</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Annual ROC Filings Section */}
      <section className="py-24 bg-white dark:bg-slate-900/40 px-6 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            
            <motion.div 
              whileHover={{ y: -6 }}
              className="lg:col-span-2 p-10 md:p-14 bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-950 rounded-[3rem] text-white relative overflow-hidden shadow-2xl border border-indigo-500/20"
            >
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <Scale size={28} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black">Annual ROC Compliance Suite</h3>
                    <p className="text-xs text-indigo-300 font-bold uppercase tracking-wider">Avoid ₹100/day MCA Default Penalties</p>
                  </div>
                </div>

                <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-xl font-medium">
                  Companies registered under the Companies Act 2013 are statutorily required to file audited annual balance sheets and director disclosures. S.K Associates handles the entire end-to-end filing workflow.
                </p>

                <div className="grid md:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10 space-y-1">
                    <span className="text-xs text-indigo-300 font-bold uppercase">Form AOC-4 (Financials)</span>
                    <p className="text-xs text-slate-300">Filing audited balance sheet, P&L, Board Report & Auditor's Report within 30 days of AGM.</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10 space-y-1">
                    <span className="text-xs text-indigo-300 font-bold uppercase">Form MGT-7 / 7A (Annual Return)</span>
                    <p className="text-xs text-slate-300">Filing annual member registers, share transfers & director list within 60 days of AGM.</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <span className="px-3.5 py-1.5 rounded-full bg-indigo-500/20 text-indigo-200 text-xs font-bold border border-indigo-400/30">DIR-3 Web KYC</span>
                  <span className="px-3.5 py-1.5 rounded-full bg-indigo-500/20 text-indigo-200 text-xs font-bold border border-indigo-400/30">MSME-1 Bi-Annual Return</span>
                  <span className="px-3.5 py-1.5 rounded-full bg-indigo-500/20 text-indigo-200 text-xs font-bold border border-indigo-400/30">DPT-3 Return of Deposits</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -6 }}
              className="p-8 md:p-10 bg-slate-50 dark:bg-slate-900 rounded-[3rem] shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between"
            >
              <div>
                <span className="px-3 py-1 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-wider">
                  Startup Advisory
                </span>
                <h3 className="text-2xl font-black dark:text-white mt-4 mb-3">Pvt Ltd vs. LLP Comparison</h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mb-6 font-medium">
                  Confused about the right legal entity for your startup? Compare tax rates, investor flexibility, and statutory audit obligations.
                </p>

                <div className="space-y-3">
                  <div className="p-3 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 text-xs font-bold flex justify-between">
                    <span>Pvt Ltd Tax Rate:</span>
                    <span className="text-emerald-600 dark:text-emerald-400">22% (Sec 115BAA)</span>
                  </div>
                  <div className="p-3 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 text-xs font-bold flex justify-between">
                    <span>LLP Tax Rate:</span>
                    <span className="text-indigo-600 dark:text-indigo-400">30% Flat Rate</span>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setShowComparison(true)}
                className="mt-6 flex items-center justify-between w-full p-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black text-xs uppercase tracking-wider transition-all shadow-lg"
              >
                <span>Open Entity Matrix</span> 
                <ChevronRight size={18} />
              </button>
            </motion.div>
          </div>
          
          <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 text-center">
            <p className="text-slate-600 dark:text-slate-400 text-sm flex items-center justify-center gap-2 font-medium">
              Looking for foreign subsidiary setup or FDI compliance under FEMA?
              <Link to="/query" className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline flex items-center gap-1">
                Consult with our ROC Team <ExternalLink size={14}/>
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Modal */}
      <AnimatePresence>
        {showComparison && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setShowComparison(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            <motion.div 
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 30, opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-[3rem] shadow-2xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 z-10 space-y-6 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center pb-4 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <h3 className="text-2xl font-black dark:text-white">Business Entity Comparison Matrix</h3>
                  <p className="text-xs text-slate-400 font-bold">Select an entity to review detailed legal parameters</p>
                </div>
                <button 
                  onClick={() => setShowComparison(false)}
                  className="p-2.5 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-500 hover:text-slate-900 dark:hover:text-white transition"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex gap-2 p-1.5 bg-slate-100 dark:bg-slate-800 rounded-2xl">
                {Object.keys(entityMatrix).map((k) => (
                  <button
                    key={k}
                    onClick={() => setSelectedEntity(k)}
                    className={`flex-1 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                      selectedEntity === k ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500'
                    }`}
                  >
                    {entityMatrix[k].name.split(' ')[0]} {entityMatrix[k].name.split(' ')[1] || ''}
                  </button>
                ))}
              </div>

              <div className="space-y-4">
                <div className="p-6 bg-slate-50 dark:bg-slate-800/60 rounded-3xl border border-slate-200 dark:border-slate-700 space-y-4">
                  <h4 className="text-xl font-black text-indigo-600 dark:text-indigo-400">{entityMatrix[selectedEntity].name}</h4>

                  <div className="grid sm:grid-cols-2 gap-4 text-xs font-semibold">
                    <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                      <span className="text-slate-400 block font-bold">Min Members / Directors</span>
                      <span className="text-slate-900 dark:text-white font-bold">{entityMatrix[selectedEntity].minMembers}</span>
                    </div>

                    <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                      <span className="text-slate-400 block font-bold">Corporate Income Tax Rate</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">{entityMatrix[selectedEntity].taxRate}</span>
                    </div>

                    <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                      <span className="text-slate-400 block font-bold">Statutory Audit Requirement</span>
                      <span className="text-slate-900 dark:text-white font-bold">{entityMatrix[selectedEntity].statutoryAudit}</span>
                    </div>

                    <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                      <span className="text-slate-400 block font-bold">Fundraising & Investment</span>
                      <span className="text-slate-900 dark:text-white font-bold">{entityMatrix[selectedEntity].fundraising}</span>
                    </div>

                    <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 col-span-2">
                      <span className="text-slate-400 block font-bold">Key Annual ROC Forms</span>
                      <span className="text-indigo-600 dark:text-indigo-400 font-bold">{entityMatrix[selectedEntity].mcaForms}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex gap-4">
                <Link
                  to="/query"
                  onClick={() => setShowComparison(false)}
                  className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black text-xs uppercase tracking-wider text-center shadow-lg transition"
                >
                  Start Incorporation for {entityMatrix[selectedEntity].name}
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default CorporateServices;