import React from 'react';
import { Metadata } from 'next';
import { ProjectMatrixTable } from '@/components/organisms/ProjectMatrixTable';
import { COMPANY_INFO } from '@/data/constants';
import { Sparkles, SlidersHorizontal, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { WhatsAppCTA } from '@/components/atoms/WhatsAppCTA';

export const metadata: Metadata = {
  title: 'Parametric Comparison Matrix — Contrast Boulevard 01 High-Rise Towers',
  description:
    'Evaluate Boulevard 01 active towers side-by-side by municipality, footfall projection, structural height, pricing tiers, and investor return profiles.',
  alternates: {
    canonical: `${COMPANY_INFO.websiteUrl}/compare`,
  },
};

export default function ComparePage() {
  return (
    <div className="bg-[#F5F2EB]/40 dark:bg-[#0A121F] min-h-screen py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header Strip */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#101B2E] dark:bg-[#C4A46A] text-[#C4A46A] dark:text-[#101B2E] border border-[#C4A46A]/50 rounded-full text-xs font-bold uppercase tracking-wider">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Parametric Investor Evaluation</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-black text-[#101B2E] dark:text-white">
            Multi-Tower Comparative Matrix
          </h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
            Side-by-side analysis contrasting geographic positioning, commercial footfall dynamics, structural height, and target investor profiles across our 5 flagship developments.
          </p>
        </div>

        {/* Project Matrix Table Organism */}
        <ProjectMatrixTable />

        {/* Advisory Context Box */}
        <div className="bg-white dark:bg-[#152238] p-8 rounded-3xl border border-[#C4A46A]/40 dark:border-[#C4A46A]/30 shadow-xs grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <h3 className="text-sm font-bold font-serif text-[#101B2E] dark:text-[#F5F2EB]">
              Commercial vs. Residential Footprint
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
              If your priority is guaranteed pedestrian volume and commercial tenancy, <strong>Grand X</strong> (Theme Park) and <strong>Grand 11</strong> (Midway Commercial) deliver prime high-density circulation.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-bold font-serif text-[#101B2E] dark:text-[#F5F2EB]">
              Luxury Lifestyle & Icon Vistas
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
              For trophy residential penthouses facing the dancing fountains and Eiffel Tower replica, <strong>The Grand Lifestyle — Grand 15</strong> in Bahria Downtown represents our architectural zenith.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-bold font-serif text-[#101B2E] dark:text-[#F5F2EB]">
              Institutional Twin-Cities Expansion
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
              For corporate leases, multinational software houses, and diplomatic suites in Islamabad, <strong>The View — Grand 12</strong> anchors Phase 8 Business District with a 5-in-1 hybrid zoning blueprint.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-[#101B2E] text-white p-8 rounded-3xl border border-[#C4A46A]/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-xl font-serif font-bold text-white">
              Still Deciding Between Projects?
            </h3>
            <p className="text-xs text-gray-300">
              Speak directly with our Chief Commercial Strategist Naeem Ahsan for an unscripted financial feasibility review.
            </p>
          </div>

          <WhatsAppCTA
            message="Hello Naeem Ahsan, I have reviewed the Parametric Comparison Matrix and want to discuss which tower best fits my capital allocation."
            label="Schedule Investment Review"
            size="md"
            variant="emerald"
          />
        </div>
      </div>
    </div>
  );
}
