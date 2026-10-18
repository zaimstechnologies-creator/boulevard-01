import React from 'react';
import { Building2, Users, Home, MapPin } from 'lucide-react';
import { Project } from '@/types';

interface ProjectMetricRowProps {
  project: Project;
  className?: string;
}

export const ProjectMetricRow: React.FC<ProjectMetricRowProps> = ({ project, className = '' }) => {
  const typologiesDisplay = project.offering_types
    .map((t) => t.replace('_', ' ').toUpperCase())
    .join(', ');

  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 py-4 border-y border-[#C4A46A]/30 bg-[#F5F2EB]/70 dark:bg-[#101B2E]/70 dark:border-[#C4A46A]/20 rounded-2xl px-4 transition-colors ${className}`}>
      <div className="flex items-start gap-2.5">
        <Building2 className="w-5 h-5 text-[#C4A46A] shrink-0 mt-0.5" />
        <div>
          <div className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-400 font-bold">Structural Scale</div>
          <div className="text-sm font-bold text-[#101B2E] dark:text-[#F5F2EB]">{project.floor_count}</div>
        </div>
      </div>

      <div className="flex items-start gap-2.5">
        <Users className="w-5 h-5 text-[#C4A46A] shrink-0 mt-0.5" />
        <div>
          <div className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-400 font-bold">Footfall & Visibility</div>
          <div className="text-sm font-bold text-[#101B2E] dark:text-[#F5F2EB] truncate max-w-[160px]" title={project.footfall_metric || 'High Commercial Footfall'}>
            {project.footfall_metric || 'High Commercial'}
          </div>
        </div>
      </div>

      <div className="flex items-start gap-2.5">
        <Home className="w-5 h-5 text-[#C4A46A] shrink-0 mt-0.5" />
        <div>
          <div className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-400 font-bold">Typology Classes</div>
          <div className="text-sm font-bold text-[#101B2E] dark:text-[#F5F2EB] truncate max-w-[160px]" title={typologiesDisplay}>
            {typologiesDisplay}
          </div>
        </div>
      </div>

      <div className="flex items-start gap-2.5">
        <MapPin className="w-5 h-5 text-[#C4A46A] shrink-0 mt-0.5" />
        <div>
          <div className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-400 font-bold">Municipality</div>
          <div className="text-sm font-bold text-[#101B2E] dark:text-[#F5F2EB] capitalize">
            {project.city === 'lahore' ? 'Bahria Town Lahore' : 'Bahria Islamabad (Phase 8)'}
          </div>
        </div>
      </div>
    </div>
  );
};
