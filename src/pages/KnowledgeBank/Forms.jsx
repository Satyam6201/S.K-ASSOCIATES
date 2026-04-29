import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { 
  FileDown, Search, FolderOpen, FileText, 
  Landmark , ShieldCheck, Clock, CheckCircle2, 
  Zap , DownloadCloud, AlertCircle
} from 'lucide-react';

const Forms = () => {
  const [activeTab, setActiveTab] = useState("Taxation");
  const [searchQuery, setSearchQuery] = useState("");
  const [downloadingId, setDownloadingId] = useState(null);

  // AUTHENTIC STATUTORY DATA
  const formData = {
    "Taxation": [
      { id: 1, name: "Form 16", desc: "Certificate under section 203 of the IT Act, 1961 for tax deducted at source on salary.", size: "1.2 MB", link: "https://www.incometax.gov.in/iec/foportal/sites/default/files/2021-03/Form%2016.pdf" },
      { id: 2, name: "Form 10E", desc: "Form for relief u/s 89(1) when profit in lieu of salary or arrears of salary is received.", size: "850 KB", link: "https://www.incometax.gov.in/iec/foportal/sites/default/files/2021-03/Form%2010E.pdf" },
      { id: 3, name: "Form 15G", desc: "Declaration for non-deduction of tax from interest on securities/dividends (Non-Senior).", size: "450 KB", link: "https://www.incometax.gov.in/iec/foportal/sites/default/files/2021-03/Form%2015G.pdf" },
      { id: 4, name: "Form 26AS", desc: "Annual Information Statement (AIS) containing tax credit details.", size: "2.1 MB", link: "https://www.incometax.gov.in/iec/foportal/" },
      { id: 5, name: "Form 10BA", desc: "Declaration to be filed by an assessee claiming deduction u/s 80GG.", size: "320 KB", link: "https://www.incometax.gov.in/iec/foportal/" }
    ],
    "GST": [
      { id: 6, name: "GST REG-01", desc: "Application for Registration under Goods and Services Tax Act.", size: "3.4 MB", link: "https://www.gst.gov.in/" },
      { id: 7, name: "GST RFD-01", desc: "Application for Refund of tax, interest, penalty or any other amount.", size: "1.8 MB", link: "https://www.gst.gov.in/" },
      { id: 8, name: "GST ARA-01", desc: "Application Form for Advance Ruling under the GST framework.", size: "900 KB", link: "https://www.gst.gov.in/" },
      { id: 9, name: "GST DRC-03", desc: "Intimation of voluntary payment made before issuance of notice.", size: "560 KB", link: "https://www.gst.gov.in/" }
    ],
    "Corporate": [
      { id: 10, name: "INC-32 (SPICe+)", desc: "Simplified Proforma for Incorporating Company Electronically Plus.", size: "5.2 MB", link: "https://www.mca.gov.in/MinistryV2/companyformsdownload.html" },
      { id: 11, name: "DIR-3", desc: "Application for allotment of Director Identification Number (DIN).", size: "1.1 MB", link: "https://www.mca.gov.in/MinistryV2/companyformsdownload.html" },
      { id: 12, name: "Form MGT-7", desc: "Annual Return of a company to be filed with ROC.", size: "2.8 MB", link: "https://www.mca.gov.in/MinistryV2/companyformsdownload.html" },
      { id: 13, name: "Form AOC-4", desc: "Form for filing financial statement and other documents with the Registrar.", size: "3.1 MB", link: "https://www.mca.gov.in/MinistryV2/companyformsdownload.html" }
    ],
    "Legal": [
      { id: 14, name: "MSME Udyam", desc: "Application for MSME/Udyam Registration certificate.", size: "700 KB", link: "https://udyamregistration.gov.in/" },
      { id: 15, name: "Trademark TM-A", desc: "Application for registration of a trademark or collective mark.", size: "2.5 MB", link: "https://ipindiaonline.gov.in/" }
    ]
  };

  const filteredForms = useMemo(() => {
    return formData[activeTab].filter(form => 
      form.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      form.desc.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [activeTab, searchQuery]);

  const handleDownload = (id, link) => {
    setDownloadingId(id);
    setTimeout(() => {
      window.open(link, '_blank');
      setDownloadingId(null);
    }, 1500);
  };

  return (
    <div className="pt-32 pb-40 px-6 bg-slate-50 dark:bg-[#020617] min-h-screen selection:bg-blue-500/30">
      
      {/* BACKGROUND DECOR */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="flex items-center gap-3 text-blue-600 mb-4">
              <FolderOpen size={20} />
              <span className="text-xs font-black uppercase tracking-[0.3em]">Compliance Repository</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black dark:text-white tracking-tighter leading-none">
              DOCUMENT <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-400">VAULT.</span>
            </h1>
          </motion.div>

          <div className="w-full lg:w-96 relative group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search form ID or keyword..."
              className="w-full bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-[2rem] py-5 pl-16 pr-8 text-sm font-bold dark:text-white focus:ring-4 ring-blue-500/10 outline-none transition-all shadow-xl shadow-slate-200/50 dark:shadow-none"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* TABS ENGINE */}
        <div className="flex overflow-x-auto no-scrollbar gap-3 mb-12 pb-4">
          {Object.keys(formData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all whitespace-nowrap flex items-center gap-3 ${
                activeTab === tab 
                ? "bg-blue-600 text-white shadow-2xl shadow-blue-500/40 translate-y-[-4px]" 
                : "bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-white/5 hover:border-blue-500/50"
              }`}
            >
              {tab === "Taxation" && <FileText size={16} />}
              {tab === "GST" && <Zap size={16} />}
              {tab === "Corporate" && <Landmark size={16} />}
              {tab === "Legal" && <ShieldCheck size={16} />}
              {tab}
            </button>
          ))}
        </div>

        {/* ALERT BOX */}
        <div className="mb-12 p-6 bg-blue-50 dark:bg-blue-500/5 border border-blue-200 dark:border-blue-500/20 rounded-[2rem] flex items-start gap-4">
          <AlertCircle className="text-blue-600 mt-1 flex-shrink-0" size={20} />
          <p className="text-sm text-blue-800 dark:text-blue-300 font-medium">
            <strong>Pro Tip:</strong> All forms are pulled directly from official Government portals (MCA, GSTN, Income Tax). Ensure you use the latest Acrobat Reader to fill these dynamic PDF forms.
          </p>
        </div>

        {/* FORMS GRID */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredForms.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative"
              >
                <div className="h-full p-8 bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-200 dark:border-white/5 shadow-xl shadow-slate-200/50 dark:shadow-none hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:border-blue-500/30 transition-all duration-500 flex flex-col">
                  
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-16 h-16 bg-blue-50 dark:bg-blue-500/10 text-blue-600 rounded-[1.5rem] flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                      <FileDown size={32} />
                    </div>
                    <span className="px-4 py-2 bg-slate-100 dark:bg-white/5 rounded-full text-[10px] font-black text-slate-500 dark:text-slate-400 tracking-widest uppercase">
                      {item.size}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black dark:text-white mb-3 tracking-tight group-hover:text-blue-600 transition-colors">{item.name}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium mb-8 flex-grow">
                    {item.desc}
                  </p>

                  <div className="pt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                    <button 
                      onClick={() => handleDownload(item.id, item.link)}
                      disabled={downloadingId === item.id}
                      className="relative overflow-hidden w-full py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 active:scale-95 transition-all"
                    >
                      {downloadingId === item.id ? (
                        <>
                          <Clock className="animate-spin" size={18} />
                          Extracting...
                        </>
                      ) : (
                        <>
                          Download Form <DownloadCloud size={18} />
                        </>
                      )}
                      
                      {/* DOWNLOAD PROGRESS ANIMATION */}
                      {downloadingId === item.id && (
                        <motion.div 
                          initial={{ x: "-100%" }}
                          animate={{ x: "100%" }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 bg-blue-500/20"
                        />
                      )}
                    </button>
                  </div>
                </div>

                {/* DECORATIVE TAG */}
                <div className="absolute -top-3 -right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-emerald-500 text-white p-2 rounded-full shadow-lg">
                    <CheckCircle2 size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* EMPTY STATE */}
        {filteredForms.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="py-40 text-center"
          >
            <div className="w-24 h-24 bg-slate-100 dark:bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="text-slate-400" size={40} />
            </div>
            <h3 className="text-2xl font-black dark:text-white mb-2">No forms found</h3>
            <p className="text-slate-500">Try searching for a different keyword or category.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Forms;