'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface SectionTarget {
  id: string;
  num: string;
  label: string;
}

const SECTIONS: SectionTarget[] = [
  { id: 'hero-section', num: '01', label: 'Overview' },
  { id: 'sales-funnel', num: '02', label: 'Sales Funnel' },
  { id: 'architecture-explorer', num: '03', label: 'Architecture' },
  { id: 'developments-section', num: '04', label: 'Portfolio' },
  { id: 'contact-section', num: '05', label: 'Advisory Desk' },
];

export const ScrollProgressHUD: React.FC = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = totalHeight > 0 ? (currentScroll / totalHeight) * 100 : 0;
      setScrollPercent(Math.min(100, Math.max(0, progress)));

      // Determine active section by measuring offsets
      const sectionElements = SECTIONS.map((s) => document.getElementById(s.id));
      let currentIdx = 0;
      for (let i = 0; i < sectionElements.length; i++) {
        const el = sectionElements[i];
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45) {
            currentIdx = i;
          }
        }
      }
      setActiveSectionIndex(currentIdx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const currentSection = SECTIONS[activeSectionIndex] || SECTIONS[0];

  return (
    <aside
      className="hidden xl:flex fixed right-7 top-1/2 -translate-y-1/2 z-40 flex-col items-center select-none pointer-events-auto animate-in fade-in duration-500"
      aria-label="Section navigation and scroll progress"
    >
      {/* Current Section Number Badge */}
      <div className="mb-3 px-2.5 py-1 rounded-[14px] glass-panel border border-[#D9B878]/40 text-[10px] font-mono font-bold text-[#D9B878] tracking-widest shadow-md">
        {currentSection.num}
      </div>

      {/* Vertical Section Indicator Track */}
      <div className="relative w-7 flex flex-col items-center py-2 space-y-4">
        {/* Background Hairline Track */}
        <div className="absolute top-0 bottom-0 w-[1.5px] bg-white/10 rounded-full" />

        {/* Dynamic Progress Fill */}
        <div
          className="absolute top-0 w-[2px] bg-gradient-to-b from-[#D9B878] to-[#F6F1E9] rounded-full shadow-[0_0_8px_#D9B878]"
          style={{ height: `${scrollPercent}%` }}
        />

        {/* Individual Section Pips */}
        {SECTIONS.map((sec, idx) => {
          const isActive = idx === activeSectionIndex;
          return (
            <button
              key={sec.id}
              onClick={() => scrollToSection(sec.id)}
              className="relative z-10 group flex items-center justify-center p-1 cursor-pointer focus:outline-hidden"
              aria-label={`Jump to ${sec.label}`}
              title={`${sec.num} — ${sec.label}`}
            >
              <span
                className={`block rounded-full transition-all duration-300 ${
                  isActive
                    ? 'w-2.5 h-2.5 bg-[#D9B878] ring-4 ring-[#D9B878]/25 shadow-[0_0_8px_#D9B878]'
                    : 'w-1.5 h-1.5 bg-white/30 group-hover:bg-[#D9B878] group-hover:scale-125'
                }`}
              />

              {/* Tooltip on hover */}
              <span className="absolute right-7 px-3 py-1.5 rounded-[14px] bg-[#0A121F]/95 border border-[#D9B878]/30 text-[10px] font-bold text-[#F6F1E9] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
                {sec.num} • {sec.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Down Scroll Button */}
      <button
        onClick={() => {
          const nextIdx = (activeSectionIndex + 1) % SECTIONS.length;
          scrollToSection(SECTIONS[nextIdx].id);
        }}
        className="mt-4 p-1.5 rounded-full text-[#A39C8F] hover:text-[#D9B878] hover:bg-white/5 transition-colors cursor-pointer"
        aria-label="Scroll to next section"
        title="Scroll down"
      >
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </button>
    </aside>
  );
};
