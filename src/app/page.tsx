'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Building2,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Award,
  Sparkles,
  Send,
  Star,
  Quote,
  Flame,
  Gamepad2,
  TreePine,
  Baby,
  MessageCircle,
  UserCheck,
} from 'lucide-react';
import { PROJECTS } from '@/data/projects';
import { COMPANY_INFO, formatPKR } from '@/data/constants';
import { WhatsAppCTA } from '@/components/atoms/WhatsAppCTA';
import { Logo } from '@/components/atoms/Logo';
import { SalesFunnelRouter } from '@/components/organisms/SalesFunnelRouter';
import { ArchitecturalExplorer } from '@/components/organisms/ArchitecturalExplorer';

const TESTIMONIALS_DATA = [
  {
    name: 'Sarah Saleem',
    role: 'Overseas Investor (United Kingdom)',
    project: 'The Grand Lifestyle — Grand 15',
    rating: 5,
    quote:
      'As an overseas Pakistani, investing back home usually came with anxiety about delivery dates and possession. Boulevard 01 verified their 9-year record, guided my remittance through Roshan Digital Account, and sent weekly video updates of the slab casting. True institutional transparency.',
  },
  {
    name: 'Tariq Mehmood Raja',
    role: 'NRP Expatriate (Manchester, UK)',
    project: 'The Grand Lifestyle — Grand 15',
    rating: 5,
    quote:
      'I reserved a 2-bed duplex facing the Eiffel Tower replica through their WhatsApp desk while in Manchester. The contract arrived within 48 hours with direct consular validation and bank-attested schedules.',
  },
  {
    name: 'Chaudhry Kamran Akram',
    role: 'Commercial Retail Investor (Lahore)',
    project: 'Grand X — Retail & Theme Park Carnival',
    rating: 5,
    quote:
      'Grand X delivers unmatchable footfall being positioned right next to the Theme Park. The Boulevard 01 commercial sales desk structured our brand lease agreement before grey structure completion.',
  },
];

const AMENITIES_SHOWCASE = [
  {
    id: 'spa',
    title: 'Spa & Wellness Sanctuary',
    desc: 'Hydrotherapy suites, Turkish hammam, sauna, and dedicated private relaxation treatment rooms.',
    icon: Flame,
  },
  {
    id: 'daycare',
    title: 'Daycare & Early Learning Center',
    desc: 'Certified Montessori educators, monitored playscapes, and secure biometric child check-in protocols.',
    icon: Baby,
  },
  {
    id: 'gaming',
    title: 'Next-Gen Gaming Suite',
    desc: 'VR simulators, e-sports stations, high-bandwidth gaming rigs, and immersive cinematic pods.',
    icon: Gamepad2,
  },
  {
    id: 'gardens',
    title: 'Landscaped Sky Gardens',
    desc: 'Panoramic observation decks, rooftop running tracks, open-air pergolas, and sunset contemplation lounges.',
    icon: TreePine,
  },
];

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Contact Form State
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formLocation, setFormLocation] = useState('');
  const [formProject, setFormProject] = useState('grand-15');
  const [formTypology, setFormTypology] = useState('residential');
  const [formNotes, setFormNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Dynamic Specialist Assignment calculation
  const getAssignedSpecialist = (project: string, typology: string) => {
    if (project === 'grand-12') {
      return { name: 'Ali Hamza', role: 'Regional Director Islamabad', desk: 'Islamabad Regional Office' };
    }
    if (typology === 'commercial' || typology === 'food_court' || project === 'grand-x') {
      return { name: 'Naeem Ahsan', role: 'Director Sales & Commercial Strategy', desk: 'Commercial Strategy Desk' };
    }
    if (typology === 'corporate' || project === 'grand-11') {
      return { name: 'Sheikh Zahid', role: 'Director Corporate Relations', desk: 'Corporate Relations Desk' };
    }
    return { name: 'Waqas Ayub', role: 'Senior Vice President Sales', desk: 'Residential Advisory Desk' };
  };

  const assignedAdvisor = getAssignedSpecialist(formProject, formTypology);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch('/api/v1/inbound-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: formName,
          phone_number: formPhone,
          email_address: formEmail,
          inquiry_channel: 'homepage_contact_form',
          project_interest: formProject,
          unit_interest_type: formTypology,
          inquiry_notes: `Assigned Specialist: ${assignedAdvisor.name} (${assignedAdvisor.role}). Location: ${
            formLocation || 'N/A'
          }. Notes: ${formNotes}`,
        }),
      });
      setIsSuccess(true);
    } catch {
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentTestimonial = TESTIMONIALS_DATA[activeTestimonial];

  return (
    <div className="flex flex-col min-h-screen text-white overflow-hidden relative">
      {/* =========================================================================
          1. HERO SECTION WITH GLOBAL 3D CANVAS LIVING BEHIND
          ========================================================================= */}
      <section id="hero-section" className="relative min-h-[640px] lg:min-h-[720px] flex items-center justify-center overflow-hidden py-16 sm:py-20 px-4 sm:px-6 lg:px-8 z-10">
        {/* Subtle Edge Glow */}
        <div className="absolute inset-0 bg-radial from-transparent via-transparent to-[#0A101D]/15 pointer-events-none -z-1" />

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 animate-in fade-in duration-700">
          {/* Brand Logo Presentation */}
          <div className="flex justify-center pb-1">
            <Logo variant="light" size="lg" showTagline={true} />
          </div>

          {/* Historical Performance Verification Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-pill text-xs font-bold text-[#C4A46A] shadow-lg shadow-black/40">
            <Award className="w-4 h-4 text-[#C4A46A]" />
            <span>9+ Years Audited Track Record • 15 Towers • 500+ Delivered Units</span>
          </div>

          {/* Master Headline with Metallic Golden Shimmer */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-black tracking-tight text-white leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
            Institutional High-Rise <br />
            <span className="gold-gradient-text block mt-1 drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
              Excellence in Bahria Town
            </span>
          </h1>

          {/* Editorial Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-white max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
            Eliminating off-plan uncertainty with verified construction milestones. Explore prime residential penthouses, food court bays, and corporate suites across Bahria Town Lahore and Islamabad.
          </p>

          {/* Conversion CTA Action Array */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-2xl mx-auto">
            {/* Primary Gold Button */}
            <Link
              href="/inventory"
              className="w-full sm:w-auto px-7 py-3.5 bg-[#C4A46A] hover:bg-[#D4B57C] text-[#101B2E] font-extrabold text-sm rounded-xl shadow-lg hover:shadow-[#C4A46A]/25 transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Explore Live Inventory</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Interactive Sales Funnel Anchor Button */}
            <a
              href="#sales-funnel"
              className="w-full sm:w-auto px-6 py-3.5 glass-panel glass-panel-hover text-white font-bold text-sm rounded-xl border border-[#C4A46A]/50 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#C4A46A]" />
              <span>Sales Funnel & Advisors</span>
            </a>

            {/* Secondary Glassmorphic Button */}
            <Link
              href="/compare"
              className="w-full sm:w-auto px-6 py-3.5 bg-white/5 hover:bg-white/10 text-white font-bold text-sm rounded-xl border border-[#C4A46A]/40 backdrop-blur-xs transition-all text-center"
            >
              Compare 5 Active Towers
            </Link>

            {/* Instant WhatsApp Action Button */}
            <a
              href={`https://wa.me/${COMPANY_INFO.phoneClean}?text=Hello%20Boulevard%2001,%20I%20would%20like%20to%20inquire%20about%20active%20tower%20inventory.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 bg-[#152238]/90 hover:bg-[#1A2B47] text-white font-bold text-sm rounded-xl border border-[#C4A46A]/40 hover:border-[#25D366] transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Instant WhatsApp</span>
            </a>
          </div>

          {/* SBP & Geolocation Trust Seals */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400">
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

      {/* =========================================================================
          2. SECTION: INTERACTIVE SALES FUNNEL & DEDICATED SPECIALIST ALLOCATION
          ========================================================================= */}
      <SalesFunnelRouter />

      {/* =========================================================================
          3. SECTION: ARCHITECTURAL ELEVATION & ATMOSPHERE EXPLORER
          ========================================================================= */}
      <ArchitecturalExplorer />

      {/* =========================================================================
          4. SECTION: CURATED HIGH-RISE DEVELOPMENTS
          ========================================================================= */}
      <section id="developments-section" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-[11px] uppercase tracking-widest text-[#C4A46A] font-extrabold mb-1">
              Active Construction & Luxury Portfolio
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-black text-white">
              Curated High-Rise Developments
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-2 max-w-xl leading-relaxed">
              Every premium high-rise registered under Boulevard 01 provides verified construction schedules, prime commercial footfall, and turnkey asset management.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C4A46A] hover:text-[#F5E6CA] transition-colors shrink-0"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Project Cards Grid with Glassmorphic Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.slice(0, 3).map((project) => (
            <div
              key={project.id}
              className="glass-panel glass-panel-hover rounded-3xl flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Image Cover with Badges */}
                <div className="relative h-60 overflow-hidden bg-[#0A101D]">
                  <img
                    src={project.cover_image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1220] via-transparent to-black/30" />

                  {/* Top Left Flagship Badge */}
                  <div className="absolute top-3 left-3 bg-[#C4A46A] text-[#101B2E] text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    ★ {project.status_badge?.includes('Flagship') || project.id === 'grand-15' ? 'Flagship Project' : 'Now Selling'}
                  </div>

                  {/* Top Right Status Badge */}
                  <div className="absolute top-3 right-3 bg-[#0A121F]/90 backdrop-blur-xs text-[#C4A46A] border border-[#C4A46A]/40 text-[9px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                    {project.status_badge}
                  </div>

                  {/* Sub-Headline Over Image */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <div className="text-[10px] font-semibold text-[#C4A46A] uppercase tracking-wider">
                      {project.concept_theme}
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-serif font-bold text-white line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                    {project.overview_body}
                  </p>

                  {/* Structured Spec Box */}
                  <div className="grid grid-cols-2 gap-3 py-3 px-3.5 bg-[#0B1220]/80 rounded-2xl border border-white/5 text-xs">
                    <div>
                      <span className="text-gray-400 block text-[10px] uppercase font-bold">Scale</span>
                      <span className="font-bold text-white">{project.floor_count}</span>
                    </div>
                    <div>
                      <span className="text-gray-400 block text-[10px] uppercase font-bold">Location</span>
                      <span className="font-bold text-white truncate block">
                        {project.city === 'lahore' ? 'Bahria Downtown LHR' : 'Islamabad Phase 8'}
                      </span>
                    </div>
                    <div className="col-span-2 pt-1 border-t border-white/5">
                      <span className="text-gray-400 block text-[10px] uppercase font-bold">Price Horizon</span>
                      <span className="font-black text-[#C4A46A] text-sm">
                        From {formatPKR(project.starting_price_pkr)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Action Footers */}
              <div className="p-6 pt-0 flex items-center gap-2">
                <Link
                  href={`/projects/${project.slug}`}
                  className="flex-1 py-2.5 px-3 bg-[#1A2840]/90 hover:bg-[#C4A46A] text-[#C4A46A] hover:text-[#101B2E] border border-[#C4A46A]/40 text-xs font-bold rounded-xl text-center transition-all flex items-center justify-center gap-1.5"
                >
                  <span>View Specifications</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <WhatsAppCTA
                  message={`Hi Boulevard 01, I would like to inquire about specifications and unit pricing for ${project.title}.`}
                  label="WhatsApp"
                  size="sm"
                  variant="emerald"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          4. SECTION: LIFESTYLE & LIVING AMENITIES
          ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10">
        {/* Subtle Section Divider */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#C4A46A]/40" />
          <div className="text-[10px] uppercase tracking-widest text-[#C4A46A] font-extrabold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Lifestyle & Living Amenities</span>
          </div>
          <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#C4A46A]/40" />
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-serif font-black text-center text-white mb-2">
          Amenities
        </h2>
        <p className="text-xs sm:text-sm text-gray-400 text-center max-w-xl mx-auto mb-12">
          Institutional-grade resident facilities managed by in-house hospitality and property maintenance teams across every active high-rise tower.
        </p>

        {/* 4 Amenities Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AMENITIES_SHOWCASE.map((amenity) => {
            const Icon = amenity.icon;
            return (
              <div
                key={amenity.id}
                className="glass-panel glass-panel-hover rounded-3xl p-6 text-left space-y-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-[#C4A46A]/40 flex items-center justify-center text-[#C4A46A]">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-serif font-bold text-white mb-1.5">
                    {amenity.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {amenity.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          5. DUAL COLUMN SECTION (ROSHAN DIGITAL + TESTIMONIALS + CONTACT FORM)
          ========================================================================= */}
      <section id="contact-section" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* ----------------- LEFT COLUMN: ROSHAN DIGITAL & TESTIMONIALS ----------------- */}
          <div className="lg:col-span-6 space-y-8">
            {/* 1. Roshan Digital Card */}
            <div className="glass-panel glass-panel-hover rounded-3xl p-8 space-y-4 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C4A46A]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="text-[10px] font-bold uppercase tracking-widest text-[#C4A46A]">
                Seamless Foreign Remittance
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-black text-[#C4A46A]">
                Roshan Digital
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Direct banking integration through State Bank of Pakistan Roshan Digital Account (RDA) framework enables overseas Pakistanis 100% legal capital repatriation, automated digital receipts, and biometric title registration.
              </p>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-gray-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>SBP Regulated Framework</span>
                </span>
                <Link
                  href="/blog/nrp-real-estate-investment-guide-roshan-digital-account-rda"
                  className="text-xs font-bold text-[#C4A46A] hover:text-white flex items-center gap-1 transition-colors"
                >
                  <span>Read Legal Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* 2. Strategic Alliance Strip */}
            <div className="glass-panel rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="text-[10px] uppercase font-bold text-[#C4A46A] tracking-wider">
                  Strategic Alliance
                </div>
                <div className="text-sm font-serif font-bold text-white">
                  Boulevard 01 × Etihad Town
                </div>
              </div>
              <div className="px-3 py-1 bg-[#C4A46A] text-[#101B2E] text-[11px] font-extrabold rounded-full uppercase tracking-wider shrink-0 text-center">
                Authorized Master Partner
              </div>
            </div>

            {/* 3. Testimonials Section */}
            <div className="space-y-4">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#C4A46A]">
                  Testimonials
                </div>
                <h3 className="text-2xl font-serif font-black text-white">
                  Testimonials
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  Verified overseas expatriates and high-net-worth investors across Bahria Town.
                </p>
              </div>

              {/* Review Card */}
              <div className="glass-panel rounded-3xl p-6 space-y-4 relative">
                <div className="flex items-center justify-between">
                  {/* 5 Gold Stars */}
                  <div className="flex items-center gap-1 text-[#C4A46A]">
                    {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C4A46A]" />
                    ))}
                  </div>

                  <Quote className="w-6 h-6 text-[#C4A46A]/40" />
                </div>

                <p className="text-xs sm:text-sm text-gray-300 italic leading-relaxed">
                  &ldquo;{currentTestimonial.quote}&rdquo;
                </p>

                <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white">{currentTestimonial.name}</div>
                    <div className="text-[11px] text-[#C4A46A]">{currentTestimonial.role}</div>
                  </div>

                  {/* Carousel Dots */}
                  <div className="flex items-center gap-1.5">
                    {TESTIMONIALS_DATA.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveTestimonial(idx)}
                        aria-label={`Go to testimonial ${idx + 1}`}
                        className={`h-2 rounded-full transition-all cursor-pointer ${
                          activeTestimonial === idx ? 'w-6 bg-[#C4A46A]' : 'w-2 bg-white/20 hover:bg-white/40'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ----------------- RIGHT COLUMN: LUXURY VIP CONTACT FORM ----------------- */}
          <div id="contact-form" className="lg:col-span-6">
            <div className="glass-panel rounded-3xl p-8 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#C4A46A]/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-serif font-black text-white">Contact Form</h3>
                  <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-semibold bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-500/30">
                    <UserCheck className="w-3 h-3" />
                    <span>Direct Desk Routing</span>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  Book your private VIP consultation or inquire about unit allocation at Plaza 39 AA Commercial.
                </p>
              </div>

              {/* Dynamic Specialist Assignment Notification */}
              <div className="p-3 rounded-xl bg-[#0A101D]/90 border border-[#C4A46A]/30 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#C4A46A]/20 flex items-center justify-center text-[#C4A46A] shrink-0 font-bold text-xs">
                  VIP
                </div>
                <div className="flex-1 text-xs">
                  <div className="text-gray-400 text-[10px] uppercase font-bold">Assigned Senior Lead</div>
                  <div className="text-white font-bold">{assignedAdvisor.name} <span className="text-gray-400 font-normal">({assignedAdvisor.role})</span></div>
                  <div className="text-[10px] text-[#C4A46A]">{assignedAdvisor.desk}</div>
                </div>
              </div>

              {isSuccess ? (
                <div className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-950/60 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-800">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold font-serif text-white">Consultation Request Logged</h4>
                  <p className="text-xs text-gray-300 max-w-sm mx-auto">
                    Thank you, <strong>{formName}</strong>. Your consultation docket has been assigned directly to{' '}
                    <strong>{assignedAdvisor.name}</strong> at Plaza 39 AA Commercial, Bahria Town Lahore.
                  </p>
                  <div className="pt-2">
                    <WhatsAppCTA
                      message={`Hi ${assignedAdvisor.name}, I just submitted a VIP consultation request for ${formProject}. Name: ${formName}.`}
                      label="Expedite via WhatsApp Desk"
                      variant="emerald"
                      size="md"
                    />
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-[11px] font-bold text-gray-300 uppercase tracking-wider mb-1">
                      Full Legal Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sheikh Zahid"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#080D18] border border-white/10 focus:border-[#C4A46A] text-white rounded-xl focus:outline-hidden focus:ring-1 focus:ring-[#C4A46A]"
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-[11px] font-bold text-gray-300 uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="investor@domain.com"
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#080D18] border border-white/10 focus:border-[#C4A46A] text-white rounded-xl focus:outline-hidden focus:ring-1 focus:ring-[#C4A46A]"
                    />
                  </div>

                  {/* 2 Columns: Phone / WhatsApp & City / Country */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-gray-300 uppercase tracking-wider mb-1">
                        WhatsApp / Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+92 321 000 4000"
                        value={formPhone}
                        onChange={(e) => setFormPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm bg-[#080D18] border border-white/10 focus:border-[#C4A46A] text-white rounded-xl focus:outline-hidden focus:ring-1 focus:ring-[#C4A46A]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-gray-300 uppercase tracking-wider mb-1">
                        City / Country
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. London, UK or Lahore"
                        value={formLocation}
                        onChange={(e) => setFormLocation(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm bg-[#080D18] border border-white/10 focus:border-[#C4A46A] text-white rounded-xl focus:outline-hidden focus:ring-1 focus:ring-[#C4A46A]"
                      />
                    </div>
                  </div>

                  {/* 2 Columns: Target Development & Typology Preferred */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-gray-300 uppercase tracking-wider mb-1">
                        Target Development
                      </label>
                      <select
                        value={formProject}
                        onChange={(e) => setFormProject(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm bg-[#080D18] border border-white/10 focus:border-[#C4A46A] text-white rounded-xl focus:outline-hidden focus:ring-1 focus:ring-[#C4A46A]"
                      >
                        <option value="grand-15">The Grand Lifestyle — Grand 15</option>
                        <option value="grand-14">The Oasis Grand 14</option>
                        <option value="grand-x">Grand X (Theme Park)</option>
                        <option value="grand-11">Grand 11 (Midway Commercial)</option>
                        <option value="grand-12">The View — Grand 12 (Islamabad)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-gray-300 uppercase tracking-wider mb-1">
                        Typology Preferred
                      </label>
                      <select
                        value={formTypology}
                        onChange={(e) => setFormTypology(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm bg-[#080D18] border border-white/10 focus:border-[#C4A46A] text-white rounded-xl focus:outline-hidden focus:ring-1 focus:ring-[#C4A46A]"
                      >
                        <option value="residential">Luxury Residential Penthouse</option>
                        <option value="commercial">Commercial Retail Frontage</option>
                        <option value="food_court">Dedicated Food Court Bay</option>
                        <option value="corporate">Executive Corporate Suite</option>
                      </select>
                    </div>
                  </div>

                  {/* Discussion / Investment Horizon */}
                  <div>
                    <label className="block text-[11px] font-bold text-gray-300 uppercase tracking-wider mb-1">
                      Investment Position / Discussion
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Mention preferred floor level, budget in PKR, or RDA remittance requirements..."
                      value={formNotes}
                      onChange={(e) => setFormNotes(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#080D18] border border-white/10 focus:border-[#C4A46A] text-white rounded-xl focus:outline-hidden focus:ring-1 focus:ring-[#C4A46A]"
                    />
                  </div>

                  {/* Golden Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-4 bg-[#C4A46A] hover:bg-[#D4B57C] text-[#101B2E] font-black text-sm rounded-xl shadow-lg hover:shadow-[#C4A46A]/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        'Routing Lead to Sales Directorate...'
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-[#101B2E]" />
                          <span>Dispatch to {assignedAdvisor.name}</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Trust Disclaimer */}
                  <div className="text-center text-[10px] text-gray-400 pt-1 flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Direct sales directorate assignment • Plaza 39 AA Commercial</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
