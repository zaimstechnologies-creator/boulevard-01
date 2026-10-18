'use client';

import React, { useEffect, useState } from 'react';

interface MetricCounterProps {
  value: string;
  label: string;
  sublabel?: string;
  icon?: React.ReactNode;
}

export const MetricCounter: React.FC<MetricCounterProps> = ({ value, label, sublabel, icon }) => {
  const [displayed, setDisplayed] = useState(value);

  useEffect(() => {
    const numericPart = parseInt(value.replace(/[^0-9]/g, ''), 10);
    const suffix = value.replace(/[0-9]/g, '');

    if (!isNaN(numericPart) && numericPart > 0) {
      let current = 0;
      const step = Math.ceil(numericPart / 25);
      const interval = setInterval(() => {
        current += step;
        if (current >= numericPart) {
          setDisplayed(value);
          clearInterval(interval);
        } else {
          setDisplayed(`${current}${suffix}`);
        }
      }, 35);
      return () => clearInterval(interval);
    }
  }, [value]);

  return (
    <div className="flex flex-col items-center text-center p-6 bg-white/95 dark:bg-[#152238]/95 backdrop-blur-xs rounded-2xl border border-[#C4A46A]/40 dark:border-[#C4A46A]/30 shadow-xs hover:border-[#C4A46A] hover:shadow-md transition-all duration-300">
      {icon && <div className="mb-3 text-[#C4A46A] p-2 bg-[#F5F2EB] dark:bg-[#101B2E] rounded-xl border border-[#C4A46A]/20">{icon}</div>}
      <div className="text-3xl lg:text-4xl font-extrabold text-[#101B2E] dark:text-white tracking-tight mb-1">
        {displayed}
      </div>
      <div className="text-xs font-bold text-[#101B2E] dark:text-[#C4A46A] uppercase tracking-wider">{label}</div>
      {sublabel && <div className="text-[11px] text-gray-500 dark:text-gray-400 mt-1">{sublabel}</div>}
    </div>
  );
};
