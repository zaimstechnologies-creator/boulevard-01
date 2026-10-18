import React from 'react';
import { Metadata } from 'next';
import { COMPANY_INFO } from '@/data/constants';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Building,
  Navigation,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';
import { InquiryConsultationForm } from '@/components/organisms/InquiryConsultationForm';
import { WhatsAppCTA } from '@/components/atoms/WhatsAppCTA';
import { Logo } from '@/components/atoms/Logo';

export const metadata: Metadata = {
  title: 'Contact Boulevard 01 — Corporate Headquarters Plaza 39 Bahria Town Lahore',
  description:
    'Contact Boulevard 01 — Landmark of Trust. Corporate Office: Plaza 39 AA Commercial, Main Boulevard, Bahria Town Lahore. Operating hours: Sat–Thu 10:00 AM – 8:00 PM. Direct line: +92 321 000 4000.',
  alternates: {
    canonical: `${COMPANY_INFO.websiteUrl}/contact`,
  },
};

export default function ContactPage() {
  return (
    <div className="bg-[#F5F2EB]/40 dark:bg-[#0A121F] min-h-screen py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="flex justify-center pb-1">
            <Logo variant="auto" size="md" showTagline={true} />
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#101B2E] dark:bg-[#C4A46A] text-[#C4A46A] dark:text-[#101B2E] border border-[#C4A46A]/50 rounded-full text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>Corporate Geolocation & Contact</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-black text-[#101B2E] dark:text-white">
            Connect with Boulevard 01
          </h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
            Visit our executive investor lounges or connect directly with our Corporate Sales Directorate for immediate property allotment advisory.
          </p>
        </div>

        {/* 3 Main Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Lahore HQ */}
          <div className="p-8 bg-white dark:bg-[#152238] rounded-3xl border border-[#C4A46A]/40 dark:border-[#C4A46A]/30 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#F5F2EB] dark:bg-[#101B2E] text-[#C4A46A] border border-[#C4A46A]/20 flex items-center justify-center font-bold">
              <Building className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase text-[#C4A46A] font-bold tracking-wider">
                Flagship Corporate Lounge
              </span>
              <h2 className="text-xl font-serif font-black text-[#101B2E] dark:text-white">Lahore Headquarters</h2>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
              {COMPANY_INFO.address.street}, {COMPANY_INFO.address.locality}, {COMPANY_INFO.address.city}, Punjab {COMPANY_INFO.address.postalCode}
            </p>
            <div className="pt-2">
              <a
                href="https://maps.google.com/?q=Plaza+39+AA+Commercial+Sector+D+Bahria+Town+Lahore"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#101B2E] dark:text-[#C4A46A] hover:text-[#C4A46A] dark:hover:text-[#E0CFA8]"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3 text-[#C4A46A]" />
              </a>
            </div>
          </div>

          {/* Card 2: Islamabad Regional Office */}
          <div className="p-8 bg-white dark:bg-[#152238] rounded-3xl border border-[#C4A46A]/40 dark:border-[#C4A46A]/30 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#F5F2EB] dark:bg-[#101B2E] text-[#C4A46A] border border-[#C4A46A]/20 flex items-center justify-center font-bold">
              <Navigation className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase text-[#C4A46A] font-bold tracking-wider">
                Twin Cities Regional Desk
              </span>
              <h2 className="text-xl font-serif font-black text-[#101B2E] dark:text-white">Islamabad Operations</h2>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
              Business District, Phase 8 (Directly Adjacent to Statue of Liberty Monument), Bahria Town Islamabad
            </p>
            <div className="pt-2">
              <span className="text-xs font-bold text-gray-800 dark:text-gray-200">Anchor: The View — Grand 12</span>
            </div>
          </div>

          {/* Card 3: Direct Telephony & Timings */}
          <div className="p-8 bg-white dark:bg-[#152238] rounded-3xl border border-[#C4A46A]/40 dark:border-[#C4A46A]/30 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#F5F2EB] dark:bg-[#101B2E] text-[#C4A46A] border border-[#C4A46A]/20 flex items-center justify-center font-bold">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase text-[#C4A46A] font-bold tracking-wider">
                Direct Communication Lines
              </span>
              <h2 className="text-xl font-serif font-black text-[#101B2E] dark:text-white">Hours & Numbers</h2>
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-300 space-y-1">
              <div>
                <strong className="text-[#101B2E] dark:text-white">Operating Schedule:</strong> <br />
                {COMPANY_INFO.operatingHours}
              </div>
              <div className="pt-1">
                <strong className="text-[#101B2E] dark:text-white">Corporate Telephone:</strong> <br />
                <a href={`tel:${COMPANY_INFO.phoneClean}`} className="text-[#101B2E] dark:text-[#C4A46A] hover:text-[#C4A46A] font-bold">
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <InquiryConsultationForm channel="contact_form" />
          </div>

          <div className="lg:col-span-5 space-y-6">
            {/* Interactive Location Visual Card */}
            <div className="bg-white dark:bg-[#152238] p-6 rounded-3xl border border-[#C4A46A]/40 dark:border-[#C4A46A]/30 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-serif font-bold text-[#101B2E] dark:text-white">
                  Geographic Location Visualizer
                </h3>
                <span className="text-xs text-emerald-800 dark:text-emerald-300 font-bold bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-1 rounded-md">
                  Active Coordinates
                </span>
              </div>

              {/* Map Representation Container */}
              <div className="relative h-64 rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 dark:border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80"
                  alt="Bahria Town Lahore Location Overview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-4 text-center text-white">
                  <div className="w-12 h-12 bg-[#101B2E] border border-[#C4A46A] text-[#C4A46A] rounded-full flex items-center justify-center shadow-xl mb-2 animate-bounce">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="text-sm font-bold">Plaza 39 AA Commercial</div>
                  <div className="text-xs text-gray-300">Main Boulevard, Sector D, Bahria Town Lahore</div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Plaza+39+AA+Commercial+Sector+D+Bahria+Town+Lahore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 bg-[#101B2E] dark:bg-[#C4A46A] hover:bg-[#1A2B47] dark:hover:bg-[#A9874D] text-[#C4A46A] dark:text-[#101B2E] border border-[#C4A46A]/40 text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-xs"
                >
                  <MapPin className="w-4 h-4 text-[#C4A46A] dark:text-[#101B2E]" />
                  <span>Launch Google Maps GPS Navigation</span>
                </a>
              </div>
            </div>

            {/* Instant WhatsApp Card */}
            <div className="bg-[#101B2E] text-[#F5F2EB] p-6 rounded-3xl border border-[#C4A46A]/40 space-y-3">
              <div className="text-[10px] text-[#C4A46A] font-bold uppercase tracking-wider">
                Rapid Inquiry Routing
              </div>
              <h3 className="text-lg font-serif font-bold text-white">
                Need an Immediate Response?
              </h3>
              <p className="text-xs text-gray-300">
                Connect directly with our corporate sales desk on WhatsApp for live unit inquiries, floor plan schematics, and booking steps.
              </p>
              <div className="pt-2">
                <WhatsAppCTA
                  message="Hello Boulevard 01, I am on your contact page and would like to speak directly with an on-duty property consultant."
                  label="Initiate WhatsApp Chat Now"
                  variant="emerald"
                  size="md"
                  fullWidth
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
