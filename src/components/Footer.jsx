import React from 'react';
import { Globe, MessageCircle, Send, Users, Mail, Phone, MapPin } from 'lucide-react';

const Footer = ({ onOpenChat, onOpenCounselor }) => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-slate-200 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img src="/logo.png" alt="Iconsbase" className="h-10" />
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Empowering the next generation of digital creators, marketers, and developers with AI-first education and real-world agency experience.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-md border-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#F5AF02] hover:text-white transition-all">
                <Globe className="w-4 h-4" />
              </a>
              <button 
                onClick={onOpenChat}
                className="w-10 h-10 rounded-full bg-white shadow-md border-slate-200 flex items-center justify-center text-slate-600 hover:bg-blue-400 hover:text-[#01214A] transition-all"
              >
                <MessageCircle className="w-4 h-4" />
              </button>
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-md border-slate-200 flex items-center justify-center text-slate-600 hover:bg-pink-600 hover:text-[#01214A] transition-all">
                <Send className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-md border-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#E09600] hover:text-[#01214A] transition-all">
                <Users className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#01214A] font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-600 hover:text-[#01214A] text-sm transition-colors">Home</a></li>
              <li><a href="#courses" className="text-slate-600 hover:text-[#01214A] text-sm transition-colors">All Courses</a></li>
              <li><a href="#why-us" className="text-slate-600 hover:text-[#01214A] text-sm transition-colors">Why Iconsbase</a></li>
              <li><a href="#success" className="text-slate-600 hover:text-[#01214A] text-sm transition-colors">Success Stories</a></li>
              <li><button onClick={onOpenCounselor} className="text-slate-600 hover:text-[#01214A] text-sm transition-colors text-left">Talk to a Counselor</button></li>
              <li><a href="#" className="text-slate-600 hover:text-[#01214A] text-sm transition-colors">Meritorious Batch</a></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-[#01214A] font-bold mb-6">Top Courses</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-600 hover:text-[#01214A] text-sm transition-colors">AI Digital Marketing</a></li>
              <li><a href="#" className="text-slate-600 hover:text-[#01214A] text-sm transition-colors">AI Website Development</a></li>
              <li><a href="#" className="text-slate-600 hover:text-[#01214A] text-sm transition-colors">AI Video Creation</a></li>
              <li><a href="#" className="text-slate-600 hover:text-[#01214A] text-sm transition-colors">AI UI/UX Design</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#01214A] font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#F5AF02] flex-shrink-0 mt-0.5" />
                <span className="text-slate-600 text-sm">IconsBase - The AI Institute
                  B1/22 - B, First Floor, Gandhi Path Rd, Chitrakoot, Vaishali Nagar, Jaipur, Rajasthan</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#F5AF02] flex-shrink-0" />
                <span className="text-slate-600 text-sm">+91 7030400090</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#F5AF02] flex-shrink-0" />
                <span className="text-slate-600 text-sm">hello@iconsbase.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#01214A] text-sm">
            © {new Date().getFullYear()} Iconsbase. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            {/* Credit Section */}
            <div className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 border border-white/30 bg-white/15 shadow-sm hover:shadow-md hover:bg-white/20 transition-all duration-300 ml-4">
              <a
                href="https://fabulousmedia.in"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded p-0.5 opacity-90 hover:opacity-100 transition-opacity flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="FabulousMedia"
              >
                <img
                  src="https://play.fabulousmedia.in/sitecredit/images/fabulousmedia.svg"
                  alt="FabulousMedia"
                  className="h-3 w-auto"
                  loading="lazy"
                  width="80"
                  height="12"
                />
              </a>
              <div className="h-3 w-px bg-white/30 transition-colors duration-300"></div>
              <a
                href="https://gocommercially.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded p-0.5 opacity-90 hover:opacity-100 transition-opacity flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="GoCommercially"
              >
                <img
                  src="https://play.fabulousmedia.in/sitecredit/images/gocommercially.svg"
                  alt="GoCommercially"
                  className="h-3 w-auto"
                  loading="lazy"
                  width="80"
                  height="12"
                />
              </a>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-slate-600 hover:text-[#01214A] text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-600 hover:text-[#01214A] text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-slate-600 hover:text-[#01214A] text-sm transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
