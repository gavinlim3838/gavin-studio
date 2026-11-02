import React, { useState } from 'react';
import { Calculator, Sparkles, TrendingUp } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenConsultation?: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = () => {
  const [visitors, setVisitors] = useState<number>(3000);
  const [dealValue, setDealValue] = useState<number>(2000);

  // Standard generic website baseline: 1.2% opt-in, only 20% converted after slow manual follow-up
  const standardLeads = Math.round(visitors * 0.012);
  const standardClients = Math.max(1, Math.round(standardLeads * 0.15));
  const standardRevenue = standardClients * dealValue;

  // Gavin Studio System: 3.8% high-conversion opt-in, automated WhatsApp/Email follow-up converts 35% of qualified leads
  const gavinLeads = Math.round(visitors * 0.038);
  const gavinClients = Math.max(2, Math.round(gavinLeads * 0.32));
  const gavinRevenue = gavinClients * dealValue;

  const addedRevenue = Math.max(0, gavinRevenue - standardRevenue);
  const addedLeads = Math.max(0, gavinLeads - standardLeads);

  return (
    <section className="relative py-20 bg-[#0D0B10] border-y border-[#351052]/50 overflow-hidden">
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[350px] bg-[#351052]/35 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#C084FC] mb-2.5 block">
            REVENUE GROWTH ESTIMATOR
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#F2E9DC] tracking-tight">
            Calculate Your Untapped Pipeline Potential
          </h2>
          <p className="text-[#D1C6B4] text-sm sm:text-base mt-3">
            See the tangible revenue difference between a typical static website and the Gavin Studio Design + Marketing + Automation system.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Sliders Input Panel */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-[#140D20]/95 border border-[#351052] backdrop-blur-md shadow-xl space-y-7">
            <div>
              <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-[#F2E9DC] mb-2">
                <span>Estimated Monthly Website Visitors</span>
                <span className="font-mono text-[#C084FC] font-bold">
                  {visitors.toLocaleString()} visitors/mo
                </span>
              </div>
              <input
                type="range"
                min="500"
                max="25000"
                step="500"
                value={visitors}
                onChange={(e) => setVisitors(Number(e.target.value))}
                className="w-full accent-[#A855F7] cursor-pointer h-2 bg-[#250E3A] rounded-lg appearance-none"
              />
              <div className="flex justify-between text-[11px] text-[#A69986] mt-1 font-mono">
                <span>500</span>
                <span>10,000</span>
                <span>25,000+</span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-[#F2E9DC] mb-2">
                <span>Average Client / Project Value</span>
                <span className="font-mono text-[#C084FC] font-bold">
                  ${dealValue.toLocaleString()} USD
                </span>
              </div>
              <input
                type="range"
                min="500"
                max="10000"
                step="250"
                value={dealValue}
                onChange={(e) => setDealValue(Number(e.target.value))}
                className="w-full accent-[#A855F7] cursor-pointer h-2 bg-[#250E3A] rounded-lg appearance-none"
              />
              <div className="flex justify-between text-[11px] text-[#A69986] mt-1 font-mono">
                <span>$500</span>
                <span>$5,000</span>
                <span>$10,000+</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#351052]/40 border border-[#8B2FC9]/30 text-xs text-[#D1C6B4] space-y-1.5">
              <div className="flex items-center gap-2 text-[#C084FC] font-semibold">
                <Sparkles className="w-4 h-4" />
                <span>Why this occurs:</span>
              </div>
              <p className="text-[12px] leading-relaxed text-[#D1C6B4]">
                Traditional websites lose 80%+ of interest due to hidden contact forms and delayed manual replies. Gavin Studio captures leads with targeted hooks and engages them in under 60 seconds.
              </p>
            </div>
          </div>

          {/* Results Comparison Card */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#280E44] via-[#170929] to-[#0D0B10] border border-[#8B2FC9]/60 shadow-[0_0_50px_rgba(139,47,201,0.6)]">
            <div className="flex items-center justify-between pb-5 border-b border-[#351052]/60 mb-6">
              <div>
                <span className="text-[11px] font-mono text-[#D1C6B4] uppercase tracking-widest block">
                  PROJECTED MONTHLY GAIN
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold font-display text-white mt-1">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D070FF] via-[#A855F7] to-[#C084FC] glow-text-purple">
                    +${addedRevenue.toLocaleString()}
                  </span>
                  <span className="text-xs text-[#D1C6B4] font-sans font-normal ml-2">/ month</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-[#8B2FC9]/30 border border-[#A855F7]/50 flex items-center justify-center text-[#C084FC]">
                <TrendingUp className="w-6 h-6" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-3.5 rounded-xl bg-[#130720] border border-[#351052]/60">
                <span className="text-[11px] text-[#D1C6B4] block mb-0.5">Extra Qualified Leads</span>
                <span className="text-xl font-bold font-mono text-[#C084FC]">
                  +{addedLeads} / mo
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#130720] border border-[#351052]/60">
                <span className="text-[11px] text-[#D1C6B4] block mb-0.5">New Paying Clients</span>
                <span className="text-xl font-bold font-mono text-[#C084FC]">
                  +{gavinClients - standardClients} / mo
                </span>
              </div>
            </div>

            <div className="space-y-2.5 text-xs text-[#D1C6B4]">
              <div className="flex items-center justify-between">
                <span className="text-[#A69986]">Standard Static Website Revenue:</span>
                <span className="font-mono font-semibold text-[#D1C6B4]">${standardRevenue.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between font-semibold text-white">
                <span className="text-[#C084FC]">Gavin Studio Automated Pipeline:</span>
                <span className="font-mono text-[#C084FC] font-bold">${gavinRevenue.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
