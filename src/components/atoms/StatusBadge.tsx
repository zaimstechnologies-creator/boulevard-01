import React from 'react';
import { InventoryStatus, ProjectStatus } from '@/types';

interface StatusBadgeProps {
  status: InventoryStatus | ProjectStatus | string;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, label, size = 'md' }) => {
  const getStyles = () => {
    switch (status) {
      case 'available':
        return {
          bg: 'bg-emerald-50 text-emerald-800 border-emerald-300',
          dot: 'bg-emerald-500 animate-pulse',
          defaultLabel: 'Available for Allotment',
        };
      case 'on_hold':
        return {
          bg: 'bg-amber-50 text-amber-800 border-amber-300',
          dot: 'bg-amber-500',
          defaultLabel: 'Under Negotiation / Hold',
        };
      case 'reserved':
      case 'sold':
        return {
          bg: 'bg-rose-50 text-rose-800 border-rose-300',
          dot: 'bg-rose-500',
          defaultLabel: 'Reserved / Booked',
        };
      case 'launch':
        return {
          bg: 'bg-[#101B2E] text-[#C4A46A] border-[#C4A46A]/50',
          dot: 'bg-[#C4A46A] animate-ping',
          defaultLabel: 'Flagship Launch',
        };
      case 'selling':
        return {
          bg: 'bg-[#F5F2EB] text-[#C4A46A] border-[#C4A46A]',
          dot: 'bg-[#C4A46A]',
          defaultLabel: 'Now Selling',
        };
      case 'construction':
        return {
          bg: 'bg-blue-50 text-blue-900 border-blue-200',
          dot: 'bg-blue-500',
          defaultLabel: 'Under Construction',
        };
      case 'delivered':
        return {
          bg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
          dot: 'bg-emerald-600',
          defaultLabel: 'Delivered (100% Handover)',
        };
      default:
        return {
          bg: 'bg-gray-100 text-gray-800 border-gray-300',
          dot: 'bg-gray-400',
          defaultLabel: label || status,
        };
    }
  };

  const config = getStyles();
  const displayLabel = label || config.defaultLabel;

  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5 font-medium',
    md: 'text-xs md:text-sm px-2.5 py-1 font-semibold',
    lg: 'text-sm px-3.5 py-1.5 font-bold',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border shadow-xs ${config.bg} ${sizeClasses[size]}`}
      role="status"
    >
      <span className={`inline-block w-2 h-2 rounded-full ${config.dot}`} aria-hidden="true" />
      <span>{displayLabel}</span>
    </span>
  );
};
