import React from 'react';
import { motion } from 'framer-motion';
import { Scale, CheckCircle2, AlertCircle, Gavel } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="pt-32 pb-20 px-6 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-slate-900 p-12 rounded-[3rem] shadow-2xl border border-slate-100 dark:border-slate-800"
        >
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-full">
              <Scale size={48} className="text-[#007bb6]" />
            </div>
          </div>
          
          <h1 className="text-4xl font-black text-center text-slate-900 dark:text-white mb-4">Terms of Service</h1>
          <p className="text-center text-slate-500 mb-12 italic">Please read these terms carefully before using our consultancy services.</p>

          <div className="space-y-10">
            <section>
              <h2 className="text-xl font-black text-[#007bb6] uppercase tracking-widest mb-4 flex items-center gap-2">
                <Gavel size={18} /> 1. Professional Engagement
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                By engaging S.K Associates, you agree that the relationship is one of client and professional consultant. All advice provided is based on the prevailing laws of India at the time of consultation.
              </p>
            </section>

            <section className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border-l-4 border-orange-500">
              <h2 className="text-xl font-black text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <AlertCircle size={18} className="text-orange-500" /> 2. Accuracy of Information
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                The client is responsible for the accuracy and completeness of the documents provided (PAN, Bank Statements, Invoices). S.K Associates is not liable for penalties resulting from the submission of incorrect or forged data by the client.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-[#007bb6] uppercase tracking-widest mb-4 flex items-center gap-2">
                <CheckCircle2 size={18} /> 3. Payment & Refunds
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Fees for GST registration, Income Tax filing, and Audit services must be paid as per the agreed schedule. Refunds are processed only if the service has not been initiated within 7 working days.
              </p>
            </section>

            <section className="pt-8 border-t border-slate-100 dark:border-slate-800 text-sm text-slate-400 text-center">
              Copyright © 2026 S.K Associates. All Rights Reserved. Use of this site constitutes acceptance of our terms.
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;