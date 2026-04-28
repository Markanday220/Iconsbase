import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Mail, CheckCircle2 } from 'lucide-react';

const MentorSection = () => {
  return (
    <section id="mentors" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-[#01214A]/10 blur-[120px] rounded-full z-0 pointer-events-none"></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#01214A] rounded-[3rem] p-8 md:p-12 lg:p-20 shadow-2xl relative overflow-hidden border border-white/10">
          {/* Decorative background glow */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#F5AF02]/10 blur-[120px] rounded-full -mr-40 -mt-40"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="relative max-w-md mx-auto lg:mx-0 group">
                <div className="absolute inset-0 bg-[#F5AF02] rounded-3xl transform rotate-3 scale-105 opacity-10 blur-sm group-hover:rotate-6 transition-transform duration-500"></div>
                <img
                  src="/Mentor.png"
                  alt="Nikhil Sharma - Chief Mentor"
                  className="relative rounded-3xl object-cover w-full h-[550px] shadow-2xl"
                />

                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl flex items-center gap-4 border border-slate-100">
                  <div className="w-14 h-14 bg-[#01214A] text-[#F5AF02] rounded-2xl flex items-center justify-center shadow-lg transform -rotate-6">
                    <span className="font-extrabold text-xl">15+</span>
                  </div>
                  <div>
                    <p className="text-[#01214A] font-extrabold text-lg leading-tight">Years Exp.</p>
                    <p className="text-slate-500 text-sm font-semibold">Chief Mentor</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="inline-block px-4 py-1.5 bg-[#F5AF02]/10 border border-[#F5AF02]/20 rounded-full mb-6">
                <span className="text-[#F5AF02] text-sm font-bold uppercase tracking-wider">Meet Your Mentor</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white leading-tight">
                Learn from the <br />
                <span className="text-[#F5AF02]">Growth Maestro</span>
              </h2>
              <p className="text-xl text-white/90 font-bold mb-8">Nikhil Sharma, Founder & Group CEO</p>

              <p className="text-white/70 text-lg mb-10 leading-relaxed max-w-xl">
                With over a decade of experience scaling startups and leading digital transformations, your mentor brings real-world agency experience directly to the classroom. No fluff, just actionable strategies that work today.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {[
                  "Scaled 100+ Global Brands",
                  "10,000+ Students Mentored",
                  "Strategic Advisor to CXOs",
                  "Ex-Agency Head & Founder"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-white/80">
                    <div className="w-6 h-6 rounded-full bg-[#F5AF02]/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-[#F5AF02]" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <button className="w-12 h-12 rounded-full bg-white shadow-md border-slate-200 border border-slate-200 flex items-center justify-center hover:bg-[#F5AF02] hover:text-white hover:border-[#F5AF02] transition-all text-slate-600">
                  <Globe className="w-5 h-5" />
                </button>
                <button className="w-12 h-12 rounded-full bg-white shadow-md border-slate-200 border border-slate-200 flex items-center justify-center hover:bg-blue-400 hover:text-[#01214A] hover:border-blue-400 transition-all text-slate-600">
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorSection;
