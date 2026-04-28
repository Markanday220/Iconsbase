import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Briefcase, ArrowRight } from 'lucide-react';

const ConceptAgencyModel = () => {
  return (
    <section className="py-24 bg-white relative border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-[#01214A]"
          >
            The <span className="text-[#F5AF02]">Concept Day</span> + <span className="text-[#F5AF02]">Agency Day</span> Model
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-lg"
          >
            Our unique pedagogy ensures you don't just learn theory, but actually apply it in real-world agency scenarios.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 relative items-center">
          {/* Connector arrow for desktop */}
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center">
              <ArrowRight className="w-5 h-5 text-slate-400" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#EDF8FA] border border-cyan-100 rounded-[2.5rem] p-10 lg:p-14 relative overflow-hidden group hover:shadow-xl transition-all duration-500"
          >
            <div className="w-14 h-14 bg-white/60 rounded-2xl flex items-center justify-center mb-10 shadow-sm group-hover:scale-110 transition-transform">
              <BookOpen className="w-7 h-7 text-[#F5AF02]" />
            </div>
            <h3 className="text-3xl font-bold text-[#01214A] mb-6">Concept Days</h3>
            <p className="text-slate-600 mb-10 text-lg leading-relaxed">
              Learn the core concepts, frameworks, and latest tools from industry experts. We break down complex topics into easy-to-understand modules.
            </p>
            <ul className="space-y-4">
              {[
                "Deep-dive masterclasses",
                "Tool mastery (AI & Tech)",
                "Framework breakdown"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-base font-semibold text-slate-600">
                  <div className="w-2 h-2 rounded-full bg-cyan-400"></div> {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#F6F4FF] border border-purple-100 rounded-[2.5rem] p-10 lg:p-14 relative overflow-hidden group hover:shadow-xl transition-all duration-500"
          >
            <div className="w-14 h-14 bg-white/60 rounded-2xl flex items-center justify-center mb-10 shadow-sm group-hover:scale-110 transition-transform">
              <Briefcase className="w-7 h-7 text-[#F5AF02]" />
            </div>
            <h3 className="text-3xl font-bold text-[#01214A] mb-6">Agency Days</h3>
            <p className="text-slate-600 mb-10 text-lg leading-relaxed">
              Work on live client briefs. Simulate a real agency environment where you pitch, execute, and deliver projects under tight deadlines.
            </p>
            <ul className="space-y-4">
              {[
                "Live client briefs",
                "Collaborative execution",
                "Real-time feedback"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-base font-semibold text-slate-600">
                  <div className="w-2 h-2 rounded-full bg-purple-400"></div> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConceptAgencyModel;
