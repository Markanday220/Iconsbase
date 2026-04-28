import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: "10,000+", label: "Students Trained" },
  { value: "98%", label: "Placement Rate" },
  { value: "150+", label: "Projects Completed" },
  { value: "₹8LPA", label: "Average CTC" }
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 divide-x divide-slate-200">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center px-4"
            >
              <div className="text-4xl md:text-5xl font-bold text-[#01214A] mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#F5AF02] to-[#FFC533]">
                {stat.value}
              </div>
              <div className="text-slate-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
