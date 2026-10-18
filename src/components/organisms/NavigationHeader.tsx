'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Phone,
  Clock,
  MapPin,
  Menu,
  X,
  ChevronDown,
  Building2,
  Users2,
  Briefcase,
  CalendarCheck,
  ShieldCheck,
  ArrowUpRight,
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/constants';
import { WhatsAppCTA } from '@/components/atoms/WhatsAppCTA';
import { Logo } from '@/components/atoms/Logo';
import { ThemeToggle } from '@/components/atoms/ThemeToggle';

interface CompanySubmenuItem {
  href: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const COMPANY_MENU_ITEMS: CompanySubmenuItem[] = [
  {
    href: '/about',
    title: 'About Boulevard 01',
    description: '9+ Years Audited Track Record, 500+ Delivered Units',
    icon: Building2,
  },
  {
    href: '/team',
    title: 'Executive Leadership',
    description: 'Corporate Sales Directorate & Development Governance',
    icon: Users2,
  },
  {
    href: '/career',
    title: 'Careers & Talent',
    description: 'Uncapped Commissions & High-Rise Sales Advisory',
    icon: Briefcase,
  },
  {
    href: '/contact',
    title: 'Contact & Geolocation',
    description: 'Plaza 39 AA Commercial, VIP Investor Lounges',
    icon: CalendarCheck,
  },
];

export const NavigationHeader: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setCompanyDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isCompanyActive = ['/about', '/team', '/career', '/contact'].some((path) =>
    pathname.startsWith(path)
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-[#101B2E]/95 backdrop-blur-xl border-b border-[#C4A46A]/25 shadow-lg shadow-black/20 transition-all duration-300">
      {/* Top Luxury Dispatch Bar */}
      <div className="bg-[#0A121F] text-[#F5F2EB] text-[11px] py-1.5 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Office Address & Timing */}
          <div className="flex items-center gap-6 text-gray-300 font-medium tracking-wide">
            <span className="hidden md:inline-flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors">
              <MapPin className="w-3.5 h-3.5 text-[#C4A46A]" />
              <span>Plaza 39 AA Commercial, Sector D, Bahria Town Lahore</span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-gray-400">
              <Clock className="w-3.5 h-3.5 text-[#C4A46A]" />
              <span>Sat–Thu: 10:00 AM – 8:00 PM</span>
            </span>
          </div>

          {/* Institutional Compliance Badge */}
          <div className="hidden lg:flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#152238] border border-[#C4A46A]/30 text-[10px] text-[#C4A46A] font-semibold tracking-wider uppercase">
            <ShieldCheck className="w-3 h-3 text-[#C4A46A]" />
            <span>State Bank RDA Remittance Compliant</span>
          </div>

          {/* Quick Direct Telephony & WhatsApp Desk */}
          <div className="flex items-center gap-4 text-[11px] font-semibold tracking-wide ml-auto">
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="inline-flex items-center gap-1.5 text-gray-200 hover:text-[#C4A46A] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#C4A46A]" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <span className="text-white/20">|</span>
            <a
              href={`https://wa.me/${COMPANY_INFO.phoneClean}?text=Hello%20Boulevard%2001%20Sales%20Desk`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#6FF09B] hover:text-white transition-colors"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]"></span>
              </span>
              <span>WhatsApp Sales Desk</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Luxury Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Identity Logo with Royal Breathing Room */}
          <Link href="/" className="flex items-center group py-2 pr-6 xl:pr-10">
            <Logo variant="light" size="md" showTagline={true} />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-semibold uppercase tracking-wider text-gray-200" aria-label="Main Navigation">
            {/* 1. All Projects */}
            <Link
              href="/projects"
              className={`relative py-2 flex items-center gap-1.5 transition-colors hover:text-[#C4A46A] ${
                pathname.startsWith('/projects') ? 'text-[#C4A46A]' : 'text-gray-200'
              }`}
            >
              <span>Projects</span>
              <span className="text-[10px] font-bold px-1.5 py-0.2 rounded-md bg-[#152238] text-[#C4A46A] border border-[#C4A46A]/30">
                05
              </span>
              {pathname.startsWith('/projects') && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C4A46A] rounded-full shadow-[0_0_8px_#C4A46A]" />
              )}
            </Link>

            {/* 2. Live Inventory */}
            <Link
              href="/inventory"
              className={`relative py-2 flex items-center gap-2 transition-colors hover:text-[#C4A46A] ${
                pathname === '/inventory' ? 'text-[#C4A46A]' : 'text-gray-200'
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Live Inventory</span>
              {pathname === '/inventory' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C4A46A] rounded-full shadow-[0_0_8px_#C4A46A]" />
              )}
            </Link>

            {/* 3. Parametric Compare */}
            <Link
              href="/compare"
              className={`relative py-2 transition-colors hover:text-[#C4A46A] ${
                pathname === '/compare' ? 'text-[#C4A46A]' : 'text-gray-200'
              }`}
            >
              <span>Compare</span>
              {pathname === '/compare' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C4A46A] rounded-full shadow-[0_0_8px_#C4A46A]" />
              )}
            </Link>

            {/* 4. Strategic Partners */}
            <Link
              href="/strategic-partners"
              className={`relative py-2 flex items-center gap-1.5 transition-colors hover:text-[#C4A46A] ${
                pathname.startsWith('/strategic-partners') || pathname.startsWith('/partners')
                  ? 'text-[#C4A46A]'
                  : 'text-gray-200'
              }`}
            >
              <span>Partners</span>
              <span className="hidden xl:inline text-[9px] font-bold px-1.5 py-0.2 rounded-md bg-[#152238] text-gray-300 border border-white/10">
                Etihad
              </span>
              {(pathname.startsWith('/strategic-partners') || pathname.startsWith('/partners')) && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C4A46A] rounded-full shadow-[0_0_8px_#C4A46A]" />
              )}
            </Link>

            {/* 5. Knowledge Hub */}
            <Link
              href="/blog"
              className={`relative py-2 transition-colors hover:text-[#C4A46A] ${
                pathname.startsWith('/blog') ? 'text-[#C4A46A]' : 'text-gray-200'
              }`}
            >
              <span>Insights & RDA</span>
              {pathname.startsWith('/blog') && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C4A46A] rounded-full shadow-[0_0_8px_#C4A46A]" />
              )}
            </Link>

            {/* 6. Company Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setCompanyDropdownOpen(true)}
              onMouseLeave={() => setCompanyDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setCompanyDropdownOpen(!companyDropdownOpen)}
                className={`py-2 flex items-center gap-1 transition-colors hover:text-[#C4A46A] cursor-pointer ${
                  isCompanyActive ? 'text-[#C4A46A]' : 'text-gray-200'
                }`}
                aria-expanded={companyDropdownOpen}
              >
                <span>Company</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    companyDropdownOpen ? 'rotate-180 text-[#C4A46A]' : 'text-gray-400'
                  }`}
                />
                {isCompanyActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C4A46A] rounded-full shadow-[0_0_8px_#C4A46A]" />
                )}
              </button>

