'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sun,
  Moon,
  Sparkles,
  Building2,
  Layers,
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  Maximize2,
  Eye,
  UserCheck,
} from 'lucide-react';
import { COMPANY_INFO, formatPKR } from '@/data/constants';

interface Hotspot {
  id: string;
  level: string;
  title: string;
  typology: string;
  sqft: string;
  priceStarting: number;
  assignedAdvisor: {
    name: string;
    role: string;
  };
  features: string[];
  topPercent: number; // percentage from top on render
  leftPercent: number; // percentage from left on render
  whatsappQuery: string;
}

const ARCHITECTURAL_HOTSPOTS: Hotspot[] = [
  {
    id: 'rooftop',
    level: 'Rooftop',
    title: 'Sky Botanical Garden & Infinity Pool',
    typology: 'Resident Amenity',
    sqft: '4,500 Sq Ft Decks',
    priceStarting: 0,
    assignedAdvisor: {
      name: 'Waqas Ayub',
      role: 'Senior Vice President Sales',
    },
    features: ['Heated Infinity Pool', 'Barbecue Pergolas', '360° Eiffel Tower Observation Deck'],
    topPercent: 8,
    leftPercent: 50,
    whatsappQuery: 'Hi Waqas Ayub, I am inquiring about resident amenities and rooftop penthouses at Grand 15.',
  },
  {
    id: 'penthouses',
    level: 'Level 14',
    title: 'Curated Duplex Sky Penthouses',
    typology: 'Residential Luxury',
    sqft: '2,850 Sq Ft',
    priceStarting: 38500000,
    assignedAdvisor: {
      name: 'Waqas Ayub',
      role: 'Senior Vice President Sales',
    },
    features: ['Direct Eiffel Tower & Fountain Vista', 'Private Elevator Landing', 'Double-Height Living Vault'],
    topPercent: 20,
    leftPercent: 62,
    whatsappQuery: 'Hello Waqas Ayub, I would like to reserve a Level 14 Sky Penthouse facing the Eiffel Tower at Grand 15.',
  },
  {
    id: 'suites',
    level: 'Levels 05–12',
    title: 'Serviced 1 & 2-Bed Luxury Suites',
    typology: 'Turnkey Residential',
    sqft: '750 – 1,450 Sq Ft',
    priceStarting: 18500000,
    assignedAdvisor: {
      name: 'Iqra Nadeem',
      role: 'Head of Client Advisory & Overseas NRP Desk',
    },
    features: ['Turnkey Rental Pool Option', 'Balcony with Downtown Boulevard View', 'Integrated Smart Home Automation'],
    topPercent: 44,
    leftPercent: 38,
    whatsappQuery: 'Hello Iqra Nadeem, I am an overseas investor inquiring about 1 & 2-Bed Serviced Suites at Grand 15.',
  },
  {
    id: 'foodcourt',
    level: 'Level 02',
    title: 'Destination Theme Food Court',
    typology: 'Commercial Hospitality',
    sqft: '350 – 900 Sq Ft Bays',
    priceStarting: 12500000,
    assignedAdvisor: {
      name: 'Naeem Ahsan',
      role: 'Director Sales & Commercial Strategy',
    },
    features: ['8,500+ Projected Daily Promenade Footfall', 'Central Exhaust & Grease Traps', 'High-Yield Brand Tenant Leases'],
    topPercent: 68,
    leftPercent: 58,
    whatsappQuery: 'Hello Naeem Ahsan, I want to inquire about leasing or purchasing a Food Court Bay at Grand 15 / Grand X.',
  },
  {
    id: 'retail',
    level: 'Ground & Mezzanine',
    title: 'Flagship Promenade Retail Frontage',
    typology: 'Commercial Retail',
    sqft: '600 – 2,200 Sq Ft',
    priceStarting: 24500000,
    assignedAdvisor: {
      name: 'Naeem Ahsan',
      role: 'Director Sales & Commercial Strategy',
    },
    features: ['28-Ft Double Height Ceiling', 'Direct Main Boulevard Footfall', 'Continuous Pedestrian Arcade'],
    topPercent: 86,
    leftPercent: 45,
    whatsappQuery: 'Hello Naeem Ahsan, please send availability and pricing for Ground Floor Commercial Retail Frontage.',
  },
];

