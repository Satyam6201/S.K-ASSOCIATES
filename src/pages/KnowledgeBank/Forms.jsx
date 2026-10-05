import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileDown, Search, FolderOpen, FileText, 
  Landmark, ShieldCheck, CheckCircle2, 
  Zap, DownloadCloud, AlertCircle, Copy, Check, ExternalLink, X
} from 'lucide-react';
import SEO from '../../components/common/SEO';

const formData = {
  "Taxation": [
    { id: 1, name: "Form 16", desc: "Certificate under Section 203 of the Income Tax Act for tax deducted at source (TDS) on salary income.", size: "1.2 MB", format: "PDF", portal: "Income Tax", link: "https://www.incometax.gov.in/iec/foportal/sites/default/files/2021-03/Form%2016.pdf" },
    { id: 2, name: "Form 10E", desc: "Form for claiming relief u/s 89(1) when arrears or advance salary is received in the current assessment year.", size: "850 KB", format: "E-Form", portal: "Income Tax", link: "https://www.incometax.gov.in/iec/foportal/sites/default/files/2021-03/Form%2010E.pdf" },
    { id: 3, name: "Form 15G", desc: "Statutory declaration by resident individuals (< 60 yrs) for zero TDS deduction on bank FD interest.", size: "450 KB", format: "PDF", portal: "Income Tax", link: "https://www.incometax.gov.in/iec/foportal/sites/default/files/2021-03/Form%2015G.pdf" },
    { id: 4, name: "Form 15H", desc: "Statutory declaration by Senior Citizens (60+ yrs) for non-deduction of tax from interest on deposits.", size: "420 KB", format: "PDF", portal: "Income Tax", link: "https://www.incometax.gov.in/iec/foportal/sites/default/files/2021-03/Form%2015H.pdf" },
    { id: 5, name: "Form 26AS / AIS", desc: "Annual Information Statement and Tax Credit Statement reflecting TDS, TCS, and high-value transactions.", size: "2.1 MB", format: "Portal View", portal: "TRACES", link: "https://www.incometax.gov.in/iec/foportal/" },
    { id: 6, name: "Form 10BA", desc: "Statutory declaration to be filed by an assessee claiming house rent deduction u/s 80GG.", size: "320 KB", format: "E-Form", portal: "Income Tax", link: "https://www.incometax.gov.in/iec/foportal/" }
  ],
  "GST": [
    { id: 7, name: "GST REG-01", desc: "Application for fresh registration under Goods and Services Tax Act for regular taxpayers.", size: "3.4 MB", format: "Portal Form", portal: "GSTN", link: "https://www.gst.gov.in/" },
    { id: 8, name: "GST RFD-01", desc: "Application for refund of unutilized Input Tax Credit (ITC) on account of zero-rated export supplies.", size: "1.8 MB", format: "Portal Form", portal: "GSTN", link: "https://www.gst.gov.in/" },
    { id: 9, name: "GST ARA-01", desc: "Application form for seeking Advance Ruling from the Authority on classification and tax liability.", size: "900 KB", format: "PDF", portal: "GSTN", link: "https://www.gst.gov.in/" },
    { id: 10, name: "GST DRC-03", desc: "Intimation of voluntary tax payment made before or after issuance of Show Cause Notice (SCN).", size: "560 KB", format: "E-Form", portal: "GSTN", link: "https://www.gst.gov.in/" }
  ],
  "Corporate": [
    { id: 11, name: "SPICe+ (INC-32)", desc: "Integrated application for company name reservation, incorporation, PAN, TAN, EPFO, ESIC & Bank A/c.", size: "5.2 MB", format: "MCA V3 Web", portal: "MCA", link: "https://www.mca.gov.in/MinistryV2/companyformsdownload.html" },
    { id: 12, name: "DIR-3 / DIR-3 KYC", desc: "Application for allotment of Director Identification Number (DIN) and mandatory annual web KYC.", size: "1.1 MB", format: "Web KYC", portal: "MCA", link: "https://www.mca.gov.in/MinistryV2/companyformsdownload.html" },
    { id: 13, name: "Form MGT-7 / 7A", desc: "Annual Return of a company to be filed with the Registrar of Companies under Section 92.", size: "2.8 MB", format: "E-Form", portal: "MCA", link: "https://www.mca.gov.in/MinistryV2/companyformsdownload.html" },
    { id: 14, name: "Form AOC-4", desc: "Form for filing audited annual financial statements, balance sheets, and director reports with ROC.", size: "3.1 MB", format: "E-Form", portal: "MCA", link: "https://www.mca.gov.in/MinistryV2/companyformsdownload.html" }
  ],
  "Legal": [
    { id: 15, name: "MSME Udyam Registration", desc: "Application for MSME / Udyam certificate to access government subsidies and Section 43B(h) protection.", size: "700 KB", format: "Online Form", portal: "Udyam", link: "https://udyamregistration.gov.in/" },
    { id: 16, name: "Trademark Form TM-A", desc: "Application for registration of a brand trademark, logo, or collective commercial mark.", size: "2.5 MB", format: "PDF / Online", portal: "IP India", link: "https://ipindiaonline.gov.in/" }
  ]
};

