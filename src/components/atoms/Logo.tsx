import React from 'react';
import Link from 'next/link';

interface LogoProps {
  variant?: 'light' | 'dark' | 'auto';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'auto',
  size = 'md',
  showTagline = true,
  className = '',
}) => {
  const isLight = variant === 'light';
  const isAuto = variant === 'auto';

  const sizeConfigs = {
    sm: {
      text: 'text-lg',
      pin: 'w-6 h-7 text-[10px]',
      tagline: 'text-[9px] tracking-[0.2em]',
      gap: 'gap-1.5',
    },
    md: {
      text: 'text-2xl',
      pin: 'w-7 h-8 text-xs',
      tagline: 'text-[11px] tracking-[0.22em]',
      gap: 'gap-2',
    },
    lg: {
      text: 'text-3xl sm:text-4xl',
      pin: 'w-9 h-10 text-sm',
      tagline: 'text-xs sm:text-sm tracking-[0.25em]',
      gap: 'gap-2.5',
    },
  };

  const config = sizeConfigs[size];

  // Dynamic color classes based on variant
  const textClasses = isLight
    ? 'text-white'
    : isAuto
    ? 'text-[#101B2E] dark:text-white'
    : 'text-[#101B2E]';

  const pinClasses = isLight
    ? 'bg-[#C4A46A] text-[#101B2E]'
    : isAuto
    ? 'bg-[#101B2E] text-white dark:bg-[#C4A46A] dark:text-[#101B2E]'
    : 'bg-[#101B2E] text-white';

  const taglineClasses = isLight
    ? 'text-[#C4A46A]'
    : isAuto
    ? 'text-[#101B2E]/80 dark:text-[#C4A46A]'
    : 'text-[#101B2E]/80';

  return (
    <div className={`inline-flex flex-col ${className}`}>
      <div className={`flex items-center ${config.gap}`}>
        {/* Main Brand Wordmark: BOULEVARD with stylized apex A */}
        <span
          className={`font-black font-sans tracking-wider flex items-center ${config.text} ${textClasses}`}
        >
          <span>BOULEV</span>
          {/* Stylized Lambda/Apex A */}
          <span className="relative inline-block mx-0.5">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-[0.75em] h-[0.9em] inline-block align-baseline -mb-[0.02em]"
            >
              <polyline points="3 22 12 3 21 22" />
            </svg>
          </span>
          <span>RD</span>
        </span>

        {/* Pin Badge with '01' */}
        <div
          className={`relative flex items-center justify-center font-black rounded-t-full rounded-b-xl shrink-0 shadow-xs ${config.pin} ${pinClasses}`}
          style={{
            clipPath: 'polygon(50% 100%, 100% 65%, 100% 0%, 0% 0%, 0% 65%)',
            paddingBottom: '4px',
          }}
        >
          <span className="leading-none tracking-tighter">01</span>
        </div>
      </div>

      {/* Slogan / Tagline */}
      {showTagline && (
        <span
          className={`font-sans font-medium uppercase mt-0.5 text-center ${config.tagline} ${taglineClasses}`}
        >
          Landmark of trust
        </span>
      )}
    </div>
  );
};
