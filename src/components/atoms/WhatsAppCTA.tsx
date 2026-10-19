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
        return 'bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-[0px_8px_20px_-10px_rgba(37,211,102,0.6)] transition-all duration-300 font-bold';
      case 'gold':
        return 'bg-[#D9B878] hover:bg-[#E5C98E] text-[#1C1305] shadow-[0px_8px_30px_-10px_rgba(217,184,120,0.55)] transition-all duration-300 font-bold';
      case 'navy':
        return 'bg-[#101B2E] hover:bg-[#1A2B47] text-[#D9B878] border border-[#D9B878]/50 shadow-md hover:shadow-lg transition-all duration-300 font-bold';
      case 'outline':
        return 'border border-[#D9B878] hover:border-[#1C1305] text-[#1C1305] bg-white hover:bg-[#F6F1E9] transition-all duration-300 font-bold';
      case 'floating':
        return 'bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-[0px_14px_36px_-10px_rgba(37,211,102,0.6)] rounded-full p-4 flex items-center justify-center';
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return 'px-3.5 py-2 text-[12px] min-h-[38px] rounded-[14px] gap-1.5';
      case 'md':
        return 'px-4 py-2.5 text-[13px] min-h-[44px] rounded-[14px] gap-2';
      case 'lg':
        return 'px-6 py-3.5 text-[15px] min-h-[48px] rounded-[14px] gap-2.5';
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
