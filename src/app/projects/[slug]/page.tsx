import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  Building2,
  MapPin,
  Calendar,
  Layers,
  ArrowRight,
  Download,
  Share2,
  ShieldCheck,
  CheckCircle2,
  Video,
  FileText,
  Phone,
} from 'lucide-react';
import { PROJECTS } from '@/data/projects';
import { INVENTORY_UNITS } from '@/data/inventory';
import { COMPANY_INFO, formatPKR } from '@/data/constants';
import { StatusBadge } from '@/components/atoms/StatusBadge';
import { WhatsAppCTA } from '@/components/atoms/WhatsAppCTA';
import { ProjectMetricRow } from '@/components/molecules/ProjectMetricRow';
import { AmenityIcon } from '@/components/atoms/AmenityIcon';
import { generateProjectSchema } from '@/lib/seo';
import { ProjectSingleInteractive } from './ProjectSingleInteractive';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found — Boulevard 01',
    };
  }

  return {
    title: `${project.title} | ${project.hero_headline}`,
    description: project.overview_body.slice(0, 160),
    openGraph: {
      title: `${project.title} — Boulevard 01`,
      description: project.hero_headline,
      images: [{ url: project.cover_image, width: 1200, height: 630 }],
    },
    alternates: {
      canonical: `${COMPANY_INFO.websiteUrl}/projects/${project.slug}`,
    },
  };
}

export default async function ProjectSinglePage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const projectSchema = generateProjectSchema(project);
  const unitsForProject = INVENTORY_UNITS.filter((u) => u.project_id === project.id);

  return (
    <div className="bg-[#F5F2EB]/40 dark:bg-[#0A121F] min-h-screen transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />

      {/* Breadcrumb Strip */}
      <div className="bg-white dark:bg-[#101B2E] border-b border-gray-200 dark:border-white/10 py-3 text-xs text-gray-500 dark:text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
          <Link href="/" className="hover:text-[#C4A46A]">Home</Link>
          <span>/</span>
          <Link href="/projects" className="hover:text-[#C4A46A]">Projects</Link>
          <span>/</span>
          <span className="font-semibold text-[#101B2E] dark:text-[#F5F2EB] truncate">{project.title}</span>
        </div>
      </div>

      {/* Main Interactive Client Presentation */}
      <ProjectSingleInteractive
        project={project}
        unitsForProject={unitsForProject}
      />
    </div>
  );
}
