import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MonitorPlay, Sparkles, TrendingUp, Users, Award } from 'lucide-react';

const features = [
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Industry-Ready Training",
    description: "Learn what companies actually need. Our curriculum is designed by industry experts."
  },
  {
    icon: <MonitorPlay className="w-6 h-6" />,
    title: "Live Projects",
    description: "Build a real portfolio with live client projects, not just dummy assignments."
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "AI-First Curriculum",
    description: "Every module integrates the latest AI tools to 10x your productivity."
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Placement Support",
    description: "Dedicated placement cell with 50+ hiring partners and mock interviews."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "1-on-1 Mentorship",
    description: "Get personalized guidance from mentors who have been in your shoes."
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Recognized Certification",
    description: "Earn a certificate that holds value in the industry and boosts your resume."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const WhyChoose = () => {
  return (
    <section id="why-us" className="py-24 bg-white relative border-t border-slate-200">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#01214A]/10 blur-[120px] rounded-full z-0 pointer-events-none"></div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Why Choose <span className="text-[#F5AF02]">Iconsbase</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-lg"
          >
            We don't just teach theory. We build careers. Here's how we ensure your success in the tech and design industry.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white shadow-xl border-slate-100 border rounded-3xl p-8 backdrop-blur-sm hover:bg-[#01214A] transition-all duration-500 group relative overflow-hidden"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-[#F5AF02]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="w-14 h-14 rounded-2xl bg-slate-50 shadow-inner flex items-center justify-center mb-6 group-hover:bg-[#F5AF02] group-hover:scale-110 transition-all duration-500 text-[#F5AF02]">
                <div className="group-hover:text-white transition-colors duration-500">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#01214A] mb-3 group-hover:text-white transition-colors duration-500">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed group-hover:text-slate-300 transition-colors duration-500">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;
