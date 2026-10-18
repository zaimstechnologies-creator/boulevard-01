import React from 'react';
import { Metadata } from 'next';
import { LiveInventoryLedger } from '@/components/organisms/LiveInventoryLedger';
import { COMPANY_INFO } from '@/data/constants';
import { ShieldCheck, MessageCircle, Clock, FileCheck } from 'lucide-react';
import { WhatsAppCTA } from '@/components/atoms/WhatsAppCTA';

export const metadata: Metadata = {
  title: 'Live Inventory Sheet — Bahria Town Lahore & Islamabad Unit Availability',
  description:
    'Real-time property availability ledger for Boulevard 01 high-rises. Filter by municipality, tower, typology, and reserve units directly via WhatsApp.',
  alternates: {
    canonical: `${COMPANY_INFO.websiteUrl}/inventory`,
  },
};

export default function InventoryPage() {
  return (
    <div className="bg-[#F5F2EB]/40 dark:bg-[#0A121F] min-h-screen py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#101B2E] dark:bg-[#C4A46A] text-[#C4A46A] dark:text-[#101B2E] border border-[#C4A46A]/50 rounded-full text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Audited Availability Ledger</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-black text-[#101B2E] dark:text-white">
            Live Unit Inventory & Reservation Sheet
          </h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
            Eliminating off-plan uncertainty with verified unit-level stock across Bahria Town Lahore (Grand 15, Grand 14, Grand X, Grand 11) and Bahria Town Islamabad Phase 8 (Grand 12).
          </p>
        </div>

        {/* 3-Step Reservation Workflow Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 bg-white dark:bg-[#152238] rounded-2xl border border-[#C4A46A]/30 dark:border-[#C4A46A]/20 shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#F5F2EB] dark:bg-[#101B2E] text-[#C4A46A] border border-[#C4A46A]/20 font-serif font-black text-lg flex items-center justify-center shrink-0">
              1
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#101B2E] dark:text-[#F5F2EB]">Filter & Select Unit</h3>
              <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                Evaluate floor assignments, covered square footage, and base valuations in PKR.
              </p>
            </div>
          </div>

          <div className="p-5 bg-white dark:bg-[#152238] rounded-2xl border border-[#C4A46A]/30 dark:border-[#C4A46A]/20 shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#F5F2EB] dark:bg-[#101B2E] text-[#C4A46A] border border-[#C4A46A]/20 font-serif font-black text-lg flex items-center justify-center shrink-0">
              2
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#101B2E] dark:text-[#F5F2EB]">Instant WhatsApp Hold</h3>
              <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                Click &ldquo;Hold via WhatsApp&rdquo; to launch a pre-populated chat carrying unit code and pricing.
              </p>
            </div>
          </div>

          <div className="p-5 bg-white dark:bg-[#152238] rounded-2xl border border-[#C4A46A]/30 dark:border-[#C4A46A]/20 shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#F5F2EB] dark:bg-[#101B2E] text-[#C4A46A] border border-[#C4A46A]/20 font-serif font-black text-lg flex items-center justify-center shrink-0">
              3
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#101B2E] dark:text-[#F5F2EB]">Formal Allocation</h3>
              <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                Sales Directorate locks the 48-hour reservation hold and issues your allotment docket.
              </p>
            </div>
          </div>
        </div>

        {/* The Live Inventory Ledger Organism */}
        <LiveInventoryLedger />

        {/* Bottom Help Desk Strip */}
        <div className="bg-[#101B2E] text-[#F5F2EB] p-8 rounded-3xl border border-[#C4A46A]/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="text-xs text-[#C4A46A] font-bold uppercase tracking-wider">
              Looking for Bulk Floor Allocations or Unlisted Penthouses?
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-black text-white">
              Direct Corporate Allotments Desk
            </h3>
            <p className="text-xs text-gray-300 max-w-xl">
              Family offices, institutional funds, and commercial retail syndicates can request private inventory blocks directly through our Senior Vice President of Sales.
            </p>
          </div>

          <WhatsAppCTA
            message="Hello Boulevard 01 Directorate, I am looking to discuss bulk floor allocation or specialized commercial inventory."
            label="Inquire for Bulk Inventory"
            size="lg"
            variant="emerald"
          />
        </div>
      </div>
    </div>
  );
}
