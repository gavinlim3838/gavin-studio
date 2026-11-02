import React from 'react';

interface ToolItem {
  name: string;
  icon: React.ReactNode;
}

const TOOLS: ToolItem[] = [
  {
    name: 'Elementor',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-3 5h2v10H9V7zm4 0h2v4h-2V7zm0 6h2v4h-2v-4z" />
      </svg>
    )
  },
  {
    name: 'Vercel',
    icon: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
        <path d="M12 2L24 22H0L12 2Z" />
      </svg>
    )
  },
  {
    name: 'Figma',
    icon: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
        <path d="M8 2h4a4 4 0 010 8H8V2zm0 8h4a4 4 0 010 8H8v-8zm-4 4a4 4 0 014-4v4H4zm0-6a4 4 0 014-4v4H4zm4 10a4 4 0 01-4-4h4v4z" />
      </svg>
    )
  },
  {
    name: 'GoHighLevel',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M12 2L3 8v8l9 6 9-6V8l-9-6zm0 3.3L18 9l-6 3.7L6 9l6-3.7zM5 10.7l6 3.7v6.6l-6-4v-6.3zm8 10.3v-6.6l6-3.7v6.3l-6 4z" />
      </svg>
    )
  },
  {
    name: 'ClickFunnels',
    icon: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
        <path d="M3 4h18v2l-7 8v6l-4 2v-8L3 6V4z" />
      </svg>
    )
  },
  {
    name: 'Systeme.io',
    icon: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current stroke-2">
        <circle cx="12" cy="12" r="9" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2M8 10h.01M16 10h.01" />
      </svg>
    )
  },
  {
    name: 'Claude',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M12 2a1 1 0 011 1v4.06a8.94 8.94 0 003.5 1.45l2.87-2.87a1 1 0 111.41 1.41l-2.87 2.87A8.94 8.94 0 0019.36 13H23a1 1 0 110 2h-3.64a8.94 8.94 0 00-1.45 3.5l2.87 2.87a1 1 0 01-1.41 1.41l-2.87-2.87a8.94 8.94 0 00-3.5 1.45V23a1 1 0 11-2 0v-3.64a8.94 8.94 0 00-3.5-1.45l-2.87 2.87a1 1 0 01-1.41-1.41l2.87-2.87A8.94 8.94 0 004.64 15H1a1 1 0 110-2h3.64a8.94 8.94 0 001.45-3.5L3.22 6.63a1 1 0 111.41-1.41l2.87 2.87A8.94 8.94 0 0011 6.64V3a1 1 0 011-1z" />
      </svg>
    )
  },
  {
    name: 'ChatGPT',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
        <path d="M12 2a4 4 0 013.9 3.1 4 4 0 013.2 4.1 4 4 0 01-1.2 5 4 4 0 01-3.9 3.8 4 4 0 01-4-2.8 4 4 0 01-4-1.2 4 4 0 011.2-5 4 4 0 014.8-7z" />
      </svg>
    )
  },
  {
    name: 'GitHub',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        />
      </svg>
    )
  },
  {
    name: 'Supabase',
    icon: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
        <path d="M12.923 1.258a1 1 0 00-1.636.148L3.25 15.39a1 1 0 00.942 1.485h7.245l-2.074 5.867a1 1 0 001.636-.148l8.037-13.984a1 1 0 00-.942-1.485H10.85l2.073-5.867z" />
      </svg>
    )
  },
  {
    name: 'WordPress',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 1.5a8.468 8.468 0 015.657 2.164L13.88 16.71l-2.616-7.85 1.884-.092.108-.344-3.13.06-.034.344 1.157.087 1.761 5.093-2.457-7.375 1.874-.09.11-.345-4.425.074.03.344 1.194.086 3.659 10.378-2.585-7.669a8.463 8.463 0 01-.446-2.738A8.486 8.486 0 0112 3.5zm0 17a8.47 8.47 0 01-5.114-1.725l4.333-12.28 2.664 7.625-2.28 6.38zM17.828 17.2l2.678-7.72c.49 1.18.766 2.477.766 3.842 0 3.01-1.56 5.657-3.444 3.878z" />
      </svg>
    )
  },
  {
    name: 'Webflow',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M16.924 5.006l-4.22 13.988h-3.66L6.5 10.875 3.956 18.994H.306l5.092-13.988h3.66l2.544 8.119 2.544-8.119h2.778zm6.77 0l-5.092 13.988h-3.66l2.544-8.119-2.544-8.119h3.66l2.544 8.119 2.548-8.119z" />
      </svg>
    )
  },
  {
    name: 'Make',
    icon: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
        <path d="M12 2a4 4 0 00-4 4c0 .38.06.74.16 1.09L5.4 9.85A4 4 0 002 14a4 4 0 004 4c.38 0 .74-.06 1.09-.16l2.76 2.76A4 4 0 0014 22a4 4 0 004-4c0-.38-.06-.74-.16-1.09l2.76-2.76A4 4 0 0022 10a4 4 0 00-4-4c-.38 0-.74.06-1.09.16L14.15 3.4A4 4 0 0012 2zm0 2a2 2 0 110 4 2 2 0 010-4z" />
      </svg>
    )
  },
  {
    name: 'Zapier',
    icon: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
        <path d="M13 2L4 14h7v8l9-12h-7V2z" />
      </svg>
    )
  },
  {
    name: 'Stripe',
    icon: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
        <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C17.652.83 14.957.29 12.196.29 6.818.29 3.037 3.12 3.037 7.777c0 5.485 5.568 6.784 8.878 8.016 2.392.89 3.174 1.65 3.174 2.656 0 1.042-1.002 1.626-2.482 1.626-2.616 0-5.32-1.258-7.23-2.316l-.916 5.618c1.942.923 4.96 1.543 8.01 1.543 5.753 0 9.774-2.748 9.774-7.663 0-5.632-5.437-6.91-8.269-8.107z" />
      </svg>
    )
  }
];

