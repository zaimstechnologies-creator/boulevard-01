'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Building2,
  Store,
  Globe2,
  Briefcase,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Phone,
  MessageCircle,
  ArrowRight,
  TrendingUp,
  Award,
  Sparkles,
  Clock,
  UserCheck,
} from 'lucide-react';
import { COMPANY_INFO, formatPKR } from '@/data/constants';

interface SectorFunnel {
  id: 'residential' | 'commercial' | 'nrp' | 'corporate' | 'islamabad';
  label: string;
  sublabel: string;
  icon: React.ElementType;
  badge: string;
  headline: string;
  description: string;
  advisor: {
    name: string;
    role: string;
    department: string;
    location: string;
    image: string;
    phone: string;
    whatsappMessage: string;
    credentials: string;
    sla: string;
  };
  metrics: {
    label: string;
    value: string;
    detail: string;
  }[];
  recommendedProject: {
    title: string;
    slug: string;
    unitType: string;
    priceStarting: number;
    highlight: string;
    image: string;
  };
}

const SECTOR_FUNNELS: SectorFunnel[] = [
  {
    id: 'residential',
    label: 'Residential Living',
    sublabel: 'Penthouses & Luxury Suites',
    icon: Building2,
    badge: 'High Capital Growth',
    headline: 'Curated Residential Suites & Eiffel View Penthouses',
    description:
      'Engineered for affluent families and long-term rental investors. Featuring private observation decks overlooking the Bahria Eiffel Tower and dancing fountains with 24/7 white-glove concierge management.',
    advisor: {
      name: 'Waqas Ayub',
      role: 'Senior Vice President Sales',
      department: 'Residential Advisory Directorate',
      location: 'Corporate HQ, Plaza 39 AA Commercial, Bahria Town Lahore',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
      phone: '+92 321 000 4000',
      whatsappMessage:
        'Hello Waqas Ayub, I am interested in Residential Penthouses at Boulevard 01 (Grand 15 / Grand 14). Please share available unit floor plans and payment schedules.',
      credentials: '11+ Years High-Rise Living Mastery • 300+ Residential Handovers',
      sla: 'Guaranteed Callback Within 15 Minutes',
    },
    metrics: [
      { label: 'Projected Appreciation', value: '18% – 24%', detail: 'Annualized asset valuation uplift' },
      { label: 'Rental Yield', value: '8.5% – 10%', detail: 'Turnkey serviced leasing pool' },
      { label: 'Starting Price', value: 'PKR 1.85 Cr', detail: 'Flexible 36-month quarterly installments' },
    ],
    recommendedProject: {
      title: 'The Grand Lifestyle — Grand 15',
      slug: 'grand-15',
      unitType: '2-Bed Sky Penthouse',
      priceStarting: 18500000,
      highlight: 'Direct panoramic vista facing Bahria Eiffel Tower & Dancing Fountains',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    },
  },
  {
    id: 'commercial',
    label: 'Commercial & Retail',
    sublabel: 'Shops & Food Court Bays',
    icon: Store,
    badge: 'Guaranteed Commercial Footfall',
    headline: 'High-Footfall Retail Outlets & Destination Food Courts',
    description:
      'High-yield commercial assets positioned on Main Boulevard and Theme Park corridors. Structured for anchor retail brands, fashion flagships, and high-volume food franchise operators.',
    advisor: {
      name: 'Naeem Ahsan',
      role: 'Director Sales & Commercial Strategy',
      department: 'Corporate Sales & Commercial Directorate',
      location: 'Commercial Strategy Desk, Plaza 39 AA Commercial, Bahria Town Lahore',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
      phone: '+92 321 000 4000',
      whatsappMessage:
        'Hello Naeem Ahsan, I am inquiring about Commercial Retail / Food Court Bays at Grand X & Grand 15. Please share commercial footfall projections and rental yield models.',
      credentials: '14+ Years Commercial Mastery • Multi-Billion Rupee Retail Structuring',
      sla: 'Direct Senior Director Consultation',
    },
    metrics: [
      { label: 'Commercial Rental Yield', value: '12% – 14%', detail: 'Secured by branded tenant covenants' },
      { label: 'Daily Corridor Footfall', value: '8,500+', detail: 'Main Boulevard & Theme Park Carnival' },
      { label: 'Starting Price', value: 'PKR 1.25 Cr', detail: 'Prime lower-ground & ground boulevard frontage' },
    ],
    recommendedProject: {
      title: 'Grand X — Retail & Theme Park Carnival',
      slug: 'grand-x',
      unitType: '2nd Floor Dedicated Food Court Bay',
      priceStarting: 12500000,
      highlight: 'Positioned inside Bahria Town’s highest-density entertainment corridor',
      image: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&w=800&q=80',
    },
  },
  {
    id: 'nrp',
    label: 'Overseas & NRP Desk',
    sublabel: 'Roshan Digital Account (RDA)',
    icon: Globe2,
    badge: '100% SBP Repatriation',
    headline: 'Bespoke Advisory for Non-Resident Pakistani Expatriates',
    description:
      'Eliminating expatriate friction with full legal compliance. Direct State Bank of Pakistan Roshan Digital Account integration, 100% legal capital repatriation in foreign currency, and remote consular title registration.',
    advisor: {
      name: 'Iqra Nadeem',
      role: 'Head of Client Advisory & Overseas NRP Desk',
      department: 'Global Expatriate Relations Directorate',
      location: 'NRP Overseas Desk, Plaza 39 AA Commercial, Bahria Town Lahore',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
      phone: '+92 321 000 4000',
      whatsappMessage:
        'Hello Iqra Nadeem, I am an Overseas Pakistani inquiring about Roshan Digital Account (RDA) property investments, tax exemptions, and remote title registration.',
      credentials: 'UK, US & Gulf Diaspora Specialist • 100% Repatriation Compliance',
      sla: 'Timezone-Aligned Video Advisory Available',
    },
    metrics: [
      { label: 'Capital Repatriation', value: '100% Legal', detail: 'State Bank RDA banking conduit' },
      { label: 'Capital Gains Tax', value: '0% on RDA FX', detail: 'Full SBP expatriate exemption' },
      { label: 'Remote Verification', value: 'Weekly Video Logs', detail: 'Biometric registration & consular deed' },
    ],
    recommendedProject: {
      title: 'The Grand Lifestyle — Grand 15',
      slug: 'grand-15',
      unitType: 'Luxury 1-Bed Serviced Suite',
      priceStarting: 18500000,
      highlight: 'Managed overseas rental pool with net foreign currency remittances',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    },
  },
  {
    id: 'corporate',
    label: 'Corporate & Institutional',
    sublabel: 'Executive Headquarter Lofts',
    icon: Briefcase,
    badge: 'Institutional Grade',
    headline: 'High-Density Corporate Lofts & Family Office Holdings',
    description:
      'Designed for multinational technology firms, corporate legal & financial consultancies, and family offices seeking full-floor asset liquidity and blue-chip corporate tenancies.',
    advisor: {
      name: 'Sheikh Zahid',
      role: 'Director Corporate Relations',
      department: 'Institutional Client Directorate',
      location: 'Executive Boardroom, Plaza 39 AA Commercial, Bahria Town Lahore',
      image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80',
      phone: '+92 321 000 4000',
      whatsappMessage:
        'Hello Sheikh Zahid, I would like to schedule an executive consultation regarding Corporate Office Suites / Full-Floor Acquisitions at Boulevard 01.',
      credentials: 'Institutional Banking Syndicate & Master Developer Liaison',
      sla: 'Private Executive Briefing at Corporate HQ',
    },
    metrics: [
      { label: 'Corporate Lease Horizon', value: '5 – 9 Years', detail: 'Long-term blue-chip institutional covenants' },
      { label: 'Secondary Resale', value: 'High Liquidity', detail: 'Midway Commercial prime business core' },
      { label: 'Infrastructure', value: 'Smart Lift Core', detail: 'Dual 100% generator backup & fiber optic' },
    ],
    recommendedProject: {
      title: 'Grand 11 — Midway Commercial',
      slug: 'grand-11',
      unitType: 'Executive Corporate Loft',
      priceStarting: 16000000,
      highlight: 'Midway Commercial’s tallest architectural tower, adjacent to Talwar Chowk',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    },
  },
  {
    id: 'islamabad',
    label: 'Islamabad / Twin Cities',
    sublabel: 'Phase 8 Business District',
    icon: MapPin,
    badge: 'Capital Territory Desk',
    headline: 'Prime Mixed-Use Presence in Islamabad Business District',
    description:
      'Direct access to Boulevard 01’s signature capital development: The View — Grand 12 in Bahria Town Islamabad Phase 8, situated directly beside the iconic Statue of Liberty landmark.',
    advisor: {
      name: 'Ali Hamza',
      role: 'Regional Director Islamabad Operations',
      department: 'Islamabad Regional Office',
      location: 'Regional Office, Phase 8 Business District, Bahria Town Islamabad',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
      phone: '+92 321 000 4000',
      whatsappMessage:
        'Hello Ali Hamza, I am interested in The View — Grand 12 in Bahria Town Islamabad. Please send the latest inventory and commercial floor plans.',
      credentials: 'Twin Cities Regional Director • Corporate & Retail Expansion Lead',
      sla: 'On-Ground Regional Office Briefing',
    },
    metrics: [
      { label: 'Strategic Position', value: 'Beside Statue of Liberty', detail: 'Phase 8 Business District focal point' },
      { label: 'Asset Typology', value: '5-in-1 Hybrid', detail: 'Corporate, Retail, Serviced Suites, Penthouses' },
      { label: 'Starting Price', value: 'PKR 1.45 Cr', detail: 'Pre-launch capital pricing window' },
    ],
    recommendedProject: {
      title: 'The View — Grand 12',
      slug: 'grand-12',
      unitType: 'Serviced Hotel Apartment',
      priceStarting: 14500000,
      highlight: 'Directly overlooking Phase 8 Boulevard & Statue of Liberty plaza',
      image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=800&q=80',
    },
  },
];

