import { HeroSection } from "@/components/HeroSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <CertificationsSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}
