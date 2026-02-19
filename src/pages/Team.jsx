import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Linkedin, Mail, Award, ShieldCheck, Briefcase, 
  ExternalLink, Quote, Sparkles, Target, Zap 
} from 'lucide-react';
import sunilImg from '/src/assets/sunil.png'; 
import anilImg from '/src/assets/anil.jpg';

const Team = () => {
  const partners = [
    {
      name: "Sunil Choudhary",
      role: "Managing Partner",
      exp: "15+ Years",
      image: sunilImg,
      specialty: "Statutory Audit & Direct Taxation",
      skills: ["Litigation", "Corporate Tax", "Risk Management", "MCA Compliance"],
      bio: "A visionary leader specializing in complex corporate restructuring and high-stakes tax litigation. Sunil has successfully defended numerous Fortune 500 cases.",
      color: "from-blue-600 to-cyan-500",
      accent: "shadow-blue-500/20"
    },
    {
      name: "Anil Choudhary",
      role: "Managing Partner",
      exp: "15+ Years",
      image: anilImg,
      specialty: "GST Compliance & Indirect Tax",
      skills: ["GST Audit", "Supply Chain Tax", "Export/Import", "Drafting"],
      bio: "Expert in indirect tax laws and GST implementation strategies. Anil is known for streamlining financial workflows for multi-national conglomerates.",
      color: "from-orange-600 to-amber-500",
      accent: "shadow-orange-500/20"
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-slate-50 dark:bg-slate-950 px-6 overflow-hidden relative">
      
      {/* --- 1. THE MESH BACKGROUND (Animated) --- */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500 rounded-full blur-[150px]" 
        />
        <motion.div 
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500 rounded-full blur-[150px]" 
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- 2. HEADER SECTION --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Sparkles size={16} className="text-blue-500" />
            <span className="text-blue-500 font-black uppercase tracking-[0.2em] text-[10px]">The Strategic Minds</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black dark:text-white tracking-tighter leading-none mb-8">
            MEET THE <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-400 to-blue-600 animate-gradient-x">PARTNERS</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-3xl mx-auto text-xl font-medium leading-relaxed">
            Combining decades of field experience with a futuristic approach to tax and law. 
            We don't just solve problems; we engineer growth.
          </p>
        </motion.div>

        {/* --- 3. THE PARTNERS GRID --- */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 mb-40">
          {partners.map((member, i) => (
            <PartnerCard key={i} member={member} index={i} />
          ))}
        </div>

        {/* --- 4. CORE PHILOSOPHY BENTO --- */}
        <div className="grid md:grid-cols-3 gap-6 mb-32">
          <PhilosophyCard 
            icon={<Target className="text-blue-500" />} 
            title="Precision" 
            desc="Every decimal matters. Our audit process ensures 100% accuracy in financial reporting."
          />
          <PhilosophyCard 
            icon={<Zap className="text-orange-500" />} 
            title="Agility" 
            desc="Laws change overnight. We ensure your business is always ahead of the compliance curve."
          />
          <PhilosophyCard 
            icon={<ShieldCheck className="text-emerald-500" />} 
            title="Integrity" 
            desc="Ethical practice is our foundation. We bridge the gap between law and morality."
          />
        </div>

        {/* --- 5. TRUST MARQUEE --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="py-12 border-y border-slate-200 dark:border-slate-800 flex flex-wrap justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700"
        >
          <TrustLogo text="ICAI MEMBER" />
          <TrustLogo text="GST COMPLIANT" />
          <TrustLogo text="MSME CERTIFIED" />
          <TrustLogo text="ISO 9001:2015" />
        </motion.div>
      </div>
    </div>
  );
};

// --- SUB-COMPONENTS ---

const PartnerCard = ({ member, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: index * 0.2 }}
    whileHover={{ y: -10 }}
    className="group relative"
  >
    <div className={`absolute -inset-1 bg-gradient-to-r ${member.color} rounded-[4rem] blur opacity-20 group-hover:opacity-40 transition duration-1000`}></div>
    
    <div className="relative bg-white dark:bg-slate-900 rounded-[3.5rem] p-8 md:p-12 border border-slate-100 dark:border-slate-800 shadow-2xl overflow-hidden">
      
      {/* Floating Quote Icon */}
      <div className="absolute top-10 right-10 text-slate-100 dark:text-slate-800 group-hover:text-blue-500/20 transition-colors">
        <Quote size={80} fill="currentColor" />
      </div>

      <div className="flex flex-col xl:flex-row gap-10 items-center xl:items-start relative z-10">
        
        {/* Profile Image with 3D Effect */}
        <div className="relative shrink-0 perspective-1000">
          <motion.div 
            whileHover={{ rotateY: 15, rotateX: -5 }}
            className="relative w-64 h-80 rounded-[2.5rem] overflow-hidden shadow-2xl z-20"
          >
            <img 
              src={member.image} 
              alt={member.name} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${member.color} opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
          </motion.div>
          {/* Decorative Back-Box */}
          <div className={`absolute top-4 -right-4 w-full h-full border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-[2.5rem] -z-10`} />
        </div>

        {/* Content */}
        <div className="flex-1 space-y-6">
          <div>
            <h3 className="text-4xl font-black dark:text-white mb-2 leading-none">{member.name}</h3>
            <span className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${member.color} text-white text-[10px] font-black uppercase tracking-widest`}>
              {member.role}
            </span>
          </div>

          <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed font-medium italic">
            "{member.bio}"
          </p>

          {/* Skill Pills */}
          <div className="flex flex-wrap gap-2">
            {member.skills.map((skill, sIdx) => (
              <span key={sIdx} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-bold rounded-lg border border-slate-200 dark:border-slate-700">
                {skill}
              </span>
            ))}
          </div>

          <div className="h-[1px] bg-slate-100 dark:bg-slate-800 w-full" />

          <div className="grid grid-cols-2 gap-4">
             <div className="flex items-center gap-3">
               <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500"><Award size={18}/></div>
               <div>
                 <p className="text-[10px] font-black text-slate-400 uppercase">Experience</p>
                 <p className="text-sm font-bold dark:text-white">{member.exp}</p>
               </div>
             </div>
             <div className="flex items-center gap-3">
               <div className="p-2 bg-orange-500/10 rounded-lg text-orange-500"><ShieldCheck size={18}/></div>
               <div>
                 <p className="text-[10px] font-black text-slate-400 uppercase">Compliance</p>
                 <p className="text-sm font-bold dark:text-white">Expert</p>
               </div>
             </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 pt-4">
            <SocialBtn icon={<Linkedin />} color="hover:bg-blue-600" />
            <SocialBtn icon={<Mail />} color="hover:bg-orange-500" />
            <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-blue-500 transition-colors ml-auto group/btn">
              Download CV <ExternalLink size={14} className="group-hover/btn:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const PhilosophyCard = ({ icon, title, desc }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className="p-10 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[3rem] shadow-xl hover:shadow-2xl transition-all"
  >
    <div className="mb-6">{icon}</div>
    <h4 className="text-2xl font-black dark:text-white mb-4">{title}</h4>
    <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{desc}</p>
  </motion.div>
);

const SocialBtn = ({ icon, color }) => (
  <motion.button 
    whileHover={{ scale: 1.1, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
    className={`p-3 bg-slate-100 dark:bg-slate-800 rounded-2xl text-slate-600 dark:text-slate-400 ${color} hover:text-white transition-all shadow-lg`}
  >
    {React.cloneElement(icon, { size: 20 })}
  </motion.button>
);

const TrustLogo = ({ text }) => (
  <div className="flex items-center gap-2 font-black text-slate-400 tracking-tighter text-2xl">
    <div className="w-2 h-2 bg-blue-500 rounded-full" />
    {text}
  </div>
);

export default Team;