'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Download, Check, ExternalLink } from 'lucide-react';
import { PROJECTS } from '@/data/projects';
import { formatPKR } from '@/data/constants';
import { DownloadModalGate } from '@/components/molecules/DownloadModalGate';

export const ProjectMatrixTable: React.FC = () => {
  const [selectedModalProject, setSelectedModalProject] = useState<{
    id: string;
    title: string;
    doc: string;
  } | null>(null);

  const parameters = [
    {
      label: 'Municipality & Territory',
      key: 'city',
      render: (p: any) => (
        <span className="capitalize font-bold text-[#101B2E]">
          {p.city === 'lahore' ? 'Bahria Town Lahore' : 'Bahria Islamabad (Phase 8)'}
        </span>
      ),
    },
    {
      label: 'Specific Geolocation',
      key: 'location',
      render: (p: any) => (
        <span className="text-xs text-gray-700">{p.location_text}</span>
      ),
    },
    {
      label: 'Structural Scale & Height',
      key: 'floors',
      render: (p: any) => (
        <span className="inline-block px-2.5 py-1 bg-[#F5F2EB] text-[#101B2E] font-bold text-xs rounded-md border border-[#C4A46A]/50">
          {p.floor_count}
        </span>
      ),
    },
    {
      label: 'Core Architectural Theme',
      key: 'concept',
      render: (p: any) => (
        <span className="text-xs font-semibold text-gray-800">{p.concept_theme}</span>
      ),
    },
    {
      label: 'Commercial Footfall Exposure',
      key: 'footfall',
      render: (p: any) => (
        <div className="text-xs">
          <strong className="text-emerald-700 block">{p.footfall_metric || 'Strategic Transit Node'}</strong>
          <span className="text-[11px] text-gray-500">Projected Daily Pedestrian & Commuter Inflow</span>
        </div>
      ),
    },
    {
      label: 'Target Investor Demographic',
      key: 'investor_profile',
      render: (p: any) => {
        let profile = '';
        if (p.id === 'grand-15') profile = 'High-Net-Worth Residents, Eiffel View Luxury Investors & Branded Retailers';
        else if (p.id === 'grand-14') profile = 'Turnkey Serviced Rental Landlords & High-Visibility Boulevard Retail';
        else if (p.id === 'grand-x') profile = 'Theme Park F&B Operators, Shopping Mall Retailers & 4-Star Hospitality Owners';
        else if (p.id === 'grand-11') profile = 'Corporate Executives, Legal & Consulting Lofts, Midway Commercial Merchants';
        else if (p.id === 'grand-12') profile = 'Twin Cities Corporate Headquarters, Diplomatic Missions, NRP Expatriates';
        return <span className="text-xs text-gray-700">{profile}</span>;
      },
    },
    {
      label: 'Unit Typology Offering',
      key: 'typology',
      render: (p: any) => (
        <div className="flex flex-wrap gap-1 text-[11px]">
          {p.offering_types.map((type: string) => (
            <span
              key={type}
              className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-md font-medium capitalize"
            >
              {type.replace('_', ' ')}
            </span>
          ))}
        </div>
      ),
    },
    {
      label: 'Baseline Price Horizon',
      key: 'pricing',
      render: (p: any) => (
        <div>
          <div className="text-xs font-black text-[#C4A46A]">
            From {formatPKR(p.starting_price_pkr)}
          </div>
          <div className="text-[11px] text-gray-500">Up to {formatPKR(p.max_price_pkr)}</div>
        </div>
      ),
    },
    {
      label: 'Signature Views & Visual Horizon',
      key: 'views',
      render: (p: any) => {
        let view = '';
        if (p.id === 'grand-15') view = 'Dancing Fountains, Central Green Park, Eiffel Tower Replica';
        else if (p.id === 'grand-14') view = 'Dual-Facing: Main Boulevard & Green Sector Parklands';
        else if (p.id === 'grand-x') view = 'Direct Bahria Theme Park & Carnival Promenade Frontage';
        else if (p.id === 'grand-11') view = 'Talwar Chowk Midway Commercial Plaza Skyline';
        else if (p.id === 'grand-12') view = 'Statue of Liberty Monument & Margalla Foothills';
        return <span className="text-xs font-semibold text-gray-800">{view}</span>;
      },
    },
    {
      label: 'Handover & Construction Milestone',
      key: 'timeline',
      render: (p: any) => (
        <span className="text-xs font-medium text-gray-700 block">
          {p.handover_timeline}
        </span>
      ),
    },
  ];

  return (
    <div className="bg-white dark:bg-[#152238] rounded-3xl border border-[#C4A46A]/40 dark:border-[#C4A46A]/30 shadow-xs overflow-hidden transition-colors duration-300">
      {/* Comparison Matrix Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left min-w-[1000px]">
          <thead>
            <tr className="bg-[#101B2E] text-[#F5F2EB]">
              <th className="sticky left-0 z-20 bg-[#101B2E] py-5 px-6 text-sm font-serif font-black uppercase tracking-wider text-[#C4A46A] border-r border-[#C4A46A]/20 w-64">
                Parametric Evaluation Matrix
              </th>
              {PROJECTS.map((project) => (
                <th
                  key={project.id}
                  className="py-5 px-6 text-sm font-bold border-r border-[#C4A46A]/20 w-72 min-w-[260px]"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-bold text-[#C4A46A] tracking-widest block">
                      {project.status_badge}
                    </span>
                    <h3 className="text-base font-serif font-bold text-white line-clamp-1">
                      {project.title}
                    </h3>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1 text-xs text-[#C4A46A] hover:underline pt-1"
                    >
                      <span>Explore Full Dossier</span>
                      <ExternalLink className="w-3 h-3" />
                    </Link>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-white/10">
            {parameters.map((param, index) => (
              <tr
                key={param.key}
                className={index % 2 === 0 ? 'bg-white dark:bg-[#152238]' : 'bg-[#F5F2EB]/40 dark:bg-[#101B2E]/60 hover:bg-[#F5F2EB]/70 dark:hover:bg-[#101B2E]/80'}
              >
                {/* Sticky Parameter Column */}
                <td className="sticky left-0 z-10 bg-inherit py-4 px-6 text-xs font-bold text-[#101B2E] dark:text-[#C4A46A] uppercase tracking-wider border-r border-gray-200 dark:border-white/10">
                  {param.label}
                </td>

                {/* Values across 5 towers */}
                {PROJECTS.map((project) => (
                  <td
                    key={`${project.id}-${param.key}`}
                    className="py-4 px-6 text-xs border-r border-gray-100 dark:border-white/10 align-top text-gray-700 dark:text-gray-300"
                  >
                    {param.render(project)}
                  </td>
                ))}
              </tr>
            ))}

            {/* Bottom Actions Row */}
            <tr className="bg-gray-50 dark:bg-[#0A121F] border-t-2 border-gray-200 dark:border-white/10">
              <td className="sticky left-0 z-10 bg-gray-50 dark:bg-[#0A121F] py-5 px-6 text-xs font-bold text-[#101B2E] dark:text-[#F5F2EB] uppercase tracking-wider border-r border-gray-200 dark:border-white/10">
                Direct Conversion Action
              </td>
              {PROJECTS.map((project) => (
                <td key={`action-${project.id}`} className="py-5 px-6 border-r border-gray-200 dark:border-white/10 align-top">
                  <div className="space-y-2">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="w-full py-2.5 px-3 bg-[#101B2E] dark:bg-[#C4A46A] hover:bg-[#1A2B47] dark:hover:bg-[#A9874D] text-[#C4A46A] dark:text-[#101B2E] border border-[#C4A46A]/40 text-xs font-bold rounded-xl text-center flex items-center justify-center gap-1.5 transition-all"
                    >
                      <span>View Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <button
                      onClick={() =>
                        setSelectedModalProject({
                          id: project.id,
                          title: project.title,
                          doc: 'Phased Payment Schedule',
                        })
                      }
                      className="w-full py-2 px-3 border border-[#C4A46A] hover:bg-[#F5F2EB] dark:hover:bg-white/10 text-[#101B2E] dark:text-[#F5F2EB] text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5 text-[#C4A46A]" />
                      <span>Payment Plan PDF</span>
                    </button>
                  </div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Gated Modal Handler */}
      {selectedModalProject && (
        <DownloadModalGate
          isOpen={true}
          onClose={() => setSelectedModalProject(null)}
          documentTitle={selectedModalProject.doc}
          projectTitle={selectedModalProject.title}
          projectId={selectedModalProject.id}
        />
      )}
    </div>
  );
};
