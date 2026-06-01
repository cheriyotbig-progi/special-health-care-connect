import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

const Insurance: React.FC = () => {
  const providers = [
    'NHIF',
    'Jubilee Insurance',
    'AAR Insurance',
    'Madison Insurance',
    'Britam',
    'Old Mutual',
    'APA Insurance',
    'CIC Insurance'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-8 lg:p-16 space-y-8">
            <div className="inline-flex items-center space-x-2 bg-primary/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
              <ShieldCheck className="h-4 w-4" />
              <span>Coverage & Insurance</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">We Accept Major Kenyan Insurance Plans</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Navigating insurance can be complicated. We work with leading local providers to ensure you receive the care you need with minimal hassle.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {providers.map((provider) => (
                <div key={provider} className="flex items-center text-slate-300 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary mr-2 shrink-0" />
                  <span>{provider}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative bg-primary/10 flex items-center justify-center p-12">
            <div className="grid grid-cols-2 gap-8 opacity-40">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-32 h-20 bg-white/20 rounded-xl border border-white/30 backdrop-blur-sm"></div>
              ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="text-center space-y-4 px-8">
                  <p className="text-white font-medium">Don't see your provider?</p>
                  <button className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition-colors">
                    Check Eligibility
                  </button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insurance;