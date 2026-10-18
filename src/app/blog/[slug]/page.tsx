import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  Calendar,
  Clock,
  ArrowRight,
  Share2,
  Building2,
  Download,
  HelpCircle,
  FileCheck,
} from 'lucide-react';
import { INSIGHTS_ARTICLES } from '@/data/insights';
import { PROJECTS } from '@/data/projects';
import { COMPANY_INFO, formatPKR } from '@/data/constants';
import { generateArticleSchema } from '@/lib/seo';
import { WhatsAppCTA } from '@/components/atoms/WhatsAppCTA';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return INSIGHTS_ARTICLES.map((art) => ({
    slug: art.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = INSIGHTS_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: 'Article Not Found — Boulevard 01 Knowledge Hub',
    };
  }

  return {
    title: `${article.title} | Boulevard 01 Insights`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.cover_image, width: 1200, height: 630 }],
      type: 'article',
      publishedTime: article.published_at,
      authors: [article.author.name],
    },
    alternates: {
      canonical: `${COMPANY_INFO.websiteUrl}/blog/${article.slug}`,
    },
  };
}

export default async function ArticleSinglePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = INSIGHTS_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const schemas = generateArticleSchema(article);
  const recommendedProject = article.recommended_project_slug
    ? PROJECTS.find((p) => p.slug === article.recommended_project_slug)
    : null;

  return (
    <article className="bg-[#F5F2EB]/40 dark:bg-[#0A121F] min-h-screen py-12 transition-colors duration-300">
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumb */}
        <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-2">
          <Link href="/" className="hover:text-[#C4A46A]">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#C4A46A]">Insights</Link>
          <span>/</span>
          <span className="text-gray-800 dark:text-gray-200 font-semibold truncate max-w-xs">{article.title}</span>
        </div>

        {/* Article Header */}
        <header className="space-y-4">
          <div className="flex items-center gap-3 text-xs">
            <span className="px-3 py-1 bg-[#101B2E] dark:bg-[#C4A46A] text-[#C4A46A] dark:text-[#101B2E] border border-[#C4A46A]/40 rounded-full font-bold uppercase tracking-wider">
              {article.category}
            </span>
            <span className="text-gray-500 dark:text-gray-400 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {article.published_at}
            </span>
            <span className="text-gray-500 dark:text-gray-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.read_time_minutes} min read
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-[#101B2E] dark:text-white leading-tight">
            {article.title}
          </h1>

          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
            {article.excerpt}
          </p>

          {/* Author Strip */}
          <div className="pt-4 border-t border-b border-gray-200 dark:border-white/10 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-11 h-11 rounded-full object-cover border-2 border-[#C4A46A]"
              />
              <div>
                <div className="text-sm font-bold text-[#101B2E] dark:text-white">{article.author.name}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{article.author.role}</div>
              </div>
            </div>

            <WhatsAppCTA
              message={`Hi ${article.author.name}, I just read your article "${article.title}" and would like to ask a technical question.`}
              label="Consult Author"
              size="sm"
              variant="outline"
            />
          </div>
        </header>

        {/* Cover Image */}
        <div className="relative h-72 sm:h-96 rounded-3xl overflow-hidden bg-gray-900 shadow-md">
          <img
            src={article.cover_image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Main Content Body */}
        <div className="bg-white dark:bg-[#152238] p-8 sm:p-12 rounded-3xl border border-[#C4A46A]/30 dark:border-[#C4A46A]/20 shadow-xs">
          <div className="prose max-w-none text-sm sm:text-base text-gray-700 dark:text-gray-200 leading-relaxed whitespace-pre-line space-y-4">
            {article.content}
          </div>

          {/* Context-Aware Recommended Project Card */}
          {recommendedProject && (
            <div className="my-10 p-6 sm:p-8 bg-[#F5F2EB] dark:bg-[#101B2E] rounded-2xl border border-[#C4A46A]/40 dark:border-[#C4A46A]/30 space-y-4">
              <div className="flex items-center gap-2 text-xs uppercase font-extrabold text-[#C4A46A] tracking-wider">
                <Building2 className="w-4 h-4" />
                <span>Aligned Investment Opportunity</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-serif font-black text-[#101B2E] dark:text-white">
                    {recommendedProject.title}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-300 mt-1 max-w-md">
                    {recommendedProject.hero_headline}
                  </p>
                  <div className="text-sm font-bold text-[#C4A46A] mt-2">
                    Starting from {formatPKR(recommendedProject.starting_price_pkr)} • {recommendedProject.floor_count}
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <Link
                    href={`/projects/${recommendedProject.slug}`}
                    className="px-4 py-2.5 bg-[#101B2E] dark:bg-[#C4A46A] hover:bg-[#1C2C48] dark:hover:bg-[#A9874D] text-white dark:text-[#101B2E] text-xs font-bold rounded-xl transition-all flex items-center gap-1.5"
                  >
                    <span>View Dossier</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <WhatsAppCTA
                    message={`Hi Boulevard 01, I read about ${recommendedProject.title} in your investment article and want to explore unit availability.`}
                    label="WhatsApp"
                    size="sm"
                    variant="emerald"
                  />
                </div>
              </div>
            </div>
          )}

          {/* FAQs Section with FAQPage Schema Alignment */}
          {article.faqs && article.faqs.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-100 dark:border-white/10 space-y-6">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#C4A46A]" />
                <h3 className="text-xl font-serif font-black text-[#101B2E] dark:text-white">
                  Frequently Asked Questions
                </h3>
              </div>

              <div className="space-y-4">
                {article.faqs.map((faq, idx) => (
                  <div key={idx} className="p-5 bg-gray-50 dark:bg-[#101B2E] rounded-2xl border border-gray-100 dark:border-white/10 space-y-2">
                    <h4 className="text-sm font-bold text-[#101B2E] dark:text-[#F5F2EB]">{faq.question}</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Back Link */}
        <div className="pt-4 flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C4A46A] hover:underline"
          >
            <span>← Back to All Insights</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
