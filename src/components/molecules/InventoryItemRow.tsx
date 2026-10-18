'use client';

import React from 'react';
import { MessageCircle, ExternalLink, Calendar } from 'lucide-react';
import { InventoryUnit } from '@/types';
import { StatusBadge } from '@/components/atoms/StatusBadge';
import { formatPKR, COMPANY_INFO } from '@/data/constants';
import Link from 'next/link';

interface InventoryItemRowProps {
  unit: InventoryUnit;
  onHoldRequest?: (unit: InventoryUnit) => void;
}

export const InventoryItemRow: React.FC<InventoryItemRowProps> = ({ unit, onHoldRequest }) => {
  const isAvailable = unit.availability_status === 'available';
  const isOnHold = unit.availability_status === 'on_hold';

  const reservationMessage = `Hello Boulevard 01, I wish to place a reservation hold on unit [${unit.unit_code}] at [${unit.project_title}] (${unit.floor_level}, ${unit.covered_area} sq ft, listed at ${formatPKR(unit.current_price)}). Please confirm availability and booking procedure.`;
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.phoneClean}?text=${encodeURIComponent(reservationMessage)}`;

  return (
    <tr className="border-b border-gray-100 dark:border-white/10 hover:bg-[#F5F2EB]/50 dark:hover:bg-[#1A2840]/60 transition-colors text-sm">
      {/* Unit Code & Project */}
      <td className="py-4 px-4 font-mono font-bold text-[#101B2E] dark:text-[#F5F2EB]">
        <div className="flex items-center gap-2">
          <span className="bg-[#101B2E] dark:bg-[#0A121F] text-[#C4A46A] border border-[#C4A46A]/40 text-xs px-2.5 py-1 rounded-md font-bold tracking-wider">
            {unit.unit_code}
          </span>
          <Link
            href={`/projects/${unit.project_slug}`}
            className="text-xs text-gray-500 hover:text-[#C4A46A] dark:hover:text-[#E0CFA8] inline-flex items-center gap-1 group font-sans"
            title={`View ${unit.project_title}`}
          >
            <span className="hidden sm:inline font-semibold text-gray-700 dark:text-gray-300">{unit.project_title}</span>
            <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </td>

      {/* Floor Level */}
      <td className="py-4 px-4 text-gray-700 dark:text-gray-300 font-medium">
        {unit.floor_level}
      </td>

      {/* Typology & Area */}
      <td className="py-4 px-4">
        <div className="font-bold text-[#101B2E] dark:text-white capitalize">
          {unit.unit_type.replace('_', ' ')}
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400">
          {unit.covered_area} sq. ft.
        </div>
      </td>

      {/* Valuation in PKR */}
      <td className="py-4 px-4 font-bold text-[#101B2E] dark:text-white">
        <div className="text-[#C4A46A] font-black">{formatPKR(unit.current_price)}</div>
        <div className="text-[11px] text-gray-400 font-normal">Base Allotment Price</div>
      </td>

      {/* Payment Plan */}
      <td className="py-4 px-4 hidden md:table-cell text-xs text-gray-600 dark:text-gray-300">
        <div className="flex items-center gap-1 text-gray-700 dark:text-gray-300 font-medium">
          <Calendar className="w-3.5 h-3.5 text-[#C4A46A]" />
          <span>{unit.payment_plan_label}</span>
        </div>
      </td>

      {/* Status Badge */}
      <td className="py-4 px-4">
        <StatusBadge status={unit.availability_status} size="sm" />
      </td>

      {/* Action CTA */}
      <td className="py-4 px-4 text-right">
        {isAvailable ? (
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => onHoldRequest?.(unit)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold rounded-lg shadow-xs hover:shadow-md transition-all active:scale-95"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Hold via WhatsApp</span>
          </a>
        ) : isOnHold ? (
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold rounded-lg shadow-xs hover:shadow-md transition-all"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Join Waitlist</span>
          </a>
        ) : (
          <span className="inline-block px-3 py-1.5 text-xs text-gray-400 dark:text-gray-500 font-medium bg-gray-100 dark:bg-white/5 rounded-lg cursor-not-allowed">
            Allocated
          </span>
        )}
      </td>
    </tr>
  );
};
