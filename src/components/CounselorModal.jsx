import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Mail, Phone, MessageSquare, Send, Headphones } from 'lucide-react';

const CounselorModal = ({ isOpen, onClose }) => {
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
          className="absolute inset-0 bg-[#01214A]/80 backdrop-blur-md"
        ></motion.div>

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden z-10"
        >
          {/* Header */}
          <div className="bg-[#01214A] p-6 text-center relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#F5AF02]/10 blur-3xl rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#F5AF02]/10 blur-3xl rounded-full -ml-16 -mb-16"></div>
            
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors p-1.5 hover:bg-white/10 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="w-14 h-14 bg-gradient-to-br from-[#F5AF02] to-[#FFD700] rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300">
              <Headphones className="w-8 h-8 text-[#01214A]" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-1">Talk to a Counselor</h3>
            <p className="text-sm text-slate-300">
              Get expert guidance on your AI career path.
            </p>
          </div>

          {/* Content */}
          <div className="p-6">
            {!isSubmitted ? (
              <>
                <form className="space-y-3" onSubmit={handleSubmit}>
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-[#01214A] ml-1">Full Name</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                        <User className="w-4 h-4 text-slate-400 group-focus-within:text-[#F5AF02] transition-colors" />
                      </div>
                      <input
                        type="text"
                        required
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F5AF02] focus:border-transparent transition-all text-slate-700 text-sm font-medium"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-[#01214A] ml-1">Email Address</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                        <Mail className="w-4 h-4 text-slate-400 group-focus-within:text-[#F5AF02] transition-colors" />
                      </div>
                      <input
                        type="email"
                        required
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F5AF02] focus:border-transparent transition-all text-slate-700 text-sm font-medium"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-[#01214A] ml-1">Phone Number</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                        <Phone className="w-4 h-4 text-slate-400 group-focus-within:text-[#F5AF02] transition-colors" />
                      </div>
                      <input
                        type="tel"
                        required
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F5AF02] focus:border-transparent transition-all text-slate-700 text-sm font-medium"
                        placeholder="+91 00000 00000"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-[#01214A] ml-1">Message (Optional)</label>
                    <div className="relative group">
                      <div className="absolute top-2.5 left-0 pl-3.5 flex items-start pointer-events-none">
                        <MessageSquare className="w-4 h-4 text-slate-400 group-focus-within:text-[#F5AF02] transition-colors" />
                      </div>
                      <textarea
                        rows="2"
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F5AF02] focus:border-transparent transition-all text-slate-700 text-sm font-medium resize-none"
                        placeholder="Tell us about your goals..."
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#01214A] hover:bg-[#02336e] text-white rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-[#01214A]/20 flex items-center justify-center gap-3 group mt-2"
                  >
                    Book Free Consultation 
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
                
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-center gap-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm">
                        <img src={`https://i.pravatar.cc/150?u=counselor${i}`} alt="Counselor" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <p className="text-[10px] font-semibold text-slate-500 leading-tight">
                    Our expert counselors are <br /> <span className="text-green-500">Available Online Now</span>
                  </p>
                </div>
              </>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center"
              >
                <div className="w-20 h-20 bg-[#F5AF02]/10 text-[#F5AF02] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold text-[#01214A] mb-3">Consultation Booked!</h4>
                <p className="text-slate-600 mb-8 px-4 leading-relaxed">
                  One of our expert counselors will reach out to you on your provided number within the next 30 minutes.
                </p>
                <button
                  onClick={handleClose}
                  className="px-8 py-3 bg-[#01214A] text-white rounded-xl font-bold hover:bg-[#01214A]/90 transition-all"
                >
                  Close
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CounselorModal;
