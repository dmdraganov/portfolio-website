import type { Project } from '@/content/projects';
import { CaseContactSection } from './widgets/CaseContactSection';
import { CaseGallery } from './widgets/CaseGallery';
import { CaseHero } from './widgets/CaseHero';
import { CaseOverview } from './widgets/CaseOverview';

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
