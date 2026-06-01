import React from 'react';
import { Mail, ShieldCheck } from 'lucide-react';

const Newsletter: React.FC = () => {
  return (
    <section className="py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-slate-200">
          <div className="lg:w-1/2 p-12 lg:p-20 bg-slate-900 text-white relative">
             <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full translate-x-16 -translate-y-16"></div>
             <div className="relative z-10 space-y-6">
                <div className="inline-flex items-center space-x-2 text-red-500 font-black text-xs uppercase tracking-widest">
                  <ShieldCheck className="h-4 w-4" />
                  <span>Independent Journalism</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9]">
                  Get Ahead <br />
                  <span className="text-red-600">Of The Curve</span>
                </h2>
                <p className="text-slate-400 text-lg">
                  Subscribe to our flagship newsletter, The Holistic Morning, for the most critical news and analysis.
                </p>
             </div>
          </div>
          <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
             <div className="space-y-8">
                <div className="space-y-4">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-5 pl-12 pr-6 text-slate-900 focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all outline-none"
                    />
                  </div>
                </div>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-5 rounded-2xl uppercase tracking-widest transition-all transform hover:scale-[1.02] shadow-xl shadow-red-600/20">
                  Subscribe Now
                </button>
                <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                  Join 250,000+ subscribers. No spam, ever.
                </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;