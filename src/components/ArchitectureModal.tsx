import React, { useState } from 'react';
import { X, ArrowRight, CheckCircle2, ShieldCheck, Zap, MessageSquare, Monitor, Users, CreditCard } from 'lucide-react';

interface ArchitectureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const ArchitectureModal: React.FC<ArchitectureModalProps> = ({
  isOpen,
  onClose,
  onOpenConsultation
}) => {
  const [currentStage, setCurrentStage] = useState(0);

  if (!isOpen) return null;

  const stages = [
    {
      step: '01',
      title: 'Traffic & Hook Ingestion',
      subtitle: 'Attract the Right Audience',
      icon: Users,
      desc: 'Whether through paid ads (Meta, Google), organic content, or referrals, visitors land on a dedicated, focused page with zero fluff or distraction.',
      deliverable: 'Psychological Hook & Compelling Offer Architecture'
    },
    {
      step: '02',
      title: 'High-Authority Conversion Surface',
      subtitle: 'Bespoke Website or Landing Page',
      icon: Monitor,
      desc: 'Engineered with the Gavin Studio aesthetic: ultra-fast loading, clear visual hierarchy, authentic proof, and seamless mobile usability that builds immediate trust.',
      deliverable: 'High-Converting Responsive UI/UX'
    },
    {
      step: '03',
      title: 'Micro-Commitment Lead Capture',
      subtitle: 'Smart Qualification Questionnaire',
      icon: CheckCircle2,
      desc: 'Instead of dry static contact forms, prospects complete interactive diagnostics, calculators, or value-packed audits that qualify their budget and need.',
      deliverable: 'High-Intent Lead Qualification Filter'
    },
    {
      step: '04',
      title: 'Instant Multi-Channel Automation',
      subtitle: 'WhatsApp + Email Follow-Up in < 60s',
      icon: MessageSquare,
      desc: 'The moment a form submits, the system triggers personalized WhatsApp messages and email sequences. No cold delays; hot leads receive immediate attention.',
      deliverable: 'Automated CRM & 24/7 Response Engine'
    },
    {
      step: '05',
      title: 'Pre-Sold Client Call & Conversion',
      subtitle: 'Paying Clients with Zero DM Fatigue',
      icon: CreditCard,
      desc: 'The prospect arrives at your strategy session pre-educated and pre-sold on your value proposition, closing at 2-3x typical conversion rates.',
      deliverable: 'Predictable Pipeline & High-Ticket Retainers'
    }
  ];

  const activeStageData = stages[currentStage];
  const ActiveIcon = activeStageData.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl rounded-3xl bg-gradient-to-b from-[#1E0C30] via-[#140822] to-[#0D0B10] border border-[#8B2FC9]/50 p-6 sm:p-8 shadow-[0_0_80px_rgba(139,47,201,0.8)] overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#D1C6B4] hover:text-[#C084FC] hover:bg-[#351052]/40 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <span className="text-xs font-mono font-bold text-[#C084FC] uppercase tracking-widest block mb-1">
          SYSTEM WALKTHROUGH
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#F2E9DC] mb-2">
          How Gavin Studio Turns Visitors Into Paying Clients
        </h3>
        <p className="text-xs sm:text-sm text-[#D1C6B4] mb-6">
          Click through the 5 stages of our integrated Design + Marketing + Automation pipeline:
        </p>

        {/* Step indicator pills */}
        <div className="grid grid-cols-5 gap-2 mb-8">
          {stages.map((stage, idx) => (
            <button
              key={stage.step}
              onClick={() => setCurrentStage(idx)}
              className={`py-2 px-1 text-center rounded-xl border text-xs font-mono transition-all cursor-pointer ${
                currentStage === idx
                  ? 'bg-[#8B2FC9] border-[#A855F7] text-white shadow-[0_0_15px_rgba(168,85,247,0.5)] font-bold'
                  : 'bg-[#140A22] border-[#351052]/80 text-[#D1C6B4] hover:border-[#8B2FC9]'
              }`}
            >
              <span className="block font-bold">Stage {stage.step}</span>
              <span className="hidden sm:inline text-[10px] text-[#D1C6B4] truncate">
                {stage.subtitle.split(' ')[0]}
              </span>
            </button>
          ))}
        </div>

        {/* Stage Content Card */}
        <div className="p-6 rounded-2xl bg-[#150926] border border-[#351052] shadow-xl mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-[#351052] border border-[#8B2FC9]/60 flex items-center justify-center text-[#C084FC] shrink-0 shadow-[0_0_20px_rgba(139,47,201,0.5)]">
            <ActiveIcon className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-[#C084FC] font-bold">
                STAGE {activeStageData.step} // {activeStageData.subtitle}
              </span>
            </div>
            <h4 className="text-xl font-bold text-[#F2E9DC] font-display">
              {activeStageData.title}
            </h4>
            <p className="text-xs sm:text-sm text-[#D1C6B4] leading-relaxed">
              {activeStageData.desc}
            </p>
            <div className="pt-2 text-xs font-mono text-[#C084FC]">
              Deliverable: <span className="text-[#F2E9DC] font-semibold">{activeStageData.deliverable}</span>
            </div>
          </div>
        </div>

        {/* Navigation & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-[#351052]/60">
          <div className="flex gap-2">
            <button
              disabled={currentStage === 0}
              onClick={() => setCurrentStage((prev) => Math.max(0, prev - 1))}
              className="px-4 py-2 rounded-lg bg-[#140A22] border border-[#351052] text-xs font-semibold text-[#D1C6B4] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#351052]/50 hover:text-white cursor-pointer"
            >
              Previous
            </button>
            <button
              disabled={currentStage === stages.length - 1}
              onClick={() => setCurrentStage((prev) => Math.min(stages.length - 1, prev + 1))}
              className="px-4 py-2 rounded-lg bg-[#140A22] border border-[#351052] text-xs font-semibold text-[#D1C6B4] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#351052]/50 hover:text-white cursor-pointer"
            >
              Next Stage →
            </button>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenConsultation();
            }}
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#8B2FC9] via-[#A855F7] to-[#7B2CBF] hover:from-[#A855F7] hover:to-[#8B2FC9] text-white text-xs sm:text-sm font-bold shadow-[0_0_25px_rgba(168,85,247,0.6)] hover:shadow-[0_0_35px_rgba(168,85,247,0.9)] transition-all cursor-pointer"
          >
            Deploy This System For My Business
          </button>
        </div>
      </div>
    </div>
  );
};
