import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Timer, CheckCircle2, ChevronRight } from 'lucide-react';

const MeritoriousBatch = () => {
  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F5AF02]/10 border border-yellow-500/20 text-[#F5AF02] text-sm font-medium mb-6">
              <Trophy className="w-4 h-4" /> Limited Seats Available
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#01214A] leading-tight">
              Apply For The <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Meritorious Batch</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              We select a small group of highly motivated individuals for our elite training program. Get up to 100% scholarship based on your assessment score.
            </p>
            
            <ul className="space-y-4 mb-10">
              {['Guaranteed Paid Internship', '1-on-1 Mentorship with Founders', 'Priority Job Placements', 'Up to 100% Scholarship'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-600">
                  <CheckCircle2 className="w-6 h-6 text-[#F5AF02] flex-shrink-0" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
            
            <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-slate-950 rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(234,179,8,0.3)] flex items-center gap-2">
              Apply For Scholarship <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/20 to-orange-500/20 blur-3xl rounded-full"></div>
            <div className="bg-white shadow-xl border border-slate-200 rounded-3xl p-8 relative z-10">
              <div className="flex items-center justify-between mb-8 pb-8 border-b border-slate-200">
                <div>
                  <p className="text-slate-600 text-sm font-medium mb-1">Next Batch Starts In</p>
                  <p className="text-[#01214A] text-xl font-bold">15th May 2026</p>
                </div>
                <div className="flex items-center gap-2 text-[#F5AF02]">
                  <Timer className="w-5 h-5" />
                  <span className="font-bold">Filling Fast</span>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-600">Seats Filled</span>
                    <span className="text-[#01214A] font-bold">85%</span>
                  </div>
                  <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-400 h-full rounded-full w-[85%]"></div>
                  </div>
                </div>
                
                <div className="bg-white shadow-md border-slate-200 rounded-xl p-4 border border-slate-200">
                  <p className="text-sm text-slate-600 mb-2">Step 1</p>
                  <p className="text-[#01214A] font-medium">Clear the basic aptitude test</p>
                </div>
                <div className="bg-white shadow-md border-slate-200 rounded-xl p-4 border border-slate-200">
                  <p className="text-sm text-slate-600 mb-2">Step 2</p>
                  <p className="text-[#01214A] font-medium">1-on-1 Interview with Mentors</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MeritoriousBatch;
