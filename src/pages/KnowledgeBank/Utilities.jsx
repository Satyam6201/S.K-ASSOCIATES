import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Download, Cpu, ShieldCheck, Sparkles, ExternalLink, HardDrive } from 'lucide-react';
import SEO from '../../components/common/SEO';

const Utilities = () => {
  const tools = [
    { 
      name: "GST Offline Tool", 
      version: "v3.1.4 (Latest)", 
      platform: "Windows 10/11", 
      desc: "Official GSTN utility to prepare GSTR-1, GSTR-2B, and offline JSON returns without an active internet connection.", 
      url: "https://www.gst.gov.in/download/returns",
      size: "24.5 MB"
    },
    { 
      name: "DSC EmSigner Gateway", 
      version: "v2.6", 
      platform: "Win / Mac OS", 
      desc: "Mandatory client PKI service required for Class-3 Digital Signature verification across MCA V3, Traces, and GST portals.", 
      url: "https://www.mca.gov.in/content/mca/global/en/foportal/foportal-link/dms.html",
      size: "18.2 MB"
    },
    { 
      name: "ITR JSON Offline Utility", 
      version: "AY 2025-26", 
      platform: "Win / Mac / Java", 
      desc: "Official CBDT utility for pre-filling XML/JSON data and generating statutory filings for ITR-1 to ITR-7.", 
      url: "https://www.incometax.gov.in/iec/foportal/downloads",
      size: "42.0 MB"
    },
    { 
      name: "Companies Act Depreciation Model", 
      version: "v2.0 (ICAI)", 
      platform: "Excel (.xlsx)", 
      desc: "Automated SLM & WDV asset depreciation calculator adhering to Schedule II of the Companies Act 2013.", 
      url: "https://www.incometax.gov.in/iec/foportal/",
      size: "2.1 MB"
    }
  ];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 bg-gradient-to-b from-[#f4f7fb] via-[#eaf2fb] to-[#f4f7fb] dark:from-[#070d1e] dark:via-[#0c1630] dark:to-[#070d1e] min-h-screen text-slate-900 dark:text-slate-100 transition-colors duration-500">
      <SEO 
        title="Official Tax & GST Software Utilities | Offline Tools & EmSigner"
        description="Download official government tax filing utilities: GST offline tool, EmSigner DSC gateway, CBDT ITR JSON offline software, and Schedule II depreciation models."
        keywords="GST Offline Tool Download, EmSigner Download MCA GST, ITR Offline Utility AY 2025-26, Companies Act Depreciation Excel"
        canonicalPath="/utilities"
        breadcrumbs={[
          { name: "Knowledge Bank", url: "/utilities" },
          { name: "Software Utilities", url: "/utilities" }
        ]}
      />
      <div className="max-w-6xl mx-auto">
        
        <header className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-[#007bb6] dark:text-sky-400 text-xs font-black uppercase tracking-widest mb-4 border border-blue-500/20">
              <Sparkles size={14} className="text-amber-500" /> Digital Filing Utilities
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black dark:text-white tracking-tight leading-tight">
              Software <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-400 to-amber-500">Utilities</span>
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mt-2 font-medium text-sm sm:text-base">
              Essential official tools and digital signature drivers for corporate statutory filing.
            </p>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full text-xs font-bold border border-emerald-500/20 shrink-0">
            <ShieldCheck size={16} /> Digitally Signed by Govt Portals
          </div>
        </header>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row gap-6 items-start sm:items-center shadow-xl justify-between"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-blue-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-[#007bb6] dark:text-sky-400 shadow-md">
                <Monitor size={36} />
              </div>

              <div className="flex-grow space-y-3 w-full">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg sm:text-xl font-black dark:text-white">{tool.name}</h3>
                  <span className="text-[10px] bg-[#007bb6] text-white px-2.5 py-0.5 rounded-full font-bold">{tool.version}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{tool.desc}</p>
                
                <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <a 
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#007bb6] hover:bg-blue-600 text-white rounded-xl font-bold text-xs shadow-md transition"
                  >
                    <Download size={14} /> Official Download
                  </a>
                  <span className="flex items-center gap-1 text-xs font-bold text-slate-400">
                    <Cpu size={14} /> {tool.platform}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-bold text-slate-400">
                    <HardDrive size={14} /> {tool.size}
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