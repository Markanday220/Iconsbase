import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ArrowRight } from 'lucide-react';

const stories = [
  {
    name: "Rahul Sharma",
    role: "Performance Marketer",
    company: "Ogilvy",
    beforeText: "Struggling Freelancer",
    beforeIncome: "₹20,000/mo",
    afterText: "Agency Owner",
    afterIncome: "₹1.5L/mo",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&h=300&auto=format&fit=crop"
  },
  {
    name: "Priya Patel",
    role: "UI/UX Designer",
    company: "Cred",
    beforeText: "Graphic Designer",
    beforeIncome: "₹3 LPA",
    afterText: "Product Designer",
    afterIncome: "₹12 LPA",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&h=300&auto=format&fit=crop"
  },
  {
    name: "Amit Kumar",
    role: "Frontend Developer",
    company: "TCS",
    beforeText: "B.Tech Fresher",
    beforeIncome: "Unplaced",
    afterText: "SDE-1",
    afterIncome: "₹8 LPA",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&h=300&auto=format&fit=crop"
  }
];

const SuccessStories = () => {
  return (
    <section id="success" className="py-24 bg-white relative border-t border-slate-100 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#F5AF02]/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5AF02]/10 border border-[#F5AF02]/20 text-[#F5AF02] text-xs font-bold uppercase tracking-wider mb-4"
            >
              <TrendingUp className="w-3 h-3" /> Career Transformations
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4 text-[#01214A]"
            >
              Real Results. <span className="text-[#F5AF02]">Real Success.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-600 text-lg"
            >
              Our alumni don't just find jobs; they build high-growth careers. See the impact of our AI-integrated training.
            </motion.p>
          </div>
          <motion.button 
            whileHover={{ x: 5 }}
            className="hidden md:flex items-center gap-2 text-[#01214A] font-bold hover:text-[#F5AF02] transition-colors group"
          >
            Explore More Success Stories <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white border border-slate-200 rounded-[2rem] p-8 hover:shadow-2xl hover:border-transparent transition-all duration-500 overflow-hidden"
            >
              {/* Header: Student Info */}
              <div className="flex items-center gap-4 mb-10 relative z-10">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#F5AF02] rounded-full scale-110 blur-sm opacity-0 group-hover:opacity-40 transition-opacity"></div>
                  <img src={story.image} alt={story.name} className="w-20 h-20 rounded-2xl object-cover relative z-10 border-2 border-white shadow-lg" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#01214A] group-hover:text-[#F5AF02] transition-colors">{story.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-tighter">{story.role}</p>
                    <div className="w-1 h-1 rounded-full bg-slate-300"></div>
                    <p className="text-xs font-bold text-[#01214A]">{story.company}</p>
                  </div>
                </div>
              </div>

              {/* Transformation Box */}
              <div className="relative">
                {/* Connection line */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-slate-100 z-0"></div>
                
                <div className="flex justify-between items-center relative z-10">
                  {/* Before */}
                  <div className="w-[45%] text-center">
                    <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 group-hover:bg-white transition-colors">
                      <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-2">Before</p>
                      <p className="text-xs text-slate-600 font-medium line-clamp-1 mb-1">{story.beforeText}</p>
                      <p className="text-sm font-bold text-slate-400 italic line-through decoration-[#01214A]/20">{story.beforeIncome}</p>
                    </div>
                  </div>

                  {/* Growth Icon */}
                  <div className="w-10 h-10 rounded-full bg-[#01214A] text-[#F5AF02] flex items-center justify-center shadow-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 z-20 border-4 border-white">
                    <TrendingUp className="w-5 h-5" />
                  </div>

                  {/* After */}
                  <div className="w-[45%] text-center">
                    <div className="bg-[#F5AF02]/5 rounded-2xl p-4 border border-[#F5AF02]/20 group-hover:bg-[#F5AF02]/10 transition-colors">
                      <p className="text-[10px] text-[#F5AF02] uppercase font-bold tracking-widest mb-2">After</p>
                      <p className="text-xs text-[#01214A] font-bold line-clamp-1 mb-1">{story.afterText}</p>
                      <p className="text-lg font-black text-[#01214A]">{story.afterIncome}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative quote marks */}
              <div className="absolute -right-2 top-20 text-[120px] font-serif text-slate-50 opacity-0 group-hover:opacity-100 transition-opacity -z-0">"</div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center md:hidden">
          <button className="w-full py-4 flex justify-center items-center gap-2 text-[#01214A] border border-[#01214A]/10 rounded-2xl font-bold hover:bg-slate-50 transition-all">
            View All Success Stories <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
