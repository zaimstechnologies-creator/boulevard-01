'use client';

import React from 'react';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Building,
  Award,
  Globe2,
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/constants';
import { PROJECTS } from '@/data/projects';
import { WhatsAppCTA } from '@/components/atoms/WhatsAppCTA';
import { Logo } from '@/components/atoms/Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#101B2E] text-[#F5F2EB] border-t-2 border-[#D9B878]/60">
      {/* Upper Audited Metrics Strip */}
      <div className="border-b border-[#D9B878]/20 bg-[#0A121F]/80 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <div className="text-3xl font-extrabold text-[#D9B878] font-serif">9+ Years</div>
            <div className="text-xs uppercase tracking-wider text-gray-300 font-bold">Continuous Operation</div>
            <p className="text-[11px] text-gray-400">Pioneering Bahria Town high-rises</p>
          </div>
          <div className="space-y-1">
            <div className="text-3xl font-extrabold text-[#D9B878] font-serif">500+ Units</div>
            <div className="text-xs uppercase tracking-wider text-gray-300 font-bold">Successfully Delivered</div>
            <p className="text-[11px] text-gray-400">To resident owners & investors</p>
          </div>
          <div className="space-y-1">
            <div className="text-3xl font-extrabold text-[#D9B878] font-serif">15 High-Rises</div>
            <div className="text-xs uppercase tracking-wider text-gray-300 font-bold">Completed Developments</div>
            <p className="text-[11px] text-gray-400">Institutional structural grade</p>
          </div>
          <div className="space-y-1">
            <div className="text-3xl font-extrabold text-[#D9B878] font-serif">100% On-Time</div>
            <div className="text-xs uppercase tracking-wider text-gray-300 font-bold">Scheduled Handover Record</div>
            <p className="text-[11px] text-gray-400">Zero project abandonment history</p>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <Logo variant="light" size="md" showTagline={true} />
            </Link>

            <p className="text-xs text-gray-300 leading-relaxed max-w-md pt-2">
              Boulevard 01 is an enterprise property development and investment conglomerate operating across Bahria Town Lahore, Islamabad, and Etihad Town chapters. Built on the enduring doctrine of &ldquo;Landmark of trust&rdquo;.
            </p>

            <div className="pt-2">
              <WhatsAppCTA
                message="Hello Boulevard 01, I would like to schedule an executive consultation regarding active developments."
                label="Direct WhatsApp Sales Desk"
                size="md"
                variant="emerald"
              />
            </div>
          </div>

          {/* Active Towers Portfolio */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-[#D9B878] font-bold mb-4 flex items-center gap-2">
              <Building className="w-4 h-4 text-[#D9B878]" />
              <span>Active Towers</span>
            </h3>
            <ul className="space-y-2.5 text-xs text-gray-300">
              {PROJECTS.map((proj) => (
                <li key={proj.id}>
                  <Link
                    href={`/projects/${proj.slug}`}
                    className="hover:text-[#D9B878] transition-colors block"
                  >
                    <span className="font-semibold text-white">{proj.title}</span>
                    <span className="block text-[11px] text-gray-400 capitalize">{proj.location_text.split(',')[0]}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Platform Nodes */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-[#D9B878] font-bold mb-4 flex items-center gap-2">
              <Globe2 className="w-4 h-4 text-[#D9B878]" />
              <span>Investor Tools</span>
            </h3>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <Link href="/inventory" className="hover:text-[#D9B878] transition-colors">
                  Live Unit Inventory Sheet
                </Link>
              </li>
              <li>
                <Link href="/compare" className="hover:text-[#D9B878] transition-colors">
                  Parametric Tower Comparison
                </Link>
              </li>
              <li>
                <Link href="/strategic-partners" className="hover:text-[#D9B878] transition-colors">
                  Etihad Town Broker Portal
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#D9B878] transition-colors">
                  NRP Roshan Digital Guide
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-[#D9B878] transition-colors">
                  Sales Directorate Roster
                </Link>
              </li>
              <li>
                <Link href="/career" className="hover:text-[#D9B878] transition-colors">
                  Careers & Recruitment
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#D9B878] transition-colors">
                  Office Geolocation & Booking
                </Link>
              </li>
            </ul>
          </div>

          {/* Corporate Offices & Operating Hours */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-wider text-[#D9B878] font-bold mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#D9B878]" />
              <span>Headquarters</span>
            </h3>

            <div className="space-y-2 text-xs text-gray-300">
              <div>
                <strong className="text-white block">Lahore Corporate HQ:</strong>
                <span>{COMPANY_INFO.address.street}, {COMPANY_INFO.address.locality}, {COMPANY_INFO.address.city}</span>
              </div>

              <div>
                <strong className="text-white block">Islamabad Regional Desk:</strong>
                <span>Phase 8 Business District (Opp. Statue of Liberty), Bahria Town Islamabad</span>
              </div>

              <div className="pt-2 space-y-1">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#D9B878]" />
                  <a href={`tel:${COMPANY_INFO.phoneClean}`} className="text-white hover:text-[#D9B878]">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#D9B878]" />
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-gray-300 hover:text-white truncate">
                    {COMPANY_INFO.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#D9B878]" />
                  <span className="text-gray-400">{COMPANY_INFO.operatingHours}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Notice */}
        <div className="mt-12 pt-8 border-t border-[#D9B878]/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>
            © 2026 {COMPANY_INFO.legalName} — {COMPANY_INFO.tagline}. All Rights Reserved. State Bank of Pakistan RDA Remittance Compliant.
          </p>
          <div className="flex items-center gap-4 text-gray-400">
            <span>Verified Building NOCs</span>
            <span>•</span>
            <span>Etihad Town Chapter Authorized</span>
            <span>•</span>
            <span>NADRA Biometric Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
