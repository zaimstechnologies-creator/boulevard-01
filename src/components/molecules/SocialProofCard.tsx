import React from 'react';
import { Quote, Star, CheckCircle2 } from 'lucide-react';

interface Testimonial {
  name: string;
  location: string;
  investorType: string;
  project: string;
  quote: string;
  rating: number;
}

interface SocialProofCardProps {
  testimonial: Testimonial;
}

export const SocialProofCard: React.FC<SocialProofCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white dark:bg-[#152238] p-6 rounded-2xl border border-[#C4A46A]/30 dark:border-[#C4A46A]/20 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1 text-amber-500">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <Quote className="w-8 h-8 text-[#C4A46A]/30" />
        </div>

        <p className="text-sm text-gray-700 dark:text-gray-300 italic leading-relaxed mb-4">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>

      <div className="pt-4 border-t border-gray-100 dark:border-white/10 flex items-center justify-between">
        <div>
          <div className="text-sm font-bold text-[#101B2E] dark:text-[#F5F2EB] flex items-center gap-1.5">
            <span>{testimonial.name}</span>
            <span title="Verified Property Owner" className="inline-flex">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            </span>
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">{testimonial.location} • {testimonial.investorType}</div>
        </div>
        <span className="text-[11px] font-semibold text-[#C4A46A] bg-[#F5F2EB] dark:bg-[#101B2E] px-2.5 py-1 rounded-md border border-[#C4A46A]/30">
          {testimonial.project}
        </span>
      </div>
    </div>
  );
};
