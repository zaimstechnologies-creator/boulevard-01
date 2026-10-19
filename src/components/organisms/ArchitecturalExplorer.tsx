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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill text-xs font-bold text-[#C4A46A] uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Elevation & Atmosphere Explorer</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-white tracking-tight">
            Flagship Architectural Anatomy <br />
            <span className="gold-gradient-text">The Grand Lifestyle — Grand 15</span>
          </h2>

          <p className="text-xs sm:text-sm text-gray-300 mt-2 max-w-xl leading-relaxed">
            Inspect vertical zoning, level allocations, and prime views facing the Eiffel Tower replica. Switch between sunlit daytime ambiance and illuminated night grandeur.
          </p>
        </div>

        {/* Day / Night Mood Switcher (Inspired by era-residence.com) */}
        <div className="flex items-center gap-2 p-1.5 rounded-2xl glass-panel border border-[#C4A46A]/40 self-start md:self-end">
          <button
            onClick={() => setAtmosphere('day')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
              atmosphere === 'day'
                ? 'bg-[#C4A46A] text-[#101B2E] shadow-md shadow-[#C4A46A]/30'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            <Sun className="w-3.5 h-3.5" />
            <span>By Day</span>
          </button>

          <button
            onClick={() => setAtmosphere('night')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
              atmosphere === 'night'
                ? 'bg-[#152238] text-[#F5E6CA] border border-[#C4A46A]/50 shadow-md shadow-black/50'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            <Moon className="w-3.5 h-3.5 text-[#C4A46A]" />
            <span>By Night</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Visual Architectural Elevation with Hotspots (7 cols) */}
        <div className="lg:col-span-7 relative rounded-3xl overflow-hidden glass-panel border border-[#C4A46A]/35 shadow-2xl h-[560px] sm:h-[620px] group">
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
          <div className="absolute top-4 left-4 glass-pill px-3 py-1.5 rounded-full text-[11px] font-bold text-[#F5E6CA] flex items-center gap-2 shadow-lg">
            {atmosphere === 'day' ? (
              <>
                <Sun className="w-3.5 h-3.5 text-[#C4A46A]" />
                <span>Golden Hour Sunlight • Direct Eiffel Tower Reflection</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-[#C4A46A]" />
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
                      isSelected ? 'bg-[#C4A46A]' : 'bg-emerald-400'
                    }`}
                  />
                  <span
                    className={`relative inline-flex rounded-full h-5 w-5 items-center justify-center font-mono font-bold text-[9px] shadow-lg transition-transform duration-300 ${
                      isSelected
                        ? 'bg-[#C4A46A] text-[#101B2E] scale-125 ring-2 ring-white'
                        : 'bg-[#101B2E] text-[#C4A46A] border border-[#C4A46A] group-hover/pin:scale-110'
                    }`}
                  >
                    +
                  </span>
                </span>

                {/* Floating mini pill on hover */}
                <span className="absolute left-10 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-md glass-panel text-[10px] font-bold text-white whitespace-nowrap opacity-0 group-hover/pin:opacity-100 transition-opacity pointer-events-none shadow-xl border border-[#C4A46A]/40">
                  {hotspot.level}: {hotspot.title}
                </span>
              </button>
            );
          })}

          {/* Bottom Floating Instruction */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] text-gray-300 glass-panel px-4 py-2 rounded-xl">
            <span className="flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5 text-[#C4A46A]" />
              <span>Click any pulsing pin to inspect floor specifications & dedicated advisor</span>
            </span>
            <span className="font-mono text-[10px] text-[#C4A46A] uppercase font-bold">Grand 15 • G+14</span>
          </div>
        </div>

        {/* Right Column: Detailed Hotspot Dossier & Assigned Director (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel rounded-3xl p-6 sm:p-8 space-y-6 border border-[#C4A46A]/30 relative overflow-hidden">
            {/* Header info */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#C4A46A] bg-[#C4A46A]/20 px-3 py-0.5 rounded-full border border-[#C4A46A]/30">
                  {activeHotspot.level}
                </span>
                <span className="text-xs text-gray-400 font-semibold">{activeHotspot.typology}</span>
              </div>

              <h3 className="text-2xl font-serif font-black text-white">{activeHotspot.title}</h3>
              <div className="text-xs text-[#F5E6CA] font-medium mt-1">Spatial Scale: {activeHotspot.sqft}</div>
            </div>

            {/* Price Indicator */}
            {activeHotspot.priceStarting > 0 ? (
              <div className="p-4 rounded-2xl bg-[#0A101D]/80 border border-[#C4A46A]/25 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-gray-400 uppercase font-bold">Starting Valuation</div>
                  <div className="text-xl font-serif font-black text-[#C4A46A]">
                    From {formatPKR(activeHotspot.priceStarting)}
                  </div>
                </div>
                <div className="text-[10px] text-gray-300 font-medium">36-Month Plan Available</div>
              </div>
            ) : (
              <div className="p-3.5 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-xs text-emerald-300 font-semibold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Exclusive Complimentary Resident Wellness Amenity</span>
              </div>
            )}

            {/* Key Features List */}
            <div className="space-y-2.5">
              <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Architectural Highlights</div>
              {activeHotspot.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Assigned Director Direct Card */}
            <div className="p-4 rounded-2xl bg-[#0A101D]/90 border border-[#C4A46A]/30 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#C4A46A]">
                  Dedicated Level Lead
                </span>
                <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Direct Desk</span>
                </span>
              </div>

              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-serif font-bold text-white">{activeHotspot.assignedAdvisor.name}</div>
                  <div className="text-[11px] text-gray-400">{activeHotspot.assignedAdvisor.role}</div>
                </div>

                <a
                  href={`https://wa.me/${COMPANY_INFO.phoneClean}?text=${encodeURIComponent(activeHotspot.whatsappQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-xs rounded-xl shadow-md transition-all flex items-center gap-1.5 shrink-0"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Quick Link to Project Dossier */}
            <div className="pt-2 flex items-center justify-between">
              <Link
                href="/projects/grand-15"
                className="text-xs font-bold text-[#C4A46A] hover:text-[#F5E6CA] transition-colors flex items-center gap-1"
              >
                <span>View Full Grand 15 Dossier</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                href="/inventory"
                className="text-xs font-bold text-gray-300 hover:text-white transition-colors"
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
