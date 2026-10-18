import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '@/data/constants';

interface WhatsAppCTAProps {
  message?: string;
  label?: string;
  variant?: 'emerald' | 'gold' | 'outline' | 'floating' | 'navy';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
  customNumberClean?: string;
  onClick?: () => void;
}

export const WhatsAppCTA: React.FC<WhatsAppCTAProps> = ({
  message = 'Hello Boulevard 01, I would like to inquire about your property portfolio in Bahria Town.',
  label = 'Chat on WhatsApp',
  variant = 'emerald',
  size = 'md',
  fullWidth = false,
  className = '',
  customNumberClean,
  onClick,
}) => {
  const url = customNumberClean
    ? `https://wa.me/${customNumberClean}?text=${encodeURIComponent(message)}`
    : getWhatsAppUrl(message);

  const getVariantStyles = () => {
    switch (variant) {
      case 'emerald':
        return 'bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-md hover:shadow-lg transition-all duration-300 font-semibold';
      case 'gold':
        return 'bg-[#C4A46A] hover:bg-[#A9874D] text-[#101B2E] shadow-md hover:shadow-lg transition-all duration-300 font-bold';
      case 'navy':
        return 'bg-[#101B2E] hover:bg-[#1A2B47] text-[#C4A46A] border border-[#C4A46A]/50 shadow-md hover:shadow-lg transition-all duration-300 font-bold';
      case 'outline':
        return 'border border-[#C4A46A] hover:border-[#101B2E] text-[#101B2E] bg-white hover:bg-[#F5F2EB] transition-all duration-300 font-semibold';
      case 'floating':
        return 'bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-2xl rounded-full p-4 flex items-center justify-center';
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return 'px-3 py-1.5 text-xs rounded-md gap-1.5';
      case 'md':
        return 'px-4 py-2.5 text-sm rounded-lg gap-2';
      case 'lg':
        return 'px-6 py-3.5 text-base rounded-xl gap-2.5';
    }
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      aria-label={`${label} (Opens in WhatsApp)`}
      className={`inline-flex items-center justify-center cursor-pointer transition-transform active:scale-98 ${getVariantStyles()} ${getSizeStyles()} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      <MessageCircle className={size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'} aria-hidden="true" />
      <span>{label}</span>
    </a>
  );
};
