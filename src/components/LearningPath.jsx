import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Monitor, Target, CheckCircle, TrendingUp, Star, Code, Video, Palette } from 'lucide-react';

const paths = [
  {
    title: "AI Digital Marketing",
    color: "from-[#F5AF02] to-[#FFC533]",
    duration: "12 Weeks",
    tools: "ChatGPT, Meta Ads, Google Analytics",
    outcome: "Growth Hacker / Performance Marketer"
  },
  {
    title: "AI Website Development",
    color: "from-[#F5AF02] to-[#FFC533]",
    duration: "16 Weeks",
    tools: "React, Cursor, Tailwind CSS",
    outcome: "Frontend Developer / Freelancer"
  },
  {
    title: "AI Video Creation",
    color: "from-[#F5AF02] to-[#FFC533]",
    duration: "8 Weeks",
    tools: "Midjourney, Runway, Premiere Pro",
    outcome: "Video Editor / Content Creator"
  },
  {
    title: "AI UI/UX Design",
    color: "from-[#F5AF02] to-[#FFC533]",
    duration: "10 Weeks",
    tools: "Figma, Relume, Framer",
    outcome: "Product Designer / UI Specialist"
  }
];

const LearningPath = () => {
  return (
    <section id="courses" className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Choose Your <span className="text-[#F5AF02]">Learning Path</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-lg"
          >
            Master the most in-demand skills of 2024. Our AI-integrated courses are designed to make you irreplaceable.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Detailed Featured Card for AI Digital Marketing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 rounded-[2.5rem] overflow-hidden bg-white shadow-2xl border border-slate-100 flex flex-col"
          >
            {/* Header Section */}
            <div className="bg-[#FF4D00] p-8 md:p-12 text-white relative">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#FF6A26] rounded-xl flex items-center justify-center shadow-lg">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <span className="px-4 py-1.5 bg-[#FF6A26] rounded-full text-[10px] font-bold uppercase tracking-widest">16 Weeks</span>
                    <span className="px-4 py-1.5 bg-[#F5AF02] text-[#01214A] rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5">
                      <Star className="w-3 h-3 fill-[#01214A]" /> MOST POPULAR
                    </span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">AI Digital Marketing</h3>
                  <p className="text-white/90 text-lg md:text-xl font-medium max-w-xl">
                    Industry-linked, AI-integrated curriculum under founder-level mentorship.
                  </p>
                </div>
                <div className="bg-[#FF6A26]/40 backdrop-blur-md p-8 rounded-3xl border border-white/10 text-center min-w-[220px] shadow-xl">
                  <div className="text-4xl font-bold mb-1">₹50,000</div>
                  <div className="text-sm font-medium opacity-80 uppercase tracking-widest">per course</div>
                </div>
              </div>
            </div>

            {/* Body Section */}
            <div className="p-8 md:p-12 flex flex-col lg:flex-row gap-12 bg-white">
              <div className="flex-1">
                <h4 className="text-2xl font-bold text-[#01214A] mb-8 flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-[#FF4D00] rounded-full"></span> What's Included
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-12">
                  {[
                    "SEO, SEM & Social Media Marketing",
                    "AI Marketing Tools & Automation",
                    "Content Strategy & Creation",
                    "Google Ads & Facebook Ads",
                    "Analytics & Data Analysis",
                    "Email Marketing Campaigns",
                    "Paid Internship Opportunity",
                    "100% Placement Guarantee"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-6 h-6 rounded-full bg-[#00C853]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <CheckCircle className="w-4 h-4 text-[#00C853]" />
                      </div>
                      <span className="text-slate-700 font-semibold text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:w-96">
                <div className="bg-[#FFF8F5] border border-orange-100 rounded-[2rem] p-8 h-full shadow-sm">
                  <h4 className="text-[#01214A] font-bold mb-6 text-xl">Why Choose This Course?</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4 text-slate-600 font-medium">
                      <div className="w-2 h-2 rounded-full bg-[#FF4D00] mt-2 flex-shrink-0"></div>
                      <span className="text-base leading-snug">Most comprehensive AI marketing program</span>
                    </li>
                    <li className="flex items-start gap-4 text-slate-600 font-medium">
                      <div className="w-2 h-2 rounded-full bg-[#FF4D00] mt-2 flex-shrink-0"></div>
                      <span className="text-base leading-snug">Advanced tools & strategies</span>
                    </li>
                    <li className="flex items-start gap-4 text-slate-600 font-medium">
                      <div className="w-2 h-2 rounded-full bg-[#FF4D00] mt-2 flex-shrink-0"></div>
                      <span className="text-base leading-snug">100% placement guarantee</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Footer Section */}
            <div className="px-8 md:px-12 pb-12 mt-auto bg-white">
              <div className="flex flex-col items-center gap-4">
                <button className="w-full py-5 rounded-2xl font-bold bg-[#FF4D00] hover:bg-[#E64500] text-white shadow-[0_10px_30px_rgba(255,77,0,0.3)] hover:shadow-[0_15px_40px_rgba(255,77,0,0.4)] transition-all flex items-center justify-center gap-3 group text-xl tracking-tight">
                  View Full Details <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest">Limited seats available</p>
              </div>
            </div>
          </motion.div>

          {/* Regular Cards for Other Paths - Updated to New Detailed Design */}
          {[
            {
              title: "AI Website Development",
              color: "bg-blue-600",
              price: "₹25,000",
              icon: <Code className="w-5 h-5" />,
              description: "Master AI-powered web development with modern frameworks & real-world projects.",
              features: [
                "React, Next.js & Modern Frameworks",
                "AI Integration in Web Apps",
                "Full-Stack Development",
                "Portfolio Building Projects",
                "Git & Version Control",
                "Deployment & Hosting",
                "Paid Internship Opportunity",
                "1-on-1 Code Reviews"
              ]
            },
            {
              title: "AI Video Creation",
              color: "bg-purple-600",
              price: "₹25,000",
              icon: <Video className="w-5 h-5" />,
              description: "Learn cutting-edge AI video tools, editing techniques & production workflows.",
              features: [
                "AI Video Editing Tools Mastery",
                "Professional Video Production",
                "Motion Graphics & Animation",
                "Color Grading & Effects",
                "YouTube & Social Media Content",
                "Video Marketing Strategies",
                "Paid Internship Opportunity",
                "Portfolio Showcase Creation"
              ]
            },
            {
              title: "AI Design",
              color: "bg-pink-600",
              price: "₹25,000",
              icon: <Palette className="w-5 h-5" />,
              description: "Transform design skills with AI tools, UI/UX principles & stunning visuals.",
              features: [
                "UI/UX Design Fundamentals",
                "AI-Powered Design Tools",
                "Figma & Adobe XD Mastery",
                "Brand Identity Design",
                "Mobile & Web Design",
                "Design System Creation",
                "Paid Internship Opportunity",
                "Professional Design Portfolio"
              ]
            }
          ].map((path, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200 hover:border-slate-300 transition-all flex flex-col shadow-lg hover:shadow-2xl h-full"
            >
              {/* Header */}
              <div className={`${path.color} p-6 text-white`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-md">
                    {path.icon}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider opacity-90">12 Weeks</span>
                </div>
                <h3 className="text-2xl font-bold">{path.title}</h3>
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-3xl font-bold text-[#01214A]">{path.price}</span>
                  <span className="text-sm text-slate-500">/course</span>
                </div>

                <p className="text-slate-600 text-sm mb-8 leading-relaxed">
                  {path.description}
                </p>

                <div className="space-y-3 mb-10">
                  {path.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-xs font-medium text-slate-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full py-3.5 mt-auto rounded-xl font-bold bg-[#F5AF02] hover:bg-[#E09600] text-[#01214A] transition-all flex items-center justify-center gap-2 group shadow-lg shadow-yellow-100">
                  View Details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningPath;
