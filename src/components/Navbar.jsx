import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Clock, Phone, Laptop, Users, ChevronDown, MessageCircle, Headphones } from 'lucide-react';
import DemoModal from './DemoModal';

const Navbar = ({ onOpenChat, onOpenCounselor }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#01214A] text-white text-xs md:text-sm py-2 px-4 sm:px-6 lg:px-8 border-b border-white/10 hidden lg:block">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#F5AF02]" />
              <span>Institute Visit Time: 9am-6pm, Mon-Sat</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#F5AF02]" />
              <a href="tel:+917030400090" className="hover:text-[#F5AF02] transition-colors">+91 7030400090</a>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <Laptop className="w-4 h-4 text-[#F5AF02]" />
              <span>Online Batch - 5/Jan</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#F5AF02]" />
              <span>Offline Batch - 7/Jan</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white shadow-sm py-3 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex-shrink-0 flex items-center gap-2">
            <img src="/logo.png" alt="Iconsbase" className="h-10 md:h-12 object-contain" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center justify-center flex-1 gap-8 ml-10">
            <a href="#" className="text-sm font-semibold text-[#01214A] hover:text-[#F5AF02] transition-colors">Home</a>
            <a href="#courses" className="text-sm font-semibold text-[#01214A] hover:text-[#F5AF02] transition-colors">Courses</a>
            <a href="#success" className="text-sm font-semibold text-[#01214A] hover:text-[#F5AF02] transition-colors">Placements</a>
            <a href="#why-us" className="text-sm font-semibold text-[#01214A] hover:text-[#F5AF02] transition-colors">Why Iconsbase</a>
            <a href="#mentors" className="text-sm font-semibold text-[#01214A] hover:text-[#F5AF02] transition-colors">Mentors</a>
            <div className="relative group flex items-center gap-1 cursor-pointer">
              <span className="text-sm font-semibold text-[#01214A] group-hover:text-[#F5AF02] transition-colors">More</span>
              <ChevronDown className="w-4 h-4 text-[#01214A] group-hover:text-[#F5AF02] transition-colors" />
              
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-slate-100 shadow-xl rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform translate-y-2 group-hover:translate-y-0">
                <button 
                  onClick={onOpenChat}
                  className="w-full text-left px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#01214A] transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#F5AF02]" />
                  Live Chat
                </button>
                <button 
                  onClick={onOpenCounselor}
                  className="w-full text-left px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#01214A] transition-colors flex items-center gap-2"
                >
                  <Headphones className="w-4 h-4 text-[#F5AF02]" />
                  Talk to a Counselor
                </button>
                <a href="#success" className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#01214A] transition-colors">Success Stories</a>
                <a href="#mentors" className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#01214A] transition-colors">Mentor</a>
              </div>
            </div>
          </nav>

          {/* CTA Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="hidden sm:block bg-[#F5AF02] text-[#01214A] hover:bg-[#E09600] transition-colors px-6 py-2.5 rounded text-sm font-bold tracking-wide shadow-md"
            >
              BOOK DEMO CLASS
            </button>
            <button
              className="lg:hidden text-[#01214A] hover:text-[#F5AF02]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden shadow-lg"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {/* Top Bar Details in Mobile */}
              <div className="flex flex-col gap-3 pb-4 mb-4 border-b border-slate-100">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Clock className="w-4 h-4 text-[#F5AF02]" />
                  <span>Institute Visit Time: 9am-6pm, Mon-Sat</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Phone className="w-4 h-4 text-[#F5AF02]" />
                  <a href="tel:+917030400090" className="hover:text-[#F5AF02] transition-colors">+91 7030400090</a>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Laptop className="w-4 h-4 text-[#F5AF02]" />
                  <span>Online Batch - 5/Jan</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Users className="w-4 h-4 text-[#F5AF02]" />
                  <span>Offline Batch - 7/Jan</span>
                </div>
              </div>

              {/* Links */}
              <a href="#" className="text-base font-semibold text-[#01214A]" onClick={() => setMobileMenuOpen(false)}>Home</a>
              <a href="#courses" className="text-base font-semibold text-[#01214A]" onClick={() => setMobileMenuOpen(false)}>Courses</a>
              <a href="#success" className="text-base font-semibold text-[#01214A]" onClick={() => setMobileMenuOpen(false)}>Placements</a>
              <a href="#why-us" className="text-base font-semibold text-[#01214A]" onClick={() => setMobileMenuOpen(false)}>Why Iconsbase</a>
              <a href="#mentors" className="text-base font-semibold text-[#01214A]" onClick={() => setMobileMenuOpen(false)}>Mentors</a>
              <button 
                className="text-base font-semibold text-[#01214A] text-left flex items-center gap-2" 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenChat();
                }}
              >
                <MessageCircle className="w-5 h-5 text-[#F5AF02]" />
                Live Chat
              </button>
              
              <button 
                className="text-base font-semibold text-[#01214A] text-left flex items-center gap-2" 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCounselor();
                }}
              >
                <Headphones className="w-5 h-5 text-[#F5AF02]" />
                Talk to a Counselor
              </button>
              
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsModalOpen(true);
                }}
                className="sm:hidden bg-[#F5AF02] text-[#01214A] w-full py-3 rounded font-bold tracking-wide mt-4 shadow-md"
              >
                BOOK DEMO CLASS
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Navbar;
