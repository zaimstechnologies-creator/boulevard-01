import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { INSIGHTS_ARTICLES } from '@/data/insights';
import { COMPANY_INFO } from '@/data/constants';
import { BookOpen, Clock, Calendar, ArrowRight, User } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Boulevard 01 Insights — Knowledge Hub & NRP Real Estate Investment Guides',
  description:
    'Authoritative property intelligence on Roshan Digital Accounts (RDA), capital repatriation, commercial retail yields, Bahria Town master planning, and Pakistan Origin Card legalities.',
  alternates: {
    canonical: `${COMPANY_INFO.websiteUrl}/blog`,
  },
};

export default function BlogIndexPage() {
  return (
    <div className="bg-[#F5F2EB]/40 dark:bg-[#0A121F] min-h-screen py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#101B2E] dark:bg-[#152238] text-[#C4A46A] border border-[#C4A46A]/30 rounded-full text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Boulevard 01 Knowledge Hub</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-black text-[#101B2E] dark:text-[#F5F2EB]">
            Real Estate Insights & Regulatory Guides
          </h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
            Essential intelligence for domestic wealth creators and overseas Pakistani expatriates navigating off-plan acquisitions, tax compliance, and construction milestones.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {['All Categories', 'Investment Strategy', 'Buyers Guide', 'Project News', 'Company Track Record'].map((cat, idx) => (
            <span
              key={cat}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                idx === 0
                  ? 'bg-[#101B2E] dark:bg-[#C4A46A] text-[#C4A46A] dark:text-[#101B2E] shadow-xs'
                  : 'bg-white dark:bg-[#152238] text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800'
              }`}
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Featured Article Card (NRP Guide) */}
        {INSIGHTS_ARTICLES.length > 0 && (
          <div className="bg-white dark:bg-[#152238] rounded-3xl border border-[#C4A46A]/30 dark:border-[#C4A46A]/20 shadow-xs overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-6 relative h-64 lg:h-auto bg-gray-900">
                <img
                  src={INSIGHTS_ARTICLES[0].cover_image}
                  alt={INSIGHTS_ARTICLES[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#C4A46A] text-[#101B2E] text-[11px] font-bold px-3 py-1 rounded-md uppercase tracking-wider">
                  Featured Intelligence
                </div>
              </div>

              <div className="lg:col-span-6 p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                    <span className="font-bold text-[#C4A46A] uppercase tracking-wider">
                      {INSIGHTS_ARTICLES[0].category}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {INSIGHTS_ARTICLES[0].read_time_minutes} min read
                    </span>
                  </div>

                  <h2 className="text-2xl font-serif font-black text-[#101B2E] dark:text-[#F5F2EB] leading-tight">
                    <Link
                      href={`/blog/${INSIGHTS_ARTICLES[0].slug}`}
                      className="hover:text-[#C4A46A] transition-colors"
                    >
                      {INSIGHTS_ARTICLES[0].title}
                    </Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {INSIGHTS_ARTICLES[0].excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={INSIGHTS_ARTICLES[0].author.avatar}
                      alt={INSIGHTS_ARTICLES[0].author.name}
                      className="w-9 h-9 rounded-full object-cover border border-[#C4A46A]"
                    />
                    <div>
                      <div className="text-xs font-bold text-[#101B2E] dark:text-[#F5F2EB]">
                        {INSIGHTS_ARTICLES[0].author.name}
                      </div>
                      <div className="text-[10px] text-gray-500 dark:text-gray-400">
                        {INSIGHTS_ARTICLES[0].author.role}
                      </div>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${INSIGHTS_ARTICLES[0].slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C4A46A] hover:text-[#E0CFA8] transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INSIGHTS_ARTICLES.slice(1).map((article) => (
            <div
              key={article.id}
              className="bg-white dark:bg-[#152238] rounded-2xl border border-[#C4A46A]/30 dark:border-[#C4A46A]/20 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 bg-gray-100 dark:bg-gray-800">
                  <img
                    src={article.cover_image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#101B2E]/90 backdrop-blur-xs text-[#C4A46A] text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                    {article.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{article.published_at}</span>
                    <span>•</span>
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.read_time_minutes} min read</span>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-[#101B2E] dark:text-[#F5F2EB] line-clamp-2 leading-snug">
                    <Link
                      href={`/blog/${article.slug}`}
                      className="hover:text-[#C4A46A] transition-colors"
                    >
                      {article.title}
                    </Link>
                  </h3>

                  <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src={article.author.avatar}
                    alt={article.author.name}
                    className="w-7 h-7 rounded-full object-cover"
                  />
                  <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">{article.author.name}</span>
                </div>

                <Link
                  href={`/blog/${article.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#C4A46A] hover:underline"
                >
                  <span>Read</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
