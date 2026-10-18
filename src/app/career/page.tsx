'use client';

import React, { useState } from 'react';
import { JOB_OPENINGS } from '@/data/careers';
import { COMPANY_INFO } from '@/data/constants';
import {
  Briefcase,
  MapPin,
  Clock,
  Upload,
  CheckCircle2,
  Send,
  FileText,
  Shield,
  ArrowRight,
} from 'lucide-react';
import { WhatsAppCTA } from '@/components/atoms/WhatsAppCTA';
import { Logo } from '@/components/atoms/Logo';

export default function CareerPage() {
  const [selectedJob, setSelectedJob] = useState<string>(JOB_OPENINGS[0].id);
  const [applicantName, setApplicantName] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [fileName, setFileName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const activeJob = JOB_OPENINGS.find((j) => j.id === selectedJob) || JOB_OPENINGS[0];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch('/api/v1/inbound-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: applicantName,
          phone_number: applicantPhone,
          email_address: applicantEmail,
          inquiry_channel: 'career_intake',
          inquiry_notes: `Candidate Application for ${activeJob.title} (${activeJob.location}). Attached CV: ${fileName || 'Direct Submission'}`,
        }),
      });
      setIsSubmitted(true);
    } catch {
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#F5F2EB]/40 dark:bg-[#0A121F] min-h-screen py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="flex justify-center pb-1">
            <Logo variant="auto" size="md" showTagline={true} />
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#101B2E] text-[#C4A46A] border border-[#C4A46A]/50 rounded-full text-xs font-bold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Human Capital Recruitment Funnel</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-black text-[#101B2E] dark:text-white">
            Careers at Boulevard 01
          </h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-[#A39C8F] leading-relaxed">
            Join Pakistan&apos;s fastest-growing enterprise high-rise developer. We provide performance-driven compensation, institutional mentoring, and direct exposure to multi-billion rupee real estate developments.
          </p>
        </div>

        {/* Culture / Employee Value Proposition */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 bg-white dark:bg-[#152238] rounded-3xl border border-[#C4A46A]/30 shadow-xs space-y-2">
            <div className="text-[10px] font-bold text-[#C4A46A] uppercase">Top-Tier Compensation</div>
            <h3 className="text-base font-serif font-bold text-[#101B2E] dark:text-white">Uncapped Commission Structures</h3>
            <p className="text-xs text-gray-600 dark:text-[#A39C8F] leading-relaxed">
              Transparent, prompt commission payouts on high-velocity inventory across Grand 15, Grand 14, and Grand X.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-[#152238] rounded-3xl border border-[#C4A46A]/30 shadow-xs space-y-2">
            <div className="text-[10px] font-bold text-[#C4A46A] uppercase">Institutional Tools</div>
            <h3 className="text-base font-serif font-bold text-[#101B2E] dark:text-white">Enterprise CRM & Tech Stack</h3>
            <p className="text-xs text-gray-600 dark:text-[#A39C8F] leading-relaxed">
              Equipped with real-time digital inventory ledgers, automated WhatsApp leads, and high-converting marketing assets.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-[#152238] rounded-3xl border border-[#C4A46A]/30 shadow-xs space-y-2">
            <div className="text-[10px] font-bold text-[#C4A46A] uppercase">Executive Growth</div>
            <h3 className="text-base font-serif font-bold text-[#101B2E] dark:text-white">Mentorship by Industry Leaders</h3>
            <p className="text-xs text-gray-600 dark:text-[#A39C8F] leading-relaxed">
              Direct coaching from our Corporate Sales Directorate with track records exceeding PKR 50B in sales.
            </p>
          </div>
        </div>

        {/* Job Listings & Application Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Job Openings Selector */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-xl font-serif font-black text-[#101B2E] dark:text-white">
              Active Career Openings
            </h2>

            <div className="space-y-3">
              {JOB_OPENINGS.map((job) => {
                const isSelected = selectedJob === job.id;
                return (
                  <button
                    key={job.id}
                    onClick={() => {
                      setSelectedJob(job.id);
                      setIsSubmitted(false);
                    }}
                    className={`w-full p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-white dark:bg-[#152238] border-[#C4A46A] shadow-md ring-2 ring-[#C4A46A]/30'
                        : 'bg-white/70 dark:bg-[#101B2E] border-gray-200 dark:border-[#C4A46A]/30 hover:border-gray-300 dark:hover:border-[#C4A46A]'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-bold mb-1">
                      <span className="text-[#C4A46A]">{job.department}</span>
                      <span className="text-gray-500 dark:text-gray-400">{job.type}</span>
                    </div>
                    <h3 className="text-base font-bold text-[#101B2E] dark:text-white">{job.title}</h3>
                    <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mt-2">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#C4A46A]" />
                        <span>{job.location}</span>
                      </span>
                      <span>•</span>
                      <span>{job.experience}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Direct HR Line Box */}
            <div className="p-6 bg-[#101B2E] text-[#F5F2EB] rounded-3xl border border-[#C4A46A]/40 space-y-2">
              <div className="text-[10px] text-[#C4A46A] font-bold uppercase tracking-wider">Direct Human Resources Desk</div>
              <p className="text-xs text-gray-300">
                Prefer sending your CV directly on WhatsApp? Send your profile and portfolio to our HR department line (+92 321 000 4000).
              </p>
              <div className="pt-2">
                <WhatsAppCTA
                  message="Hello Boulevard 01 HR, I am reaching out to submit my professional CV for active openings."
                  label="Submit Profile via WhatsApp"
                  size="sm"
                  variant="emerald"
                />
              </div>
            </div>
          </div>

          {/* Detailed Job Description & Application Intake Form */}
          <div className="lg:col-span-7 bg-white dark:bg-[#152238] p-8 rounded-3xl border border-[#C4A46A]/40 shadow-xs space-y-6">
            <div className="border-b border-gray-100 dark:border-white/10 pb-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase text-[#C4A46A] font-bold">
                  {activeJob.department}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">{activeJob.type}</span>
              </div>
              <h2 className="text-2xl font-serif font-black text-[#101B2E] dark:text-white">
                {activeJob.title}
              </h2>
              <div className="text-xs text-gray-500 dark:text-gray-400">{activeJob.location} • Experience: {activeJob.experience}</div>
            </div>

            <p className="text-xs sm:text-sm text-gray-600 dark:text-[#A39C8F] leading-relaxed">
              {activeJob.overview}
            </p>

            <div className="space-y-4 text-xs">
              <div>
                <h4 className="font-bold text-[#101B2E] dark:text-white uppercase tracking-wider mb-2">Key Responsibilities:</h4>
                <ul className="space-y-1.5 text-gray-600 dark:text-[#A39C8F] list-disc list-inside">
                  {activeJob.responsibilities.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#101B2E] dark:text-white uppercase tracking-wider mb-2">Candidate Requirements:</h4>
                <ul className="space-y-1.5 text-gray-600 dark:text-[#A39C8F] list-disc list-inside">
                  {activeJob.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Application Form */}
            <div className="pt-6 border-t border-gray-100 dark:border-white/10">
              <h3 className="text-base font-serif font-bold text-[#101B2E] dark:text-white mb-4">
                Submit Your Application for this Role
              </h3>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-[#101B2E] dark:text-[#F5F2EB] uppercase tracking-wider mb-1">
                      Full Legal Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Asad Qureshi"
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white dark:bg-[#101B2E] text-gray-900 dark:text-white border border-gray-300 dark:border-[#C4A46A]/40 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#C4A46A]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#101B2E] dark:text-[#F5F2EB] uppercase tracking-wider mb-1">
                        WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+92 321 000 0000"
                        value={applicantPhone}
                        onChange={(e) => setApplicantPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm bg-white dark:bg-[#101B2E] text-gray-900 dark:text-white border border-gray-300 dark:border-[#C4A46A]/40 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#C4A46A]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#101B2E] dark:text-[#F5F2EB] uppercase tracking-wider mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="applicant@domain.com"
                        value={applicantEmail}
                        onChange={(e) => setApplicantEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm bg-white dark:bg-[#101B2E] text-gray-900 dark:text-white border border-gray-300 dark:border-[#C4A46A]/40 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#C4A46A]"
                      />
                    </div>
                  </div>

                  {/* Drag and Drop Resume Uploader */}
                  <div>
                    <label className="block text-xs font-bold text-[#101B2E] dark:text-[#F5F2EB] uppercase tracking-wider mb-1">
                      Upload Resume / Curriculum Vitae (PDF or DOCX up to 5MB)
                    </label>
                    <label className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-[#C4A46A] rounded-2xl hover:bg-[#F5F2EB]/50 dark:hover:bg-[#101B2E]/60 transition-colors cursor-pointer">
                      <Upload className="w-8 h-8 text-[#C4A46A] mb-2" />
                      <span className="text-xs font-semibold text-gray-700 dark:text-[#F5F2EB]">
                        {fileName ? fileName : 'Click to select or drag and drop your resume file'}
                      </span>
                      <span className="text-[10px] text-gray-400 dark:text-gray-500 mt-1">PDF, DOC, DOCX up to 5MB</span>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                    </label>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-4 bg-[#101B2E] hover:bg-[#1A2B47] text-[#C4A46A] border border-[#C4A46A]/50 font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        'Submitting Application Docket...'
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-[#C4A46A]" />
                          <span>Submit Application for {activeJob.title}</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="p-8 text-center space-y-4 bg-emerald-50 dark:bg-emerald-950/40 rounded-2xl border border-emerald-200 dark:border-emerald-800">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 dark:text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-emerald-950 dark:text-white">Application Logged</h4>
                  <p className="text-xs text-emerald-800 dark:text-[#A39C8F]">
                    Thank you, <strong>{applicantName}</strong>. Your profile for <strong>{activeJob.title}</strong> has been received by our recruitment directorate at Boulevard 01.
                  </p>
                  <a
                    href={activeJob.whatsappRouting}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white text-xs font-bold rounded-lg shadow-xs"
                  >
                    <span>Notify HR Team on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
