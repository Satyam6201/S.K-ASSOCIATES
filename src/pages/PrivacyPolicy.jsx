import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Eye, FileText, Bell } from 'lucide-react';

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: <Eye className="text-blue-500" />,
      title: "Information We Collect",
      content: "We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our services. This includes names, PAN details, GST numbers, contact information, and financial records necessary for tax filing."
    },
    {
      icon: <Lock className="text-[#007bb6]" />,
      title: "How We Use Your Data",
      content: "Your data is used strictly for providing professional consultancy services, including Income Tax filing, GST returns, and corporate compliance. We do not sell your data to third-party advertisers."
    },
    {
      icon: <ShieldCheck className="text-emerald-500" />,
      title: "Data Security",
      content: "We implement a variety of security measures to maintain the safety of your personal information. We use administrative, technical, and physical security measures to help protect your personal information."
    }
  ];

  return (
    <div className="pt-32 pb-20 px-6 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-black text-slate-900 dark:text-white mb-4">Privacy Policy</h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium">Last Updated: April 2026</p>
        </motion.div>

        <div className="space-y-8">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{section.title}</h2>
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {section.content}
              </p>
            </motion.div>
          ))}

          <motion.div 
            className="p-8 bg-[#007bb6] rounded-[2rem] text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Bell size={20} /> Contact Our Compliance Officer
            </h3>
            <p className="opacity-90">
              If you have questions or comments about this policy, you may email us at 
              <span className="font-bold underline ml-1">compliance@skassociates.in</span>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;