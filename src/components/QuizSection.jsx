import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, ArrowRight } from 'lucide-react';

const QuizSection = ({ onOpenCounselor, onOpenQuiz }) => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#01214A]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#F5AF02]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto relative"
        >
          {/* Main Card */}
          <div className="bg-[#01214A] rounded-[2.5rem] p-8 md:p-16 text-center shadow-2xl relative overflow-hidden border border-white/10">
            {/* Animated background elements */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-32 -right-32 w-64 h-64 bg-[#F5AF02]/20 rounded-full blur-[80px]"
            ></motion.div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F5AF02] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F5AF02]"></span>
                </span>
                <span className="text-xs font-bold text-white uppercase tracking-wider">Free Career Assessment</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                Not Sure Which <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5AF02] to-[#FFD700]">AI Career Path</span> Is For You?
              </h2>

              <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Take our 2-minute "AI Readiness" quiz to discover which specialization matches your personality, skills, and goals.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onOpenQuiz}
                  className="w-full sm:w-auto px-10 py-5 bg-[#F5AF02] text-[#01214A] rounded-2xl font-bold text-xl hover:bg-[#FFD700] transition-all shadow-[0_0_30px_rgba(245,175,2,0.3)] flex items-center justify-center gap-3"
                >
                  Start Assessment Now <ArrowRight className="w-6 h-6" />
                </motion.button>
                <button
                  onClick={onOpenCounselor}
                  className="text-white font-semibold hover:text-[#F5AF02] transition-colors flex items-center gap-2 group"
                >
                  Talk to a Counselor
                  <span className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:border-[#F5AF02] transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </button>
              </div>
            </div>

            {/* Floating Icons for decoration */}
            <div className="hidden lg:block absolute left-10 top-1/2 -translate-y-1/2 opacity-20">
              <HelpCircle className="w-32 h-32 text-white" />
            </div>
          </div>

          {/* Social Proof Mini Section */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-8 text-slate-400 text-sm">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm">
                    <img
                      src={`https://i.pravatar.cc/100?u=student${i}`}
                      alt="Student"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <span className="font-semibold text-slate-500">Joined by 5,000+ students this month</span>
            </div>
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-slate-300"></div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuizSection;
