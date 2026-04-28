import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users, CheckCircle, ArrowRight } from 'lucide-react';

const Hero = ({ onOpenApply }) => {

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-10 lg:pt-28 lg:pb-12 overflow-hidden">
      {/* Background with blur and grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white opacity-95 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-[#01214A]/10 blur-[120px] rounded-full z-0 pointer-events-none"></div>
      </div>

      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md border-slate-200 border border-slate-200 backdrop-blur-sm mb-6 mt-6"
          >
            <Star className="w-4 h-4 text-[#F5AF02] fill-yellow-400" />
            <span className="text-sm font-medium text-slate-600">Rated 4.9/5 by 2000+ Students</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 leading-tight"
          >
            Master AI Skills That <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5AF02] via-[#FFC533] to-[#F5AF02]">Actually Get You Paid</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg text-slate-600 mb-6 max-w-2xl mx-auto leading-relaxed"
          >
            Learn AI Digital Marketing, Websites, Video & Design — with real projects & placement support. Transform your career in just 12 weeks.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <button 
              onClick={onOpenApply}
              className="w-full sm:w-auto px-8 py-3 bg-[#F5AF02] hover:bg-[#E09600] text-white rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(245,175,2,0.3)] hover:shadow-[0_0_30px_rgba(245,175,2,0.5)] flex items-center justify-center gap-2"
            >
              Apply Now <ArrowRight className="w-5 h-5" />
            </button>
            <a 
              href="#courses"
              className="w-full sm:w-auto px-8 py-3 bg-white shadow-md border-slate-200 hover:bg-slate-100 border border-slate-200 text-[#01214A] rounded-xl font-bold text-lg transition-all backdrop-blur-sm flex items-center justify-center"
            >
              View Courses
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-4 max-w-5xl mx-auto mt-8"
          >
            {[
              { label: "Placement Rate", value: "98%", icon: <CheckCircle className="w-5 h-5" />, sub: "Track Record" },
              { label: "Hiring Partners", value: "50+", icon: <Users className="w-5 h-5" />, sub: "Top Companies" },
              { label: "Live Projects", value: "12", icon: <Star className="w-5 h-5" />, sub: "Hands-on Exp" },
              { label: "Mentorship", value: "24/7", icon: <Star className="w-5 h-5" />, sub: "Expert Support" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative group p-4 rounded-xl bg-[#01214A] border border-[#F5AF02]/20 hover:border-[#F5AF02]/50 transition-all duration-300 shadow-lg overflow-hidden"
              >
                {/* Decorative glow */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#F5AF02]/10 blur-2xl rounded-full group-hover:bg-[#F5AF02]/20 transition-all"></div>
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#F5AF02] mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm font-bold text-slate-300 mb-1">{stat.label}</div>
                  <div className="text-xs text-slate-500">{stat.sub}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
