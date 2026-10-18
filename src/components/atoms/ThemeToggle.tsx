'use client';

import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('boulevard_theme');
    if (stored === 'light') {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    } else {
      // Default to dark theme as requested
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('boulevard_theme', nextTheme);
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  if (!mounted) {
    return (
      <div className={`w-9 h-9 rounded-full bg-[#101B2E] border border-[#C4A46A]/40 ${className}`} />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      className={`relative inline-flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C4A46A] border ${
        theme === 'dark'
          ? 'bg-[#101B2E] text-[#C4A46A] border-[#C4A46A]/50 hover:bg-[#1A2B47] hover:border-[#C4A46A]'
          : 'bg-[#F5F2EB] text-[#101B2E] border-[#C4A46A]/40 hover:bg-white hover:text-[#C4A46A]'
      } ${className}`}
      title={theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 transition-transform duration-300 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  );
};
