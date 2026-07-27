import { pharmacyECommerce } from './projects/pharmacy-e-commerce';
import { soundEngineer } from './projects/sound-engineer';
import { weatherApp } from './projects/weather-app';

export { pharmacyECommerce, soundEngineer, weatherApp };

export const projects = [weatherApp, soundEngineer, pharmacyECommerce] as const;

export type Project = (typeof projects)[number];
export type ProjectSlug = Project['slug'];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: ProjectSlug): Project {
  const currentIndex = projects.findIndex((project) => project.slug === slug);

  return projects[(currentIndex + 1) % projects.length];
}
