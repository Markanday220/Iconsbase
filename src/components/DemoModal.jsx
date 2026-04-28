import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Mail, Phone, BookOpen, Send } from 'lucide-react';

const DemoModal = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="absolute inset-0 bg-[#01214A]/80 backdrop-blur-sm"
        ></motion.div>

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-y-auto max-h-[95vh] z-10"
        >
          {/* Header */}
          <div className="bg-[#01214A] p-4 md:p-5 text-center relative">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-2xl font-bold text-white mb-2">Book Your Free Demo</h3>
            <p className="text-sm text-slate-300">
              Fill out the form below and our career counselor will contact you shortly.
            </p>
          </div>

          {/* Content */}
          <div className="p-5 sm:p-6">
            {!isSubmitted ? (
              <>
                <form className="space-y-3" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-semibold text-[#01214A] mb-1">Full Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="w-5 h-5 text-slate-400" />
                      </div>
                      <input
                        type="text"
                        required
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F5AF02] focus:border-transparent transition-all text-slate-700"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#01214A] mb-1">Email Address</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="w-5 h-5 text-slate-400" />
                      </div>
                      <input
                        type="email"
                        required
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F5AF02] focus:border-transparent transition-all text-slate-700"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#01214A] mb-1">Phone Number</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="w-5 h-5 text-slate-400" />
                      </div>
                      <input
                        type="tel"
                        required
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F5AF02] focus:border-transparent transition-all text-slate-700"
                        placeholder="+91 00000 00000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#01214A] mb-1">Interested Course</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <BookOpen className="w-5 h-5 text-slate-400" />
                      </div>
                      <select
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F5AF02] focus:border-transparent transition-all text-slate-700 appearance-none"
                        defaultValue=""
                      >
                        <option value="" disabled>Select a course</option>
                        <option value="marketing">AI Digital Marketing</option>
                        <option value="web">AI Website Development</option>
                        <option value="video">AI Video Creation</option>
                        <option value="design">AI UI/UX Design</option>
                        <option value="unsure">Not sure yet</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-slate-400">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 mt-2 bg-[#F5AF02] hover:bg-[#E09600] text-[#01214A] rounded-lg font-bold text-lg transition-all shadow-[0_4px_14px_0_rgba(245,175,2,0.39)] flex items-center justify-center gap-2"
                  >
                    Submit Details <Send className="w-5 h-5" />
                  </button>
                </form>
                <p className="text-xs text-center text-slate-500 mt-3">
                  Your information is 100% secure. We don't share your data.
                </p>
              </>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center"
              >
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-[#01214A] mb-2">Demo Booked!</h4>
                <p className="text-sm text-slate-600 mb-8 leading-relaxed">
                  Great! Our team will call you shortly to schedule your free demo class at your preferred time.
                </p>
                <button
                  onClick={handleClose}
                  className="w-full py-3 bg-[#01214A] text-white rounded-lg font-bold hover:bg-[#01214A]/90 transition-all"
                >
                  Done
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default DemoModal;
