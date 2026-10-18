'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Download,
  Video,
  MapPin,
  Calendar,
  Layers,
  ArrowRight,
  CheckCircle2,
  Share2,
  FileText,
  Shield,
  Building,
} from 'lucide-react';
import { Project, InventoryUnit } from '@/types';
import { formatPKR } from '@/data/constants';
import { StatusBadge } from '@/components/atoms/StatusBadge';
import { WhatsAppCTA } from '@/components/atoms/WhatsAppCTA';
import { ProjectMetricRow } from '@/components/molecules/ProjectMetricRow';
import { AmenityIcon } from '@/components/atoms/AmenityIcon';
import { DownloadModalGate } from '@/components/molecules/DownloadModalGate';
import { InventoryItemRow } from '@/components/molecules/InventoryItemRow';
import { InquiryConsultationForm } from '@/components/organisms/InquiryConsultationForm';

interface ProjectSingleInteractiveProps {
  project: Project;
  unitsForProject: InventoryUnit[];
}

export const ProjectSingleInteractive: React.FC<ProjectSingleInteractiveProps> = ({
  project,
  unitsForProject,
}) => {
  const [activeImage, setActiveImage] = useState(project.cover_image);
  const [activePlanTab, setActivePlanTab] = useState<'residential' | 'commercial'>('residential');
  const [downloadModalDoc, setDownloadModalDoc] = useState<string | null>(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const hasResidentialPlan = Boolean(project.payment_schedules?.residential);
  const hasCommercialPlan = Boolean(project.payment_schedules?.commercial);

  const currentPlan =
    activePlanTab === 'commercial' && hasCommercialPlan
      ? project.payment_schedules?.commercial
      : project.payment_schedules?.residential;

  return (
    <div className="space-y-16 py-8">
      {/* 1. HERO SHOWCASE STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-[#152238] rounded-3xl border border-[#C4A46A]/40 dark:border-[#C4A46A]/30 shadow-xs overflow-hidden transition-colors duration-300">
          {/* Top Headline Strip in Midnight Navy */}
          <div className="p-6 sm:p-8 bg-[#101B2E] text-[#F5F2EB] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <StatusBadge status={project.status} label={project.status_badge} size="sm" />
                <span className="text-xs uppercase tracking-wider text-[#C4A46A] font-bold">
                  {project.concept_theme}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-serif font-black text-white">
                {project.title}
              </h1>
              <div className="flex items-center gap-2 text-xs text-gray-300">
                <MapPin className="w-4 h-4 text-[#C4A46A]" />
                <span>{project.location_text}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <button
                onClick={() => setDownloadModalDoc('Official Architectural Brochure')}
                className="px-4 py-2.5 bg-[#C4A46A] hover:bg-[#A9874D] text-[#101B2E] text-xs font-bold rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Brochure</span>
              </button>

              <WhatsAppCTA
                message={`Hi Boulevard 01, I am reviewing ${project.title} and would like to speak with an on-duty project advisor.`}
                label="WhatsApp Desk"
                size="md"
                variant="emerald"
              />
            </div>
          </div>

          {/* Gallery & Video Section */}
          <div className="p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Main Feature Image / Video Container */}
              <div className="lg:col-span-8 relative h-[380px] sm:h-[480px] rounded-2xl overflow-hidden bg-gray-900 shadow-inner">
                <img
                  src={activeImage}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-500"
                />

                {/* Video Play Button Overlay */}
                {project.walkthrough_url && (
                  <button
                    onClick={() => setIsVideoOpen(true)}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/45 transition-colors group cursor-pointer"
                    aria-label="Play 3D Walkthrough Video"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#C4A46A] text-[#101B2E] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                      <Video className="w-8 h-8 ml-0.5" />
                    </div>
                    <span className="absolute bottom-6 bg-black/75 backdrop-blur-xs text-white text-xs font-bold px-3.5 py-1.5 rounded-full">
                      Watch 3D Architectural Walkthrough
                    </span>
                  </button>
                )}
              </div>

              {/* Thumbnail Gallery Strip & Fast Highlights */}
              <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-[#101B2E] dark:text-[#C4A46A] uppercase tracking-wider block">
                    Architectural Render Gallery
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {project.gallery_renders.map((renderUrl, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImage(renderUrl)}
                        className={`relative h-24 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                          activeImage === renderUrl
                            ? 'border-[#C4A46A] ring-2 ring-[#C4A46A]/30'
                            : 'border-transparent opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={renderUrl}
                          alt={`${project.title} render ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Pricing Box in Warm Ivory */}
                <div className="p-5 bg-[#F5F2EB] dark:bg-[#101B2E] rounded-2xl border border-[#C4A46A]/50 dark:border-[#C4A46A]/30 space-y-3">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-400 font-bold">
                      Price Horizon
                    </div>
                    <div className="text-2xl font-black text-[#101B2E] dark:text-white">
                      From {formatPKR(project.starting_price_pkr)}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">Up to {formatPKR(project.max_price_pkr)}</div>
                  </div>

                  <div className="text-xs text-gray-700 dark:text-gray-300 space-y-1 pt-2 border-t border-[#C4A46A]/30">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 dark:text-gray-400">Structural Timeline:</span>
                      <span className="font-bold text-[#101B2E] dark:text-[#C4A46A]">{project.handover_timeline}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 dark:text-gray-400">Structural Height:</span>
                      <span className="font-bold text-[#101B2E] dark:text-[#C4A46A]">{project.floor_count}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setDownloadModalDoc('Payment Schedule Dossier')}
                    className="w-full py-2.5 bg-[#101B2E] dark:bg-[#C4A46A] hover:bg-[#1A2B47] dark:hover:bg-[#A9874D] text-[#C4A46A] dark:text-[#101B2E] border border-[#C4A46A]/40 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Download className="w-4 h-4 text-[#C4A46A] dark:text-[#101B2E]" />
                    <span>Download Payment Schedule</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Metric Row Molecule */}
            <ProjectMetricRow project={project} />
          </div>
        </div>
      </section>

      {/* 2. ARCHITECTURAL OVERVIEW & VALUE DRIVERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Narrative Column */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white dark:bg-[#152238] p-6 sm:p-8 rounded-3xl border border-[#C4A46A]/40 dark:border-[#C4A46A]/30 shadow-xs space-y-4">
              <h2 className="text-2xl font-serif font-black text-[#101B2E] dark:text-white">
                Architectural Master Plan & Vision
              </h2>
              <div className="prose text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {project.overview_body}
              </div>
            </div>

            {/* Core Value Drivers Matrix */}
            <div className="bg-white dark:bg-[#152238] p-6 sm:p-8 rounded-3xl border border-[#C4A46A]/40 dark:border-[#C4A46A]/30 shadow-xs space-y-6">
              <h2 className="text-2xl font-serif font-black text-[#101B2E] dark:text-white">
                Development Value Drivers & ROI
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.value_drivers.map((driver, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-2xl bg-[#F5F2EB]/60 dark:bg-[#101B2E]/70 border border-[#C4A46A]/30 space-y-2"
                  >
                    {driver.metric && (
                      <span className="inline-block px-2.5 py-1 bg-[#101B2E] dark:bg-[#C4A46A] text-[#C4A46A] dark:text-[#101B2E] border border-[#C4A46A]/40 text-[10px] font-bold rounded-md uppercase tracking-wider">
                        {driver.metric}
                      </span>
                    )}
                    <h3 className="text-sm font-bold text-[#101B2E] dark:text-[#F5F2EB]">{driver.title}</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">{driver.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. TABBED PAYMENT SCHEDULE MATRIX */}
            {project.payment_schedules && (
              <div className="bg-white dark:bg-[#152238] p-6 sm:p-8 rounded-3xl border border-[#C4A46A]/40 dark:border-[#C4A46A]/30 shadow-xs space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 dark:border-white/10 pb-4">
                  <div>
                    <span className="text-xs uppercase text-[#C4A46A] font-bold tracking-wider">
                      Phased Installment Framework
                    </span>
                    <h2 className="text-2xl font-serif font-black text-[#101B2E] dark:text-white">
                      Payment Schedule & Milestones
                    </h2>
                  </div>

                  {/* Tab Switcher if both plans exist */}
                  {hasResidentialPlan && hasCommercialPlan && (
                    <div className="flex items-center gap-1.5 p-1 bg-gray-100 dark:bg-[#101B2E] rounded-xl border border-gray-200 dark:border-white/10">
                      <button
                        onClick={() => setActivePlanTab('residential')}
                        className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                          activePlanTab === 'residential'
                            ? 'bg-[#101B2E] dark:bg-[#C4A46A] text-[#C4A46A] dark:text-[#101B2E] shadow-xs'
                            : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
                        }`}
                      >
                        Residential Schedule
                      </button>
                      <button
                        onClick={() => setActivePlanTab('commercial')}
                        className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                          activePlanTab === 'commercial'
                            ? 'bg-[#101B2E] dark:bg-[#C4A46A] text-[#C4A46A] dark:text-[#101B2E] shadow-xs'
                            : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
                        }`}
                      >
                        Commercial Plan
                      </button>
                    </div>
                  )}
                </div>

                {currentPlan && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                      <div className="p-3 bg-[#F5F2EB] dark:bg-[#101B2E] rounded-2xl border border-[#C4A46A]/30">
                        <div className="text-[10px] text-gray-500 dark:text-gray-400 uppercase font-bold">Duration</div>
                        <div className="text-sm font-bold text-[#101B2E] dark:text-[#F5F2EB] mt-1">{currentPlan.duration}</div>
                      </div>
                      <div className="p-3 bg-[#F5F2EB] dark:bg-[#101B2E] rounded-2xl border border-[#C4A46A]/30">
                        <div className="text-[10px] text-gray-500 dark:text-gray-400 uppercase font-bold">Down Payment</div>
                        <div className="text-sm font-black text-[#C4A46A] mt-1">{currentPlan.downPayment}</div>
                      </div>
                      <div className="p-3 bg-[#F5F2EB] dark:bg-[#101B2E] rounded-2xl border border-[#C4A46A]/30">
                        <div className="text-[10px] text-gray-500 dark:text-gray-400 uppercase font-bold">Installments</div>
                        <div className="text-sm font-bold text-[#101B2E] dark:text-[#F5F2EB] mt-1">{currentPlan.installments}</div>
                      </div>
                      <div className="p-3 bg-[#F5F2EB] dark:bg-[#101B2E] rounded-2xl border border-[#C4A46A]/30">
                        <div className="text-[10px] text-gray-500 dark:text-gray-400 uppercase font-bold">On Possession</div>
                        <div className="text-sm font-bold text-emerald-700 dark:text-emerald-400 mt-1">{currentPlan.onPossession}</div>
                      </div>
                    </div>

                    {/* Milestones Table */}
                    <div className="overflow-x-auto border border-gray-100 dark:border-white/10 rounded-xl">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-gray-50 dark:bg-[#0A121F] text-gray-600 dark:text-gray-300 font-bold uppercase tracking-wider">
                          <tr>
                            <th className="py-2.5 px-4">Payment Milestone Phase</th>
                            <th className="py-2.5 px-4">Percentage</th>
                            <th className="py-2.5 px-4">Trigger / Event</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-white/10">
                          {currentPlan.tiers.map((tier, idx) => (
                            <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-white/5">
                              <td className="py-3 px-4 font-semibold text-[#101B2E] dark:text-[#F5F2EB]">{tier.phase}</td>
                              <td className="py-3 px-4 font-black text-[#C4A46A]">{tier.percentage}</td>
                              <td className="py-3 px-4 text-gray-600 dark:text-gray-300">{tier.milestone}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        * Custom installment schedules available for overseas clients via Roshan Digital Account.
                      </div>
                      <button
                        onClick={() => setDownloadModalDoc(`${project.title} - ${currentPlan.title}`)}
                        className="px-5 py-2.5 bg-[#101B2E] dark:bg-[#C4A46A] hover:bg-[#1A2B47] dark:hover:bg-[#A9874D] text-[#C4A46A] dark:text-[#101B2E] border border-[#C4A46A]/50 text-xs font-bold rounded-xl flex items-center gap-2 cursor-pointer shadow-xs"
                      >
                        <Download className="w-4 h-4 text-[#C4A46A] dark:text-[#101B2E]" />
                        <span>Download Full PDF Plan</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Column: Inquiry Form & Amenities */}
          <div className="lg:col-span-4 space-y-8">
            {/* Direct Consultation Widget */}
            <InquiryConsultationForm defaultProject={project.id} channel="consultation" />

            {/* On-Site Amenities Cluster */}
            <div className="bg-white dark:bg-[#152238] p-6 rounded-3xl border border-[#C4A46A]/40 dark:border-[#C4A46A]/30 shadow-xs space-y-4">
              <h3 className="text-base font-serif font-black text-[#101B2E] dark:text-white">
                Verified Building Amenities
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {project.amenities.map((amenityId) => (
                  <div
                    key={amenityId}
                    className="p-3 rounded-xl bg-[#F5F2EB]/50 dark:bg-[#101B2E] border border-gray-100 dark:border-white/10 flex items-center gap-2.5 text-xs text-gray-800 dark:text-gray-200 font-medium"
                  >
                    <div className="text-[#C4A46A]">
                      <AmenityIcon id={amenityId} className="w-4 h-4" />
                    </div>
                    <span className="capitalize">{amenityId.replace('-', ' ')}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Developer Trust Card */}
            <div className="bg-[#101B2E] text-[#F5F2EB] p-6 rounded-3xl border border-[#C4A46A]/30 space-y-3">
              <div className="text-xs text-[#C4A46A] font-bold uppercase tracking-wider">
                Audited Handover Guarantee
              </div>
              <h4 className="text-lg font-serif font-bold text-white">
                Nine Years of Unbroken Handover Dates
              </h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                Boulevard 01 maintains dedicated self-funded capital reserves, protecting this development from off-plan construction halts.
              </p>
              <div className="pt-2">
                <Link
                  href="/inventory"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C4A46A] hover:underline"
                >
                  <span>Check Live Unit Ledger</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CURRENT LIVE UNITS FOR THIS TOWER */}
      {unitsForProject.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-[#152238] rounded-3xl border border-[#C4A46A]/40 dark:border-[#C4A46A]/30 shadow-xs overflow-hidden">
            <div className="p-6 bg-gray-50 dark:bg-[#0A121F] border-b border-gray-100 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs uppercase text-[#C4A46A] font-bold tracking-wider">
                  Real-Time Stock
                </span>
                <h3 className="text-xl font-serif font-black text-[#101B2E] dark:text-white">
                  Active Inventory at {project.title}
                </h3>
              </div>
              <Link
                href="/inventory"
                className="text-xs font-bold text-[#101B2E] dark:text-[#C4A46A] hover:text-[#C4A46A] dark:hover:text-[#E0CFA8] flex items-center gap-1"
              >
                <span>View Full Multi-City Inventory</span>
                <ArrowRight className="w-3 h-3 text-[#C4A46A]" />
              </Link>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-white dark:bg-[#0E1726] border-b border-gray-200 dark:border-white/10 text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase">
                  <tr>
                    <th className="py-3 px-4">Unit Code</th>
                    <th className="py-3 px-4">Floor Level</th>
                    <th className="py-3 px-4">Typology / Area</th>
                    <th className="py-3 px-4">Price (PKR)</th>
                    <th className="py-3 px-4 hidden md:table-cell">Plan</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4 text-right">Hold Unit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-white/10">
                  {unitsForProject.map((unit) => (
                    <InventoryItemRow key={unit.id} unit={unit} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* 5. VIDEO WALKTHROUGH MODAL */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden aspect-video shadow-2xl border border-[#C4A46A]/40">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-10 px-3 py-1.5 bg-black/60 hover:bg-black text-white text-xs font-bold rounded-lg border border-white/20"
            >
              Close Video (ESC)
            </button>
            <iframe
              src={project.walkthrough_url}
              title={`${project.title} 3D Video Walkthrough`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* 6. GATED DOWNLOAD MODAL */}
      {downloadModalDoc && (
        <DownloadModalGate
          isOpen={true}
          onClose={() => setDownloadModalDoc(null)}
          documentTitle={downloadModalDoc}
          projectTitle={project.title}
          projectId={project.id}
          downloadUrl={project.brochure_file}
        />
      )}
    </div>
  );
};
