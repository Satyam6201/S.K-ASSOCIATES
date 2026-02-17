import React from 'react';

const InputField = ({ label, type = "text", required = false, placeholder = "" }) => {
  return (
    <div className="flex flex-col space-y-1">
      <label className="text-sm font-bold text-slate-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input 
        type={type}
        placeholder={placeholder}
        className="border border-slate-300 p-2 rounded focus:ring-2 focus:ring-sky-500 outline-none transition-all text-sm"
      />
    </div>
  );
};

export default InputField;