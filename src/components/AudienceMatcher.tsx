import React, { useState } from 'react';
import { TARGET_AUDIENCES } from '../data/content';
import { TargetAudience } from '../types';
import { Briefcase, Dumbbell, GraduationCap, UserCheck, Building, CheckCircle2 } from 'lucide-react';

interface AudienceMatcherProps {
  onOpenConsultation: () => void;
}

export const AudienceMatcher: React.FC<AudienceMatcherProps> = ({ onOpenConsultation }) => {
  const [selectedAudience, setSelectedAudience] = useState<TargetAudience>(TARGET_AUDIENCES[0]);

  const getIcon = (id: string) => {
    switch (id) {
      case 'business-coaches':
        return <Briefcase className="w-4 h-4" />;
      case 'fitness-coaches':
        return <Dumbbell className="w-4 h-4" />;
      case 'online-creators':
        return <GraduationCap className="w-4 h-4" />;
      case 'consultants':
        return <UserCheck className="w-4 h-4" />;
      case 'smb-service':
        return <Building className="w-4 h-4" />;
      default:
        return <Briefcase className="w-4 h-4" />;
    }
  };

  return (
    <section id="audience" className="relative py-24 md:py-32 bg-[#0D0B10] overflow-hidden">
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-[#351052]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#C084FC] mb-2.5 block">
            CUSTOMIZED ACQUISITION ARCHITECTURES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#F2E9DC] tracking-tight">
            Engineered For Your Specific Business Model
          </h2>
          <p className="text-[#D1C6B4] text-sm sm:text-base mt-4">
            Select your industry below to see how Gavin Studio customizes your website, sales funnel, and automated follow-up system for maximum conversion.
          </p>
        </div>

        {/* Industry Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {TARGET_AUDIENCES.map((item) => {
            const isSelected = selectedAudience.id === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedAudience(item)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#8B2FC9] to-[#6B21A8] text-white shadow-[0_0_20px_rgba(168,85,247,0.6)] border border-[#A855F7]'
                    : 'bg-[#150D20] text-[#D1C6B4] border border-[#351052]/80 hover:border-[#8B2FC9] hover:text-white'
                }`}
              >
                {getIcon(item.id)}
                <span>{item.name}</span>
              </button>
            );
          })}
        </div>

        {/* Blueprint Card */}
        <div className="relative rounded-3xl p-6 sm:p-10 bg-gradient-to-b from-[#1A0C2B]/95 via-[#130720]/95 to-[#0D0B10] border border-[#8B2FC9]/40 shadow-[0_0_60px_rgba(139,47,201,0.5)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Problem & Solution Blueprint */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-[11px] font-mono text-[#C084FC] uppercase tracking-widest">
                  TAILORED GROWTH BLUEPRINT
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#F2E9DC] mt-1">
                  {selectedAudience.headline}
                </h3>
              </div>

              {/* The Bottleneck vs The Gavin Studio Solution */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/20">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-red-400 block mb-1">
                    The Current Bottleneck
                  </span>
                  <p className="text-xs text-[#D1C6B4] leading-relaxed">
                    {selectedAudience.problem}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#351052]/60 border border-[#8B2FC9]/50 shadow-[0_0_15px_rgba(139,47,201,0.2)]">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#C084FC] block mb-1">
                    The Gavin Studio System
                  </span>
                  <p className="text-xs text-[#F2E9DC] leading-relaxed">
                    {selectedAudience.solution}
                  </p>
                </div>
              </div>

              {/* Funnel Steps */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#D1C6B4] mb-3">
                  Integrated Funnel Pipeline:
                </h4>
                <div className="space-y-2.5">
                  {selectedAudience.keyFunnelSteps.map((step, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 rounded-lg bg-[#140A22]/90 border border-[#351052]/60"
                    >
                      <span className="w-5 h-5 rounded-full bg-[#8B2FC9]/30 border border-[#A855F7]/50 flex items-center justify-center text-[10px] font-mono font-bold text-[#C084FC] shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-xs sm:text-sm text-[#F2E9DC] font-medium">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Outcome summary card & CTA */}
            <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#260E40] to-[#140822] border border-[#8B2FC9]/60 shadow-2xl">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B2FC9]/25 border border-[#A855F7]/40 text-[#C084FC] text-xs font-mono mb-4">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Targeted Transformation</span>
                </div>

                <h4 className="text-xl font-bold font-display text-[#F2E9DC] mb-3">
                  Expected Business Result
                </h4>

                <p className="text-sm sm:text-base text-[#F2E9DC] font-medium leading-relaxed mb-6">
                  "{selectedAudience.expectedResult}"
                </p>

                <div className="p-4 rounded-xl bg-[#0D0B10] border border-[#351052]/80 mb-6">
                  <div className="text-[11px] text-[#D1C6B4] uppercase tracking-wider mb-1">
                    System Inclusions
                  </div>
                  <div className="text-xs text-[#C084FC] font-mono space-y-1">
                    <div>✓ Custom Website / Landing Architecture</div>
                    <div>✓ WhatsApp API Instant Notification Engine</div>
                    <div>✓ Lead Qualification Application Form</div>
                    <div>✓ Integrated CRM Pipeline Automation</div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
