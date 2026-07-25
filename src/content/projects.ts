import { soundEngineer } from './projects/sound-engineer';
import { weatherApp } from './projects/weather-app';

export { soundEngineer, weatherApp };

export const projects = [weatherApp, soundEngineer] as const;

export type Project = (typeof projects)[number];
export type ProjectSlug = Project['slug'];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: ProjectSlug): Project {
  return projects.find((project) => project.slug !== slug) ?? projects[0];
}
