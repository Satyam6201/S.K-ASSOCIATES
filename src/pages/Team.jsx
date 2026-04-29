import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  Linkedin, Mail, Award, ShieldCheck, Briefcase, 
  ExternalLink, Quote, Sparkles, Target, Zap, 
  Globe, Scale, Users, GraduationCap, HeartHandshake
} from 'lucide-react';
import sunilImg from '/src/assets/sunil.png'; 
import anilImg from '/src/assets/anil.jpg';

const Team = () => {
  const { scrollYProgress } = useScroll();
  const scaleProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const partners = [
    {
      name: "Sunil Choudhary",
      role: "Managing Partner",
      exp: "15+ Years",
      image: sunilImg,
      specialty: "Statutory Audit & Direct Taxation",
      skills: ["Litigation", "Corporate Tax", "Risk Management", "MCA Compliance", "Mergers", "International Tax"],
      bio: "A visionary leader specializing in complex corporate restructuring and high-stakes tax litigation. Sunil has successfully defended numerous high-profile cases across India.",
      color: "from-blue-600 to-cyan-500",
      accent: "shadow-blue-500/20",
      education: "CA"
    },
    {
      name: "Anil Choudhary",
      role: "Managing Partner",
      exp: "15+ Years",
      image: anilImg,
      specialty: "GST Compliance & Indirect Tax",
      skills: ["GST Audit", "Supply Chain Tax", "Export/Import", "Drafting", "FEMA", "Internal Controls"],
      bio: "Expert in indirect tax laws and GST implementation strategies. Anil is known for streamlining financial workflows for multi-national conglomerates and SMEs.",
      color: "from-orange-600 to-amber-500",
      accent: "shadow-orange-500/20",
      education: "CA"
    }
  ];

  const stats = [
    { label: "Happy Clients", value: "500+", icon: <Users size={20}/> },
    { label: "Cases Solved", value: "1200+", icon: <Briefcase size={20}/> },
    { label: "Tax Saved", value: "₹50Cr+", icon: <Scale size={20}/> },
    { label: "Expert Team", value: "25+", icon: <HeartHandshake size={20}/> }
  ];

  return (
    <div className="pt-24 pb-20 bg-slate-50 dark:bg-[#020617] px-4 overflow-hidden relative selection:bg-blue-500/30">
      
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-[100] origin-left"
        style={{ scaleX: scaleProgress }}
      />

      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 right-[10%] w-72 h-72 bg-blue-500/10 rounded-full blur-[100px]" 
        />
        <motion.div 
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-40 left-[5%] w-96 h-96 bg-orange-500/10 rounded-full blur-[120px]" 
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <motion.div 
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4"
          >
            <Sparkles size={14} className="text-blue-500" />
            <span className="text-blue-500 font-black uppercase tracking-[0.2em] text-[9px]">Leadership Excellence</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black dark:text-white tracking-tighter leading-none mb-6">
            ARCHITECTS OF <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-400 to-blue-600">FINANCIAL INTEGRITY</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-base font-medium leading-relaxed">
            Founded by industry veterans, S.K Associates bridges the gap between traditional auditing and 
            dynamic modern compliance through precision-engineered solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 mb-24">
          {partners.map((member, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <PartnerCard member={member} />
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 bg-white dark:bg-slate-900/50 backdrop-blur-md rounded-3xl border border-slate-200 dark:border-white/5 text-center group"
            >
              <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center mx-auto mb-3 text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                {stat.icon}
              </div>
              <h4 className="text-2xl font-black dark:text-white mb-1 tracking-tight">{stat.value}</h4>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-24">
          <PhilosophyCard 
            icon={<Target className="text-blue-500" size={24} />} 
            title="Strategic Precision" 
            desc="Our methodology revolves around granular data analysis to prevent litigation risks before they arise."
          />
          <PhilosophyCard 
            icon={<Zap className="text-orange-500" size={24} />} 
            title="Digital Agility" 
            desc="Integration of automated GST and Income Tax bots to handle real-time statutory filing updates."
          />
          <PhilosophyCard 
            icon={<Globe className="text-emerald-500" size={24} />} 
            title="Global Standards" 
            desc="Aligning Indian business practices with global financial reporting frameworks (IFRS/Ind AS)."
          />
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="p-10 rounded-[3rem] bg-gradient-to-br from-slate-900 to-slate-800 text-center text-white relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute h-px w-full bg-blue-500 top-1/4" />
            <div className="absolute h-px w-full bg-blue-500 top-2/4" />
            <div className="absolute h-px w-full bg-blue-500 top-3/4" />
          </div>
          <h3 className="text-2xl font-black mb-4 relative z-10">Empowering Businesses Since 2017</h3>
          <p className="text-slate-400 max-w-xl mx-auto text-sm mb-8 relative z-10">
            S.K Associates is not just a firm; it's a legacy of trust and technical prowess. 
            Join over 500 businesses that trust us with their financial compliance.
          </p>
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-black text-[11px] uppercase tracking-widest transition-all relative z-10">
            Schedule a Consultation
          </button>
        </motion.div>
      </div>
    </div>
  );
};

const PartnerCard = ({ member }) => (
  <motion.div 
    whileHover={{ y: -8 }}
    className="group relative h-full"
  >
    <div className={`absolute -inset-0.5 bg-gradient-to-r ${member.color} rounded-[3rem] blur opacity-10 group-hover:opacity-30 transition duration-700`}></div>
    
    <div className="relative h-full bg-white dark:bg-slate-900 rounded-[2.5rem] p-6 md:p-8 border border-slate-100 dark:border-white/5 shadow-xl overflow-hidden">
      <div className="absolute -top-4 -right-4 text-slate-100 dark:text-slate-800/40 group-hover:text-blue-500/10 transition-colors">
        <Quote size={120} fill="currentColor" />
      </div>

      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start relative z-10">
        <div className="relative shrink-0">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="relative w-48 h-56 rounded-3xl overflow-hidden shadow-xl z-20"
          >
            <img 
              src={member.image} 
              alt={member.name} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${member.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
          </motion.div>
          <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-lg text-blue-500 border border-slate-100 dark:border-white/10">
            <GraduationCap size={20} />
          </div>
        </div>

        <div className="flex-1 space-y-4 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-black dark:text-white mb-1 tracking-tight">{member.name}</h3>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <span className={`px-3 py-0.5 rounded-full bg-gradient-to-r ${member.color} text-white text-[9px] font-black uppercase tracking-widest`}>
                {member.role}
              </span>
              <span className="px-3 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[9px] font-black uppercase tracking-widest">
                {member.education}
              </span>
            </div>
          </div>

          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium italic">
            "{member.bio}"
          </p>

          <div className="flex flex-wrap gap-1.5 justify-center md:justify-start">
            {member.skills.map((skill, sIdx) => (
              <span key={sIdx} className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[8px] font-bold rounded-md border border-slate-200 dark:border-white/5">
                {skill}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="flex items-center gap-2">
              <Award size={14} className="text-blue-500" />
              <span className="text-[11px] font-bold dark:text-white">{member.exp} Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={14} className="text-emerald-500" />
              <span className="text-[11px] font-bold dark:text-white">Expert Advisory</span>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  </motion.div>
);

const PhilosophyCard = ({ icon, title, desc }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -5 }}
    className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-[2.5rem] shadow-lg transition-all"
  >
    <motion.div 
      animate={{ scale: [1, 1.1, 1] }} 
      transition={{ duration: 3, repeat: Infinity }}
      className="mb-4"
    >
      {icon}
    </motion.div>
    <h4 className="text-xl font-black dark:text-white mb-2 tracking-tight">{title}</h4>
    <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm font-medium">{desc}</p>
  </motion.div>
);

export default Team;