import type { Project } from '@/content/projects';
import { CaseContactSection } from './components/CaseContactSection';
import { CaseGallery } from './components/CaseGallery';
import { CaseHero } from './components/CaseHero';
import { CaseOverview } from './components/CaseOverview';

export function CaseStudyPage({ project }: Readonly<{ project: Project }>) {
  return (
    <main className="overflow-clip pt-[clamp(2rem,6vw,6rem)]">
      <CaseHero project={project} />
      <CaseOverview project={project} />
      <CaseGallery project={project} />
      <CaseContactSection project={project} />
    </main>
  );
}
