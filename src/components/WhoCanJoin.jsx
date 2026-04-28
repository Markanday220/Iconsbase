import React from 'react';
import { motion } from 'framer-motion';

const targets = [
  {
    title: "College Students",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&auto=format&fit=crop",
    description: "Aiming for a digital marketing career? Join our merit batch with paid internship and placement guarantee.",
    tags: ["Merit Selection", "Paid Internship", "Placement Guarantee"]
  },
  {
    title: "Job Seekers",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    description: "Land your first digital marketing job. Get hands-on experience, a paid internship, and guaranteed placement support.",
    tags: ["Job-Ready Skills", "Paid Internship", "Placement Guarantee"]
  },
  {
    title: "Working Professionals",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    description: "Want to upskill or switch to marketing? Our flexible Concept + Agency Day model fits your schedule.",
    tags: ["Flexible Learning", "Career Transition", "Industry Skills"]
  },
  {
    title: "Freelancers",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
    description: "Scale your freelance business. Master AI tools to deliver faster and win high-paying global clients.",
    tags: ["Client Acquisition", "Tool Mastery", "High ROI"]
  },
  {
    title: "Business Owners",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    description: "Automate your business operations and marketing. Save costs and scale your brand without adding more headcount.",
    tags: ["Business Automation", "Cost Efficiency", "Scaling Strategy"]
  },
  {
    title: "Agency Owners",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
    description: "Future-proof your agency. Implement AI-driven workflows to improve project margins and client results.",
    tags: ["Agency Workflow", "Margin Optimization", "Team Training"]
  }
];

const WhoCanJoin = () => {
  return (
    <section className="py-24 bg-white border-t border-slate-100 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#01214A]"
          >
            Who Can Join <span className="text-[#F5AF02]">Iconsbase?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-lg"
          >
            Our programs are designed for ambitious individuals who want to stay ahead of the curve.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {targets.map((target, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col group"
            >
              {/* Image Container */}
              <div className="h-56 overflow-hidden">
                <img 
                  src={target.image} 
                  alt={target.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-[#01214A] mb-4">{target.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                  {target.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {target.tags.map((tag, tIndex) => (
                    <span 
                      key={tIndex} 
                      className="px-3 py-1 bg-slate-50 border border-slate-200 text-slate-600 text-[10px] font-bold uppercase tracking-wider rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="w-full py-4 bg-[#01214A] hover:bg-[#001838] text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-xl">
                  Read More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoCanJoin;
