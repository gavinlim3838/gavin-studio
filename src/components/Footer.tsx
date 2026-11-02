import React from 'react';
import { ArrowRight, Mail, MessageSquare, Shield, Clock } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  return (
    <footer className="relative bg-[#0D0B10] border-t border-[#351052]/50 pt-16 pb-12 overflow-hidden text-[#D1C6B4] text-xs">
      {/* Background glow in Renaissance Purple */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#351052]/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#351052]/40">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#" className="flex items-center gap-2.5 text-lg font-black tracking-wider text-[#F2E9DC] group">
              <div className="flex items-center space-x-0.5">
                <span className="w-1.5 h-4.5 bg-[#A855F7] rounded-xs transform -skew-x-18 shadow-[0_0_12px_rgba(168,85,247,0.8)] group-hover:bg-[#C084FC] transition-colors" />
                <span className="w-1.5 h-4.5 bg-[#6B21A8] rounded-xs transform -skew-x-18 shadow-[0_0_12px_rgba(107,33,168,0.8)] group-hover:bg-[#8B2FC9] transition-colors" />
              </div>
              <span className="font-display font-extrabold uppercase tracking-widest text-base sm:text-lg">
                GAVIN<span className="text-[#A855F7] ml-1.5 font-light">STUDIO</span>
              </span>
            </a>

            <p className="text-[#D1C6B4] text-xs sm:text-sm leading-relaxed max-w-sm">
              We help coaches, consultants and service-based businesses build high-converting websites, generate qualified leads, and automate follow-ups to turn visitors into paying clients.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-[#D1C6B4] pt-2">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#C084FC]" />
                <span>Response guarantee: &lt; 2 hours</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#C084FC]" />
                <span>High-Ticket Conversion Systems</span>
              </div>
            </div>
          </div>

          {/* Core Services Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold font-mono uppercase tracking-widest text-[#C084FC]">
              CORE SERVICES
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-[#C084FC] transition-colors">
                  Sales Funnels
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C084FC] transition-colors">
                  High-Authority Website Design
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C084FC] transition-colors">
                  Conversion Landing Pages
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C084FC] transition-colors">
                  WhatsApp & Email Marketing Automation
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Consultation Trigger */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold font-mono uppercase tracking-widest text-[#C084FC]">
              GROW YOUR BUSINESS
            </h4>
            <p className="text-[#D1C6B4] text-xs leading-relaxed">
              Ready to replace inconsistent manual outreach with an automated acquisition system?
            </p>
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#8B2FC9] via-[#A855F7] to-[#7B2CBF] hover:from-[#A855F7] hover:to-[#8B2FC9] text-white font-bold text-xs shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:shadow-[0_0_30px_rgba(168,85,247,0.8)] hover:scale-[1.02] transition-all cursor-pointer"
            >
              <span>Get a free consultation</span>
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </button>
          </div>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#A69986]">
          <div>
            © {new Date().getFullYear()} Gavin Studio. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-[#F2E9DC] transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-[#F2E9DC] transition-colors">Terms of Service</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); onOpenConsultation(); }} className="hover:text-[#F2E9DC] transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
