import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  Award,
  ShieldCheck,
  Building2,
  Layers,
  MapPin,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  FileCheck,
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/constants';
import { MetricCounter } from '@/components/atoms/MetricCounter';
import { WhatsAppCTA } from '@/components/atoms/WhatsAppCTA';
import { Logo } from '@/components/atoms/Logo';

export const metadata: Metadata = {
  title: 'About Us — Boulevard 01 | Landmark of Trust',
  description:
    'Learn about Boulevard 01 — Landmark of Trust. Nine-plus years of continuous operation, 15 completed towers, and 500+ delivered units in Bahria Town Lahore and Islamabad.',
  alternates: {
    canonical: `${COMPANY_INFO.websiteUrl}/about`,
  },
};

export default function AboutPage() {
  return (
    <div className="bg-[#F5F2EB]/40 dark:bg-[#0A121F] min-h-screen py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-5">
          <div className="flex justify-center">
            <Logo variant="auto" size="lg" showTagline={true} />
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#101B2E] dark:bg-[#C4A46A] text-[#C4A46A] dark:text-[#101B2E] border border-[#C4A46A]/40 rounded-full text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Developer Credentials & History</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-black text-[#101B2E] dark:text-white">
            Bridging the Trust Deficit in Real Estate
          </h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
            In developing-world property markets where off-plan timelines often encounter skepticism, Boulevard 01 has established an unbroken record of scheduled handovers over nine-plus continuous years under the enduring banner &ldquo;Landmark of trust&rdquo;.
          </p>
        </div>

        {/* Audited Metric Counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCounter
            value={COMPANY_INFO.trackRecord.yearsInOperation}
            label="Years Operation"
            sublabel="Unbroken commercial leadership"
            icon={<Award className="w-6 h-6" />}
          />
          <MetricCounter
            value={COMPANY_INFO.trackRecord.deliveredUnits}
            label="Delivered Units"
            sublabel="Possession keys handed over"
            icon={<Building2 className="w-6 h-6" />}
          />
          <MetricCounter
            value={COMPANY_INFO.trackRecord.completedTowers}
            label="Completed Towers"
            sublabel="Across Bahria Town Lahore & Islamabad"
            icon={<Layers className="w-6 h-6" />}
          />
          <MetricCounter
            value={COMPANY_INFO.trackRecord.onTimeRate}
            label="On-Time Delivery Rate"
            sublabel="0.0% project abandonment"
            icon={<ShieldCheck className="w-6 h-6" />}
          />
        </div>

        {/* Corporate Narrative & Foundations */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase text-[#C4A46A] tracking-wider">
              The Engineering Foundation
            </span>
            <h2 className="text-3xl font-serif font-black text-[#101B2E] dark:text-white leading-tight">
              Self-Funded Structural Reserves. Heavy Equipment Fleet. Zero Compromise.
            </h2>
            <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              Most builders fund current structural casting through future speculative installment cash flows. When market cycles contract, construction grinds to an abrupt halt. 
            </p>
            <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              Boulevard 01 fundamentally restructured this equation. Prior to breaking ground on any tower—be it The Grand Lifestyle — Grand 15 or Grand X—our treasury guarantees dedicated self-funded capital reserves that cover 100% of the grey structure casting regardless of external market conditions.
            </p>

            <div className="space-y-3 pt-2 text-xs text-gray-700 dark:text-gray-300">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>Wholly Owned Civil Equipment:</strong> Mobile tower cranes, concrete batching plants, and earth excavators are company-owned, eliminating contractor rental bottlenecks.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>Independent Structural Audits:</strong> Third-party engineering consultants inspect and certify every post-tensioned slab before milestone invoicing.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>Roshan Digital Compliance:</strong> Direct integration with State Bank of Pakistan banking pipelines for 100% legal capital repatriation for overseas NRPs.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#C4A46A]/50">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=1200&q=80"
                alt="Boulevard 01 Construction Site Engineering"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-xs uppercase text-[#C4A46A] font-bold">Audited Site Quality</span>
                <h3 className="text-lg font-serif font-bold text-white">
                  Heavy Civil Engineering Controlled by Boulevard 01 Fleet
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Corporate Headquarters Callout */}
        <div className="bg-white dark:bg-[#152238] p-8 sm:p-12 rounded-3xl border border-[#C4A46A]/40 dark:border-[#C4A46A]/30 shadow-xs flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs uppercase text-[#C4A46A] font-bold tracking-wider">
              Visit Corporate Headquarters
            </span>
            <h3 className="text-2xl font-serif font-black text-[#101B2E] dark:text-white">
              Plaza 39 AA Commercial, Sector D, Bahria Town Lahore
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
              We invite prospective buyers to inspect our delivered developments in person, review structural NOCs, and meet our executive team in our flagship investor lounge.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 py-3.5 bg-[#101B2E] dark:bg-[#C4A46A] hover:bg-[#1A2B47] dark:hover:bg-[#A9874D] text-[#C4A46A] dark:text-[#101B2E] border border-[#C4A46A]/40 font-bold text-xs rounded-xl text-center transition-all"
            >
              Get Directions & Hours
            </Link>
            <WhatsAppCTA
              message="Hello Boulevard 01, I would like to schedule an in-person visit to your Plaza 39 corporate headquarters."
              label="Book VIP Visit"
              size="md"
              variant="emerald"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
