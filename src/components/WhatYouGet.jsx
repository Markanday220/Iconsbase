import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Briefcase, Users, Laptop, FileText } from 'lucide-react';

const benefits = [
  {
    icon: <Award className="w-6 h-6 text-[#F5AF02]" />,
    title: "Recognized Certification",
    description: "Get certified by Iconsbase and our industry partners."
  },
  {
    icon: <Briefcase className="w-6 h-6 text-[#F5AF02]" />,
    title: "Paid Internship",
    description: "Top performers get guaranteed paid internships with our agency partners."
  },
  {
    icon: <Laptop className="w-6 h-6 text-[#F5AF02]" />,
    title: "Live Projects",
    description: "Work on real client briefs to build a solid portfolio."
  },
  {
    icon: <Users className="w-6 h-6 text-[#F5AF02]" />,
    title: "Exclusive Community",
    description: "Join a network of 10,000+ alumni, founders, and recruiters."
  },
  {
    icon: <FileText className="w-6 h-6 text-[#F5AF02]" />,
    title: "Resume & Interview Prep",
    description: "1-on-1 sessions to perfect your resume and crack interviews."
  },
  {
    icon: <CheckCircle2 className="w-6 h-6 text-[#F5AF02]" />,
    title: "Lifetime Access",
    description: "Get lifetime access to course updates and community events."
  }
];

const WhatYouGet = () => {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-[#01214A]"
          >
            What You Will Get In <span className="text-[#F5AF02]">Iconsbase?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-lg"
          >
            It's not just a course, it's a complete career launchpad.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -12, 
                boxShadow: "0 20px 40px -12px rgba(0,0,0,0.15)",
              }}
              className="bg-white border border-slate-200 rounded-[1.5rem] p-8 transition-all duration-500 cursor-default group hover:bg-[#01214A] hover:border-[#01214A]"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-slate-50 shadow-md border border-slate-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-white transition-all duration-500">
                  <div className="text-[#F5AF02]">
                    {benefit.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#01214A] mb-3 group-hover:text-white transition-colors duration-500">{benefit.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium group-hover:text-slate-300 transition-colors duration-500">{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
