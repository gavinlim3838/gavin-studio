import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0D0B10]/95 backdrop-blur-md border-b border-[#351052]/50 py-3.5 shadow-[0_4px_30px_rgba(0,0,0,0.85)]'
          : 'bg-gradient-to-b from-[#0D0B10]/90 via-[#0D0B10]/68 to-transparent backdrop-blur-[6px] py-4.5 border-b border-white/[0.04]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand wordmark with Renaissance Purple marks */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-lg font-black tracking-wider text-[#F2E9DC] whitespace-nowrap shrink-0 group"
          >
            <div className="flex items-center space-x-0.5">
              <span className="w-1.5 h-4.5 bg-[#A855F7] rounded-xs transform -skew-x-18 shadow-[0_0_12px_rgba(168,85,247,0.8)] group-hover:bg-[#C084FC] transition-colors" />
              <span className="w-1.5 h-4.5 bg-[#6B21A8] rounded-xs transform -skew-x-18 shadow-[0_0_12px_rgba(107,33,168,0.8)] group-hover:bg-[#8B2FC9] transition-colors" />
            </div>
            <span className="font-display font-extrabold uppercase tracking-widest text-base sm:text-lg text-[#F2E9DC]">
              GAVIN<span className="text-[#A855F7] ml-1.5 font-light">STUDIO</span>
            </span>
          </a>

          {/* Zone 2: 4-5 clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#D1C6B4]">
            <a
              href="#services"
              className="hover:text-[#C084FC] transition-colors whitespace-nowrap shrink-0 hover:glow-text-purple"
            >
              Services
            </a>
            <a
              href="#why-gavin"
              className="hover:text-[#C084FC] transition-colors whitespace-nowrap shrink-0 hover:glow-text-purple"
            >
              The System
            </a>
            <a
              href="#how-it-works"
              className="hover:text-[#C084FC] transition-colors whitespace-nowrap shrink-0 hover:glow-text-purple"
            >
              How It Works
            </a>
            <a
              href="#audience"
              className="hover:text-[#C084FC] transition-colors whitespace-nowrap shrink-0 hover:glow-text-purple"
            >
              Who We Serve
            </a>
            <a
              href="#case-studies"
              className="hover:text-[#C084FC] transition-colors whitespace-nowrap shrink-0 hover:glow-text-purple"
            >
              Results
            </a>
          </nav>

          {/* Zone 3: 1 primary action in Vibrant Purple */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenConsultation}
              className="relative inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white rounded-full bg-gradient-to-r from-[#8B2FC9] via-[#A855F7] to-[#7B2CBF] hover:from-[#A855F7] hover:to-[#8B2FC9] transition-all duration-300 shadow-[0_0_24px_rgba(168,85,247,0.5)] hover:shadow-[0_0_35px_rgba(168,85,247,0.8)] hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Get a Free Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
            </button>

            {/* Mobile menu hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#D1C6B4] hover:text-[#C084FC] rounded-lg focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 bg-[#14101A]/95 border border-[#351052]/70 rounded-2xl backdrop-blur-xl shadow-2xl flex flex-col gap-3">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm text-[#F2E9DC] hover:text-[#E8C58C] font-medium transition-colors"
            >
              Services
            </a>
            <a
              href="#why-gavin"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm text-[#F2E9DC] hover:text-[#E8C58C] font-medium transition-colors"
            >
              The System
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm text-[#F2E9DC] hover:text-[#E8C58C] font-medium transition-colors"
            >
              How It Works
            </a>
            <a
              href="#audience"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm text-[#F2E9DC] hover:text-[#E8C58C] font-medium transition-colors"
            >
              Who We Serve
            </a>
            <a
              href="#case-studies"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm text-[#F2E9DC] hover:text-[#E8C58C] font-medium transition-colors"
            >
              Results
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full mt-2 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-bold text-white rounded-full bg-gradient-to-r from-[#8B2FC9] to-[#6B21A8] shadow-[0_0_20px_rgba(168,85,247,0.5)]"
            >
              <span>Get a Free Consultation</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
