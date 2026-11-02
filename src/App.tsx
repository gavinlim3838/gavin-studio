import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { WhyGavinStudio } from './components/WhyGavinStudio';
import { Services } from './components/Services';
import { AudienceMatcher } from './components/AudienceMatcher';
import { ProcessTimeline } from './components/ProcessTimeline';
import { RoiCalculator } from './components/RoiCalculator';
import { CaseStudies } from './components/CaseStudies';
import { ConsultationModal } from './components/ConsultationModal';
import { ArchitectureModal } from './components/ArchitectureModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isArchitectureOpen, setIsArchitectureOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#06030c] text-white flex flex-col font-sans selection:bg-fuchsia-500/30 selection:text-fuchsia-200">
      {/* Top Navigation */}
      <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenConsultation={() => setIsConsultationOpen(true)}
          onOpenArchitecture={() => setIsArchitectureOpen(true)}
        />

        {/* Social Proof Strip */}
        <SocialProof />

        {/* Why Gavin Studio - System Integration */}
        <WhyGavinStudio onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* 4 Core Services */}
        <Services onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* Audience Matcher - Custom Funnel Blueprints */}
        <AudienceMatcher onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* How It Works - 4 Step Process Pipeline */}
        <ProcessTimeline onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* Interactive ROI & Lead Potential Calculator */}
        <RoiCalculator onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* Real Case Studies & Results */}
        <CaseStudies onOpenConsultation={() => setIsConsultationOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />

      {/* Interactive Architecture Walkthrough Modal */}
      <ArchitectureModal
        isOpen={isArchitectureOpen}
        onClose={() => setIsArchitectureOpen(false)}
        onOpenConsultation={() => {
          setIsArchitectureOpen(false);
          setIsConsultationOpen(true);
        }}
      />
    </div>
  );
}
