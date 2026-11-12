import { useState } from 'react';
import { MotionConfig } from 'framer-motion';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProgrammeForSection } from './components/ProgrammeForSection';
import { CurriculumSection } from './components/CurriculumSection';
import { PedagogySection } from './components/PedagogySection';
import { MentorsSection } from './components/MentorsSection';
import { OutcomesSection } from './components/OutcomesSection';
import { AdmissionsSection } from './components/AdmissionsSection';
import { ReadinessAssessment } from './components/ReadinessAssessment';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  const [readinessNote, setReadinessNote] = useState<string>('');

  const scrollToContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    const nameInput = document.getElementById('enquiry-name');
    if (nameInput instanceof HTMLInputElement) {
      window.setTimeout(() => nameInput.focus({ preventScroll: true }), 450);
    }
  };

  const handleEnquireWithAssessment = (summaryNote: string) => {
    setReadinessNote(summaryNote);
    scrollToContact();
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#F6F2E9] text-[#20201E]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-[#20201E] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#FFFFFF]"
        >
          Skip to main content
        </a>

        <Header onApplyClick={scrollToContact} />

        <main id="main-content">
          <HeroSection />
          <AboutSection />
          <ProgrammeForSection />
          <CurriculumSection />
          <PedagogySection />
          <MentorsSection />
          <OutcomesSection />
          <AdmissionsSection onEnquireClick={scrollToContact} />
          <ReadinessAssessment onEnquireWithAssessment={handleEnquireWithAssessment} />
          <ContactSection prefillReadinessNote={readinessNote} />
        </main>

        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;

