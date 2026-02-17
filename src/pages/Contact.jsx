import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, Phone, Mail, Clock, 
  Send, MessageSquare, Linkedin, 
  Twitter, Facebook, ArrowRight 
} from 'lucide-react';

const Contact = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const contactInfo = [
    { 
      icon: <MapPin className="w-6 h-6" />, 
      title: "Our Location", 
      details: "Plot No C-01B, GH-01, 10th Floor, Office No-1063, Gaur City Mall, Greater Noida West, UP-201318",
      color: "bg-blue-500"
    },
    { 
      icon: <Phone className="w-6 h-6" />, 
      title: "Call Us", 
      details: "0120-4194983, +91 8010257124",
      color: "bg-orange-500"
    },
    { 
      icon: <Mail className="w-6 h-6" />, 
      title: "Email Us", 
      details: "officeska2000@gmail.com",
      color: "bg-sky-500"
    },
    { 
      icon: <Clock className="w-6 h-6" />, 
      title: "Business Hours", 
      details: "Mon - Sat: 10:00 AM - 07:00 PM",
      color: "bg-indigo-500"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      
      {/* --- Page Header --- */}
      <section className="bg-[#007bb6] py-20 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10"
        >
          <h1 className="text-5xl font-black mb-4 tracking-tight">Get In Touch</h1>
          <p className="text-sky-100 max-w-xl mx-auto px-6">
            Have questions about taxation or auditing? Our experts are ready to help you navigate the complexities of finance.
          </p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-6 -mt-12 relative z-20 pb-20">
        
        {/* --- Quick Contact Cards --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {contactInfo.map((info, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center group"
            >
              <div className={`${info.color} text-white p-4 rounded-2xl mb-6 shadow-lg group-hover:rotate-12 transition-transform`}>
                {info.icon}
              </div>
              <h3 className="font-bold text-lg mb-2 dark:text-white">{info.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{info.details}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* --- Interactive Contact Form --- */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-slate-800 p-10 rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-slate-700"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center text-orange-600">
                <MessageSquare />
              </div>
              <div>
                <h2 className="text-2xl font-bold dark:text-white">Send a Message</h2>
                <p className="text-sm text-slate-500">Response time: Within 24 hours</p>
              </div>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold dark:text-slate-300 ml-1">Full Name</label>
                  <input type="text" className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border-none focus:ring-2 focus:ring-[#007bb6] dark:text-white transition-all outline-none" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold dark:text-slate-300 ml-1">Email Address</label>
                  <input type="email" className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border-none focus:ring-2 focus:ring-[#007bb6] dark:text-white transition-all outline-none" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold dark:text-slate-300 ml-1">Subject</label>
                <select className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border-none focus:ring-2 focus:ring-[#007bb6] dark:text-white transition-all outline-none">
                  <option>Income Tax Query</option>
                  <option>GST Consultancy</option>
                  <option>Audit Services</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold dark:text-slate-300 ml-1">Message</label>
                <textarea rows="4" className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border-none focus:ring-2 focus:ring-[#007bb6] dark:text-white transition-all outline-none" placeholder="How can we help you?"></textarea>
              </div>

              <button className="w-full bg-[#007bb6] hover:bg-sky-600 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-blue-500/20 transition-all active:scale-95 group">
                Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* --- Map & Socials --- */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800"
            >
              <iframe 
                title="S.K Associates Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.269723220055!2d77.42654937550036!3d28.606675075677817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1b9849206d1%3A0x6b42f4c94441680d!2sGaur%20City%20Mall!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                className="w-full h-full border-0"
                allowFullScreen="" 
                loading="lazy"
              ></iframe>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#007bb6] p-8 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center justify-between gap-6"
            >
              <div>
                <h4 className="font-bold text-xl">Follow our updates</h4>
                <p className="text-sky-200 text-sm">Stay informed with the latest tax laws.</p>
              </div>
              <div className="flex gap-4">
                <SocialIcon icon={<Linkedin />} />
                <SocialIcon icon={<Twitter />} />
                <SocialIcon icon={<Facebook />} />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

// Sub-component for social buttons
const SocialIcon = ({ icon }) => (
  <button className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-colors">
    {React.cloneElement(icon, { size: 20 })}
  </button>
);

export default Contact;