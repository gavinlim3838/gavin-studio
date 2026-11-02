import React, { useState } from 'react';
import { Monitor, TrendingUp, Cpu, CheckCircle2 } from 'lucide-react';

interface WhyGavinStudioProps {
  onOpenConsultation: () => void;
}

export const WhyGavinStudio: React.FC<WhyGavinStudioProps> = ({ onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState<'design' | 'marketing' | 'automation'>('design');

  const tabs = [
    {
      id: 'design' as const,
      title: 'Strategic Design',
      icon: Monitor,
      headline: 'Psychological Aesthetics That Command High Ticket Authority',
      description:
        'Most websites look pretty but fail to sell. We engineer bespoke design systems that capture immediate respect, eliminate skepticism, and subtly guide the user gaze directly toward high-value conversion actions.',
      bullets: [
        'Custom modern layout with micro-animations and zero template bloat',
        'Mobile-first responsive architecture loading in under 1.2 seconds',
        'Visual hierarchy proven to keep attention and slash bounce rates'
      ],
      metric: '92% of first impressions relate to visual authority and speed'
    },
    {
      id: 'marketing' as const,
      title: 'Marketing Strategy',
      icon: TrendingUp,
      headline: 'Engineered Client Acquisition & High-Converting Value Journeys',
      description:
        'Traffic without a conversion mechanism is money set on fire. We structure your offers, lead magnets, and customer journey so prospects understand your unique mechanism and qualify themselves before ever booking a call.',
      bullets: [
        'Conversion copywriting that directly addresses client pain points',
        'Tiered lead magnets (audits, masterclasses, assessment tools)',
        'Strategic qualification surveys that filter out tire-kickers'
      ],
      metric: '3.8x increase in qualified consultation bookings vs traditional contact forms'
    },
    {
      id: 'automation' as const,
      title: 'Automation System',
      icon: Cpu,
      headline: '24/7 Multi-Channel Follow-Up That Never Sleeps or Forgets',
      description:
        'Leads go cold within 5 minutes. Our automated infrastructure connects WhatsApp Business API, personalized email drip campaigns, and CRM pipelines so prospective buyers receive instant, tailored responses around the clock.',
      bullets: [
        'Instant WhatsApp notifications and interactive message flows',
        'Behavioral email nurturing sequences tailored to prospect actions',
        'Automated calendar sync and 3-step reminder sequence cutting no-shows by 70%'
      ],
      metric: '< 60 second average automated response time to every inbound lead'
    }
  ];

  const currentTab = tabs.find((t) => t.id === activeTab)!;

  return (
    <section id="why-gavin" className="relative py-24 md:py-32 overflow-hidden bg-[#0D0B10]">
      {/* Background radial atmosphere in Renaissance Purple */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#351052]/25 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl p-1 bg-gradient-to-tr from-[#351052] via-[#8B2FC9]/40 to-transparent shadow-[0_0_50px_rgba(139,47,201,0.5)]">
              {/* Workspace Studio image */}
              <div className="relative rounded-[22px] overflow-hidden aspect-[16/10] bg-[#14101A]">
                <img
                  src="/src/assets/images/agency_strategy_setup_1793441097212.jpg"
                  alt="Gavin Studio Growth & Automation Laboratory"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B10] via-[#351052]/30 to-transparent" />

                {/* Floating telemetry card */}
                <div className="absolute top-4 left-4 p-3 rounded-xl bg-[#140D20]/95 border border-[#8B2FC9]/50 backdrop-blur-md">
                  <div className="text-[11px] font-mono text-[#C084FC] uppercase tracking-widest">
                    SYSTEM INTEGRATION
                  </div>
                  <div className="text-xs font-semibold text-[#F2E9DC] mt-0.5">
                    Design + Marketing + Automation
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#140D20]/95 border border-[#351052]/80 backdrop-blur-md flex items-center justify-between">
                  <div>
                    <div className="text-[11px] text-[#D1C6B4]">Total System Synergy</div>
                    <div className="text-xs font-bold text-[#F2E9DC]">Full Client Conversion Pipeline</div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#8B2FC9]/30 border border-[#A855F7]/50 text-[11px] font-mono font-bold text-[#C084FC]">
                    Active 24/7
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Interactive Tabs */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#C084FC] mb-2.5">
              WHY GAVIN STUDIO
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#F2E9DC] tracking-tight leading-tight mb-5">
              Design, Marketing And Automation In One System
            </h2>
            <p className="text-[#D1C6B4] text-sm sm:text-base leading-relaxed mb-8">
              We help coaches, consultants and service-based businesses build a strong online presence, generate qualified leads and nurture them automatically until they become paying clients.
            </p>

            {/* 3 Selector buttons matching reference visual layout */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full mb-8">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'bg-gradient-to-r from-[#6B21A8] to-[#351052] border-[#A855F7] shadow-[0_0_25px_rgba(168,85,247,0.4)] text-white'
                        : 'bg-[#140D20]/80 border-[#351052]/60 text-[#D1C6B4] hover:border-[#8B2FC9]/60 hover:bg-[#1E112E]'
                    }`}
                  >
                    <div
                      className={`p-2 rounded-lg shrink-0 ${
                        isActive
                          ? 'bg-[#A855F7]/30 text-[#C084FC] border border-[#A855F7]/60'
                          : 'bg-[#351052]/50 text-[#D1C6B4] border border-[#351052]/40'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold whitespace-nowrap">{tab.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Tab Detail Display */}
            <div className="w-full p-6 rounded-2xl bg-[#140D20]/90 border border-[#351052] backdrop-blur-md shadow-xl mb-6">
              <h3 className="text-lg font-bold text-[#F2E9DC] mb-2 font-display">
                {currentTab.headline}
              </h3>
              <p className="text-xs sm:text-sm text-[#D1C6B4] leading-relaxed mb-4">
                {currentTab.description}
              </p>

              <div className="space-y-2 mb-5">
                {currentTab.bullets.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#F2E9DC]">
                    <CheckCircle2 className="w-4 h-4 text-[#C084FC] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-[#351052]/60 flex items-center justify-between text-xs font-mono text-[#D1C6B4]">
                <span>IMPACT:</span>
                <span className="text-[#C084FC] font-bold">{currentTab.metric}</span>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};
