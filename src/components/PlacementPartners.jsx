import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  { name: "INFABIO", logo: "https://cdn.simpleicons.org/digitalocean" },
  { name: "ANANDBODH", logo: "https://cdn.simpleicons.org/vitest" },
  { name: "FABULOUS MEDIA", logo: "https://cdn.simpleicons.org/framer" },
  { name: "GoCommercially", logo: "https://cdn.simpleicons.org/googlecloud" },
  { name: "VIBENCE", logo: "https://cdn.simpleicons.org/vercel" },
  { name: "WAKEUP LIFE", logo: "https://cdn.simpleicons.org/webflow" },
  { name: "DISCUSS BUSINESS", logo: "https://cdn.simpleicons.org/slack" },
  { name: "URZANO", logo: "https://cdn.simpleicons.org/unrealengine" },
  { name: "TaCa", logo: "https://cdn.simpleicons.org/tinder" },
  { name: "MediaDrops", logo: "https://cdn.simpleicons.org/medium" },
  { name: "infinitium.in", logo: "https://cdn.simpleicons.org/intercom" }
];

const PlacementPartners = () => {
  // Triple for seamless scrolling
  const scrollPartners = [...partners, ...partners, ...partners];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl md:text-4xl font-bold text-[#01214A] max-w-3xl mx-auto leading-tight"
        >
          Join alumni working at the world's most <span className="text-[#F5AF02]">innovative companies</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-slate-600 mt-4 font-medium uppercase tracking-widest text-sm"
        >
          Our Placement Partners
        </motion.p>
      </div>

      <div className="relative flex overflow-hidden mask-fade py-4">
        <motion.div 
          animate={{ x: [0, -2500] }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear"
          }}
          className="flex gap-8 whitespace-nowrap"
        >
          {scrollPartners.map((partner, index) => (
            <motion.div
              key={index}
              whileHover={{ 
                y: -5,
                borderColor: "#F5AF02",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
              }}
              className="inline-flex flex-col items-center justify-center min-w-[240px] h-[140px] bg-white border border-slate-100 rounded-3xl p-6 transition-all group"
            >
              <div className="h-12 w-full flex items-center justify-center mb-3">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="h-full w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                />
              </div>
              <span className="text-[#01214A] font-bold text-sm tracking-tight group-hover:text-[#F5AF02] transition-colors uppercase">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Edge Fading */}
      <style dangerouslySetInnerHTML={{ __html: `
        .mask-fade {
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
      `}} />
    </section>
  );
};

export default PlacementPartners;
