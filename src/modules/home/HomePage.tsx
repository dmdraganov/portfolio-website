import { AboutSection } from './widgets/AboutSection';
import { CapabilitiesSection } from './widgets/CapabilitiesSection';
import { ContactSection } from './widgets/ContactSection';
import { HomeHero } from './widgets/HomeHero';
import { ProjectsSection } from './widgets/ProjectsSection';
import { ServicesSection } from './widgets/ServicesSection';

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
