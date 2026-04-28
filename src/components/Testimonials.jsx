import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    content: "The AI integration in the course is what sets it apart. I learned how to build websites 10x faster using the tools taught here. Highly recommended!",
    author: "Sneha Reddy",
    role: "Frontend Developer"
  },
  {
    content: "I was struggling to get clients as a freelancer. After completing the AI Digital Marketing course, my leads doubled in just one month. The frameworks are pure gold.",
    author: "Vikram Singh",
    role: "Freelance Marketer"
  },
  {
    content: "The mentor support is incredible. They review your code, guide your portfolio, and even help you prep for interviews. Got placed within 2 weeks of completion.",
    author: "Anjali Gupta",
    role: "UI/UX Designer"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1000px] bg-[#F5AF02]/5 blur-[120px] rounded-full z-0 pointer-events-none"></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-[#01214A]"
          >
            Our Student <span className="text-[#F5AF02]">Reviews</span>
          </motion.h2>
          <div className="flex items-center justify-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-5 h-5 text-[#F5AF02] fill-yellow-400" />
            ))}
          </div>
          <p className="text-slate-600">Rated 4.9/5 by 2000+ students on Google</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white shadow-md border-slate-200 border border-slate-200 rounded-3xl p-8 hover:bg-slate-100 transition-colors relative"
            >
              <Quote className="w-10 h-10 text-[#01214A]/10 absolute top-6 right-6" />
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-[#F5AF02] fill-yellow-400" />
                ))}
              </div>
              <p className="text-slate-600 mb-8 leading-relaxed italic">
                "{review.content}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-[#01214A] font-bold">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-[#01214A] text-sm">{review.author}</h4>
                  <p className="text-xs text-slate-600">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
