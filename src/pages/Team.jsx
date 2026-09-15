import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, Sparkles, Target, Zap, 
  Globe, Scale, Users, GraduationCap, 
  CheckCircle2, X, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import sunilImg from '../assets/sunil.png'; 
import anilImg from '../assets/anil.jpg';

const Team = () => {
  const { scrollYProgress } = useScroll();
  const scaleProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const [selectedLeader, setSelectedLeader] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedLeader(null);
    };
    if (selectedLeader) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedLeader]);

  const partners = [
    {
      id: 'sunil',
      name: "Sunil Choudhary",
      role: "Senior Managing Partner",
      exp: "15+ Years",
      image: sunilImg,
      specialty: "Statutory Audit & Direct Income Tax Appeals",
      skills: ["Tax Scrutiny Defense", "High Court Appeals", "Corporate Restructuring", "Statutory Audit", "International Tax", "Risk Management"],
      education: "FCA, B.Com (Hons)",
      color: "from-blue-600 via-sky-500 to-cyan-500",
      accent: "shadow-blue-500/20",
      bio: "A visionary leader specializing in complex corporate restructuring and high-stakes tax litigation. Sunil has successfully defended 300+ high-profile income tax scrutiny notices u/s 143/147 and appellate matters across India.",
      achievements: [
        "Defended ₹45 Cr income tax reassessment notice u/s 148 for infrastructure enterprise.",
        "Led statutory audit sign-offs for 150+ corporate firms under Companies Act 2013.",
        "Keynote speaker on Budget Direct Tax Amendments at ICAI Regional Seminars."
      ]
    },
    {
      id: 'anil',
      name: "Anil Choudhary",
      role: "Managing Partner",
      exp: "15+ Years",
      image: anilImg,
      specialty: "GST Compliance & Indirect Tax Appellate Advisory",
      skills: ["GST Audit u/s 9C", "Supply Chain Tax", "ITC Reconciliation", "Export LUT Refunds", "FEMA & Customs", "Internal Controls"],
      education: "FCA, DISA (ICAI)",
      color: "from-orange-600 via-amber-500 to-yellow-500",
      accent: "shadow-orange-500/20",
      bio: "Expert in indirect tax laws and GST implementation strategies. Anil is renowned for optimizing GSTR-2B Input Tax Credit reconciliations for multi-national supply chain networks and SME manufacturers.",
      achievements: [
        "Recovered ₹12 Cr in blocked GST ITC refunds for exporter clients.",
        "Automated GST 2B vs 3B reconciliation workflows for 500+ GSTIN accounts.",
        "Successfully represented corporate clients before GST Appellate Authorities."
      ]
    }
  ];

  const stats = [
    { label: "Enterprise Clients", value: "500+", icon: <Users size={22} className="text-[#007bb6] dark:text-sky-400"/> },
    { label: "Tax & ROC Matters", value: "1,200+", icon: <Briefcase size={22} className="text-[#007bb6] dark:text-sky-400"/> },
    { label: "Statutory Refunds", value: "₹50Cr+", icon: <Scale size={22} className="text-[#007bb6] dark:text-sky-400"/> },
    { label: "Expert Advisory Team", value: "25+", icon: <GraduationCap size={22} className="text-[#007bb6] dark:text-sky-400"/> }
  ];

  return (
    <div className="pt-32 pb-24 bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-slate-100 transition-colors duration-500 overflow-hidden relative selection:bg-[#007bb6]/30">
      
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#007bb6] via-sky-400 to-amber-500 z-[100] origin-left"
        style={{ scaleX: scaleProgress }}
      />

      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute top-20 right-[10%] w-96 h-96 bg-blue-500/10 dark:bg-sky-500/10 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-40 left-[5%] w-96 h-96 bg-orange-500/10 dark:bg-amber-500/10 rounded-full blur-[120px]" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[#007bb6] dark:text-sky-400 text-xs font-black uppercase tracking-widest mb-6 backdrop-blur-md">
            <Sparkles size={14} className="text-amber-500" /> Leadership & Partners
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter leading-tight">
            ARCHITECTS OF <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-400 to-amber-500">FINANCIAL INTEGRITY</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-300 mt-6 text-lg font-medium leading-relaxed">
            Founded by senior Chartered Accountants with over 15+ years of statutory tax litigation and corporate compliance experience.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 mb-24">
          {partners.map((member, i) => (
            <motion.div 
              key={member.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => setSelectedLeader(member)}
              className="group relative bg-white dark:bg-slate-900 rounded-[3rem] p-8 md:p-10 border border-slate-200/80 dark:border-slate-800 shadow-xl hover:shadow-2xl cursor-pointer transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${member.color} rounded-[3rem] blur opacity-10 group-hover:opacity-30 transition duration-500 pointer-events-none`}></div>
              
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start mb-6">
                  <div className="relative shrink-0">
                    <div className="w-40 h-48 sm:w-48 sm:h-56 rounded-3xl overflow-hidden shadow-xl border border-slate-100 dark:border-slate-800">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-lg text-[#007bb6] border border-slate-100 dark:border-slate-700">
                      <GraduationCap size={20} />
                    </div>
                  </div>

                  <div className="flex-1 space-y-3 text-center sm:text-left">
                    <div>
                      <h3 className="text-3xl font-black dark:text-white tracking-tight group-hover:text-[#007bb6] dark:group-hover:text-sky-400 transition-colors">{member.name}</h3>
                      <p className="text-xs text-[#007bb6] dark:text-sky-400 font-bold uppercase tracking-wider mt-1">{member.role}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                      <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-black uppercase">
                        {member.education}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-black uppercase border border-emerald-500/20">
                        {member.exp} Experience
                      </span>
                    </div>

                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium italic">
                      "{member.bio}"
                    </p>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">Core Expertise</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {member.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-bold rounded-lg border border-slate-200 dark:border-slate-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-[#007bb6] dark:text-sky-400 group-hover:gap-2 transition-all relative z-10">
                <span>View Full Case History & Achievements</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-8 bg-white dark:bg-slate-900/60 backdrop-blur-xl rounded-[2.5rem] border border-slate-200/80 dark:border-slate-800 text-center shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="w-12 h-12 bg-blue-500/10 text-[#007bb6] dark:text-sky-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                {stat.icon}
              </div>
              <h4 className="text-4xl font-black dark:text-white mb-1 tracking-tight">{stat.value}</h4>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-24">
          <PhilosophyCard 
            icon={<Target className="text-[#007bb6] dark:text-sky-400" size={28} />} 
            title="Litigation Defense Precision" 
            desc="Our methodology revolves around granular statutory evidence analysis to resolve ITD & GST scrutiny notices at the first hearing."
          />
          <PhilosophyCard 
            icon={<Zap className="text-amber-500" size={28} />} 
            title="Real-Time Digital Compliance" 
            desc="Integration of automated GST 2B reconciliation bots and cloud bookkeeping dashboards to eliminate interest penalties."
          />
          <PhilosophyCard 
            icon={<Globe className="text-emerald-500" size={28} />} 
            title="ICAI & Global Standards" 
            desc="Aligning corporate financial reporting with Ind-AS and global IFRS accounting frameworks for cross-border investments."
          />
        </div>

        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="p-12 md:p-16 rounded-[3.5rem] bg-gradient-to-br from-[#00325b] via-[#005f9e] to-[#007bb6] dark:from-[#020617] dark:via-[#091124] dark:to-[#001524] text-center text-white relative overflow-hidden shadow-2xl border border-white/10"
        >
          <h3 className="text-3xl md:text-4xl font-black mb-4 relative z-10">Schedule a 1-on-1 Advisory Session</h3>
          <p className="text-slate-200 max-w-xl mx-auto text-base mb-8 relative z-10 font-medium">
            Connect directly with Senior Managing Partner Sunil Choudhary or Anil Choudhary for corporate tax planning and appellate support.
          </p>
          <Link to="/query" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#007bb6] rounded-2xl font-black text-sm uppercase tracking-wider hover:bg-slate-100 transition shadow-xl relative z-10">
            Book Partner Session <ArrowRight size={18} />
          </Link>
        </motion.div>

      </div>

      <AnimatePresence>
        {selectedLeader && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setSelectedLeader(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            <motion.div 
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 30, opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-[3rem] shadow-2xl p-8 md:p-12 border border-slate-200 dark:border-slate-800 z-10 space-y-6 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <img src={selectedLeader.image} alt={selectedLeader.name} className="w-16 h-16 rounded-2xl object-cover shadow-md" />
                  <div>
                    <h3 className="text-2xl font-black dark:text-white">{selectedLeader.name}</h3>
                    <p className="text-xs text-[#007bb6] dark:text-sky-400 font-bold">{selectedLeader.role} • {selectedLeader.education}</p>
                  </div>
                </div>

                <button 
                  onClick={() => setSelectedLeader(null)}
                  className="p-2.5 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-500 hover:text-slate-900 dark:hover:text-white transition"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">Biography & Practice</h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-medium">
                  {selectedLeader.bio}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">Key Case Accomplishments</h4>
                <div className="space-y-2">
                  {selectedLeader.achievements.map((ach, idx) => (
                    <div key={idx} className="p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-2xl flex items-start gap-3 text-xs font-semibold text-slate-700 dark:text-slate-200">
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">Core Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedLeader.skills.map((s, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-500/10 text-[#007bb6] dark:text-sky-400 rounded-full text-xs font-bold border border-blue-500/20">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex gap-4">
                <Link 
                  to="/query" 
                  onClick={() => setSelectedLeader(null)}
                  className="flex-1 py-4 bg-[#007bb6] text-white rounded-2xl font-black text-sm text-center shadow-lg hover:bg-blue-700 transition"
                >
                  Schedule Advisory Session
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

const PhilosophyCard = ({ icon, title, desc }) => (
  <motion.div 
    whileHover={{ y: -8, scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="p-8 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all cursor-default group"
  >
    <div className="mb-6 w-14 h-14 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h4 className="text-xl font-black dark:text-white mb-2 tracking-tight group-hover:text-[#007bb6] dark:group-hover:text-sky-400 transition-colors">{title}</h4>
    <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm font-medium">{desc}</p>
  </motion.div>
);

export default Team;