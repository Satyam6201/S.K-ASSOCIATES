import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, Scale, Users, FileSignature, 
  Globe, Briefcase, Landmark, ShieldAlert,
  ChevronRight, ExternalLink
} from 'lucide-react';
import ServiceLayout from './ServiceLayout';

const CorporateServices = () => {
  const formationSteps = [
    { title: "Digital Signature", desc: "Procuring DSC for proposed directors.", icon: <FileSignature size={20}/> },
    { title: "Name Approval", desc: "RUN (Reserve Unique Name) filing with MCA.", icon: <Globe size={20}/> },
    { title: "Incorporation", desc: "Spice+ Form filing & Certificate of Incorporation.", icon: <Building2 size={20}/> },
    { title: "PAN/TAN/Bank", desc: "Immediate post-incorporation registrations.", icon: <Landmark size={20}/> }
  ];

  return (
    <div className="relative">
      {/* 1. Core Service Layout */}
      <ServiceLayout 
        title="Corporate Legal"
        colorClass="indigo"
        icon={<Building2 size={32} />}
        description="Comprehensive Secretarial and Legal support for modern enterprises. From the birth of a company to complex annual ROC compliances, S.K Associates ensures your corporate standing remains impeccable."
        features={[
          "Company & LLP Incorporation (End-to-End)",
          "Annual ROC Filings (AOC-4, MGT-7)",
          "Maintenance of Statutory Registers",
          "Director Identification Number (DIN) Services",
          "Secretarial Audit & Compliance Certificates"
        ]}
      />

      {/* 2. Formation Journey Timeline */}
      
      <section className="py-24 bg-slate-50 dark:bg-slate-950 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black dark:text-white mb-4">Incorporation Journey</h2>
            <p className="text-slate-500">How we set up your business in 4 simple steps.</p>
          </motion.div>

          <div className="relative flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-indigo-200 dark:bg-indigo-900/50 -z-10"></div>
            
            {formationSteps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.15 }}
                className="flex flex-col items-center text-center max-w-[200px]"
              >
                <div className="w-20 h-20 rounded-full bg-white dark:bg-slate-900 border-4 border-indigo-500 flex items-center justify-center shadow-xl shadow-indigo-500/20 mb-6 group hover:bg-indigo-500 transition-colors duration-500">
                  <div className="text-indigo-500 group-hover:text-white transition-colors">
                    {step.icon}
                  </div>
                </div>
                <h4 className="font-bold dark:text-white mb-2">{step.title}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Compliance Bento & Table */}
      <section className="py-24 bg-white dark:bg-slate-900/30 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            
            {/* ROC Compliance Card */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="lg:col-span-2 p-10 bg-indigo-900 rounded-[3rem] text-white relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <Scale className="text-indigo-400" size={32} />
                  <h3 className="text-2xl font-bold">Annual ROC Compliance</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex gap-3 items-start">
                      <ShieldAlert className="text-amber-400 mt-1" size={18} />
                      <p className="text-sm text-indigo-100 italic">Avoid heavy penalties by filing forms MGT-7 and AOC-4 on time.</p>
                    </div>
                    <ul className="space-y-2 text-sm text-indigo-200">
                      <li>• Board Meeting Documentation</li>
                      <li>• Share Transfer Procedures</li>
                      <li>• Change in Registered Office</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 rounded-3xl p-6 border border-white/10">
                    <p className="text-xs uppercase tracking-widest text-indigo-300 mb-4">Statutory Updates</p>
                    <p className="text-sm">We provide full assistance in <b>DIR-3 KYC</b> and <b>MSME-1</b> filings to keep your company in active status.</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-20 -right-10 opacity-10">
                <Users size={300} />
              </div>
            </motion.div>

            {/* Entity Comparison Card */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="p-10 bg-white dark:bg-slate-800 rounded-[3rem] shadow-2xl border border-slate-100 dark:border-slate-700 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-black dark:text-white mb-4 italic">Pvt Ltd vs. LLP?</h3>
                <p className="text-slate-500 text-sm mb-6">Confused about the right structure for your startup? We provide a detailed analysis based on your funding and liability needs.</p>
              </div>
              <button className="flex items-center justify-between w-full p-4 bg-indigo-50 text-indigo-600 dark:bg-slate-900 dark:text-indigo-400 rounded-2xl font-bold hover:bg-indigo-600 hover:text-white transition-all">
                View Comparison 
                <ChevronRight size={20} />
              </button>
            </motion.div>
          </div>
          
          {/* Quick Contact Link */}
          <div className="text-center">
            <p className="text-slate-400 text-sm flex items-center justify-center gap-2">
              Looking for foreign subsidiary setup? 
              <a href="/query" className="text-indigo-500 font-bold hover:underline flex items-center gap-1">
                Consult with our ROC Team <ExternalLink size={14}/>
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateServices;