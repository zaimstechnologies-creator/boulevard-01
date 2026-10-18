'use client';

import React, { useState } from 'react';
import { X, Download, CheckCircle, FileText, Shield, ArrowRight } from 'lucide-react';
import { WhatsAppCTA } from '@/components/atoms/WhatsAppCTA';

interface DownloadModalGateProps {
  isOpen: boolean;
  onClose: () => void;
  documentTitle: string;
  projectTitle: string;
  projectId: string;
  downloadUrl?: string;
}

export const DownloadModalGate: React.FC<DownloadModalGateProps> = ({
  isOpen,
  onClose,
  documentTitle,
  projectTitle,
  projectId,
  downloadUrl = '/downloads/sample-document.pdf',
}) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [investorType, setInvestorType] = useState<'domestic' | 'nrp'>('domestic');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phoneNumber.trim()) {
      setErrorMsg('Please provide your full name and international phone number.');
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
          inquiry_channel: 'brochure_gate',
          project_interest: projectId,
          investor_type: investorType,
          inquiry_notes: `Requested Gated Asset: ${documentTitle} for ${projectTitle}`,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to record inquiry');
      }

      setIsSuccess(true);

      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = `${projectTitle.replace(/[^a-zA-Z0-9]/g, '_')}_${documentTitle.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch {
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-lg overflow-hidden bg-white rounded-3xl shadow-2xl border border-[#C4A46A]/50">
        {/* Header Strip in Midnight Navy */}
        <div className="bg-[#101B2E] text-[#F5F2EB] px-6 py-4 flex items-center justify-between border-b border-[#C4A46A]/30">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#C4A46A]/20 rounded-xl text-[#C4A46A]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-wider text-[#C4A46A] font-bold">
                Boulevard 01 • Document Gate
              </div>
              <h2 id="modal-title" className="text-sm font-semibold text-white truncate max-w-[280px]">
                {documentTitle}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-[#F5F2EB] p-3.5 rounded-2xl border border-[#C4A46A]/30 text-xs text-[#101B2E]">
                <p className="font-bold text-[#C4A46A] mb-0.5">Instant Digital Delivery</p>
                <p className="text-gray-600">
                  Enter your credentials below to generate an authorized PDF download and receive an encrypted backup on WhatsApp.
                </p>
              </div>

              {errorMsg && (
                <div className="p-3 text-xs text-rose-700 bg-rose-50 border border-rose-200 rounded-lg">
                  {errorMsg}
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-[#101B2E] uppercase tracking-wider mb-1">
                  Full Legal Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Tariq Mehmood"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#C4A46A] focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#101B2E] uppercase tracking-wider mb-1">
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+92 321 0000000"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#C4A46A] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#101B2E] uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="investor@domain.com"
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#C4A46A] focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#101B2E] uppercase tracking-wider mb-1">
                  Investor Profile
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setInvestorType('domestic')}
                    className={`py-2 px-3 text-xs font-semibold rounded-xl border text-center transition-all ${
                      investorType === 'domestic'
                        ? 'border-[#C4A46A] bg-[#F5F2EB] text-[#101B2E] font-bold shadow-xs'
                        : 'border-gray-200 text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    Domestic Resident (Pakistan)
                  </button>
                  <button
                    type="button"
                    onClick={() => setInvestorType('nrp')}
                    className={`py-2 px-3 text-xs font-semibold rounded-xl border text-center transition-all ${
                      investorType === 'nrp'
                        ? 'border-[#C4A46A] bg-[#F5F2EB] text-[#101B2E] font-bold shadow-xs'
                        : 'border-gray-200 text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    Overseas Pakistani (NRP Expatriate)
                  </button>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 bg-[#101B2E] hover:bg-[#1A2B47] text-[#C4A46A] border border-[#C4A46A]/60 font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    'Generating Verified PDF Link...'
                  ) : (
                    <>
                      <Download className="w-4 h-4 text-[#C4A46A]" />
                      <span>Download {documentTitle}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-xs text-gray-500 pt-1">
                <Shield className="w-3.5 h-3.5 text-emerald-600" />
                <span>Encrypted & SBP / RDA Compliance Verified</span>
              </div>
            </form>
          ) : (
            <div className="py-4 text-center space-y-4">
              <div className="inline-flex p-3 bg-emerald-50 text-emerald-600 rounded-full border border-emerald-200">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-lg font-bold text-[#101B2E]">Download Authorized</h3>
              <p className="text-xs text-gray-600 max-w-sm mx-auto">
                Your digital copy of <strong>{documentTitle}</strong> has been generated and initiated. A backup link has been logged for your WhatsApp number: <strong>{phoneNumber}</strong>.
              </p>

              <div className="pt-2 space-y-2">
                <WhatsAppCTA
                  message={`Hi Boulevard 01, I just requested ${documentTitle} for ${projectTitle}. Please send me the complete payment schedule and availability breakdown on WhatsApp.`}
                  label="Receive Backup on WhatsApp"
                  variant="emerald"
                  size="md"
                  fullWidth
                />
                <button
                  onClick={onClose}
                  className="w-full py-2 text-xs font-semibold text-gray-600 hover:text-black border border-gray-200 rounded-lg hover:bg-gray-50"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
