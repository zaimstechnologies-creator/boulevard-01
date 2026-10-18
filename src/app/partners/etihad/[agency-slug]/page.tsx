import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  Building2,
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Download,
  Award,
  ExternalLink,
} from 'lucide-react';
import { PARTNER_AGENCIES } from '@/data/partners';
import { PROJECTS } from '@/data/projects';
import { COMPANY_INFO, formatPKR } from '@/data/constants';
import { WhatsAppCTA } from '@/components/atoms/WhatsAppCTA';
import { StatusBadge } from '@/components/atoms/StatusBadge';
import { InquiryConsultationForm } from '@/components/organisms/InquiryConsultationForm';
import { Logo } from '@/components/atoms/Logo';

interface PartnerPageProps {
  params: Promise<{ 'agency-slug': string }>;
}

export async function generateStaticParams() {
  return PARTNER_AGENCIES.map((pa) => ({
    'agency-slug': pa.partner_slug,
  }));
}

export async function generateMetadata({ params }: PartnerPageProps): Promise<Metadata> {
  const { 'agency-slug': agencySlug } = await params;
  const agency = PARTNER_AGENCIES.find((pa) => pa.partner_slug === agencySlug);

  if (!agency) {
    return {
      title: 'Partner Not Found — Boulevard 01',
    };
  }

  return {
    title: `${agency.agency_name} — Authorized Strategic Sales Partner | Boulevard 01 × Etihad Town`,
    description: `Official co-branded microsite for ${agency.agency_name} in partnership with Boulevard 01 and Etihad Town. Access verified high-rise inventory and payment plans.`,
    alternates: {
      canonical: `${COMPANY_INFO.websiteUrl}/partners/etihad/${agency.partner_slug}`,
    },
  };
}

