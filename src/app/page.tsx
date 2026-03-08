import Header from "@/components/header";
import HeroSection from "@/components/heroSection";
import EducationSection from "@/components/educationSection";
import AboutSection from "@/components/aboutSection";
import ExperienceSection from "@/components/experienceSection";
import ProjectsSection from "@/components/projectsSection";
import ScrollToTop from "@/components/scrollToTop";

export default function Home() {
  return (
    <div className="portfolio-shell">
      <ScrollToTop />
      <Header />
      <main className="snap-y snap-mandatory md:pl-72">
        <HeroSection />
        <EducationSection />
        {/* <AboutSection /> */}
        <ExperienceSection />
        <ProjectsSection />
      </main>
    </div>
  );
}
