import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { PROJECTS } from '@/data/projects';
import { formatPKR } from '@/data/constants';
import { StatusBadge } from '@/components/atoms/StatusBadge';
import { WhatsAppCTA } from '@/components/atoms/WhatsAppCTA';
import { Building2, MapPin, ArrowRight, Download, Filter, Sparkles } from 'lucide-react';
import { ProjectMetricRow } from '@/components/molecules/ProjectMetricRow';

export const metadata: Metadata = {
  title: 'Master Portfolio — High-Rise Developments | Boulevard 01',
  description:
    'Explore active high-rise projects by Boulevard 01 — Landmark of Trust. The Grand Lifestyle (Grand 15), The Oasis (Grand 14), Grand X, Grand 11, and The View (Grand 12 Islamabad Phase 8).',
};

export default function ProjectsPage() {
  return (
    <div className="bg-[#F5F2EB]/40 dark:bg-[#0A121F] min-h-screen py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#101B2E] dark:bg-[#C4A46A] text-[#C4A46A] dark:text-[#101B2E] border border-[#C4A46A]/50 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#C4A46A] dark:text-[#101B2E]" />
            <span>5 Active High-Rise Developments</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-black text-[#101B2E] dark:text-white">
            Master Property Portfolio
          </h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
            Discover architectural icons designed for capital growth, turnkey rental yields, and prime commercial footfall across Bahria Town Lahore and Islamabad by Boulevard 01.
          </p>
        </div>

        {/* Portfolio Listing Grid */}
        <div className="space-y-10">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-[#152238] rounded-3xl border border-[#C4A46A]/40 dark:border-[#C4A46A]/30 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Left Media Column */}
                <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full bg-gray-100 dark:bg-gray-900">
                  <img
                    src={project.cover_image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute top-4 left-4">
                    <StatusBadge status={project.status} label={project.status_badge} size="md" />
                  </div>

                  <div className="absolute top-4 right-4 bg-white/95 dark:bg-[#101B2E]/90 backdrop-blur-xs text-[#101B2E] dark:text-[#C4A46A] text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider border border-white/20 dark:border-[#C4A46A]/30">
                    {project.city === 'lahore' ? 'Bahria Town Lahore' : 'Bahria Islamabad'}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-xs font-semibold text-[#C4A46A] uppercase tracking-wider">
                      {project.concept_theme}
                    </div>
                    <h2 className="text-2xl font-serif font-bold text-white">
                      {project.title}
                    </h2>
                    <div className="text-xs text-gray-300 mt-1 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#C4A46A]" />
                      <span>{project.location_text}</span>
                    </div>
                  </div>
                </div>

                {/* Right Specifications & Details Column */}
                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-serif font-black text-[#101B2E] dark:text-white leading-snug">
                      {project.hero_headline}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {project.overview_body}
                    </p>

                    {/* Metric Row Molecule */}
                    <ProjectMetricRow project={project} />

                    {/* Value Drivers Matrix */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {project.value_drivers.slice(0, 2).map((vd, i) => (
                        <div key={i} className="p-3 bg-[#F5F2EB]/50 dark:bg-[#101B2E]/80 rounded-2xl border border-gray-100 dark:border-white/10">
                          <div className="text-xs font-bold text-[#101B2E] dark:text-[#C4A46A]">{vd.title}</div>
                          <p className="text-[11px] text-gray-600 dark:text-gray-300 mt-0.5 line-clamp-2">{vd.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA Strip */}
                  <div className="pt-4 border-t border-gray-100 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">
                        Baseline Valuation
                      </div>
                      <div className="text-xl font-black text-[#C4A46A]">
                        From {formatPKR(project.starting_price_pkr)}
                      </div>
                      <div className="text-[11px] text-gray-500 dark:text-gray-400">{project.handover_timeline}</div>
                    </div>

                    <div className="flex items-center gap-2.5 w-full sm:w-auto">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="flex-1 sm:flex-none px-5 py-2.5 bg-[#101B2E] dark:bg-[#C4A46A] hover:bg-[#1A2B47] dark:hover:bg-[#A9874D] text-[#C4A46A] dark:text-[#101B2E] border border-[#C4A46A]/40 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2"
                      >
                        <span>Full Dossier</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <WhatsAppCTA
                        message={`Hello Boulevard 01, I would like to check availability and payment schedules for ${project.title}.`}
                        label="WhatsApp Desk"
                        size="sm"
                        variant="emerald"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Portfolio Recommendation Help Box */}
        <div className="bg-[#101B2E] text-[#F5F2EB] p-8 sm:p-12 rounded-3xl border border-[#C4A46A]/40 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs uppercase text-[#C4A46A] font-bold tracking-widest">
              Unbiased Portfolio Matching
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-black text-white">
              Need Personal Guidance on Selecting the Right Tower?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Our Senior Sales Directorate will evaluate your liquidity, desired rental returns, and exit horizon to match you with the optimum floor and asset class.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <Link
              href="/compare"
              className="w-full sm:w-auto px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl border border-white/20 text-center transition-all"
            >
              Compare Towers Side-by-Side
            </Link>
            <WhatsAppCTA
              message="Hello Boulevard 01 Directorate, I need personalized property recommendations based on my capital budget and investment horizon."
              label="Request Recommendations"
              size="md"
              variant="emerald"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
