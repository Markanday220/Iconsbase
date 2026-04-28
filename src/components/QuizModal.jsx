import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, ChevronLeft, CheckCircle2, Sparkles, Brain, Rocket, Target } from 'lucide-react';

const questions = [
  {
    id: 1,
    question: "What is your current background?",
    options: [
      { label: "College Student / Fresh Graduate", value: "student", icon: "🎓" },
      { label: "Working Professional", value: "pro", icon: "💼" },
      { label: "Business Owner / Entrepreneur", value: "business", icon: "🚀" },
      { label: "Freelancer / Creative", value: "freelance", icon: "🎨" }
    ]
  },
  {
    id: 2,
    question: "Your experience with AI tools?",
    options: [
      { label: "Complete Beginner", value: "beginner", icon: "🌱" },
      { label: "I use ChatGPT/AI occasionally", value: "intermediate", icon: "⛅" },
      { label: "Comfortable with multiple AI tools", value: "advanced", icon: "⚡" },
      { label: "AI is already part of my workflow", value: "expert", icon: "🤖" }
    ]
  },
  {
    id: 3,
    question: "What excites you the most?",
    options: [
      { label: "Automating Marketing & Sales", value: "marketing", icon: "📈" },
      { label: "Building Websites & Apps", value: "web", icon: "💻" },
      { label: "Creating AI Visuals & UI/UX", value: "design", icon: "✨" },
      { label: "Video Editing & Storytelling", value: "video", icon: "🎬" }
    ]
  },
  {
    id: 4,
    question: "Your primary career goal?",
    options: [
      { label: "Secure a high-paying job", value: "job", icon: "💰" },
      { label: "Start my own AI Agency", value: "agency", icon: "🏢" },
      { label: "Scale my existing business", value: "scale", icon: "📊" },
      { label: "Become a top-rated freelancer", value: "freelance_goal", icon: "🌍" }
    ]
  }
];

const QuizModal = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isFinished, setIsFinished] = useState(false);
  const [isCapturing, setIsCapturing] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleOptionSelect = (questionId, value) => {
    setAnswers({ ...answers, [questionId]: value });
    if (currentStep < questions.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    } else {
      setTimeout(() => setIsCapturing(true), 300);
    }
  };

  const handleCaptureSubmit = (e) => {
    e.preventDefault();
    setIsCapturing(false);
    setIsFinished(true);
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setIsFinished(false);
    setIsCapturing(false);
    setIsSubmitted(false);
  };

  const getRecommendation = () => {
    const interest = answers[3];
    if (interest === "marketing") return {
      title: "AI Digital Marketing Expert",
      desc: "You have a natural flair for strategy. Our AI Marketing track will help you 10x your campaign results.",
      icon: <Target className="w-12 h-12 text-[#F5AF02]" />
    };
    if (interest === "web") return {
      title: "AI Full-Stack Developer",
      desc: "Your logical mind is perfect for AI-driven development. Build complex apps in record time.",
      icon: <Brain className="w-12 h-12 text-[#F5AF02]" />
    };
    if (interest === "design") return {
      title: "AI Product Designer",
      desc: "Combine your creativity with AI to design world-class interfaces and brand identities.",
      icon: <Sparkles className="w-12 h-12 text-[#F5AF02]" />
    };
    return {
      title: "AI Content & Video Creator",
      desc: "Master the art of AI storytelling. Create viral content and high-end video productions.",
      icon: <Rocket className="w-12 h-12 text-[#F5AF02]" />
    };
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#01214A]/90 backdrop-blur-md"
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl overflow-hidden z-10"
        >
          {/* Progress Bar */}
          {!isFinished && (
            <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-100">
              <motion.div 
                className="h-full bg-[#F5AF02]"
                initial={{ width: 0 }}
                animate={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
              ></motion.div>
            </div>
          )}

          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-slate-400 hover:text-[#01214A] transition-colors z-20"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="p-8 md:p-12">
            {!isFinished ? (
              <div className="min-h-[400px] flex flex-col">
                <div className="mb-10">
                  <span className="text-[#F5AF02] font-bold text-sm uppercase tracking-widest mb-2 block">
                    Question {currentStep + 1} of {questions.length}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#01214A]">
                    {questions[currentStep].question}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
                  {questions[currentStep].options.map((option) => (
                    <motion.button
                      key={option.value}
                      whileHover={{ scale: 1.02, borderColor: "#F5AF02" }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleOptionSelect(questions[currentStep].id, option.value)}
                      className={`p-6 rounded-2xl border-2 text-left transition-all flex items-center gap-4 ${
                        answers[questions[currentStep].id] === option.value
                          ? "border-[#F5AF02] bg-[#F5AF02]/5 shadow-md"
                          : "border-slate-100 hover:border-slate-200 bg-slate-50"
                      }`}
                    >
                      <span className="text-3xl">{option.icon}</span>
                      <span className="font-bold text-[#01214A] leading-tight">{option.label}</span>
                      {answers[questions[currentStep].id] === option.value && (
                        <CheckCircle2 className="w-5 h-5 text-[#F5AF02] ml-auto" />
                      )}
                    </motion.button>
                  ))}
                </div>

                <div className="mt-10 flex justify-between items-center">
                  <button
                    disabled={currentStep === 0}
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className={`flex items-center gap-2 font-bold transition-colors ${
                      currentStep === 0 ? "text-slate-300" : "text-slate-500 hover:text-[#01214A]"
                    }`}
                  >
                    <ChevronLeft className="w-5 h-5" /> Back
                  </button>
                  <div className="flex gap-2">
                    {questions.map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-2 h-2 rounded-full transition-all ${
                          i === currentStep ? "w-6 bg-[#F5AF02]" : "bg-slate-200"
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            ) : isCapturing ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col"
              >
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-[#F5AF02]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-[#F5AF02]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#01214A] mb-2">Analyzing Your Profile...</h3>
                  <p className="text-slate-600">Enter your details to reveal your personalized AI career path and get the detailed syllabus.</p>
                </div>

                <form className="space-y-4 max-w-md mx-auto w-full" onSubmit={handleCaptureSubmit}>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#F5AF02] outline-none transition-all"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#F5AF02] outline-none transition-all"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number"
                    className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#F5AF02] outline-none transition-all"
                  />
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#01214A] text-white rounded-xl font-bold text-lg hover:bg-[#02336e] transition-all shadow-lg flex items-center justify-center gap-2 group"
                  >
                    Reveal My Result <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-10"
              >
                <div className="w-24 h-24 bg-[#F5AF02]/10 rounded-3xl flex items-center justify-center mx-auto mb-8">
                  {getRecommendation().icon}
                </div>
                <h3 className="text-sm font-bold text-[#F5AF02] uppercase tracking-[0.2em] mb-4">Your Result is Ready!</h3>
                <h2 className="text-3xl md:text-4xl font-bold text-[#01214A] mb-4">
                  {getRecommendation().title}
                </h2>
                <p className="text-slate-600 text-lg mb-10 max-w-md mx-auto leading-relaxed">
                  {getRecommendation().desc}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => {
                      onClose();
                      // We could trigger ApplyNowModal here if we had access to it
                    }}
                    className="px-10 py-4 bg-[#01214A] text-white rounded-2xl font-bold text-lg hover:bg-[#02336e] transition-all shadow-xl"
                  >
                    Get Detailed Syllabus
                  </button>
                  <button 
                    onClick={resetQuiz}
                    className="px-10 py-4 bg-slate-100 text-[#01214A] rounded-2xl font-bold text-lg hover:bg-slate-200 transition-all"
                  >
                    Retake Quiz
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default QuizModal;
