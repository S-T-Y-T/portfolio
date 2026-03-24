import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { MetricsSection } from "@/components/MetricsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { PublicationsSection } from "@/components/PublicationsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { SkillsSection } from "@/components/SkillsSection";
import { EducationSection } from "@/components/EducationSection";
import { CompetitionsSection } from "@/components/CompetitionsSection";
import { CertificatesSection } from "@/components/CertificatesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Portfolio() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <MetricsSection />
        <ProjectsSection />
        <PublicationsSection />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <CompetitionsSection />
        <CertificatesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
