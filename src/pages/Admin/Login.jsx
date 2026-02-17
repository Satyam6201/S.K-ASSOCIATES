import React from 'react';
import { motion } from 'framer-motion';
import { Lock, User, Key } from 'lucide-react';
import logo from '../../assets/logo.jpeg';

const Login = () => {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full max-w-md bg-white rounded-[2rem] p-10 shadow-2xl"
      >
        <div className="text-center mb-8">
          <img src={logo} alt="Logo" className="h-16 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Partner Login</h2>
          <p className="text-slate-500 text-sm">Authorized access only</p>
        </div>

        <form className="space-y-6">
          <div className="relative">
            <User className="absolute left-4 top-4 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Username / Email"
              className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-brand-blue"
            />
          </div>
          <div className="relative">
            <Key className="absolute left-4 top-4 text-slate-400" size={20} />
            <input 
              type="password" 
              placeholder="Password"
              className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-brand-blue"
            />
          </div>
          <button className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors shadow-lg">
            <Lock size={18} /> Secure Login
          </button>
        </form>

        <p className="mt-8 text-center text-xs text-slate-400">
          In case of lost credentials, contact IT Department.
        </p>
      </motion.div>
    </div>
  );
};

export default Login;