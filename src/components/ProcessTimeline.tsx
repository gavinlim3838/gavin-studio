import React, { useState, useEffect, useRef } from 'react';
import { Monitor, Users, Zap, TrendingUp, Sparkles } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/content';

interface ProcessTimelineProps {
  onOpenConsultation?: () => void;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ onOpenConsultation }) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [litCount, setLitCount] = useState<number>(1);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const isDesktop = window.innerWidth >= 1024;

      if (isDesktop) {
        const totalDist = sectionRef.current.offsetHeight - window.innerHeight;
        if (totalDist <= 0) return;

        // Scrolled distance within this pinned section
        const scrolledDist = -rect.top;
        const progress = scrolledDist / totalDist;

        if (rect.top > window.innerHeight * 0.45) {
          // Above the section
          setLitCount(0);
        } else if (progress <= 0.05) {
          // Just entered / scrolled to 1
          setLitCount(1);
          setActiveStep(0);
        } else if (progress < 0.32) {
          // Step 1 lit
          setLitCount(1);
          setActiveStep(0);
        } else if (progress < 0.60) {
          // Step 1 & 2 lit
          setLitCount(2);
          setActiveStep(1);
        } else if (progress < 0.85) {
          // Steps 1, 2 & 3 lit
          setLitCount(3);
          setActiveStep(2);
        } else {
          // All 4 steps lit
          setLitCount(4);
          setActiveStep(3);
        }
      } else {
        // Mobile / Tablet: progressive illumination based on scroll position
        const viewportHeight = window.innerHeight;
        const progress = (viewportHeight * 0.7 - rect.top) / (rect.height || 1);

        if (progress < 0.12) {
          setLitCount(0);
        } else if (progress < 0.35) {
          setLitCount(1);
        } else if (progress < 0.58) {
          setLitCount(2);
        } else if (progress < 0.80) {
          setLitCount(3);
        } else {
          setLitCount(4);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const getStepIcon = (index: number, isLit: boolean) => {
    const iconClass = `w-6 h-6 transition-colors duration-300 ${
      isLit ? 'text-[#C084FC]' : 'text-slate-600'
    }`;
    switch (index) {
      case 0:
        return <Monitor className={iconClass} />;
      case 1:
        return <Users className={iconClass} />;
      case 2:
        return <Zap className={iconClass} />;
      case 3:
        return <TrendingUp className={iconClass} />;
      default:
        return <Monitor className={iconClass} />;
    }
  };

  // Calculate line progress percentage based on litCount
  const getLineProgress = () => {
    switch (litCount) {
      case 0:
        return 0;
      case 1:
        return 12;
      case 2:
        return 38;
      case 3:
        return 65;
      case 4:
        return 100;
      default:
        return 0;
    }
  };

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative lg:h-[260vh] bg-[#0D0B10]"
    >
      {/* Sticky pinning wrapper on desktop so the user comfortably scrolls through 1 -> 2 -> 3 -> 4 */}
      <div className="lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-center py-20 lg:py-0 overflow-hidden">
        {/* Background ambient lighting in Renaissance Purple */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#351052]/35 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          {/* Header split layout */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 lg:mb-16 gap-6">
            <div className="max-w-xl">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#C084FC] mb-2.5 block flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#A855F7] animate-ping" />
                HOW IT WORKS // SCROLL-TRACKED PIPELINE
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#F2E9DC] tracking-tight leading-tight">
                A Simple Process To Get You More Clients
              </h2>
            </div>

            <div className="max-w-md lg:text-right">
              <p className="text-[#D1C6B4] text-sm sm:text-base leading-relaxed mb-2">
                A proven system that turns your online presence into a consistent, predictable source of leads and sales.
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#C084FC] bg-[#351052]/60 border border-[#8B2FC9]/50 px-3 py-1 rounded-full">
                <Sparkles className="w-3.5 h-3.5 text-[#C084FC]" />
                <span>
                  Active Step: <strong className="text-white font-bold">{Math.max(1, litCount)} / 04</strong>
                </span>
              </div>
            </div>
          </div>

          {/* 4 Steps Visual Timeline with scroll progress */}
          <div className="relative">
            {/* Desktop Connecting Line with dynamic scroll progress fill in Electric Purple */}
            <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-[3px] bg-[#1A0B28] rounded-full overflow-hidden z-0 border-y border-[#351052]">
              {/* Progress fill driven strictly by scroll progress */}
              <div
                className="h-full bg-gradient-to-r from-[#351052] via-[#8B2FC9] to-[#C084FC] shadow-[0_0_20px_#A855F7] transition-all duration-400 ease-out"
                style={{
                  width: `${getLineProgress()}%`
                }}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
              {HOW_IT_WORKS_STEPS.map((step, idx) => {
                const isLit = idx < litCount;
                const isSelected = activeStep === idx;

                return (
                  <div
                    key={step.number}
                    onClick={() => setActiveStep(idx)}
                    className={`flex flex-col items-center text-center p-6 rounded-3xl transition-all duration-400 cursor-pointer relative group ${
                      isLit
                        ? 'bg-gradient-to-b from-[#2B0D47]/95 via-[#180829]/95 to-[#0D0B10] border-2 border-[#A855F7] shadow-[0_0_40px_rgba(168,85,247,0.5)] opacity-100 scale-100 translate-y-0'
                        : 'bg-[#12071E]/40 border border-[#351052]/40 opacity-30 scale-95 translate-y-3 hover:opacity-50'
                    }`}
                  >
                    {/* Glowing Flare Aura when actively lit */}
                    {isLit && (
                      <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-[#8B2FC9]/30 to-[#351052]/60 blur-lg opacity-80 pointer-events-none" />
                    )}

                    {/* Icon Card with glowing border */}
                    <div
                      className={`relative w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-400 ${
                        isLit
                          ? 'bg-gradient-to-b from-[#6B21A8] to-[#25093D] border-2 border-[#A855F7] shadow-[0_0_25px_rgba(168,85,247,0.7)] scale-105'
                          : 'bg-[#170924] border border-[#351052]/50 shadow-none scale-95'
                      }`}
                    >
                      {getStepIcon(idx, isLit)}

                      {/* Step indicator dot at top-right of icon card */}
                      <span
                        className={`absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full border-2 border-[#0D0B10] flex items-center justify-center transition-all duration-300 ${
                          isLit
                            ? 'bg-[#C084FC] shadow-[0_0_10px_#A855F7]'
                            : 'bg-[#1C0D2A] border-[#351052]'
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                            isLit ? 'bg-[#0D0B10]' : 'bg-[#351052]'
                          }`}
                        />
                      </span>
                    </div>

                    {/* Step Number in mono with Electric Purple lit state */}
                    <div
                      className={`text-sm font-mono font-black tracking-widest uppercase mb-1 transition-all duration-300 ${
                        isLit
                          ? 'text-[#C084FC] glow-text-purple scale-105 drop-shadow-[0_0_10px_#A855F7]'
                          : 'text-[#4A3258]'
                      }`}
                    >
                      {step.number}
                    </div>

                    {/* Step Title in Warm Ivory */}
                    <h3
                      className={`text-base sm:text-lg font-bold font-display mb-2 transition-colors duration-300 ${
                        isLit ? 'text-[#F2E9DC]' : 'text-[#7D6B88]'
                      }`}
                    >
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p
                      className={`text-xs sm:text-sm leading-relaxed mb-3 transition-colors duration-300 ${
                        isLit ? 'text-[#D1C6B4]' : 'text-[#5E4C69]'
                      }`}
                    >
                      {step.description}
                    </p>

                    {/* Detail expand on active */}
                    {isSelected && isLit && (
                      <div className="mt-2 pt-3 border-t border-[#351052]/60 text-[11px] text-[#C084FC] leading-normal animate-fadeIn">
                        {step.detail}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


