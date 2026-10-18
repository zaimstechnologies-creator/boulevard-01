'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Building2,
  ShieldCheck,
  Award,
  Users2,
  CheckCircle2,
  Send,
  ExternalLink,
  HelpCircle,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { PARTNER_AGENCIES, PARTNER_BENEFITS, PARTNER_FAQS } from '@/data/partners';
import { WhatsAppCTA } from '@/components/atoms/WhatsAppCTA';
import { Logo } from '@/components/atoms/Logo';

export default function StrategicPartnersPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Agency Registration Form state
  const [agencyName, setAgencyName] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [agentName, setAgentName] = useState('');
  const [phone, setPhone] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [territory, setTerritory] = useState('lahore');
  const [yearsActive, setYearsActive] = useState('3-5');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch('/api/v1/inbound-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: `${agentName} (${agencyName})`,
          phone_number: phone,
          email_address: email,
          inquiry_channel: 'partner_page',
          inquiry_notes: `New Agency Application: NTN/License: ${licenseNumber}, Territory: ${territory}, Years Active: ${yearsActive}, WhatsApp: ${whatsapp}`,
        }),
      });
      setFormSubmitted(true);
    } catch {
      setFormSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#F5F2EB]/40 dark:bg-[#0A121F] min-h-screen py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="flex justify-center pb-1">
            <Logo variant="auto" size="md" showTagline={true} />
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#101B2E] text-[#C4A46A] border border-[#C4A46A]/40 rounded-full text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5 text-[#C4A46A]" />
            <span>Boulevard 01 × Etihad Town Strategic Chapter</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-black text-[#101B2E] dark:text-white">
            Authorized Broker & Agency Network
          </h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-[#A39C8F] leading-relaxed">
            Expand your brokerage footprint with verified off-plan high-rises. Benefit from guaranteed 14-day escrow commissions, real-time inventory locks, and co-branded investor landing pages.
          </p>
        </div>

        {/* 4 Value Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PARTNER_BENEFITS.map((b, i) => (
            <div
              key={i}
              className="p-6 bg-white dark:bg-[#152238] rounded-3xl border border-[#C4A46A]/30 shadow-xs hover:border-[#C4A46A] hover:shadow-md transition-all space-y-3"
            >
              <div className="inline-block px-2.5 py-1 bg-[#F5F2EB] dark:bg-[#101B2E] text-[#101B2E] dark:text-[#C4A46A] text-xs font-extrabold rounded-md uppercase tracking-wider border border-[#C4A46A]/40">
                {b.metric}
              </div>
              <h3 className="text-base font-bold text-[#101B2E] dark:text-white font-serif">{b.title}</h3>
              <p className="text-xs text-gray-600 dark:text-[#A39C8F] leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>

        {/* Live Approved Partner Microsites Directory */}
        <div className="bg-white dark:bg-[#152238] rounded-3xl border border-[#C4A46A]/40 shadow-xs p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 dark:border-white/10 pb-4">
            <div>
              <span className="text-xs uppercase text-[#C4A46A] font-bold tracking-wider">
                Co-Branded Microsite Engine
              </span>
              <h2 className="text-2xl font-serif font-black text-[#101B2E] dark:text-white">
                Authorized Agency Showcase
              </h2>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 max-w-sm">
              Approved brokerages receive dedicated URLs with custom lead attribution and agent headshots.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PARTNER_AGENCIES.map((agency) => (
              <div
                key={agency.id}
                className="p-6 rounded-2xl bg-[#F5F2EB]/50 dark:bg-[#101B2E] border border-[#C4A46A]/30 hover:border-[#C4A46A] transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={agency.agent_photo}
                      alt={agency.lead_agent_name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#C4A46A]"
                    />
                    <div>
                      <h3 className="text-sm font-bold text-[#101B2E] dark:text-white">{agency.agency_name}</h3>
                      <div className="text-xs text-gray-600 dark:text-[#A39C8F]">Lead: {agency.lead_agent_name}</div>
                      <div className="text-[10px] text-gray-400 dark:text-gray-500">License: {agency.license_number}</div>
                    </div>
                  </div>

                  <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-3 leading-relaxed">
                    {agency.bio}
                  </p>

                  <div className="text-[11px] font-bold text-[#101B2E] dark:text-[#C4A46A] bg-white dark:bg-[#152238] p-2 rounded-lg border border-[#C4A46A]/40">
                    {agency.exclusive_commission_rate}
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href={`/partners/etihad/${agency.partner_slug}`}
                    className="w-full py-2.5 px-3 bg-[#101B2E] hover:bg-[#1A2B47] text-[#C4A46A] border border-[#C4A46A]/40 text-xs font-bold rounded-xl text-center flex items-center justify-center gap-1.5 transition-all"
                  >
                    <span>View Co-Branded Microsite</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Agency Onboarding Intake Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 bg-white dark:bg-[#152238] p-8 rounded-3xl border border-[#C4A46A]/40 shadow-xs">
            <div className="border-b border-gray-100 dark:border-white/10 pb-4 mb-6">
              <span className="text-xs uppercase text-[#C4A46A] font-bold tracking-wider">
                Partner Onboarding
              </span>
              <h2 className="text-2xl font-serif font-black text-[#101B2E] dark:text-white">
                Apply for Etihad Chapter Certification
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Complete the broker intake credentials below to initiate administrative compliance review.
              </p>
            </div>

            {!formSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#101B2E] dark:text-[#F5F2EB] uppercase tracking-wider mb-1">
                      Agency Legal Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Real Estate Advisors"
                      value={agencyName}
                      onChange={(e) => setAgencyName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white dark:bg-[#101B2E] text-gray-900 dark:text-white border border-gray-300 dark:border-[#C4A46A]/40 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#C4A46A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#101B2E] dark:text-[#F5F2EB] uppercase tracking-wider mb-1">
                      Tax NTN / Broker License *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. ET-LHR-2024-099"
                      value={licenseNumber}
                      onChange={(e) => setLicenseNumber(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white dark:bg-[#101B2E] text-gray-900 dark:text-white border border-gray-300 dark:border-[#C4A46A]/40 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#C4A46A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#101B2E] dark:text-[#F5F2EB] uppercase tracking-wider mb-1">
                      Principal Agent / Director *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Malik Tariq"
                      value={agentName}
                      onChange={(e) => setAgentName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white dark:bg-[#101B2E] text-gray-900 dark:text-white border border-gray-300 dark:border-[#C4A46A]/40 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#C4A46A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#101B2E] dark:text-[#F5F2EB] uppercase tracking-wider mb-1">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="director@agency.pk"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white dark:bg-[#101B2E] text-gray-900 dark:text-white border border-gray-300 dark:border-[#C4A46A]/40 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#C4A46A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#101B2E] dark:text-[#F5F2EB] uppercase tracking-wider mb-1">
                      Office Telephone Line *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+92 42 3570 0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white dark:bg-[#101B2E] text-gray-900 dark:text-white border border-gray-300 dark:border-[#C4A46A]/40 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#C4A46A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#101B2E] dark:text-[#F5F2EB] uppercase tracking-wider mb-1">
                      Inbound WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+92 300 000 0000"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white dark:bg-[#101B2E] text-gray-900 dark:text-white border border-gray-300 dark:border-[#C4A46A]/40 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#C4A46A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#101B2E] dark:text-[#F5F2EB] uppercase tracking-wider mb-1">
                      Primary Operational Territory
                    </label>
                    <select
                      value={territory}
                      onChange={(e) => setTerritory(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white dark:bg-[#101B2E] text-gray-900 dark:text-white border border-gray-300 dark:border-[#C4A46A]/40 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#C4A46A]"
                    >
                      <option value="lahore">Bahria Town Lahore & Etihad Town</option>
                      <option value="islamabad">Bahria Town Islamabad & Rawalpindi</option>
                      <option value="overseas_uk">Overseas Expatriates — United Kingdom</option>
                      <option value="overseas_uae">Overseas Expatriates — UAE & GCC</option>
                      <option value="overseas_na">Overseas Expatriates — USA & Canada</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#101B2E] dark:text-[#F5F2EB] uppercase tracking-wider mb-1">
                      Years of Brokerage Operation
                    </label>
                    <select
                      value={yearsActive}
                      onChange={(e) => setYearsActive(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white dark:bg-[#101B2E] text-gray-900 dark:text-white border border-gray-300 dark:border-[#C4A46A]/40 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#C4A46A]"
                    >
                      <option value="1-3">1 – 3 Years</option>
                      <option value="3-5">3 – 5 Years</option>
                      <option value="5-10">5 – 10 Years</option>
                      <option value="10+">10+ Years Established</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-4 bg-[#101B2E] hover:bg-[#1A2B47] text-[#C4A46A] border border-[#C4A46A]/50 font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      'Submitting Broker Application...'
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#C4A46A]" />
                        <span>Submit Agency Application for Review</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <div className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-200 dark:border-emerald-800">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold font-serif text-[#101B2E] dark:text-white">Application Received</h3>
                <p className="text-xs text-gray-600 dark:text-[#A39C8F] max-w-md mx-auto">
                  Your registration docket for <strong>{agencyName}</strong> has been forwarded to Sheikh Zahid (Director Corporate Relations & Etihad Partnerships at Boulevard 01). Our team will initiate credential validation within 24 business hours.
                </p>
                <div className="pt-2">
                  <WhatsAppCTA
                    message={`Hi Sheikh Zahid, I just submitted an Etihad Chapter broker application for ${agencyName}. Please expedite our review.`}
                    label="Expedite via Partnership Desk"
                    variant="emerald"
                    size="md"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Partner FAQ Accordion */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-[#152238] p-6 rounded-3xl border border-[#C4A46A]/40 shadow-xs space-y-4">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#C4A46A]" />
                <h3 className="text-lg font-serif font-black text-[#101B2E] dark:text-white">
                  Partnership FAQs
                </h3>
              </div>

              <div className="space-y-3">
                {PARTNER_FAQS.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="border border-gray-100 dark:border-[#C4A46A]/20 rounded-xl overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        className="w-full p-3.5 text-left text-xs font-bold text-[#101B2E] dark:text-white flex items-center justify-between gap-2 hover:bg-gray-50 dark:hover:bg-[#101B2E] transition-colors"
                      >
                        <span>{faq.question}</span>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-[#C4A46A] shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="p-3.5 pt-0 text-xs text-gray-600 dark:text-[#A39C8F] leading-relaxed bg-[#F5F2EB]/40 dark:bg-[#101B2E]/60">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Direct Partnership Executive Contact */}
            <div className="bg-[#101B2E] text-[#F5F2EB] p-6 rounded-3xl border border-[#C4A46A]/40 space-y-3">
              <span className="text-[10px] text-[#C4A46A] font-bold uppercase tracking-wider">
                Direct Partnership Liaison
              </span>
              <h4 className="text-base font-serif font-bold text-white">
                Sheikh Zahid — Director Corporate Relations
              </h4>
              <p className="text-xs text-gray-300">
                Overseeing national developer alliances, banking syndicates, and master broker agreements across Lahore and Islamabad.
              </p>
              <div className="pt-2">
                <WhatsAppCTA
                  message="Hello Sheikh Zahid, I represent a real estate brokerage and would like to arrange an in-person meeting at Plaza 39."
                  label="Contact Sheikh Zahid Directly"
                  variant="emerald"
                  size="sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
