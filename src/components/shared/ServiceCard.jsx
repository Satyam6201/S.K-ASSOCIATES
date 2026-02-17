import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#007bb6] hover:shadow-xl transition-all"
    >
      <div className="bg-sky-50 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-[#007bb6]">
        <Icon size={24} />
      </div>
      <h3 className="font-bold text-lg mb-2 text-slate-800">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default ServiceCard;