const Forms = () => {
  const [activeTab, setActiveTab] = useState("Taxation");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState(null);

  const filteredForms = useMemo(() => {
    return (formData[activeTab] || []).filter(form => 
      form.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      form.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      form.portal.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [activeTab, searchQuery]);

  const handleCopyLink = (id, link) => {
    navigator.clipboard.writeText(link);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="pt-32 pb-40 px-4 sm:px-6 bg-slate-50 dark:bg-[#020617] min-h-screen text-slate-900 dark:text-slate-100 transition-colors duration-500 selection:bg-blue-500/30">
      <SEO 
        title="Download Statutory Forms | Income Tax, GST, MCA & MSME"
        description="Verified downloadable statutory forms: Form 16, 10E, 15G/H, 26AS, GST REG-01, RFD-01, SPICe+ INC-32, DIR-3 KYC, AOC-4, MGT-7, and MSME Udyam."
        keywords="Download Form 16 PDF, Form 15G 15H Download, GST REG 01, MCA SPICe Form Download, AOC 4 MGT 7 Forms"
        canonicalPath="/forms"
        breadcrumbs={[
          { name: "Knowledge Bank", url: "/forms" },
          { name: "Downloadable Forms", url: "/forms" }
        ]}
      />
      
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] bg-blue-500/5 blur-[35px] sm:blur-[100px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] bg-indigo-500/5 blur-[35px] sm:blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto space-y-12">
        
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-3">
            <div className="flex items-center gap-2 text-blue-600 dark:text-sky-400">
              <FolderOpen size={18} />
              <span className="text-xs font-black uppercase tracking-[0.25em]">Statutory Repository</span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-none dark:text-white">
              STATUTORY <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-500">FORMS VAULT.</span>
            </h1>
            <p className="text-slate-500 dark:text-slate-400 font-medium text-sm sm:text-base max-w-lg">
              Download official Government PDF templates & access digital filing portals for Income Tax, GST, MCA, and MSME.
            </p>
          </motion.div>

          <div className="w-full lg:w-96 relative group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={18} />
            <input 
              id="forms-search-input"
              aria-label="Search statutory forms"
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Form 16, SPICe+, 26AS..."
              className="w-full bg-white dark:bg-[#0d1730] border border-slate-200/80 dark:border-white/10 rounded-2xl py-4 pl-12 pr-10 text-xs font-bold dark:text-white focus:border-blue-500 outline-none transition-all shadow-md"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")} 
                aria-label="Clear search input"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex overflow-x-auto no-scrollbar gap-2 p-1.5 bg-white dark:bg-[#0d1730] rounded-2xl border border-slate-200/80 dark:border-white/10 w-fit">
          {Object.keys(formData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 sm:px-8 py-3 rounded-xl font-black text-xs uppercase tracking-wider transition-all whitespace-nowrap flex items-center gap-2 ${
                activeTab === tab 
                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30" 
                : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {tab === "Taxation" && <FileText size={14} />}
              {tab === "GST" && <Zap size={14} />}
              {tab === "Corporate" && <Landmark size={14} />}
              {tab === "Legal" && <ShieldCheck size={14} />}
              <span>{tab}</span>
            </button>
          ))}
        </div>

        <div className="p-5 bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 rounded-3xl flex items-start gap-3.5">
          <AlertCircle className="text-blue-600 dark:text-sky-400 mt-0.5 shrink-0" size={20} />
          <p className="text-xs text-blue-900 dark:text-blue-200 font-medium leading-relaxed">
            <strong>Official Source Verification:</strong> All links point directly to official Government directories (Income Tax Department, CBIC GSTN, MCA V3, and MSMED). Use the latest Adobe Acrobat Reader to open dynamic dynamic XFA forms.
          </p>
        </div>

        {/* Grid of Forms */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredForms.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="group relative bg-white dark:bg-[#0d1730] rounded-[2.5rem] border border-slate-200/80 dark:border-white/5 p-6 sm:p-8 shadow-xl hover:shadow-2xl dark:hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-sky-400 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      <FileDown size={26} />
                    </div>
                    
                    <div className="flex items-center gap-1.5">
                      <span className="px-2.5 py-1 bg-slate-100 dark:bg-white/5 rounded-lg text-[9px] font-black text-slate-500 dark:text-slate-400 tracking-wider uppercase">
                        {item.portal}
                      </span>
                      <span className="px-2.5 py-1 bg-blue-500/10 text-blue-600 dark:text-sky-400 rounded-lg text-[9px] font-black uppercase">
                        {item.format}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-black dark:text-white mb-2 tracking-tight group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed font-medium mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex items-center gap-2">
                  <a 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-blue-600 dark:hover:bg-sky-400 transition-all shadow-md"
                  >
                    <span>Open Official Form</span>
                    <ExternalLink size={14} />
                  </a>

                  <button
                    onClick={() => handleCopyLink(item.id, item.link)}
                    aria-label="Copy form link"
                    className="p-3.5 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 hover:text-blue-600 transition-colors"
                  >
                    {copiedId === item.id ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredForms.length === 0 && (
          <div className="py-20 text-center space-y-3 bg-white dark:bg-[#0d1730] rounded-[2.5rem] border border-slate-200 dark:border-slate-800">
            <Search size={36} className="mx-auto text-slate-400" />
            <h4 className="text-xl font-bold dark:text-white">No statutory forms match your keyword</h4>
            <p className="text-xs text-slate-400">Try searching for 'GST', 'Form 16', or 'SPICe+'</p>
            <button onClick={() => { setSearchQuery(""); }} className="px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-bold">
              Clear Search
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default Forms;