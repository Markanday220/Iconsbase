import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';

const FinalCTA = ({ onOpenApply, onOpenCounselor }) => {
  return (
    <section className="py-24 bg-slate-50 relative border-t border-slate-200 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-slate-900 z-0"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#01214A]/30 blur-[100px] rounded-full z-0"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#F5AF02]/30 blur-[100px] rounded-full z-0"></div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md border-slate-200 border border-slate-200 mb-8 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-[#F5AF02]" />
            <span className="text-sm font-medium text-slate-600">Intake closing soon for the next batch</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#01214A] leading-tight">
            Ready To Transform Your Career <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5AF02] via-[#FFC533] to-[#F5AF02]">Starting Today?</span>
          </h2>
          
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Join thousands of successful alumni who have upgraded their skills, multiplied their income, and secured their dream jobs with Iconsbase.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={onOpenApply}
              className="px-8 py-4 bg-[#F5AF02] hover:bg-[#E09600] text-white rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(245,175,2,0.4)] hover:shadow-[0_0_30px_rgba(245,175,2,0.6)] hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Apply Now <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={onOpenCounselor}
              className="px-8 py-4 bg-white shadow-md border-slate-200 border border-slate-200 hover:bg-slate-100 text-[#01214A] rounded-xl font-bold text-lg transition-all backdrop-blur-sm"
            >
              Talk to a Counselor
            </button>
          </div>
          
          <p className="mt-6 text-sm text-[#01214A]0">
            *Scholarships available for meritorious students.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
