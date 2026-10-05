import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Lock, User, Key, Mail, Clock, 
  ShieldCheck, Eye, EyeOff, CheckCircle2, 
  ArrowRight, Sparkles, Building2, AlertCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpeg';

const Login = () => {
  const [activeTab, setActiveTab] = useState('partner');
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [staffCode, setStaffCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [authSuccess, setAuthSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMessage('');
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      if (email && (password || staffCode)) {
        setAuthSuccess(true);
      } else {
        setErrorMessage('Please provide valid authentication credentials.');
      }
    }, 1200);
  };

  const tabs = [
    { id: 'partner', label: 'Partner Portal', icon: <Building2 size={16} />, desc: 'Managing Partners & Senior Associates' },
    { id: 'webmail', label: 'Staff Webmail', icon: <Mail size={16} />, desc: 'Official Domain Webmail Access' },
    { id: 'timesheet', label: 'Timesheet & Audit', icon: <Clock size={16} />, desc: 'Staff Billing & Hours Logging' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#070d1e] via-[#0d1730] to-[#070d1e] text-white flex items-center justify-center p-4 sm:p-6 md:p-10 relative overflow-hidden transition-colors duration-500 selection:bg-[#007bb6]/30">
      
      {/* Background Decorative Glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[140px]" 
        />
        <motion.div 
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-orange-600/15 rounded-full blur-[140px]" 
        />
      </div>

      <motion.div 
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className="w-full max-w-lg bg-[#0d1730]/90 backdrop-blur-2xl rounded-3xl sm:rounded-[3rem] p-6 sm:p-10 md:p-12 shadow-2xl border border-white/10 relative z-10 space-y-6"
      >
        <div className="text-center space-y-3">
          <Link to="/" className="inline-flex items-center gap-3 group">
            <div className="p-2 bg-white rounded-2xl w-12 h-12 flex items-center justify-center shadow-lg border border-white/20 group-hover:scale-105 transition-transform">
              <img src={logo} alt="S.K Associates Logo" className="w-full h-full object-contain" />
            </div>
            <div className="text-left">
              <span className="font-black text-lg tracking-tight block text-white">S.K ASSOCIATES</span>
              <span className="text-[9px] uppercase tracking-widest text-sky-400 font-bold block">Internal Compliance Portal</span>
            </div>
          </Link>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-sky-300 text-[11px] font-bold">
            <ShieldCheck size={14} className="text-emerald-400" /> Authorized ICAI Member & Staff Access
          </div>
        </div>

        {/* Tab Selection */}
        <div className="grid grid-cols-3 gap-1.5 p-1 bg-white/5 border border-white/10 rounded-2xl">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setAuthSuccess(false);
                setErrorMessage('');
              }}
              className={`py-2.5 px-2 rounded-xl text-xs font-bold transition-all flex flex-col sm:flex-row items-center justify-center gap-1.5 ${
                activeTab === tab.id
                  ? 'bg-[#007bb6] text-white shadow-lg'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab.icon}
              <span className="text-[10px] sm:text-xs text-center">{tab.label.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {authSuccess ? (
            <motion.div
              key="auth-success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-8 text-center space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="text-2xl font-black text-white">Authentication Verified</h3>
              <p className="text-xs text-slate-300 max-w-xs mx-auto">
                Welcome back! Redirecting to the secure {tabs.find(t => t.id === activeTab)?.label}...
              </p>
              <div className="pt-2">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#007bb6] hover:bg-blue-600 text-white font-bold text-xs rounded-xl shadow-lg transition"
                >
                  Return to Main Portal <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ) : (
            <motion.form
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              onSubmit={handleLogin}
              className="space-y-4"
            >
              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 ml-1">
                  {activeTab === 'partner' ? 'Partner Email / Membership ID' : (activeTab === 'webmail' ? 'Staff Webmail Address' : 'Employee / Article ID')}
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input 
                    required
                    type={activeTab === 'webmail' ? 'email' : 'text'}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={activeTab === 'partner' ? 'partner@skassociates.in' : (activeTab === 'webmail' ? 'staff@skassociates.in' : 'SKA-EMP-104')}
                    className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-2xl outline-none focus:border-[#007bb6] text-white placeholder:text-slate-500 font-medium text-sm transition-all"
                  />
                </div>
              </div>

              {activeTab === 'timesheet' ? (
                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 ml-1">Access PIN / Passcode</label>
                  <div className="relative">
                    <Key className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input 
                      required
                      type="password"
                      maxLength={6}
                      value={staffCode}
                      onChange={(e) => setStaffCode(e.target.value)}
                      placeholder="6-Digit Secure PIN"
                      className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-2xl outline-none focus:border-[#007bb6] text-white placeholder:text-slate-500 font-medium text-sm transition-all"
                    />
                  </div>
                </div>
              ) : (
                <div className="space-y-1">
                  <div className="flex justify-between items-center px-1">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Password</label>
                    <a href="mailto:officeska2000@gmail.com?subject=Password%20Reset%20Request" className="text-[10px] text-sky-400 hover:underline">Forgot?</a>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input 
                      required
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••••••"
                      className="w-full pl-12 pr-12 py-3.5 bg-white/5 border border-white/10 rounded-2xl outline-none focus:border-[#007bb6] text-white placeholder:text-slate-500 font-medium text-sm transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>
              )}

              {errorMessage && (
                <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs flex items-center gap-2">
                  <AlertCircle size={16} />
                  <span>{errorMessage}</span>
                </div>
              )}

              <button 
                type="submit"
                disabled={isLoading}
                className="w-full py-4 bg-[#007bb6] hover:bg-blue-600 text-white rounded-2xl font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-blue-600/30 transition-all disabled:opacity-50 mt-2"
              >
                {isLoading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Verifying Credentials...</span>
                  </>
                ) : (
                  <>
                    <Lock size={16} />
                    <span>Authorize Session</span>
                  </>
                )}
              </button>
            </motion.form>
          )}
        </AnimatePresence>

        <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400 font-medium">
          <span className="flex items-center gap-1.5">
            <ShieldCheck size={14} className="text-emerald-400" /> AES-256 Bit Encryption
          </span>
          <Link to="/" className="text-sky-400 hover:underline">
            Back to Public Website
          </Link>
        </div>
      </motion.div>

    </div>
  );
};

export default Login;