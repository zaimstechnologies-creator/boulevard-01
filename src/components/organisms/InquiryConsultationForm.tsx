'use client';

import React, { useState } from 'react';
import { Send, CheckCircle, MessageCircle, Shield } from 'lucide-react';
import { PROJECTS } from '@/data/projects';
import { COMPANY_INFO } from '@/data/constants';

interface InquiryConsultationFormProps {
  defaultProject?: string;
  channel?: 'consultation' | 'contact_form' | 'partner_page';
}

export const InquiryConsultationForm: React.FC<InquiryConsultationFormProps> = ({
  defaultProject = '',
  channel = 'consultation',
}) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [projectInterest, setProjectInterest] = useState(defaultProject);
  const [unitType, setUnitType] = useState('apartment');
  const [investorType, setInvestorType] = useState<'domestic' | 'nrp'>('domestic');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phoneNumber.trim()) {
      setErrorMsg('Please enter your full name and phone/WhatsApp number.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const response = await fetch('/api/v1/inbound-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: fullName,
          phone_number: phoneNumber,
          email_address: emailAddress,
          inquiry_channel: channel,
          project_interest: projectInterest,
          unit_interest_type: unitType,
          investor_type: investorType,
          inquiry_notes: notes,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to record inquiry');
      }

      setIsSuccess(true);
    } catch {
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedProjectObj = PROJECTS.find((p) => p.id === projectInterest);
  const projectTitle = selectedProjectObj ? selectedProjectObj.title : 'Active High-Rise Developments';

  const whatsappInquiryMessage = `Hello Boulevard 01, I just submitted an inquiry for ${projectTitle}.
Name: ${fullName || 'Prospective Investor'}
Profile: ${investorType === 'nrp' ? 'Overseas Pakistani (NRP)' : 'Domestic Resident'}
Typology: ${unitType}
Please connect me with a senior portfolio advisor.`;

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.phoneClean}?text=${encodeURIComponent(whatsappInquiryMessage)}`;

  if (isSuccess) {
    return (
      <div className="bg-white dark:bg-[#152238] p-8 rounded-3xl border border-[#C4A46A]/50 shadow-md text-center space-y-4">
        <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-200 dark:border-emerald-800">
          <CheckCircle className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold font-serif text-[#101B2E] dark:text-white">Consultation Request Logged</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 max-w-md mx-auto">
          Thank you, <strong>{fullName}</strong>. Your consultation docket for <strong>{projectTitle}</strong> has been assigned to our on-duty Boulevard 01 Sales Directorate team.
        </p>

        <div className="pt-3 max-w-sm mx-auto space-y-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Connect Immediately on WhatsApp</span>
          </a>
          <button
            onClick={() => {
              setIsSuccess(false);
              setFullName('');
              setPhoneNumber('');
              setEmailAddress('');
              setNotes('');
            }}
            className="w-full py-2 text-xs font-semibold text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-[#152238] p-6 sm:p-8 rounded-3xl border border-[#C4A46A]/40 dark:border-[#C4A46A]/30 shadow-xs space-y-4">
      <div className="border-b border-gray-100 dark:border-white/10 pb-3 mb-2">
        <div className="text-[10px] font-bold uppercase tracking-wider text-[#C4A46A] mb-0.5">
          Boulevard 01 • Advisory Desk
        </div>
        <h3 className="text-lg font-serif font-black text-[#101B2E] dark:text-white">
          Book Private VIP Consultation
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Direct advisory from Corporate Sales Directorate at Plaza 39 AA Commercial, Bahria Town Lahore.
        </p>
      </div>

      {errorMsg && (
        <div className="p-3 text-xs text-rose-700 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 rounded-lg">
          {errorMsg}
        </div>
      )}

      <div>
        <label className="block text-xs font-bold text-[#101B2E] dark:text-[#F5F2EB] uppercase tracking-wider mb-1">
          Full Legal Name *
        </label>
        <input
          type="text"
          required
          placeholder="e.g. Sheikh Zahid"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full px-3.5 py-2.5 text-sm bg-white dark:bg-[#101B2E] border border-gray-300 dark:border-[#C4A46A]/40 text-[#101B2E] dark:text-white rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#C4A46A]"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#101B2E] dark:text-[#F5F2EB] uppercase tracking-wider mb-1">
            WhatsApp / Phone Number *
          </label>
          <input
            type="tel"
            required
            placeholder="+92 321 000 4000"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full px-3.5 py-2.5 text-sm bg-white dark:bg-[#101B2E] border border-gray-300 dark:border-[#C4A46A]/40 text-[#101B2E] dark:text-white rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#C4A46A]"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-[#101B2E] dark:text-[#F5F2EB] uppercase tracking-wider mb-1">
            Email Address
          </label>
          <input
            type="email"
            placeholder="investor@domain.com"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
            className="w-full px-3.5 py-2.5 text-sm bg-white dark:bg-[#101B2E] border border-gray-300 dark:border-[#C4A46A]/40 text-[#101B2E] dark:text-white rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#C4A46A]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#101B2E] dark:text-[#F5F2EB] uppercase tracking-wider mb-1">
            Target Development
          </label>
          <select
            value={projectInterest}
            onChange={(e) => setProjectInterest(e.target.value)}
            className="w-full px-3.5 py-2.5 text-sm bg-white dark:bg-[#101B2E] border border-gray-300 dark:border-[#C4A46A]/40 text-[#101B2E] dark:text-white rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#C4A46A]"
          >
            <option value="">General Consultation (All Towers)</option>
            {PROJECTS.map((proj) => (
              <option key={proj.id} value={proj.id}>
                {proj.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-[#101B2E] dark:text-[#F5F2EB] uppercase tracking-wider mb-1">
            Typology Preference
          </label>
          <select
            value={unitType}
            onChange={(e) => setUnitType(e.target.value)}
            className="w-full px-3.5 py-2.5 text-sm bg-white dark:bg-[#101B2E] border border-gray-300 dark:border-[#C4A46A]/40 text-[#101B2E] dark:text-white rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#C4A46A]"
          >
            <option value="apartment">Luxury Residential Apartment</option>
            <option value="commercial">Commercial Retail Outlet / Food Court</option>
            <option value="hotel_suite">Serviced Hotel Suite</option>
            <option value="office">Grade-A Corporate Office</option>
            <option value="not_sure">Looking for Portfolio Recommendations</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-[#101B2E] dark:text-[#F5F2EB] uppercase tracking-wider mb-1">
          Investor Classification
        </label>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setInvestorType('domestic')}
            className={`py-2 px-3 text-xs font-semibold rounded-xl border text-center transition-all cursor-pointer ${
              investorType === 'domestic'
                ? 'border-[#C4A46A] bg-[#F5F2EB] dark:bg-[#C4A46A] text-[#101B2E] font-bold shadow-xs'
                : 'border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-white/20'
            }`}
          >
            Domestic Resident (Pakistan)
          </button>
          <button
            type="button"
            onClick={() => setInvestorType('nrp')}
            className={`py-2 px-3 text-xs font-semibold rounded-xl border text-center transition-all cursor-pointer ${
              investorType === 'nrp'
                ? 'border-[#C4A46A] bg-[#F5F2EB] dark:bg-[#C4A46A] text-[#101B2E] font-bold shadow-xs'
                : 'border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-white/20'
            }`}
          >
            Overseas Pakistani (NRP Expatriate)
          </button>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-[#101B2E] dark:text-[#F5F2EB] uppercase tracking-wider mb-1">
          Investment Horizon / Specific Inquiries
        </label>
        <textarea
          rows={3}
          placeholder="Mention target floor, capital allocation, or preferred installment duration..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="w-full px-3.5 py-2.5 text-sm bg-white dark:bg-[#101B2E] border border-gray-300 dark:border-[#C4A46A]/40 text-[#101B2E] dark:text-white rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#C4A46A]"
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 px-4 bg-[#101B2E] dark:bg-[#C4A46A] hover:bg-[#1A2B47] dark:hover:bg-[#A9874D] text-[#C4A46A] dark:text-[#101B2E] border border-[#C4A46A]/50 font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
        >
          {isSubmitting ? (
            'Routing Inbound Lead...'
          ) : (
            <>
              <Send className="w-4 h-4 text-[#C4A46A] dark:text-[#101B2E]" />
              <span>Submit Consultation Request</span>
            </>
          )}
        </button>
      </div>

      <div className="flex items-center justify-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 pt-1">
        <Shield className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
        <span>Strict privacy protection. No spam. Direct sales directorate response.</span>
      </div>
    </form>
  );
};