export const ArchitecturalExplorer: React.FC = () => {
  const [atmosphere, setAtmosphere] = useState<'day' | 'night'>('day');
  const [activeHotspotId, setActiveHotspotId] = useState<string>('penthouses');

  const activeHotspot =
    ARCHITECTURAL_HOTSPOTS.find((h) => h.id === activeHotspotId) || ARCHITECTURAL_HOTSPOTS[1];

  return (
    <section id="architecture-explorer" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill text-[11px] font-bold text-[#D9B878] uppercase tracking-wider mb-3 border border-[#D9B878]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#D9B878]" />
            <span>Interactive Elevation & Atmosphere Explorer</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-[51px] md:leading-[56px] font-bold text-white tracking-tight">
            Flagship Architectural Anatomy <br />
            <span className="gold-gradient-text">The Grand Lifestyle — Grand 15</span>
          </h2>

          <p className="text-[15px] leading-[23px] text-[#A39C8F] mt-2 max-w-xl">
            Inspect vertical zoning, level allocations, and prime views facing the Eiffel Tower replica. Switch between sunlit daytime ambiance and illuminated night grandeur.
          </p>
        </div>

        {/* Day / Night Mood Switcher (Inspired by era-residence.com) */}
        <div className="flex items-center gap-2 p-1.5 rounded-[16px] glass-panel border border-[#D9B878]/40 self-start md:self-end">
          <button
            onClick={() => setAtmosphere('day')}
            className={`px-4 py-2.5 rounded-[14px] text-[13px] font-bold transition-all flex items-center gap-2 cursor-pointer min-h-[40px] ${
              atmosphere === 'day'
                ? 'bg-[#D9B878] text-[#1C1305] shadow-[0px_8px_30px_-10px_rgba(217,184,120,0.55)]'
                : 'text-[#A39C8F] hover:text-white'
            }`}
          >
            <Sun className="w-4 h-4" />
            <span>By Day</span>
          </button>

          <button
            onClick={() => setAtmosphere('night')}
            className={`px-4 py-2.5 rounded-[14px] text-[13px] font-bold transition-all flex items-center gap-2 cursor-pointer min-h-[40px] ${
              atmosphere === 'night'
                ? 'bg-[#152238] text-[#F6F1E9] border border-[#D9B878]/50 shadow-md shadow-black/50'
                : 'text-[#A39C8F] hover:text-white'
            }`}
          >
            <Moon className="w-4 h-4 text-[#D9B878]" />
            <span>By Night</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Visual Architectural Elevation with Hotspots (7 cols) */}
        <div className="lg:col-span-7 relative rounded-[22px] overflow-hidden glass-panel border border-[#D9B878]/35 shadow-2xl h-[560px] sm:h-[620px] group">
          {/* Elevation Render with Atmosphere Overlay */}
          <img
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80"
            alt="The Grand Lifestyle Grand 15 Architectural Elevation"
            className={`w-full h-full object-cover transition-all duration-700 ${
              atmosphere === 'night'
                ? 'brightness-60 contrast-125 saturate-75 hue-rotate-15'
                : 'brightness-95 contrast-105'
            }`}
          />

          {/* Atmospheric Lighting Gradient */}
          <div
            className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
              atmosphere === 'night'
                ? 'bg-gradient-to-t from-[#0A101D] via-[#101B2E]/60 to-transparent opacity-90'
                : 'bg-gradient-to-t from-[#0A101D] via-transparent to-transparent opacity-60'
            }`}
          />

          {/* Atmosphere Status Chip */}
          <div className="absolute top-4 left-4 glass-pill px-3.5 py-1.5 rounded-full text-[11px] font-bold text-[#F6F1E9] flex items-center gap-2 shadow-lg border border-[#D9B878]/30">
            {atmosphere === 'day' ? (
              <>
                <Sun className="w-3.5 h-3.5 text-[#D9B878]" />
                <span>Golden Hour Sunlight • Direct Eiffel Tower Reflection</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-[#D9B878]" />
                <span>Midnight Facade Illumination • Illuminated Dancing Fountains</span>
              </>
            )}
          </div>

          {/* Interactive Pulsing Hotspot Pins */}
          {ARCHITECTURAL_HOTSPOTS.map((hotspot) => {
            const isSelected = hotspot.id === activeHotspotId;
            return (
              <button
                key={hotspot.id}
                onClick={() => setActiveHotspotId(hotspot.id)}
                style={{ top: `${hotspot.topPercent}%`, left: `${hotspot.leftPercent}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group/pin cursor-pointer focus:outline-hidden"
                aria-label={`Inspect ${hotspot.title}`}
              >
                {/* Ping wave */}
                <span className="relative flex h-8 w-8 items-center justify-center">
                  <span
                    className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                      isSelected ? 'bg-[#D9B878]' : 'bg-emerald-400'
                    }`}
                  />
                  <span
                    className={`relative inline-flex rounded-full h-5 w-5 items-center justify-center font-mono font-bold text-[9px] shadow-lg transition-transform duration-300 ${
                      isSelected
                        ? 'bg-[#D9B878] text-[#1C1305] scale-125 ring-2 ring-white'
                        : 'bg-[#101B2E] text-[#D9B878] border border-[#D9B878] group-hover/pin:scale-110'
                    }`}
                  >
                    +
                  </span>
                </span>

                {/* Floating mini pill on hover */}
                <span className="absolute left-10 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-[14px] glass-panel text-[11px] font-bold text-white whitespace-nowrap opacity-0 group-hover/pin:opacity-100 transition-opacity pointer-events-none shadow-xl border border-[#D9B878]/40">
                  {hotspot.level}: {hotspot.title}
                </span>
              </button>
            );
          })}

          {/* Bottom Floating Instruction */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[13px] text-[#F6F1E9] glass-panel px-4 py-2.5 rounded-[14px] border border-white/10">
            <span className="flex items-center gap-1.5">
              <Eye className="w-4 h-4 text-[#D9B878]" />
              <span>Click any pulsing pin to inspect floor specifications & dedicated advisor</span>
            </span>
            <span className="font-mono text-[11px] text-[#D9B878] uppercase font-bold">Grand 15 • G+14</span>
          </div>
        </div>

        {/* Right Column: Detailed Hotspot Dossier & Assigned Director (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel rounded-[22px] p-6 sm:p-8 space-y-6 border border-[#D9B878]/30 relative overflow-hidden">
            {/* Header info */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#D9B878] bg-[#D9B878]/20 px-3 py-1 rounded-[14px] border border-[#D9B878]/30">
                  {activeHotspot.level}
                </span>
                <span className="text-[13px] text-[#A39C8F] font-semibold">{activeHotspot.typology}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{activeHotspot.title}</h3>
              <div className="text-[13px] text-[#F6F1E9] font-medium mt-1">Spatial Scale: {activeHotspot.sqft}</div>
            </div>

            {/* Price Indicator */}
            {activeHotspot.priceStarting > 0 ? (
              <div className="p-4 rounded-[16px] bg-[#0A101D]/80 border border-[#D9B878]/25 flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-[#A39C8F] uppercase font-bold">Starting Valuation</div>
                  <div className="text-[22px] font-bold text-[#D9B878] tracking-tight">
                    From {formatPKR(activeHotspot.priceStarting)}
                  </div>
                </div>
                <div className="text-[11px] text-[#A39C8F] font-medium">36-Month Plan Available</div>
              </div>
            ) : (
              <div className="p-3.5 rounded-[16px] bg-emerald-950/40 border border-emerald-500/30 text-[13px] text-emerald-300 font-semibold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Exclusive Complimentary Resident Wellness Amenity</span>
              </div>
            )}

            {/* Key Features List */}
            <div className="space-y-2.5">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#A39C8F]">Architectural Highlights</div>
              {activeHotspot.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2 text-[13px] text-[#F6F1E9]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Assigned Director Direct Card */}
            <div className="p-4 rounded-[16px] bg-[#0A101D]/90 border border-[#D9B878]/30 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#D9B878]">
                  Dedicated Level Lead
                </span>
                <span className="text-[11px] text-emerald-400 font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Direct Desk</span>
                </span>
              </div>

              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-[15px] font-bold text-white">{activeHotspot.assignedAdvisor.name}</div>
                  <div className="text-[11px] text-[#A39C8F]">{activeHotspot.assignedAdvisor.role}</div>
                </div>

                <a
                  href={`https://wa.me/${COMPANY_INFO.phoneClean}?text=${encodeURIComponent(activeHotspot.whatsappQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-[13px] rounded-[14px] shadow-[0px_8px_20px_-10px_rgba(37,211,102,0.6)] transition-all flex items-center gap-1.5 shrink-0 min-h-[40px]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Quick Link to Project Dossier */}
            <div className="pt-2 flex items-center justify-between">
              <Link
                href="/projects/grand-15"
                className="text-[13px] font-bold text-[#D9B878] hover:text-[#F6F1E9] transition-colors flex items-center gap-1"
              >
                <span>View Full Grand 15 Dossier</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                href="/inventory"
                className="text-[13px] font-bold text-[#A39C8F] hover:text-white transition-colors"
              >
                <span>Live Availability Sheet →</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
