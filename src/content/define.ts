import type { StaticImageData } from 'next/image';

export type ContentImage = Readonly<{
  source: StaticImageData;
  alt: string;
  caption: string;
}>;

export type PageSeo = Readonly<{
  title: string;
  description: string;
  image?: Readonly<{
    source: StaticImageData;
    alt: string;
  }>;
}>;

export type ProjectDefinition = Readonly<{
  slug: string;
  name: string;
  seo: PageSeo;
  card: Readonly<{
    summary: string;
    highlights: readonly string[];
    actionLabel: string;
  }>;
  heading: string;
  lead: string;
  role: string;
  story: string;
  stack: readonly string[];
  links: Readonly<{
    demo?: Readonly<{ label: string; href: string }>;
    repository: Readonly<{ label: string; href: string }>;
  }>;
  gallery: readonly [
    ContentImage,
    ContentImage,
    ContentImage,
    ContentImage,
    ...ContentImage[],
  ];
}>;

function assertProject(project: ProjectDefinition): void {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(project.slug)) {
    throw new Error(`Invalid project slug: ${project.slug}.`);
  }

  if (project.gallery.length < 4 || project.gallery.length > 6) {
    throw new Error(`${project.slug} must have 4–6 gallery images.`);
  }

  for (const [name, link] of Object.entries(project.links)) {
    if (!URL.canParse(link.href) || new URL(link.href).protocol !== 'https:') {
      throw new Error(`${project.slug} has an invalid ${name} URL.`);
    }
  }

  for (const image of project.gallery) {
    if (image.alt.trim() === '' || image.caption.trim() === '') {
      throw new Error(`${project.slug} has incomplete gallery copy.`);
    }
  }
}

export function defineProject<const T extends ProjectDefinition>(
  project: T
): T {
  assertProject(project);
  return project;
}
