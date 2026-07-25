import { AboutSection } from './components/AboutSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { ContactSection } from './components/ContactSection';
import { HomeHero } from './components/HomeHero';
import { ProjectsSection } from './components/ProjectsSection';
import { ServicesSection } from './components/ServicesSection';

export function HomePage() {
  return (
    <main className="overflow-clip">
      <HomeHero />
      <ProjectsSection />
      <ServicesSection />
      <AboutSection />
      <CapabilitiesSection />
      <ContactSection />
    </main>
  );
}
