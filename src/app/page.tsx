import React from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Building2,
  TrendingUp,
  MapPin,
  ArrowRight,
  Download,
  CheckCircle2,
  Calendar,
  Layers,
  Award,
  PhoneCall,
  Sparkles,
} from 'lucide-react';
import { PROJECTS } from '@/data/projects';
import { COMPANY_INFO, formatPKR } from '@/data/constants';
import { MetricCounter } from '@/components/atoms/MetricCounter';
import { StatusBadge } from '@/components/atoms/StatusBadge';
import { AmenityGrid } from '@/components/organisms/AmenityGrid';
import { WhatsAppCTA } from '@/components/atoms/WhatsAppCTA';
import { SocialProofCard } from '@/components/molecules/SocialProofCard';
import { InquiryConsultationForm } from '@/components/organisms/InquiryConsultationForm';
import { Logo } from '@/components/atoms/Logo';

const TESTIMONIALS = [
  {
    name: 'Tariq Mehmood Raja',
    location: 'Manchester, United Kingdom',
    investorType: 'NRP Expatriate Investor',
    project: 'The Grand Lifestyle — Grand 15',
    quote:
      'As an overseas Pakistani, investing back home usually came with anxiety about delivery dates and possession. Boulevard 01 verified their 9-year record, guided my remittance through Roshan Digital Account, and sent weekly video updates of the slab casting. True institutional transparency.',
    rating: 5,
  },
  {
    name: 'Chaudhry Salman Naveed',
    location: 'Gulberg III, Lahore',
    investorType: 'Commercial Retail Landlord',
    project: 'Grand X (Bahria Theme Park)',
    quote:
      'Securing a double-frontage food court outlet in Grand X directly facing the Theme Park was the best decision for my commercial portfolio. Daily footfall is already guaranteed, and their construction speed outpaces any other builder in Bahria Town.',
    rating: 5,
  },
  {
    name: 'Dr. Sarah Farooq',
    location: 'Dubai, UAE',
    investorType: 'Serviced Residence Owner',
    project: 'The Oasis Grand 14',
    quote:
      'The managed rental pool at Grand 14 has generated steady foreign-exchange indexed yields without me needing to manage tenants or maintenance. Boulevard 01 handles everything from check-in to cleaning with total professionalism.',
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO POSITIONING BANNER in Midnight Navy */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-[#101B2E] text-white overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        {/* Architectural Background Overlay */}
        <div className="absolute inset-0 z-0 opacity-20 mix-blend-luminosity">
          <img
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=80"
            alt="Boulevard 01 Luxury High-Rise Architecture"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#101B2E] via-[#101B2E]/85 to-transparent z-0" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#101B2E]/60 to-[#101B2E] z-0" />

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-7">
          {/* Brand Logo Presentation in Hero */}
          <div className="flex justify-center pb-1">
            <Logo variant="light" size="lg" showTagline={true} />
          </div>

          {/* Historical Performance Verification Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A2B47] border border-[#C4A46A]/60 text-xs font-bold text-[#C4A46A] shadow-lg animate-in fade-in slide-in-from-top-4 duration-500">
            <Award className="w-4 h-4 text-[#C4A46A]" />
            <span>9+ Years Audited Track Record • 15 Towers • 500+ Delivered Units</span>
          </div>

          {/* Master Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight text-white leading-tight">
            Institutional High-Rise <br />
            <span className="text-[#C4A46A] bg-gradient-to-r from-[#C4A46A] via-[#E0CFA8] to-[#C4A46A] bg-clip-text text-transparent">
              Excellence in Bahria Town
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-normal leading-relaxed">
            Eliminating off-plan uncertainty with verified construction milestones. Explore prime residential penthouses, food court bays, and corporate suites across Bahria Town Lahore and Islamabad.
          </p>

          {/* Dual Conversion CTA Strip */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto sm:max-w-none">
            <Link
              href="/inventory"
              className="w-full sm:w-auto px-8 py-4 bg-[#C4A46A] hover:bg-[#A9874D] text-[#101B2E] font-extrabold text-sm rounded-xl shadow-lg hover:shadow-2xl transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Explore Live Inventory</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/compare"
              className="w-full sm:w-auto px-7 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-xl border border-white/20 transition-all text-center"
            >
              Compare 5 Active Towers
            </Link>

            <WhatsAppCTA
              message="Hello Boulevard 01, I saw your flagship high-rise portfolio and would like to speak directly with an on-duty sales director."
              label="Instant WhatsApp Desk"
              size="lg"
              variant="emerald"
            />
          </div>

          {/* SBP & Geolocation Trust Seals */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-300">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>State Bank RDA Remittance Compliant</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-[#C4A46A]" />
              <span>Etihad Town Chapter Strategic Partner</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#C4A46A]" />
              <span>Plaza 39 AA Commercial, Bahria Town Lahore</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. AUDITED TRACK RECORD METRIC COUNTERS */}
      <section className="relative -mt-10 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCounter
            value={COMPANY_INFO.trackRecord.yearsInOperation}
            label="Years Operation"
            sublabel="Unbroken continuous presence"
            icon={<Award className="w-6 h-6" />}
          />
          <MetricCounter
            value={COMPANY_INFO.trackRecord.deliveredUnits}
            label="Delivered Units"
            sublabel="To happy residents & investors"
            icon={<Building2 className="w-6 h-6" />}
          />
          <MetricCounter
            value={COMPANY_INFO.trackRecord.completedTowers}
            label="Completed High-Rises"
            sublabel="Fully operational structures"
            icon={<Layers className="w-6 h-6" />}
          />
          <MetricCounter
            value={COMPANY_INFO.trackRecord.onTimeRate}
            label="On-Time Handover Record"
            sublabel="0.0% project abandonment"
            icon={<ShieldCheck className="w-6 h-6" />}
          />
        </div>
      </section>

      {/* 3. ACTIVE TOWERS PORTFOLIO SHOWCASE */}
      <section className="py-24 bg-[#F5F2EB]/50 dark:bg-[#0A121F]/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#C4A46A] font-extrabold mb-1">
                Active Construction & Selling Portfolio
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-black text-[#101B2E] dark:text-white">
                Curated High-Rise Developments
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 max-w-xl">
                Every development under Boulevard 01 addresses distinct commercial, residential, and hospitality opportunities in high-growth epicenters across Lahore and Islamabad.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#101B2E] dark:text-[#C4A46A] hover:text-[#C4A46A] dark:hover:text-[#E0CFA8] transition-colors"
              >
                <span>View All Projects</span>
                <ArrowRight className="w-4 h-4 text-[#C4A46A]" />
              </Link>
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                className="group bg-white dark:bg-[#152238] rounded-3xl border border-[#C4A46A]/40 dark:border-[#C4A46A]/30 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image & Badge Overlay */}
                  <div className="relative h-64 overflow-hidden bg-gray-100 dark:bg-gray-900">
                    <img
                      src={project.cover_image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />

                    <div className="absolute top-4 left-4">
                      <StatusBadge status={project.status} label={project.status_badge} />
                    </div>

                    <div className="absolute top-4 right-4 bg-white/95 dark:bg-[#101B2E]/90 backdrop-blur-xs text-[#101B2E] dark:text-[#C4A46A] text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider border border-white/20 dark:border-[#C4A46A]/30">
                      {project.city === 'lahore' ? 'Lahore' : 'Islamabad'}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="text-[10px] font-semibold text-[#C4A46A] uppercase tracking-wider">
                        {project.concept_theme}
                      </div>
                      <h3 className="text-lg font-serif font-bold text-white line-clamp-1">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-3 leading-relaxed">
                      {project.overview_body}
                    </p>

                    <div className="grid grid-cols-2 gap-2 text-xs py-3 border-y border-gray-100 dark:border-white/10">
                      <div>
                        <span className="text-gray-400 dark:text-gray-400 block text-[10px] uppercase font-bold">Scale</span>
                        <span className="font-bold text-[#101B2E] dark:text-white">{project.floor_count}</span>
                      </div>
                      <div>
                        <span className="text-gray-400 dark:text-gray-400 block text-[10px] uppercase font-bold">Footfall</span>
                        <span className="font-bold text-emerald-700 dark:text-emerald-400 truncate block">
                          {project.footfall_metric || 'Prime Transit'}
                        </span>
                      </div>
                      <div className="col-span-2 pt-1">
                        <span className="text-gray-400 dark:text-gray-400 block text-[10px] uppercase font-bold">Baseline Pricing</span>
                        <span className="font-black text-[#C4A46A] text-sm">
                          From {formatPKR(project.starting_price_pkr)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action Footers */}
                <div className="p-6 pt-0 flex items-center gap-3">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="flex-1 py-2.5 px-3 bg-[#101B2E] dark:bg-[#C4A46A] hover:bg-[#1A2B47] dark:hover:bg-[#A9874D] text-[#C4A46A] dark:text-[#101B2E] border border-[#C4A46A]/40 text-xs font-bold rounded-xl text-center transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <WhatsAppCTA
                    message={`Hi Boulevard 01, I would like to inquire about unit availability at ${project.title}.`}
                    label="WhatsApp"
                    size="sm"
                    variant="emerald"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE 8-POINT VERIFIED AMENITY ARRAY */}
      <section className="py-24 bg-white dark:bg-[#101B2E] border-y border-[#C4A46A]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C4A46A] font-extrabold">
              <Sparkles className="w-4 h-4" />
              <span>Lifestyle & Hospitality Specifications</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-[#101B2E] dark:text-white">
              Verified 8-Point Amenity Infrastructure
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              Every development under Boulevard 01 integrates institutional-grade resident facilities managed by our dedicated in-house hospitality and property maintenance teams.
            </p>
          </div>

          <AmenityGrid />
        </div>
      </section>

      {/* 5. NRP EXPATRIATE & ROSHAN DIGITAL ACCOUNT SECTION in Midnight Navy */}
      <section className="py-20 bg-[#101B2E] text-[#F5F2EB] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#C4A46A]/20 border border-[#C4A46A]/40 text-xs font-bold text-[#C4A46A]">
                <span>Non-Resident Pakistani (NRP) Investor Desk</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-black text-white leading-tight">
                Seamless Foreign Currency Property Ownership via <span className="text-[#C4A46A]">Roshan Digital</span>
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed">
                We eliminate the friction of remote property acquisition. Through our direct banking integration with the State Bank of Pakistan&apos;s Roshan Digital Account (RDA) framework, overseas expatriates enjoy 100% legal capital repatriation, automated digital receipts, and biometric title registration.
              </p>

              <div className="space-y-3 text-xs text-gray-300">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Full Capital & Rental Repatriation:</strong> Principal funds, capital gains, and monthly rental yields freely remittable back to your foreign bank account.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>POC & Foreign Spouse Ownership:</strong> Full title registration privileges without requiring special interior ministry permits.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Consular Power of Attorney Facilitation:</strong> Assisted legal attestation across Pakistani embassies in the UK, USA, UAE, and Canada.
                  </span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/blog/nrp-real-estate-investment-guide-roshan-digital-account-rda"
                  className="px-6 py-3 bg-[#C4A46A] hover:bg-[#A9874D] text-[#101B2E] font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-2"
                >
                  <span>Read Full NRP Legal Handbook</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <WhatsAppCTA
                  message="Hello Iqra Nadeem (Head of Overseas Desk at Boulevard 01), I am an NRP investor seeking guidance on investing through Roshan Digital Account."
                  label="Speak with Overseas Desk"
                  size="md"
                  variant="emerald"
                />
              </div>
            </div>

            {/* Strategic Partner Badge / Visual */}
            <div className="bg-[#0A121F] p-8 rounded-3xl border border-[#C4A46A]/30 space-y-6">
              <div className="flex items-center justify-between border-b border-[#C4A46A]/20 pb-4">
                <div>
                  <div className="text-xs uppercase text-[#C4A46A] font-bold">Strategic Chapter</div>
                  <h3 className="text-lg font-serif font-black text-white">Boulevard 01 × Etihad Town</h3>
                </div>
                <div className="px-3 py-1 bg-[#C4A46A] text-[#101B2E] text-xs font-bold rounded-md">
                  Authorized Broker Portal
                </div>
              </div>

              <p className="text-xs text-gray-300 leading-relaxed">
                Our collaborative framework with master developer Etihad Town empowers certified real estate brokerages with direct inventory holds, guaranteed 14-day escrow commissions, and co-branded investor landing pages.
              </p>

              <div className="p-4 bg-[#101B2E] rounded-2xl border border-[#C4A46A]/20 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white">Are you a registered agency?</div>
                  <div className="text-[10px] text-gray-400">Join our authorized sales network</div>
                </div>
                <Link
                  href="/strategic-partners"
                  className="px-4 py-2 bg-[#C4A46A] hover:bg-[#A9874D] text-[#101B2E] font-bold text-xs rounded-xl transition-all"
                >
                  Apply as Partner
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. VERIFIED INVESTOR TESTIMONIALS */}
      <section className="py-24 bg-white dark:bg-[#0A121F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="text-xs uppercase tracking-widest text-[#C4A46A] font-extrabold">
              Audited Delivery Testimonials
            </div>
            <h2 className="text-3xl font-serif font-black text-[#101B2E] dark:text-white">
              Trusted by 500+ Domestic & Overseas Investors
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Verified experiences from clients who acquired residential penthouses, food court units, and serviced suites across Boulevard 01 high-rises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <SocialProofCard key={idx} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. CONSULTATION & GEOLOCATION CAPTURE */}
      <section className="py-20 bg-[#F5F2EB]/50 dark:bg-[#101B2E] border-t border-[#C4A46A]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Consultation Intake Form */}
            <div className="lg:col-span-7">
              <InquiryConsultationForm channel="consultation" />
            </div>

            {/* Geolocation & Head Office Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white dark:bg-[#152238] p-8 rounded-3xl border border-[#C4A46A]/40 dark:border-[#C4A46A]/30 shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#F5F2EB] dark:bg-[#101B2E] text-[#C4A46A] border border-[#C4A46A]/20 rounded-2xl flex items-center justify-center font-bold">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#C4A46A]">
                      Physical Corporate Headquarters
                    </div>
                    <h3 className="text-lg font-serif font-black text-[#101B2E] dark:text-white">
                      Plaza 39 AA Commercial, Bahria Town Lahore
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                  Visit our executive investor lounge on Main Boulevard, Bahria Town Lahore for private architectural model viewings, inventory ledger audits, and one-on-one sessions with our Sales Directorate.
                </p>

                <div className="space-y-2 text-xs text-gray-700 dark:text-gray-300 pt-2 border-t border-gray-100 dark:border-white/10">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-500 dark:text-gray-400">Operating Schedule:</span>
                    <span className="font-bold text-[#101B2E] dark:text-white">Sat – Thu: 10:00 AM – 8:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-500 dark:text-gray-400">Corporate Line:</span>
                    <a href={`tel:${COMPANY_INFO.phoneClean}`} className="font-bold text-[#101B2E] dark:text-[#C4A46A]">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-500 dark:text-gray-400">Twin Cities Regional Desk:</span>
                    <span className="font-bold text-[#101B2E] dark:text-white">Phase 8 Business District, Islamabad</span>
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
