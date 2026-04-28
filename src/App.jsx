import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChoose from './components/WhyChoose';
import LearningPath from './components/LearningPath';
import QuizSection from './components/QuizSection';
import MeritoriousBatch from './components/MeritoriousBatch';
import ConceptAgencyModel from './components/ConceptAgencyModel';
import WhoCanJoin from './components/WhoCanJoin';
import ToolsMastered from './components/ToolsMastered';
import StatsSection from './components/StatsSection';
import SuccessStories from './components/SuccessStories';
import Testimonials from './components/Testimonials';
import WhatYouGet from './components/WhatYouGet';
import MentorSection from './components/MentorSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import Chatbox from './components/Chatbox';
import ApplyNowModal from './components/ApplyNowModal';
import CounselorModal from './components/CounselorModal';
import QuizModal from './components/QuizModal';

function App() {
  const [isChatOpen, setIsChatOpen] = React.useState(false);
  const [isApplyModalOpen, setIsApplyModalOpen] = React.useState(false);
  const [isCounselorModalOpen, setIsCounselorModalOpen] = React.useState(false);
  const [isQuizModalOpen, setIsQuizModalOpen] = React.useState(false);

  return (
    <div className="bg-white text-[#01214A] min-h-screen font-sans">
      <Navbar onOpenChat={() => setIsChatOpen(true)} onOpenCounselor={() => setIsCounselorModalOpen(true)} />
      <main>
        <Hero onOpenApply={() => setIsApplyModalOpen(true)} />
        <WhyChoose />
        <LearningPath />
        <QuizSection 
          onOpenCounselor={() => setIsCounselorModalOpen(true)} 
          onOpenQuiz={() => setIsQuizModalOpen(true)}
        />
        <MeritoriousBatch />
        <ConceptAgencyModel />
        <WhoCanJoin />
        <ToolsMastered />
        <StatsSection />
        <SuccessStories />
        <Testimonials />
        <WhatYouGet />
        <MentorSection />
        <FinalCTA 
          onOpenApply={() => setIsApplyModalOpen(true)} 
          onOpenCounselor={() => setIsCounselorModalOpen(true)} 
        />
      </main>
      <Footer onOpenChat={() => setIsChatOpen(true)} onOpenCounselor={() => setIsCounselorModalOpen(true)} />
      <Chatbox isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
      <ApplyNowModal isOpen={isApplyModalOpen} onClose={() => setIsApplyModalOpen(false)} />
      <CounselorModal isOpen={isCounselorModalOpen} onClose={() => setIsCounselorModalOpen(false)} />
      <QuizModal isOpen={isQuizModalOpen} onClose={() => setIsQuizModalOpen(false)} />
    </div>
  );
}

export default App;