export default async function PartnerMicrositePage({ params }: PartnerPageProps) {
  const { 'agency-slug': agencySlug } = await params;
  const agency = PARTNER_AGENCIES.find((pa) => pa.partner_slug === agencySlug);

  if (!agency) {
    notFound();
  }

  // Filter projects associated with this partner
  const partnerProjects = PROJECTS.filter((p) => agency.active_project_ids.includes(p.id));

  const cleanAgentPhone = agency.contact_phone.replace(/[^0-9]/g, '');

  return (
    <div className="bg-[#F5F2EB]/40 dark:bg-[#0A121F] min-h-screen py-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Co-Branded Dual Emblem Banner */}
        <div className="bg-white dark:bg-[#152238] rounded-3xl border border-[#C4A46A]/40 shadow-sm p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-gray-100 dark:border-white/10 pb-8">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              {/* Boulevard 01 Brand */}
              <div className="flex items-center gap-3">
                <Logo variant="auto" size="sm" />
              </div>

              <span className="text-2xl text-[#C4A46A] font-light hidden sm:inline">×</span>

              {/* Partner Agency Brand */}
              <div className="flex items-center gap-3">
                <img
                  src={agency.agent_photo}
                  alt={agency.lead_agent_name}
                  className="w-12 h-12 rounded-xl object-cover border-2 border-[#C4A46A]"
                />
                <div>
                  <div className="text-base font-serif font-black text-[#101B2E] dark:text-white">
                    {agency.agency_name}
                  </div>
                  <div className="text-[10px] text-emerald-700 dark:text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Certified Etihad Sales Partner</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Telephone and Dedicated Partner WhatsApp */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`tel:${cleanAgentPhone}`}
                className="px-4 py-2.5 bg-gray-100 dark:bg-[#101B2E] hover:bg-gray-200 dark:hover:bg-[#1A2B47] text-[#101B2E] dark:text-[#F5F2EB] border border-transparent dark:border-[#C4A46A]/30 text-xs font-bold rounded-xl flex items-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C4A46A]" />
                <span>Call {agency.lead_agent_name}</span>
              </a>

              <WhatsAppCTA
                customNumberClean={cleanAgentPhone}
                message={`Hi ${agency.lead_agent_name} (${agency.agency_name}), I am inquiring through your Boulevard 01 co-branded partner page.`}
                label="WhatsApp Agency Desk"
                size="md"
                variant="emerald"
              />
            </div>
          </div>

          {/* Agency Profile Details */}
          <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-gray-600 dark:text-[#A39C8F]">
            <div>
              <span className="text-gray-400 dark:text-gray-500 block uppercase font-bold text-[10px]">Office Address</span>
              <span className="font-semibold text-gray-800 dark:text-[#F5F2EB]">{agency.office_address}</span>
            </div>
            <div>
              <span className="text-gray-400 dark:text-gray-500 block uppercase font-bold text-[10px]">Official License #</span>
              <span className="font-mono font-bold text-[#C4A46A]">{agency.license_number}</span>
            </div>
            <div>
              <span className="text-gray-400 dark:text-gray-500 block uppercase font-bold text-[10px]">Partner Certification</span>
              <span className="font-bold text-emerald-700 dark:text-emerald-400">{agency.exclusive_commission_rate}</span>
            </div>
          </div>
        </div>

        {/* Agency Lead Bio Strip */}
        <div className="bg-[#101B2E] text-[#F5F2EB] p-8 rounded-3xl border border-[#C4A46A]/30 flex flex-col md:flex-row items-center gap-8">
          <img
            src={agency.agent_photo}
            alt={agency.lead_agent_name}
            className="w-24 h-24 rounded-2xl object-cover border-2 border-[#C4A46A] shrink-0"
          />
          <div className="space-y-2">
            <div className="text-xs uppercase text-[#C4A46A] font-bold tracking-widest">
              Authorized Representative Message
            </div>
            <h2 className="text-xl font-serif font-bold text-white">
              {agency.lead_agent_name} — Principal Broker at {agency.agency_name}
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-3xl">
              &ldquo;{agency.bio} Through our strategic integration with Boulevard 01 and Etihad Town, our clients enjoy direct priority access to verified off-plan units with transparent installment schedules and full title security.&rdquo;
            </p>
          </div>
        </div>

        {/* Authorized Projects for this Partner */}
        <div className="space-y-6">
          <div className="border-b border-gray-200 dark:border-white/10 pb-3">
            <span className="text-xs uppercase text-[#C4A46A] font-bold tracking-wider">
              Exclusive Allocation
            </span>
            <h2 className="text-2xl font-serif font-black text-[#101B2E] dark:text-white">
              Active Developments Represented by {agency.agency_name}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-[#152238] rounded-2xl border border-[#C4A46A]/30 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 bg-gray-100 dark:bg-[#101B2E]">
                    <img
                      src={project.cover_image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <StatusBadge status={project.status} label={project.status_badge} size="sm" />
                    </div>
                  </div>

                  <div className="p-5 space-y-3">
                    <h3 className="text-base font-serif font-bold text-[#101B2E] dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-[#A39C8F] line-clamp-2">
                      {project.hero_headline}
                    </p>

                    <div className="text-xs font-bold text-[#C4A46A]">
                      From {formatPKR(project.starting_price_pkr)}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 flex items-center gap-2">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="flex-1 py-2 px-3 bg-[#101B2E] hover:bg-[#1C2C48] text-white text-xs font-bold rounded-lg text-center transition-colors border border-[#C4A46A]/30"
                  >
                    View Project
                  </Link>

                  <WhatsAppCTA
                    customNumberClean={cleanAgentPhone}
                    message={`Hi ${agency.lead_agent_name}, I want to reserve a unit in ${project.title} through ${agency.agency_name}.`}
                    label="WhatsApp Agent"
                    size="sm"
                    variant="emerald"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Attributed Inbound Lead Capture */}
        <div className="bg-white dark:bg-[#152238] p-8 rounded-3xl border border-[#C4A46A]/40 shadow-xs">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="text-center space-y-2">
              <span className="text-xs uppercase text-[#C4A46A] font-bold tracking-wider">
                Direct Agency Consultation
              </span>
              <h2 className="text-2xl font-serif font-black text-[#101B2E] dark:text-white">
                Inquire Directly with {agency.agency_name}
              </h2>
              <p className="text-xs text-gray-600 dark:text-[#A39C8F]">
                Inquiries submitted through this page are directly assigned to {agency.lead_agent_name} with copy notified to Boulevard 01 corporate sales desk.
              </p>
            </div>

            <InquiryConsultationForm channel="partner_page" />
          </div>
        </div>
      </div>
    </div>
  );
}
