import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Award, ShieldCheck, Briefcase } from 'lucide-react';
// Assuming images are in src/assets/
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
      bio: "A visionary leader specializing in complex corporate restructuring and high-stakes tax litigation.",
      color: "from-blue-600 to-cyan-500"
    },
    {
      name: "Anil Choudhary",
      role: "Managing Partner",
      exp: "15+ Years",
      image: anilImg,
      specialty: "GST Compliance & Indirect Tax",
      bio: "Expert in indirect tax laws and GST implementation strategies for multi-national conglomerates.",
      color: "from-orange-600 to-amber-500"
    }
  ];

  return (
    <div className="py-24 bg-slate-50 dark:bg-slate-950 px-6 overflow-hidden">
      {/* --- Background Decorative Elements --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20 dark:opacity-10">
        <div className="absolute top-24 left-10 w-96 h-96 bg-blue-500 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-24 right-10 w-96 h-96 bg-orange-500 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-brand-blue font-black uppercase tracking-[0.3em] text-xs">The Founders</span>
          <h2 className="text-5xl md:text-6xl font-black dark:text-white mt-4 mb-6 tracking-tight">
            Leadership & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-400">Expertise</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg font-light">
            Guided by decades of experience, our partners bring together strategic foresight 
            and deep technical knowledge to drive financial excellence.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {partners.map((member, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: i === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative bg-white dark:bg-slate-900 rounded-[3rem] p-1 shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-800">
                <div className="flex flex-col md:flex-row gap-8 p-8 lg:p-10">
                  
                  {/* Image Section */}
                  <div className="relative shrink-0">
                    <div className={`absolute inset-0 bg-gradient-to-tr ${member.color} rounded-[2rem] rotate-6 scale-105 opacity-20 group-hover:rotate-12 transition-transform duration-500`}></div>
                    <div className="relative w-48 h-56 md:w-40 md:h-48 lg:w-48 lg:h-60 rounded-[2rem] overflow-hidden shadow-xl shadow-black/10">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-col justify-center">
                    <div className="mb-4">
                      <h3 className="text-3xl font-black dark:text-white group-hover:text-brand-blue transition-colors">{member.name}</h3>
                      <p className="text-brand-blue dark:text-sky-400 font-bold tracking-wide uppercase text-xs mt-1">{member.role}</p>
                    </div>
                    
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 font-medium italic">
                      "{member.bio}"
                    </p>

                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <Award size={18} className="text-orange-500" />
                        <span><b>{member.exp}</b> Professional Experience</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <ShieldCheck size={18} className="text-green-500" />
                        <span>{member.specialty}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <motion.button 
                        whileHover={{ scale: 1.1 }}
                        className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-blue-600 hover:text-white transition-all shadow-md"
                      >
                        <Linkedin size={20}/>
                      </motion.button>
                      <motion.button 
                        whileHover={{ scale: 1.1 }}
                        className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-orange-500 hover:text-white transition-all shadow-md"
                      >
                        <Mail size={20}/>
                      </motion.button>
                      <button className="ml-auto text-xs font-black uppercase tracking-widest text-slate-400 hover:text-brand-blue transition-colors flex items-center gap-2">
                        Profile <Briefcase size={14}/>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Corner Decorative Accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${member.color} opacity-10 rounded-bl-full`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- Bottom Trust Bar --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 py-8 border-y border-slate-200 dark:border-slate-800 flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all"
        >
          <div className="flex items-center gap-2 font-bold text-slate-400">
            <span className="text-2xl">ICAI</span> Member
          </div>
          <div className="flex items-center gap-2 font-bold text-slate-400">
            <span className="text-2xl">GST</span> Registered
          </div>
          <div className="flex items-center gap-2 font-bold text-slate-400">
            <span className="text-2xl">MSME</span> Certified
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Team;