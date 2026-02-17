import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Download, Cpu, ShieldCheck } from 'lucide-react';

const Utilities = () => {
  const tools = [
    { name: "GST Offline Tool", version: "v3.1.4", platform: "Windows", desc: "Prepare GSTR-1 and GSTR-2 returns without internet connection." },
    { name: "DSC EmSigner", version: "v2.0", platform: "Win/Mac", desc: "Required for signing documents via Digital Signature (DSC)." },
    { name: "ITR Java Utility", version: "2024-25", platform: "Java", desc: "Official utility for filing Income Tax Returns offline." },
    { name: "Excel Depreciation Tool", version: "v1.2", platform: "Excel", desc: "Automatic Companies Act vs Income Tax depreciation calculator." }
  ];

  return (
    <div className="pt-32 pb-20 px-6 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h1 className="text-5xl font-black dark:text-white italic">Software Utilities</h1>
            <p className="text-slate-500 mt-2 font-medium">Essential tools for digital compliance and signatures.</p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 text-emerald-500 rounded-full text-xs font-bold border border-emerald-500/20">
            <ShieldCheck size={14} /> All files scanned for viruses
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              whileHover={{ x: 10 }}
              className="p-8 bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row gap-8 items-center"
            >
              <div className="w-24 h-24 shrink-0 bg-slate-100 dark:bg-slate-800 rounded-[2rem] flex items-center justify-center text-slate-400 group-hover:text-blue-600 transition-colors">
                <Monitor size={40} />
              </div>
              <div className="flex-grow text-center md:text-left">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-2">
                  <h3 className="text-2xl font-black dark:text-white">{tool.name}</h3>
                  <span className="text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded-md font-bold">{tool.version}</span>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">{tool.desc}</p>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                  <button className="flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-2xl font-bold text-sm hover:scale-105 transition-transform">
                    <Download size={16} /> Download
                  </button>
                  <span className="flex items-center gap-1 text-xs font-bold text-slate-400">
                    <Cpu size={14} /> {tool.platform}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Utilities;