              {/* Dropdown Menu Panel */}
              {companyDropdownOpen && (
                <div className="absolute top-full left-0 w-80 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="p-3 bg-[#0A121F]/98 backdrop-blur-2xl rounded-2xl border border-[#C4A46A]/35 shadow-2xl shadow-black/80 space-y-1">
                    {COMPANY_MENU_ITEMS.map((item) => {
                      const Icon = item.icon;
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setCompanyDropdownOpen(false)}
                          className={`flex items-start gap-3 p-2.5 rounded-xl transition-all ${
                            isActive
                              ? 'bg-[#152238] border border-[#C4A46A]/40 text-[#C4A46A]'
                              : 'hover:bg-[#152238]/60 text-gray-200 hover:text-white'
                          }`}
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#101B2E] border border-[#C4A46A]/30 flex items-center justify-center shrink-0 mt-0.5 text-[#C4A46A]">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white flex items-center gap-1">
                              <span>{item.title}</span>
                              <ArrowUpRight className="w-3 h-3 text-[#C4A46A] opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <div className="text-[11px] text-gray-400 font-normal normal-case leading-snug mt-0.5">
                              {item.description}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Right Action Hub */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            <ThemeToggle />

            {/* Direct Telephone Dial Button */}
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="px-3.5 py-2 text-xs font-semibold text-gray-300 hover:text-white hover:bg-white/5 border border-white/10 rounded-full transition-all flex items-center gap-1.5"
              title="Call Sales Directorate"
            >
              <Phone className="w-3.5 h-3.5 text-[#C4A46A]" />
              <span className="hidden xl:inline">{COMPANY_INFO.phone}</span>
            </a>

            {/* Standout VIP WhatsApp Consultation CTA */}
            <WhatsAppCTA
              message="Hello Boulevard 01, I would like to book a private VIP consultation regarding active high-rise towers in Bahria Town."
              label="VIP Consultation"
              size="sm"
              variant="emerald"
            />
          </div>

          {/* Mobile Menu Action Triggers */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <WhatsAppCTA
              message="Hello Boulevard 01, I would like to inquire about project availability."
              label="Advisory"
              size="sm"
              variant="emerald"
            />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-200 hover:text-white rounded-xl hover:bg-white/10 border border-white/10 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#C4A46A]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Gold Accent Hairline */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#C4A46A]/40 to-transparent" />

      {/* Mobile Luxury Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A121F]/98 backdrop-blur-2xl border-b border-[#C4A46A]/30 px-5 pt-4 pb-8 space-y-6 animate-in slide-in-from-top-4 duration-200">
          {/* Primary Navigation Links */}
          <div className="space-y-1">
            <div className="text-[10px] font-bold uppercase tracking-widest text-[#C4A46A] px-3 pb-1">
              Properties & Portfolios
            </div>
            <Link
              href="/projects"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold text-gray-200 hover:bg-[#152238] transition-colors"
            >
              <span>All Projects</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#152238] text-[#C4A46A] border border-[#C4A46A]/40">
                5 Active Towers
              </span>
            </Link>
            <Link
              href="/inventory"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold text-gray-200 hover:bg-[#152238] transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Live Inventory Sheet</span>
              </div>
              <span className="text-[10px] uppercase font-bold text-emerald-400">Real-Time</span>
            </Link>
            <Link
              href="/compare"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold text-gray-200 hover:bg-[#152238] transition-colors"
            >
              <span>Parametric Comparison Matrix</span>
            </Link>
          </div>

          {/* Strategic Alliances & Research */}
          <div className="space-y-1 pt-2 border-t border-white/5">
            <div className="text-[10px] font-bold uppercase tracking-widest text-[#C4A46A] px-3 pb-1">
              Strategic Alliances & Intelligence
            </div>
            <Link
              href="/strategic-partners"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold text-gray-200 hover:bg-[#152238] transition-colors"
            >
              <span>Etihad Town Sales Partners</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#152238] text-gray-300">
                Brokers
              </span>
            </Link>
            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold text-gray-200 hover:bg-[#152238] transition-colors"
            >
              <span>Insights & Roshan Digital (RDA)</span>
            </Link>
          </div>

          {/* Corporate Governance & Organization */}
          <div className="space-y-1 pt-2 border-t border-white/5">
            <div className="text-[10px] font-bold uppercase tracking-widest text-[#C4A46A] px-3 pb-1">
              Corporate Governance
            </div>
            {COMPANY_MENU_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-gray-200 hover:bg-[#152238] transition-colors"
                >
                  <Icon className="w-4 h-4 text-[#C4A46A]" />
                  <span>{item.title}</span>
                </Link>
              );
            })}
          </div>

          {/* Direct CTA & Telephony */}
          <div className="pt-4 border-t border-white/10 space-y-3">
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="w-full py-3 px-4 text-center block text-sm font-bold bg-[#152238] text-white rounded-xl border border-[#C4A46A]/40 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#C4A46A]" />
              <span>Call Corporate Desk: {COMPANY_INFO.phone}</span>
            </a>
            <div className="text-center text-[11px] text-gray-400">
              Plaza 39 AA Commercial, Sector D, Bahria Town Lahore
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
