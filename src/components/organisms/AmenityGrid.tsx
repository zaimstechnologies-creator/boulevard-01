import React from 'react';
import { AMENITIES_CATALOG } from '@/data/projects';
import { AmenityIcon } from '@/components/atoms/AmenityIcon';

export const AmenityGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {AMENITIES_CATALOG.map((amenity) => (
        <div
          key={amenity.id}
          className="group p-6 bg-white dark:bg-[#152238] rounded-2xl border border-[#C4A46A]/30 dark:border-[#C4A46A]/20 hover:border-[#C4A46A] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 rounded-xl bg-[#F5F2EB] dark:bg-[#101B2E] text-[#C4A46A] border border-[#C4A46A]/20 flex items-center justify-center mb-4 group-hover:bg-[#101B2E] dark:group-hover:bg-[#C4A46A] dark:group-hover:text-[#101B2E] transition-colors">
              <AmenityIcon id={amenity.id} className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#101B2E] dark:text-[#F5F2EB] mb-2 font-serif group-hover:text-[#C4A46A] transition-colors">
              {amenity.name}
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
              {amenity.description}
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-gray-100 dark:border-white/10 flex items-center justify-between text-[10px] text-gray-400 dark:text-gray-400 font-bold uppercase tracking-wider">
            <span>Verified Spec</span>
            <span className="text-[#C4A46A]">On-Site Facility</span>
          </div>
        </div>
      ))}
    </div>
  );
};