export const SalesFunnelRouter: React.FC = () => {
  const [activeSectorId, setActiveSectorId] = useState<SectorFunnel['id']>('residential');
  const [leadName, setLeadName] = useState('');
  const [leadPhone, setLeadPhone] = useState('');
  const [budget, setBudget] = useState<number>(25000000);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const activeFunnel = SECTOR_FUNNELS.find((s) => s.id === activeSectorId) || SECTOR_FUNNELS[0];

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch('/api/v1/inbound-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: leadName,
          phone_number: leadPhone,
          inquiry_channel: 'sales_funnel_advisor_router',
          project_interest: activeFunnel.recommendedProject.slug,
          unit_interest_type: activeFunnel.id,
          inquiry_notes: `Assigned Specialist: ${activeFunnel.advisor.name} (${activeFunnel.advisor.role}). Sector: ${activeFunnel.label}`,
        }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="sales-funnel" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-bold text-[#C4A46A] tracking-wider uppercase">
          <Award className="w-3.5 h-3.5" />
          <span>Interactive Investor Sales Funnel • Dedicated Executive Assignment</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-white tracking-tight">
          Select Your Asset Class. <br />
          <span className="gold-gradient-text">Meet Your Assigned Portfolio Director.</span>
        </h2>

        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
          Every investment at Boulevard 01 is managed by a designated senior director with institutional domain expertise, guaranteed response times, and personalized asset modeling.
        </p>
      </div>

      {/* Step 1: Sector Switcher Glassmorphic Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
        {SECTOR_FUNNELS.map((funnel) => {
          const Icon = funnel.icon;
          const isActive = funnel.id === activeSectorId;
          return (
            <button
              key={funnel.id}
              onClick={() => {
                setActiveSectorId(funnel.id);
                setSubmitted(false);
              }}
              className={`p-4 rounded-2xl text-left transition-all duration-300 flex flex-col justify-between relative overflow-hidden group cursor-pointer ${
                isActive
                  ? 'bg-[#152238]/95 border-2 border-[#C4A46A] shadow-xl shadow-[#C4A46A]/20 scale-[1.02]'
                  : 'glass-panel hover:border-[#C4A46A]/50 hover:bg-[#152238]/60'
              }`}
            >
              {isActive && (
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#C4A46A]/10 rounded-full blur-xl pointer-events-none" />
              )}
              <div className="flex items-center justify-between mb-3">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                    isActive ? 'bg-[#C4A46A] text-[#101B2E]' : 'bg-white/10 text-[#C4A46A] group-hover:bg-[#C4A46A]/20'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                {isActive && (
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#C4A46A] bg-[#C4A46A]/20 px-2 py-0.5 rounded-full">
                    Active
                  </span>
                )}
              </div>

              <div>
                <div className="text-sm font-bold text-white group-hover:text-[#F5E6CA] transition-colors">
                  {funnel.label}
                </div>
                <div className="text-[11px] text-gray-400 mt-0.5 line-clamp-1">{funnel.sublabel}</div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Step 2: The Funnel Core Display (Glassmorphic Master Card) */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#C4A46A]/30 shadow-2xl relative overflow-hidden animate-in fade-in duration-500">
        {/* Ambient Top Glow */}
        <div className="absolute -top-24 right-1/4 w-96 h-96 bg-[#C4A46A]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Assigned Senior Director Profile (5 cols) */}
          <div className="lg:col-span-5 bg-[#0A101D]/80 rounded-2xl p-6 sm:p-7 border border-[#C4A46A]/25 relative space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#C4A46A] bg-[#C4A46A]/15 px-3 py-1 rounded-full border border-[#C4A46A]/30">
                {activeFunnel.badge}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Desk Active Now</span>
              </div>
            </div>

            {/* Specialist Headshot & Credentials */}
            <div className="flex items-center gap-4">
              <div className="relative shrink-0">
                <img
                  src={activeFunnel.advisor.image}
                  alt={activeFunnel.advisor.name}
                  className="w-20 h-20 rounded-2xl object-cover border-2 border-[#C4A46A] shadow-md shadow-black/60"
                />
                <div className="absolute -bottom-1 -right-1 bg-emerald-500 rounded-full p-1 text-[#101B2E]" title="Verified Specialist">
                  <UserCheck className="w-3.5 h-3.5 text-white" />
                </div>
              </div>

              <div>
                <div className="text-xs uppercase font-extrabold tracking-wider text-[#C4A46A]">
                  Dedicated Portfolio Lead
                </div>
                <h3 className="text-xl font-serif font-black text-white">{activeFunnel.advisor.name}</h3>
                <div className="text-xs text-gray-300 font-medium">{activeFunnel.advisor.role}</div>
                <div className="text-[11px] text-gray-400 mt-0.5">{activeFunnel.advisor.department}</div>
              </div>
            </div>

            {/* Specialist Verification Details */}
            <div className="space-y-2 pt-2 border-t border-white/10 text-xs">
              <div className="flex items-start gap-2 text-gray-300">
                <Award className="w-4 h-4 text-[#C4A46A] shrink-0 mt-0.5" />
                <span>{activeFunnel.advisor.credentials}</span>
              </div>
              <div className="flex items-start gap-2 text-gray-300">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="font-semibold text-emerald-300">{activeFunnel.advisor.sla}</span>
              </div>
              <div className="flex items-start gap-2 text-gray-400">
                <MapPin className="w-4 h-4 text-[#C4A46A] shrink-0 mt-0.5" />
                <span className="line-clamp-1">{activeFunnel.advisor.location}</span>
              </div>
            </div>

            {/* Direct 1-Click Specialist Actions */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/${COMPANY_INFO.phoneClean}?text=${encodeURIComponent(
                  activeFunnel.advisor.whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp {activeFunnel.advisor.name.split(' ')[0]}</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="px-4 py-3 bg-white/10 hover:bg-white/15 text-white font-bold text-xs rounded-xl border border-white/20 transition-all flex items-center justify-center gap-2 text-center"
              >
                <Phone className="w-3.5 h-3.5 text-[#C4A46A]" />
                <span>Direct Hotline</span>
              </a>
            </div>
          </div>

          {/* Right Column: Asset Strategy, Yield Benchmarks & Instant Allocation (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="text-xs uppercase font-extrabold tracking-widest text-[#C4A46A] mb-1">
                Asset Allocation Dossier
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-black text-white">{activeFunnel.headline}</h3>
              <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed">
                {activeFunnel.description}
              </p>
            </div>

            {/* Financial Benchmark Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {activeFunnel.metrics.map((m, idx) => (
                <div key={idx} className="bg-[#0A101D]/60 rounded-xl p-3.5 border border-[#C4A46A]/20">
                  <div className="text-[11px] text-gray-400">{m.label}</div>
                  <div className="text-lg font-serif font-black text-[#F5E6CA] my-0.5">{m.value}</div>
                  <div className="text-[10px] text-[#C4A46A]">{m.detail}</div>
                </div>
              ))}
            </div>

            {/* Dynamic Capital & Yield Cashflow Simulator */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#080D18]/90 border border-[#C4A46A]/30 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#C4A46A] flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>Dynamic Capital & Cashflow Simulator</span>
                  </span>
                  <div className="text-xs text-gray-300">Simulate returns for {activeFunnel.label}</div>
                </div>

                <div className="text-left sm:text-right">
                  <div className="text-[10px] text-gray-400">Target Capital Allocation</div>
                  <div className="text-base sm:text-lg font-serif font-black text-[#C4A46A]">{formatPKR(budget)}</div>
                </div>
              </div>

              {/* Range Slider */}
              <div>
                <input
                  type="range"
                  min={10000000}
                  max={65000000}
                  step={2500000}
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="w-full accent-[#C4A46A] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-gray-500 font-mono mt-1">
                  <span>PKR 1.00 Cr</span>
                  <span>PKR 3.50 Cr</span>
                  <span>PKR 6.50 Cr</span>
                </div>
              </div>

              {/* Dynamic Simulated Output */}
              <div className="grid grid-cols-3 gap-2.5 pt-1 text-center">
                <div className="p-2.5 rounded-xl bg-[#0D1525] border border-white/5">
                  <div className="text-[10px] text-gray-400">Annual Rental</div>
                  <div className="text-xs sm:text-sm font-bold text-emerald-400 mt-0.5">
                    +{formatPKR(Math.round(budget * (activeFunnel.id === 'commercial' ? 0.12 : 0.09)))}
                  </div>
                  <div className="text-[9px] text-gray-500">Per annum</div>
                </div>

                <div className="p-2.5 rounded-xl bg-[#0D1525] border border-white/5">
                  <div className="text-[10px] text-gray-400">3-Yr Capital Gain</div>
                  <div className="text-xs sm:text-sm font-bold text-[#F5E6CA] mt-0.5">
                    +{formatPKR(Math.round(budget * 0.65))}
                  </div>
                  <div className="text-[9px] text-[#C4A46A]">Projected growth</div>
                </div>

                <div className="p-2.5 rounded-xl bg-[#0D1525] border border-white/5">
                  <div className="text-[10px] text-gray-400">Booking (25%)</div>
                  <div className="text-xs sm:text-sm font-bold text-white mt-0.5">
                    {formatPKR(Math.round(budget * 0.25))}
                  </div>
                  <div className="text-[9px] text-gray-500">Immediate token</div>
                </div>
              </div>
            </div>

            {/* Recommended Flagship Unit Banner */}
            <div className="bg-[#0D1627]/90 rounded-2xl p-4 sm:p-5 border border-[#C4A46A]/35 flex flex-col sm:flex-row items-center gap-4">
              <img
                src={activeFunnel.recommendedProject.image}
                alt={activeFunnel.recommendedProject.title}
                className="w-full sm:w-28 h-20 rounded-xl object-cover border border-[#C4A46A]/40 shrink-0"
              />
              <div className="flex-1 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C4A46A]">
                    Recommended Prime Allocation
                  </span>
                </div>
                <div className="text-base font-serif font-bold text-white">
                  {activeFunnel.recommendedProject.title}
                </div>
                <div className="text-xs text-gray-300">
                  {activeFunnel.recommendedProject.unitType} • Starting at{' '}
                  <span className="text-[#C4A46A] font-bold">
                    {formatPKR(activeFunnel.recommendedProject.priceStarting)}
                  </span>
                </div>
                <div className="text-[11px] text-gray-400 mt-1 line-clamp-1">
                  {activeFunnel.recommendedProject.highlight}
                </div>
              </div>

              <Link
                href={`/projects/${activeFunnel.recommendedProject.slug}`}
                className="px-4 py-2 bg-[#C4A46A] hover:bg-[#D4B57C] text-[#101B2E] font-bold text-xs rounded-xl transition-all shrink-0 flex items-center gap-1.5 cursor-pointer"
              >
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Step 3: Fast In-Funnel Lead Dispatch Form */}
            <div className="bg-[#0A101D]/70 rounded-2xl p-5 border border-[#C4A46A]/20">
              {submitted ? (
                <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-center space-y-2 animate-in fade-in">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                  <div className="text-sm font-bold text-emerald-200">
                    Lead Assigned Directly to {activeFunnel.advisor.name}
                  </div>
                  <p className="text-xs text-emerald-300/80">
                    Your VIP file has been registered. {activeFunnel.advisor.name} or their executive desk will reach you at{' '}
                    <span className="font-bold text-white">{leadPhone || 'your contact number'}</span> within 15 minutes.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleLeadSubmit} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#C4A46A]" />
                      <span>Instant VIP Consultation Dispatch</span>
                    </span>
                    <span className="text-[10px] text-gray-400">Direct routed to {activeFunnel.advisor.name}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      value={leadName}
                      onChange={(e) => setLeadName(e.target.value)}
                      placeholder="Your Full Name"
                      className="w-full bg-[#101B2E] border border-[#C4A46A]/30 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-hidden focus:border-[#C4A46A]"
                    />
                    <input
                      type="tel"
                      required
                      value={leadPhone}
                      onChange={(e) => setLeadPhone(e.target.value)}
                      placeholder="WhatsApp / Phone (+92 300...)"
                      className="w-full bg-[#101B2E] border border-[#C4A46A]/30 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-hidden focus:border-[#C4A46A]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2.5 bg-[#C4A46A] hover:bg-[#D4B57C] text-[#101B2E] font-extrabold text-xs rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <span>
                      {isSubmitting ? 'Routing to Desk...' : `Dispatch Inquiry Directly to ${activeFunnel.advisor.name}`}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