export const SocialProof: React.FC = () => {
  return (
    <section className="relative py-10 sm:py-12 border-y border-[#351052]/40 bg-[#0D0B10]/95 backdrop-blur-md overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title matching Image 2 */}
        <div className="text-center mb-6 sm:mb-7">
          <p className="text-xs sm:text-sm font-medium text-slate-400 tracking-wider">
            Tools that I use
          </p>
        </div>

        {/* Infinite right-to-left marquee track */}
        <div className="relative w-full overflow-hidden">
          {/* Subtle edge fades on both sides for infinite gradient blending */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#0D0B10] via-[#0D0B10]/80 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#0D0B10] via-[#0D0B10]/80 to-transparent z-10" />

          {/* Scrolling items with right-to-left motion */}
          <div className="animate-marquee flex items-center gap-3 sm:gap-4 select-none">
            {/* Primary Tool Set */}
            {TOOLS.map((tool, idx) => (
              <div
                key={`tool-a-${idx}`}
                className="flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#130F1C]/90 border border-white/10 hover:border-[#A855F7]/60 hover:bg-[#1C142A] text-neutral-300 hover:text-white transition-all duration-300 cursor-default shadow-sm shrink-0 backdrop-blur-md group"
              >
                <span className="text-neutral-400 group-hover:text-[#C084FC] transition-colors shrink-0">
                  {tool.icon}
                </span>
                <span className="text-xs sm:text-sm font-medium tracking-tight whitespace-nowrap">
                  {tool.name}
                </span>
              </div>
            ))}

            {/* Seamless duplicate set for continuous infinite loop */}
            {TOOLS.map((tool, idx) => (
              <div
                key={`tool-b-${idx}`}
                className="flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#130F1C]/90 border border-white/10 hover:border-[#A855F7]/60 hover:bg-[#1C142A] text-neutral-300 hover:text-white transition-all duration-300 cursor-default shadow-sm shrink-0 backdrop-blur-md group"
              >
                <span className="text-neutral-400 group-hover:text-[#C084FC] transition-colors shrink-0">
                  {tool.icon}
                </span>
                <span className="text-xs sm:text-sm font-medium tracking-tight whitespace-nowrap">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
