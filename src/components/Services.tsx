import React, { useState } from 'react';
import { Filter, Monitor, Layers, Settings, ArrowRight, ArrowUpRight, Check, X } from 'lucide-react';
import { CORE_SERVICES } from '../data/content';
import { ServiceItem } from '../types';

interface ServicesProps {
  onOpenConsultation: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenConsultation }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'filter':
        return <Filter className="w-6 h-6 text-[#C084FC]" />;
      case 'monitor':
        return <Monitor className="w-6 h-6 text-[#C084FC]" />;
      case 'layers':
        return <Layers className="w-6 h-6 text-[#C084FC]" />;
      case 'settings':
        return <Settings className="w-6 h-6 text-[#C084FC]" />;
      default:
        return <Monitor className="w-6 h-6 text-[#C084FC]" />;
    }
  };

  return (
    <section id="services" className="relative py-24 md:py-32 bg-[#0D0B10] overflow-hidden">
      {/* Background ambient lighting in Renaissance Purple */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-[#351052]/40 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#6B21A8]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Explore All link */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#C084FC] mb-2.5 block">
              OUR SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#F2E9DC] tracking-tight">
              Solutions To Grow Your Business Online
            </h2>
          </div>

          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#C084FC] hover:text-white transition-colors group cursor-pointer shrink-0"
          >
            <span>Get a free consultation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-[#C084FC]" />
          </button>
        </div>

        {/* 4 Cards Grid with Renaissance Purple & Obsidian Black Dominance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_SERVICES.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="group relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between min-h-[340px] bg-gradient-to-b from-[#280D42] via-[#160A26] to-[#0D0B10] border border-[#8B2FC9]/30 hover:border-[#A855F7] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_45px_-8px_rgba(139,47,201,0.8)] cursor-pointer overflow-hidden"
            >
              {/* Subtle glowing purple energetic wave graphic in background */}
              <div className="absolute -right-8 -bottom-8 w-44 h-44 rounded-full bg-gradient-to-tr from-[#351052] to-[#8B2FC9]/20 blur-2xl group-hover:bg-[#8B2FC9]/30 transition-all duration-500 pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8B2FC9]/60 to-transparent group-hover:via-[#C084FC] transition-all" />

              <div>
                {/* Outlined Icon Container */}
                <div className="w-12 h-12 rounded-2xl bg-[#351052]/80 border border-[#8B2FC9]/50 flex items-center justify-center mb-8 group-hover:border-[#A855F7] group-hover:bg-[#4A1672] transition-colors shadow-[0_0_15px_rgba(139,47,201,0.3)]">
                  {getServiceIcon(service.iconName)}
                </div>

                {/* Service Title */}
                <h3 className="text-xl sm:text-2xl font-bold font-display text-[#F2E9DC] mb-3 group-hover:text-[#C084FC] transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-[#D1C6B4] text-xs sm:text-sm leading-relaxed mb-4">
                  {service.shortDesc}
                </p>
              </div>

              {/* Bottom Row with Circular Action Arrow */}
              <div className="pt-6 border-t border-[#351052]/60 flex items-center justify-between mt-auto">
                <span className="text-[11px] font-mono text-[#C084FC] font-bold">
                  {service.metrics}
                </span>

                <div className="w-10 h-10 rounded-full border border-[#8B2FC9]/50 flex items-center justify-center text-[#C084FC] group-hover:border-[#A855F7] group-hover:bg-[#8B2FC9] group-hover:text-white transition-all duration-300 shadow-[0_0_12px_rgba(139,47,201,0.3)] group-hover:shadow-[0_0_20px_rgba(168,85,247,0.7)]">
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Service Detail Modal / Drawer */}
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
            <div className="relative w-full max-w-2xl rounded-3xl bg-gradient-to-b from-[#1C0E2D] via-[#140822] to-[#0D0B10] border border-[#8B2FC9]/50 p-6 sm:p-8 shadow-[0_0_70px_rgba(139,47,201,0.8)]">
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-[#D1C6B4] hover:text-[#C084FC] hover:bg-[#351052]/40 transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-[#351052] border border-[#8B2FC9]/50 flex items-center justify-center text-[#C084FC]">
                  {getServiceIcon(selectedService.iconName)}
                </div>
                <div>
                  <span className="text-xs font-mono text-[#C084FC] uppercase tracking-widest">
                    SERVICE ARCHITECTURE // {selectedService.number}
                  </span>
                  <h3 className="text-2xl font-bold text-[#F2E9DC] font-display">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-[#D1C6B4] mb-6 leading-relaxed">
                {selectedService.shortDesc}
              </p>

              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#C084FC] mb-3">
                  Key Conversion Capabilities
                </h4>
                <div className="space-y-2.5">
                  {selectedService.detailedPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F2E9DC]">
                      <div className="w-4 h-4 rounded-full bg-[#8B2FC9]/30 border border-[#A855F7]/40 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-[#C084FC]" />
                      </div>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#C084FC] mb-3">
                  What Gavin Studio Delivers
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedService.deliverables.map((item, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 rounded-lg bg-[#351052]/60 border border-[#8B2FC9]/40 text-xs text-[#F2E9DC]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#351052]/60">
                <div className="text-left w-full sm:w-auto">
                  <div className="text-[11px] text-[#D1C6B4] uppercase tracking-wider">Benchmark Outcome</div>
                  <div className="text-sm font-bold text-[#C084FC] font-mono">
                    {selectedService.metrics}
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSelectedService(null);
                    onOpenConsultation();
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#8B2FC9] via-[#A855F7] to-[#7B2CBF] text-white text-sm font-bold shadow-[0_0_25px_rgba(168,85,247,0.6)] hover:shadow-[0_0_35px_rgba(168,85,247,0.9)] transition-all cursor-pointer"
                >
                  <span>Get a free consultation</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
