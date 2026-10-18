import React from 'react';
import {
  Sparkles,
  Baby,
  Gamepad2,
  Trees,
  Waves,
  ArrowUpDown,
  Dumbbell,
  ShieldCheck,
  Building,
} from 'lucide-react';

interface AmenityIconProps {
  id: string;
  className?: string;
}

export const AmenityIcon: React.FC<AmenityIconProps> = ({ id, className = 'w-6 h-6' }) => {
  switch (id) {
    case 'spa-wellness':
      return <Sparkles className={className} />;
    case 'daycare':
      return <Baby className={className} />;
    case 'gaming-zone':
      return <Gamepad2 className={className} />;
    case 'rooftop-gardens':
      return <Trees className={className} />;
    case 'swimming-pools':
      return <Waves className={className} />;
    case 'smart-lifts':
      return <ArrowUpDown className={className} />;
    case 'fitness-gym':
      return <Dumbbell className={className} />;
    case 'concierge-housekeeping':
      return <ShieldCheck className={className} />;
    default:
      return <Building className={className} />;
  }
};
