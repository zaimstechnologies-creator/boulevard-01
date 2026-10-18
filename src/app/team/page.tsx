import React from 'react';
import { Metadata } from 'next';
import { TEAM_MEMBERS } from '@/data/team';
import { COMPANY_INFO } from '@/data/constants';
import { Phone, Mail, MapPin, Award, Users2, ShieldCheck, MessageCircle } from 'lucide-react';
import { WhatsAppCTA } from '@/components/atoms/WhatsAppCTA';
import { Logo } from '@/components/atoms/Logo';

export const metadata: Metadata = {
  title: 'Corporate Leadership & Sales Directorate — Boulevard 01',
  description:
    'Meet Boulevard 01 executive directors and sales leadership across Lahore and Islamabad. Naeem Ahsan, Sheikh Zahid, Ans Jamil, Waqas Ayub, Khawaja Nadeem Lone, Iqra Nadeem, and Ali Hamza.',
  alternates: {
    canonical: `${COMPANY_INFO.websiteUrl}/team`,
  },
};

export default function TeamPage() {
  const lahoreTeam = TEAM_MEMBERS.filter((m) => m.department === 'Corporate Sales Directorate');
  const islamabadTeam = TEAM_MEMBERS.filter((m) => m.department === 'Islamabad Regional Office');

  return (
    <div className="bg-[#F5F2EB]/40 dark:bg-[#0A121F] min-h-screen py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="flex justify-center pb-1">
            <Logo variant="auto" size="md" showTagline={true} />
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#101B2E] dark:bg-[#C4A46A] text-[#C4A46A] dark:text-[#101B2E] border border-[#C4A46A]/50 rounded-full text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Executive Governance</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-black text-[#101B2E] dark:text-white">
            Corporate Leadership & Sales Directorate
          </h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
            Seasoned capital market strategists, civil engineering controllers, and investor advisory directors dedicated to structural transparency and on-time project execution at Boulevard 01.
          </p>
        </div>

        {/* Corporate Philosophy Banner */}
        <div className="bg-[#101B2E] text-[#F5F2EB] p-8 sm:p-12 rounded-3xl border border-[#C4A46A]/40 shadow-md">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase text-[#C4A46A] font-bold tracking-widest">
              The Boulevard 01 Doctrine
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-black text-white">
              &ldquo;Delivery Dates are Sacred Contracts, Not Approximate Goals.&rdquo;
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Every member of our Sales Directorate operates under strict ethical guidelines. We never oversell unapproved inventory, we maintain self-funded structural liquidity reserves, and we guarantee verifiable milestone updates directly to every property owner.
            </p>
          </div>
        </div>

        {/* Lahore Corporate Sales Directorate Roster */}
        <div className="space-y-6">
          <div className="border-b border-gray-200 dark:border-white/10 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs uppercase text-[#C4A46A] font-bold tracking-wider">
                Plaza 39 AA Commercial, Bahria Town Lahore
              </span>
              <h2 className="text-2xl font-serif font-black text-[#101B2E] dark:text-white">
                Corporate Sales Directorate (Lahore HQ)
              </h2>
            </div>
            <div className="text-xs font-semibold text-gray-500 dark:text-gray-400">
              Active: Grand 15 • Grand 14 • Grand X • Grand 11
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lahoreTeam.map((member) => (
              <div
                key={member.id}
                className="bg-white dark:bg-[#152238] rounded-3xl border border-[#C4A46A]/40 dark:border-[#C4A46A]/30 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-64 bg-gray-100 dark:bg-gray-900">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-lg font-serif font-bold text-white">{member.name}</h3>
                      <div className="text-xs text-[#C4A46A] font-semibold">{member.role}</div>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                      {member.bio}
                    </p>

                    <div className="space-y-1 text-xs text-gray-500 dark:text-gray-400 pt-2 border-t border-gray-100 dark:border-white/10">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-[#C4A46A]" />
                        <span className="truncate">{member.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-3.5 h-3.5 text-[#C4A46A]" />
                        <span className="truncate">{member.email}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <WhatsAppCTA
                    message={`Hello ${member.name}, I would like to schedule a private consultation regarding Boulevard 01 developments in Bahria Town.`}
                    label={`Speak with ${member.name.split(' ')[0]}`}
                    size="sm"
                    variant="emerald"
                    fullWidth
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Islamabad Regional Directorate */}
        <div className="space-y-6">
          <div className="border-b border-gray-200 dark:border-white/10 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs uppercase text-[#C4A46A] font-bold tracking-wider">
                Phase 8 Business District, Bahria Town Islamabad
              </span>
              <h2 className="text-2xl font-serif font-black text-[#101B2E] dark:text-white">
                Twin Cities Regional Directorate
              </h2>
            </div>
            <div className="text-xs font-semibold text-gray-500 dark:text-gray-400">
              Anchor Development: The View — Grand 12 (5-in-1 Hybrid)
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {islamabadTeam.map((member) => (
              <div
                key={member.id}
                className="bg-white dark:bg-[#152238] rounded-3xl border border-[#C4A46A]/40 dark:border-[#C4A46A]/30 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-64 bg-gray-100 dark:bg-gray-900">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-lg font-serif font-bold text-white">{member.name}</h3>
                      <div className="text-xs text-[#C4A46A] font-semibold">{member.role}</div>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                      {member.bio}
                    </p>

                    <div className="space-y-1 text-xs text-gray-500 dark:text-gray-400 pt-2 border-t border-gray-100 dark:border-white/10">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-[#C4A46A]" />
                        <span className="truncate">{member.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-3.5 h-3.5 text-[#C4A46A]" />
                        <span className="truncate">{member.email}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <WhatsAppCTA
                    message={`Hello ${member.name}, I am interested in corporate leasing or investing in The View — Grand 12 Islamabad.`}
                    label={`Connect with ${member.name.split(' ')[0]}`}
                    size="sm"
                    variant="emerald"
                    fullWidth
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
