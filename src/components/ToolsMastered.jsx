import React from 'react';
import { motion } from 'framer-motion';

const tools = [
  { name: "ChatGPT", logo: "https://api.iconify.design/logos:openai-icon.svg" },
  { name: "Midjourney", logo: "https://api.iconify.design/simple-icons:midjourney.svg" },
  { name: "Meta Ads", logo: "https://api.iconify.design/logos:meta-icon.svg" },
  { name: "Google Ads", logo: "https://api.iconify.design/logos:google-ads.svg" },
  { name: "Figma", logo: "https://api.iconify.design/logos:figma.svg" },
  { name: "React", logo: "https://api.iconify.design/logos:react.svg" },
  { name: "Tailwind", logo: "https://api.iconify.design/logos:tailwindcss-icon.svg" },
  { name: "Notion", logo: "https://api.iconify.design/logos:notion-icon.svg" },
  { name: "Cursor AI", logo: "https://api.iconify.design/material-symbols: terminal-rounded.svg" }
];

const ToolsMastered = () => {
  // Triple the tools to ensure seamless scrolling
  const scrollTools = [...tools, ...tools, ...tools];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#01214A]/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F5AF02]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 text-[#01214A]"
          >
            Tools You'll <span className="text-[#F5AF02]">Master</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-lg"
          >
            Get hands-on experience with the industry's most powerful AI and tech tools.
          </motion.p>
        </div>

        <div className="relative flex overflow-hidden py-10 mask-fade">
          <motion.div 
            animate={{ 
              x: [0, -1920], // Adjust based on content width
            }}
            transition={{ 
              duration: 40, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            whileHover={{ animationPlayState: "paused" }}
            className="flex gap-8 whitespace-nowrap"
          >
            {scrollTools.map((tool, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  y: -10, 
                  scale: 1.05,
                  borderColor: "#F5AF02",
                  boxShadow: "0 20px 40px rgba(1, 33, 74, 0.1)"
                }}
                className="inline-flex items-center gap-4 px-8 py-5 bg-white border border-slate-200 rounded-2xl transition-all cursor-pointer group shadow-sm flex-shrink-0"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-slate-50 rounded-lg p-1.5 group-hover:bg-[#F5AF02]/10 transition-colors">
                  <img 
                    src={tool.logo} 
                    alt={tool.name} 
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${tool.name}&background=01214A&color=F5AF02&bold=true`;
                    }}
                    className="w-full h-full object-contain transition-all duration-300"
                  />
                </div>
                <span className="text-[#01214A] font-bold text-lg group-hover:text-[#F5AF02] transition-colors">
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Duplicate for seamless effect if needed - but tripled is safer */}
        </div>

        {/* Custom Styles for Masking */}
        <style dangerouslySetInnerHTML={{ __html: `
          .mask-fade {
            -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
            mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          }
        `}} />
      </div>
    </section>
  );
};

export default ToolsMastered;
