import React from 'react';
import { ArrowRight, Play, TrendingUp, Users, Zap, CheckCircle2, Sparkles } from 'lucide-react';
import { HeroBackgroundAnimation } from './HeroBackgroundAnimation';

interface HeroProps {
  onOpenConsultation: () => void;
  onOpenArchitecture: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onOpenArchitecture }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Living Interactive Cyber Nebula & Particle Background Animation */}
      <HeroBackgroundAnimation />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center z-10">
        {/* Tagline / Eyebrow in Renaissance Purple */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#351052]/60 border border-[#8B2FC9]/60 text-[#C084FC] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(139,47,201,0.4)]">
          <span className="w-2 h-2 rounded-full bg-[#A855F7] animate-pulse shadow-[0_0_8px_#A855F7]" />
          <span>WEBSITE + MARKETING + AUTOMATION</span>
        </div>

        {/* Headline with crisp white typography for pristine legibility on central black space */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black font-display tracking-tight text-white leading-[1.08] mb-6 max-w-5xl">
          TURN VISITORS INTO <br />
          <span className="bg-gradient-to-r from-[#F0ABFC] via-[#C084FC] to-[#A855F7] bg-clip-text text-transparent inline-block">
            PAYING CLIENTS
          </span>
        </h1>

        {/* Subtitle with high-contrast soft white/ivory */}
        <p className="text-[#E2E8F0] text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-3xl mb-10 mx-auto">
          More than a website. A complete digital growth system that attracts high-intent leads, nurtures them automatically, and converts them into predictable business revenue.
        </p>

        {/* Dual CTAs in Black and Purple Dominance */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14 w-full sm:w-auto">
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm sm:text-base font-bold text-white rounded-full bg-gradient-to-r from-[#8B2FC9] via-[#A855F7] to-[#7B2CBF] hover:from-[#A855F7] hover:to-[#8B2FC9] transition-all duration-300 shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:shadow-[0_0_45px_rgba(168,85,247,0.9)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span>Get a Free Consultation</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>

          <button
            onClick={onOpenArchitecture}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm sm:text-base font-semibold text-[#F2E9DC] hover:text-[#C084FC] rounded-full bg-[#180F24]/90 border border-[#8B2FC9]/40 hover:border-[#A855F7] backdrop-blur-md transition-all duration-300 hover:bg-[#251338] hover:shadow-[0_0_25px_rgba(139,47,201,0.5)] cursor-pointer"
          >
            <div className="w-6 h-6 rounded-full bg-[#8B2FC9]/30 flex items-center justify-center border border-[#A855F7]/40">
              <Play className="w-3 h-3 text-[#C084FC] fill-[#C084FC] ml-0.5" />
            </div>
            <span>See How It Works</span>
          </button>
        </div>

        {/* 4 Feature pillars strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-[#351052]/60 w-full max-w-4xl">
          <div className="flex items-center justify-center sm:justify-start gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#351052]/60 border border-[#8B2FC9]/40 flex items-center justify-center text-[#C084FC] shrink-0 shadow-[0_0_12px_rgba(139,47,201,0.3)]">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-[#F2E9DC] tracking-wide">Attract</div>
              <div className="text-[11px] text-[#D1C6B4] leading-tight">The Right Audience</div>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#351052]/60 border border-[#8B2FC9]/40 flex items-center justify-center text-[#C084FC] shrink-0 shadow-[0_0_12px_rgba(139,47,201,0.3)]">
              <Users className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-[#F2E9DC] tracking-wide">Capture</div>
              <div className="text-[11px] text-[#D1C6B4] leading-tight">Quality Leads</div>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#351052]/60 border border-[#8B2FC9]/40 flex items-center justify-center text-[#C084FC] shrink-0 shadow-[0_0_12px_rgba(139,47,201,0.3)]">
              <Zap className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-[#F2E9DC] tracking-wide">Automate</div>
              <div className="text-[11px] text-[#D1C6B4] leading-tight">Your Follow-Up</div>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#351052]/60 border border-[#8B2FC9]/40 flex items-center justify-center text-[#C084FC] shrink-0 shadow-[0_0_12px_rgba(139,47,201,0.3)]">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-[#F2E9DC] tracking-wide">Convert</div>
              <div className="text-[11px] text-[#D1C6B4] leading-tight">More Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
