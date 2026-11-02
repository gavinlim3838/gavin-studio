import React from 'react';
import { CASE_STUDIES } from '../data/content';
import { Quote, ArrowRight, TrendingUp } from 'lucide-react';

interface CaseStudiesProps {
  onOpenConsultation: () => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onOpenConsultation }) => {
  return (
    <section id="case-studies" className="relative py-24 md:py-32 bg-[#0D0B10] overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#351052]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#C084FC] mb-2.5 block">
              VERIFIED CLIENT OUTCOMES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#F2E9DC] tracking-tight">
              Real Impact for Real Businesses
            </h2>
          </div>

          <p className="text-[#D1C6B4] text-sm sm:text-base max-w-md leading-relaxed">
            See how coaches, consultants, and service-based brands turn cold web traffic into booked clients through our automated systems.
          </p>
        </div>

        {/* 3 Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              className="flex flex-col justify-between p-7 rounded-3xl bg-gradient-to-b from-[#1C0D2C]/90 via-[#130720]/90 to-[#0D0B10] border border-[#351052]/80 hover:border-[#A855F7] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(139,47,201,0.6)]"
            >
              <div>
                {/* Metric Header */}
                <div className="p-4 rounded-2xl bg-[#351052]/50 border border-[#8B2FC9]/40 mb-6 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-mono text-[#D1C6B4] uppercase tracking-wider block">
                      {study.metricLabel}
                    </span>
                    <span className="text-2xl font-black font-display text-transparent bg-clip-text bg-gradient-to-r from-[#D070FF] to-[#A855F7] glow-text-purple">
                      {study.metricValue}
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#8B2FC9]/30 border border-[#A855F7]/40 flex items-center justify-center text-[#C084FC]">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-lg font-bold font-display text-[#F2E9DC] mb-4 leading-snug">
                  {study.headline}
                </h3>

                <p className="text-xs sm:text-sm text-[#D1C6B4] italic leading-relaxed mb-6">
                  "{study.quote}"
                </p>
              </div>

              <div>
                {/* Clean unboxed metadata with separators in Electric Purple */}
                <div className="flex items-center gap-1.5 text-[11px] text-[#C084FC] mb-5 font-mono">
                  {study.tags.map((tag, i) => (
                    <React.Fragment key={tag}>
                      <span>{tag}</span>
                      {i < study.tags.length - 1 && <span className="text-[#351052]">·</span>}
                    </React.Fragment>
                  ))}
                </div>

                {/* Author profile */}
                <div className="pt-4 border-t border-[#351052]/60 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#A855F7] to-[#351052] p-0.5">
                    <div className="w-full h-full rounded-full bg-[#180C26] flex items-center justify-center text-xs font-bold text-[#F2E9DC] uppercase">
                      {study.clientName.slice(0, 2)}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#F2E9DC]">{study.clientName}</div>
                    <div className="text-[11px] text-[#A69986]">{study.clientRole}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#200A36] via-[#351052] to-[#200A36] border border-[#8B2FC9]/60 text-center flex flex-col items-center shadow-[0_0_60px_rgba(139,47,201,0.6)]">
          <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-[#F2E9DC] mb-3">
            Ready to Build a Predictable Client Generation Engine?
          </h3>
          <p className="text-[#D1C6B4] text-sm max-w-xl mb-6">
            Join hundreds of coaches, consultants, and business owners who turned their digital presence into their #1 source of revenue.
          </p>
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#8B2FC9] via-[#A855F7] to-[#7B2CBF] hover:from-[#A855F7] hover:to-[#8B2FC9] text-white font-bold text-sm shadow-[0_0_25px_rgba(168,85,247,0.6)] hover:shadow-[0_0_40px_rgba(168,85,247,0.9)] transition-all cursor-pointer"
          >
            <span>Get a free consultation</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};
