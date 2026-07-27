import { notFound } from 'next/navigation';

import { getProject, projects } from '@/content/projects';
import { CaseStudyPage } from '@/modules/case-study/CaseStudyPage';

import { toPageMetadata } from '../../_lib/metadata';

type ProjectPageProps = Readonly<{
  params: Promise<{ slug: string }>;
}>;

export const dynamicParams = false;

async function resolveProject({ params }: ProjectPageProps) {
  const { slug } = await params;
  return getProject(slug);
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const project = await resolveProject({ params });

  return project === undefined
    ? {}
    : toPageMetadata({
        path: `/projects/${project.slug}`,
        seo: project.seo,
      });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await resolveProject({ params });

  if (project === undefined) notFound();

  return <CaseStudyPage project={project} />;
}
